// 手続き生成の音: 短く柔らかな貼付音、玉の転がり音、滑走の風、かすかな室内音。
// 正解音・不正解音は使わない。最初の指操作で有効化し、休止・非表示で止める。
export function createAudio() {
  let ctx = null, master = null, rollGain = null, rollFilter = null, slideGain = null, slideFilter = null, roomGain = null;
  let enabled = false;
  let suspended = false;

  function noiseBuffer(c, seconds, brown) {
    const n = Math.floor(c.sampleRate * seconds);
    const buf = c.createBuffer(1, n, c.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < n; i++) {
      const w = Math.random() * 2 - 1;
      if (brown) { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } else d[i] = w;
    }
    return buf;
  }

  function enable() {
    if (enabled) { resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      ctx = new AC();
    } catch (e) { return; }
    master = ctx.createGain();
    master.gain.value = 0.9;
    master.connect(ctx.destination);
    const brown = noiseBuffer(ctx, 4, true);
    // 転がり音(玉が動いている数に応じて)
    const rollSrc = ctx.createBufferSource();
    rollSrc.buffer = brown; rollSrc.loop = true;
    rollFilter = ctx.createBiquadFilter();
    rollFilter.type = 'bandpass'; rollFilter.frequency.value = 520; rollFilter.Q.value = 0.9;
    rollGain = ctx.createGain(); rollGain.gain.value = 0;
    rollSrc.connect(rollFilter).connect(rollGain).connect(master);
    rollSrc.start();
    // 滑走の風
    const slideSrc = ctx.createBufferSource();
    slideSrc.buffer = noiseBuffer(ctx, 3, false); slideSrc.loop = true;
    slideFilter = ctx.createBiquadFilter();
    slideFilter.type = 'bandpass'; slideFilter.frequency.value = 900; slideFilter.Q.value = 0.6;
    slideGain = ctx.createGain(); slideGain.gain.value = 0;
    slideSrc.connect(slideFilter).connect(slideGain).connect(master);
    slideSrc.start();
    // 室内のかすかな空気
    const roomSrc = ctx.createBufferSource();
    roomSrc.buffer = brown; roomSrc.loop = true; roomSrc.playbackRate.value = 0.5;
    const roomF = ctx.createBiquadFilter(); roomF.type = 'lowpass'; roomF.frequency.value = 180;
    roomGain = ctx.createGain(); roomGain.gain.value = 0.035;
    roomSrc.connect(roomF).connect(roomGain).connect(master);
    roomSrc.start();
    enabled = true;
    // iOS は無音の短い音で解錠
    const o = ctx.createOscillator();
    const g = ctx.createGain(); g.gain.value = 0.0001;
    o.connect(g).connect(master); o.start(); o.stop(ctx.currentTime + 0.02);
    if (ctx.state === 'suspended') ctx.resume();
  }

  // ぺたっ: 低いふくらみ+短い湿った雑音
  function stick(pan = 0, size = 1) {
    if (!enabled || suspended) return;
    const t = ctx.currentTime;
    const p = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if (p) { p.pan.value = Math.max(-0.8, Math.min(0.8, pan)); p.connect(master); }
    const out = p || master;
    const o = ctx.createOscillator();
    o.type = 'sine';
    const f0 = 210 * (0.92 + Math.random() * 0.16) / size;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f0 * 0.42, t + 0.16);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.35, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    o.connect(g).connect(out);
    o.start(t); o.stop(t + 0.25);
    const n = ctx.createBufferSource();
    n.buffer = noiseBuffer(ctx, 0.12, false);
    const nf = ctx.createBiquadFilter(); nf.type = 'bandpass'; nf.frequency.value = 1300; nf.Q.value = 1.2;
    const ng = ctx.createGain();
    ng.gain.setValueAtTime(0.12, t);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
    n.connect(nf).connect(ng).connect(out);
    n.start(t);
  }
  // 粘液がのびる・固まるときの小さなきしみ(柔らかく)
  function stretch(pan = 0, dur = 0.8) {
    if (!enabled || suspended) return;
    const t = ctx.currentTime;
    const n = ctx.createBufferSource();
    n.buffer = noiseBuffer(ctx, dur + 0.1, true);
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 4;
    f.frequency.setValueAtTime(260, t);
    f.frequency.linearRampToValueAtTime(520, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.06, t + 0.1);
    g.gain.linearRampToValueAtTime(0.0001, t + dur);
    let out = master;
    if (ctx.createStereoPanner) { const p = ctx.createStereoPanner(); p.pan.value = Math.max(-0.8, Math.min(0.8, pan)); p.connect(master); out = p; }
    n.connect(f).connect(g).connect(out);
    n.start(t);
  }
  function soft(freq = 330, dur = 0.3, vol = 0.05) {
    if (!enabled || suspended) return;
    const t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'triangle';
    o.frequency.setValueAtTime(freq, t);
    o.frequency.exponentialRampToValueAtTime(freq * 0.8, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(master); o.start(t); o.stop(t + dur + 0.05);
  }
  // 毎フレーム: 転がっている玉の数、滑走の速さ
  function setLevels(rolling, slideSpeed) {
    if (!enabled) return;
    const t = ctx.currentTime;
    const rg = rolling > 0 ? Math.min(0.11, 0.03 + 0.02 * Math.sqrt(rolling)) : 0;
    rollGain.gain.setTargetAtTime(suspended ? 0 : rg, t, 0.15);
    rollFilter.frequency.setTargetAtTime(420 + 40 * rolling, t, 0.3);
    const sg = slideSpeed > 0 ? Math.min(0.16, 0.03 + slideSpeed * 0.035) : 0;
    slideGain.gain.setTargetAtTime(suspended ? 0 : sg, t, 0.2);
    slideFilter.frequency.setTargetAtTime(600 + slideSpeed * 220, t, 0.2);
  }
  function suspend() {
    suspended = true;
    if (ctx && ctx.state === 'running') ctx.suspend();
  }
  function resume() {
    suspended = false;
    if (ctx && ctx.state !== 'running') ctx.resume();
  }
  function reset() {
    if (!enabled) return;
    rollGain.gain.value = 0;
    slideGain.gain.value = 0;
  }
  return {
    enable, stick, stretch, soft, setLevels, suspend, resume, reset,
    get state() { return ctx ? ctx.state : 'none'; },
    get enabled() { return enabled; },
  };
}
