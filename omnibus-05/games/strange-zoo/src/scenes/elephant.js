// Scene 1: the limping elephant.  Vet outfit -> wash the mud, pull the
// splinter with big safe tweezers, wrap a bandage, then the careful first step.
import { Scene } from './base.js';
import { ST } from '../world.js';
import { clamp, lerp, damp, E, anim, inv, rand, TAU, angDiff, seeded, qbez } from '../util.js';
import { C, rr, ell, circ, fillStroke, plank, shadow, leafClump, limb, glint } from '../draw.js';
import { audio } from '../audio.js';
import { dustPuff } from '../fx.js';

const EL = { base: '#9ca5ae', dark: '#7f8993', light: '#bcc4cb', line: '#4c4f55' };

export function newElephant() {
  return {
    x: 0, y: 0, s: 1, dir: 1, t: rand(0, 10),
    shift: 0, lean: 0, hurtLift: 9, onStump: 0, sole: 0,
    ear: 0, earV: 0, trunkUp: 0, trunkCurl: 0, trunkTip: null, headDown: 0, look: { x: -1, y: 0.2 },
    eye: 'sad', eyeClose: 0, legs: [{ dx: 0, lift: 0 }, { dx: 0, lift: 0 }, { dx: 0, lift: 0 }, { dx: 0, lift: 0 }],
    bandage: 0, walkPh: 0, walking: 0, hold: null, soleDraw: null, stumpDraw: null, wobble: 0,
  };
}

export function elephantFlap(e, k = 1) { e.earV += 9 * k; }

export function updateElephant(e, dt) {
  e.t += dt;
  e.earV += (-e.ear * 60 - e.earV * 6) * dt;
  e.ear += e.earV * dt;
  if (Math.random() < dt * 0.25) e.earV += 3;
  if (e.walking > 0) {
    e.walkPh += dt * 3.2 * e.walking;
    const offs = [0, 0.5, 0.25, 0.75];
    for (let i = 0; i < 4; i++) {
      const ph = (e.walkPh / TAU + offs[i]) % 1;
      const swing = ph < 0.35;
      const k = swing ? ph / 0.35 : (ph - 0.35) / 0.65;
      e.legs[i].dx = (swing ? lerp(12, -12, E.inOut(k)) : lerp(-12, 12, k)) * e.walking;
      e.legs[i].lift = swing ? Math.sin(k * Math.PI) * 9 * e.walking : 0;
    }
  }
}

