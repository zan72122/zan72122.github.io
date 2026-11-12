// Park layout and static collision. Shared by the world builder, the player
// controller, the ball and the input picking so they always agree.

export const PARK_R = 55.5;        // walkable radius
export const PLAZA_R = 14;         // wet asphalt plaza
export const RING_PATH_R = 36;     // looping footpath
export const PATH_HALF = 1.25;
export const RADIAL_PATHS = [Math.PI * 0.18, Math.PI * 0.82, Math.PI * 1.5];
export const ROAD_IN = 58.5, ROAD_OUT = 65.5;

// Buildings inside the park have flat roofs that can be walked on.
// rot is a yaw in radians. top = height of the walkable roof.
export const PARK_BUILDINGS = [
  // Kiosk / café with an awning, white plaster.
  { id: 'kiosk', x: 11, z: -19, w: 5.2, d: 4.2, h: 3.3, rot: 0.35, wall: [0.78, 0.77, 0.74], roof: 'flat', awning: true },
  // Community hall, two storeys, white.
  { id: 'hall', x: -25, z: -27, w: 14, d: 9, h: 7.4, rot: -0.55, wall: [0.8, 0.79, 0.76], roof: 'flat' },
  // Small public restroom / shed.
  { id: 'shed', x: 27, z: 14, w: 5, d: 4, h: 3.0, rot: 1.1, wall: [0.7, 0.71, 0.69], roof: 'flat' },
  // Old brick-ish storehouse with a gable roof (not walkable on top).
  { id: 'store', x: -30, z: 20, w: 7, d: 5.5, h: 4.2, rot: 0.9, wall: [0.74, 0.66, 0.56], roof: 'gable' },
];

export const circles = [];   // {x, z, r}
export const boxes = [];     // {x, z, hw, hd, c, s, top, walkable}

export function addCircle(x, z, r) {
  circles.push({ x, z, r });
}

export function addBox(x, z, w, d, rot, top, walkable) {
  boxes.push({ x, z, hw: w / 2, hd: d / 2, c: Math.cos(rot), s: Math.sin(rot), top, walkable });
}

for (const b of PARK_BUILDINGS) {
  const top = b.roof === 'flat' ? b.h + 0.18 : b.h + 2.4;
  addBox(b.x, b.z, b.w, b.d, b.rot, top, b.roof === 'flat');
}

// Local coordinates of a point inside an oriented box.
export function boxLocal(b, x, z) {
  const dx = x - b.x, dz = z - b.z;
  return [dx * b.c - dz * b.s, dx * b.s + dz * b.c];
}

export function insideBox(b, x, z, pad = 0) {
  const [lx, lz] = boxLocal(b, x, z);
  return Math.abs(lx) < b.hw + pad && Math.abs(lz) < b.hd + pad;
}

// Push a point (with radius) out of obstacles whose top is above `y + step`.
export function resolveObstacles(p, radius, y, step) {
  for (const c of circles) {
    const dx = p.x - c.x, dz = p.z - c.z;
    const rr = c.r + radius;
    const d2 = dx * dx + dz * dz;
    if (d2 < rr * rr && y < 6) {
      const d = Math.sqrt(d2) || 1e-4;
      p.x = c.x + (dx / d) * rr;
      p.z = c.z + (dz / d) * rr;
    }
  }
  for (const b of boxes) {
    if (b.top <= y + step) continue;
    const [lx, lz] = boxLocal(b, p.x, p.z);
    const ex = b.hw + radius, ez = b.hd + radius;
    if (Math.abs(lx) < ex && Math.abs(lz) < ez) {
      const px = ex - Math.abs(lx), pz = ez - Math.abs(lz);
      let nx = lx, nz = lz;
      if (px < pz) nx = Math.sign(lx || 1) * ex; else nz = Math.sign(lz || 1) * ez;
      // back to world
      p.x = b.x + nx * b.c + nz * b.s;
      p.z = b.z - nx * b.s + nz * b.c;
    }
  }
  const r = Math.hypot(p.x, p.z);
  if (r > PARK_R) {
    p.x *= PARK_R / r;
    p.z *= PARK_R / r;
  }
}

// Static walkable heights under (x, z): ground and flat roofs.
export function staticSurfaces(x, z, out) {
  out.length = 0;
  let blocked = false;
  for (let i = 0; i < boxes.length; i++) {
    const b = boxes[i];
    if (insideBox(b, x, z)) {
      blocked = true;
      if (b.walkable) out.push({ kind: 'roof', id: i, y: b.top });
    }
  }
  if (!blocked && x * x + z * z < (PARK_R + 0.5) * (PARK_R + 0.5)) out.push({ kind: 'ground', id: -1, y: 0 });
  return out;
}

// Highest static obstacle top at (x, z) (for bubbles, falling).
export function obstacleTop(x, z) {
  let top = 0;
  for (const b of boxes) if (insideBox(b, x, z) && b.top > top) top = b.top;
  return top;
}
