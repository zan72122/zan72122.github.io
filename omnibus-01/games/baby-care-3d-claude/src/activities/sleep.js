/* ============================================================================
 * activities/sleep.js — 🌙 ねんね
 * ----------------------------------------------------------------------------
 * The whole scene is about one thing: watching a child fall asleep, in six
 * stages you can read from across the room.
 *
 *   したく    🪥 仕上げみがき (real plaque you scrub off, then a "ぺっ" rinse)
 *             → 🌙 パジャマ → 🪟 カーテン → 💡 でんき.
 *             The room has to be dark. Leave the lamp on and the baby will
 *             point at it until you do something about it.
 *   えほん    a board book with pages that bend as they turn; every page makes
 *             the eyelids heavier.
 *   とんとん  slow and even. Too fast and the eyes snap straight open.
 *   くまさん  placed on its shelf outside the sleeping space.
 *   ながれぼし once asleep, outside the window.
 *
 * The lighting is the hero: one warm practical with a real falloff, moonlight
 * through the glass, and a star lamp turning slowly across the ceiling.
 * ========================================================================== */

import * as THREE from 'three';
import * as MAT from '../engine/materials.js';
import * as TEX from '../engine/textures.js';
import { expandHitTargets } from '../engine/hit-targets.js';
import {
  Resources, makeCrib, makeMattress, makeTeddy,
  makePictureBook, makeToothbrush, makeTeeth, roundedBoxGeometry, mergeAll, bake,
  hitProxy, anchorPoint, snd
} from '../fx/toys.js';
import { checkAssist, waitGame, waitUntil } from './assist-utils.js';
import { SleepBedPrep } from './sleep-bed-prep.js';

/** Pyjama fabric colour, kept in step with the `pyjamas` garment in dress.js. */
const PAJAMA_COLOR = 0xb9a7f0;

const clamp = THREE.MathUtils.clamp;
const lerp = THREE.MathUtils.lerp;

/* Stage thresholds — the readable spine of the whole activity. */
const STAGES = [
  { at: 0.00, name: 'awake' },
  { at: 0.14, name: 'yawn' },
  { at: 0.30, name: 'rub' },
  { at: 0.47, name: 'drowsy' },
  { at: 0.68, name: 'nodding' },
  { at: 0.90, name: 'asleep' }
];

/** A lit room caps how sleepy the baby is willing to get. */
const LIGHT_CAP = 0.62;

const PAT_MIN = 380;    // ms — faster than this and the eyes fly open
const PAT_MAX = 1500;   // ms — slower than this is just a stray tap
const BRUSH_RADIUS = 0.024; // m — one toddler swipe spans the tiny tooth arc


/* ========================================================================== *
 * SleepActivity
 * ========================================================================== */

export class SleepActivity {
  constructor(ctx) {
    this.ctx = ctx;
    this.res = new Resources();
    this.group = new THREE.Group();
    this.group.name = 'sleep-activity';

    this.t = 0;
    this.pickables = [];

    this._ndc = new THREE.Vector2();
    this._ray = new THREE.Raycaster();
    this._v = new THREE.Vector3();
    this._v2 = new THREE.Vector3();

    this.sleepiness = 0.05;
    this.stage = 0;
    this.asleep = false;
    this.asleepAt = -1;

    this.todo = { teeth: false, pajama: false, curtains: false, lamp: false };
    this.lampOn = true;
    this.curtains = 0;          // 0 = closed, 1 = open (Room.setCurtains(open))
    this.brushing = false;
    this.brushDrag = false;

    this.bookOpen = false;
    this.bookPagesRead = 0;

    this.patTimes = [];
    this.lastPatAt = 0;

    this.teddyGiven = false;
    this._headOffset = { x: 0, z: 0 };
    this._babyRestore = null;
    this._masked = [];
    this._timers = [];
    this._pointTimer = 5;
    this._hintTimer = 3.0;
    this._blinkTimer = 2.0;
    this._gestureTimer = 4.0;
    this._zzzTimer = 0;
    this._snoreTimer = 0;
    this._starTimer = 1e9;
    this._m4 = new THREE.Matrix4();
    this.projectorForced = null;
    this.setupRewarded = false;
    this.bedPrep = new SleepBedPrep(this);
  }

  /* ------------------------------------------------------------- build --- */

  async build() {
    const ctx = this.ctx;
    const res = this.res;

    ctx.scene.add(this.group);
    res.root(this.group);
    res.onDispose(() => this.group.clear());

    const cribPos = anchorPoint(ctx, 'crib', [0, 0, -0.06]);
    cribPos.y = 0;
    this.cribPos = cribPos;

    // If the room already dressed the crib anchor, park its meshes for the
    // duration — this scene needs bedding it can actually simulate.
    this._maskAnchor('crib');

    this._buildCrib();
    this._buildNightstand();
    this.bedPrep.build();
    this._buildLighting();
    this._buildSky();
    this._buildProps();
    this._buildShots();

    res.claim(this.group);
  }

  /**
   * D2 — the cot is the one place a body-root-relative framing cannot work.
   * The baby *lies* here, so a preset composed for a seated baby aims a metre
   * above the mattress; and the cot's own rails sit between any low camera and
   * the face. So this scene hands the rig a pivot that rides the baby's head
   * and re-composes the three shots that matter around it:
   *
   *   crib-face  portrait over the near rail — the money shot
   *   face       the same framing, so a `goTo('face')` from anywhere lands here
   *   crib       wider "checking on the baby" angle taking in the fitted sheet
   *
   * The pivot carries the baby's yaw, so in these offsets +Z runs from the
   * head down toward the feet, +X is the far side of the cot and -X is the
   * room side you actually stand on. Every camera therefore sits on the near
   * rail, above rail height, angled back along the body — which is what makes
   * the shot read as "over the cot rail" rather than "inside the cot".
   * `restorePresets()` in app.setActivity puts the defaults back on exit.
   */
  _buildShots() {
    const ctx = this.ctx;

    this.shotPivot = new THREE.Object3D();
    this.shotPivot.name = 'sleep-shot-pivot';
    this._syncShotPivot();
    this.group.add(this.shotPivot);

    const rig = ctx.cameraRig;
    if (!rig?.overridePreset) return;
    rig.setSubject?.(this.shotPivot);
    // Sight square to the open side of the cot from an adult's leaning height,
    // not from the ceiling. The long horizontal leg keeps the body running
    // left-to-right; the modest rise clears the near rail without turning the
    // mattress and fitted sheet into a plan view.
    const faceShot = {
      space: 'subject',
      pos: [-1.100, 1.350, 0.060], target: [-0.015, 0.015, 0.060],
      fov: 28, focusRange: 0.10, dof: 1.35, handheld: 0.45, roll: 0.35,
      minAspect: 0.82
    };
    rig.overridePreset('crib-face', faceShot);
    // so a goTo('face') from anywhere in this scene lands on the cot portrait
    rig.overridePreset('face', faceShot);
    rig.overridePreset('crib', {
      space: 'subject',
      pos: [-1.250, 1.550, 0.140], target: [0.000, -0.010, 0.140],
      fov: 28, focusRange: 0.18, dof: 1.15, handheld: 0.50, roll: 0.35,
      minAspect: 0.82
    });
    rig.overridePreset('closeup', {
      space: 'subject',
      pos: [-1.150, 1.400, 0.100], target: [0.000, 0.005, 0.100],
      fov: 29, focusRange: 0.14, dof: 1.20, handheld: 0.55, roll: 0.35,
      minAspect: 0.82
    });
  }

  /**
   * Park the pivot on the head. During preparation it frames the empty cot
   * before the rig has posed, so the very first snap is never wild.
   */
  _syncShotPivot() {
    if (!this.shotPivot) return;
    const b = this.ctx.baby;
    let head = null;
    if (this.bedPrep?.preparing()) {
      head = this.bedPrep.focusPoint(this._v2);
    }
    // The head *bone* is where the face geometry actually is; headWorldPos()
    // reports a point ~0.16 m past the crown, which is enough to slide a
    // 0.5 m-wide portrait frame clean off the face.
    try {
      if (!head) {
        const bone = b?.bone?.('head');
        if (bone?.isObject3D) head = bone.getWorldPosition(this._v2);
        else head = b?.headWorldPos?.();
      }
    } catch (e) { head = null; }
    if (!head || !Number.isFinite(head.x)) {
      head = this._v.set(this.cribPos.x - 0.12, this.surfaceY + 0.09, this.cribPos.z);
    }
    // The pivot lives under this.group, which is at the identity — world and
    // local coincide, so a straight copy is correct and stays correct.
    this.shotPivot.position.copy(head);
    const yaw = this.bedPrep?.preparing()
      ? Math.PI / 2
      : (this.ctx.baby?.group?.rotation.y ?? Math.PI / 2);
    this.shotPivot.rotation.set(0, yaw, 0);
    this.shotPivot.updateMatrixWorld(true);
  }

  /**
   * Park the room's own version of a prop while this scene stands its
   * simulatable one in the same place.
   *
   * The anchors are bare locators — `Room.anchor('crib')` has no children, so
   * traversing it hid nothing and the room cot stayed standing *inside* ours.
   * Its mattress top is at y = 0.52 against our 0.315, so it covered the
   * sleeping baby completely: `51-sleep-asleep` framed an empty cot with the
   * character sealed underneath. The real prop hangs off the Room instance by
   * name, so mask that too, and keep the anchor sweep for the day it does own
   * geometry.
   */
  _maskAnchor(name) {
    const room = this.ctx.room;
    const hide = (root) => {
      if (!root?.isObject3D) return;
      root.traverse((o) => {
        if (o !== root && o.isMesh && o.visible) {
          this._masked.push(o);
          o.visible = false;
        }
      });
      if (root.isMesh && root.visible) { this._masked.push(root); root.visible = false; }
    };
    hide(room?.anchor?.(name));
    const prop = room?.[name];
    if (prop?.isObject3D) hide(prop);

    this.res.onDispose(() => {
      for (const o of this._masked) o.visible = true;
      this._masked.length = 0;
    });
  }

  /* --------------------------------------------------------- the bed ----- */

  _buildCrib() {
    const res = this.res;
    // A compact cot: the inner footprint is close to square so the baby reads
    // correctly whichever way its 'lie' pose runs.
    this.crib = makeCrib(res, { w: 0.78, d: 0.62, railH: 0.40, mattressY: 0.26 });
    this.crib.group.position.copy(this.cribPos);
    this.group.add(this.crib.group);

    this.mattress = makeMattress(res, { w: 0.72, d: 0.56, h: 0.055 });
    this.mattress.group.position.copy(this.cribPos).add(new THREE.Vector3(0, 0.26, 0));
    this.group.add(this.mattress.group);

    this.surfaceY = this.cribPos.y + 0.26 + 0.055;

  }


