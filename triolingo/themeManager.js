// Theme Manager for Triolingo
// Version 44 - Added Damacy Items theme (Katamari Damacy stickers)
class ThemeManager {
  constructor() {
    this.currentTheme = 'white';
    this.currentFont = 'default'; // Default font
    this.pipeWidth = 28; // Width of pipes for grid system
    this.customFonts = {
      rugeboogie: {
        name: 'Ruge Boogie',
        file: 'fonts/RugeBoogie-Regular.ttf',
        family: 'RugeBoogie',
        format: 'truetype'
      },
      crazycurlz: {
        name: 'Crazy Curlz',
        file: 'fonts/Crazy Curlz.ttf',
        family: 'CrazyCurlz',
        format: 'truetype'
      },
      ikeasans: {
        name: 'IKEA Sans',
        file: 'fonts/ikea.ttf',
        family: 'IKEASans',
        format: 'truetype'
      },
      curlyqs: {
        name: 'Curly Qs',
        file: 'fonts/CurlyQs.ttf',
        family: 'CurlyQs',
        format: 'truetype'
      },
      bmwglobal: {
        name: 'BMW Type Global',
        file: 'fonts/BMW Type Global Regular.ttf',
        family: 'BMWTypeGlobal',
        format: 'truetype'
      },
      neuehaas: {
        name: 'Neue Haas Grotesk',
        file: 'fonts/Neue Haas Grotesk Display Pro 75 Bold.ttf',
        family: 'NeueHaasGrotesk',
        format: 'truetype'
      },
      introscript: {
        name: 'Intro Script Demo',
        file: 'fonts/IntroScriptDemo-Medium.otf',
        family: 'IntroScriptDemo',
        format: 'opentype'
      },
      minecraft: {
        name: 'Minecraft',
        file: 'fonts/MinecraftRegular-Bmg3.otf',
        family: 'Minecraft',
        format: 'opentype'
      },
      volvonovum: {
        name: 'Volvo Novum',
        file: 'fonts/Volvo Novum Light.ttf',
        family: 'VolvoNovum',
        format: 'truetype'
      },
      udmarugo: {
        name: 'Udmarugo',
        file: 'fonts/FOT-UDMarugo_SmallPr6-H.otf',
        family: 'Udmarugo',
        format: 'opentype'
      },
      mario64: {
        name: 'Mario Font 64',
        file: 'fonts/marioFont 64.ttf',
        family: 'MarioFont64',
        format: 'truetype'
      },
      mariov3: {
        name: 'Mario Font v3',
        file: 'fonts/MARIO_Font_v3_Solid.otf',
        family: 'MarioFontv3',
        format: 'opentype'
      },
      ckchick: {
        name: 'CK Chick',
        file: 'fonts/CK Chick.ttf',
        family: 'CKChick',
        format: 'truetype'
      },
      oldenglish: {
        name: 'Monotype Old English',
        file: 'fonts/Monotype Old English Text W01.ttf',
        family: 'MonotypeOldEnglish',
        format: 'truetype'
      }
    };
    this.fonts = {
      default: {
        name: 'Default',
        family: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      },
      sans: {
        name: 'Sans Serif',
        family: '"Arial", "Helvetica", sans-serif'
      },
      serif: {
        name: 'Serif',
        family: '"Times New Roman", Times, serif'
      },
      monospace: {
        name: 'Monospace',
        family: '"Courier New", Courier, monospace'
      },
      roboto: {
        name: 'Roboto',
        family: '"Roboto", sans-serif'
      },
      opensans: {
        name: 'Open Sans',
        family: '"Open Sans", sans-serif'
      },
      lato: {
        name: 'Lato',
        family: '"Lato", sans-serif'
      },
      ...Object.fromEntries(
        Object.entries(this.customFonts).map(([key, font]) => [
          key,
          { name: font.name, family: `"${font.family}"` }
        ])
      )
    };
    this.themes = {
      white: {
        name: 'Plain White',
        description: 'Clean white interface',
        colors: {
          '--bg-primary': '#ffffff',
          '--bg-secondary': '#f9fafb',
          '--bg-hover': '#f3f4f6',
          '--text-primary': '#111827',
          '--text-secondary': '#6b7280',
          '--border-color': '#e5e7eb',
          '--accent': '#58cc02',
          '--accent-hover': '#46a302',
          '--error': '#ff4b4b',
          '--success': '#58cc02'
        }
      },
      dark: {
        name: 'Dark',
        description: 'Easy on the eyes',
        colors: {
          '--bg-primary': '#1a1a2e',
          '--bg-secondary': '#16213e',
          '--bg-hover': '#0f3460',
          '--text-primary': '#e4e4e7',
          '--text-secondary': '#a1a1aa',
          '--border-color': '#3f3f46',
          '--accent': '#58cc02',
          '--accent-hover': '#46a302',
          '--error': '#ef4444',
          '--success': '#22c55e'
        }
      },
      blue: {
        name: 'Ocean Blue',
        description: 'Calm blue tones',
        colors: {
          '--bg-primary': '#f0f9ff',
          '--bg-secondary': '#e0f2fe',
          '--bg-hover': '#bae6fd',
          '--text-primary': '#0c4a6e',
          '--text-secondary': '#0369a1',
          '--border-color': '#7dd3fc',
          '--accent': '#0ea5e9',
          '--accent-hover': '#0284c7',
          '--error': '#f43f5e',
          '--success': '#10b981'
        }
      },
      forest: {
        name: 'Forest Green',
        description: 'Natural green palette',
        colors: {
          '--bg-primary': '#f0fdf4',
          '--bg-secondary': '#dcfce7',
          '--bg-hover': '#bbf7d0',
          '--text-primary': '#14532d',
          '--text-secondary': '#166534',
          '--border-color': '#86efac',
          '--accent': '#22c55e',
          '--accent-hover': '#16a34a',
          '--error': '#ef4444',
          '--success': '#16a34a'
        }
      },
      purples: {
        name: 'Royal Purple',
        description: 'Elegant purple theme',
        colors: {
          '--bg-primary': '#faf5ff',
          '--bg-secondary': '#f3e8ff',
          '--bg-hover': '#e9d5ff',
          '--text-primary': '#581c87',
          '--text-secondary': '#7e22ce',
          '--border-color': '#d8b4fe',
          '--accent': '#9333ea',
          '--accent-hover': '#7c3aed',
          '--error': '#ef4444',
          '--success': '#10b981'
        }
      },
      sunset: {
        name: 'Warm Sunset',
        description: 'Warm orange and pink tones',
        colors: {
          '--bg-primary': '#fff7ed',
          '--bg-secondary': '#ffedd5',
          '--bg-hover': '#fed7aa',
          '--text-primary': '#7c2d12',
          '--text-secondary': '#9a3412',
          '--border-color': '#fdba74',
          '--accent': '#f97316',
          '--accent-hover': '#ea580c',
          '--error': '#dc2626',
          '--success': '#059669'
        }
      },
      cherryBlossom: {
        name: 'Cherry Blossom',
        description: 'Beautiful cherry blossom watercolor painting',
        colors: {
          '--bg-primary': '#fdf2f8',
          '--bg-secondary': '#fce7f3',
          '--bg-hover': '#fbcfe8',
          '--text-primary': '#701a75',
          '--text-secondary': '#86198f',
          '--border-color': '#f5d0fe',
          '--accent': '#c026d3',
          '--accent-hover': '#a21caf',
          '--error': '#ef4444',
          '--success': '#10b981'
        },
        backgroundImage: 'static',
        staticImage: 'cherry_blossom_watercolor.png'
      },
      gelatoBeach: {
        name: 'Gelato Beach',
        description: 'Super Mario Sunshine Gelato Beach scene',
        colors: {
          '--bg-primary': '#fef3c7',
          '--bg-secondary': '#fde68a',
          '--bg-hover': '#fcd34d',
          '--text-primary': '#78350f',
          '--text-secondary': '#92400e',
          '--border-color': '#fbbf24',
          '--accent': '#d97706',
          '--accent-hover': '#b45309',
          '--error': '#dc2626',
          '--success': '#059669'
        },
        backgroundImage: 'static',
        staticImage: 'super-mario-sunshine-overview-gelato-beach.jpg'
      },
      skybox1: {
        name: 'Skybox 1',
        description: 'Super Mario Sunshine beautiful skybox',
        colors: {
          '--bg-primary': '#2e1065',
          '--bg-secondary': '#6b21a8',
          '--bg-hover': '#7c3aed',
          '--text-primary': '#fef3c7',
          '--text-secondary': '#fde68a',
          '--border-color': '#fbbf24',
          '--accent': '#fbbf24',
          '--accent-hover': '#f59e0b',
          '--error': '#f87171',
          '--success': '#34d399'
        },
        backgroundImage: 'static',
        staticImage: 'the-skyboxes-of-super-mario-sunshine-are-beautiful-v0-8wrk9rcl4wqe1.png'
      },
      skybox2: {
        name: 'Skybox 2',
        description: 'Super Mario Sunshine skybox variant',
        colors: {
          '--bg-primary': '#0369a1',
          '--bg-secondary': '#0284c7',
          '--bg-hover': '#0ea5e9',
          '--text-primary': '#fef3c7',
          '--text-secondary': '#fde68a',
          '--border-color': '#fbbf24',
          '--accent': '#fbbf24',
          '--accent-hover': '#f59e0b',
          '--error': '#f87171',
          '--success': '#34d399'
        },
        backgroundImage: 'static',
        staticImage: 'the-skyboxes-of-super-mario-sunshine-are-beautiful-v0-p1gawucl4wqe1.png'
      },
      skybox3: {
        name: 'Skybox 3',
        description: 'Super Mario Sunshine skybox - WebP',
        colors: {
          '--bg-primary': '#0a0a0a',
          '--bg-secondary': '#1a1a1a',
          '--bg-hover': '#2a2a2a',
          '--text-primary': '#ffffff',
          '--text-secondary': '#e5e5e5',
          '--border-color': '#404040',
          '--accent': '#ffffff',
          '--accent-hover': '#d4d4d4',
          '--error': '#ef4444',
          '--success': '#10b981'
        },
        backgroundImage: 'static',
        staticImage: 'the-skyboxes-of-super-mario-sunshine-are-beautiful-v0-knxraxcl4wqe1.webp'
      },
      ikea: {
        name: 'IKEA',
        description: 'Iconic blue and yellow Swedish design with official IKEA branding',
        colors: {
          '--bg-primary': '#0058a3',
          '--bg-secondary': '#004a8a',
          '--bg-hover': '#003d6f',
          '--text-primary': '#ffffff',
          '--text-secondary': '#e0e0e0',
          '--border-color': '#ffda00',
          '--accent': '#ffda00',
          '--accent-hover': '#e5c800',
          '--error': '#ff4444',
          '--success': '#00d68f'
        },
        backgroundImage: 'static',
        staticImage: 'ikea_theme/ikea-background-enhanced.svg'
      },
      japanese: {
        name: 'Japanese Stickers',
        description: 'Colorful Japanese-themed sticker collage',
        colors: {
          '--bg-primary': '#fff5f5',
          '--bg-secondary': '#ffe4e4',
          '--bg-hover': '#ffd4d4',
          '--text-primary': '#1a1a1a',
          '--text-secondary': '#666666',
          '--border-color': '#e8e8e8',
          '--accent': '#ff6b6b',
          '--accent-hover': '#ff5252',
          '--error': '#ff4b4b',
          '--success': '#4ecdc4'
        },
        backgroundImage: 'stickers'
      },
      damacy: {
        name: 'Damacy Items',
        description: 'Katamari Damacy item stickers collage',
        colors: {
          '--bg-primary': '#f0f8ff',  // Alice blue (calming light blue)
          '--bg-secondary': '#e6f3ff',
          '--bg-hover': '#d0ebff',
          '--text-primary': '#1a1a1a',
          '--text-secondary': '#666666',
          '--border-color': '#d0e8ff',
          '--accent': '#87ceeb',  // Sky blue
          '--accent-hover': '#4682b4',
          '--error': '#ff4b4b',
          '--success': '#4ecdc4'
        },
        backgroundImage: 'damacy'
      },
      polkadot: {
        name: 'Polkadot Party',
        description: 'Black background with red polkadots',
        colors: {
          '--bg-primary': '#000000',
          '--bg-secondary': '#1a1a1a',
          '--bg-hover': '#2a2a2a',
          '--text-primary': '#ffffff',
          '--text-secondary': '#cccccc',
          '--border-color': '#ff4444',
          '--accent': '#ff4444',
          '--accent-hover': '#cc3333',
          '--error': '#ff6666',
          '--success': '#ff4444'
        },
        backgroundImage: 'polkadot'
      },
      coins: {
        name: 'Old Coins',
        description: 'Black background with vintage coins collage',
        colors: {
          '--bg-primary': '#000000',
          '--bg-secondary': '#1a1a1a',
          '--bg-hover': '#2a2a2a',
          '--text-primary': '#ffffff',
          '--text-secondary': '#cccccc',
          '--border-color': '#d4af37',
          '--accent': '#d4af37',
          '--accent-hover': '#b8960c',
          '--error': '#ff6b6b',
          '--success': '#4ecdc4'
        },
        backgroundImage: 'coins'
      },
      pipes: {
        name: 'Pipes',
        description: 'Mario-style pipes in red, blue, yellow, and green',
        colors: {
          '--bg-primary': '#87CEEB',  // Light blue sky
          '--bg-secondary': '#5BA3C6',
          '--bg-hover': '#4A8FB5',
          '--text-primary': '#ffffff',
          '--text-secondary': '#cccccc',
          '--border-color': '#00aa00',
          '--accent': '#ff6600',
          '--accent-hover': '#e65c00',
          '--error': '#ff4b4b',
          '--success': '#4ecdc4'
        },
        backgroundImage: 'pipes'
      }
    };
  }

