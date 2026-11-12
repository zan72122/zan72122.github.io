// 画面まわり。文字は最小限にして、絵と大きな当たり判定で進める。
import { ICONS, iconEl } from './icons.js';
import { PROJECTS, FINISHES, STICKERS, WOODS, APRONS } from '../game/blueprints.js';
import { GAME_PACING } from '../game/ux-config.js';
import { journeySegmentStates } from './progress.js';

const STEP_ORDER = [
  { id: 'wood', icon: 'wood', label: '木を置く' },
  { id: 'tape', icon: 'tape', label: '長さを測る' },
  { id: 'pencil', icon: 'pencil', label: '線を引く' },
  { id: 'clamp', icon: 'clamp', label: '木を固定する' },
  { id: 'saw', icon: 'saw', label: 'のこぎりで切る' },
  { id: 'sand', icon: 'sand', label: '紙やすりで磨く' },
  { id: 'assemble', icon: 'assemble', label: '組み立てる' },
  { id: 'hammer', icon: 'hammer', label: '釘を打つ' },
  { id: 'paint', icon: 'paint', label: '色を塗る' },
  { id: 'sticker', icon: 'sticker', label: 'シールを貼る' },
  { id: 'done', icon: 'done', label: 'できあがり' },
];

const STICKER_LABELS = {
  star: 'ほし', flower: 'はな', heart: 'ハート', rainbow: 'にじ', dot: 'まる',
};

export class Hud {
  constructor(game) {
    this.game = game;
    this.root = document.getElementById('ui');
    this.stickerList = STICKERS;
    this._build();
  }

  _build() {
    const r = this.root;
    r.innerHTML = `
      <div id="loading"><div class="spin"></div><p>じゅんび ちゅう…</p></div>

      <div id="title" class="screen hidden">
        <h1><span>はかって！トントン！</span><b>ちいさな大工さん</b></h1>
        <div class="rowlabel"><i>${ICONS.wood}</i><span>きの しゅるい</span></div>
        <div id="woodrow" class="chips" role="group" aria-label="木の種類"></div>
        <div id="projrow" class="cards"></div>
        <div class="rowlabel apron-label"><i>${ICONS.sticker}</i><span>エプロン</span></div>
        <div id="apronrow" class="chips" role="group" aria-label="ロボットのエプロン"></div>
      </div>

      <div id="steps" class="hidden" role="progressbar" aria-label="作業の進みぐあい" aria-valuemin="1">
        <div class="current-step" aria-hidden="true"></div>
        <div class="journey" aria-hidden="true"></div>
      </div>

      <div id="corner" class="hidden">
        <button id="homeBtn" class="round" type="button" aria-label="最初の画面へ戻る">${ICONS.home}</button>
        <button id="muteBtn" class="round" type="button" aria-label="音を消す" aria-pressed="false">${ICONS.sound}</button>
      </div>

      <div id="goal" class="hidden" role="img" aria-label="完成見本"><canvas width="180" height="180"></canvas></div>

      <div id="bubble" class="hidden" role="status" aria-live="polite"></div>

      <div id="palette" class="tray hidden" role="toolbar" aria-label="塗る色"></div>
      <div id="stickertray" class="tray hidden" role="toolbar" aria-label="シール"></div>

      <div id="endchoices" class="screen hidden">
        <div class="cards big"></div>
      </div>

      <div id="freebar" class="tray hidden" role="toolbar" aria-label="自由制作の道具"></div>
    `;
    this.loading = r.querySelector('#loading');
    this.title = r.querySelector('#title');
    this.steps = r.querySelector('#steps');
    this.corner = r.querySelector('#corner');
    this.goal = r.querySelector('#goal');
    this.bubble = r.querySelector('#bubble');
    this.palette = r.querySelector('#palette');
    this.stickertray = r.querySelector('#stickertray');
    this.endchoices = r.querySelector('#endchoices');
    this.freebar = r.querySelector('#freebar');
    this.stepCurrent = this.steps.querySelector('.current-step');
    this.journey = this.steps.querySelector('.journey');

    // いま使う道具だけを大きく見せる。全体の進み具合は少数の点で示す。
    STEP_ORDER.forEach((s) => {
      const d = document.createElement('div');
      d.className = 'stepicon';
      d.dataset.id = s.id;
      d.innerHTML = ICONS[s.icon];
      this.stepCurrent.appendChild(d);
    });
    for (let i = 0; i < GAME_PACING.journeySegments; i++) {
      const dot = document.createElement('i');
      dot.className = 'journey-dot';
      this.journey.appendChild(dot);
    }

    r.querySelector('#homeBtn').addEventListener('click', () => {
      this.game.audio.uiTap();
      this.game.goHome();
    });
    const mute = r.querySelector('#muteBtn');
    mute.addEventListener('click', () => {
      const m = !this.game.audio.muted;
      this.game.audio.setMuted(m);
      mute.innerHTML = m ? ICONS.mute : ICONS.sound;
      mute.setAttribute('aria-label', m ? '音を出す' : '音を消す');
      mute.setAttribute('aria-pressed', String(m));
      if (!m) this.game.audio.uiTap();
    });
  }

