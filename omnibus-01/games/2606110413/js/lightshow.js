import * as THREE from 'three';
import { CONFIG } from './config.js';

const C = CONFIG.colors;
const S = C.sunset;

// 舞台を往復するムービングスポット2灯+見える光のビーム、
// そしてフィーバー時の夕焼け遷移(空・霧・太陽・補助光を1.5秒で補間)。

function createBeam(colorHex) {
  // 上端(光源側)が細い開口円筒。下に向かって伸ばし、後で姿勢を合わせる
  const geo = new THREE.CylinderGeometry(0.18, 1.5, 9, 12, 1, true);
  geo.translate(0, -4.5, 0); // 上端を原点に
  // 背景が明るいパステルなので加算合成では飽和して見えない。
  // 彩度の高い色の通常アルファ合成で「おもちゃのサーチライト」として見せる。
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(colorHex) },
      uOpacity: { value: 1 },
    },
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
    toneMapped: false,
    vertexShader: /* glsl */`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uColor;
      uniform float uOpacity;
      varying vec2 vUv;
      void main() {
        // 下(着地側)ほど淡く、横の縁もフェード
        float v = vUv.y;                       // 1=光源側, 0=床側
        float edge = sin(vUv.x * 3.14159);      // 円周の正面で濃く
        float alpha = pow(v, 1.0) * 0.85 * (0.25 + 0.75 * edge) * uOpacity;
        gl_FragColor = vec4(uColor, alpha);
        #include <colorspace_fragment>
      }`,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.renderOrder = 30;
  mesh.frustumCulled = false;
  return mesh;
}

export class LightShow {
  constructor(scene, env, T) {
    this.env = env; // { sun, hemi, fill, skyMat, fog } setupEnvironment の戻り値
    this.mix = 0;          // 0=昼, 1=夕焼け
    this.targetMix = 0;
    this.playing = false;
    this.intensity = 0;    // スポットのフェードイン係数

    // 昼の基準値を保存
    this.day = {
      fog: new THREE.Color(C.fog),
      sun: new THREE.Color(0xfff2dc),
      sunIntensity: 2.6,
      sunPos: new THREE.Vector3(8, 16, 10),
      hemiSky: new THREE.Color(0xfff3fb),
      hemiGround: new THREE.Color(0xffc4e2),
      fill: new THREE.Color(0xffd0e8),
    };
    this.set = {
      fog: new THREE.Color(S.fog),
      sun: new THREE.Color(S.sun),
      sunIntensity: S.sunIntensity,
      sunPos: new THREE.Vector3(...S.sunPos),
      hemiSky: new THREE.Color(S.hemiSky),
      hemiGround: new THREE.Color(S.hemiGround),
      fill: new THREE.Color(S.fill),
    };

    // ムービングスポット(起動時に生成してシェーダ再コンパイルを避ける)
    // 天蓋の下に吊られた「ライトのつぶ」からビームが伸びる
    this.spots = [];
    const defs = [
      { color: 0xff7eb5, beamColor: 0xe0388f, x: -8.5, phase: 0 },
      { color: 0x7be8d2, beamColor: 0x0fae96, x: 8.5, phase: Math.PI },
    ];
    for (const d of defs) {
      const spot = new THREE.SpotLight(d.color, 0, 34, 0.34, 0.65, 1.2);
      spot.position.set(d.x, 8.5, -5.0);
      spot.castShadow = false;
      spot.target.position.set(0, 0.5, -2);
      scene.add(spot);
      scene.add(spot.target);
      const beam = createBeam(d.beamColor);
      beam.position.copy(spot.position);
      beam.visible = false;
      scene.add(beam);
      // 光源のランプ(実体の球 + グロースプライト)
      const lamp = new THREE.Sprite(new THREE.SpriteMaterial({
        map: T.glow, color: d.color, blending: THREE.AdditiveBlending,
        transparent: true, depthWrite: false, opacity: 0,
      }));
      lamp.scale.setScalar(2.4);
      lamp.position.copy(spot.position);
      scene.add(lamp);
      const bulbMat = new THREE.MeshBasicMaterial({ toneMapped: false });
      bulbMat.color.set(d.color).multiplyScalar(1.4); // Bloomに乗る
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 9), bulbMat);
      bulb.position.copy(spot.position);
      scene.add(bulb);
      this.spots.push({ spot, beam, lamp, bulb, phase: d.phase, baseIntensity: 90, colorHex: d.color });
    }
    this._dir = new THREE.Vector3();
    this._down = new THREE.Vector3(0, -1, 0);
  }

  setFever(on) { this.targetMix = on ? 1 : 0; }
  setPlaying(on) { this.playing = on; }
  setBeamsVisible(v) {
    this.beamsAllowed = v;
  }

  update(t, dt) {
    // --- スポットの往復とビーム追従 ---
    const want = this.playing ? 1 : 0;
    this.intensity += (want - this.intensity) * Math.min(1, dt * 1.6);
    for (const s of this.spots) {
      const x = Math.sin(t * 0.5 + s.phase) * 6.5;
      s.spot.target.position.set(x, 0.5, -2);
      const boost = 1 + this.mix * 0.4; // 夕焼け時は少し強く
      s.spot.intensity = s.baseIntensity * this.intensity * boost;
      s.lamp.material.opacity = 0.9 * this.intensity;
      s.bulb.visible = this.intensity > 0.03;
      const beamOn = this.beamsAllowed !== false && this.intensity > 0.03;
      s.beam.visible = beamOn;
      if (beamOn) {
        this._dir.copy(s.spot.target.position).sub(s.spot.position).normalize();
        s.beam.quaternion.setFromUnitVectors(this._down, this._dir);
        s.beam.material.uniforms.uOpacity.value = this.intensity * (1 + this.mix * 0.4);
      }
    }

    // --- 昼⇔夕焼けの遷移(1.5秒・smoothstep) ---
    const speed = dt / 1.5;
    if (this.mix !== this.targetMix) {
      this.mix = this.targetMix > this.mix
        ? Math.min(this.targetMix, this.mix + speed)
        : Math.max(this.targetMix, this.mix - speed);
      const k = THREE.MathUtils.smoothstep(this.mix, 0, 1);
      const { sun, hemi, fill, skyMat, fog } = this.env;
      skyMat.uniforms.uMix.value = k;
      fog.color.lerpColors(this.day.fog, this.set.fog, k);
      sun.color.lerpColors(this.day.sun, this.set.sun, k);
      sun.intensity = THREE.MathUtils.lerp(this.day.sunIntensity, this.set.sunIntensity, k);
      sun.position.lerpVectors(this.day.sunPos, this.set.sunPos, k);
      hemi.color.lerpColors(this.day.hemiSky, this.set.hemiSky, k);
      hemi.groundColor.lerpColors(this.day.hemiGround, this.set.hemiGround, k);
      fill.color.lerpColors(this.day.fill, this.set.fill, k);
    }
  }
}