  async init() {
    await this.loadTheme();
    await this.loadCustomFonts();
    this.applyTheme(this.currentTheme);
  }

  applyTheme(themeName) {
    const theme = this.themes[themeName];
    if (!theme) return;

    const root = document.documentElement;
    for (const [color, value] of Object.entries(theme.colors)) {
      root.style.setProperty(color, value);
    }

    // Handle sticker background for Japanese theme
    if (theme.backgroundImage === 'stickers') {
      this.generateStickerBackground();
    } else if (theme.backgroundImage === 'damacy') {
      this.generateDamacyBackground();
    } else if (theme.backgroundImage === 'polkadot') {
      this.applyPolkadotTheme();
    } else if (theme.backgroundImage === 'coins') {
      this.applyCoinsTheme();
    } else if (theme.backgroundImage === 'pipes') {
      this.applyPipesTheme();
    } else if (theme.backgroundImage === 'static') {
      this.applyStaticBackground(theme.staticImage);
    } else {
      this.clearStickerBackground();
    }

    this.currentTheme = themeName;
  }

  setTheme(themeName) {
    if (!this.themes[themeName]) return;
    this.applyTheme(themeName);
    this.saveTheme(themeName);
  }

  getThemeNames() {
    return Object.keys(this.themes).map(key => ({
      id: key,
      name: this.themes[key].name,
      description: this.themes[key].description
    }));
  }

