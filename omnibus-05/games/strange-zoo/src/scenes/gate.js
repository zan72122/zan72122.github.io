// Opening: the zoo gate.  Push the doors, walk in.  After the ending the
// souvenir photo is pinned on the board here, and the gate starts a new day.
import { Scene } from './base.js';
import { ST, drawIcon } from '../world.js';
import { clamp, lerp, E, anim, inv, rand } from '../util.js';
import { C, rr, ell, circ, fillStroke, plank, shadow, leafClump } from '../draw.js';
import { audio } from '../audio.js';

export class GateScene extends Scene {
  constructor(g) { super(g, 'gate', ST.gate); this.range = [-520, 520]; }
  reset() {
    super.reset();
    this.door = { a: 0, v: 0, target: 0 };
    this.rattle = 0;
    this.opened = false;
    this.landing = null;
    this.wiggle = 0;
  }
  layoutL() {
    return {
      gate: { x: 90, y: -34 }, girl: { x: -125, y: 0 }, rack: { x: -262, y: 0 }, board: { x: 262, y: -44 },
      frames: { overview: { x: -350, y: -340, w: 690, h: 385 }, door: { x: -40, y: -230, w: 240, h: 240 } },
    };
  }
  layoutP() {
    return {
      gate: { x: -12, y: -250 }, girl: { x: 60, y: 0 }, rack: { x: -77, y: 0 }, board: { x: 104, y: -96 },
      frames: { overview: { x: -160, y: -560, w: 320, h: 605 }, door: { x: -120, y: -430, w: 220, h: 240 } },
    };
  }

  enter() {
    const g = this.g;
    this.step = 'closed';
    g.girl.lookAt(this.wx(this.L.gate.x), this.L.gate.y - 80);
    g.girl.facing = this.P ? -1 : 1;
    if (g.pendingPhoto) { this.landing = { img: g.pendingPhoto, t: 0 }; g.pendingPhoto = null; }
    if (g.world.sky === 'dawn') {
      this.run.run((function* () { yield 0.5; })());
    }
    this.setHints();
  }

  setHints() {
    const g = this.g, G = this.L.gate;
    g.hints.set('gate', [
      { t: 2.5, fn: () => { this.rattle = 1; audio.latch(this.pan(this.wx(G.x))); } },
      { t: 5.5, fn: () => { g.girl.setPose('point'); g.girl.lookAt(this.wx(G.x), G.y - 70); setTimeout(() => { if (g.girl.poseOverride === 'point') g.girl.setPose(null); }, 1400); this.rattle = 1; } },
      { t: 9, fn: () => { g.ghost.tap(this.wx(G.x - 30), G.y - 80); } },
    ], 16);
  }

  open() {
    if (this.opened) return;
    this.opened = true;
    this.step = 'opening';
    this.door.target = 1.32; this.door.v = 5;
    audio.latch(this.pan(this.wx(this.L.gate.x)));
    setTimeout(() => audio.creak(this.pan(this.wx(this.L.gate.x)), 1), 120);
    this.g.hints.clear();
    const g = this.g;
    if (g.world.sky !== 'day') g.world.skyMix = { to: 'day', k: 0 };
    g.runner.run(this.enterZoo());
  }

  *enterZoo() {
    const g = this.g, girl = g.girl, G = this.L.gate;
    girl.setPose(null); girl.say('open', 1.2); girl.jump(50);
    yield 0.7;
    const h = g.rack.handlePos();
    yield* girl.walkTo(h.x + 37, g.rack.y);
    girl.facing = 1; girl.holding = 'rack'; g.rack.attached = true;
    audio.metal(this.pan(g.rack.x), 1.4);
    yield 0.2;
    g.cam.rate = 1.1; g.cam.fit(this.frame('door'));
    girl.speed = 150;
    const walk = girl.walkTo(this.wx(G.x - (this.P ? -30 : 10)), this.P ? -30 : 0);
    let t = 0;
    while (girl.target) {
      const dt = yield; t += dt || 0;
      if (t > 0.9) g.overlay.fade = Math.min(1, (t - 0.9) / 0.9);
      if (g.overlay.fade >= 1) break;
    }
    yield* anim(0.5, (k) => { g.overlay.fade = Math.max(g.overlay.fade, k); });
    girl.target = null;
    g.cam.rate = 3;
    g.world.sky = 'day'; g.world.skyMix = null;
    g.walkIn('elephant');
    yield* anim(0.9, (k) => { g.overlay.fade = 1 - k; });
    g.overlay.fade = 0;
  }

