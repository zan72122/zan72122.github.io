// 🌑 まひるの ほしふり(W-12)
//
// 月が おひさまに かさなって、世界が 銀色になる。**くらくはしない**(設計書 0.3 #7)。
// 彩度だけを落とすので、キャラ4人だけが カラフルに のこって きわだつ。
// 22秒だけ ターン制が とけて、4人が いっしょに走って 降ってくる星を とりあう。
// 88個のうち **3個だけが本物のスター** で、金色に光って チャイムの音がちがう。
//
// _takeTurn は1回も通らないので、このイベントは touchesTurn: false である。
// 落下星は ParticleFX を使わず 専用メッシュのプールで作る(設計書 8章 #9)。
// 一時的に STAR へ変えたマスは _savedTypes に退避し、収束と dispose の両方で もどす。

import * as THREE from '../../vendor/three.module.min.js';
import { toonMatUnique, starGeometry } from '../gfx.js';
import { CONFIG } from '../config.js';
import { eclipseConsolation, eclipseRealStarSlots } from '../rules.js';
import { dbg } from '../debug.js';
import { WorldEventBase } from './base.js';

const TAU = Math.PI * 2;
const SILVER_STEPS = 30;    // 200ms × 30 = 6秒
const POOL_SIZE = 24;       // 同時に空・地面にある星の上限(設計書外・Decision Log 8件目)
const DROP_HEIGHT = 24;
const FALL_SPEED = 11;

