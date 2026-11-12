// やわらかそざいあそび - the 12 soft materials.
// Each material = one MPM constitutive parameter set (phys) + surface look
// (look) + squish-sound recipe (sound) + kid palette. All units follow the
// normalized MPM domain (short screen side = 1, density = 1).
//
// phys fields:
//   kind      'solid' (corotated elastoplastic) | 'fluid' (pressure + viscosity)
//   E, nu     Young's modulus / Poisson ratio (solid). The sim derives its
//             stable timestep from the P-wave modulus E(1-nu)/((1+nu)(1-2nu)).
//   thetaC/S  plastic singular-value clamp [1-thetaC, 1+thetaS]; Infinity = pure elastic
//   hard      hardening exponent xi: mu,la *= exp(hard*(1-Jp))  (snow packs, sand crumbles)
//   relax     Maxwell relaxation rate (stress melts away -> viscoelastic)
//   visc      0..1 knob for real viscous stress, clamped to the explicit
//             diffusion stability limit inside the solver
//   pic       0..1 APIC->PIC blend (damps the affine field): unconditionally
//             stable "thickness" for honey/choco/sand
//   fluidK    bulk stiffness for fluids
//   drag      grid velocity damping (wobble decay)
//   gravScale gravity multiplier (cream floats, honey pours)
//   stick     0..1 how strongly material follows the finger (pullability)
//   friction  tray wall tangential friction 0..1
(function () {
  'use strict';
  const GAME = window.GAME;

  const M = [];

  function def(m) { M.push(m); }

  def({
    id: 'clay', label: 'ねんど', emoji: '🎨',
    phys: { kind: 'solid', E: 500, nu: 0.36, thetaC: 0.028, thetaS: 0.0055,
            hard: 0.4, relax: 0, visc: 0.3, pic: 0.35, drag: 5.0, gravScale: 0.5,
            stick: 0.85, friction: 0.85 },
    look: { gloss: 6, glossStr: 0.10, sss: 0.12, grain: 0.55, sparkle: 0,
            edge: 0.10, fresnel: 0.05, bright: 1.0 },
    sound: { type: 'clay', pitch: 1.0 },
    palette: ['#e2604a', '#4a90e2', '#f5c542', '#6abf69'],
  });

  def({
    id: 'slime', label: 'スライム', emoji: '🫠',
    phys: { kind: 'solid', E: 160, nu: 0.44, thetaC: Infinity, thetaS: Infinity,
            hard: 0, relax: 3.2, visc: 0.5, pic: 0.2, drag: 1.6, gravScale: 0.85,
            stick: 0.95, friction: 0.12 },
    look: { gloss: 90, glossStr: 0.95, sss: 0.55, grain: 0, sparkle: 0,
            edge: 0.22, fresnel: 0.5, bright: 1.02 },
    sound: { type: 'slime', pitch: 1.0 },
    palette: ['#59d68a', '#3fc2e8', '#b06ee8', '#f76fa8'],
  });

  def({
    id: 'mochi', label: 'もち', emoji: '🍡',
    phys: { kind: 'solid', E: 300, nu: 0.43, thetaC: 0.34, thetaS: 0.42,
            hard: 0, relax: 0.55, visc: 0.4, pic: 0.22, drag: 3.0, gravScale: 0.6,
            stick: 0.93, friction: 0.5 },
    look: { gloss: 22, glossStr: 0.28, sss: 0.5, grain: 0.10, sparkle: 0,
            edge: 0.14, fresnel: 0.16, bright: 1.04 },
    sound: { type: 'dough', pitch: 1.25 },
    palette: ['#f7f3ec', '#f8cfe0', '#d3ecc9', '#fff3b8'],
  });

  def({
    id: 'dough', label: 'パンきじ', emoji: '🥖',
    phys: { kind: 'solid', E: 420, nu: 0.38, thetaC: 0.055, thetaS: 0.014,
            hard: 0.25, relax: 0.35, visc: 0.35, pic: 0.35, drag: 4.5, gravScale: 0.5,
            stick: 0.85, friction: 0.75 },
    look: { gloss: 10, glossStr: 0.14, sss: 0.28, grain: 0.75, sparkle: 0,
            edge: 0.12, fresnel: 0.07, bright: 1.02 },
    sound: { type: 'dough', pitch: 0.9 },
    palette: ['#f0d9a8', '#e8c184', '#f7e8c8', '#d8a86a'],
  });

  def({
    id: 'jelly', label: 'ゼリー', emoji: '🍇',
    phys: { kind: 'solid', E: 420, nu: 0.40, thetaC: Infinity, thetaS: Infinity,
            hard: 0, relax: 0, visc: 0.06, pic: 0.02, drag: 0.7, gravScale: 0.9,
            stick: 0.65, friction: 0.10 },
    look: { gloss: 60, glossStr: 0.8, sss: 0.85, grain: 0, sparkle: 0,
            edge: 0.20, fresnel: 0.45, bright: 1.05 },
    sound: { type: 'bounce', pitch: 1.0 },
    palette: ['#e84d6f', '#8e5ce8', '#ff9838', '#4dc3e8'],
  });

  def({
    id: 'pudding', label: 'プリン', emoji: '🍮',
    phys: { kind: 'solid', E: 250, nu: 0.42, thetaC: 0.16, thetaS: 0.10,
            hard: -3.0, relax: 0, visc: 0.15, pic: 0.1, drag: 1.4, gravScale: 0.85,
            stick: 0.6, friction: 0.25 },
    look: { gloss: 46, glossStr: 0.6, sss: 0.6, grain: 0.06, sparkle: 0,
            edge: 0.16, fresnel: 0.3, bright: 1.03 },
    sound: { type: 'bounce', pitch: 0.8 },
    palette: ['#f5c86e', '#f7e3b0', '#c98a4b', '#f5b0c8'],
  });

  def({
    id: 'marshmallow', label: 'マシュマロ', emoji: '☁️',
    phys: { kind: 'solid', E: 330, nu: 0.40, thetaC: 0.09, thetaS: 0.05,
            hard: 0, relax: 1.1, visc: 0.35, pic: 0.3, drag: 3.6, gravScale: 0.38,
            stick: 0.8, friction: 0.55 },
    look: { gloss: 14, glossStr: 0.18, sss: 0.65, grain: 0.16, sparkle: 0.05,
            edge: 0.20, fresnel: 0.12, bright: 1.08 },
    sound: { type: 'fluff', pitch: 1.1 },
    palette: ['#fff8f2', '#ffd9e8', '#d9f0ff', '#fff3c4'],
  });

  def({
    id: 'choco', label: 'チョコ', emoji: '🍫',
    phys: { kind: 'fluid', fluidK: 280, visc: 0.55, pic: 0.45, drag: 2.4, gravScale: 0.8,
            stick: 0.9, friction: 0.5 },
    look: { gloss: 70, glossStr: 0.75, sss: 0.2, grain: 0.04, sparkle: 0,
            edge: 0.15, fresnel: 0.32, bright: 0.98 },
    sound: { type: 'goo', pitch: 0.85 },
    palette: ['#7a4a2e', '#a8765a', '#f2e3cf', '#452a18'],
  });

  def({
    id: 'honey', label: 'はちみつ', emoji: '🍯',
    phys: { kind: 'fluid', fluidK: 320, visc: 0.85, pic: 0.6, drag: 3.4, gravScale: 0.75,
            stick: 0.97, friction: 0.75 },
    look: { gloss: 85, glossStr: 0.95, sss: 0.55, grain: 0, sparkle: 0.04,
            edge: 0.17, fresnel: 0.5, bright: 1.05 },
    sound: { type: 'goo', pitch: 1.15 },
    palette: ['#f5b93e', '#e8952e', '#ffd97a', '#d87f1e'],
  });

  def({
    id: 'snow', label: 'ゆき', emoji: '⛄',
    phys: { kind: 'solid', E: 480, nu: 0.25, thetaC: 0.024, thetaS: 0.0045,
            hard: 4.0, relax: 0, visc: 0.1, pic: 0.3, drag: 3.0, gravScale: 0.7,
            stick: 0.45, friction: 0.4 },
    look: { gloss: 20, glossStr: 0.25, sss: 0.5, grain: 0.35, sparkle: 0.8,
            edge: 0.13, fresnel: 0.2, bright: 1.12 },
    sound: { type: 'crunch', pitch: 1.0 },
    palette: ['#ffffff', '#dceeff', '#c8e8ff', '#f4f8ff'],
  });

  def({
    id: 'sand', label: 'まほうのすな', emoji: '🏰',
    phys: { kind: 'solid', E: 420, nu: 0.30, thetaC: 0.06, thetaS: 0.0006,
            hard: 1.2, relax: 0, visc: 0.2, pic: 0.5, drag: 6.5, gravScale: 0.75,
            stick: 0.4, friction: 0.9 },
    look: { gloss: 8, glossStr: 0.1, sss: 0.1, grain: 0.95, sparkle: 0.55,
            edge: 0.09, fresnel: 0.05, bright: 1.0 },
    sound: { type: 'crunch', pitch: 0.7 },
    palette: ['#e8d5a8', '#e8b4d0', '#b4d0e8', '#cde8b4'],
  });

  def({
    id: 'cream', label: 'クリーム', emoji: '🍦',
    phys: { kind: 'solid', E: 120, nu: 0.38, thetaC: 0.045, thetaS: 0.035,
            hard: 0, relax: 0.5, visc: 0.5, pic: 0.4, drag: 4.5, gravScale: 0.3,
            stick: 0.85, friction: 0.6 },
    look: { gloss: 26, glossStr: 0.3, sss: 0.6, grain: 0.22, sparkle: 0.06,
            edge: 0.24, fresnel: 0.14, bright: 1.1 },
    sound: { type: 'fluff', pitch: 1.3 },
    palette: ['#fffdf4', '#ffe0ec', '#e0f5ff', '#f5ffd8'],
  });

  const byId = {};
  for (const m of M) byId[m.id] = m;

  GAME.Materials = { list: M, byId };
})();