  update(dt) {
    super.update(dt);
    this.tick(dt);
  }
  idle(dt) { super.idle(dt); this.tick(dt); }
  tick(dt) {
    const d = this.door;
    d.v += (30 * (d.target - d.a) - 4.5 * d.v) * dt;
    d.a += d.v * dt;
    if (d.a > 1.45) { d.a = 1.45; d.v = -Math.abs(d.v) * 0.3; audio.wood(this.pan(this.wx(this.L.gate.x)), 0.7, 0.12); }
    if (d.a < 0) { d.a = 0; d.v = 0; }
    this.rattle = Math.max(0, this.rattle - dt * 1.4);
    const sm = this.g.world.skyMix;
    if (sm && this.g.current === this) { sm.k = Math.min(1, sm.k + dt * 0.5); if (sm.k >= 1) { this.g.world.sky = sm.to; this.g.world.skyMix = null; } }
    if (this.landing) { this.landing.t += dt; if (this.landing.t > 2.2) { this.g.photos.push(this.landing.img); this.landing = null; audio.wood(0, 1.3, 0.12); } }
  }

  hitDoor(p) {
    const G = this.w(this.L.gate);
    const pad = p.pad || 10;
    return p.x > G.x - 125 - pad && p.x < G.x + 125 + pad && p.y > G.y - 180 - pad && p.y < G.y + pad;
  }

  down(p) {
    if (this.step !== 'closed') return;
    if (this.hitDoor(p)) { this.open(); return; }
    // tapping the girl makes her look at the gate
    const bb = this.g.girl.bodyBox();
    if (p.x > bb.x0 && p.x < bb.x1 && p.y > bb.y0 && p.y < bb.y1) { this.g.girl.jump(40); this.g.girl.lookAt(this.wx(this.L.gate.x), this.L.gate.y - 70); audio.cloth(this.pan(p.x), 0.4); }
    else if (this.g.rack.hitBundle(p)) { this.g.rack.hint(this.g.rack.hitBundle(p).id, 0.6); }
  }
  move(p) {
    // a push/swipe across the doors also opens them
    if (this.step === 'closed' && this.g.pointerDown && this.hitDoor(p)) this.open();
  }

  debugTargets() { const G = this.w(this.L.gate); return { door: { x: G.x - 30, y: G.y - 80 } }; }

  // ---------------------------------------------------------------- drawing
  collect(list) {
    const G = this.w(this.L.gate), B = this.w(this.L.board);
    list.push({ z: G.y, draw: (c) => this.drawGate(c, G.x, G.y) });
    list.push({ z: B.y, draw: (c) => this.drawBoard(c, B.x, B.y) });
  }

  drawFloor(ctx) {
    const G = this.w(this.L.gate);
    // a short path leading from the road to the gate
    ctx.fillStyle = C.path;
    ctx.beginPath();
    ctx.moveTo(G.x - 95, G.y + 4); ctx.lineTo(G.x + 95, G.y + 4);
    ctx.lineTo(G.x + 130, 24); ctx.lineTo(G.x - 130, 24); ctx.closePath(); ctx.fill();
    ctx.fillStyle = C.pathD; ctx.fillRect(this.wx(-700), -25, 1400, 3);
    ctx.fillStyle = C.path; ctx.fillRect(this.wx(-700), -22, 1400, 46);
    ctx.fillStyle = '#d8cdb8';
    for (let x = this.wx(-700); x < this.wx(700); x += 22) { rr(ctx, x + 1, 22, 19, 6, 3); ctx.fill(); }
  }

