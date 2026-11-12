import { PAL, withAlpha, mix, shade } from './style.js';
import * as LAND from './land.js';
import { TUB } from '../config.js';
import { clamp } from '../util.js';

// ---------------------------------------------------------------------------
// Small physical consequences, never decoration: cotton and felt lint shaken
// loose from the quilt, water dripping off a wet hull and ringing the tub water,
// cotton-ball smoke from a chimney, felt leaves in a gust, a torn-off wisp of a
// tapped cloud, and a tiny shake of the picture when something heavy lands.
// Everything drifts in the same wind as the balloons, and falls under the same
// gravity. Particles live in a fixed pool and are drawn from cached sprites.
// ---------------------------------------------------------------------------

const MAX = 320;
const MAX_RINGS = 28;
const TAU = Math.PI * 2;
const tmp = { x: 0, y: 0 };

// The tub's water surface as land.js draws it (optional export), else the
// physics waterline with a plain ellipse.
function waterShape() {
  const w = LAND.TUB_WATER;
  if (w && w.rx > 0 && w.ry > 0) return w;
  return FALLBACK_WATER;
}
const FALLBACK_WATER = { rx: TUB.halfW, ry: 24, level: TUB.level };

// ---- sprites (built once, drawn with drawImage) ---------------------------
const SPR = new Map();
function sprite(key, size, paint) {
  let c = SPR.get(key);
  if (c) return c;
  c = document.createElement('canvas');
  c.width = c.height = size;
  const x = c.getContext('2d');
  x.translate(size / 2, size / 2);
  x.scale(size / 2, size / 2);   // unit coordinates: -1..1, y down
  paint(x, 2 / size);
  SPR.set(key, c);
  return c;
}

function rnd(seed) {
  let s = seed * 9301 + 49297;
  return () => ((s = (s * 9301 + 49297) % 233280) / 233280);
}

// A tuft of fluff: a soft irregular clump with a couple of stray fibres.
// Mostly felt from the quilt itself (so it reads as "a bit of the cloth",
// never as a glint), sometimes a wisp of the cotton it is stuffed with.
const LINT_KINDS = [
  ['#f4ecdc', '#d8cbb3'],   // cotton stuffing
  ['#efe6d2', '#d2c4aa'],
  ['#c3dba7', '#93b878'],   // felt fibres from the quilt
  ['#b9d39b', '#86ad73'],
];
function lintSprite(v) {
  const [lit, dark] = LINT_KINDS[v % LINT_KINDS.length];
  return sprite('lint' + v, 40, (x, px) => {
    const r = rnd(v + 3);
    x.lineCap = 'round';
    x.strokeStyle = withAlpha(dark, 0.85);
    x.lineWidth = px * 1.5;
    x.beginPath();
    for (let i = 0; i < 3; i++) {
      const a = r() * TAU, l = 0.6 + r() * 0.3;
      x.moveTo(Math.cos(a) * 0.3, Math.sin(a) * 0.3);
      x.quadraticCurveTo(Math.cos(a + 0.5) * l * 0.7, Math.sin(a + 0.5) * l * 0.7, Math.cos(a + 0.3) * l, Math.sin(a + 0.3) * l);
    }
    x.stroke();
    const blobs = [];
    for (let i = 0; i < 4; i++) blobs.push([(r() - 0.5) * 0.5, (r() - 0.5) * 0.4, 0.22 + r() * 0.14]);
    x.fillStyle = dark;
    for (const [bx, by, br] of blobs) { x.beginPath(); x.arc(bx + 0.05, by + 0.06, br, 0, TAU); x.fill(); }
    x.fillStyle = lit;
    for (const [bx, by, br] of blobs) { x.beginPath(); x.arc(bx - 0.02, by - 0.02, br * 0.86, 0, TAU); x.fill(); }
  });
}