// facing left in local coords; origin = ground under the body
export function drawElephant(ctx, e) {
  const t = e.t;
  ctx.save();
  ctx.translate(e.x, e.y);
  ctx.scale(e.s * e.dir, e.s);
  shadow(ctx, 20, 0, 125, 13, 0.2);
  const br = Math.sin(t * 1.6) * 1.2;
  const bodyX = e.shift, bodyY = br * 0.5;
  const legXs = [-28, 84, -50, 62]; // frontFar, backFar, frontNear, backNear
  const hipY = -92;
  const legPos = (i) => {
    const L = e.legs[i];
    return { hx: legXs[i] + bodyX * 0.6, fx: legXs[i] + L.dx, fy: -L.lift };
  };
  const drawLeg = (i, col, w) => {
    const p = legPos(i);
    limb(ctx, p.hx, hipY + bodyY, p.fx, p.fy - 10, w, col, EL.line, 1.6);
    rr(ctx, p.fx - w / 2 - 2, p.fy - 15, w + 4, 15, 6); fillStroke(ctx, col, EL.line, 1.6);
    ctx.fillStyle = '#efe6d2';
    for (let k = -1; k <= 1; k++) { ell(ctx, p.fx + k * 9 - 3, p.fy - 3, 3.6, 2.6); ctx.fill(); }
    ctx.strokeStyle = 'rgba(60,60,70,0.25)'; ctx.lineWidth = 1;
    for (let k = 0; k < 3; k++) { const yy = lerp(hipY + 30, p.fy - 22, k / 2); ctx.beginPath(); ctx.moveTo(lerp(p.hx, p.fx, (yy - hipY) / (p.fy - hipY)) - w * 0.35, yy); ctx.quadraticCurveTo(lerp(p.hx, p.fx, 0.5), yy + 3, lerp(p.hx, p.fx, (yy - hipY) / (p.fy - hipY)) + w * 0.35, yy); ctx.stroke(); }
  };
  // far legs
  drawLeg(0, EL.dark, 30);
  drawLeg(1, EL.dark, 30);
  // tail
  ctx.strokeStyle = EL.dark; ctx.lineWidth = 3.5; ctx.lineCap = 'round';
  const tw = Math.sin(t * 2.3) * 6;
  ctx.beginPath(); ctx.moveTo(116 + bodyX, -138); ctx.quadraticCurveTo(128 + bodyX + tw * 0.5, -115, 124 + bodyX + tw, -88); ctx.stroke();
  ctx.fillStyle = '#5d6369'; ell(ctx, 124 + bodyX + tw, -84, 3.5, 6); ctx.fill();
  // body
  ctx.save();
  ctx.translate(bodyX, bodyY);
  ctx.rotate(e.lean);
  ctx.beginPath();
  ctx.ellipse(22, -124, 98, 62, 0, 0, TAU);
  ctx.ellipse(40, -148, 66, 38, 0, 0, TAU);
  ctx.fillStyle = EL.base; ctx.fill();
  ctx.save(); ctx.clip();
  ctx.fillStyle = 'rgba(90,98,110,0.35)'; ell(ctx, 30, -70, 110, 30); ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.22)'; ell(ctx, -5, -170, 60, 16, -0.1); ctx.fill();
  ctx.strokeStyle = 'rgba(70,75,85,0.22)'; ctx.lineWidth = 1.2;
  for (const [x, y] of [[70, -120], [85, -140], [10, -110]]) { ctx.beginPath(); ctx.arc(x, y, 18, 1.9, 2.8); ctx.stroke(); }
  ctx.restore();
  ctx.strokeStyle = EL.line; ctx.lineWidth = 1.8;
  ctx.beginPath(); ctx.ellipse(22, -124, 98, 62, 0, 0.1, Math.PI * 1.1); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(40, -148, 66, 38, 0, Math.PI * 1.05, Math.PI * 1.95); ctx.stroke();
  ctx.beginPath(); ctx.ellipse(22, -124, 98, 62, 0, Math.PI * 1.55, Math.PI * 1.95); ctx.stroke();
  ctx.restore();
  // near back leg
  drawLeg(3, EL.base, 34);
  // head group (rotates with headDown)
  ctx.save();
  ctx.translate(bodyX, bodyY);
  ctx.translate(-40, -140); ctx.rotate(-e.headDown * 0.22 + e.lean); ctx.translate(40, 140);
  // trunk
  const base = { x: -108, y: -134 };
  const up = e.trunkUp;
  let tip = e.trunkTip || { x: lerp(-128, -168, up), y: lerp(-26, -236, up) };
  if (!e.trunkTip) { tip.x += Math.sin(t * 1.1) * 4 * (1 - up); }
  const cp = { x: lerp(-138, -172, up) + (e.trunkTip ? (tip.x - base.x) * 0.1 : 0), y: lerp(-90, -150, up) + (e.trunkTip ? 20 : 0) };
  const N = 20;
  const pts = [];
  for (let i = 0; i <= N; i++) pts.push(qbez(base.x, base.y, cp.x, cp.y, tip.x, tip.y, i / N));
  const L_ = [], R_ = [];
  for (let i = 0; i <= N; i++) {
    const a = pts[Math.max(0, i - 1)], b = pts[Math.min(N, i + 1)];
    const tx = b.x - a.x, ty = b.y - a.y, tl = Math.hypot(tx, ty) || 1;
    const nx = -ty / tl, ny = tx / tl;
    const w = lerp(13, 5.5, i / N);
    L_.push({ x: pts[i].x + nx * w, y: pts[i].y + ny * w });
    R_.push({ x: pts[i].x - nx * w, y: pts[i].y - ny * w });
  }
  ctx.beginPath();
  ctx.moveTo(L_[0].x, L_[0].y);
  for (let i = 1; i <= N; i++) ctx.lineTo(L_[i].x, L_[i].y);
  for (let i = N; i >= 0; i--) ctx.lineTo(R_[i].x, R_[i].y);
  ctx.closePath();
  ctx.lineJoin = 'round';
  fillStroke(ctx, EL.base, EL.line, 1.6);
  ctx.strokeStyle = 'rgba(70,75,85,0.35)'; ctx.lineWidth = 1;
  for (let i = 3; i < N - 1; i += 2) {
    ctx.beginPath(); ctx.moveTo(L_[i].x, L_[i].y); ctx.lineTo(lerp(L_[i].x, R_[i].x, 0.7), lerp(L_[i].y, R_[i].y, 0.7)); ctx.stroke();
  }
  // curled tip
  const tp = pts[N];
  ctx.fillStyle = EL.base; ctx.strokeStyle = EL.line; ctx.lineWidth = 1.4;
  circ(ctx, tp.x, tp.y, 6.5); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#5d6369'; ell(ctx, tp.x - 1, tp.y + 1, 2, 1.5); ctx.fill();
  if (e.hold) { ctx.save(); e.hold(ctx, tp.x, tp.y); ctx.restore(); }
  // head
  circ(ctx, -72, -150, 47); fillStroke(ctx, EL.base, EL.line, 1.8);
  ctx.fillStyle = 'rgba(255,255,255,0.2)'; ell(ctx, -84, -178, 22, 10, -0.3); ctx.fill();
  // mouth
  ctx.strokeStyle = EL.line; ctx.lineWidth = 1.4;
  ctx.beginPath(); ctx.moveTo(-92, -118); ctx.quadraticCurveTo(-82, e.eye === 'happy' ? -110 : -114, -72, -116); ctx.stroke();
  // ear (flaps)
  ctx.save();
  ctx.translate(-40, -150);
  ctx.scale(1 - Math.abs(e.ear) * 0.25, 1);
  ctx.rotate(e.ear * 0.3);
  ell(ctx, 0, 0, 34, 46, -0.12); fillStroke(ctx, EL.base, EL.line, 1.8);
  ctx.fillStyle = 'rgba(214,170,166,0.55)'; ell(ctx, -3, 2, 23, 34, -0.12); ctx.fill();
  ctx.restore();
  // eye
  const ex = -96, ey = -160;
  const lx = clamp(e.look.x, -1, 1) * 1.5, ly = clamp(e.look.y, -1, 1) * 1.5;
  if (e.eye === 'happy' || e.eyeClose > 0.6) {
    ctx.strokeStyle = '#2d2a28'; ctx.lineWidth = 2; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.arc(ex, ey + 2, 4.5, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke();
  } else {
    ctx.fillStyle = '#2d2a28'; ell(ctx, ex + lx, ey + ly, 3.4, 4.2); ctx.fill();
    ctx.fillStyle = '#fff'; circ(ctx, ex + lx - 1, ey + ly - 1.5, 1.2); ctx.fill();
    if (e.eye === 'sad') {
      // heavy, drooping upper lid: tired and sore rather than cross
      ctx.fillStyle = EL.base;
      ctx.beginPath(); ctx.ellipse(ex + lx, ey + ly - 0.5, 5, 5, 0, Math.PI * 1.02, Math.PI * 1.98); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = EL.line; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(ex - 5 + lx, ey - 1.2 + ly); ctx.quadraticCurveTo(ex + lx, ey - 2.2 + ly, ex + 5.5 + lx, ey + 0.8 + ly); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(ex - 6, ey - 11); ctx.quadraticCurveTo(ex - 1, ey - 12.5, ex + 5, ey - 9); ctx.stroke();
    } else {
      ctx.strokeStyle = EL.line; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(ex - 6, ey - 7); ctx.quadraticCurveTo(ex, ey - 10, ex + 6, ey - 7); ctx.stroke();
    }
  }
  ctx.restore();
  // stump (in front of the body, behind the near front leg)
  if (e.stumpDraw) e.stumpDraw(ctx);
  // near front (sore) leg
  const p = legPos(2);
  const lift = e.hurtLift;
  const liftPos = { x: -62, y: -30 - lift * 0.3 };
  const stumpPos = { x: -118, y: -55 };
  const S = { x: lerp(liftPos.x, stumpPos.x, e.onStump), y: lerp(liftPos.y, stumpPos.y, e.onStump) };
  const sole = e.sole;
  if (sole < 0.99) {
    ctx.save(); ctx.globalAlpha *= 1 - sole;
    const fx = lerp(p.fx, S.x + 10, Math.max(e.onStump, 0)), fy = lerp(p.fy - lift, S.y + 8, e.onStump);
    limb(ctx, p.hx, hipY + bodyY, fx, fy - 10, 35, EL.base, EL.line, 1.6);
    rr(ctx, fx - 19, fy - 15, 38, 15, 6); fillStroke(ctx, EL.base, EL.line, 1.6);
    ctx.fillStyle = '#efe6d2';
    for (let k = -1; k <= 1; k++) { ell(ctx, fx + k * 9 - 3, fy - 3, 3.6, 2.6); ctx.fill(); }
    if (e.bandage > 0) {
      ctx.fillStyle = '#fbfbf6'; ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 1;
      rr(ctx, fx - 19.5, fy - 30, 39, 14, 3); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = 'rgba(0,0,0,0.12)'; ctx.beginPath(); ctx.moveTo(fx - 18, fy - 24); ctx.lineTo(fx + 18, fy - 21); ctx.stroke();
    }
    ctx.restore();
  }
  if (sole > 0.01) {
    ctx.save(); ctx.globalAlpha *= Math.min(1, sole * 1.3);
    limb(ctx, p.hx, hipY + bodyY, S.x + 14, S.y - 12, 35, EL.base, EL.line, 1.6);
    ctx.translate(S.x, S.y); ctx.rotate(-0.28);
    const sc = 0.7 + 0.3 * sole; ctx.scale(sc, sc);
    // rim of the foot
    ell(ctx, 3, -3, 34, 28); fillStroke(ctx, EL.base, EL.line, 1.6);
    ctx.fillStyle = '#efe6d2';
    for (const a of [-2.4, -1.9, -1.4, -0.9]) { ell(ctx, Math.cos(a) * 31 + 3, Math.sin(a) * 25 - 3, 4.5, 3.2, a); ctx.fill(); }
    // sole pad
    ell(ctx, 0, 0, 30, 25); fillStroke(ctx, '#77695e', EL.line, 1.6);
    ctx.strokeStyle = 'rgba(40,30,25,0.35)'; ctx.lineWidth = 1;
    for (const [x1, y1, x2, y2] of [[-18, -6, -4, 2], [-6, -14, 8, -4], [4, 6, 20, 2], [-14, 10, 0, 16], [10, -10, 20, -14]]) {
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.quadraticCurveTo((x1 + x2) / 2 + 2, (y1 + y2) / 2 - 2, x2, y2); ctx.stroke();
    }
    ctx.fillStyle = 'rgba(255,255,255,0.1)'; ell(ctx, -8, -10, 14, 7, -0.4); ctx.fill();
    if (e.soleDraw) e.soleDraw(ctx);
    ctx.restore();
  }
  ctx.restore();
}

// -------------------------------------------------------------------------- tools
function drawCan(ctx, x, y, tilt, dir) {
  ctx.save(); ctx.translate(x, y); ctx.scale(dir, 1); ctx.rotate(tilt);
  ctx.strokeStyle = '#6f877b'; ctx.lineWidth = 4; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(-11, 12); ctx.quadraticCurveTo(0, -8, 11, 12); ctx.stroke();
  limb(ctx, 13, 30, 34, 10, 5, '#95ae9f', C.line, 1.2);
  ctx.save(); ctx.translate(36, 8); ctx.rotate(-0.7);
  ell(ctx, 0, 0, 3.2, 7.5); fillStroke(ctx, '#b8cbbf', C.line, 1.2);
  ctx.fillStyle = '#556b60'; for (let i = -2; i <= 2; i++) { circ(ctx, 0.5, i * 2.6, 0.7); ctx.fill(); }
  ctx.restore();
  rr(ctx, -16, 10, 32, 28, 6); fillStroke(ctx, '#9db4a7', C.line, 1.5);
  ctx.fillStyle = 'rgba(255,255,255,0.55)'; rr(ctx, -12, 14, 4, 20, 2); ctx.fill();
  ctx.strokeStyle = 'rgba(60,80,70,0.35)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(-16, 20); ctx.lineTo(16, 20); ctx.stroke();
  ell(ctx, 0, 10, 16, 3.5); fillStroke(ctx, '#7f978b', C.line, 1.2);
  ctx.restore();
}
const CAN_ROSE = { x: 36, y: 8 };

