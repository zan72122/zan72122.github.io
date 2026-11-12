/* 調理オブジェクト: ボウル・材料・オーブン・ケーキ・クリーム塗り・トッピング・ろうそく */
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import * as M from './materials.js';
import { COUNTER_Y, ST, CAKE } from './world.js';

const UP = new THREE.Vector3(0, 1, 0);

function shadows(obj) {
  obj.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return obj;
}

/* レイキャスト用の見えない当たりメッシュ */
function ghostMat() {
  return new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false });
}

/* ============================================================ ボウル */

export function makeBowl() {
  const pts = [
    [0, 0], [0.07, 0], [0.078, 0.008], [0.06, 0.018], [0.09, 0.03],
    [0.14, 0.06], [0.18, 0.105], [0.203, 0.15], [0.21, 0.172],
    [0.205, 0.178], [0.195, 0.172], [0.185, 0.15], [0.16, 0.105],
    [0.12, 0.062], [0.06, 0.042], [0, 0.04]
  ].map(p => new THREE.Vector2(p[0], p[1]));
  const bowl = new THREE.Mesh(
    new THREE.LatheGeometry(pts, 56),
    M.physical({ color: '#ff8fb8', roughness: 0.12, clearcoat: 0.8, clearcoatRoughness: 0.15 })
  );
  bowl.position.set(ST.mix, COUNTER_Y, 0);
  return shadows(bowl);
}

/* 生地(混ぜるとテクスチャが回り、色が滑らかに) */
export function makeBatter() {
  const g = new THREE.Group();
  const tex = M.batterSwirlTexture();
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(0.13, 36, 18, 0, Math.PI * 2, 0, Math.PI / 2),
    M.physical({ map: tex, color: '#ffffff', roughness: 0.45, clearcoat: 0.3 })
  );
  dome.scale.set(1, 0.34, 1);
  g.add(dome);
  const lumps = new THREE.Group();
  const lumpMat = M.physical({ color: '#fff6e0', roughness: 0.5 });
  const lumpPos = [[-0.06, 0.04, 0.02], [0.05, 0.042, -0.03], [0.0, 0.045, 0.06],
                   [0.07, 0.038, 0.05], [-0.03, 0.044, -0.06]];
  for (const [x, y, z] of lumpPos) {
    const l = new THREE.Mesh(new THREE.SphereGeometry(0.016, 12, 10), lumpMat);
    l.position.set(x, y, z);
    l.scale.setScalar(0.9 + Math.random() * 0.4);
    lumps.add(l);
  }
  g.add(lumps);
  g.position.set(ST.mix, COUNTER_Y + 0.045, 0);
  g.visible = false;
  return { group: g, dome, lumps, tex };
}

export function makeSpoon() {
  const g = new THREE.Group();
  const wood = M.physical({ color: '#d9a563', roughness: 0.55 });
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.04, 20, 14), wood);
  head.scale.set(0.85, 0.3, 1.15);
  g.add(head);
  const handle = new THREE.Mesh(new THREE.CapsuleGeometry(0.009, 0.2, 4, 10), wood);
  handle.position.set(0, 0.11, -0.07);
  handle.rotation.x = 0.55;
  g.add(handle);
  g.visible = false;
  return shadows(g);
}

/* ============================================================ 材料たち */

