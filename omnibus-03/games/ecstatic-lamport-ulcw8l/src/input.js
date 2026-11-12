/**
 * input.js — キーボード / マウス / タッチを 1 つの状態に統合する。
 *
 * 操作の設計思想:
 *   Flip Diving の "押している間まわる / 離すと伸びる" を core として温存し、
 *   その上に「えび型(PIKE)」と「ひねり(TWIST)」を重ねて表現の幅を出す。
 *     front  : 前方向に回る            (Space / 左クリック / 画面右)
 *     back   : 後方向に回る            (A,←   / 右クリック / 画面左)
 *     pike   : front/back と同時押しで えび型 (Shift,S,↓ / 画面中央)
 *              単独ではブレーキ(フレア)として回転を殺す
 *     twist  : ひねりを入れる          (Q,E   / 横スワイプ)
 */

const ZONE_BACK_END = 0.38;
const ZONE_PIKE_END = 0.62;

export class Input {
  constructor(el) {
    this.el = el;
    this.front = false;
    this.back = false;
    this.pike = false;
    this.pikePressed = false;   // 立ち上がりエッジ(ウォールキック用)
    this.twist = 0;          // -1 / 0 / +1 (1フレームだけ立つエッジ)
    this.twistHeld = 0;
    this.restart = false;
    this.pausePressed = false;
    this.anyPressed = false; // このフレームで新規に押されたか
    this.hasTouch = false;

    this._keys = new Set();
    this._touches = new Map();
    this._pointerZones = new Map();
    this._swipe = new Map();
    this._listeners = [];

    this._bind();
  }

  get any() { return this.front || this.back; }

  /** フレーム末に呼ぶ。エッジ入力を消費する。 */
  endFrame() {
    this.twist = 0;
    this.restart = false;
    this.pausePressed = false;
    this.anyPressed = false;
    this.pikePressed = false;
  }

  _bind() {
    const on = (t, ev, fn, opts) => { t.addEventListener(ev, fn, opts); this._listeners.push([t, ev, fn]); };

    on(window, 'keydown', (e) => {
      if (e.repeat) return;
      const k = e.key.toLowerCase();
      if ([' ', 'arrowleft', 'arrowright', 'arrowdown', 'arrowup'].includes(k)) e.preventDefault();
      this._keys.add(k);
      if (k === ' ' || k === 'w' || k === 'arrowup') this._press('front');
      if (k === 'a' || k === 'arrowleft') this._press('back');
      if (k === 'shift' || k === 's' || k === 'arrowdown') this._pikeOn();
      if (k === 'd' || k === 'arrowright') this._press('front');
      if (k === 'q') { this.twist = -1; this.twistHeld = -1; }
      if (k === 'e') { this.twist = 1; this.twistHeld = 1; }
      if (k === 'r') this.restart = true;
      if (k === 'escape' || k === 'p') this.pausePressed = true;
    });

    on(window, 'keyup', (e) => {
      const k = e.key.toLowerCase();
      this._keys.delete(k);
      if (k === ' ' || k === 'w' || k === 'arrowup' || k === 'd' || k === 'arrowright') {
        if (!this._keys.has(' ') && !this._keys.has('w') && !this._keys.has('d') &&
            !this._keys.has('arrowup') && !this._keys.has('arrowright')) this.front = false;
      }
      if (k === 'a' || k === 'arrowleft') this.back = false;
      if (k === 'shift' || k === 's' || k === 'arrowdown') this.pike = false;
      if (k === 'q' || k === 'e') this.twistHeld = 0;
    });

    on(window, 'blur', () => this._releaseAll());

    // --- マウス ---
    on(this.el, 'mousedown', (e) => {
      e.preventDefault();
      if (e.button === 0) this._press(e.shiftKey ? 'pikeFront' : 'front');
      else if (e.button === 2) this._press('back');
      else if (e.button === 1) this._pikeOn();
    });
    on(window, 'mouseup', (e) => {
      if (e.button === 0) this.front = false;
      else if (e.button === 2) this.back = false;
      else if (e.button === 1) this.pike = false;
    });
    on(this.el, 'contextmenu', (e) => e.preventDefault());

    // --- タッチ ---
    const zoneOf = (x) => {
      const f = x / window.innerWidth;
      if (f < ZONE_BACK_END) return 'back';
      if (f < ZONE_PIKE_END) return 'pike';
      return 'front';
    };
    on(this.el, 'touchstart', (e) => {
      e.preventDefault();
      this.hasTouch = true;
      for (const t of e.changedTouches) {
        const z = zoneOf(t.clientX);
        this._touches.set(t.identifier, z);
        this._swipe.set(t.identifier, { x: t.clientX, fired: false });
        if (z === 'pike') this._pikeOn(); else this._press(z);
      }
    }, { passive: false });
    on(this.el, 'touchmove', (e) => {
      e.preventDefault();
      for (const t of e.changedTouches) {
        const s = this._swipe.get(t.identifier);
        if (!s || s.fired) continue;
        const dx = t.clientX - s.x;
        if (Math.abs(dx) > 70) { this.twist = Math.sign(dx); this.twistHeld = Math.sign(dx); s.fired = true; }
      }
    }, { passive: false });
    const endTouch = (e) => {
      for (const t of e.changedTouches) {
        const z = this._touches.get(t.identifier);
        this._touches.delete(t.identifier);
        this._swipe.delete(t.identifier);
        if (!z) continue;
        const stillHeld = [...this._touches.values()].includes(z);
        if (!stillHeld) { if (z === 'pike') this.pike = false; else this[z] = false; }
      }
      if (this._touches.size === 0) this.twistHeld = 0;
    };
    on(this.el, 'touchend', endTouch, { passive: false });
    on(this.el, 'touchcancel', endTouch, { passive: false });
  }

  _pikeOn() { if (!this.pike) this.pikePressed = true; this.pike = true; }

  _press(kind) {
    if (kind === 'pikeFront') { this._pikeOn(); kind = 'front'; }
    if (!this[kind]) this.anyPressed = true;
    this[kind] = true;
  }

  _releaseAll() {
    this.front = this.back = this.pike = false;
    this.twistHeld = 0;
    this._keys.clear();
    this._touches.clear();
  }

  dispose() { for (const [t, ev, fn] of this._listeners) t.removeEventListener(ev, fn); }
}