function drawTweezers(ctx, x, y, ang, open) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(ang);
  for (const s of [-1, 1]) {
    limb(ctx, -20, s * 1.5, 30, s * open, 5, '#c9d1d8', C.line, 1.2);
    ctx.strokeStyle = 'rgba(255,255,255,0.8)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(-14, s * 1.5 - 1); ctx.lineTo(24, s * open - 1); ctx.stroke();
    circ(ctx, 32, s * open, 3.6); fillStroke(ctx, '#5aa6cf', C.line, 1.1);
    ctx.strokeStyle = 'rgba(0,0,0,0.25)';
    for (let i = 0; i < 3; i++) { const xx = -4 + i * 4; ctx.beginPath(); ctx.moveTo(xx, s * (1.5 + (open - 1.5) * ((xx + 20) / 50)) - 2.5); ctx.lineTo(xx, s * (1.5 + (open - 1.5) * ((xx + 20) / 50)) + 2.5); ctx.stroke(); }
  }
  circ(ctx, -21, 0, 3.5); fillStroke(ctx, '#aeb7bf', C.line, 1.1);
  ctx.restore();
}
const TW_TIP = 32;

function drawRoll(ctx, x, y, rot, tail = true) {
  ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
  if (tail) {
    ctx.fillStyle = '#fbfbf6'; ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 0.8;
    ctx.beginPath(); ctx.moveTo(0, 8); ctx.quadraticCurveTo(6, 16, 2, 22); ctx.lineTo(-8, 20); ctx.quadraticCurveTo(-4, 14, -9, 7); ctx.closePath(); ctx.fill(); ctx.stroke();
  }
  rr(ctx, -12, -9, 24, 18, 5); fillStroke(ctx, '#fbfbf6', C.line, 1.4);
  ell(ctx, -12, 0, 4, 9); fillStroke(ctx, '#f1efe6', C.line, 1.2);
  ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 0.8; ell(ctx, -12, 0, 2, 5); ctx.stroke();
  ctx.fillStyle = 'rgba(0,0,0,0.05)'; ctx.fillRect(-8, -9, 20, 4);
  ctx.restore();
}

function drawBag(ctx, x, y, open) {
  ctx.save(); ctx.translate(x, y);
  shadow(ctx, 0, 0, 22, 4, 0.2);
  ctx.beginPath(); ctx.moveTo(-20, 0); ctx.lineTo(20, 0); ctx.lineTo(16, -22); ctx.lineTo(-16, -22); ctx.closePath();
  fillStroke(ctx, '#8b5a3a', C.line, 1.5);
  ctx.fillStyle = 'rgba(255,220,180,0.2)'; ctx.fillRect(-15, -20, 5, 18);
  if (open > 0.05) {
    ell(ctx, 0, -22, 16, 5 * open); fillStroke(ctx, '#3b2a20', C.line, 1.3);
    ctx.fillStyle = '#8b5a3a';
    ctx.beginPath(); ctx.moveTo(-16, -22); ctx.lineTo(-19, -22 - 10 * open); ctx.lineTo(-14, -22 - 10 * open); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(16, -22); ctx.lineTo(19, -22 - 10 * open); ctx.lineTo(14, -22 - 10 * open); ctx.closePath(); ctx.fill();
  } else {
    ctx.strokeStyle = C.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, -22, 7, Math.PI, 0); ctx.stroke();
  }
  ctx.fillStyle = '#d7b46a'; ctx.fillRect(-3, -14, 6, 4);
  ctx.restore();
}

function drawStump(ctx, x, y, s = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(s, s);
  shadow(ctx, 0, 0, 30, 6, 0.22);
  ctx.beginPath(); ctx.moveTo(-26, -30); ctx.lineTo(-28, 0); ctx.quadraticCurveTo(0, 6, 28, 0); ctx.lineTo(26, -30); ctx.closePath();
  fillStroke(ctx, '#8a6444', C.line, 1.5);
  ctx.strokeStyle = 'rgba(50,30,15,0.4)'; ctx.lineWidth = 1.2;
  for (const xx of [-16, -4, 9, 19]) { ctx.beginPath(); ctx.moveTo(xx, -28); ctx.quadraticCurveTo(xx + 2, -14, xx - 1, 2); ctx.stroke(); }
  ell(ctx, 0, -30, 26, 8); fillStroke(ctx, '#e0bb86', C.line, 1.5);
  ctx.strokeStyle = 'rgba(140,95,50,0.45)'; ctx.lineWidth = 0.9;
  for (let r = 5; r < 24; r += 5) { ell(ctx, 1, -30, r, r * 0.3); ctx.stroke(); }
  ctx.restore();
}

// -------------------------------------------------------------------------- scene
export class ElephantScene extends Scene {
  constructor(g) { super(g, 'elephant', ST.elephant); this.range = [-520, 520]; }

  reset() {
    super.reset();
    if (this.pour) { this.pour.stop(); }
    this.e = newElephant();
    this.eOff = 0;
    this.limpT = 2;
    const r = seeded(7);
    this.mud = [];
    for (let i = 0; i < 12; i++) {
      const a = r() * TAU, d = Math.sqrt(r()) * 0.78;
      this.mud.push({ x: Math.cos(a) * 28 * d, y: Math.sin(a) * 22 * d, r: 8 + r() * 6, a: 1, seed: r() * 10 });
    }
    this.mud.push({ x: 7, y: 5, r: 11, a: 1, seed: 3 });
    this.spl = { state: 'in', out: 0, tug: 0, x: 0, y: 0, vy: 0, vx: 0, rot: 0, landed: false };
    this.tool = null;
    this.bag = { vis: false, open: 0 };
    this.water = [];
    this.wetGround = 0;
    this.wrapAcc = 0; this.wrapP = 0; this.lastAng = null;
    this.pour = null;
    this.glintT = 0;
    this.toolWiggle = 0;
    this.shown = 0;
  }

  layoutL() {
    const ele = { x: 150, y: -42, s: 1 };
    const stump = { x: ele.x - 118 * ele.s, y: ele.y };
    return {
      ele, stump, girl: { x: -125, y: 0 }, rack: { x: -262, y: 0 },
      girlTreat: { x: -78, y: -26 }, bag: { x: stump.x - 34, y: stump.y + 32 },
      frames: {
        overview: { x: -350, y: -350, w: 690, h: 395 },
        zoom: { x: stump.x - 170, y: -205, w: 310, h: 218 },
      },
    };
  }
  layoutP() {
    const ele = { x: 34, y: -270, s: 0.95 };
    const stump = { x: ele.x - 118 * ele.s, y: ele.y };
    return {
      ele, stump, girl: { x: 60, y: 0 }, rack: { x: -77, y: 0 },
      girlTreat: { x: 26, y: -270 }, bag: { x: stump.x + 8, y: stump.y + 46 },
      frames: {
        overview: { x: -160, y: -560, w: 320, h: 612 },
        zoom: { x: stump.x - 95, y: -445, w: 190, h: 355 },
      },
    };
  }

  // world-space position of the sole centre and a sole-local transform
  soleWorld() {
    const e = this.e, L = this.L;
    const s = L.ele.s;
    const S = { x: -118, y: -55 };
    return { x: this.wx(L.ele.x + this.eOff) + S.x * s, y: L.ele.y + S.y * s, rot: -0.28, s };
  }
  toSole(x, y) {
    const S = this.soleWorld();
    const dx = (x - S.x) / S.s, dy = (y - S.y) / S.s;
    const c = Math.cos(-S.rot), sn = Math.sin(-S.rot);
    return { x: dx * c - dy * sn, y: dx * sn + dy * c };
  }
  fromSole(x, y) {
    const S = this.soleWorld();
    const c = Math.cos(S.rot), sn = Math.sin(S.rot);
    return { x: S.x + (x * c - y * sn) * S.s, y: S.y + (x * sn + y * c) * S.s };
  }
  splinterBaseLocal() { const d = { x: Math.cos(0.75), y: Math.sin(0.75) }; return { x: 6 + d.x * this.spl.out, y: 4 + d.y * this.spl.out, d }; }
  splinterTipWorld() { const b = this.splinterBaseLocal(); return this.fromSole(b.x + b.d.x * (15 + this.spl.tug * 6), b.y + b.d.y * (15 + this.spl.tug * 6)); }
  toolRest() { const b = this.w(this.L.bag); return { x: b.x + 36, y: b.y - 6 }; }