  getFontNames() {
    return Object.keys(this.fonts).map(key => ({
      id: key,
      name: this.fonts[key].name
    }));
  }

  getFont(fontId) {
    return this.fonts[fontId] || this.fonts.default;
  }

  getTheme(themeName) {
    return this.themes[themeName];
  }

  applyFont(fontId) {
    const font = this.getFont(fontId);
    document.documentElement.style.setProperty('--font-family', font.family);
  }

  async loadCustomFonts() {
    const fontPromises = Object.entries(this.customFonts).map(([id, font]) => {
      return new Promise((resolve, reject) => {
        // URL-encode the font file path to handle spaces and special characters
        const encodedFilePath = font.file.split('/').map(segment => encodeURIComponent(segment)).join('/');
        const fontFace = new FontFace(font.family, `url(${encodedFilePath})`, {
          format: font.format
        });

        fontFace.load()
          .then(loaded => {
            document.fonts.add(loaded);
            console.log(`✅ Loaded font: ${font.name}`);
            resolve();
          })
          .catch(err => {
            console.warn(`⚠️ Failed to load font: ${font.name}`, err);
            resolve(); // Don't reject - continue with other fonts
          });
      });
    });

    await Promise.all(fontPromises);
  }

  async loadTheme() {
    try {
      if (window.electronAPI) {
        const settings = await window.electronAPI.loadSettings();
        if (settings && settings.theme) {
          this.currentTheme = settings.theme;
        }
        if (settings && settings.font) {
          this.currentFont = settings.font;
          this.applyFont(this.currentFont);
        }
      } else {
        const saved = localStorage.getItem('triolingoSettings');
        if (saved) {
          const settings = JSON.parse(saved);
          if (settings.theme) {
            this.currentTheme = settings.theme;
          }
          if (settings.font) {
            this.currentFont = settings.font;
            this.applyFont(this.currentFont);
          }
        }
      }
    } catch (err) {
      console.error('Could not load theme:', err);
      this.currentTheme = 'white';
    }
  }

  async saveTheme(themeName) {
    try {
      let settings = {};

      if (window.electronAPI) {
        const existing = await window.electronAPI.loadSettings();
        settings = existing || {};
        settings.theme = themeName;
        await window.electronAPI.saveSettings(settings);
      } else {
        const saved = localStorage.getItem('triolingoSettings');
        settings = saved ? JSON.parse(saved) : {};
        settings.theme = themeName;
        localStorage.setItem('triolingoSettings', JSON.stringify(settings));
      }
    } catch (err) {
      console.error('Could not save theme:', err);
    }
  }

  async saveFont(fontId) {
    try {
      let settings = {};

      if (window.electronAPI) {
        const existing = await window.electronAPI.loadSettings();
        settings = existing || {};
        settings.font = fontId;
        await window.electronAPI.saveSettings(settings);
      } else {
        const saved = localStorage.getItem('triolingoSettings');
        settings = saved ? JSON.parse(saved) : {};
        settings.font = fontId;
        localStorage.setItem('triolingoSettings', JSON.stringify(settings));
      }
      this.currentFont = fontId;
      this.applyFont(fontId);
    } catch (err) {
      console.error('Could not save font:', err);
    }
  }

  // For sound manager to share settings
  async saveInSettings(key, value) {
    try {
      let settings = {};

      if (window.electronAPI) {
        const existing = await window.electronAPI.loadSettings();
        settings = existing || {};
        settings[key] = value;
        await window.electronAPI.saveSettings(settings);
      } else {
        const saved = localStorage.getItem('triolingoSettings');
        settings = saved ? JSON.parse(saved) : {};
        settings[key] = value;
        localStorage.setItem('triolingoSettings', JSON.stringify(settings));
      }
    } catch (err) {
      console.error('Could not save setting:', err);
    }
  }

  // Generate Japanese sticker background
  generateStickerBackground() {
    // Remove old stickers if any
    this.clearStickerBackground();

    const app = document.getElementById('app');
    if (!app) {
      console.error('Could not find #app element for sticker background');
      return;
    }

    // Get list of images
    const images = this.getStickerImages();
    if (images.length === 0) {
      console.error('No sticker images found');
      return;
    }

    // Calculate how many stickers we need (density)
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const area = viewportWidth * viewportHeight;
    const stickerSize = 80 * 80; // Average sticker area
    const targetCount = Math.floor(area / stickerSize * 8.0); // 800% coverage - lots of stickers!

    console.log(`Generating ${targetCount} stickers from ${images.length} images on app element`, app);

    // Append sticker wrapper to app (before other content)
    const stickerWrapper = document.createElement('div');
    stickerWrapper.id = 'sticker-wrapper';
    stickerWrapper.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
      overflow: hidden;
    `;
    app.prepend(stickerWrapper);

    // Ensure all direct children of #app (except background wrappers) have higher z-index
    Array.from(app.children).forEach(child => {
      // Skip background wrappers
      if (child.id.includes('wrapper') || child.tagName === 'svg') return;

      // Ensure positioning and z-index for stacking
      if (window.getComputedStyle(child).position === 'static') {
        child.style.position = 'relative';
      }
      child.style.zIndex = '1';
    });

    // Create stickers
    for (let i = 0; i < targetCount; i++) {
      const sticker = document.createElement('img');
      const imgIndex = i % images.length;
      sticker.src = images[imgIndex];
      sticker.className = 'sticker-bg';

      // Random size (50px - 120px)
      const size = 50 + Math.random() * 70;
      sticker.style.width = `${size}px`;
      sticker.style.height = `${size}px`;

      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      sticker.style.left = `${left}%`;
      sticker.style.top = `${top}%`;

      // Random rotation (-30 to 30 degrees)
      const rotation = (Math.random() * 60) - 30;
      sticker.style.transform = `rotate(${rotation}deg)`;

      // Solid opacity (no transparency)
      sticker.style.opacity = 1.0;

      // Items don't need individual z-index, inherit from wrapper
      sticker.style.position = 'absolute';
      sticker.style.display = 'block';

      stickerWrapper.appendChild(sticker);
    }

    console.log(`Created ${stickerWrapper.children.length} stickers`);

    // Add sticker background class to app
    app.classList.add('sticker-theme');
  }

  // Generate Damacy Items background
  generateDamacyBackground() {
    // Remove old stickers if any
    this.clearStickerBackground();

    const app = document.getElementById('app');
    if (!app) {
      console.error('Could not find #app element for Damacy background');
      return;
    }

    // Get list of Damacy items
    const images = this.getDamacyImages();
    if (images.length === 0) {
      console.error('No Damacy images found');
      return;
    }

    // Calculate how many items we need (density)
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const area = viewportWidth * viewportHeight;
    const itemSize = 80 * 80; // Average item area
    const targetCount = Math.floor(area / itemSize * 8.0); // 800% coverage - lots of items!

    console.log(`Generating ${targetCount} Damacy items from ${images.length} images on app element`, app);

    // Append Damacy wrapper to app (before other content)
    const damacyWrapper = document.createElement('div');
    damacyWrapper.id = 'damacy-wrapper';
    damacyWrapper.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
      overflow: hidden;
    `;
    app.prepend(damacyWrapper);

    // Ensure all direct children of #app (except background wrappers) have higher z-index
    Array.from(app.children).forEach(child => {
      // Skip background wrappers
      if (child.id.includes('wrapper') || child.tagName === 'svg') return;

      // Ensure positioning and z-index for stacking
      if (window.getComputedStyle(child).position === 'static') {
        child.style.position = 'relative';
      }
      child.style.zIndex = '1';
    });

    // Create Damacy items
    for (let i = 0; i < targetCount; i++) {
      const item = document.createElement('img');
      const imgIndex = i % images.length;
      item.src = images[imgIndex];
      item.className = 'damacy-bg';

      // Random size (50px - 120px)
      const size = 50 + Math.random() * 70;
      item.style.width = `${size}px`;
      item.style.height = `${size}px`;

      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      item.style.left = `${left}%`;
      item.style.top = `${top}%`;

      // Random rotation (-30 to 30 degrees)
      const rotation = (Math.random() * 60) - 30;
      item.style.transform = `rotate(${rotation}deg)`;

      // Solid opacity (no transparency)
      item.style.opacity = 1.0;

      // Items don't need individual z-index, inherit from wrapper
      item.style.position = 'absolute';
      item.style.display = 'block';

      damacyWrapper.appendChild(item);
    }

    console.log(`Created ${damacyWrapper.children.length} Damacy items`);

    // Add damacy background class to app
    app.classList.add('damacy-theme');
  }

