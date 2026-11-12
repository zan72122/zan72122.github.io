import { prepareStartupTextures } from './engine/texture-prewarm.js';

const startButton = document.getElementById('start-btn');
const startText = startButton?.querySelector('.start__text');
let app = null;
let startup = null;
let startRequested = false;
let appReady = false;
let gestureAudioContext = null;
let startupProgress = { label: 'じゅんび中…', value: 0 };

function unlockAudioFromGesture() {
  if (gestureAudioContext) {
    gestureAudioContext.resume?.();
    return gestureAudioContext;
  }
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  try {
    gestureAudioContext = new AudioContext({ latencyHint: 'interactive' });
  } catch {
    try { gestureAudioContext = new AudioContext(); } catch { return null; }
  }
  window.__BABY_AUDIO_CONTEXT__ = gestureAudioContext;
  gestureAudioContext.resume?.();
  return gestureAudioContext;
}

function paintLoading(loading, progress = startupProgress) {
  if (!startButton) return;
  startButton.classList.toggle('is-loading', loading);
  startButton.setAttribute('aria-busy', String(loading));
  startButton.dataset.startupProgress = String(Math.round((progress.value || 0) * 100));
  if (startText) startText.textContent = loading ? progress.label : 'あそぶ！';
}

function paintStartupProgress(progress) {
  startupProgress = progress;
  if (startRequested) paintLoading(true, progress);
}

function showBootError(error) {
  console.error(error);
  document.getElementById('boot-error')?.remove();
  const element = document.createElement('div');
  element.id = 'boot-error';
  element.className = 'boot-error';
  element.setAttribute('role', 'alert');
  const panel = document.createElement('div');
  panel.className = 'boot-error__panel';
  const message = document.createElement('p');
  message.textContent = 'うまく ひらけなかったよ';
  const retry = document.createElement('button');
  retry.className = 'boot-error__retry';
  retry.type = 'button';
  retry.textContent = 'もういちど';
  retry.addEventListener('pointerdown', requestStart, { once: true });
  panel.append(message, retry);
  element.appendChild(panel);
  document.body.appendChild(element);
}

async function beginStartup() {
  if (startup) return startup;
  startup = (async () => {
    const appModulePromise = import('./app.js');
    const [, { createApp }] = await Promise.all([
      prepareStartupTextures(),
      appModulePromise
    ]);
    app = createApp({
      audioContext: gestureAudioContext,
      onProgress: paintStartupProgress
    });
    window.__APP__ = app;
    await app.init();
    appReady = true;
    document.getElementById('boot-error')?.remove();
    paintLoading(false);
    if (startRequested) app.ui.startGame();
    return app;
  })().catch((error) => {
    startup = null;
    appReady = false;
    paintLoading(false);
    showBootError(error);
    throw error;
  });
  return startup;
}

function requestStart(event) {
  event?.preventDefault?.();
  startRequested = true;
  unlockAudioFromGesture();
  paintLoading(true, startupProgress);
  beginStartup().catch(() => {});
  // UI is constructed before room/baby compilation completes. Starting in
  // that narrow window would race activity build against App.init().
  if (appReady) app.ui.startGame();
}

startButton?.addEventListener('pointerdown', requestStart, { capture: true });
startButton?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') requestStart(event);
}, { capture: true });

// Two frames guarantee that the lightweight HTML/CSS title paints before any
// module parsing or procedural generation starts.
requestAnimationFrame(() => requestAnimationFrame(() => {
  const schedule = window.requestIdleCallback || ((fn) => setTimeout(fn, 32));
  schedule(() => beginStartup().catch(() => {}), { timeout: 250 });
}));

// Network-first caching keeps development updates immediate while allowing a
// previously opened game to start again without a connection.
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(error => {
      console.warn('[offline] service worker registration failed', error);
    });
  }, { once: true });
}
