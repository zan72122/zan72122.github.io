// physics.js — 共用の簡易衝突ヘルパー
// ・接地: 下方レイキャスト(地形・プラットフォーム共通)
// ・水平: XZ平面での 円vsAABB / 円vs円 の押し出し
import * as THREE from 'three';

const _ray = new THREE.Raycaster();
const _down = new THREE.Vector3(0, -1, 0);
const _origin = new THREE.Vector3();
const _normal = new THREE.Vector3();

// 戻り値は使い回しオブジェクト。呼び出し後すぐに値を消費すること。
const _hit = {
  point: new THREE.Vector3(),
  normal: _normal,
  object: null,
  distance: 0,
};

// pos の (upOffset) 上から真下にレイを撃ち、最初に当たった面を返す。
// walkables はフラットな Mesh 配列(非再帰で交差判定)。
export function groundCast(pos, upOffset, far, walkables) {
  _origin.set(pos.x, pos.y + upOffset, pos.z);
  _ray.set(_origin, _down);
  _ray.far = far;
  const hits = _ray.intersectObjects(walkables, false);
  if (hits.length === 0) return null;
  const h = hits[0];
  _hit.point.copy(h.point);
  if (h.face) {
    // face.normal はローカル空間なのでワールドへ変換
    _normal.copy(h.face.normal).transformDirection(h.object.matrixWorld);
  } else {
    _normal.set(0, 1, 0);
  }
  _hit.object = h.object;
  _hit.distance = h.distance;
  return _hit;
}

// 半径 radius の円(XZ)を AABB から押し出す。
// footY/headY がボックスの高さ帯と重なるときのみ作用する
// (上面に立っている・頭上を通過する場合は何もしない)。
// box: { minX, maxX, minZ, maxZ, minY, maxY }
export function pushOutAABB(pos, radius, footY, headY, box) {
  if (footY > box.maxY - 0.3 || headY < box.minY) return false;
  const cx = Math.max(box.minX, Math.min(pos.x, box.maxX));
  const cz = Math.max(box.minZ, Math.min(pos.z, box.maxZ));
  const dx = pos.x - cx;
  const dz = pos.z - cz;
  const d2 = dx * dx + dz * dz;
  if (d2 >= radius * radius) return false;
  if (d2 > 1e-9) {
    const d = Math.sqrt(d2);
    pos.x = cx + (dx / d) * radius;
    pos.z = cz + (dz / d) * radius;
  } else {
    // 中心がボックス内部に入ってしまった場合は最小貫通軸で押し出す
    const pushW = pos.x - (box.minX - radius);
    const pushE = box.maxX + radius - pos.x;
    const pushN = pos.z - (box.minZ - radius);
    const pushS = box.maxZ + radius - pos.z;
    const m = Math.min(pushW, pushE, pushN, pushS);
    if (m === pushW) pos.x = box.minX - radius;
    else if (m === pushE) pos.x = box.maxX + radius;
    else if (m === pushN) pos.z = box.minZ - radius;
    else pos.z = box.maxZ + radius;
  }
  return true;
}

// 半径 radius の円(XZ)を円柱(木の幹など)から押し出す。
// cyl: { x, z, r, minY, maxY }
export function pushOutCylinder(pos, radius, footY, headY, cyl) {
  if (footY > cyl.maxY - 0.3 || headY < cyl.minY) return false;
  const dx = pos.x - cyl.x;
  const dz = pos.z - cyl.z;
  const rr = radius + cyl.r;
  const d2 = dx * dx + dz * dz;
  if (d2 >= rr * rr) return false;
  const d = Math.sqrt(d2) || 1e-6;
  pos.x = cyl.x + (dx / d) * rr;
  pos.z = cyl.z + (dz / d) * rr;
  return true;
}
