// Procedural sound: ambience of a quiet residential street + physical sound effects.
// Nothing is loaded; everything is synthesized with Web Audio.
export class Audio {
  constructor() {
    this.ctx = null; this.ready = false;
    this.fallGain = null;
  }
  unlock() {
    if (this.ctx) { if (this.ctx.state !== 'running') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = this.ctx = new AC();
    this.master = ctx.createGain(); this.master.gain.value = 0.8;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 3;
    this.master.connect(comp); comp.connect(ctx.destination);
    // noise buffer
    const len = ctx.sampleRate * 2;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      b0 = 0.99765 * b0 + w * 0.099; b1 = 0.963 * b1 + w * 0.2965; b2 = 0.57 * b2 + w * 1.0527;
      d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.18; // pinkish
    }
    this.noise = buf;
    this.ambience();
    this.ready = true;
    const osc = ctx.createOscillator(); const g = ctx.createGain(); g.gain.value = 0; osc.connect(g); g.connect(this.master); osc.start(); osc.stop(ctx.currentTime + 0.05);
  }
  now() { return this.ctx.currentTime; }
  noiseSrc(loop = false) { const s = this.ctx.createBufferSource(); s.buffer = this.noise; s.loop = loop; s.loopStart = Math.random(); return s; }
  env(g, t, a, peak, dec) {
    g.gain.cancelScheduledValues(t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + dec);
  }

  ambience() {
    const ctx = this.ctx;
    // soft wind
    const w = this.noiseSrc(true); const bp = ctx.createBiquadFilter(); bp.type = 'lowpass'; bp.frequency.value = 500;
    const wg = ctx.createGain(); wg.gain.value = 0.05;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07; const lg = ctx.createGain(); lg.gain.value = 0.03;
    lfo.connect(lg); lg.connect(wg.gain); lfo.start();
    w.connect(bp); bp.connect(wg); wg.connect(this.master); w.start();
    // distant traffic hum
    const t = this.noiseSrc(true); const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 160;
    const tg = ctx.createGain(); tg.gain.value = 0.05; t.connect(lp); lp.connect(tg); tg.connect(this.master); t.start();
    // falling wind (driven by courier speed)
    const f = this.noiseSrc(true); const fb = ctx.createBiquadFilter(); fb.type = 'bandpass'; fb.frequency.value = 700; fb.Q.value = 0.6;
    this.fallGain = ctx.createGain(); this.fallGain.gain.value = 0; this.fallFilter = fb;
    f.connect(fb); fb.connect(this.fallGain); this.fallGain.connect(this.master); f.start();
    this.birdT = 1; this.crowT = 20;
  }

  tick(dt, speed = 0, night = false) {
    if (!this.ready) return;
    const t = this.now();
    this.fallGain.gain.setTargetAtTime(Math.min(0.35, Math.max(0, speed - 2) * 0.035), t, 0.08);
    this.fallFilter.frequency.setTargetAtTime(500 + speed * 90, t, 0.1);
    this.birdT -= dt;
    if (this.birdT <= 0) { this.birdT = 1.5 + Math.random() * 5; if (!night) this.bird(); else this.cricket(); }
    this.crowT -= dt;
    if (this.crowT <= 0 && !night) { this.crowT = 25 + Math.random() * 30; this.crow(); }
  }

  bird() {
    const ctx = this.ctx, t = this.now();
    const n = 2 + Math.floor(Math.random() * 4);
    const base = 2600 + Math.random() * 1400;
    const pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    const out = ctx.createGain(); out.gain.value = 0.05;
    if (pan) { pan.pan.value = Math.random() * 1.6 - 0.8; out.connect(pan); pan.connect(this.master); } else out.connect(this.master);
    for (let i = 0; i < n; i++) {
      const o = ctx.createOscillator(); const g = ctx.createGain();
      const st = t + i * (0.09 + Math.random() * 0.05);
      o.frequency.setValueAtTime(base, st);
      o.frequency.exponentialRampToValueAtTime(base * (1.3 + Math.random() * 0.4), st + 0.04);
      o.frequency.exponentialRampToValueAtTime(base * 0.9, st + 0.07);
      this.env(g, st, 0.005, 0.6, 0.07);
      o.connect(g); g.connect(out); o.start(st); o.stop(st + 0.1);
    }
  }
  cricket() {
    const ctx = this.ctx, t = this.now();
    const out = ctx.createGain(); out.gain.value = 0.02; out.connect(this.master);
    for (let i = 0; i < 6; i++) {
      const o = ctx.createOscillator(); const g = ctx.createGain(); o.frequency.value = 4200;
      const st = t + i * 0.06; this.env(g, st, 0.003, 0.8, 0.03);
      o.connect(g); g.connect(out); o.start(st); o.stop(st + 0.05);
    }
  }
  crow() {
    const ctx = this.ctx, t = this.now();
    for (let i = 0; i < 2; i++) {
      const st = t + i * 0.45;
      const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(520, st); o.frequency.exponentialRampToValueAtTime(380, st + 0.3);
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1100; f.Q.value = 3;
      const g = ctx.createGain(); this.env(g, st, 0.02, 0.03, 0.3);
      o.connect(f); f.connect(g); g.connect(this.master); o.start(st); o.stop(st + 0.4);
    }
  }

