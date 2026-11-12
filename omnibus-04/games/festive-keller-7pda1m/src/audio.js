// All sound is synthesised with WebAudio: nothing is spoken, nothing is
// "magic". Boots on wet asphalt, a thin film unsticking from the ground, a
// taut sheet humming under tension, wind that grows with height, birds, the
// far-off town.
import { clamp, lerp } from './util.js';

export class Sound {
  constructor() {
    this.ctx = null;
    this.ready = false;
    this.listener = { x: 0, y: 0, z: 0, rx: 1, rz: 0 };
    this.peelAcc = 0;
    this.birdT = 3;
    this.dripT = 2;
    this.carT = 6;
    this.muted = false;
  }

  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC({ latencyHint: 'interactive' });
      this.build();
    }
    if (this.ctx.state !== 'running') this.ctx.resume().catch(() => {});
  }

  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend().catch(() => {}); }
  resume() { if (this.ctx && this.ctx.state !== 'running') this.ctx.resume().catch(() => {}); }

  build() {
    const ctx = this.ctx;
    const sr = ctx.sampleRate;
    // noise buffers
    const mk = (secs, fill) => {
      const b = ctx.createBuffer(1, Math.floor(sr * secs), sr);
      fill(b.getChannelData(0));
      return b;
    };
    this.white = mk(2, (d) => { for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; });
    this.pink = mk(4, (d) => {
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < d.length; i++) {
        const w = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + w * 0.0555179; b1 = 0.99332 * b1 + w * 0.0750759;
        b2 = 0.969 * b2 + w * 0.153852; b3 = 0.8665 * b3 + w * 0.3104856;
        b4 = 0.55 * b4 + w * 0.5329522; b5 = -0.7616 * b5 - w * 0.016898;
        d[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11;
        b6 = w * 0.115926;
      }
    });
    this.brown = mk(4, (d) => {
      let last = 0;
      for (let i = 0; i < d.length; i++) {
        last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
        d[i] = last * 3.5;
      }
    });

    this.master = ctx.createGain();
    this.master.gain.value = 0;
    this.master.gain.setTargetAtTime(0.9, ctx.currentTime, 1.2);
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.knee.value = 12;
    comp.ratio.value = 3;
    comp.attack.value = 0.004;
    comp.release.value = 0.25;
    this.master.connect(comp).connect(ctx.destination);

    // a short outdoor reverb (buildings nearby, open sky)
    this.reverb = ctx.createConvolver();
    const len = Math.floor(sr * 1.6);
    const ir = ctx.createBuffer(2, len, sr);
    for (let c = 0; c < 2; c++) {
      const d = ir.getChannelData(c);
      for (let i = 0; i < len; i++) {
        const t = i / sr;
        const early = t > 0.03 && t < 0.09 ? 0.5 : 0;
        d[i] = (Math.random() * 2 - 1) * (Math.exp(-t * 4.2) * 0.5 + early * Math.exp(-t * 30));
      }
    }
    this.reverb.buffer = ir;
    this.revGain = ctx.createGain();
    this.revGain.gain.value = 0.18;
    this.reverb.connect(this.revGain).connect(this.master);

    this.sfx = ctx.createGain();
    this.sfx.gain.value = 1;
    this.sfx.connect(this.master);
    this.sfx.connect(this.reverb);

    // --- ambience beds ---
    const loop = (buf) => {
      const s = ctx.createBufferSource();
      s.buffer = buf;
      s.loop = true;
      s.loopStart = Math.random();
      s.start(0, Math.random() * buf.duration);
      return s;
    };
    // wind: band-passed pink noise, gusting
    this.windSrc = loop(this.pink);
    this.windBP = ctx.createBiquadFilter();
    this.windBP.type = 'bandpass';
    this.windBP.frequency.value = 500;
    this.windBP.Q.value = 0.6;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0.0;
    this.windPan = ctx.createStereoPanner();
    this.windSrc.connect(this.windBP).connect(this.windGain).connect(this.windPan).connect(this.master);
    // air hiss when falling / high
    this.hissSrc = loop(this.white);
    this.hissHP = ctx.createBiquadFilter();
    this.hissHP.type = 'highpass';
    this.hissHP.frequency.value = 3500;
    this.hissGain = ctx.createGain();
    this.hissGain.gain.value = 0;
    this.hissSrc.connect(this.hissHP).connect(this.hissGain).connect(this.master);
    // far town: low rumble
    this.cityGain = ctx.createGain();
    this.cityGain.gain.value = 0.05;
    const city = loop(this.brown);
    const cityLP = ctx.createBiquadFilter();
    cityLP.type = 'lowpass';
    cityLP.frequency.value = 280;
    city.connect(cityLP).connect(this.cityGain).connect(this.master);

    // rainbow tension: a quiet, slightly beating glassy resonance
    this.tensionGain = ctx.createGain();
    this.tensionGain.gain.value = 0;
    const tLP = ctx.createBiquadFilter();
    tLP.type = 'lowpass';
    tLP.frequency.value = 3800;
    this.tensionGain.connect(tLP).connect(this.master);
    tLP.connect(this.reverb);
    this.tensionOsc = [];
    const partials = [[1, 0.5], [1.004, 0.4], [2.76, 0.16], [5.4, 0.06]];
    for (const [ratio, amp] of partials) {
      const o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.value = 300 * ratio;
      const g = ctx.createGain();
      g.gain.value = amp;
      o.connect(g).connect(this.tensionGain);
      o.start();
      this.tensionOsc.push({ o, ratio });
    }
    this.tensionLevel = 0;
    this.ready = true;
  }

  // --- helpers ----------------------------------------------------------------
  setListener(camPos, camRight) {
    this.listener.x = camPos.x; this.listener.y = camPos.y; this.listener.z = camPos.z;
    this.listener.rx = camRight.x; this.listener.rz = camRight.z;
  }

  spatial(p, ref = 6) {
    const L = this.listener;
    if (!p) return { pan: 0, gain: 1 };
    const dx = p.x - L.x, dy = p.y - L.y, dz = p.z - L.z;
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
    const pan = clamp((dx * L.rx + dz * L.rz) / d, -1, 1) * 0.8;
    const gain = ref / (ref + Math.max(0, d - 2));
    return { pan, gain };
  }

  out(pan, gain) {
    const ctx = this.ctx;
    const g = ctx.createGain();
    g.gain.value = gain;
    const p = ctx.createStereoPanner();
    p.pan.value = pan;
    g.connect(p).connect(this.sfx);
    return g;
  }

  noise(buf, t, dur, dest, rate = 1) {
    const s = this.ctx.createBufferSource();
    s.buffer = buf;
    s.playbackRate.value = rate;
    s.connect(dest);
    if (dur + 0.15 >= buf.duration) {
      s.loop = true;
      s.start(t, Math.random() * buf.duration);
      s.stop(t + dur + 0.05);
    } else {
      s.start(t, Math.random() * (buf.duration - dur - 0.1), dur + 0.05);
    }
    return s;
  }

  env(g, t, a, peak, decay) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + decay);
  }

  tone(type, f0, f1, t, a, peak, decay, dest) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(f1, 1), t + a + decay * 0.8);
    const g = ctx.createGain();
    this.env(g, t, a, peak, decay);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + a + decay + 0.05);
    return o;
  }

  filtered(buf, type, freq, q, t, a, peak, decay, dest, f1) {
    const ctx = this.ctx;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    if (f1) f.frequency.exponentialRampToValueAtTime(f1, t + a + decay);
    f.Q.value = q;
    const g = ctx.createGain();
    this.env(g, t, a, peak, decay);
    this.noise(buf, t, a + decay + 0.02, f);
    f.connect(g).connect(dest);
  }

  // --- events -------------------------------------------------------------------
  footstep(p, surface, speed, side, height) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime + 0.005;
    const { pan, gain } = this.spatial(p, 5);
    const v = clamp(0.45 + speed * 0.25, 0.4, 1.1) * gain;
    const out = this.out(pan + side * 0.05, v);
    const r = 0.9 + Math.random() * 0.2;
    if (surface === 'ribbon') {
      // a soft tap on a taut film: low bump + membrane modes + a faint glass ping
      const f0 = (170 + Math.min(height, 40) * 3) * r;
      this.tone('sine', 110 * r, 70, t, 0.004, 0.25, 0.08, out);
      for (const [k, a, d] of [[1, 0.12, 0.35], [1.594, 0.07, 0.25], [2.136, 0.05, 0.2], [2.296, 0.035, 0.16]]) {
        this.tone('sine', f0 * k, f0 * k * 0.985, t, 0.003, a, d, out);
      }
      this.tone('sine', 2600 * r + Math.random() * 600, 2600 * r, t + 0.01, 0.002, 0.018, 0.22, out);
      this.filtered(this.white, 'bandpass', 5000, 1.5, t, 0.002, 0.03, 0.06, out);
    } else if (surface === 'roof') {
      this.tone('sine', 95 * r, 55, t, 0.003, 0.35, 0.07, out);
      this.filtered(this.white, 'bandpass', 2400 * r, 1.4, t, 0.001, 0.12, 0.035, out);
    } else {
      // rubber boot on wet asphalt: heel thump, squelch, fine droplets
      this.tone('sine', 85 * r, 48, t, 0.004, 0.42, 0.085, out);
      this.filtered(this.pink, 'bandpass', 1100 * r, 1.1, t + 0.006, 0.006, 0.34, 0.11, out, 700);
      this.filtered(this.white, 'highpass', 4500, 0.7, t + 0.012, 0.004, 0.07, 0.16, out);
      if (Math.random() < 0.08) {
        const sq = this.ctx.createBiquadFilter();
        sq.type = 'bandpass'; sq.frequency.value = 1300; sq.Q.value = 6;
        sq.connect(out);
        this.tone('triangle', 1500 * r, 1150 * r, t + 0.03, 0.01, 0.05, 0.07, sq);
      }
    }
  }

  land(p, impact) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const { pan, gain } = this.spatial(p, 6);
    const out = this.out(pan, gain * clamp(impact / 5, 0.3, 1.2));
    this.tone('sine', 70, 38, t, 0.004, 0.6, 0.16, out);
    this.filtered(this.pink, 'bandpass', 900, 0.8, t, 0.005, 0.4, 0.2, out, 400);
    this.filtered(this.white, 'highpass', 5000, 0.7, t + 0.01, 0.004, 0.08, 0.25, out);
  }

  jump() {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const out = this.out(0, 0.6);
    // cloth swish + a small breath
    this.filtered(this.pink, 'bandpass', 1400, 0.9, t, 0.03, 0.12, 0.18, out, 2400);
  }

  gasp() {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const out = this.out(0, 0.5);
    this.filtered(this.pink, 'bandpass', 1200, 2.5, t, 0.04, 0.07, 0.16, out, 1500);
  }

  bubbleForm() {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const out = this.out(0, 0.9);
    this.tone('sine', 85, 150, t, 0.05, 0.3, 0.45, out);
    this.filtered(this.white, 'bandpass', 2500, 3, t, 0.08, 0.05, 0.5, out, 6000);
  }

  bubbleBounce(p, n) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const { pan, gain } = this.spatial(p, 6);
    const out = this.out(pan, gain * (n === 1 ? 1 : 0.6));
    const o = this.ctx.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(150, t);
    o.frequency.exponentialRampToValueAtTime(95, t + 0.4);
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 9;
    const lg = this.ctx.createGain();
    lg.gain.value = 18;
    lfo.connect(lg).connect(o.frequency);
    const g = this.ctx.createGain();
    this.env(g, t, 0.01, 0.35, 0.5);
    o.connect(g).connect(out);
    o.start(t); lfo.start(t);
    o.stop(t + 0.6); lfo.stop(t + 0.6);
  }

  bubblePop(p, size = 1) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const { pan, gain } = this.spatial(p, 4);
    const out = this.out(pan, gain * clamp(0.3 + size * 0.3, 0.2, 1));
    this.filtered(this.white, 'highpass', 2500, 0.7, t, 0.001, 0.25, 0.02, out);
    this.tone('sine', 1900 / Math.max(0.6, size), 700, t, 0.001, 0.12, 0.04, out);
  }

  ballKick(p) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const { pan, gain } = this.spatial(p, 5);
    const out = this.out(pan, gain);
    this.tone('sine', 260, 170, t, 0.002, 0.35, 0.12, out);
    this.filtered(this.white, 'bandpass', 1800, 1.5, t, 0.001, 0.2, 0.025, out);
  }

  ballBounce(p, v) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const { pan, gain } = this.spatial(p, 5);
    const out = this.out(pan, gain * clamp(v / 3, 0.1, 0.8));
    this.tone('sine', 230, 180, t, 0.002, 0.3, 0.09, out);
  }

  balloonSqueak(p, k) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const { pan, gain } = this.spatial(p, 10);
    const out = this.out(pan, gain * clamp(k / 2, 0.3, 1));
    const bp = this.ctx.createBiquadFilter();
    bp.type = 'bandpass'; bp.frequency.value = 900; bp.Q.value = 4;
    bp.connect(out);
    this.tone('sawtooth', 620, 820, t, 0.02, 0.08, 0.25, bp);
    this.tone('sine', 120, 90, t, 0.01, 0.3, 0.3, out);
  }

  rustle(p) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const { pan, gain } = this.spatial(p, 6);
    const out = this.out(pan, gain * 0.8);
    for (let i = 0; i < 4; i++) this.filtered(this.white, 'bandpass', 2500 + Math.random() * 2500, 0.8, t + i * 0.05 + Math.random() * 0.04, 0.01, 0.12, 0.08, out);
  }

  chirp(p) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const { pan, gain } = this.spatial(p, 5);
    const out = this.out(pan, gain * 0.35);
    const n = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < n; i++) {
      const f = 3600 + Math.random() * 900;
      this.tone('sine', f, f * 1.35, t + i * 0.1, 0.004, 0.12, 0.045, out);
    }
  }

  birdCall(p, k = 1) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const { pan, gain } = this.spatial(p, 25);
    const out = this.out(pan, gain * 0.25 * k);
    const f = 2200 + Math.random() * 600;
    const o = this.tone('sine', f, f * 0.72, t, 0.02, 0.18, 0.28, out);
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 28;
    const lg = this.ctx.createGain();
    lg.gain.value = 90;
    lfo.connect(lg).connect(o.frequency);
    lfo.start(t);
    lfo.stop(t + 0.4);
  }

  flutter(p) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const { pan, gain } = this.spatial(p, 5);
    const out = this.out(pan, gain * 0.5);
    for (let i = 0; i < 8; i++) this.filtered(this.pink, 'bandpass', 1200, 1, t + i * 0.055, 0.005, 0.18 * (1 - i / 9), 0.04, out);
  }

  drip(p) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const { pan, gain } = this.spatial(p, 4);
    const out = this.out(pan, gain * 0.25);
    const f = 1300 + Math.random() * 1200;
    this.tone('sine', f, f * 1.6, t, 0.001, 0.12, 0.07, out);
  }

  carPass() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const dur = 5 + Math.random() * 3;
    const f = ctx.createBiquadFilter();
    f.type = 'bandpass'; f.Q.value = 0.9;
    f.frequency.setValueAtTime(260, t);
    f.frequency.linearRampToValueAtTime(520, t + dur * 0.5);
    f.frequency.linearRampToValueAtTime(240, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.06, t + dur * 0.5);
    g.gain.linearRampToValueAtTime(0.0001, t + dur);
    const p = ctx.createStereoPanner();
    const dir = Math.random() < 0.5 ? -1 : 1;
    p.pan.setValueAtTime(-0.9 * dir, t);
    p.pan.linearRampToValueAtTime(0.9 * dir, t + dur);
    this.noise(this.pink, t, dur, f);
    f.connect(g).connect(p).connect(this.master);
  }

  // Film unsticking: tiny dry crackles, rate follows how much is peeling.
  peelCrackles(activity, p, dt) {
    const rate = Math.min(activity * 0.9, 45);
    this.peelAcc += rate * dt;
    const t0 = this.ctx.currentTime;
    const { pan, gain } = this.spatial(p, 8);
    let n = 0;
    while (this.peelAcc >= 1 && n < 6) {
      this.peelAcc -= 1;
      n++;
      const t = t0 + Math.random() * 0.03;
      const out = this.out(pan + (Math.random() - 0.5) * 0.5, gain * (0.25 + Math.random() * 0.45));
      this.filtered(this.white, 'bandpass', 1800 + Math.random() * 5000, 2.2, t, 0.0008, 0.22, 0.006 + Math.random() * 0.012, out);
      if (Math.random() < 0.12) this.tone('sine', 140 + Math.random() * 60, 90, t, 0.002, 0.05, 0.05, out);
    }
  }

  // --- continuous --------------------------------------------------------------
  update(dt, s) {
    if (!this.ready) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const h = Math.max(0, s.height);
    // wind grows with altitude and while falling
    const gust = 0.5 + 0.5 * Math.sin(t * 0.37) * Math.sin(t * 0.23 + 1);
    const wind = 0.025 + Math.min(h / 45, 1) * 0.16 * (0.6 + 0.4 * gust) + Math.min(s.fallSpeed / 6, 1) * 0.14;
    this.windGain.gain.setTargetAtTime(wind, t, 0.3);
    this.windBP.frequency.setTargetAtTime(380 + gust * 400 + h * 4 + s.fallSpeed * 60, t, 0.4);
    this.windPan.pan.setTargetAtTime(Math.sin(t * 0.1) * 0.4, t, 1);
    this.hissGain.gain.setTargetAtTime(Math.min(s.fallSpeed / 8, 1) * 0.05 + Math.min(h / 80, 1) * 0.012, t, 0.2);
    this.cityGain.gain.setTargetAtTime(0.045 * (1 - Math.min(h / 90, 0.6)), t, 1);

    // taut-film resonance
    const tension = clamp(s.tension * 0.012 + s.load * 0.25, 0, 1);
    this.tensionLevel += (tension - this.tensionLevel) * (1 - Math.exp(-dt * 3));
    this.tensionGain.gain.setTargetAtTime(this.tensionLevel * 0.05, t, 0.15);
    const f0 = 250 + Math.min(s.rainbowHeight, 40) * 4 + Math.sin(t * 0.21) * 6;
    for (const { o, ratio } of this.tensionOsc) o.frequency.setTargetAtTime(f0 * ratio, t, 0.3);

    if (s.peel > 0) this.peelCrackles(s.peel, s.peelPos, dt);

    // occasional life
    this.birdT -= dt;
    if (this.birdT <= 0) {
      this.birdT = 2.5 + Math.random() * 6;
      const a = Math.random() * Math.PI * 2;
      this.chirp({ x: this.listener.x + Math.cos(a) * 12, y: 4, z: this.listener.z + Math.sin(a) * 12 });
    }
    this.dripT -= dt;
    if (this.dripT <= 0 && h < 6) {
      this.dripT = 1 + Math.random() * 3.5;
      const a = Math.random() * Math.PI * 2;
      this.drip({ x: this.listener.x + Math.cos(a) * 6, y: 1, z: this.listener.z + Math.sin(a) * 6 });
    }
    this.carT -= dt;
    if (this.carT <= 0) {
      this.carT = 9 + Math.random() * 16;
      if (h < 40) this.carPass();
    }
  }
}
