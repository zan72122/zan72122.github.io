// ミニゲーム「トロッコ コースター」:みぎ・ひだりをタップして レーンをえらび、ほしをあつめる。
//
// 見ためと あそびかたは そのまま。
//  - ほしのプールが からになると _spawnStarRow が nextSpawnZ を すすめずに もどり、
//    update() の while が 永久ループして タブごと とまっていた。かならず すすめる。
//  - レール・まくらぎ・かべは InstancedMesh にまとめた(メッシュ 184 → 4)
//  - ほしは ジオメトリと マテリアルを 共有する(ジオメトリ 14 → 1、マテリアル 14 → 2)
//  - かげは トロッコの まわりだけを うつす(さきは 6びょうで かげが きえていた)
// 1フレームの ドローコール見込み: へいきん 195 → 27。

import { MiniGameBase, THREE, toonMat, toonMatUnique } from './base.js';
import { starGeometry } from '../gfx.js';
import { audio } from '../audio.js';

const LANE_X = [-1.7, 1.7];
const SPEED = 7;

// レール:1節 SEG_LEN メートル。1節に レール4本 + まくらぎ2本。
const RAIL_SEGS = 26;
const SEG_LEN = 4;
const RAIL_OFFSETS = [-0.5, 0.5];
const RAILS_PER_SEG = LANE_X.length * RAIL_OFFSETS.length; // 4
const TIES_PER_SEG = LANE_X.length;                        // 2

// キャニオンのかべ:1列に ひだり・みぎ 1まいずつ。
const WALL_ROWS = 14;
const WALL_SPACING = 8;
const WALL_SIDE_X = [-6.2, 6.2];
const WALL_COLORS = [0xb8895c, 0xa87d54];

// 同時に出せる ほしの数。
// わき出しの窓(cartZ + 40)と 回収ライン(cartZ - 3)のあいだ 43m に、
// 平均 8m 間隔で 最大3こ の列がならぶので 最大 20こ。あふれないよう少し多めに持つ。
const STAR_POOL = 24;

// ほしの列を1つ わかせるのに すすむ距離。
const SPAWN_GAP_MIN = 6;
const SPAWN_GAP_RAND = 4;

