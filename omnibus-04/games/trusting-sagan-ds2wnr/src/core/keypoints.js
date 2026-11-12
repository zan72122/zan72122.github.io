// カメラに収めるべき点と、貼付位置の名目位置
import { PIECE_COUNT, slotU } from './route.js';
import { TAG_HOMES, SNAIL, GIRL_START, POD_FLOOR } from './layout.js';
import { profileAt, slotLocal } from './shape.js';

export function framingPoints(route) {
  const pts = [];
  for (let i = 0; i < PIECE_COUNT; i++) {
    for (let k = 0; k <= 12; k++) {
      const f = route.frame(i, k / 12, null);
      pts.push([f.x + f.sx * 0.5, f.y + 0.1, f.z + f.sz * 0.5]);
      pts.push([f.x - f.sx * 0.5, f.y + 0.1, f.z - f.sz * 0.5]);
    }
  }
  for (const h of TAG_HOMES) {
    pts.push([h.x - 0.3, 0, h.z + 0.2], [h.x + 0.3, 0, h.z + 0.2], [h.x, 0, h.z - 0.2]);
  }
  pts.push([GIRL_START.x, 0, GIRL_START.z + 0.2], [GIRL_START.x, 1.2, GIRL_START.z]);
  pts.push([POD_FLOOR.x - 0.6, 0, POD_FLOOR.z + 0.6]);
  const L = SNAIL.loop;
  for (let a = 0; a < 16; a++) {
    const t = (a / 16) * Math.PI * 2;
    pts.push([L.cx + L.a * Math.cos(t), 7.95, L.cz + L.b * Math.sin(t)]);
    pts.push([L.cx + L.a * Math.cos(t), SNAIL.shellBottomY, L.cz + L.b * Math.sin(t)]);
  }
  return pts;
}

// 貼付位置の名目位置: soft=true で未支持の垂れ、false で完成した滑り台
export function slotNominal(route, slotIndex, soft, sideSign, uOverride) {
  const i = slotIndex >> 1;
  const u = uOverride !== undefined ? uOverride : slotU(slotIndex);
  const e = soft ? [0, 0] : [1, 1];
  const J = soft ? 0 : 1;
  const pr = profileAt(e, u, J, J, route.clearanceAt(i, u));
  const f = route.frame(i, u, null);
  const l = slotLocal(pr, sideSign);
  return [f.x + f.sx * l.x + f.ux * l.y, f.y + f.sy * l.x + f.uy * l.y, f.z + f.sz * l.x + f.uz * l.y];
}

// 貼付くぼみをカメラ側へ向ける符号
export function slotSideSign(route, slotIndex, camPos) {
  const i = slotIndex >> 1;
  const f = route.frame(i, slotU(slotIndex), null);
  const d = [camPos[0] - f.x, camPos[1] - f.y, camPos[2] - f.z];
  return f.sx * d[0] + f.sy * d[1] + f.sz * d[2] >= 0 ? 1 : -1;
}
