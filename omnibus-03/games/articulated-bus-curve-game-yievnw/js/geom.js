// 道路パス（中心線）と、パスに沿ったリボン状ジオメトリのビルダ
import * as THREE from '../vendor/three.module.min.js';

export const UP = new THREE.Vector3(0, 1, 0);

// 進行方向ベクトル（heading θ: +Z を θ=0、θ増加＝左回り）
export function dirOf(theta) {
  return new THREE.Vector3(Math.sin(theta), 0, Math.cos(theta));
}
// 進行方向に対する左向き単位ベクトル
export function leftOf(theta) {
  return new THREE.Vector3(Math.cos(theta), 0, -Math.sin(theta));
}
export function wrapAngle(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;

// 決定論的乱数（レベルごとに同じ景色になるように）
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * セグメント列から道路中心線をサンプリングする。
 * segments: {t:'s', len} | {t:'a', r, ang(deg), dir(+1 左 / -1 右)}
 */
export function makePath(segments, step = 0.5) {
  const samples = [];
  const arcs = [];
  let pos = new THREE.Vector3(0, 0, 0);
  let theta = 0;
  let s = 0;
  samples.push({ p: pos.clone(), theta, s, curv: 0 });
  for (const seg of segments) {
    if (seg.t === 's') {
      const n = Math.ceil(seg.len / step);
      const ds = seg.len / n;
      const d = dirOf(theta);
      for (let k = 1; k <= n; k++) {
        pos = pos.clone().addScaledVector(d, ds);
        s += ds;
        samples.push({ p: pos.clone(), theta, s, curv: 0 });
      }
    } else {
      const ang = (seg.ang * Math.PI) / 180;
      const R = seg.r;
      const dir = seg.dir;
      const arcLen = R * ang;
      const n = Math.ceil(arcLen / step);
      const ds = arcLen / n;
      const theta0 = theta;
      const center = pos.clone().addScaledVector(leftOf(theta0), dir * R);
      const arc = { center, r: R, dir, s0: s, s1: s + arcLen, theta0, ang, midTheta: theta0 + dir * ang / 2 };
      arcs.push(arc);
      for (let k = 1; k <= n; k++) {
        const th = theta0 + (dir * ang * k) / n;
        pos = center.clone().addScaledVector(leftOf(th), -dir * R);
        s += ds;
        samples.push({ p: pos.clone(), theta: th, s, curv: dir / R });
      }
      theta = theta0 + dir * ang;
    }
  }
  const total = s;
  const path = {
    samples, arcs, total,
    // 弧長 s における補間サンプル
    at(sq) {
      const sc = clamp(sq, 0, total);
      // samples は等間隔に近いので推定→補正
      let i = clamp(Math.floor((sc / total) * (samples.length - 1)), 0, samples.length - 2);
      while (i > 0 && samples[i].s > sc) i--;
      while (i < samples.length - 2 && samples[i + 1].s < sc) i++;
      const a = samples[i], b = samples[i + 1];
      const t = (sc - a.s) / Math.max(1e-6, b.s - a.s);
      const dth = wrapAngle(b.theta - a.theta);
      return {
        p: a.p.clone().lerp(b.p, t),
        theta: a.theta + dth * t,
        s: sc,
        curv: lerp(a.curv, b.curv, t),
      };
    },
    // 点に最も近い中心線上の位置（s, 横ずれ lat（左が正）, heading）
    nearest(pt) {
      let best = 0, bd = Infinity;
      for (let i = 0; i < samples.length; i++) {
        const dx = samples[i].p.x - pt.x, dz = samples[i].p.z - pt.z;
        const d2 = dx * dx + dz * dz;
        if (d2 < bd) { bd = d2; best = i; }
      }
      // 隣接区間に射影して精度を上げる
      const i0 = Math.max(0, best - 1), i1 = Math.min(samples.length - 1, best + 1);
      let res = null, rd = Infinity;
      for (let i = i0; i < i1; i++) {
        const a = samples[i], b = samples[i + 1];
        const abx = b.p.x - a.p.x, abz = b.p.z - a.p.z;
        const l2 = abx * abx + abz * abz;
        let t = ((pt.x - a.p.x) * abx + (pt.z - a.p.z) * abz) / Math.max(1e-6, l2);
        t = clamp(t, 0, 1);
        const px = a.p.x + abx * t, pz = a.p.z + abz * t;
        const dx = pt.x - px, dz = pt.z - pz;
        const d = dx * dx + dz * dz;
        if (d < rd) {
          rd = d;
          const theta = a.theta + wrapAngle(b.theta - a.theta) * t;
          const L = leftOf(theta);
          res = { s: a.s + (b.s - a.s) * t, theta, lat: dx * L.x + dz * L.z, dist: Math.sqrt(d) };
        }
      }
      return res;
    },
    // 次に来るカーブ（s 以降で最初に終わるもの）
    nextArc(sq) {
      for (const a of arcs) if (a.s1 > sq - 2) return a;
      return arcs[arcs.length - 1] || null;
    },
  };
  return path;
}

/**
 * サンプル列に沿ったリボン。fnA/fnB は (sample) -> Vector3 で左右のエッジ点を返す。
 * uvRepeat: 進行方向のテクスチャ繰り返し（m あたり）
 */
export function buildRibbon(samples, fnA, fnB, opts = {}) {
  const n = samples.length;
  const pos = new Float32Array(n * 2 * 3);
  const uv = new Float32Array(n * 2 * 2);
  const idx = [];
  const vScale = opts.vScale ?? 0.25;
  const uRange = opts.uRange ?? 1;
  for (let i = 0; i < n; i++) {
    const a = fnA(samples[i], i), b = fnB(samples[i], i);
    pos.set([a.x, a.y, a.z, b.x, b.y, b.z], i * 6);
    const v = samples[i].s * vScale;
    uv.set([0, v, uRange, v], i * 4);
    if (i < n - 1) {
      const k = i * 2;
      idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
    }
  }
  // 面が下を向いていたら巻き順を反転（上向き法線に揃える）。垂直面はそのまま。
  {
    const mid = Math.floor((n - 1) / 2) * 6;
    const v = (o) => new THREE.Vector3(pos[idx[mid + o] * 3], pos[idx[mid + o] * 3 + 1], pos[idx[mid + o] * 3 + 2]);
    const nrm = new THREE.Vector3();
    new THREE.Triangle(v(0), v(1), v(2)).getNormal(nrm);
    if (nrm.y < -1e-4) for (let i = 0; i < idx.length; i += 3) { const t = idx[i + 1]; idx[i + 1] = idx[i + 2]; idx[i + 2] = t; }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// 複数ジオメトリを結合（同一マテリアル向け）
export function mergeGeometries(geos) {
  let total = 0, totalIdx = 0;
  for (const g of geos) { total += g.attributes.position.count; totalIdx += g.index ? g.index.count : g.attributes.position.count; }
  const pos = new Float32Array(total * 3), nor = new Float32Array(total * 3), uv = new Float32Array(total * 2);
  const idx = new Uint32Array(totalIdx);
  let vo = 0, io = 0;
  for (const g of geos) {
    const p = g.attributes.position, nn = g.attributes.normal, u = g.attributes.uv;
    pos.set(p.array, vo * 3);
    if (nn) nor.set(nn.array, vo * 3);
    if (u) uv.set(u.array, vo * 2);
    const cnt = p.count;
    if (g.index) { for (let i = 0; i < g.index.count; i++) idx[io + i] = g.index.array[i] + vo; io += g.index.count; }
    else { for (let i = 0; i < cnt; i++) idx[io + i] = i + vo; io += cnt; }
    vo += cnt;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  out.setIndex(new THREE.BufferAttribute(idx, 1));
  return out;
}

// 角丸長方形の断面（XY平面、外向き法線つき）
export function roundedRectProfile(w, y0, y1, r, segsPerCorner = 5) {
  const pts = [];
  const hw = w / 2;
  const corners = [
    { cx: hw - r, cy: y1 - r, a0: 0 },            // 右上
    { cx: -hw + r, cy: y1 - r, a0: Math.PI / 2 }, // 左上
    { cx: -hw + r, cy: y0 + r, a0: Math.PI },     // 左下
    { cx: hw - r, cy: y0 + r, a0: Math.PI * 1.5 },// 右下
  ];
  for (const c of corners) {
    for (let k = 0; k <= segsPerCorner; k++) {
      const a = c.a0 + (Math.PI / 2) * (k / segsPerCorner);
      const nx = Math.cos(a), ny = Math.sin(a);
      pts.push({ x: c.cx + nx * r, y: c.cy + ny * r, nx, ny });
    }
  }
  pts.push({ ...pts[0] });
  return pts;
}

// 角丸ボックス（車体用）: 幅 w(X) 高さ h(Y) 長さ l(Z)、角の丸み r
export function roundedBox(w, h, l, r) {
  // ベベル分だけ小さい長方形を押し出すと、ちょうど w×h×l の角丸ボックスになる
  const shape = new THREE.Shape();
  const hw = w / 2 - r, hh = h / 2 - r;
  shape.moveTo(-hw, -hh); shape.lineTo(hw, -hh); shape.lineTo(hw, hh); shape.lineTo(-hw, hh); shape.closePath();
  const g = new THREE.ExtrudeGeometry(shape, {
    depth: l - r * 2, bevelEnabled: true, bevelThickness: r, bevelSize: r, bevelSegments: 3, curveSegments: 6,
  });
  g.translate(0, 0, -(l - r * 2) / 2);
  g.computeVertexNormals();
  return g;
}
