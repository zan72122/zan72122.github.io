// Every sound in the store is synthesised here. No samples.
// The scanner is a one-key instrument: each beep plays the next note of a song,
// so the child's own timing becomes the music's tempo.

const A4 = 440;
const mtof = (m) => A4 * Math.pow(2, (m - 69) / 12);

// "Shopping song": two 16-note phrases, scale degrees in C (C6 = 84).
const MELODY = [84, 88, 91, 88, 93, 91, 88, 86, 84, 88, 91, 93, 91, 88, 86, 84, 88, 91, 93, 96, 93, 91, 88, 91, 93, 91, 88, 86, 88, 86, 84, 84];
// one chord per 4 notes: [bass root, triad]
const CHORDS = [
  [36, [60, 64, 67]],
  [41, [60, 65, 69]],
  [36, [60, 64, 67]],
  [43, [59, 62, 67]],
  [36, [60, 64, 67]],
  [41, [60, 65, 69]],
  [43, [59, 62, 65]],
  [36, [60, 64, 67]],
];

export class Audio {
  constructor() {
    this.ctx = null;
    this.ready = false;
    this.noteIndex = 0;
    this.lastScanT = -10;
    this.scanRate = 0; // smoothed scans per second
    this.motor = null;
    this.printerLoop = null;
    this.muted = false;
  }

  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC({ latencyHint: 'interactive' });
      this.build();
    }
    if (this.ctx.state !== 'running') this.ctx.resume();
    // iOS: a silent buffer kicks the output path awake
    try {
      const b = this.ctx.createBuffer(1, 1, 22050);
      const s = this.ctx.createBufferSource();
      s.buffer = b;
      s.connect(this.ctx.destination);
      s.start(0);
    } catch {
      /* ignore */
    }
  }

  get t() {
    return this.ctx ? this.ctx.currentTime : 0;
  }

  build() {
    const c = this.ctx;
    this.master = c.createGain();
    this.master.gain.value = 1.1;
    this.comp = c.createDynamicsCompressor();
    this.comp.threshold.value = -14;
    this.comp.knee.value = 10;
    this.comp.ratio.value = 4;
    this.comp.attack.value = 0.004;
    this.comp.release.value = 0.2;
    this.master.connect(this.comp);
    this.comp.connect(c.destination);

    // store reverb
    this.verb = c.createConvolver();
    this.verb.buffer = this.makeIR(2.2, 2.6, 0.18);
    this.verbIn = c.createGain();
    this.verbIn.gain.value = 1;
    this.verbOut = c.createGain();
    this.verbOut.gain.value = 0.55;
    this.verbIn.connect(this.verb);
    this.verb.connect(this.verbOut);
    this.verbOut.connect(this.master);

    // the big hall for the PA
    this.hall = c.createConvolver();
    this.hall.buffer = this.makeIR(4.2, 3.2, 0.3);
    this.hallOut = c.createGain();
    this.hallOut.gain.value = 0.8;
    this.hall.connect(this.hallOut);
    this.hallOut.connect(this.master);

    // buses
    this.sfx = c.createGain();
    this.sfx.gain.value = 0.9;
    this.sfx.connect(this.master);
    this.music = c.createGain();
    this.music.gain.value = 0.55;
    this.music.connect(this.master);
    this.musicVerb = c.createGain();
    this.musicVerb.gain.value = 0.35;
    this.music.connect(this.musicVerb);
    this.musicVerb.connect(this.verbIn);

    // noise buffer
    const len = c.sampleRate * 2;
    this.noise = c.createBuffer(1, len, c.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.ready = true;
    this.startAmbience();
  }

  makeIR(seconds, decay, predelay) {
    const c = this.ctx;
    const rate = c.sampleRate;
    const n = Math.floor(rate * seconds);
    const ir = c.createBuffer(2, n, rate);
    for (let ch = 0; ch < 2; ch++) {
      const d = ir.getChannelData(ch);
      let lp = 0;
      for (let i = 0; i < n; i++) {
        const t = i / rate;
        const env = t < predelay * 0.1 ? 0 : Math.pow(1 - t / seconds, decay);
        const k = 0.08 + 0.85 * (1 - t / seconds); // darker as it decays
        lp += (Math.random() * 2 - 1 - lp) * k;
        d[i] = lp * env;
      }
      // a few early reflections off shelves
      for (let r = 0; r < 8; r++) {
        const at = Math.floor(rate * (0.012 + r * 0.017 + Math.random() * 0.01));
        if (at < n) d[at] += (Math.random() > 0.5 ? 1 : -1) * (0.5 - r * 0.05);
      }
    }
    return ir;
  }

  // --- small building blocks ---
  out(node, { pan = 0, verb = 0.15, bus } = {}) {
    const c = this.ctx;
    let last = node;
    if (pan && c.createStereoPanner) {
      const p = c.createStereoPanner();
      p.pan.value = Math.max(-1, Math.min(1, pan));
      last.connect(p);
      last = p;
    }
    last.connect(bus || this.sfx);
    if (verb > 0) {
      const s = c.createGain();
      s.gain.value = verb;
      last.connect(s);
      s.connect(this.verbIn);
    }
    return last;
  }

  tone(type, freq, t0, dur, { gain = 0.2, attack = 0.004, release = 0.05, pan = 0, verb = 0.15, bus, detune = 0, glide = 0, filter = 0 } = {}) {
    const c = this.ctx;
    if (!this.ready) return null;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    if (glide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq * glide), t0 + dur);
    if (detune) o.detune.value = detune;
    const g = c.createGain();
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + attack);
    g.gain.setValueAtTime(gain, t0 + Math.max(attack, dur - release));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur + release);
    let src = o;
    if (filter) {
      const f = c.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = filter;
      o.connect(f);
      src = f;
    }
    src.connect(g);
    this.out(g, { pan, verb, bus });
    o.start(t0);
    o.stop(t0 + dur + release + 0.05);
    return o;
  }

  noiseBurst(t0, dur, { gain = 0.3, type = 'bandpass', freq = 1000, q = 1, attack = 0.002, pan = 0, verb = 0.15, sweep = 0, bus, decay = true } = {}) {
    const c = this.ctx;
    if (!this.ready) return;
    const s = c.createBufferSource();
    s.buffer = this.noise;
    s.loop = true;
    const f = c.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t0);
    if (sweep) f.frequency.exponentialRampToValueAtTime(Math.max(40, freq * sweep), t0 + dur);
    f.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + attack);
    if (decay) g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    else {
      g.gain.setValueAtTime(gain, t0 + dur * 0.8);
      g.gain.linearRampToValueAtTime(0, t0 + dur);
    }
    s.connect(f);
    f.connect(g);
    this.out(g, { pan, verb, bus });
    s.start(t0, Math.random() * 1.5);
    s.stop(t0 + dur + 0.05);
  }

  // ---------- ambience ----------
  startAmbience() {
    const c = this.ctx;
    const t = c.currentTime;
    // fridge + fluorescent hum
    this.amb = c.createGain();
    this.amb.gain.value = 0;
    this.amb.gain.linearRampToValueAtTime(0.06, t + 3);
    this.amb.connect(this.master);
    for (const [f, g] of [
      [60, 0.5],
      [120, 0.35],
      [180, 0.08],
      [240, 0.05],
    ]) {
      const o = c.createOscillator();
      o.frequency.value = f;
      const gg = c.createGain();
      gg.gain.value = g * 0.4;
      o.connect(gg);
      gg.connect(this.amb);
      o.start();
    }
    const n = c.createBufferSource();
    n.buffer = this.noise;
    n.loop = true;
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 380;
    const ng = c.createGain();
    ng.gain.value = 0.9;
    n.connect(lp);
    lp.connect(ng);
    ng.connect(this.amb);
    n.start();
    // the hum of the lights grows as more of the store wakes up
    this.lightHum = c.createGain();
    this.lightHum.gain.value = 0.0;
    const o2 = c.createOscillator();
    o2.type = 'sawtooth';
    o2.frequency.value = 120;
    const bp = c.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 240;
    bp.Q.value = 6;
    o2.connect(bp);
    bp.connect(this.lightHum);
    this.lightHum.connect(this.master);
    o2.start();
  }

  setLightHum(level) {
    if (!this.ready) return;
    this.lightHum.gain.setTargetAtTime(0.004 + level * 0.018, this.t, 0.5);
  }

  // ---------- the scanner instrument ----------

  // Returns the melody note index used, so the receipt can play it back later.
  scanBeep({ special = 0, pan = 0 } = {}) {
    if (!this.ready) return 0;
    const c = this.ctx;
    const t = c.currentTime + 0.005;
    const i = this.noteIndex % MELODY.length;
    this.noteIndex++;
    const m = MELODY[i];
    const dtScan = t - this.lastScanT;
    this.lastScanT = t;
    this.scanRate = this.scanRate * 0.6 + (1 / Math.max(0.12, dtScan)) * 0.4;
    this.playBeepNote(m, t, special, pan);
    this.accompany(i, t, dtScan, special);
    return i;
  }

  playBeepNote(m, t, special = 0, pan = 0) {
    const f = mtof(m);
    // the classic square "pi", softened, with a sine body an octave down
    this.tone('square', f, t, 0.075, { gain: 0.07, attack: 0.002, release: 0.03, pan, verb: 0.12, filter: 5200 });
    this.tone('sine', f, t, 0.09, { gain: 0.16, attack: 0.002, release: 0.05, pan, verb: 0.2 });
    this.tone('sine', f / 2, t, 0.08, { gain: 0.06, attack: 0.002, release: 0.08, pan, verb: 0.1 });
    if (special) {
      // bigger moments: a shimmering fifth above and a soft bell
      this.tone('sine', f * 1.5, t + 0.07, 0.25, { gain: 0.07, release: 0.3, verb: 0.5 });
      this.tone('triangle', f * 2, t + 0.12, 0.35, { gain: 0.04, release: 0.4, verb: 0.6 });
    }
  }

  accompany(i, t, dtScan, special) {
    const chord = CHORDS[Math.floor(i / 4) % CHORDS.length];
    const beat = i % 4;
    const fast = dtScan < 0.55;
    if (beat === 0 || special) {
      // bass + warm pad on each chord change
      const root = mtof(chord[0]);
      this.tone('triangle', root, t, 0.5, { gain: 0.22, release: 0.5, verb: 0.05, bus: this.music });
      this.tone('sine', root * 2, t, 0.4, { gain: 0.1, release: 0.4, verb: 0.05, bus: this.music });
      for (const n of chord[1]) {
        this.tone('sawtooth', mtof(n), t, 1.4, { gain: 0.018, attack: 0.12, release: 1.2, filter: 1400, detune: (Math.random() - 0.5) * 14, bus: this.music, verb: 0.6 });
      }
    } else if (beat === 2) {
      this.tone('triangle', mtof(chord[0] + 7), t, 0.3, { gain: 0.12, release: 0.3, verb: 0.05, bus: this.music });
    }
    if (fast) {
      // the groove only arrives when the child gets bold
      this.noiseBurst(t, 0.05, { gain: 0.05, type: 'highpass', freq: 7000, verb: 0.05, bus: this.music });
      if (beat === 0 || beat === 2) this.kick(t, 0.5);
      if (beat === 1 || beat === 3) this.noiseBurst(t, 0.12, { gain: 0.06, type: 'bandpass', freq: 1800, q: 0.7, verb: 0.2, bus: this.music });
    }
  }

  kick(t, g = 0.5) {
    this.tone('sine', 120, t, 0.18, { gain: g * 0.6, attack: 0.002, release: 0.1, glide: 0.35, verb: 0.02, bus: this.music });
  }

  // replay a stored melody note as a music-box tine (receipt playback)
  musicBox(noteIndex, { gain = 1, pan = 0, chord = false } = {}) {
    if (!this.ready) return;
    const t = this.t + 0.005;
    const m = MELODY[((noteIndex % MELODY.length) + MELODY.length) % MELODY.length];
    const f = mtof(m - 12);
    this.tone('sine', f, t, 0.5, { gain: 0.12 * gain, attack: 0.002, release: 0.6, pan, verb: 0.55 });
    this.tone('sine', f * 4.02, t, 0.08, { gain: 0.03 * gain, attack: 0.001, release: 0.15, pan, verb: 0.4 });
    this.tone('square', mtof(m), t, 0.05, { gain: 0.02 * gain, attack: 0.002, release: 0.03, pan, verb: 0.3, filter: 4000 });
    if (chord) {
      const ch = CHORDS[Math.floor(noteIndex / 4) % CHORDS.length];
      this.tone('triangle', mtof(ch[0]), t, 0.6, { gain: 0.16, release: 0.6, bus: this.music, verb: 0.1 });
      for (const n of ch[1]) this.tone('sawtooth', mtof(n), t, 1.6, { gain: 0.014, attack: 0.15, release: 1.4, filter: 1600, bus: this.music, verb: 0.7 });
    }
  }

  keyBeep(k) {
    if (!this.ready) return;
    const scale = [72, 74, 76, 79, 81, 84, 86, 88, 91, 93, 96, 98, 100, 103, 105, 108];
    const m = scale[k % scale.length];
    const t = this.t + 0.003;
    this.tone('square', mtof(m + 12), t, 0.05, { gain: 0.05, release: 0.03, filter: 4500, verb: 0.1 });
    this.tone('sine', mtof(m + 12), t, 0.06, { gain: 0.1, release: 0.04, verb: 0.15 });
    this.click(0.4);
  }

  error() {
    if (!this.ready) return;
    const t = this.t + 0.005;
    // "bu-buu": low, round, not scary
    this.tone('square', 196, t, 0.11, { gain: 0.07, filter: 900, release: 0.03 });
    this.tone('square', 175, t + 0.15, 0.22, { gain: 0.07, filter: 800, release: 0.06 });
    this.tone('sine', 98, t, 0.4, { gain: 0.12, release: 0.08 });
  }

  click(g = 1) {
    if (!this.ready) return;
    const t = this.t + 0.002;
    this.noiseBurst(t, 0.025, { gain: 0.25 * g, type: 'highpass', freq: 3000, verb: 0.05 });
    this.tone('sine', 1800, t, 0.012, { gain: 0.05 * g, release: 0.01, verb: 0 });
  }

  bigButton(down) {
    if (!this.ready) return;
    const t = this.t + 0.002;
    this.noiseBurst(t, 0.05, { gain: 0.3, type: 'bandpass', freq: down ? 1400 : 2200, q: 2, verb: 0.08 });
    this.tone('sine', down ? 180 : 240, t, 0.04, { gain: 0.15, release: 0.03, verb: 0 });
  }

  // landing sounds by package type
  thud(kind, strength = 1, pan = 0) {
    if (!this.ready) return;
    const t = this.t + 0.002;
    const s = Math.min(1.2, strength);
    switch (kind) {
      case 'fruit':
        this.tone('sine', 140 + Math.random() * 40, t, 0.07, { gain: 0.22 * s, release: 0.05, glide: 0.6, pan, verb: 0.1 });
        this.noiseBurst(t, 0.04, { gain: 0.08 * s, freq: 700, pan });
        break;
      case 'can':
        this.tone('triangle', 900 + Math.random() * 300, t, 0.12, { gain: 0.08 * s, release: 0.2, pan, verb: 0.2 });
        this.tone('sine', 2300 + Math.random() * 400, t, 0.08, { gain: 0.04 * s, release: 0.15, pan, verb: 0.2 });
        this.noiseBurst(t, 0.03, { gain: 0.1 * s, type: 'highpass', freq: 2000, pan });
        break;
      case 'bottle':
        this.tone('sine', 420 + Math.random() * 80, t, 0.09, { gain: 0.15 * s, release: 0.08, glide: 0.8, pan, verb: 0.15 });
        this.noiseBurst(t, 0.04, { gain: 0.1 * s, freq: 1200, pan });
        break;
      case 'bag':
        this.noiseBurst(t, 0.09, { gain: 0.14 * s, type: 'highpass', freq: 2500, pan, verb: 0.05 });
        this.noiseBurst(t + 0.03, 0.05, { gain: 0.08 * s, type: 'highpass', freq: 4000, pan });
        break;
      case 'giant':
        this.tone('sine', 55, t, 0.6, { gain: 0.7 * s, release: 0.5, glide: 0.5, pan, verb: 0.3 });
        this.tone('sine', 90, t, 0.3, { gain: 0.4 * s, release: 0.3, glide: 0.6, pan, verb: 0.3 });
        this.noiseBurst(t, 0.3, { gain: 0.4 * s, type: 'lowpass', freq: 400, pan, verb: 0.4 });
        this.noiseBurst(t + 0.02, 0.2, { gain: 0.15 * s, type: 'bandpass', freq: 2500, pan, verb: 0.3 });
        break;
      case 'soft':
        this.tone('sine', 110 + Math.random() * 40, t, 0.06, { gain: 0.15 * s, release: 0.05, glide: 0.7, pan, verb: 0.05 });
        this.noiseBurst(t, 0.05, { gain: 0.07 * s, freq: 500, pan });
        break;
      default:
        // boxes, cartons, cups: hollow cardboard knock
        this.tone('sine', 180 + Math.random() * 90, t, 0.06, { gain: 0.2 * s, release: 0.05, glide: 0.7, pan, verb: 0.08 });
        this.noiseBurst(t, 0.05, { gain: 0.1 * s, freq: 900, q: 1.5, pan });
    }
  }

  crinkle(strength = 1) {
    if (!this.ready) return;
    const t = this.t;
    const n = 3 + Math.floor(Math.random() * 4);
    for (let i = 0; i < n; i++) {
      this.noiseBurst(t + i * 0.025 + Math.random() * 0.02, 0.03 + Math.random() * 0.04, { gain: (0.06 + Math.random() * 0.08) * strength, type: 'highpass', freq: 2500 + Math.random() * 4000, verb: 0.05 });
    }
  }

  step(g = 1) {
    if (!this.ready) return;
    const t = this.t + 0.002;
    this.tone('sine', 90, t, 0.12, { gain: 0.35 * g, release: 0.1, glide: 0.6, verb: 0.15 });
    this.noiseBurst(t, 0.06, { gain: 0.2 * g, freq: 500, q: 1, verb: 0.15 });
    this.tone('triangle', 420, t, 0.05, { gain: 0.06 * g, release: 0.06, verb: 0.1 });
  }

  hop() {
    if (!this.ready) return;
    const t = this.t;
    this.noiseBurst(t, 0.18, { gain: 0.05, type: 'bandpass', freq: 600, sweep: 2.5, q: 1.5, verb: 0.1 });
  }

  whoosh(dur = 0.6, g = 0.12) {
    if (!this.ready) return;
    this.noiseBurst(this.t, dur, { gain: g, type: 'bandpass', freq: 300, sweep: 4, q: 0.8, attack: dur * 0.5, verb: 0.3 });
  }

  jingle() {
    if (!this.ready) return;
    const t = this.t;
    for (let i = 0; i < 5; i++) {
      const f = 3000 + Math.random() * 2500;
      this.tone('sine', f, t + i * 0.035 + Math.random() * 0.02, 0.05, { gain: 0.05, release: 0.18, verb: 0.3 });
    }
  }

  keyTurn() {
    if (!this.ready) return;
    const t = this.t;
    this.noiseBurst(t, 0.04, { gain: 0.25, type: 'bandpass', freq: 2600, q: 3, verb: 0.1 });
    this.noiseBurst(t + 0.09, 0.05, { gain: 0.3, type: 'bandpass', freq: 1800, q: 3, verb: 0.1 });
    this.tone('sine', 900, t + 0.09, 0.03, { gain: 0.08, release: 0.05 });
  }

  boot() {
    if (!this.ready) return;
    const t = this.t + 0.02;
    // relay clunk, a rising power hum, then a little chirp arpeggio
    this.noiseBurst(t, 0.08, { gain: 0.35, type: 'lowpass', freq: 600, verb: 0.2 });
    this.tone('sawtooth', 60, t, 1.4, { gain: 0.05, attack: 0.6, release: 0.6, glide: 2, filter: 500, verb: 0.2 });
    const arp = [72, 76, 79, 84, 88, 91, 96];
    arp.forEach((m, i) => this.tone('square', mtof(m + 12), t + 0.7 + i * 0.07, 0.05, { gain: 0.045, release: 0.04, filter: 6000, verb: 0.3 }));
    this.tone('sine', mtof(96 + 12), t + 1.25, 0.12, { gain: 0.12, release: 0.3, verb: 0.4 });
    this.noiseBurst(t + 1.0, 0.25, { gain: 0.08, type: 'bandpass', freq: 3000, q: 4, verb: 0.1 }); // printer twitch
  }

  // continuous belt motor; speed in m/s (negative ok)
  setMotor(speed, strain = 0) {
    if (!this.ready) return;
    const c = this.ctx;
    if (!this.motor) {
      const o = c.createOscillator();
      o.type = 'sawtooth';
      const o2 = c.createOscillator();
      o2.type = 'square';
      const f = c.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = 400;
      const n = c.createBufferSource();
      n.buffer = this.noise;
      n.loop = true;
      const nf = c.createBiquadFilter();
      nf.type = 'bandpass';
      nf.frequency.value = 900;
      nf.Q.value = 0.8;
      const ng = c.createGain();
      ng.gain.value = 0.4;
      const g = c.createGain();
      g.gain.value = 0;
      const og2 = c.createGain();
      og2.gain.value = 0.3;
      o.connect(f);
      o2.connect(og2);
      og2.connect(f);
      n.connect(nf);
      nf.connect(ng);
      ng.connect(g);
      f.connect(g);
      this.out(g, { verb: 0.1 });
      o.start();
      o2.start();
      n.start();
      this.motor = { o, o2, f, g, nf };
    }
    const m = this.motor;
    const s = Math.abs(speed);
    const t = this.t;
    const base = 38 + s * 70 - strain * 18;
    m.o.frequency.setTargetAtTime(base, t, 0.08);
    m.o2.frequency.setTargetAtTime(base * 2.01, t, 0.08);
    m.f.frequency.setTargetAtTime(220 + s * 900, t, 0.08);
    m.nf.frequency.setTargetAtTime(500 + s * 1400, t, 0.1);
    m.g.gain.setTargetAtTime(s > 0.01 ? 0.05 + Math.min(0.12, s * 0.12) + strain * 0.08 : 0, t, s > 0.01 ? 0.05 : 0.12);
  }

  // thermal printer zzzt; rate 0..1
  setPrinter(rate) {
    if (!this.ready) return;
    const c = this.ctx;
    if (!this.printerLoop) {
      const n = c.createBufferSource();
      n.buffer = this.noise;
      n.loop = true;
      const f = c.createBiquadFilter();
      f.type = 'bandpass';
      f.frequency.value = 3200;
      f.Q.value = 2;
      const am = c.createGain();
      const lfo = c.createOscillator();
      lfo.frequency.value = 60;
      const lfoG = c.createGain();
      lfoG.gain.value = 0.5;
      lfo.connect(lfoG);
      lfoG.connect(am.gain);
      am.gain.value = 0.5;
      const o = c.createOscillator();
      o.type = 'square';
      o.frequency.value = 180;
      const of = c.createBiquadFilter();
      of.type = 'bandpass';
      of.frequency.value = 900;
      const og = c.createGain();
      og.gain.value = 0.15;
      const g = c.createGain();
      g.gain.value = 0;
      n.connect(f);
      f.connect(am);
      am.connect(g);
      o.connect(of);
      of.connect(og);
      og.connect(g);
      this.out(g, { verb: 0.15 });
      n.start();
      lfo.start();
      o.start();
      this.printerLoop = { g, lfo, o, f };
    }
    const p = this.printerLoop;
    const t = this.t;
    p.g.gain.setTargetAtTime(rate > 0.01 ? 0.05 + rate * 0.12 : 0, t, 0.05);
    p.lfo.frequency.setTargetAtTime(30 + rate * 90, t, 0.05);
    p.o.frequency.setTargetAtTime(140 + rate * 260, t, 0.05);
    p.f.frequency.setTargetAtTime(2400 + rate * 2400, t, 0.05);
  }

  drawerOpen() {
    if (!this.ready) return;
    const t = this.t + 0.01;
    // the bell: inharmonic partials, long ring
    for (const [ratio, g] of [
      [1, 0.2],
      [2.76, 0.1],
      [5.4, 0.06],
      [8.93, 0.03],
    ]) {
      this.tone('sine', 1320 * ratio, t, 0.02, { gain: g, attack: 0.001, release: 1.6 / ratio + 0.3, verb: 0.35 });
    }
    // solenoid + slide + coins jingling
    this.noiseBurst(t, 0.05, { gain: 0.4, type: 'bandpass', freq: 700, q: 2, verb: 0.2 });
    this.noiseBurst(t + 0.03, 0.28, { gain: 0.2, type: 'bandpass', freq: 1200, q: 0.8, verb: 0.2, decay: false });
    this.noiseBurst(t + 0.3, 0.07, { gain: 0.4, type: 'lowpass', freq: 500, verb: 0.2 });
    for (let i = 0; i < 6; i++) this.tone('sine', 4000 + Math.random() * 3000, t + 0.3 + Math.random() * 0.15, 0.03, { gain: 0.03, release: 0.12, verb: 0.3 });
  }

  drawerClose() {
    if (!this.ready) return;
    const t = this.t + 0.01;
    this.noiseBurst(t, 0.2, { gain: 0.18, type: 'bandpass', freq: 1000, q: 0.8, verb: 0.2, decay: false });
    this.noiseBurst(t + 0.18, 0.08, { gain: 0.5, type: 'lowpass', freq: 600, verb: 0.25 });
    this.tone('sine', 110, t + 0.18, 0.1, { gain: 0.3, release: 0.1, glide: 0.6 });
    for (let i = 0; i < 4; i++) this.tone('sine', 5000 + Math.random() * 2000, t + 0.2 + Math.random() * 0.1, 0.02, { gain: 0.02, release: 0.1, verb: 0.3 });
  }

  coin(i = 0) {
    if (!this.ready) return;
    const t = this.t + 0.01 + i * 0.07;
    this.tone('sine', 3200 + Math.random() * 600, t, 0.02, { gain: 0.08, release: 0.25, verb: 0.3 });
    this.tone('sine', 5100 + Math.random() * 800, t, 0.02, { gain: 0.05, release: 0.18, verb: 0.3 });
    this.tone('sine', 2100 + Math.random() * 300, t + 0.06, 0.02, { gain: 0.05, release: 0.2, verb: 0.3 });
  }

  // a bank of fluorescent tubes catching: "katchin... hmmm"
  fluoro(pan = 0, dist = 5, g = 1) {
    if (!this.ready) return;
    const t = this.t + Math.min(0.12, dist * 0.004);
    const a = Math.max(0.15, 1 - dist / 30) * g;
    this.noiseBurst(t, 0.03, { gain: 0.25 * a, type: 'bandpass', freq: 3200, q: 4, pan, verb: 0.6 });
    this.tone('square', 2400, t, 0.012, { gain: 0.03 * a, release: 0.02, pan, verb: 0.5 });
    this.tone('sawtooth', 120, t + 0.03, 0.5, { gain: 0.03 * a, attack: 0.05, release: 0.4, filter: 600, pan, verb: 0.5 });
    this.noiseBurst(t + 0.09, 0.02, { gain: 0.12 * a, type: 'bandpass', freq: 4200, q: 4, pan, verb: 0.6 });
  }

  // "pin-pon-pan-pon" — up for start, down for the end
  chime(up = true) {
    if (!this.ready) return 0;
    const t = this.t + 0.05;
    const seq = up ? [77, 81, 84, 89] : [89, 84, 81, 77];
    seq.forEach((m, i) => {
      const f = mtof(m);
      const s = t + i * 0.42;
      for (const [r, g] of [
        [1, 0.16],
        [3.98, 0.03],
        [2, 0.04],
      ]) {
        const o = this.ctx.createOscillator();
        o.frequency.value = f * r;
        const gg = this.ctx.createGain();
        gg.gain.setValueAtTime(0, s);
        gg.gain.linearRampToValueAtTime(g, s + 0.005);
        gg.gain.exponentialRampToValueAtTime(0.0001, s + 1.6 / r);
        o.connect(gg);
        gg.connect(this.sfx);
        const send = this.ctx.createGain();
        send.gain.value = 0.9;
        gg.connect(send);
        send.connect(this.hall);
        o.start(s);
        o.stop(s + 1.8);
      }
    });
    return seq.length * 0.42 + 0.6;
  }

  applause(dur = 2.5, g = 1, people = 2) {
    if (!this.ready) return;
    const t0 = this.t + 0.05;
    for (let p = 0; p < people; p++) {
      const rate = 4.5 + Math.random() * 2;
      for (let k = 0; k < dur * rate; k++) {
        const t = t0 + k / rate + Math.random() * 0.03 + p * 0.07;
        const fade = 1 - k / (dur * rate);
        this.noiseBurst(t, 0.03, { gain: 0.16 * g * fade, type: 'bandpass', freq: 1100 + p * 400 + Math.random() * 400, q: 1.2, pan: p ? 0.3 : -0.3, verb: 0.3 });
      }
    }
  }

  giggle(pitch = 1) {
    if (!this.ready) return;
    const t = this.t + 0.02;
    for (let i = 0; i < 4; i++) {
      this.tone('triangle', (420 + i * 25) * pitch, t + i * 0.11, 0.07, { gain: 0.05, attack: 0.01, release: 0.05, glide: 0.8, filter: 2000, verb: 0.2 });
    }
  }

  squeak(g = 1) {
    if (!this.ready) return;
    const t = this.t;
    this.tone('sine', 1500 + Math.random() * 400, t, 0.08, { gain: 0.03 * g, attack: 0.02, release: 0.05, glide: 1.25, verb: 0.2 });
  }

  rattle(g = 1) {
    if (!this.ready) return;
    this.noiseBurst(this.t, 0.06, { gain: 0.08 * g, type: 'bandpass', freq: 2200, q: 3, verb: 0.15 });
  }

  // a cascade: many soft thuds over time
  avalanche(n = 30, dur = 1.6) {
    if (!this.ready) return;
    const kinds = ['box', 'soft', 'can', 'bag', 'bottle', 'fruit'];
    for (let i = 0; i < n; i++) {
      const delay = Math.pow(Math.random(), 1.6) * dur;
      setTimeout(() => this.thud(kinds[Math.floor(Math.random() * kinds.length)], 0.5 + Math.random() * 0.6, (Math.random() - 0.5) * 0.8), delay * 1000);
    }
  }

  tick() {
    if (!this.ready) return;
    this.tone('square', 2600, this.t, 0.008, { gain: 0.03, release: 0.01, filter: 6000, verb: 0.05 });
  }

  groan(g = 1) {
    if (!this.ready) return;
    const t = this.t;
    this.tone('sawtooth', 70, t, 0.6, { gain: 0.08 * g, attack: 0.1, release: 0.3, glide: 0.7, filter: 300, verb: 0.2 });
  }

  fanfare() {
    if (!this.ready) return;
    const t = this.t + 0.05;
    const seq = [72, 76, 79, 84, 79, 84, 88];
    const dur = [0.12, 0.12, 0.12, 0.3, 0.12, 0.12, 0.8];
    let s = t;
    seq.forEach((m, i) => {
      this.tone('square', mtof(m + 12), s, dur[i], { gain: 0.04, release: 0.1, filter: 5000, verb: 0.35 });
      this.tone('sine', mtof(m), s, dur[i], { gain: 0.1, release: 0.15, verb: 0.35 });
      s += dur[i] + 0.02;
    });
    this.kick(t, 0.6);
    this.kick(t + 0.42, 0.6);
  }

  // ---------- the PA ----------
  async startVoice() {
    if (!this.ready || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return false;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: true } });
      const c = this.ctx;
      if (c.state !== 'running') await c.resume();
      const src = c.createMediaStreamSource(stream);
      const an = c.createAnalyser();
      an.fftSize = 512;
      const proc = c.createScriptProcessor(2048, 1, 1);
      const sink = c.createGain();
      sink.gain.value = 0;
      const chunks = [];
      proc.onaudioprocess = (e) => {
        chunks.push(new Float32Array(e.inputBuffer.getChannelData(0)));
      };
      src.connect(an);
      src.connect(proc);
      proc.connect(sink);
      sink.connect(c.destination);
      this.rec = { stream, src, an, proc, sink, chunks, buf: new Uint8Array(an.fftSize) };
      return true;
    } catch (e) {
      console.warn('mic unavailable', e);
      return false;
    }
  }

  voiceLevel() {
    const r = this.rec;
    if (!r) return 0;
    r.an.getByteTimeDomainData(r.buf);
    let s = 0;
    for (let i = 0; i < r.buf.length; i++) {
      const v = (r.buf[i] - 128) / 128;
      s += v * v;
    }
    return Math.sqrt(s / r.buf.length);
  }

  stopVoice() {
    const r = this.rec;
    if (!r) return null;
    this.rec = null;
    try {
      r.proc.disconnect();
      r.src.disconnect();
      r.sink.disconnect();
    } catch {
      /* ignore */
    }
    for (const tr of r.stream.getTracks()) tr.stop();
    const total = r.chunks.reduce((a, b) => a + b.length, 0);
    if (total < 2000) return null;
    const buf = this.ctx.createBuffer(1, total, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    let o = 0;
    let peak = 0;
    for (const ch of r.chunks) {
      d.set(ch, o);
      o += ch.length;
    }
    for (let i = 0; i < total; i++) peak = Math.max(peak, Math.abs(d[i]));
    const gain = peak > 0.001 ? Math.min(12, 0.9 / peak) : 1;
    for (let i = 0; i < total; i++) d[i] *= gain;
    // trim silence at both ends
    let a = 0;
    let b = total - 1;
    while (a < total && Math.abs(d[a]) < 0.05) a++;
    while (b > a && Math.abs(d[b]) < 0.05) b--;
    a = Math.max(0, a - 2000);
    b = Math.min(total - 1, b + 4000);
    if (b - a < 2000) return null;
    const out = this.ctx.createBuffer(1, b - a, this.ctx.sampleRate);
    out.getChannelData(0).set(d.subarray(a, b));
    return out;
  }

  // Play a recorded voice as if from every ceiling speaker.
  playPA(buffer) {
    const c = this.ctx;
    const s = c.createBufferSource();
    s.buffer = buffer;
    const hp = c.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 220;
    const lp = c.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 4800;
    const pk = c.createBiquadFilter();
    pk.type = 'peaking';
    pk.frequency.value = 2200;
    pk.gain.value = 5;
    pk.Q.value = 0.8;
    const dry = c.createGain();
    dry.gain.value = 0.95;
    const delay = c.createDelay(1.0);
    delay.delayTime.value = 0.23;
    const fb = c.createGain();
    fb.gain.value = 0.32;
    const dg = c.createGain();
    dg.gain.value = 0.35;
    const an = c.createAnalyser();
    an.fftSize = 512;
    s.connect(hp);
    hp.connect(pk);
    pk.connect(lp);
    lp.connect(dry);
    dry.connect(this.master);
    lp.connect(this.hall);
    lp.connect(delay);
    delay.connect(fb);
    fb.connect(delay);
    delay.connect(dg);
    dg.connect(this.master);
    dg.connect(this.hall);
    lp.connect(an);
    s.start(this.t + 0.05);
    this.paAn = { an, buf: new Uint8Array(an.fftSize) };
    return buffer.duration + 0.05;
  }

  paLevel() {
    const p = this.paAn;
    if (!p) return 0;
    p.an.getByteTimeDomainData(p.buf);
    let s = 0;
    for (let i = 0; i < p.buf.length; i++) {
      const v = (p.buf[i] - 128) / 128;
      s += v * v;
    }
    return Math.sqrt(s / p.buf.length);
  }

  // Without a microphone, the store sings the child's song back instead.
  playSongPA(notes) {
    if (!this.ready) return 0;
    const t0 = this.t + 0.1;
    const c = this.ctx;
    const an = c.createAnalyser();
    an.fftSize = 512;
    const bus = c.createGain();
    bus.gain.value = 1;
    bus.connect(this.master);
    bus.connect(this.hall);
    bus.connect(an);
    this.paAn = { an, buf: new Uint8Array(an.fftSize) };
    const list = notes.length ? notes.slice(0, 16) : [0, 1, 2, 3, 4, 5, 6, 7];
    list.forEach((ni, i) => {
      const m = MELODY[ni % MELODY.length];
      const s = t0 + i * 0.22;
      const o = c.createOscillator();
      o.type = 'triangle';
      o.frequency.value = mtof(m - 12);
      const g = c.createGain();
      g.gain.setValueAtTime(0, s);
      g.gain.linearRampToValueAtTime(0.18, s + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, s + 0.5);
      o.connect(g);
      g.connect(bus);
      o.start(s);
      o.stop(s + 0.6);
    });
    return list.length * 0.22 + 0.8;
  }
}

export { MELODY };
