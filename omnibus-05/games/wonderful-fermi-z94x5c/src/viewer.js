// Developer model viewer: ?view=horse&az=90&el=10&dist=4
import * as THREE from '../lib/three.module.js';
import { Sky } from './world/sky.js';
import { SUN_DIR, shared } from './core/env.js';
import { Unicorn } from './chars/unicorn.js';
import { HorseController } from './chars/horseRig.js';
import { Child } from './chars/child.js';

export async function runViewer(params) {
  const canvas = document.getElementById('c');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  const sky = new Sky();
  scene.add(sky.mesh);
  scene.environment = sky.makeEnvironment(renderer);
  scene.environmentIntensity = 0.9;
  const sun = new THREE.DirectionalLight(new THREE.Color(1.0, 0.88, 0.72), 3.0);
  sun.position.copy(SUN_DIR).multiplyScalar(10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera;
  sc.left = -3; sc.right = 3; sc.top = 3; sc.bottom = -3; sc.near = 0.1; sc.far = 30;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.02;
  scene.add(sun);
  scene.add(sun.target);
  const hemi = new THREE.HemisphereLight(0xbcd8f0, 0x6a7a48, 0.35);
  scene.add(hemi);
  const ground = new THREE.Mesh(new THREE.CircleGeometry(30, 64).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#6f9a45', roughness: 0.95 }));
  ground.receiveShadow = true;
  scene.add(ground);

  const what = params.get('view');
  let subject;
  if (what === 'horse') {
    const u = new Unicorn({ cell: parseFloat(params.get('cell') || '0.0115') });
    console.log('horse build ms', u.buildMs.toFixed(0), 'tris', u.tris);
    window.__stats = { ms: u.buildMs, tris: u.tris };
    scene.add(u.group);
    subject = u;
    const hair = u.buildHair(null);
    scene.add(hair.mesh);
    u.group.updateMatrixWorld(true);
    u.updateColliders();
    hair.reset();
    for (let i = 0; i < 120; i++) hair.update(1 / 60);
    window.__hair = hair;
    const anim = params.get('anim');
    if (anim) {
      const ctl = new HorseController(u);
      ctl.groundFn = () => 0;
      const track = {
        pos: (s, out) => out.set(0, 0, s),
        tangent: (s, out) => out.set(0, 0, 1),
      };
      ctl.setTrack(track, 0);
      const spd = parseFloat(params.get('speed') || '0');
      ctl.targetSpeed = spd;
      ctl.speed = spd;
      subject.ctl = ctl;
      subject.animMode = anim;
    }
    if (params.get('blink')) u.setBlink(parseFloat(params.get('blink')));
  }
  if (what === 'child') {
    const c = new Child();
    console.log('child build ms', c.buildMs.toFixed(0), 'tris', c.tris);
    window.__stats = { ms: c.buildMs, tris: c.tris };
    scene.add(c.group);
  }
  const camera = new THREE.PerspectiveCamera(parseFloat(params.get('fov') || '35'), window.innerWidth / window.innerHeight, 0.05, 200);
  const az = (parseFloat(params.get('az') || '90') * Math.PI) / 180;
  const el = (parseFloat(params.get('el') || '8') * Math.PI) / 180;
  const dist = parseFloat(params.get('dist') || '4.2');
  const tgt = new THREE.Vector3(...(params.get('t') || '0,1.0,0.1').split(',').map(Number));
  camera.position.set(tgt.x + Math.sin(az) * Math.cos(el) * dist, tgt.y + Math.sin(el) * dist, tgt.z + Math.cos(az) * Math.cos(el) * dist);
  camera.lookAt(tgt);
  const spin = params.get('spin');
  let t = 0;
  function frame() {
    t += 1 / 60;
    shared.uTime.value = t;
    if (spin) {
      const a = az + t * 0.4;
      camera.position.set(tgt.x + Math.sin(a) * Math.cos(el) * dist, tgt.y + Math.sin(el) * dist, tgt.z + Math.cos(a) * Math.cos(el) * dist);
      camera.lookAt(tgt);
    }
    if (subject && subject.ctl) {
      const c = subject.ctl;
      if (subject.animMode === 'kneel') {
        const cyc = (t % 8) / 8;
        c.downDir = cyc < 0.5 ? 1 : -1;
        c.down = cyc < 0.5 ? Math.min(1, cyc * 2.6) : Math.max(0, 1 - (cyc - 0.5) * 2.6);
        if (params.get('down')) { c.down = parseFloat(params.get('down')); c.downDir = parseFloat(params.get('dir') || '1'); }
      }
      if (subject.animMode === 'jump' && !c.jump && !subject.jumped) {
        subject.jumped = true;
        c.startJump({ to: new THREE.Vector3(0, 1.2, c.pos.z + 4), apexTime: 0.6 });
      }
      if (params.get('look')) c.look = { target: new THREE.Vector3(...params.get('look').split(',').map(Number)), weight: 1, w: 1, yaw: 0, pitch: 0 };
      if (params.get('lower')) c.headLower = parseFloat(params.get('lower'));
      const steps = t < 1 / 59 ? parseInt(params.get('steps') || '0') : 0;
      for (let i = 0; i <= steps; i++) {
        c.update(1 / 60);
        subject.hair.update(1 / 60);
      }
      const follow = c.pos;
      tgt.z = follow.z + (parseFloat(params.get('t')?.split(',')[2] || '0.1'));
      camera.position.set(tgt.x + Math.sin(az) * Math.cos(el) * dist, tgt.y + Math.sin(el) * dist, tgt.z + Math.cos(az) * Math.cos(el) * dist);
      camera.lookAt(tgt);
      sun.position.copy(follow).addScaledVector(SUN_DIR, 10);
      sun.target.position.copy(follow);
    } else if (subject && subject.hair) {
      subject.group.updateMatrixWorld(true);
      subject.updateColliders();
      subject.hair.update(1 / 60);
    }
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  frame();
  document.getElementById('veil').style.display = 'none';
  window.__ready = true;
}
