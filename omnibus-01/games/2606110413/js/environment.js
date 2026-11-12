import * as THREE from 'three';
import { CONFIG } from './config.js';

const C = CONFIG.colors;

// 空のグラデーション球(頂点カラー・環境マップ焼き込み用ミニシーン専用)
function gradientDome(radius, top, mid, bottom, side) {
  const geo = new THREE.SphereGeometry(radius, 32, 24);
  const pos = geo.getAttribute('position');
  const colors = new Float32Array(pos.count * 3);
  const cTop = new THREE.Color(top);
  const cMid = new THREE.Color(mid);
  const cBottom = new THREE.Color(bottom);
  const tmp = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const t = THREE.MathUtils.clamp(pos.getY(i) / radius, -1, 1);
    if (t >= 0) tmp.lerpColors(cMid, cTop, Math.pow(t, 0.7));
    else tmp.lerpColors(cMid, cBottom, Math.pow(-t, 0.5));
    colors[i * 3] = tmp.r;
    colors[i * 3 + 1] = tmp.g;
    colors[i * 3 + 2] = tmp.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true, side, fog: false });
  return new THREE.Mesh(geo, mat);
}

// 本番シーンの空ドーム: 昼/夕パレットを uniform 補間するシェーダ。
// uMix=0 で従来の頂点カラー版と同じ見た目になるようカーブを再現している。
function createSkyDome() {
  const uniforms = {
    uDayTop: { value: new THREE.Color(C.skyTop) },
    uDayMid: { value: new THREE.Color(C.skyMid) },
    uDayBottom: { value: new THREE.Color(C.skyBottom) },
    uSetTop: { value: new THREE.Color(C.sunset.skyTop) },
    uSetMid: { value: new THREE.Color(C.sunset.skyMid) },
    uSetBottom: { value: new THREE.Color(C.sunset.skyBottom) },
    uSunDir: { value: new THREE.Vector3(14, 8, 10).normalize() },
    uMix: { value: 0 },
  };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    side: THREE.BackSide,
    fog: false,
    depthWrite: false,
    vertexShader: /* glsl */`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uDayTop; uniform vec3 uDayMid; uniform vec3 uDayBottom;
      uniform vec3 uSetTop; uniform vec3 uSetMid; uniform vec3 uSetBottom;
      uniform vec3 uSunDir;
      uniform float uMix;
      varying vec3 vDir;
      vec3 grad(vec3 top, vec3 mid, vec3 bottom, float t) {
        vec3 up = mix(mid, top, pow(max(t, 0.0), 0.7));
        vec3 dn = mix(mid, bottom, pow(max(-t, 0.0), 0.5));
        return t >= 0.0 ? up : dn;
      }
      void main() {
        vec3 dir = normalize(vDir);
        float t = clamp(dir.y, -1.0, 1.0);
        vec3 day = grad(uDayTop, uDayMid, uDayBottom, t);
        vec3 set = grad(uSetTop, uSetMid, uSetBottom, t);
        vec3 col = mix(day, set, uMix);
        // 夕焼け時だけ夕日のハロを足す
        float halo = pow(max(dot(dir, normalize(uSunDir)), 0.0), 14.0);
        col += vec3(1.0, 0.5, 0.22) * halo * uMix * 0.85;
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  return new THREE.Mesh(new THREE.SphereGeometry(90, 32, 24), mat);
}

// 「キャンディ空」のミニシーンを PMREM で焼いて環境マップにする。
// 全マテリアルの反射がお菓子色のやわらかい光になる。
function bakeCandyEnvironment(renderer) {
  const envScene = new THREE.Scene();
  envScene.add(gradientDome(50, 0xbfe3ff, 0xffe9f4, 0xffc4e2, THREE.BackSide));

  const lightBall = (color, intensity, x, y, z, r) => {
    const m = new THREE.Mesh(
      new THREE.SphereGeometry(r, 16, 12),
      new THREE.MeshBasicMaterial({ color })
    );
    m.material.color.multiplyScalar(intensity);
    m.position.set(x, y, z);
    envScene.add(m);
  };
  // 上方の「太陽」とお菓子色のライト群
  lightBall(0xfff4d6, 6, 0, 35, 10, 6);
  lightBall(0xffb0d8, 2.2, -25, 12, -10, 5);
  lightBall(0xbfe9ff, 2.2, 25, 10, -12, 5);
  lightBall(0xfff0a8, 1.8, 8, 6, 25, 4);

  const pmrem = new THREE.PMREMGenerator(renderer);
  const envMap = pmrem.fromScene(envScene, 0.05).texture;
  pmrem.dispose();
  return envMap;
}

export function setupEnvironment(renderer, scene) {
  scene.environment = bakeCandyEnvironment(renderer);
  scene.fog = new THREE.Fog(C.fog, 32, 95);

  // 空(シェーダドーム・夕焼け遷移対応)
  const sky = createSkyDome();
  scene.add(sky);

  const hemi = new THREE.HemisphereLight(0xfff3fb, 0xffc4e2, 0.5);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight(0xfff2dc, 2.6);
  sun.position.set(8, 16, 10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  const cam = sun.shadow.camera;
  cam.left = -13;
  cam.right = 13;
  cam.top = 14;
  cam.bottom = -6;
  cam.near = 2;
  cam.far = 45;
  sun.shadow.bias = -0.002;
  sun.shadow.radius = 4;
  scene.add(sun);
  scene.add(sun.target);
  sun.target.position.set(0, 0, -2);

  // ステージを下から照らすやわらかい補助光
  const fill = new THREE.DirectionalLight(0xffd0e8, 0.5);
  fill.position.set(-6, 4, 12);
  scene.add(fill);

  return { sun, hemi, fill, skyMat: sky.material, fog: scene.fog };
}
