// 木の種類・仕上げ・作るもの（設計図）のデータ。
// 数値入力や寸法計算はゲーム内には出さない。すべて内部データとして扱う。

export const WOODS = [
  { id: 'hinoki', name: 'ひのき', base: '#eed3a4', grain: '#bb9160', grainWeight: 0.55, knots: 1, seed: 1, grainScale: 3.0, chip: '#f0dcb4' },
  { id: 'pine', name: 'パイン', base: '#e8c48c', grain: '#a9743d', grainWeight: 1.0, knots: 3, seed: 2, grainScale: 3.4, chip: '#e8c68e' },
  { id: 'sakura', name: 'さくら', base: '#e2ab8b', grain: '#9c5c40', grainWeight: 0.8, knots: 1, seed: 3, grainScale: 3.2, chip: '#e5b193' },
  { id: 'walnut', name: 'ウォルナット', base: '#9d6f4a', grain: '#4e3120', grainWeight: 1.1, knots: 2, seed: 4, grainScale: 3.6, chip: '#a4784f' },
];

export const FINISHES = [
  { id: 'varnish', name: 'ニス', color: '#e8b66a', gloss: 1.0, rainbow: 0 },
  { id: 'pink', name: 'ももいろ', color: '#ff9ec4', gloss: 0.25, rainbow: 0 },
  { id: 'sky', name: 'そらいろ', color: '#7fc6f5', gloss: 0.25, rainbow: 0 },
  { id: 'leaf', name: 'わかば', color: '#93d69a', gloss: 0.25, rainbow: 0 },
  { id: 'lemon', name: 'れもん', color: '#ffdc6b', gloss: 0.25, rainbow: 0 },
  { id: 'rainbow', name: 'にじいろ', color: '#ffffff', gloss: 0.35, rainbow: 1 },
];

export const STICKERS = [
  { id: 'star', color: '#ffd84d' },
  { id: 'flower', color: '#ff8ec6' },
  { id: 'heart', color: '#ff7a7a' },
  { id: 'rainbow', color: '#ffffff' },
  { id: 'dot', color: '#7fc6f5' },
];

export const APRONS = [
  { id: 'pink', name: 'ももいろ', bg: '#f6799f', fg: '#ffd9e6', pattern: 'flower' },
  { id: 'sky', name: 'そらいろ', bg: '#5fa9e6', fg: '#dff0ff', pattern: 'star' },
  { id: 'mint', name: 'みどり', bg: '#63bf94', fg: '#e6fff2', pattern: 'stripe' },
  { id: 'sun', name: 'きいろ', bg: '#f2b23c', fg: '#fff3cd', pattern: 'star' },
];

// 板の共通の厚み方向: 長さ = X, 厚み = Y, 幅 = Z
const P = (len, thick, wide) => ({ len, thick, wide });

