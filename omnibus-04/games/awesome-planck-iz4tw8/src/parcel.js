// The cardboard parcel.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/RoundedBoxGeometry.js';
import { M, color } from './materials.js';

export function makeParcel(w = 0.42, h = 0.3, d = 0.32) {
  const g = new THREE.Group();
  const geo = new RoundedBoxGeometry(w, h, d, 2, 0.012);
  const box = new THREE.Mesh(geo, M.cardboard);
  box.castShadow = true; box.receiveShadow = true;
  g.add(box);
  const tapeM = color(0xd9c9a0, 0.35, 0, { transparent: true, opacity: 0.85 });
  const tape = new THREE.Mesh(new THREE.BoxGeometry(w + 0.004, 0.004, 0.06), tapeM);
  tape.position.y = h / 2; g.add(tape);
  const tape2 = new THREE.Mesh(new THREE.BoxGeometry(0.004, h * 0.4, 0.06), tapeM);
  tape2.position.set(w / 2, h * 0.3, 0); g.add(tape2);
  const tape3 = tape2.clone(); tape3.position.x = -w / 2; g.add(tape3);
  // shipping label (blank lines, no text)
  const lab = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.1), color(0xf6f4ee, 0.7));
  lab.position.set(0.06, 0.02, d / 2 + 0.002); g.add(lab);
  for (let i = 0; i < 3; i++) {
    const l = new THREE.Mesh(new THREE.PlaneGeometry(0.1 - i * 0.02, 0.008), color(0x444444, 0.8));
    l.position.set(0.04, 0.045 - i * 0.022, d / 2 + 0.003); g.add(l);
  }
  const bars = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.02), color(0x222222, 0.8));
  bars.position.set(0.06, -0.018, d / 2 + 0.003); g.add(bars);
  g.userData.size = [w, h, d];
  return g;
}