// A cotton-ball puff (smoke, cloud wisps): lumpy, lit upper left, fibrous rim.
function puffSprite(v, dusk) {
  const key = 'puff' + v + (dusk ? 'd' : '');
  return sprite(key, 112, (x, px) => {
    const r = rnd(v * 7 + 11);
    const lit = dusk ? '#fbe6cf' : PAL.cloud;
    const shadeC = dusk ? '#d9b9a8' : PAL.cloudShade;
    const lumps = [];
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * TAU + r() * 0.6;
      const d = 0.28 + r() * 0.18;
      lumps.push([Math.cos(a) * d, Math.sin(a) * d * 0.8, 0.34 + r() * 0.16]);
    }
    lumps.push([0, 0, 0.5]);
    // shaded underside
    x.fillStyle = shadeC;
    for (const [lx, ly, lr] of lumps) { x.beginPath(); x.arc(lx + 0.05, ly + 0.07, lr, 0, TAU); x.fill(); }
    // lit cotton
    for (const [lx, ly, lr] of lumps) {
      const g = x.createRadialGradient(lx - lr * 0.35, ly - lr * 0.4, lr * 0.1, lx, ly, lr);
      g.addColorStop(0, lit);
      g.addColorStop(0.7, lit);
      g.addColorStop(1, withAlpha(lit, 0));
      x.fillStyle = g;
      x.beginPath(); x.arc(lx, ly, lr, 0, TAU); x.fill();
    }
    // loose fibres at the edge
    x.strokeStyle = withAlpha(lit, 0.8);
    x.lineWidth = px * 1.3;
    x.lineCap = 'round';
    x.beginPath();
    for (let i = 0; i < 26; i++) {
      const a = r() * TAU, d0 = 0.62 + r() * 0.12, l = 0.08 + r() * 0.14;
      x.moveTo(Math.cos(a) * d0, Math.sin(a) * d0 * 0.85);
      x.lineTo(Math.cos(a + 0.15) * (d0 + l), Math.sin(a + 0.15) * (d0 + l) * 0.85);
    }
    x.stroke();
  });
}

// A felt leaf with a sewn vein.
function leafSprite(v) {
  const cols = ['#79a865', '#d9a441', '#8fb86a'];
  const col = cols[v % cols.length];
  return sprite('leaf' + v, 48, (x, px) => {
    x.beginPath();
    x.moveTo(-0.95, 0);
    x.quadraticCurveTo(-0.2, -0.62, 0.9, 0);
    x.quadraticCurveTo(-0.2, 0.62, -0.95, 0);
    x.closePath();
    x.fillStyle = col;
    x.fill();
    x.fillStyle = withAlpha(shade(col, -0.35), 0.35);
    x.beginPath();
    x.moveTo(-0.9, 0.02);
    x.quadraticCurveTo(-0.2, 0.6, 0.88, 0.02);
    x.quadraticCurveTo(-0.2, 0.3, -0.9, 0.02);
    x.fill();
    x.strokeStyle = withAlpha(shade(col, -0.4), 0.6);
    x.lineWidth = px * 1.4;
    x.stroke();
    x.setLineDash([0.12, 0.09]);
    x.strokeStyle = withAlpha(PAL.stitch, 0.85);
    x.lineWidth = px * 1.5;
    x.beginPath(); x.moveTo(-0.7, 0); x.lineTo(0.7, 0); x.stroke();
    x.setLineDash([]);
    // tiny stalk
    x.strokeStyle = shade(col, -0.35);
    x.lineWidth = px * 2;
    x.beginPath(); x.moveTo(-0.95, 0); x.lineTo(-1, 0.08); x.stroke();
  });
}

// A water drop: rounded bottom, pointed top (y down in the sprite = falling).
function dropSprite() {
  return sprite('drop', 32, (x, px) => {
    x.beginPath();
    x.moveTo(0, -0.95);
    x.quadraticCurveTo(0.2, -0.35, 0.55, 0.2);
    x.arc(0, 0.3, 0.56, -0.2, Math.PI + 0.2);
    x.quadraticCurveTo(-0.2, -0.35, 0, -0.95);
    x.closePath();
    x.fillStyle = mix(PAL.water, '#4f94ad', 0.35);
    x.fill();
    x.fillStyle = withAlpha(PAL.water, 0.9);
    x.beginPath(); x.arc(0.05, 0.35, 0.4, 0, TAU); x.fill();
    x.fillStyle = 'rgba(255,255,255,0.9)';
    x.beginPath(); x.ellipse(-0.2, 0.15, 0.12, 0.2, 0.3, 0, TAU); x.fill();
    x.strokeStyle = withAlpha('#3f7f96', 0.5);
    x.lineWidth = px * 1.2;
    x.beginPath();
    x.moveTo(0, -0.95);
    x.quadraticCurveTo(0.2, -0.35, 0.55, 0.2);
    x.arc(0, 0.3, 0.56, -0.2, Math.PI + 0.2);
    x.quadraticCurveTo(-0.2, -0.35, 0, -0.95);
    x.stroke();
  });
}

