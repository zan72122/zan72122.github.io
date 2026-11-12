// カタツムリの天井上の道と背骨(純粋関数)。
// 通常は楕円の道を歩き、終幕では止まって前半身を内側へ半円に曲げ、足を天井につけたまま向きを反転する。
import { SNAIL } from './layout.js';

const L = SNAIL.loop;
const N = 2048;
const tab = [];
let perim = 0;
{
  let px = L.cx + L.a, pz = L.cz;
  tab.push({ th: 0, s: 0 });
  for (let k = 1; k <= N; k++) {
    const th = (k / N) * Math.PI * 2;
    const x = L.cx + L.a * Math.cos(th), z = L.cz + L.b * Math.sin(th);
    perim += Math.hypot(x - px, z - pz);
    tab.push({ th, s: perim });
    px = x; pz = z;
  }
}
export const LOOP_PERIMETER = perim;

function thetaAt(s) {
  s = ((s % perim) + perim) % perim;
  let lo = 0, hi = N;
  while (hi - lo > 1) {
    const m = (lo + hi) >> 1;
    if (tab[m].s <= s) lo = m; else hi = m;
  }
  const a = tab[lo], b = tab[hi];
  return a.th + ((b.th - a.th) * (s - a.s)) / (b.s - a.s || 1);
}
export function loopPoint(s, out) {
  const th = thetaAt(s);
  const o = out || {};
  o.x = L.cx + L.a * Math.cos(th);
  o.z = L.cz + L.b * Math.sin(th);
  let tx = -L.a * Math.sin(th), tz = L.b * Math.cos(th);
  const l = Math.hypot(tx, tz);
  o.tx = tx / l; o.tz = tz / l;
  return o;
}
// θ = π/2 + 0.35 (手前の中央から少し左)に頭
export const SNAIL_START_D = (() => {
  const th = Math.PI / 2 + 0.35;
  let best = 0, bd = Infinity;
  for (const e of tab) if (Math.abs(e.th - th) < bd) { bd = Math.abs(e.th - th); best = e.s; }
  return best;
})();

const BEND = 1.95; // 曲げる前半身の長さ

export function easeInOut(t) {
  t = Math.max(0, Math.min(1, t));
  return t * t * (3 - 2 * t);
}

// 合成した道の点: g <= Db は楕円、Db..Db+BEND は弧、その先は直線
function compositePoint(g, ctx, out) {
  if (!ctx.turn || g <= ctx.Db) return loopPoint(g, out);
  const lam = Math.min(g - ctx.Db, BEND);
  const k = ctx.kappa;
  const B = ctx.B;
  let x, z, tx, tz;
  if (Math.abs(k) < 1e-5) {
    x = B.x + B.tx * lam; z = B.z + B.tz * lam; tx = B.tx; tz = B.tz;
  } else {
    const sn = Math.sin(k * lam), cs = Math.cos(k * lam);
    x = B.x + B.tx * (sn / k) + ctx.nx * ((1 - cs) / k);
    z = B.z + B.tz * (sn / k) + ctx.nz * ((1 - cs) / k);
    tx = B.tx * cs + ctx.nx * sn;
    tz = B.tz * cs + ctx.nz * sn;
  }
  const extra = g - ctx.Db - BEND;
  if (extra > 0) { x += tx * extra; z += tz * extra; }
  out.x = x; out.z = z; out.tx = tx; out.tz = tz;
  return out;
}

// 背骨の標本 (尾 σ=0 → 頭 σ=len, さらに頭の先へ ext だけ延長)
export function snailSpine(sn, count, ext, outArr) {
  const len = SNAIL.length;
  const turning = sn.mode === 'turn' || sn.mode === 'after' || sn.mode === 'rest';
  const ctx = { turn: false };
  let Ghead = sn.d;
  if (turning) {
    const Dh = sn.d;
    const Db = Dh - BEND;
    const B = loopPoint(Db, {});
    // 内側(楕円の中心側)へ曲がる
    let nx = -B.tz, nz = B.tx;
    const cx = L.cx - B.x, cz = L.cz - B.z;
    if (nx * cx + nz * cz < 0) { nx = -nx; nz = -nz; }
    const e = sn.mode === 'turn' ? easeInOut(sn.turnT) : 1;
    ctx.turn = true; ctx.Db = Db; ctx.B = B; ctx.nx = nx; ctx.nz = nz;
    ctx.kappa = (e * Math.PI) / BEND;
    Ghead = Db + BEND + (sn.mode === 'turn' ? 0 : sn.after);
  }
  const out = outArr || [];
  for (let k = 0; k < count; k++) {
    const sig = ((len + ext) * k) / (count - 1);
    const g = Ghead - len + sig;
    const o = out[k] || (out[k] = {});
    if (sig > len) {
      // 頭の先は頭の向きへ直線で延長
      compositePoint(Ghead, ctx, o);
      const e2 = sig - len;
      o.x += o.tx * e2; o.z += o.tz * e2;
    } else {
      compositePoint(g, ctx, o);
    }
    o.sig = sig;
  }
  return out;
}
