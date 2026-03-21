// Memory Palace 3D — Three.js first-person walker
// Supports GLTF/GLB, OBJ, FBX, and basic Quake BSP
// Exposes window.MP3D for use by memoryPalace.js

import * as THREE from 'https://esm.sh/three@0.160.0';
import { PointerLockControls } from 'https://esm.sh/three@0.160.0/examples/jsm/controls/PointerLockControls.js';
import { GLTFLoader }  from 'https://esm.sh/three@0.160.0/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader }   from 'https://esm.sh/three@0.160.0/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader }   from 'https://esm.sh/three@0.160.0/examples/jsm/loaders/MTLLoader.js';
import { FBXLoader }   from 'https://esm.sh/three@0.160.0/examples/jsm/loaders/FBXLoader.js';

const MP3D = {
  // ── state ──────────────────────────────────────────────────────────────────
  scene: null, camera: null, renderer: null,
  controls: null, raycaster: null, clock: null,
  animId: null, container: null,

  // movement
  keys: {},
  moveSpeed: 8,
  gravity: -12,
  velY: 0,
  onGround: false,
  eyeHeight: 1.7,

  // pin placement
  placingPin: false,
  pinMeshes: [],
  activePinIndex: 0,

  // loaded scene objects (for raycasting)
  collidables: [],
  mapObject: null,

  // ── init ───────────────────────────────────────────────────────────────────
  init(containerId) {
    const container = document.getElementById(containerId);
    if (!container || this.renderer) return;
    this.container = container;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a1a2e);
    this.scene.fog = new THREE.FogExp2(0x1a1a2e, 0.012);

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.05, 800);
    this.camera.position.set(0, this.eyeHeight, 5);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(this.renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambient);
    const sun = new THREE.DirectionalLight(0xffffff, 1.5);
    sun.position.set(30, 60, 30);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.far = 400;
    this.scene.add(sun);
    const fill = new THREE.DirectionalLight(0x8888ff, 0.3);
    fill.position.set(-10, 5, -10);
    this.scene.add(fill);

    // Floor grid (shown until map is loaded)
    this._addDefaultEnvironment();

    // PointerLock controls
    this.controls = new PointerLockControls(this.camera, container);
    this.raycaster = new THREE.Raycaster();
    this.clock = new THREE.Clock();

    this._bindEvents(container);
    this._animate();
    this._handleResize(container);
  },

  destroy() {
    cancelAnimationFrame(this.animId);
    this._unbindEvents();
    if (this.renderer) {
      this.renderer.dispose();
      this.renderer.domElement.remove();
      this.renderer = null;
    }
    this.scene = null; this.camera = null; this.controls = null;
    this.collidables = []; this.pinMeshes = []; this.mapObject = null;
    this.keys = {};
  },

  // ── default environment ────────────────────────────────────────────────────
  _addDefaultEnvironment() {
    // Grid floor
    const grid = new THREE.GridHelper(200, 40, 0x444466, 0x333355);
    this.scene.add(grid);
    // Invisible collision floor
    const floorGeo = new THREE.PlaneGeometry(200, 200);
    const floorMat = new THREE.MeshLambertMaterial({ visible: false });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.name = 'floor';
    this.scene.add(floor);
    this.collidables.push(floor);
  },

  // ── map loading ────────────────────────────────────────────────────────────
  loadFile(file, onProgress) {
    const ext = file.name.split('.').pop().toLowerCase();
    const url = URL.createObjectURL(file);
    this._setStatus(`Loading ${file.name}…`);

    if (ext === 'glb' || ext === 'gltf') {
      new GLTFLoader().load(url, gltf => {
        this._addMapObject(gltf.scene);
        URL.revokeObjectURL(url);
        this._setStatus('');
      }, p => onProgress?.(p), e => this._setStatus('Load error: ' + e.message));

    } else if (ext === 'obj') {
      new OBJLoader().load(url, obj => {
        this._addMapObject(obj);
        URL.revokeObjectURL(url);
        this._setStatus('');
      }, p => onProgress?.(p), e => this._setStatus('Load error: ' + e.message));

    } else if (ext === 'fbx') {
      new FBXLoader().load(url, fbx => {
        fbx.scale.setScalar(0.01); // FBX units are usually cm
        this._addMapObject(fbx);
        URL.revokeObjectURL(url);
        this._setStatus('');
      }, p => onProgress?.(p), e => this._setStatus('Load error: ' + e.message));

    } else if (ext === 'bsp') {
      file.arrayBuffer().then(buf => {
        const obj = this._parseQuakeBSP(buf);
        if (obj) { this._addMapObject(obj); this._setStatus(''); }
        else this._setStatus('BSP parse failed — try exporting to OBJ via Noesis/Blender');
        URL.revokeObjectURL(url);
      });

    } else {
      this._setStatus(`Unsupported format ".${ext}". Try GLB, OBJ, FBX, or BSP.`);
    }
  },

  _addMapObject(obj) {
    if (this.mapObject) this.scene.remove(this.mapObject);
    this.collidables = [];

    // Auto-center and scale
    const box = new THREE.Box3().setFromObject(obj);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) obj.scale.setScalar(50 / maxDim); // normalize to ~50 units

    obj.position.sub(center.multiplyScalar(obj.scale.x));
    obj.position.y = 0;

    // Enable shadows + collect collidables
    obj.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        this.collidables.push(child);
      }
    });

    this.scene.add(obj);
    this.mapObject = obj;

    // Place camera on top of the floor
    const newBox = new THREE.Box3().setFromObject(obj);
    this.camera.position.set(0, newBox.min.y + this.eyeHeight + 0.5, 0);
    this._renderPinMeshes(); // re-add pins if any
  },

  // ── minimal Quake BSP parser (BSP version 29/30) ──────────────────────────
  _parseQuakeBSP(buffer) {
    try {
      const view = new DataView(buffer);
      const version = view.getInt32(0, true);
      if (version !== 29 && version !== 30) return null; // not Quake BSP

      // Lump offsets: 0=entities,1=planes,2=miptex,3=vertices,4=vis,
      //               5=nodes,6=texinfo,7=faces,8=lighting,9=clipnodes,
      //               10=leaves,11=marksurfaces,12=edges,13=surfedges,14=models
      const lumpOff = i => view.getInt32(4 + i * 8, true);
      const lumpLen = i => view.getInt32(8 + i * 8, true);

      // Read vertices
      const vOff = lumpOff(3), vLen = lumpLen(3);
      const vCount = vLen / 12;
      const verts = [];
      for (let i = 0; i < vCount; i++) {
        const o = vOff + i * 12;
        // Quake uses Y-up with Z-forward: convert to Three.js Y-up
        verts.push(new THREE.Vector3(
          view.getFloat32(o,     true),
          view.getFloat32(o + 8, true),
          -view.getFloat32(o + 4, true)
        ));
      }

      // Read edges
      const eOff = lumpOff(12), eCount = lumpLen(12) / 4;
      const edges = [];
      for (let i = 0; i < eCount; i++) {
        edges.push([view.getUint16(eOff + i*4, true), view.getUint16(eOff + i*4+2, true)]);
      }

      // Read surfedges
      const seOff = lumpOff(13), seCount = lumpLen(13) / 4;
      const surfedges = [];
      for (let i = 0; i < seCount; i++) surfedges.push(view.getInt32(seOff + i*4, true));

      // Read faces → triangulate
      const fOff = lumpOff(7), fCount = lumpLen(7) / 20;
      const positions = [];
      for (let f = 0; f < fCount; f++) {
        const fo = fOff + f * 20;
        const firstEdge = view.getInt32(fo + 4, true);
        const numEdges  = view.getInt16(fo + 8, true);
        const faceVerts = [];
        for (let e = 0; e < numEdges; e++) {
          const se = surfedges[firstEdge + e];
          const vi = se >= 0 ? edges[se][0] : edges[-se][1];
          faceVerts.push(verts[vi]);
        }
        // Fan triangulate
        for (let i = 1; i < faceVerts.length - 1; i++) {
          const v0 = faceVerts[0], v1 = faceVerts[i], v2 = faceVerts[i+1];
          positions.push(v0.x,v0.y,v0.z, v1.x,v1.y,v1.z, v2.x,v2.y,v2.z);
        }
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geo.computeVertexNormals();
      const mat = new THREE.MeshLambertMaterial({ color: 0x8888aa, side: THREE.DoubleSide });
      return new THREE.Mesh(geo, mat);
    } catch(e) {
      console.warn('BSP parse error', e);
      return null;
    }
  },

  // ── pin management ─────────────────────────────────────────────────────────
  _renderPinMeshes() {
    // Remove old pin meshes
    this.pinMeshes.forEach(m => this.scene.remove(m));
    this.pinMeshes = [];
    const palace = window.MP?.activePalace?.();
    if (!palace) return;
    palace.pins.forEach((pin, i) => {
      if (pin.pos3d == null) return;
      const mesh = this._makePinMesh(i + 1, i === this.activePinIndex);
      mesh.position.set(pin.pos3d.x, pin.pos3d.y, pin.pos3d.z);
      mesh.userData.pinIndex = i;
      this.scene.add(mesh);
      this.pinMeshes.push(mesh);
    });
  },

  _makePinMesh(num, active) {
    const group = new THREE.Group();
    // Sphere marker
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 12, 8),
      new THREE.MeshLambertMaterial({ color: active ? 0xf6e05e : 0x667eea, emissive: active ? 0xd69e2e : 0x2244aa })
    );
    sphere.position.y = 0.18;
    group.add(sphere);
    // Vertical pole
    const pole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 0.8, 6),
      new THREE.MeshLambertMaterial({ color: 0xffffff })
    );
    pole.position.y = 0.4;
    group.add(pole);
    return group;
  },

  updateActivePinIndex(index) {
    this.activePinIndex = index;
    this._renderPinMeshes();
  },

  startPinPlacement() {
    this.placingPin = true;
    this._setStatus('Move to the spot and press [P] or click to place a pin');
  },

  _placePinAtCursor() {
    if (!this.placingPin) return;
    // Cast a ray forward from camera
    const rc = new THREE.Raycaster();
    rc.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    const hits = rc.intersectObjects(this.collidables, true);
    const palace = window.MP?.activePalace?.();
    if (!palace) return;

    let pos;
    if (hits.length > 0) {
      pos = hits[0].point.clone();
      pos.y += 0.05; // slightly above surface
    } else {
      // Place 5 units ahead if nothing hit
      pos = this.camera.position.clone().add(
        this.camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(5)
      );
    }

    palace.pins.push({
      id: window.MP?.uid?.() || ('_' + Math.random().toString(36).slice(2)),
      pos3d: { x: pos.x, y: pos.y, z: pos.z },
      image: '', desc: '', info: '', front: '', back: ''
    });
    this.activePinIndex = palace.pins.length - 1;
    this.placingPin = false;
    window.MP?.save?.();
    this._renderPinMeshes();
    window.MP?.refreshFlashcard?.();
    this._setStatus('');
  },

  // ── click pin selection ────────────────────────────────────────────────────
  _trySelectPin(event) {
    if (!this.controls?.isLocked) return;
    const rc = new THREE.Raycaster();
    rc.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    const pinObjs = this.pinMeshes.flatMap(g => { const c = []; g.traverse(x => { if (x.isMesh) c.push(x); }); return c; });
    const hits = rc.intersectObjects(pinObjs, false);
    if (hits.length > 0) {
      let obj = hits[0].object;
      while (obj.parent && obj.userData.pinIndex == null) obj = obj.parent;
      const idx = obj.userData.pinIndex ?? hits[0].object.parent?.userData?.pinIndex;
      if (idx != null) {
        this.activePinIndex = idx;
        window.MP?.selectPin?.(idx);
      }
    }
  },

  // ── animation / movement ───────────────────────────────────────────────────
  _animate() {
    this.animId = requestAnimationFrame(() => this._animate());
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this._move(dt);
    this._billboardPins();
    this.renderer?.render(this.scene, this.camera);
  },

  _move(dt) {
    if (!this.controls?.isLocked) return;
    const speed = this.moveSpeed * (this.keys['ShiftLeft'] || this.keys['ShiftRight'] ? 2 : 1);
    const dir = new THREE.Vector3();
    if (this.keys['KeyW'] || this.keys['ArrowUp'])    dir.z -= 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown'])  dir.z += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft'])  dir.x -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) dir.x += 1;
    dir.normalize().multiplyScalar(speed * dt);
    this.controls.moveForward(dir.z);
    this.controls.moveRight(dir.x);

    // Simple gravity + ground check
    this.velY += this.gravity * dt;
    this.camera.position.y += this.velY * dt;

    // Floor check via downward raycast
    const downRC = new THREE.Raycaster(this.camera.position.clone(), new THREE.Vector3(0, -1, 0), 0, this.eyeHeight + 0.5);
    const downHits = downRC.intersectObjects(this.collidables, true);
    if (downHits.length > 0) {
      const groundY = downHits[0].point.y + this.eyeHeight;
      if (this.camera.position.y <= groundY) {
        this.camera.position.y = groundY;
        this.velY = 0;
        this.onGround = true;
      }
    } else {
      // Check absolute minimum
      if (this.camera.position.y < this.eyeHeight) {
        this.camera.position.y = this.eyeHeight;
        this.velY = 0;
        this.onGround = true;
      }
    }

    // Jump
    if ((this.keys['Space']) && this.onGround) {
      this.velY = 6;
      this.onGround = false;
    }
  },

  _billboardPins() {
    // Make pin groups always face camera (billboard effect)
    this.pinMeshes.forEach(g => {
      g.lookAt(this.camera.position.x, g.position.y, this.camera.position.z);
    });
  },

  // ── helpers ────────────────────────────────────────────────────────────────
  _setStatus(msg) {
    const el = document.getElementById('mp3d-status');
    if (el) { el.textContent = msg; el.style.display = msg ? 'block' : 'none'; }
  },

  _handleResize(container) {
    this._resizeObs = new ResizeObserver(() => {
      if (!this.renderer || !this.camera) return;
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.camera.aspect = container.clientWidth / container.clientHeight;
      this.camera.updateProjectionMatrix();
    });
    this._resizeObs.observe(container);
  },

  // ── events ─────────────────────────────────────────────────────────────────
  _boundKeyDown: null,
  _boundKeyUp: null,
  _boundClick: null,

  _bindEvents(container) {
    this._boundKeyDown = e => {
      this.keys[e.code] = true;
      if (e.code === 'KeyP') this._placePinAtCursor();
      if (e.code === 'KeyE') this._trySelectPin(e);
      // Don't intercept when typing
      if (['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (e.code === 'ArrowLeft')  { e.preventDefault(); window.MP?.prevPin?.(); }
      if (e.code === 'ArrowRight') { e.preventDefault(); window.MP?.nextPin?.(); }
    };
    this._boundKeyUp = e => { this.keys[e.code] = false; };
    this._boundClick = e => {
      if (!this.controls?.isLocked) {
        this.controls?.lock();
      } else {
        if (this.placingPin) this._placePinAtCursor();
        else this._trySelectPin(e);
      }
    };
    document.addEventListener('keydown', this._boundKeyDown);
    document.addEventListener('keyup',   this._boundKeyUp);
    container.addEventListener('click',  this._boundClick);

    this.controls.addEventListener('lock',   () => this._setStatus(''));
    this.controls.addEventListener('unlock', () => this._setStatus('Click to look around · WASD move · Space jump · [P] place pin · ← → switch cards'));
    this._setStatus('Click to look around · WASD move · Space jump · [P] place pin · ← → switch cards');
  },

  _unbindEvents() {
    if (this._boundKeyDown) document.removeEventListener('keydown', this._boundKeyDown);
    if (this._boundKeyUp)   document.removeEventListener('keyup',   this._boundKeyUp);
    if (this._resizeObs)    this._resizeObs.disconnect();
  },

  teleportToPin(index) {
    const palace = window.MP?.activePalace?.();
    const pin = palace?.pins?.[index];
    if (!pin?.pos3d) return;
    // Stand a few units back from the pin
    const dir = new THREE.Vector3()
      .subVectors(this.camera.position, new THREE.Vector3(pin.pos3d.x, pin.pos3d.y, pin.pos3d.z))
      .normalize().multiplyScalar(3);
    this.camera.position.set(pin.pos3d.x + dir.x, pin.pos3d.y + this.eyeHeight, pin.pos3d.z + dir.z);
  }
};

window.MP3D = MP3D;
