/**
 * audio.js — WebAudio による完全手続き型サウンド。外部アセットは一切使わない。
 * 効果音は「入水の気持ちよさ」を最大化するために音程・エンベロープを設計している。
 */

export class Audio {
  constructor() {
    this.ctx = null;
    this.ready = false;
    this.muted = false;
    this.master = null;
    this.sfxBus = null;
    this.musicBus = null;
    this._wind = null;
    this._musicTimer = null;
    this._noiseBuf = null;
    this._step = 0;
  }

  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.85;
    this.master.connect(this.ctx.destination);

    this.sfxBus = this.ctx.createGain();
    this.sfxBus.gain.value = 1.0;
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 6; comp.release.value = 0.25;
    this.sfxBus.connect(comp); comp.connect(this.master);

    this.musicBus = this.ctx.createGain();
    this.musicBus.gain.value = 0.34;
    this.musicBus.connect(this.master);

    this._noiseBuf = this._makeNoise(2.0);
    this._startWind();
    this.ready = true;
  }

  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : 0.85; }

  _makeNoise(sec) {
    const n = Math.floor(this.ctx.sampleRate * sec);
    const buf = this.ctx.createBuffer(1, n, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  _noise(dur, { type = 'bandpass', freq = 900, q = 1, gain = 0.4, attack = 0.005, sweep = null } = {}) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this._noiseBuf;
    src.loop = true;
    const f = this.ctx.createBiquadFilter();
    f.type = type; f.frequency.value = freq; f.Q.value = q;
    if (sweep) {
      f.frequency.setValueAtTime(freq, t);
      f.frequency.exponentialRampToValueAtTime(Math.max(40, sweep), t + dur);
    }
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f); f.connect(g); g.connect(this.sfxBus);
    src.start(t); src.stop(t + dur + 0.05);
  }

  _tone(freq, dur, { type = 'sine', gain = 0.25, attack = 0.004, glide = null, detune = 0, delay = 0 } = {}) {
    if (!this.ready) return;
    const t = this.ctx.currentTime + delay;
    const o = this.ctx.createOscillator();
    o.type = type; o.frequency.setValueAtTime(freq, t); o.detune.value = detune;
    if (glide) o.frequency.exponentialRampToValueAtTime(Math.max(20, glide), t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(this.sfxBus);
    o.start(t); o.stop(t + dur + 0.05);
  }

  // --- 風切り音: 落下速度に連動して常時鳴らす ---
  _startWind() {
    const src = this.ctx.createBufferSource();
    src.buffer = this._noiseBuf; src.loop = true;
    const f = this.ctx.createBiquadFilter();
    f.type = 'bandpass'; f.frequency.value = 420; f.Q.value = 0.7;
    const g = this.ctx.createGain(); g.gain.value = 0;
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start();
    this._wind = { gain: g, filter: f };
  }

  /** speed01: 0..1 の落下速度。空中でのみ上げる。 */
  setWind(speed01) {
    if (!this._wind) return;
    const t = this.ctx.currentTime;
    this._wind.gain.gain.setTargetAtTime(0.16 * speed01 * speed01, t, 0.08);
    this._wind.filter.frequency.setTargetAtTime(340 + 900 * speed01, t, 0.1);
  }

  // ---------------- ゲーム側から呼ぶ効果音 ----------------

  ui() { this._tone(660, 0.07, { type: 'triangle', gain: 0.16 }); }
  uiBig() { this._tone(440, 0.1, { type: 'square', gain: 0.1 }); this._tone(880, 0.16, { type: 'triangle', gain: 0.12, delay: 0.05 }); }

  charge(p) {
    const now = this.ctx ? this.ctx.currentTime : 0;
    if (!this.ready || now - this._step < 0.055) return;
    this._step = now;
    this._tone(220 + p * 520, 0.06, { type: 'square', gain: 0.05 });
  }

  takeoff(power) {
    this._noise(0.16, { type: 'lowpass', freq: 1400, gain: 0.35, sweep: 220 });
    this._tone(160 + power * 90, 0.22, { type: 'sine', gain: 0.28, glide: 70 });
  }

  perfectTakeoff() {
    [880, 1320, 1760].forEach((f, i) => this._tone(f, 0.16, { type: 'triangle', gain: 0.14, delay: i * 0.035 }));
  }

  /** 半回転ごとの「ヒュン」。 */
  whoosh(speed01) {
    this._noise(0.13, { type: 'bandpass', freq: 500 + speed01 * 1600, q: 1.6, gain: 0.12 + speed01 * 0.12, sweep: 260 });
  }

  twist() { this._noise(0.2, { type: 'bandpass', freq: 1800, q: 3, gain: 0.1, sweep: 700 }); }

  coin(chain = 0) {
    const base = 1046 * Math.pow(1.0595, Math.min(chain, 14) * 2);
    this._tone(base, 0.09, { type: 'square', gain: 0.1 });
    this._tone(base * 1.5, 0.14, { type: 'triangle', gain: 0.12, delay: 0.045 });
  }

  ring(chain = 0) {
    const base = 784 * Math.pow(1.0595, Math.min(chain, 10) * 3);
    this._tone(base, 0.5, { type: 'sine', gain: 0.2 });
    this._tone(base * 2, 0.4, { type: 'sine', gain: 0.1, delay: 0.01 });
    this._tone(base * 3, 0.3, { type: 'sine', gain: 0.05, delay: 0.02 });
  }

  wallKick() {
    this._noise(0.14, { type: 'lowpass', freq: 900, gain: 0.4, sweep: 150 });
    this._tone(300, 0.18, { type: 'sawtooth', gain: 0.14, glide: 620 });
  }

  slowMo(on) {
    if (!this.ready) return;
    this.sfxBus.gain.setTargetAtTime(on ? 0.75 : 1.0, this.ctx.currentTime, 0.12);
    if (on) this._tone(1200, 0.45, { type: 'sine', gain: 0.06, glide: 300 });
  }

  /** 入水。grade によって全く違う音にするのが要。 */
  splash(grade, splashScale = 1) {
    if (!this.ready) return;
    if (grade === 'rip') {
      // 針のように細い「シュッ」+ 上昇するチャイム
      this._noise(0.1, { type: 'highpass', freq: 2600, gain: 0.4 * splashScale, attack: 0.002 });
      this._noise(0.22, { type: 'bandpass', freq: 900, q: 2.5, gain: 0.18, sweep: 300 });
      [1318, 1760, 2637].forEach((f, i) => this._tone(f, 0.5, { type: 'sine', gain: 0.16, delay: i * 0.05 }));
    } else if (grade === 'clean') {
      this._noise(0.3, { type: 'lowpass', freq: 2600, gain: 0.42 * splashScale, sweep: 380 });
      [988, 1318].forEach((f, i) => this._tone(f, 0.4, { type: 'sine', gain: 0.12, delay: i * 0.05 }));
    } else if (grade === 'ok') {
      this._noise(0.42, { type: 'lowpass', freq: 2000, gain: 0.5 * splashScale, sweep: 260 });
    } else if (grade === 'sloppy') {
      this._noise(0.55, { type: 'lowpass', freq: 1500, gain: 0.6 * splashScale, sweep: 180 });
      this._tone(120, 0.3, { type: 'sine', gain: 0.2, glide: 60 });
    } else {
      // 腹打ち: 破裂音 + 低いドスン
      this._noise(0.08, { type: 'bandpass', freq: 1800, q: 0.6, gain: 0.85 * splashScale, attack: 0.001 });
      this._noise(0.75, { type: 'lowpass', freq: 1100, gain: 0.6 * splashScale, sweep: 120 });
      this._tone(90, 0.45, { type: 'sine', gain: 0.35, glide: 42 });
      this._tone(66, 0.5, { type: 'triangle', gain: 0.2, glide: 40, delay: 0.02 });
    }
  }

  cheer(intensity = 1) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this._noiseBuf; src.loop = true;
    const f = this.ctx.createBiquadFilter();
    f.type = 'bandpass'; f.frequency.value = 1100; f.Q.value = 0.5;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.16 * intensity, t + 0.18);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.5);
    const lfo = this.ctx.createOscillator(); lfo.type = 'sine'; lfo.frequency.value = 7;
    const lg = this.ctx.createGain(); lg.gain.value = 400;
    lfo.connect(lg); lg.connect(f.frequency); lfo.start(t); lfo.stop(t + 1.6);
    src.connect(f); f.connect(g); g.connect(this.sfxBus);
    src.start(t); src.stop(t + 1.7);
  }

  fanfare() {
    [523, 659, 784, 1046].forEach((f, i) =>
      this._tone(f, 0.55, { type: 'triangle', gain: 0.2, delay: i * 0.1 }));
  }

  // ---------------- BGM: ペンタトニックのゆるいループ ----------------
  startMusic(night = false) {
    if (!this.ready || this._musicTimer) return;
    const scale = night ? [220, 261.6, 293.7, 349.2, 392] : [261.6, 293.7, 329.6, 392, 440];
    let i = 0;
    const beat = 0.42;
    const play = () => {
      const t = this.ctx.currentTime;
      const step = i % 16;
      // ベースパッド
      if (step % 8 === 0) {
        const root = scale[0] / 2;
        [root, root * 1.5].forEach((fq) => {
          const o = this.ctx.createOscillator(); o.type = 'sine'; o.frequency.value = fq;
          const g = this.ctx.createGain();
          g.gain.setValueAtTime(0.0001, t);
          g.gain.exponentialRampToValueAtTime(0.09, t + 0.5);
          g.gain.exponentialRampToValueAtTime(0.0001, t + beat * 8);
          o.connect(g); g.connect(this.musicBus); o.start(t); o.stop(t + beat * 8 + 0.1);
        });
      }
      // マリンバ風アルペジオ
      if (step % 2 === 0 || Math.random() < 0.35) {
        const n = scale[(step * 3 + (step % 5)) % scale.length] * (step % 6 === 0 ? 2 : 1);
        const o = this.ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = n;
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.11, t + 0.006);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.42);
        o.connect(g); g.connect(this.musicBus); o.start(t); o.stop(t + 0.5);
      }
      i++;
    };
    play();
    this._musicTimer = setInterval(play, beat * 1000);
  }

  stopMusic() { if (this._musicTimer) { clearInterval(this._musicTimer); this._musicTimer = null; } }
  duckMusic(on) {
    if (!this.ready) return;
    this.musicBus.gain.setTargetAtTime(on ? 0.1 : 0.34, this.ctx.currentTime, 0.2);
  }
}
