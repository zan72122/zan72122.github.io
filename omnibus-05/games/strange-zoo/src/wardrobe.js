// Clothes rack (the girl pulls it through the zoo), garment bundles and the
// drag-to-dress controller.
import { clamp, lerp, damp, E, inv, rand } from './util.js';
import { C, rr, ell, circ, fillStroke, limb, shadow, glint } from './draw.js';
import { audio } from './audio.js';

const LN = '#5a3c2d';
export const JOBS = ['vet', 'carp', 'diver', 'bee'];
const SLOT_X = [-48, -16, 16, 48];
const RAIL_Y = -152;

// ------------------------------------------------------------------ garment art (hook at 0,0)
export function drawBundle(ctx, id, x, y, ang = 0, sc = 1, opts = {}) {
  ctx.save();
  ctx.translate(x, y); ctx.rotate(ang); ctx.scale(sc, sc);
  const lift = opts.lift || 0; // billow while flying
  // hook + hanger bar
  ctx.strokeStyle = '#8d969d'; ctx.lineWidth = 1.8; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(0, -3.5, 3.5, Math.PI * 0.9, Math.PI * 2.25); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 5); ctx.stroke();
  if (id === 'vet') {
    limb(ctx, -17, 12, -21 - lift * 6, 64, 9, '#fbfbf8', LN, 1.3);
    limb(ctx, 17, 12, 21 + lift * 6, 64, 9, '#fbfbf8', LN, 1.3);
    ctx.beginPath(); ctx.moveTo(-17, 8); ctx.lineTo(17, 8); ctx.lineTo(21 + lift * 5, 88); ctx.quadraticCurveTo(0, 91 + lift * 4, -21 - lift * 5, 88); ctx.closePath();
    fillStroke(ctx, '#fbfbf8', LN, 1.5);
    ctx.fillStyle = '#8fc9dc'; ctx.beginPath(); ctx.moveTo(-6, 8); ctx.lineTo(0, 22); ctx.lineTo(6, 8); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = 'rgba(80,70,60,0.5)'; ctx.lineWidth = 1.1;
    ctx.beginPath(); ctx.moveTo(-9, 8); ctx.lineTo(0, 30); ctx.lineTo(9, 8); ctx.moveTo(0, 30); ctx.lineTo(0, 88); ctx.stroke();
    rr(ctx, 5, 52, 9, 8, 1.5); ctx.stroke();
    // stethoscope draped over the hanger
    ctx.strokeStyle = '#4a5560'; ctx.lineWidth = 2.4;
    ctx.beginPath(); ctx.moveTo(-8, 5); ctx.quadraticCurveTo(-11, 26, -3, 34); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(8, 5); ctx.quadraticCurveTo(11, 26, 3, 34); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, 34); ctx.quadraticCurveTo(-2, 42, 4, 47); ctx.stroke();
    circ(ctx, 5, 50, 4.6); fillStroke(ctx, '#cfd6db', LN, 1.2);
    ctx.fillStyle = '#fff'; circ(ctx, 4, 49, 1.4); ctx.fill();
    // doctor's bag hanging on the hook
    rr(ctx, -24, 62, 15, 11, 3); fillStroke(ctx, '#8b5a3a', LN, 1.2);
    ctx.strokeStyle = LN; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(-16.5, 62, 3.5, Math.PI, 0); ctx.stroke();
  } else if (id === 'carp') {
    ctx.strokeStyle = '#4d7eb3'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(-13, 9); ctx.lineTo(-9, 26); ctx.moveTo(13, 9); ctx.lineTo(9, 26); ctx.stroke();
    limb(ctx, -8, 54, -10 - lift * 4, 92, 12, '#4d7eb3', LN, 1.3);
    limb(ctx, 8, 54, 10 + lift * 4, 92, 12, '#4d7eb3', LN, 1.3);
    rr(ctx, -15, 42, 30, 16, 3); fillStroke(ctx, '#4d7eb3', LN, 1.3);
    rr(ctx, -10, 24, 20, 22, 3); fillStroke(ctx, '#4d7eb3', LN, 1.3);
    ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.lineWidth = 0.9; ctx.setLineDash([2, 2]); rr(ctx, -5, 29, 10, 8, 1.5); ctx.stroke(); ctx.setLineDash([]);
    // tool belt + hammer sticking out (silhouette)
    rr(ctx, -18, 45, 36, 7, 2); fillStroke(ctx, '#8a5a33', LN, 1.3);
    ctx.fillStyle = '#d8b04a'; rr(ctx, -3, 45, 6, 7, 1); ctx.fill();
    rr(ctx, -21, 50, 10, 12, 2); fillStroke(ctx, '#9c6a3c', LN, 1.2);
    ctx.save(); ctx.translate(17, 50); ctx.rotate(-0.9);
    rr(ctx, -2, 0, 4, 22, 1.5); fillStroke(ctx, '#c79a62', LN, 1.1);
    rr(ctx, -7, 19, 14, 6, 1.5); fillStroke(ctx, '#8d969d', LN, 1.1);
    ctx.restore();
    // cap on the hook
    ctx.beginPath(); ctx.moveTo(-11, 10); ctx.bezierCurveTo(-11, -4, 11, -4, 11, 10); ctx.closePath(); fillStroke(ctx, '#ea8a3b', LN, 1.3);
    ctx.beginPath(); ctx.moveTo(5, 9); ctx.quadraticCurveTo(15, 8, 18, 12); ctx.lineTo(7, 12); ctx.closePath(); fillStroke(ctx, '#d4742b', LN, 1.1);
  } else if (id === 'diver') {
    rr(ctx, 8, 12, 14, 48, 7); fillStroke(ctx, '#f1c232', LN, 1.4);
    ctx.fillStyle = 'rgba(255,255,255,0.4)'; rr(ctx, 11, 16, 3, 38, 1.5); ctx.fill();
    limb(ctx, -14, 12, -19 - lift * 5, 56, 8, '#2c3544', LN, 1.3);
    limb(ctx, 14, 12, 19 + lift * 5, 56, 8, '#2c3544', LN, 1.3);
    limb(ctx, -7, 46, -9 - lift * 3, 84, 10, '#2c3544', LN, 1.3);
    limb(ctx, 7, 46, 9 + lift * 3, 84, 10, '#2c3544', LN, 1.3);
    rr(ctx, -14, 8, 28, 42, 7); fillStroke(ctx, '#2c3544', LN, 1.5);
    ctx.fillStyle = '#43b8c6'; ctx.fillRect(-13, 14, 4, 30); ctx.fillRect(9, 14, 4, 30);
    ctx.fillStyle = '#15181d'; ctx.fillRect(-14, 40, 28, 4);
    // fins
    for (const s of [-1, 1]) {
      ctx.save(); ctx.translate(s * 9, 84); ctx.rotate(s * 0.12);
      ctx.beginPath(); ctx.moveTo(-5, 0); ctx.lineTo(5, 0); ctx.lineTo(7, 24); ctx.quadraticCurveTo(0, 28, -7, 24); ctx.closePath();
      fillStroke(ctx, '#f1c232', LN, 1.2); ctx.restore();
    }
    // mask hanging from the hook
    ctx.strokeStyle = '#1e2329'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, 2); ctx.lineTo(-8, 18); ctx.moveTo(0, 2); ctx.lineTo(8, 18); ctx.stroke();
    rr(ctx, -12, 16, 24, 14, 6); fillStroke(ctx, '#f1c232', LN, 1.3);
    rr(ctx, -9.5, 18.5, 19, 9, 4); ctx.fillStyle = 'rgba(170,225,245,0.8)'; ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(-6, 21); ctx.lineTo(-2, 20); ctx.stroke();
  } else if (id === 'bee') {
    limb(ctx, -17, 28, -21 - lift * 5, 68, 11, '#f6f5f0', LN, 1.3);
    limb(ctx, 17, 28, 21 + lift * 5, 68, 11, '#f6f5f0', LN, 1.3);
    circ(ctx, -21 - lift * 5, 70, 6); fillStroke(ctx, '#eedfb4', LN, 1.2);
    circ(ctx, 21 + lift * 5, 70, 6); fillStroke(ctx, '#eedfb4', LN, 1.2);
    limb(ctx, -8, 58, -10 - lift * 3, 94, 13, '#f6f5f0', LN, 1.3);
    limb(ctx, 8, 58, 10 + lift * 3, 94, 13, '#f6f5f0', LN, 1.3);
    rr(ctx, -18, 22, 36, 40, 10); fillStroke(ctx, '#f6f5f0', LN, 1.5);
    ctx.strokeStyle = 'rgba(0,0,0,0.12)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, 30); ctx.lineTo(0, 60); ctx.stroke();
    // veil hat on the hook
    ctx.fillStyle = 'rgba(35,35,35,0.45)';
    ctx.beginPath(); ctx.moveTo(-20, 6); ctx.lineTo(20, 6); ctx.lineTo(15, 32); ctx.lineTo(-15, 32); ctx.closePath(); ctx.fill();
    ctx.save(); ctx.clip(); ctx.strokeStyle = 'rgba(0,0,0,0.3)'; ctx.lineWidth = 0.6;
    for (let i = -22; i < 22; i += 3) { ctx.beginPath(); ctx.moveTo(i, 5); ctx.lineTo(i * 0.75, 33); ctx.stroke(); }
    for (let j = 6; j < 33; j += 3) { ctx.beginPath(); ctx.moveTo(-22, j); ctx.lineTo(22, j); ctx.stroke(); }
    ctx.restore();
    ell(ctx, 0, 5, 23, 5); fillStroke(ctx, '#f7f2e1', LN, 1.3);
    ctx.beginPath(); ctx.moveTo(-12, 5); ctx.bezierCurveTo(-12, -9, 12, -9, 12, 5); ctx.closePath(); fillStroke(ctx, '#f7f2e1', LN, 1.3);
  }
  // hanger bar drawn over the shoulders
  ctx.strokeStyle = C.woodD; ctx.lineWidth = 2.6;
  ctx.beginPath(); ctx.moveTo(-18, 10); ctx.lineTo(0, 4); ctx.lineTo(18, 10); ctx.stroke();
  ctx.restore();
}