  thud(k = 0.5) {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.now();
    const o = ctx.createOscillator(); o.frequency.setValueAtTime(90 + 40 * k, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.15);
    const g = ctx.createGain(); this.env(g, t, 0.004, 0.4 * k + 0.1, 0.2);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + 0.3);
    const n = this.noiseSrc(); const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 900;
    const ng = ctx.createGain(); this.env(ng, t, 0.002, 0.5 * k + 0.1, 0.12);
    n.connect(f); f.connect(ng); ng.connect(this.master); n.start(t); n.stop(t + 0.2);
  }
  boing(v = 3) {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.now();
    // soft futon: a muffled whump plus a little spring
    const n = this.noiseSrc(); const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 400;
    const ng = ctx.createGain(); this.env(ng, t, 0.01, 0.5, 0.18);
    n.connect(f); f.connect(ng); ng.connect(this.master); n.start(t); n.stop(t + 0.3);
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(140 + v * 12, t); o.frequency.exponentialRampToValueAtTime(260 + v * 25, t + 0.18);
    const g = ctx.createGain(); this.env(g, t, 0.01, 0.12, 0.2);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + 0.3);
  }
  grab(kind) {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.now();
    const metal = kind === 'pole' || kind === 'bar' || kind === 'swing';
    const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = metal ? 1200 + Math.random() * 300 : 300;
    const g = ctx.createGain(); this.env(g, t, 0.002, metal ? 0.08 : 0.05, metal ? 0.25 : 0.06);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + 0.3);
    const n = this.noiseSrc(); const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 2000;
    const ng = ctx.createGain(); this.env(ng, t, 0.002, 0.12, 0.06);
    n.connect(f); f.connect(ng); ng.connect(this.master); n.start(t); n.stop(t + 0.1);
  }
  whoosh(k = 0.4) {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.now();
    const n = this.noiseSrc(); const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 1.2;
    f.frequency.setValueAtTime(400, t); f.frequency.exponentialRampToValueAtTime(1800, t + 0.25); f.frequency.exponentialRampToValueAtTime(600, t + 0.5);
    const g = ctx.createGain(); this.env(g, t, 0.08, 0.35 * k, 0.45);
    n.connect(f); f.connect(g); g.connect(this.master); n.start(t); n.stop(t + 0.7);
  }
  step() {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.now();
    const n = this.noiseSrc(); const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1400 + Math.random() * 600; f.Q.value = 2;
    const g = ctx.createGain(); this.env(g, t, 0.002, 0.08, 0.05);
    n.connect(f); f.connect(g); g.connect(this.master); n.start(t); n.stop(t + 0.08);
  }
  slide() {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.now();
    const n = this.noiseSrc(); const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 4;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.08); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
    const am = ctx.createOscillator(); am.frequency.value = 38; const amg = ctx.createGain(); amg.gain.value = 0.06; am.connect(amg); amg.connect(g.gain); am.start(t); am.stop(t + 0.6);
    n.connect(f); f.connect(g); g.connect(this.master); n.start(t); n.stop(t + 0.7);
  }
  tone(freq, t, dur, vol = 0.2, type = 'sine') {
    const ctx = this.ctx;
    const o = ctx.createOscillator(); o.type = type; o.frequency.value = freq;
    const o2 = ctx.createOscillator(); o2.type = 'sine'; o2.frequency.value = freq * 2.01;
    const g = ctx.createGain(); this.env(g, t, 0.005, vol, dur);
    const g2 = ctx.createGain(); g2.gain.value = 0.15;
    o.connect(g); o2.connect(g2); g2.connect(g); g.connect(this.master);
    o.start(t); o2.start(t); o.stop(t + dur + 0.1); o2.stop(t + dur + 0.1);
  }
  chime() {
    // "ピンポーン" — the intercom at every Japanese front door
    if (!this.ready) return;
    const t = this.now();
    this.tone(784, t, 0.9, 0.16); this.tone(659, t + 0.42, 1.5, 0.16);
  }
  yay(child) {
    if (!this.ready) return;
    const t = this.now() + 0.5;
    // a little marimba "ta-da"
    const notes = child ? [784, 988, 1175, 1568] : [523, 659, 784, 1047];
    notes.forEach((f, i) => this.tone(f, t + i * 0.09, 0.45, 0.08, 'triangle'));
    // a wordless happy voice: "wa-a" formant
    const ctx = this.ctx;
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    const p0 = child ? 380 : 230;
    o.frequency.setValueAtTime(p0, t); o.frequency.linearRampToValueAtTime(p0 * 1.35, t + 0.18); o.frequency.linearRampToValueAtTime(p0 * 1.1, t + 0.5);
    const f1 = ctx.createBiquadFilter(); f1.type = 'bandpass'; f1.frequency.value = child ? 950 : 780; f1.Q.value = 6;
    const f2 = ctx.createBiquadFilter(); f2.type = 'bandpass'; f2.frequency.value = child ? 1500 : 1200; f2.Q.value = 8;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t + 0.06); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
    o.connect(f1); o.connect(f2); f1.connect(g); f2.connect(g); g.connect(this.master);
    o.start(t); o.stop(t + 0.6);
  }
  rustle() {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.now();
    for (let i = 0; i < 3; i++) {
      const n = this.noiseSrc(); const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 2500;
      const g = ctx.createGain(); this.env(g, t + i * 0.07, 0.01, 0.07, 0.06);
      n.connect(f); f.connect(g); g.connect(this.master); n.start(t + i * 0.07); n.stop(t + i * 0.07 + 0.1);
    }
  }
  pop() {
    if (!this.ready) return;
    const t = this.now();
    [523, 659, 784, 1047, 1319].forEach((f, i) => this.tone(f, t + i * 0.07, 0.6, 0.09, 'triangle'));
  }
  splash() {
    if (!this.ready) return;
    const ctx = this.ctx, t = this.now();
    const n = this.noiseSrc(); const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1200; f.Q.value = 0.7;
    const g = ctx.createGain(); this.env(g, t, 0.01, 0.3, 0.5);
    n.connect(f); f.connect(g); g.connect(this.master); n.start(t); n.stop(t + 0.7);
  }
}