  /* ---------------- タイトル ---------------- */
  buildTitle(thumbs, onStart) {
    const woodRow = this.root.querySelector('#woodrow');
    woodRow.innerHTML = '';
    // 何も選ばれていないように見せない。最初から明るいパインを選んでおく。
    this.selectedWood = WOODS.find((w) => w.id === 'pine') || WOODS[0];
    WOODS.forEach((w) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip wood' + (w === this.selectedWood ? ' on' : '');
      b.style.background = `linear-gradient(135deg, ${w.base}, ${w.grain})`;
      b.innerHTML = `<span>${w.name}</span>`;
      b.setAttribute('aria-label', `${w.name}の木を選ぶ`);
      b.setAttribute('aria-pressed', String(w === this.selectedWood));
      b.addEventListener('click', () => {
        this.selectedWood = w;
        [...woodRow.children].forEach((c) => {
          c.classList.remove('on');
          c.setAttribute('aria-pressed', 'false');
        });
        b.classList.add('on');
        b.setAttribute('aria-pressed', 'true');
        this.game.audio.uiTap();
      });
      woodRow.appendChild(b);
    });

    const apronRow = this.root.querySelector('#apronrow');
    apronRow.innerHTML = '';
    APRONS.forEach((a) => {
      const b = document.createElement('button');
      const selected = a.id === this.game.apron.id;
      b.type = 'button';
      b.className = 'chip apron' + (selected ? ' on' : '');
      b.style.background = a.bg;
      b.innerHTML = `<span style="color:${a.fg}">${a.name}</span>`;
      b.setAttribute('aria-label', `${a.name}のエプロンを選ぶ`);
      b.setAttribute('aria-pressed', String(selected));
      b.addEventListener('click', () => {
        [...apronRow.children].forEach((c) => {
          c.classList.remove('on');
          c.setAttribute('aria-pressed', 'false');
        });
        b.classList.add('on');
        b.setAttribute('aria-pressed', 'true');
        this.game.setApron(a);
        this.game.audio.uiTap();
      });
      apronRow.appendChild(b);
    });

