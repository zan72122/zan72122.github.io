// 粘液の道の設計（純粋な数学。three.js に依存しない）
// 座標系: x 東(右) / y 上 / z 手前(カメラ側)。ターミナルは x -9..9, z -6..6, y 0..8。
// 道は始点(天井近く)から床の終点まで一本の連続曲線として最初から設計し、
// 3 つの主道群(A: 緩い螺旋 / B: 大きな横曲がり / C: 二回の緩い折り返し)を
// 接続点を共有して順に連結する。各群は 3 片、片ごとに貼付位置 2 つ。

export const ROOM = { x0: -9, x1: 9, z0: -6, z1: 6, h: 8, width: 18, depth: 12 };
export const SLIDE = { width: 0.8, depth: 0.26, wall: 0.05, rim: 0.055 };
// 貼付位置の片内位置(片ごとに二つ)。画面上で重ならないよう tools/optimize-layout.mjs で選んだ値
export const SLOT_US = [
  0.25, 0.64, 0.25, 0.7, 0.2, 0.75,
  0.26, 0.75, 0.25, 0.75, 0.25, 0.75,
  0.25, 0.75, 0.25, 0.64, 0.25, 0.75,
];
export const slotU = (slotIndex) => SLOT_US[slotIndex];
export const PIECE_COUNT = 9;
export const SLOT_COUNT = 18;
// 接続点(片の両端)の設計高さ。手すりの高さ = 中心線。
export const CONN_HEIGHTS = [7.0, 6.34, 5.67, 5.0, 4.34, 3.67, 3.0, 2.1, 1.2, 0.32];
// 終幕の傾斜: 接続点ごとの高さ補正(最大 0.3m)と、水平部を下り勾配に変える端の傾き
export const TILT_MAX = 0.3;

const DEG = Math.PI / 180;

function spiralControl() {
  // 緩い螺旋: 約 1.1 回転、半径を少しずつ縮めて重なる周回を高さ 1.8m 離す
  const cx = -6.3, cz = -1.0, th0 = 490, th1 = 90, r0 = 2.05, r1 = 1.45;
  const pts = [];
  for (let th = th0; th >= th1 - 1e-6; th -= 20) {
    const k = (th0 - th) / (th0 - th1);
    const r = r0 + (r1 - r0) * k;
    pts.push([cx + r * Math.cos(th * DEG), cz + r * Math.sin(th * DEG)]);
  }
  return pts;
}

// 大きな横曲がり (A の終点から右奥へ)
const BEND = [[-4.5, 0.45], [-2.8, -0.15], [-1.0, -1.15], [0.9, -2.05], [2.7, -2.75], [4.15, -3.3], [5.15, -3.75]];
// 二回の緩い折り返し (右側を奥から手前へ)
const SWITCHBACK = [
  [6.1, -4.3], [7.05, -4.45], [7.85, -3.95], [7.95, -3.1], [7.2, -2.6],
  [6.0, -2.45], [4.8, -2.05], [3.95, -1.45], [3.8, -0.55], [4.4, 0.0],
  [5.5, 0.35], [6.6, 0.75], [7.55, 1.15]
];

function centripetalCR(p0, p1, p2, p3, t) {
  // centripetal Catmull-Rom (alpha=0.5) on 2D points
  const d = (a, b) => Math.pow(Math.hypot(b[0] - a[0], b[1] - a[1]), 0.5) || 1e-4;
  const t0 = 0, t1 = t0 + d(p0, p1), t2 = t1 + d(p1, p2), t3 = t2 + d(p2, p3);
  const tt = t1 + (t2 - t1) * t;
  const lerp = (a, b, ta, tb) => {
    const w = (tt - ta) / (tb - ta);
    return [a[0] + (b[0] - a[0]) * w, a[1] + (b[1] - a[1]) * w];
  };
  const A1 = lerp(p0, p1, t0, t1), A2 = lerp(p1, p2, t1, t2), A3 = lerp(p2, p3, t2, t3);
  const B1 = lerp(A1, A2, t0, t2), B2 = lerp(A2, A3, t1, t3);
  return lerp(B1, B2, t1, t2);
}

export function smoothstep(e0, e1, x) {
  const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0)));
  return t * t * (3 - 2 * t);
}
export const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
export const lerp = (a, b, t) => a + (b - a) * t;

function hermite(y0, y1, m0, m1, L, u) {
  const u2 = u * u, u3 = u2 * u;
  const h00 = 2 * u3 - 3 * u2 + 1, h10 = u3 - 2 * u2 + u, h01 = -2 * u3 + 3 * u2, h11 = u3 - u2;
  return h00 * y0 + h10 * L * m0 + h01 * y1 + h11 * L * m1;
}
function hermiteD(y0, y1, m0, m1, L, u) {
  const u2 = u * u;
  const d00 = 6 * u2 - 6 * u, d10 = 3 * u2 - 4 * u + 1, d01 = -6 * u2 + 6 * u, d11 = 3 * u2 - 2 * u;
  return (d00 * y0 + d10 * L * m0 + d01 * y1 + d11 * L * m1) / L; // dy/ds
}

