// 文字を使わない絵ボタン: 休止/再生、初期化(丸い戻り矢印)、滑走の再演、開始の大きな手形
const ICONS = {
  pause: '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="17" y="14" width="11" height="36" rx="4"/><rect x="36" y="14" width="11" height="36" rx="4"/></svg>',
  play: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M22 13 L52 32 L22 51 Z" stroke-linejoin="round" stroke-width="6"/></svg>',
  reset: '<svg viewBox="0 0 64 64" aria-hidden="true"><path class="ln" d="M47 22 A19 19 0 1 0 51 36" fill="none" stroke-width="7" stroke-linecap="round"/><path d="M38 8 L54 20 L36 27 Z" stroke-linejoin="round" stroke-width="3"/></svg>',
  slide: '<svg viewBox="0 0 64 64" aria-hidden="true"><path class="ln" d="M8 14 C 26 14, 24 40, 56 50" fill="none" stroke-width="7" stroke-linecap="round"/><circle cx="20" cy="12" r="6"/><path class="ln" d="M14 52 L 56 52" fill="none" stroke-width="4" stroke-linecap="round" opacity="0.6"/></svg>',
  hand: '<svg viewBox="0 0 120 140" aria-hidden="true"><path d="M50 10 c7 0 12 5 12 12 v40 l2-1 c2-7 15-8 18 1 c3-6 15-6 17 3 c3-5 14-4 15 6 v30 c0 22-15 36-37 36 h-6 c-15 0-24-6-31-17 l-20-30 c-4-6 0-13 7-13 c4 0 7 2 10 5 l7 9 V22 c0-7 5-12 12-12 Z"/></svg>',
};

export function createUI(root, handlers) {
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html) e.innerHTML = html;
    root.appendChild(e);
    return e;
  };
  const veil = el('div', 'veil');
  const pause = el('button', 'btn btn-pause', ICONS.pause);
  pause.setAttribute('aria-label', 'pause');
  const reset = el('button', 'btn btn-reset', ICONS.reset);
  reset.setAttribute('aria-label', 'reset');
  const replay = el('button', 'btn btn-replay', ICONS.slide);
  replay.setAttribute('aria-label', 'replay');
  const start = el('div', 'start');
  const hand = document.createElement('div');
  hand.className = 'hand';
  hand.innerHTML = ICONS.hand;
  start.appendChild(hand);

  // 押して同じボタンの上で離したら一回だけ動く(長押しも一操作)
  const bind = (b, fn) => {
    let downId = null;
    b.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (downId !== null) return;
      downId = e.pointerId;
      b.classList.add('down');
      try { b.setPointerCapture(e.pointerId); } catch (_) { /* 無視 */ }
    });
    const end = (e, fire) => {
      if (e.pointerId !== downId) return;
      downId = null;
      b.classList.remove('down');
      if (!fire) return;
      const r = b.getBoundingClientRect();
      if (e.clientX >= r.left - 8 && e.clientX <= r.right + 8 && e.clientY >= r.top - 8 && e.clientY <= r.bottom + 8) fn();
    };
    b.addEventListener('pointerup', (e) => { e.stopPropagation(); end(e, true); });
    b.addEventListener('pointercancel', (e) => end(e, false));
  };
  bind(pause, () => handlers.onPause());
  bind(reset, () => handlers.onReset());
  bind(replay, () => handlers.onReplay());
  bind(start, () => handlers.onStart());

  const state = { paused: false, phase: 'intro' };
  function sync(s) {
    state.paused = s.paused;
    state.phase = s.phase;
    pause.innerHTML = s.paused ? ICONS.play : ICONS.pause;
    pause.classList.toggle('is-play', s.paused);
    start.classList.toggle('show', s.phase === 'intro');
    veil.classList.toggle('show', s.paused);
    reset.classList.toggle('show', s.paused || s.phase === 'end');
    replay.classList.toggle('show', s.phase === 'end' && !s.paused);
    pause.classList.toggle('show', s.phase !== 'intro');
  }
  return { sync, elements: { pause, reset, replay, start, veil } };
}
