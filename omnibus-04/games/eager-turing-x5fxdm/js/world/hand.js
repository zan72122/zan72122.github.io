// Finger gestures on stickers: press (squish), smear (moving dent), stroke (fur / satin),
// peel (edge curl that follows the finger), hold (sticker hangs from the finger with a
// shadow) and drop (stick onto a page / sheet, or fly back home).
import { audio } from '../core/audio.js';
import { clamp, lerp, PI, angleWrap } from '../core/math.js';

const MOVE_START = 9;

// tiny haptic tick where supported (Android); silently ignored elsewhere
export function buzz(ms) {
  try {
    if (navigator.vibrate) navigator.vibrate(ms);
  } catch (e) {
    /* ignore */
  }
}

export function pressSound(st, strength = 1) {
  const m = st.mat;
  const p = 0.85 + 30 / Math.max(40, st.size * 0.6);
  if (m === 'jelly') audio.jelly({ intensity: 0.6 * strength, pitch: p });
  else if (m === 'liquid') { audio.liquid({ intensity: 0.6 * strength }); audio.sparkle({ intensity: 0.3 }); }
  else if (m === 'pearl') audio.pearlTap({ pitch: p });
  else if (m === 'holo') audio.gemTap({ pitch: p });
  else if (m === 'fur') audio.fur({ intensity: 0.6 * strength });
  else if (m === 'satin') audio.fur({ intensity: 0.35 * strength });
  else audio.squish({ intensity: 0.65 * strength, pitch: p });
}

export class StickerGesture {
  constructor(game, sticker, container, x, y, hit) {
    this.game = game;
    this.st = sticker;
    this.box = container;
    this.mode = 'press';
    this.start = [x, y];
    this.last = [x, y];
    const band = sticker.mat === 'fur' || sticker.mat === 'satin' ? 0.07 : 0.13;
    this.edgeGrab = hit.edge && hit.wall < sticker.size * band;
    this.touchLocal = hit.local;
    this.t = 0;
    this.lastUV = hit.uv;
    sticker.idle = 0;
    if (!this.edgeGrab || hit.inside) {
      sticker.pressAt(hit.uv[0], hit.uv[1], this.edgeGrab ? 0.45 : 1);
      pressSound(sticker, this.edgeGrab ? 0.5 : 1);
    }
    this.crackAcc = 0;
    game.touchedSomething();
  }

  local(x, y) {
    const [cx, cy] = this.box.toLocal(x, y);
    return this.st.toLocal(cx, cy);
  }

  startPeel(lx, ly) {
    const st = this.st;
    if (st.locked) {
      // not yours yet: it only squishes, and the owner reacts
      if (this.box.lockedPull) this.box.lockedPull(st);
      this.mode = 'locked';
      return;
    }
    st.releasePress();
    st.beginPeel(lx, ly);
    this.peelT = [lx, ly];
    this.mode = 'peel';
    audio.peelStart({ intensity: 0.6 });
  }

  move(x, y, dt) {
    this.t += dt;
    const st = this.st;
    const dist = Math.hypot(x - this.start[0], y - this.start[1]);
    const [lx, ly] = this.local(x, y);
    const S = st.size;
    if (this.mode === 'press' && dist > MOVE_START) {
      if (this.edgeGrab) {
        this.startPeel(this.touchLocal[0], this.touchLocal[1]);
      } else {
        this.mode = st.mat === 'fur' || st.mat === 'satin' ? 'stroke' : 'smear';
      }
    }
    if (this.mode === 'smear' || this.mode === 'stroke') {
      const u = lx / S + 0.5, v = ly / S + 0.5;
      const h = st.hit(...this.box.toLocal(x, y), 0);
      if (h && h.inside) {
        if (this.mode === 'stroke') {
          const du = u - this.lastUV[0], dv = v - this.lastUV[1];
          st.stroke(u, v, du, dv, 1);
          st.pressAt(u, v, 0.5);
          const speed = Math.hypot(x - this.last[0], y - this.last[1]) / Math.max(dt, 1e-3);
          audio.setBrush(clamp(speed / 900, 0, 1), st.mat === 'satin' ? 'satin' : 'fur');
        } else {
          st.pressAt(u, v, 1);
          if (st.glitter && Math.random() < dt * 8) audio.sparkle({ intensity: 0.25 });
        }
        this.lastUV = [u, v];
      } else {
        // finger slid off the sticker: grab the nearest edge and start peeling
        audio.setBrush(0);
        const k = st.nearestBoundary(lx, ly);
        const G = st.boundaryLocal(k);
        if (Math.hypot(lx - G[0], ly - G[1]) > 12 / this.box.unitPx || true) {
          this.startPeel(G[0], G[1]);
          this.st.peel.T = [lx, ly];
        }
      }
    }
    if (this.mode === 'peel') {
      st.dragPeel(lx, ly);
      const pe = st.peel;
      if (pe) {
        const dd = pe.d - (this.prevD ?? pe.d);
        this.prevD = pe.d;
        if (dd > 0) {
          this.crackAcc += dd * this.box.unitPx;
          const speed = dd * this.box.unitPx / Math.max(dt, 1e-3);
          while (this.crackAcc > 2.2) {
            this.crackAcc -= 2.2;
            audio.peelClick({ intensity: clamp(0.35 + speed / 900, 0.3, 1) });
          }
        }
        if (pe.d > pe.extent * 0.7 || pe.dT > pe.extent * 0.95) {
          this.detach(x, y);
        }
      }
    }
    if (this.mode === 'held') {
      this.game.held.target = [x, y];
    }
    if (this.mode === 'locked') {
      const h = st.hit(...this.box.toLocal(x, y), 0);
      if (h && h.inside) st.pressAt(h.uv[0], h.uv[1], 0.6);
    }
    this.last = [x, y];
  }