export function buildRoute() {
  const spiral = spiralControl();
  const ctrl = [...spiral, ...BEND, ...SWITCHBACK];
  const jointCtrlIdx = [0, spiral.length - 1, spiral.length - 1 + BEND.length, ctrl.length - 1];
  // 密なサンプル
  const SUB = 24;
  const plan = [];
  const ctrlS = [];
  let s = 0;
  for (let i = 0; i < ctrl.length - 1; i++) {
    const p0 = ctrl[Math.max(0, i - 1)], p1 = ctrl[i], p2 = ctrl[i + 1], p3 = ctrl[Math.min(ctrl.length - 1, i + 2)];
    const e0 = i === 0 ? [2 * p1[0] - p2[0], 2 * p1[1] - p2[1]] : p0;
    const e3 = i + 2 > ctrl.length - 1 ? [2 * p2[0] - p1[0], 2 * p2[1] - p1[1]] : p3;
    for (let k = 0; k < SUB; k++) {
      const q = centripetalCR(e0, p1, p2, e3, k / SUB);
      if (plan.length) {
        const prev = plan[plan.length - 1];
        s += Math.hypot(q[0] - prev.x, q[1] - prev.z);
      }
      if (k === 0) ctrlS[i] = s;
      plan.push({ x: q[0], z: q[1], s });
    }
  }
  {
    const q = ctrl[ctrl.length - 1];
    const prev = plan[plan.length - 1];
    s += Math.hypot(q[0] - prev.x, q[1] - prev.z);
    ctrlS[ctrl.length - 1] = s;
    plan.push({ x: q[0], z: q[1], s });
  }
  const total = s;
  // 群境界の弧長
  const gS = jointCtrlIdx.map((i) => ctrlS[i]);
  // 各群を弧長で三等分して接続点 10 個
  const connS = [];
  for (let g = 0; g < 3; g++) {
    for (let k = 0; k < 3; k++) connS.push(gS[g] + ((gS[g + 1] - gS[g]) * k) / 3);
  }
  connS.push(total);

  function planAt(sq) {
    sq = clamp(sq, 0, total);
    // 二分探索
    let lo = 0, hi = plan.length - 1;
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (plan[mid].s <= sq) lo = mid; else hi = mid;
    }
    const a = plan[lo], b = plan[hi];
    const w = b.s > a.s ? (sq - a.s) / (b.s - a.s) : 0;
    const x = a.x + (b.x - a.x) * w, z = a.z + (b.z - a.z) * w;
    let tx = b.x - a.x, tz = b.z - a.z;
    const tl = Math.hypot(tx, tz) || 1;
    tx /= tl; tz /= tl;
    return { x, z, tx, tz };
  }
  function planTangent(sq) {
    const e = 0.12;
    const a = planAt(sq - e), b = planAt(sq + e);
    let tx = b.x - a.x, tz = b.z - a.z;
    const l = Math.hypot(tx, tz) || 1;
    return [tx / l, tz / l];
  }
  // 左回り曲率(+ = 左へ曲がる)
  function curvatureLeft(sq) {
    const e = 0.35;
    const [ax, az] = planTangent(sq - e), [bx, bz] = planTangent(sq + e);
    const dtx = (bx - ax) / (2 * e), dtz = (bz - az) / (2 * e);
    const [tx, tz] = planTangent(sq);
    const sideX = -tz, sideZ = tx; // 右手方向
    return -(dtx * sideX + dtz * sideZ);
  }

  const pieces = [];
  for (let i = 0; i < PIECE_COUNT; i++) {
    pieces.push({ index: i, group: Math.floor(i / 3), s0: connS[i], s1: connS[i + 1], len: connS[i + 1] - connS[i] });
  }
  // 終幕の目標: 接続点の高さ補正と端の勾配
  const tiltDelta = CONN_HEIGHTS.map((_, k) => 0.8 * TILT_MAX * (1 - k / 9));
  const tiltSlope = CONN_HEIGHTS.map((_, k) => {
    if (k === 9) return 0; // 床の終点は水平で止まる
    const chord = (j) => (CONN_HEIGHTS[j + 1] + tiltDelta[j + 1] - CONN_HEIGHTS[j] - tiltDelta[j]) / pieces[j].len;
    if (k === 0) return 0.6 * chord(0);
    return 0.6 * Math.max(chord(k - 1), chord(k)); // 両側とも負。緩い方に合わせる
  });

  const route = {
    total, plan, ctrl, connS, pieces, gS,
    tiltDelta, tiltSlope,
    planAt, planTangent, curvatureLeft,
  };

  // 片 i の局所位置 u(0..1) の中心線高さ。tilt は接続点ごとの 0..1。
  route.heightAt = (i, u, tilt) => {
    const f0 = tilt ? tilt[i] : 0, f1 = tilt ? tilt[i + 1] : 0;
    const y0 = CONN_HEIGHTS[i] + f0 * tiltDelta[i], y1 = CONN_HEIGHTS[i + 1] + f1 * tiltDelta[i + 1];
    return hermite(y0, y1, f0 * tiltSlope[i], f1 * tiltSlope[i + 1], pieces[i].len, u);
  };
  route.slopeAt = (i, u, tilt) => {
    const f0 = tilt ? tilt[i] : 0, f1 = tilt ? tilt[i + 1] : 0;
    const y0 = CONN_HEIGHTS[i] + f0 * tiltDelta[i], y1 = CONN_HEIGHTS[i + 1] + f1 * tiltDelta[i + 1];
    return hermiteD(y0, y1, f0 * tiltSlope[i], f1 * tiltSlope[i + 1], pieces[i].len, u);
  };
  // 枠: 位置 p、接線 t、右 side、上 up (バンク込み)
  route.frame = (i, u, tilt, out) => {
    const pc = pieces[i];
    const sq = pc.s0 + pc.len * u;
    const pl = planAt(sq);
    const [tx, tz] = planTangent(sq);
    const y = route.heightAt(i, u, tilt);
    const dy = route.slopeAt(i, u, tilt);
    let Tx = tx, Ty = dy, Tz = tz;
    const tl = Math.hypot(Tx, Ty, Tz);
    Tx /= tl; Ty /= tl; Tz /= tl;
    // 右(水平)
    let Sx = -Tz, Sy = 0, Sz = Tx;
    const sl = Math.hypot(Sx, Sz) || 1;
    Sx /= sl; Sz /= sl;
    // 上 = S x T
    let Ux = Sy * Tz - Sz * Ty, Uy = Sz * Tx - Sx * Tz, Uz = Sx * Ty - Sy * Tx;
    // 終幕のバンク(内側へ傾ける)
    const f = tilt ? lerp(tilt[i], tilt[i + 1], u) : 0;
    let bank = 0;
    if (f > 0) bank = f * clamp(0.3 * curvatureLeft(sq), -0.21, 0.21);
    if (bank !== 0) {
      const c = Math.cos(bank), s2 = Math.sin(bank);
      const nSx = Sx * c + Ux * s2, nSy = Sy * c + Uy * s2, nSz = Sz * c + Uz * s2;
      const nUx = Ux * c - Sx * s2, nUy = Uy * c - Sy * s2, nUz = Uz * c - Sz * s2;
      Sx = nSx; Sy = nSy; Sz = nSz; Ux = nUx; Uy = nUy; Uz = nUz;
    }
    const o = out || {};
    o.x = pl.x; o.y = y; o.z = pl.z;
    o.tx = Tx; o.ty = Ty; o.tz = Tz;
    o.sx = Sx; o.sy = Sy; o.sz = Sz;
    o.ux = Ux; o.uy = Uy; o.uz = Uz;
    o.bank = bank; o.s = sq;
    return o;
  };
  // 垂れの下にある物(下の道・床)までの余裕。柔らかい袋が他の道へ食い込まないように使う。
  const CL_N = 40;
  const clearance = [];
  {
    const all = [];
    for (let i = 0; i < PIECE_COUNT; i++) {
      for (let k = 0; k <= 60; k++) {
        const f = route.frame(i, k / 60, null);
        all.push({ x: f.x, y: f.y, z: f.z, s: f.s });
      }
    }
    for (let i = 0; i < PIECE_COUNT; i++) {
      const arr = [];
      for (let k = 0; k <= CL_N; k++) {
        const f = route.frame(i, k / CL_N, null);
        let cl = f.y - 0.04; // 床
        for (const q of all) {
          if (Math.abs(q.s - f.s) < 2.0 || q.y >= f.y) continue;
          if (Math.hypot(q.x - f.x, q.z - f.z) < 0.8) cl = Math.min(cl, f.y - q.y - 0.12);
        }
        arr.push(cl);
      }
      clearance.push(arr);
    }
  }
  route.clearanceAt = (i, u) => {
    const x = clamp(u, 0, 1) * CL_N;
    const k = Math.min(CL_N - 1, Math.floor(x));
    return lerp(clearance[i][k], clearance[i][k + 1], x - k);
  };
  // 接続点の位置
  route.connPoint = (k, tilt) => {
    const i = Math.min(k, PIECE_COUNT - 1);
    const u = k === PIECE_COUNT ? 1 : 0;
    return route.frame(i, u, tilt);
  };
  return route;
}

// 全経路を一本の弧長 S(0..total) で扱うための変換
export function globalToPiece(route, S) {
  S = clamp(S, 0, route.total);
  for (let i = 0; i < PIECE_COUNT; i++) {
    const p = route.pieces[i];
    if (S <= p.s1 || i === PIECE_COUNT - 1) return { i, u: clamp((S - p.s0) / p.len, 0, 1) };
  }
  return { i: PIECE_COUNT - 1, u: 1 };
}
