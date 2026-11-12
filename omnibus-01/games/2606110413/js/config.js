// 全体の調整値をここに集約する

export const CONFIG = {
  playTime: 60,          // 1ラウンドの秒数
  feverTime: 10,         // 残りこの秒数でフィーバー突入
  finaleDuration: 6.5,   // 大絶賛演出の秒数

  // 発射
  flightTime: 0.45,        // 放物線の飛行時間(秒)
  gravity: -20,            // 発射体にかかる重力
  shotCooldown: 0.12,      // 1本の指あたりの連射間隔(秒)
  projectilePoolSize: 16,
  projectileRadius: 0.32,

  // エイムアシスト
  assistRadiusRatio: 0.12,  // 画面対角に対するスナップ半径
  hitRadiusScale: 1.6,      // 的の見た目半径に対する判定倍率
  assistBonusScale: 1.25,   // アシスト対象への追加判定倍率

  // 点数
  scores: {
    donut: 50,
    cookie: 100,
    cupcake: 150,
    lollipop: 200,
    star: 500,
  },

  // 描画
  maxPixelRatio: 2,
  lowPixelRatio: 1.5,
  slowFrameMs: 25,       // 平均フレームタイムがこれを超えたら品質を1段下げる

  // Bloom(軽量自作)
  bloom: {
    threshold: 0.85,   // 輝度しきい値(リニア)
    knee: 0.35,
    strength: 0.75,
  },

  // カメラ演出(すべて4歳児が酔わない控えめ設定)
  camera: {
    fov: 55,            // 横画面の基本FOV
    fovPortrait: 70,
    pos: [0, 3.6, 11],
    look: [0, 2.5, -2],
    sweepFrom: { pos: [-9, 5.5, 15], look: [2, 4, -20] },
    sweepDuration: 3.4,
    feverFovDelta: -4,  // フィーバーで4度だけ寄る
    feverZoomDuration: 0.9,
    finale: { pos: [0, 3.8, 11.8], look: [0, 6.5, -4] },
    finaleDuration: 2.2,
    shakeAmp: 0.05,
    shakeDecay: 3.5,
    hitShake: 0.35,
    starShake: 0.7,
  },

  // パレット
  colors: {
    skyTop: 0x3f9bf5,
    skyMid: 0x9fd4ff,
    skyBottom: 0xffc9e8,
    // フィーバー時の夕焼けパレット
    sunset: {
      skyTop: 0x6a4fd0,
      skyMid: 0xff9e7a,
      skyBottom: 0xffd29a,
      fog: 0xffb38a,
      sun: 0xffa45e,
      sunIntensity: 2.2,
      sunPos: [14, 8, 10],
      hemiSky: 0xffd9c0,
      hemiGround: 0xb288d8,
      fill: 0xc97ad6,
    },
    fog: 0xffd9ec,
    ground: 0xffb7dd,
    pink: 0xff6fb3,
    deepPink: 0xf2509b,
    mint: 0x6fe0c8,
    lemon: 0xffd95e,
    sky: 0x7ecbff,
    lavender: 0xc59df2,
    cream: 0xfff4e0,
    white: 0xffffff,
    chocolate: 0x7a4a2b,
    darkChoco: 0x5a3520,
    cookie: 0xd9a05b,
    gold: 0xffc83c,
    cherry: 0xff4d6d,
  },
};
