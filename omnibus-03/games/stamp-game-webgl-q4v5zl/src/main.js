// ぺったん きねんスタンプ — real-3D WebGL stamp game for small children.
// Everything (desk, tray, stamps, postcards, collection board) is real geometry
// rendered with PBR materials, shadows and an environment map. The imprint is a
// projected decal with a noise-driven mask reveal.
import * as THREE from 'three';
import { RoomEnvironment } from '../vendor/RoomEnvironment.js';
import { makeWood, makePaper, makeGrain, makeRubberBump, makeFelt, makeCanvas } from './textures.js';
import { DESIGNS, drawDesignAlpha, makeDesignTexture, makeLabelTexture, makeRubberFace } from './patterns.js';
import { unlockAudio, sfx } from './audio.js';

// ------------------------------------------------------------------ constants
const STAMP_SPACING = 7.2;
const TRAY_Z = 23;
const TRAY_TOP = 1.0;
const RING_Z = TRAY_Z - 2.2;
const CHIP_Z = TRAY_Z + 4.6;
const HOVER_Y = 7.5;
const CARD_POS = new THREE.Vector3(0, 0.06, -2);
const CARD_W = 10, CARD_D = 14.8, CARD_T = 0.08;
const CARD_TOP = CARD_POS.y + CARD_T / 2;
const TARGET = new THREE.Vector3(0, CARD_TOP, -3.2);    // imprint centre on the card
const SNAP_RADIUS = 9;
const PRESS_RADIUS = 4.2;
const RUBBER_R = 2.6, RUBBER_H = 0.85;
const IMPRINT_SIZE = 5.7;
const BOARD_POS = new THREE.Vector3(0, 14.5, -36);
const BOARD_TILT = -0.22;
const SLOT_COLS = 5, SLOT_ROWS = 2, SLOT_DX = 8.9, SLOT_DY = 12.9, SLOT_SCALE = 0.8;
const STACK_POS = new THREE.Vector3(-25, 0, -2);

// ------------------------------------------------------------------ helpers
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeInQuad = (t) => t * t;
const easeOutBack = (t) => { const c = 1.6; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
const easeOutElastic = (t) => t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI) / 3) + 1;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const damp = (rate, dt) => 1 - Math.exp(-rate * dt);

const tweens = [];
function tween(dur, fn, ease = easeOutCubic) {
  return new Promise((resolve) => { tweens.push({ t: 0, dur, fn, ease, resolve }); });
}
function wait(sec) { return tween(sec, () => {}); }
function updateTweens(dt) {
  for (let i = tweens.length - 1; i >= 0; i--) {
    const tw = tweens[i];
    tw.t += dt;
    const k = clamp(tw.t / tw.dur, 0, 1);
    tw.fn(tw.ease(k), k);
    if (k >= 1) { tweens.splice(i, 1); tw.resolve(); }
  }
}

// ------------------------------------------------------------------ renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.02;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf3e9dc);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.38;
pmrem.dispose();

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 400);

// ------------------------------------------------------------------ lights
const hemi = new THREE.HemisphereLight(0xfff6e8, 0xcdbba4, 0.32);
scene.add(hemi);
const key = new THREE.DirectionalLight(0xfff1dc, 2.7);
key.position.set(26, 62, 30);
key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
key.shadow.camera.near = 10; key.shadow.camera.far = 160;
key.shadow.camera.left = -55; key.shadow.camera.right = 55;
key.shadow.camera.top = 60; key.shadow.camera.bottom = -50;
key.shadow.bias = -0.0006;
key.shadow.normalBias = 0.02;
key.shadow.radius = 3;
scene.add(key); scene.add(key.target);
const fill = new THREE.DirectionalLight(0xdbe8ff, 0.35);
fill.position.set(-40, 30, 40);
scene.add(fill);

// ------------------------------------------------------------------ textures
const woodDesk = makeWood({ light: [0.91, 0.80, 0.63], dark: [0.79, 0.64, 0.46], ringFreq: 0.21, seed: 0.3 });
const woodHandle = makeWood({ light: [0.86, 0.60, 0.36], dark: [0.55, 0.31, 0.15], ringFreq: 0.34, seed: 1.7 });
const woodTray = makeWood({ light: [0.94, 0.87, 0.72], dark: [0.80, 0.68, 0.50], ringFreq: 0.26, seed: 2.9 });
const paper = makePaper();
const grain = makeGrain();
const rubberBump = makeRubberBump();
const felt = makeFelt();

woodDesk.map.repeat.set(3, 2); woodDesk.roughnessMap.repeat.set(3, 2);

function woodMaterial(tex, opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    map: tex.map, roughnessMap: tex.roughnessMap, roughness: 1.0, metalness: 0,
    clearcoat: opts.clearcoat ?? 0.35, clearcoatRoughness: opts.clearcoatRoughness ?? 0.4,
    ...opts.extra,
  });
}
const deskMat = woodMaterial(woodDesk, { clearcoat: 0.25, clearcoatRoughness: 0.5 });
const handleMat = woodMaterial(woodHandle, { clearcoat: 0.5, clearcoatRoughness: 0.3 });
const trayMat = woodMaterial(woodTray, { clearcoat: 0.3, clearcoatRoughness: 0.45 });
const paperMat = new THREE.MeshStandardMaterial({ map: paper.map, bumpMap: paper.bumpMap, bumpScale: 0.35, roughness: 0.95, metalness: 0 });
const paperEdgeMat = new THREE.MeshStandardMaterial({ color: 0xf2ecdf, roughness: 1 });

