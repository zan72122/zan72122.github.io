// Keeps the frame rate steady on phones and tablets by trimming the least
// important work first: render scale, then particles, then shadow detail.
// The 3D that the game needs (rainbows, world geometry) is never removed.

const TIERS = [
  { pixels: 0.75e6, shadow: 1024, extent: 18, particles: 0.35 },
  { pixels: 1.15e6, shadow: 1024, extent: 20, particles: 0.55 },
  { pixels: 1.75e6, shadow: 2048, extent: 22, particles: 0.8 },
  { pixels: 2.5e6, shadow: 2048, extent: 24, particles: 1 },
];

export class Quality {
  constructor(renderer) {
    this.renderer = renderer;
    const ua = navigator.userAgent || '';
    const mobile = /iPhone|iPad|iPod|Android/i.test(ua) || (navigator.maxTouchPoints > 1 && /Macintosh/.test(ua));
    const cores = navigator.hardwareConcurrency || 4;
    let tier = mobile ? 2 : 3;
    if (cores <= 4) tier = Math.min(tier, 1);
    const q = new URLSearchParams(location.search).get('q');
    if (q !== null) tier = Math.max(0, Math.min(3, parseInt(q, 10) || 0));
    this.maxTier = tier;
    this.tier = tier;
    this.scale = 1;
    this.acc = 0;
    this.frames = 0;
    this.slowWindows = 0;
    this.fastWindows = 0;
    this.warmup = 2.5;
    this.onChange = null;
  }

  get settings() { return TIERS[this.tier]; }

  pixelRatio(w, h) {
    const dpr = window.devicePixelRatio || 1;
    const budget = TIERS[this.tier].pixels;
    const fit = Math.sqrt(budget / Math.max(1, w * h));
    return Math.max(0.5, Math.min(dpr, 2, fit) * this.scale);
  }

  // Called every frame with the real (unclamped) frame time.
  sample(dt) {
    if (document.hidden) return;
    if (this.warmup > 0) { this.warmup -= dt; return; }
    this.acc += Math.min(dt, 0.25);
    this.frames++;
    if (this.acc < 1.5) return;
    const avg = this.acc / this.frames;
    this.acc = 0;
    this.frames = 0;
    if (avg > 0.0215) { this.slowWindows++; this.fastWindows = 0; }
    else if (avg < 0.0145) { this.fastWindows++; this.slowWindows = 0; }
    else { this.slowWindows = 0; this.fastWindows = 0; }
    let changed = false;
    if (this.slowWindows >= 2) {
      this.slowWindows = 0;
      if (this.scale > 0.76) { this.scale = Math.max(0.75, this.scale * 0.87); changed = true; }
      else if (this.tier > 0) { this.tier--; this.scale = 0.9; changed = true; }
    } else if (this.fastWindows >= 4) {
      this.fastWindows = 0;
      if (this.scale < 1) { this.scale = Math.min(1, this.scale * 1.1); changed = true; }
      else if (this.tier < this.maxTier) { this.tier++; this.scale = 0.9; changed = true; }
    }
    if (changed && this.onChange) this.onChange();
  }
}