  prepare() { this.reset(); this.layout(); }
  girlSpot() {
    if (['wash', 'washed', 'pull', 'pulled', 'wrap', 'wrapped'].includes(this.step)) return this.w(this.L.girlTreat);
    return super.girlSpot();
  }
  onRelayout() {
    this.water = [];
    const t = this.tool;
    if (t && t.state === 'drag') { t.state = 'return'; t.t = 0; t.sx = t.x; t.sy = t.y; if (this.spl.state === 'grip') { this.spl.state = 'in'; this.spl.tug = 0; } }
    if (t && (t.state === 'rest' || t.state === 'emerge')) { const r = this.toolRest(); t.x = r.x; t.y = r.y; }
    if (this.spl.state === 'ground' || this.spl.state === 'fall') this.spl.state = 'gone';
    if (this.pour) this.pour.set(0);
  }

  enter() {
    const g = this.g;
    this.step = 'dress';
    g.girl.lookAt(this.wx(this.L.ele.x - 60), this.L.ele.y - 60);
    g.girl.say('worry', 1.5);
    this.run.run(this.intro());
    g.wardrobe.enable('vet', {
      onDressed: () => this.run.run(this.treatStart()),
      onWrong: () => { this.showFoot(1.6); setTimeout(() => g.rack.hint('vet'), 700); },
    });
    this.setDressHints();
  }

  *intro() {
    yield 0.6;
    this.tryStep(true);
  }

  setDressHints() {
    const g = this.g;
    g.hints.set('dress', [
      { t: 3, fn: () => { this.showFoot(2); } },
      { t: 7, fn: () => { g.girl.lookAt(g.rack.x, -110); g.rack.hint('vet'); } },
      { t: 11, fn: () => { const b = g.rack.bundle('vet'); if (b && b.state === 'hang') g.ghost.drag(b.x, b.y + 40, g.girl.x, g.girl.y - 70); } },
      { t: 15, fn: () => { g.rack.hint('vet'); this.showFoot(1.5); } },
    ], 20);
  }

  showFoot(dur = 2) {
    if (this.e.onStump > 0.1) return;
    this.shown = dur;
    audio.elephant('sad', this.pan(this.wx(this.L.ele.x)));
    elephantFlap(this.e, 0.6);
    this.g.girl.lookAt(this.wx(this.L.ele.x - 70), this.L.ele.y - 30);
  }

  tryStep(force) {
    // the elephant tests the sore foot and flinches: pain shown by gait, not by a face
    this.limpPhase = 0; this.limpActive = true;
  }

  *treatStart() {
    const g = this.g, girl = g.girl, e = this.e, L = this.L;
    this.step = 'approach';
    g.hints.clear();
    girl.held = 'bag';
    girl.lookAt(this.wx(L.ele.x - 110), L.ele.y - 60);
    yield 0.3;
    yield* girl.walkTo(this.wx(L.girlTreat.x), L.girlTreat.y);
    girl.facing = this.P ? -1 : 1;
    // elephant trusts the vet: puts the sore foot on the stump
    e.eye = 'ok';
    audio.elephant('breath', this.pan(this.wx(L.ele.x)));
    this.shown = 0;
    this.setCam('zoom', 2.2);
    yield* anim(1.3, (k) => { e.onStump = k; e.hurtLift = lerp(9, 22, Math.sin(k * Math.PI)); e.headDown = k * 0.6; });
    e.onStump = 1;
    yield* anim(0.35, (k) => { e.sole = k; });
    audio.wood(this.pan(this.soleWorld().x), 0.6, 0.15);
    // bag set down and opened
    girl.held = null;
    this.bag.vis = true;
    audio.cloth(this.pan(this.soleWorld().x), 0.5);
    yield* anim(0.4, (k) => { this.bag.open = k; });
    audio.metal(this.pan(this.soleWorld().x), 1.4);
    this.emerge('can');
    yield () => this.tool && this.tool.state === 'rest' && g.cam.settled();
    this.step = 'wash';
    girl.lookAt(this.soleWorld().x, this.soleWorld().y);
    this.setToolHints();
  }

  emerge(type) {
    const b = this.w(this.L.bag);
    this.tool = { type, state: 'emerge', t: 0, x: b.x, y: b.y - 20, ang: 0, tilt: 0, open: 7, sx: b.x, sy: b.y - 20 };
  }

  setToolHints() {
    const g = this.g;
    const S = () => this.soleWorld();
    const tr = () => this.toolRest();
    let st = [];
    if (this.step === 'wash') {
      st = [
        { t: 3, fn: () => { this.toolWiggle = 1; audio.clink(this.pan(tr().x)); g.girl.lookAt(tr().x, tr().y); } },
        { t: 6, fn: () => { this.e.headDown = 1; audio.elephant('sad', this.pan(S().x)); dustPuff(g.fx, S().x, S().y + 20, 3, '#8a6a48', 6); } },
        { t: 9.5, fn: () => { g.ghost.drag(tr().x, tr().y - 10, S().x - 30, S().y - 50, 2); } },
      ];
    } else if (this.step === 'pull') {
      st = [
        { t: 2.5, fn: () => { this.glintT = 1.2; audio.chime(this.pan(S().x)); g.girl.lookAt(S().x, S().y); } },
        { t: 6, fn: () => { this.toolWiggle = 1; audio.clink(this.pan(tr().x)); } },
        { t: 9.5, fn: () => { const tp = this.splinterTipWorld(); g.ghost.play([{ x: tr().x, y: tr().y, d: 0 }, { x: tr().x, y: tr().y, d: 1 }, { x: tp.x - 20, y: tp.y + 10, d: 1 }, { x: tp.x - 70, y: tp.y + 40, d: 1 }, { x: tp.x - 70, y: tp.y + 40, d: 0 }], 2.4); } },
      ];
    } else if (this.step === 'wrap') {
      st = [
        { t: 3, fn: () => { this.toolWiggle = 1; audio.cloth(this.pan(tr().x), 0.4); } },
        { t: 6, fn: () => { this.e.headDown = 1; elephantFlap(this.e, 0.5); } },
        { t: 9.5, fn: () => { g.ghost.circle(S().x, S().y, 48, 2.4); } },
      ];
    }
    g.hints.set(this.step, st, 20);
  }

  busy() { return this.tool && this.tool.state === 'drag'; }

  // -------------------------------------------------------------- input
  down(p) {
    const g = this.g;
    if (this.step === 'dress') {
      if (g.wardrobe.down(p)) return;
      if (this.hitElephant(p)) { this.showFoot(2.2); return; }
      return;
    }
    const tool = this.tool;
    if (tool && (tool.state === 'rest' || tool.state === 'return')) {
      const r = Math.max(34, g.px(40));
      const c = this.toolCenter();
      if (Math.hypot(p.x - c.x, p.y - c.y) < r) {
        tool.state = 'drag'; tool.tx = p.x; tool.ty = p.y; tool.gx = c.x - p.x; tool.gy = c.y - p.y;
        if (tool.type === 'can') { tool.gx = 0; tool.gy = 0; }
        audio.clink(this.pan(p.x));
        this.lastAng = null;
        return;
      }
    }
    if (this.hitElephant(p)) { elephantFlap(this.e, 0.7); audio.elephant('breath', this.pan(p.x)); }
  }
  move(p) {
    const g = this.g;
    if (this.step === 'dress') { g.wardrobe.move(p); return; }
    const tool = this.tool;
    if (tool && tool.state === 'drag') {
      tool.tx = p.x + (tool.gx || 0) * 0.5; tool.ty = p.y + (tool.gy || 0) * 0.5;
      if (tool.type === 'roll' && this.step === 'wrap') this.trackWrap(tool.tx, tool.ty);
    }
  }
  up(p) {
    const g = this.g;
    if (this.step === 'dress') { g.wardrobe.up(p); return; }
    const tool = this.tool;
    if (tool && tool.state === 'drag') {
      if (tool.type === 'tweezers' && this.spl.state === 'held') {
        // drop the splinter onto the ground
        const tip = this.tweezerTip();
        this.spl.state = 'fall'; this.spl.x = tip.x; this.spl.y = tip.y; this.spl.vx = rand(-20, 20); this.spl.vy = -40;
        this.spl.ground = this.L.stump.y + 20;
      }
      if (tool.type === 'tweezers' && this.spl.state === 'grip') { this.spl.state = 'in'; this.spl.tug = 0; audio.wood(this.pan(p.x), 1.6, 0.08); }
      tool.state = 'return'; tool.t = 0; tool.sx = tool.x; tool.sy = tool.y;
      if (this.pour) { this.pour.set(0); }
    }
  }