export function makeIngredients() {
  const items = [];
  const baseY = COUNTER_Y;

  // たまご
  const egg = new THREE.Group();
  const eggMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.03, 24, 18),
    M.physical({ color: '#ffe9c2', roughness: 0.35, clearcoat: 0.4 })
  );
  eggMesh.scale.set(1, 1.28, 1);
  eggMesh.position.y = 0.038;
  egg.add(eggMesh);
  egg.position.set(ST.mix - 0.42, baseY, 0.18);
  items.push({ id: 'egg', group: egg });

  // ミルク瓶
  const milk = new THREE.Group();
  const milkPts = [
    [0, 0], [0.032, 0], [0.035, 0.01], [0.035, 0.07], [0.022, 0.095],
    [0.018, 0.115], [0.018, 0.13], [0, 0.13]
  ].map(p => new THREE.Vector2(p[0], p[1]));
  const bottle = new THREE.Mesh(
    new THREE.LatheGeometry(milkPts, 28),
    M.physical({ color: '#ffffff', roughness: 0.18, clearcoat: 0.8 })
  );
  milk.add(bottle);
  const cap = new THREE.Mesh(
    new THREE.CylinderGeometry(0.02, 0.02, 0.014, 20),
    M.candy('#ff6fa5')
  );
  cap.position.y = 0.135;
  milk.add(cap);
  const label = new THREE.Mesh(
    new THREE.CylinderGeometry(0.0355, 0.0355, 0.035, 24, 1, true),
    M.physical({ map: M.heartLabelTexture('#ffd2e2', '#ff5e96'), roughness: 0.4 })
  );
  label.position.y = 0.04;
  milk.add(label);
  milk.position.set(ST.mix - 0.52, baseY, -0.02);
  items.push({ id: 'milk', group: milk });

  // 小麦粉の袋
  const flour = new THREE.Group();
  const bag = new THREE.Mesh(
    new RoundedBoxGeometry(0.075, 0.1, 0.05, 3, 0.014),
    M.physical({ color: '#fdf3df', roughness: 0.6 })
  );
  bag.position.y = 0.05;
  flour.add(bag);
  const fold = new THREE.Mesh(
    new RoundedBoxGeometry(0.08, 0.02, 0.055, 2, 0.008),
    M.physical({ color: '#f0dcb8', roughness: 0.65 })
  );
  fold.position.y = 0.105;
  fold.rotation.z = 0.06;
  flour.add(fold);
  const flabel = new THREE.Mesh(
    new THREE.PlaneGeometry(0.05, 0.05),
    M.physical({ map: M.heartLabelTexture('#fdf3df', '#e3b94e'), roughness: 0.6 })
  );
  flabel.position.set(0, 0.05, 0.0262);
  flour.add(flabel);
  flour.position.set(ST.mix + 0.42, baseY, 0.16);
  items.push({ id: 'flour', group: flour });

  // 砂糖ポット
  const sugar = new THREE.Group();
  const pot = new THREE.Mesh(
    new THREE.CylinderGeometry(0.036, 0.04, 0.075, 24),
    M.physical({ color: '#eef7ff', roughness: 0.08, transparent: true, opacity: 0.9, clearcoat: 1 })
  );
  pot.position.y = 0.0375;
  sugar.add(pot);
  const fill = new THREE.Mesh(
    new THREE.CylinderGeometry(0.031, 0.035, 0.05, 20),
    M.physical({ color: '#ffffff', roughness: 0.9 })
  );
  fill.position.y = 0.028;
  sugar.add(fill);
  const lid = new THREE.Mesh(new THREE.SphereGeometry(0.04, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2),
    M.candy('#ff8fb8'));
  lid.scale.set(1, 0.5, 1);
  lid.position.y = 0.075;
  sugar.add(lid);
  const lidKnob = new THREE.Mesh(new THREE.SphereGeometry(0.009, 12, 8),
    M.physical({ color: '#ffffff', roughness: 0.2 }));
  lidKnob.position.y = 0.1;
  sugar.add(lidKnob);
  sugar.position.set(ST.mix + 0.52, baseY, -0.04);
  items.push({ id: 'sugar', group: sugar });

  items.forEach(i => shadows(i.group));
  return items;
}

/* ============================================================ オーブン */

