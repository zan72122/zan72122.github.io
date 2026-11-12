// コースの幾何学：道路の中心線、走行可能領域（符号付き距離場）、地面の高さ。
// 単位はメートル。進行方位 h は +Z から +X 方向へ測る（forward = (sin h, cos h)）。

export const ROAD_HW = 3.0;

export const BRIDGE = { x: 54, z0: 60, z1: 100, H: 3.0, hw: 2.65 };
export const PLATE = { x: 54, z: 127, r: 1.7 };
export const SHOP_PLATE = { x: 88, z: 158.2, r: 1.45 };
export const STOP_LINE_1 = { x: 0, z: 13 };
export const SIGNAL = { stopX: 30, z: 42 };

const smooth = (u) => u * u * (3 - 2 * u);
export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

export function bridgeProfile(t) {
  if (t <= 0 || t >= 1) return 0;
  const up = 0.42, top = 0.52;
  if (t < up) return BRIDGE.H * smooth(t / up);
  if (t < top) return BRIDGE.H;
  return BRIDGE.H * (1 - smooth((t - top) / (1 - top)));
}

// 直線 ['S', len]、円弧 ['A', R, deg(+左/-右)]、軸へ直進 ['TX', x] / ['TZ', z]
export function buildPath(x, z, h, ops, step = 1) {
  const pts = [{ x, z, h, s: 0 }];
  let s = 0;
  const straight = (len) => {
    const n = Math.max(1, Math.ceil(len / step));
    const ds = len / n;
    for (let i = 0; i < n; i++) {
      x += Math.sin(h) * ds;
      z += Math.cos(h) * ds;
      s += ds;
      pts.push({ x, z, h, s });
    }
  };
  for (const op of ops) {
    if (op[0] === 'S') straight(op[1]);
    else if (op[0] === 'TX') straight(Math.abs(op[1] - x));
    else if (op[0] === 'TZ') straight(Math.abs(op[1] - z));
    else if (op[0] === 'A') {
      const R = op[1], ang = (op[2] * Math.PI) / 180;
      const sign = Math.sign(ang);
      const len = Math.abs(ang) * R;
      const n = Math.max(2, Math.ceil(len / step));
      const cx = x + Math.cos(h) * R * sign, cz = z - Math.sin(h) * R * sign;
      for (let i = 0; i < n; i++) {
        h += ang / n;
        x = cx - Math.cos(h) * R * sign;
        z = cz + Math.sin(h) * R * sign;
        s += len / n;
        pts.push({ x, z, h, s });
      }
    }
  }
  return pts;
}

class PolyRegion {
  constructor(pts, hwFn) {
    this.pts = pts;
    this.hw = pts.map((p) => hwFn(p));
    this.enabled = true;
    let minx = Infinity, maxx = -Infinity, minz = Infinity, maxz = -Infinity, mh = 0;
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      minx = Math.min(minx, p.x); maxx = Math.max(maxx, p.x);
      minz = Math.min(minz, p.z); maxz = Math.max(maxz, p.z);
      mh = Math.max(mh, this.hw[i]);
    }
    this.bb = [minx - mh - 3, maxx + mh + 3, minz - mh - 3, maxz + mh + 3];
  }
  sd(x, z) {
    const bb = this.bb;
    if (x < bb[0] || x > bb[1] || z < bb[2] || z > bb[3]) {
      const dx = Math.max(bb[0] - x, 0, x - bb[1]);
      const dz = Math.max(bb[2] - z, 0, z - bb[3]);
      return Math.hypot(dx, dz) + 3;
    }
    const p = this.pts, hw = this.hw;
    let best = Infinity;
    for (let i = 0; i < p.length - 1; i++) {
      const a = p[i], b = p[i + 1];
      const abx = b.x - a.x, abz = b.z - a.z;
      const l2 = abx * abx + abz * abz || 1e-9;
      let t = ((x - a.x) * abx + (z - a.z) * abz) / l2;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const px = a.x + abx * t - x, pz = a.z + abz * t - z;
      const d = Math.sqrt(px * px + pz * pz) - (hw[i] + (hw[i + 1] - hw[i]) * t);
      if (d < best) best = d;
    }
    return best;
  }
  // 中心線上の最近点（進行方向の推定などに使用）
  nearest(x, z) {
    const p = this.pts;
    let best = Infinity, bi = 0, bt = 0;
    for (let i = 0; i < p.length - 1; i++) {
      const a = p[i], b = p[i + 1];
      const abx = b.x - a.x, abz = b.z - a.z;
      const l2 = abx * abx + abz * abz || 1e-9;
      let t = ((x - a.x) * abx + (z - a.z) * abz) / l2;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const px = a.x + abx * t - x, pz = a.z + abz * t - z;
      const d = px * px + pz * pz;
      if (d < best) { best = d; bi = i; bt = t; }
    }
    const a = p[bi], b = p[bi + 1];
    return { d: Math.sqrt(best), s: a.s + (b.s - a.s) * bt, h: a.h, i: bi };
  }
}

