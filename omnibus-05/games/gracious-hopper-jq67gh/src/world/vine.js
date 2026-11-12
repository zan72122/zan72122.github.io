// 朝顔のつる: 支柱から茎へ巻きつき、最後の花びらの先を縛っている
import * as THREE from '../vendor/three.module.min.js';
import { makeLit } from '../core/materials.js';
import { colorize, merge } from '../core/geom.js';
import { clamp, lerp, smooth, smoothstep } from '../core/util.js';
import { VINE_PETAL, petalAxis, budRadiusAt } from './flower.js';

const POLE = new THREE.Vector3(-2.35, 0, -1.45);
const RIM_OUT = 1.42;
const MAXP = 900;
const RADS = 5;

export function createVine(G, plant, flower) {
  const mat = makeLit(G, { wrap: 0.5, spec: 0.3 });
  // 動的なチューブ
  const geo = new THREE.BufferGeometry();
  const nv = MAXP * (RADS + 1);
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(nv * 3), 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(nv * 3), 3));
  const col = new Float32Array(nv * 3);
  const cc = new THREE.Color(0x67a83a);
  for (let i = 0; i < nv; i++) { col[i * 3] = cc.r; col[i * 3 + 1] = cc.g; col[i * 3 + 2] = cc.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const idx = [];
  for (let j = 0; j < MAXP - 1; j++) for (let i = 0; i < RADS; i++) {
    const a = j * (RADS + 1) + i, b = a + 1, c = a + RADS + 1, d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  geo.setIndex(idx);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  G.scene.add(mesh);

  // 葉 (ハート形) と青い花 (インスタンス)
  const heart = new THREE.Shape();
  heart.moveTo(0, 0);
  heart.bezierCurveTo(0.05, 0.03, 0.09, 0.1, 0.06, 0.15);
  heart.bezierCurveTo(0.04, 0.18, 0.01, 0.17, 0, 0.14);
  heart.bezierCurveTo(-0.01, 0.17, -0.04, 0.18, -0.06, 0.15);
  heart.bezierCurveTo(-0.09, 0.1, -0.05, 0.03, 0, 0);
  const leafGeo = new THREE.ShapeGeometry(heart, 6);
  leafGeo.rotateX(-Math.PI / 2 + 0.4);
  colorize(leafGeo, 0x5a9a34);
  const NL = 90;
  const leaves = new THREE.InstancedMesh(leafGeo, makeLit(G, { wrap: 0.6, side: THREE.DoubleSide }), NL);
  leaves.frustumCulled = false;
  G.scene.add(leaves);
  const trumpet = [];
  for (let i = 0; i <= 8; i++) { const t = i / 8; trumpet.push(new THREE.Vector2(0.008 + Math.pow(t, 2.2) * 0.07, t * 0.09)); }
  const flGeo = new THREE.LatheGeometry(trumpet, 16);
  const fp = flGeo.getAttribute('position');
  const fcol = new Float32Array(fp.count * 3);
  const blue = new THREE.Color(0x4f6fe0), white = new THREE.Color(0xf6f2ff), pink = new THREE.Color(0xc070e0);
  const tc = new THREE.Color();
  for (let i = 0; i < fp.count; i++) {
    const y = fp.getY(i) / 0.09, a = Math.atan2(fp.getZ(i), fp.getX(i));
    tc.copy(white).lerp(blue, smoothstep(0.35, 0.8, y)).lerp(pink, Math.pow(Math.max(0, Math.cos(a * 5)), 10) * smoothstep(0.6, 1, y) * 0.5);
    fcol[i * 3] = tc.r; fcol[i * 3 + 1] = tc.g; fcol[i * 3 + 2] = tc.b;
  }
  flGeo.setAttribute('color', new THREE.BufferAttribute(fcol, 3));
  const NF = 9;
  const flowers = new THREE.InstancedMesh(flGeo, makeLit(G, { wrap: 0.6, side: THREE.DoubleSide, spec: 0.2 }), NF);
  flowers.frustumCulled = false;
  G.scene.add(flowers);

  // つるの先の小さな朝顔のつぼみ (引っぱりたくなる端)
  const budPts = [];
  for (let i = 0; i <= 10; i++) { const t = i / 10; budPts.push(new THREE.Vector2(Math.sin(Math.PI * Math.pow(t, 0.7)) * 0.05 * (1 - t * 0.3) + 0.001, t * 0.16)); }
  const budGeo = new THREE.LatheGeometry(budPts, 14);
  const bp = budGeo.getAttribute('position');
  const bcol = new Float32Array(bp.count * 3);
  for (let i = 0; i < bp.count; i++) {
    const y = bp.getY(i) / 0.16, a = Math.atan2(bp.getZ(i), bp.getX(i));
    tc.copy(new THREE.Color(0x6aa83a)).lerp(new THREE.Color(0x6f86f0), smoothstep(0.2, 0.5, y)).lerp(white, Math.pow(Math.max(0, Math.cos(a * 5 + y * 4)), 6) * 0.6 * smoothstep(0.3, 1, y));
    bcol[i * 3] = tc.r; bcol[i * 3 + 1] = tc.g; bcol[i * 3 + 2] = tc.b;
  }
  budGeo.setAttribute('color', new THREE.BufferAttribute(bcol, 3));
  const endBud = new THREE.Mesh(budGeo, makeLit(G, { wrap: 0.6, spec: 0.4 }));
  endBud.frustumCulled = false;
  G.scene.add(endBud);

  // つるの先 (ほどく端): ロープ
  const ROPE_N = 16;
  const rope = [];
  for (let i = 0; i < ROPE_N; i++) rope.push({ p: new THREE.Vector3(), q: new THREE.Vector3() });

  const vine = {
    mesh, leaves, flowers, rope, endBud,
    reach: 0,          // 0: 支柱だけ, 1: つぼみまで届いている
    coils: 2.5, coils0: 2.5,
    ropeLen: 1.1,
    held: false, target: new THREE.Vector3(),
    released: false, releaseT: 0,
    path: [],
    ropeInit: false,
    tension: 0,
    endPos: new THREE.Vector3(),
    visibleRope: true,

    // つるの全経路を組み立てる
    build() {
      const P = this.path; P.length = 0;
      this.coilStart = 0;
      const push = (x, y, z) => { if (P.length < MAXP - ROPE_N - 2) P.push(new THREE.Vector3(x, y, z)); };
      // A: 支柱をのぼる
      const poleTop = 1.45;
      const aTurns = 3.2;
      const nA = 40;
      for (let i = 0; i <= nA; i++) {
        const t = i / nA;
        const a = t * aTurns * Math.PI * 2;
        push(POLE.x + Math.cos(a) * 0.035, 0.02 + t * poleTop, POLE.z + Math.sin(a) * 0.035);
      }
      if (this.reach <= 0.001) {
        // まだ支柱の上で、つるの先がくるりと巻いている
        const top = P[P.length - 1].clone();
        for (let i = 1; i <= 10; i++) {
          const a = i * 0.7;
          push(top.x + Math.sin(a) * 0.05 * (1 - i / 12), top.y + i * 0.02, top.z + (1 - Math.cos(a)) * 0.05 * (1 - i / 12));
        }
        return;
      }
      // B/C: 地上のつぼみには外側から直接のぼる。茎が伸びたら茎にらせん状に巻きついてのぼる
      const L = plant.length;
      const from = P[P.length - 1].clone();
      const p = new THREE.Vector3(), tg = new THREE.Vector3();
      const sc0 = flower.head.scale.x;
      const pr0 = flower.petals[VINE_PETAL];
      if (L < 2.5) {
        // 花床の外側 (最後の花びらの付け根の外) へ弧を描いて渡る
        const rimL = new THREE.Vector3(Math.cos(pr0.phi - 0.35) * (RIM_OUT), 0.05, Math.sin(pr0.phi - 0.35) * (RIM_OUT));
        flower.head.updateMatrixWorld();
        const rim = flower.head.localToWorld(rimL.clone());
        const nB = 20;
        for (let i = 1; i <= nB; i++) {
          const t = i / nB;
          const q = from.clone().lerp(rim, t);
          q.y += Math.sin(Math.PI * t) * 0.25;
          push(q.x, q.y, q.z);
        }
      } else {
        const sp = new THREE.Vector3(), st = new THREE.Vector3();
        const stemStart = 0.35;
        plant.frameAt(stemStart, sp, st);
        const nB = 16;
        for (let i = 1; i <= nB; i++) {
          const t = i / nB;
          const x = lerp(from.x, sp.x - 0.3, t), z = lerp(from.z, sp.z - 0.2, t);
          const y = lerp(from.y, sp.y + 0.1, t) + Math.sin(Math.PI * t) * 0.35;
          push(x, y, z);
        }
        const pitch = Math.max(1.2, L / 12);
        const turns = (L - stemStart) / pitch;
        const nC = Math.min(420, Math.max(12, Math.ceil(turns * 14)));
        const ang0 = Math.atan2(from.z - sp.z, from.x - sp.x);
        for (let i = 0; i <= nC; i++) {
          const t = i / nC;
          const s2 = lerp(stemStart, L, t);
          plant.frameAt(s2, p, tg);
          const r = plant.radiusAt(s2) + 0.035;
          const a = ang0 + t * turns * Math.PI * 2;
          push(p.x + Math.cos(a) * r, p.y, p.z + Math.sin(a) * r);
        }
      }
      if (this.released) {
        // ほどけた後: 茎を巻いてのぼったつるの先が、花床の外側から垂れ下がる
        const pr0 = flower.petals[VINE_PETAL];
        const rim = new THREE.Vector3(Math.cos(pr0.phi + 0.5) * 1.3, -0.3, Math.sin(pr0.phi + 0.5) * 1.3);
        flower.head.updateMatrixWorld();
        flower.head.localToWorld(rim);
        push(rim.x, rim.y, rim.z);
        this.anchor = rim;
        if (this.ropeLen > 2.6) this.ropeLen = Math.max(2.6, this.ropeLen - 0.05);
        return;
      }
      // D: 花床の縁から最後の花びらの外側をのぼる (つぼみの時は、つぼみの外側を頂まで)
      flower.head.updateMatrixWorld();
      const sc = flower.head.scale.x;
      const pr = flower.petals[VINE_PETAL];
      const q = new THREE.Vector3(), n = new THREE.Vector3();
      const bind = this.bind || 0;
      const TOPV = 0.86, BOTV = 0.4;
      const nD = 26;
      for (let i = 0; i <= nD; i++) {
        const v = (i / nD) * TOPV;
        flower.petalWorld(VINE_PETAL, Math.sin(v * 7) * 0.05, v, q, n);
        q.addScaledVector(n, -0.05 * sc);
        push(q.x, q.y, q.z);
      }
      // E: 巻きつき。つぼみの時は頂のまわり、開くと最後の一枚 (巻かれた筒) のまわり
      const coils = this.coils;
      const span = (TOPV - BOTV) * Math.max(0.05, coils / this.coils0);
      const nE = Math.max(3, Math.ceil(coils * 22));
      const cB = new THREE.Vector3(), tB = new THREE.Vector3();
      const cA = new THREE.Vector3(), axA = new THREE.Vector3(0, 1, 0);
      const ax = new THREE.Vector3(), cc = new THREE.Vector3(), u = new THREE.Vector3(), w2 = new THREE.Vector3();
      const outDir = new THREE.Vector3(Math.cos(pr.phi), 0, Math.sin(pr.phi));
      const first = P[P.length - 1].clone();
      this.coilStart = P.length;
      for (let i = 1; i <= nE; i++) {
        const t = i / nE;
        const v = TOPV - span * t;
        // 筒の軸 (ローカル)
        const rB = petalAxis(pr.frame, v, cB, tB) + 0.035;
        // つぼみの頂の軸
        const yA = lerp(4.25, 3.45, t * Math.max(0.3, coils / this.coils0));
        cA.set(0, yA, 0);
        const rA = budRadiusAt(yA) + 0.1;
        cc.copy(cA).lerp(cB, bind);
        ax.copy(axA).lerp(tB, bind).normalize();
        const rad = lerp(rA, rB, bind);
        // 外向きを角度0に
        u.copy(outDir).addScaledVector(ax, -outDir.dot(ax)).normalize();
        w2.crossVectors(ax, u);
        const a = t * coils * Math.PI * 2;
        const pt = cc.clone().addScaledVector(u, Math.cos(a) * rad).addScaledVector(w2, Math.sin(a) * rad);
        flower.head.localToWorld(pt);
        if (i <= 3) pt.lerp(first, (4 - i) / 4 * 0.3);
        push(pt.x, pt.y, pt.z);
      }
      this.anchor = P[P.length - 1].clone();
    },

    initRope() {
      const a = this.anchor;
      for (let i = 0; i < ROPE_N; i++) {
        rope[i].p.set(a.x, a.y - i * this.ropeLen / (ROPE_N - 1), a.z);
        rope[i].q.copy(rope[i].p);
      }
      this.ropeInit = true;
    },

    stepRope(dt) {
      if (!this.ropeInit) this.initRope();
      const seg = this.ropeLen / (ROPE_N - 1);
      const g = -9.8 * dt * dt;
      for (let i = 1; i < ROPE_N; i++) {
        const r = rope[i];
        const vx = (r.p.x - r.q.x) * 0.985, vy = (r.p.y - r.q.y) * 0.985, vz = (r.p.z - r.q.z) * 0.985;
        r.q.copy(r.p);
        r.p.x += vx; r.p.y += vy + g; r.p.z += vz;
        // 風
        if (this.windAmt) { r.p.x += Math.sin(G.time * 1.3 + i) * this.windAmt * dt * dt * 3; }
      }
      rope[0].p.copy(this.anchor);
      const last = rope[ROPE_N - 1];
      if (this.held) last.p.lerp(this.target, 0.5);
      for (let it = 0; it < 10; it++) {
        rope[0].p.copy(this.anchor);
        for (let i = 0; i < ROPE_N - 1; i++) {
          const a = rope[i].p, b = rope[i + 1].p;
          const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
          const d = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1e-6;
          const diff = (d - seg) / d;
          const wa = i === 0 ? 0 : 0.5, wb = (this.held && i + 1 === ROPE_N - 1) ? 0.1 : 0.5;
          const s = wa + wb;
          a.x += dx * diff * (wa / s); a.y += dy * diff * (wa / s); a.z += dz * diff * (wa / s);
          b.x -= dx * diff * (wb / s); b.y -= dy * diff * (wb / s); b.z -= dz * diff * (wb / s);
        }
        // 床より下へ行かない
        if (this.floorY !== undefined) for (const r of rope) if (r.p.y < this.floorY) r.p.y = this.floorY;
      }
      // 張力 = 端と錨の距離 / 全長
      const span = rope[0].p.distanceTo(last.p);
      this.tension = clamp(span / this.ropeLen);
      this.endPos.copy(last.p);
    },

    writeTube() {
      const P = this.path.slice();
      if (this.visibleRope) {
        for (let i = 1; i < ROPE_N; i++) {
          // つるの先端は細かい巻きひげ
          const r = rope[i].p;
          P.push(r.clone());
        }
        // 端のくるりとした巻きひげ
        const e = rope[ROPE_N - 1].p, prev = rope[ROPE_N - 2].p;
        const dir = new THREE.Vector3().subVectors(e, prev).normalize();
        const side = new THREE.Vector3(dir.z, 0, -dir.x).normalize();
        for (let i = 1; i <= 8; i++) {
          const a = i * 0.8;
          const rr = 0.06 * (1 - i / 10);
          P.push(e.clone().addScaledVector(dir, Math.sin(a) * rr).addScaledVector(side, (1 - Math.cos(a)) * rr));
        }
      }
      const n = Math.min(MAXP, P.length);
      const pos = geo.attributes.position.array, nrm = geo.attributes.normal.array;
      const T = new THREE.Vector3(), N = new THREE.Vector3(0, 0, 1), B = new THREE.Vector3();
      for (let j = 0; j < n; j++) {
        const a = P[Math.max(0, j - 1)], b = P[Math.min(n - 1, j + 1)];
        T.subVectors(b, a); if (T.lengthSq() < 1e-12) T.set(0, 1, 0); T.normalize();
        B.crossVectors(T, N); if (B.lengthSq() < 1e-6) { N.set(1, 0, 0); B.crossVectors(T, N); }
        B.normalize(); N.crossVectors(B, T).normalize();
        // 根元は太く、先端は細く
        const f = j / n;
        const ropeStart = n - (this.visibleRope ? ROPE_N + 7 : 0);
        let r = 0.016 * (1 - f * 0.3) + 0.002;
        // 花に巻きついた部分は太く、遠くからでも「巻かれている」と分かるように
        if (this.coilStart && j >= this.coilStart - 26 && !this.released) r = j >= this.coilStart ? 0.032 : 0.024;
        // ほどく端は太めで、先がくるりと細くなる
        if (this.visibleRope && j >= ropeStart) r = 0.024 * (j > n - 9 ? Math.max(0.35, (n - j) / 9) : 1);
        for (let i = 0; i <= RADS; i++) {
          const ang = i / RADS * Math.PI * 2;
          const c = Math.cos(ang), s = Math.sin(ang);
          const nx = N.x * c + B.x * s, ny = N.y * c + B.y * s, nz = N.z * c + B.z * s;
          const k = j * (RADS + 1) + i;
          pos[k * 3] = P[j].x + nx * r; pos[k * 3 + 1] = P[j].y + ny * r; pos[k * 3 + 2] = P[j].z + nz * r;
          nrm[k * 3] = nx; nrm[k * 3 + 1] = ny; nrm[k * 3 + 2] = nz;
        }
      }
      geo.attributes.position.needsUpdate = true;
      geo.attributes.normal.needsUpdate = true;
      geo.setDrawRange(0, Math.max(0, n - 1) * RADS * 6);
      this.fullPath = P;
      this.placeLeaves(P, n);
    },

    placeLeaves(P, n) {
      const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), s = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3();
      // 経路に沿って等間隔に
      let acc = 0, li = 0, fi = 0;
      const sizeK = 1.0;
      for (let j = 1; j < n && li < NL; j++) {
        acc += P[j].distanceTo(P[j - 1]);
        const spacing = P[j].y > 3 ? 2.6 : 0.24;
        if (acc > spacing) {
          acc = 0;
          e.set(0, j * 2.4, Math.sin(j) * 0.5);
          q.setFromEuler(e);
          const sc = (P[j].y > 3 ? 2.2 : 1.0) * sizeK * (0.8 + 0.4 * ((j * 7) % 5) / 5);
          s.setScalar(sc);
          p.copy(P[j]);
          m.compose(p, q, s);
          leaves.setMatrixAt(li++, m);
          // ところどころに花
          if (fi < NF && (j % 7 === 3)) {
            e.set(-0.9 + Math.sin(j) * 0.3, j, 0.4);
            q.setFromEuler(e);
            s.setScalar(P[j].y > 3 ? 2.0 : 1.0);
            m.compose(p, q, s);
            flowers.setMatrixAt(fi++, m);
          }
        }
      }
      leaves.count = li; flowers.count = fi;
      leaves.instanceMatrix.needsUpdate = true;
      flowers.instanceMatrix.needsUpdate = true;
    },

    update(dt) {
      this.build();
      if (this.reach > 0.001 && this.anchor) {
        if (!this.released) {
          this.stepRope(dt);
        } else {
          this.stepRope(dt);
        }
        this.visibleRope = true;
      } else {
        this.visibleRope = false;
      }
      this.writeTube();
      // 端のつぼみ
      endBud.visible = this.visibleRope;
      if (this.visibleRope) {
        const e = rope[ROPE_N - 1].p, prev = rope[ROPE_N - 3].p;
        endBud.position.copy(e);
        const dir = new THREE.Vector3().subVectors(e, prev).normalize();
        endBud.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        const s2 = 1 + Math.sin(G.time * 3) * 0.04;
        endBud.scale.setScalar(s2 * (this.held ? 1.15 : 1));
      }
    },
  };
  return vine;
}
