// WebAudio による効果音の合成（音声ファイルは使わない）
// iOS Safari の自動再生制限に合わせ、最初のタッチで unlock() する。

export class Sound {
  constructor() {
    this.ctx = null;
    this.ok = false;
    this.muted = false;
  }

  unlock() {
    try {
      if (!this.ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        this.ctx = new AC({ latencyHint: 'interactive' });
        this._build();
      }
      if (this.ctx.state !== 'running') this.ctx.resume();
      if (!this._silentPlayed) {
        const b = this.ctx.createBuffer(1, 1, 22050);
        const s = this.ctx.createBufferSource();
        s.buffer = b;
        s.connect(this.ctx.destination);
        s.start(0);
        this._silentPlayed = true;
      }
      this.ok = true;
    } catch {
      this.ok = false;
    }
  }

  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() { if (this.ctx && this.ctx.state !== 'running') this.ctx.resume(); }

  get t() { return this.ctx.currentTime; }

  _build() {
    const c = this.ctx;
    this.master = c.createGain();
    this.master.gain.value = 0.9;
    const comp = c.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 4;
    this.master.connect(comp).connect(c.destination);

    // 共有ノイズバッファ
    const len = c.sampleRate * 2;
    this.noise = c.createBuffer(1, len, c.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    // ブラウンノイズ（転がり音）
    this.brown = c.createBuffer(1, len, c.sampleRate);
    const b = this.brown.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
      b[i] = last * 3.5;
    }

    // モーター
    this.motorGain = c.createGain();
    this.motorGain.gain.value = 0;
    this.motorFilter = c.createBiquadFilter();
    this.motorFilter.type = 'lowpass';
    this.motorFilter.frequency.value = 600;
    this.motorFilter.Q.value = 2;
    this.mo1 = c.createOscillator(); this.mo1.type = 'sawtooth'; this.mo1.frequency.value = 80;
    this.mo2 = c.createOscillator(); this.mo2.type = 'square'; this.mo2.frequency.value = 40;
    const m2g = c.createGain(); m2g.gain.value = 0.35;
    this.mo3 = c.createOscillator(); this.mo3.type = 'sine'; this.mo3.frequency.value = 600;
    this.whineGain = c.createGain(); this.whineGain.gain.value = 0;
    this.mo1.connect(this.motorFilter);
    this.mo2.connect(m2g).connect(this.motorFilter);
    this.motorFilter.connect(this.motorGain).connect(this.master);
    this.mo3.connect(this.whineGain).connect(this.master);
    this.mo1.start(); this.mo2.start(); this.mo3.start();

    // 転がり音
    this.roll = c.createBufferSource(); this.roll.buffer = this.brown; this.roll.loop = true;
    this.rollFilter = c.createBiquadFilter(); this.rollFilter.type = 'lowpass'; this.rollFilter.frequency.value = 500;
    this.rollGain = c.createGain(); this.rollGain.gain.value = 0;
    this.roll.connect(this.rollFilter).connect(this.rollGain).connect(this.master);
    this.roll.start();

    // タイヤの擦れ（ゴムの摩擦音）
    this.scrub = c.createBufferSource(); this.scrub.buffer = this.noise; this.scrub.loop = true;
    this.scrubFilter = c.createBiquadFilter(); this.scrubFilter.type = 'bandpass'; this.scrubFilter.frequency.value = 1400; this.scrubFilter.Q.value = 6;
    this.scrubGain = c.createGain(); this.scrubGain.gain.value = 0;
    this.scrub.connect(this.scrubFilter).connect(this.scrubGain).connect(this.master);
    this.scrub.start();

    // 噴水
    this.fount = c.createBufferSource(); this.fount.buffer = this.noise; this.fount.loop = true;
    const ff = c.createBiquadFilter(); ff.type = 'highpass'; ff.frequency.value = 1800;
    this.fountGain = c.createGain(); this.fountGain.gain.value = 0;
    this.fount.connect(ff).connect(this.fountGain).connect(this.master);
    this.fount.start();

    // 風（環境音）
    this.wind = c.createBufferSource(); this.wind.buffer = this.brown; this.wind.loop = true;
    const wf = c.createBiquadFilter(); wf.type = 'bandpass'; wf.frequency.value = 380; wf.Q.value = 0.6;
    this.windGain = c.createGain(); this.windGain.gain.value = 0.03;
    this.wind.connect(wf).connect(this.windGain).connect(this.master);
    this.wind.start();

    this.musicGain = c.createGain(); this.musicGain.gain.value = 0;
    this.musicGain.connect(this.master);
    this._musicNext = 0;
    this._musicStep = 0;
    this._birdNext = 1;
  }

