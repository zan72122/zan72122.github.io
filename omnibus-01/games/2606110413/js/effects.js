import * as THREE from 'three';

const BURST_POOL = 256;
const CONFETTI_COUNT = 420;
const POPUP_POOL = 12;
const FLASH_POOL = 10;

// 画面全体に常時舞うキラキラ(GPU側で明滅・浮遊するPoints)
function createSparkles() {
  const count = 170;
  const positions = new Float32Array(count * 3);
  const seeds = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = THREE.MathUtils.randFloatSpread(34);
    positions[i * 3 + 1] = THREE.MathUtils.randFloat(0.5, 13);
    positions[i * 3 + 2] = THREE.MathUtils.randFloat(-16, 2);
    seeds[i] = Math.random() * 100;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('seed', new THREE.BufferAttribute(seeds, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uScale: { value: 140 } },
    vertexShader: /* glsl */`
      attribute float seed;
      uniform float uTime;
      uniform float uScale;
      varying float vTwinkle;
      void main() {
        vec3 p = position;
        p.y += sin(uTime * 0.6 + seed) * 0.6;
        p.x += sin(uTime * 0.25 + seed * 2.0) * 0.8;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float tw = 0.5 + 0.5 * sin(uTime * (2.0 + fract(seed) * 3.0) + seed * 7.0);
        vTwinkle = tw * tw;
        gl_PointSize = min((2.0 + 8.0 * vTwinkle) * (uScale / -mv.z), 15.0);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */`
      varying float vTwinkle;
      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        float alpha = smoothstep(0.5, 0.05, d) * vTwinkle;
        // 十字のきらめき
        float cross = smoothstep(0.06, 0.0, abs(uv.x)) + smoothstep(0.06, 0.0, abs(uv.y));
        alpha += cross * smoothstep(0.5, 0.1, d) * vTwinkle * 0.4;
        gl_FragColor = vec4(1.0, 0.97, 0.88, alpha * 0.55);
      }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  return points;
}