export const PROJECTS = [
  {
    id: 'stool',
    name: 'こしかけ',
    subtitle: 'すわれる ちいさな いす',
    wood: 'pine',
    finale: 'sit',
    // 切る工程（測る→線→クランプ→のこぎり→やすり）
    cuts: [
      { stock: P(0.62, 0.03, 0.22), mark: 0.30, part: 'seat' },
      { stock: P(0.46, 0.024, 0.20), mark: 0.24, part: 'legL' },
    ],
    parts: [
      { id: 'seat', size: [0.30, 0.03, 0.22], pos: [0, 0.255, 0], rot: [0, 0, 0], from: 'cut0' },
      { id: 'legL', size: [0.024, 0.24, 0.20], pos: [-0.125, 0.12, 0], rot: [0, 0, 0], from: 'cut1' },
      { id: 'legR', size: [0.024, 0.24, 0.20], pos: [0.125, 0.12, 0], rot: [0, 0, 0], from: 'pile' },
      { id: 'brace', size: [0.235, 0.05, 0.02], pos: [0, 0.075, 0], rot: [0, 0, 0], from: 'pile' },
    ],
    nails: [
      { pos: [-0.125, 0.27, 0.07], axis: [0, -1, 0], joins: ['seat', 'legL'] },
      { pos: [0.125, 0.27, 0.07], axis: [0, -1, 0], joins: ['seat', 'legR'] },
      { pos: [-0.125, 0.27, -0.07], axis: [0, -1, 0], joins: ['seat', 'legL'] },
      { pos: [0.125, 0.27, -0.07], axis: [0, -1, 0], joins: ['seat', 'legR'] },
      { pos: [-0.137, 0.075, 0], axis: [1, 0, 0], joins: ['legL', 'brace'] },
      { pos: [0.137, 0.075, 0], axis: [-1, 0, 0], joins: ['legR', 'brace'] },
    ],
    view: { center: [0, 0.14, 0], radius: 0.3 },
  },
  {
    id: 'shelf',
    name: 'ほんだな',
    subtitle: 'ごほんを ならべる たな',
    wood: 'hinoki',
    finale: 'books',
    cuts: [
      { stock: P(0.60, 0.022, 0.16), mark: 0.34, part: 'sideL' },
      { stock: P(0.52, 0.02, 0.16), mark: 0.30, part: 'shelfB' },
    ],
    parts: [
      { id: 'sideL', size: [0.022, 0.34, 0.16], pos: [-0.16, 0.17, 0], rot: [0, 0, 0], from: 'cut0' },
      { id: 'sideR', size: [0.022, 0.34, 0.16], pos: [0.16, 0.17, 0], rot: [0, 0, 0], from: 'pile' },
      { id: 'shelfB', size: [0.30, 0.02, 0.16], pos: [0, 0.05, 0], rot: [0, 0, 0], from: 'cut1' },
      { id: 'shelfM', size: [0.30, 0.02, 0.16], pos: [0, 0.175, 0], rot: [0, 0, 0], from: 'pile' },
      { id: 'shelfT', size: [0.30, 0.02, 0.16], pos: [0, 0.30, 0], rot: [0, 0, 0], from: 'pile' },
    ],
    nails: [
      { pos: [-0.16, 0.05, 0.06], axis: [1, 0, 0], joins: ['sideL', 'shelfB'] },
      { pos: [0.16, 0.05, 0.06], axis: [-1, 0, 0], joins: ['sideR', 'shelfB'] },
      { pos: [-0.16, 0.175, 0.06], axis: [1, 0, 0], joins: ['sideL', 'shelfM'] },
      { pos: [0.16, 0.175, 0.06], axis: [-1, 0, 0], joins: ['sideR', 'shelfM'] },
      { pos: [-0.16, 0.30, 0.06], axis: [1, 0, 0], joins: ['sideL', 'shelfT'] },
      { pos: [0.16, 0.30, 0.06], axis: [-1, 0, 0], joins: ['sideR', 'shelfT'] },
    ],
    view: { center: [0, 0.17, 0], radius: 0.31 },
  },
  {
    id: 'birdhouse',
    name: 'ことりの おうち',
    subtitle: 'ちいさな とりの すばこ',
    wood: 'sakura',
    finale: 'bird',
    cuts: [
      { stock: P(0.404, 0.022, 0.164), mark: 0.184, part: 'base' },
      { stock: P(0.50, 0.02, 0.22), mark: 0.28, part: 'roof' },
    ],
    parts: [
      // 底板を4枚の壁の内側へ納め、外側から釘を打てる箱構造にする。
      { id: 'base', size: [0.184, 0.022, 0.164], pos: [0, 0.011, 0], rot: [0, 0, 0], from: 'cut0' },
      { id: 'back', size: [0.22, 0.251, 0.018], pos: [0, 0.1365, -0.091], rot: [0, 0, 0], from: 'pile' },
      { id: 'wallL', size: [0.018, 0.211, 0.164], pos: [-0.101, 0.1165, 0], rot: [0, 0, 0], from: 'pile' },
      { id: 'wallR', size: [0.018, 0.211, 0.164], pos: [0.101, 0.1165, 0], rot: [0, 0, 0], from: 'pile' },
      { id: 'front', size: [0.22, 0.251, 0.018], pos: [0, 0.1365, 0.091], rot: [0, 0, 0], from: 'pile', hole: { r: 0.035, y: 0.055 } },
      { id: 'roof', size: [0.28, 0.02, 0.22], pos: [0, 0.278, 0.006], rot: [0.20, 0, 0], from: 'cut1' },
    ],
    nails: [
      // 4枚の壁の外側から、内側へ納めた底板の木口へ留める。
      { pos: [-0.110, 0.016, 0], axis: [1, 0, 0], joins: ['base', 'wallL'] },
      { pos: [0.110, 0.016, 0], axis: [-1, 0, 0], joins: ['base', 'wallR'] },
      { pos: [0, 0.016, 0.100], axis: [0, 0, -1], joins: ['base', 'front'] },
      { pos: [0, 0.016, -0.100], axis: [0, 0, 1], joins: ['base', 'back'] },
      // 前後の板から左右壁の木口へ留め、箱形を閉じる。
      { pos: [-0.101, 0.14, 0.10], axis: [0, 0, -1], joins: ['front', 'wallL'] },
      { pos: [0.101, 0.14, 0.10], axis: [0, 0, -1], joins: ['front', 'wallR'] },
      { pos: [-0.101, 0.14, -0.10], axis: [0, 0, 1], joins: ['back', 'wallL'] },
      { pos: [0.101, 0.14, -0.10], axis: [0, 0, 1], joins: ['back', 'wallR'] },
      // 傾いた屋根の法線に沿って、前板・背板の上端へ留める。
      { pos: [-0.065, 0.270, 0.098], axis: [0, -0.9801, -0.1987], joins: ['roof', 'front'] },
      { pos: [0.065, 0.270, 0.098], axis: [0, -0.9801, -0.1987], joins: ['roof', 'front'] },
      { pos: [-0.065, 0.307, -0.086], axis: [0, -0.9801, -0.1987], joins: ['roof', 'back'] },
      { pos: [0.065, 0.307, -0.086], axis: [0, -0.9801, -0.1987], joins: ['roof', 'back'] },
    ],
    view: { center: [0, 0.15, 0], radius: 0.3 },
  },
];

export function getProject(id) {
  return PROJECTS.find((p) => p.id === id) || PROJECTS[0];
}
export function getWood(id) {
  return WOODS.find((w) => w.id === id) || WOODS[0];
}
