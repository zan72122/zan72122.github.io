/* 3D演出: 紙吹雪(InstancedMesh)・湯気/キラキラ(スプライトプール) */
import * as THREE from 'three';
import * as M from './materials.js';

const CONFETTI_COLORS = ['#ff5e96', '#ffd24d', '#7ed6f7', '#b78ef0', '#7be08a', '#ffffff', '#ff9ec0'];

export function makeFx(scene) {
  // ---------------- 紙吹雪(固定スロット方式) ----------------
  const N = 220;
  const confGeo = new THREE.PlaneGeometry(0.024, 0.017);
  const confMat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide });
  const conf = new THREE.InstancedMesh(confGeo, confMat, N);
  conf.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  conf.frustumCulled = false;
  const cColor = new THREE.Color();
  const dummy = new THREE.Object3D();
  for (let i = 0; i < N; i++) {
    conf.setColorAt(i, cColor.set(CONFETTI_COLORS[i % CONFETTI_COLORS.length]));
    dummy.position.set(0, -10, 0);
    dummy.updateMatrix();
    conf.setMatrixAt(i, dummy.matrix);
  }
  conf.instanceColor.needsUpdate = true;
  conf.visible = false;
  scene.add(conf);
  const slots = new Array(N).fill(null);
  let confettiOn = false;
  let confCenter = new THREE.Vector3(0, 0, 0);

  function spawnSlot(i, anywhere) {
    slots[i] = {
      x: confCenter.x + (Math.random() - 0.5) * 2.0,
      y: confCenter.y + 0.35 + Math.random() * (anywhere ? 1.1 : 0.3),
      z: confCenter.z + (Math.random() - 0.5) * 1.1,
      vy: -(0.26 + Math.random() * 0.22),
      phase: Math.random() * 6.28,
      sway: 0.1 + Math.random() * 0.16,
      spinA: Math.random() * 6.28, spinB: (Math.random() - 0.5) * 9,
      age: 0
    };
  }

  function startConfetti(center) {
    confCenter = center.clone();
    confettiOn = true;
    conf.visible = true;
  }
  function stopConfetti() {
    confettiOn = false;
    conf.visible = false;
    slots.fill(null);
  }

  // ---------------- スプライトプール ----------------
  const steamTex = M.softCircleTexture('rgba(255,255,255,0.9)');
  const sparkTex = M.sparkTexture();

  function makePool(n, tex, blending) {
    const pool = [];
    for (let i = 0; i < n; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: tex, transparent: true, depthWrite: false, opacity: 0,
        blending: blending || THREE.NormalBlending
      }));
      s.visible = false;
      scene.add(s);
      pool.push({ sprite: s, age: 0, life: 0, v: new THREE.Vector3(), grow: 0, busy: false });
    }
    return pool;
  }
  const steamPool = makePool(18, steamTex);
  const sparkPool = makePool(28, sparkTex, THREE.AdditiveBlending);

  function emit(pool, pos, opt) {
    const p = pool.find(p => !p.busy);
    if (!p) return;
    p.busy = true;
    p.age = 0;
    p.life = opt.life;
    p.v.copy(opt.v);
    p.grow = opt.grow || 0;
    p.baseScale = opt.scale;
    p.sprite.position.copy(pos);
    p.sprite.scale.setScalar(opt.scale);
    p.sprite.material.opacity = opt.opacity || 1;
    p.sprite.visible = true;
  }

  function steam(pos) {
    emit(steamPool, pos, {
      life: 1.1 + Math.random() * 0.3,
      v: new THREE.Vector3((Math.random() - 0.5) * 0.05, 0.16 + Math.random() * 0.1, (Math.random() - 0.5) * 0.05),
      scale: 0.05 + Math.random() * 0.04, grow: 0.12, opacity: 0.85
    });
  }

  function sparkleBurst(pos, n = 10, spread = 0.16) {
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + Math.random() * 0.5;
      emit(sparkPool, pos, {
        life: 0.6 + Math.random() * 0.4,
        v: new THREE.Vector3(Math.cos(a) * spread * 2, 0.1 + Math.random() * 0.25, Math.sin(a) * spread * 2),
        scale: 0.045 + Math.random() * 0.04, grow: -0.02, opacity: 1
      });
    }
  }

  // 吹き消しの煙
  const smokeTex = M.softCircleTexture('rgba(190,178,186,0.85)');
  const smokePool = makePool(8, smokeTex);
  function smoke(pos) {
    for (let i = 0; i < 2; i++) {
      emit(smokePool, pos, {
        life: 1.0, v: new THREE.Vector3((Math.random() - 0.5) * 0.03, 0.12, 0),
        scale: 0.025, grow: 0.05, opacity: 0.8
      });
    }
  }

  function updatePool(pool, dt) {
    for (const p of pool) {
      if (!p.busy) continue;
      p.age += dt;
      if (p.age >= p.life) {
        p.busy = false;
        p.sprite.visible = false;
        continue;
      }
      const k = p.age / p.life;
      p.sprite.position.addScaledVector(p.v, dt);
      p.sprite.scale.setScalar(Math.max(0.001, p.baseScale + p.grow * k));
      p.sprite.material.opacity = (1 - k * k) * 0.95;
    }
  }

  function update(dt) {
    if (conf.visible) {
      for (let i = 0; i < N; i++) {
        const p = slots[i];
        if (!p) {
          if (confettiOn && Math.random() < 0.04) spawnSlot(i, true);
          continue;
        }
        p.age += dt;
        p.y += p.vy * dt;
        p.x += Math.sin(p.age * 3 + p.phase) * p.sway * dt;
        if (p.y < 0.05) {
          slots[i] = null;
          dummy.position.set(0, -10, 0);
          dummy.updateMatrix();
          conf.setMatrixAt(i, dummy.matrix);
          continue;
        }
        dummy.position.set(p.x, p.y, p.z);
        dummy.rotation.set(p.spinA + p.age * p.spinB, p.phase + p.age * 2, 0);
        dummy.updateMatrix();
        conf.setMatrixAt(i, dummy.matrix);
      }
      conf.instanceMatrix.needsUpdate = true;
    }
    updatePool(steamPool, dt);
    updatePool(sparkPool, dt);
    updatePool(smokePool, dt);
  }

  return { startConfetti, stopConfetti, steam, sparkleBurst, smoke, update };
}