export function makeOven() {
  const g = new THREE.Group();
  g.position.set(ST.oven, COUNTER_Y, -0.16);
  const W = 0.64, H = 0.5, D = 0.42;

  // 本体は庫内(0.46×0.3×0.34)を囲うシェル構造(窓から中が見えるように)
  const bodyMat = M.physical({ color: '#ffc3d9', roughness: 0.25, clearcoat: 0.7, clearcoatRoughness: 0.2 });
  const shellParts = [
    // [w, h, d, x, y, z]
    [W, H, 0.07, 0, H / 2, -0.175],          // 背面
    [W, 0.15, D, 0, H - 0.075, 0],           // 天井(コントロール帯ごと)
    [W, 0.07, D, 0, 0.035, 0],               // 底
    [0.09, H, D, -W / 2 + 0.045, H / 2, 0],  // 左
    [0.09, H, D, W / 2 - 0.045, H / 2, 0]    // 右
  ];
  for (const [w, h, d, x, y, z] of shellParts) {
    const part = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 2, 0.03), bodyMat);
    part.position.set(x, y, z);
    g.add(part);
  }

  // 庫内(前面開口の奥)
  const cavity = new THREE.Mesh(
    new THREE.BoxGeometry(0.46, 0.3, 0.34),
    M.physical({ color: '#3a2030', roughness: 0.7, side: THREE.BackSide })
  );
  cavity.position.set(0, 0.21, 0.03);
  g.add(cavity);

  // ヒーター(焼成中オレンジに発光)
  const heater = new THREE.Mesh(
    new THREE.PlaneGeometry(0.42, 0.26),
    new THREE.MeshBasicMaterial({ color: '#1d0f18' })
  );
  heater.position.set(0, 0.21, -0.135);
  g.add(heater);

  // 焼き網
  const rackMat = M.physical({ color: '#9aa6b5', metalness: 0.8, roughness: 0.35 });
  for (const z of [-0.06, 0.04]) {
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.44, 8), rackMat);
    bar.rotation.z = Math.PI / 2;
    bar.position.set(0, 0.085, z);
    g.add(bar);
  }

  // 庫内ライト(焼成中のみ)
  const innerLight = new THREE.PointLight('#ff9342', 0, 0.9);
  innerLight.position.set(0, 0.3, 0.05);
  g.add(innerLight);

  // とびら(下ヒンジ)。窓から庫内が見えるよう枠+ガラスで構成
  const door = new THREE.Group();
  door.position.set(0, 0.045, D / 2 + 0.012);
  const frameMat = M.physical({ color: '#fff0f5', roughness: 0.25, clearcoat: 0.7 });
  const bars = [
    [0.5, 0.09, 0, 0.045],     // 下バー
    [0.5, 0.055, 0, 0.3175],   // 上バー
    [0.075, 0.21, -0.2125, 0.19],
    [0.075, 0.21, 0.2125, 0.19]
  ];
  for (const [w, h, x, y] of bars) {
    const bar = new THREE.Mesh(new RoundedBoxGeometry(w, h, 0.03, 2, 0.01), frameMat);
    bar.position.set(x, y, 0);
    door.add(bar);
  }
  const glass = new THREE.Mesh(
    new RoundedBoxGeometry(0.37, 0.225, 0.01, 2, 0.005),
    M.physical({ color: '#5c3a49', roughness: 0.05, transparent: true, opacity: 0.3, clearcoat: 1 })
  );
  glass.position.set(0, 0.19, 0);
  door.add(glass);
  // ガラスの斜め反射
  const streak = new THREE.Mesh(
    new THREE.PlaneGeometry(0.045, 0.19),
    new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.16, depthWrite: false })
  );
  streak.position.set(-0.06, 0.19, 0.012);
  streak.rotation.z = -0.5;
  door.add(streak);
  const streak2 = streak.clone();
  streak2.scale.set(0.45, 1, 1);
  streak2.position.x = 0.04;
  door.add(streak2);
  const handle = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.012, 0.4, 4, 12),
    M.physical({ color: '#ffffff', metalness: 0.15, roughness: 0.2, clearcoat: 0.8 })
  );
  handle.rotation.z = Math.PI / 2;
  handle.position.set(0, 0.33, 0.045);
  door.add(handle);
  g.add(door);

  // コントロールパネル(上部)
  const panel = new THREE.Mesh(
    new RoundedBoxGeometry(0.56, 0.09, 0.02, 2, 0.008),
    M.physical({ color: '#e96a9c', roughness: 0.35 })
  );
  panel.position.set(0, 0.445, D / 2 + 0.005);
  g.add(panel);
  const knobMat = M.physical({ color: '#ffffff', roughness: 0.2, clearcoat: 0.8 });
  for (const x of [-0.2, -0.12]) {
    const k = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.02, 16), knobMat);
    k.rotation.x = Math.PI / 2;
    k.position.set(x, 0.445, D / 2 + 0.018);
    g.add(k);
  }
  // 大きな赤いスタートボタン
  const knob = new THREE.Group();
  const knobBase = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.028, 24),
    M.candy('#e8403e', { emissive: '#000000' }));
  knobBase.rotation.x = Math.PI / 2;
  knob.add(knobBase);
  knob.position.set(0.16, 0.445, D / 2 + 0.02);
  g.add(knob);
  // ランプ
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.014, 14, 10),
    M.physical({ color: '#ffd2dd', emissive: '#000000', roughness: 0.3 }));
  lamp.position.set(0.25, 0.445, D / 2 + 0.012);
  g.add(lamp);

  shadows(g);
  // 開口に影が落ちすぎないよう庫内は受影しない。ガラスは影を落とさない
  cavity.receiveShadow = false;
  glass.castShadow = false;

  return {
    group: g, door, heater, innerLight, knob, knobBase, lamp, glass,
    // 庫内に物を置くときのワールド座標
    insidePos: new THREE.Vector3(ST.oven, COUNTER_Y + 0.1, -0.13),
    knobWorld: () => knob.getWorldPosition(new THREE.Vector3())
  };
}

