// input.js — キーボード + マルチポインタ(バーチャルスティック / ジャンプ / カメラドラッグ)
// 毎フレーム updateInput() で正規化した入力状態を input に反映し、
// フレーム末尾に endFrame() でエッジ系フラグをクリアする。

export const input = {
  moveX: 0,        // 右 +1 / 左 -1 (カメラ基準)
  moveZ: 0,        // 前 +1 / 後 -1
  jumpPressed: false, // 押した瞬間のみ true(消費したら false にしてよい)
  jumpHeld: false,
  dash: false,
  camTurn: 0,      // Q/E: -1..+1
  camDragX: 0,     // ドラッグ累積px(カメラ側で消費)
};

const keys = new Set();
let jumpEdge = false;
let touchJumpHeld = false;
let jumpPointerId = null;

const stick = { id: null, x: 0, y: 0, baseX: 0, baseY: 0, far: false };
const camDrag = { id: null, lastX: 0 };

const PREVENT_KEYS = new Set(['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']);
const STICK_RADIUS = 52;

export function initInput(canvas) {
  window.addEventListener('keydown', (e) => {
    if (PREVENT_KEYS.has(e.code)) e.preventDefault();
    if (e.repeat) return;
    keys.add(e.code);
    if (e.code === 'Space') jumpEdge = true;
  });
  window.addEventListener('keyup', (e) => keys.delete(e.code));
  window.addEventListener('blur', () => {
    keys.clear();
    touchJumpHeld = false;
  });

  // --- バーチャルスティック(タッチ位置を原点とするフローティング式) ---
  const area = document.getElementById('stick-area');
  const base = document.getElementById('stick-base');
  const knob = document.getElementById('stick-knob');

  const placeBase = (x, y) => {
    const rect = area.getBoundingClientRect();
    base.style.left = `${x - rect.left}px`;
    base.style.top = `${y - rect.top}px`;
  };
  const setKnob = (dx, dy) => {
    knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
  };

  area.addEventListener('pointerdown', (e) => {
    if (stick.id !== null) return;
    stick.id = e.pointerId;
    stick.baseX = e.clientX;
    stick.baseY = e.clientY;
    stick.x = 0;
    stick.y = 0;
    stick.far = false;
    area.setPointerCapture(e.pointerId);
    base.classList.add('active');
    placeBase(e.clientX, e.clientY);
    setKnob(0, 0);
    e.preventDefault();
  });
  area.addEventListener('pointermove', (e) => {
    if (e.pointerId !== stick.id) return;
    let dx = e.clientX - stick.baseX;
    let dy = e.clientY - stick.baseY;
    const len = Math.hypot(dx, dy);
    if (len > STICK_RADIUS) {
      dx *= STICK_RADIUS / len;
      dy *= STICK_RADIUS / len;
    }
    stick.x = dx / STICK_RADIUS;
    stick.y = dy / STICK_RADIUS;
    stick.far = len > STICK_RADIUS * 0.85;
    setKnob(dx, dy);
  });
  const releaseStick = (e) => {
    if (e.pointerId !== stick.id) return;
    stick.id = null;
    stick.x = 0;
    stick.y = 0;
    stick.far = false;
    base.classList.remove('active');
    setKnob(0, 0);
  };
  area.addEventListener('pointerup', releaseStick);
  area.addEventListener('pointercancel', releaseStick);

  // --- ジャンプボタン ---
  const jumpBtn = document.getElementById('btn-jump');
  jumpBtn.addEventListener('pointerdown', (e) => {
    jumpPointerId = e.pointerId;
    jumpBtn.setPointerCapture(e.pointerId);
    jumpEdge = true;
    touchJumpHeld = true;
    jumpBtn.classList.add('pressed');
    e.preventDefault();
  });
  const releaseJump = (e) => {
    if (e.pointerId !== jumpPointerId) return;
    jumpPointerId = null;
    touchJumpHeld = false;
    jumpBtn.classList.remove('pressed');
  };
  jumpBtn.addEventListener('pointerup', releaseJump);
  jumpBtn.addEventListener('pointercancel', releaseJump);

  // --- カメラドラッグ(canvas 上のポインタ) ---
  canvas.addEventListener('pointerdown', (e) => {
    if (camDrag.id !== null) return;
    camDrag.id = e.pointerId;
    camDrag.lastX = e.clientX;
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', (e) => {
    if (e.pointerId !== camDrag.id) return;
    input.camDragX += e.clientX - camDrag.lastX;
    camDrag.lastX = e.clientX;
  });
  const releaseCam = (e) => {
    if (e.pointerId !== camDrag.id) return;
    camDrag.id = null;
  };
  canvas.addEventListener('pointerup', releaseCam);
  canvas.addEventListener('pointercancel', releaseCam);

  // --- iOS のジェスチャ干渉を抑止 ---
  document.addEventListener('gesturestart', (e) => e.preventDefault());
  document.addEventListener('dblclick', (e) => e.preventDefault());
  document.addEventListener('contextmenu', (e) => {
    if (e.target === canvas || area.contains(e.target) || e.target === jumpBtn) e.preventDefault();
  });
}

export function updateInput() {
  const kx =
    (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) -
    (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0);
  const kz =
    (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) -
    (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0);
  let mx = kx + stick.x;
  let mz = kz - stick.y; // スティック上方向(画面-Y)が前
  const m = Math.hypot(mx, mz);
  if (m > 1) {
    mx /= m;
    mz /= m;
  }
  input.moveX = mx;
  input.moveZ = mz;
  input.jumpHeld = keys.has('Space') || touchJumpHeld;
  if (jumpEdge) input.jumpPressed = true;
  input.dash = keys.has('ShiftLeft') || keys.has('ShiftRight') || stick.far;
  input.camTurn = (keys.has('KeyE') ? 1 : 0) - (keys.has('KeyQ') ? 1 : 0);
}

export function endFrame() {
  jumpEdge = false;
  input.jumpPressed = false;
}
