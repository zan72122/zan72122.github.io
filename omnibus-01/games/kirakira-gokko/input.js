/* キラキラ モデルごっこ — タッチ入力(Pointer Events統一・座標変換・委譲) */
window.ModelGame = window.ModelGame || {};

ModelGame.input = (function () {
  var stage = null;
  var activeId = null;     // 追跡中のポインタ(最初の1本だけ。兄弟が触っても壊れない)
  var handlers = { down: null, move: null, up: null, any: null };

  function toStage(e) {
    var pt = stage.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    var m = stage.getScreenCTM();
    if (!m) return { x: 0, y: 0 };
    var p = pt.matrixTransform(m.inverse());
    return { x: p.x, y: p.y };
  }

  // タップされた要素の data-act を遡って探す
  function actOf(e) {
    var el = e.target;
    while (el && el !== stage) {
      if (el.dataset && el.dataset.act) return el.dataset.act;
      el = el.parentNode;
    }
    return null;
  }

  function onDown(e) {
    e.preventDefault();
    if (activeId !== null) return;
    activeId = e.pointerId;
    try { stage.setPointerCapture(e.pointerId); } catch (err) {}
    if (handlers.any) handlers.any();
    var p = toStage(e);
    if (handlers.down) handlers.down(p, actOf(e));
  }

  function onMove(e) {
    if (e.pointerId !== activeId) return;
    e.preventDefault();
    var p = toStage(e);
    if (handlers.move) handlers.move(p);
  }

  function onUp(e) {
    if (e.pointerId !== activeId) return;
    activeId = null;
    var p = toStage(e);
    if (handlers.up) handlers.up(p, actOf(e));
  }

  function init(svgEl, h) {
    stage = svgEl;
    handlers = h;
    stage.addEventListener('pointerdown', onDown);
    stage.addEventListener('pointermove', onMove);
    stage.addEventListener('pointerup', onUp);
    stage.addEventListener('pointercancel', onUp);

    // iOS: ピンチズーム・ダブルタップズーム・スクロールの抑止
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, { passive: false });
    document.addEventListener('gesturestart', function (e) { e.preventDefault(); });
    document.addEventListener('dblclick', function (e) { e.preventDefault(); });
  }

  return { init: init, toStage: toStage };
})();
