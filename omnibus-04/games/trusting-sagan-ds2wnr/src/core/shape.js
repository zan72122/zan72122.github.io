// 粘液の断面形状(純粋関数)。見た目(view)と玉の休止位置(sim)の両方が同じ形を使う。
// 未支持: 中心線の糸から縦にだらりと垂れる細い袋(深いU字)。
// 支持後: 幅 0.8m・分厚い縁のU字の透明な滑り台。同じ断面トポロジーを連続変形させる。
import { SLIDE, smoothstep, clamp, lerp } from './route.js';

export const SOFT = { width: 0.24, baseDepth: 0.28, droop: 0.78, wall: 0.035, rim: 0.026 };
export const BALL_R = 0.105;

export function easeFirst(p) {
  p = clamp(p, 0, 1);
  return 1 - Math.pow(1 - p, 3);
}
export function easeSecond(p) {
  p = clamp(p, 0, 1);
  return 1 - Math.pow(1 - p, 2.4);
}
// 片の両側の進み具合(0..1, イージング済み)
export function sideEase(pc) {
  const e = [0, 0];
  for (let k = 0; k < 2; k++) {
    const p = pc.sideProg[k];
    e[k] = pc.sideKind[k] === 2 ? easeSecond(p) : easeFirst(p);
  }
  return e;
}

// 片固有の硬化値 c(u)。両側が揃えば全域 1。
export function rawCure(e, u, su) {
  const maskB = smoothstep(0.4, 0.6, u);
  const maskA = 1 - maskB;
  const grow = (uc, ee) => {
    const r = 0.85 * ee;
    return smoothstep(r, r - 0.1, Math.abs(u - uc));
  };
  const ua = su ? su[0] : 0.25, ub = su ? su[1] : 0.75;
  return clamp(grow(ua, e[0]) * maskA + grow(ub, e[1]) * maskB, 0, 1);
}

// 休止のくぼみ位置と垂れの量
export function sagInfo(e) {
  const first = e[0] >= e[1] ? 0 : 1;
  const eF = Math.max(e[0], e[1]);
  const eS = Math.min(e[0], e[1]);
  const peak = first === 0 ? 0.5 + 0.16 * eF : 0.5 - 0.16 * eF;
  const droop = SOFT.droop * (1 - 0.3 * eF) * (1 - eS);
  return { peak, droop, flowing: eS >= 0.55 };
}

function warp(u, peak) {
  return u < peak ? (0.5 * u) / peak : 0.5 + (0.5 * (u - peak)) / (1 - peak);
}

// 断面パラメータ。J0/J1 は接続点で隣と共有する硬化値、clearance(u) は下にある物までの余裕
export function profileAt(e, u, J0, J1, clearance, out, su) {
  let c = rawCure(e, u, su);
  const w0 = smoothstep(0.1, 0, u), w1 = smoothstep(0.9, 1, u);
  c = lerp(c, J0, w0);
  c = lerp(c, J1, w1);
  const sg = sagInfo(e);
  const g = Math.pow(Math.max(0, Math.sin(Math.PI * warp(u, sg.peak))), 1.5);
  let Ds = SOFT.baseDepth + sg.droop * g;
  if (clearance !== undefined) Ds = Math.max(0.12, Math.min(Ds, clearance - 0.32));
  const k = smoothstep(0, 1, c);
  const o = out || {};
  o.c = c;
  o.k = k;
  o.W = lerp(SOFT.width, SLIDE.width, k);
  o.D = lerp(Ds, SLIDE.depth, k);
  o.wall = lerp(SOFT.wall, SLIDE.wall, k);
  o.rim = lerp(SOFT.rim, SLIDE.rim, k);
  o.n = lerp(2.0, 2.8, k);
  return o;
}

// 断面上の点(局所 2D: x = 右方向, y = 上方向)。v は -1..1、outer で外面
export function surfacePoint(pr, v, outer) {
  const a = (v * Math.PI) / 2;
  const s = Math.sin(a), c = Math.cos(a);
  const ex = 2 / pr.n;
  const sx = Math.sign(s) * Math.pow(Math.abs(s), ex);
  const cy = Math.pow(Math.abs(c), ex);
  const hw = pr.W / 2 + (outer ? pr.wall : 0);
  const d = pr.D + (outer ? pr.wall : 0);
  return [hw * sx, -d * cy];
}

// 貼付くぼみの断面位置(外面、カメラ側)
export function slotLocal(pr, sideSign) {
  const v = lerp(0.84, 0.5, pr.k) * sideSign;
  const p = surfacePoint(pr, v, true);
  // 外向き法線(近似)
  const p2 = surfacePoint(pr, v + 0.02 * sideSign, true);
  let nx = (p2[1] - p[1]) * sideSign, ny = -(p2[0] - p[0]) * sideSign;
  const l = Math.hypot(nx, ny) || 1;
  return { x: p[0], y: p[1], nx: nx / l, ny: ny / l };
}