export class CartGame extends MiniGameBase {
  constructor(ctx) {
    super(ctx);
    this.cpuRates = [0.5, 0.46, 0.42, 0.48];
    this.buildSkyAndLight({ ground: 0xc9a06a, fog: 0xe8c8a0 });
    this.addClouds(4, 12, 22);

    this._m4 = new THREE.Matrix4();

    // かげの枠を トロッコの まわりだけに しぼる。
    // もとの枠(36×48・1024²)は 原点に すわったままで、6びょうほどで かげが きえていた。
    // 枠を 33×32 に しぼって トロッコに ついてこさせると、768² でも きめの こまかさは
    // ほぼ もとのまま(1テクセル 0.00179 ⇔ もと 0.00165)で、ぬる面積は 56% になる。
    const sun = this.sun;
    sun.shadow.mapSize.set(768, 768);
    sun.shadow.camera.left = -20;
    sun.shadow.camera.right = 13;
    sun.shadow.camera.bottom = -18;
    sun.shadow.camera.top = 14;
    sun.shadow.camera.near = 8;
    sun.shadow.camera.far = 40;
    sun.shadow.camera.updateProjectionMatrix();
    this.scene.add(sun.target); // target をシーンに入れないと ついてこない

    // トロッコ
    this.cart = new THREE.Group();
    const box = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.9, 1.7), toonMat(0x9c6b3f));
    box.castShadow = true;
    const trim = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.2, 1.8), toonMat(0xd35454));
    trim.position.y = 0.45;
    const wheelGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.15, 10);
    const wheelMat = toonMat(0x4a4a58);
    [[-0.75, 0.55], [0.75, 0.55], [-0.75, -0.55], [0.75, -0.55]].forEach(([x, z]) => {
      const w = new THREE.Mesh(wheelGeo, wheelMat);
      w.rotation.z = Math.PI / 2;
      w.position.set(x, -0.42, z);
      this.cart.add(w);
    });
    this.cart.add(box, trim);
    this.cart.position.set(LANE_X[0], 0.7, 0);
    this.scene.add(this.cart);
    this.lane = 0;
    this.cartZ = 0;

    // レール(2レーンぶんの みため。うごきにあわせて リサイクル)
    this.rails = new THREE.InstancedMesh(
      new THREE.BoxGeometry(0.12, 0.1, SEG_LEN),
      toonMat(0x8a7a6e),
      RAIL_SEGS * RAILS_PER_SEG,
    );
    this.ties = new THREE.InstancedMesh(
      new THREE.BoxGeometry(1.4, 0.08, 0.3),
      toonMat(0x6b5a48),
      RAIL_SEGS * TIES_PER_SEG,
    );
    [this.rails, this.ties].forEach((m) => {
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      m.frustumCulled = false; // コース全体にまたがるので カリングしても得はない
      this.scene.add(m);
    });
    this.segZ = new Float32Array(RAIL_SEGS);
    for (let i = 0; i < RAIL_SEGS; i++) this._placeSeg(i, i * SEG_LEN);
    this.rails.instanceMatrix.needsUpdate = true;
    this.ties.instanceMatrix.needsUpdate = true;

    // キャニオンのかべ(ひだり・みぎ で 色ちがいの 2たば)
    this.wallMeshes = WALL_COLORS.map((c) => {
      const m = new THREE.InstancedMesh(
        new THREE.BoxGeometry(2.5, 1, 7.6), // たかさは インスタンスごとに scale する
        toonMat(c),
        WALL_ROWS,
      );
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      m.frustumCulled = false;
      m.castShadow = true;
      this.scene.add(m);
      return m;
    });
    this.wallRowZ = new Float32Array(WALL_ROWS);
    this.wallH = [new Float32Array(WALL_ROWS), new Float32Array(WALL_ROWS)];
    for (let i = 0; i < WALL_ROWS; i++) {
      for (let s = 0; s < 2; s++) this.wallH[s][i] = 2 + Math.random() * 3;
      this._placeWallRow(i, i * WALL_SPACING);
    }
    this.wallMeshes.forEach((m) => { m.instanceMatrix.needsUpdate = true; });

    // ほし(ジオメトリ1つ・マテリアル2つを プールぜんぶで 共有する)
    const starGeo = starGeometry(0.5, 0.24, 0.18);
    this.starMats = [
      toonMatUnique(0xffe066, { emissive: 0xffb300, emissiveIntensity: 0.5 }), // ふつう
      toonMatUnique(0xffe066, { emissive: 0xff8a00, emissiveIntensity: 0.5 }), // きん
    ];
    this.starPool = [];
    for (let i = 0; i < STAR_POOL; i++) {
      const star = new THREE.Mesh(starGeo, this.starMats[0]);
      star.visible = false;
      star.userData = { active: false, golden: false };
      this.scene.add(star);
      this.starPool.push(star);
    }
    this.nextSpawnZ = 10;
  }

  // 1節ぶんの レール4本と まくらぎ2本を z に置きなおす
  _placeSeg(i, z) {
    this.segZ[i] = z;
    const m = this._m4;
    let r = i * RAILS_PER_SEG;
    for (let l = 0; l < LANE_X.length; l++) {
      for (let o = 0; o < RAIL_OFFSETS.length; o++) {
        m.makeTranslation(LANE_X[l] + RAIL_OFFSETS[o], 0.06, z);
        this.rails.setMatrixAt(r++, m);
      }
      m.makeTranslation(LANE_X[l], 0.03, z);
      this.ties.setMatrixAt(i * TIES_PER_SEG + l, m);
    }
  }

  // かべ1列(ひだり・みぎ)を z に置きなおす
  _placeWallRow(i, z) {
    this.wallRowZ[i] = z;
    const m = this._m4;
    for (let s = 0; s < 2; s++) {
      const h = this.wallH[s][i];
      m.makeScale(1, h, 1);
      m.setPosition(WALL_SIDE_X[s], h / 2, z);
      this.wallMeshes[s].setMatrixAt(i, m);
    }
  }

  _freeStar() {
    for (let i = 0; i < this.starPool.length; i++) {
      if (!this.starPool[i].userData.active) return this.starPool[i];
    }
    return null;
  }

  _wakeStar(star, golden, x, z) {
    star.userData.active = true;
    star.userData.golden = golden;
    star.material = this.starMats[golden ? 1 : 0];
    star.scale.setScalar(golden ? 1.35 : 1);
    star.position.set(x, 1.1, z);
    star.visible = true;
  }

  _spawnStarRow() {
    // かたほうに 2こ、もうかたほうに きんの1こ …などランダム
    const lane = Math.floor(Math.random() * 2);
    const golden = Math.random() < 0.3;
    const n = golden ? 1 : 2;
    const z0 = this.nextSpawnZ;
    // どんな場合でも つぎのわき出し位置は すすめる。
    // (すすめないと update() の while がぬけられず、タブごと ハングする)
    this.nextSpawnZ += SPAWN_GAP_MIN + Math.random() * SPAWN_GAP_RAND;

    for (let i = 0; i < n; i++) {
      const star = this._freeStar();
      if (!star) return;
      this._wakeStar(star, golden, LANE_X[lane], z0 + i * 1.6);
    }
    // はんたいレーンにも ときどき 1こ
    if (Math.random() < 0.55) {
      const star = this._freeStar();
      if (star) this._wakeStar(star, false, LANE_X[1 - lane], z0 + 0.8);
    }
  }

  update(dt) {
    this.time += dt;
    this.tickCpu(dt);
    const t = this.time;

    // トロッコぜんしん
    this.cartZ += SPEED * dt;
    const cartZ = this.cartZ;
    this.cart.position.z = cartZ;
    this.cart.position.x += (LANE_X[this.lane] - this.cart.position.x) * Math.min(1, dt * 8);
    this.cart.position.y = 0.7 + Math.abs(Math.sin(t * 9)) * 0.05;
    this.cart.rotation.z = (LANE_X[this.lane] - this.cart.position.x) * -0.08;

    // ほしをわく(_spawnStarRow は かならず nextSpawnZ をすすめるので かならず ぬけられる)
    while (this.nextSpawnZ < cartZ + 40) this._spawnStarRow();

    // ほしの回転と キャッチはんてい
    const cartX = this.cart.position.x;
    for (let i = 0; i < this.starPool.length; i++) {
      const star = this.starPool[i];
      if (!star.userData.active) continue;
      star.rotation.y += dt * 3;
      if (star.position.z < cartZ - 3) {
        star.userData.active = false;
        star.visible = false;
        continue;
      }
      if (Math.abs(star.position.z - cartZ) < 1.0 &&
          Math.abs(star.position.x - cartX) < 1.1) {
        star.userData.active = false;
        star.visible = false;
        audio.sparkle();
        this.fx.sparkleBurst(star.position, star.userData.golden ? 12 : 6,
          star.userData.golden ? 0xffe066 : 0xfff6a8, 1.4);
        this.addPlayerPoint(star.userData.golden ? 2 : 1);
      }
    }

    // レールとかべを まえへ リサイクル(うごいた節だけ 行列を書きかえる)
    let railDirty = false;
    for (let i = 0; i < RAIL_SEGS; i++) {
      if (this.segZ[i] < cartZ - 12) {
        this._placeSeg(i, this.segZ[i] + RAIL_SEGS * SEG_LEN);
        railDirty = true;
      }
    }
    if (railDirty) {
      this.rails.instanceMatrix.needsUpdate = true;
      this.ties.instanceMatrix.needsUpdate = true;
    }

    let wallDirty = false;
    for (let i = 0; i < WALL_ROWS; i++) {
      if (this.wallRowZ[i] < cartZ - 14) {
        this._placeWallRow(i, this.wallRowZ[i] + WALL_ROWS * WALL_SPACING);
        wallDirty = true;
      }
    }
    if (wallDirty) this.wallMeshes.forEach((m) => { m.instanceMatrix.needsUpdate = true; });

    // 地面と 太陽を トロッコに ついてこさせる
    // (地面は 半径90 なので ついてこないと とちゅうで ゆかが なくなる)
    if (this.ground) this.ground.position.z = cartZ;
    this.sun.position.set(10, 22, cartZ + 14);
    this.sun.target.position.set(0, 0, cartZ);

    // カメラは トロッコのうしろ
    this.camera.position.set(0, 4.6, cartZ - 7.5);
    this.camera.lookAt(this.cart.position.x * 0.6, 1.2, cartZ + 6);
  }

  pointerDown(ndc) {
    // ひだり半分タップ→ひだりレーン、みぎ半分→みぎレーン
    this.lane = ndc.x < 0 ? 0 : 1;
    audio.tap();
  }

  fitCamera(aspect) {
    this.camera.fov = aspect < 1 ? 66 : 55;
    this.camera.updateProjectionMatrix();
  }

  dispose() {
    super.dispose();
    this.rails.dispose();
    this.ties.dispose();
    this.wallMeshes.forEach((m) => m.dispose());
    this.starMats.forEach((m) => m.dispose());
  }
}
