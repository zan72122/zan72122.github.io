// All sound is synthesised with WebAudio: brush friction, motor hum, water, wheels,
// bumps, squeaks, the ball, the membrane, and a second "mirror" room acoustic that
// fades in as the other corridor becomes real.

function makeIR(ctx, seconds, decay, dark, seed = 1) {
  const rate = ctx.sampleRate;
  const len = Math.floor(rate * seconds);
  const buf = ctx.createBuffer(2, len, rate);
  let s = seed;
  const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647 * 2 - 1; };
  for (let ch = 0; ch < 2; ch++) {
    const d = buf.getChannelData(ch);
    let lp = 0;
    for (let i = 0; i < len; i++) {
      const t = i / rate;
      const env = Math.pow(1 - i / len, decay) * (t < 0.004 ? t / 0.004 : 1);
      lp = lp + (rnd() - lp) * (1 - dark);
      d[i] = lp * env;
    }
    // a few early reflections off the corridor walls
    for (const [dt, g] of [[0.011, 0.5], [0.019, 0.35], [0.031, 0.28], [0.047, 0.2]]) {
      const k = Math.floor((dt + ch * 0.002) * rate);
      if (k < len) d[k] += g * (ch ? -1 : 1);
    }
  }
  return buf;
}

function noiseBuffer(ctx, seconds = 2) {
  const len = Math.floor(ctx.sampleRate * seconds);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = buf.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0;
  for (let i = 0; i < len; i++) {
    const w = Math.random() * 2 - 1;
    b0 = 0.99765 * b0 + w * 0.099; b1 = 0.963 * b1 + w * 0.2965; b2 = 0.57 * b2 + w * 1.0526;
    d[i] = (b0 + b1 + b2 + w * 0.1848) * 0.2;
  }
  return buf;
}

export class Audio {
  constructor() {
    this.ctx = null;
    this.ready = false;
    this.muted = false;
    this.mirror = 0;
    this.lastSqueak = 0;
  }