  hitElephant(p) {
    const L = this.L, s = L.ele.s;
    const ex = this.wx(L.ele.x + this.eOff), ey = L.ele.y;
    return p.x > ex - 170 * s && p.x < ex + 130 * s && p.y > ey - 220 * s && p.y < ey + 5;
  }

  toolCenter() {
    const t = this.tool;
    if (t.type === 'can') return { x: t.x, y: t.y + 22 };
    return { x: t.x, y: t.y };
  }
  tweezerTip() { const t = this.tool; return { x: t.x + Math.cos(t.ang) * TW_TIP, y: t.y + Math.sin(t.ang) * TW_TIP }; }

  trackWrap(x, y) {
    const S = this.soleWorld();
    const dx = x - S.x, dy = y - S.y;
    const d = Math.hypot(dx, dy);
    if (d < 14) return;
    const a = Math.atan2(dy, dx);
    if (this.lastAng != null) {
      const da = Math.abs(angDiff(this.lastAng, a));
      const add = Math.min(da, 0.6);
      const before = this.wrapAcc;
      this.wrapAcc += add;
      if (Math.floor(before / 0.7) !== Math.floor(this.wrapAcc / 0.7)) audio.cloth(this.pan(x), 0.45);
    }
    this.lastAng = a;
  }

  // -------------------------------------------------------------- update
  update(dt) {
    super.update(dt);
    const g = this.g, e = this.e, L = this.L;
    e.x = this.wx(L.ele.x + this.eOff); e.y = L.ele.y; e.s = L.ele.s;
    updateElephant(e, dt);
    this.toolWiggle = Math.max(0, this.toolWiggle - dt * 1.5);
    this.glintT = Math.max(0, this.glintT - dt);
    // limp cycle while hurt
    if (this.step === 'dress' || this.step === 'pre') this.updateLimp(dt);
    if (this.shown > 0) {
      this.shown -= dt;
      e.hurtLift = damp(e.hurtLift, 34, 6, dt); e.sole = damp(e.sole, 1, 6, dt); e.headDown = damp(e.headDown, 1, 5, dt);
      e.look = { x: 0.3, y: 1 };
    } else if (this.step === 'dress') {
      e.sole = damp(e.sole, 0, 6, dt); e.headDown = damp(e.headDown, 0.2, 3, dt);
      e.look = { x: -1, y: 0.3 };
    }
    if (['wash', 'pull', 'wrap'].includes(this.step)) { e.headDown = damp(e.headDown, 0.7, 2, dt); e.look = { x: 0.2, y: 1 }; e.trunkTip = null; e.trunkUp = damp(e.trunkUp, 0.25, 3, dt); }
    // tools
    const tool = this.tool;
    if (tool) this.updateTool(dt);
    this.updateWater(dt);
    this.updateSplinter(dt);
    // girl follows the work with her eyes
    if (tool && tool.state === 'drag') g.girl.lookAt(tool.x, tool.y);
  }

  updateLimp(dt) {
    const e = this.e;
    if (this.shown > 0) return;
    this.limpT -= dt;
    if (this.limpT < 0 && !this.limpActive) { this.limpActive = true; this.limpPhase = 0; }
    if (this.limpActive) {
      this.limpPhase += dt;
      const t = this.limpPhase;
      if (t < 0.55) { e.hurtLift = lerp(9, 0, E.inOut(t / 0.55)); e.shift = lerp(4, -3, t / 0.55); }
      else if (t < 0.68) { e.hurtLift = 0; }
      else if (t < 0.8) {
        if (!this._flinched) { this._flinched = true; elephantFlap(e, 1); if (Math.random() < 0.6) audio.elephant('sad', this.pan(e.x)); audio.thud(this.pan(e.x), 0.08); }
        e.hurtLift = lerp(0, 18, (t - 0.68) / 0.12); e.shift = lerp(-3, 7, (t - 0.68) / 0.12); e.lean = 0.02;
      } else if (t < 1.8) { e.hurtLift = lerp(18, 9, E.out((t - 0.8) / 1)); e.shift = lerp(7, 4, (t - 0.8) / 1); e.lean = lerp(0.02, 0.008, (t - 0.8)); }
      else { this.limpActive = false; this._flinched = false; this.limpT = rand(3.2, 4.8); }
    } else {
      e.hurtLift = damp(e.hurtLift, 9, 4, dt); e.shift = damp(e.shift, 4, 3, dt); e.lean = damp(e.lean, 0.008, 3, dt);
    }
  }

  updateTool(dt) {
    const t = this.tool, g = this.g;
    const rest = this.toolRest();
    const S = this.soleWorld();
    t.wig = this.toolWiggle > 0 ? Math.sin(this.t * 30) * this.toolWiggle * 0.15 : 0;
    if (t.state === 'emerge') {
      t.t += dt;
      const k = E.out(Math.min(1, t.t / 0.55));
      t.x = lerp(t.sx, rest.x, k); t.y = lerp(t.sy, rest.y, k) - Math.sin(k * Math.PI) * 40;
      if (t.t >= 0.55) { t.state = 'rest'; audio.clink(this.pan(t.x)); }
    } else if (t.state === 'rest') {
      t.x = rest.x; t.y = rest.y;
      t.tilt = damp(t.tilt, 0, 8, dt);
    } else if (t.state === 'return') {
      t.t += dt;
      const k = E.inOut(Math.min(1, t.t / 0.45));
      t.x = lerp(t.sx, rest.x, k); t.y = lerp(t.sy, rest.y, k) - Math.sin(k * Math.PI) * 18;
      t.tilt = damp(t.tilt, 0, 8, dt);
      if (t.t >= 0.45) { t.state = 'rest'; audio.clink(this.pan(t.x)); }
    } else if (t.state === 'stow') {
      t.t += dt;
      const b = this.w(this.L.bag);
      const k = E.inOut(Math.min(1, t.t / 0.45));
      t.x = lerp(t.sx, b.x, k); t.y = lerp(t.sy, b.y - 18, k) - Math.sin(k * Math.PI) * 30;
      if (t.t >= 0.45) { this.tool = null; audio.clink(this.pan(b.x)); }
      return;
    } else if (t.state === 'drag') {
      // weight: the tool follows the finger with a little lag
      const lagK = t.type === 'can' ? 14 : 22;
      const px = t.x;
      t.x = damp(t.x, t.tx, lagK, dt); t.y = damp(t.y, t.ty, lagK, dt);
      t.vx = (t.x - px) / Math.max(dt, 1e-3);
      if (t.type === 'can') {
        const near = Math.hypot(t.x - S.x, t.y - S.y) < 170;
        t.tilt = damp(t.tilt, near ? 0.62 : 0.35, 5, dt);
      }
    }
    if (t.type === 'can') this.updatePour(dt);
    if (t.type === 'tweezers') this.updateTweezers(dt);
    if (t.type === 'roll') this.updateRoll(dt);
  }

  canDir() { return this.tool && this.soleWorld().x < this.tool.x ? -1 : 1; }
  roseWorld() {
    const t = this.tool; const dir = this.canDir();
    const c = Math.cos(t.tilt), s = Math.sin(t.tilt);
    const rx = CAN_ROSE.x * c - CAN_ROSE.y * s, ry = CAN_ROSE.x * s + CAN_ROSE.y * c;
    return { x: t.x + rx * dir, y: t.y + ry };
  }

