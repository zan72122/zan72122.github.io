// Procedural sound: water, wind, the unicorn's breath and hooves, and the glassy
// voice of the rainbow. Everything is synthesised with WebAudio (no files).
// Mobile Safari: the context is created/resumed inside the first touch.

const PENTA = [0, 2, 4, 7, 9]; // major pentatonic degrees

export class Audio {
  constructor() {
    this.ambience = { wind: 0.08, gust: 0, birds: 1, sky: 0, muffle: 0 };
    this.ctx = null;
    this.ready = false;
    this.muted = false;
    this.lastPlay = {};
  }

  unlock() {
    try {
      if (navigator.audioSession) navigator.audioSession.type = 'playback';
    } catch (_) {}
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC({ latencyHint: 'interactive' });
      this._build();
    }
    if (this.ctx.state !== 'running') this.ctx.resume();
    // iOS: play a tiny silent buffer in the gesture
    const b = this.ctx.createBuffer(1, 1, 22050);
    const s = this.ctx.createBufferSource();
    s.buffer = b;
    s.connect(this.ctx.destination);
    s.start(0);
    this.ready = true;
    if (!this._vis) {
      this._vis = true;
      document.addEventListener('visibilitychange', () => {
        if (!this.ctx) return;
        if (document.hidden) this.ctx.suspend();
        else this.ctx.resume();
      });
    }
  }

  _build() {
    const c = this.ctx;
    this.master = c.createGain();
    this.master.gain.value = 0.0;
    this.master.gain.setTargetAtTime(0.9, c.currentTime, 0.8);
    const comp = c.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.ratio.value = 3;
    comp.attack.value = 0.005;
    comp.release.value = 0.25;
    this.master.connect(comp);
    comp.connect(c.destination);
    // reverb send
    this.verb = c.createConvolver();
    this.verb.buffer = this._impulse(2.8, 2.2);
    this.verbIn = c.createGain();
    this.verbIn.gain.value = 0.5;
    this.verbIn.connect(this.verb);
    this.verbOut = c.createGain();
    this.verbOut.gain.value = 0.6;
    this.verb.connect(this.verbOut);
    this.verbOut.connect(this.master);
    // noise sources
    this.noise = this._noiseBuffer(2.5, false);
    this.pink = this._noiseBuffer(4, true);
    // wind bed
    this.wind = this._loopNoise(this.pink);
    this.windLP = c.createBiquadFilter();
    this.windLP.type = 'lowpass';
    this.windLP.frequency.value = 500;
    this.windLP.Q.value = 0.4;
    this.windGain = c.createGain();
    this.windGain.gain.value = 0.0;
    this.wind.connect(this.windLP).connect(this.windGain).connect(this.master);
    this.windHi = this._loopNoise(this.noise);
    this.windBP = c.createBiquadFilter();
    this.windBP.type = 'bandpass';
    this.windBP.frequency.value = 1400;
    this.windBP.Q.value = 0.6;
    this.windHiGain = c.createGain();
    this.windHiGain.gain.value = 0.0;
    this.windHi.connect(this.windBP).connect(this.windHiGain).connect(this.master);
    // muffle (inside cloud)
    if (!this.ambience) this.ambience = { wind: 0.08, gust: 0, birds: 1, sky: 0, muffle: 0 };
    this._birdT = 2;
    // sustained layer pad (summit)
    this.pad = null;
  }

  _impulse(sec, decay) {
    const c = this.ctx;
    const n = Math.floor(c.sampleRate * sec);
    const b = c.createBuffer(2, n, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = b.getChannelData(ch);
      for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, decay) * (i < 200 ? i / 200 : 1);
    }
    return b;
  }

  _noiseBuffer(sec, pink) {
    const c = this.ctx;
    const n = Math.floor(c.sampleRate * sec);
    const b = c.createBuffer(1, n, c.sampleRate);
    const d = b.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < n; i++) {
      const w = Math.random() * 2 - 1;
      if (!pink) d[i] = w;
      else {
        b0 = 0.99886 * b0 + w * 0.0555179;
        b1 = 0.99332 * b1 + w * 0.0750759;
        b2 = 0.969 * b2 + w * 0.153852;
        b3 = 0.8665 * b3 + w * 0.3104856;
        b4 = 0.55 * b4 + w * 0.5329522;
        b5 = -0.7616 * b5 - w * 0.016898;
        d[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11;
        b6 = w * 0.115926;
      }
    }
    return b;
  }

  _loopNoise(buf) {
    const s = this.ctx.createBufferSource();
    s.buffer = buf;
    s.loop = true;
    s.start(0, Math.random() * buf.duration);
    return s;
  }

  _pan(p) {
    const c = this.ctx;
    if (c.createStereoPanner) {
      const n = c.createStereoPanner();
      n.pan.value = Math.max(-1, Math.min(1, p || 0));
      return n;
    }
    return c.createGain();
  }

  _limit(key, minGap) {
    const t = this.ctx.currentTime;
    if (this.lastPlay[key] && t - this.lastPlay[key] < minGap) return false;
    this.lastPlay[key] = t;
    return true;
  }

  _ok() {
    return this.ready && this.ctx && this.ctx.state === 'running';
  }

  // ---------------------------------------------------------- ambience
  setAmbience({ wind = 0.08, gust = 0, sky = 0, birds = 1, muffle = 0 } = {}) {
    this.ambience = { wind, gust, sky, birds, muffle };
  }

  update(dt) {
    if (!this._ok()) return;
    const c = this.ctx, t = c.currentTime;
    const a = this.ambience;
    const muffle = a.muffle || 0;
    const w = (a.wind || 0) + (a.gust || 0) * (0.6 + 0.4 * Math.sin(t * 0.7) * Math.sin(t * 0.31));
    if (!Number.isFinite(w)) return;
    this.windGain.gain.setTargetAtTime(w * 0.55, t, 0.4);
    this.windLP.frequency.setTargetAtTime(380 + w * 1400 * (1 - muffle * 0.7), t, 0.4);
    this.windHiGain.gain.setTargetAtTime(Math.max(0, w - 0.15) * 0.12 * (1 - muffle), t, 0.3);
    this.windBP.frequency.setTargetAtTime(900 + w * 1800, t, 0.5);
    this._birdT -= dt;
    if (this._birdT < 0 && a.birds > 0) {
      this._birdT = 2.5 + Math.random() * 6;
      this.bird((Math.random() - 0.5) * 1.6, 0.12 * a.birds);
    }
  }

  // ---------------------------------------------------------- water
  // a drop falling into water: the trapped bubble rings with a rising pitch
  drip(pan = 0, vol = 0.5, pitch = 1) {
    if (!this._ok() || !this._limit('drip' + Math.round(pan * 3), 0.03)) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator();
    o.type = 'sine';
    const f0 = (700 + Math.random() * 500) * pitch;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f0 * (1.9 + Math.random() * 0.6), t + 0.06);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol * 0.35, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.11);
    const p = this._pan(pan);
    o.connect(g).connect(p).connect(this.master);
    p.connect(this.verbIn);
    o.start(t);
    o.stop(t + 0.13);
    // tick of the impact
    this._noiseHit(t, 0.012, 4000, 1.2, vol * 0.25, pan);
  }

  _noiseHit(t, dur, freq, q, vol, pan, type = 'bandpass') {
    const c = this.ctx;
    const s = c.createBufferSource();
    s.buffer = this.noise;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const p = this._pan(pan);
    s.connect(f).connect(g).connect(p).connect(this.master);
    s.start(t, Math.random() * 1.5);
    s.stop(t + dur + 0.02);
    return { s, f, g };
  }

  splash(size = 0.5, pan = 0) {
    if (!this._ok() || !this._limit('splash', 0.05)) return;
    const c = this.ctx, t = c.currentTime;
    const n = this._noiseHit(t, 0.18 + size * 0.35, 1800 + size * 800, 0.7, 0.25 + size * 0.45, pan);
    n.f.frequency.setValueAtTime(2600, t);
    n.f.frequency.exponentialRampToValueAtTime(900, t + 0.3);
    this._noiseHit(t, 0.08, 300, 1, 0.3 * size, pan, 'lowpass');
    // the droplets coming back down
    const k = Math.round(3 + size * 9);
    for (let i = 0; i < k; i++) {
      const dt = 0.18 + Math.random() * (0.35 + size * 0.4);
      setTimeout(() => this.drip(pan + (Math.random() - 0.5) * 0.5, 0.15 + Math.random() * 0.25, 1.1 + Math.random() * 0.6), dt * 1000);
    }
  }

  ripple(pan = 0, vol = 0.4) {
    if (!this._ok() || !this._limit('ripple', 0.07)) return;
    this.drip(pan, vol, 0.8 + Math.random() * 0.4);
  }

  // ---------------------------------------------------------- unicorn
  hoof(surface = 'grass', strength = 0.6, pan = 0) {
    if (!this._ok() || !this._limit('hoof', 0.045)) return;
    const c = this.ctx, t = c.currentTime;
    if (surface === 'rainbow') return;
    const o = c.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(95, t);
    o.frequency.exponentialRampToValueAtTime(48, t + 0.12);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.32 * strength, t + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    const p = this._pan(pan);
    o.connect(g).connect(p).connect(this.master);
    o.start(t);
    o.stop(t + 0.18);
    // wet grass squelch
    this._noiseHit(t, 0.07, 700, 0.8, 0.12 * strength, pan);
  }

  breath(vol = 0.3, pan = 0) {
    if (!this._ok() || !this._limit('breath', 0.8)) return;
    const c = this.ctx, t = c.currentTime;
    for (const [st, dur, f, v] of [[0, 0.55, 520, 0.5], [0.65, 0.9, 380, 1]]) {
      const s = c.createBufferSource();
      s.buffer = this.pink;
      const bp = c.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = f;
      bp.Q.value = 0.9;
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t + st);
      g.gain.linearRampToValueAtTime(vol * v * 0.9, t + st + dur * 0.35);
      g.gain.linearRampToValueAtTime(0.0001, t + st + dur);
      const p = this._pan(pan);
      s.connect(bp).connect(g).connect(p).connect(this.master);
      s.start(t + st, Math.random() * 3);
      s.stop(t + st + dur + 0.05);
    }
  }

  // relaxed fluttering snort
  snort(vol = 0.4, pan = 0) {
    if (!this._ok() || !this._limit('snort', 0.6)) return;
    const c = this.ctx, t = c.currentTime;
    const s = c.createBufferSource();
    s.buffer = this.pink;
    const bp = c.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 450;
    bp.Q.value = 1.2;
    const am = c.createGain();
    const lfo = c.createOscillator();
    lfo.frequency.value = 28;
    const lg = c.createGain();
    lg.gain.value = 0.5;
    lfo.connect(lg).connect(am.gain);
    am.gain.value = 0.5;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
    const p = this._pan(pan);
    s.connect(bp).connect(am).connect(g).connect(p).connect(this.master);
    s.start(t, Math.random() * 3);
    s.stop(t + 0.6);
    lfo.start(t);
    lfo.stop(t + 0.6);
  }

  // soft low nicker
  nicker(vol = 0.25, pan = 0) {
    if (!this._ok() || !this._limit('nicker', 1.2)) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(115, t);
    o.frequency.linearRampToValueAtTime(95, t + 0.8);
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 520;
    lp.Q.value = 2;
    const am = c.createGain();
    am.gain.value = 0.5;
    const lfo = c.createOscillator();
    lfo.frequency.setValueAtTime(11, t);
    lfo.frequency.linearRampToValueAtTime(7, t + 0.8);
    const lg = c.createGain();
    lg.gain.value = 0.5;
    lfo.connect(lg).connect(am.gain);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.08);
    g.gain.linearRampToValueAtTime(vol * 0.7, t + 0.5);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    const p = this._pan(pan);
    o.connect(lp).connect(am).connect(g).connect(p).connect(this.master);
    o.start(t);
    o.stop(t + 0.95);
    lfo.start(t);
    lfo.stop(t + 0.95);
    // breathy layer
    this._noiseHit(t, 0.7, 600, 0.8, vol * 0.25, pan);
  }

  rustle(intensity = 0.5, pan = 0) {
    if (!this._ok() || !this._limit('rustle', 0.09)) return;
    const c = this.ctx, t = c.currentTime;
    this._noiseHit(t, 0.12 + intensity * 0.15, 3000 + Math.random() * 1500, 0.6, 0.06 + intensity * 0.1, pan, 'highpass');
  }

  // ---------------------------------------------------------- rainbow
  // glass-like chime: inharmonic partials of a struck glass, pentatonic pitches
  glass(degree = 0, strength = 0.6, pan = 0, dull = 0) {
    if (!this._ok() || !this._limit('glass', 0.035)) return;
    const c = this.ctx, t = c.currentTime;
    const oct = Math.floor(degree / 5);
    const semi = PENTA[((degree % 5) + 5) % 5] + 12 * oct;
    const f = 659.25 * Math.pow(2, semi / 12);
    const partials = [[1, 1.0, 1.8], [2.756, 0.32, 0.9], [5.404, 0.14, 0.45], [8.933, 0.06, 0.25]];
    const out = c.createGain();
    out.gain.value = 0.11 * strength * (1 - dull * 0.5);
    const p = this._pan(pan);
    out.connect(p);
    p.connect(this.master);
    p.connect(this.verbIn);
    for (const [ratio, amp, dec] of partials) {
      if (dull > 0.5 && ratio > 3) continue;
      const o = c.createOscillator();
      o.type = 'sine';
      o.frequency.value = f * ratio * (1 + (Math.random() - 0.5) * 0.002);
      const g = c.createGain();
      const d = dec * (1 - dull * 0.6) * (0.7 + strength * 0.5);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(amp, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g).connect(out);
      o.start(t);
      o.stop(t + d + 0.05);
    }
  }

  // tiny high glint when a droplet joins the rainbow
  tick(t01 = 0.5, vol = 0.3) {
    if (!this._ok() || !this._limit('tick', 0.025)) return;
    const c = this.ctx, t = c.currentTime;
    const o = c.createOscillator();
    o.type = 'sine';
    o.frequency.value = 2200 + t01 * 2400 + Math.random() * 200;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.05 * vol, t + 0.003);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
    o.connect(g).connect(this.verbIn);
    g.connect(this.master);
    o.start(t);
    o.stop(t + 0.3);
  }

  whoosh(vol = 0.5) {
    if (!this._ok()) return;
    const c = this.ctx, t = c.currentTime;
    const s = c.createBufferSource();
    s.buffer = this.pink;
    const bp = c.createBiquadFilter();
    bp.type = 'bandpass';
    bp.Q.value = 0.8;
    bp.frequency.setValueAtTime(300, t);
    bp.frequency.exponentialRampToValueAtTime(1600, t + 0.8);
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.35);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
    s.connect(bp).connect(g).connect(this.master);
    s.start(t, Math.random());
    s.stop(t + 1.7);
  }

  bird(pan = 0, vol = 0.12) {
    if (!this._ok()) return;
    const c = this.ctx;
    let t = c.currentTime;
    const n = 2 + Math.floor(Math.random() * 3);
    const base = 2800 + Math.random() * 1400;
    for (let i = 0; i < n; i++) {
      const o = c.createOscillator();
      o.type = 'sine';
      const f0 = base * (0.9 + Math.random() * 0.25);
      o.frequency.setValueAtTime(f0, t);
      o.frequency.exponentialRampToValueAtTime(f0 * (1.25 + Math.random() * 0.3), t + 0.05);
      o.frequency.exponentialRampToValueAtTime(f0 * 0.85, t + 0.1);
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol * 0.4, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.11);
      const p = this._pan(pan);
      o.connect(g).connect(p).connect(this.master);
      p.connect(this.verbIn);
      o.start(t);
      o.stop(t + 0.13);
      t += 0.12 + Math.random() * 0.08;
    }
  }

  // summit: each light layer sings softly while the hand is in it
  layerPad(index, level) {
    if (!this._ok()) return;
    const c = this.ctx, t = c.currentTime;
    if (!this.pad) {
      this.pad = [];
      const notes = [0, 4, 7, 11, 14]; // red..blue (low..high)
      for (const n of notes) {
        const o = c.createOscillator();
        o.type = 'sine';
        o.frequency.value = 392 * Math.pow(2, n / 12);
        const o2 = c.createOscillator();
        o2.type = 'sine';
        o2.frequency.value = o.frequency.value * 2.003;
        const g = c.createGain();
        g.gain.value = 0;
        const g2 = c.createGain();
        g2.gain.value = 0.25;
        o.connect(g);
        o2.connect(g2).connect(g);
        g.connect(this.master);
        g.connect(this.verbIn);
        o.start(t);
        o2.start(t);
        this.pad.push(g);
      }
    }
    this.pad.forEach((g, i) => g.gain.setTargetAtTime(i === index ? 0.05 * level : 0, t, 0.12));
  }
  padOff() {
    if (!this.pad || !this._ok()) return;
    const t = this.ctx.currentTime;
    for (const g of this.pad) g.gain.setTargetAtTime(0, t, 0.3);
  }

  horn(vol = 0.5) {
    if (!this._ok()) return;
    this.glass(10, vol, 0);
    setTimeout(() => this.glass(12, vol * 0.6, 0.1), 120);
    setTimeout(() => this.glass(14, vol * 0.4, -0.1), 260);
  }
}
