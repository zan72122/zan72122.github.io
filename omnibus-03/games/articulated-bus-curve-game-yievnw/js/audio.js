// すべて Web Audio で合成する効果音。BGM ではなく「車体の動きを伝える音」を優先。
export class GameAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.master = null;
    this.engine = null;
    this.blinkPhase = 0;
    this.creakCooldown = 0;
    this.rattleTimer = 0;
  }

  // 初回タップで解錠
  unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = new AC();
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = this.enabled ? 0.9 : 0;
    this.master.connect(ctx.destination);
    this.noiseBuf = this._makeNoise(2.0);
    this._buildEngine();
    this._buildScrub();
    this._buildRubber();
  }

  setEnabled(on) {
    this.enabled = on;
    if (this.master) this.master.gain.setTargetAtTime(on ? 0.9 : 0, this.ctx.currentTime, 0.05);
  }

  _makeNoise(sec) {
    const ctx = this.ctx;
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * sec), ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return buf;
  }

  _noiseSource(loop = true) {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuf;
    src.loop = loop;
    return src;
  }

  // 低いディーゼルエンジン音：2つのノコギリ波＋ランブルノイズ
  _buildEngine() {
    const ctx = this.ctx;
    const g = ctx.createGain(); g.gain.value = 0;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 220; lp.Q.value = 0.8;
    const o1 = ctx.createOscillator(); o1.type = 'sawtooth'; o1.frequency.value = 52;
    const o2 = ctx.createOscillator(); o2.type = 'square'; o2.frequency.value = 26.3;
    const og1 = ctx.createGain(); og1.gain.value = 0.5;
    const og2 = ctx.createGain(); og2.gain.value = 0.25;
    o1.connect(og1).connect(lp); o2.connect(og2).connect(lp);
    // 振動感を出す LFO
    const lfo = ctx.createOscillator(); lfo.type = 'sine'; lfo.frequency.value = 13;
    const lfoG = ctx.createGain(); lfoG.gain.value = 0.15;
    lfo.connect(lfoG).connect(g.gain);
    const rumble = this._noiseSource();
    const rlp = ctx.createBiquadFilter(); rlp.type = 'lowpass'; rlp.frequency.value = 120;
    const rg = ctx.createGain(); rg.gain.value = 0.35;
    rumble.connect(rlp).connect(rg).connect(lp);
    lp.connect(g).connect(this.master);
    o1.start(); o2.start(); lfo.start(); rumble.start();
    this.engine = { g, o1, o2, lp };
  }

  // タイヤの軽い擦れ（バンドパスノイズ）
  _buildScrub() {
    const ctx = this.ctx;
    const src = this._noiseSource();
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 700; bp.Q.value = 1.2;
    const g = ctx.createGain(); g.gain.value = 0;
    src.connect(bp).connect(g).connect(this.master);
    src.start();
    this.scrub = { g, bp };
  }

  // 蛇腹ゴムの連続的なこすれ音（角度変化速度に比例）
  _buildRubber() {
    const ctx = this.ctx;
    const src = this._noiseSource();
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 380; bp.Q.value = 3;
    const g = ctx.createGain(); g.gain.value = 0;
    src.connect(bp).connect(g).connect(this.master);
    src.start();
    this.rubber = { g, bp };
  }

  /**
   * 毎フレーム呼ぶ。
   * speed: m/s, steer: 操舵角(rad), steerMax, phi: 連節角(rad), phiRate: rad/s, blinking: -1/0/1
   */
  update(dt, { speed, steer, steerMax, phi, phiRate, blinking }) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const spd = Math.abs(speed);
    // エンジン: 速度でピッチ、負荷（操舵）で少し重く
    const load = Math.abs(steer) / steerMax;
    const base = 48 + spd * 9 + load * 6;
    this.engine.o1.frequency.setTargetAtTime(base, t, 0.15);
    this.engine.o2.frequency.setTargetAtTime(base / 2, t, 0.15);
    this.engine.lp.frequency.setTargetAtTime(180 + spd * 40, t, 0.2);
    this.engine.g.gain.setTargetAtTime(spd > 0.05 ? 0.22 + load * 0.05 : 0.12, t, 0.2);
    // タイヤ擦れ
    const scrub = Math.min(1, Math.abs(steer) / steerMax) * Math.min(1, spd / 3);
    this.scrub.g.gain.setTargetAtTime(scrub * scrub * 0.07, t, 0.1);
    this.scrub.bp.frequency.setTargetAtTime(600 + scrub * 300, t, 0.1);
    // 蛇腹のこすれ
    const rr = Math.min(1, Math.abs(phiRate) / 0.6);
    this.rubber.g.gain.setTargetAtTime(rr * 0.09, t, 0.08);
    this.rubber.bp.frequency.setTargetAtTime(300 + Math.abs(phi) * 260, t, 0.1);
    // ギシッという単発の軋み
    this.creakCooldown -= dt;
    if (Math.abs(phiRate) > 0.22 && Math.abs(phi) > 0.15 && this.creakCooldown <= 0) {
      this.creak(Math.min(1, Math.abs(phiRate) / 0.5));
      this.creakCooldown = 0.55 + Math.random() * 0.5;
    }
    // 車内の吊り革・窓のカタカタ
    this.rattleTimer -= dt;
    if (this.rattleTimer <= 0) {
      const p = Math.abs(phiRate) * 2.5 + load * 0.4;
      if (Math.random() < p * dt * 6) this.rattle();
      this.rattleTimer = 0.05;
    }
  }

  creak(strength = 1) {
    const ctx = this.ctx, t = ctx.currentTime;
    const src = this._noiseSource(false);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 9;
    bp.frequency.setValueAtTime(520 + Math.random() * 200, t);
    bp.frequency.exponentialRampToValueAtTime(260, t + 0.28);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.28 * strength, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
    // 木のきしみっぽい倍音
    const o = ctx.createOscillator(); o.type = 'triangle';
    o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(70, t + 0.25);
    const og = ctx.createGain(); og.gain.setValueAtTime(0.0001, t);
    og.gain.exponentialRampToValueAtTime(0.08 * strength, t + 0.02);
    og.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
    src.connect(bp).connect(g).connect(this.master);
    o.connect(og).connect(this.master);
    src.start(t); src.stop(t + 0.35); o.start(t); o.stop(t + 0.3);
  }

  rattle() {
    const ctx = this.ctx, t = ctx.currentTime;
    const src = this._noiseSource(false);
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 2500 + Math.random() * 2000;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.05 + Math.random() * 0.04, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.03 + Math.random() * 0.03);
    src.connect(hp).connect(g).connect(this.master);
    src.start(t); src.stop(t + 0.08);
  }

  // ウインカー：カッ・コッ
  blinkTick(high) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'square';
    o.frequency.value = high ? 1900 : 1300;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.07, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3000;
    o.connect(lp).connect(g).connect(this.master);
    o.start(t); o.stop(t + 0.06);
  }

  // 縁石にコトン
  bump(strength = 1) {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.15);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.35 * strength, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
    o.connect(g).connect(this.master);
    o.start(t); o.stop(t + 0.25);
    const n = this._noiseSource(false);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 500;
    const ng = ctx.createGain(); ng.gain.setValueAtTime(0.15 * strength, t);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
    n.connect(lp).connect(ng).connect(this.master);
    n.start(t); n.stop(t + 0.12);
  }

  // コーンがコロン
  coneKnock() {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'triangle';
    o.frequency.setValueAtTime(420, t); o.frequency.exponentialRampToValueAtTime(180, t + 0.12);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.18, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    o.connect(g).connect(this.master);
    o.start(t); o.stop(t + 0.2);
  }

  // ボタン
  blip() {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 880;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
    o.connect(g).connect(this.master); o.start(t); o.stop(t + 0.13);
  }

  // 到着のファンファーレ
  cheer() {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t0 = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, i) => {
      const t = t0 + i * 0.13;
      const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.16, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + (i === 3 ? 0.7 : 0.25));
      o.connect(g).connect(this.master); o.start(t); o.stop(t + 0.75);
    });
  }

  // 発車のプシュー
  hiss() {
    if (!this.ctx || !this.enabled) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const n = this._noiseSource(false);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 3000; bp.Q.value = 0.6;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
    n.connect(bp).connect(g).connect(this.master);
    n.start(t); n.stop(t + 0.55);
  }
}
