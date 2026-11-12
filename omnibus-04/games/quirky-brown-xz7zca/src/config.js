// One physical world. Every house obeys the same constants; houses differ only
// in shape, mass, centre of mass and where they stand.
//
// Units: 1 world unit ≈ 1 CSS px at zoom 1. Mass is measured in "bu": the net
// lift of one full balloon. A house of mass 2.6 therefore floats with 3.
// H (the little cottage's height) ≈ 176 units.

export const G = 980;

export const SIM = {
  h: 1 / 720,          // fixed substep
  maxSub: 72,          // at most 0.1 s of physics per frame
};

export const BALLOON = {
  lift: 1,             // bu, net lift of a full balloon
  mass: 1.2,           // bu, inertial mass (rubber + gas + the air it drags along)
  radius: 40,          // world units, full size (±8%)
  c1: 3.0,             // linear drag
  c2: 0.0027,          // quadratic drag -> free rise ≈ 1.5 H/s
  inflate: 0.42,       // s to inflate
  stringMin: 211,      // 1.2 H
  stringMax: 264,      // 1.5 H
  clearRoof: 90,       // a balloon always ends up at least this far above the roof
  compliance: 0.00003, // cotton string stretches a hair -> springy "ping"
  gate: 0.45,          // s: next balloon on the same house waits for a taut string or this long
  extra: 4,            // cap per house = ceil(mass) + extra
  grabMax: 1.0,        // bu: a finger can pull a balloon with at most this much
};

// The quilt: a thick, soft, stitched cloth. Load -> dent, nearly linear so every
// balloon shows. d = (F / k w)^(1/exp).
export const QUILT = {
  k: 0.75,             // stiffness per unit contact length (cottage rests ≈ 16 deep)
  exp: 1.1,
  beta: 0.004,         // Hunt–Crossley damping (s/unit): ~2 visible bobs
  mu: 1.3,             // felt on painted wood grips well
  stickK: 35,          // static friction: tangential spring per unit contact length
  stickC: 1.1,         // ... and its damping
  spacing: 10,         // contact sampling along the hull
  stick: 1.0,          // fibre adhesion per unit length (≤ 0.2 bu per house)
  stickRange: 5,       // units: the cloth clings this far, then lets go
};

export const WATER = {
  rho: 0.0008,         // bu per unit^2 of submerged cross-section
  dragV: 0.003,        // vertical damping per submerged area
  dragH: 0.002,
  waveAmp: 1.3,
};

// The toy washtub (たらい) the boat-house floats in.
export const TUB = {
  halfW: 172,          // inner half width
  rim: 56,             // rim height above the quilt
  level: 46,           // water surface (a brim-full tub, so the hull's waterline shows)
  floor: 4,
  wallK: 40,           // soft felt bumper on the inner wall
};

// A wooden toy log lying on the quilt (the long house's seesaw pivot).
export const LOG = {
  r: 24,
  y: 18,               // centre height (it has sunk a little into the quilt)
  stiff: 30,           // wood vs cloth
};

export const AIR = {
  houseLin: 1.1,       // per 100 units of house height
  houseRot: 0.9,       // angular damping rate (1/s) in still air
};

export const WIND = {
  base: 36,            // units/s up high, always to the right (towards the next house)
  gust: 72,            // extra speed at the peak of a gust (balloons lean ~15°)
  layer: 528,          // boundary layer: wind grows up to 3 H
  gustSpeed: 260,      // gusts travel across the scene (units/s)
};

export const WORLD = {
  spacing: 1300,       // distance between houses along the road
  groundBack: 120,     // top surface of the quilt behind the house line
};

export const FINGER = {
  press: 0.15,         // bu: a touch pushes into what it touches
  pressTime: 0.1,
  palm: 50,            // px: bigger contacts are palms/cheeks -> ignored
  edge: 12,            // px: resting thumbs at the very screen edge are ignored
  stroke: 24,          // px of travel that turns a touch into a stroke
  holdRepeat: 0.6,     // s: a still, held finger keeps asking for balloons
};
