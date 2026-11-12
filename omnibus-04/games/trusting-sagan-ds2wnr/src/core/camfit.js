// 透視投影カメラの当てはめ(純粋数学)。three.js の PerspectiveCamera と同じ規約。
const norm = (v) => {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
};
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

export function makeProjector(pos, target, fovDeg, aspect) {
  const zA = norm([pos[0] - target[0], pos[1] - target[1], pos[2] - target[2]]);
  const xA = norm(cross([0, 1, 0], zA));
  const yA = cross(zA, xA);
  const t = Math.tan((fovDeg * Math.PI) / 360);
  return {
    pos, target, fov: fovDeg, aspect, xA, yA, zA,
    project(p) {
      const d = [p[0] - pos[0], p[1] - pos[1], p[2] - pos[2]];
      const vx = dot(d, xA), vy = dot(d, yA), vz = dot(d, zA);
      const depth = -vz;
      return { x: vx / depth / (t * aspect), y: vy / depth / t, depth };
    },
  };
}

// 姿勢(方向)と画角を固定し、距離と画面上の平行移動で key 点を余白内に収める
export function fitCamera(aspect, keyPoints, opt) {
  const dir = norm(opt.dir);
  const box = opt.box; // {x0,x1,y0,y1} NDC
  let target = opt.target.slice();
  const fit = (d) => {
    let T = target.slice();
    let pr;
    for (let it = 0; it < 6; it++) {
      const P = [T[0] + dir[0] * d, T[1] + dir[1] * d, T[2] + dir[2] * d];
      pr = makeProjector(P, T, opt.fov, aspect);
      let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
      for (const k of keyPoints) {
        const q = pr.project(k);
        x0 = Math.min(x0, q.x); x1 = Math.max(x1, q.x); y0 = Math.min(y0, q.y); y1 = Math.max(y1, q.y);
      }
      const cx = (x0 + x1) / 2 - (box.x0 + box.x1) / 2;
      const cy = (y0 + y1) / 2 - (box.y0 + box.y1) / 2;
      const tt = Math.tan((opt.fov * Math.PI) / 360) * d;
      T = [T[0] + pr.xA[0] * cx * tt * aspect + pr.yA[0] * cy * tt, T[1] + pr.xA[1] * cx * tt * aspect + pr.yA[1] * cy * tt, T[2] + pr.xA[2] * cx * tt * aspect + pr.yA[2] * cy * tt];
      if (it === 5) {
        const fits = x0 - cx >= box.x0 && x1 - cx <= box.x1 && y0 - cy >= box.y0 && y1 - cy <= box.y1;
        return { fits, T, P: [T[0] + dir[0] * d, T[1] + dir[1] * d, T[2] + dir[2] * d] };
      }
    }
  };
  let lo = 4, hi = 80;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (fit(mid).fits) hi = mid; else lo = mid;
  }
  const r = fit(hi);
  return { pos: r.P, target: r.T, fov: opt.fov, aspect, distance: hi };
}

export function cameraOptions(aspect) {
  if (aspect >= 1.0) {
    return { dir: [0.3, 0.15, 1], fov: 38, target: [0, 3.6, -0.5], box: { x0: -0.95, x1: 0.95, y0: -0.5, y1: 0.86 } };
  }
  // 縦長: 画角を広げ、下の余白(選択タグの模型と指)を多めに取る
  return { dir: [0.3, 0.15, 1], fov: 52, target: [0, 3.6, -0.5], box: { x0: -0.97, x1: 0.97, y0: -0.62, y1: 0.8 } };
}