  updatePour(dt) {
    const t = this.tool;
    const pouring = t.state === 'drag' && t.tilt > 0.28 && this.step === 'wash';
    if (!this.pour && pouring) this.pour = audio.loop('pour');
    if (this.pour) this.pour.set(pouring ? 0.22 : 0, this.pan(t.x));
    if (!pouring) return;
    const R = this.roseWorld();
    const S = this.soleWorld();
    const n = 3;
    for (let i = 0; i < n; i++) {
      const d = Math.hypot(S.x - R.x, S.y - R.y);
      const T = 0.22 + Math.random() * 0.08;
      if (d < 175) {
        // water arcs onto the sole (a random point on it)
        const a = Math.random() * TAU, rr_ = Math.sqrt(Math.random()) * 0.95;
        const lx = Math.cos(a) * 30 * rr_, ly = Math.sin(a) * 25 * rr_;
        const tg = this.fromSole(lx, ly);
        const G = 700;
        this.water.push({ x: R.x, y: R.y, vx: (tg.x - R.x) / T, vy: (tg.y - R.y) / T - 0.5 * G * T, t: 0, T, lx, ly, aim: true, G });
      } else {
        const dir = this.canDir();
        this.water.push({ x: R.x, y: R.y, vx: dir * rand(30, 60), vy: rand(10, 40), t: 0, T: 9, aim: false, G: 700 });
      }
    }
  }

  updateWater(dt) {
    const ground = this.L.stump.y + 18;
    for (const w of this.water) {
      w.t += dt; w.vy += w.G * dt; w.x += w.vx * dt; w.y += w.vy * dt;
      if (w.aim && w.t >= w.T) {
        w.dead = true;
        this.wash(w.lx, w.ly);
      } else if (w.y > ground) {
        w.dead = true;
        this.wetGround = Math.min(1, this.wetGround + 0.004);
        if (Math.random() < 0.3) this.g.fx.add({ type: 'drop', x: w.x, y: ground, vx: rand(-30, 30), vy: rand(-60, -20), g: 500, life: 0.4, size: 1.1, ground: ground + 2 });
      }
    }
    this.water = this.water.filter((w) => !w.dead);
  }

  wash(lx, ly) {
    let any = false;
    for (const m of this.mud) {
      if (m.a <= 0) continue;
      const d = Math.hypot(m.x - lx, m.y - ly);
      if (d < m.r + 6) { m.a = Math.max(0, m.a - 0.07); any = true; }
    }
    const w = this.fromSole(lx, ly);
    if (Math.random() < 0.35) this.g.fx.add({ type: 'drop', x: w.x, y: w.y, vx: rand(-40, 40), vy: rand(-50, -10), g: 600, life: 0.6, size: 1.2, ground: this.L.stump.y + 16 });
    if (any && Math.random() < 0.3) {
      const bot = this.fromSole(rand(-18, 18), 22);
      this.g.fx.add({ type: 'drop', x: bot.x, y: bot.y, vx: rand(-8, 8), vy: 20, g: 500, life: 1.2, size: 1.8, color: 'rgba(125,90,55,0.9)', ground: this.L.stump.y + 16, onGround: () => { this.wetGround = Math.min(1, this.wetGround + 0.01); } });
      if (Math.random() < 0.08) audio.drip(this.pan(w.x), 0.04);
    }
    if (this.step === 'wash') {
      const left = this.mud.reduce((s, m) => s + m.a, 0) / this.mud.length;
      if (left < 0.14) this.finishWash();
    }
  }

  finishWash() {
    this.step = 'washed';
    this.g.hints.clear();
    for (const m of this.mud) m.fade = true;
    const self = this;
    this.run.run((function* () {
      yield* anim(0.6, (k) => { for (const m of self.mud) m.a = Math.min(m.a, 1 - k); });
      if (self.tool && self.tool.state === 'drag') { self.tool.state = 'return'; self.tool.t = 0; self.tool.sx = self.tool.x; self.tool.sy = self.tool.y; }
      if (self.pour) self.pour.set(0);
      yield 0.3;
      self.glintT = 1.3; audio.chime(self.pan(self.soleWorld().x), 0.05);
      self.e.headDown = 1; elephantFlap(self.e, 0.5);
      self.g.girl.say('o', 1.2);
      yield 0.5;
      yield () => !self.tool || self.tool.state === 'rest';
      if (self.tool) { self.tool.state = 'stow'; self.tool.t = 0; self.tool.sx = self.tool.x; self.tool.sy = self.tool.y; }
      if (self.pour) { self.pour.stop(); self.pour = null; }
      yield () => !self.tool;
      self.emerge('tweezers');
      yield () => self.tool && self.tool.state === 'rest';
      self.step = 'pull';
      self.setToolHints();
    })());
  }

  updateTweezers(dt) {
    const t = this.tool, spl = this.spl;
    const tip0 = this.splinterTipWorld();
    if (t.state === 'drag') {
      // tweezers point toward the splinter while held
      const target = spl.state === 'held' ? t.ang : Math.atan2(tip0.y - t.y, tip0.x - t.x);
      t.ang += angDiff(t.ang, target) * Math.min(1, dt * 10);
      const tip = this.tweezerTip();
      if (spl.state === 'in' && this.step === 'pull') {
        t.open = damp(t.open, 7, 10, dt);
        if (Math.hypot(tip.x - tip0.x, tip.y - tip0.y) < 20) {
          spl.state = 'grip'; spl.gx = t.tx; spl.gy = t.ty; audio.clink(this.pan(tip.x)); t.open = 1.5;
        }
      } else if (spl.state === 'grip') {
        t.open = damp(t.open, 1.2, 20, dt);
        const pull = Math.hypot(t.tx - spl.gx, t.ty - spl.gy);
        spl.tug = clamp(pull / 45, 0, 1);
        if (Math.random() < dt * 14) audio.stretch(this.pan(tip.x), spl.tug);
        // hold the tweezer tips on the splinter while it resists
        const hold = this.splinterTipWorld();
        const want = { x: hold.x - Math.cos(t.ang) * TW_TIP, y: hold.y - Math.sin(t.ang) * TW_TIP };
        t.x = lerp(want.x, t.x, 0.35 + spl.tug * 0.3); t.y = lerp(want.y, t.y, 0.35 + spl.tug * 0.3);
        if (pull > 45) this.popSplinter();
      } else if (spl.state === 'held') {
        t.open = 1.2;
      }
    } else if (spl.state !== 'held') {
      t.open = damp(t.open, 7, 10, dt);
      t.ang = damp(t.ang, -0.5, 6, dt);
    }
  }

  popSplinter() {
    const spl = this.spl, e = this.e;
    spl.state = 'held'; spl.tug = 0;
    audio.pop(this.pan(this.soleWorld().x));
    this.g.hints.clear();
    this.run.run((function* (self) {
      yield 0.15;
      audio.elephant('breath', self.pan(e.x));
      e.eyeClose = 1; elephantFlap(e, 1.2);
      self.g.girl.say('happy', 1.4);
      yield 0.8;
      e.eyeClose = 0; e.eye = 'ok';
    })(this));
    this.step = 'pulled';
    this.run.run((function* (self) {
      yield () => self.spl.state === 'gone' || self.spl.state === 'ground';
      yield () => !self.tool || self.tool.state === 'rest';
      if (self.tool) { self.tool.state = 'stow'; self.tool.t = 0; self.tool.sx = self.tool.x; self.tool.sy = self.tool.y; }
      yield () => !self.tool;
      self.emerge('roll');
      yield () => self.tool && self.tool.state === 'rest';
      self.step = 'wrap';
      self.wrapAcc = 0; self.lastAng = null;
      self.setToolHints();
    })(this));
  }

  updateSplinter(dt) {
    const s = this.spl;
    if (s.state === 'held' && this.tool) {
      const tip = this.tweezerTip();
      s.x = tip.x; s.y = tip.y; s.rot = this.tool.ang;
    } else if (s.state === 'held' && !this.tool) {
      s.state = 'fall';
    }
    if (s.state === 'fall') {
      s.vy += 600 * dt; s.x += s.vx * dt; s.y += s.vy * dt; s.rot += dt * 8;
      const gy = this.L.stump.y + 22;
      if (s.y > gy) { s.y = gy; s.state = 'ground'; s.t = 0; audio.tink(this.pan(s.x)); }
    }
    if (s.state === 'ground') { s.t += dt; if (s.t > 3) s.state = 'gone'; }
  }