  unlock() {
    if (this.ctx) {
      if (this.ctx.state !== 'running') { try { this.ctx.resume(); } catch (_) { /* ignore */ } }
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    let ctx;
    try { ctx = new AC(); } catch (_) { return; }
    this.ctx = ctx;
    try {
      // iOS: a silent buffer started inside the gesture unlocks output
      const b = ctx.createBuffer(1, 1, 22050);
      const src = ctx.createBufferSource(); src.buffer = b; src.connect(ctx.destination); src.start(0);
      if (ctx.state !== 'running') ctx.resume();
    } catch (_) { /* ignore */ }
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16; comp.ratio.value = 4; comp.attack.value = 0.005; comp.release.value = 0.2;
    comp.connect(ctx.destination);
    this.master = ctx.createGain(); this.master.gain.value = 0.85; this.master.connect(comp);
    this.dry = ctx.createGain(); this.dry.gain.value = 1; this.dry.connect(this.master);

    this.verb = ctx.createConvolver(); this.verb.buffer = makeIR(ctx, 2.0, 3.2, 0.55, 3);
    this.verbSend = ctx.createGain(); this.verbSend.gain.value = 0.32;
    this.verbSend.connect(this.verb); this.verb.connect(this.master);

    // second room: longer, darker, slightly later — the corridor below the floor
    this.mverb = ctx.createConvolver(); this.mverb.buffer = makeIR(ctx, 3.2, 2.4, 0.8, 11);
    this.mdelay = ctx.createDelay(0.5); this.mdelay.delayTime.value = 0.085;
    this.mSend = ctx.createGain(); this.mSend.gain.value = 0;
    this.mSend.connect(this.mdelay); this.mdelay.connect(this.mverb); this.mverb.connect(this.master);

    this.bus = ctx.createGain(); this.bus.gain.value = 1;
    this.bus.connect(this.dry); this.bus.connect(this.verbSend); this.bus.connect(this.mSend);

    this.noise = noiseBuffer(ctx, 3);

    // motor hum
    this.hum = ctx.createGain(); this.hum.gain.value = 0;
    const humLP = ctx.createBiquadFilter(); humLP.type = 'lowpass'; humLP.frequency.value = 380; humLP.Q.value = 0.7;
    this.humO1 = ctx.createOscillator(); this.humO1.type = 'sawtooth'; this.humO1.frequency.value = 62;
    this.humO2 = ctx.createOscillator(); this.humO2.type = 'triangle'; this.humO2.frequency.value = 124.5;
    const g2 = ctx.createGain(); g2.gain.value = 0.5;
    this.humO1.connect(humLP); this.humO2.connect(g2); g2.connect(humLP); humLP.connect(this.hum); this.hum.connect(this.bus);
    this.humO1.start(); this.humO2.start();

    // brush friction
    this.brush = this.loopNoise('bandpass', 1400, 0.9);
    this.brushHi = this.loopNoise('highpass', 3800, 0.5);
    // water / suds
    this.water = this.loopNoise('lowpass', 600, 1.0);
    this.waterLfo = ctx.createOscillator(); this.waterLfo.frequency.value = 7;
    const lfoG = ctx.createGain(); lfoG.gain.value = 250;
    this.waterLfo.connect(lfoG); lfoG.connect(this.water.filter.frequency); this.waterLfo.start();
    // cart wheels
    this.wheels = this.loopNoise('bandpass', 260, 2.5);
    // room tone + fluorescent hum
    this.room = this.loopNoise('lowpass', 300, 0.5);
    this.room.gain.gain.value = 0.02;
    this.fluor = ctx.createGain(); this.fluor.gain.value = 0.006;
    for (const f of [120, 240, 360]) {
      const o = ctx.createOscillator(); o.frequency.value = f; o.type = 'sine';
      const g = ctx.createGain(); g.gain.value = f === 120 ? 1 : 0.35;
      o.connect(g); g.connect(this.fluor); o.start();
    }
    this.fluor.connect(this.bus);
    // the chord the lights settle into at the end
    this.chord = ctx.createGain(); this.chord.gain.value = 0;
    for (const f of [120, 180, 240, 300, 360, 480]) {
      const o = ctx.createOscillator(); o.frequency.value = f; o.type = 'sine';
      const g = ctx.createGain(); g.gain.value = 1 / (1 + f / 200);
      o.connect(g); g.connect(this.chord); o.start();
    }
    this.chord.connect(this.bus);
    this.ready = true;
  }

  loopNoise(type, freq, q) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource(); src.buffer = this.noise; src.loop = true;
    src.playbackRate.value = 0.9 + Math.random() * 0.2;
    const filter = ctx.createBiquadFilter(); filter.type = type; filter.frequency.value = freq; filter.Q.value = q;
    const gain = ctx.createGain(); gain.gain.value = 0;
    src.connect(filter); filter.connect(gain); gain.connect(this.bus);
    src.start(ctx.currentTime + Math.random() * 0.5);
    return { src, filter, gain };
  }

  setParam(p, v, tc = 0.05) {
    if (!this.ready) return;
    p.setTargetAtTime(v, this.ctx.currentTime, tc);
  }

  // continuous state each frame
  update(s) {
    if (!this.ready) return;
    const sp = Math.min(1, s.toolSpeed / 2.2);
    const on = s.motorOn ? 1 : 0;
    this.setParam(this.hum.gain, on * (0.035 + 0.045 * sp), 0.08);
    this.setParam(this.humO1.frequency, 58 + 22 * sp, 0.1);
    this.setParam(this.humO2.frequency, 117 + 44 * sp + 1.5, 0.1);
    const grit = s.contact * sp;
    this.setParam(this.brush.gain.gain, grit * (0.05 + 0.13 * s.dirt), 0.04);
    this.setParam(this.brush.filter.frequency, 900 + 1800 * (1 - s.dirt) + 500 * sp, 0.05);
    this.setParam(this.brushHi.gain.gain, grit * 0.03 * s.dirt, 0.04);
    this.setParam(this.water.gain.gain, s.contact * (0.02 + 0.06 * s.wet) * (0.3 + sp), 0.08);
    this.setParam(this.wheels.gain.gain, Math.min(1, s.cartSpeed / 1.5) * 0.12, 0.05);
    this.setParam(this.wheels.filter.frequency, 200 + 260 * Math.min(1, s.cartSpeed), 0.05);
    this.setParam(this.mSend.gain, 0.05 + 0.5 * s.mirror, 0.4);
    this.setParam(this.verbSend.gain, 0.32 * (1 - 0.3 * s.mirror), 0.4);
    this.setParam(this.fluor.gain, 0.006 * s.lights, 0.2);
    this.setParam(this.room.gain.gain, 0.02 * (0.3 + 0.7 * s.lights), 0.2);
    this.setParam(this.chord.gain, s.chord * 0.022, 0.8);
  }