// ------------------------------------------------------------------ desk & room
{
  const desk = new THREE.Mesh(new THREE.BoxGeometry(150, 4, 110), deskMat);
  desk.position.set(0, -2, -5);
  desk.receiveShadow = true; desk.castShadow = true;
  scene.add(desk);
  // front lip of the counter
  const lip = new THREE.Mesh(new THREE.BoxGeometry(150, 6, 3), woodMaterial(woodDesk));
  lip.position.set(0, -5, 49.5); lip.castShadow = true; lip.receiveShadow = true;
  scene.add(lip);
  // back wall & window ledge (minimal, but real geometry)
  const wall = new THREE.Mesh(new THREE.BoxGeometry(220, 120, 4), new THREE.MeshStandardMaterial({ color: 0xeef1ec, roughness: 0.95 }));
  wall.position.set(0, 40, -62); wall.receiveShadow = true;
  scene.add(wall);
  const dado = new THREE.Mesh(new THREE.BoxGeometry(220, 2.5, 1.5), new THREE.MeshStandardMaterial({ color: 0xd9d2c4, roughness: 0.8 }));
  dado.position.set(0, 0.5, -59.5); dado.castShadow = true; dado.receiveShadow = true;
  scene.add(dado);
  // window glow panel on the wall (soft emissive slab, gives the "bright counter" feeling)
  const win = new THREE.Mesh(new THREE.BoxGeometry(70, 46, 1), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff4e0, emissiveIntensity: 0.9, roughness: 0.6 }));
  win.position.set(30, 48, -59.4);
  scene.add(win);
  const frameMat = new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.6 });
  for (const [w, h, x, y] of [[74, 2, 30, 71.5], [74, 2, 30, 24.5], [2, 48, -6, 48], [2, 48, 66, 48], [2, 48, 30, 48], [74, 1.6, 30, 48]]) {
    const f = new THREE.Mesh(new THREE.BoxGeometry(w, h, 2.2), frameMat);
    f.position.set(x, y, -59); f.castShadow = true; scene.add(f);
  }
}

// ------------------------------------------------------------------ ink pad (decorative hero-material accent)
{
  const g = new THREE.Group();
  const caseMat = new THREE.MeshStandardMaterial({ color: 0x2b2f38, roughness: 0.55, metalness: 0.1 });
  const base = new THREE.Mesh(new THREE.BoxGeometry(8, 1.3, 6), caseMat);
  base.position.y = 0.65; base.castShadow = true; base.receiveShadow = true; g.add(base);
  const rim = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.5, 5.2), caseMat);
  rim.position.y = 1.5; rim.castShadow = true; g.add(rim);
  const ink = new THREE.Mesh(new THREE.BoxGeometry(6.6, 0.3, 4.6), new THREE.MeshPhysicalMaterial({ color: 0x6c1220, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.15 }));
  ink.position.y = 1.72; ink.receiveShadow = true; g.add(ink);
  const lid = new THREE.Mesh(new THREE.BoxGeometry(8, 0.6, 6), caseMat);
  lid.position.set(0, 0.3, -6.4); lid.rotation.x = -1.35; lid.position.y = 3.0; lid.castShadow = true; g.add(lid);
  g.position.set(17.5, 0, -4);
  g.rotation.y = -0.25;
  scene.add(g);
}

