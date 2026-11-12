// Audio: everything is synthesized with WebAudio (no files). Sounds carry weight:
// footsteps get lower, longer and louder as the clothes pile up.
(function () {
  'use strict';
  const S = (K.sfx = {});
  let ac = null, master = null, noiseBuf = null;
  const loops = {};

  K.audioUnlock = function () {
    const C = window.AudioContext || window.webkitAudioContext;
    if (!C) return;
    if (!ac) {
      ac = new C();
      const comp = ac.createDynamicsCompressor();
      comp.threshold.value = -16; comp.ratio.value = 5; comp.attack.value = 0.004; comp.release.value = 0.2;
      master = ac.createGain(); master.gain.value = 0.9;
      master.connect(comp); comp.connect(ac.destination);
      noiseBuf = ac.createBuffer(1, Math.floor(ac.sampleRate * 1.5), ac.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      makeLoop('spray', 'bandpass', 1700, 0.7);
      makeLoop('fire', 'lowpass', 700, 0.5);
      makeLoop('hiss', 'highpass', 2600, 0.6);
      makeLoop('boil', 'lowpass', 420, 1.2);
      makeLoop('under', 'lowpass', 260, 0.8);
      makeLoop('air', 'bandpass', 900, 1.4);
      // iOS unlock: a silent blip
      const o = ac.createOscillator(), g = ac.createGain(); g.gain.value = 0.0001;
      o.connect(g); g.connect(master); o.start(); o.stop(ac.currentTime + 0.02);
    }
    if (ac.state === 'suspended') ac.resume();
  };
  S.ready = () => !!ac && ac.state === 'running';
  // be quiet while the page is hidden
  document.addEventListener('visibilitychange', () => {
    if (!ac) return;
    if (document.hidden) ac.suspend(); else ac.resume();
  });

  function makeLoop(name, type, freq, q) {
    const src = ac.createBufferSource(); src.buffer = noiseBuf; src.loop = true;
    const f = ac.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ac.createGain(); g.gain.value = 0;
    src.connect(f); f.connect(g); g.connect(master); src.start();
    loops[name] = { g, f, level: 0, base: freq };
  }
  // Continuous textures: level 0..1, smoothed.
  S.loop = function (name, level, freqMul) {
    if (!ac || !loops[name]) return;
    const L = loops[name];
    if (Math.abs(L.level - level) > 0.01) {
      L.level = level;
      L.g.gain.setTargetAtTime(level * 0.35, ac.currentTime, 0.08);
    }
    if (freqMul) L.f.frequency.setTargetAtTime(L.base * freqMul, ac.currentTime, 0.1);
  };
  S.stopLoops = () => { for (const k in loops) S.loop(k, 0); };

  function t0() { return ac.currentTime; }
  function env(g, t, a, peak, d) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(peak, 0.0002), t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
  }
  function tone(type, f0, f1, dur, vol, delay = 0, attack = 0.004) {
    if (!ac) return;
    const t = t0() + delay;
    const o = ac.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(f1, 20), t + attack + dur);
    const g = ac.createGain(); env(g, t, attack, vol, dur);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + attack + dur + 0.05);
  }
  function noise(type, f0, q, dur, vol, delay = 0, f1 = 0, attack = 0.003) {
    if (!ac) return;
    const t = t0() + delay;
    const s = ac.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
    const f = ac.createBiquadFilter(); f.type = type; f.Q.value = q;
    f.frequency.setValueAtTime(f0, t);
    if (f1) f.frequency.exponentialRampToValueAtTime(f1, t + attack + dur);
    const g = ac.createGain(); env(g, t, attack, vol, dur);
    s.connect(f); f.connect(g); g.connect(master);
    s.start(t, Math.random()); s.stop(t + attack + dur + 0.05);
  }
  S.tone = tone; S.noise = noise;

  // ---- footsteps: the core "weight" sound ----
  S.step = function (mass, surf, opts = {}) {
    if (!ac) return;
    const m = mass;
    const heavy = K.sat((m - 18) / 110);
    const f = 150 - heavy * 105;
    tone('sine', f, f * 0.5, 0.07 + heavy * 0.22, 0.10 + heavy * 0.42);
    noise('lowpass', 900 - heavy * 650, 0.8, 0.05 + heavy * 0.12, 0.06 + heavy * 0.16);
    if (surf === 'wood' || surf === 'bridge') {
      tone('triangle', 300 - heavy * 150, 200 - heavy * 90, 0.05, 0.05 + heavy * 0.05);
      if (heavy > 0.25 && Math.random() < 0.6) S.creak(heavy * (surf === 'bridge' ? 1.4 : 0.8));
    } else if (surf === 'stone' || surf === 'plate') {
      noise('highpass', 2500, 0.7, 0.025, 0.05);
      if (surf === 'plate') tone('triangle', 190 - heavy * 60, 150 - heavy * 50, 0.2 + heavy * 0.3, 0.05 + heavy * 0.08);
    } else if (surf === 'snow') {
      noise('bandpass', 1400, 1.2, 0.12, 0.10 + heavy * 0.06);
    } else if (surf === 'ice') {
      noise('highpass', 3200, 0.7, 0.03, 0.05);
      if (heavy > 0.3) S.iceCrack(heavy);
    } else if (surf === 'mud') {
      noise('lowpass', 300, 1, 0.25, 0.12 + heavy * 0.15);
    }
    if (opts.wet) noise('bandpass', 900, 3, 0.16, 0.07 + opts.wet * 0.12, 0.02, 280);
    if (opts.fins) noise('bandpass', 520, 1.5, 0.05, 0.16, 0.03);
    const n = opts.tools || 0;
    for (let i = 0; i < n; i++) tone('triangle', K.rand(2100, 3300), K.rand(1800, 2600), 0.05, 0.018, 0.02 + i * 0.03 + Math.random() * 0.02);
  };
  S.creak = function (a = 1) {
    if (!ac) return;
    const t = t0();
    const o = ac.createOscillator(); o.type = 'sawtooth';
    const base = K.rand(70, 95);
    o.frequency.setValueAtTime(base, t);
    o.frequency.linearRampToValueAtTime(base * K.rand(1.15, 1.45), t + 0.35);
    const f = ac.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = K.rand(500, 800); f.Q.value = 6;
    const g = ac.createGain(); env(g, t, 0.06, 0.03 + 0.07 * Math.min(a, 1.5), 0.35);
    o.connect(f); f.connect(g); g.connect(master); o.start(t); o.stop(t + 0.5);
  };
  S.iceCrack = function (a = 1) {
    for (let i = 0; i < 3; i++) {
      noise('highpass', 2800, 1, 0.03, 0.05 * a, i * 0.04 + Math.random() * 0.03);
      tone('sine', K.rand(2400, 3600), K.rand(900, 1500), 0.08, 0.025 * a, i * 0.05);
    }
  };
  S.jump = (mass) => noise('bandpass', 700, 0.8, 0.12, 0.05 + mass * 0.0004, 0, 1400);
  S.land = function (mass, surf) {
    S.step(mass * 1.15, surf);
    const heavy = K.sat((mass - 18) / 110);
    tone('sine', 90 - heavy * 45, 40, 0.2 + heavy * 0.3, 0.12 + heavy * 0.35);
  };

  // ---- cloth ----
  S.rustle = (a = 1) => { noise('bandpass', 2800, 0.8, 0.35, 0.12 * a, 0, 1600); noise('bandpass', 1200, 0.6, 0.25, 0.06 * a, 0.1); };
  S.squeeze = (a = 1) => { noise('lowpass', 420, 1, 0.3, 0.12 * a); tone('sine', 140, 80, 0.3, 0.06 * a); };
  S.zip = () => { noise('highpass', 4200, 1, 0.012, 0.09); tone('square', K.rand(1700, 2100), 1500, 0.01, 0.012); };
  S.zipDone = () => { tone('triangle', 880, 1320, 0.09, 0.08); noise('highpass', 5000, 1, 0.04, 0.06); };
  S.plop = () => { tone('sine', 420, 180, 0.12, 0.2); noise('lowpass', 800, 1, 0.05, 0.08); };
  S.buckle = () => { tone('square', 1300, 1300, 0.015, 0.05); tone('triangle', 700, 500, 0.06, 0.07, 0.03); };

  // ---- tools & machines ----
  S.ratchet = () => { noise('bandpass', 3600, 6, 0.018, 0.14); tone('square', 2300, 2000, 0.012, 0.02); };
  S.gear = () => { tone('triangle', 170, 140, 0.08, 0.14); noise('bandpass', 900, 2, 0.05, 0.08); };
  S.chain = (n = 4) => { for (let i = 0; i < n; i++) tone('triangle', K.rand(1800, 3200), K.rand(1500, 2400), 0.04, 0.03, i * K.rand(0.03, 0.06)); };
  S.thunk = (a = 1) => { tone('sine', 95, 45, 0.28, 0.35 * a); noise('lowpass', 260, 1, 0.12, 0.2 * a); };
  S.clang = (a = 1) => { [157, 243, 371, 529].forEach((f, i) => tone('triangle', f, f * 0.98, 0.8 - i * 0.12, 0.06 * a, 0, 0.002)); noise('highpass', 3000, 1, 0.03, 0.06 * a); };
  S.spring = (a = 1) => { tone('triangle', 240, 150, 0.35, 0.06 * a); tone('sine', 480, 300, 0.25, 0.03 * a); };
  S.latch = () => { tone('square', 700, 650, 0.02, 0.08); tone('triangle', 330, 250, 0.12, 0.14, 0.02); noise('highpass', 3000, 1, 0.02, 0.08); };
  S.click = () => { tone('square', 1500, 1500, 0.01, 0.05); };
  S.ignite = () => { for (let i = 0; i < 3; i++) noise('highpass', 5000, 1, 0.01, 0.12, i * 0.12); noise('lowpass', 220, 1, 0.45, 0.3, 0.38, 1400, 0.03); };
  S.pop = () => noise('highpass', 1800, 1, 0.02, K.rand(0.03, 0.09));
  S.splash = (a = 1) => { noise('lowpass', 1800, 0.7, 0.7 * a, 0.38 * a, 0, 300); tone('sine', 220, 60, 0.35, 0.2 * a); };
  S.drip = () => tone('sine', K.rand(1200, 1700), 600, 0.05, 0.03);
  S.blip = () => tone('sine', K.rand(260, 420), K.rand(800, 1300), 0.06, 0.04);
  S.sizzle = () => noise('highpass', 3500, 0.8, 0.25, 0.08, 0, 6000);
  S.clink = () => { tone('triangle', 2600, 2500, 0.15, 0.05); tone('sine', 3900, 3800, 0.1, 0.02); };
  S.whoosh = () => noise('bandpass', 500, 0.7, 0.35, 0.1, 0, 1800);
  S.crumble = () => { for (let i = 0; i < 6; i++) noise('lowpass', K.rand(500, 1200), 1, 0.06, 0.08, i * 0.05); };
  S.ding = () => { tone('sine', 1320, 1320, 0.6, 0.06); tone('sine', 2640, 2640, 0.3, 0.015); };

  // ---- the puppy ----
  S.bark = (n = 2) => {
    for (let i = 0; i < n; i++) {
      const d = i * 0.17;
      tone('sawtooth', 820, 460, 0.07, 0.05, d, 0.005);
      noise('bandpass', 1300, 2, 0.06, 0.07, d);
    }
  };
  S.whine = () => tone('sine', 980, 720, 0.35, 0.04, 0, 0.05);

  // ---- music box (no words: just a small tune for joy) ----
  S.chime = (notes, gap = 0.13, vol = 0.07) => {
    notes.forEach((n, i) => {
      const f = 440 * Math.pow(2, (n - 9) / 12);
      tone('sine', f, f, 0.9, vol, i * gap, 0.004);
      tone('triangle', f * 2, f * 2, 0.35, vol * 0.25, i * gap, 0.004);
    });
  };
})();
