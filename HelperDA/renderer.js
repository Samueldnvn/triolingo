// Tesseract.js is loaded from CDN in renderer.html

// DOM Elements
const sourceSelect = document.getElementById('sourceSelect');
const reloadBtn = document.getElementById('reloadBtn');
const takeScreenshotBtn = document.getElementById('takeScreenshotBtn');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');
const saveBtn = document.getElementById('saveBtn');
const multiModeCheckbox = document.getElementById('multiMode');
const previewImage = document.getElementById('previewImage');
const previewPlaceholder = document.getElementById('previewPlaceholder');
const extractedText = document.getElementById('extractedText');
const ocrStatus = document.getElementById('ocrStatus');
const loadingOverlay = document.getElementById('loadingOverlay');
const loadingText = document.getElementById('loadingText');

// State
let accumulatedText = '';
let worker = null;

// Initialize
async function init() {
  await loadSources();
  await initializeTesseract();
}

// Load available screens/windows
async function loadSources() {
  try {
    console.log('Loading sources...');
    const sources = await window.electronAPI.getSources();
    console.log('Got sources:', sources.length);

    sourceSelect.innerHTML = '<option value="">Select screen/window...</option>';

    if (sources.length === 0) {
      ocrStatus.textContent = 'No screens/windows found';
      return;
    }

    sources.forEach((source, index) => {
      console.log(`Source ${index}:`, source.id, source.name);
      const option = document.createElement('option');
      option.value = source.id;
      option.textContent = source.name;
      sourceSelect.appendChild(option);
    });

    ocrStatus.textContent = `Found ${sources.length} screen(s)/window(s)`;
    console.log('Sources loaded successfully');
  } catch (error) {
    console.error('Failed to load sources:', error);
    ocrStatus.textContent = 'Failed to load screens: ' + error.message;
  }
}

// Initialize Tesseract worker
async function initializeTesseract() {
  try {
    worker = await Tesseract.createWorker({
      logger: m => {
        if (m.status === 'recognizing text') {
          loadingText.textContent = `Recognizing text: ${Math.round(m.progress * 100)}%`;
        }
      }
    });
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    console.log('Tesseract initialized');
  } catch (error) {
    console.error('Failed to initialize Tesseract:', error);
    ocrStatus.textContent = 'OCR initialization failed';
  }
}

// Take screenshot
takeScreenshotBtn.addEventListener('click', async () => {
  const sourceId = sourceSelect.value;
  if (!sourceId) {
    ocrStatus.textContent = 'Please select a screen or window';
    return;
  }

  showLoading('Taking screenshot...');

  try {
    // Capture screenshot
    const pngBuffer = await window.electronAPI.takeScreenshot(sourceId);

    // Display preview
    const blob = new Blob([pngBuffer], { type: 'image/png' });
    const url = URL.createObjectURL(blob);
    previewImage.src = url;
    previewImage.classList.remove('hidden');
    previewPlaceholder.classList.add('hidden');

    // Perform OCR
    loadingText.textContent = 'Running OCR...';
    const { data: { text } } = await worker.recognize(pngBuffer);

    // Handle text based on mode
    if (multiModeCheckbox.checked) {
      // Accumulate text in multi-screenshot mode
      accumulatedText += '\n\n' + text;
      extractedText.value = accumulatedText;
      ocrStatus.textContent = 'Added to accumulated text';
    } else {
      // Replace text in single mode
      extractedText.value = text;
      ocrStatus.textContent = 'Text extracted';
    }

  } catch (error) {
    console.error('Screenshot failed:', error);
    ocrStatus.textContent = 'Failed to capture screenshot';
  } finally {
    hideLoading();
  }
});

// Clear all
clearBtn.addEventListener('click', () => {
  previewImage.src = '';
  previewImage.classList.add('hidden');
  previewPlaceholder.classList.remove('hidden');
  extractedText.value = '';
  accumulatedText = '';
  ocrStatus.textContent = 'Cleared';
});

// Copy to clipboard
copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(extractedText.value);
    ocrStatus.textContent = 'Copied to clipboard!';
    setTimeout(() => {
      ocrStatus.textContent = '';
    }, 2000);
  } catch (error) {
    console.error('Copy failed:', error);
    ocrStatus.textContent = 'Failed to copy';
  }
});

// Save to file
saveBtn.addEventListener('click', async () => {
  const text = extractedText.value;
  if (!text) {
    ocrStatus.textContent = 'No text to save';
    return;
  }

  try {
    const result = await window.electronAPI.saveText(text, 'extracted-text.txt');
    if (result.success) {
      ocrStatus.textContent = `Saved to ${result.path}`;
    } else {
      ocrStatus.textContent = 'Save cancelled';
    }
  } catch (error) {
    console.error('Save failed:', error);
    ocrStatus.textContent = 'Failed to save';
  }
});

// Reload sources button
reloadBtn.addEventListener('click', async () => {
  ocrStatus.textContent = 'Reloading sources...';
  await loadSources();
});

// Loading overlay helpers
function showLoading(text) {
  loadingText.textContent = text;
  loadingOverlay.classList.remove('hidden');
}

function hideLoading() {
  loadingOverlay.classList.add('hidden');
}

// Start the app
init();