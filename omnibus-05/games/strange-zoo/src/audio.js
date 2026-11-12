// All sound is synthesized with WebAudio: no external audio assets.
import { clamp, rand } from './util.js';

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.underwater = false;
    this.loops = new Set();
  }

  unlock() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    if (!this.ctx) {
      try { this.ctx = new AC(); } catch (e) { return; }
      this._build();
    }
    if (this.ctx.state !== 'running' && !this._hidden) this.ctx.resume().catch(() => {});
    if (!this._primed) {
      // iOS needs a buffer played inside the gesture
      const b = this.ctx.createBuffer(1, 1, 22050);
      const s = this.ctx.createBufferSource();
      s.buffer = b; s.connect(this.ctx.destination); s.start(0);
      this._primed = true;
    }
  }

  ok() { return this.ctx && this.ctx.state === 'running'; }

  _build() {
    const c = this.ctx;
    this.comp = c.createDynamicsCompressor();
    this.comp.threshold.value = -14; this.comp.ratio.value = 4;
    this.filter = c.createBiquadFilter();
    this.filter.type = 'lowpass'; this.filter.frequency.value = 18000; this.filter.Q.value = 0.5;
    this.master = c.createGain(); this.master.gain.value = 0.85;
    this.sfx = c.createGain(); this.sfx.gain.value = 1;
    this.amb = c.createGain(); this.amb.gain.value = 0.5;
    this.music = c.createGain(); this.music.gain.value = 0.22;
    this.sfx.connect(this.filter); this.amb.connect(this.filter); this.music.connect(this.master);
    this.filter.connect(this.master); this.master.connect(this.comp); this.comp.connect(c.destination);
    // noise buffers
    const len = c.sampleRate * 2;
    this.white = c.createBuffer(1, len, c.sampleRate);
    const d = this.white.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.brown = c.createBuffer(1, len, c.sampleRate);
    const b = this.brown.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; b[i] = last * 3.5; }
    this._startAmbience();
  }

  suspend(v) {
    this._hidden = v;
    if (!this.ctx) return;
    if (v) this.ctx.suspend().catch(() => {}); else this.ctx.resume().catch(() => {});
  }

  panner(p) {
    const c = this.ctx;
    if (c.createStereoPanner) { const n = c.createStereoPanner(); n.pan.value = clamp(p || 0, -1, 1); return n; }
    return c.createGain();
  }

  setUnderwater(v) {
    this.underwater = v;
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.filter.frequency.cancelScheduledValues(t);
    this.filter.frequency.setTargetAtTime(v ? 700 : 18000, t, 0.15);
    if (this.uwGain) this.uwGain.gain.setTargetAtTime(v ? 0.5 : 0, t, 0.3);
    if (this.windGain) this.windGain.gain.setTargetAtTime(v ? 0 : 0.05, t, 0.3);
  }

  tone(o) {
    if (!this.ok()) return;
    const c = this.ctx, t = c.currentTime + (o.when || 0);
    const dur = o.dur || 0.2;
    const osc = c.createOscillator();
    osc.type = o.type || 'sine';
    osc.frequency.setValueAtTime(o.f, t);
    if (o.f2) osc.frequency.exponentialRampToValueAtTime(Math.max(1, o.f2), t + (o.glide || dur));
    const g = c.createGain();
    const peak = Math.max(0.0002, o.gain || 0.2);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + (o.attack || 0.005));
    if (o.hold) g.gain.setValueAtTime(peak, t + (o.attack || 0.005) + o.hold);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let node = osc;
    if (o.filter) {
      const f = c.createBiquadFilter();
      f.type = o.filter.type; f.frequency.value = o.filter.freq; f.Q.value = o.filter.q || 1;
      node.connect(f); node = f;
    }
    node.connect(g);
    const p = this.panner(o.pan);
    g.connect(p); p.connect(o.bus || this.sfx);
    if (o.vib) {
      const l = c.createOscillator(); l.frequency.value = o.vib.rate;
      const lg = c.createGain(); lg.gain.value = o.vib.depth;
      l.connect(lg); lg.connect(osc.frequency); l.start(t); l.stop(t + dur + 0.05);
    }
    osc.start(t); osc.stop(t + dur + 0.05);
  }

  noise(o) {
    if (!this.ok()) return;
    const c = this.ctx, t = c.currentTime + (o.when || 0);
    const dur = o.dur || 0.2;
    const src = c.createBufferSource();
    src.buffer = o.brown ? this.brown : this.white;
    const f = c.createBiquadFilter();
    f.type = o.filter ? o.filter.type : 'lowpass';
    f.frequency.setValueAtTime(o.filter ? o.filter.freq : 4000, t);
    if (o.filter && o.filter.f2) f.frequency.exponentialRampToValueAtTime(o.filter.f2, t + dur);
    f.Q.value = o.filter && o.filter.q ? o.filter.q : 0.7;
    const g = c.createGain();
    const peak = Math.max(0.0002, o.gain || 0.2);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + (o.attack || 0.005));
    if (o.hold) g.gain.setValueAtTime(peak, t + (o.attack || 0.005) + o.hold);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const p = this.panner(o.pan);
    src.connect(f); f.connect(g); g.connect(p); p.connect(o.bus || this.sfx);
    src.start(t, Math.random() * 1.5); src.stop(t + dur + 0.05);
  }

  // ---------- continuous loops ----------
  loop(kind) {
    if (!this.ctx) return null;
    const c = this.ctx;
    const out = c.createGain(); out.gain.value = 0;
    const pan = this.panner(0);
    out.connect(pan); pan.connect(this.sfx);
    const nodes = [];
    let pitchNodes = [];
    if (kind === 'pour') {
      const src = c.createBufferSource(); src.buffer = this.white; src.loop = true;
      const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1300; bp.Q.value = 0.6;
      const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2600;
      const lfo = c.createOscillator(); lfo.frequency.value = 7;
      const lg = c.createGain(); lg.gain.value = 300; lfo.connect(lg); lg.connect(bp.frequency); lfo.start();
      src.connect(bp); bp.connect(lp); lp.connect(out); src.start();
      nodes.push(src, lfo);
    } else if (kind === 'bees') {
      const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 520; bp.Q.value = 0.8;
      const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1400;
      const trem = c.createGain(); trem.gain.value = 0.8;
      const lfo = c.createOscillator(); lfo.frequency.value = 23;
      const lg = c.createGain(); lg.gain.value = 0.2; lfo.connect(lg); lg.connect(trem.gain); lfo.start();
      for (const f of [196, 203, 211, 222]) {
        const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f;
        const og = c.createGain(); og.gain.value = 0.18; o.connect(og); og.connect(bp); o.start();
        nodes.push(o); pitchNodes.push({ o, base: f });
      }
      bp.connect(lp); lp.connect(trem); trem.connect(out);
      nodes.push(lfo);
    } else if (kind === 'scrape') {
      const src = c.createBufferSource(); src.buffer = this.brown; src.loop = true;
      const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 380; bp.Q.value = 1.8;
      src.connect(bp); bp.connect(out); src.start(); nodes.push(src);
    } else if (kind === 'rustle') {
      const src = c.createBufferSource(); src.buffer = this.white; src.loop = true;
      const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 2200; bp.Q.value = 0.7;
      src.connect(bp); bp.connect(out); src.start(); nodes.push(src);
    }
    const self = this;
    const L = {
      set(gain, p) {
        if (!self.ctx) return;
        const t = c.currentTime;
        out.gain.setTargetAtTime(Math.max(0, gain), t, 0.06);
        if (p !== undefined && pan.pan) pan.pan.setTargetAtTime(clamp(p, -1, 1), t, 0.08);
      },
      pitch(k) {
        const t = c.currentTime;
        for (const pn of pitchNodes) pn.o.frequency.setTargetAtTime(pn.base * k, t, 0.2);
      },
      stop() {
        const t = c.currentTime;
        out.gain.setTargetAtTime(0, t, 0.08);
        setTimeout(() => { for (const n of nodes) { try { n.stop(); } catch (e) {} } try { out.disconnect(); } catch (e) {} }, 500);
        self.loops.delete(L);
      },
    };
    this.loops.add(L);
    return L;
  }

  _startAmbience() {
    const c = this.ctx;
    // gentle outdoor air
    const w = c.createBufferSource(); w.buffer = this.brown; w.loop = true;
    const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 500;
    this.windGain = c.createGain(); this.windGain.gain.value = 0.05;
    w.connect(lp); lp.connect(this.windGain); this.windGain.connect(this.amb); w.start();
    // underwater hum
    const u = c.createBufferSource(); u.buffer = this.brown; u.loop = true;
    const ulp = c.createBiquadFilter(); ulp.type = 'lowpass'; ulp.frequency.value = 260;
    this.uwGain = c.createGain(); this.uwGain.gain.value = 0;
    u.connect(ulp); ulp.connect(this.uwGain); this.uwGain.connect(this.master); u.start();
    this._farBirdT = 3;
  }

  tick(dt) {
    if (!this.ok()) return;
    this._farBirdT -= dt;
    if (this._farBirdT < 0) {
      this._farBirdT = rand(5, 11);
      if (!this.underwater && this.ambientBirds !== false) this.chirp(rand(-0.9, 0.9), 0.25, (Math.random() * 3) | 0);
    }
  }

  // ---------- named sounds ----------
  cloth(pan = 0, k = 1) {
    this.noise({ dur: 0.3 * k, gain: 0.14, attack: 0.05, filter: { type: 'bandpass', freq: 2600, f2: 1300, q: 0.6 }, pan });
    this.noise({ dur: 0.2 * k, gain: 0.05, attack: 0.03, when: 0.06, filter: { type: 'highpass', freq: 4500 }, pan });
  }
  cinch(pan = 0) {
    this.noise({ dur: 0.12, gain: 0.1, filter: { type: 'bandpass', freq: 3200, f2: 5200, q: 2 }, pan });
    this.tone({ type: 'triangle', f: 700, f2: 1100, dur: 0.08, gain: 0.05, pan, when: 0.08 });
  }
  wood(pan = 0, pitch = 1, g = 0.3) {
    this.tone({ type: 'triangle', f: 560 * pitch, f2: 400 * pitch, dur: 0.09, gain: g, pan });
    this.tone({ type: 'sine', f: 220 * pitch, f2: 170 * pitch, dur: 0.16, gain: g * 0.8, pan });
    this.noise({ dur: 0.035, gain: g * 0.5, filter: { type: 'bandpass', freq: 1900 * pitch, q: 1.4 }, pan });
  }
  mallet(pan = 0) {
    this.wood(pan, 0.8, 0.38);
    this.tone({ type: 'sine', f: 120, f2: 70, dur: 0.2, gain: 0.25, pan });
  }
  thud(pan = 0, g = 0.3) {
    this.tone({ type: 'sine', f: 110, f2: 45, dur: 0.22, gain: g, pan });
    // audible body on small speakers
    this.tone({ type: 'triangle', f: 220, f2: 120, dur: 0.12, gain: g * 0.45, pan });
    this.noise({ dur: 0.1, gain: g * 0.5, filter: { type: 'lowpass', freq: 700 }, pan });
  }
  screw(pan = 0) {
    this.noise({ dur: 0.03, gain: 0.16, filter: { type: 'highpass', freq: 3200 }, pan });
    this.tone({ type: 'square', f: 2100 + rand(-100, 100), dur: 0.025, gain: 0.025, pan });
  }
  metal(pan = 0, k = 1) {
    [1, 1.51, 2.27, 3.1].forEach((m, i) => this.tone({ type: 'sine', f: 900 * k * m, dur: 0.45 - i * 0.08, gain: 0.06 / (i + 1), pan }));
  }
  clink(pan = 0) {
    [1, 1.7, 2.6].forEach((m, i) => this.tone({ type: 'sine', f: 1700 * m, dur: 0.16 - i * 0.03, gain: 0.05 / (i + 1), pan }));
  }
  splash(pan = 0, size = 1) {
    this.noise({ dur: 0.55 * size, gain: 0.3 * Math.min(1, size), attack: 0.005, filter: { type: 'lowpass', freq: 3800, f2: 450 }, pan });
    this.tone({ type: 'sine', f: 190, f2: 55, dur: 0.28, gain: 0.22 * size, pan });
  }
  drip(pan = 0, g = 0.05) {
    const f = rand(800, 1200);
    this.tone({ type: 'sine', f, f2: f * 2, dur: 0.07, gain: g, pan, attack: 0.003 });
  }
  bubble(pan = 0, g = 0.07) {
    const f = rand(260, 620);
    this.tone({ type: 'sine', f, f2: f * 2.6, dur: 0.09, gain: g, pan, attack: 0.012 });
  }
  pop(pan = 0) {
    this.tone({ type: 'sine', f: 760, f2: 180, dur: 0.14, gain: 0.22, pan });
    this.noise({ dur: 0.03, gain: 0.12, filter: { type: 'bandpass', freq: 2500 }, pan });
  }
  tink(pan = 0) { this.tone({ type: 'triangle', f: 1900, f2: 1500, dur: 0.04, gain: 0.08, pan }); }
  creak(pan = 0, k = 1) {
    this.tone({ type: 'sawtooth', f: 95 * k, f2: 140 * k, dur: 0.45, gain: 0.05, pan, filter: { type: 'bandpass', freq: 900, q: 5 }, vib: { rate: 34, depth: 30 } });
  }
  stretch(pan = 0, k = 0) {
    this.tone({ type: 'sawtooth', f: 160 + k * 220, dur: 0.07, gain: 0.03, pan, filter: { type: 'bandpass', freq: 800 + k * 700, q: 6 } });
  }
  whoosh(pan = 0, g = 0.12) { this.noise({ dur: 0.35, gain: g, attack: 0.08, filter: { type: 'bandpass', freq: 700, f2: 2200, q: 0.8 }, pan }); }
  wind(pan = 0) { this.noise({ dur: 2.4, gain: 0.22, attack: 0.7, filter: { type: 'bandpass', freq: 380, f2: 900, q: 0.6 }, pan, brown: true }); }
  puff(pan = 0) {
    this.noise({ dur: 0.4, gain: 0.16, attack: 0.04, filter: { type: 'lowpass', freq: 1100, f2: 400 }, pan });
    this.tone({ type: 'sine', f: 160, f2: 110, dur: 0.12, gain: 0.05, pan });
  }
  step(pan = 0, wet = 0) {
    this.noise({ dur: 0.06, gain: 0.05, filter: { type: 'lowpass', freq: 800 }, pan });
    if (wet > 0.1) this.noise({ dur: 0.09, gain: 0.05 * wet, filter: { type: 'bandpass', freq: 1500, q: 2 }, pan, when: 0.01 });
  }
  roll(pan = 0) { this.noise({ dur: 0.2, gain: 0.04, filter: { type: 'lowpass', freq: 500 }, pan, brown: true }); }
  elephant(mood = 'sad', pan = 0) {
    if (mood === 'sad') {
      this.tone({ type: 'sawtooth', f: 62, f2: 52, dur: 0.9, gain: 0.22, pan, attack: 0.15, filter: { type: 'lowpass', freq: 260 }, vib: { rate: 9, depth: 4 } });
      // a soft, low "mmm" that phone speakers can still reproduce
      this.tone({ type: 'sawtooth', f: 186, f2: 150, dur: 0.85, gain: 0.07, pan, attack: 0.18, filter: { type: 'bandpass', freq: 520, q: 2.5 }, vib: { rate: 6, depth: 5 } });
    } else if (mood === 'breath') {
      this.noise({ dur: 1.0, gain: 0.14, attack: 0.3, filter: { type: 'lowpass', freq: 520, f2: 240 }, pan, brown: true });
    } else if (mood === 'happy') {
      this.tone({ type: 'sawtooth', f: 58, f2: 92, dur: 1.2, gain: 0.26, pan, attack: 0.2, filter: { type: 'lowpass', freq: 330 }, vib: { rate: 7, depth: 5 } });
      this.tone({ type: 'sawtooth', f: 170, f2: 260, dur: 1.1, gain: 0.08, pan, attack: 0.2, filter: { type: 'bandpass', freq: 560, q: 2.2 }, vib: { rate: 7, depth: 8 } });
      this.tone({ type: 'sawtooth', f: 250, f2: 360, dur: 0.7, gain: 0.05, pan, attack: 0.1, when: 0.5, filter: { type: 'bandpass', freq: 650, q: 3 }, vib: { rate: 6, depth: 10 } });
    } else {
      this.tone({ type: 'sawtooth', f: 70, f2: 80, dur: 0.5, gain: 0.15, pan, attack: 0.1, filter: { type: 'lowpass', freq: 280 } });
    }
  }
  chirp(pan = 0, g = 0.6, v = 0) {
    const base = [3200, 2600, 3800][v % 3];
    const n = 2 + ((Math.random() * 3) | 0);
    for (let i = 0; i < n; i++) {
      const f = base * rand(0.9, 1.15);
      this.tone({ type: 'sine', f, f2: f * rand(1.2, 1.5), glide: 0.05, dur: 0.07, gain: 0.05 * g, pan, when: i * 0.09 + rand(0, 0.02) });
    }
  }
  squeak(pan = 0) {
    this.tone({ type: 'sine', f: 1300, f2: 2100, dur: 0.12, gain: 0.07, pan });
    this.tone({ type: 'sine', f: 1900, f2: 1500, dur: 0.12, gain: 0.06, pan, when: 0.13 });
  }
  shellKnock(pan = 0) {
    this.tone({ type: 'triangle', f: 1500, f2: 1150, dur: 0.05, gain: 0.12, pan });
    this.noise({ dur: 0.025, gain: 0.08, filter: { type: 'bandpass', freq: 3200, q: 2 }, pan });
  }
  chime(pan = 0, g = 0.035) {
    this.tone({ type: 'sine', f: 2637, dur: 0.5, gain: g, pan });
    this.tone({ type: 'sine', f: 3951, dur: 0.35, gain: g * 0.6, pan, when: 0.04 });
  }
  shutter() {
    this.noise({ dur: 0.05, gain: 0.2, filter: { type: 'highpass', freq: 1800 } });
    this.tone({ type: 'square', f: 260, dur: 0.04, gain: 0.05, when: 0.07, filter: { type: 'lowpass', freq: 1200 } });
    this.noise({ dur: 0.05, gain: 0.14, filter: { type: 'highpass', freq: 2200 }, when: 0.09 });
  }
  beep() { this.tone({ type: 'sine', f: 1320, dur: 0.09, gain: 0.06 }); }
  latch(pan = 0) { this.metal(pan, 0.7); this.wood(pan, 1.2, 0.18); }

  notes(seq, opts = {}) {
    // seq: [[semitoneFromA4, startBeat, lenBeats], ...]
    const bpm = opts.bpm || 160, spb = 60 / bpm;
    for (const [n, b, l] of seq) {
      const f = 440 * Math.pow(2, n / 12);
      const when = (opts.when || 0) + b * spb, dur = Math.max(0.12, (l || 1) * spb * (opts.legato || 1.4));
      const bus = opts.bus === 'music' ? this.music : this.sfx;
      if (opts.kind === 'wood') {
        this.tone({ type: 'triangle', f, dur: 0.12, gain: 0.12, when, bus });
      } else if (opts.kind === 'flute') {
        this.tone({ type: 'sine', f, dur, gain: 0.07, attack: 0.04, when, bus, vib: { rate: 5.5, depth: f * 0.012 } });
      } else if (opts.kind === 'bubble') {
        this.tone({ type: 'sine', f, f2: f * 1.5, glide: 0.06, dur: 0.16, gain: 0.08, when, bus });
      } else {
        this.tone({ type: 'sine', f, dur, gain: opts.gain || 0.07, when, bus });
        this.tone({ type: 'sine', f: f * 3, dur: dur * 0.5, gain: (opts.gain || 0.07) * 0.18, when, bus });
      }
    }
  }
  jingle(kind) {
    if (kind === 'vet') this.notes([[3, 0], [7, 0.5], [10, 1], [15, 1.5, 2]], { bpm: 220 });
    else if (kind === 'carp') this.notes([[-2, 0], [3, 0.5], [3, 1], [10, 1.5]], { bpm: 200, kind: 'wood' });
    else if (kind === 'diver') this.notes([[-5, 0], [0, 0.4], [4, 0.8], [7, 1.2], [12, 1.6]], { bpm: 240, kind: 'bubble' });
    else if (kind === 'bee') this.notes([[7, 0, 0.5], [10, 0.5, 0.5], [12, 1, 0.5], [14, 1.5, 2]], { bpm: 200, kind: 'flute' });
    else if (kind === 'final') this.notes([[3, 0], [7, 0.5], [10, 1], [14, 1.5], [15, 2, 2]], { bpm: 200, gain: 0.08 });
    else if (kind === 'piece') this.notes([[10, 0], [15, 0.5, 1.5]], { bpm: 240, gain: 0.06 });
  }
  musicBox() {
    // gentle closing melody (pentatonic)
    const m = [[3, 0], [7, 1], [10, 2], [12, 3], [10, 4], [7, 5], [5, 6, 2], [3, 8], [5, 9], [7, 10], [10, 11], [7, 12, 3],
      [3, 16], [7, 17], [10, 18], [15, 19], [14, 20], [12, 21], [10, 22, 2], [7, 24], [5, 25], [3, 26, 4]];
    this.notes(m, { bpm: 150, bus: 'music', gain: 0.3, legato: 2.2 });
    this.notes([[-9, 0, 4], [-14, 8, 4], [-9, 16, 4], [-16, 24, 4]], { bpm: 150, bus: 'music', gain: 0.18, legato: 2.5 });
  }
}

export const audio = new AudioEngine();
