// 手続き的な音: 効果音・環境音・音楽 (すべてWeb Audioで合成)
const PENTA = [0, 2, 4, 7, 9];
const midiHz = (m) => 440 * Math.pow(2, (m - 69) / 12);
const scaleNote = (base, i) => base + PENTA[((i % 5) + 5) % 5] + 12 * Math.floor(i / 5);

export class Audio {
  constructor(G) {
    this.G = G;
    this.ctx = null;
    this.ready = false;
    this.loops = {};
    this.muffle = 1;       // 1=こもる(つぼみの中) 0=開放
    this.space = 0;        // 空の広がり
    this.musicMode = 'garden';
    this.musicT = 0;
    this.step = 0;
    this.birdT = 2;
  }

  unlock() {
    if (this.ctx && this.ctx.state === 'running') return;
    try {
      if (navigator.audioSession) navigator.audioSession.type = 'playback';
    } catch (_) { /* noop */ }
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC({ latencyHint: 'interactive' });
      this.build();
    }
    if (this.ctx.state !== 'running') this.ctx.resume();
    // iOS: 無音を1つ鳴らして経路を開く
    const b = this.ctx.createBuffer(1, 1, 22050);
    const s = this.ctx.createBufferSource(); s.buffer = b; s.connect(this.ctx.destination); s.start(0);
    // iOS のマナーモードでも鳴るように、無音の <audio> をループ再生して再生カテゴリにする
    if (!this.silentEl) {
      try {
        const sr = 8000, n = sr / 2;
        const buf = new ArrayBuffer(44 + n * 2);
        const v = new DataView(buf);
        const w = (o, str) => { for (let i = 0; i < str.length; i++) v.setUint8(o + i, str.charCodeAt(i)); };
        w(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); w(8, 'WAVE'); w(12, 'fmt ');
        v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
        v.setUint32(24, sr, true); v.setUint32(28, sr * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true);
        w(36, 'data'); v.setUint32(40, n * 2, true);
        const el = document.createElement('audio');
        el.src = URL.createObjectURL(new Blob([buf], { type: 'audio/wav' }));
        el.loop = true; el.setAttribute('playsinline', ''); el.volume = 0.01;
        this.silentEl = el;
      } catch (_) { /* noop */ }
    }
    if (this.silentEl) { const p = this.silentEl.play(); if (p && p.catch) p.catch(() => {}); }
    this.ready = true;
  }

  build() {
    const c = this.ctx;
    this.master = c.createGain(); this.master.gain.value = 0.0;
    this.master.gain.setTargetAtTime(0.9, c.currentTime, 0.8);
    this.comp = c.createDynamicsCompressor();
    this.comp.threshold.value = -14; this.comp.ratio.value = 3; this.comp.attack.value = 0.01; this.comp.release.value = 0.25;
    this.lp = c.createBiquadFilter(); this.lp.type = 'lowpass'; this.lp.frequency.value = 18000; this.lp.Q.value = 0.5;
    this.master.connect(this.lp); this.lp.connect(this.comp); this.comp.connect(c.destination);
    // 残響
    this.verb = c.createConvolver();
    this.verb.buffer = this.makeImpulse(2.6, 2.2);
    this.verbGain = c.createGain(); this.verbGain.gain.value = 0.25;
    this.verb.connect(this.verbGain); this.verbGain.connect(this.master);
    // バス
    this.sfx = c.createGain(); this.sfx.gain.value = 0.9; this.sfx.connect(this.master);
    this.sfxVerb = c.createGain(); this.sfxVerb.gain.value = 0.25; this.sfx.connect(this.sfxVerb); this.sfxVerb.connect(this.verb);
    this.music = c.createGain(); this.music.gain.value = 0.32; this.music.connect(this.master);
    this.musicVerb = c.createGain(); this.musicVerb.gain.value = 0.5; this.music.connect(this.musicVerb); this.musicVerb.connect(this.verb);
    this.amb = c.createGain(); this.amb.gain.value = 0.5; this.amb.connect(this.master);
    // ノイズ
    const len = c.sampleRate * 2;
    this.noise = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = this.noise.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    }
    // 環境音: 風 (左右で別々に揺れる帯域ノイズ)
    this.wind = this.noiseLoop(this.amb, 'lowpass', 500, 0.0);
    this.windHi = this.noiseLoop(this.amb, 'bandpass', 2400, 0.0, 0.7);
    // 注ぐ水・すべる風
    this.pourLoop = this.noiseLoop(this.sfx, 'bandpass', 2800, 0.0, 1.2);
    this.slideLoop = this.noiseLoop(this.sfx, 'bandpass', 900, 0.0, 0.8);
    // つぼみの中の柔らかな持続音
    this.pad = this.makePad();
  }

  makeImpulse(sec, decay) {
    const c = this.ctx, n = Math.floor(c.sampleRate * sec);
    const b = c.createBuffer(2, n, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = b.getChannelData(ch);
      for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, decay) * (i < 200 ? i / 200 : 1);
    }
    return b;
  }

  noiseLoop(dest, type, freq, gain, q = 1) {
    const c = this.ctx;
    const src = c.createBufferSource(); src.buffer = this.noise; src.loop = true;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = c.createGain(); g.gain.value = gain;
    const p = c.createStereoPanner();
    src.connect(f); f.connect(g); g.connect(p); p.connect(dest);
    src.start();
    return { src, f, g, p };
  }

  makePad() {
    const c = this.ctx;
    const out = c.createGain(); out.gain.value = 0;
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 900; f.Q.value = 0.7;
    out.connect(f); f.connect(this.music);
    const oscs = [];
    const notes = [53, 60, 64, 69];
    for (const m of notes) {
      for (const det of [-6, 6]) {
        const o = c.createOscillator(); o.type = 'triangle';
        o.frequency.value = midiHz(m); o.detune.value = det;
        const g = c.createGain(); g.gain.value = 0.06;
        o.connect(g); g.connect(out); o.start();
        oscs.push(o);
      }
    }
    return { out, f, oscs, notes };
  }

  setPadChord(midis) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    this.pad.oscs.forEach((o, i) => o.frequency.setTargetAtTime(midiHz(midis[Math.floor(i / 2) % midis.length]), t, 0.6));
  }

  // ---- 基本の音色 ----
  env(g, t, a, peak, d, sus = 0) {
    g.gain.cancelScheduledValues(t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, sus || 0.0001), t + a + d);
  }
  out(pan = 0, vol = 1, bus = this.sfx) {
    const c = this.ctx;
    const g = c.createGain(); g.gain.value = vol;
    const p = c.createStereoPanner(); p.pan.value = Math.max(-1, Math.min(1, pan));
    g.connect(p); p.connect(bus);
    return g;
  }
  tone(freq, dur, opts = {}) {
    const c = this.ctx, t = c.currentTime + (opts.delay || 0);
    const o = c.createOscillator(); o.type = opts.type || 'sine';
    o.frequency.setValueAtTime(freq, t);
    if (opts.to) o.frequency.exponentialRampToValueAtTime(opts.to, t + (opts.glide || dur));
    const g = c.createGain();
    this.env(g, t, opts.a || 0.005, opts.peak || 0.3, dur);
    o.connect(g); g.connect(opts.dest || this.out(opts.pan, opts.vol ?? 1, opts.bus));
    o.start(t); o.stop(t + (opts.a || 0.005) + dur + 0.05);
    return o;
  }
  bell(m, dur = 1.6, opts = {}) {
    const f = midiHz(m);
    const dest = this.out(opts.pan || 0, opts.vol ?? 1, opts.bus || this.sfx);
    this.tone(f, dur, { peak: 0.22, dest, delay: opts.delay });
    this.tone(f * 2.0, dur * 0.5, { peak: 0.07, dest, delay: opts.delay });
    this.tone(f * 3.01, dur * 0.25, { peak: 0.04, dest, delay: opts.delay });
  }
  marimba(m, opts = {}) {
    const f = midiHz(m);
    const dest = this.out(opts.pan || 0, opts.vol ?? 1, opts.bus || this.sfx);
    this.tone(f, 0.5, { peak: 0.3, dest, delay: opts.delay });
    this.tone(f * 4.0, 0.08, { peak: 0.06, dest, delay: opts.delay });
  }
  noiseHit(dur, type, freq, opts = {}) {
    const c = this.ctx, t = c.currentTime + (opts.delay || 0);
    const src = c.createBufferSource(); src.buffer = this.noise;
    const f = c.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = opts.q || 1;
    if (opts.to) f.frequency.exponentialRampToValueAtTime(opts.to, t + dur);
    const g = c.createGain();
    this.env(g, t, opts.a || 0.005, opts.peak || 0.3, dur);
    src.connect(f); f.connect(g); g.connect(this.out(opts.pan, opts.vol ?? 1, opts.bus));
    src.start(t, Math.random() * 1.5); src.stop(t + dur + (opts.a || 0.005) + 0.05);
  }
  pluck(freq, opts = {}) {
    // カープラス・ストロング風の弦
    const c = this.ctx, sr = c.sampleRate;
    const dur = opts.dur || 1.4;
    const n = Math.floor(sr * dur);
    const b = c.createBuffer(1, n, sr);
    const d = b.getChannelData(0);
    const period = Math.max(2, Math.floor(sr / freq));
    const buf = new Float32Array(period);
    for (let i = 0; i < period; i++) buf[i] = Math.random() * 2 - 1;
    let idx = 0;
    const damp = opts.damp || 0.996;
    for (let i = 0; i < n; i++) {
      const nx = (idx + 1) % period;
      const v = (buf[idx] + buf[nx]) * 0.5 * damp;
      d[i] = buf[idx];
      buf[idx] = v;
      idx = nx;
    }
    const s = c.createBufferSource(); s.buffer = b;
    const g = c.createGain(); g.gain.value = opts.peak || 0.35;
    s.connect(g); g.connect(this.out(opts.pan, opts.vol ?? 1));
    s.start(c.currentTime + (opts.delay || 0));
  }

  // ---- 名前付きの効果音 ----
  play(name, o = {}) {
    if (!this.ready || !this.ctx || this.ctx.state !== 'running') return;
    const pan = o.pan || 0, vol = o.vol ?? 1;
    const r = Math.random;
    switch (name) {
      case 'pick': this.tone(520 + r() * 60, 0.12, { to: 780, glide: 0.08, peak: 0.18, pan, vol }); break;
      case 'seedTap':
        this.tone(900 + r() * 200, 0.06, { type: 'triangle', peak: 0.2 * vol, pan });
        this.noiseHit(0.05, 'bandpass', 2500, { peak: 0.12 * vol, pan }); break;
      case 'plop':
        this.tone(420, 0.35, { to: 140, glide: 0.25, peak: 0.3, pan });
        this.bell(72, 1.2, { pan, delay: 0.15, vol: 0.5 }); break;
      case 'soil': this.noiseHit(0.18 + r() * 0.1, 'bandpass', 600 + r() * 600, { peak: 0.3 * vol, q: 0.8, pan }); break;
      case 'pat':
        this.tone(140, 0.12, { to: 70, peak: 0.35 * vol, pan });
        this.noiseHit(0.12, 'lowpass', 900, { peak: 0.2 * vol, pan }); break;
      case 'canLift': [1320, 1870, 2650].forEach((f, i) => this.tone(f * (0.98 + r() * 0.04), 0.4 - i * 0.1, { peak: 0.05, pan })); break;
      case 'canTip': this.noiseHit(0.5, 'bandpass', 1400, { to: 3200, peak: 0.15, a: 0.1, pan }); break;
      case 'drip': this.tone(1400 + r() * 900, 0.08, { to: 700, glide: 0.06, peak: 0.08 * vol, pan }); break;
      case 'sprout':
        this.tone(300, 0.2, { to: 900, glide: 0.15, peak: 0.2, pan });
        [79, 84, 88].forEach((m, i) => this.bell(m, 1.4, { pan, delay: 0.12 + i * 0.09, vol: 0.5 })); break;
      case 'grow': {
        const n = o.note ?? 0;
        this.noiseHit(1.0, 'bandpass', 300, { to: 1600, a: 0.3, peak: 0.12, q: 2, pan });
        this.tone(midiHz(scaleNote(60, n)), 0.9, { type: 'triangle', peak: 0.12, a: 0.05, pan });
        this.bell(scaleNote(72, n + 2), 1.2, { pan, delay: 0.25, vol: 0.5 });
        break;
      }
      case 'leaf': this.noiseHit(0.5, 'bandpass', 1800, { to: 600, a: 0.08, peak: 0.26 * vol, q: 1.5, pan }); break;
      case 'budSwell':
        this.tone(65, 2.2, { to: 98, peak: 0.35, a: 0.6, pan });
        this.noiseHit(2.0, 'lowpass', 300, { to: 1200, a: 0.8, peak: 0.15, pan });
        [60, 64, 67, 72].forEach((m, i) => this.bell(m + 12, 2.0, { delay: 1.0 + i * 0.18, vol: 0.4, pan }));
        break;
      case 'petal': {
        const m = scaleNote(60, o.note ?? Math.floor(r() * 8));
        this.noiseHit(0.5, 'lowpass', 700, { to: 1600, a: 0.12, peak: 0.12 * vol, pan });
        this.tone(midiHz(m), 1.1, { type: 'sine', a: 0.08, peak: 0.12 * vol, pan });
        this.tone(midiHz(m + 12), 0.6, { type: 'sine', a: 0.08, peak: 0.03 * vol, pan });
        break;
      }
      case 'stroke': this.noiseHit(0.25, 'bandpass', 900 + (o.pitch || 0) * 1200, { peak: 0.06 * vol, a: 0.05, q: 1.2, pan }); break;
      case 'stamen': {
        const f = 180 + r() * 80;
        const dest = this.out(pan, vol);
        const c = this.ctx, t = c.currentTime;
        const osc = c.createOscillator(); osc.type = 'sine';
        osc.frequency.setValueAtTime(f * 1.6, t);
        osc.frequency.exponentialRampToValueAtTime(f, t + 0.08);
        const lfo = c.createOscillator(); lfo.frequency.value = 9; const lg = c.createGain(); lg.gain.value = f * 0.08;
        lfo.connect(lg); lg.connect(osc.frequency);
        const g = c.createGain(); this.env(g, t, 0.005, 0.28, 0.6);
        osc.connect(g); g.connect(dest); osc.start(t); lfo.start(t); osc.stop(t + 0.7); lfo.stop(t + 0.7);
        break;
      }
      case 'pollen': for (let i = 0; i < 5; i++) this.bell(scaleNote(84, Math.floor(r() * 7)), 0.9, { delay: i * 0.05 + r() * 0.05, pan: pan + (r() - 0.5) * 0.6, vol: 0.28 }); break;
      case 'sneeze':
        this.tone(700, 0.25, { to: 1100, a: 0.2, peak: 0.08, type: 'triangle', pan });
        this.noiseHit(0.25, 'highpass', 2500, { delay: 0.45, peak: 0.8, pan }); this.noiseHit(0.2, 'bandpass', 1200, { delay: 0.45, peak: 0.4, pan }); break;
      case 'nectar': this.tone(220 + (o.pitch || 0) * 300, 0.25, { to: 160 + (o.pitch || 0) * 500, peak: 0.12 * vol, type: 'sine', pan }); break;
      case 'snap': this.tone(900, 0.05, { to: 300, peak: 0.25, pan }); this.tone(330, 0.3, { to: 520, peak: 0.12, pan, delay: 0.03 }); break;
      case 'drop': this.tone(1100 + r() * 400, 0.12, { to: 600, peak: 0.12 * vol, pan }); break;
      case 'merge': this.tone(500, 0.2, { to: 300, peak: 0.15, pan }); this.tone(1200, 0.15, { to: 1500, peak: 0.06, pan, delay: 0.05 }); break;
      case 'gulp':
        this.tone(380, 0.18, { to: 120, peak: 0.35, pan });
        this.tone(240, 0.2, { to: 90, peak: 0.25, pan, delay: 0.16 }); break;
      case 'spurt': {
        const n = o.note ?? 0;
        this.noiseHit(2.2, 'bandpass', 200, { to: 2500, a: 0.6, peak: 0.2, q: 1.2, pan });
        this.tone(55, 2.2, { to: 82, a: 0.4, peak: 0.25, pan });
        for (let i = 0; i < 6; i++) this.bell(scaleNote(67, n * 2 + i), 1.1, { delay: 0.2 + i * 0.16, vol: 0.45, pan: (i % 2 ? 0.3 : -0.3) });
        break;
      }
      case 'creak': this.noiseHit(0.6, 'bandpass', 220, { to: 380, q: 6, peak: 0.25 * vol, a: 0.1, pan }); break;
      case 'push': this.noiseHit(0.4, 'lowpass', 500, { to: 1500, a: 0.05, peak: 0.42, pan }); this.tone(180, 0.25, { to: 140, peak: 0.12, pan }); break;
      case 'petalOpen': {
        this.noiseHit(1.6, 'bandpass', 500, { to: 4000, a: 0.3, peak: 0.25, q: 0.7, pan });
        const base = o.chord ?? 60;
        [0, 4, 7, 12].forEach((iv, i) => this.bell(base + iv + 12, 2.2, { delay: 0.2 + i * 0.07, vol: 0.5, pan: pan + (i - 1.5) * 0.2 }));
        break;
      }
      case 'vine': this.pluck(110 + (o.tension || 0.5) * 220, { peak: 0.4, pan, damp: 0.994 }); break;
      case 'vineRelease':
        this.pluck(330, { peak: 0.5, pan, damp: 0.998, dur: 2 });
        this.noiseHit(1.2, 'bandpass', 800, { to: 5000, a: 0.05, peak: 0.25, pan }); break;
      case 'bloom': {
        this.noiseHit(3.5, 'lowpass', 400, { to: 8000, a: 0.8, peak: 0.25 });
        [48, 55, 60, 64, 67, 72, 76, 79, 84].forEach((m, i) => this.bell(m + 5, 3.5, { delay: 0.15 + i * 0.11, vol: 0.55, pan: (i % 3 - 1) * 0.5 }));
        this.tone(midiHz(41), 4, { a: 0.5, peak: 0.3, type: 'triangle' });
        break;
      }
      case 'wobble': {
        const c = this.ctx, t = c.currentTime;
        const osc = c.createOscillator(); osc.type = 'sine';
        osc.frequency.setValueAtTime(320 + (o.pitch || 0) * 200, t);
        const lfo = c.createOscillator(); lfo.frequency.value = 7; const lg = c.createGain(); lg.gain.value = 40;
        lfo.connect(lg); lg.connect(osc.frequency);
        const g = c.createGain(); this.env(g, t, 0.01, 0.16 * vol, 0.7);
        osc.connect(g); g.connect(this.out(pan)); osc.start(t); lfo.start(t); osc.stop(t + 0.8); lfo.stop(t + 0.8);
        break;
      }
      case 'stretch': this.tone(600 + (o.pitch || 0) * 600, 0.3, { to: 300, peak: 0.08, pan }); break;
      case 'fall': this.tone(1800, o.dur || 3.0, { to: 300, glide: o.dur || 3.0, peak: 0.1, a: 0.05, pan, type: 'sine' }); break;
      case 'farPlip':
        this.tone(1600, 0.12, { to: 900, peak: 0.08, pan });
        this.bell(91, 1.5, { vol: 0.25, pan }); break;
      case 'leafBoing': {
        const n = o.note ?? 0;
        this.marimba(scaleNote(72, 9 - n), { pan, vol: 0.9 });
        this.noiseHit(0.25, 'bandpass', 1500, { peak: 0.08, pan });
        break;
      }
      case 'land':
        this.tone(160, 0.3, { to: 70, peak: 0.4, pan });
        this.noiseHit(0.5, 'lowpass', 1200, { peak: 0.25, pan });
        [72, 76, 79, 84].forEach((m, i) => this.bell(m, 1.4, { delay: 0.25 + i * 0.1, vol: 0.5 })); break;
      case 'giggle': {
        // 小さな笑い声 (フォルマント)
        const c = this.ctx;
        for (let i = 0; i < 4; i++) {
          const t = c.currentTime + i * 0.13 + (o.delay || 0);
          const src = c.createOscillator(); src.type = 'sawtooth';
          src.frequency.setValueAtTime(520 + i * 25 + r() * 30, t);
          src.frequency.exponentialRampToValueAtTime(420, t + 0.1);
          const f1 = c.createBiquadFilter(); f1.type = 'bandpass'; f1.frequency.value = 380; f1.Q.value = 6;
          const f2 = c.createBiquadFilter(); f2.type = 'bandpass'; f2.frequency.value = 2600; f2.Q.value = 8;
          const g = c.createGain(); this.env(g, t, 0.01, 0.6 * vol, 0.09);
          const dest = this.out(pan);
          src.connect(f1); src.connect(f2); f1.connect(g); f2.connect(g); g.connect(dest);
          src.start(t); src.stop(t + 0.14);
        }
        break;
      }
      case 'wow': {
        const c = this.ctx, t = c.currentTime + (o.delay || 0);
        const src = c.createOscillator(); src.type = 'sawtooth';
        src.frequency.setValueAtTime(380, t); src.frequency.linearRampToValueAtTime(520, t + 0.25); src.frequency.linearRampToValueAtTime(400, t + 0.6);
        const f1 = c.createBiquadFilter(); f1.type = 'bandpass'; f1.Q.value = 5; f1.frequency.setValueAtTime(400, t); f1.frequency.linearRampToValueAtTime(800, t + 0.4);
        const f2 = c.createBiquadFilter(); f2.type = 'bandpass'; f2.Q.value = 7; f2.frequency.setValueAtTime(800, t); f2.frequency.linearRampToValueAtTime(1200, t + 0.4);
        const g = c.createGain(); this.env(g, t, 0.06, 0.4 * vol, 0.6);
        src.connect(f1); src.connect(f2); f1.connect(g); f2.connect(g); g.connect(this.out(pan));
        src.start(t); src.stop(t + 0.75);
        break;
      }
      case 'tapGrass': this.noiseHit(0.22, 'bandpass', 3000 + r() * 1500, { peak: 0.18, pan, q: 1.5 }); break;
      case 'tapSky': this.bell(scaleNote(84, Math.floor(r() * 5)), 1.2, { pan, vol: 0.3 }); this.noiseHit(0.6, 'bandpass', 1200, { to: 3000, a: 0.15, peak: 0.05, pan }); break;
      case 'tapWater': this.tone(800 + r() * 400, 0.1, { to: 1500, peak: 0.12, pan }); break;
      case 'tapWood': this.tone(600 + r() * 200, 0.05, { type: 'triangle', peak: 0.2, pan }); break;
      case 'swing': this.noiseHit(0.5, 'bandpass', 500, { to: 1100, a: 0.15, peak: 0.08, pan }); this.tone(330, 0.3, { to: 300, peak: 0.04, pan }); break;
      case 'cat': this.tone(700, 0.35, { to: 520, glide: 0.3, peak: 0.12, type: 'triangle', pan }); break;
      case 'bird': this.chirp(pan, vol); break;
      case 'flap': for (let i = 0; i < 4; i++) this.noiseHit(0.06, 'bandpass', 1200, { peak: 0.22, pan, delay: i * 0.07 }); break;
      default: break;
    }
  }

  chirp(pan = 0, vol = 1) {
    const c = this.ctx;
    const n = 2 + Math.floor(Math.random() * 4);
    const base = 2600 + Math.random() * 1400;
    for (let i = 0; i < n; i++) {
      const t = c.currentTime + i * (0.07 + Math.random() * 0.05);
      const o = c.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(base * (1 + Math.random() * 0.2), t);
      o.frequency.exponentialRampToValueAtTime(base * (1.3 + Math.random() * 0.4), t + 0.05);
      const g = c.createGain(); this.env(g, t, 0.005, 0.05 * vol, 0.06);
      o.connect(g); g.connect(this.out(pan, 1, this.amb)); o.start(t); o.stop(t + 0.1);
    }
  }

  // ---- 毎フレーム: 場面に応じて音場を変える ----
  update(dt, s) {
    if (!this.ready || !this.ctx) return;
    const c = this.ctx, t = c.currentTime;
    // こもり具合: つぼみの中 (閉じている) ほど低域だけ
    const cutoff = 600 + (1 - s.muffle) * 17000;
    this.lp.frequency.setTargetAtTime(cutoff, t, 0.25);
    this.verbGain.gain.setTargetAtTime(0.18 + s.muffle * 0.15 + s.space * 0.15, t, 0.5);
    // 風: 高度とともに強く、左右に広がる
    const wv = 0.03 + s.wind * 0.22;
    this.wind.g.gain.setTargetAtTime(wv, t, 0.6);
    this.wind.f.frequency.setTargetAtTime(300 + s.wind * 700 + Math.sin(this.G.time * 0.4) * 150, t, 0.5);
    this.wind.p.pan.setTargetAtTime(Math.sin(this.G.time * 0.23) * 0.6 * s.space, t, 0.5);
    this.windHi.g.gain.setTargetAtTime(s.wind * 0.06 * (0.5 + 0.5 * Math.sin(this.G.time * 0.7)), t, 0.4);
    this.windHi.p.pan.setTargetAtTime(-Math.sin(this.G.time * 0.31) * 0.7 * s.space, t, 0.5);
    // 注ぐ水・すべり
    this.pourLoop.g.gain.setTargetAtTime(s.pour * 0.16, t, 0.08);
    this.pourLoop.f.frequency.setTargetAtTime(2200 + s.pour * 1200, t, 0.2);
    this.slideLoop.g.gain.setTargetAtTime(s.slide * 0.3, t, 0.08);
    this.slideLoop.f.frequency.setTargetAtTime(500 + s.slide * 1500, t, 0.1);
    // 内側の和音
    this.pad.out.gain.setTargetAtTime(s.pad * 0.5, t, 1.2);
    this.pad.f.frequency.setTargetAtTime(500 + (1 - s.muffle) * 2500, t, 0.8);
    // 鳥 (地上の庭では近く、上空では遠く小さく)
    this.birdT -= dt;
    if (this.birdT < 0) {
      this.birdT = 1.5 + Math.random() * 4;
      if (s.birds > 0) this.chirp((Math.random() - 0.5) * 1.6, s.birds);
    }
    // 音楽
    this.music.gain.setTargetAtTime(s.musicVol ?? 0.32, t, 1.0);
    this.sequencer(dt, s);
  }

  sequencer(dt, s) {
    const bpm = s.tempo || 68;
    const spb = 60 / bpm / 2;
    this.musicT += dt;
    if (this.musicT < spb) return;
    this.musicT -= spb;
    this.step++;
    const st = this.step;
    const prog = [[53, 60, 64, 69], [50, 57, 62, 65], [55, 59, 62, 67], [48, 55, 60, 64]];
    const bar = Math.floor(st / 8) % 4;
    if (st % 8 === 0) this.setPadChord(prog[bar]);
    const mode = s.music;
    const root = prog[bar][0];
    const rnd = Math.random();
    const bus = this.music;
    if (mode === 'garden') {
      if (st % 2 === 0 && rnd < 0.55) this.bell(scaleNote(72, Math.floor(Math.random() * 6) + (bar % 2)), 1.6, { bus, vol: 0.45, pan: (Math.random() - 0.5) * 0.6 });
      if (st % 8 === 0) this.tone(midiHz(root - 12), 2.0, { a: 0.1, peak: 0.18, bus, type: 'triangle' });
    } else if (mode === 'inside') {
      if (st % 4 === 0) this.tone(midiHz(root - 12), 1.4, { a: 0.15, peak: 0.22, bus, type: 'sine' });
      if (st % 2 === 1 && rnd < 0.35) this.bell(scaleNote(67, Math.floor(Math.random() * 6)), 2.0, { bus, vol: 0.3 });
    } else if (mode === 'sky') {
      if (rnd < 0.4) this.bell(scaleNote(79, Math.floor(Math.random() * 8)), 2.4, { bus, vol: 0.35, pan: (Math.random() - 0.5) * 1.4 });
      if (st % 8 === 0) { this.tone(midiHz(root - 12), 3.0, { a: 0.4, peak: 0.16, bus, type: 'triangle' }); }
    } else if (mode === 'slide') {
      if (st % 1 === 0 && rnd < 0.7) this.marimba(scaleNote(72, (8 - (st % 8))), { bus, vol: 0.4 });
    }
  }
}