export function drawFolded(ctx, id, x, y, sc = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(sc, sc);
  const col = { vet: '#fbfbf8', carp: '#4d7eb3', diver: '#2c3544', bee: '#f6f5f0', base: '#5bb8b0' }[id] || '#ddd';
  rr(ctx, -13, -8, 26, 8, 3); fillStroke(ctx, col, LN, 1.2);
  rr(ctx, -11, -13, 22, 6, 3); fillStroke(ctx, col, LN, 1.1);
  if (id === 'vet') { ctx.strokeStyle = '#4a5560'; ctx.lineWidth = 1.6; ctx.beginPath(); ctx.arc(2, -13, 5, Math.PI, 0); ctx.stroke(); circ(ctx, 8, -11, 2.2); fillStroke(ctx, '#cfd6db', LN, 0.9); }
  if (id === 'carp') { ctx.fillStyle = '#8a5a33'; ctx.fillRect(-13, -6, 26, 2.5); }
  if (id === 'diver') { rr(ctx, -5, -18, 11, 6, 3); fillStroke(ctx, '#f1c232', LN, 1); }
  if (id === 'bee') { ell(ctx, 0, -14, 11, 3); fillStroke(ctx, '#f7f2e1', LN, 1); }
  ctx.restore();
}

// ------------------------------------------------------------------ rack
export class Rack {
  constructor(game) {
    this.g = game;
    this.x = 0; this.y = 0; this.vx = 0; this.ax = 0; this.wheel = 0;
    this.reset();
  }
  reset() {
    this.bundles = JOBS.map((id, i) => ({ id, slot: i, state: 'hang', x: 0, y: 0, tx: 0, ty: 0, vx: 0, vy: 0, ang: rand(-0.05, 0.05), av: 0, hint: 0 }));
    this.shelf = [];
    this.flying = [];
    this.attached = false;
    this.visible = true;
    for (const b of this.bundles) { const s = this.slotPos(b.slot); b.x = s.x; b.y = s.y; }
  }
  // restore contents for dev-jumps into a later scene
  preset(worn) {
    for (const b of this.bundles) if (worn.includes(b.id)) b.state = 'worn';
    this.shelf = worn.slice(0, Math.max(0, worn.length - 1));
  }
  slotPos(i) { return { x: this.x + SLOT_X[i], y: this.y + RAIL_Y }; }
  handlePos() { return { x: this.x + 88, y: this.y - 55 }; }
  bundle(id) { return this.bundles.find((b) => b.id === id); }

