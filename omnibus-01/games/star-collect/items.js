// items.js — コイン・ほしのかけら(スター)・パーティクル演出
import * as THREE from 'three';

const matCoin = new THREE.MeshLambertMaterial({ color: 0xffd24a, emissive: 0x6e5410 });
const matStar = new THREE.MeshLambertMaterial({ color: 0xffe45e, emissive: 0x8a6d12 });

function starGeometry(r = 0.55) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const a = (i * Math.PI) / 5 - Math.PI / 2;
    const rad = i % 2 === 0 ? r : r * 0.45;
    const x = Math.cos(a) * rad;
    const y = -Math.sin(a) * rad;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.18,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 1,
  });
  geo.translate(0, 0, -0.09);
  return geo;
}

// 小さな破片が弾けるシンプルなパーティクル
export class FX {
  constructor(scene) {
    this.scene = scene;
    this.geo = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    this.mats = new Map();
    this.pool = [];
    this.active = [];
  }

  material(color) {
    if (!this.mats.has(color)) {
      this.mats.set(color, new THREE.MeshBasicMaterial({ color }));
    }
    return this.mats.get(color);
  }

  burst(pos, color, n = 10) {
    for (let i = 0; i < n; i++) {
      let p = this.pool.pop();
      if (!p) {
        if (this.active.length > 80) break;
        p = { mesh: new THREE.Mesh(this.geo, this.material(color)), vel: new THREE.Vector3(), life: 0 };
        this.scene.add(p.mesh);
      }
      p.mesh.material = this.material(color);
      p.mesh.visible = true;
      p.mesh.position.copy(pos);
      const a = Math.random() * Math.PI * 2;
      const r = 1.5 + Math.random() * 2.5;
      p.vel.set(Math.cos(a) * r, 2.5 + Math.random() * 2.5, Math.sin(a) * r);
      p.life = 0.55;
      this.active.push(p);
    }
  }

  update(dt) {
    for (let i = this.active.length - 1; i >= 0; i--) {
      const p = this.active[i];
      p.life -= dt;
      if (p.life <= 0) {
        p.mesh.visible = false;
        this.active.splice(i, 1);
        this.pool.push(p);
        continue;
      }
      p.vel.y -= 8 * dt;
      p.mesh.position.addScaledVector(p.vel, dt);
      const s = Math.max(p.life / 0.55, 0.01);
      p.mesh.scale.setScalar(s);
      p.mesh.rotation.x += 6 * dt;
      p.mesh.rotation.y += 5 * dt;
    }
  }
}

export class Items {
  constructor(scene, stage, events, fx) {
    this.events = events;
    this.fx = fx;
    this.t = 0;

    const coinGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.08, 18);
    coinGeo.rotateX(Math.PI / 2);
    this.coins = stage.coinSpots.map((pos, i) => {
      const mesh = new THREE.Mesh(coinGeo, matCoin);
      mesh.position.copy(pos);
      mesh.castShadow = true;
      scene.add(mesh);
      return { pos, mesh, taken: false, phase: i * 0.7 };
    });

    const starGeo = starGeometry();
    this.stars = stage.starSpots.map((pos, i) => {
      const mesh = new THREE.Mesh(starGeo, matStar);
      mesh.position.copy(pos);
      mesh.castShadow = true;
      scene.add(mesh);
      return { pos, mesh, taken: false, phase: i * 1.3 };
    });
  }

  reset() {
    for (const c of this.coins) {
      c.taken = false;
      c.mesh.visible = true;
    }
    for (const s of this.stars) {
      s.taken = false;
      s.mesh.visible = true;
    }
  }

  // active=false のときは回転アニメのみ(タイトル画面など)
  update(dt, player, active) {
    this.t += dt;
    for (const c of this.coins) {
      if (c.taken) continue;
      c.mesh.rotation.y += 3.2 * dt;
      c.mesh.position.y = c.pos.y + Math.sin(this.t * 2 + c.phase) * 0.07;
      if (!active) continue;
      const dx = player.pos.x - c.pos.x;
      const dz = player.pos.z - c.pos.z;
      const dy = player.pos.y + 0.45 - c.pos.y;
      if (dx * dx + dz * dz < 0.85 * 0.85 && Math.abs(dy) < 1.15) {
        c.taken = true;
        c.mesh.visible = false;
        this.fx.burst(c.mesh.position, 0xffd24a, 8);
        this.events.onCoin();
      }
    }
    for (const s of this.stars) {
      if (s.taken) continue;
      s.mesh.rotation.y += 1.6 * dt;
      s.mesh.position.y = s.pos.y + Math.sin(this.t * 1.6 + s.phase) * 0.14;
      if (!active) continue;
      const dx = player.pos.x - s.pos.x;
      const dz = player.pos.z - s.pos.z;
      const dy = player.pos.y + 0.45 - s.pos.y;
      if (dx * dx + dz * dz < 1.1 * 1.1 && Math.abs(dy) < 1.5) {
        s.taken = true;
        s.mesh.visible = false;
        this.fx.burst(s.mesh.position, 0xffe45e, 18);
        this.events.onStar();
      }
    }
  }
}