class BoxRegion {
  constructor(cx, cz, hx, hz, r = 0) {
    Object.assign(this, { cx, cz, hx, hz, r, enabled: true });
  }
  sd(x, z) {
    const qx = Math.abs(x - this.cx) - this.hx + this.r;
    const qz = Math.abs(z - this.cz) - this.hz + this.r;
    return Math.hypot(Math.max(qx, 0), Math.max(qz, 0)) + Math.min(Math.max(qx, qz), 0) - this.r;
  }
}

class DiscRegion {
  constructor(cx, cz, r) { Object.assign(this, { cx, cz, r, enabled: true }); }
  sd(x, z) { return Math.hypot(x - this.cx, z - this.cz) - this.r; }
}

class SegObstacle {
  constructor(ax, az, bx, bz, r) { Object.assign(this, { ax, az, bx, bz, r, enabled: true }); }
  sd(x, z) {
    const abx = this.bx - this.ax, abz = this.bz - this.az;
    const l2 = abx * abx + abz * abz || 1e-9;
    let t = ((x - this.ax) * abx + (z - this.az) * abz) / l2;
    t = t < 0 ? 0 : t > 1 ? 1 : t;
    return Math.hypot(this.ax + abx * t - x, this.az + abz * t - z) - this.r;
  }
}