function makeParticle() {
  return {
    alive: false, kind: '', layer: 'front', x: 0, y: 0, vx: 0, vy: 0, life: 0, max: 1,
    size: 1, rot: 0, vr: 0, v: 0, ent: null, lx: 0, ly: 0, hang: 0, flip: 0,
  };
}

export class Fx {
  constructor() {
    this.p = [];
    for (let i = 0; i < MAX; i++) this.p.push(makeParticle());
    this.head = 0;
    this.ripples = [];
    for (let i = 0; i < MAX_RINGS; i++) this.ripples.push({ alive: false, ent: null, x: 0, t: 0, s: 1 });
    this.ringHead = 0;
    this.smokeAcc = 0;
    this.leafAcc = 0;
    this.shake = 0;
    this.stuckPrev = new WeakMap();
    this.lintAlive = 0;
  }

  // Take the oldest slot of the pool (spawn order is age order).
  spawn(kind, layer, x, y, vx, vy, max) {
    const p = this.p[this.head];
    this.head = (this.head + 1) % MAX;
    p.alive = true; p.kind = kind; p.layer = layer;
    p.x = x; p.y = y; p.vx = vx; p.vy = vy; p.life = 0; p.max = max;
    p.size = 1; p.rot = 0; p.vr = 0; p.v = 0; p.ent = null; p.hang = 0; p.lx = 0; p.ly = 0; p.flip = Math.random() * TAU;
    return p;
  }

  // Compatibility: add a particle described by an object.
  add(o) {
    const p = this.spawn(o.kind, o.layer || 'front', o.x, o.y, o.vx || 0, o.vy || 0, o.max || 1);
    for (const k in o) p[k] = o[k];
    p.alive = true;
    return p;
  }

  // Fluff shaken loose from the quilt (and the cotton it is stuffed with).
  lint(x, y, n, spread = 60, up = 60, ent = null, felt = 0.5, rest = 0) {
    for (let i = 0; i < n; i++) {
      const p = this.spawn('lint', 'front', x + (Math.random() - 0.5) * spread, y + Math.random() * 4,
        (Math.random() - 0.5) * 70, up * (0.4 + Math.random() * 0.8), 2.6 + Math.random() * 2);
      p.size = 3 + Math.random() * 2.4;
      p.rot = Math.random() * TAU;
      p.vr = (Math.random() - 0.5) * 5;
      p.v = (Math.random() < felt ? 2 : 0) + (Math.random() < 0.5 ? 1 : 0);
      p.ent = ent;
      // where it comes to rest: the front of the quilt (dented under a house),
      // or further back on the quilt top where a finger poked it
      p.ly = rest > 0 ? rest : 0;
    }
  }

  splash(ent, x, y, n, speed) {
    for (let i = 0; i < n; i++) {
      const a = Math.PI * (0.2 + Math.random() * 0.6);
      const p = this.spawn('drop', 'front', x + (Math.random() - 0.5) * 10, y,
        Math.cos(a) * speed * (0.5 + Math.random()), Math.sin(a) * speed * (0.6 + Math.random() * 0.6), 1.2);
      p.size = 1.6 + Math.random() * 1.4;
      p.ent = ent;
      p.v = 1; // a splash droplet: no ring of its own
    }
  }