  receiveFolded(id, fx, fy) {
    const idx = this.shelf.length;
    this.flying.push({ id, t: 0, dur: 0.75, sx: fx, sy: fy, idx });
    audio.whoosh(this.g.panOf(fx), 0.06);
  }
  shelfPos(i) { return { x: this.x - 42 + i * 28, y: this.y - 40 }; }

  hint(id, k = 1) {
    const b = this.bundle(id);
    if (b && b.state === 'hang') { b.av += 2.6 * k; b.hint = 1; audio.cloth(this.g.panOf(b.x), 0.5); }
  }

  update(dt) {
    const prevVx = this.vx;
    const px = this._px ?? this.x;
    this.vx = dt > 0 ? (this.x - px) / dt : 0;
    this._px = this.x;
    this.ax = dt > 0 ? clamp((this.vx - prevVx) / dt, -3000, 3000) : 0;
    this.wheel += (this.vx * dt) / 6;
    for (const b of this.bundles) {
      b.hint = Math.max(0, b.hint - dt);
      if (b.state === 'hang') {
        const s = this.slotPos(b.slot);
        b.x = s.x; b.y = s.y;
        b.av += (-(this.ax / 50) * Math.cos(b.ang) - 13 * Math.sin(b.ang) - 2.4 * b.av) * dt;
        b.ang += b.av * dt;
      } else if (b.state === 'drag') {
        const ox = b.x, oy = b.y;
        b.x = damp(b.x, b.tx, 28, dt); b.y = damp(b.y, b.ty, 28, dt);
        const nvx = (b.x - ox) / dt, nvy = (b.y - oy) / dt;
        const ax = clamp((nvx - b.vx) / dt, -4000, 4000);
        b.vx = nvx; b.vy = nvy;
        b.av += (-(ax / 50) * Math.cos(b.ang) - 13 * Math.sin(b.ang) - 3 * b.av) * dt;
        b.ang += b.av * dt;
        b.ang = clamp(b.ang, -1.1, 1.1);
      } else if (b.state === 'return') {
        const s = this.slotPos(b.slot);
        b.rt = (b.rt || 0) + dt;
        const ox = b.x;
        b.x = damp(b.x, s.x, 9, dt); b.y = damp(b.y, s.y, 9, dt);
        const nvx = (b.x - ox) / dt;
        b.av += (-((nvx - b.vx) / dt / 60) - 13 * Math.sin(b.ang) - 3 * b.av) * dt;
        b.vx = nvx;
        b.ang += b.av * dt;
        if (Math.hypot(b.x - s.x, b.y - s.y) < 1.5) { b.state = 'hang'; b.rt = 0; audio.metal(this.g.panOf(b.x), 1.8); }
      }
    }
    for (const f of this.flying) {
      f.t += dt;
      if (f.t >= f.dur && !f.done) {
        f.done = true;
        this.shelf.push(f.id);
        audio.cloth(this.g.panOf(this.x), 0.5); audio.thud(this.g.panOf(this.x), 0.08);
      }
    }
    this.flying = this.flying.filter((f) => !f.done);
  }

