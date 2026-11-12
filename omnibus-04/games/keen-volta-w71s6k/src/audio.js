// Procedural spatial material sound (no samples, no speech). Everything is
// synthesised with WebAudio so the game has zero asset downloads.
import { clamp } from './util.js';

class Loop {
  constructor(snd, out) { this.snd = snd; this.out = out; this.level = 0; }
  set(level, pan = 0) {
    if (!this.out) return;
    const t = this.snd.ctx.currentTime;
    this.out.gain.setTargetAtTime(clamp(level, 0, 1.5) * this.max, t, 0.06);
    if (this.pan) this.pan.pan.setTargetAtTime(clamp(pan, -1, 1), t, 0.08);
    this.level = level;
  }
}

export class Sound {
  constructor() { this.ctx = null; this.muted = false; this.loops = {}; this._gust = 0; this._t = 0; }

  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      try { this.ctx = new AC(); } catch (e) { return; }
      this._build();
    }
    if (this.ctx.state !== 'running') this.ctx.resume().catch(() => {});
  }

  _build() {
    const c = this.ctx;
    this.comp = c.createDynamicsCompressor();
    this.comp.threshold.value = -14; this.comp.ratio.value = 4;
    this.master = c.createGain(); this.master.gain.value = 0.85;
    this.master.connect(this.comp); this.comp.connect(c.destination);
    // Noise source buffer shared by every voice.
    const len = c.sampleRate * 2;
    this.noiseBuf = c.createBuffer(1, len, c.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    // Big soft space: generated impulse response gives the giant scale.
    this.verb = c.createConvolver();
    const irLen = Math.floor(c.sampleRate * 2.8);
    const ir = c.createBuffer(2, irLen, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const b = ir.getChannelData(ch);
      for (let i = 0; i < irLen; i++) b[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / irLen, 3.2);
    }
    this.verb.buffer = ir;
    this.verbIn = c.createGain(); this.verbIn.gain.value = 0.32;
    this.verbIn.connect(this.verb); this.verb.connect(this.master);
    this._makeLoops();
  }

  _pan(p) {
    const c = this.ctx;
    if (c.createStereoPanner) { const s = c.createStereoPanner(); s.pan.value = clamp(p, -1, 1); return s; }
    return c.createGain();
  }
  _noise(loop = false) { const s = this.ctx.createBufferSource(); s.buffer = this.noiseBuf; s.loop = loop; return s; }
  _voice(pan, send) {
    const c = this.ctx; const g = c.createGain(); const p = this._pan(pan);
    g.connect(p); p.connect(this.master);
    if (send > 0) { const s = c.createGain(); s.gain.value = send; g.connect(s); s.connect(this.verbIn); }
    return g;
  }
  get ok() { return this.ctx && this.ctx.state === 'running' && !this.muted; }

  // Heavy impact. mass ~0.2 (small) .. 1 (giant domino) .. 3 (colossal).
  impact(mass = 1, pan = 0, material = 'domino') {
    if (!this.ok) return;
    const c = this.ctx, t = c.currentTime, m = clamp(mass, 0.05, 4);
    const out = this._voice(pan, 0.25 + 0.2 * Math.min(m, 2));
    // Body thump
    const o = c.createOscillator(); o.type = 'sine';
    const f0 = material === 'metal' ? 140 : 105 / Math.sqrt(m + 0.3);
    o.frequency.setValueAtTime(f0 * 1.8, t);
    o.frequency.exponentialRampToValueAtTime(Math.max(24, f0 * 0.55), t + 0.35 + 0.2 * m);
    const og = c.createGain();
    og.gain.setValueAtTime(0.0001, t); og.gain.exponentialRampToValueAtTime(0.9 * Math.min(1.2, 0.35 + m * 0.5), t + 0.008);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.45 + 0.5 * m);
    o.connect(og); og.connect(out); o.start(t); o.stop(t + 1.6 + m);
    // Material knock
    const n = this._noise(); const bp = c.createBiquadFilter(); bp.type = 'bandpass';
    bp.frequency.value = material === 'stone' ? 420 : material === 'wood' ? 650 : material === 'metal' ? 1900 : 880;
    bp.Q.value = material === 'domino' ? 6 : 1.6;
    const ng = c.createGain();
    ng.gain.setValueAtTime(0.0001, t); ng.gain.exponentialRampToValueAtTime(0.55 * Math.min(1, 0.4 + m * 0.4), t + 0.004);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + (material === 'metal' ? 0.6 : 0.16 + 0.08 * m));
    n.connect(bp); bp.connect(ng); ng.connect(out); n.start(t, Math.random()); n.stop(t + 1);
    // Grit / debris tail for large masses
    if (m > 0.6) {
      const n2 = this._noise(); const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
      const g2 = c.createGain(); g2.gain.setValueAtTime(0.0001, t + 0.03);
      g2.gain.exponentialRampToValueAtTime(0.12 * m, t + 0.09); g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.7 + 0.4 * m);
      n2.connect(lp); lp.connect(g2); g2.connect(out); n2.start(t, Math.random()); n2.stop(t + 2);
    }
  }

  // Short tonal/metal clicks: hook clink, latch, ratchet tooth, hinge.
  clink(pan = 0, pitch = 1, level = 0.35) {
    if (!this.ok) return;
    const c = this.ctx, t = c.currentTime, out = this._voice(pan, 0.2);
    [1, 1.47, 2.29].forEach((r, i) => {
      const o = c.createOscillator(); o.type = 'sine'; o.frequency.value = 1500 * pitch * r;
      const g = c.createGain(); g.gain.setValueAtTime(level / (i + 1), t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35 / (i + 1));
      o.connect(g); g.connect(out); o.start(t); o.stop(t + 0.4);
    });
  }
  tick(pan = 0, freq = 2400, level = 0.3, dur = 0.03) {
    if (!this.ok) return;
    const c = this.ctx, t = c.currentTime, out = this._voice(pan, 0.08);
    const n = this._noise(); const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = freq; bp.Q.value = 3;
    const g = c.createGain(); g.gain.setValueAtTime(level, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    n.connect(bp); bp.connect(g); g.connect(out); n.start(t, Math.random()); n.stop(t + dur + 0.05);
  }
  latch(pan = 0) { this.tick(pan, 1600, 0.5, 0.05); setTimeout(() => this.clink(pan, 0.7, 0.18), 40); }
  step(pan = 0, surface = 'stone') {
    if (!this.ok) return;
    if (surface === 'grass') { this.tick(pan, 1700 + Math.random() * 600, 0.06, 0.05); return; }
    const f = surface === 'domino' ? 1250 : surface === 'wood' ? 700 : surface === 'metal' ? 2100 : 900;
    this.tick(pan, f * (0.85 + Math.random() * 0.3), surface === 'domino' ? 0.16 : 0.11, 0.06);
    if (surface === 'domino' || surface === 'wood') { // hollow little knock
      const c = this.ctx, t = c.currentTime, out = this._voice(pan, 0.1), o = c.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(surface === 'wood' ? 220 : 420, t); const g = c.createGain();
      g.gain.setValueAtTime(0.06, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09); o.connect(g); g.connect(out); o.start(t); o.stop(t + 0.1);
    }
  }
  squeak(pan = 0, level = 0.12) {
    if (!this.ok) return;
    const c = this.ctx, t = c.currentTime, out = this._voice(pan, 0.15);
    const o = c.createOscillator(); o.type = 'triangle';
    o.frequency.setValueAtTime(900 + Math.random() * 300, t); o.frequency.linearRampToValueAtTime(1300 + Math.random() * 300, t + 0.12);
    const g = c.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(level, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    o.connect(g); g.connect(out); o.start(t); o.stop(t + 0.2);
  }
  // Pebbles / chips skittering (called for real debris objects).
  pebbles(pan = 0, count = 4) { for (let i = 0; i < count; i++) setTimeout(() => this.tick(pan, 2600 + Math.random() * 1800, 0.08 + Math.random() * 0.08, 0.025), i * (60 + Math.random() * 90)); }

  _makeLoops() {
    const c = this.ctx;
    const mk = (name, max, build) => { const p = this._pan(0); const g = c.createGain(); g.gain.value = 0; g.connect(p); p.connect(this.master);
      const s = c.createGain(); s.gain.value = 0.25; g.connect(s); s.connect(this.verbIn);
      build(g); const L = new Loop(this, g); L.pan = c.createStereoPanner ? p : null; L.max = max; this.loops[name] = L; };
    // Wood/stone creak: buzzy tone through resonant filter, stick-slip amplitude.
    mk('creak', 0.22, (g) => {
      const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 92;
      const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 520; bp.Q.value = 9;
      const am = c.createGain(); am.gain.value = 0.5; const lfo = c.createOscillator(); lfo.type = 'square'; lfo.frequency.value = 23;
      const lg = c.createGain(); lg.gain.value = 0.5; lfo.connect(lg); lg.connect(am.gain);
      const jit = c.createOscillator(); jit.frequency.value = 0.7; const jg = c.createGain(); jg.gain.value = 18; jit.connect(jg); jg.connect(o.frequency);
      o.connect(bp); bp.connect(am); am.connect(g); o.start(); lfo.start(); jit.start();
    });
    // Sliding friction / grinding.
    mk('slide', 0.35, (g) => { const n = this._noise(true); const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 520; bp.Q.value = 0.9; n.connect(bp); bp.connect(g); n.start(); });
    // Rolling wheels.
    mk('roll', 0.3, (g) => { const n = this._noise(true); const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 260; n.connect(lp); lp.connect(g); n.start(); });
    // Colossal rumble.
    mk('rumble', 0.9, (g) => { const n = this._noise(true); const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 85;
      const o = c.createOscillator(); o.frequency.value = 36; const og = c.createGain(); og.gain.value = 0.35; o.connect(og); og.connect(g);
      n.connect(lp); lp.connect(g); n.start(); o.start(); });
    // Rope / cable hum.
    mk('rope', 0.12, (g) => { const o = c.createOscillator(); o.type = 'triangle'; o.frequency.value = 210; const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 420; bp.Q.value = 4; o.connect(bp); bp.connect(g); o.start(); this._ropeOsc = o; });
    // Wind ambience (always on, gusting).
    mk('wind', 0.16, (g) => { const n = this._noise(true); const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 520; bp.Q.value = 0.6; n.connect(bp); bp.connect(g); n.start(); this._windBp = bp; });
    this.loops.wind.set(0.6, -0.1);
  }
  loop(name) { return this.loops[name] || { set() {} }; }
  update(dt) {
    if (!this.ctx || !this._windBp) return;
    this._t += dt; this._gust += dt;
    const w = 0.55 + 0.3 * Math.sin(this._t * 0.23) + 0.15 * Math.sin(this._t * 0.71 + 1.3);
    this.loops.wind.set(w, Math.sin(this._t * 0.1) * 0.4);
    this._windBp.frequency.setTargetAtTime(420 + 260 * w, this.ctx.currentTime, 0.4);
  }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : 0.85; }
}

export const sound = new Sound();
