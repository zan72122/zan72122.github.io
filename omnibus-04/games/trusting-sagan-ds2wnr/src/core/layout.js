// 床・天井の配置定数(純粋データ)
import { ROOM } from './route.js';

// カタツムリが天井を歩く楕円の道(天井面 y=8)
export const SNAIL = {
  length: 4.0,
  speed: 0.06, // m/s
  loop: { cx: 0.5, cz: 1.95, a: 3.25, b: 1.4 },
  bandRadius: 0.95, // 殻が垂れる範囲(道の中心からの水平距離)
  shellBottomY: 5.7,
  turnRadius: 0.62,
  turnSeconds: 4.0,
};

// 天井の三か所の柔らかい粘液の垂れ(付け根)と、そこから垂れる糸が支える接続点
export const ROOTS = [
  { x: -6.3, z: -1.0, conns: [0, 1, 2, 3] }, // 左
  { x: -0.3, z: -2.35, conns: [4, 5] }, // 中央
  { x: 6.65, z: -1.9, conns: [6, 7, 8] }, // 右
];

// 床のタグ: 三か所に六枚ずつ、重ならないよう少しずらす
const CLUSTER_CENTERS = [
  [-4.6, 3.35],
  [0.5, 3.8],
  [4.9, 3.3],
];
const CLUSTER_OFFSETS = [
  [-1.0, -0.4, 0.22],
  [0.0, -0.5, -0.12],
  [1.0, -0.38, 0.3],
  [-0.52, 0.42, -0.28],
  [0.5, 0.45, 0.1],
  [1.5, 0.52, -0.2],
];
// 巨大なカタツムリの世界に合わせた大きな手荷物タグ(実寸の数倍)
export const TAG_SIZE = { w: 0.64, h: 0.33, t: 0.016 };
export const TAG_HOMES = [];
for (let c = 0; c < 3; c++) {
  for (let k = 0; k < 6; k++) {
    const [cx, cz] = CLUSTER_CENTERS[c];
    const [ox, oz, rot] = CLUSTER_OFFSETS[k];
    TAG_HOMES.push({ x: cx + ox - 0.15, z: cz + oz, rot: rot + (c - 1) * 0.15, cluster: c });
  }
}
export const TAG_COUNT = TAG_HOMES.length; // 18

export const GIRL_START = { x: -1.55, z: 4.85, rot: Math.PI }; // 手前、奥を向く
export const POD_FLOOR = { x: -6.55, z: 2.75 }; // 終幕で始点の乗り場が垂れてくる床の位置
export const END_LOOKUP_SPOT = { x: 6.1, z: 3.0 }; // 滑走後に少女が見上げる位置

export { ROOM };