/* ケーキ型(生地入り) */
export function makePan() {
  const g = new THREE.Group();
  const pts = [
    [0, 0], [0.092, 0], [0.1, 0.012], [0.104, 0.05], [0.112, 0.055],
    [0.114, 0.06], [0.108, 0.062], [0.098, 0.052], [0.094, 0.014], [0, 0.012]
  ].map(p => new THREE.Vector2(p[0], p[1]));
  const pan = new THREE.Mesh(
    new THREE.LatheGeometry(pts, 48),
    M.physical({ color: '#cdd6e0', metalness: 0.85, roughness: 0.3 })
  );
  g.add(pan);
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(0.09, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2),
    M.physical({ color: '#f3d49a', roughness: 0.5 })
  );
  dome.scale.set(1, 0.32, 1);
  dome.position.y = 0.02;
  g.add(dome);
  g.position.set(ST.oven - 0.52, COUNTER_Y, 0.1);
  g.visible = false;
  shadows(g);
  return { group: g, dome };
}

/* ============================================================ ケーキ本体 */

export function makeCake() {
  const g = new THREE.Group();
  const sponge = M.spongeTextures();

  const side = new THREE.Mesh(
    new THREE.CylinderGeometry(CAKE.r, CAKE.r, CAKE.h, 64, 1, true),
    M.physical({ map: sponge.map, bumpMap: sponge.bump, bumpScale: 0.6, roughness: 0.85 })
  );
  side.position.y = CAKE.h / 2;
  g.add(side);

  const top = new THREE.Mesh(
    new THREE.SphereGeometry(CAKE.r, 48, 10, 0, Math.PI * 2, 0, Math.PI / 2),
    M.physical({ map: M.cakeTopTexture(), roughness: 0.8 })
  );
  top.scale.set(1, 0.06, 1);
  top.position.y = CAKE.h;
  g.add(top);

  const bottom = new THREE.Mesh(
    new THREE.CircleGeometry(CAKE.r, 48),
    M.physical({ color: '#e8bd7c', roughness: 0.9 })
  );
  bottom.rotation.x = -Math.PI / 2;
  bottom.position.y = 0.002;
  g.add(bottom);

  // クリームサンドの白い帯
  const band = new THREE.Mesh(
    new THREE.TorusGeometry(CAKE.r - 0.002, 0.007, 10, 64),
    M.physical({ color: '#fff6ef', roughness: 0.3, clearcoat: 0.5 })
  );
  band.rotation.x = Math.PI / 2;
  band.position.y = CAKE.h * 0.52;
  g.add(band);

  g.position.set(CAKE.x, CAKE.standTop, 0);
  g.visible = false;
  shadows(g);
  return g;
}

/* ============================================================ クリーム塗り */