  // Clear sticker background
  clearStickerBackground() {
    const app = document.getElementById('app');
    const body = document.body;
    if (!app || !body) return;

    // Remove sticker wrapper if it exists
    const stickerWrapper = document.getElementById('sticker-wrapper');
    if (stickerWrapper) {
      stickerWrapper.remove();
    }

    // Remove damacy wrapper if it exists
    const damacyWrapper = document.getElementById('damacy-wrapper');
    if (damacyWrapper) {
      damacyWrapper.remove();
    }

    // Remove coin wrapper if it exists
    const coinWrapper = document.getElementById('coin-wrapper');
    if (coinWrapper) {
      coinWrapper.remove();
    }

    // Remove pipe wrapper if it exists
    let pipeWrapper = document.getElementById('pipe-wrapper');
    if (pipeWrapper) {
      pipeWrapper.remove();
    }

    // Remove static background wrapper if it exists
    const staticBgWrapper = document.getElementById('static-bg-wrapper');
    if (staticBgWrapper) {
      staticBgWrapper.remove();
    }

    // Reset z-index on all direct children
    Array.from(app.children).forEach(child => {
      if (child.style.zIndex === '1') {
        child.style.zIndex = '';
      }
    });

    // Remove polkadot background
    body.style.backgroundImage = '';
    body.style.backgroundColor = '';

    // Remove theme classes from both app and body
    app.classList.remove('sticker-theme', 'damacy-theme', 'polkadot-theme', 'coins-theme', 'pipes-theme', 'static-bg-theme', 'skybox1-theme', 'skybox3-theme', 'ikea-theme');
    body.classList.remove('sticker-theme', 'damacy-theme', 'polkadot-theme', 'coins-theme', 'pipes-theme', 'static-bg-theme', 'skybox1-theme', 'skybox3-theme', 'ikea-theme');

    // Ensure #app is positioned relative for z-index layering
    app.style.position = 'relative';
    app.style.zIndex = '1';
  }

  // Apply polkadot theme - simple approach
  applyPolkadotTheme() {
    // Remove old backgrounds if any
    this.clearStickerBackground();

    const body = document.body;
    const app = document.getElementById('app');

    // Apply polkadot pattern to body
    body.style.backgroundImage = 'radial-gradient(circle, #ff4444 12px, transparent 13px)';
    body.style.backgroundSize = '70px 70px';
    body.style.backgroundColor = '#000000';
    body.style.backgroundRepeat = 'repeat';
    body.style.backgroundAttachment = 'fixed';

    // Add theme class to app
    if (app) {
      app.classList.add('polkadot-theme');
    }
  }

