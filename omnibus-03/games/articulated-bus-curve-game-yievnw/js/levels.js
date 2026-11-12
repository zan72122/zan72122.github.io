// 3つのコース：L字 → せまい角 → S字ぎみ
export const LEVELS = [
  {
    id: 0,
    name: 'いりぐち の カーブ',
    width: 8.0,
    seed: 11,
    segments: [{ t: 's', len: 36 }, { t: 'a', r: 12, ang: 90, dir: 1 }, { t: 's', len: 34 }],
    startS: 14,
    coneCount: 5,
  },
  {
    id: 1,
    name: 'せまい かど',
    width: 7.4,
    seed: 23,
    segments: [{ t: 's', len: 34 }, { t: 'a', r: 8, ang: 90, dir: -1 }, { t: 's', len: 34 }],
    startS: 14,
    coneCount: 6,
  },
  {
    id: 2,
    name: 'くねくね みち',
    width: 7.6,
    seed: 37,
    segments: [
      { t: 's', len: 30 }, { t: 'a', r: 10, ang: 72, dir: 1 }, { t: 's', len: 7 },
      { t: 'a', r: 10, ang: 72, dir: -1 }, { t: 's', len: 32 },
    ],
    startS: 14,
    coneCount: 4,
  },
];