export class Course {
  constructor() {
    // 第一コース：スタート → 停止線 → 左カーブ → 信号 → 右カーブ → 青い橋 → お城の広場
    this.routeA = buildPath(0, -2, 0, [['S', 32], ['A', 12, 90], ['S', 30], ['A', 12, -90], ['S', 61]]);
    // お城の広場 → はね橋 → お菓子屋さん
    this.routeB = buildPath(63, 124, Math.PI / 2, [['S', 15], ['A', 10, -90], ['S', 10]]);
    // お菓子屋さん → 大回りしてスタートへ戻る道
    this.routeR = buildPath(96.5, 152, Math.PI / 2, [
      ['A', 9, 90], ['S', 14],
      ['A', 30, 14], ['A', 30, -28], ['A', 30, 14],
      ['S', 10],
      ['A', 30, -14], ['A', 30, 28], ['A', 30, -14],
      ['TZ', 2], ['A', 12, 90], ['TX', 12], ['A', 12, 90], ['S', 1],
    ]);

    const bridgeHw = (p) => {
      if (Math.abs(p.x - BRIDGE.x) > 4) return ROAD_HW;
      const e = Math.min(p.z - (BRIDGE.z0 - 3), BRIDGE.z1 + 3 - p.z);
      if (e <= 0) return ROAD_HW;
      return ROAD_HW + (BRIDGE.hw - ROAD_HW) * smooth(clamp(e / 3, 0, 1));
    };
    this.rA = new PolyRegion(this.routeA, bridgeHw);
    this.rB = new PolyRegion(this.routeB, () => ROAD_HW);
    this.rR = new PolyRegion(this.routeR, () => ROAD_HW);
    this.plaza = new BoxRegion(54, 124, 13, 12, 3);
    this.gateway = new BoxRegion(54, 137.8, 2.7, 4.8, 0);
    this.court = new BoxRegion(54, 151, 11.5, 9.5, 2.5);
    this.forecourt = new DiscRegion(88, 152, 9.5);
    this.regions = [this.rA, this.rB, this.rR, this.plaza, this.gateway, this.court, this.forecourt];

    // 開門前に閉じている場所
    this.rB.enabled = false;
    this.gateway.enabled = false;
    this.court.enabled = false;
    this.forecourt.enabled = false;

    // 障害物（柔らかいガードや噴水など）
    this.obstacles = [];
    // 戻り道とスタートの合流点にある遮断機（開門まで閉）
    const bi = this.routeR.length - 18;
    const bp = this.routeR[bi];
    const lx = Math.cos(bp.h), lz = -Math.sin(bp.h);
    this.boomPos = { x: bp.x, z: bp.z, h: bp.h };
    this.boom = this.addSeg(bp.x - lx * 3.6, bp.z - lz * 3.6, bp.x + lx * 3.6, bp.z + lz * 3.6, 0.3);
    // 信号の柔らかいバー（赤の間だけ下りる）
    this.signalBar = this.addSeg(SIGNAL.stopX + 4.0, 42 - 3.6, SIGNAL.stopX + 4.0, 42 + 3.6, 0.25);
    this.signalBar.enabled = false;
    // 中庭の噴水、メリーゴーラウンド、お菓子屋さんの飴の像
    this.addDisc(54, 152, 3.3);
    this.addDisc(88, 152, 2.7);

    this.plateSink = 0; // 機械式プレートの沈み量 (m)
  }

  addSeg(ax, az, bx, bz, r) { const o = new SegObstacle(ax, az, bx, bz, r); this.obstacles.push(o); return o; }
  addDisc(x, z, r) { const o = new SegObstacle(x, z, x, z, r); this.obstacles.push(o); return o; }

  openCastle() {
    this.gateway.enabled = true;
    this.court.enabled = true;
  }
  openShopRoad() {
    this.rB.enabled = true;
    this.forecourt.enabled = true;
    this.boom.enabled = false;
  }

  // 正なら走行不可、負なら走行可能（境界からの距離）
  field(x, z) {
    let d = Infinity;
    const r = this.regions;
    for (let i = 0; i < r.length; i++) if (r[i].enabled) { const v = r[i].sd(x, z); if (v < d) d = v; }
    let o = Infinity;
    const ob = this.obstacles;
    for (let i = 0; i < ob.length; i++) if (ob[i].enabled) { const v = ob[i].sd(x, z); if (v < o) o = v; }
    return Math.max(d, -o);
  }

  // 半径 r の円を走行可能領域に押し戻す
  resolveCircle(x, z, r) {
    const f = this.field(x, z);
    if (f <= -r) return null;
    const e = 0.03;
    let gx = this.field(x + e, z) - this.field(x - e, z);
    let gz = this.field(x, z + e) - this.field(x, z - e);
    const gl = Math.hypot(gx, gz);
    if (gl < 1e-6) return null;
    gx /= gl; gz /= gl;
    const pen = f + r;
    return { px: -gx * pen, pz: -gz * pen, nx: -gx, nz: -gz, pen };
  }

  groundHeight(x, z) {
    if (Math.abs(x - BRIDGE.x) < 3.9 && z > BRIDGE.z0 && z < BRIDGE.z1) {
      return bridgeProfile((z - BRIDGE.z0) / (BRIDGE.z1 - BRIDGE.z0));
    }
    if (this.plateSink > 0) {
      const d = Math.hypot(x - PLATE.x, z - PLATE.z);
      if (d < PLATE.r) return -this.plateSink;
    }
    return 0;
  }
}
