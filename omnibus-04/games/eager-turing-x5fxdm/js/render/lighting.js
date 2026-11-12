// Time-of-day lighting. tod: 0 = clear morning right after rain, 0.5 = afternoon, 1 = sunset.
import { lerp, clamp } from '../core/math.js';

const KEYS = [
  {
    t: 0,
    elev: 0.95, azim: -0.85,
    col: [1.0, 0.98, 0.96], int: 0.7,
    amb: [0.4, 0.42, 0.5],
    wall: [0.56, 0.5, 0.5], floor: [0.42, 0.32, 0.3], ceil: [0.72, 0.68, 0.66],
    skyTop: [0.62, 0.8, 1.0], skyBot: [0.95, 0.97, 1.0], winBright: 1.5, sun: 0.0,
    grade: [1.0, 1.0, 1.02],
  },
  {
    t: 0.5,
    elev: 0.8, azim: -0.75,
    col: [1.0, 0.95, 0.86], int: 0.74,
    amb: [0.42, 0.4, 0.45],
    wall: [0.58, 0.5, 0.46], floor: [0.44, 0.32, 0.28], ceil: [0.72, 0.66, 0.62],
    skyTop: [0.55, 0.75, 0.98], skyBot: [1.0, 0.95, 0.88], winBright: 1.5, sun: 0.1,
    grade: [1.02, 1.0, 0.98],
  },
  {
    t: 1,
    elev: 0.28, azim: -0.42,
    col: [1.45, 0.92, 0.55], int: 1.0,
    amb: [0.52, 0.5, 0.64],
    wall: [0.52, 0.42, 0.46], floor: [0.34, 0.26, 0.3], ceil: [0.58, 0.5, 0.56],
    skyTop: [0.62, 0.52, 0.85], skyBot: [1.0, 0.62, 0.38], winBright: 1.8, sun: 1.0,
    grade: [1.02, 0.99, 0.98],
  },
];

function mixArr(a, b, t) {
  return a.map((v, i) => lerp(v, b[i], t));
}

export function lightingFor(tod) {
  tod = clamp(tod, 0, 1);
  let k0 = KEYS[0], k1 = KEYS[1];
  if (tod > 0.5) { k0 = KEYS[1]; k1 = KEYS[2]; }
  const t = tod > 0.5 ? (tod - 0.5) / 0.5 : tod / 0.5;
  const s = t * t * (3 - 2 * t);
  const elev = lerp(k0.elev, k1.elev, s);
  const azim = lerp(k0.azim, k1.azim, s); // angle from +x toward -y (screen up)
  // direction toward the light: x right, y down, z toward viewer
  const ce = Math.cos(elev);
  const dir = [Math.cos(azim) * ce * -1 * -1, Math.sin(azim) * ce, Math.sin(elev)];
  // azim negative -> y negative -> light from the back wall; x positive -> from the right
  dir[0] = Math.abs(Math.cos(azim)) * ce;
  const n = Math.hypot(dir[0], dir[1], dir[2]);
  for (let i = 0; i < 3; i++) dir[i] /= n;
  const int = lerp(k0.int, k1.int, s);
  return {
    tod,
    dir,
    col: mixArr(k0.col, k1.col, s).map((v) => v * int),
    amb: mixArr(k0.amb, k1.amb, s),
    wall: mixArr(k0.wall, k1.wall, s),
    floor: mixArr(k0.floor, k1.floor, s),
    ceil: mixArr(k0.ceil, k1.ceil, s),
    skyTop: mixArr(k0.skyTop, k1.skyTop, s),
    skyBot: mixArr(k0.skyBot, k1.skyBot, s),
    winDir: dir,
    winSize: [0.42, 0.55],
    winBright: lerp(k0.winBright, k1.winBright, s),
    sun: lerp(k0.sun, k1.sun, s),
    grade: mixArr(k0.grade, k1.grade, s),
  };
}