  drawGate(ctx, gx, gy) {
    const d = this.door, t = this.t;
    const rat = this.rattle * Math.sin(t * 40) * 0.025;
    const a = clamp(d.a + rat, 0, 1.5);
    ctx.save();
    ctx.translate(gx, gy);
    shadow(ctx, 0, 0, 150, 10, 0.18);
    // fences to both sides
    for (const s of [-1, 1]) {
      for (let x = 135; x < 420; x += 26) {
        rr(ctx, s * x - 3, -48, 6, 48, 2); fillStroke(ctx, '#f3ead7', C.woodDD, 1.1);
        ctx.fillStyle = '#f3ead7'; ctx.beginPath(); ctx.moveTo(s * x - 3, -48); ctx.lineTo(s * x, -54); ctx.lineTo(s * x + 3, -48); ctx.fill();
      }
      rr(ctx, s > 0 ? 130 : -420, -40, 290, 5, 2); fillStroke(ctx, '#e8dcc2', C.woodDD, 1);
      rr(ctx, s > 0 ? 130 : -420, -20, 290, 5, 2); fillStroke(ctx, '#e8dcc2', C.woodDD, 1);
    }
    // view into the zoo (only visible through the opening)
    if (a > 0.01) {
      ctx.save();
      rr(ctx, -92, -168, 184, 168, 2); ctx.clip();
      const sg = ctx.createLinearGradient(0, -168, 0, 0);
      sg.addColorStop(0, '#cbe9f3'); sg.addColorStop(0.55, '#f5f0da'); sg.addColorStop(0.56, '#b9dc95'); sg.addColorStop(1, '#a4d07e');
      ctx.fillStyle = sg; ctx.fillRect(-92, -168, 184, 168);
      ctx.fillStyle = C.path;
      ctx.beginPath(); ctx.moveTo(-10, -76); ctx.lineTo(10, -76); ctx.lineTo(70, 0); ctx.lineTo(-70, 0); ctx.closePath(); ctx.fill();
      leafClump(ctx, -62, -100, 24, 0.3); leafClump(ctx, 58, -104, 22, 0.7); leafClump(ctx, -30, -96, 12, 0.5);
      // a small elephant far away, swinging its trunk
      ctx.fillStyle = '#a3abb3';
      ell(ctx, 30, -86, 13, 8); ctx.fill(); circ(ctx, 19, -90, 7); ctx.fill();
      ctx.strokeStyle = '#a3abb3'; ctx.lineWidth = 3; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(14, -88); ctx.quadraticCurveTo(10 + Math.sin(t * 2) * 3, -80, 12, -77); ctx.stroke();
      for (const lx of [22, 27, 35, 39]) ctx.fillRect(lx - 1.5, -81, 3, 7);
      ctx.restore();
    }
    // door leaves
    for (const s of [-1, 1]) this.drawLeaf(ctx, s, a);
    // pillars
    for (const s of [-1, 1]) {
      const x0 = s < 0 ? -130 : 92;
      rr(ctx, x0, -196, 38, 196, 3); fillStroke(ctx, '#d7c9b3', C.line, 1.5);
      ctx.strokeStyle = 'rgba(120,100,80,0.35)'; ctx.lineWidth = 1;
      for (let yy = -186; yy < 0; yy += 14) {
        ctx.beginPath(); ctx.moveTo(x0, yy); ctx.lineTo(x0 + 38, yy); ctx.stroke();
        const off = ((yy / 14) | 0) % 2 ? 12 : 26;
        ctx.beginPath(); ctx.moveTo(x0 + off, yy); ctx.lineTo(x0 + off, yy + 14); ctx.stroke();
      }
      ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.fillRect(x0 + 2, -194, 6, 192);
      rr(ctx, x0 - 5, -206, 48, 12, 3); fillStroke(ctx, '#c9b89e', C.line, 1.4);
      // hanging flower pots
      circ(ctx, x0 + 19, -150, 9); fillStroke(ctx, '#d97f5c', C.line, 1.2);
      leafClump(ctx, x0 + 19, -160, 9, s, C.leafD, C.leaf, C.leafL);
      ctx.fillStyle = '#f28ca0'; circ(ctx, x0 + 14, -164, 2.6); ctx.fill(); circ(ctx, x0 + 24, -160, 2.6); ctx.fill();
    }
    // top beam + pictogram sign
    plank(ctx, -150, -222, 300, 18, C.wood, 3);
    rr(ctx, -84, -276, 168, 50, 10); fillStroke(ctx, '#f6ecd4', C.woodDD, 2.2);
    drawIcon(ctx, 'elephant', -54, -250, 1.1);
    drawIcon(ctx, 'bird', -18, -252, 1.1);
    drawIcon(ctx, 'otter', 18, -250, 1.1);
    drawIcon(ctx, 'bee', 54, -251, 1.1);
    ctx.restore();
  }