  hitBundle(p, pad = 8) {
    let best = null, bd = 1e9;
    for (const b of this.bundles) {
      if (b.state !== 'hang' && b.state !== 'return') continue;
      const c = Math.cos(-b.ang), s = Math.sin(-b.ang);
      const dx = p.x - b.x, dy = p.y - b.y;
      const lx = dx * c - dy * s, ly = dx * s + dy * c;
      if (lx > -24 - pad && lx < 24 + pad && ly > -14 - pad && ly < 100 + pad) {
        const d = Math.abs(lx);
        if (d < bd) { bd = d; best = b; }
      }
    }
    return best;
  }

  draw(ctx) {
    if (!this.visible) return;
    const x = this.x, y = this.y;
    ctx.save();
    ctx.translate(x, y);
    shadow(ctx, 0, 0, 82, 8, 0.2);
    // wheels
    for (const wx of [-60, 60]) {
      circ(ctx, wx, -6, 6); fillStroke(ctx, '#4a4f55', LN, 1.2);
      ctx.strokeStyle = '#a9b1b8'; ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(wx + Math.cos(this.wheel) * 5, -6 + Math.sin(this.wheel) * 5); ctx.lineTo(wx - Math.cos(this.wheel) * 5, -6 - Math.sin(this.wheel) * 5); ctx.stroke();
    }
    // frame
    const metal = (x1, y1, x2, y2, w) => {
      limb(ctx, x1, y1, x2, y2, w, '#b9c2c9', LN, 1.2);
      ctx.strokeStyle = 'rgba(255,255,255,0.7)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x1 - w * 0.2, y1); ctx.lineTo(x2 - w * 0.2, y2); ctx.stroke();
    };
    metal(-66, -12, 66, -12, 4.5);
    metal(-68, -10, -68, RAIL_Y, 5);
    metal(68, -10, 68, RAIL_Y, 5);
    // handle
    metal(68, -55, 84, -55, 3.5);
    rr(ctx, 82, -64, 7, 18, 3); fillStroke(ctx, '#e0584e', LN, 1.2);
    // wooden shelf
    ctx.save(); ctx.translate(0, 0);
    rr(ctx, -66, -38, 132, 7, 2); fillStroke(ctx, C.wood, C.woodDD, 1.2);
    ctx.fillStyle = 'rgba(255,240,210,0.35)'; ctx.fillRect(-64, -37, 128, 1.5);
    ctx.restore();
    ctx.restore();
    this.shelf.forEach((id, i) => { const s = this.shelfPos(i); drawFolded(ctx, id, s.x, s.y); });
    ctx.save(); ctx.translate(x, y);
    metal(-74, RAIL_Y, 74, RAIL_Y, 4.5);
    ctx.restore();
    // hanging garments
    for (const b of this.bundles) {
      if (b.state === 'hang' || b.state === 'return') {
        drawBundle(ctx, b.id, b.x, b.y, b.ang);
      }
    }
  }

