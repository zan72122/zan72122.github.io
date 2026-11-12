// 島変貌イベント共通の親クラス。
// js/minigames/base.js と同じ作法で、レジストリ(index.js)とは別ファイルにしてある。
// index.js が各イベントを import し、各イベントが親クラスを import するため、
// 親クラスを index.js に置くと循環importの TDZ に落ちる(class extends は評価時に解決される)。

/**
 * イベント1回ぶんの寿命を持つオブジェクト。
 * world と board の状態を書き換えて帰るのが役目で、
 * ラウンドをまたぐ長期状態をイベント自身が持ってはならない。
 */
export class WorldEventBase {
  /** @param {object} ctx board._worldEventContext() が作る唯一の窓口 */
  constructor(ctx) {
    this.ctx = ctx;
    this._disposables = [];
    this.id = '';           // board が create 直後に entry.id を入れる(snapshot 用)
    this.stage = 'idle';    // idle | trigger | change | play | settle(各イベントが進める)
  }

  /**
   * きっかけ → 変化 → 遊び → 収束 を await で直列に流す。
   * この Promise が resolve した時点で、
   *   - world.islandGroup は単位変換に戻っている
   *   - ui.showTapLayer(false) / showTimer(false) / showScore(false) ずみ
   *   - 専用メッシュは scene から外れているか、dispose() で外せる状態
   * でなければならない。
   * @returns {Promise<void>}
   */
  async run() { throw new Error('not implemented'); }

  /** 毎フレーム。board.update から dt(timeScale 適用ずみ)で呼ばれる。省略可 */
  update(dt) {}

  /** メッシュ・ジオメトリ・マテリアルを解放する。run() の成否にかかわらず必ず呼ばれる */
  dispose() {
    for (const d of this._disposables) {
      d.parent?.remove(d);
      d.traverse?.((o) => { o.geometry?.dispose?.(); o.material?.dispose?.(); });
    }
    this._disposables.length = 0;
  }

  /** ctx.setTapHandler が呼ぶ。つかうイベントだけ実装する */
  onTap(ndc, px) {}

  /** ctx.setDragHandler が呼ぶ。つかうイベントだけ実装する */
  onDrag(ndc, px) {}

  /** dispose 対象として登録する小道具 */
  _own(obj) { this._disposables.push(obj); return obj; }
}
