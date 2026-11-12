// World dimensions and layout. All distances are metres.
// Corridor runs along z. Forward (away from the start doors) is -z.
// The polished floor is the plane y = 0 and is shared by two worlds:
// the corridor above (y > 0) and the mirror corridor below (y < 0).

export const HW = 1.8;            // half width of corridor interior
export const H = 2.8;             // ceiling height
export const WALL_T = 0.22;       // wall thickness
export const Z_START = 2.6;       // start end wall (double doors)
export const Z_END = -26.0;       // far end wall of the upper corridor
export const Z_LOWER_END = -46.0; // the mirror corridor keeps going
export const LIGHT_SPACING = 3.0;
export const LIGHT_Z0 = 1.2;      // first ceiling fixture

export const PILLAR = { x: 0, z: -8.6, hw: 0.4 };

// Left-wall door that stands open in the mirror corridor (route A)
export const DOOR_A = { z: -14.4, hw: 0.85, h: 2.15 };
// Right-wall windows that open into a passage in the mirror corridor (route B)
export const WINDOWS = [
  { z0: -12.6, z1: -14.0 },
  { z0: -14.4, z1: -15.8 },
  { z0: -16.2, z1: -17.6 },
];
export const WIN_Y0 = 0.95, WIN_Y1 = 2.35;

// Openings in the mirror corridor's ceiling (the part of the reflection the eye sees most)
export const HOLE_A = { x0: -1.62, x1: -0.46, z0: -15.3, z1: -13.5 };  // hatch into a deep, warm shaft
export const HOLE_B = { x0: 0.56, x1: 1.46, z0: -17.6, z1: -12.6 };    // slot onto a second lamp-lit corridor
export const SHAFT_H = 2.9;
export const SLOT_H = 1.45;

// Surface map (dirt / polish / wet / membrane)
export const MAP_RES = 25; // cells per metre
export const MAP_X0 = -HW, MAP_X1 = HW;
export const MAP_Z0 = Z_END, MAP_Z1 = Z_START;

export const BRUSH_R = 0.37;      // scrubber deck radius

// Regions whose cleaning reveals each anomaly
export const REVEAL_A = { x0: -HW, x1: -0.35, z0: -15.8, z1: -11.4 };
export const REVEAL_B = { x0: 0.35, x1: HW, z0: -17.0, z1: -11.6 };

// Ball resting points after it rolls out of each anomaly
export const BALL_REST_A = { x: -0.95, z: -18.7 };
export const BALL_REST_B = { x: 0.95, z: -19.3 };

export const COLORS = {
  floor: 0xd3cbbd,
  grime: 0x6e675b,
  wallUpper: 0xebe3d1,
  wallLower: 0xa9b69c,
  base: 0x57534c,
  rail: 0xd9cfb9,
  door: 0x4f7c78,
  doorFrame: 0xd6cfbf,
  locker: 0xd4a853,
  slab: 0x2f2c29,
  ceiling: 0xe4ddce,
  fixture: 0xfff6e0,
};

export function runLayout(runIndex, prevRoute) {
  // First run: long approach, cart parked on the right.
  // Later runs: start closer to the fork, cart parked in front of the lane
  // chosen last time, so the other lane is the inviting one.
  if (runIndex === 0) {
    return {
      start: { x: -0.25, z: -0.2 },
      cart: { x: 1.12, z: -3.1, heading: 0 },
      sign: { x: -1.05, z: 0.9 },
      invite: 'none',
    };
  }
  const other = prevRoute === 'A' ? 'B' : 'A';
  const cartX = prevRoute === 'A' ? -1.02 : 1.02;
  return {
    start: { x: other === 'A' ? -0.45 : 0.45, z: -3.4 },
    cart: { x: cartX, z: -6.9, heading: 0.12 * Math.sign(cartX) },
    sign: { x: -cartX * 0.9, z: -2.2 },
    invite: other,
  };
}
