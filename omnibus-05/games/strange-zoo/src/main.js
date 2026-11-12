import { clamp, lerp, damp, E, Runner, anim } from './util.js';
import { audio } from './audio.js';
import { FX } from './fx.js';
import { Girl } from './girl.js';
import { Rack, Wardrobe } from './wardrobe.js';
import { Hints, Ghost } from './hints.js';
import { World, ST } from './world.js';
import { GateScene } from './scenes/gate.js';
import { ElephantScene } from './scenes/elephant.js';
import { AviaryScene } from './scenes/aviary.js';
import { AquariumScene } from './scenes/aquarium.js';
import { BeesScene } from './scenes/bees.js';
import { EndingScene } from './scenes/ending.js';

const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
const params = new URLSearchParams(location.search);
const SPEED = parseFloat(params.get('speed') || '1') || 1;

const view = { W: 1, H: 1, dpr: 1, safe: { t: 0, r: 0, b: 0, l: 0 }, cx: 0, cy: 0, sw: 1, sh: 1, portrait: true };

class Camera {
  constructor(g) { this.g = g; this.x = 0; this.y = 0; this.s = 1; this.tx = 0; this.ty = 0; this.ts = 1; this.rate = 3; this.follow = null; this.frame = null; }
  scaleFor(r) { return Math.min(view.sw / r.w, view.sh / r.h); }
  fit(r, instant = false) {
    this.frame = r;
    this.tx = r.x + r.w / 2; this.ty = r.y + r.h / 2; this.ts = this.scaleFor(r);
    if (instant) { this.x = this.tx; this.y = this.ty; this.s = this.ts; }
  }
  update(dt) {
    if (this.follow) { const r = this.follow(); this.tx = r.x + r.w / 2; this.ty = r.y + r.h / 2; this.ts = this.scaleFor(r); }
    const k = 1 - Math.exp(-this.rate * dt);
    this.x += (this.tx - this.x) * k; this.y += (this.ty - this.y) * k;
    this.s = Math.exp(lerp(Math.log(this.s), Math.log(this.ts), k));
  }
  settled() { return Math.abs(this.s - this.ts) / this.ts < 0.05 && Math.hypot(this.x - this.tx, this.y - this.ty) * this.s < 12; }
  toScreen(wx, wy) { return { x: (wx - this.x) * this.s + view.cx, y: (wy - this.y) * this.s + view.cy }; }
  toWorld(sx, sy) { return { x: (sx - view.cx) / this.s + this.x, y: (sy - view.cy) / this.s + this.y }; }
  apply(c) { const d = view.dpr; c.setTransform(d * this.s, 0, 0, d * this.s, d * (view.cx - this.x * this.s), d * (view.cy - this.y * this.s)); }
}

const game = {
  view, audio,
  fx: new FX(),
  runner: new Runner(),
  mode: 'play',
  overlay: { fade: 0, fadeColor: '255,248,232', flash: 0, photo: null },
  photos: [],
  time: 0,
  pointerDown: false,
};
game.cam = new Camera(game);
game.girl = new Girl(game);
game.rack = new Rack(game);
game.wardrobe = new Wardrobe(game);
game.hints = new Hints(game);
game.ghost = new Ghost(game);
game.world = new World(game);
game.scenes = {
  gate: new GateScene(game),
  elephant: new ElephantScene(game),
  aviary: new AviaryScene(game),
  aquarium: new AquariumScene(game),
  bees: new BeesScene(game),
  ending: new EndingScene(game),
};
game.order = ['gate', 'elephant', 'aviary', 'aquarium', 'bees', 'ending'];

game.panOf = (x) => clamp(((x - game.cam.x) * game.cam.s) / (view.W * 0.5), -1, 1) * 0.75;
game.viewBounds = () => {
  const a = game.cam.toWorld(0, 0), b = game.cam.toWorld(view.W, view.H);
  return { x0: a.x, y0: a.y, x1: b.x, y1: b.y };
};
game.px = (px) => px / game.cam.s; // screen px -> world units

// ------------------------------------------------------------------ layout
function readSafe() {
  const d = document.getElementById('safe');
  const cs = getComputedStyle(d);
  return { t: parseFloat(cs.paddingTop) || 0, r: parseFloat(cs.paddingRight) || 0, b: parseFloat(cs.paddingBottom) || 0, l: parseFloat(cs.paddingLeft) || 0 };
}