  applyCoinsTheme() {
    // Remove old backgrounds if any
    this.clearStickerBackground();

    const app = document.getElementById('app');
    if (!app) {
      console.error('Could not find #app element for coins background');
      return;
    }

    // Get list of coin images
    const images = this.getCoinImages();
    if (images.length === 0) {
      console.error('No coin images found');
      return;
    }

    // Calculate how many coins we need (density)
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const area = viewportWidth * viewportHeight;
    const coinSize = 60 * 60; // Smaller average coin area
    const targetCount = Math.floor(area / coinSize * 5.0); // 500% coverage - many small coins!

    console.log(`Generating ${targetCount} coins from ${images.length} images on app element`, app);

    // Append coin wrapper to app (before other content)
    const coinWrapper = document.createElement('div');
    coinWrapper.id = 'coin-wrapper';
    coinWrapper.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
      overflow: hidden;
    `;
    app.prepend(coinWrapper);

    // Ensure all direct children of #app (except background wrappers) have higher z-index
    Array.from(app.children).forEach(child => {
      // Skip background wrappers
      if (child.id.includes('wrapper') || child.tagName === 'svg') return;

      // Ensure positioning and z-index for stacking
      if (window.getComputedStyle(child).position === 'static') {
        child.style.position = 'relative';
      }
      child.style.zIndex = '1';
    });

    // Create coins
    for (let i = 0; i < targetCount; i++) {
      const coin = document.createElement('img');
      const imgIndex = i % images.length;
      coin.src = images[imgIndex];
      coin.className = 'coin-bg';

      // Random size (30px - 80px) - smaller coins, many more of them
      const size = 30 + Math.random() * 50;
      coin.style.width = `${size}px`;
      coin.style.height = `${size}px`;

      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      coin.style.left = `${left}%`;
      coin.style.top = `${top}%`;

      // Random rotation (-45 to 45 degrees) - more rotation for coins
      const rotation = (Math.random() * 90) - 45;
      coin.style.transform = `rotate(${rotation}deg)`;

      // Solid opacity (no transparency)
      coin.style.opacity = 1.0;

      // Items don't need individual z-index, inherit from wrapper
      coin.style.position = 'absolute';
      coin.style.display = 'block';

      coinWrapper.appendChild(coin);
    }

    console.log(`Created ${coinWrapper.children.length} coins`);

    // Add coins background class to app
    app.classList.add('coins-theme');
  }

  // Apply pipes theme - Mario-style pipes with junctions and exits
  applyPipesTheme() {
    // Remove old backgrounds if any
    this.clearStickerBackground();

    const app = document.getElementById('app');
    if (!app) {
      console.error('Could not find #app element for pipes background');
      return;
    }

    // Pipe colors (Mario-style)
    const pipeColors = [
      '#00aa00',  // Green pipes
      '#0066cc',  // Blue pipes
      '#ffcc00',  // Yellow pipes
      '#ff3333'   // Red pipes
    ];

    // Pipe settings
    const pipeWidth = 18;    // Thinner pipes
    const numPaths = 25;     // Paths
    const minStraightLength = 3;  // Minimum straight segments
    const maxStraightLength = 8;  // Maximum straight segments

    // Calculate viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    console.log(`Creating ${numPaths} pipe paths with junctions and exits`, app);

    // Create SVG container
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('id', 'pipe-wrapper');
    svg.setAttribute('width', viewportWidth);
    svg.setAttribute('height', viewportHeight);
    svg.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      z-index: 0;
      pointer-events: none;
    `;
    app.prepend(svg);

    // Ensure all direct children of #app (except background wrappers) have higher z-index
    Array.from(app.children).forEach(child => {
      // Skip background wrappers
      if (child.id.includes('wrapper') || child.tagName === 'svg') return;

      // Ensure positioning and z-index for stacking
      if (window.getComputedStyle(child).position === 'static') {
        child.style.position = 'relative';
      }
      child.style.zIndex = '1';
    });

    // Direction vectors (up, right, down, left)
    const directions = [
      { dx: 0, dy: -1 },
      { dx: 1, dy: 0 },
      { dx: 0, dy: 1 },
      { dx: -1, dy: 0 }
    ];

    // Store all junction points and exits
    const junctions = [];
    const exits = [];

    // Create pipe paths
    for (let p = 0; p < numPaths; p++) {
      const pipeColor = pipeColors[Math.floor(Math.random() * pipeColors.length)];

      // Generate path with straight segments
      const points = [];
      let x = Math.random() * viewportWidth;
      let y = Math.random() * viewportHeight;
      let direction = Math.floor(Math.random() * 4);

      points.push({x, y, type: 'start'});

      // Generate segments
      const numSegments = 8 + Math.floor(Math.random() * 12); // 8-20 segments

      for (let s = 0; s < numSegments; s++) {
        const dir = directions[direction];

        // Length of this straight segment
        const segmentLength = (minStraightLength + Math.floor(Math.random() * (maxStraightLength - minStraightLength))) * 30;

        // Add point at end of segment
        x += dir.dx * segmentLength;
        y += dir.dy * segmentLength;

        // Wrap around edges
        if (x < 0) x += viewportWidth;
        if (x > viewportWidth) x -= viewportWidth;
        if (y < 0) y += viewportHeight;
        if (y > viewportHeight) y -= viewportHeight;

        points.push({x, y, type: 'turn'});

        // Randomly add a junction (T or cross)
        if (Math.random() < 0.15) { // 15% chance per segment
          const junctionType = Math.random() < 0.6 ? 'T' : 'cross'; // 60% T, 40% cross
          junctions.push({
            x, y,
            type: junctionType,
            color: pipeColor,
            directions: [direction, (direction + 1) % 4, (direction + 2) % 4].slice(0, junctionType === 'T' ? 3 : 4)
          });
        }

        // Change direction (90° turn only)
        const turnLeft = Math.random() < 0.5;
        if (turnLeft) {
          direction = (direction + 3) % 4;
        } else {
          direction = (direction + 1) % 4;
        }
      }

      // Add pipe exit at the end
      exits.push({
        x: points[points.length - 1].x,
        y: points[points.length - 1].y,
        color: pipeColor,
        direction: direction
      });

      // Create simple polyline path
      if (points.length < 2) continue;

      let pathData = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        pathData += ` L ${points[i].x} ${points[i].y}`;
      }

      // Create main pipe path
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathData);
      path.setAttribute('stroke', pipeColor);
      path.setAttribute('stroke-width', pipeWidth);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      path.setAttribute('opacity', '0.9');
      svg.appendChild(path);

      // Add inner highlight for 3D effect
      const highlight = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      highlight.setAttribute('d', pathData);
      highlight.setAttribute('stroke', this.lightenColor(pipeColor, 30));
      highlight.setAttribute('stroke-width', pipeWidth * 0.3);
      highlight.setAttribute('fill', 'none');
      highlight.setAttribute('stroke-linecap', 'round');
      highlight.setAttribute('stroke-linejoin', 'round');
      highlight.setAttribute('opacity', '0.3');
      svg.appendChild(highlight);

      // Add connectors (metal bands) at random straight sections
      const numConnectors = 3 + Math.floor(Math.random() * 5); // 3-7 connectors
      for (let c = 0; c < numConnectors; c++) {
        const segmentIndex = Math.floor(Math.random() * (points.length - 1));
        const point = points[segmentIndex];
        const nextPoint = points[segmentIndex + 1];

        const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x);
        const connectorLength = pipeWidth + 4;
        const cx = point.x;
        const cy = point.y;

