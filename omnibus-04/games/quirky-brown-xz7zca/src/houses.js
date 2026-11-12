import { QUILT } from './config.js';
import { polyMassProps } from './util.js';

// House blueprints. Coordinates are "design" coordinates: origin at the centre
// of the base, y up, world units. Only the shape, mass and centre of mass differ
// between houses — the world's physics is shared.
//
//   hull   outline used for contacts, balloon collisions and touch (simple polygon, CCW)
//   com    centre of mass of the body (design coords)
//   mass   total mass in bu (lift of one balloon), residents included.
//          Floats with ceil(mass) balloons; every house keeps a 0.4 bu margin.
//   env    'land' (quilt), 'log' (quilt with a wooden log to seesaw on), 'tub' (water in a washtub)
//   tieX   where a string may leave the house (it runs up the wall to the roof line)
//   parts  anchor points for the art

// Rounded rocking foot for the tower: arc of radius R through (0,0).
function footArc(halfW, R, n) {
  const pts = [];
  const a = Math.asin(halfW / R);
  for (let i = 0; i <= n; i++) {
    const t = -a + (2 * a * i) / n;
    pts.push([R * Math.sin(t), R - R * Math.cos(t)]);
  }
  return pts;
}

const COTTAGE = {
  id: 'cottage',
  mass: 2.6,
  com: [0, 50],
  env: 'land',
  resident: 'chick',
  hull: [
    [-72, 0], [72, 0], [72, 94], [90, 94], [54, 123.6], [54, 176], [34, 176], [34, 140.0],
    [0, 168], [-90, 94], [-72, 94],
  ],
  tieX: [-64, 64],
  parts: {
    walls: { x0: -72, x1: 72, y0: 0, y1: 98 },
    roof: [[-90, 94], [90, 94], [0, 168]],
    chimney: { x0: 34, x1: 54, y0: 118, y1: 176 },
    smoke: [44, 180],
    door: { x0: -54, x1: -22, y0: 0, y1: 60 },
    window: { x: 28, y: 54, r: 22, shape: 'round' },
    lantern: { x: -84, y: 92, len: 24 },
    perches: [[-42, 130], [20, 152]],
  },
};

const TOWER_FOOT = footArc(90, 200, 12);
const TOWER = {
  id: 'tower',
  mass: 3.6,
  com: [0, 62], // wide weighted rocking foot (起き上がりこぼし): com far below the foot's centre of curvature (200)
  env: 'land',
  resident: 'giraffe',
  hull: [
    ...TOWER_FOOT,
    [80, 42], [52, 64], [42, 250], [54, 248], [0, 322], [-54, 248], [-42, 250], [-52, 64], [-80, 42],
  ],
  tieX: [-40, 40],
  parts: {
    foot: { R: 200, halfW: 90, y1: 64 },
    walls: { bx: 52, tx: 42, y0: 64, y1: 250 },
    roof: [[-54, 248], [54, 248], [0, 322]],
    windows: [96, 146].map((y) => ({ x: 0, y, w: 30, h: 34 })),
    window: { x: 0, y: 206, r: 20, shape: 'arch' },
    vane: { x: 0, y: 322, len: 26 },
    perches: [[-26, 283]],
  },
};

const BOAT = {
  id: 'boat',
  mass: 4.6,
  com: [0, 34],
  env: 'tub',
  resident: 'duck',
  hull: [
    [-96, 0], [96, 0], [114, 46], [52, 46], [52, 104], [64, 104], [-4, 144], [-74, 104],
    [-62, 104], [-62, 46], [-114, 46],
  ],
  tieX: [-70, 60],
  // buoyancy is computed on the hull below the deck
  keel: { x0: -114, x1: 114, flat: 96, deck: 46 },
  parts: {
    hullBand: { y0: 0, y1: 46 },
    cabin: { x0: -62, x1: 52, y0: 46, y1: 108 },
    roof: [[-74, 104], [64, 104], [-4, 144]],
    window: { x: -10, y: 76, r: 19, shape: 'round' },
    flagPole: { x: 88, y0: 46, y1: 124 },
    perches: [[-40, 124], [30, 122]],
  },
};

const LONG = {
  id: 'long',
  mass: 5.6,
  com: [10, 44], // body alone; the dachshund (a moving load) is added separately
  env: 'log',
  resident: 'dachshund',
  hull: [
    [-190, 0], [190, 0], [190, 88], [204, 88], [180, 130], [-180, 130], [-204, 88], [-190, 88],
  ],
  tieX: [-184, 184],
  loads: [{ kind: 'dog', m: 0.4, x: 110, y: 10, min: -150, max: 150 }],
  parts: {
    walls: { x0: -190, x1: 190, y0: 0, y1: 92 },
    roof: [[-204, 88], [204, 88], [180, 130], [-180, 130]],
    windows: [-138, -46, 46, 138].map((x) => ({ x, y: 50, w: 50, h: 40 })),
    door: { x0: -20, x1: 20, y0: 0, y1: 56 },
    window: { x: 138, y: 50, r: 21, shape: 'rect' },
    perches: [[-120, 131], [60, 131], [150, 131]],
  },
};