  updateRoll(dt) {
    const t = this.tool;
    if (this.step !== 'wrap') return;
    this.wrapP = clamp(this.wrapAcc / (TAU * 0.95), 0, 1);
    this.e.bandage = this.wrapP;
    if (this.wrapP >= 1) {
      this.step = 'wrapped';
      this.g.hints.clear();
      audio.cinch(this.pan(t.x));
      this.run.run(this.afterWrap());
    }
  }

  *afterWrap() {
    const g = this.g, e = this.e;
    if (this.tool) { this.tool.state = 'stow'; this.tool.t = 0; this.tool.sx = this.tool.x; this.tool.sy = this.tool.y; }
    this.clip = 0;
    yield* anim(0.3, (k) => { this.clip = k; });
    audio.clink(this.pan(this.soleWorld().x));
    g.girl.say('happy', 1.2);
    yield () => !this.tool;
    yield* anim(0.3, (k) => { this.bag.open = 1 - k; });
    this.bag.vis = false; g.girl.held = 'bag';
    audio.cloth(this.pan(g.girl.x), 0.5);
    yield 0.3;
    yield* this.testStep();
  }

  *testStep() {
    const g = this.g, e = this.e, L = this.L;
    this.step = 'test';
    this.setCam('overview', 2.2);
    const girl = g.girl;
    girl.lookAt(e.x - 110 * L.ele.s, L.ele.y - 20);
    yield 0.4;
    // lift the foot off the stump
    yield* anim(0.8, (k) => { e.sole = 1 - k; e.onStump = 1 - k; e.hurtLift = lerp(22, 16, k); e.headDown = lerp(0.6, 1, k); });
    e.sole = 0; e.onStump = 0;
    yield 0.3;
    // careful: lower slowly, touch, pause
    e.look = { x: 0.2, y: 1 };
    yield* anim(1.5, (k) => { e.hurtLift = lerp(16, 1.5, k); e.shift = lerp(4, 1.5, k); }, E.inOut);
    audio.thud(this.pan(e.x), 0.06);
    yield 0.5;
    elephantFlap(e, 0.4);
    yield 0.3;
    // weight goes onto the foot: no flinch
    yield* anim(0.7, (k) => { e.hurtLift = lerp(1.5, 0, k); e.shift = lerp(1.5, -3, k); e.lean = lerp(0.008, -0.01, k); });
    audio.thud(this.pan(e.x), 0.14);
    dustPuff(g.fx, e.x - 50 * L.ele.s, L.ele.y, 4);
    yield 0.6;
    // one real step forward
    e.eye = 'ok';
    const startOff = this.eOff;
    e.walking = 1; e.walkPh = 0;
    let lastPh = 0;
    yield* anim(1.3, (k) => {
      this.eOff = startOff - 34 * k;
      if (Math.floor(e.walkPh / Math.PI) !== lastPh) { lastPh = Math.floor(e.walkPh / Math.PI); audio.thud(this.pan(e.x), 0.12); }
    }, E.lin);
    e.walking = 0; for (const l of e.legs) { l.dx = 0; l.lift = 0; }
    audio.thud(this.pan(e.x), 0.14);
    dustPuff(g.fx, e.x - 60 * L.ele.s, L.ele.y, 5);
    // joy: trunk up, low happy voice
    e.eye = 'happy'; e.headDown = 0;
    audio.elephant('happy', this.pan(e.x));
    yield* anim(0.8, (k) => { e.trunkUp = k; elephantFlap(e, 0.08); });
    girl.say('open', 2); girl.setPose('cheer'); girl.jump(80);
    yield 0.6; girl.jump(70);
    yield 1.2;
    girl.setPose(null);
    yield* anim(0.8, (k) => { e.trunkUp = 1 - k * 0.8; });
    this.step = 'done';
    this.finish();
  }

  idle(dt) {
    super.idle(dt);
    const e = this.e, L = this.L;
    e.x = this.wx(L.ele.x + this.eOff); e.y = L.ele.y; e.s = L.ele.s;
    updateElephant(e, dt);
    if (this.step === 'done') { e.trunkUp = 0.2 + Math.sin(this.t) * 0.1; e.eye = 'happy'; e.hurtLift = 0; e.shift = damp(e.shift, 0, 3, dt); }
    else this.updateLimp(dt);
  }

  // -------------------------------------------------------------- drawing
  drawFloor(ctx) {
    const L = this.L;
    const cx = this.wx(L.ele.x - 20);
    // sandy enclosure ground
    ctx.fillStyle = C.sand;
    ell(ctx, cx, L.ele.y - 10, this.P ? 200 : 230, this.P ? 70 : 40); ctx.fill();
    ctx.fillStyle = 'rgba(200,170,110,0.35)';
    for (let i = 0; i < 18; i++) { circ(ctx, cx - 180 + ((i * 97) % 360), L.ele.y - 30 + ((i * 53) % 50), 1.5); ctx.fill(); }
    // wet patch
    if (this.wetGround > 0) {
      ctx.fillStyle = `rgba(120,95,60,${this.wetGround * 0.4})`;
      ell(ctx, this.wx(L.stump.x + 8), L.stump.y + 10, 40 * (0.5 + this.wetGround), 9 * (0.5 + this.wetGround)); ctx.fill();
    }
    // footpath from the road into the enclosure
    if (this.P) {
      ctx.fillStyle = C.path;
      ctx.beginPath(); ctx.moveTo(this.wx(-40), -20); ctx.lineTo(this.wx(40), -20); ctx.lineTo(this.wx(10), L.ele.y + 40); ctx.lineTo(this.wx(-60), L.ele.y + 40); ctx.closePath(); ctx.fill();
      ctx.fillStyle = 'rgba(210,190,150,0.5)';
      for (let i = 0; i < 12; i++) { circ(ctx, this.wx(-45 + ((i * 37) % 80)), -40 - ((i * 71) % 190), 1.6); ctx.fill(); }
    }
    // hay pile
    const hx = this.wx(L.ele.x + (this.P ? -120 : 230)), hy = L.ele.y + (this.P ? -110 : -70);
    shadow(ctx, hx, hy, 34, 6, 0.15);
    ctx.fillStyle = '#e6c56a'; ell(ctx, hx, hy - 10, 32, 14); ctx.fill();
    ctx.strokeStyle = 'rgba(160,120,40,0.6)'; ctx.lineWidth = 1;
    for (let i = 0; i < 14; i++) { const a = -Math.PI + (i / 13) * Math.PI; ctx.beginPath(); ctx.moveTo(hx + Math.cos(a) * 26, hy - 8 + Math.sin(a) * 10); ctx.lineTo(hx + Math.cos(a) * 34, hy - 10 + Math.sin(a) * 15); ctx.stroke(); }
    // a water trough and hay behind (context)
    const tx = this.wx(L.ele.x + (this.P ? 110 : 150)), ty = L.ele.y - (this.P ? 90 : 50);
    if (!this.P || true) {
      shadow(ctx, tx, ty, 40, 6, 0.15);
      rr(ctx, tx - 38, ty - 22, 76, 22, 4); fillStroke(ctx, '#b7b0a4', C.line, 1.4);
      ctx.fillStyle = '#7cc3d8'; rr(ctx, tx - 34, ty - 20, 68, 6, 3); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.fillRect(tx - 28, ty - 19, 14, 1.5);
    }
  }

  collect(list) {
    const L = this.L, e = this.e;
    e.x = this.wx(L.ele.x + this.eOff); e.y = L.ele.y; e.s = L.ele.s;
    const stumpX = this.wx(L.stump.x), stumpY = L.stump.y;
    e.stumpDraw = null;
    e.soleDraw = (ctx) => this.drawSoleContents(ctx);
    // big tree behind the enclosure
    const tr = this.P ? { x: this.wx(-110), y: -470 } : { x: this.wx(300), y: -120 };
    list.push({ z: tr.y, draw: (c) => this.drawTree(c, tr.x, tr.y) });
    list.push({ z: stumpY - 0.5, draw: (c) => drawStump(c, stumpX, stumpY + 2, L.ele.s) });
    list.push({ z: e.y, draw: (c) => { e.x = this.wx(L.ele.x + this.eOff); drawElephant(c, e); } });
    if (this.bag.vis) { const b = this.w(L.bag); list.push({ z: b.y, draw: (c) => drawBag(c, b.x, b.y, this.bag.open) }); }
    if (this.spl.state === 'ground') {
      list.push({ z: this.spl.y, draw: (c) => this.drawLooseSplinter(c, this.spl.x, this.spl.y, 0.3, Math.min(1, 3 - this.spl.t)) });
    }
  }