export class Effects {
  constructor(scene, T) {
    this.scene = scene;

    // 常時キラキラ
    this.sparkles = createSparkles();
    scene.add(this.sparkles);

    // 命中バースト(InstancedMesh プール)
    const burstGeo = new THREE.OctahedronGeometry(0.16);
    const burstMat = new THREE.MeshBasicMaterial({ toneMapped: false });
    this.burstMesh = new THREE.InstancedMesh(burstGeo, burstMat, BURST_POOL);
    this.burstMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.burstMesh.frustumCulled = false;
    this.burst_ = {
      pos: new Float32Array(BURST_POOL * 3),
      vel: new Float32Array(BURST_POOL * 3),
      life: new Float32Array(BURST_POOL),
      maxLife: new Float32Array(BURST_POOL),
      size: new Float32Array(BURST_POOL),
      spin: new Float32Array(BURST_POOL),
      gravity: new Float32Array(BURST_POOL),
      cursor: 0,
    };
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    for (let i = 0; i < BURST_POOL; i++) this.burstMesh.setMatrixAt(i, zero);
    scene.add(this.burstMesh);

    // 閃光スプライト
    this.flashes = [];
    for (let i = 0; i < FLASH_POOL; i++) {
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: T.glow, blending: THREE.AdditiveBlending,
        transparent: true, depthWrite: false, opacity: 0,
      }));
      sprite.visible = false;
      scene.add(sprite);
      this.flashes.push({ sprite, life: 0, maxLife: 0.35, size: 1 });
    }

    // 点数ポップアップ
    this.popupTextures = T.popups;
    this.popups = [];
    const anyTex = T.popups[100];
    for (let i = 0; i < POPUP_POOL; i++) {
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: anyTex, transparent: true, depthWrite: false, depthTest: false, opacity: 0,
        toneMapped: false,
      }));
      sprite.visible = false;
      sprite.renderOrder = 50;
      scene.add(sprite);
      this.popups.push({ sprite, life: 0, maxLife: 1.0 });
    }
    this.popupCursor = 0;

    // 紙吹雪
    const confettiGeo = new THREE.PlaneGeometry(0.22, 0.15);
    const confettiMat = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, toneMapped: false });
    this.confetti = new THREE.InstancedMesh(confettiGeo, confettiMat, CONFETTI_COUNT);
    this.confetti.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.confetti.frustumCulled = false;
    this.confetti.visible = false;
    const palette = [0xff5fa2, 0xffb648, 0xfff35e, 0x58d36b, 0x4d9ad6, 0xb06ce0, 0xffffff];
    this.confetti_ = [];
    const col = new THREE.Color();
    for (let i = 0; i < CONFETTI_COUNT; i++) {
      this.confetti.setColorAt(i, col.setHex(palette[i % palette.length]));
      this.confetti_.push({
        x: THREE.MathUtils.randFloatSpread(26),
        y: THREE.MathUtils.randFloat(6, 22),
        z: THREE.MathUtils.randFloat(-6, 8),
        fall: THREE.MathUtils.randFloat(1.6, 3.4),
        phase: Math.random() * Math.PI * 2,
        sway: THREE.MathUtils.randFloat(0.6, 1.6),
      });
    }
    scene.add(this.confetti);

    this._dummy = new THREE.Object3D();
    this._tmpColor = new THREE.Color();
  }

  // 命中時などの弾けるパーティクル
  burst(pos, colorHex, { count = 16, speed = 4.5, gravity = -9, life = 0.8, size = 1, rainbow = false } = {}) {
    const B = this.burst_;
    for (let n = 0; n < count; n++) {
      const i = B.cursor;
      B.cursor = (B.cursor + 1) % BURST_POOL;
      B.pos[i * 3] = pos.x;
      B.pos[i * 3 + 1] = pos.y;
      B.pos[i * 3 + 2] = pos.z;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(THREE.MathUtils.randFloat(-1, 1));
      const v = speed * THREE.MathUtils.randFloat(0.4, 1);
      B.vel[i * 3] = Math.sin(phi) * Math.cos(theta) * v;
      B.vel[i * 3 + 1] = Math.abs(Math.cos(phi)) * v * 0.9 + speed * 0.25;
      B.vel[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * v;
      B.maxLife[i] = B.life[i] = life * THREE.MathUtils.randFloat(0.7, 1.15);
      B.size[i] = size * THREE.MathUtils.randFloat(0.7, 1.5);
      B.spin[i] = THREE.MathUtils.randFloatSpread(12);
      B.gravity[i] = gravity;
      const c = this._tmpColor;
      if (rainbow) c.setHSL(Math.random(), 0.85, 0.62);
      else c.setHex(colorHex).offsetHSL(THREE.MathUtils.randFloatSpread(0.05), 0, THREE.MathUtils.randFloat(0, 0.18));
      this.burstMesh.setColorAt(i, c);
    }
    if (this.burstMesh.instanceColor) this.burstMesh.instanceColor.needsUpdate = true;
  }

  flash(pos, colorHex, size = 3) {
    let slot = this.flashes.find((f) => f.life <= 0);
    if (!slot) slot = this.flashes[0];
    slot.sprite.position.copy(pos);
    slot.sprite.material.color.setHex(colorHex);
    slot.sprite.visible = true;
    slot.life = slot.maxLife;
    slot.size = size;
  }

  popup(pos, key) {
    const tex = this.popupTextures[key];
    if (!tex) return;
    const slot = this.popups[this.popupCursor];
    this.popupCursor = (this.popupCursor + 1) % POPUP_POOL;
    slot.sprite.material.map = tex;
    slot.sprite.position.copy(pos);
    slot.sprite.position.y += 0.4;
    slot.sprite.visible = true;
    slot.life = slot.maxLife;
  }

  setConfetti(on) {
    this.confetti.visible = on;
    if (on && this.confetti.instanceColor) this.confetti.instanceColor.needsUpdate = true;
  }

  // 花火を1発打ち上げる(フィナーレ用)。打ち上げ先の座標を返す
  firework() {
    const pos = new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(18),
      THREE.MathUtils.randFloat(6, 11),
      THREE.MathUtils.randFloat(-10, -4)
    );
    this.flash(pos, 0xffffff, 11);
    this.burst(pos, 0xffffff, {
      count: 48, speed: 8.5, gravity: -3.0, life: 1.6, size: 2.4, rainbow: true,
    });
    return pos;
  }

  update(t, dt) {
    this.sparkles.material.uniforms.uTime.value = t;

    // バースト
    const B = this.burst_;
    const d = this._dummy;
    let dirty = false;
    for (let i = 0; i < BURST_POOL; i++) {
      if (B.life[i] <= 0) continue;
      B.life[i] -= dt;
      dirty = true;
      if (B.life[i] <= 0) {
        d.position.set(0, -100, 0);
        d.scale.setScalar(0);
        d.updateMatrix();
        this.burstMesh.setMatrixAt(i, d.matrix);
        continue;
      }
      B.vel[i * 3 + 1] += B.gravity[i] * dt;
      B.pos[i * 3] += B.vel[i * 3] * dt;
      B.pos[i * 3 + 1] += B.vel[i * 3 + 1] * dt;
      B.pos[i * 3 + 2] += B.vel[i * 3 + 2] * dt;
      const frac = B.life[i] / B.maxLife[i];
      // 出た瞬間ぽんと大きく、最後すっと消える
      const scale = B.size[i] * Math.min(1, (1 - frac) * 8 + 0.2) * frac;
      d.position.set(B.pos[i * 3], B.pos[i * 3 + 1], B.pos[i * 3 + 2]);
      d.rotation.set(t * B.spin[i], t * B.spin[i] * 0.7, 0);
      d.scale.setScalar(scale);
      d.updateMatrix();
      this.burstMesh.setMatrixAt(i, d.matrix);
    }
    if (dirty) this.burstMesh.instanceMatrix.needsUpdate = true;

    // 閃光
    for (const f of this.flashes) {
      if (f.life <= 0) continue;
      f.life -= dt;
      const frac = Math.max(f.life, 0) / f.maxLife;
      f.sprite.material.opacity = frac;
      f.sprite.scale.setScalar(f.size * (1.4 - frac * 0.6));
      if (f.life <= 0) f.sprite.visible = false;
    }

    // ポップアップ
    for (const p of this.popups) {
      if (p.life <= 0) continue;
      p.life -= dt;
      const age = 1 - p.life / p.maxLife;
      const popIn = Math.min(1, age * 6);
      const scale = 2.4 * (0.5 + 0.5 * popIn) * (1 + age * 0.15);
      p.sprite.scale.set(scale, scale * 0.5, 1);
      p.sprite.position.y += dt * 1.2;
      p.sprite.material.opacity = p.life < 0.3 ? p.life / 0.3 : 1;
      if (p.life <= 0) p.sprite.visible = false;
    }

    // 紙吹雪
    if (this.confetti.visible) {
      for (let i = 0; i < CONFETTI_COUNT; i++) {
        const c = this.confetti_[i];
        c.y -= c.fall * dt;
        if (c.y < -0.5) c.y += 22;
        const swayX = Math.sin(t * 2.2 + c.phase) * c.sway;
        d.position.set(c.x + swayX, c.y, c.z);
        d.rotation.set(t * 3 + c.phase, t * 2 + c.phase * 2, Math.sin(t * 2 + c.phase));
        d.scale.setScalar(1);
        d.updateMatrix();
        this.confetti.setMatrixAt(i, d.matrix);
      }
      this.confetti.instanceMatrix.needsUpdate = true;
    }
  }
}
