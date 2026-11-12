// The store's light system.
//
// Every ceiling fixture paints into two small canvases:
//  - a soft "light map" (how bright the floor, shelves and products are at x/z)
//  - a sharp "fixture map" (what a glossy floor reflects when it looks up)
// Materials in the store are patched to multiply their lighting by the light map,
// so turning a fixture on visibly wakes up that part of the store.
import * as THREE from 'three';
import { STORE } from './layout.js';
import { clamp } from './util.js';

const W = STORE.x1 - STORE.x0;
const D = STORE.z1 - STORE.z0;

export class StoreLights {
  constructor() {
    this.lightRes = [176, 192];
    this.fixRes = [352, 384];
    this.lc = document.createElement('canvas');
    this.lc.width = this.lightRes[0];
    this.lc.height = this.lightRes[1];
    this.lctx = this.lc.getContext('2d');
    this.fc = document.createElement('canvas');
    this.fc.width = this.fixRes[0];
    this.fc.height = this.fixRes[1];
    this.fctx = this.fc.getContext('2d');

    this.lightTex = new THREE.CanvasTexture(this.lc);
    this.lightTex.colorSpace = THREE.NoColorSpace;
    this.lightTex.generateMipmaps = false;
    this.lightTex.minFilter = THREE.LinearFilter;
    this.lightTex.magFilter = THREE.LinearFilter;
    this.lightTex.wrapS = this.lightTex.wrapT = THREE.ClampToEdgeWrapping;
    this.lightTex.flipY = false;

    this.fixTex = new THREE.CanvasTexture(this.fc);
    this.fixTex.colorSpace = THREE.NoColorSpace;
    this.fixTex.minFilter = THREE.LinearMipmapLinearFilter;
    this.fixTex.wrapS = this.fixTex.wrapT = THREE.ClampToEdgeWrapping;
    this.fixTex.flipY = false;

    this.fixtures = [];
    this.glows = []; // permanent glows (fridges, exit signs, moonlight)
    this.festival = 0; // 0..1 colour wash at the finale
    this.pulse = 0; // voice-driven flash
    this.dirty = true;
    this.redrawTimer = 0;

    this.uniforms = {
      uStoreLight: { value: this.lightTex },
      uStoreFix: { value: this.fixTex },
      uStoreBounds: { value: new THREE.Vector4(STORE.x0, STORE.z0, 1 / W, 1 / D) },
      uNight: { value: new THREE.Color(0.05, 0.065, 0.12) },
      uCeil: { value: STORE.h - 0.12 },
      uPulse: { value: 0 },
    };
  }

  // A long fluorescent fixture. alongX: tube runs along x (else along z).
  addFixture(x, z, { len = 1.5, alongX = false, zone = 'store', on = false, power = 1 } = {}) {
    const f = {
      i: this.fixtures.length,
      x,
      z,
      len,
      alongX,
      zone,
      level: on ? 1 : 0,
      target: on ? 1 : 0,
      delay: 0,
      flicker: 0,
      power,
      tint: new THREE.Color(1, 0.96, 0.9),
      tintTarget: new THREE.Color(1, 0.96, 0.9),
      onTurnOn: null,
    };
    this.fixtures.push(f);
    this.dirty = true;
    return f;
  }

  addGlow(x, z, rx, rz, color, strength = 1) {
    this.glows.push({ x, z, rx, rz, color: new THREE.Color(color), strength });
    this.dirty = true;
  }

  turnOn(f, delay = 0) {
    if (f.target === 1) return false;
    f.target = 1;
    f.delay = delay;
    f.flicker = 0.35 + Math.random() * 0.2;
    return true;
  }

  turnOff(f) {
    f.target = 0;
    this.dirty = true;
  }

  isOn(f) {
    return f.target === 1;
  }