// ------------------------------------------------------------------ tray
const tray = new THREE.Group();
{
  const base = new THREE.Mesh(new THREE.BoxGeometry(41, TRAY_TOP, 12.5), trayMat);
  base.position.set(0, TRAY_TOP / 2, TRAY_Z);
  base.castShadow = true; base.receiveShadow = true; tray.add(base);
  const railMat = trayMat;
  const back = new THREE.Mesh(new THREE.BoxGeometry(41, 2.2, 1.0), railMat);
  back.position.set(0, 1.1, TRAY_Z - 6.25 + 0.5); back.castShadow = true; back.receiveShadow = true; tray.add(back);
  const front = new THREE.Mesh(new THREE.BoxGeometry(41, 1.7, 0.9), railMat);
  front.position.set(0, 0.85, TRAY_Z + 6.25 - 0.45); front.castShadow = true; front.receiveShadow = true; tray.add(front);
  for (const sx of [-1, 1]) {
    const side = new THREE.Mesh(new THREE.BoxGeometry(1.0, 2.2, 12.5), railMat);
    side.position.set(sx * 20, 1.1, TRAY_Z); side.castShadow = true; side.receiveShadow = true; tray.add(side);
  }
  // ring pockets with real holes
  const shape = new THREE.Shape();
  shape.absarc(0, 0, 3.45, 0, Math.PI * 2, false);
  const hole = new THREE.Path();
  hole.absarc(0, 0, 3.0, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  const ringGeo = new THREE.ExtrudeGeometry(shape, { depth: 1.1, bevelEnabled: true, bevelThickness: 0.12, bevelSize: 0.12, bevelSegments: 2, curveSegments: 40 });
  ringGeo.rotateX(-Math.PI / 2);
  for (let i = 0; i < DESIGNS.length; i++) {
    const r = new THREE.Mesh(ringGeo, trayMat);
    r.position.set((i - 2) * STAMP_SPACING, TRAY_TOP, RING_Z);
    r.castShadow = true; r.receiveShadow = true;
    tray.add(r);
  }
  scene.add(tray);
}

// ------------------------------------------------------------------ stamps
const stamps = [];
const stampHitMeshes = [];
const latheProfile = [
  [0, 0], [2.5, 0], [2.7, 0.5], [2.45, 1.1], [1.75, 1.6], [1.35, 2.3], [1.25, 3.4],
  [1.45, 4.6], [1.95, 5.6], [2.25, 6.5], [2.1, 7.3], [1.5, 7.9], [0.7, 8.15], [0, 8.2],
].map(([x, y]) => new THREE.Vector2(x, y));
const handleGeo = new THREE.LatheGeometry(latheProfile, 56);
const mountGeo = new THREE.CylinderGeometry(2.85, 2.75, 1.1, 56);
const rubberGeo = new THREE.CylinderGeometry(RUBBER_R, RUBBER_R - 0.06, RUBBER_H, 64);
rubberGeo.translate(0, -RUBBER_H / 2, 0); // origin at the top so squashing pushes into the paper
const labelGeo = new THREE.CircleGeometry(1.15, 40);
const chipGeo = new THREE.BoxGeometry(3.6, 0.28, 3.6);
const hitGeo = new THREE.CylinderGeometry(3.3, 3.3, 11, 12);
hitGeo.translate(0, 5.5, 0);
const rubberSideMat = new THREE.MeshStandardMaterial({ color: 0x4c4744, roughness: 0.92, metalness: 0, bumpMap: rubberBump, bumpScale: 0.03 });

function createStamp(design, index) {
  const alpha = drawDesignAlpha(design, 512);
  const designTex = makeDesignTexture(design);
  const face = makeRubberFace(design, alpha);
  const labelTex = makeLabelTexture(design, alpha);
  const inkColor = new THREE.Color(design.ink);

  const g = new THREE.Group();
  const faceMat = new THREE.MeshStandardMaterial({ map: face.map, roughnessMap: face.roughnessMap, roughness: 1, bumpMap: face.bumpMap, bumpScale: 0.09, metalness: 0 });
  const rubber = new THREE.Mesh(rubberGeo, [rubberSideMat, rubberSideMat, faceMat]);
  rubber.position.y = RUBBER_H;
  rubber.castShadow = true; rubber.receiveShadow = true;
  g.add(rubber);

  const mount = new THREE.Mesh(mountGeo, handleMat);
  mount.position.y = RUBBER_H + 0.55;
  mount.castShadow = true; mount.receiveShadow = true;
  g.add(mount);

  const handle = new THREE.Mesh(handleGeo, handleMat);
  handle.position.y = RUBBER_H + 1.1;
  handle.castShadow = true; handle.receiveShadow = true;
  g.add(handle);

  // printed label on top of the handle
  const label = new THREE.Mesh(labelGeo, new THREE.MeshStandardMaterial({ map: labelTex, roughness: 0.6 }));
  label.rotation.x = -Math.PI / 2;
  label.position.y = RUBBER_H + 1.1 + 8.2 + 0.01;
  label.scale.setScalar(0.62 / 1.15 * 1.15); // keep label within the knob top (r ≈ 0.7)
  label.scale.setScalar(0.6);
  g.add(label);

  // colour band on the handle neck (helps a child tell them apart even from the side)
  const band = new THREE.Mesh(new THREE.TorusGeometry(1.32, 0.14, 12, 48), new THREE.MeshStandardMaterial({ color: inkColor, roughness: 0.5 }));
  band.rotation.x = Math.PI / 2;
  band.position.y = RUBBER_H + 1.1 + 3.4;
  band.castShadow = true;
  g.add(band);

  // invisible hit volume for a fat finger
  const hit = new THREE.Mesh(hitGeo, new THREE.MeshBasicMaterial({ visible: false }));
  hit.userData.stamp = null;
  g.add(hit);

  const home = new THREE.Vector3((index - 2) * STAMP_SPACING, TRAY_TOP, RING_Z);
  g.position.copy(home);
  scene.add(g);

  // sample chip on the tray in front of the stamp, tilted against the front rail
  const chip = new THREE.Mesh(chipGeo, [paperEdgeMat, paperEdgeMat, new THREE.MeshStandardMaterial({ map: labelTex, roughness: 0.7 }), paperEdgeMat, paperEdgeMat, paperEdgeMat]);
  chip.position.set(home.x, TRAY_TOP + 0.9, CHIP_Z);
  chip.rotation.x = -0.55;
  chip.castShadow = true; chip.receiveShadow = true;
  scene.add(chip);

  const stamp = { design, index, group: g, rubber, home, hit, designTex, inkColor, target: home.clone(), vel: new THREE.Vector3(), used: 0 };
  hit.userData.stamp = stamp;
  stampHitMeshes.push(hit);
  return stamp;
}
DESIGNS.forEach((d, i) => stamps.push(createStamp(d, i)));

// ------------------------------------------------------------------ imprint decal
const decalVert = /* glsl */`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;
const decalFrag = /* glsl */`
  uniform sampler2D map;
  uniform sampler2D grain;
  uniform vec3 ink;
  uniform float reveal;
  uniform float pressure;
  uniform vec2 grainOffset;
  varying vec2 vUv;
  void main() {
    float a = texture2D(map, vUv).a;
    float g = texture2D(grain, vUv * 1.6 + grainOffset).r;
    float g2 = texture2D(grain, vUv * 5.0 - grainOffset).r;
    // paper fibre lets the ink skip a little (かすれ), eroding thin edges first
    a = smoothstep(0.28, 0.62, a + (g - 0.5) * 0.35);
    a *= mix(0.62, 1.0, smoothstep(0.15, 0.85, g2 * 0.6 + g * 0.4));
    // noisy circular reveal from the centre
    float d = length(vUv - 0.5) * 2.0;
    float m = smoothstep(0.0, 0.22, reveal * 1.4 - d + (g - 0.5) * 0.3);
    a *= m * pressure;
    vec3 col = mix(vec3(1.0), ink, a);
    gl_FragColor = vec4(col, 1.0);
  }
`;
const imprintGeo = new THREE.PlaneGeometry(IMPRINT_SIZE, IMPRINT_SIZE);
imprintGeo.rotateX(-Math.PI / 2);
function createImprint(stamp) {
  const mat = new THREE.ShaderMaterial({
    vertexShader: decalVert, fragmentShader: decalFrag,
    uniforms: {
      map: { value: stamp.designTex }, grain: { value: grain }, ink: { value: stamp.inkColor.clone() },
      reveal: { value: 0 }, pressure: { value: 0.92 + Math.random() * 0.08 },
      grainOffset: { value: new THREE.Vector2(Math.random(), Math.random()) },
    },
    transparent: true, depthWrite: false, blending: THREE.MultiplyBlending,
    polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
  });
  const m = new THREE.Mesh(imprintGeo, mat);
  m.renderOrder = 2;
  return m;
}

// ------------------------------------------------------------------ postcards
const cardGeo = new THREE.BoxGeometry(CARD_W, CARD_T, CARD_D);
function makeCardTopMaterial() {
  const W = 512, H = 758;
  const c = makeCanvas(W, H);
  const ctx = c.getContext('2d');
  ctx.drawImage(paper.map.image, 0, 0, W, H);
  ctx.strokeStyle = 'rgba(190,60,70,0.85)';
  ctx.lineWidth = 3;
  ctx.strokeRect(16, 16, W - 32, H - 32);
  // stamp box top-left
  ctx.lineWidth = 2.5;
  ctx.strokeRect(40, 40, 92, 116);
  ctx.fillStyle = 'rgba(190,60,70,0.85)';
  // postal-code boxes top-right
  for (let i = 0; i < 7; i++) {
    const x = 214 + i * 38 + (i >= 3 ? 12 : 0);
    ctx.strokeRect(x, 52, 28, 40);
  }
  ctx.fillRect(322, 68, 8, 8);
  // faint address lines
  ctx.strokeStyle = 'rgba(120,120,130,0.35)';
  ctx.lineWidth = 2;
  for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(70, 560 + i * 54); ctx.lineTo(440, 560 + i * 54); ctx.stroke(); }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  const bump = paper.bumpMap.clone(); bump.repeat.set(1, 1.48); bump.needsUpdate = true;
  return new THREE.MeshStandardMaterial({ map: t, bumpMap: bump, bumpScale: 0.35, roughness: 0.95 });
}
const cardTopMat = makeCardTopMaterial();
function createCard() {
  const g = new THREE.Group();
  const mesh = new THREE.Mesh(cardGeo, [paperEdgeMat, paperEdgeMat, cardTopMat, paperMat, paperEdgeMat, paperEdgeMat]);
  mesh.castShadow = true; mesh.receiveShadow = true;
  g.add(mesh);
  g.userData = { mesh, imprint: null };
  scene.add(g);
  return g;
}
// blank card stack on the left
{
  for (let i = 0; i < 8; i++) {
    const m = new THREE.Mesh(cardGeo, [paperEdgeMat, paperEdgeMat, cardTopMat, paperMat, paperEdgeMat, paperEdgeMat]);
    m.position.set(STACK_POS.x + (Math.random() - 0.5) * 0.4, CARD_T / 2 + i * CARD_T, STACK_POS.z + (Math.random() - 0.5) * 0.4);
    m.rotation.y = (Math.random() - 0.5) * 0.06;
    m.castShadow = true; m.receiveShadow = true;
    scene.add(m);
  }
}
let card = createCard();
card.position.copy(CARD_POS);

// target guide ring (real torus, glows when a stamp is selected)
const guide = new THREE.Mesh(new THREE.TorusGeometry(RUBBER_R + 0.35, 0.1, 10, 64), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffc46b, emissiveIntensity: 1.2, roughness: 0.4, transparent: true, opacity: 0 }));
guide.rotation.x = -Math.PI / 2;
guide.position.copy(TARGET).add(new THREE.Vector3(0, 0.12, 0));
scene.add(guide);

// ------------------------------------------------------------------ collection board
const board = new THREE.Group();
{
  const feltMat = new THREE.MeshStandardMaterial({ map: felt, roughness: 1 });
  const panel = new THREE.Mesh(new THREE.BoxGeometry(48, 28.5, 1.2), feltMat);
  panel.castShadow = true; panel.receiveShadow = true;
  board.add(panel);
  const frameMat = woodMaterial(woodTray);
  for (const [w, h, x, y] of [[50, 1.6, 0, 14.6], [50, 1.6, 0, -14.6], [1.6, 30, -24.7, 0], [1.6, 30, 24.7, 0]]) {
    const f = new THREE.Mesh(new THREE.BoxGeometry(w, h, 1.8), frameMat);
    f.position.set(x, y, 0.2); f.castShadow = true; f.receiveShadow = true; board.add(f);
  }
  // legs / easel back so it stands on the desk
  const legMat = frameMat;
  for (const sx of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(1.4, 16, 1.4), legMat);
    leg.position.set(sx * 18, -8, -4); leg.rotation.x = 0.35; leg.castShadow = true; board.add(leg);
  }
  board.position.copy(BOARD_POS);
  board.rotation.x = BOARD_TILT;
  scene.add(board);
}
const slotCards = new Array(SLOT_COLS * SLOT_ROWS).fill(null);
let slotCursor = 0;
function slotLocal(i) {
  const col = i % SLOT_COLS, row = Math.floor(i / SLOT_COLS);
  return new THREE.Vector3((col - (SLOT_COLS - 1) / 2) * SLOT_DX, (0.5 - row) * SLOT_DY, 0.6 + 0.2);
}

// sparkles (instanced spheres) for the reveal moment
const SPARKS = 14;
const sparks = new THREE.InstancedMesh(new THREE.SphereGeometry(0.16, 8, 8), new THREE.MeshStandardMaterial({ color: 0xfff2c0, emissive: 0xffd27a, emissiveIntensity: 2 }), SPARKS);
sparks.visible = false;
scene.add(sparks);
const sparkData = [];
async function burstSparks(center, color) {
  sparks.material.emissive.set(color).lerp(new THREE.Color(0xffffff), 0.35);
  sparkData.length = 0;
  for (let i = 0; i < SPARKS; i++) {
    const a = Math.random() * Math.PI * 2, r = 2.2 + Math.random() * 2;
    sparkData.push({ dir: new THREE.Vector3(Math.cos(a) * r, 4 + Math.random() * 4, Math.sin(a) * r), s: 0.6 + Math.random() * 0.8 });
  }
  sparks.visible = true;
  const m = new THREE.Matrix4();
  await tween(0.9, (k, raw) => {
    for (let i = 0; i < SPARKS; i++) {
      const d = sparkData[i];
      const p = new THREE.Vector3().copy(center).addScaledVector(d.dir, k).add(new THREE.Vector3(0, -6 * raw * raw, 0));
      const s = d.s * (1 - raw) * (raw < 0.15 ? raw / 0.15 : 1);
      m.compose(p, new THREE.Quaternion(), new THREE.Vector3(s, s, s));
      sparks.setMatrixAt(i, m);
    }
    sparks.instanceMatrix.needsUpdate = true;
  });
  sparks.visible = false;
}

// ------------------------------------------------------------------ camera chain
const cam = { pos: new THREE.Vector3(), look: new THREE.Vector3(), rate: 3.5 };
let camState = 'establish';
let establish = { pos: new THREE.Vector3(0, 60, 62), look: new THREE.Vector3(0, 2, 0) };

function layoutCamera() {
  const aspect = window.innerWidth / window.innerHeight;
  camera.aspect = aspect;
  camera.fov = aspect < 0.8 ? 58 : aspect < 1.2 ? 50 : 44;
  camera.updateProjectionMatrix();
  const look = new THREE.Vector3(0, 2, 1);
  const dir = new THREE.Vector3(0, 0.74, 0.67).normalize();
  const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  const trayPoint = new THREE.Vector3(0, 2, TRAY_Z + 3);
  const halfW = 22.5;
  // depth to tray point along the view axis = D - dot(trayPoint - look, dir)
  const need = halfW / (tanHalf * aspect) + trayPoint.clone().sub(look).dot(dir);
  const D = Math.max(need, 66);
  establish = { pos: look.clone().addScaledVector(dir, D), look };
}
layoutCamera();
cam.pos.copy(establish.pos); cam.look.copy(establish.look);

const _dp = new THREE.Vector3(), _dl = new THREE.Vector3();
function desiredCamera(out) {
  const s = selected;
  switch (camState) {
    case 'selection': {
      const sp = s.group.position;
      out.pos.set(sp.x * 0.55, 30, sp.z + 26); out.look.set(sp.x * 0.55, 3.5, sp.z - 10); out.rate = 2.6; break;
    }
    case 'travel': {
      const sp = s.group.position;
      const mid = sp.clone().lerp(TARGET, 0.45);
      out.pos.set(mid.x * 0.5, 34, mid.z + 30); out.look.set(mid.x * 0.5, 3, mid.z - 4); out.rate = 2.2; break;
    }
    case 'action': out.pos.set(3, 22, TARGET.z + 20); out.look.set(0, 1.5, TARGET.z - 1); out.rate = 3.2; break;
    case 'macro': out.pos.set(7.5, 8.5, TARGET.z + 10); out.look.set(0, 1.2, TARGET.z); out.rate = 3.0; break;
    case 'reveal': out.pos.set(-1.5, 18.5, TARGET.z + 12); out.look.set(0, 0.5, TARGET.z - 0.5); out.rate = 3.2; break;
    case 'collection': out.pos.set(0, 27, 13); out.look.set(0, 12, BOARD_POS.z); out.rate = 2.4; break;
    default: out.pos.copy(establish.pos); out.look.copy(establish.look); out.rate = 2.0;
  }
}
const camDesired = { pos: new THREE.Vector3(), look: new THREE.Vector3(), rate: 2 };

// ------------------------------------------------------------------ state
let phase = 'idle';      // idle | selected | dragging | press
let selected = null;
let featured = 0;
let dragging = false;
let activePointer = null;
let pointerDownPos = null;
let pointerMoved = false;
let time = 0;

const raycaster = new THREE.Raycaster();
const dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -HOVER_Y);
const ndc = new THREE.Vector2();

function setNdc(e, offsetY = 0) {
  ndc.x = (e.clientX / window.innerWidth) * 2 - 1;
  ndc.y = -(e.clientY / window.innerHeight) * 2 + 1 + offsetY;
}
function hitStamp(e) {
  setNdc(e);
  raycaster.setFromCamera(ndc, camera);
  const hits = raycaster.intersectObjects(stampHitMeshes, false);
  return hits.length ? hits[0].object.userData.stamp : null;
}
function fingerPointOnPlane(e) {
  // result sits a little above the fingertip on screen so the child can see the stamp and the paper
  setNdc(e, 0.14);
  raycaster.setFromCamera(ndc, camera);
  const p = new THREE.Vector3();
  return raycaster.ray.intersectPlane(dragPlane, p) ? p : null;
}

async function returnStamp(stamp) {
  const from = stamp.group.position.clone();
  const to = stamp.home.clone();
  const dist = from.distanceTo(to);
  await tween(0.35 + Math.min(dist, 40) * 0.008, (k) => {
    stamp.group.position.lerpVectors(from, to, k);
    stamp.group.position.y += Math.sin(k * Math.PI) * 5 * (dist > 3 ? 1 : 0.3);
    stamp.group.rotation.x *= 1 - k; stamp.group.rotation.z *= 1 - k;
  }, easeInOutCubic);
  stamp.group.position.copy(to);
  stamp.target.copy(to);
}

function selectStamp(stamp) {
  const prev = selected;
  if (prev && prev !== stamp) returnStamp(prev);
  selected = stamp;
  phase = 'selected';
  camState = 'selection';
  sfx.pick();
  const from = stamp.group.position.clone();
  stamp.target.set(from.x, HOVER_Y, from.z - 2.5);
  tween(0.32, (k) => {
    stamp.group.position.y = from.y + (HOVER_Y - from.y) * k;
    stamp.group.position.z = from.z - 2.5 * k;
    stamp.group.rotation.z = Math.sin(k * Math.PI) * 0.12;
  }, easeOutBack);
}

function onPointerDown(e) {
  unlockAudio();
  if (phase === 'press') return;
  if (activePointer !== null) return; // one finger only
  activePointer = e.pointerId;
  renderer.domElement.setPointerCapture?.(e.pointerId);
  pointerDownPos = { x: e.clientX, y: e.clientY };
  pointerMoved = false;
  const hit = hitStamp(e);
  if (hit && hit !== selected) {
    selectStamp(hit);
    dragging = true; // continue into a drag if the finger moves
    return;
  }
  if (selected) {
    dragging = true;
    // picking up the hovering stamp directly: keep it where it is until the finger moves
    if (!hit) {
      const p = fingerPointOnPlane(e);
      if (p) selected.target.set(clamp(p.x, -32, 32), HOVER_Y, clamp(p.z, -20, 32));
    }
  }
}
function onPointerMove(e) {
  if (e.pointerId !== activePointer || !dragging || !selected || phase === 'press') return;
  if (pointerDownPos) {
    const dx = e.clientX - pointerDownPos.x, dy = e.clientY - pointerDownPos.y;
    if (dx * dx + dy * dy > 36) pointerMoved = true;
  }
  if (!pointerMoved) return;
  phase = 'dragging';
  camState = 'travel';
  const p = fingerPointOnPlane(e);
  if (!p) return;
  selected.target.set(clamp(p.x, -32, 32), HOVER_Y, clamp(p.z, -22, 32));
  // magnetic snap towards the imprint target
  const d = Math.hypot(selected.target.x - TARGET.x, selected.target.z - TARGET.z);
  if (d < SNAP_RADIUS) {
    const k = Math.pow(1 - d / SNAP_RADIUS, 1.4) * 0.9;
    selected.target.x += (TARGET.x - selected.target.x) * k;
    selected.target.z += (TARGET.z - selected.target.z) * k;
    if (!selected.snapped && d < PRESS_RADIUS) { selected.snapped = true; sfx.snap(); }
  } else selected.snapped = false;
}
function onPointerUp(e) {
  if (e.pointerId !== activePointer) return;
  activePointer = null;
  if (!selected || phase === 'press') { dragging = false; return; }
  dragging = false;
  const sp = selected.group.position;
  const d = Math.hypot(sp.x - TARGET.x, sp.z - TARGET.z);
  const dt = Math.hypot(selected.target.x - TARGET.x, selected.target.z - TARGET.z);
  if (Math.min(d, dt) < PRESS_RADIUS) {
    pressSequence(selected);
  } else {
    phase = 'selected';
    camState = 'selection';
  }
}
const el = renderer.domElement;
el.addEventListener('pointerdown', onPointerDown);
el.addEventListener('pointermove', onPointerMove);
el.addEventListener('pointerup', onPointerUp);
el.addEventListener('pointercancel', onPointerUp);
el.addEventListener('contextmenu', (e) => e.preventDefault());
window.addEventListener('touchmove', (e) => { if (e.cancelable) e.preventDefault(); }, { passive: false });

// ------------------------------------------------------------------ the press (中間ピーク → 最終ピーク → もう一回点)
async function pressSequence(stamp) {
  phase = 'press';
  dragging = false;
  camState = 'action';
  const g = stamp.group;
  const start = g.position.clone();
  const startRot = new THREE.Vector2(g.rotation.x, g.rotation.z);
  // glide into exact position while descending
  const contactY = CARD_TOP;
  await tween(0.22, (k) => {
    g.position.x = start.x + (TARGET.x - start.x) * k;
    g.position.z = start.z + (TARGET.z - start.z) * k;
    g.rotation.x = startRot.x * (1 - k); g.rotation.z = startRot.y * (1 - k);
    g.position.y = start.y + (start.y - 3.2 - start.y) * k;
  }, easeInOutCubic);
  camState = 'macro';
  const y0 = g.position.y;
  await tween(0.16, (k) => { g.position.y = y0 + (contactY - y0) * k; }, easeInQuad);
  sfx.press();
  // rubber squash + paper sink
  const cardBase = card.position.y;
  await tween(0.12, (k) => {
    stamp.rubber.scale.y = 1 - 0.22 * k;
    g.position.y = contactY - 0.12 * k;
    card.position.y = cardBase - 0.16 * k;
    card.rotation.z = 0.012 * k;
  });
  // imprint appears under the die
  const imprint = createImprint(stamp);
  imprint.position.set(TARGET.x - card.position.x, CARD_T / 2 + 0.015, TARGET.z - CARD_POS.z);
  card.add(imprint);
  card.userData.imprint = imprint;
  await wait(0.22);
  // lift + reveal
  sfx.lift();
  camState = 'reveal';
  const liftFrom = g.position.y;
  const revealP = tween(0.42, (k) => { imprint.material.uniforms.reveal.value = k; });
  await tween(0.5, (k) => {
    stamp.rubber.scale.y = 1 - 0.22 * (1 - Math.min(1, k * 4));
    g.position.y = liftFrom + (HOVER_Y + 1.5 - liftFrom) * k;
    card.position.y = cardBase - 0.16 * (1 - Math.min(1, k * 3));
    card.rotation.z = 0.012 * (1 - Math.min(1, k * 3));
    // move the stamp off to the side so the imprint is fully visible (like a hand lifting away)
    g.position.z = TARGET.z + 6.5 * k;
    g.position.x = TARGET.x + 5.5 * k;
    g.rotation.z = -0.18 * Math.sin(k * Math.PI);
  }, easeOutCubic);
  await revealP;
  sfx.reveal();
  burstSparks(new THREE.Vector3(TARGET.x, CARD_TOP + 0.6, TARGET.z), stamp.inkColor);
  stamp.used++;
  await wait(0.85);

  // collection: the card flies to the board, a fresh card slides in, the stamp goes home
  camState = 'collection';
  const finished = card;
  const slot = slotCursor % slotCards.length;
  slotCursor++;
  const old = slotCards[slot];
  if (old) {
    tween(0.3, (k) => { old.scale.setScalar(SLOT_SCALE * (1 - k)); }).then(() => { scene.remove(old); });
  }
  const local = slotLocal(slot);
  const worldPos = board.localToWorld(local.clone());
  const worldQuat = board.quaternion.clone().multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2));
  const fromPos = finished.position.clone(), fromQuat = finished.quaternion.clone();
  const mid = fromPos.clone().lerp(worldPos, 0.5).add(new THREE.Vector3(0, 16, 0));
  sfx.collect();
  const flyP = tween(0.8, (k) => {
    // quadratic bezier arc
    const a = fromPos.clone().lerp(mid, k), b = mid.clone().lerp(worldPos, k);
    finished.position.copy(a.lerp(b, k));
    finished.quaternion.slerpQuaternions(fromQuat, worldQuat, k);
    const s = 1 + (SLOT_SCALE - 1) * k;
    finished.scale.setScalar(s);
  }, easeInOutCubic).then(() => { slotCards[slot] = finished; });
  const homeP = (async () => { await wait(0.15); await returnStamp(stamp); })();
  await wait(0.35);
  // new card from the stack
  card = createCard();
  card.position.set(STACK_POS.x, CARD_T / 2 + 8 * CARD_T + 0.02, STACK_POS.z);
  sfx.slide();
  const newFrom = card.position.clone();
  const newP = tween(0.55, (k) => {
    card.position.lerpVectors(newFrom, CARD_POS, k);
    card.position.y += Math.sin(k * Math.PI) * 1.2;
    card.rotation.y = (1 - k) * 0.25;
  }, easeInOutCubic);
  await Promise.all([flyP, homeP, newP]);
  await wait(0.25);
  // back to selection
  selected = null;
  phase = 'idle';
  camState = 'establish';
  // feature a stamp the child has not tried yet (visual invitation to try a different one)
  const minUsed = Math.min(...stamps.map((s) => s.used));
  const candidates = stamps.filter((s) => s.used === minUsed && s !== stamp);
  featured = (candidates.length ? candidates[Math.floor(Math.random() * candidates.length)] : stamps[0]).index;
}

// ------------------------------------------------------------------ frame loop
const clock = new THREE.Clock();
let firstFrame = true;
// adaptive resolution: drop the pixel ratio a notch if the device cannot hold ~45fps
let perfAcc = 0, perfN = 0, pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
function adaptQuality(rawDt) {
  if (rawDt > 0.25) return; // tab switch etc.
  perfAcc += rawDt; perfN++;
  if (perfN >= 90) {
    const avg = perfAcc / perfN; perfAcc = 0; perfN = 0;
    if (avg > 1 / 42 && pixelRatio > 1.2) {
      pixelRatio = Math.max(1.2, pixelRatio - 0.35);
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }
}
function frame() {
  const rawDt = clock.getDelta();
  adaptQuality(rawDt);
  const dt = Math.min(rawDt, 0.05);
  time += dt;
  updateTweens(dt);

  // stamps: follow targets while selected / dragging; idle bob for the featured one
  for (const s of stamps) {
    const g = s.group;
    if (s === selected && phase !== 'press') {
      const k = damp(dragging ? 16 : 8, dt);
      const prev = g.position.clone();
      g.position.lerp(s.target, k);
      const v = g.position.clone().sub(prev).divideScalar(Math.max(dt, 1e-3));
      g.rotation.z += (clamp(-v.x * 0.012, -0.28, 0.28) - g.rotation.z) * damp(10, dt);
      g.rotation.x += (clamp(v.z * 0.012, -0.28, 0.28) - g.rotation.x) * damp(10, dt);
      // gentle bob while hovering
      if (!dragging) g.position.y += Math.sin(time * 4) * 0.08 * damp(6, dt);
    } else if (phase === 'idle' && s.index === featured && s.group.position.distanceTo(s.home) < 0.01 + 3) {
      const bob = (Math.sin(time * 3.2) * 0.5 + 0.5);
      g.position.y = s.home.y + bob * 0.9;
      g.rotation.y = Math.sin(time * 1.6) * 0.25;
    }
  }

  // guide ring
  const wantGuide = selected && phase !== 'press';
  guide.material.opacity += ((wantGuide ? 0.9 : 0) - guide.material.opacity) * damp(8, dt);
  if (wantGuide) {
    const near = selected ? Math.hypot(selected.group.position.x - TARGET.x, selected.group.position.z - TARGET.z) : 99;
    const pulse = 1 + Math.sin(time * 6) * 0.05;
    guide.scale.setScalar(pulse * (near < PRESS_RADIUS ? 0.9 : 1.15));
    guide.material.emissiveIntensity = near < PRESS_RADIUS ? 2.2 : 1.2;
    guide.material.emissive.set(near < PRESS_RADIUS ? selected.inkColor : new THREE.Color(0xffc46b));
  }

  // camera
  desiredCamera(camDesired);
  cam.pos.lerp(camDesired.pos, damp(camDesired.rate, dt));
  cam.look.lerp(camDesired.look, damp(camDesired.rate * 1.15, dt));
  camera.position.copy(cam.pos);
  camera.lookAt(cam.look);

  renderer.render(scene, camera);
  if (firstFrame) {
    firstFrame = false;
    const l = document.getElementById('loading');
    if (l) { l.classList.add('done'); setTimeout(() => l.remove(), 600); }
  }
  requestAnimationFrame(frame);
}

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  layoutCamera();
});
window.addEventListener('orientationchange', () => setTimeout(() => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  layoutCamera();
}, 250));

// pick the first "featured" stamp at random so the opening tray has a natural focal point
featured = Math.floor(Math.random() * stamps.length);
requestAnimationFrame(frame);

// debug hooks (used by the automated screenshot harness; harmless in production)
window.__dbg = { scene, camera, stamps, renderer, key, hemi, fill, board, get card() { return card; }, get phase() { return phase; }, get camState() { return camState; }, TARGET, THREE };