    const row = this.root.querySelector('#projrow');
    row.innerHTML = '';
    PROJECTS.forEach((p) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'card';
      card.setAttribute('aria-label', `${p.name}を作る`);
      const holder = document.createElement('div');
      holder.className = 'thumb';
      if (thumbs[p.id]) holder.appendChild(thumbs[p.id]);
      card.appendChild(holder);
      const nm = document.createElement('b');
      nm.textContent = p.name;
      card.appendChild(nm);
      card.addEventListener('click', () => {
        this.game.audio.uiTap();
        onStart(p, this.selectedWood);
      });
      row.appendChild(card);
    });
    // じゆうに つくる
    const free = document.createElement('button');
    free.type = 'button';
    free.className = 'card free';
    free.setAttribute('aria-label', '自由に作る');
    free.innerHTML = `<div class="thumb">${ICONS.free}</div><b>じゆうに つくる</b>`;
    free.addEventListener('click', () => {
      this.game.audio.uiTap();
      onStart('free', this.selectedWood);
    });
    row.appendChild(free);
  }

  showLoading(v) { this.loading.classList.toggle('hidden', !v); }
  showTitle(v) {
    this.title.classList.toggle('hidden', !v);
    this.steps.classList.toggle('hidden', v);
    this.corner.classList.toggle('hidden', v);
    this.goal.classList.toggle('hidden', v);
    if (v) this.dismissCoach();
  }

  /* ---------------- 進行 ---------------- */
  setStep(id) {
    const step = STEP_ORDER.find((s) => s.id === id);
    [...this.stepCurrent.children].forEach((c) => c.classList.toggle('on', c.dataset.id === id));
    this.coachIcon = step?.icon || null;
    if (step) this.steps.setAttribute('aria-valuetext', step.label);
  }
  setStepsVisible(v) { this.steps.classList.toggle('hidden', !v); }

  setJourney(index, total) {
    const states = journeySegmentStates(index, total, GAME_PACING.journeySegments);
    [...this.journey.children].forEach((dot, i) => {
      dot.className = `journey-dot ${states[i]}`;
    });
    this.steps.setAttribute('aria-valuemax', String(Math.max(1, total)));
    this.steps.setAttribute('aria-valuenow', String(Math.min(total, Math.max(1, index + 1))));
  }

  setCoachIcon(icon) { this.coachIcon = icon; }

  /** 完成見本（絵） */
  setGoalImage(canvas, label = '') {
    const c = this.goal.querySelector('canvas');
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
    if (canvas) ctx.drawImage(canvas, 0, 0, c.width, c.height);
    this.goal.classList.toggle('hidden', !canvas);
    this.goal.setAttribute('aria-label', label ? `${label}の完成見本` : '完成見本');
  }

  say(text) {
    if (!text) { this.dismissCoach(); return; }
    this.bubble.replaceChildren();
    if (this.coachIcon && ICONS[this.coachIcon]) {
      const icon = iconEl(this.coachIcon, 'coach-icon');
      icon.setAttribute('aria-hidden', 'true');
      this.bubble.appendChild(icon);
    }
    const words = document.createElement('span');
    words.textContent = text;
    this.bubble.appendChild(words);
    const hasTray = [this.palette, this.stickertray, this.freebar]
      .some((tray) => !tray.classList.contains('hidden'));
    this.bubble.classList.toggle('with-tray', hasTray);
    this.bubble.classList.remove('hidden');
    clearTimeout(this._bubbleT);
    this._bubbleT = setTimeout(() => this.dismissCoach(), GAME_PACING.coachDisplayMs);
  }

  dismissCoach() {
    clearTimeout(this._bubbleT);
    this.bubble.classList.add('hidden');
  }

  /* ---------------- 塗料パレット ---------------- */
  showPalette(v, onPick, selected = this.game.finish) {
    this.palette.classList.toggle('hidden', !v);
    // じゆうモードでは道具バーの上へずらす
    this.palette.classList.toggle('raised', !this.freebar.classList.contains('hidden'));
    if (!v) return;
    this.palette.innerHTML = '';
    FINISHES.forEach((f) => {
      const b = document.createElement('button');
      const active = f.id === (selected?.id || FINISHES[1].id);
      b.type = 'button';
      b.className = 'swatch' + (active ? ' on' : '');
      b.style.background = f.rainbow
        ? 'conic-gradient(#ff7b7b,#ffb457,#ffe66d,#7bd88f,#6fc7ff,#b58cff,#ff7b7b)'
        : f.color;
      b.title = f.name;
      b.setAttribute('aria-label', `${f.name}で塗る`);
      b.setAttribute('aria-pressed', String(active));
      b.addEventListener('click', () => {
        [...this.palette.children].forEach((c) => {
          c.classList.remove('on');
          c.setAttribute('aria-pressed', 'false');
        });
        b.classList.add('on');
        b.setAttribute('aria-pressed', 'true');
        this.game.audio.pop();
        onPick && onPick(f);
      });
      this.palette.appendChild(b);
    });
    onPick && onPick(selected || FINISHES[1]);
  }

  /* ---------------- シール ---------------- */
  showStickers(v, onPick, onDone) {
    this.stickertray.classList.toggle('hidden', !v);
    if (!v) return;
    this.stickertray.innerHTML = '';
    STICKERS.forEach((s, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'swatch sticker' + (i === 0 ? ' on' : '');
      b.innerHTML = svgSticker(s.id, s.color);
      b.setAttribute('aria-label', `${STICKER_LABELS[s.id] || 'シール'}を選ぶ`);
      b.setAttribute('aria-pressed', String(i === 0));
      b.addEventListener('click', () => {
        [...this.stickertray.children].forEach((c) => {
          c.classList.remove('on');
          if (c.classList.contains('sticker')) c.setAttribute('aria-pressed', 'false');
        });
        b.classList.add('on');
        b.setAttribute('aria-pressed', 'true');
        this.game.audio.pop();
        onPick && onPick(s);
      });
      this.stickertray.appendChild(b);
    });
    const done = document.createElement('button');
    done.type = 'button';
    done.className = 'swatch okbtn';
    done.innerHTML = ICONS.done;
    done.setAttribute('aria-label', '飾りつけを終わる');
    done.addEventListener('click', () => { this.game.audio.uiTap(); onDone && onDone(); });
    this.stickertray.appendChild(done);
  }

  /* ---------------- おしまいの 3 つの選択 ---------------- */
  showEndChoices(onPick) {
    const box = this.endchoices.querySelector('.cards');
    box.innerHTML = '';
    const items = [
      { id: 'again', icon: 'again', label: 'もういちど' },
      { id: 'other', icon: 'other', label: 'べつのもの' },
      { id: 'free', icon: 'free', label: 'じゆうに つくる' },
    ];
    items.forEach((it) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'card';
      b.setAttribute('aria-label', it.label);
      b.innerHTML = `<div class="thumb">${ICONS[it.icon]}</div><b>${it.label}</b>`;
      b.addEventListener('click', () => {
        this.game.audio.uiTap();
        this.hideEndChoices();
        onPick(it.id);
      });
      box.appendChild(b);
    });
    this.endchoices.classList.remove('hidden');
  }
  hideEndChoices() { this.endchoices.classList.add('hidden'); }

  /* ---------------- じゆうモードの道具バー ---------------- */
  showFreeBar(v, items) {
    this.freebar.classList.toggle('hidden', !v);
    if (!v) return;
    this.freebar.innerHTML = '';
    items.forEach((it) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'freebtn' + (it.on ? ' on' : '');
      b.innerHTML = ICONS[it.icon];
      b.dataset.id = it.id;
      b.setAttribute('aria-label', it.label);
      if (!it.action) b.setAttribute('aria-pressed', String(Boolean(it.on)));
      b.addEventListener('click', () => {
        this.game.audio.uiTap();
        it.onPick();
      });
      this.freebar.appendChild(b);
    });
  }
  setFreeMode(id) {
    [...this.freebar.children].forEach((c) => {
      const on = c.dataset.id === id;
      c.classList.toggle('on', on);
      if (c.hasAttribute('aria-pressed')) c.setAttribute('aria-pressed', String(on));
    });
  }
}