function resize() {
  const W = Math.max(1, window.innerWidth), H = Math.max(1, window.innerHeight);
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  if (W * H * dpr * dpr > 3.3e6) dpr = Math.sqrt(3.3e6 / (W * H));
  view.W = W; view.H = H; view.dpr = dpr;
  canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
  const s = readSafe();
  view.safe = s;
  const m = 6;
  view.sw = Math.max(50, W - s.l - s.r - m * 2);
  view.sh = Math.max(50, H - s.t - s.b - m * 2);
  view.cx = s.l + m + view.sw / 2;
  view.cy = s.t + m + view.sh / 2;
  // pick whichever arrangement gives the larger stage
  const pScale = Math.min(view.sw / 320, view.sh / 620);
  const lScale = Math.min(view.sw / 690, view.sh / 400);
  const portrait = pScale > lScale;
  const changed = portrait !== view.portrait || !game._laidOut;
  view.portrait = portrait;
  game._laidOut = true;
  for (const k in game.scenes) game.scenes[k].layout();
  if (changed && game.current) for (const k in game.scenes) game.scenes[k].relayout();
  if (game.current) {
    if (game.mode === 'play' && game.current.frame) game.cam.fit(game.current.frame(), true);
  }
}

// ------------------------------------------------------------------ flow
game.setCurrent = (sc) => { game.current = sc; };

game.startScene = (name, dev = false) => {
  const sc = game.scenes[name];
  game.mode = 'play';
  game.current = sc;
  const a = sc.anchor();
  game.girl.x = a.girl.x; game.girl.y = a.girl.y; game.girl.target = null;
  game.rack.x = a.rack.x; game.rack.y = a.rack.y; game.rack._px = game.rack.x;
  game.cam.fit(sc.frame(), true);
  sc.enter(true);
};

function* arrive(to) {
  const girl = game.girl, rack = game.rack;
  const a = to.anchor();
  game.cam.follow = () => {
    const f = to.frame();
    const k = clamp((girl.x - (a.girl.x - 520)) / 500, 0, 1);
    // keep the girl framed on the road, then settle on the next station
    const cx = lerp(girl.x + 60, f.x + f.w / 2, E.smooth(k));
    return { x: cx - f.w / 2, y: f.y, w: f.w, h: f.h };
  };
  girl.speed = 260;
  yield* girl.walkTo(a.girl.x - 12, a.girl.y);
  const b = to.anchor();
  if (Math.hypot(b.girl.x - a.girl.x, b.girl.y - a.girl.y) > 1) yield* girl.walkTo(b.girl.x - 12, b.girl.y);
  rack.attached = false; girl.holding = null;
  audio.metal(game.panOf(rack.x), 1.2);
  girl.speed = 190;
  yield* girl.walkTo(b.girl.x, b.girl.y);
  game.cam.follow = null;
  game.cam.rate = 3;
  game.cam.fit(to.frame());
  game.mode = 'play';
  game.current = to;
  to.enter(false);
}

game.travelTo = (name) => {
  const to = game.scenes[name];
  game.mode = 'travel';
  game.hints.clear();
  game.runner.run((function* () {
    const girl = game.girl, rack = game.rack;
    girl.lookAt(null); girl.setPose(null); girl.reachR = null; girl.reachL = null;
    girl.speed = 190;
    if (to.prepare) to.prepare();
    const h = rack.handlePos();
    yield* girl.walkTo(h.x + 37, rack.y);
    girl.facing = 1; girl.holding = 'rack'; rack.attached = true;
    audio.metal(game.panOf(rack.x), 1.4);
    yield 0.2;
    yield* arrive(to);
  })());
};

// enter a station from the left edge while pulling the rack (used after the gate)
game.walkIn = (name) => {
  const to = game.scenes[name];
  const a = to.anchor();
  const girl = game.girl, rack = game.rack;
  girl.x = a.girl.x - 380; girl.y = a.girl.y; girl.facing = 1; girl.target = null;
  girl.holding = 'rack'; rack.attached = true;
  rack.x = girl.x - 125; rack.y = girl.y; rack._px = rack.x;
  game.mode = 'travel';
  game.hints.clear();
  if (to.prepare) to.prepare();
  game.cam.follow = null; game.cam.rate = 3;
  game.cam.fit(to.frame(), true);
  game.runner.run(arrive(to));
};

