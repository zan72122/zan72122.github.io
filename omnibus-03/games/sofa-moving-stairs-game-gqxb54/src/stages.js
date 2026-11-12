// ステージ定義。単位は m。 dir: 0=+z 1=+x 2=-z 3=-x
export const STAGES = [
  {
    name: 'まっすぐ', icon: '↑',
    sofa: { L: 1.9, D: 0.85, H: 0.8, color: 0x4f7fb8, kind: 'fabric' },
    start: { x: 0, z: -1.7, yaw: 0, pose: 0 },
    build(b) {
      // 1階ホール
      b.floor(-1.6, 1.6, -3.0, 0, 0, { tile: true, cam: { dir: 0, side: 1 } });
      b.wall(0, -3.08, 3.4, 'x', 0);
      b.wall(-1.68, -1.5, 3.2, 'z', 0);
      b.wall(1.68, -1.5, 3.2, 'z', 0);
      b.wall(-1.15, 0, 1.0, 'x', 0);   // 階段入口の両脇
      b.wall(1.15, 0, 1.0, 'x', 0);
      b.mailboxes(-0.9, 0, -2.95, 'x');
      b.extinguisher(1.4, 0, -2.75);
      b.exitLight(0, 2.35, -0.02, 'x');
      b.lamp(0, 2.6, -1.5);
      b.pipe(1.55, 0, -0.3, 2.6);
      // 階段(幅1.4)
      const s = b.stairs(0, 0, 0, 8, 1.4, 0, { cam: { dir: 0, side: 1 } });
      b.wallRail(-0.62, 0.2, 0.1, -0.62, s.y + 0.2, s.z);
      // 2階ホール
      b.floor(-0.7, 0.7, s.z, s.z + 2.5, s.y, { tile: true, cam: { dir: 0, side: 1 } });
      b.wall(-0.78, s.z + 1.25, 2.5, 'z', s.y);
      b.wall(0.78, s.z + 1.25, 2.5, 'z', s.y);
      b.wall(0, s.z + 2.58, 1.6, 'x', s.y);
      b.door(0, s.z + 2.5, 'x', s.y, { num: '201', open: false });
      b.window(-0.7, s.y + 1.6, s.z + 1.2, 'z', 0.9, 0.8);
      b.lamp(0, s.y + 2.6, s.z + 1.0);
      b.goal(-0.7, 0.7, s.z + 0.35, s.z + 2.45, s.y);
    },
  },
  {
    name: 'まがりかど', icon: '↱',
    sofa: { L: 2.0, D: 0.85, H: 0.8, color: 0xc9713a, kind: 'fabric' },
    start: { x: 0, z: -1.5, yaw: Math.PI / 2, pose: 0 },
    build(b) {
      b.floor(-1.5, 1.5, -2.8, 0, 0, { tile: true, cam: { dir: 0, side: 1 } });
      b.wall(0, -2.88, 3.2, 'x', 0);
      b.wall(-1.58, -1.4, 3.0, 'z', 0);
      b.wall(1.58, -1.4, 3.0, 'z', 0);
      b.wall(-1.05, 0, 0.9, 'x', 0);
      b.wall(1.05, 0, 0.9, 'x', 0);
      b.mailboxes(0.8, 0, -2.75, 'x');
      b.extinguisher(-1.3, 0, -2.6);
      b.exitLight(0, 2.35, -0.02, 'x');
      b.lamp(0, 2.6, -1.4);
      // 階段1 (幅1.2) → 踊り場(1.3×1.3) → 右へ90°
      const s1 = b.stairs(0, 0, 0, 8, 1.2, 0, { cam: { dir: 0, side: 1 } });
      b.wallRail(-0.52, 0.2, 0.1, -0.52, s1.y + 0.2, s1.z);
      const L0 = s1.z, L1 = s1.z + 1.3;
      b.floor(-0.6, 0.7, L0, L1, s1.y, { tile: true, cam: { dir: 1, side: -1 } });
      b.wall(-0.68, (L0 + L1) / 2, 1.3, 'z', s1.y);
      b.wall(0.05, L1 + 0.08, 1.5, 'x', s1.y);
      b.window(-0.6, s1.y + 1.7, (L0 + L1) / 2, 'z', 0.9, 0.9);
      b.lamp(0.05, s1.y + 2.6, (L0 + L1) / 2);
      // 階段2 (幅1.3, +x)
      const s2 = b.stairs(0.7, (L0 + L1) / 2, 1, 8, 1.3, s1.y, { cam: { dir: 1, side: -1 } });
      b.wallRail(0.8, s1.y + 0.2, L1 - 0.02, s2.x, s2.y + 0.2, L1 - 0.02);
      // 2階廊下
      b.floor(s2.x, s2.x + 2.6, L0, L1, s2.y, { tile: true, cam: { dir: 1, side: -1 } });
      b.wall(s2.x + 1.3, L0 - 0.08, 2.6, 'x', s2.y);
      b.wall(s2.x + 1.3, L1 + 0.08, 2.6, 'x', s2.y);
      b.wall(s2.x + 2.68, (L0 + L1) / 2, 1.5, 'z', s2.y);
      b.door(s2.x + 1.5, L1, 'x', s2.y, { num: '302', open: false });
      b.lamp(s2.x + 1.3, s2.y + 2.6, (L0 + L1) / 2);
      b.pipe(s2.x + 2.55, s2.y, L0 + 0.15, 2.6);
      b.goal(s2.x + 0.3, s2.x + 2.6, L0, L1, s2.y);
    },
  },
  {
    name: 'てすり', icon: '↰',
    sofa: { L: 1.9, D: 0.9, H: 0.8, color: 0x5a3a26, kind: 'leather' },
    start: { x: -0.7, z: -1.5, yaw: Math.PI / 2, pose: 0 },
    build(b) {
      // 1階ホール(折り返し階段の下)
      b.floor(-2.0, 1.4, -2.8, 0, 0, { tile: true, cam: { dir: 0, side: -1 } });
      b.wall(-0.3, -2.88, 3.6, 'x', 0);
      b.wall(-2.08, -1.4, 3.0, 'z', 0);
      b.wall(1.48, -1.4, 3.0, 'z', 0);
      b.wall(-1.7, 0, 0.7, 'x', 0);
      b.mailboxes(0.6, 0, -2.75, 'x');
      b.extinguisher(-1.8, 0, -2.6);
      b.lamp(-0.3, 2.6, -1.4);
      // 階段1: x=-0.7 中心, 幅1.2, 上り +z。右側(x=-0.1)は手すりつきの仕切り
      const s1 = b.stairs(-0.7, 0, 0, 8, 1.2, 0, { walls: [-1], cam: { dir: 0, side: -1 } });
      b.wallRail(-1.22, 0.2, 0.1, -1.22, s1.y + 0.2, s1.z);
      // 踊り場 (幅2.6 × 奥行1.6)
      const L0 = s1.z, L1 = s1.z + 1.6;
      b.floor(-1.3, 1.3, L0, L1, s1.y, { tile: true, cam: { dir: 3, side: -1 } });
      b.wall(-1.38, (L0 + L1) / 2, 1.6, 'z', s1.y);
      b.wall(1.38, (L0 + L1) / 2, 1.6, 'z', s1.y);
      b.wall(0, L1 + 0.08, 2.9, 'x', s1.y);
      b.window(0, s1.y + 1.7, L1, 'x', 1.4, 0.9);
      b.lamp(0, s1.y + 2.6, (L0 + L1) / 2);
      // 階段2: x=0.7 中心, 幅1.2, 上り -z (折り返し)。壁は +x 側のみ
      const s2 = b.stairs(0.7, L0, 2, 8, 1.2, s1.y, { walls: [-1], cam: { dir: 2, side: 1 } });
      b.wallRail(1.22, s1.y + 0.2, L0 - 0.1, 1.22, s2.y + 0.2, s2.z);
      // 仕切り: 階段2の鼻先ラインまでの低い壁 + 手すり (下の空間は使えない)
      const slopeY = (z) => s1.y + 0.17 + (L0 - z) * (0.17 / 0.27);
      for (let i = 0; i < 8; i++) {
        const z = L0 - (i + 0.5) * 0.27;
        const top = Math.min(s2.y, slopeY(z));
        b.box(0, top / 2, z, 0.2, top, 0.27, b.matWall(), { tag: 'wall' });
      }
      b.rail(0, s2.y, s2.z, 0, s1.y, L0 + 0.05, { h: 0.95 });
      b.rail(0, s1.y, L0 + 0.05, 0, s1.y, L0 + 0.5, { h: 0.95 });
      // 3階廊下(階段2の上)
      const U0 = s2.z - 2.6, U1 = s2.z;
      b.floor(0.1, 1.3, U0, U1, s2.y, { tile: true, cam: { dir: 2, side: 1 } });
      b.wall(1.38, (U0 + U1) / 2, 2.6, 'z', s2.y);
      b.wall(0.02, (U0 + U1) / 2, 2.6, 'z', s2.y);
      b.wall(0.7, U0 - 0.08, 1.4, 'x', s2.y);
      b.door(0.7, U0, 'x', s2.y, { num: '301', open: false, face: [0, 1] });
      b.exitLight(0.7, s2.y + 2.35, U1 + 0.02, 'x');
      b.lamp(0.7, s2.y + 2.6, (U0 + U1) / 2);
      b.goal(0.1, 1.3, U0 + 0.1, U1 - 0.3, s2.y);
    },
  },
  {
    name: 'げんかんまえ', icon: '🚪',
    sofa: { L: 2.0, D: 1.0, H: 0.75, color: 0x6a9a5b, kind: 'fabric' },
    start: { x: 0, z: -1.5, yaw: Math.PI / 2, pose: 0 },
    build(b) {
      b.floor(-1.5, 1.5, -2.8, 0, 0, { tile: true, cam: { dir: 0, side: 1 } });
      b.wall(0, -2.88, 3.2, 'x', 0);
      b.wall(-1.58, -1.4, 3.0, 'z', 0);
      b.wall(1.58, -1.4, 3.0, 'z', 0);
      b.wall(-1.05, 0, 0.9, 'x', 0);
      b.wall(1.05, 0, 0.9, 'x', 0);
      b.mailboxes(-0.8, 0, -2.75, 'x');
      b.exitLight(0, 2.35, -0.02, 'x');
      b.lamp(0, 2.6, -1.4);
      b.pipe(-1.45, 0, -0.3, 2.6);
      // 階段 (幅1.2)
      const s = b.stairs(0, 0, 0, 8, 1.2, 0, { cam: { dir: 0, side: 1 } });
      b.wallRail(-0.52, 0.2, 0.1, -0.52, s.y + 0.2, s.z);
      // 2階廊下: 右へ (幅1.4)
      const C0 = s.z, C1 = s.z + 1.4;
      b.floor(-0.6, 3.4, C0, C1, s.y, { tile: true, cam: { dir: 0, side: -1 } });
      b.wall(-0.68, (C0 + C1) / 2, 1.4, 'z', s.y);
      b.wall(2.0, C0 - 0.08, 2.8, 'x', s.y);       // 階段右壁の続き
      b.wall(3.48, (C0 + C1) / 2, 1.4, 'z', s.y);
      // 奥の壁: 玄関ドア(開いている) と 隣のドア
      b.wall(0.2, C1 + 0.08, 1.6, 'x', s.y);
      b.door(1.3, C1 + 0.08, 'x', s.y, { num: '202', open: false });
      b.wall(1.98, C1 + 0.08, 0.5, 'x', s.y);
      b.door(2.7, C1 + 0.08, 'x', s.y, { num: '203', open: true, w: 0.95, h: 1.95, openAngle: -1.9 });
      b.wall(3.3, C1 + 0.08, 0.35, 'x', s.y);
      b.window(3.4, s.y + 1.7, (C0 + C1) / 2, 'z', 1.0, 0.9);
      b.lamp(1.4, s.y + 2.6, (C0 + C1) / 2);
      b.extinguisher(-0.5, s.y, C1 - 0.15);
      // 玄関(部屋側)
      const E0 = C1 + 0.16, E1 = C1 + 2.7;
      b.floor(2.0, 3.4, E0, E1, s.y, { tile: false, cam: { dir: 0, side: -1 } });
      b.wall(1.92, (E0 + E1) / 2, 2.6, 'z', s.y);
      b.wall(3.48, (E0 + E1) / 2, 2.6, 'z', s.y);
      b.wall(2.7, E1 + 0.08, 1.6, 'x', s.y);
      b.lamp(2.7, s.y + 2.6, (E0 + E1) / 2);
      b.goal(2.03, 3.37, E0 + 0.15, E1, s.y);
    },
  },
];