  /* ------------------------------------------------------- nightstand ---- */

  _buildNightstand() {
    const res = this.res;
    const wood = res.mat(MAT.makeWood({
      light: 0xf2e0c8, dark: 0xc79a68, seed: 26, ringScale: 28, clearcoat: 0.5
    }));

    const stand = new THREE.Group();
    this.standPos = this.cribPos.clone().add(new THREE.Vector3(-0.56, 0, 0.02));
    stand.position.copy(this.standPos);
    this.group.add(stand);
    this.stand = stand;

    const topH = 0.336;
    const parts = [
      bake(roundedBoxGeometry(0.30, 0.022, 0.26, 0.006, 4), [0, topH, 0]),
      bake(roundedBoxGeometry(0.25, 0.014, 0.22, 0.004, 3), [0, 0.15, 0])
    ];
    // tapered turned legs
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        parts.push(bake(new THREE.CylinderGeometry(0.010, 0.014, topH, 10),
          [sx * 0.125, topH / 2, sz * 0.105]));
      }
    }
    const body = new THREE.Mesh(res.geo(mergeAll(parts)), wood);
    body.castShadow = true;
    body.receiveShadow = true;
    stand.add(body);
    this.standTop = this.standPos.y + topH + 0.011;
  }

  /* --------------------------------------------------------- lighting ---- */

  _buildLighting() {
    const res = this.res;
    const ctx = this.ctx;

    /* --- the practical: a little bedside lamp --------------------------- */
    const lamp = new THREE.Group();
    lamp.position.set(this.standPos.x - 0.055, this.standTop, this.standPos.z - 0.045);
    this.group.add(lamp);
    this.lampGroup = lamp;

    const brass = res.mat(MAT.makeMetal({ color: 0xd8b083, roughness: 0.32 }).clone());
    const baseProfile = [];
    for (let i = 0; i <= 16; i++) {
      const t = i / 16;
      const y = t * 0.045;
      const r = 0.042 * (1 - t * 0.55) + 0.006 * Math.exp(-Math.pow((t - 0.75) / 0.15, 2));
      baseProfile.push(new THREE.Vector2(Math.max(0.004, r), y));
    }
    const stand2 = new THREE.Mesh(res.geo(mergeAll([
      bake(new THREE.LatheGeometry(baseProfile, 18)),
      bake(new THREE.CylinderGeometry(0.006, 0.008, 0.075, 10), [0, 0.082, 0])
    ])), brass);
    stand2.castShadow = true;
    stand2.receiveShadow = true;
    lamp.add(stand2);
    this.lampBody = stand2;

    // linen drum shade — thin enough to glow from the inside
    const shadeMat = res.mat(MAT.makeCloth({
      color: 0xffe9c8, weave: 'plain', threads: 120, repeat: 3, seed: 27,
      sheen: 0.6, roughness: 0.9
    }));
    shadeMat.side = THREE.DoubleSide;
    shadeMat.transparent = true;
    shadeMat.opacity = 0.97;
    shadeMat.emissive = new THREE.Color(0xffc073);
    shadeMat.emissiveIntensity = 0.35;
    const shade = new THREE.Mesh(
      res.geo(new THREE.CylinderGeometry(0.050, 0.072, 0.078, 24, 1, true)), shadeMat);
    shade.position.y = 0.132;
    shade.receiveShadow = true;
    lamp.add(shade);
    this.lampShade = shade;

    const bulbMat = res.mat(new THREE.MeshBasicMaterial({ color: 0xfff0d0, toneMapped: false }));
    const bulb = new THREE.Mesh(res.geo(new THREE.SphereGeometry(0.016, 10, 8)), bulbMat);
    bulb.position.y = 0.126;
    lamp.add(bulb);
    this.lampBulb = bulb;

    const light = new THREE.PointLight(0xffb26b, 0.8, 2.4, 2.0);
    light.position.set(0, 0.128, 0);
    light.castShadow = false;      // the rig already owns the shadow budget
    lamp.add(light);
    this.lampLight = light;

    // the soft bloom halo you actually see around a lit shade
    const glowMat = res.mat(new THREE.MeshBasicMaterial({
      map: TEX.radialSprite({ size: 128, power: 2.6 }),
      color: 0xffb877, transparent: true, opacity: 0.10,
      blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false
    }));
    const glow = new THREE.Mesh(res.geo(new THREE.PlaneGeometry(0.42, 0.42)), glowMat);
    glow.position.y = 0.132;
    glow.renderOrder = 4;
    lamp.add(glow);
    this.lampGlow = glow;

    const lampHit = hitProxy(res, 0.12, 'lamp');
    lampHit.position.y = 0.12;
    lamp.add(lampHit);
    this.pickables.push(lamp);

    /* --- moonlight through the glass ------------------------------------ */
    const win = anchorPoint(ctx, 'window', [this.cribPos.x - 1.55, 1.15, this.cribPos.z + 0.25]);
    this.windowPos = win.clone();
    const outward = new THREE.Vector3(win.x - this.cribPos.x, 0, win.z - this.cribPos.z);
    if (outward.lengthSq() < 1e-4) outward.set(-1, 0, 0);
    outward.normalize();
    this.outward = outward;

    const moon = new THREE.DirectionalLight(0x9dbcff, 0.9);
    moon.position.copy(win).addScaledVector(outward, 1.6).add(new THREE.Vector3(0, 1.5, 0));
    moon.target.position.copy(this.cribPos).add(new THREE.Vector3(0, 0.4, 0));
    moon.castShadow = false;
    this.group.add(moon);
    this.group.add(moon.target);
    this.moonLight = moon;

    // a soft shaft card, billboarded around its own axis
    const shaftMat = res.mat(new THREE.MeshBasicMaterial({
      map: TEX.gradient([
        [0.0, 'rgba(190,215,255,0.55)'],
        [0.55, 'rgba(180,208,255,0.20)'],
        [1.0, 'rgba(170,200,255,0.0)']
      ], { size: 128, srgb: true }),
      transparent: true, opacity: 0.0, depthWrite: false,
      blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false
    }));
    const shaft = new THREE.Mesh(res.geo(new THREE.PlaneGeometry(0.75, 2.1)), shaftMat);
    shaft.renderOrder = 3;
    this.group.add(shaft);
    this.moonShaft = shaft;
    this.shaftDir = new THREE.Vector3()
      .copy(moon.target.position).sub(moon.position).normalize();
    this.shaftCentre = win.clone()
      .addScaledVector(this.shaftDir, 0.75)
      .add(new THREE.Vector3(0, -0.25, 0));

    /* --- the star lamp turning on the ceiling --------------------------- */
    const cookie = TEX.painted('star-cookie', 512, (g, s) => {
      g.fillStyle = '#000000';
      g.fillRect(0, 0, s, s);
      const star = (cx, cy, r, pts, glowR) => {
        const rg = g.createRadialGradient(cx, cy, 0, cx, cy, glowR);
        rg.addColorStop(0, 'rgba(255,244,214,0.85)');
        rg.addColorStop(1, 'rgba(255,244,214,0)');
        g.fillStyle = rg;
        g.beginPath(); g.arc(cx, cy, glowR, 0, Math.PI * 2); g.fill();
        g.fillStyle = '#fffaf0';
        g.beginPath();
        for (let i = 0; i < pts * 2; i++) {
          const a = (i / (pts * 2)) * Math.PI * 2 - Math.PI / 2;
          const rr = i % 2 ? r * 0.42 : r;
          const x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr;
          if (i === 0) g.moveTo(x, y); else g.lineTo(x, y);
        }
        g.closePath(); g.fill();
      };
      // a deliberate constellation rather than random dots
      const pts = [
        [0.50, 0.50, 0.055], [0.28, 0.33, 0.036], [0.72, 0.30, 0.040],
        [0.34, 0.72, 0.032], [0.68, 0.70, 0.045], [0.50, 0.19, 0.028],
        [0.19, 0.55, 0.026], [0.82, 0.55, 0.030], [0.44, 0.86, 0.024],
        [0.60, 0.44, 0.020], [0.40, 0.42, 0.018], [0.58, 0.60, 0.019]
      ];
      for (const [u, v, r] of pts) star(u * s, v * s, r * s, 5, r * s * 3.0);
      // a scatter of tiny pinpricks between the big ones
      g.fillStyle = 'rgba(255,250,235,0.55)';
      for (let i = 0; i < 60; i++) {
        const x = (((i * 71) % 97) / 97) * s;
        const y = (((i * 43) % 89) / 89) * s;
        g.beginPath(); g.arc(x, y, s * 0.004, 0, Math.PI * 2); g.fill();
      }
    });
    cookie.center.set(0.5, 0.5);
    cookie.wrapS = cookie.wrapT = THREE.ClampToEdgeWrapping;

    const projPos = anchorPoint(ctx, 'shelf',
      [this.cribPos.x + 0.52, 0.0, this.cribPos.z - 0.22]);
    projPos.y = Math.max(projPos.y, 0.0) + 0.05;
    const proj = new THREE.Group();
    proj.position.copy(projPos);
    this.group.add(proj);

    const shellMat = res.mat(MAT.makePlastic({ color: 0x6f88c8, matte: 0.4, clearcoat: 0.7, seed: 28 }));
    shellMat.emissive = new THREE.Color(0x93b4ff);
    shellMat.emissiveIntensity = 0.0;
    shellMat.emissiveMap = cookie;
    const shell = new THREE.Mesh(res.geo(mergeAll([
      bake(new THREE.SphereGeometry(0.048, 20, 16)),
      bake(new THREE.CylinderGeometry(0.036, 0.042, 0.022, 16), [0, -0.042, 0])
    ])), shellMat);
    shell.castShadow = true;
    proj.add(shell);
    this.projShell = shellMat;

    const spot = new THREE.SpotLight(0xbcd0ff, 0.0, 4.2, 0.95, 0.75, 1.4);
    spot.position.set(0, 0.05, 0);
    spot.map = cookie;
    spot.castShadow = false;
    proj.add(spot);
    const spotTarget = new THREE.Object3D();
    spotTarget.position.copy(projPos).add(new THREE.Vector3(0, 2.6, 0));
    this.group.add(spotTarget);
    spot.target = spotTarget;
    this.starSpot = spot;
    this.starCookie = cookie;

    const projHit = hitProxy(res, 0.10, 'projector');
    proj.add(projHit);
    this.pickables.push(proj);

    /* --- curtain / window target ---------------------------------------- */
    const winHit = hitProxy(res, 0.42, 'curtain');
    winHit.position.copy(win);
    this.group.add(winHit);
    this.pickables.push(winHit);
  }

  /* -------------------------------------------------------------- sky ---- */

  _buildSky() {
    const res = this.res;
    const out = this.outward;
    const centre = this.windowPos.clone().addScaledVector(out, 2.6);
    centre.y = this.windowPos.y + 0.35;

    const sky = new THREE.Group();
    sky.position.copy(centre);
    sky.lookAt(this.windowPos.clone().addScaledVector(out, -0.5));
    this.group.add(sky);
    this.sky = sky;

    // backdrop
    const skyMat = res.mat(new THREE.MeshBasicMaterial({
      map: TEX.gradient([
        [0.0, '#080d24'],
        [0.45, '#132043'],
        [0.78, '#274068'],
        [1.0, '#4a628c']
      ], { size: 256, srgb: true }),
      toneMapped: true, depthWrite: true
    }));
    const backdrop = new THREE.Mesh(res.geo(new THREE.PlaneGeometry(6.0, 4.0)), skyMat);
    sky.add(backdrop);

    // star field — magnitudes distributed so most are faint and a few burn
    const COUNT = 320;
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);
    const siz = new Float32Array(COUNT);
    const c = new THREE.Color();
    for (let i = 0; i < COUNT; i++) {
      const rx = ((i * 73) % 997) / 997;
      const ry = ((i * 151) % 887) / 887;
      const rm = ((i * 37) % 719) / 719;
      pos[i * 3] = (rx - 0.5) * 5.6;
      pos[i * 3 + 1] = (ry - 0.5) * 3.4 + 0.35;
      pos[i * 3 + 2] = 0.02;
      // magnitude: a steep power law, so the sky has structure not confetti
      const mag = Math.pow(rm, 3.2);
      siz[i] = 0.012 + mag * 0.055;
      // hotter stars run blue-white, cooler ones amber
      const temp = ((i * 91) % 101) / 101;
      c.setHSL(0.08 + temp * 0.52, 0.35, 0.72 + mag * 0.28);
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    }
    const starGeo = res.geo(new THREE.BufferGeometry());
    starGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    starGeo.setAttribute('aSize', new THREE.BufferAttribute(siz, 1));
    const starMat = res.mat(new THREE.PointsMaterial({
      size: 1, sizeAttenuation: true, vertexColors: true,
      map: TEX.radialSprite({ size: 64, power: 2.0 }),
      transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, toneMapped: false
    }));
    starMat.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute float aSize;')
        .replace('gl_PointSize = size;', 'gl_PointSize = size * aSize;');
    };
    starMat.customProgramCacheKey = () => 'night-star';
    const stars = new THREE.Points(starGeo, starMat);
    stars.renderOrder = 1;
    sky.add(stars);
    this.starField = stars;

    // the moon itself
    const moonMat = res.mat(new THREE.MeshBasicMaterial({
      map: TEX.painted('moon-disc', 256, (g, s) => {
        g.clearRect(0, 0, s, s);
        const r = s * 0.34;
        const grad = g.createRadialGradient(s * 0.5, s * 0.5, r * 0.2, s * 0.5, s * 0.5, s * 0.5);
        grad.addColorStop(0, 'rgba(255,251,236,1)');
        grad.addColorStop(0.62, 'rgba(255,248,225,0.85)');
        grad.addColorStop(0.72, 'rgba(220,232,255,0.20)');
        grad.addColorStop(1, 'rgba(200,220,255,0)');
        g.fillStyle = grad;
        g.fillRect(0, 0, s, s);
        // maria, so it isn't a flat disc
        g.globalAlpha = 0.10;
        g.fillStyle = '#8fa2c4';
        for (const [u, v, rr] of [[0.42, 0.44, 0.10], [0.56, 0.52, 0.07], [0.48, 0.60, 0.05], [0.60, 0.40, 0.04]]) {
          g.beginPath(); g.arc(u * s, v * s, rr * s, 0, Math.PI * 2); g.fill();
        }
        g.globalAlpha = 1;
      }),
      transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, toneMapped: false
    }));
    const moonDisc = new THREE.Mesh(res.geo(new THREE.PlaneGeometry(0.85, 0.85)), moonMat);
    moonDisc.position.set(-1.35, 1.05, 0.04);
    moonDisc.renderOrder = 2;
    sky.add(moonDisc);

    /* --- the shooting star ---------------------------------------------- */
    this._buildShootingStar(sky);
  }

  _buildShootingStar(sky) {
    const res = this.res;
    const SEG = 30;
    const geo = res.geo(new THREE.BufferGeometry());
    const pos = new Float32Array(SEG * 2 * 3);
    const col = new Float32Array(SEG * 2 * 3);
    const idx = [];
    for (let i = 0; i < SEG - 1; i++) {
      const a = i * 2, b = i * 2 + 1, c = (i + 1) * 2, d = (i + 1) * 2 + 1;
      idx.push(a, c, b, b, c, d);
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setIndex(idx);
    const mat = res.mat(new THREE.MeshBasicMaterial({
      vertexColors: true, transparent: true, opacity: 1,
      blending: THREE.AdditiveBlending, depthWrite: false,
      side: THREE.DoubleSide, toneMapped: false
    }));
    const trail = new THREE.Mesh(geo, mat);
    trail.frustumCulled = false;
    trail.renderOrder = 5;
    trail.visible = false;
    sky.add(trail);

    const headMat = res.mat(new THREE.MeshBasicMaterial({
      map: TEX.radialSprite({ size: 64, power: 1.6 }),
      color: 0xfffdf2, transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, toneMapped: false
    }));
    const head = new THREE.Mesh(res.geo(new THREE.PlaneGeometry(0.30, 0.30)), headMat);
    head.renderOrder = 6;
    head.visible = false;
    sky.add(head);

    this.shootingStar = {
      trail, head, geo, mat, headMat, SEG,
      active: false, t: 0, duration: 3.5,
      history: Array.from({ length: SEG }, () => new THREE.Vector2()),
      from: new THREE.Vector2(-2.5, 1.5),
      to: new THREE.Vector2(2.3, -0.35)
    };
  }

  /* ------------------------------------------------------------ props ---- */

  _buildProps() {
    const res = this.res;

    /* --- くまさん -------------------------------------------------------- */
    this.teddy = makeTeddy(res, { scale: 1.0 });
    this.teddyHome = this.bedPrep.teddyHome(new THREE.Vector3());
    this.teddy.group.position.copy(this.teddyHome);
    this.teddy.group.rotation.y = -0.7;
    this.group.add(this.teddy.group);
    this.pickables.push(this.teddy.group);

    /* --- えほん ---------------------------------------------------------- */
    this.book = makePictureBook(res, { width: 0.115, depth: 0.145, spreads: 4 });
    this.bookHome = new THREE.Vector3(
      this.standPos.x + 0.055, this.standTop, this.standPos.z + 0.055);
    this.bookRead = new THREE.Vector3(
      this.cribPos.x - 0.18, this.surfaceY + 0.26, this.cribPos.z + 0.30);
    this.book.group.position.copy(this.bookHome);
    this.book.group.rotation.set(0, 0.5, 0);
    this.group.add(this.book.group);
    this.pickables.push(this.book.group);

    /* --- はぶらし + は ---------------------------------------------------- */
    this.brush = makeToothbrush(res);
    this.brushHome = new THREE.Vector3(
      this.standPos.x + 0.10, this.standTop + 0.008, this.standPos.z - 0.06);
    this.brush.group.position.copy(this.brushHome);
    this.brush.group.rotation.set(Math.PI / 2, 0, 0.7);
    // The visible brush is only 7 cm long and a few millimetres wide. Give it
    // the same invisible thumb target as the other required bedtime controls.
    this.brush.group.add(hitProxy(res, 0.075, 'brush'));
    this.group.add(this.brush.group);
    this.pickables.push(this.brush.group);

    this.teeth = makeTeeth(res, { width: 0.030, count: 8, plaque: 11 });
    this.group.add(this.teeth.group);

    /* --- パジャマ (folded on the nightstand) ------------------------------ */
    const pj = new THREE.Group();
    const pjMat = res.mat(MAT.makeCloth({
      color: 0x9fb8e8, weave: 'knit', threads: 100, repeat: 3, seed: 29, sheen: 0.9
    }));
    const pjTrim = res.mat(MAT.makeCloth({
      color: 0xfdf3e4, weave: 'plain', threads: 140, repeat: 4, seed: 30
    }));
    for (let i = 0; i < 3; i++) {
      const layer = new THREE.Mesh(
        res.geo(roundedBoxGeometry(0.11 - i * 0.006, 0.012, 0.085 - i * 0.005, 0.005, 3)),
        i === 1 ? pjTrim : pjMat);
      layer.position.set(0, 0.008 + i * 0.013, 0);
      layer.rotation.y = (i - 1) * 0.05;
      layer.castShadow = true;
      layer.receiveShadow = true;
      pj.add(layer);
    }
    pj.position.set(this.standPos.x - 0.02, this.standTop, this.standPos.z + 0.055);
    pj.add(hitProxy(res, 0.09, 'pajama'));
    pj.userData.tag = 'pajama';
    this.group.add(pj);
    this.pickables.push(pj);
    this.pajamaProp = pj;

    /* --- とんとん target + its rhythm ring -------------------------------- */
    this.patTarget = hitProxy(res, 0.13, 'chest');
    this.group.add(this.patTarget);
    this.pickables.push(this.patTarget);

    const ringMat = res.mat(new THREE.MeshBasicMaterial({
      map: TEX.radialSprite({ size: 64, power: 3.4 }),
      color: 0xffd9ec, transparent: true, opacity: 0,
      blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false
    }));
    const ring = new THREE.Mesh(res.geo(new THREE.PlaneGeometry(0.3, 0.3)), ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.renderOrder = 4;
    ring.visible = false;
    this.group.add(ring);
    this.patRing = { mesh: ring, mat: ringMat, t: 1 };
  }

  /* ------------------------------------------------------------- enter --- */

  _placeBabyForBedPrep() {
    const b = this.ctx.baby;
    if (!b?.group) return;
    // Entirely outside the cot footprint, facing the sheet and its two tabs.
    // Stay beyond the cot's side rail and on the camera-facing side. Moving
    // behind the rail hides the child entirely in a narrow portrait view.
    b.group.position.set(this.cribPos.x + 0.50, 0, this.cribPos.z + 0.32);
    b.group.rotation.set(0, -Math.PI * 0.72, 0);
    b.playPose?.('sit', { seconds: 0.55 });
  }

  _placeBabyInCrib(seconds = 0.8) {
    const b = this.ctx.baby;
    if (!b?.group) return;
    // The crown rests on the bare fitted sheet, clear of both end rails.
    b.group.position.set(this.cribPos.x + 0.09, this.surfaceY, this.cribPos.z);
    b.group.rotation.set(0, Math.PI / 2, 0);
    b.playPose?.('lie', { seconds });
  }

  _stageSafeSleepVisual() {
    this.bedPrep.stage(true);
    this.todo.pajama = true;
    if (this.pajamaProp) this.pajamaProp.visible = false;
    this.teddyGiven = true;
    this.teddyT = 1;
    this.teddy?.group?.position.copy(this.bedPrep.teddyTarget(this._v));
    this._placeBabyInCrib(0.2);
  }

  async enter() {
    const ctx = this.ctx;
    const b = ctx.baby;

    if (b?.group) {
      this._babyRestore = {
        position: b.group.position.clone(),
        quaternion: b.group.quaternion.clone(),
        pose: b.poseName || 'sit',
        mood: b.mood || 'neutral',
        idleLife: b.idleLife,
        outfit: ctx.state?.outfit ? { ...ctx.state.outfit } : null
      };
      b.idleLife = false;
    }
    this.bedPrep.enter();
    if (this.bedPrep.prepared()) {
      this.todo.pajama = true;
      this.teddyGiven = true;
      this.teddyT = 1;
      this.pajamaProp.visible = false;
      this.teddy.group.position.copy(this.bedPrep.teddyTarget(this._v));
      this._placeBabyInCrib();
    } else {
      this.teddy.group.position.copy(this.teddyHome);
      this._placeBabyForBedPrep();
    }
    b?.setMood?.('neutral');
    b?.lookAt?.(null);
    b?.setOutfit?.(this.bedPrep.prepared()
      ? {
          top: PAJAMA_COLOR, bottom: PAJAMA_COLOR, socks: false,
          shoes: false, hat: false, bib: false, diaper: true
        }
      : {
          top: 'onesie', bottom: false, socks: false,
          shoes: false, hat: false, bib: false, diaper: true
        });

    // The app snaps the camera the instant enter() returns, so the shot pivot
    // has to already be sitting on the head the baby *now* has.
    b?.group?.updateMatrixWorld?.(true);
    this._syncShotPivot();

    this._setLamp(true, false);
    this._setCurtains(0.7, false);
    ctx.room?.setLamp?.(true);

    ctx.audio?.unlock?.();
    try {
      this.lullaby = ctx.audio?.loop?.('sleep.musicbox', { gain: 0.26 }) || null;
    } catch (e) { this.lullaby = null; }
    snd(ctx, 'baby.yawn', { gain: 0.5 });

    // The whole ordered routine goes to the HUD rather than just its first
    // step: the HUD drops any step whose prop is not on screen. That is what
    // stops `50-sleep-crib` shipping "let's brush teeth" with no brush in the
    // picture, and it keeps working when the camera moves.
    this._sayHint();
    ctx.ui?.meter?.('energy', clamp(this.sleepiness, 0, 1));
  }

  async exit() {
    const ctx = this.ctx;
    this._restorePrepRoomBudget();
    this.bedPrep.exit();
    this._teddyAssistSignal = null;
    ctx.ui?.hidePrompt?.();
    try { this.lullaby?.stop?.(); } catch (e) { /* ignore */ }
    this.lullaby = null;
    ctx.baby?.lookAt?.(null);
    // the routine leaves traces: clean teeth, pyjamas on, a dark room
    ctx.state?.patch?.({
      teethClean: this.todo.teeth,
      asleep: this.asleep
    });
  }

  dispose() {
    const ctx = this.ctx;

    // hand the head bone back exactly as we found it
    const head = ctx.baby?.bone?.('head');
    if (head) {
      head.rotation.x -= this._headOffset.x;
      head.rotation.z -= this._headOffset.z;
    }
    this._headOffset.x = this._headOffset.z = 0;

    if (this._babyRestore && ctx.baby?.group) {
      const restore = this._babyRestore;
      ctx.baby.group.position.copy(restore.position);
      ctx.baby.group.quaternion.copy(restore.quaternion);
      ctx.baby.idleLife = restore.idleLife;
      ctx.baby.playPose?.(restore.pose, { seconds: 0.01 });
      ctx.baby.setMood?.(restore.mood, 0.01);
      // Before the sleeper step Sleep only used a visual preview, so restore
      // the arrival outfit. Once selected, State is canonical and the saved
      // pyjamas must remain visible after leaving the scene.
      const outfit = this.todo.pajama ? ctx.state?.outfit : restore.outfit;
      if (outfit) ctx.baby.setOutfit?.({ ...outfit });
      this._babyRestore = null;
    }
    ctx.baby?.lookAt?.(null);
    ctx.ui?.hidePrompt?.();
    try { this.lullaby?.stop?.(); } catch (e) { /* ignore */ }
    this.lullaby = null;
    this.bedPrep.dispose();

    // Hand the rig back before the scene graph goes away — the shot pivot is
    // about to be removed and nothing may keep resolving presets against it.
    ctx.cameraRig?.setSubject?.(null);
    this.shotPivot = null;

    this.pickables.length = 0;
    this.book?.dispose?.();
    this.res.dispose();
    if (this.group.parent) this.group.parent.remove(this.group);
  }

  /* ------------------------------------------------------------- state --- */

  onState(patch) {
    if (!patch) return;

    if (typeof patch.lamp === 'boolean') this._setLamp(patch.lamp, false);
    if (typeof patch.curtains === 'number') this._setCurtains(clamp(patch.curtains, 0, 1), false);
    if (patch.mood === 'sleepy' && !this.asleep) {
      this.sleepiness = Math.max(this.sleepiness, STAGES[3].at + 0.03);
    }
    if (patch.asleep === true) this._fallAsleep(true);
    else if (patch.asleep === false && this.asleep) {
      this.asleep = false;
      this.asleepAt = -1;
      this.sleepiness = 0.3;
      this._starTimer = 1e9;
      this.ctx.baby?.playPose?.('lie', { seconds: 0.4 });
      this.ctx.baby?.setMood?.('neutral');
    }
  }

  /* ----------------------------------------------------------- pointer --- */

  getAssistStep() {
    if (!this.group?.parent || this.asleep || this.brushing || this.book?.turning) return null;
    const bedStep = this.bedPrep.getAssistStep();
    if (bedStep) return bedStep;
    if (this.bedPrep.currentStep() === 'pajama') {
      return {
        id: 'pajama', label: 'スリーパーを えらぶ', icon: 'onesie',
        target: this.pajamaProp
      };
    }
    if (this.bedPrep.currentStep() === 'teddy') {
      return {
        id: 'teddy', label: 'くまさんを たなへ', icon: 'heart',
        target: this.teddy?.group
      };
    }
    if (!this.todo.teeth) {
      return { id: 'teeth', label: 'はみがきを する', icon: 'brush', target: this.brush?.group };
    }
    if (!this.todo.curtains) {
      return { id: 'curtains', label: 'カーテンを しめる', icon: 'moon', target: this.windowPos };
    }
    if (this.lampOn) {
      return { id: 'lamp', label: 'でんきを けす', icon: 'moon', target: this.lampGroup };
    }
    if (this.bookPagesRead < this.book.spreads) {
      return { id: 'book', label: 'えほんを よむ', icon: 'book', target: this.book?.group };
    }
    return { id: 'pat', label: 'ゆっくり とんとんする', icon: 'hand', target: this.patTarget };
  }

  async runAssistStep(stepId, { signal } = {}) {
    checkAssist(signal);
    if (this.getAssistStep()?.id !== stepId) return;

    if (stepId === 'bed:sheet' || stepId === 'bed:corner') {
      const token = this.bedPrep.runAssistStep(stepId, { signal });
      if (!token) return;
      try {
        await waitUntil(this.ctx, () => !this.bedPrep.settling,
          { signal, timeout: 3 });
        this.bedPrep.finishAssist(token);
      } catch (error) {
        this.bedPrep.cancelAssist(token);
        throw error;
      }
      return;
    }

    if (stepId === 'teeth') {
      this._startBrushing();
      await waitGame(this.ctx, 0.35, signal);
      while (!this.teeth.clean) {
        checkAssist(signal);
        const local = this.teeth.specks[0]?.position.clone();
        if (!local) break;
        const world = this.teeth.group.localToWorld(local.clone());
        this.brush.group.position.copy(world);
        this.teeth.scrub(local, BRUSH_RADIUS);
        snd(this.ctx, 'sleep.toothbrush');
        this.ctx.fx?.burst?.('bubble', world, 3);
        await waitGame(this.ctx, 0.12, signal);
      }
      this._finishBrushing();
      await waitUntil(this.ctx, () => this.todo.teeth, { signal, timeout: 2 });
      return;
    }
    if (stepId === 'pajama') {
      this._wearPajamas();
      await waitGame(this.ctx, 0.8, signal);
      return;
    }
    if (stepId === 'curtains') {
      this._closeCurtains();
      await waitGame(this.ctx, 0.9, signal);
      return;
    }
    if (stepId === 'lamp') {
      this._setLamp(false, true);
      await waitGame(this.ctx, 0.65, signal);
      return;
    }
    if (stepId === 'teddy') {
      this._teddyAssistSignal = signal;
      this._giveTeddy();
      try {
        await waitUntil(this.ctx, () => this.teddyT >= 1, { signal, timeout: 3 });
        this._teddyAssistSignal = null;
      } catch (error) {
        this._cancelTeddyShelf();
        throw error;
      }
      return;
    }
    if (stepId === 'book') {
      if (!this.bookOpen) {
        this._tapBook();
        await waitGame(this.ctx, 0.45, signal);
      }
      while (this.bookPagesRead < this.book.spreads) {
        checkAssist(signal);
        const before = this.bookPagesRead;
        this._tapBook();
        await waitUntil(this.ctx, () => !this.book.turning && this.bookPagesRead > before,
          { signal, timeout: 3 });
        await waitGame(this.ctx, 0.20, signal);
      }
      return;
    }
    if (stepId === 'pat') {
      const nextStage = Math.min(STAGES.length - 1, this.stage + 1);
      const target = STAGES[nextStage].at;
      while (!this.asleep && this.sleepiness < target) {
        checkAssist(signal);
        const point = this.ctx.baby?.focusPoint?.() || this.cribPos;
        const syntheticNow = (this.lastPatAt || performance.now()) + 650;
        this._pat(point, syntheticNow);
        await waitGame(this.ctx, 0.55, signal);
      }
    }
  }

  onPointer(p) {
    if (!p) return;
    if (this.bedPrep.preparing()) {
      if (p.type !== 'down') {
        this.bedPrep.onPointer(p, null);
        return;
      }
      this.ctx.audio?.unlock?.();
      const got = this._pick(p);
      if (this.bedPrep.onPointer(p, got)) return;
      const step = this.bedPrep.currentStep();
      if (step === 'pajama' && got?.tag === 'pajama') this._wearPajamas();
      else if (step === 'teddy' && got?.tag === 'teddy') this._giveTeddy();
      else this.bedPrep.misstep(this.getAssistStep()?.target);
      return;
    }
    if (p.type === 'down') {
      this.ctx.audio?.unlock?.();
      if (this.brushing) { this.brushDrag = true; this._brushMove(p); return; }
      this._down(p);
    } else if (p.type === 'move') {
      if (this.brushing && this.brushDrag) this._brushMove(p);
    } else {
      this.brushDrag = false;
    }
  }

  _ndcOf(p) {
    const el = this.ctx.renderer?.domElement;
    if (!el) return null;
    const r = el.getBoundingClientRect();
    this._ndc.set(
      ((p.x - r.left) / r.width) * 2 - 1,
      -((p.y - r.top) / r.height) * 2 + 1
    );
    return this._ndc;
  }

  _pick(p) {
    if (!this._ndcOf(p)) return null;
    const viewportHeight = this.ctx.renderer?.domElement?.getBoundingClientRect?.().height
      || window.innerHeight;
    expandHitTargets(this.pickables, this.ctx.camera, viewportHeight, true);
    this._ray.setFromCamera(this._ndc, this.ctx.camera);
    const hits = this._ray.intersectObjects(this.pickables, true);
    for (const h of hits) {
      let o = h.object;
      while (o && o !== this.group) {
        if (o.userData?.tag) return { tag: o.userData.tag, object: o, hit: h };
        o = o.parent;
      }
    }
    return null;
  }

  _down(p) {
    const got = this._pick(p);
    if (!got) return;
    switch (got.tag) {
      case 'brush': this._startBrushing(); return;
      case 'pajama': this._wearPajamas(); return;
      case 'curtain': this._closeCurtains(); return;
      case 'lamp': this._setLamp(!this.lampOn, true); return;
      case 'projector': this._toggleProjector(); return;
      case 'book': this._tapBook(); return;
      case 'teddy': this._giveTeddy(); return;
      case 'chest':
        this._pat(got.hit.point);
        return;
      default: return;
    }
  }

  /* ------------------------------------------------------- はみがき ------ */

  _startBrushing() {
    if (this.todo.teeth || this.brushing) {
      snd(this.ctx, 'ui.tap');
      return;
    }
    const ctx = this.ctx;
    this.brushing = true;
    this.teeth.group.visible = true;
    ctx.cameraRig?.goTo?.('crib-face', 0.9);
    ctx.baby?.setMood?.('surprised');
    ctx.ui?.prompt?.('はを こしこし してね', { icon: 'brush' });
    snd(ctx, 'play.chime', { gain: 0.5 });
  }

  _brushMove(p) {
    const ctx = this.ctx;
    if (!this._ndcOf(p)) return;
    this._ray.setFromCamera(this._ndc, ctx.camera);

    // brush rides a plane through the mouth, facing the camera
    const mouth = ctx.baby?.mouthWorldPos?.()
      || this.cribPos.clone().add(new THREE.Vector3(-0.18, this.surfaceY + 0.09, 0));
    const n = new THREE.Vector3();
    ctx.camera.getWorldDirection(n);
    const plane = new THREE.Plane().setFromNormalAndCoplanarPoint(n.negate(), mouth);
    const hit = new THREE.Vector3();
    if (!this._ray.ray.intersectPlane(plane, hit)) return;

    this.brush.group.position.copy(hit).addScaledVector(n, 0.022);
    this.brush.group.lookAt(mouth);
    this.brush.group.rotateX(Math.PI / 2);

    const local = this.teeth.group.worldToLocal(hit.clone());
    const removed = this.teeth.scrub(local, BRUSH_RADIUS);
    const now = (this._brushSoundAt || 0);
    if (removed > 0 || this.t - now > 0.17) {
      this._brushSoundAt = this.t;
      snd(ctx, 'sleep.toothbrush', { rate: 0.9 + (this.t % 0.3) });
      ctx.fx?.burst?.('bubble', hit.clone(), removed > 0 ? 4 : 2,
        { spread: 0.9, speed: [0.05, 0.22], radius: 0.012 });
    }
    if (removed > 0) ctx.fx?.burst?.('sparkle', hit.clone(), 3);

    if (this.teeth.clean) this._finishBrushing();
  }

  _finishBrushing() {
    const ctx = this.ctx;
    this.brushing = false;
    this.brushDrag = false;
    this.todo.teeth = true;
    const mouth = ctx.baby?.mouthWorldPos?.() || this.cribPos.clone().setY(this.surfaceY + 0.1);

    snd(ctx, 'sleep.spit');
    ctx.fx?.burst?.('splash', mouth.clone().add(new THREE.Vector3(0, -0.03, 0.05)), 8,
      { spread: 0.85, speed: [0.3, 0.9], radius: 0.02 });
    ctx.ui?.prompt?.('ぺっ！ ぴかぴか！', { icon: 'sparkle' });

    this._after(0.55, () => {
      this.teeth.group.visible = false;
      this.brush.group.position.copy(this.brushHome);
      this.brush.group.rotation.set(Math.PI / 2, 0, 0.7);
      snd(ctx, 'sleep.twinkle');
      ctx.fx?.burst?.('sparkle', mouth.clone(), 8);
      ctx.baby?.setMood?.('happy');
      ctx.cameraRig?.goTo?.('crib', 1.0);
      this._stepDone('teeth');
    });
  }

  /* -------------------------------------------------------- パジャマ ----- */

  _wearPajamas() {
    if (this.todo.pajama) { snd(this.ctx, 'ui.tap'); return; }
    const ctx = this.ctx;
    this.todo.pajama = true;
    snd(ctx, 'ui.swipe', { gain: 0.5 });
    // Explicit colour, not the name 'pajama': outfit.js resolves garment values
    // against PALETTE, which has no such key, so the name silently fell through
    // to the default and the pyjamas rendered as the stock mint day-top.
    // This hex matches the pyjama garment in dress.js.
    ctx.baby?.setOutfit?.({ top: PAJAMA_COLOR, bottom: PAJAMA_COLOR, socks: null, shoes: null, hat: null });
    ctx.state?.patch?.({
      outfit: {
        top: PAJAMA_COLOR, bottom: PAJAMA_COLOR, socks: false,
        shoes: false, hat: false, bib: false, diaper: true
      }
    });
    ctx.state?.patch?.({ naked: false });
    this.pajamaProp.visible = false;
    const chest = ctx.baby?.focusPoint?.() || this.cribPos.clone().setY(this.surfaceY + 0.08);
    ctx.fx?.burst?.('sparkle', chest, 10);
    ctx.baby?.setMood?.('happy');
    snd(ctx, 'play.chime');
    this._stepDone('pajama');
    this.bedPrep.completeSleeper();
  }

  /* -------------------------------------------------------- カーテン ----- */

  _closeCurtains() {
    if (this.todo.curtains) { snd(this.ctx, 'ui.tap'); return; }
    this.todo.curtains = true;
    // left just ajar, so the moon (and later the shooting star) still reach in
    this._setCurtains(0.25, true);
    snd(this.ctx, 'sleep.curtain', { gain: 0.7 });
    snd(this.ctx, 'ui.swipe', { gain: 0.4 });
    this._stepDone('curtains');
  }

  _setCurtains(v, byPlayer) {
    this.curtainTarget = clamp(v, 0, 1);
    if (byPlayer) this.ctx.room?.setCurtains?.(this.curtainTarget);
    if (this.curtains === undefined) this.curtains = this.curtainTarget;
  }

  /* ---------------------------------------------------------- でんき ----- */

  _setLamp(on, byPlayer) {
    this.lampOn = !!on;
    if (!on) this.todo.lamp = true;
    if (byPlayer) {
      this.ctx.room?.setLamp?.(this.lampOn);
      snd(this.ctx, 'sleep.switch');
      if (!on) {
        this.ctx.ui?.prompt?.('おやすみの あかりに しようね', { icon: 'moon' });
        this._stepDone('lamp');
      }
    }
  }

  _toggleProjector() {
    this.projectorForced = !this.projectorForced;
    snd(this.ctx, 'sleep.switch', { rate: 1.2 });
    this.ctx.fx?.burst?.('star',
      this.starSpot.getWorldPosition(new THREE.Vector3()), 6);
  }

  _stepDone(which) {
    void which;
    this._addSleep(0.05);
    const t = this.todo;
    if (t.teeth && t.pajama && t.curtains && t.lamp && !this.setupRewarded) {
      this.setupRewarded = true;
      snd(this.ctx, 'ui.star', { gain: 0.6 });
      this.ctx.ui?.prompt?.('したく かんぺき！', { icon: 'star' });
      this.ctx.ui?.star?.(1);
      const head = this.ctx.baby?.headWorldPos?.();
      if (head) this.ctx.fx?.burst?.('star', head, 8);
    }
    // On a narrow screen the next required prop may be in another part of the
    // room, so move to it promptly instead of leaving the child on a finished
    // closeup with no actionable target.
    this._hintTimer = this._usesPortraitGuidance() ? 0.15 : 2.5;
  }

  /* ---------------------------------------------------------- えほん ----- */

  _tapBook() {
    const ctx = this.ctx;
    if (this.book.turning) return;

    if (!this.bookOpen) {
      this.bookOpen = true;
      this.bookPagesRead = 0;
      snd(ctx, 'sleep.page');
      ctx.ui?.prompt?.('ページを めくってね', { icon: 'book' });
      ctx.baby?.lookAt?.(this.bookRead.clone());
      this._addSleep(0.03);
      return;
    }

    this.book.turnPage(() => {
      this.bookPagesRead++;
      // every page makes the lids heavier
      this._addSleep(0.075);
      ctx.fx?.burst?.('sparkle', this.bookRead.clone(), 3);
      if (this.bookPagesRead >= this.book.spreads) {
        this.bookOpen = false;
        snd(ctx, 'play.chime', { gain: 0.5 });
        this._addSleep(0.06);
        ctx.baby?.lookAt?.(null);
        ctx.ui?.prompt?.('おしまい。 とんとん しようか', { icon: 'pat' });
      }
    });
    snd(ctx, 'sleep.page', { rate: 0.95 + this.bookPagesRead * 0.03 });
  }

  _bookUpdate(dt) {
    this.book.update(dt);
    const g = this.book.group;
    const target = this.bookOpen ? this.bookRead : this.bookHome;
    g.position.lerp(target, Math.min(1, dt * 3.4));
    const wantY = this.bookOpen ? Math.PI * 0.5 : 0.5;
    const wantX = this.bookOpen ? -0.62 : 0;
    g.rotation.y += (wantY - g.rotation.y) * Math.min(1, dt * 3.4);
    g.rotation.x += (wantX - g.rotation.x) * Math.min(1, dt * 3.4);
    if (this.bookOpen) {
      g.position.y += Math.sin(this.t * 1.6) * 0.0025;
    }
  }

  /* -------------------------------------------------------- とんとん ----- */

  _pat(point, now = performance.now()) {
    const ctx = this.ctx;
    if (this.asleep) {
      snd(ctx, 'sleep.pat', { gain: 0.3 });
      return;
    }
    const gap = this.lastPatAt ? now - this.lastPatAt : 9999;
    this.lastPatAt = now;

    const chest = ctx.baby?.focusPoint?.() || point;
    this.patRing.mesh.position.copy(point || chest).setY(this.surfaceY + 0.09);
    this.patRing.t = 0;
    this.patRing.mesh.visible = true;

    if (gap < PAT_MIN) {
      // too fast — the eyes fly open
      this.patTimes.length = 0;
      this.sleepiness = Math.max(0, this.sleepiness - 0.13);
      ctx.baby?.setMood?.('surprised');
      ctx.baby?.blink?.();
      snd(ctx, 'baby.squeal', { gain: 0.5 });
      snd(ctx, 'sleep.pat', { rate: 1.5, gain: 0.5 });
      ctx.ui?.prompt?.('もっと ゆっくり…', { icon: 'pat' });
      this.patRing.mat.color.set(0xffb0a0);
      this._after(1.1, () => { if (!this.asleep) ctx.baby?.setMood?.('neutral'); });
      return;
    }

    snd(ctx, 'sleep.pat', { rate: 0.95, gain: 0.6 });
    ctx.fx?.burst?.('heart', (point || chest).clone(), 1);
    this.patRing.mat.color.set(0xffd9ec);

    if (gap > PAT_MAX) {
      this.patTimes.length = 0;
      this._addSleep(0.025);
      return;
    }

    this.patTimes.push(gap);
    if (this.patTimes.length > 4) this.patTimes.shift();

    // evenness: a steady とんとん is worth far more than a random one
    let bonus = 1;
    if (this.patTimes.length >= 3) {
      const mean = this.patTimes.reduce((a, b) => a + b, 0) / this.patTimes.length;
      const dev = Math.sqrt(this.patTimes.reduce((a, b) => a + (b - mean) ** 2, 0) / this.patTimes.length);
      const even = clamp(1 - (dev / mean) / 0.45, 0, 1);
      bonus = 1 + even * 1.1;
      if (even > 0.7) {
        this.patRing.mat.color.set(0xd8f0ff);
        ctx.fx?.burst?.('zzz', ctx.baby?.headWorldPos?.() || chest, 1);
      }
    }
    this._addSleep(0.032 * bonus);
  }

  /* --------------------------------------------------------- くまさん ---- */

  _giveTeddy() {
    if (this.teddyGiven) { snd(this.ctx, 'ui.tap'); return; }
    const ctx = this.ctx;
    this.teddyGiven = true;
    this.teddyFrom = this.teddy.group.position.clone();
    this.teddyT = 0;
    snd(ctx, 'play.balloon', { gain: 0.6 });
    ctx.baby?.setMood?.('shy');
    ctx.ui?.prompt?.('くまさんも たなで おやすみ', { icon: 'teddy' });
    const shelf = this.bedPrep.teddyTarget(this._v);
    ctx.fx?.burst?.('heart', shelf, 6);
    this._addSleep(0.14);
    this._after(1.6, () => { if (!this.asleep) ctx.baby?.setMood?.('sleepy'); });
  }

  _cancelTeddyShelf() {
    if (this.bedPrep.prepared()) return;
    this._teddyAssistSignal = null;
    this.teddyGiven = false;
    this.teddyT = 0;
    this.teddyFrom = null;
    this.teddy.group.position.copy(this.teddyHome);
    this.teddy.group.rotation.set(0, -0.7, 0);
    this.ctx.baby?.setMood?.('sleepy');
    this._sayHint();
  }

  _teddyUpdate(dt) {
    if (!this.teddyGiven) {
      this.teddy.group.position.y = this.teddyHome.y
        + Math.sin(this.t * 1.1) * 0.0015;
      return;
    }
    if (this.teddyT >= 1 && this.bedPrep.prepared()) {
      this.teddy.group.position.copy(this.bedPrep.teddyTarget(this._v));
      return;
    }
    const ctx = this.ctx;
    const target = this.bedPrep.teddyTarget(this._v);
    this.teddyT = Math.min(1, this.teddyT + dt * 1.6);
    const e = this.teddyT * this.teddyT * (3 - 2 * this.teddyT);
    this.teddy.group.position.copy(this.teddyFrom).lerp(target, e);
    this.teddy.group.position.y += Math.sin(e * Math.PI) * 0.05;
    this.teddy.group.rotation.y = lerp(-0.7, -0.35, e);
    this.teddy.group.rotation.z = lerp(0, 0.02, e);
    if (this.teddyT >= 1 && this._teddyAssistSignal?.aborted) {
      this._cancelTeddyShelf();
      return;
    }
    if (this.teddyT >= 1 && this.bedPrep.completeTeddyShelf()) {
      this._placeBabyInCrib();
      ctx.baby?.setMood?.('happy');
      ctx.cameraRig?.goTo?.('crib', 0.8);
      this._after(0.8, () => {
        if (!this.asleep) ctx.baby?.setMood?.('sleepy');
        this._sayHint();
      });
    }
  }

  /* ------------------------------------------------- 入眠の6だんかい ----- */

  _cap() { return this.lampOn ? LIGHT_CAP : 1; }

  _addSleep(a) {
    if (this.asleep) return;
    this.sleepiness = clamp(this.sleepiness + a, 0, this._cap());
    this.ctx.ui?.meter?.('energy', this.sleepiness);
    if (this.sleepiness >= STAGES[5].at) this._fallAsleep(false);
  }

  _fallAsleep(instant) {
    if (this.asleep) return;
    if (!this.bedPrep.prepared()) this._stageSafeSleepVisual();
    const ctx = this.ctx;
    this.asleep = true;
    this.asleepAt = this.t;
    this.sleepiness = 1;
    this.stage = 5;
    this.bookOpen = false;

    ctx.baby?.playPose?.('sleep', { seconds: instant ? 0.2 : 1.2, loop: true });
    ctx.baby?.setMood?.('asleep');
    ctx.baby?.lookAt?.(null);
    ctx.ui?.meter?.('energy', 1);
    ctx.ui?.prompt?.('おやすみなさい', { icon: 'moon' });
    ctx.ui?.star?.(3);
    ctx.state?.patch?.({ asleep: true });

    const head = ctx.baby?.headWorldPos?.();
    if (head) ctx.fx?.burst?.('zzz', head, 4, { radius: 0.05 });
    snd(ctx, 'play.chime', { gain: 0.4 });
    this._starTimer = this.t + (instant ? 1.0 : 2.2);
    this._snoreTimer = 1.8;
    this._zzzTimer = 1.0;
  }

  _onStageChange(stage) {
    const ctx = this.ctx;
    switch (stage) {
      case 1:
        ctx.ui?.prompt?.('えほんを よもうか', { icon: 'book' });
        break;
      case 2:
        ctx.baby?.setMood?.('sleepy');
        ctx.ui?.prompt?.('とんとん…ゆっくりね', { icon: 'pat' });
        break;
      case 3:
        ctx.baby?.setMood?.('sleepy');
        ctx.ui?.prompt?.('とんとん…ゆっくりね', { icon: 'pat' });
        break;
      case 4:
        ctx.baby?.setMood?.('sleepy');
        break;
      default:
        break;
    }
  }

  /**
   * The six stages, and what each one actually looks like:
   *   0 げんき      head level, wide look-around, brisk 3.2 s blinks
   *   1 あくび      gesture('yawn') on a 5.5 s beat, one drifting zzz
   *   2 目こしこし  gesture('rub-eyes'), mood → sleepy, blinks slow to 2.2 s
   *   3 うとうと    head tilts and long *double* blinks begin
   *   4 こっくり    head bone droops over ~1.4 s then catches — the classic nod
   *   5 すやすや    safe sleep pose, zzz + snore, shooting star
   */
  _stageUpdate(dt) {
    const ctx = this.ctx;
    const baby = ctx.baby;

    if (!this.asleep) {
      // a dark, quiet room is sleepy all by itself
      if (!this.lampOn) this._addSleep(dt * 0.014);
      this.sleepiness = Math.min(this.sleepiness, this._cap());

      let stage = 0;
      for (let i = 0; i < STAGES.length; i++) if (this.sleepiness >= STAGES[i].at) stage = i;
      if (stage !== this.stage) { this.stage = stage; this._onStageChange(stage); }
    } else {
      this.stage = 5;
    }

    const stage = this.stage;

    /* --- blinking cadence ------------------------------------------------ */
    if (stage < 5) {
      this._blinkTimer -= dt;
      if (this._blinkTimer <= 0) {
        const gaps = [3.2, 2.8, 2.2, 1.6, 1.1];
        this._blinkTimer = gaps[stage];
        baby?.blink?.();
        // from "drowsy" on, blinks come in slow pairs — that is what heavy
        // eyelids look like when you can't author the lids directly
        if (stage >= 3) this._after(0.16, () => baby?.blink?.());
      }
    }

    /* --- the signature gesture of each stage ----------------------------- */
    this._gestureTimer -= dt;
    if (this._gestureTimer <= 0 && !this.brushing) {
      this._gestureTimer = 5.5;
      const head = baby?.headWorldPos?.();
      if (stage === 1) {
        baby?.gesture?.('yawn');
        snd(ctx, 'baby.yawn', { gain: 0.5 });
        if (head) ctx.fx?.burst?.('zzz', head, 1);
      } else if (stage === 2) {
        baby?.gesture?.('rub-eyes');
        snd(ctx, 'dress.rustle', { gain: 0.4 });
      } else if (stage === 3) {
        baby?.gesture?.('yawn');
        snd(ctx, 'baby.yawn', { rate: 0.9, gain: 0.35 });
        if (head) ctx.fx?.burst?.('zzz', head, 1);
      } else if (stage === 4) {
        if (head) ctx.fx?.burst?.('zzz', head, 1);
      }
    }

    /* --- head: tilt, nod, and finally settle ----------------------------- */
    const bone = baby?.bone?.('head');
    if (bone) {
      bone.rotation.x -= this._headOffset.x;
      bone.rotation.z -= this._headOffset.z;

      let ox = 0, oz = 0;
      if (stage === 3) {
        oz = 0.10;
        ox = 0.05 + Math.sin(this.t * 0.9) * 0.02;
      } else if (stage === 4) {
        // こっくりこっくり: a slow 1.4 s droop, then a 0.4 s catch
        const period = 1.8;
        const ph = (this.t % period) / period;
        const droop = ph < 0.78
          ? (ph / 0.78) * (ph / 0.78) * 0.40
          : 0.40 * (1 - (ph - 0.78) / 0.22);
        ox = droop;
        oz = 0.12;
      } else if (stage === 5) {
        oz = 0.18;
        ox = 0.10 + Math.sin(this.t * 0.9) * 0.012;
      } else {
        ox = Math.sin(this.t * 0.6) * 0.02;
      }
      bone.rotation.x += ox;
      bone.rotation.z += oz;
      this._headOffset.x = ox;
      this._headOffset.z = oz;
    }

    /* --- asleep: zzz, snoring, and the meter creeping to full ------------ */
    if (this.asleep) {
      this._zzzTimer -= dt;
      if (this._zzzTimer <= 0) {
        this._zzzTimer = 1.9;
        const head = baby?.headWorldPos?.();
        // Three puffs at a spread of sizes rather than one hero sprite: a
        // single large FX quad is what made the old cue read as a decal
        // stamped on the sheet. A small cluster with a size hierarchy reads
        // as something in the air above the cot.
        if (head) {
          const p = head.clone().add(new THREE.Vector3(0, 0.055, 0));
          ctx.fx?.burst?.('zzz', p, 3, { radius: 0.035 });
        }
      }
      this._snoreTimer -= dt;
      if (this._snoreTimer <= 0) {
        this._snoreTimer = 3.6;
        snd(ctx, 'sleep.snore', { gain: 0.35 });
      }
    }

    /* --- でんきが ついてると ねむれない ---------------------------------- */
    if (!this.asleep && this.lampOn && this.sleepiness >= this._cap() - 0.02) {
      this._pointTimer -= dt;
      this._lampPulse = 0.5 + Math.sin(this.t * 3.4) * 0.5;
      if (this._pointTimer <= 0) {
        this._pointTimer = 5.5;
        const lampPos = this.lampGroup.getWorldPosition(new THREE.Vector3());
        lampPos.y += 0.13;
        baby?.lookAt?.(lampPos);
        baby?.gesture?.('point');
        baby?.setMood?.('sulk');
        snd(ctx, 'baby.whine', { gain: 0.4 });
        ctx.fx?.burst?.('sparkle', lampPos, 4);
        ctx.ui?.prompt?.('でんきを けそう', { icon: 'lamp' });
        this._after(2.4, () => {
          if (!this.asleep) { baby?.setMood?.('sleepy'); baby?.lookAt?.(null); }
        });
      }
    } else {
      this._lampPulse = 0;
    }
  }


  /* ---------------------------------------------------------- lighting --- */

  _lightingUpdate(dt) {
    const ctx = this.ctx;
    this._lampMix = this._lampMix ?? (this.lampOn ? 1 : 0);
    this._lampMix += ((this.lampOn ? 1 : 0) - this._lampMix) * Math.min(1, dt * 3.2);
    const L = this._lampMix;

    this.lampLight.intensity = 0.8 * L;
    this.lampShade.material.emissiveIntensity = 0.35 * L;
    this.lampBulb.visible = L > 0.02;
    this.lampBulb.material.color.setRGB(1, 0.94 * L + 0.06, 0.82 * L + 0.05);

    const pulse = 1 + (this._lampPulse || 0) * 0.45;
    this.lampGlow.material.opacity = 0.10 * L * pulse;
    this.lampGlow.scale.setScalar(0.9 + (this._lampPulse || 0) * 0.22);
    this.lampGlow.quaternion.copy(ctx.camera.quaternion);

    // curtains
    const ct = this.curtainTarget ?? this.curtains;
    this.curtains += (ct - this.curtains) * Math.min(1, dt * 2.4);

    this.moonLight.intensity = (0.16 + this.curtains * 1.05) * (1 - L * 0.35);

    // moon shaft: a card billboarded around the beam axis
    const shaft = this.moonShaft;
    shaft.material.opacity = 0.30 * this.curtains * (1 - L * 0.55);
    shaft.visible = shaft.material.opacity > 0.005;
    if (shaft.visible) {
      shaft.position.copy(this.shaftCentre);
      const toCam = this._v.copy(ctx.camera.position).sub(shaft.position);
      const right = this._v2.copy(this.shaftDir).cross(toCam);
      if (right.lengthSq() > 1e-8) {
        right.normalize();
        const up = this.shaftDir.clone().multiplyScalar(-1);
        const fwd = right.clone().cross(up).normalize();
        shaft.quaternion.setFromRotationMatrix(this._m4.makeBasis(right, up, fwd));
      }
    }

    // star lamp
    const wantProj = this.projectorForced === null || this.projectorForced === undefined
      ? !this.lampOn
      : this.projectorForced;
    this._projMix = this._projMix ?? 0;
    this._projMix += ((wantProj ? 1 : 0) - this._projMix) * Math.min(1, dt * 2.6);
    this.starSpot.intensity = 3.4 * this._projMix;
    this.projShell.emissiveIntensity = 1.5 * this._projMix;
    // A spotlight cookie is sampled through the shadow camera, not the texture
    // matrix, so the pattern is turned by rolling that camera's up vector. The
    // beam also points straight up, which makes the default up degenerate —
    // this fixes both problems at once.
    const roll = this.t * 0.085;
    this.starSpot.shadow.camera.up.set(Math.cos(roll), 0, Math.sin(roll));

    // the star field twinkles very slightly — enough to feel alive, never busy
    if (this.starField) {
      this.starField.material.opacity = 0.85 + Math.sin(this.t * 0.7) * 0.05;
    }
  }

  /* --------------------------------------------------- ながれぼし -------- */

  _shootingStarUpdate(dt) {
    const s = this.shootingStar;
    if (!s) return;

    if (!s.active) {
      if (this.asleep && this.t >= this._starTimer) {
        s.active = true;
        s.t = 0;
        for (const h of s.history) h.copy(s.from);
        s.trail.visible = true;
        s.head.visible = true;
        snd(this.ctx, 'sleep.shooting-star', { gain: 0.55 });
      }
      return;
    }

    s.t += dt;
    const k = clamp(s.t / s.duration, 0, 1);
    // ease-out along the arc, so it enters fast and fades away slow
    const e = 1 - Math.pow(1 - k, 2.1);
    const x = lerp(s.from.x, s.to.x, e);
    const y = lerp(s.from.y, s.to.y, e) - Math.sin(e * Math.PI) * 0.22;

    for (let i = s.history.length - 1; i > 0; i--) s.history[i].copy(s.history[i - 1]);
    s.history[0].set(x, y);

    const pos = s.geo.attributes.position.array;
    const col = s.geo.attributes.color.array;
    const fade = k < 0.12 ? k / 0.12 : (k > 0.72 ? (1 - k) / 0.28 : 1);
    for (let i = 0; i < s.SEG; i++) {
      const p = s.history[i];
      const q = s.history[Math.min(s.SEG - 1, i + 1)];
      let dx = p.x - q.x, dy = p.y - q.y;
      const len = Math.hypot(dx, dy) || 1;
      dx /= len; dy /= len;
      // perpendicular, tapering to a point at the tail
      const taper = Math.pow(1 - i / (s.SEG - 1), 0.85);
      const w = 0.034 * taper * fade;
      const bright = Math.pow(1 - i / (s.SEG - 1), 1.7) * fade;
      const a = i * 6, b = a + 3;
      pos[a] = p.x - dy * w; pos[a + 1] = p.y + dx * w; pos[a + 2] = 0.03;
      pos[b] = p.x + dy * w; pos[b + 1] = p.y - dx * w; pos[b + 2] = 0.03;
      col[a] = bright; col[a + 1] = bright * 0.96; col[a + 2] = bright * 0.86;
      col[b] = bright; col[b + 1] = bright * 0.96; col[b + 2] = bright * 0.86;
    }
    s.geo.attributes.position.needsUpdate = true;
    s.geo.attributes.color.needsUpdate = true;

    s.head.position.set(x, y, 0.05);
    const flare = (0.55 + Math.sin(this.t * 22) * 0.06) * fade;
    s.head.scale.setScalar(flare);
    s.headMat.opacity = fade;

    if (k >= 1) {
      s.active = false;
      s.trail.visible = false;
      s.head.visible = false;
      this._starTimer = this.t + 7.0;
    }
  }

  /* -------------------------------------------------------------- misc --- */

  _after(seconds, fn) { this._timers.push({ at: this.t + seconds, fn }); }

  /** Keep the wide portrait sheet shot focused and inside the 180-call cap. */
  _applyPrepVisualBudget() {
    const preparing = this.bedPrep.preparing();

    // These props belong to later bedtime steps. Parking them while the child
    // secures the sheet keeps the nursery calm without changing any state.
    if (this.book?.group) {
      this.book.group.visible = !preparing && this.todo.teeth
        && !this._bookParkedForHint;
    }
    if (this.brush?.group) this.brush.group.visible = !preparing && !this.todo.teeth;
    for (const object of [this.sky, this.lampBody, this.lampShade, this.lampGlow]) {
      if (object) object.visible = !preparing;
    }
    // Their update methods normally restore visibility every frame, so apply
    // the preparation mask after lighting has updated them.
    if (preparing) {
      if (this.lampBulb) this.lampBulb.visible = false;
      if (this.moonShaft) this.moonShaft.visible = false;
      for (const object of this.ctx.room?.renderBudget?.smallDetails || []) {
        object.visible = false;
      }
      this._prepVisualBudgetActive = true;
      return;
    }
    this._restorePrepRoomBudget();
  }

  _restorePrepRoomBudget() {
    if (!this._prepVisualBudgetActive) return;
    const quality = this.ctx.app?.quality ?? 2;
    const detail = quality === 2 ? 'full' : (quality === 1 ? 'reduced' : 'proxy');
    this.ctx.room?.setRenderBudget?.({ detail, activity: 'sleep' });
    this._prepVisualBudgetActive = false;
  }

  /**
   * The bedtime routine's next step, together with the *object* it is about.
   *
   * `at` is what the HUD aims its arrow at, and UI#prompt withholds the whole
   * bubble when that object is not on screen. That is deliberate: the shipped
   * `50-sleep-crib` frame told a four-year-old to brush teeth with no
   * toothbrush anywhere in the picture, because enter() fired the first line
   * of the routine unconditionally and nothing ever checked it could be
   * obeyed.
   */
  _hintSteps() {
    const t = this.todo;
    const out = [];
    const add = (text, icon, target, look) => out.push({ text, icon, target, look });
    if (this.bedPrep.preparing()) {
      out.push(...this.bedPrep.hintSteps());
      if (this.bedPrep.currentStep() === 'pajama') {
        add('スリーパーを えらぼう', 'pajama', this.pajamaProp, this.pajamaProp?.position);
      } else if (this.bedPrep.currentStep() === 'teddy') {
        add('くまさんを たなへ', 'teddy', this.teddy?.group, this.teddyHome);
      }
      return out;
    }
    if (!t.teeth) add('はみがき しようね', 'brush', this.brush?.group, this.brushHome);
    if (!t.curtains) add('カーテンを しめよう', 'curtain', this.windowPos, this.windowPos);
    if (this.lampOn) add('でんきを けそう', 'lamp', this.lampGroup, this.lampGroup?.position);
    if (this.bookPagesRead < this.book.spreads) add('えほんを よもうか', 'book', this.book?.group, this.bookHome);
    // Names no object, so it is always honest — and therefore always last.
    add('とんとん…ゆっくりね', 'pat', null, null);
    return out;
  }

  _usesPortraitGuidance() {
    return (this.ctx.camera?.aspect ?? 1) < 0.72;
  }

  /** Resolve an Object3D or Vector3 hint target to the centre seen by camera. */
  _hintWorldPoint(target, fallback) {
    if (target?.isVector3) return target.clone();
    if (target?.isObject3D) {
      target.updateWorldMatrix?.(true, true);
      const box = new THREE.Box3().setFromObject(target);
      if (!box.isEmpty()) return box.getCenter(new THREE.Vector3());
      return target.getWorldPosition(new THREE.Vector3());
    }
    if (fallback?.isVector3) return fallback.clone();
    return null;
  }

  /**
   * Portrait screens cannot show the cot, nightstand and window in one honest
   * close shot. Move inside the room and face the next prop from the crib side
   * instead; this keeps walls behind the camera and guarantees a tappable
   * target without changing any room asset.
   */
  _framePortraitHint(step, seconds = 0.75) {
    const rig = this.ctx.cameraRig;
    if (!rig || !step?.target) {
      rig?.setSubject?.(this.shotPivot);
      rig?.goTo?.('crib', seconds);
      return;
    }

    const point = this._hintWorldPoint(step.target, step.look);
    if (!point) return;

    // The fitted-sheet tabs sit on the opposite side of the cot from the
    // seated baby. A prop-only portrait close-up made the task tappable but
    // removed the child being cared for from the frame. Compose these two
    // steps around their midpoint; the preparation-only visual budget below
    // keeps this wider honest shot under the shared draw-call ceiling.
    const isBedFastener = String(step.target?.userData?.tag || '')
      .startsWith('bed-sheet-');
    const aim = point.clone();
    if (isBedFastener) {
      let babyHead = null;
      try {
        const head = this.ctx.baby?.bone?.('head');
        if (head?.isObject3D) babyHead = head.getWorldPosition(new THREE.Vector3());
      } catch (e) { babyHead = null; }
      if (!babyHead && this.ctx.baby?.group?.isObject3D) {
        babyHead = this.ctx.baby.group.getWorldPosition(new THREE.Vector3());
        babyHead.y += 0.58;
      }
      if (babyHead && Number.isFinite(babyHead.x)) {
        aim.lerp(babyHead, 0.48);
      }
    }

    const inward = this._v.copy(this.cribPos).sub(point);
    inward.y = 0;
    if (inward.lengthSq() < 1e-5) {
      inward.copy(this.outward || new THREE.Vector3(-1, 0, 0)).multiplyScalar(-1);
      inward.y = 0;
    }
    inward.normalize();

    const isWindow = step.target === this.windowPos;
    // The window is viewed from inside the room. Nightstand props are viewed
    // along the front edge of the stand: the crib side puts cot rails in front
    // of them, while the outer side puts the lamp directly in front of the
    // toothbrush. A perpendicular view separates both objects on screen.
    if (!isWindow) inward.set(-inward.z, 0, inward.x);
    const distance = isWindow ? 1.00 : (isBedFastener ? 0.62 : 0.48);
    const eye = aim.clone().addScaledVector(inward, distance);
    eye.y = aim.y + (isWindow ? 0.16 : (isBedFastener ? 0.84 : 0.72));

    rig.overridePreset?.('sleep-task', {
      space: 'world',
      pos: eye,
      target: aim.clone().add(new THREE.Vector3(0, 0.015, 0)),
      fov: isBedFastener ? 48 : 44,
      focusRange: 0.20, dof: 0.95, handheld: 0.45, roll: 0.35,
      minAspect: isBedFastener ? 1.38 : 0
    });
    rig.goTo?.('sleep-task', seconds);
  }

  _queuePortraitHint(step) {
    if (!step) return;
    if (this.ctx.app?.activity !== this) {
      // enter() runs before App publishes the new activity and before it sends
      // the opening `crib` shot. Defer one frame so our task shot wins.
      this._pendingPortraitHint = step;
      return;
    }

    const token = (this._portraitHintToken || 0) + 1;
    this._portraitHintToken = token;

    // The optional picture book shares the tiny nightstand with the required
    // toothbrush and folded pyjamas. In portrait projection it sits directly
    // over their hit areas, so park only that optional prop while either
    // required control is the active step, then restore it automatically.
    if (this.book?.group) {
      this._bookParkedForHint = ['brush', 'pajama'].includes(step.icon);
      this.book.group.visible = !this.bedPrep.preparing()
        && !this._bookParkedForHint;
    }
    this._framePortraitHint(step);

    const show = () => {
      if (this._portraitHintToken !== token || this.asleep) return;
      this.ctx.ui?.prompt?.(step.text, {
        icon: step.icon,
        target: step.target || null
      });
    };
    if (step.target) this._after(0.85, show);
    else show();
  }

  /** The step the HUD actually settled on, or null. */
  _sayHint() {
    // Cleared first: UI#prompt falls back to `activity.promptTarget` when a
    // call site passes none, and a stale one would re-aim the arrow at the
    // *previous* step's prop.
    this.promptTarget = null;
    const steps = this._hintSteps();
    let pick;
    if (this._usesPortraitGuidance()) {
      // Required steps are ordered first. Unlike promptChoices(), do not skip
      // an off-screen target: reframe it and then publish the prompt.
      pick = steps.find((step) => step.target) || steps[steps.length - 1] || null;
      this._queuePortraitHint(pick);
    } else {
      pick = this.ctx.ui?.promptChoices?.(steps) || null;
    }
    this.promptTarget = pick?.target || null;
    return pick;
  }

  _hintUpdate(dt) {
    if (this.asleep || this.brushing) return;
    this._hintTimer -= dt;
    if (this._hintTimer > 0) return;
    this._hintTimer = 10;

    const ctx = this.ctx;
    const hint = this._sayHint();
    if (hint?.look) {
      ctx.baby?.lookAt?.(hint.look.clone ? hint.look.clone() : hint.look);
      ctx.baby?.gesture?.('point');
    }
  }

  /* ------------------------------------------------------------ update --- */

  update(dt) {
    if (!this.crib) return;
    this.t += dt;

    if (this._pendingPortraitHint && this.ctx.app?.activity === this) {
      const pending = this._pendingPortraitHint;
      this._pendingPortraitHint = null;
      this._queuePortraitHint(pending);
    }

    for (let i = this._timers.length - 1; i >= 0; i--) {
      if (this.t >= this._timers[i].at) {
        const fn = this._timers[i].fn;
        this._timers.splice(i, 1);
        try { fn(); } catch (e) { /* never break the frame */ }
      }
    }

    // the とんとん target rides the baby's chest
    const chest = this.ctx.baby?.focusPoint?.();
    if (chest) this.patTarget.position.copy(chest);

    // and the camera pivot rides the head, so every cot shot stays composed
    // on the face however the sleep pose settles
    this._syncShotPivot();

    this._stageUpdate(dt);
    this.bedPrep.update(dt);
    this._teddyUpdate(dt);
    this._bookUpdate(dt);
    this._lightingUpdate(dt);
    this._applyPrepVisualBudget();
    this._shootingStarUpdate(dt);
    this._hintUpdate(dt);

    // the rhythm ring that answers every とんとん
    const ring = this.patRing;
    if (ring.mesh.visible) {
      ring.t = Math.min(1, ring.t + dt * 2.1);
      ring.mesh.scale.setScalar(0.35 + ring.t * 1.15);
      ring.mat.opacity = (1 - ring.t) * 0.55;
      if (ring.t >= 1) ring.mesh.visible = false;
    }

    // the teeth prop follows the mouth while brushing
    if (this.teeth.group.visible) {
      const mouth = this.ctx.baby?.mouthWorldPos?.();
      if (mouth) this.teeth.group.position.copy(mouth);
      const bg = this.ctx.baby?.group;
      if (bg) this.teeth.group.quaternion.copy(bg.quaternion);
    }
  }
}

export default SleepActivity;