  // dragged bundle + flying folded items are drawn above everything
  drawTop(ctx) {
    for (const b of this.bundles) if (b.state === 'drag') {
      ctx.save();
      ctx.globalAlpha = 0.18; ctx.fillStyle = '#3c2e22';
      ell(ctx, b.x + 10, b.y + 105, 20, 5); ctx.fill();
      ctx.restore();
      drawBundle(ctx, b.id, b.x, b.y, b.ang, 1.04);
    }
    for (const f of this.flying) {
      const k = E.inOut(Math.min(1, f.t / f.dur));
      const s = this.shelfPos(f.idx);
      const x = lerp(f.sx, s.x, k), y = lerp(f.sy, s.y, k) - Math.sin(k * Math.PI) * 60;
      drawFolded(ctx, f.id, x, y, lerp(1.3, 1, k));
    }
  }
}

// ------------------------------------------------------------------ drag-to-dress controller
export class Wardrobe {
  constructor(game) {
    this.g = game;
    this.active = false; this.correct = null; this.drag = null; this.dwell = 0; this.wrong = 0;
  }
  enable(correct, opts = {}) {
    this.active = true; this.correct = correct;
    this.onDressed = opts.onDressed; this.onWrong = opts.onWrong; this.onPick = opts.onPick;
    this.wrong = 0;
  }
  disable() {
    this.active = false;
    if (this.drag) { this.drag.state = 'return'; this.drag = null; }
  }
  get dragging() { return !!this.drag; }
  cancel() { if (this.drag) { this.drag.state = 'return'; this.drag = null; } }

  down(p) {
    if (!this.active || this.g.girl.change) return false;
    const b = this.g.rack.hitBundle(p, p.pad || 8);
    if (!b) return false;
    this.drag = b; b.state = 'drag'; b.tx = p.x; b.ty = p.y - 20; b.vx = 0;
    this.dwell = 0;
    audio.cloth(this.g.panOf(p.x), 0.8);
    if (this.onPick) this.onPick(b);
    return true;
  }
  move(p) {
    if (!this.drag) return false;
    const v = this.g.view;
    // keep the garment on screen
    const w0 = this.g.cam.toWorld(v.safe.l + 20, v.safe.t + 10), w1 = this.g.cam.toWorld(v.W - v.safe.r - 20, v.H - v.safe.b - 60);
    this.drag.tx = clamp(p.x, w0.x, w1.x); this.drag.ty = clamp(p.y - 20, w0.y, w1.y);
    return true;
  }
  overGirl(b, p) {
    const bx = this.g.girl.bodyBox();
    const cx = b.x + Math.sin(-b.ang) * 45, cy = b.y + Math.cos(b.ang) * 45;
    const inBox = (x, y) => x > bx.x0 && x < bx.x1 && y > bx.y0 && y < bx.y1;
    return inBox(cx, cy) || (p && inBox(p.x, p.y)) || inBox(b.x, b.y + 20);
  }
  up(p) {
    if (!this.drag) return false;
    const b = this.drag; this.drag = null;
    if (this.overGirl(b, p)) this._resolve(b);
    else { b.state = 'return'; audio.cloth(this.g.panOf(b.x), 0.5); }
    return true;
  }
  update(dt) {
    if (this.drag) {
      if (this.overGirl(this.drag)) { this.dwell += dt; if (this.dwell > 0.28) { const b = this.drag; this.drag = null; this._resolve(b); } }
      else this.dwell = 0;
    }
  }
  _resolve(b) {
    const girl = this.g.girl;
    if (b.id === this.correct) {
      b.state = 'worn';
      this.active = false;
      girl.startChange(b.id, { x: b.x, y: b.y }, () => { if (this.onDressed) this.onDressed(); });
    } else {
      // gentle refusal: she holds it up, looks at the animal, hands it back
      b.state = 'return';
      this.wrong++;
      girl.setPose('refuse'); girl.shake = 0.45;
      audio.cloth(this.g.panOf(b.x), 0.6);
      setTimeout(() => { if (girl.poseOverride === 'refuse') girl.setPose(null); }, 700);
      if (this.onWrong) this.onWrong(b);
    }
  }
}
