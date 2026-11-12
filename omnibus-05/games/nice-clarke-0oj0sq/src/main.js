// Entry point: boot the game, show a friendly fallback if WebGL is missing.
import { Game } from './game.js';

const params = new URLSearchParams(location.search);

function boot() {
  const stage = document.getElementById('stage');
  let game;
  try {
    game = new Game(stage, params);
  } catch (e) {
    console.error(e);
    document.getElementById('fail').style.display = 'grid';
    return;
  }
  window.__game = game;
  // Reveal after the first rendered frame, without an additional fixed wait.
  requestAnimationFrame(() => {
    document.getElementById('boot').classList.add('gone');
    window.__ready = true;
  });
  const again = document.getElementById('again');
  again.addEventListener('pointerup', (e) => {
    e.stopPropagation();
    location.reload();
  });
}

boot();
