// Entry point.
const params = new URLSearchParams(location.search);

window.addEventListener('error', (e) => {
  window.__errors = window.__errors || [];
  window.__errors.push(String(e.message || e));
});

async function boot() {
  if (params.get('view')) {
    const { runViewer } = await import('./viewer.js');
    return runViewer(params);
  }
  const { Game } = await import('./game.js');
  const game = new Game(params);
  await game.init();
  window.__game = game;
}

boot().catch((e) => {
  console.error(e);
  window.__errors = window.__errors || [];
  window.__errors.push(String(e && e.stack ? e.stack : e));
});
