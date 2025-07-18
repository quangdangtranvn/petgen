import { parseNhacMetadata } from './cipherParser.js';

async function loadNhacMeta(fileName) {
  try {
    const res = await fetch(`/assets/${fileName}`);
    const content = await res.text();
    const meta = parseNhacMetadata(content);

    document.getElementById('meta-composer').textContent = meta.composer || 'N/A';
    document.getElementById('meta-emotion').textContent = meta.emotion || 'N/A';
    document.getElementById('meta-style').textContent = meta.style || 'N/A';
    document.getElementById('meta-cipherTheme').textContent = meta.cipherTheme || 'N/A';
  } catch (err) {
    console.warn('Không đọc được metadata:', err);
  }
}

function getFileNameFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('file') || 'welcome.nhac';
}

window.addEventListener('DOMContentLoaded', () => {
  const currentFile = getFileNameFromURL();
  const audioPlayer = document.getElementById('player');
  audioPlayer.src = `/app?file=${currentFile}`;

  loadNhacMeta(currentFile);
});