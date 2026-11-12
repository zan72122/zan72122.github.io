// 指一本の入力。優先順位: 選択中のタグ(画面下の模型) → 前面の有効な貼付位置 → 床のタグ。
// 判定は最低 72 CSS px(半径36)。遠い貼付位置は見た目より広く。長押しは一操作、多指は最初の一本だけ。
export const HIT = {
  minRadius: 36,
  slotScale: 2.2, // 見た目の半径に対する判定の倍率
  slotDirect: 26,
  tagScale: 1.15,
  dragStart: 14,
  snapRadius: 120,
  overlayMin: 64,
};

export function createInput(canvas, api) {
  let active = null;
  const rectOf = () => canvas.getBoundingClientRect();
  const local = (e) => {
    const r = rectOf();
    return { x: e.clientX - r.left, y: e.clientY - r.top, w: r.width, h: r.height };
  };

  function openSlots(w, h) {
    const st = api.state();
    return api.world.screenSlots(w, h).filter((s) => st.slots[s.id].tag < 0 && s.depth < 1);
  }
  function slotHitRadius(s) {
    return Math.max(HIT.minRadius, s.visR * HIT.slotScale);
  }
  // 前面の有効な貼付位置: 指の真下(直撃)があればそれ、なければ判定内で最も手前
  function pickSlot(p, w, h) {
    const cands = [];
    for (const s of openSlots(w, h)) {
      const d = Math.hypot(s.x - p.x, s.y - p.y);
      if (d <= slotHitRadius(s)) cands.push({ s, d });
    }
    if (!cands.length) return null;
    const direct = cands.filter((c) => c.d <= Math.max(HIT.slotDirect, c.s.visR * 1.2));
    if (direct.length) return direct.sort((a, b) => a.d - b.d)[0].s;
    return cands.sort((a, b) => a.s.depth - b.s.depth)[0].s;
  }
  function nearestSlotForDrop(p, w, h) {
    let best = null, bd = Infinity;
    for (const s of openSlots(w, h)) {
      const d = Math.hypot(s.x - p.x, s.y - p.y);
      const lim = Math.max(HIT.snapRadius, slotHitRadius(s) * 1.4);
      if (d <= lim && d < bd) { bd = d; best = s; }
    }
    return best;
  }
  function pickFloorTag(p, w, h) {
    const st = api.state();
    let best = null, bd = Infinity;
    for (const t of api.world.screenTags(w, h)) {
      const tag = st.tags[t.id];
      if (tag.state !== 'floor' || tag.carry !== 'home') continue;
      const d = Math.hypot(t.x - p.x, t.y - p.y);
      const r = Math.max(HIT.minRadius, t.visR * HIT.tagScale);
      if (d <= r && d < bd) { bd = d; best = t; }
    }
    return best;
  }
  function overlayHit(p) {
    const ov = api.overlay();
    if (!ov.visible || api.state().selected < 0) return false;
    const r = Math.max(HIT.overlayMin, ov.sizePx * 0.55);
    return Math.hypot(p.x - ov.cx, p.y - ov.cy) <= r;
  }

  function onDown(e) {
    if (active) { e.preventDefault(); return; } // 最初の一本だけ
    if (!api.canPlay()) return;
    e.preventDefault();
    const p = local(e);
    api.noteInput(e.timeStamp);
    const st = api.state();
    let kind = 'none', target = -1;
    if (st.selected >= 0 && overlayHit(p)) {
      kind = 'overlay';
    } else if (st.selected >= 0) {
      const s = pickSlot(p, p.w, p.h);
      if (s) { api.attach(s.id); kind = 'done'; target = s.id; }
    }
    if (kind === 'none') {
      const t = pickFloorTag(p, p.w, p.h);
      if (t) { api.select(t.id); kind = 'floorTag'; target = t.id; }
    }
    if (kind === 'none' && st.selected < 0) {
      // 何も持たずに粘液へ触れたら、床のタグが軽く起き上がって誘い返す
      const near = openSlots(p.w, p.h).find((s) => Math.hypot(s.x - p.x, s.y - p.y) <= slotHitRadius(s));
      if (near) api.hint(near.id);
    }
    active = { id: e.pointerId, x0: p.x, y0: p.y, kind, target, dragging: false };
    try { canvas.setPointerCapture(e.pointerId); } catch (_) { /* 無視 */ }
  }
  function onMove(e) {
    if (!active || e.pointerId !== active.id) return;
    e.preventDefault();
    const p = local(e);
    if ((active.kind === 'overlay' || active.kind === 'floorTag') && api.state().selected >= 0) {
      if (!active.dragging && Math.hypot(p.x - active.x0, p.y - active.y0) > HIT.dragStart) active.dragging = true;
      if (active.dragging) {
        api.setDrag({ x: p.x, y: p.y });
        const s = nearestSlotForDrop(p, p.w, p.h);
        api.setSnap(s ? s.id : -1);
      }
    }
  }
  function finish(e, cancelled) {
    if (!active || e.pointerId !== active.id) return;
    const p = local(e);
    const a = active;
    active = null;
    try { canvas.releasePointerCapture(e.pointerId); } catch (_) { /* 無視 */ }
    api.setSnap(-1);
    if (cancelled) {
      api.setDrag(null);
      if (a.dragging || a.kind === 'overlay' || a.kind === 'floorTag') api.interrupt();
      return;
    }
    if (a.dragging) {
      // 最寄りの有効位置へ吸着。無効位置なら選択位置(画面下)へ戻る
      const s = nearestSlotForDrop(p, p.w, p.h);
      if (s && api.state().selected >= 0) api.attach(s.id);
      api.setDrag(null);
      return;
    }
    if (a.kind === 'overlay') api.deselect();
  }
  canvas.addEventListener('pointerdown', onDown, { passive: false });
  canvas.addEventListener('pointermove', onMove, { passive: false });
  canvas.addEventListener('pointerup', (e) => finish(e, false));
  canvas.addEventListener('pointercancel', (e) => finish(e, true));
  canvas.addEventListener('lostpointercapture', (e) => { if (active && e.pointerId === active.id) finish(e, true); });
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  // Safari の拡大操作を止める
  for (const t of ['gesturestart', 'gesturechange', 'gestureend', 'dblclick']) document.addEventListener(t, (e) => e.preventDefault(), { passive: false });
  document.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

  return {
    cancel() {
      if (!active) return;
      active = null;
      api.setSnap(-1);
      api.setDrag(null);
    },
    get active() { return active; },
    pickSlot, pickFloorTag, overlayHit,
  };
}
