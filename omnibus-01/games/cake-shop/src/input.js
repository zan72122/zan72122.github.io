// Pointer dispatch and visibility audio lifecycle, independent of orientation.
export function bindInput({ THREE, audio, resetIdle, clientToStage, uiLayer, HUD,
                            el, wipeReset, getTransitioning, getCurrent }) {
const wrap = document.getElementById('stage-wrap');
let activeId = null;

function actOf(e) {
  let n = e.target;
  while (n && n !== wrap) {
    if (n.dataset && n.dataset.act) return n.dataset.act;
    n = n.parentNode instanceof Element ? n.parentNode : null;
  }
  return null;
}

function evInfo(e) {
  return {
    stage: clientToStage(e.clientX, e.clientY),
    ndc: new THREE.Vector2(
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1
    )
  };
}

wrap.addEventListener('pointerdown', e => {
  e.preventDefault();
  if (activeId !== null) return;
  activeId = e.pointerId;
  try { wrap.setPointerCapture(e.pointerId); } catch (err) {}
  audio.unlock();
  resetIdle();
  if (getTransitioning()) return;
  const act = actOf(e);
  const info = evInfo(e);
  // グローバルなHUDアクション
  if (act === 'btn-home') { audio.click(); uiLayer.insertAdjacentHTML('beforeend', HUD.confirmPop()); return; }
  if (act === 'confirm-yes') { audio.click(); el('confirm-pop').remove(); wipeReset('title'); return; }
  if (act === 'confirm-no') { audio.tap(); el('confirm-pop').remove(); return; }
  if (el('confirm-pop')) return;
  if (getCurrent() && getCurrent().onDown) getCurrent().onDown(info, act);
});
wrap.addEventListener('pointermove', e => {
  if (e.pointerId !== activeId || getTransitioning()) return;
  e.preventDefault();
  if (getCurrent() && getCurrent().onMove) getCurrent().onMove(evInfo(e));
});
const up = e => {
  if (e.pointerId !== activeId) return;
  activeId = null;
  if (getTransitioning()) return;
  if (getCurrent() && getCurrent().onUp) getCurrent().onUp(evInfo(e), actOf(e));
};
wrap.addEventListener('pointerup', up);
wrap.addEventListener('pointercancel', up);

document.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('dblclick', e => e.preventDefault());

document.addEventListener('visibilitychange', () => {
  if (document.hidden) audio.suspend(); else audio.resume();
});
}