  handle(e, world) {
    switch (e.type) {
      case 'liftoff': {
        const ent = e.ent;
        const w = ent.bp.bounds.w;
        if (ent.ground.kind === 'tub') {
          const L = waterShape().level;
          this.ring(ent, ent.body.x, 1.6);
          this.ring(ent, ent.body.x - w * 0.3, 1);
          this.ring(ent, ent.body.x + w * 0.3, 1);
          this.splash(ent, ent.body.x - w * 0.35, L, 3, 70);
          this.splash(ent, ent.body.x + w * 0.35, L, 3, 70);
        } else {
          // the quilt springs back where the base let go and flicks fluff up
          const x0 = ent.body.x - ent.bp.com[0];
          this.lint(x0, 0, 10 + Math.round(ent.bp.mass * 2), w * 0.95, 110, ent, 0.75);
        }
        break;
      }
      case 'land': {
        const ent = e.ent;
        const s = clamp(e.speed / 200, 0.2, 1.5);
        const heavy = clamp(ent.bp.mass / 4, 0.6, 1.6);
        if (ent.ground.kind === 'tub') {
          this.ring(ent, ent.body.x, 1.2 + s);
          this.splash(ent, ent.body.x - ent.bp.bounds.w * 0.4, waterShape().level, Math.round(2 + 3 * s), 60 + 60 * s);
          this.splash(ent, ent.body.x + ent.bp.bounds.w * 0.4, waterShape().level, Math.round(2 + 3 * s), 60 + 60 * s);
        } else {
          // air and fluff squeezed out from under both edges of the base
          const x0 = ent.body.x - ent.bp.com[0];
          const hw = ent.bp.bounds.w / 2;
          const n = Math.round(4 + 7 * s * heavy);
          for (const side of [-1, 1]) {
            this.lint(x0 + side * hw, 2, n, 14, 30 + 40 * s, ent, 0.7);
            for (let i = 1; i <= n; i++) {
              const p = this.p[(this.head - i + MAX) % MAX];
              p.vx = side * (40 + Math.random() * 90 * s);
            }
          }
        }
        this.shake = Math.max(this.shake, clamp(2.2 * s * heavy, 0, 5));
        break;
      }
      case 'peel': {
        // a fibre lets go exactly where the base came away from the cloth
        if (this.lintAlive > 14 || Math.random() < 0.5) break;
        const pts = this.peelPoints(e.ent);
        if (pts.length) this.lint(pts[Math.floor(Math.random() * pts.length)], 1, 1, 6, 35, e.ent, 1);
        break;
      }
      case 'poke':
        this.lint(e.x, Math.max(0, e.y - 4), 4, 18, 55, e.ent, 0.9, Math.max(0, e.y - 6));
        break;
      case 'drip': {
        const p = this.spawn('drip', 'front', e.x, e.y, (e.vx || 0) * 0.3, Math.min(0, (e.vy || 0) * 0.2), 4);
        p.size = 3.6 + Math.random() * 1.8;
        p.ent = e.ent;
        // it gathers on the hull for a moment before it lets go
        p.hang = 0.12 + Math.random() * 0.25;
        if (e.ent) [p.lx, p.ly] = e.ent.body.toLocal(e.x, e.y);
        break;
      }
      case 'ripple':
        this.ring(e.ent, e.x, e.strength || 1);
        break;
      case 'bump':
        this.ring(e.ent, e.x + (Math.random() - 0.5) * 100, 0.8);
        break;
      case 'slip': {
        // the loop scrapes a little cotton off the chimney top as it slips
        const ent = e.ent, ch = ent && ent.bp.parts.chimney;
        if (ch) {
          const lx = (ch.x0 + ch.x1) / 2 - ent.bp.com[0], ly = ch.y1 - ent.bp.com[1];
          this.lint(ent.body.wx(lx, ly), ent.body.wy(lx, ly), 3, 16, 30, ent, 0);
        }
        break;
      }
      case 'birdsFly': {
        // a felt bird shakes a bit of fluff off as it takes off
        const p = this.spawn('lint', 'front', e.x, e.y, (Math.random() - 0.5) * 30, 20, 3.2);
        p.size = 2.4; p.rot = Math.random() * TAU; p.vr = 3; p.v = 1;
        break;
      }
      case 'puff': {
        const [wx, wy] = world.cam.toWorld(e.sx, e.sy);
        for (let i = 0; i < 5; i++) {
          const p = this.spawn('wisp', 'front', wx + (Math.random() - 0.5) * 70, wy + (Math.random() - 0.5) * 24,
            (Math.random() - 0.3) * 50, 6 + Math.random() * 16, 1.8 + Math.random() * 0.6);
          p.size = 9 + Math.random() * 9;
          p.v = i % 3;
          p.rot = (Math.random() - 0.5) * 0.4;
        }
        break;
      }
      default:
    }
  }