  drawLeaf(ctx, s, a) {
    // leaf hinged at x = s*92, swings inward (away from viewer)
    const hx = s * 92;
    const w = 92 * Math.cos(a);
    const fx = hx - s * w;
    const sk = Math.sin(a);
    const top0 = -168, bot0 = 0;
    const topF = top0 + sk * 10, botF = bot0 - sk * 6;
    const shade = 1 - sk * 0.35;
    const col = `rgb(${Math.round(190 * shade)},${Math.round(137 * shade)},${Math.round(84 * shade)})`;
    ctx.beginPath();
    ctx.moveTo(hx, top0); ctx.lineTo(fx, topF); ctx.lineTo(fx, botF); ctx.lineTo(hx, bot0); ctx.closePath();
    fillStroke(ctx, col, C.woodDD, 1.5);
    // planks
    ctx.strokeStyle = 'rgba(80,50,25,0.4)'; ctx.lineWidth = 1;
    for (let i = 1; i < 4; i++) {
      const k = i / 4;
      const x = lerp(hx, fx, k), yt = lerp(top0, topF, k), yb = lerp(bot0, botF, k);
      ctx.beginPath(); ctx.moveTo(x, yt); ctx.lineTo(x, yb); ctx.stroke();
    }
    // iron braces
    ctx.strokeStyle = '#4f5b64'; ctx.lineWidth = 3;
    for (const yy of [-140, -30]) {
      ctx.beginPath(); ctx.moveTo(hx, yy); ctx.lineTo(fx, lerp(yy, yy + sk * (yy < -80 ? 8 : -5), 1)); ctx.stroke();
    }
    // ring handle
    if (w > 10) {
      const x = lerp(hx, fx, 0.88), y = lerp(-80, -80 + sk * 2, 0.88);
      ctx.strokeStyle = '#6d757c'; ctx.lineWidth = 2.2;
      ctx.beginPath(); ctx.arc(x, y + 5, 5 * Math.max(0.3, Math.cos(a)), 0, Math.PI * 2); ctx.stroke();
    }
  }

  drawBoard(ctx, x, y) {
    ctx.save();
    ctx.translate(x, y);
    shadow(ctx, 0, 0, 40, 5, 0.18);
    plank(ctx, -30, -80, 5, 80, C.woodD, 1); plank(ctx, 25, -80, 5, 80, C.woodD, 2);
    rr(ctx, -38, -122, 76, 58, 4); fillStroke(ctx, '#c79b68', C.woodDD, 2);
    ctx.fillStyle = 'rgba(0,0,0,0.06)';
    for (let i = 0; i < 30; i++) { circ(ctx, -34 + ((i * 37) % 68), -118 + ((i * 53) % 52), 0.8); ctx.fill(); }
    const photos = this.g.photos.slice(-4);
    photos.forEach((img, i) => this.drawPolaroid(ctx, -17 + (i % 2) * 34, -106 + Math.floor(i / 2) * 28, img, ((i * 7) % 5 - 2) * 0.06, 0.95));
    ctx.restore();
  }

  drawPolaroid(ctx, x, y, img, rot, s) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot); ctx.scale(s, s);
    ctx.fillStyle = '#fffdf7'; ctx.strokeStyle = 'rgba(80,60,40,0.4)'; ctx.lineWidth = 0.8;
    rr(ctx, -15, -12, 30, 27, 1.5); ctx.fill(); ctx.stroke();
    if (img) { try { ctx.drawImage(img, -13, -10, 26, 19); } catch (e) { /* ignore */ } }
    ctx.fillStyle = '#e0584e'; circ(ctx, 0, -12, 2); ctx.fill();
    ctx.restore();
  }

  drawScreen(ctx) {
    if (!this.landing) return;
    const L = this.landing, v = this.g.view;
    const k = E.inOut(clamp((L.t - 0.5) / 1.5, 0, 1));
    const B = this.w(this.L.board);
    const i = Math.min(3, this.g.photos.length);
    const tgt = this.g.cam.toScreen(B.x - 17 + (i % 2) * 34, B.y - 106 + Math.floor(i / 2) * 28);
    const s0 = Math.min(v.W * 0.8 / 30, v.H * 0.7 / 27);
    const s1 = 0.95 * this.g.cam.s;
    const x = lerp(v.W / 2, tgt.x, k), y = lerp(v.H / 2, tgt.y, k);
    const s = Math.exp(lerp(Math.log(s0), Math.log(s1), k));
    this.drawPolaroid(ctx, x, y, L.img, lerp(-0.05, 0.06, k), s);
  }
}
