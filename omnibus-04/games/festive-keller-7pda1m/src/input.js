import * as THREE from 'three';
import { boxes, boxLocal, PARK_R } from './layout.js';

// One finger. Touch where to go, or keep the finger down and slide it:
// the child walks towards whatever is under the finger. Touching a rainbow
// means "go onto it"; touching the sky means "go that way".
export class Input {
  constructor(canvas, camera, { rainbow, critters, onFirstTouch }) {
    this.canvas = canvas;
    this.camera = camera;
    this.rainbow = rainbow;
    this.critters = critters;
    this.onFirstTouch = onFirstTouch;
    this.pointerId = null;
    this.held = false;
    this.screen = new THREE.Vector2();
    this.ndc = new THREE.Vector2();
    this.ray = new THREE.Raycaster();
    this.lastTarget = null;
    this.touched = false;
    this.downTime = 0;
    this.moved = 0;
    this.lockedChain = null;
    this.events = [];

    const opts = { passive: false };
    canvas.addEventListener('pointerdown', (e) => this.down(e), opts);
    window.addEventListener('pointermove', (e) => this.move(e), opts);
    window.addEventListener('pointerup', (e) => this.up(e), opts);
    window.addEventListener('pointercancel', (e) => this.up(e), opts);
    // stop iOS zoom / scroll / callouts
    for (const ev of ['gesturestart', 'gesturechange', 'gestureend', 'dblclick', 'contextmenu']) {
      document.addEventListener(ev, (e) => e.preventDefault(), opts);
    }
    document.addEventListener('touchmove', (e) => e.preventDefault(), opts);
    document.addEventListener('touchstart', (e) => { if (e.touches.length > 1) e.preventDefault(); }, opts);
  }

  down(e) {
    e.preventDefault();
    if (this.pointerId !== null) return; // one finger only
    this.pointerId = e.pointerId;
    try { this.canvas.setPointerCapture(e.pointerId); } catch (_) { /* ignore */ }
    this.held = true;
    this.moved = 0;
    this.lockedChain = null;
    this.screen.set(e.clientX, e.clientY);
    this.downTime = performance.now();
    if (!this.touched) {
      this.touched = true;
      if (this.onFirstTouch) this.onFirstTouch();
    }
    this.events.push({ type: 'down', x: e.clientX, y: e.clientY });
  }

  move(e) {
    if (e.pointerId !== this.pointerId) return;
    e.preventDefault();
    this.moved += Math.hypot(e.clientX - this.screen.x, e.clientY - this.screen.y);
    this.screen.set(e.clientX, e.clientY);
  }

  up(e) {
    if (e.pointerId !== this.pointerId) return;
    this.pointerId = null;
    this.held = false;
    this.events.push({ type: 'up' });
  }

  // Resolve what is under a screen point.
  pick(sx, sy, player) {
    const rect = this.canvas.getBoundingClientRect();
    this.ndc.set(((sx - rect.left) / rect.width) * 2 - 1, -((sy - rect.top) / rect.height) * 2 + 1);
    this.ray.setFromCamera(this.ndc, this.camera);
    const ray = this.ray.ray;
    let best = null;
    const consider = (t, r) => { if (t > 0 && (!best || t < best.t)) best = Object.assign(r, { t }); };

    // things to poke
    const c = this.critters.pick(ray);
    if (c) consider(c.t, { kind: 'critter', critter: c.critter, p: c.point });

    // rainbows
    const rb = this.rainbow.pick(ray);
    if (rb) consider(rb.t - 0.3, { kind: 'ribbon', chain: rb.chain, idx: rb.idx, p: rb.point });

    // flat roofs & building walls
    const o = ray.origin, d = ray.direction;
    for (let i = 0; i < boxes.length; i++) {
      const b = boxes[i];
      if (b.top < 1) continue;
      // roof plane
      if (Math.abs(d.y) > 1e-4) {
        const t = (b.top - o.y) / d.y;
        if (t > 0) {
          const x = o.x + d.x * t, z = o.z + d.z * t;
          const [lx, lz] = boxLocal(b, x, z);
          if (Math.abs(lx) < b.hw && Math.abs(lz) < b.hd) {
            if (b.walkable) consider(t, { kind: 'roof', id: i, p: new THREE.Vector3(x, b.top, z) });
            else consider(t, { kind: 'ground', p: this.nearGround(b, x, z) });
          }
        }
      }
    }
    // ground
    if (d.y < -1e-4) {
      const t = -o.y / d.y;
      const x = o.x + d.x * t, z = o.z + d.z * t;
      const r = Math.hypot(x, z);
      if (r < PARK_R * 3) {
        const k = r > PARK_R ? PARK_R / r : 1;
        consider(t, { kind: 'ground', p: new THREE.Vector3(x * k, 0, z * k) });
      }
    }
    if (!best || best.t > 260) {
      const dir = new THREE.Vector3(d.x, 0, d.z);
      if (dir.lengthSq() < 1e-6) dir.set(Math.sin(player.heading), 0, Math.cos(player.heading));
      dir.normalize();
      return { kind: 'dir', dir, p: player.pos.clone().addScaledVector(dir, 8), sky: true };
    }
    return best;
  }

  nearGround(b, x, z) {
    // a point on the ground just outside the wall that was touched
    const [lx, lz] = boxLocal(b, x, z);
    let nx = lx, nz = lz;
    if (b.hw - Math.abs(lx) < b.hd - Math.abs(lz)) nx = Math.sign(lx) * (b.hw + 0.5); else nz = Math.sign(lz) * (b.hd + 0.5);
    return new THREE.Vector3(b.x + nx * b.c + nz * b.s, 0, b.z - nx * b.s + nz * b.c);
  }

  // Called once per frame. Returns {target, tap} updates for the player.
  update(player) {
    const out = { target: undefined, taps: [] };
    for (const ev of this.events) {
      if (ev.type === 'down') {
        const hit = this.pick(ev.x, ev.y, player);
        out.taps.push(hit);
        if (hit.kind === 'ribbon') this.lockedChain = hit.chain;
        out.target = hit;
      }
    }
    this.events.length = 0;
    if (this.held && out.target === undefined) {
      // finger held (and maybe sliding): keep steering towards what is under it
      const hit = this.pick(this.screen.x, this.screen.y, player);
      if (hit.kind === 'critter') {
        // keep walking towards it but don't re-poke every frame
        out.target = { kind: 'ground', p: new THREE.Vector3(hit.p.x, 0, hit.p.z) };
      } else if (this.lockedChain && hit.kind !== 'ribbon' && this.moved < 30) {
        out.target = undefined; // wobbly finger on a rainbow: keep the rainbow target
      } else {
        out.target = hit;
      }
    }
    player.held = this.held;
    return out;
  }
}