game.next = () => {
  const i = game.order.indexOf(game.current.name);
  const nx = game.order[i + 1];
  if (nx) game.travelTo(nx);
};

game.restart = () => {
  game.fx.clear();
  for (const k in game.scenes) { game.scenes[k].reset(); game.scenes[k].layout(); }
  game.girl.reset(); game.rack.reset();
  game.world.sky = 'dawn'; game.world.skyMix = null;
  game.startScene('gate');
};

game.flash = () => { game.overlay.flash = 1; };

// ------------------------------------------------------------------ input
let activeId = null;
function toP(e) {
  const r = canvas.getBoundingClientRect();
  const sx = e.clientX - r.left, sy = e.clientY - r.top;
  const w = game.cam.toWorld(sx, sy);
  return { sx, sy, x: w.x, y: w.y, pad: game.px(14) };
}
canvas.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  audio.unlock();
  if (activeId !== null) return; // one finger only
  activeId = e.pointerId;
  try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
  game.pointerDown = true;
  game.hints.poke(); game.ghost.stop();
  if (game.mode === 'play' && game.current) game.current.down(toP(e));
});
canvas.addEventListener('pointermove', (e) => {
  if (e.pointerId !== activeId) return;
  e.preventDefault();
  game.hints.poke();
  if (game.mode === 'play' && game.current) game.current.move(toP(e));
});
// iOS only counts some events as user activation for audio: unlock on release too
document.addEventListener('touchend', () => audio.unlock(), { passive: true });
const end = (e) => {
  audio.unlock();
  if (e.pointerId !== activeId) return;
  activeId = null; game.pointerDown = false;
  if (game.mode === 'play' && game.current) game.current.up(toP(e));
};
canvas.addEventListener('pointerup', end);
canvas.addEventListener('pointercancel', end);
canvas.addEventListener('lostpointercapture', (e) => { if (e.pointerId === activeId) end(e); });
document.addEventListener('touchmove', (e) => { if (e.cancelable) e.preventDefault(); }, { passive: false });
document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('dblclick', (e) => e.preventDefault());
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('visibilitychange', () => audio.suspend(document.hidden));
window.addEventListener('resize', resize);
if (window.visualViewport) window.visualViewport.addEventListener('resize', resize);
window.addEventListener('orientationchange', () => setTimeout(resize, 200));

// ------------------------------------------------------------------ loop
function update(dt) {
  game.time += dt;
  game.runner.update(dt);
  game.world.update(dt);
  if (game.current) game.current.update(dt);
  // neighbouring stations keep living (visible while walking)
  for (const k in game.scenes) {
    const s = game.scenes[k];
    if (s !== game.current && s.idle && s.visible()) s.idle(dt);
  }
  game.girl.update(dt);
  if (game.rack.attached) { game.rack.x = game.girl.x - 125; game.rack.y = game.girl.y; }
  game.rack.update(dt);
  game.wardrobe.update(dt);
  game.fx.update(dt);
  game.cam.update(dt);
  const busy = game.pointerDown || game.mode !== 'play' || (game.current && game.current.busy && game.current.busy());
  game.hints.update(dt, busy);
  game.ghost.update(dt);
  audio.tick(dt);
  const o = game.overlay;
  if (o.flash > 0) o.flash = Math.max(0, o.flash - dt * 1.6);
}

