'use strict';
/* ============================================================
   audio.js — everything is synthesised with Web Audio
   ============================================================ */

const Sound = (() => {
  let ac = null, out = null, revIn = null, noiseBuf = null;
  let wind = null, cricketT = 1, started = false;
  const PENTA = [0, 2, 4, 7, 9];
  const midi = m => 440 * Math.pow(2, (m - 69) / 12);
  // D major pentatonic, index 0 = D5
  const penta = i => { const o = Math.floor(i / 5), k = ((i % 5) + 5) % 5; return midi(74 + PENTA[k] + 12 * o); };

  function init() {
    if (ac) { if (ac.state !== 'running') ac.resume().catch(() => {}); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try { ac = new AC(); } catch (e) { ac = null; return; }
    const comp = ac.createDynamicsCompressor();
    comp.threshold.value = -16; comp.knee.value = 10; comp.ratio.value = 3.5;
    comp.attack.value = 0.004; comp.release.value = 0.25;
    out = ac.createGain(); out.gain.value = 0.85;
    out.connect(comp); comp.connect(ac.destination);
    const rev = ac.createConvolver();
    rev.buffer = impulse(3.0, 2.6);
    revIn = ac.createGain(); revIn.gain.value = 1;
    const revOut = ac.createGain(); revOut.gain.value = 0.42;
    revIn.connect(rev); rev.connect(revOut); revOut.connect(out);
    noiseBuf = makeNoise(2.5);
    // iOS unlock
    const b = ac.createBuffer(1, 1, 22050), s = ac.createBufferSource();
    s.buffer = b; s.connect(ac.destination); s.start(0);
    if (ac.state !== 'running') ac.resume().catch(() => {});
    startAmbient();
    started = true;
  }

  function impulse(dur, decay) {
    const rate = ac.sampleRate, len = Math.floor(rate * dur);
    const buf = ac.createBuffer(2, len, rate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return buf;
  }
  function makeNoise(dur) {
    const len = Math.floor(ac.sampleRate * dur);
    const buf = ac.createBuffer(1, len, ac.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }
  function bus(pan = 0, wet = 0.3) {
    const g = ac.createGain();
    let node = g;
    if (ac.createStereoPanner) {
      const p = ac.createStereoPanner();
      p.pan.value = clamp(pan || 0, -1, 1);
      g.connect(p); node = p;
    }
    node.connect(out);
    if (wet > 0) { const w = ac.createGain(); w.gain.value = wet; node.connect(w); w.connect(revIn); }
    return g;
  }
  function tone(f, o = {}) {
    if (!ac) return;
    const t = ac.currentTime + (o.delay || 0);
    const osc = ac.createOscillator();
    osc.type = o.type || 'sine';
    osc.frequency.setValueAtTime(f, t);
    if (o.glide) osc.frequency.exponentialRampToValueAtTime(Math.max(20, o.glide), t + (o.glideT || o.dur || 0.3));
    if (o.detune) osc.detune.value = o.detune;
    const g = ac.createGain();
    const a = o.attack ?? 0.004, d = o.dur ?? 0.4, v = o.gain ?? 0.15;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(v, t + a);
    if (o.hold) g.gain.setValueAtTime(v, t + a + o.hold);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + (o.hold || 0) + d);
    osc.connect(g); g.connect(bus(o.pan, o.wet ?? 0.3));
    osc.start(t); osc.stop(t + a + (o.hold || 0) + d + 0.05);
  }
  function bell(f, o = {}) {
    const v = o.gain ?? 0.12;
    tone(f, Object.assign({}, o, { gain: v, dur: o.dur ?? 1.2 }));
    tone(f * 2.76, Object.assign({}, o, { gain: v * 0.22, dur: (o.dur ?? 1.2) * 0.45 }));
    tone(f * 5.4, Object.assign({}, o, { gain: v * 0.08, dur: (o.dur ?? 1.2) * 0.2 }));
  }
  function noise(o = {}) {
    if (!ac) return;
    const t = ac.currentTime + (o.delay || 0);
    const src = ac.createBufferSource();
    src.buffer = noiseBuf;
    src.playbackRate.value = o.rate || 1;
    const f = ac.createBiquadFilter();
    f.type = o.filter || 'bandpass';
    f.frequency.setValueAtTime(o.freq || 1000, t);
    if (o.sweep) f.frequency.exponentialRampToValueAtTime(o.sweep, t + (o.dur || 0.3));
    f.Q.value = o.q ?? 1;
    const g = ac.createGain();
    const a = o.attack ?? 0.005, d = o.dur ?? 0.3, v = o.gain ?? 0.1;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(v, t + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
    src.connect(f); f.connect(g); g.connect(bus(o.pan, o.wet ?? 0.2));
    src.start(t, Math.random() * 1.5); src.stop(t + a + d + 0.05);
  }

  function startAmbient() {
    const src = ac.createBufferSource();
    src.buffer = noiseBuf; src.loop = true;
    const f = ac.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 320; f.Q.value = 0.6;
    const g = ac.createGain(); g.gain.value = 0.03;
    const lfo = ac.createOscillator(); lfo.frequency.value = 0.06;
    const lg = ac.createGain(); lg.gain.value = 160;
    lfo.connect(lg); lg.connect(f.frequency); lfo.start();
    src.connect(f); f.connect(g); g.connect(bus(0, 0.1)); src.start();
    wind = { g, f };
  }

  /* ---------- public ---------- */
  const S = {
    init,
    get ready() { return !!ac && started; },
    penta,
    update(dt, alt) {
      if (!ac) return;
      cricketT -= dt;
      if (cricketT < 0) {
        cricketT = rnd(0.5, 1.8);
        if (alt < 14) {
          const f = rnd(4300, 5400), p = rnd(-0.9, 0.9), n = 2 + ((Math.random() * 3) | 0);
          const v = 0.009 * (1 - clamp01(alt / 14));
          for (let k = 0; k < n; k++) tone(f, { delay: k * 0.055, dur: 0.03, gain: v, pan: p, wet: 0.15 });
        }
      }
      if (wind) {
        const target = 0.03 + clamp01(alt / 60) * 0.05;
        wind.g.gain.setTargetAtTime(target, ac.currentTime, 0.8);
      }
    },
    tap(pan) { tone(1500, { dur: 0.05, gain: 0.03, pan, wet: 0.05 }); },
    chime(i, o = {}) { bell(penta(i), Object.assign({ gain: 0.09, dur: 1.4 }, o)); },
    hint(pan) {
      bell(penta(4), { gain: 0.05, pan, dur: 1.2 });
      bell(penta(7), { gain: 0.04, pan, dur: 1.4, delay: 0.16 });
    },
    snore() { noise({ filter: 'lowpass', freq: 380, dur: 1.0, attack: 0.5, gain: 0.03, wet: 0.1 }); },
    wake() {
      tone(330, { glide: 520, dur: 0.5, attack: 0.08, gain: 0.05, type: 'triangle', wet: 0.2 });
      bell(penta(2), { gain: 0.07, delay: 0.45 }); bell(penta(4), { gain: 0.07, delay: 0.6 });
    },
    fall(pan, dur = 1.6) {
      tone(1800, { glide: 700, glideT: dur, dur, attack: 0.3, gain: 0.03, pan, wet: 0.5 });
      tone(2400, { glide: 1200, glideT: dur, dur: dur * 0.8, attack: 0.2, gain: 0.012, pan, wet: 0.6, type: 'triangle' });
    },
    land(pan, big = 1) {
      tone(140 / big, { glide: 48, dur: 0.35, gain: 0.3 * Math.min(1.4, big), pan, wet: 0.15 });
      noise({ filter: 'lowpass', freq: 600, dur: 0.25, gain: 0.08, pan });
      bell(penta(big > 1 ? 0 : 5), { gain: 0.07, pan, delay: 0.02, dur: 1.6 });
    },
    bounce(pan, i = 0) { bell(penta(5 + (i % 3)), { gain: 0.05, pan, dur: 0.8 }); tone(160, { glide: 70, dur: 0.12, gain: 0.08, pan, wet: 0.05 }); },
    roll(pan) { noise({ filter: 'bandpass', freq: 700, q: 2, dur: 0.12, gain: 0.02, pan }); },
    step(pan, soft = 1) { noise({ filter: 'lowpass', freq: 900, dur: 0.06, gain: 0.035 * soft, pan, wet: 0.05, rate: 0.7 }); },
    plantStep(pan) {
      tone(95, { glide: 150, dur: 0.18, gain: 0.08, pan, wet: 0.1, type: 'sine' });
      noise({ filter: 'bandpass', freq: 2200, q: 1.5, dur: 0.08, gain: 0.02, pan });
    },
    pickup(pan) { [0, 2, 4].forEach((n, k) => bell(penta(n + 3), { gain: 0.07, pan, delay: k * 0.08, dur: 1.0 })); },
    dig(pan) { noise({ filter: 'bandpass', freq: 1100, q: 0.8, dur: 0.12, gain: 0.07, pan, wet: 0.05 }); },
    pat(pan) { tone(120, { glide: 70, dur: 0.1, gain: 0.12, pan, wet: 0.05 }); },
    sink(pan) {
      tone(700, { glide: 160, dur: 0.9, attack: 0.02, gain: 0.07, pan, wet: 0.5, type: 'triangle' });
    },
    hum(pan, dur = 1.4) {
      tone(110, { glide: 220, glideT: dur, dur, attack: 0.4, gain: 0.07, pan, wet: 0.4, type: 'triangle' });
      tone(165, { glide: 330, glideT: dur, dur, attack: 0.5, gain: 0.04, pan, wet: 0.5 });
    },
    rumble(pan, dur = 1, v = 1) {
      noise({ filter: 'lowpass', freq: 140, dur, attack: 0.15, gain: 0.22 * v, pan, wet: 0.1, rate: 0.5 });
      tone(46, { dur, attack: 0.15, gain: 0.12 * v, pan, wet: 0 });
    },
    crack(pan) { for (let k = 0; k < 4; k++) noise({ filter: 'highpass', freq: 2500, dur: 0.03, gain: 0.05, pan, delay: k * rnd(0.03, 0.08) }); },
    sprout(pan) { tone(260, { glide: 820, dur: 0.22, gain: 0.1, pan, wet: 0.3, type: 'triangle' }); bell(penta(7), { gain: 0.06, pan, delay: 0.12 }); },
    grow(i, pan) { bell(penta(i), { gain: 0.045, pan, dur: 0.9 }); },
    leaf(pan) { noise({ filter: 'bandpass', freq: 1400, sweep: 3800, q: 1.2, dur: 0.18, gain: 0.03, pan, wet: 0.25 }); },
    grab(pan) {
      tone(90, { glide: 60, dur: 0.3, gain: 0.14, pan, wet: 0.2 });
      [0, 4, 7].forEach((n, k) => bell(penta(n + 5), { gain: 0.06, pan, delay: 0.05 + k * 0.06, dur: 1.4 }));
    },
    cheer(pan) { [4, 7, 9].forEach((n, k) => bell(penta(n), { gain: 0.05, pan, delay: k * 0.07, dur: 1.2 })); },
    climb(i, pan) { bell(penta(i + 2), { gain: 0.07, pan, dur: 1.0 }); tone(110, { glide: 150, dur: 0.12, gain: 0.07, pan, wet: 0.05 }); },
    jump(pan) { tone(300, { glide: 700, dur: 0.18, gain: 0.05, pan, wet: 0.2, type: 'triangle' }); },
    catch(pan) { [0, 4, 7, 9].forEach((n, k) => bell(penta(n + 5), { gain: 0.07, pan, delay: k * 0.05, dur: 1.6 })); },
    pop(i, pan) { bell(penta(8 + (i % 5)), { gain: 0.05, pan, dur: 0.7 }); noise({ filter: 'highpass', freq: 5000, dur: 0.05, gain: 0.03, pan }); },
    whoosh(pan, dur = 0.6, v = 1) { noise({ filter: 'bandpass', freq: 300, sweep: 2400, q: 0.8, dur, attack: dur * 0.4, gain: 0.08 * v, pan, wet: 0.3 }); },
    creak(pan) { tone(70, { glide: 55, dur: 0.5, gain: 0.08, pan, wet: 0.2, type: 'sawtooth', attack: 0.05 }); },
    pad(notes, dur, v = 1) {
      if (!ac) return;
      for (const m of notes) {
        tone(midi(m), { type: 'triangle', attack: dur * 0.35, hold: dur * 0.3, dur: dur * 0.6, gain: 0.03 * v, wet: 0.6, detune: -6, pan: -0.3 });
        tone(midi(m), { type: 'sine', attack: dur * 0.35, hold: dur * 0.3, dur: dur * 0.6, gain: 0.03 * v, wet: 0.6, detune: 6, pan: 0.3 });
      }
    },
    arp(notes, step, v = 1) {
      notes.forEach((m, k) => bell(midi(m), { gain: 0.045 * v, delay: k * step, dur: 1.4, pan: Math.sin(k * 1.3) * 0.6 }));
    },
    finale() {
      const ch = [50, 57, 62, 66, 69, 74, 78, 81];
      ch.forEach((m, k) => bell(midi(m), { gain: 0.06, delay: k * 0.07, dur: 3.5, pan: (k / ch.length - 0.5) * 1.2 }));
      S.pad([50, 57, 62, 66, 69], 6, 1.4);
    },
    midi,
    suspend() { if (ac && ac.state === 'running') ac.suspend().catch(() => {}); },
    resume() { if (ac && ac.state !== 'running') ac.resume().catch(() => {}); },
  };
  return S;
})();