export function makeFrosting() {
  const R = CAKE.r + 0.005, H = CAKE.h + 0.008;

  function paintLayer(w, h) {
    const { canvas, ctx } = M.makeCanvas(w, h);
    const tex = M.makeTex(canvas, { wrapX: true });
    const b = M.makeCanvas(w, h);
    b.ctx.fillStyle = '#000000';
    b.ctx.fillRect(0, 0, w, h);
    const bump = M.makeTex(b.canvas, { linear: true, wrapX: true });
    return { canvas, ctx, tex, bumpCanvas: b.canvas, bumpCtx: b.ctx, bump };
  }

  const topL = paintLayer(1024, 1024);
  const sideL = paintLayer(1024, 256);

  function mat(layer) {
    return M.physical({
      map: layer.tex, bumpMap: layer.bump, bumpScale: 2.2,
      transparent: true, depthWrite: false,
      roughness: 0.32, clearcoat: 0.55, clearcoatRoughness: 0.3
    });
  }

  // 上面はケーキのドームに沿ったキャップ。塗りやすいよう平面投影のUVに置き換える
  const capGeo = new THREE.SphereGeometry(R, 48, 12, 0, Math.PI * 2, 0, Math.PI / 2);
  const capH = CAKE.r * 0.06 + 0.004;
  capGeo.scale(1, capH / R, 1);
  {
    const pos = capGeo.attributes.position;
    const uv = capGeo.attributes.uv;
    for (let i = 0; i < pos.count; i++) {
      uv.setXY(i, pos.getX(i) / (2 * R) + 0.5, pos.getZ(i) / (2 * R) + 0.5);
    }
    uv.needsUpdate = true;
  }
  const topMesh = new THREE.Mesh(capGeo, mat(topL));
  topMesh.position.set(CAKE.x, CAKE.topY + 0.001, 0);
  topMesh.renderOrder = 2;
  topMesh.visible = false;

  const sideMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(R, R, H, 64, 1, true), mat(sideL));
  sideMesh.position.set(CAKE.x, CAKE.standTop + CAKE.h / 2, 0);
  sideMesh.renderOrder = 2;
  sideMesh.visible = false;

  topMesh.userData.layer = topL;
  sideMesh.userData.layer = sideL;

  let last = null;   // {mesh, u, v}
  let stamps = 0;

  function stamp(layer, u, v, color, shade, rPx) {
    const w = layer.canvas.width, h = layer.canvas.height;
    const x = u * w, y = (1 - v) * h;
    for (const xx of [x, x - w, x + w]) {
      // 下に影色、上に本体色のソフトスタンプ
      let g2 = layer.ctx.createRadialGradient(xx, y + rPx * 0.22, rPx * 0.1, xx, y + rPx * 0.22, rPx);
      g2.addColorStop(0, shade);
      g2.addColorStop(0.75, shade);
      g2.addColorStop(1, shade.replace('rgb', 'rgba').replace(')', ',0)'));
      layer.ctx.fillStyle = g2;
      layer.ctx.beginPath(); layer.ctx.arc(xx, y + rPx * 0.22, rPx, 0, 6.29); layer.ctx.fill();
      g2 = layer.ctx.createRadialGradient(xx, y, rPx * 0.1, xx, y, rPx * 0.92);
      g2.addColorStop(0, color);
      g2.addColorStop(0.78, color);
      g2.addColorStop(1, color.replace('rgb', 'rgba').replace(')', ',0)'));
      layer.ctx.fillStyle = g2;
      layer.ctx.beginPath(); layer.ctx.arc(xx, y, rPx * 0.92, 0, 6.29); layer.ctx.fill();
      // バンプ: 渦っぽい起伏
      const bg = layer.bumpCtx.createRadialGradient(xx, y, rPx * 0.05, xx, y, rPx * 0.9);
      const lum = 120 + ((stamps * 53) % 90);
      bg.addColorStop(0, `rgba(${lum},${lum},${lum},0.55)`);
      bg.addColorStop(1, 'rgba(0,0,0,0)');
      layer.bumpCtx.fillStyle = bg;
      layer.bumpCtx.beginPath(); layer.bumpCtx.arc(xx, y, rPx * 0.9, 0, 6.29); layer.bumpCtx.fill();
    }
    stamps++;
  }

  // raycast交点(mesh+uv)にブラシを置く。前回点から補間して途切れを防ぐ
  function paintAt(mesh, uv, colorRGB, shadeRGB) {
    const layer = mesh.userData.layer;
    const isTop = mesh === topMesh;
    const rPx = isTop ? 92 : 70;
    let pts = [[uv.x, uv.y]];
    if (last && last.mesh === mesh) {
      let du = uv.x - last.u, dv = uv.y - last.v;
      if (!isTop && Math.abs(du) > 0.5) du -= Math.sign(du); // 周方向シーム
      const distPx = Math.hypot(du * layer.canvas.width, dv * layer.canvas.height);
      const n = Math.min(14, Math.ceil(distPx / (rPx * 0.35)));
      pts = [];
      for (let i = 1; i <= n; i++) {
        pts.push([last.u + du * (i / n), last.v + dv * (i / n)]);
      }
    }
    for (const [u, v] of pts) stamp(layer, ((u % 1) + 1) % 1, v, colorRGB, shadeRGB, rPx);
    layer.tex.needsUpdate = true;
    layer.bump.needsUpdate = true;
    last = { mesh, u: uv.x, v: uv.y };
    return pts.length;
  }

  function endStroke() { last = null; }

  function reset() {
    for (const L of [topL, sideL]) {
      L.ctx.clearRect(0, 0, L.canvas.width, L.canvas.height);
      L.bumpCtx.fillStyle = '#000000';
      L.bumpCtx.fillRect(0, 0, L.canvas.width, L.canvas.height);
      L.tex.needsUpdate = true;
      L.bump.needsUpdate = true;
    }
    last = null;
    stamps = 0;
  }

  return { topMesh, sideMesh, paintAt, endStroke, reset };
}