  drawTree(ctx, x, y) {
    shadow(ctx, x + 10, y, 60, 12, 0.18);
    ctx.beginPath(); ctx.moveTo(x - 12, y); ctx.lineTo(x - 7, y - 110); ctx.lineTo(x + 7, y - 110); ctx.lineTo(x + 14, y); ctx.closePath();
    fillStroke(ctx, '#8b6243', C.woodDD, 1.4);
    const sw = Math.sin(this.t * 0.7) * 2;
    leafClump(ctx, x - 30, y - 118, 40, 0.2, C.leafD, C.leaf, C.leafL, sw);
    leafClump(ctx, x + 32, y - 126, 38, 0.6, C.leafD, C.leaf, C.leafL, sw);
    leafClump(ctx, x, y - 160, 44, 0.9, C.leafD, C.leaf, C.leafL, sw);
  }

  drawSoleContents(ctx) {
    // sole-local coordinates (already translated/rotated)
    const spl = this.spl;
    // splinter
    if (spl.state === 'in' || spl.state === 'grip') {
      const b = this.splinterBaseLocal();
      ctx.fillStyle = 'rgba(210,120,110,0.35)'; circ(ctx, b.x, b.y, 5 + spl.tug * 2); ctx.fill();
      // skin tents around the splinter when tugged
      if (spl.tug > 0) { ctx.fillStyle = '#7f7165'; ell(ctx, b.x + b.d.x * 3 * spl.tug, b.y + b.d.y * 3 * spl.tug, 4, 3); ctx.fill(); }
      const len = 15 + spl.tug * 6;
      this.drawSplinterShape(ctx, b.x, b.y, b.x + b.d.x * len, b.y + b.d.y * len);
      if (this.glintT > 0) glint(ctx, b.x + b.d.x * len * 0.6, b.y + b.d.y * len * 0.6 - 3, 6, Math.sin(this.glintT * 6) * 0.9);
    } else if (spl.state !== 'fall' && spl.state !== 'held' && spl.state !== 'ground' && spl.state !== 'gone') {
      // nothing
    } else {
      // small mark left where the splinter was
      ctx.fillStyle = 'rgba(200,120,110,0.3)'; circ(ctx, 6, 4, 3.5); ctx.fill();
    }
    // mud
    for (const m of this.mud) {
      if (m.a <= 0.01) continue;
      ctx.fillStyle = `rgba(118,84,52,${0.95 * Math.min(1, m.a * 1.4)})`;
      const r = m.r * (0.4 + 0.6 * m.a);
      ctx.beginPath();
      for (let i = 0; i <= 8; i++) {
        const a = (i / 8) * TAU;
        const rr_ = r * (0.8 + 0.25 * Math.sin(a * 3 + m.seed));
        const px = m.x + Math.cos(a) * rr_, py = m.y + Math.sin(a) * rr_ * 0.85;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = `rgba(160,120,80,${0.5 * m.a})`; circ(ctx, m.x - r * 0.3, m.y - r * 0.3, r * 0.25); ctx.fill();
    }
    // bandage
    const p = this.wrapP;
    if (p > 0) {
      ctx.save();
      ctx.beginPath(); ctx.ellipse(0, 0, 36, 30, 0, 0, TAU); ctx.clip();
      const band = (off, k) => {
        if (k <= 0) return;
        const x0 = -40, x1 = lerp(-40, 40, k);
        ctx.fillStyle = '#fbfbf6'; ctx.strokeStyle = 'rgba(0,0,0,0.22)'; ctx.lineWidth = 0.8;
        ctx.save(); ctx.rotate(-0.55);
        rr(ctx, x0, -8 + off, x1 - x0, 15, 2); ctx.fill(); ctx.stroke();
        ctx.strokeStyle = 'rgba(0,0,0,0.08)';
        for (let x = x0 + 4; x < x1; x += 5) { ctx.beginPath(); ctx.moveTo(x, -8 + off); ctx.lineTo(x, 7 + off); ctx.stroke(); }
        ctx.restore();
      };
      band(0, inv(0, 0.5, p));
      band(5, inv(0.5, 1, p));
      ctx.restore();
      if (this.clip > 0) {
        ctx.save(); ctx.rotate(-0.55); ctx.globalAlpha *= this.clip;
        rr(ctx, 18, -3, 8, 6, 1.5); fillStroke(ctx, '#cfd6db', C.line, 1);
        ctx.restore();
      }
    }
  }

  drawSplinterShape(ctx, x1, y1, x2, y2) {
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1;
    const nx = -dy / L, ny = dx / L;
    ctx.beginPath();
    ctx.moveTo(x1 + nx * 1.2, y1 + ny * 1.2);
    ctx.lineTo(x2 + nx * 2.2, y2 + ny * 2.2);
    ctx.lineTo(x2 + dx / L * 2, y2 + dy / L * 2);
    ctx.lineTo(x2 - nx * 2.2, y2 - ny * 2.2);
    ctx.lineTo(x1 - nx * 1.2, y1 - ny * 1.2);
    ctx.closePath();
    fillStroke(ctx, '#c79a5f', C.line, 1.1);
    ctx.strokeStyle = 'rgba(255,240,200,0.7)'; ctx.lineWidth = 0.8;
    ctx.beginPath(); ctx.moveTo(x1 + nx * 0.5, y1 + ny * 0.5); ctx.lineTo(x2 + nx, y2 + ny); ctx.stroke();
  }

  drawLooseSplinter(ctx, x, y, rot, a = 1) {
    ctx.save(); ctx.globalAlpha *= Math.max(0, a); ctx.translate(x, y); ctx.rotate(rot);
    this.drawSplinterShape(ctx, -9, 0, 9, 0);
    ctx.restore();
  }

  drawOver(ctx) {
    // tools above everything in the zoomed view
    const t = this.tool;
    // water stream
    ctx.strokeStyle = 'rgba(175,222,242,0.9)'; ctx.lineCap = 'round'; ctx.lineWidth = 1.8;
    for (const w of this.water) {
      ctx.beginPath(); ctx.moveTo(w.x, w.y); ctx.lineTo(w.x - w.vx * 0.018, w.y - w.vy * 0.018); ctx.stroke();
    }
    if (this.spl.state === 'fall' || this.spl.state === 'held') this.drawLooseSplinter(ctx, this.spl.x, this.spl.y, this.spl.rot);
    if (!t) return;
    const wig = t.wig || 0;
    if (t.state !== 'drag') { ctx.save(); ctx.globalAlpha = 0.18; ctx.fillStyle = '#3c2e22'; ell(ctx, t.x + 4, this.toolRest().y + (t.type === 'can' ? 40 : 10), 20, 4); ctx.fill(); ctx.restore(); }
    if (t.type === 'can') drawCan(ctx, t.x, t.y, t.tilt + wig, this.canDir());
    else if (t.type === 'tweezers') drawTweezers(ctx, t.x, t.y, t.ang + wig, t.open);
    else if (t.type === 'roll') {
      // the unrolled strip from the foot to the roll
      if (this.wrapP > 0 && this.step === 'wrap') {
        const a = this.fromSole(-26, 8);
        ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 11; ctx.lineCap = 'butt';
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(t.x, t.y); ctx.stroke();
        ctx.strokeStyle = '#fbfbf6'; ctx.lineWidth = 9.5;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(t.x, t.y); ctx.stroke();
      }
      drawRoll(ctx, t.x, t.y, (t.state === 'drag' ? this.wrapAcc * 2 : 0) + wig, this.wrapP <= 0);
    }
  }

  debugTargets() {
    const out = {};
    const S = this.soleWorld();
    out.sole = { x: S.x, y: S.y };
    out.elephant = { x: this.wx(this.L.ele.x), y: this.L.ele.y - 120 * this.L.ele.s };
    if (this.tool) out.tool = this.toolCenter();
    if (this.spl.state === 'in') out.splinter = this.splinterTipWorld();
    return out;
  }
}