  // Which contacts peeled since the last frame (their world x on the quilt).
  peelPoints(ent) {
    const out = [];
    if (!ent || !ent.stuck) return out;
    const prev = this.stuckPrev.get(ent);
    if (!prev || prev.length !== ent.stuck.length) return out;
    const cps = ent.bp.contacts;
    for (let i = 0; i < prev.length; i++) {
      if (prev[i] && !ent.stuck[i] && cps[i]) out.push(ent.body.wx(cps[i].x, cps[i].y));
    }
    return out;
  }

  ring(ent, x, strength) {
    if (!ent) return;
    const r = this.ripples[this.ringHead];
    this.ringHead = (this.ringHead + 1) % MAX_RINGS;
    r.alive = true; r.ent = ent; r.x = x; r.t = 0; r.s = strength;
  }

  update(dt, world) {
    const wind = world.wind;
    const cur = world.current;
    // remember where the cloth still clings, to find the next peel
    if (cur && cur.stuck) {
      let prev = this.stuckPrev.get(cur);
      if (!prev || prev.length !== cur.stuck.length) { prev = new Uint8Array(cur.stuck.length); this.stuckPrev.set(cur, prev); }
      prev.set(cur.stuck);
    }
    // chimney smoke: cotton puffs from houses that have a chimney
    this.smokeAcc += dt;
    if (this.smokeAcc > 0.3) {
      this.smokeAcc = 0;
      for (const ent of world.houses) {
        const sp = ent.bp.parts.smoke;
        if (!sp || ent.state === 'gone') continue;
        const b = ent.body;
        const lx = sp[0] - ent.bp.com[0], ly = sp[1] - ent.bp.com[1];
        const p = this.spawn('smoke', 'back', b.wx(lx, ly), b.wy(lx, ly), b.vx * 0.3, 16 + b.vy * 0.3, 3.6);
        p.size = 5 + Math.random() * 2;
        p.v = Math.floor(Math.random() * 3);
        p.rot = (Math.random() - 0.5) * 0.8;
        p.vr = (Math.random() - 0.5) * 0.3;
      }
    }
    // felt leaves shaken from the trees by gusts
    const cam = world.cam;
    const g = wind.gustAt(cam.x);
    this.leafAcc += dt * g * 1.4;
    if (this.leafAcc > 1) {
      this.leafAcc = 0;
      const p = this.spawn('leaf', 'front', cam.left - 20, 60 + Math.random() * 260, 60, 10, 9);
      p.size = 6 + Math.random() * 3;
      p.rot = Math.random() * TAU;
      p.vr = 1.5 + Math.random() * 2.5;
      p.v = Math.floor(Math.random() * 3);
    }
    let lintAlive = 0;
    for (const p of this.p) {
      if (!p.alive) continue;
      if (p.kind === 'lint') lintAlive++;
      p.life += dt;
      if (p.life >= p.max) { p.alive = false; continue; }
      if (p.kind === 'wet') continue;
      if (p.kind === 'drip' && p.hang > 0) {
        // still clinging to the hull, swelling
        p.hang -= dt;
        p.life = 0;
        if (p.ent && p.ent.body) {
          const b = p.ent.body;
          p.x = b.wx(p.lx, p.ly); p.y = b.wy(p.lx, p.ly);
          p.vx = b.vx * 0.5; p.vy = Math.min(0, b.vy);
        }
        continue;
      }
      wind.at(p.x, p.y, tmp);
      switch (p.kind) {
        case 'lint': {
          // fluff: gravity against a lot of drag, carried by the air
          p.vy += (-34 + tmp.y * 0.4 - p.vy) * dt * 2.2;
          p.vx += (tmp.x * 0.6 - p.vx) * dt * 1.6;
          p.rot += p.vr * dt;
          const floor = p.ly > 0 ? p.ly : p.ent && p.ent.dentAt ? -p.ent.dentAt(p.x) + 0.8 : 0.8;
          if (p.y < floor && p.vy <= 0) { p.y = floor; p.vy = 0; p.vx *= 0.8; p.vr *= 0.8; }
          break;
        }
        case 'smoke':
          p.vy += (20 - p.vy) * dt * 0.8;
          p.vx += (tmp.x * 0.85 - p.vx) * dt * 0.9;
          p.size += dt * (8 - p.life * 1.2);
          p.rot += p.vr * dt;
          break;
        case 'wisp':
          p.vx += (tmp.x * 0.35 - p.vx) * dt;
          p.size += dt * 6;
          break;
        case 'drip':
        case 'drop': {
          p.vy -= 900 * dt;
          p.vx *= Math.exp(-dt * 0.5);
          const ent = p.ent;
          if (ent && ent.ground && ent.ground.kind === 'tub' && p.vy < 0) {
            const wl = ent.ground.waterAt(p.x, world.sim.t);
            if (wl !== -Infinity && p.y < wl) {
              p.alive = false;
              if (p.kind === 'drip') {
                this.ring(ent, p.x, 0.45);
                this.splash(ent, p.x, wl + 1, 2, 45);
              }
              continue;
            }
          }
          if (p.y < 0) {
            p.alive = false;
            // felt drinks the water: a dark spot that slowly dries
            if (p.kind === 'drip') {
              const w = this.spawn('wet', 'back', p.x, ent && ent.dentAt ? -ent.dentAt(p.x) : 0, 0, 0, 5);
              w.size = 4 + Math.random() * 3;
              w.ent = ent;
            }
            continue;
          }
          break;
        }
        case 'leaf':
          p.vx += (tmp.x * 1.2 - p.vx) * dt * 0.8;
          p.vy += (-12 + Math.sin(p.life * 3) * 30 - p.vy) * dt;
          p.rot += p.vr * dt;
          p.flip += dt * (2 + p.vr);
          break;
        default:
      }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
    }
    this.lintAlive = lintAlive;
    for (const r of this.ripples) {
      if (!r.alive) continue;
      r.t += dt;
      if (r.t > 2.2) r.alive = false;
    }
    // a heavy landing shakes the picture a little
    this.shake *= Math.exp(-dt * 8);
    if (this.shake < 0.02) this.shake = 0;
    cam.ox = Math.sin(world.time * 55) * this.shake;
    cam.oy = Math.cos(world.time * 47) * this.shake * 0.6;
  }