// まるい板のテクスチャ(月とフラッシュに つかう)
function discTexture(inner = '#8f96ad', outer = '#5a6078', size = 128) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const c = canvas.getContext('2d');
  const g = c.createRadialGradient(size / 2, size / 2, size * 0.1, size / 2, size / 2, size * 0.5);
  g.addColorStop(0, inner);
  g.addColorStop(0.82, outer);
  g.addColorStop(1, 'rgba(90,96,120,0)');
  c.fillStyle = g;
  c.beginPath();
  c.arc(size / 2, size / 2, size * 0.5, 0, TAU);
  c.fill();
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class EclipseEvent extends WorldEventBase {
  constructor(ctx) {
    super(ctx);
    this.moon = null;
    this.moonTex = null;
    this.flash = null;
    this.pool = [];             // { mesh, mat, busy, real, tileIndex, state, targetY, phase }
    this.savedTypes = new Map(); // tileIndex → もとのマスの型
    this.realSlots = new Set();
    this.grabsReal = new Map();  // char → 本物の数
    this.grabsFake = new Map();  // char → にせの数
    this.target = new THREE.Vector3();
    this.hasTarget = false;
    this._lastNdc = null;         // 直前にタップした画面上の点(同じ所の さし直しを見分ける)
    this.playing = false;
    this.realDropped = 0;        // 本物のスターを 実際に落とせた数(プール満杯でとばすことがある)
    this._t = 0;
    this._raycaster = new THREE.Raycaster();
    this._plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -0.9);
  }

  async run() {
    await this._trigger();     // ① きっかけ 8秒
    await this._silver();      // ② 変化 6秒
    await this._play();        // ③ 遊び 22秒
    await this._finish();      // ④ 収束 9秒
  }

  // ---------- 毎フレーム ----------
  update(dt) {
    this._t += dt;

    // 星は 落ちて、ついたら くるくる回りながら 待つ
    for (const s of this.pool) {
      if (!s.busy) continue;
      s.mesh.rotation.y += dt * (s.real ? 3.2 : 1.8);
      if (s.mat) {
        s.mat.emissiveIntensity = (s.real ? 0.75 : 0.3) + Math.sin(this._t * 4 + s.phase) * 0.22;
      }
      if (s.state === 'falling') {
        s.mesh.position.y -= FALL_SPEED * dt;
        if (s.mesh.position.y <= s.targetY) {
          s.mesh.position.y = s.targetY;
          s.state = 'ready';
          this._markTile(s.tileIndex);
        }
      } else {
        s.mesh.position.y = s.targetY + Math.sin(this._t * 2.6 + s.phase) * 0.12;
      }
    }

    if (!this.playing) return;

    const { chars } = this.ctx;
    for (const c of chars) {
      const speed = c.isPlayer ? CONFIG.ECLIPSE_PLAYER_SPEED : CONFIG.ECLIPSE_CPU_SPEED;
      const to = c.isPlayer ? (this.hasTarget ? this.target : null) : this._nearestStar(c);
      if (to) this._walk(c, to, speed * dt);
      this._checkGrab(c);
    }
  }

  // ---------- ① きっかけ(約8秒) ----------
  async _trigger() {
    this.stage = 'trigger';
    const { world, rig, audio, tweens, wait } = this.ctx;
    audio.stopBgm();

    const sunPos = world.sunSprite.position.clone();
    rig.setLookAt(sunPos);
    this._buildMoon(sunPos);

    audio.bell(880);
    this.ctx.banner(
      '<span class="icon">🌑</span>おひさまが かくれた!<span class="sub">まひるの ほしふり</span>',
      2800,
    );

    // 月が スーッと おひさまの手前へ かさなる
    const from = this.moon.position.clone();
    const to = this._moonHome.clone();
    await tweens.add(8, (k) => {
      this.moon.position.lerpVectors(from, to, k);
      this.moon.material.opacity = Math.min(1, k * 2.2);
    });
    rig.setOverview();
    await wait(300);
  }

  // ---------- ② 変化(約6秒) ----------
  async _silver() {
    this.stage = 'change';
    const { world, audio, wait } = this.ctx;
    // 17,689頂点の色計算なので、毎フレームではなく 200ms に1回だけ(設計書 2.3 / 8章 #7)
    for (let i = 0; i < SILVER_STEPS; i++) {
      world._paintIsland('silver', { amount: (i + 1) / SILVER_STEPS });
      if (i % 8 === 0) audio.sparkle();
      await wait(200);
    }
    world._paintIsland('silver');
  }

  // ---------- ③ 遊び(約22秒) ----------
  async _play() {
    this.stage = 'play';
    const { chars, ui, audio, wait } = this.ctx;
    const drops = CONFIG.ECLIPSE_DROP_COUNT;

    this.realSlots = new Set(
      eclipseRealStarSlots(drops, CONFIG.ECLIPSE_REAL_STARS, Math.random),
    );
    chars.forEach((c) => {
      this.grabsReal.set(c, 0);
      this.grabsFake.set(c, 0);
      c.setMode('hop');
    });
    this._buildPool();

    await this.ctx.banner(
      '<span class="icon">⭐</span>ほしが ふってくる!<span class="sub">タップした ほうへ はしろう!</span>',
      2600,
    );

    ui.setMinigameMode(true);
    ui.showScore(true);
    ui.showTimer(true);
    ui.showTapLayer(true);
    ui.setScore(0);
    this.playing = true;
    this.ctx.setTapHandler((ndc, px) => this.onTap(ndc, px));
    dbg.push({
      kind: 'state', id: 'eclipse', from: 'change', to: 'play',
      why: `drops=${drops} real=${CONFIG.ECLIPSE_REAL_STARS} pool=${POOL_SIZE}`,
    });

    for (let s = 0; s < drops; s++) {
      ui.setTimer(1 - s / drops);
      this._dropStar(s);
      if (s === drops - 12) audio.countTick(3);
      if (s === drops - 8) audio.countTick(2);
      if (s === drops - 4) audio.countTick(1);
      await wait(250);
    }

    this.playing = false;
    this.ctx.setTapHandler(null);
    this.hasTarget = false;
    // 落ちきらなかった本物は 誰にも取られない。取得と取りのこしの合計が 落とせた数と合う。
    dbg.push({
      kind: 'state', id: 'eclipse', from: 'play', to: 'settle',
      why: `realDropped=${this.realDropped}`
        + ` realGrabbed=${chars.reduce((n, c) => n + (this.grabsReal.get(c) || 0), 0)}`
        + ` realLeft=${this.pool.filter((x) => x.busy && x.real).length}`
        + ` marked=${this.savedTypes.size}`,
    });
    ui.showTimer(false);
    ui.showTapLayer(false);
    ui.showScore(false);
    ui.setMinigameMode(false);
    audio.countTick(0);
    chars.forEach((c) => { c.setHopHeight(0); c.land(); c.setMode('idle'); });
  }

  // ---------- ④ 収束(約9秒) ----------
  async _finish() {
    this.stage = 'settle';
    const { world, chars, rig, ui, fx, audio, tweens, wait } = this.ctx;
    // ⭐と🪙の「このイベントぶんの増加」を測るための起点。
    // 🪙は にせ星ぶんが すでに入っているので、ここから増えるのは なぐさめコインだけである。
    const before = chars.map((c) => ({ stars: c.stars, coins: c.coins }));
    rig.setOverview();

    // ダイヤモンドリング。白いフラッシュで「おわり!」を一瞬で伝える。
    this._buildFlash();
    audio.fanfare();
    this.ctx.punch(1.8);
    await tweens.add(1.2, (k) => {
      this._placeFlash();
      this.flash.material.opacity = Math.sin(Math.PI * Math.min(1, k * 1.3)) * 0.85;
      if (this.moon) this.moon.position.x = this._moonHome.x + k * 26;
    });
    this.flash.visible = false;

    // 色が いっきに もどる
    world._paintIsland('default');
    audio.sparkle();

    // 星と マスを かたづける
    this._clearPool();
    const marked = this.savedTypes.size;
    this._restoreTiles();
    dbg.push({ kind: 'state', id: 'eclipse', from: 'settle', to: 'tiles-restored', why: `marked=${marked}` });

    // 4人を それぞれの マスへ もどす
    const froms = chars.map((c) => c.root.position.clone());
    chars.forEach((c) => c.setMode('hop'));
    await tweens.add(1.2, (k) => {
      chars.forEach((c, i) => {
        const to = world.tileAnchor(c.tileIndex).add(this.ctx.charOffset(c));
        c.root.position.lerpVectors(froms[i], to, k);
        c.setHopHeight(Math.sin(Math.PI * k) * 0.9);
      });
    });
    chars.forEach((c) => { c.setHopHeight(0); c.land(); c.setMode('idle'); });

    // 本物のスターを くばる
    let gotAny = false;
    for (const c of chars) {
      const real = this.grabsReal.get(c) || 0;
      if (!real) continue;
      gotAny = true;
      c.stars += real;
      audio.starGet();
      fx.burstConfetti(c.root.position, 40, 4, 6);
      c.setMode('cheer');
      ui.updatePlayer(c);
      await this.ctx.banner(
        `<span class="icon">⭐</span>${c.def.name} ほんものの ほし ${real}こ!`, 1800,
      );
      if (c.stars >= CONFIG.SUPER_STARS && c.form !== 'super') {
        audio.transform();
        c.setForm('super');
        fx.sparkleBurst(c.root.position.clone().add(new THREE.Vector3(0, 1, 0)), 20, 0xfff6a8, 2);
        await this.ctx.banner(
          `<span class="icon">${c.def.emoji}✨</span>スーパー${c.def.name}に へんしん!`, 2000,
        );
      }
      c.setMode('idle');
    }

    // 1個も とれなかった子には なぐさめコイン
    const lines = [];
    for (const c of chars) {
      const real = this.grabsReal.get(c) || 0;
      const fake = this.grabsFake.get(c) || 0;
      const bonus = eclipseConsolation(real, c.coins);
      if (bonus) {
        c.coins += bonus;
        for (let i = 0; i < 3; i++) audio.coin(i);
        fx.coinBurst(c.root.position.clone().add(new THREE.Vector3(0, 0.8, 0)), 6);
      }
      ui.updatePlayer(c);
      lines.push(`${c.def.emoji}${real ? '⭐'.repeat(real) : ''}🪙${fake + bonus}`);
    }
    // 結果反映は この1件だけ。⭐は本物を取った子に、なぐさめ🪙は 取れなかった子だけに入る。
    dbg.push({
      kind: 'result', id: 'eclipse', why: 'eclipse-payout',
      to: `realDropped=${this.realDropped}`,
      chars: chars.map((c, i) => ({
        id: c.def.id,
        real: this.grabsReal.get(c) || 0,
        fake: this.grabsFake.get(c) || 0,
        starsFrom: before[i].stars,
        starsTo: c.stars,
        coinsFrom: before[i].coins,
        coinsTo: c.coins,
      })),
    });
    chars.forEach((c) => c.setMode('cheer'));
    audio.yay();
    fx.rainConfetti(new THREE.Vector3(0, 7, 0), 14, 90, 9);
    await this.ctx.banner(
      `<span class="icon">🌟</span>ほしふり おしまい!<span class="sub">${lines.join('  ')}</span>`,
      3000,
    );
    chars.forEach((c) => c.setMode('idle'));

    // 本物のスターが 動いたので、盤面のスターを 置きなおす
    if (gotAny) {
      const tile = this.ctx.moveStar();
      const anchor = world.tileAnchor(tile.index);
      rig.setLookAt(anchor);
      audio.sparkle();
      fx.sparkleBurst(anchor.clone().add(new THREE.Vector3(0, 1, 0)), 10, 0xffe066, 1.5);
      await this.ctx.banner('<span class="icon">🌟</span>つぎの ほしは あっち!', 1400);
    }
    rig.setOverview();
    await wait(200);
  }

  // ---------- 入力 ----------
  onTap(ndc, px) {
    if (!this.playing) { dbg.push({ kind: 'input-reject', id: 'eclipse', why: 'not-playing' }); return; }
    const { rig, ui } = this.ctx;
    this._raycaster.setFromCamera(ndc, rig.camera);
    const hit = new THREE.Vector3();
    if (!this._raycaster.ray.intersectPlane(this._plane, hit)) {
      dbg.push({ kind: 'input-reject', id: 'eclipse', why: 'no-ground' });
      return;
    }
    // 島の そとへは 行かせない
    const r = Math.hypot(hit.x, hit.z);
    if (r > 24) { hit.x *= 24 / r; hit.z *= 24 / r; }
    // 同じ所を もう一度さしても 走る向きは変わらない(ねらい先はすでにそこ)。
    // カメラは毎フレーム わずかに動くので、ワールド座標ではなく **タップした画面上の点** で見る。
    const same = this._lastNdc != null
      && Math.abs(this._lastNdc.x - ndc.x) < 1e-6 && Math.abs(this._lastNdc.y - ndc.y) < 1e-6;
    this._lastNdc = { x: ndc.x, y: ndc.y };
    this.target.copy(hit);
    this.hasTarget = true;
    if (px) ui.emojiBurst(px.x, px.y, '👉');
    dbg.push(same
      ? { kind: 'input-reject', id: 'eclipse', why: 'same-target' }
      : { kind: 'input-accept', id: 'eclipse', why: 'run-to', to: `${hit.x.toFixed(1)},${hit.z.toFixed(1)}` });
  }

  // ---------- 中身 ----------

  // s 番目の星を1個 落とす。realSlots に入っている番号だけが 本物。
  _dropStar(slot) {
    const { world } = this.ctx;
    const s = this.pool.find((x) => !x.busy);
    if (!s) return;                                   // プールが満杯なら この1個は とばす

    const count = world.tileCount;
    let tileIndex = Math.floor(Math.random() * count);
    // 盤面の本物のスターマスは 塗りつぶさない(moveStar が こわれる)
    for (let guard = 0; guard < 8 && tileIndex === world.starTileIndex; guard++) {
      tileIndex = Math.floor(Math.random() * count);
    }
    if (tileIndex === world.starTileIndex) return;

    const anchor = world.tileAnchor(tileIndex);
    const real = this.realSlots.has(slot);
    s.busy = true;
    s.real = real;
    s.tileIndex = tileIndex;
    s.state = 'falling';
    s.targetY = anchor.y + 0.9;
    s.phase = Math.random() * TAU;
    s.mesh.visible = true;
    s.mesh.position.set(anchor.x, anchor.y + DROP_HEIGHT, anchor.z);
    if (real) this.realDropped++;
    s.mesh.scale.setScalar(real ? 1.35 : 0.95);
    s.mat.color.set(real ? 0xffd23e : 0xeef2ff);
    s.mat.emissive.set(real ? 0xffaa00 : 0xbfe0ff);
  }

  _markTile(tileIndex) {
    const { world } = this.ctx;
    if (tileIndex === world.starTileIndex) return;
    if (!this.savedTypes.has(tileIndex)) {
      this.savedTypes.set(tileIndex, world.tiles[tileIndex].type);
    }
    if (world.tiles[tileIndex].type !== 'STAR') world.tiles[tileIndex].setType('STAR');
  }

  _unmarkTile(tileIndex) {
    const { world } = this.ctx;
    // 同じマスに ほかの星が まだ あるなら そのまま
    if (this.pool.some((s) => s.busy && s.state === 'ready' && s.tileIndex === tileIndex)) return;
    if (!this.savedTypes.has(tileIndex)) return;
    world.tiles[tileIndex].setType(this.savedTypes.get(tileIndex));
    this.savedTypes.delete(tileIndex);
  }

  _restoreTiles() {
    const { world } = this.ctx;
    for (const [index, type] of this.savedTypes) {
      if (index === world.starTileIndex) continue;
      world.tiles[index].setType(type);
    }
    this.savedTypes.clear();
    // 盤面のスターは かならず 立てなおす(二重防御・設計書 4.6)
    if (world.tiles[world.starTileIndex].type !== 'STAR') {
      world.tiles[world.starTileIndex].setType('STAR');
    }
  }

  _nearestStar(char) {
    let best = null, bestD = Infinity;
    for (const s of this.pool) {
      if (!s.busy || s.state !== 'ready') continue;
      const d = char.root.position.distanceToSquared(s.mesh.position);
      if (d < bestD) { bestD = d; best = s; }
    }
    return best ? best.mesh.position : null;
  }

  _walk(char, to, step) {
    const p = char.root.position;
    const dx = to.x - p.x, dz = to.z - p.z;
    const len = Math.hypot(dx, dz);
    if (len > 0.05) {
      const k = Math.min(1, step / len);
      p.x += dx * k;
      p.z += dz * k;
      char.faceTowards(new THREE.Vector3(to.x, p.y, to.z));
      char.setHopHeight(Math.abs(Math.sin(this._t * 9)) * 0.22);
    } else {
      char.setHopHeight(0);
    }
    p.y = this.ctx.world.heightFn(p.x, p.z) + 0.05;
  }

  _checkGrab(char) {
    const { ui, fx, audio, chars } = this.ctx;
    const radius = CONFIG.ECLIPSE_GRAB_RADIUS;
    for (const s of this.pool) {
      if (!s.busy || s.state !== 'ready') continue;
      // 星は 足もとより 0.9 だけ 上に うかんでいるので、よこ方向の きょりで はかる
      const dx = char.root.position.x - s.mesh.position.x;
      const dz = char.root.position.z - s.mesh.position.z;
      if (Math.hypot(dx, dz) > radius) continue;

      const index = s.tileIndex;
      s.busy = false;
      s.mesh.visible = false;
      s.state = 'idle';
      this._unmarkTile(index);

      if (s.real) {
        this.grabsReal.set(char, (this.grabsReal.get(char) || 0) + 1);
        audio.chime(3);
        audio.starGet();
        fx.sparkleBurst(s.mesh.position, 16, 0xffe066, 1.8);
      } else {
        char.coins += 1;
        this.grabsFake.set(char, (this.grabsFake.get(char) || 0) + 1);
        audio.coin(0);
        fx.sparkleBurst(s.mesh.position, 5, 0xdff2ff);
      }
      ui.updatePlayer(char);
      const player = chars.find((c) => c.isPlayer) || chars[0];
      if (char === player) {
        ui.setScore((this.grabsFake.get(char) || 0) + (this.grabsReal.get(char) || 0));
      }
      return;                                  // 1フレームに1個まで
    }
  }

  // ---------- 小道具 ----------

  // 月。おひさまの手前(カメラ寄り)に かさねる。あかるい銀色で、まっくろにはしない。
  _buildMoon(sunPos) {
    const { scene, rig } = this.ctx;
    this.moonTex = discTexture();
    const mat = new THREE.SpriteMaterial({
      map: this.moonTex, transparent: true, opacity: 0, depthWrite: false, fog: false,
    });
    const s = new THREE.Sprite(mat);
    const toCam = new THREE.Vector3().subVectors(rig.camera.position, sunPos).normalize();
    this._moonHome = sunPos.clone().addScaledVector(toCam, 9);
    s.position.copy(this._moonHome).add(new THREE.Vector3(-34, 22, 0));
    s.scale.setScalar(78);
    scene.add(s);
    this.moon = this._own(s);
  }

  // 落下星のプール。ParticleFX は使わず 専用メッシュにする(設計書 8章 #9)。
  // 色と emissive を動かすので、1個ずつ toonMatUnique を持たせる(設計書 8章 #10)。
  _buildPool() {
    const { scene } = this.ctx;
    const geo = starGeometry(0.46, 0.22, 0.15);
    this._poolGeo = geo;
    for (let i = 0; i < POOL_SIZE; i++) {
      const mat = toonMatUnique(0xeef2ff, { emissive: 0xbfe0ff, emissiveIntensity: 0.4 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.visible = false;
      mesh.castShadow = true;
      scene.add(mesh);
      this.pool.push({
        mesh, mat, busy: false, real: false, tileIndex: 0,
        state: 'idle', targetY: 0, phase: 0,
      });
      this._own(mesh);
    }
  }

  _clearPool() {
    for (const s of this.pool) {
      s.busy = false;
      s.state = 'idle';
      s.mesh.visible = false;
    }
  }

  // カメラの すぐ前に置く 白い板。ダイヤモンドリングの閃光。
  _buildFlash() {
    const { scene } = this.ctx;
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(8, 8),
      new THREE.MeshBasicMaterial({
        color: 0xffffff, transparent: true, opacity: 0,
        depthTest: false, depthWrite: false, fog: false,
      }),
    );
    mesh.renderOrder = 999;
    scene.add(mesh);
    this.flash = this._own(mesh);
    this._placeFlash();
  }

  _placeFlash() {
    if (!this.flash) return;
    const cam = this.ctx.rig.camera;
    this.flash.quaternion.copy(cam.quaternion);
    this.flash.position.copy(cam.position)
      .add(new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion));
  }

  dispose() {
    const { ui } = this.ctx;
    this.playing = false;
    this.hasTarget = false;
    this._lastNdc = null;
    ui.showTimer(false);
    ui.showTapLayer(false);
    ui.showScore(false);
    ui.setMinigameMode(false);
    // 色と マスの型は かならず もどす(二重防御・設計書 4.6)
    this.ctx.world._paintIsland('default');
    this._clearPool();
    this._restoreTiles();
    super.dispose();
    this._poolGeo?.dispose?.();
    this.moonTex?.dispose?.();
    this.realDropped = 0;
    this.pool.length = 0;
    this.savedTypes.clear();
    this.grabsReal.clear();
    this.grabsFake.clear();
    this.moon = null;
    this.moonTex = null;
    this.flash = null;
    this._poolGeo = null;
  }
}