  _env(g, t, a, peak, dcy, end = 0.0001) {
    g.gain.cancelScheduledValues(t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(end, t + a + dcy);
  }

  _osc(type, f, t, dur, peak, { a = 0.005, f2 = null, dest = null, detune = 0 } = {}) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f, t);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
    o.detune.value = detune;
    const g = c.createGain();
    this._env(g, t, a, peak, dur);
    o.connect(g).connect(dest || this.master);
    o.start(t);
    o.stop(t + a + dur + 0.05);
    return o;
  }

  _noise(t, dur, peak, { type = 'bandpass', f = 2000, q = 1, f2 = null, a = 0.003, dest = null } = {}) {
    const c = this.ctx;
    const s = c.createBufferSource();
    s.buffer = this.noise;
    const fl = c.createBiquadFilter();
    fl.type = type;
    fl.frequency.setValueAtTime(f, t);
    if (f2) fl.frequency.exponentialRampToValueAtTime(f2, t + dur);
    fl.Q.value = q;
    const g = c.createGain();
    this._env(g, t, a, peak, dur);
    s.connect(fl).connect(g).connect(dest || this.master);
    s.start(t, Math.random() * 1.5);
    s.stop(t + a + dur + 0.05);
  }

  ready() { return this.ok && this.ctx && !this.muted; }

  // ---------- 連続音 ----------
  setMotor(power, speed, throttle, load = 0) {
    if (!this.ready()) return;
    const t = this.t;
    const f = 52 + speed * 34 - load * 10;
    this.mo1.frequency.setTargetAtTime(Math.max(30, f), t, 0.08);
    this.mo2.frequency.setTargetAtTime(Math.max(15, f * 0.5), t, 0.08);
    this.mo3.frequency.setTargetAtTime(380 + speed * 260 - load * 60, t, 0.1);
    const g = power ? 0.018 + throttle * 0.05 + Math.min(speed, 4) * 0.012 + Math.max(0, load) * 0.03 : 0;
    this.motorGain.gain.setTargetAtTime(g, t, 0.08);
    this.motorFilter.frequency.setTargetAtTime(260 + speed * 260 + throttle * 300, t, 0.1);
    this.whineGain.gain.setTargetAtTime(power ? 0.004 + Math.min(speed, 4) * 0.004 + throttle * 0.006 : 0, t, 0.1);
  }

  setRolling(speed, bridge = false) {
    if (!this.ready()) return;
    const t = this.t;
    this.rollGain.gain.setTargetAtTime(Math.min(speed, 4) * (bridge ? 0.05 : 0.035), t, 0.1);
    this.rollFilter.frequency.setTargetAtTime(bridge ? 700 : 420 + speed * 60, t, 0.1);
  }

  setScrub(amount) {
    if (!this.ready()) return;
    const t = this.t;
    this.scrubGain.gain.setTargetAtTime(Math.min(amount, 1) * 0.07, t, 0.04);
    this.scrubFilter.frequency.setTargetAtTime(1100 + amount * 900, t, 0.05);
  }

  setFountain(v) {
    if (!this.ready()) return;
    this.fountGain.gain.setTargetAtTime(v * 0.05, this.t, 0.3);
  }

  setMusic(v) {
    if (!this.ready()) return;
    this.musicGain.gain.setTargetAtTime(v * 0.5, this.t, 0.4);
  }

  // メリーゴーラウンドのオルゴール（音量は距離で変える）
  update(dt, musicOn) {
    if (!this.ready()) return;
    const t = this.t;
    if (musicOn) {
      const mel = [72, 76, 79, 76, 77, 74, 71, 74, 72, 76, 79, 84, 83, 79, 76, 79];
      const bass = [48, 0, 55, 0, 53, 0, 55, 0, 48, 0, 55, 0, 52, 0, 55, 0];
      if (this._musicNext < t) this._musicNext = t + 0.05;
      while (this._musicNext < t + 0.25) {
        const i = this._musicStep % mel.length;
        const nt = this._musicNext;
        const f = 440 * Math.pow(2, (mel[i] - 69) / 12);
        this._osc('triangle', f, nt, 0.5, 0.18, { dest: this.musicGain });
        this._osc('sine', f * 2, nt, 0.25, 0.05, { dest: this.musicGain });
        if (bass[i]) this._osc('sine', 440 * Math.pow(2, (bass[i] - 69) / 12), nt, 0.6, 0.12, { dest: this.musicGain });
        this._musicStep++;
        this._musicNext += 0.26;
      }
    }
    // 小鳥のさえずり
    this._birdNext -= dt;
    if (this._birdNext < 0) {
      this._birdNext = 2.5 + Math.random() * 5;
      const base = 2400 + Math.random() * 1400;
      const n = 2 + ((Math.random() * 3) | 0);
      for (let i = 0; i < n; i++) {
        const st = t + i * 0.11;
        this._osc('sine', base, st, 0.07, 0.025, { f2: base * (1.3 + Math.random() * 0.3) });
      }
    }
  }

  // ---------- 単発音 ----------
  click(v = 1, f = 2400) {
    if (!this.ready()) return;
    const t = this.t;
    this._noise(t, 0.02, 0.25 * v, { f, q: 4 });
    this._osc('square', f * 0.5, t, 0.015, 0.05 * v);
  }

  tick(high = true) {
    if (!this.ready()) return;
    const t = this.t;
    const f = high ? 2900 : 2200;
    this._noise(t, 0.025, 0.3, { f, q: 8 });
    this._osc('sine', f / 2, t, 0.03, 0.08);
  }

  latch() {
    if (!this.ready()) return;
    const t = this.t;
    this._noise(t, 0.03, 0.35, { f: 3000, q: 3 });
    this._noise(t + 0.07, 0.05, 0.45, { f: 1200, q: 2 });
    this._osc('square', 180, t + 0.07, 0.05, 0.08);
  }

  doorOpen() {
    if (!this.ready()) return;
    const t = this.t;
    this._noise(t, 0.35, 0.05, { type: 'bandpass', f: 600, f2: 900, q: 3 });
  }

  doorClose() {
    if (!this.ready()) return;
    const t = this.t;
    this._osc('sine', 120, t, 0.18, 0.45, { f2: 60 });
    this._noise(t, 0.08, 0.35, { f: 800, q: 1 });
    this._noise(t + 0.02, 0.04, 0.2, { f: 3200, q: 3 });
  }

  thunk(v = 1) {
    if (!this.ready()) return;
    const t = this.t;
    this._osc('sine', 160, t, 0.12, 0.35 * v, { f2: 70 });
    this._noise(t, 0.05, 0.18 * v, { f: 900, q: 1.5 });
  }

  clunkUp() {
    if (!this.ready()) return;
    const t = this.t;
    this._noise(t, 0.12, 0.1, { f: 500, f2: 1400, q: 2 });
    this._osc('sine', 140, t + 0.12, 0.14, 0.35, { f2: 80 });
    this._noise(t + 0.12, 0.05, 0.25, { f: 2500, q: 3 });
  }

  ratchet(n = 1) {
    if (!this.ready()) return;
    const t = this.t;
    for (let i = 0; i < n; i++) {
      this._noise(t + i * 0.035, 0.015, 0.3, { f: 3600, q: 6 });
      this._osc('square', 900, t + i * 0.035, 0.01, 0.04);
    }
  }

  pawlRelease() {
    if (!this.ready()) return;
    const t = this.t;
    this._noise(t, 0.03, 0.45, { f: 2600, q: 3 });
    this._osc('triangle', 600, t, 0.12, 0.12, { f2: 1200 });
    this._osc('sine', 300, t + 0.02, 0.2, 0.05, { f2: 500 });
  }

  brakeHiss() {
    if (!this.ready()) return;
    const t = this.t;
    this._noise(t, 0.35, 0.05, { type: 'highpass', f: 3000 });
  }

  boing(v = 1) {
    if (!this.ready()) return;
    const t = this.t;
    this._osc('sine', 260, t, 0.35, 0.35 * v, { f2: 110 });
    this._osc('sine', 390, t, 0.2, 0.1 * v, { f2: 170 });
    this._noise(t, 0.08, 0.15 * v, { f: 500, q: 1 });
  }

  horn() {
    if (!this.ready()) return;
    const t = this.t;
    for (const [st, du] of [[0, 0.14], [0.2, 0.22]]) {
      this._osc('square', 392, t + st, du, 0.09, { a: 0.01 });
      this._osc('square', 494, t + st, du, 0.07, { a: 0.01 });
      this._osc('sine', 196, t + st, du, 0.1, { a: 0.01 });
    }
  }

  beepLock() {
    if (!this.ready()) return;
    const t = this.t;
    this._osc('square', 1800, t, 0.06, 0.05);
    this._osc('square', 1800, t + 0.14, 0.06, 0.05);
  }

  lockedRattle() {
    if (!this.ready()) return;
    const t = this.t;
    for (let i = 0; i < 3; i++) {
      this._noise(t + i * 0.08, 0.04, 0.3, { f: 1400 + i * 150, q: 3 });
      this._osc('square', 220, t + i * 0.08, 0.03, 0.05);
    }
  }

  chime(up = true) {
    if (!this.ready()) return;
    const t = this.t;
    const a = up ? [784, 1047] : [1047, 784];
    this._osc('sine', a[0], t, 0.5, 0.12);
    this._osc('sine', a[1], t + 0.18, 0.7, 0.12);
  }

  pop(f = 900) {
    if (!this.ready()) return;
    const t = this.t;
    this._osc('sine', f, t, 0.12, 0.2, { f2: f * 1.8 });
  }

  bonk(f = 500) {
    if (!this.ready()) return;
    const t = this.t;
    this._osc('triangle', f, t, 0.18, 0.2, { f2: f * 0.6 });
  }

  quack() {
    if (!this.ready()) return;
    const t = this.t;
    const c = this.ctx;
    const o = c.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(520, t); o.frequency.exponentialRampToValueAtTime(380, t + 0.14);
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1200; f.Q.value = 4;
    const g = c.createGain(); this._env(g, t, 0.01, 0.18, 0.14);
    o.connect(f).connect(g).connect(this.master);
    o.start(t); o.stop(t + 0.2);
  }

  gearTick(v = 1) {
    if (!this.ready()) return;
    const t = this.t;
    this._noise(t, 0.02, 0.18 * v, { f: 1800 + Math.random() * 400, q: 5 });
    this._osc('square', 140, t, 0.02, 0.05 * v);
  }

  sink() {
    if (!this.ready()) return;
    const t = this.t;
    this._osc('sine', 90, t, 0.6, 0.35, { f2: 50, a: 0.05 });
    this._noise(t, 0.6, 0.06, { type: 'lowpass', f: 400 });
    this._noise(t + 0.55, 0.06, 0.3, { f: 1100, q: 2 });
  }

  cable(dur = 1.4) {
    if (!this.ready()) return;
    const t = this.t;
    this._noise(t, dur, 0.06, { type: 'bandpass', f: 900, f2: 1600, q: 4, a: 0.1 });
  }

  lockRelease() {
    if (!this.ready()) return;
    const t = this.t;
    this._noise(t, 0.05, 0.5, { f: 1600, q: 2 });
    this._osc('sine', 110, t, 0.3, 0.4, { f2: 55 });
    this._osc('triangle', 880, t + 0.03, 0.4, 0.08);
  }

  creak(dur = 3) {
    if (!this.ready()) return;
    const t = this.t;
    const c = this.ctx;
    const o = c.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(70, t);
    o.frequency.linearRampToValueAtTime(95, t + dur * 0.5);
    o.frequency.linearRampToValueAtTime(80, t + dur);
    const lfo = c.createOscillator(); lfo.frequency.value = 9;
    const lg = c.createGain(); lg.gain.value = 18;
    lfo.connect(lg).connect(o.frequency);
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 500; f.Q.value = 3;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.07, t + 0.3);
    g.gain.setValueAtTime(0.07, t + dur - 0.4);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(f).connect(g).connect(this.master);
    o.start(t); lfo.start(t); o.stop(t + dur + 0.1); lfo.stop(t + dur + 0.1);
    this._osc('sine', 60, t + dur - 0.1, 0.4, 0.35, { f2: 40 });
  }

  chain(dur = 2) {
    if (!this.ready()) return;
    const t = this.t;
    const n = Math.floor(dur / 0.07);
    for (let i = 0; i < n; i++) this._noise(t + i * 0.07, 0.03, 0.12, { f: 2600 + Math.random() * 800, q: 6 });
  }

  bells() {
    if (!this.ready()) return;
    const t = this.t;
    const notes = [1047, 880, 784, 659, 784, 880, 1047, 1319];
    notes.forEach((f, i) => {
      this._osc('sine', f, t + i * 0.32, 1.6, 0.13);
      this._osc('sine', f * 2.76, t + i * 0.32, 0.5, 0.03);
      this._osc('sine', f * 0.5, t + i * 0.32, 1.2, 0.05);
    });
  }

  splash() {
    if (!this.ready()) return;
    const t = this.t;
    this._noise(t, 0.6, 0.2, { type: 'lowpass', f: 2600, f2: 600 });
  }

  sparkle() {
    if (!this.ready()) return;
    const t = this.t;
    [1568, 2093, 2637, 3136].forEach((f, i) => this._osc('sine', f, t + i * 0.06, 0.35, 0.06));
  }

  claps(n = 6, v = 1) {
    if (!this.ready()) return;
    const t = this.t;
    for (let i = 0; i < n; i++) {
      const st = t + i * (0.13 + Math.random() * 0.05);
      this._noise(st, 0.05, 0.35 * v, { f: 1400 + Math.random() * 600, q: 1.2 });
    }
  }

  // ---------- 声（フォルマント合成） ----------
  voice(spec) {
    if (!this.ready()) return;
    const c = this.ctx;
    const t = this.t + (spec.delay || 0);
    const V = {
      a: [800, 1200, 2500], i: [300, 2300, 3000], u: [350, 1250, 2300],
      e: [480, 1900, 2600], o: [450, 800, 2600],
    };
    const k = spec.formant || 1;
    const src = c.createOscillator();
    src.type = 'sawtooth';
    const vib = c.createOscillator(); vib.frequency.value = 5.5;
    const vg = c.createGain(); vg.gain.value = spec.f0 * 0.02;
    vib.connect(vg).connect(src.frequency);
    const out = c.createGain(); out.gain.value = 0;
    const filters = [0, 1, 2].map((j) => {
      const f = c.createBiquadFilter();
      f.type = 'bandpass';
      f.Q.value = j === 0 ? 6 : 9;
      const g = c.createGain();
      g.gain.value = [1, 0.6, 0.25][j];
      src.connect(f).connect(g).connect(out);
      return f;
    });
    out.connect(this.master);
    let tt = t;
    src.frequency.setValueAtTime(spec.f0, t);
    const vol = spec.vol || 0.5;
    for (const syl of spec.syl) {
      const [vw, dur, p0, p1] = syl;
      const fm = V[vw];
      filters.forEach((f, j) => f.frequency.setTargetAtTime(fm[j] * k, tt, 0.02));
      src.frequency.setValueAtTime(spec.f0 * p0, tt);
      src.frequency.linearRampToValueAtTime(spec.f0 * p1, tt + dur);
      out.gain.setTargetAtTime(vol, tt, 0.02);
      out.gain.setTargetAtTime(syl[4] === 0 ? 0 : vol * 0.8, tt + dur * 0.7, 0.03);
      tt += dur;
      if (syl[5]) { out.gain.setTargetAtTime(0, tt - 0.03, 0.015); tt += syl[5]; }
    }
    out.gain.setTargetAtTime(0, tt, 0.05);
    src.start(t); vib.start(t);
    src.stop(tt + 0.4); vib.stop(tt + 0.4);
    if (spec.breath) this._noise(t, tt - t, 0.03, { f: 1500, q: 0.8, a: 0.02 });
  }

  papaWow() { this.voice({ f0: 130, formant: 1, vol: 0.45, syl: [['o', 0.25, 1, 1.25], ['o', 0.55, 1.3, 1.05]] }); }
  papaOops() { this.voice({ f0: 150, formant: 1, vol: 0.4, syl: [['o', 0.12, 1.2, 1.3, 1, 0.06], ['o', 0.1, 1.2, 1.0], ['o', 0.14, 1.05, 0.9]] }); }
  papaNod() { this.voice({ f0: 135, formant: 1, vol: 0.4, syl: [['u', 0.1, 1, 1.05], ['u', 0.16, 1.15, 1.25]] }); }
  papaLaugh() {
    this.voice({
      f0: 150, formant: 1, vol: 0.38, breath: true,
      syl: [['a', 0.1, 1.25, 1.2, 1, 0.05], ['a', 0.1, 1.15, 1.1, 1, 0.05], ['a', 0.1, 1.05, 1.0, 1, 0.05], ['a', 0.14, 0.98, 0.9]],
    });
  }
  papaYeah() { this.voice({ f0: 140, formant: 1, vol: 0.45, syl: [['i', 0.12, 1.2, 1.4], ['e', 0.35, 1.45, 1.2]] }); }
  mamaYay(delay = 0) {
    this.voice({ f0: 290, formant: 1.18, vol: 0.32, delay, syl: [['u', 0.08, 1, 1.05], ['a', 0.3, 1.1, 1.25], ['i', 0.25, 1.25, 1.1]] });
  }
  crowdCheer(n = 6, dur = 1.2) {
    if (!this.ready()) return;
    for (let i = 0; i < n; i++) {
      const f0 = 240 + Math.random() * 160;
      this.voice({
        f0, formant: 1.15 + Math.random() * 0.15, vol: 0.12, delay: Math.random() * 0.3,
        syl: [['a', dur * (0.6 + Math.random() * 0.4), 1, 1.15 + Math.random() * 0.2]],
      });
    }
    this._noise(this.t, dur + 0.4, 0.05, { f: 1200, q: 0.5, a: 0.15 });
  }

  fanfareChord() {
    if (!this.ready()) return;
    const t = this.t;
    const seq = [[523, 659, 784], [587, 740, 880], [659, 784, 1047]];
    seq.forEach((ch, i) => ch.forEach((f) => {
      this._osc('sawtooth', f, t + i * 0.28, i === 2 ? 1.2 : 0.24, 0.025, { a: 0.02 });
      this._osc('triangle', f, t + i * 0.28, i === 2 ? 1.2 : 0.24, 0.05, { a: 0.02 });
    }));
  }
}