  draw(R, layer) {
    const { ctx, world } = R;
    const ga = ctx.globalAlpha;
    const cam = R.cam;
    const l = cam.left - 60, rgt = cam.right + 60, bot = cam.bottom - 60, top = cam.top + 60;
    this.drawRipples(R, layer === 'back' ? 'back' : 'front');
    const dusk = world.dusk || 0;
    for (const p of this.p) {
      if (!p.alive || p.layer !== layer) continue;
      if (p.x < l || p.x > rgt || p.y < bot || p.y > top) continue;
      const k = p.life / p.max;
      switch (p.kind) {
        case 'lint': {
          const img = lintSprite(p.v);
          const a = k < 0.75 ? 1 : 1 - (k - 0.75) / 0.25;
          const s = p.size;
          ctx.globalAlpha = ga * a;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.drawImage(img, -s, -s, s * 2, s * 2);
          ctx.restore();
          break;
        }
        case 'smoke':
        case 'wisp': {
          const fadeIn = Math.min(1, p.life * 4);
          const a = (p.kind === 'smoke' ? 0.8 : 0.85) * (1 - k) * (1 - k * 0.3) * fadeIn;
          const img = puffSprite(p.v, false);
          const s = p.size * 1.25;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          // (sprites are y-down; the world is y-up: keep the shaded side below)
          if (p.kind === 'wisp') ctx.scale(1.6, -0.7); else ctx.scale(1, -1);
          ctx.globalAlpha = ga * a * (1 - dusk);
          if (dusk < 0.99) ctx.drawImage(img, -s, -s, s * 2, s * 2);
          if (dusk > 0.01) {
            ctx.globalAlpha = ga * a * dusk;
            ctx.drawImage(puffSprite(p.v, true), -s, -s, s * 2, s * 2);
          }
          ctx.restore();
          break;
        }
        case 'drip':
        case 'drop': {
          const img = dropSprite();
          const grow = p.kind === 'drip' && p.hang > 0 ? clamp(1 - p.hang / 0.3, 0.4, 1) : 1;
          const s = p.size * grow;
          // stretched along its fall
          const sp = Math.hypot(p.vx, p.vy);
          const st = 1 + clamp(sp / 900, 0, 0.6);
          ctx.globalAlpha = ga * 0.95;
          ctx.save();
          ctx.translate(p.x, p.y);
          if (sp > 5) ctx.rotate(Math.atan2(p.vy, p.vx) + Math.PI / 2);
          ctx.scale(s / st, -s * st);
          ctx.drawImage(img, -1, -1, 2, 2);
          ctx.restore();
          break;
        }
        case 'wet': {
          const a = 0.32 * (1 - k * k);
          const y = p.ent && p.ent.dentAt ? -p.ent.dentAt(p.x) : p.y;
          const sr = p.size * (1 + k * 0.4);
          ctx.globalAlpha = ga;
          ctx.fillStyle = withAlpha(PAL.dent, a);
          ctx.beginPath();
          ctx.ellipse(p.x, y + sr * 0.35 + 1.5, sr, sr * 0.35, 0, 0, TAU);
          ctx.fill();
          break;
        }
        case 'leaf': {
          const img = leafSprite(p.v);
          const s = p.size;
          ctx.globalAlpha = ga * (k > 0.85 ? (1 - k) / 0.15 : 1);
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          // tumbling: the leaf turns edge-on and back
          ctx.scale(1, 0.25 + 0.75 * Math.abs(Math.cos(p.flip)));
          ctx.drawImage(img, -s, -s, s * 2, s * 2);
          ctx.restore();
          break;
        }
        default:
      }
    }
    ctx.globalAlpha = ga;
  }

