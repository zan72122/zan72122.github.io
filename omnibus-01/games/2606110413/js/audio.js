// Web Audio API によるサウンド完全合成(外部音源ファイルなし)

const SEMI = Math.pow(2, 1 / 12);

function noteFreq(base, semitones) {
  return base * Math.pow(SEMI, semitones);
}

// ドレミ… C4 = 261.63
const C4 = 261.63;
const N = (name) => {
  // 'C5' のような表記を周波数へ
  const map = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  const semis = map[name[0]] + (name[1] === '#' ? 1 : 0);
  const oct = parseInt(name[name.length - 1], 10);
  return noteFreq(C4, semis + (oct - 4) * 12);
};

// 8小節・8分音符×8 = 64ステップの明るいループ(Cメジャーペンタ)
const MELODY = [
  'C5', null, 'E5', null, 'G5', null, 'E5', null,
  'A5', null, 'G5', null, 'E5', null, 'D5', null,
  'A5', null, 'C6', null, 'A5', null, 'G5', null,
  'E5', null, 'G5', null, 'A5', null, null, null,
  'G5', null, 'E5', null, 'D5', null, 'C5', null,
  'D5', null, 'E5', null, 'G5', null, 'A5', null,
  'C6', null, 'A5', null, 'G5', null, 'E5', null,
  'D5', 'E5', 'G5', null, 'C5', null, null, null,
];
const BASS_ROOTS = ['C3', 'C3', 'F3', 'F3', 'G3', 'F3', 'C3', 'G3'];

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.muted = false;
    this.combo = 0;
    this.bgmTimer = null;
    this.fever = false;
    this.bpm = 112;
  }

  ensure() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 6;
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.85;
    this.master.connect(comp);
    comp.connect(this.ctx.destination);
    // ホワイトノイズバッファ(1秒)を事前生成
    const len = this.ctx.sampleRate;
    this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;

    // バックグラウンドでは止める
    document.addEventListener('visibilitychange', () => {
      if (!this.ctx) return;
      if (document.hidden) this.ctx.suspend();
      else this.ctx.resume();
    });
  }

  // iOS Safari のオーディオアンロック(最初のタップで呼ぶ)
  unlock() {
    this.ensure();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();
    const src = this.ctx.createBufferSource();
    src.buffer = this.ctx.createBuffer(1, 1, 22050);
    src.connect(this.ctx.destination);
    src.start(0);
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.master) {
      this.master.gain.setTargetAtTime(this.muted ? 0 : 0.85, this.ctx.currentTime, 0.02);
    }
    return this.muted;
  }

  get ready() { return !!this.ctx && this.ctx.state === 'running'; }

  // --- 基本パーツ ---

  osc(type, freq, t, dur, gain = 0.15, { freqEnd = null, dest = null } = {}) {
    if (!this.ctx) return;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (freqEnd) o.frequency.exponentialRampToValueAtTime(freqEnd, t + dur);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.008);
    g.gain.setTargetAtTime(0, t + 0.012, dur / 3);
    o.connect(g);
    g.connect(dest || this.master);
    o.start(t);
    o.stop(t + dur + 0.3);
  }

  noise(t, dur, gain = 0.1, { type = 'bandpass', freq = 1000, q = 1 } = {}) {
    if (!this.ctx) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = true;
    const f = this.ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.01);
    g.gain.setTargetAtTime(0, t + 0.015, dur / 3);
    src.connect(f);
    f.connect(g);
    g.connect(this.master);
    src.start(t, Math.random());
    src.stop(t + dur + 0.3);
  }

  // --- 効果音 ---

  shoot() {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    this.noise(t, 0.12, 0.12, { freq: 900, q: 1.5 });
    this.osc('sine', 380, t, 0.1, 0.1, { freqEnd: 950 });
  }

  // 命中。連続ヒットでドレミが上がっていく
  hit(combo = 0) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const steps = [0, 2, 4, 7, 9, 12, 14, 16];
    const f = noteFreq(523.25, steps[combo % steps.length]);
    this.osc('sine', f * 1.45, t, 0.16, 0.22, { freqEnd: f });
    this.osc('triangle', f * 2, t + 0.01, 0.12, 0.08);
    this.noise(t, 0.05, 0.06, { freq: 4000, q: 0.8 });
  }

  // 金スターのきらきらアルペジオ
  bonus() {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    ['C5', 'E5', 'G5', 'C6', 'E6', 'G6'].forEach((n, i) => {
      this.osc('triangle', N(n), t + i * 0.055, 0.25, 0.14);
    });
    this.noise(t, 0.5, 0.05, { type: 'highpass', freq: 6000 });
  }

  countdown(go = false) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    if (go) {
      this.osc('square', N('C5'), t, 0.12, 0.1);
      this.osc('square', N('C6'), t + 0.1, 0.4, 0.12);
    } else {
      this.osc('square', N('A5'), t, 0.12, 0.09);
    }
  }

  // 花火のぽん
  pop() {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    this.osc('sine', 220, t, 0.25, 0.18, { freqEnd: 60 });
    this.noise(t + 0.05, 0.5, 0.08, { type: 'highpass', freq: 3000 });
  }

  fanfare() {
    if (!this.ready) return;
    const t0 = this.ctx.currentTime + 0.05;
    const chords = [
      ['C4', 'E4', 'G4', 'C5'],
      ['F4', 'A4', 'C5', 'F5'],
      ['G4', 'B4', 'D5', 'G5'],
      ['C5', 'E5', 'G5', 'C6'],
    ];
    chords.forEach((chord, i) => {
      const t = t0 + i * 0.3;
      const dur = i === chords.length - 1 ? 1.4 : 0.32;
      chord.forEach((n) => {
        this.osc('square', N(n), t, dur, 0.045);
        this.osc('triangle', N(n) * 2, t, dur, 0.05);
      });
    });
    // シンバル
    this.noise(t0 + 0.9, 1.2, 0.1, { type: 'highpass', freq: 5000 });
  }

  // --- BGM(ルックアヘッド・スケジューラ) ---

  startBgm() {
    if (!this.ctx) return;
    this.stopBgm();
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.1;
    this.bgmTimer = setInterval(() => this.tick(), 25);
  }

  stopBgm() {
    if (this.bgmTimer) {
      clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  setFever(on) { this.fever = on; }

  tick() {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    // 復帰時にたまった分は捨てて仕切り直す
    if (this.nextTime < now - 0.2) this.nextTime = now + 0.05;
    const bpm = this.fever ? this.bpm * 1.15 : this.bpm;
    const stepDur = 60 / bpm / 2; // 8分音符
    const transpose = this.fever ? 2 : 0;
    while (this.nextTime < now + 0.12) {
      this.scheduleStep(this.step, this.nextTime, transpose);
      this.step = (this.step + 1) % 64;
      this.nextTime += stepDur;
    }
  }

  scheduleStep(step, t, transpose) {
    const tp = (f) => f * Math.pow(SEMI, transpose);
    // メロディ(ベル風)
    const m = MELODY[step];
    if (m) this.osc('sine', tp(N(m)), t, 0.32, 0.085);
    // ベース(各小節の頭と5拍目)
    const bar = Math.floor(step / 8);
    const inBar = step % 8;
    if (inBar === 0) this.osc('triangle', tp(N(BASS_ROOTS[bar])), t, 0.3, 0.12);
    if (inBar === 4) this.osc('triangle', tp(N(BASS_ROOTS[bar]) * 1.5), t, 0.25, 0.09);
    // ハイハット(裏拍、フィーバー時は毎拍)
    if (inBar % 2 === 1 || this.fever) {
      this.noise(t, 0.04, this.fever ? 0.035 : 0.025, { type: 'highpass', freq: 7000 });
    }
  }
}