  update(dt) {
    for (const f of this.fixtures) {
      if (f.delay > 0) {
        f.delay -= dt;
        if (f.delay <= 0 && f.onTurnOn) f.onTurnOn(f);
        continue;
      }
      if (f.target === 1 && f.level < 1) {
        // Fluorescent start: a couple of stuttering blinks, then full.
        if (f.flicker > 0) {
          f.flicker -= dt;
          const k = Math.sin(f.flicker * 70) > 0.2 ? 0.7 : 0.08;
          f.level = k;
          if (f.flicker <= 0) f.level = 1;
        } else {
          f.level = 1;
        }
        this.dirty = true;
      } else if (f.target === 0 && f.level > 0) {
        f.level = Math.max(0, f.level - dt * 3);
        this.dirty = true;
      }
      if (!f.tint.equals(f.tintTarget)) {
        f.tint.lerp(f.tintTarget, clamp(dt * 2.5, 0, 1));
        if (Math.abs(f.tint.r - f.tintTarget.r) + Math.abs(f.tint.g - f.tintTarget.g) + Math.abs(f.tint.b - f.tintTarget.b) < 0.01) {
          f.tint.copy(f.tintTarget);
        }
        this.dirty = true;
      }
    }
    this.uniforms.uPulse.value = this.pulse;
    this.redrawTimer -= dt;
    if (this.dirty && this.redrawTimer <= 0) {
      this.redraw();
      this.redrawTimer = 1 / 30;
    }
  }

  toCanvas(x, z, res) {
    return [((x - STORE.x0) / W) * res[0], ((z - STORE.z0) / D) * res[1]];
  }

  redraw() {
    this.dirty = false;
    const g = this.lctx;
    const [lw, lh] = this.lightRes;
    g.globalCompositeOperation = 'source-over';
    g.fillStyle = '#000';
    g.fillRect(0, 0, lw, lh);
    g.globalCompositeOperation = 'lighter';
    const sx = lw / W;
    const sz = lh / D;

    const blob = (x, z, rx, rz, r, gg, b, a) => {
      const [cx, cy] = this.toCanvas(x, z, this.lightRes);
      g.save();
      g.translate(cx, cy);
      g.scale(rx * sx, rz * sz);
      const grad = g.createRadialGradient(0, 0, 0, 0, 0, 1);
      const c = (k) => `rgba(${Math.round(r * 255)},${Math.round(gg * 255)},${Math.round(b * 255)},${a * k})`;
      grad.addColorStop(0, c(1));
      grad.addColorStop(0.45, c(0.75));
      grad.addColorStop(1, c(0));
      g.fillStyle = grad;
      g.beginPath();
      g.arc(0, 0, 1, 0, Math.PI * 2);
      g.fill();
      g.restore();
    };

    for (const gl of this.glows) {
      blob(gl.x, gl.z, gl.rx, gl.rz, gl.color.r, gl.color.g, gl.color.b, gl.strength);
    }
    for (const f of this.fixtures) {
      if (f.level <= 0.001) continue;
      const a = f.level * f.power;
      const t = f.tint;
      const rx = f.alongX ? f.len * 0.5 + 2.5 : 2.5;
      const rz = f.alongX ? 2.5 : f.len * 0.5 + 2.5;
      blob(f.x, f.z, rx, rz, t.r * 0.55, t.g * 0.55, t.b * 0.55, a);
    }

    // Sharp fixture map for floor reflections.
    const h = this.fctx;
    const [fw, fh] = this.fixRes;
    h.globalCompositeOperation = 'source-over';
    h.fillStyle = '#000';
    h.fillRect(0, 0, fw, fh);
    h.globalCompositeOperation = 'lighter';
    const fsx = fw / W;
    const fsz = fh / D;
    for (const f of this.fixtures) {
      if (f.level <= 0.001) continue;
      const [cx, cy] = this.toCanvas(f.x, f.z, this.fixRes);
      const lx = (f.alongX ? f.len : 0.32) * fsx;
      const lz = (f.alongX ? 0.32 : f.len) * fsz;
      const v = f.level;
      const t = f.tint;
      h.fillStyle = `rgba(${Math.round(255 * t.r)},${Math.round(255 * t.g)},${Math.round(255 * t.b)},${v})`;
      h.fillRect(cx - lx / 2, cy - lz / 2, lx, lz);
    }
    for (const gl of this.glows) {
      if (gl.strength < 0.5) continue;
      const [cx, cy] = this.toCanvas(gl.x, gl.z, this.fixRes);
      h.fillStyle = `rgba(${Math.round(255 * gl.color.r)},${Math.round(255 * gl.color.g)},${Math.round(255 * gl.color.b)},0.35)`;
      h.fillRect(cx - gl.rx * fsx * 0.5, cy - 2, gl.rx * fsx, 4);
    }
    this.lightTex.needsUpdate = true;
    this.fixTex.needsUpdate = true;
  }
}