  // Rings on the tub water, riding its surface. The far half of each ring is
  // drawn behind the boat ('back'), the near half in front of it ('front').
  drawRipples(R, half = 'front') {
    const { ctx, px } = R;
    let any = false;
    for (const r of this.ripples) if (r.alive) { any = true; break; }
    if (!any) return;
    // (the far half only where the far half of the water is drawn)
    if (half === 'back' && !LAND.TUB_WATER) return;
    const w = waterShape();
    const aspect = w.ry / w.rx;
    const level = w.level !== undefined ? w.level : TUB.level;
    const back = half === 'back';
    const a0 = back ? 0 : Math.PI, a1 = back ? Math.PI : TAU;
    const ga = ctx.globalAlpha;
    let clipEnt = null;
    for (const r of this.ripples) {
      if (!r.alive || !r.ent || !r.ent.ground) continue;
      const cx = r.ent.ground.cx;
      if (cx === undefined) continue;
      if (clipEnt !== r.ent) {
        if (clipEnt) ctx.restore();
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(cx, level, w.rx - 3, w.ry - 1.5, 0, 0, TAU);
        ctx.clip();
        clipEnt = r.ent;
      }
      const k = r.t / 2.2;
      // two rings: the first wave and a smaller one following it
      for (let j = 0; j < 2; j++) {
        const tt = r.t - j * 0.28;
        if (tt <= 0) continue;
        const rad = 6 + tt * 62 * Math.sqrt(r.s);
        const fade = (1 - k) * (j ? 0.6 : 1) * clamp(r.s, 0.4, 1.4);
        ctx.strokeStyle = withAlpha(PAL.waterLine, clamp((back ? 0.55 : 0.85) * fade, 0, 1));
        ctx.lineWidth = (back ? 1.3 : 2) * px;
        ctx.beginPath();
        ctx.ellipse(r.x, level, rad, rad * aspect, 0, a0, a1);
        ctx.stroke();
        if (!back) {
          // the trough behind the crest, a touch darker
          ctx.strokeStyle = withAlpha(mix(PAL.water, '#3f7f96', 0.5), clamp(0.3 * fade, 0, 1));
          ctx.lineWidth = 1.2 * px;
          ctx.beginPath();
          ctx.ellipse(r.x, level, rad * 0.9, rad * 0.9 * aspect, 0, a0, a1);
          ctx.stroke();
        }
      }
    }
    if (clipEnt) ctx.restore();
    ctx.globalAlpha = ga;
  }
}