/* ============================================================ トッピング */

function strawberry() {
  const g = new THREE.Group();
  const tex = M.strawberryTextures();
  const pts = [];
  const N = 14;
  for (let i = 0; i <= N; i++) {
    const t = i / N;                       // 0=底 1=先端(上)
    const r = 0.0225 * Math.sin(Math.PI * (0.12 + 0.88 * t));
    pts.push(new THREE.Vector2(Math.max(0.0005, r), t * 0.048));
  }
  const body = new THREE.Mesh(new THREE.LatheGeometry(pts, 28),
    M.physical({ map: tex.map, bumpMap: tex.bump, bumpScale: 1.4,
                 roughness: 0.25, clearcoat: 0.9, clearcoatRoughness: 0.12 }));
  g.add(body);
  // がく(底の小さな葉)
  const leafShape = new THREE.Shape();
  leafShape.moveTo(0, 0).quadraticCurveTo(0.006, 0.008, 0, 0.02).quadraticCurveTo(-0.006, 0.008, 0, 0);
  const leafGeo = new THREE.ShapeGeometry(leafShape);
  const leafMat = M.physical({ color: '#4e9434', roughness: 0.5, side: THREE.DoubleSide });
  for (let i = 0; i < 5; i++) {
    const leaf = new THREE.Mesh(leafGeo, leafMat);
    const a = (i / 5) * Math.PI * 2;
    leaf.position.set(Math.cos(a) * 0.008, 0.004, Math.sin(a) * 0.008);
    leaf.rotation.set(Math.PI / 2.4, -a + Math.PI / 2, 0, 'YXZ');
    g.add(leaf);
  }
  return g;
}

function cherry() {
  const g = new THREE.Group();
  const mat = M.candy('#d22747', { roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.05 });
  for (const [x, z, r] of [[-0.013, 0.002, 0.0145], [0.013, -0.003, 0.013]]) {
    const c = new THREE.Mesh(new THREE.SphereGeometry(r, 22, 16), mat);
    c.position.set(x, r * 0.9, z);
    g.add(c);
  }
  const stemMat = M.physical({ color: '#3c7d27', roughness: 0.5 });
  for (const sx of [-0.013, 0.013]) {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(sx, 0.02, 0),
      new THREE.Vector3(sx * 0.5, 0.05, 0.004),
      new THREE.Vector3(0, 0.058, 0)
    );
    g.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 8, 0.0016, 6), stemMat));
  }
  return g;
}

function grape() {
  const g = new THREE.Group();
  const mat = M.candy('#9a63d8', { roughness: 0.15, clearcoat: 1 });
  const pos = [[0, 0.01, 0], [0.017, 0.011, 0.006], [-0.017, 0.011, 0.006],
               [0.008, 0.012, -0.015], [-0.008, 0.012, -0.015],
               [0.009, 0.026, 0.004], [-0.009, 0.026, 0.004]];
  for (const [x, y, z] of pos) {
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.011, 16, 12), mat);
    b.position.set(x, y, z);
    g.add(b);
  }
  return g;
}

function kiwi() {
  const g = new THREE.Group();
  const geo = new THREE.CylinderGeometry(0.021, 0.021, 0.006, 32);
  const sideMat = M.physical({ color: '#7d5b35', roughness: 0.7 });
  const faceMat = M.physical({ map: M.kiwiTexture(), roughness: 0.25, clearcoat: 0.6 });
  const mesh = new THREE.Mesh(geo, [sideMat, faceMat, faceMat]);
  mesh.position.y = 0.003;
  g.add(mesh);
  return g;
}