  detach(x, y) {
    const st = this.st;
    const g = this.game;
    const pe = st.peel;
    // world-space anchor of the grabbed edge
    const box = this.box;
    const origin = box.detach(st);
    const unitPx = box.unitPx;
    const [cx, cy] = box.toWorld(st.x, st.y);
    st.x = cx;
    st.y = cy;
    st.rot = st.rot + (box.worldRot || 0);
    st.unit = st.unit * unitPx;
    // grab point in local units (scaled to px)
    const G = pe ? [pe.G[0] * unitPx, pe.G[1] * unitPx] : [0, 0];
    st.peel = pe ? { ...pe, G: [pe.G[0] * unitPx, pe.G[1] * unitPx], R: pe.R * unitPx, d: pe.d * unitPx, extent: pe.extent * unitPx, releasing: true, dT: 0, thT: 0 } : null;
    st.restCurl = null;
    g.held = {
      st,
      origin,
      grab: G,
      target: [x, y],
      pos: [x, y],
      vel: [0, 0],
      ang: st.rot,
      angV: 0,
      rest: st.rot,
      lift: 0,
      unit0: st.unit,
    };
    this.mode = 'held';
    if (box.taken) box.taken(st);
    audio.peelPop({ intensity: 0.8 });
    buzz(14);
    g.onPeeled(st, origin);
  }

  up(x, y) {
    const st = this.st;
    audio.setBrush(0);
    if (this.mode === 'press' || this.mode === 'smear' || this.mode === 'stroke' || this.mode === 'locked') {
      st.releasePress();
      if (!st.hard) {
        if (st.mat === 'jelly') audio.jelly({ intensity: 0.3, pitch: 1.2 });
        else if (st.mat !== 'fur' && st.mat !== 'satin') audio.unsquish({ intensity: 0.45 });
      }
    } else if (this.mode === 'peel') {
      st.releasePeel();
      audio.restick({ intensity: 0.5 });
    } else if (this.mode === 'held') {
      this.game.dropHeld(x, y);
    }
  }

  cancel() {
    this.up(this.last[0], this.last[1]);
  }
}

// Advance the held sticker: it hangs from the grab point, trails behind motion, tilts
// into the movement and casts a lifted shadow.
export function updateHeld(h, dt, unitTarget) {
  const st = h.st;
  const pv = [h.pos[0], h.pos[1]];
  const k = 1 - Math.exp(-dt * 30);
  h.pos[0] += (h.target[0] - h.pos[0]) * k;
  h.pos[1] += (h.target[1] - h.pos[1]) * k;
  const vx = (h.pos[0] - pv[0]) / Math.max(dt, 1e-3);
  const vy = (h.pos[1] - pv[1]) / Math.max(dt, 1e-3);
  h.vel[0] = lerp(h.vel[0], vx, 0.3);
  h.vel[1] = lerp(h.vel[1], vy, 0.3);
  // size eases toward the size it will have where it would land
  if (unitTarget) {
    const s0 = st.unit;
    st.unit = lerp(st.unit, unitTarget, 1 - Math.exp(-dt * 8));
    const r = st.unit / s0;
    h.grab[0] *= r;
    h.grab[1] *= r;
  }
  // pendulum about the grab point
  const c = Math.cos(h.ang), s = Math.sin(h.ang);
  const gx = c * h.grab[0] - s * h.grab[1], gy = s * h.grab[0] + c * h.grab[1];
  const rx = -gx, ry = -gy; // grab -> centre
  const rl = Math.hypot(rx, ry) + 1e-3;
  const sp = Math.hypot(h.vel[0], h.vel[1]);
  let torque = 0;
  if (sp > 30 && rl > 4) {
    // centre wants to trail opposite to the motion
    const cross = (rx / rl) * (-h.vel[1] / sp) - (ry / rl) * (-h.vel[0] / sp);
    torque += cross * Math.min(sp, 1500) * 0.012;
  }
  torque += angleWrap(h.rest - h.ang) * 6;
  h.angV += (torque - h.angV * 5) * dt;
  h.ang += h.angV * dt;
  const c2 = Math.cos(h.ang), s2 = Math.sin(h.ang);
  st.rot = h.ang;
  st.x = h.pos[0] - (c2 * h.grab[0] - s2 * h.grab[1]);
  st.y = h.pos[1] - (s2 * h.grab[0] + c2 * h.grab[1]);
  h.lift += (st.size * 0.42 - h.lift) * (1 - Math.exp(-dt * 10));
  st.lift = h.lift;
  st.sway[0] = clamp(h.vel[1] * 0.00045, -0.35, 0.35);
  st.sway[1] = clamp(-h.vel[0] * 0.00045, -0.35, 0.35);
  st.gravity = [h.vel[0] * -0.002, 0.2 + h.vel[1] * -0.002];
}

export { PI };
