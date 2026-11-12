// 直方体の6面を 3 x 2 の塗装マスクへ割り当てる純粋関数。
export const FACE_TILES = Object.freeze([
  { id: 'px', col: 0, row: 0, axis: 0, sign: 1, u: 2, v: 1 },
  { id: 'nx', col: 1, row: 0, axis: 0, sign: -1, u: 2, v: 1 },
  { id: 'py', col: 2, row: 0, axis: 1, sign: 1, u: 0, v: 2 },
  { id: 'ny', col: 0, row: 1, axis: 1, sign: -1, u: 0, v: 2 },
  { id: 'pz', col: 1, row: 1, axis: 2, sign: 1, u: 0, v: 1 },
  { id: 'nz', col: 2, row: 1, axis: 2, sign: -1, u: 0, v: 1 },
]);

export function dominantFace(normal) {
  const a = [Math.abs(normal[0]), Math.abs(normal[1]), Math.abs(normal[2])];
  const axis = a[0] >= a[1] && a[0] >= a[2] ? 0 : a[1] >= a[2] ? 1 : 2;
  const sign = normal[axis] >= 0 ? 1 : -1;
  return FACE_TILES.findIndex((f) => f.axis === axis && f.sign === sign);
}

export function faceAtlasPoint(position, normal, size) {
  const face = dominantFace(normal);
  const tile = FACE_TILES[face];
  const p = position.map((value, axis) => value / Math.max(0.0001, size[axis]) + 0.5);
  let u = p[tile.u];
  const v = p[tile.v];
  if (tile.sign < 0) u = 1 - u;
  return { face, u, v, atlasU: (tile.col + u) / 3, atlasV: (tile.row + v) / 2 };
}

export function facePlaneSize(face, size) {
  const tile = FACE_TILES[face];
  return [size[tile.u], size[tile.v]];
}