function choco() {
  const g = new THREE.Group();
  const block = new THREE.Mesh(
    new RoundedBoxGeometry(0.03, 0.013, 0.03, 2, 0.004),
    M.physical({ color: '#6b412a', roughness: 0.3, clearcoat: 0.7, clearcoatRoughness: 0.25 })
  );
  block.position.y = 0.0065;
  g.add(block);
  const pts = [];
  for (let i = 0; i <= 8; i++) {
    pts.push(new THREE.Vector3(-0.013 + i * 0.0033, 0.013, Math.sin(i * 2.2) * 0.009));
  }
  const drizzle = new THREE.Mesh(
    new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, 0.0016, 6),
    M.physical({ color: '#fff6ef', roughness: 0.25, clearcoat: 0.8 })
  );
  g.add(drizzle);
  return g;
}

function star() {
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 === 0 ? 0.017 : 0.0075;
    const x = Math.cos(a) * r, y = Math.sin(a) * r;
    if (i === 0) shape.moveTo(x, y); else shape.lineTo(x, y);
  }
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.006, bevelEnabled: true, bevelSize: 0.0022, bevelThickness: 0.002, bevelSegments: 2
  });
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, 0.008, 0);
  const g = new THREE.Group();
  g.add(new THREE.Mesh(geo, M.candy('#ffc83e', { roughness: 0.2 })));
  return g;
}

function heart() {
  const shape = new THREE.Shape();
  shape.moveTo(0, -0.5).bezierCurveTo(-1.1, 0.35, -0.6, 1.2, 0, 0.55)
       .bezierCurveTo(0.6, 1.2, 1.1, 0.35, 0, -0.5);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.45, bevelEnabled: true, bevelSize: 0.14, bevelThickness: 0.12, bevelSegments: 2
  });
  geo.scale(0.016, 0.016, 0.016);
  geo.rotateX(-Math.PI / 2);
  geo.translate(0, 0.01, 0);
  const g = new THREE.Group();
  g.add(new THREE.Mesh(geo, M.candy('#ff5e96', { roughness: 0.18 })));
  return g;
}

const builders = { strawberry, cherry, grape, kiwi, choco, star, heart };
const templates = {};

export function makeTopping(kind) {
  if (!templates[kind]) templates[kind] = shadows(builders[kind]());
  const t = templates[kind].clone();
  t.userData.kind = kind;
  return t;
}

/* ============================================================ ろうそくと炎 */

export const flameUniforms = { time: { value: 0 } };

const flameMat = new THREE.ShaderMaterial({
  uniforms: flameUniforms,
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: `
    varying vec2 vUv;
    uniform float time;
    void main() {
      vec2 p = vec2(vUv.x - 0.5, vUv.y);
      p.x += sin(time * 9.0 + vUv.y * 7.0) * 0.06 * vUv.y;
      float w = 0.40 * pow(max(vUv.y, 0.0), 0.5) * pow(1.0 - vUv.y, 1.25) + 0.028 * (1.0 - vUv.y);
      float d = abs(p.x) / max(w, 0.001);
      float body = smoothstep(1.0, 0.55, d) * smoothstep(0.0, 0.1, vUv.y);
      vec3 col = mix(vec3(1.0, 0.42, 0.04), vec3(1.0, 0.78, 0.2), body);
      col = mix(col, vec3(1.0, 0.97, 0.8), smoothstep(0.55, 1.0, body) * smoothstep(0.6, 0.15, vUv.y));
      gl_FragColor = vec4(col, min(1.0, body * 1.5));
    }`,
  transparent: true, depthWrite: false, side: THREE.DoubleSide
});

export function makeCandle() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(0.0068, 0.0078, 0.052, 16),
    M.physical({ map: M.candleTexture(), roughness: 0.3, clearcoat: 0.6 })
  );
  body.position.y = 0.026;
  body.castShadow = true;
  g.add(body);
  const wick = new THREE.Mesh(
    new THREE.CylinderGeometry(0.001, 0.0008, 0.009, 6),
    M.physical({ color: '#3a3028', roughness: 0.8 })
  );
  wick.position.y = 0.056;
  g.add(wick);
  const flame = new THREE.Mesh(new THREE.PlaneGeometry(0.034, 0.062), flameMat);
  flame.position.y = 0.085;
  flame.visible = false;
  g.add(flame);
  return { group: g, flame };
}
