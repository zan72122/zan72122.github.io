// やわらかそざいあそび - WebAudio base (no samples, all synthesized).
(function () {
  'use strict';
  const GAME = window.GAME;
  const U = GAME.U;

  const Audio = {
    ctx: null,
    master: null,
    sfxGain: null,
    musicGain: null,
    muted: false,
    _noiseBuf: null,
  };

  Audio.init = function () {
    if (Audio.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (Audio.ctx = new AC());
    Audio.master = ctx.createGain();
    // Gentle limiter so stacked squishes never clip harshly.
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16; comp.knee.value = 22; comp.ratio.value = 7;
    Audio.master.connect(comp);
    comp.connect(ctx.destination);

    Audio.sfxGain = ctx.createGain(); Audio.sfxGain.gain.value = 0.9;
    Audio.musicGain = ctx.createGain(); Audio.musicGain.gain.value = 0.34;
    Audio.sfxGain.connect(Audio.master);
    Audio.musicGain.connect(Audio.master);

    // Shared white-noise buffer (2s).
    const len = ctx.sampleRate * 2;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    Audio._noiseBuf = buf;

    try { Audio.muted = localStorage.getItem('punipuni-mute') === '1'; } catch (e) {}
    Audio.master.gain.value = Audio.muted ? 0 : 0.85;
  };

  Audio.resume = function () {
    Audio.init();
    if (Audio.ctx && Audio.ctx.state === 'suspended') Audio.ctx.resume();
  };

  Audio.toggleMute = function () {
    Audio.muted = !Audio.muted;
    if (Audio.master) Audio.master.gain.value = Audio.muted ? 0 : 0.85;
    try { localStorage.setItem('punipuni-mute', Audio.muted ? '1' : '0'); } catch (e) {}
    return Audio.muted;
  };

  Audio.now = () => (Audio.ctx ? Audio.ctx.currentTime : 0);

  // ---- one-shot synth helpers ----------------------------------------------
  // Simple tone with exponential decay. opts: {type, gain, glideTo, glideT, vibrato}
  Audio.blip = function (freq, dur, opts) {
    const ctx = Audio.ctx;
    if (!ctx) return;
    opts = opts || {};
    const t0 = ctx.currentTime;
    const osc = ctx.createOscillator();
    osc.type = opts.type || 'sine';
    osc.frequency.setValueAtTime(freq, t0);
    if (opts.glideTo) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(30, opts.glideTo), t0 + (opts.glideT || dur));
    }
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(opts.gain || 0.2, t0 + 0.008);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    let vib = null, vibGain = null;
    if (opts.vibrato) {
      vib = ctx.createOscillator();
      vib.frequency.value = opts.vibrato;
      vibGain = ctx.createGain();
      vibGain.gain.setValueAtTime(freq * 0.12, t0);
      vibGain.gain.linearRampToValueAtTime(0, t0 + dur);
      vib.connect(vibGain);
      vibGain.connect(osc.frequency);
      vib.start(t0); vib.stop(t0 + dur + 0.05);
    }
    osc.connect(g);
    g.connect(Audio.sfxGain);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  };

  // Filtered noise burst. opts: {type:'bandpass'|'lowpass'|'highpass', freq, q, gain, dur, at}
  Audio.noiseBurst = function (opts) {
    const ctx = Audio.ctx;
    if (!ctx) return;
    opts = opts || {};
    const t0 = opts.at || ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = Audio._noiseBuf;
    src.loop = true;
    src.playbackRate.value = opts.rate || 1;
    const f = ctx.createBiquadFilter();
    f.type = opts.type || 'bandpass';
    f.frequency.value = opts.freq || 400;
    f.Q.value = opts.q || 1;
    const g = ctx.createGain();
    const dur = opts.dur || 0.1;
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(opts.gain || 0.15, t0 + Math.min(0.01, dur * 0.3));
    g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    src.connect(f); f.connect(g); g.connect(Audio.sfxGain);
    src.start(t0, Math.random() * 1.2);
    src.stop(t0 + dur + 0.05);
  };

  // pentatonic UI pluck; idx picks the note so button rows form a melody
  const PENTA = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.7, 1318.5];
  Audio.pluck = function (idx, gain) {
    const f = PENTA[((idx % PENTA.length) + PENTA.length) % PENTA.length];
    Audio.blip(f, 0.3, { type: 'triangle', gain: gain || 0.16 });
    Audio.blip(f * 2, 0.18, { type: 'sine', gain: (gain || 0.16) * 0.3 });
  };

  Audio.fanfare = function () {
    const ctx = Audio.ctx;
    if (!ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    notes.forEach((f, i) => {
      setTimeout(() => {
        Audio.blip(f, 0.5, { type: 'triangle', gain: 0.2 });
        Audio.blip(f * 2, 0.3, { type: 'sine', gain: 0.07 });
      }, i * 90);
    });
    setTimeout(() => Audio.noiseBurst({ type: 'highpass', freq: 6000, gain: 0.1, dur: 0.5 }), 380);
  };

  GAME.Audio = Audio;
})();