        const connector = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        connector.setAttribute('x1', cx + Math.cos(angle + Math.PI/2) * connectorLength/2);
        connector.setAttribute('y1', cy + Math.sin(angle + Math.PI/2) * connectorLength/2);
        connector.setAttribute('x2', cx + Math.cos(angle - Math.PI/2) * connectorLength/2);
        connector.setAttribute('y2', cy + Math.sin(angle - Math.PI/2) * connectorLength/2);
        connector.setAttribute('stroke', this.darkenColor('#888888', 15));
        connector.setAttribute('stroke-width', '3');
        connector.setAttribute('stroke-linecap', 'round');
        svg.appendChild(connector);
      }
    }

    // Add junctions (T-junctions and cross-junctions)
    junctions.forEach(junction => {
      const radius = pipeWidth * 0.8;

      if (junction.type === 'T') {
        // T-junction - three arms
        const armLength = pipeWidth * 1.5;

        junction.directions.forEach(dir => {
          const d = directions[dir];
          const arm = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          arm.setAttribute('x1', junction.x);
          arm.setAttribute('y1', junction.y);
          arm.setAttribute('x2', junction.x + d.dx * armLength);
          arm.setAttribute('y2', junction.y + d.dy * armLength);
          arm.setAttribute('stroke', junction.color);
          arm.setAttribute('stroke-width', pipeWidth);
          arm.setAttribute('stroke-linecap', 'round');
          svg.appendChild(arm);
        });

        // Central connector band
        const connector = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        connector.setAttribute('cx', junction.x);
        connector.setAttribute('cy', junction.y);
        connector.setAttribute('r', pipeWidth * 0.6);
        connector.setAttribute('stroke', this.darkenColor('#888888', 15));
        connector.setAttribute('stroke-width', '4');
        connector.setAttribute('fill', 'none');
        svg.appendChild(connector);

      } else {
        // Cross-junction - four arms
        const armLength = pipeWidth * 1.5;

        // Draw all four arms
        for (let i = 0; i < 4; i++) {
          const d = directions[i];
          const arm = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          arm.setAttribute('x1', junction.x);
          arm.setAttribute('y1', junction.y);
          arm.setAttribute('x2', junction.x + d.dx * armLength);
          arm.setAttribute('y2', junction.y + d.dy * armLength);
          arm.setAttribute('stroke', junction.color);
          arm.setAttribute('stroke-width', pipeWidth);
          arm.setAttribute('stroke-linecap', 'round');
          svg.appendChild(arm);
        }

        // Central connector band
        const connector = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        connector.setAttribute('cx', junction.x);
        connector.setAttribute('cy', junction.y);
        connector.setAttribute('r', pipeWidth * 0.6);
        connector.setAttribute('stroke', this.darkenColor('#888888', 15));
        connector.setAttribute('stroke-width', '4');
        connector.setAttribute('fill', 'none');
        svg.appendChild(connector);
      }
    });

    // Add pipe exits (open ends) - 2D side profile
    exits.forEach(exit => {
      const d = directions[exit.direction];

      // Create flat 2D pipe exit (line perpendicular to pipe)
      const exitWidth = pipeWidth + 4;
      const exitLength = pipeWidth * 1.5;

      // Calculate exit position
      const exitX = exit.x + d.dx * pipeWidth * 0.6;
      const exitY = exit.y + d.dy * pipeWidth * 0.6;

      // Create flat end of pipe (2D rectangle)
      const exitRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

      // Orient the rectangle based on pipe direction
      if (exit.direction === 0 || exit.direction === 2) {
        // Vertical pipe - horizontal rectangle
        exitRect.setAttribute('x', exitX - exitLength / 2);
        exitRect.setAttribute('y', exitY - exitWidth / 2);
        exitRect.setAttribute('width', exitLength);
        exitRect.setAttribute('height', exitWidth);
      } else {
        // Horizontal pipe - vertical rectangle
        exitRect.setAttribute('x', exitX - exitWidth / 2);
        exitRect.setAttribute('y', exitY - exitLength / 2);
        exitRect.setAttribute('width', exitWidth);
        exitRect.setAttribute('height', exitLength);
      }

      // Dark interior (inside of pipe)
      exitRect.setAttribute('fill', this.darkenColor(exit.color, 40));
      exitRect.setAttribute('stroke', this.darkenColor(exit.color, 20));
      exitRect.setAttribute('stroke-width', '2');
      exitRect.setAttribute('rx', '2');
      exitRect.setAttribute('ry', '2');
      svg.appendChild(exitRect);
    });

    console.log(`Created ${numPaths} pipe paths with ${junctions.length} junctions and ${exits.length} exits`);

    // Add pipes background class to app
    app.classList.add('pipes-theme');
  }

  // Add a connector (metal band) to a pipe
  addConnector(pipe, leftPct, topPct, width, height, colorDark, colorLight, orientation) {
    const connector = document.createElement('div');
    connector.style.cssText = `
      position: absolute;
      left: ${leftPct === 0 ? 0 : (leftPct === 1 ? `calc(100% - ${width}px)` : `calc(50% - ${width/2}px)`)};
      top: ${topPct === 0 ? 0 : (topPct === 1 ? `calc(100% - ${height}px)` : `calc(50% - ${height/2}px)`)};
      width: ${width}px;
      height: ${height}px;
      background: ${colorDark};
      ${orientation === 'horizontal' ?
        `border-left: 1px solid ${colorLight}; border-right: 1px solid #666;` :
        `border-top: 1px solid ${colorLight}; border-bottom: 1px solid #666;`}
      box-shadow: 0 0 3px rgba(0,0,0,0.3);
    `;
    pipe.appendChild(connector);
  }

  // Create a corner pipe (L-shape)
  createCornerPipe(pipe, color, borderColor, size, cornerType, connectorDark, connectorLight) {
    // Adjust position for proper alignment
    const offsetX = (size - this.pipeWidth) / 2;
    const offsetY = (size - this.pipeWidth) / 2;

    if (cornerType === 'top-right') {
      pipe.style.left = `${parseInt(pipe.style.left) - offsetX}px`;
      pipe.style.top = `${parseInt(pipe.style.top) - offsetY}px`;

      // Vertical segment (top)
      const vert = document.createElement('div');
      vert.style.cssText = `
        position: absolute;
        top: 0;
        left: ${size - this.pipeWidth}px;
        width: ${this.pipeWidth}px;
        height: ${size}px;
        background: ${color};
        border: 2px solid ${borderColor};
        box-shadow: inset -5px 0 10px rgba(0,0,0,0.4), inset 5px 0 10px rgba(255,255,255,0.15);
      `;
      pipe.appendChild(vert);

      // Horizontal segment (right)
      const horiz = document.createElement('div');
      horiz.style.cssText = `
        position: absolute;
        top: ${size - this.pipeWidth}px;
        left: 0;
        width: ${size}px;
        height: ${this.pipeWidth}px;
        background: ${color};
        border: 2px solid ${borderColor};
        box-shadow: inset 0 -5px 10px rgba(0,0,0,0.4), inset 0 5px 10px rgba(255,255,255,0.15);
      `;
      pipe.appendChild(horiz);

      // Add connectors
      this.addConnector(vert, 0, 0.5, 6, this.pipeWidth, connectorDark, connectorLight, 'vertical');

    } else if (cornerType === 'top-left') {
      pipe.style.top = `${parseInt(pipe.style.top) - offsetY}px`;

      // Vertical segment (top)
      const vert = document.createElement('div');
      vert.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: ${this.pipeWidth}px;
        height: ${size}px;
        background: ${color};
        border: 2px solid ${borderColor};
        box-shadow: inset -5px 0 10px rgba(0,0,0,0.4), inset 5px 0 10px rgba(255,255,255,0.15);
      `;
      pipe.appendChild(vert);

      // Horizontal segment (left)
      const horiz = document.createElement('div');
      horiz.style.cssText = `
        position: absolute;
        top: ${size - this.pipeWidth}px;
        left: 0;
        width: ${size}px;
        height: ${this.pipeWidth}px;
        background: ${color};
        border: 2px solid ${borderColor};
        box-shadow: inset 0 -5px 10px rgba(0,0,0,0.4), inset 0 5px 10px rgba(255,255,255,0.15);
      `;
      pipe.appendChild(horiz);

      // Add connectors
      this.addConnector(vert, 0, 0.5, 6, this.pipeWidth, connectorDark, connectorLight, 'vertical');

    } else if (cornerType === 'bottom-right') {
      pipe.style.left = `${parseInt(pipe.style.left) - offsetX}px`;

      // Vertical segment (right)
      const vert = document.createElement('div');
      vert.style.cssText = `
        position: absolute;
        top: 0;
        left: ${size - this.pipeWidth}px;
        width: ${this.pipeWidth}px;
        height: ${size}px;
        background: ${color};
        border: 2px solid ${borderColor};
        box-shadow: inset -5px 0 10px rgba(0,0,0,0.4), inset 5px 0 10px rgba(255,255,255,0.15);
      `;
      pipe.appendChild(vert);

      // Horizontal segment (bottom)
      const horiz = document.createElement('div');
      horiz.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: ${size}px;
        height: ${this.pipeWidth}px;
        background: ${color};
        border: 2px solid ${borderColor};
        box-shadow: inset 0 -5px 10px rgba(0,0,0,0.4), inset 0 5px 10px rgba(255,255,255,0.15);
      `;
      pipe.appendChild(horiz);

      // Add connectors
      this.addConnector(vert, 0, 0.5, 6, this.pipeWidth, connectorDark, connectorLight, 'vertical');

    } else {
      // Bottom-left
      // Vertical segment (left)
      const vert = document.createElement('div');
      vert.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: ${this.pipeWidth}px;
        height: ${size}px;
        background: ${color};
        border: 2px solid ${borderColor};
        box-shadow: inset -5px 0 10px rgba(0,0,0,0.4), inset 5px 0 10px rgba(255,255,255,0.15);
      `;
      pipe.appendChild(vert);

      // Horizontal segment (bottom)
      const horiz = document.createElement('div');
      horiz.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: ${size}px;
        height: ${this.pipeWidth}px;
        background: ${color};
        border: 2px solid ${borderColor};
        box-shadow: inset 0 -5px 10px rgba(0,0,0,0.4), inset 0 5px 10px rgba(255,255,255,0.15);
      `;
      pipe.appendChild(horiz);

      // Add connectors
      this.addConnector(vert, 0, 0.5, 6, this.pipeWidth, connectorDark, connectorLight, 'vertical');
    }
  }

  // Create a T-junction pipe
  createTJunction(pipe, color, borderColor, size, conn, connectorDark, connectorLight) {
    const halfSize = size / 2;

    // Create three arms
    if (conn.top) {
      const arm = document.createElement('div');
      arm.style.cssText = `
        position: absolute;
        top: 0;
        left: ${halfSize - this.pipeWidth/2}px;
        width: ${this.pipeWidth}px;
        height: ${halfSize + this.pipeWidth/2}px;
        background: ${color};
        border: 2px solid ${borderColor};
        box-shadow: inset -5px 0 10px rgba(0,0,0,0.4), inset 5px 0 10px rgba(255,255,255,0.15);
      `;
      pipe.appendChild(arm);
    }

    if (conn.bottom) {
      const arm = document.createElement('div');
      arm.style.cssText = `
        position: absolute;
        bottom: 0;
        left: ${halfSize - this.pipeWidth/2}px;
        width: ${this.pipeWidth}px;
        height: ${halfSize + this.pipeWidth/2}px;
        background: ${color};
        border: 2px solid ${borderColor};
        box-shadow: inset -5px 0 10px rgba(0,0,0,0.4), inset 5px 0 10px rgba(255,255,255,0.15);
      `;
      pipe.appendChild(arm);
    }

    if (conn.left) {
      const arm = document.createElement('div');
      arm.style.cssText = `
        position: absolute;
        left: 0;
        top: ${halfSize - this.pipeWidth/2}px;
        width: ${halfSize + this.pipeWidth/2}px;
        height: ${this.pipeWidth}px;
        background: ${color};
        border: 2px solid ${borderColor};
        box-shadow: inset 0 -5px 10px rgba(0,0,0,0.4), inset 0 5px 10px rgba(255,255,255,0.15);
      `;
      pipe.appendChild(arm);
    }

    if (conn.right) {
      const arm = document.createElement('div');
      arm.style.cssText = `
        position: absolute;
        right: 0;
        top: ${halfSize - this.pipeWidth/2}px;
        width: ${halfSize + this.pipeWidth/2}px;
        height: ${this.pipeWidth}px;
        background: ${color};
        border: 2px solid ${borderColor};
        box-shadow: inset 0 -5px 10px rgba(0,0,0,0.4), inset 0 5px 10px rgba(255,255,255,0.15);
      `;
      pipe.appendChild(arm);
    }

    // Add central connector
    const connector = document.createElement('div');
    connector.style.cssText = `
      position: absolute;
      top: ${halfSize - 5}px;
      left: ${halfSize - 5}px;
      width: 10px;
      height: 10px;
      background: ${connectorDark};
      border-radius: 2px;
      box-shadow: 0 0 4px rgba(0,0,0,0.4);
    `;
    pipe.appendChild(connector);
  }

  // Create a cross junction pipe
  createCrossJunction(pipe, color, borderColor, size, connectorDark, connectorLight) {
    const halfSize = size / 2;

    // Vertical pipe
    const vert = document.createElement('div');
    vert.style.cssText = `
      position: absolute;
      top: 0;
      left: ${halfSize - this.pipeWidth/2}px;
      width: ${this.pipeWidth}px;
      height: 100%;
      background: ${color};
      border: 2px solid ${borderColor};
      box-shadow: inset -5px 0 10px rgba(0,0,0,0.4), inset 5px 0 10px rgba(255,255,255,0.15);
    `;
    pipe.appendChild(vert);

    // Horizontal pipe
    const horiz = document.createElement('div');
    horiz.style.cssText = `
      position: absolute;
      left: 0;
      top: ${halfSize - this.pipeWidth/2}px;
      width: 100%;
      height: ${this.pipeWidth}px;
      background: ${color};
      border: 2px solid ${borderColor};
      box-shadow: inset 0 -5px 10px rgba(0,0,0,0.4), inset 0 5px 10px rgba(255,255,255,0.15);
    `;
    pipe.appendChild(horiz);

    // Add central connector
    const connector = document.createElement('div');
    connector.style.cssText = `
      position: absolute;
      top: ${halfSize - 5}px;
      left: ${halfSize - 5}px;
      width: 10px;
      height: 10px;
      background: ${connectorDark};
      border-radius: 2px;
      box-shadow: 0 0 4px rgba(0,0,0,0.4);
    `;
    pipe.appendChild(connector);
  }

  // Helper: Darken a color by percentage
  darkenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max((num >> 16) - amt, 0);
    const G = Math.max((num >> 8 & 0x00FF) - amt, 0);
    const B = Math.max((num & 0x0000FF) - amt, 0);
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  }

  // Helper: Lighten a color by percentage
  lightenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min((num >> 16) + amt, 255);
    const G = Math.min((num >> 8 & 0x00FF) + amt, 255);
    const B = Math.min((num & 0x0000FF) + amt, 255);
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  }

  // Get list of sticker images
  getStickerImages() {
    const images = [];

    // Known Japanese sticker images (from IMAGE_ASSETS/japanese stickers directory)
    const knownImages = [
      '100-yen-coin-at-angle.png',
      '10-yen-coin-at-angle.png',
      '1-yen-coin-at-angle.png',
      '500-yen-coin-at-angle.png',
      '500-yen-coin-sticker.png',
      '50-yen-coin-at-angle.png',
      '5-yen-coin-at-angle.png',
      '70cf76b17f4b6387bffd1ae8130b015e.jpg',
      'cherry-blossom-trees-near-river.jpg',
      'cherry_blossom_watercolor.png',
      'japanese_ad_sticker_10.png',
      'japanese_ad_sticker_11.png',
      'japanese_ad_sticker_12.png',
      'japanese_ad_sticker_13.png',
      'japanese_ad_sticker_14.png',
      'japanese_ad_sticker_15.png',
      'japanese_ad_sticker_16.png',
      'japanese_ad_sticker_17.png',
      'japanese_ad_sticker_18.png',
      'japanese_ad_sticker_19.png',
      'japanese_ad_sticker_1.png',
      'japanese_ad_sticker_20.png',
      'japanese_ad_sticker_21.png',
      'japanese_ad_sticker_22.png',
      'japanese_ad_sticker_23.png',
      'japanese_ad_sticker_24.png',
      'japanese_ad_sticker_25.png',
      'japanese_ad_sticker_2.png',
      'japanese_ad_sticker_3.png',
      'japanese_ad_sticker_4.png',
      'japanese_ad_sticker_5.png',
      'japanese_ad_sticker_6.png',
      'japanese_ad_sticker_7.png',
      'japanese_ad_sticker_8.png',
      'japanese_ad_sticker_9.png'
    ];

    // Use custom assets:// protocol for Electron, fallback to relative path
    // Check if running in WSL (file://wsl.localhost/) - don't URL encode for file protocol
    const isWSL = window.location.protocol === 'file:' && window.location.href.includes('wsl.localhost');
    const protocolPrefix = window.electronAPI ? 'assets://' : './IMAGE_ASSETS/japanese stickers/';
    const subdirectory = 'japanese stickers/';

    knownImages.forEach(img => {
      // URL encode only if not using file:// protocol (WSL)
      const imgPath = isWSL ? img : encodeURIComponent(img);
      images.push(`${protocolPrefix}${imgPath}`);
    });

    console.log(`Loaded ${images.length} sticker images using protocol: ${protocolPrefix}`);
    return images;
  }

  // Get list of Damacy item images
  getDamacyImages() {
    const images = [];

    // Use custom assets:// protocol for Electron, fallback to relative path
    // Check if running in WSL (file://wsl.localhost/) - don't URL encode for file protocol
    const isWSL = window.location.protocol === 'file:' && window.location.href.includes('wsl.localhost');
    const protocolPrefix = window.electronAPI ? 'assets://' : './IMAGE_ASSETS/katmari_damacy_items/';
    const subdirectory = 'katmari_damacy_items/';

    // Import all 735 Damacy items from external file
    if (typeof damacyItems !== 'undefined') {
      damacyItems.forEach(img => {
        // URL encode only if not using file:// protocol (WSL)
        const imgPath = isWSL ? img : encodeURIComponent(img);
        images.push(`${protocolPrefix}${imgPath}`);
      });
    }

    console.log(`Loaded ${images.length} Damacy item images using protocol: ${protocolPrefix}`);
    return images;
  }

  // Get list of coin images
  getCoinImages() {
    const images = [];

    // Known Old_Coins images (from IMAGE_ASSETS/Old_Coins directory)
    const knownImages = [
      '01image000021.png',
      '01image00002.png',
      '1252518_2b.png',
      '1411122.png',
      '141112.png',
      '1505–1533 grivna gold2.png',
      '1505–1533 grivna gold.png',
      '1713rev.png',
      '1967.153.18.obv_.noscale1.png',
      '1967.153.18.obv_.noscale.png',
      '2024-0216-03.png',
      '2101_Silver_penny_of_Edward_I_FindID_21812823.png',
      '2101_Silver_penny_of_Edward_I_FindID_2181282.png',
      '2101_Silver_penny_of_Edward_I_FindID_218128.png',
      '648c64c228d3e.png',
      '744c82c399d8139d6a672eb760b83a94.png',
      '81682q002.png',
      '81682q00.png',
      '9-12-2023-09-32-65743435eada2.png',
      '9yybRwmPQyMaKAwtuTniEc2.png',
      '9yybRwmPQyMaKAwtuTniEc.png',
      'akragastetradrachm_merged.tmb-slide-19002.png',
      'akragastetradrachm_merged.tmb-slide-1900.png',
      'Ancient10700714.png',
      'ancient-roman-silver-denarius-of-emperor-trajan-virtus_57073_pic1_size1.png',
      'cc3a1018d9bac57b6c5713b157397ac12.png',
      'cc3a1018d9bac57b6c5713b157397ac1.png',
      'Coin-15007_832_1-12.png',
      'Coin-15007_832_1-1.png',
      'combined810672.png',
      'combined81067.png',
      'daa4e9b07fbe7e5e6374f8650601f176.png',
      'Edward_III_noble.png',
      'imagescioinhygu.png',
      'images.png',
      'istockphoto-485442498-612x6122.png',
      'istockphoto-485442498-612x612.png',
      'jgkjhh.png',
      'Louis-solidus2.png',
      'Louis-solidus.png',
      'Medieval-European-Coins1.png',
      'Medieval-European-Coins2.png',
      'Medieval-European-Coins4.png',
      'Medieval-European-Coins5.png',
      'Medieval-European-Coins.png',
      'Monnaie_-_Italie,_République_de_Florence,_Florin,_sec.XIIIe-1532,_-_btv1b11312523s_(2_of_2).png',
      'nomos-circa-1550-ringed-bimetallic-cavino2.png',
      'nomos-circa-1550-ringed-bimetallic-cavino.png',
      'Poland-Jan-Casimir-CM22591.png',
      'Poland-Jan-Casimir-CM2259.png',
      'Screenshot 2026-03-05 0113062.png',
      'Screenshot 2026-03-05 011306.png',
      'Screenshot 2026-03-05 0122542.png',
      'Screenshot 2026-03-05 012254.png',
      'Screenshot 2026-03-05 214803.png',
      'Screenshot 2026-03-05 215004.png',
      'Screenshot 2026-03-05 221147.png',
      'zoom_24635540_Fiorino-in-oro-18-kt-con-certificato-di-garanzia.png'
    ];

    // Use custom assets:// protocol for Electron, fallback to relative path
    // Check if running in WSL (file://wsl.localhost/) - don't URL encode for file protocol
    const isWSL = window.location.protocol === 'file:' && window.location.href.includes('wsl.localhost');
    const protocolPrefix = window.electronAPI ? 'assets://' : './IMAGE_ASSETS/Old_Coins/';
    const subdirectory = 'Old_Coins/';

    knownImages.forEach(img => {
      // URL encode only if not using file:// protocol (WSL)
      const imgPath = isWSL ? img : encodeURIComponent(img);
      images.push(`${protocolPrefix}${imgPath}`);
    });

    console.log(`Loaded ${images.length} coin images using protocol: ${protocolPrefix}`);
    return images;
  }

  // Apply static background image theme
  applyStaticBackground(imageFileName) {
    // Remove old backgrounds if any
    this.clearStickerBackground();

    const app = document.getElementById('app');
    if (!app) {
      console.error('Could not find #app element for static background');
      return;
    }

    console.log(`Applying static background: ${imageFileName}`, app);

    // Use custom assets:// protocol for Electron, fallback to relative path
    const isWSL = window.location.protocol === 'file:' && window.location.href.includes('wsl.localhost');
    const protocolPrefix = window.electronAPI ? 'assets://' : './IMAGE_ASSETS/static_background_images/';
    const imgPath = isWSL ? imageFileName : encodeURIComponent(imageFileName);
    const imageUrl = `${protocolPrefix}${imgPath}`;

    // Create background div
    const bgDiv = document.createElement('div');
    bgDiv.id = 'static-bg-wrapper';
    bgDiv.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      pointer-events: none;
      background-image: url('${imageUrl}');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `;
    app.prepend(bgDiv);

    // Ensure all direct children of #app (except background wrappers) have higher z-index
    Array.from(app.children).forEach(child => {
      // Skip background wrappers
      if (child.id.includes('wrapper') || child.tagName === 'svg') return;

      // Ensure positioning and z-index for stacking
      if (window.getComputedStyle(child).position === 'static') {
        child.style.position = 'relative';
      }
      child.style.zIndex = '1';
    });

    // Add static-bg class to app for CSS styling
    app.classList.add('static-bg-theme');

    // Add specific class for skybox1 (purple theme)
    if (imageFileName === 'the-skyboxes-of-super-mario-sunshine-are-beautiful-v0-8wrk9rcl4wqe1.png') {
      app.classList.add('skybox1-theme');
    }

    // Add specific class for skybox3 (dark theme)
    if (imageFileName === 'the-skyboxes-of-super-mario-sunshine-are-beautiful-v0-knxraxcl4wqe1.webp') {
      app.classList.add('skybox3-theme');
    }

    // Add specific class for ikea theme
    if (imageFileName.includes('ikea_theme')) {
      app.classList.add('ikea-theme');
    }

    console.log(`Static background applied: ${imageUrl}`);
  }
}

// Create global instance
const themeManager = new ThemeManager();