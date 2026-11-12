/**
 * water.js — 波打つ水面。
 * 入水地点から広がる波紋を最大 4 つ同時に描けるようにしてあり、
 * 「刺さった」感触を視覚でも返す。
 */

import * as THREE from 'three';

const VERT = /* glsl */`
uniform float uTime;
uniform float uChop;
varying vec3 vWorld;
varying vec3 vNormal;
varying vec2 vUv;

vec3 waveDisp(vec3 p) {
  float t = uTime;
  float h = 0.0;
  h += sin(p.x * 0.28 + t * 1.1) * 0.30;
  h += sin(p.z * 0.34 - t * 0.9) * 0.26;
  h += sin((p.x + p.z) * 0.16 + t * 0.55) * 0.34;
  h += sin((p.x - p.z) * 0.62 - t * 1.9) * 0.09;
  return vec3(p.x, h * uChop, p.z);
}

void main() {
  vUv = uv;
  vec3 wp = (modelMatrix * vec4(position, 1.0)).xyz;
  vec3 d = waveDisp(wp);
  float e = 0.6;
  vec3 dx = waveDisp(wp + vec3(e, 0.0, 0.0));
  vec3 dz = waveDisp(wp + vec3(0.0, 0.0, e));
  vec3 tx = normalize(vec3(e, dx.y - d.y, 0.0));
  vec3 tz = normalize(vec3(0.0, dz.y - d.y, e));
  vNormal = normalize(cross(tz, tx));
  vWorld = vec3(wp.x, wp.y + d.y, wp.z);
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}
`;

const FRAG = /* glsl */`
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uSky;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uTime;
uniform vec4 uRipples[4];   // xz = 中心, z成分=開始時刻, w = 強さ
varying vec3 vWorld;
varying vec3 vNormal;

void main() {
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 N = normalize(vNormal);

  float fres = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), 3.0);
  // 波の峰は明るく、谷は深い色に。平坦に見えないようにする。
  float crest = clamp(vWorld.y * 0.85 + 0.5, 0.0, 1.0);
  vec3 base = mix(uDeep, uShallow, crest * 0.75 + clamp(N.y - 0.6, 0.0, 0.4));
  vec3 col = mix(base, uSky, fres * 0.72);
  // 遠景は空の色へ溶かす
  float far = clamp(distance(cameraPosition.xz, vWorld.xz) / 620.0, 0.0, 1.0);
  col = mix(col, uSky, far * far * 0.55);

  // 太陽の鏡面反射
  vec3 H = normalize(uSunDir + V);
  float spec = pow(max(dot(N, H), 0.0), 90.0);
  col += uSunColor * spec * 1.6;
  float glint = pow(max(dot(N, H), 0.0), 900.0);
  col += uSunColor * glint * 5.0;

  // 波紋(入水痕)
  float foam = 0.0;
  for (int i = 0; i < 4; i++) {
    vec4 r = uRipples[i];
    if (r.w <= 0.001) continue;
    float age = uTime - r.z;
    if (age < 0.0 || age > 3.0) continue;
    float d = distance(vWorld.xz, r.xy);
    float radius = age * 7.0;
    float ring = exp(-pow((d - radius) * 1.4, 2.0));
    foam += ring * r.w * (1.0 - age / 3.0);
    float ring2 = exp(-pow((d - radius * 0.55) * 2.0, 2.0));
    foam += ring2 * r.w * 0.6 * (1.0 - age / 3.0);
  }
  col = mix(col, vec3(1.0), clamp(foam, 0.0, 0.85));

  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}
`;

export class Water {
  constructor(scene, { size = 900, seg = 190 } = {}) {
    const geo = new THREE.PlaneGeometry(size, size, seg, seg);
    geo.rotateX(-Math.PI / 2);
    this.uniforms = {
      uTime: { value: 0 },
      uChop: { value: 1.0 },
      uDeep: { value: new THREE.Color(0x0d5f80) },
      uShallow: { value: new THREE.Color(0x22b7c9) },
      uSky: { value: new THREE.Color(0xbfe9ff) },
      uSunDir: { value: new THREE.Vector3(0.4, 0.75, 0.5).normalize() },
      uSunColor: { value: new THREE.Color(0xfff2d0) },
      uRipples: { value: [
        new THREE.Vector4(0, 0, -99, 0), new THREE.Vector4(0, 0, -99, 0),
        new THREE.Vector4(0, 0, -99, 0), new THREE.Vector4(0, 0, -99, 0),
      ] },
    };
    this.mat = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG, uniforms: this.uniforms,
    });
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.position.y = 0;
    this.mesh.renderOrder = -1;
    scene.add(this.mesh);
    this._rippleIdx = 0;
    this.time = 0;

    // 水面下の暗い箱(奥行き感)
    const under = new THREE.Mesh(
      new THREE.BoxGeometry(size * 0.98, 60, size * 0.98),
      new THREE.MeshBasicMaterial({ color: 0x05283a }),
    );
    under.position.y = -33.5;   // 天面 y=-3.5。波の谷(最大 -1.0 程度)より十分下。
    scene.add(under);
    this.under = under;
  }

  setTheme({ deep, shallow, sky, sunColor, chop }) {
    if (deep !== undefined) this.uniforms.uDeep.value.setHex(deep);
    if (shallow !== undefined) this.uniforms.uShallow.value.setHex(shallow);
    if (sky !== undefined) this.uniforms.uSky.value.setHex(sky);
    if (sunColor !== undefined) this.uniforms.uSunColor.value.setHex(sunColor);
    if (chop !== undefined) this.uniforms.uChop.value = chop;
    if (deep !== undefined) this.under.material.color.setHex(deep).multiplyScalar(0.35);
  }

  ripple(x, z, strength = 1) {
    const v = this.uniforms.uRipples.value[this._rippleIdx % 4];
    v.set(x, z, this.time, strength);
    this._rippleIdx++;
  }

  /** その地点の水面の高さ(シェーダと同じ式) */
  heightAt(x, z) {
    const t = this.time, c = this.uniforms.uChop.value;
    let h = 0;
    h += Math.sin(x * 0.28 + t * 1.1) * 0.30;
    h += Math.sin(z * 0.34 - t * 0.9) * 0.26;
    h += Math.sin((x + z) * 0.16 + t * 0.55) * 0.34;
    h += Math.sin((x - z) * 0.62 - t * 1.9) * 0.09;
    return h * c;
  }

  update(dt) {
    this.time += dt;
    this.uniforms.uTime.value = this.time;
  }

  follow(x, z) { this.mesh.position.x = Math.round(x / 60) * 60; this.mesh.position.z = Math.round(z / 60) * 60; }
}