  // ---------- one-shots ----------
  env(g, t0, a, peak, d) {
    peak = Math.max(0.0002, peak || 0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(peak, t0 + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + a + d);
  }
  tone(freq, dur, { type = 'sine', gain = 0.2, glide = 1, attack = 0.005, when = 0, pan = 0 } = {}) {
    if (!this.ready) return;
    const ctx = this.ctx, t0 = ctx.currentTime + when;
    const o = ctx.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    o.frequency.exponentialRampToValueAtTime(Math.max(20, freq * glide), t0 + dur);
    const g = ctx.createGain();
    this.env(g, t0, attack, gain, dur);
    let node = g;
    if (ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = pan; g.connect(p); node = p; }
    o.connect(g); node.connect(this.bus);
    o.start(t0); o.stop(t0 + attack + dur + 0.05);
  }
  burst(dur, { type = 'bandpass', freq = 1000, q = 1, gain = 0.2, attack = 0.003, when = 0, sweep = 1 } = {}) {
    if (!this.ready) return;
    const ctx = this.ctx, t0 = ctx.currentTime + when;
    const src = ctx.createBufferSource(); src.buffer = this.noise;
    const f = ctx.createBiquadFilter(); f.type = type; f.Q.value = q;
    f.frequency.setValueAtTime(freq, t0);
    f.frequency.exponentialRampToValueAtTime(Math.max(30, freq * sweep), t0 + attack + dur);
    const g = ctx.createGain();
    this.env(g, t0, attack, gain, dur);
    src.connect(f); f.connect(g); g.connect(this.bus);
    src.start(t0, Math.random() * 2); src.stop(t0 + attack + dur + 0.05);
  }

  squeak(polish) {
    if (!this.ready) return;
    const now = this.ctx.currentTime;
    if (now - this.lastSqueak < 0.18) return;
    this.lastSqueak = now;
    const f = 1500 + Math.random() * 900 + polish * 500;
    this.tone(f, 0.07 + Math.random() * 0.05, { type: 'sine', gain: 0.035 + 0.03 * polish, glide: 1.25 + Math.random() * 0.3 });
    this.tone(f * 2.01, 0.05, { type: 'sine', gain: 0.01, glide: 1.2 });
  }
  bump(strength = 1) {
    this.tone(90, 0.18, { type: 'sine', gain: 0.22 * strength, glide: 0.5 });
    this.burst(0.08, { type: 'lowpass', freq: 900, gain: 0.12 * strength });
    this.tone(640, 0.05, { type: 'triangle', gain: 0.03 * strength, glide: 0.8 });
  }
  thunkThrough() {
    // contact on the other side of the floor: a soft knock plus its late double
    this.tone(150, 0.16, { type: 'sine', gain: 0.18, glide: 0.6 });
    this.tone(150, 0.2, { type: 'sine', gain: 0.1, glide: 0.6, when: 0.085 });
    this.burst(0.05, { type: 'bandpass', freq: 700, q: 2, gain: 0.05 });
  }
  ballBounce(v = 1, far = false) {
    if (far) {
      // heard through the floor: low, soft, and doubled by the other room
      this.tone(170, 0.14, { type: 'sine', gain: 0.1 * v, glide: 0.6 });
      this.tone(170, 0.16, { type: 'sine', gain: 0.05 * v, glide: 0.6, when: 0.09 });
      return;
    }
    this.tone(260, 0.12, { type: 'sine', gain: 0.12 * v, glide: 0.55 });
    this.burst(0.03, { type: 'bandpass', freq: 1800, q: 1.5, gain: 0.03 * v });
  }
  tap() { this.tone(420, 0.09, { type: 'sine', gain: 0.07, glide: 0.7 }); this.tone(420, 0.1, { type: 'sine', gain: 0.04, glide: 0.7, when: 0.09 }); }
  blup(pitch = 1) {
    this.tone(180 * pitch, 0.22, { type: 'sine', gain: 0.2, glide: 3.2, attack: 0.01 });
    this.burst(0.25, { type: 'bandpass', freq: 500, q: 3, gain: 0.08, sweep: 3 });
  }
  splash(big = 1) {
    this.burst(0.45 * big, { type: 'lowpass', freq: 2400, gain: 0.14 * big, sweep: 0.3, attack: 0.01 });
    this.tone(95, 0.5 * big, { type: 'sine', gain: 0.16 * big, glide: 0.5, attack: 0.02 });
    for (let i = 0; i < 4; i++) this.tone(700 + Math.random() * 900, 0.06, { type: 'sine', gain: 0.03, glide: 1.8, when: 0.05 + i * 0.07 + Math.random() * 0.05 });
  }
  wub() { this.tone(70, 0.6, { type: 'sine', gain: 0.12, glide: 1.4, attack: 0.08 }); }
  whoosh(dur = 3) {
    this.burst(dur, { type: 'bandpass', freq: 250, q: 0.8, gain: 0.12, sweep: 8, attack: dur * 0.45 });
    this.tone(40, dur, { type: 'sine', gain: 0.18, glide: 2.2, attack: dur * 0.4 });
  }
  jingle() {
    for (let i = 0; i < 5; i++) this.tone(2600 + Math.random() * 1600, 0.12, { type: 'triangle', gain: 0.025, glide: 0.98, when: i * 0.045 + Math.random() * 0.03 });
  }
  slosh() { this.burst(0.5, { type: 'lowpass', freq: 800, gain: 0.1, sweep: 0.5, attack: 0.08 }); }
  knock() { this.tone(180, 0.1, { type: 'triangle', gain: 0.12, glide: 0.8 }); this.tone(170, 0.1, { type: 'triangle', gain: 0.1, glide: 0.8, when: 0.14 }); }
  rattle() { for (let i = 0; i < 4; i++) this.burst(0.03, { type: 'bandpass', freq: 2200, q: 4, gain: 0.05, when: i * 0.05 }); }
  clank() { this.tone(520, 0.3, { type: 'square', gain: 0.03, glide: 0.97 }); this.burst(0.06, { type: 'bandpass', freq: 3000, q: 5, gain: 0.05 }); }
  tick() { this.burst(0.02, { type: 'highpass', freq: 4000, gain: 0.06 }); }
  click() { this.burst(0.015, { type: 'highpass', freq: 2500, gain: 0.08 }); this.tone(1200, 0.02, { type: 'square', gain: 0.02 }); }
  step(wet) {
    if (wet) this.burst(0.07, { type: 'bandpass', freq: 900, q: 2, gain: 0.05 });
    else this.burst(0.04, { type: 'lowpass', freq: 500, gain: 0.04 });
  }
  whistle() {
    const notes = [880, 990, 1175, 990];
    notes.forEach((f, i) => this.tone(f, 0.16, { type: 'sine', gain: 0.05, glide: 1.02, attack: 0.02, when: i * 0.14 }));
  }
  happy() {
    [659, 784, 988].forEach((f, i) => this.tone(f, 0.18, { type: 'sine', gain: 0.045, glide: 1.01, attack: 0.02, when: i * 0.12 }));
  }
  motorOff() { this.tone(70, 1.2, { type: 'sawtooth', gain: 0.03, glide: 0.4, attack: 0.01 }); }
  switchClick(when) { this.burst(0.02, { type: 'highpass', freq: 3000, gain: 0.07, when }); this.tone(120, 0.12, { type: 'sine', gain: 0.03, when, glide: 0.8 }); }
}