const SL_VERT_HEAD = /* glsl */ `
varying vec3 vSLWorld;
`;
const SL_VERT_BODY = /* glsl */ `
{
  vec4 slw = vec4( transformed, 1.0 );
  #ifdef USE_INSTANCING
    slw = instanceMatrix * slw;
  #endif
  slw = modelMatrix * slw;
  vSLWorld = slw.xyz;
}
`;
const SL_FRAG_HEAD = /* glsl */ `
varying vec3 vSLWorld;
uniform sampler2D uStoreLight;
uniform sampler2D uStoreFix;
uniform vec4 uStoreBounds;
uniform vec3 uNight;
uniform float uCeil;
uniform float uPulse;
vec2 slUV( vec2 xz ) { return ( xz - uStoreBounds.xy ) * uStoreBounds.zw; }
vec3 storeLightAt( vec3 p ) {
  vec3 L = texture2D( uStoreLight, slUV( p.xz ) ).rgb * 1.3;
  // Things nearer the ceiling sit closer to the tubes.
  L *= 0.85 + 0.15 * clamp( p.y / 3.0, 0.0, 1.0 );
  return uNight + L + uPulse * vec3( 0.25, 0.22, 0.3 );
}
`;

// Patch a three.js built-in material so its light is modulated by the store map.
// opts.reflect turns on glossy reflections of the ceiling fixtures (floors).
export function patchStoreMaterial(mat, lights, opts = {}) {
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (shader, renderer) => {
    if (prev) prev(shader, renderer);
    Object.assign(shader.uniforms, lights.uniforms);
    if (opts.reflect) shader.uniforms.uReflect = { value: opts.reflect };
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\n' + SL_VERT_HEAD)
      .replace('#include <project_vertex>', '#include <project_vertex>\n' + SL_VERT_BODY);
    let frag = shader.fragmentShader.replace('#include <common>', '#include <common>\n' + SL_FRAG_HEAD + (opts.reflect ? 'uniform float uReflect;\n' : ''));
    let inject = 'outgoingLight *= storeLightAt( vSLWorld );\n';
    if (opts.reflect) {
      inject += /* glsl */ `
      {
        vec3 V = normalize( vSLWorld - cameraPosition );
        if ( V.y < -0.01 ) {
          vec3 R = vec3( V.x, -V.y, V.z );
          float t = ( uCeil - vSLWorld.y ) / R.y;
          vec3 hit = vSLWorld + R * t;
          vec2 ruv = slUV( hit.xz );
          vec3 refl = texture2D( uStoreFix, ruv, 1.5 ).rgb;
          refl += texture2D( uStoreFix, ruv, 4.0 ).rgb * 0.6;
          float fres = 0.05 + 0.95 * pow( 1.0 - clamp( -V.y, 0.0, 1.0 ), 4.0 );
          float inside = step( 0.0, ruv.x ) * step( ruv.x, 1.0 ) * step( 0.0, ruv.y ) * step( ruv.y, 1.0 );
          outgoingLight += refl * fres * uReflect * inside * ( 0.55 + 0.45 * diffuseColor.r );
        }
      }
      `;
    }
    frag = frag.replace('#include <opaque_fragment>', inject + '#include <opaque_fragment>');
    shader.fragmentShader = frag;
  };
  mat.customProgramCacheKey = () => 'storelight' + (opts.reflect ? 'R' : '');
  mat.userData.storeLit = true;
  return mat;
}