function draw() {
  const d = view.dpr;
  ctx.setTransform(d, 0, 0, d, 0, 0);
  ctx.clearRect(0, 0, view.W, view.H);
  game.world.drawSky(ctx);
  game.cam.apply(ctx);
  game.world.drawFar(ctx);
  game.world.drawGround(ctx);
  const vis = [];
  for (const k in game.scenes) { const s = game.scenes[k]; if (s.visible()) vis.push(s); }
  for (const s of vis) s.drawFloor(ctx);
  game.fx.drawFloor(ctx);
  const list = [];
  game.world.collect(list);
  for (const s of vis) s.collect(list);
  const girl = game.girl;
  if (!girl.hidden && !girl.drawnByScene) list.push({ z: girl.y + (girl.zBias || 0), draw: (c) => girl.draw(c) });
  if (game.rack.visible) list.push({ z: game.rack.y - 1, draw: (c) => game.rack.draw(c) });
  list.sort((a, b) => a.z - b.z);
  for (const it of list) { ctx.save(); it.draw(ctx); ctx.restore(); }
  game.fx.draw(ctx);
  for (const s of vis) if (s.drawOver) { ctx.save(); s.drawOver(ctx); ctx.restore(); }
  game.rack.drawTop(ctx);
  if (game.current && game.current.drawTop) { ctx.save(); game.current.drawTop(ctx); ctx.restore(); }
  game.ghost.draw(ctx);
  // screen overlays
  ctx.setTransform(d, 0, 0, d, 0, 0);
  // soft vignette: a small diorama seen up close
  if (!game._vig || game._vig.w !== view.W || game._vig.h !== view.H) {
    const r = Math.hypot(view.W, view.H) / 2;
    const gr = ctx.createRadialGradient(view.W / 2, view.H / 2, r * 0.55, view.W / 2, view.H / 2, r);
    gr.addColorStop(0, 'rgba(60,45,25,0)'); gr.addColorStop(1, 'rgba(60,45,25,0.16)');
    game._vig = { w: view.W, h: view.H, gr };
  }
  ctx.fillStyle = game._vig.gr; ctx.fillRect(0, 0, view.W, view.H);
  const o = game.overlay;
  if (game.current && game.current.drawScreen) game.current.drawScreen(ctx);
  if (o.fade > 0.001) { ctx.fillStyle = `rgba(${o.fadeColor},${o.fade})`; ctx.fillRect(0, 0, view.W, view.H); }
  if (o.flash > 0.001) { ctx.fillStyle = `rgba(255,255,255,${Math.min(1, o.flash)})`; ctx.fillRect(0, 0, view.W, view.H); }
}

let last = 0;
function frame(ts) {
  const dt = Math.min(0.05, Math.max(0, (ts - last) / 1000)) * SPEED;
  last = ts;
  const p0 = performance.now();
  try { update(dt); draw(); } catch (err) { console.error(err); }
  game.frameMs = (game.frameMs || 0) * 0.95 + (performance.now() - p0) * 0.05;
  requestAnimationFrame(frame);
}

// ------------------------------------------------------------------ dev hooks (URL only)
function devJump(name) {
  const worn = { elephant: [], aviary: ['vet'], aquarium: ['vet', 'carp'], bees: ['vet', 'carp', 'diver'], ending: ['vet', 'carp', 'diver', 'bee'] }[name] || [];
  game.rack.preset(worn);
  game.girl.outfit = worn.length ? worn[worn.length - 1] : 'base';
  game.startScene(name, true);
}

window.__zoo = {
  game,
  state() {
    const c = game.current;
    return { scene: c && c.name, step: c && c.step, mode: game.mode, outfit: game.girl.outfit, portrait: view.portrait, girl: { x: game.girl.x, y: game.girl.y }, frameMs: +(game.frameMs || 0).toFixed(2) };
  },
  // named interaction points in screen px
  targets() {
    const c = game.current;
    const out = {};
    const t = c && c.debugTargets ? c.debugTargets() : {};
    const hb = game.girl.bodyBox();
    t.girl = { x: game.girl.x, y: (hb.y0 + hb.y1) / 2 };
    for (const b of game.rack.bundles) if (b.state === 'hang') { const sp = game.rack.slotPos(b.slot); t['bundle_' + b.id] = { x: sp.x, y: sp.y + 40 }; }
    for (const k in t) out[k] = game.cam.toScreen(t[k].x, t[k].y);
    return out;
  },
};

// dev: ?safe=top,right,bottom,left emulates notch / home-indicator insets
if (params.get('safe')) {
  const [t, r, b, l] = params.get('safe').split(',').map((v) => (parseFloat(v) || 0) + 'px');
  document.getElementById('safe').style.padding = `${t} ${r} ${b} ${l}`;
  if (params.get('safeshow')) document.body.insertAdjacentHTML('beforeend', `<div style="position:fixed;left:0;right:0;top:0;height:${t};background:rgba(0,0,0,.6);pointer-events:none"></div><div style="position:fixed;left:0;right:0;bottom:0;height:${b};background:rgba(0,0,0,.6);pointer-events:none"></div>`);
}
resize();
const startAt = params.get('scene');
if (startAt && game.scenes[startAt]) devJump(startAt);
else game.startScene('gate');
requestAnimationFrame((ts) => { last = ts; requestAnimationFrame(frame); });