function svgSticker(kind, color) {
  if (kind === 'star') return `<svg viewBox="0 0 64 64"><path d="M32 8 l7 15 l16 2 l-12 11 l3 16 l-14 -8 l-14 8 l3 -16 l-12 -11 l16 -2 z" fill="${color}"/></svg>`;
  if (kind === 'flower') return `<svg viewBox="0 0 64 64">${[0, 1, 2, 3, 4, 5].map((i) => {
    const a = (i / 6) * Math.PI * 2;
    return `<ellipse cx="${32 + Math.cos(a) * 13}" cy="${32 + Math.sin(a) * 13}" rx="11" ry="8" transform="rotate(${(a * 180) / Math.PI} ${32 + Math.cos(a) * 13} ${32 + Math.sin(a) * 13})" fill="${color}"/>`;
  }).join('')}<circle cx="32" cy="32" r="8" fill="#fff3a8"/></svg>`;
  if (kind === 'heart') return `<svg viewBox="0 0 64 64"><path d="M32 54 C4 34 12 12 32 26 C52 12 60 34 32 54 z" fill="${color}"/></svg>`;
  if (kind === 'rainbow') return `<svg viewBox="0 0 64 64">${['#ff7b7b', '#ffb457', '#ffe66d', '#7bd88f', '#6fc7ff', '#b58cff'].map((c, i) => `<path d="M8 48 a${24 - i * 4} ${24 - i * 4} 0 0 1 ${48 - i * 8} 0" fill="none" stroke="${c}" stroke-width="4" transform="translate(${i * 4},${i * 0})"/>`).join('')}</svg>`;
  return `<svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="20" fill="${color}"/></svg>`;
}
