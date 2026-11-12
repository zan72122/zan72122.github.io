// History snapshots can retain many games' GPU buffers on mobile browsers.
// Release a cached game's context; rebuild it if the child returns via Forward.
if (typeof document !== 'undefined') {
  let released = false;
  window.addEventListener('pagehide', event => {
    if (!event.persisted) return;
    for (const canvas of document.querySelectorAll('canvas')) {
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) continue;
      const lose = gl.getExtension('WEBGL_lose_context');
      if (lose) { released = true; lose.loseContext(); }
    }
  });
  window.addEventListener('pageshow', event => {
    if (event.persisted && released) location.reload();
  });
}
