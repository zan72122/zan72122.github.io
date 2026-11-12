// World layout: every authored position lives here so terrain, mechanisms and
// the director agree. Units are metres; +x is "onward", +y up, +z toward camera.
export const DOM = { T: 0.55, H: 3.2, W: 1.7 };          // a standard giant domino
export const GIRL_H = 1.1;

export const L = {
  // Area 1: meadow + ditch (first knock)
  meadowX0: -26, ditchX0: -5.0, ditchX1: -2.7, ditchFloor: -2.6,
  d1X: -5.0 - DOM.T / 2,                  // right face flush with the ditch lip
  girlStartX: -10.5, girlWaitX: -6.35,
  // Ropeway: anchor pole just past the ditch, cable climbs to the town station.
  ropeA: { x: -1.62, y: 6.4, z: 0.0 },    // pulley at the low end
  ropeB: { x: 20.55, y: 11.8, z: 3.0 },   // wheel at the town station (above wall slot W2)
  hookRestLen: 5.85,                      // hook hangs just above where D1's ring lands

  // Area 2: fork
  forkX1: 4.0,                            // front cliff edge down to the valley
  stairX0: 1.9, stairX1: 4.0,             // back stair up to the upper terrace
  upY: 2.6, upZ0: -4.4, upZ1: -1.0, upZ: -2.55,
  upperA: [4.0, 6.9],                     // first upper terrace block (x range)
  upperGap: [6.9, 9.7], boulder: { x: 8.25, y: 2.35, r: 0.55 },
  upperB: [9.7, 14.0],                    // second upper terrace, ends at the wall
  d2X: 6.9 - DOM.T / 2,
  d3X: 4.0 - DOM.T / 2, d3Z: 3.0,
  valleyY: -3.2, valleyZ: 3.0,
  cartX0: 4.425, railX0: 2.3, railX1: 14.05, lipY: -1.1, undercutX: 2.2,
  cartDeck: 0.85,                          // deck top above rail base
  liftX: 13.0, liftTopY: 5.0,

  // The colossal domino ("CD"). The town is built on its pip face.
  cd: { x0: 14.0, x1: 58.0, z0: -11, z1: 11, y0: 0, y1: 5.0, corner: 3.2 },
  seamX: 36.0,
  pathZ: 3.0,                              // town street / rails / gantry line
  pips6: [[19.2, -6.2], [19.2, 0], [19.2, 6.2], [30.8, -6.2], [30.8, 0], [30.8, 6.2]],
  pipR: 1.95,
  pip1: [47.0, -0.5], pip1R: 3.1,
  houseX: 19.5,                            // house #1 centre (town x); walls at +-1.05
  wallDX: 1.05,
  gantryY: 13.2, gantryX0: 7.6, gantryX1: 56.6,
  // Great chasm and the far shore
  shoreX0: 45.0, shoreY: -9.5,
  stay: { x: 55.3, T: 1.45, H: 9.5, W: 4.2 },
  endX: 76.0,
};

export const TOWN_Y = L.cd.y1;