const STONE = {
  id: 'stone',
  mass: 7.6,
  com: [0, 58],
  env: 'land',
  resident: 'bear',
  hull: [
    [-102, 0], [102, 0], [102, 108], [118, 108], [80, 133.8], [80, 196], [54, 196], [54, 151.4],
    [0, 188], [-118, 108], [-102, 108],
  ],
  tieX: [-94, 94],
  parts: {
    walls: { x0: -102, x1: 102, y0: 0, y1: 112 },
    roof: [[-118, 108], [118, 108], [0, 188]],
    chimney: { x0: 54, x1: 80, y0: 130, y1: 196 },
    smoke: [67, 200],
    door: { x0: -72, x1: -32, y0: 0, y1: 72 },
    window: { x: 42, y: 62, r: 26, shape: 'rect' },
    lantern: { x: -112, y: 106, len: 22 },
    perches: [[-60, 139], [30, 165]],
  },
};

// Play order: two quilt houses first (dent = weight), then water, then the
// seesaw (big move from one balloon), then the heavy stone house (slow move
// from many). Balloon counts only go up: 3, 4, 5, 6, 8.
export const BLUEPRINTS = [COTTAGE, TOWER, BOAT, LONG, STONE];

// Highest point of the hull above design x.
function topOf(hull, x) {
  let best = -Infinity;
  const n = hull.length;
  for (let i = 0; i < n; i++) {
    const [ax, ay] = hull[i];
    const [bx, by] = hull[(i + 1) % n];
    if ((ax - x) * (bx - x) > 0) continue;
    if (ax === bx) { best = Math.max(best, ay, by); continue; }
    const t = (x - ax) / (bx - ax);
    best = Math.max(best, ay + (by - ay) * t);
  }
  return best;
}

// Derive physical properties once per blueprint.
for (const bp of BLUEPRINTS) {
  const loadMass = (bp.loads || []).reduce((s, l) => s + l.m, 0);
  bp.bodyMass = bp.mass - loadMass;
  const mp = polyMassProps(bp.hull);
  // a hollow-ish toy shell: a bit more rotational inertia than a solid block
  const dx = mp.cx - bp.com[0], dy = mp.cy - bp.com[1];
  bp.inertia = bp.bodyMass * (mp.j + dx * dx + dy * dy) * 1.15;
  let minX = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (const [x, y] of bp.hull) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }
  bp.bounds = { x0: minX, x1: maxX, y0: 0, y1: maxY, w: maxX - minX, h: maxY };
  // Local (COM-relative) hull for touch tests and balloon collisions.
  bp.local = bp.hull.map(([x, y]) => [x - bp.com[0], y - bp.com[1]]);
  // Contact samples: midpoints of short segments along the hull (weight = length),
  // plus the corners with a small weight so a corner can never sink freely.
  const pts = [];
  const n = bp.hull.length;
  for (let i = 0; i < n; i++) {
    const [ax, ay] = bp.hull[i];
    const [bx, by] = bp.hull[(i + 1) % n];
    const L = Math.hypot(bx - ax, by - ay);
    const k = Math.max(1, Math.ceil(L / QUILT.spacing));
    for (let j = 0; j < k; j++) {
      const t = (j + 0.5) / k;
      pts.push({ x: ax + (bx - ax) * t - bp.com[0], y: ay + (by - ay) * t - bp.com[1], w: L / k });
    }
    pts.push({ x: ax - bp.com[0], y: ay - bp.com[1], w: 3 });
  }
  bp.contacts = pts;
  bp.topAt = (x) => topOf(bp.hull, x);
  // Highest point of the hull over a span of x (a filling balloon must clear it).
  bp.topOver = (x0, x1) => {
    let m = -Infinity;
    for (let x = x0; x <= x1; x += 4) m = Math.max(m, topOf(bp.hull, x));
    return Math.max(m, topOf(bp.hull, x1));
  };
  // Buoyancy columns for boats.
  if (bp.keel) {
    const cols = [];
    const { x0, x1, flat, deck } = bp.keel;
    const step = 8;
    for (let x = x0 + step / 2; x < x1; x += step) {
      const ax = Math.abs(x);
      const bottom = ax <= flat ? 0 : ((ax - flat) / (Math.abs(x1) - flat)) * deck;
      cols.push({ x: x - bp.com[0], y: bottom - bp.com[1], top: deck - bp.com[1], w: step });
    }
    bp.columns = cols;
  }
}

export function blueprintFor(index) {
  return BLUEPRINTS[index % BLUEPRINTS.length];
}
