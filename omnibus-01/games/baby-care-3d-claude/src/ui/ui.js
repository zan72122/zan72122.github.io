/* ============================================================================
 * ui.js — HUD, prompts, praise, world labels, sticker album
 * ----------------------------------------------------------------------------
 * The whole UI is DOM (the 3D layer stays clean) and every symbol is vector art
 * from icons.js — no emoji anywhere. Nothing here reads text to progress: the
 * icons, animation and audio carry the meaning, the words are decoration for
 * the grown-ups.
 *
 * Everything time-based is driven from `update(dt)` rather than setTimeout, so
 * the screenshot harness (which advances a fixed clock) sees the same frames a
 * real player would.
 * ========================================================================== */

import * as THREE from 'three';
import {
  icon, sticker as stickerArt, paw,
  STICKER_IDS, STICKER_NAMES, ACTIVITY_ICON
} from './icons.js';
import {
  DIAPER_NEED_ATTENTION,
  LOW,
  METERS
} from '../game/state.js';
import { AssistRunner, recommendActivity } from '../game/assist.js';
import {
  ACTIVITIES,
  NAV_ITEMS,
  navIdForActivity
} from '../activities/index.js';

/** Mood palette per activity — re-themes the HUD along with the lighting. */
const ACTIVITY_MOOD = Object.fromEntries(
  Object.entries(ACTIVITIES).map(([id, def]) => [id, def.mood || 'day'])
);

const ACTIVITY_LABEL = Object.fromEntries(
  Object.entries(ACTIVITIES).map(([id, def]) => [id, def.label || id])
);

/** How many star slots the collection card shows. Never a number: a child
 *  reads "three of my spaces are filled", which is a sticker sheet, not a
 *  score. Completing a card is the reward beat. */
const STAR_SLOTS = 5;

/** Hard ceiling on contextual choices shown at once. Rubric §4 #130. */
const MAX_TOOLS = 5;

/** The minimum child-facing hit region a targeted prompt must leave clear. */
const PROMPT_TARGET_RADIUS_PX = 22;

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const clamp01 = (v) => Math.min(1, Math.max(0, typeof v === 'number' && isFinite(v) ? v : 0));

export class UI {
  constructor({ app }) {
    this.app = app;
    this.state = app.state;
    this.harness = new URLSearchParams(location.search).has('harness');

    // `activityId` names the live runtime scene. `navId` names the one of five
    // visible buttons that owns it; all four care activities share `care`.
    this.activityId = '';
    this.navId = '';
    this.activity = ''; // compatibility alias for harness/debug callers
    this.started = false;

    this._time = 0;
    this._timers = [];        // { t, fn }
    this._labels = [];        // world-anchored DOM labels
    this._flights = [];       // stars flying to the counter
    this._trails = [];        // fading trail dots
    this._needAcc = 0;
    this._pendingStars = null;
    this._newStickers = 0;
    this._audioUnlocked = false;
    this._v = new THREE.Vector3();
    this._assistAcc = 0;
    this._assistStepKey = '';
    this._activityChanging = false;
    this._diaperCuePending = this.state.diaperNeed >= DIAPER_NEED_ATTENTION;
    this._diaperCueShown = false;
    this._diaperCueLabel = null;
    this._cancelDiaperMoodRestore = null;
    this._diaperPreviousMood = null;

    this.assistRunner = new AssistRunner({
      getActivity: () => this._activityChanging ? null : this.app.activity,
      onBusy: (busy, step) => this._paintAssistBusy(busy, step),
      onSettled: () => this.refreshAssist(true),
      prepareStep: (step, options) => this._prepareAssistStep(step, options)
    });
  }

  /* ============================================================== init == */

  async init() {
    const els = this.els = {
      hud: $('#hud'),
      title: $('#title-screen'),
      start: $('#start-btn'),
      meters: {},
      starBox: $('#star-box'),
      starCount: $('#star-count'),
      soundBtn: $('#sound-btn'),
      bookBtn: $('#book-btn'),
      bookPip: $('#book-pip'),
      actBar: $('#act-bar'),
      acts: {},
      ctxTray: $('#ctx-tray'),
      prompt: $('#prompt'),
      promptText: $('#prompt-text'),
      promptIcon: $('#prompt .prompt__icon'),
      assistBtn: $('#assist-btn'),
      assistText: $('#assist-btn .assist-btn__text'),
      omakaseBtn: $('#omakase-btn'),
      omakaseText: $('#omakase-btn .omakase-btn__text'),
      toastLayer: $('#toast-layer'),
      labelLayer: $('#label-layer'),
      fxLayer: $('#fx-layer'),
      album: $('#album'),
      albumPages: $('#album-pages'),
      albumBar: $('#album-bar'),
      albumCount: $('#album-count'),
      albumClose: $('#album-close')
    };

    for (const m of $$('.meter')) els.meters[m.dataset.meter] = m;
    this._syncNavigation();
    for (const a of $$('.act', els.actBar)) els.acts[a.dataset.act] = a;

    this.paintIcons(document);
    this._buildStarSlots();
    this._buildAlbum();
    this._bind();

    /* Mirror the saved profile onto the HUD. */
    for (const name of METERS) this._paintMeter(name, this.state.meters[name]);
    this._paintStars(this.state.stars, false);
    this._paintSound();
    this._refreshAlbum();
    this._refreshNeeds(true);

    this._bindState();
    this.refreshAssist(true);

    /* Frame the baby inside the title screen's soft reveal window. */
    try { this.app.cameraRig?.goTo?.('title', 0); } catch { /* preset optional */ }

    /* The harness only hides the title screen; keep the HUD in step with it. */
    this._titleObserver = new MutationObserver(() => {
      const hidden = els.title?.classList.contains('hidden');
      els.hud.classList.toggle('is-on', !!hidden);
      if (hidden) this.started = true;
    });
    if (els.title) this._titleObserver.observe(els.title, { attributes: true, attributeFilter: ['class'] });

    addEventListener('pagehide', () => this.state.flush?.());
    document.addEventListener('visibilitychange', () => { if (document.hidden) this.state.flush?.(); });
    this._onViewportResize = () => { this._layoutLabels(); };
    addEventListener('resize', this._onViewportResize);
    window.visualViewport?.addEventListener('resize', this._onViewportResize);

    return this;
  }

  /** Keep the static first-paint markup in sync with the catalog contract. */
  _syncNavigation() {
    const bar = this.els.actBar;
    if (!bar) return;
    const existing = new Map($$('.act', bar).map(btn => [btn.dataset.act, btn]));
    const wanted = new Set(NAV_ITEMS.map(item => item.id));

    for (const btn of existing.values()) {
      if (!wanted.has(btn.dataset.act)) btn.remove();
    }
    for (const item of NAV_ITEMS) {
      let btn = existing.get(item.id);
      if (!btn) {
        btn = document.createElement('button');
        btn.className = 'act';
        btn.type = 'button';
        btn.innerHTML =
          '<span class="act__face"><span class="act__icon"></span></span>' +
          '<span class="act__label"></span><span class="act__badge"></span>';
      }
      btn.dataset.act = item.id;
      btn.setAttribute('aria-label', item.label);
      const iconHolder = $('.act__icon', btn);
      if (iconHolder) {
        iconHolder.dataset.icon = item.icon;
        iconHolder.dataset.painted = '';
        iconHolder.innerHTML = '';
      }
      const label = $('.act__label', btn);
      if (label) label.textContent = item.label;
      const badge = $('.act__badge', btn);
      if (badge) {
        badge.dataset.icon = 'exclamation';
        badge.dataset.painted = '';
        badge.innerHTML = '';
      }
      bar.appendChild(btn);
    }
  }

  /** Replace every `[data-icon="name"]` placeholder with real vector art. */
  paintIcons(root = document) {
    for (const el of $$('[data-icon]', root)) {
      if (el.dataset.painted === '1') continue;
      el.innerHTML = icon(el.dataset.icon);
      el.dataset.painted = '1';
    }
  }

  /* ------------------------------------------------------------ wiring -- */

  /**
   * One physical press produces one semantic action. Pointer actions fire on
   * down for the responsive child-facing UI; keyboard auto-repeat is ignored.
   */
  _bindPress(el, fn) {
    if (!el || typeof fn !== 'function') return;
    let pointerId = null;
    let heldKey = '';
    const invoke = (event) => {
      if (el.disabled) return;
      this._unlockAudio();
      fn(event);
    };
    const releasePointer = (event) => {
      if (pointerId !== null && event?.pointerId !== undefined && event.pointerId !== pointerId) return;
      pointerId = null;
      el.classList.remove('is-press');
    };

    el.addEventListener('pointerdown', (event) => {
      if (pointerId !== null) return;
      event.preventDefault();
      event.stopPropagation();
      pointerId = event.pointerId;
      el.classList.add('is-press');
      invoke(event);
    });
    el.addEventListener('pointerup', releasePointer);
    el.addEventListener('pointercancel', releasePointer);
    el.addEventListener('pointerleave', releasePointer);
    // Suppress the compatibility click generated after pointer/keyboard input;
    // the semantic action already ran on pointerdown/keydown above.
    el.addEventListener('click', (event) => event.preventDefault());
    el.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      if (event.repeat || heldKey) return;
      heldKey = event.key;
      el.classList.add('is-press');
      invoke(event);
    });
    const releaseKey = (event) => {
      if (event?.type === 'keyup' && event.key !== heldKey) return;
      heldKey = '';
      el.classList.remove('is-press');
    };
    el.addEventListener('keyup', releaseKey);
    el.addEventListener('blur', releaseKey);
  }

  _bind() {
    if (this.els.start) this._bindPress(this.els.start, () => this.startGame());

    for (const [name, btn] of Object.entries(this.els.acts)) {
      this._bindPress(btn, () => this.pickActivity(name));
    }

    if (this.els.assistBtn) this._bindPress(this.els.assistBtn, () => this.runAssist());
    if (this.els.omakaseBtn) this._bindPress(this.els.omakaseBtn, () => {
      const next = recommendActivity(this.state);
      if (next && next !== this.activityId) this.pickActivity(next);
    });

    if (this.els.soundBtn) this._bindPress(this.els.soundBtn, () => {
      this.state.setMuted(!this.state.muted);
      if (!this.state.muted) this._sfx('tap');
    });

    if (this.els.bookBtn) this._bindPress(this.els.bookBtn, () => this.openAlbum());
    if (this.els.albumClose) this._bindPress(this.els.albumClose, () => this.closeAlbum());
    if (this.els.album) {
      this.els.album.addEventListener('pointerdown', (e) => {
        if (e.target === this.els.album) this.closeAlbum();
      });
    }
  }

  _bindState() {
    const s = this.state;
    s.on('meter', ({ name, value }) => { this._paintMeter(name, value); this._refreshNeeds(); });
    s.on('star', ({ stars, delta }) => {
      if (delta <= 0) { this._paintStars(stars, false); return; }
      /* While stars are in the air the counter ticks up as each one lands. */
      if (this._flights.length) return;
      /* Otherwise give ui.star() a beat to launch a flight before snapping. */
      this._cancelStarSync?.();
      this._cancelStarSync = this.after(0.3, () => {
        this._cancelStarSync = null;
        if (!this._flights.length) this._paintStars(this.state.stars, true);
      });
    });
    s.on('sticker', ({ id }) => this._onStickerUnlocked(id));
    s.on('muted', () => this._paintSound());
    s.on('diaperNeed', ({ value, prev }) => {
      this._onDiaperNeed(value, prev);
      this._refreshNeeds();
    });
    s.on('change', () => this._refreshOmakase());
    s.on('reset', () => {
      this._resetDiaperCue();
      this._refreshAlbum();
      this._refreshNeeds(true);
      this._paintStars(s.stars, false);
    });
  }

  /* ============================================================= frame == */

  update(dt) {
    if (!(dt > 0)) dt = 0;
    this._time += dt;

    /* Needs drift on the same clock as the render loop — but only once the
       child is actually playing, never while the title screen is up. */
    if (this.started) this.state.update?.(dt);

    /* Scheduled work (toast lifetimes, celebration beats, …). */
    if (this._timers.length) {
      for (let i = this._timers.length - 1; i >= 0; i--) {
        const t = this._timers[i];
        t.t -= dt;
        if (t.t <= 0) { this._timers.splice(i, 1); try { t.fn(); } catch (e) { console.error(e); } }
      }
    }

    this._layoutLabels();
    if (this._promptWanted || this._assistStep || this.assistRunner.busy) {
      this._syncPromptVisibility();
    }
    this._stepFlights(dt);

    this._needAcc += dt;
    if (this._needAcc > 0.4) { this._needAcc = 0; this._refreshNeeds(); }
    this._assistAcc += dt;
    if (this._assistAcc > 0.25) {
      this._assistAcc = 0;
      this.refreshAssist();
    }
    this._maybeShowDiaperCue();
  }

  /** Run `fn` after `seconds` of game time. */
  after(seconds, fn) {
    const t = { t: Math.max(0, seconds), fn };
    this._timers.push(t);
    return () => { const i = this._timers.indexOf(t); if (i >= 0) this._timers.splice(i, 1); };
  }

  /* =========================================================== title === */

  startGame() {
    if (this.started) return;
    this.started = true;
    this.app.setMode?.('play');
    this._unlockAudio();
    this._sfx('start');
    this.els.title?.classList.add('hidden');
    this.els.hud.classList.add('is-on');
    const p = this.app.setActivity?.('play');
    if (p && typeof p.catch === 'function') p.catch((err) => console.error('[ui] first activity failed', err));
    this.after(1.1, () => this.prompt('あかちゃんと あそぼう！', { icon: 'balloon' }));
    if (this.state.diaperNeed >= DIAPER_NEED_ATTENTION) this._diaperCuePending = true;
  }

  showTitle() {
    this.started = false;
    this.app.setMode?.('title');
    this.els.title?.classList.remove('hidden');
    this.els.hud.classList.remove('is-on');
  }

  /* ======================================================== activities == */

  /** A care button was pressed. */
  pickActivity(name) {
    if (this._activityChanging) return;
    const requestedNav = navIdForActivity(name);
    const previousNav = this.navId;
    let target = name;

    // A visible care-button tap always means "show the four care choices".
    // From a child activity that is a real transition back to the hub; on the
    // hub itself it is an idempotent request that must not clear its tray.
    if (name === 'care' && this.navId === 'care') {
      if (this.activityId === 'care') {
        this._sfx('tap');
        this.app.activity?.showChoices?.();
        return;
      }
      target = 'care';
    } else if (target === this.activityId) {
      // Re-tapping any other active destination is intentionally a no-op so
      // an activity's current tools and prompt remain intact.
      return;
    }

    this._sfx('tap');
    this.cancelAssist({ transition: true });
    /* Clear the previous scene's chrome *before* the switch, so whatever the
       incoming activity sets up in enter() survives. */
    this.clearTools();
    this.hidePrompt();
    this.clearLabels();
    // Highlight the requested visible group while the runtime is loading, but
    // leave activityId untouched until App confirms the completed transition.
    this._paintActiveNav(requestedNav);
    const p = this.app.setActivity?.(target);
    if (p && typeof p.catch === 'function') p.catch((err) => console.error('[ui] activity failed', err));
    Promise.resolve(p).then(() => {
      this._activityChanging = false;
      this.refreshAssist(true);
    }, () => {
      this._activityChanging = false;
      this._paintActiveNav(previousNav);
      this.refreshAssist(true);
    });
  }

  /** Reflect the active activity (also called back by App#setActivity). */
  setActivity(name, navId = navIdForActivity(name)) {
    if (this.activityId === name && this.navId === navId) {
      this._activityChanging = false;
      this.refreshAssist(true);
      return;
    }
    this.activityId = name;
    this.navId = navId;
    this.activity = name;
    this._activityChanging = false;
    this._paintActiveNav(navId);
    this.setMood(ACTIVITY_MOOD[name] || 'day');
    this.refreshAssist(true);
  }

  _paintActiveNav(navId) {
    this.navId = navId || '';
    for (const [key, btn] of Object.entries(this.els.acts)) {
      const active = key === this.navId;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-current', active ? 'true' : 'false');
    }
  }

  /** Drop every transient hint (prompt, tools, world labels) at once. */
  clearAll() {
    this.clearTools();
    this.hidePrompt();
    this.clearLabels();
  }

  /** Re-theme the HUD palette. 'day' | 'golden' | 'evening' | 'night' */
  setMood(name) {
    document.body.dataset.mood = name || 'day';
  }

  /** Canvas pointer stream from App#_bindInput. */
  onPointer(p) {
    if (!p) return;
    this._lastPointer = { x: p.x, y: p.y };
    if (p.type === 'down') this._unlockAudio();
  }

  /* ========================================================= assistance == */

  /** Stop a multi-part demonstration before an activity is disposed. */
  cancelAssist({ transition = false } = {}) {
    this._activityChanging = !!transition;
    this.assistRunner.cancel();
    if (transition) this.refreshAssist(true);
  }

  /** One real gesture runs one semantic activity step. */
  async runAssist() {
    if (this.assistRunner.busy || this._activityChanging) return false;
    this._unlockAudio();
    this._sfx('tap');
    try {
      return await this.assistRunner.run();
    } catch (error) {
      if (error?.name !== 'AbortError') {
        console.error('[assist] step failed', error);
        this.toast('もういちど やってみよう', { icon: 'heart' });
      }
      return false;
    }
  }

  /**
   * If the actionable object is outside the current framing, turn the current
   * camera toward it before the activity starts moving the prop. Keeping the
   * eye in place avoids inventing a scene-specific route through furniture;
   * the activity's next normal camera preset takes over as usual.
   */
  async _prepareAssistStep(step, { signal } = {}) {
    const target = step?.target;
    if (!target || this._targetOnScreen(target)) return;

    const activity = this.app.activity;
    if (typeof activity?.focusAssistStep === 'function') {
      await activity.focusAssistStep(step, { signal });
      return;
    }

    const rig = this.app.cameraRig;
    if (!rig?.goTo || !rig?.resolved) return;
    const point = new THREE.Vector3();
    if (typeof target.getWorldPosition === 'function') target.getWorldPosition(point);
    else if (typeof target.z === 'number') point.set(target.x, target.y, target.z);
    else return;

    const view = rig.resolved();
    const eye = view.pos.clone();
    if (eye.distanceTo(point) < 0.35) {
      const offset = view.pos.clone().sub(view.target);
      if (offset.lengthSq() < 1e-5) offset.set(0, 0.25, 0.7);
      eye.copy(point).add(offset.setLength(0.65));
    }
    rig.goTo({
      name: 'assist-focus',
      space: 'world',
      pos: eye,
      target: point,
      fov: Math.max(38, rig.preset?.fov || 38)
    }, 0.45);

    await new Promise((resolve, reject) => {
      const onAbort = () => {
        cancel();
        reject(new DOMException('Assist cancelled', 'AbortError'));
      };
      const cancel = this.after(0.46, () => {
        signal?.removeEventListener('abort', onAbort);
        if (signal?.aborted) onAbort();
        else resolve();
      });
      signal?.addEventListener('abort', onAbort, { once: true });
    });
  }

  /**
   * Keep DOM work off the render hot path. Activity steps are cheap to query,
   * but the DOM is only rewritten when the semantic id actually changes.
   */
  refreshAssist(force = false) {
    const btn = this.els?.assistBtn;
    if (!btn) return;
    const step = this.assistRunner.busy || this._activityChanging
      ? null
      : this.assistRunner.currentStep();
    const key = step ? `${this.activityId}:${step.id}:${step.label || ''}` : '';
    if (force || key !== this._assistStepKey) {
      this._assistStepKey = key;
      this._assistStep = step;
      btn.hidden = !step && !this.assistRunner.busy;
      btn.disabled = this.assistRunner.busy || !step;
      btn.setAttribute('aria-label', step?.label
        ? `${step.label}を やってみる`
        : 'つぎのひとつを やってみる');
      this.els.prompt?.classList.toggle('has-assist', !!step || this.assistRunner.busy);
    } else {
      this._assistStep = step;
    }
    this._refreshOmakase();
    this._syncPromptVisibility(true);
  }

  _paintAssistBusy(busy, step) {
    const btn = this.els?.assistBtn;
    if (!btn) return;
    document.documentElement.dataset.assistBusy = busy ? '1' : '0';
    btn.hidden = false;
    btn.disabled = !!busy;
    btn.classList.toggle('is-busy', !!busy);
    if (this.els.assistText) this.els.assistText.textContent = busy ? 'みててね…' : 'やってみる';
    btn.setAttribute('aria-busy', busy ? 'true' : 'false');
    if (step?.label) btn.setAttribute('aria-label', `${step.label}を じどうで やっています`);
    this.els.prompt?.classList.toggle('has-assist', !!busy || !!this._assistStep);
    this._syncPromptVisibility(true);
  }

  _refreshOmakase() {
    const btn = this.els?.omakaseBtn;
    if (!btn) return;
    const next = this.started && !this._activityChanging
      ? recommendActivity(this.state)
      : null;
    const visible = !!next && next !== this.activityId;
    btn.hidden = !visible;
    btn.dataset.activity = visible ? next : '';
    btn.setAttribute('aria-label', visible
      ? `${ACTIVITY_LABEL[next]}へ おまかせ`
      : 'おすすめのおせわへいく');
    if (this.els.omakaseText) {
      this.els.omakaseText.textContent = visible
        ? `おまかせ・${ACTIVITY_LABEL[next]}`
        : 'おまかせ';
    }
    this.els.hud?.classList.toggle('has-omakase', visible);
  }

  /* ============================================================ meters == */

  /**
   * Set a need. Writes through to State (which clamps, saves and re-emits),
   * so `ui.meter('food', 1)` is a complete "the baby is full" statement.
   */
  meter(name, value) {
    if (!METERS.includes(name)) return;
    this.state.setMeter(name, value);
    this._paintMeter(name, this.state.meters[name]);
  }

  _paintMeter(name, value) {
    const el = this.els?.meters?.[name];
    if (!el) return;
    const v = clamp01(value);
    el.style.setProperty('--v', v.toFixed(3));
    el.classList.toggle('is-low', v < LOW);
  }

  /** Arm one gentle cue when diaper need crosses the attention threshold. */
  _onDiaperNeed(value, prev = value) {
    const need = clamp01(value);
    if (need < DIAPER_NEED_ATTENTION) {
      this._resetDiaperCue();
      return;
    }
    if (clamp01(prev) < DIAPER_NEED_ATTENTION || !this._diaperCueShown) {
      this._diaperCuePending = true;
    }
  }

  _resetDiaperCue() {
    this._diaperCuePending = false;
    this._diaperCueShown = false;
    this._diaperCueLabel?.remove?.();
    this._diaperCueLabel = null;
    this._cancelDiaperMoodRestore?.();
    this._cancelDiaperMoodRestore = null;
    const baby = this.app.baby;
    if (this._diaperPreviousMood && baby?.mood === 'sulk') {
      baby.setMood?.(this._diaperPreviousMood, 0.35);
    }
    this._diaperPreviousMood = null;
  }

  /**
   * Delay the cue until the baby is awake and the activity queue is stable.
   * The persistent care badge remains the quiet reminder after this one beat.
   */
  _maybeShowDiaperCue() {
    if (!this.started || !this._diaperCuePending || this._diaperCueShown) return;
    if (this._activityChanging || this.assistRunner?.busy) return;
    if (this.activityId === 'sleep' || this.activityId === 'diaper') return;
    const baby = this.app.baby;
    if (!baby || baby.mood === 'asleep' || baby.poseName === 'sleep' || this.state.asleep === true) return;

    this._diaperCuePending = false;
    this._diaperCueShown = true;
    const previousMood = baby.mood || 'neutral';
    this._diaperPreviousMood = previousMood;
    baby.setMood?.('sulk', 0.3);
    baby.gesture?.('point');
    const target = baby.rig?.sockets?.head || baby.group;
    this._diaperCueLabel = this.worldLabel(target, 'おむつ かえて', {
      icon: 'diaper',
      seconds: 2.6,
      offset: [0, 0.10, 0]
    });
    this._cancelDiaperMoodRestore?.();
    this._cancelDiaperMoodRestore = this.after(2.7, () => {
      this._cancelDiaperMoodRestore = null;
      this._diaperCueLabel = null;
      if (baby.mood === 'sulk') baby.setMood?.(previousMood, 0.35);
      this._diaperPreviousMood = null;
    });
  }

  /** Badge the care buttons whose need is running low. */
  _refreshNeeds(force = false) {
    const needy = new Set(
      (this.state.needyActivities?.() || []).map(navIdForActivity)
    );
    for (const [key, btn] of Object.entries(this.els.acts)) {
      const want = needy.has(key);
      if (force || btn.classList.contains('is-needy') !== want) {
        btn.classList.toggle('is-needy', want);
      }
    }
    this._refreshOmakase();
  }

  /* ============================================================= stars == */

  /**
   * Award stars. `from` may be a THREE.Object3D, a THREE.Vector3, a screen
   * point {x,y} or nothing (the last touch / screen centre is used), and the
   * star arcs from there into the counter.
   *
   *   ui.star()                       → +1 from the last touch
   *   ui.star(3, { from: baby.group })→ +3 arcing off the baby
   *   ui.star(12, { absolute: true }) → set the counter to 12 (debug/harness)
   */
  star(n = 1, opts = {}) {
    if (opts.absolute) { this.state.setStars(n); return this.state.stars; }

    const value = Math.max(0, Math.round(Number(n) || 0));
    if (!value) return this.state.stars;

    /* Some callers (activities/_shared.js `award()`) patch State first and then
       hand us the new *total*; others hand us a delta. If the number we were
       given is exactly the total State just moved to, it is an echo — animate
       it, but do not double-count. */
    const echo = value === this.state.stars && this.state.starChangedWithin?.(0.6);
    const delta = echo ? Math.max(1, this.state.lastStarDelta || 1) : value;

    this._sfx('star');
    this._flyStar(opts.from ?? opts.at, delta);
    if (!echo) this.state.addStars(delta);
    return this.state.stars;
  }

  /** Absolute setter, kept separate from the award animation. */
  setStars(total) { this.state.setStars(total); }

  /**
   * Replace the numeric counter with a row of sticker slots. The markup keeps
   * the counter element (other code reads it) but it is never shown.
   */
  _buildStarSlots() {
    const box = this.els.starBox;
    if (!box || box.querySelector('.star-slots')) return;
    box.querySelector('.star-box__icon')?.remove();
    const row = document.createElement('div');
    row.className = 'star-slots';
    this.els.starSlots = [];
    for (let i = 0; i < STAR_SLOTS; i++) {
      const slot = document.createElement('span');
      slot.className = 'star-slot is-empty';
      slot.dataset.on = '0';
      slot.innerHTML = icon('star');
      row.appendChild(slot);
      this.els.starSlots.push(slot);
    }
    box.insertBefore(row, box.firstChild);
    box.setAttribute('aria-label', 'あつめた ほし');
  }

  _paintStars(total, bump) {
    const el = this.els?.starCount;
    if (el) el.textContent = String(total);          // bookkeeping only, never shown
    const slots = this.els?.starSlots;
    if (slots && slots.length) {
      /* A full card stays full for its moment of glory, then the next star
         starts a fresh one. No digits anywhere in the HUD. */
      const filled = total > 0 && total % STAR_SLOTS === 0 ? STAR_SLOTS : total % STAR_SLOTS;
      slots.forEach((slot, i) => {
        const on = i < filled;
        if (slot.dataset.on === (on ? '1' : '0')) return;
        slot.dataset.on = on ? '1' : '0';
        slot.classList.toggle('is-full', on);
        slot.classList.toggle('is-empty', !on);
        if (on && bump) {
          slot.classList.remove('is-pop');
          void slot.offsetWidth;
          slot.classList.add('is-pop');
        }
      });
    }
    if (!bump) return;
    const box = this.els.starBox;
    if (!box) return;
    box.classList.remove('is-bump');
    void box.offsetWidth;
    box.classList.add('is-bump');
  }

  /** The slot a flying star should land in — the first empty one. */
  _starTarget() {
    const slots = this.els?.starSlots;
    if (slots && slots.length) {
      return this._elCenter(slots.find(s => s.dataset.on === '0') || slots[slots.length - 1]);
    }
    return this._elCenter(this.els.starBox);
  }

  _flyStar(from, delta) {
    const target = this._starTarget();
    const p0 = this._toScreen(from) || this._lastPointer || { x: innerWidth / 2, y: innerHeight * 0.45 };
    this._cancelStarSync?.();
    this._cancelStarSync = null;
    if (this.harness || !target) {
      this.after(0.02, () => this._paintStars(this.state.stars, true));
      return;
    }

    /* One star per point, staggered and jittered so a batch reads as a burst. */
    const n = Math.min(delta, 5);
    const lift = Math.max(90, innerHeight * 0.16);
    for (let i = 0; i < n; i++) {
      const jx = (i - (n - 1) / 2) * 26;
      const jy = (i % 2 ? -1 : 1) * i * 12;
      const el = document.createElement('div');
      el.className = 'star-fly';
      el.innerHTML = icon('star');
      el.style.transform = `translate(${p0.x + jx}px, ${p0.y + jy}px) scale(0)`;
      this.els.fxLayer.appendChild(el);

      const start = { x: p0.x + jx, y: p0.y + jy };
      this._flights.push({
        el, t: 0, dur: 0.92, trail: 0, delay: i * 0.13,
        p0: start,
        c: {
          x: (start.x + target.x) / 2 + jx,
          y: Math.min(start.y, target.y) - lift - i * 14
        },
        p1: target
      });
    }
  }

  _stepFlights(dt) {
    for (let i = this._flights.length - 1; i >= 0; i--) {
      const f = this._flights[i];
      if (f.delay > 0) { f.delay -= dt; continue; }
      f.t += dt;
      const u = Math.min(1, f.t / f.dur);
      const e = u * u * (3 - 2 * u);               // smoothstep
      const iv = 1 - e;
      const x = iv * iv * f.p0.x + 2 * iv * e * f.c.x + e * e * f.p1.x;
      const y = iv * iv * f.p0.y + 2 * iv * e * f.c.y + e * e * f.p1.y;
      const scale = 1.25 - 0.6 * e;
      f.el.style.transform = `translate(${x}px, ${y}px) rotate(${e * 420}deg) scale(${scale})`;

      f.trail -= dt;
      if (f.trail <= 0 && u < 0.92) {
        f.trail = 0.045;
        this._spawnTrail(x, y);
      }

      if (u >= 1) {
        f.el.remove();
        this._flights.splice(i, 1);
        /* Each landing star ticks the counter up by one. */
        const shown = parseInt(this.els.starCount?.textContent, 10) || 0;
        const next = this._flights.length ? Math.min(this.state.stars, shown + 1) : this.state.stars;
        this._pendingStars = null;
        this._paintStars(next, true);
        this._sfx('chime');
      }
    }

    for (let i = this._trails.length - 1; i >= 0; i--) {
      const t = this._trails[i];
      t.t += dt;
      const u = t.t / 0.5;
      if (u >= 1) { t.el.remove(); this._trails.splice(i, 1); continue; }
      t.el.style.opacity = String(1 - u);
      t.el.style.transform = `translate(${t.x}px, ${t.y}px) scale(${1 - u * 0.7})`;
    }
  }

  _spawnTrail(x, y) {
    const el = document.createElement('div');
    el.className = 'star-trail';
    el.style.transform = `translate(${x}px, ${y}px)`;
    this.els.fxLayer.appendChild(el);
    this._trails.push({ el, x, y, t: 0 });
  }

  /* ========================================================== stickers == */

  /**
   * Unlock (or re-show) a sticker. Accepts an id from STICKER_IDS or an index.
   * Returns the sticker id, or null when the id is unknown.
   */
  sticker(id) {
    const key = typeof id === 'number' ? STICKER_IDS[id] : id;
    if (!key || !STICKER_IDS.includes(key)) return null;
    if (!this.state.hasSticker(key)) this.state.unlockSticker(key);   // fires _onStickerUnlocked
    else this._markNewSticker(key);
    return key;
  }

  _onStickerUnlocked(id) {
    this._refreshAlbum();
    this._markNewSticker(id);
    this._newStickers++;
    this.els.bookBtn?.classList.add('has-new');
    if (this.els.bookPip) this.els.bookPip.textContent = String(this._newStickers);
    if (this.harness) return;

    this._sfx('tada');
    this.toast('あたらしい シール！', { icon: 'star', seconds: 2.4 });
    this.after(1.5, () => this.openAlbum());
  }

  _markNewSticker(id) {
    const slot = this.els.albumPages?.querySelector(`.slot[data-id="${id}"]`);
    if (!slot) return;
    for (const s of $$('.slot.is-new', this.els.albumPages)) s.classList.remove('is-new');
    void slot.offsetWidth;
    slot.classList.add('is-new');
  }

  _buildAlbum() {
    const pages = this.els.albumPages;
    if (!pages) return;
    pages.innerHTML = '';
    for (const id of STICKER_IDS) {
      const slot = document.createElement('div');
      slot.className = 'slot is-locked';
      slot.dataset.id = id;
      slot.innerHTML =
        `<div class="slot__art">${paw()}</div>` +
        `<span class="slot__name">?</span>`;
      pages.appendChild(slot);
    }
  }

  _refreshAlbum() {
    const pages = this.els.albumPages;
    if (!pages) return;
    const owned = new Set(this.state.stickers);
    for (const slot of $$('.slot', pages)) {
      const id = slot.dataset.id;
      const has = owned.has(id);
      slot.classList.toggle('is-unlocked', has);
      slot.classList.toggle('is-locked', !has);
      const art = slot.querySelector('.slot__art');
      const name = slot.querySelector('.slot__name');
      const want = has ? 'art' : 'paw';
      if (slot.dataset.render !== want) {
        art.innerHTML = has ? stickerArt(id) : paw();
        slot.dataset.render = want;
      }
      name.textContent = has ? (STICKER_NAMES[id] || '') : '?';
    }
    const total = STICKER_IDS.length;
    const got = this.state.stickers.length;
    if (this.els.albumBar) this.els.albumBar.style.width = ((got / total) * 100).toFixed(1) + '%';
    if (this.els.albumCount) this.els.albumCount.textContent = `${got} / ${total}`;
  }

  openAlbum() {
    if (!this.els.album) return;
    this._refreshAlbum();
    this.els.album.classList.add('is-open');
    this._newStickers = 0;
    this.els.bookBtn?.classList.remove('has-new');
    this._sfx('chime');
  }

  closeAlbum() {
    this.els.album?.classList.remove('is-open');
    for (const s of $$('.slot.is-new', this.els.albumPages)) s.classList.remove('is-new');
    this._sfx('tap');
  }

  /* ====================================================== prompt/toast == */

  /**
   * The gentle "what to do next" hint. Slides in with a bobbing arrow and
   * stays until the step is done (or `seconds` elapse).
   */
  prompt(text, { icon: iconName = 'heart', seconds = 0, arrow, target = null } = {}) {
    const el = this.els.prompt;
    if (!el) return;
    this.els.promptText.textContent = text || '';
    if (this.els.promptIcon) {
      this.els.promptIcon.innerHTML = icon(iconName) || icon('heart');
    }

    /* An arrow is a promise that something is *there*. Without a target we
       cannot keep that promise — the old build drew a fixed downward arrow
       under text that named an object somewhere else entirely — so the arrow
       only appears when a real target has been handed in. */
    /* An activity can also publish what its current step is about by setting
       `promptTarget` on itself; that saves every call site passing it. */
    const t = target || this.app.activity?.promptTarget || null;

    this._promptTarget = t;
    this._promptPlacement = null;
    this._promptArrow = arrow === undefined ? !!t : !!arrow;
    /* A targeted prompt is *gated* rather than shown outright: see
       `_syncPromptVisibility`. A prompt with no target names no object, so it
       is always safe to show. */
    this._promptWanted = true;
    this.refreshAssist();
    /* Visibility first, then layout: the arrow is aimed from its own measured
       centre, and while the bubble is still off-screen that centre is 130%
       of a bubble-height away from where it will settle. */
    this._syncPromptVisibility(true);

    this._promptTimer?.();
    this._promptTimer = seconds > 0 ? this.after(seconds, () => this.hidePrompt()) : null;
    this._sfx('pop');
  }

  /**
   * Show the first hint in `steps` whose target is actually on screen.
   *
   * Activities know the *order* their steps should be offered in; only the HUD
   * knows what the camera can currently see. Handing over the whole ordered
   * list lets the two agree: the routine still leads with "brush your teeth",
   * but if the toothbrush is behind the camera the child is asked to do the
   * next thing they can actually reach instead of the right thing invisibly.
   *
   * `steps` is `[{ text, icon, target }]`, most-wanted first. A step with no
   * target names no object and therefore always qualifies — put those last.
   * Returns the step that was shown, or null when none qualified.
   */
  promptChoices(steps = [], opts = {}) {
    for (const s of steps) {
      if (!s || !s.text) continue;
      if (s.target && !this._targetOnScreen(s.target)) continue;
      this.prompt(s.text, { ...opts, icon: s.icon, target: s.target || null });
      return s;
    }
    this.hidePrompt();
    return null;
  }

  /**
   * A prompt that names a target is only shown while that target is on screen.
   *
   * This is the whole of the fix for "the prompt tells a four-year-old to tap
   * something that is not in the picture". It is re-evaluated every frame
   * rather than once at `prompt()` time for two reasons: the camera is
   * usually still dollying when an activity's first prompt fires (and the
   * screenshot harness sets the framing *after* the state), and things move —
   * so a prompt that was honest a second ago has to go, and one that was
   * premature has to be allowed back.
   */
  _syncPromptVisibility(immediate = false) {
    const el = this.els.prompt;
    if (!el) return;
    const hintOn = !this._promptWanted ? false
      : (!this._promptTarget || this._targetOnScreen(this._promptTarget));
    const assistOn = !!this._assistStep || this.assistRunner?.busy;
    const ok = hintOn || assistOn;
    el.classList.toggle('is-assist-only', assistOn && !hintOn);
    el.classList.toggle('is-on', ok);
    if (ok) this._layoutPrompt(immediate);
  }

  /**
   * Is this prompt target somewhere a child could actually point at?
   *
   * Three ways to fail: the object (or an ancestor) is switched off, it is
   * behind the camera, or it projects outside the frame. The margin is
   * generous — an object half off the edge is still findable — but a target
   * in another room is not.
   */
  _targetOnScreen(src) {
    if (!src) return false;
    /* An invisible *hit proxy* still stands for something the child can see —
       "pat the baby's back" is aimed at a transparent sphere riding a very
       visible back. Activities mark those with `userData.promptAnchor`. */
    if (!src.userData?.promptAnchor) {
      for (let n = src; n && n.isObject3D; n = n.parent) {
        if (n.visible === false) return false;
      }
    }
    const canvas = this.app.renderer?.domElement;
    const w = canvas?.clientWidth || innerWidth;
    const h = canvas?.clientHeight || innerHeight;
    if (typeof src.getWorldPosition === 'function' || typeof src.z === 'number') {
      const cam = this.app.camera;
      if (!cam) return false;
      const p = this._v;
      if (typeof src.getWorldPosition === 'function') src.getWorldPosition(p);
      else p.set(src.x, src.y, src.z);
      p.project(cam);
      if (!isFinite(p.x) || !isFinite(p.y) || p.z > 1) return false;   // behind the eye
      const x = (p.x * 0.5 + 0.5) * w;
      const y = (-p.y * 0.5 + 0.5) * h;
      const m = 0.06;
      return x > -w * m && x < w * (1 + m) && y > -h * m && y < h * (1 + m);
    }
    /* Already a screen point. */
    return isFinite(src.x) && isFinite(src.y);
  }

  /** Re-aim an existing prompt at a 3D object (or Vector3), or clear it. */
  promptTarget(objectOrVec) {
    this._promptTarget = objectOrVec || null;
    this._promptPlacement = null;
    this._promptArrow = !!objectOrVec;
    this._syncPromptVisibility(true);
  }

  /**
   * Place the bubble so it never covers its own target, and rotate the arrow
   * so it points at it. The arrow art points *down* at 0°, so the CSS rotation
   * that aims (0,1) at (dx,dy) is atan2(-dx, dy).
   */
  _layoutPrompt(immediate = false) {
    const el = this.els.prompt;
    if (!el) return;
    const arrowEl = el.querySelector('.prompt__arrow');
    if (arrowEl) arrowEl.style.display = this._promptArrow ? '' : 'none';

    const canvas = this.app.renderer?.domElement;
    const w = canvas?.clientWidth || innerWidth;
    const h = canvas?.clientHeight || innerHeight;

    let side = 'left', vert = 'bottom';
    const p = this._promptTarget ? this._toScreen(this._promptTarget) : null;

    if (p && isFinite(p.x) && isFinite(p.y)) {
      const preferred = {
        side: p.x < w * 0.5 ? 'right' : 'left',
        vert: p.y > h * 0.52 ? 'top' : 'bottom'
      };
      const otherSide = preferred.side === 'left' ? 'right' : 'left';
      const otherVert = preferred.vert === 'top' ? 'bottom' : 'top';
      const candidates = [];
      const add = (placement) => {
        if (placement && !candidates.some(({ side: s, vert: v }) =>
          s === placement.side && v === placement.vert)) candidates.push(placement);
      };
      // Keep a safe placement stable while the camera settles, then try the
      // target-opposite quadrant and its three alternatives.
      add(this._promptPlacement);
      add(preferred);
      add({ side: preferred.side, vert: otherVert });
      add({ side: otherSide, vert: preferred.vert });
      add({ side: otherSide, vert: otherVert });

      let best = candidates[0], bestOverlap = Infinity;
      for (const candidate of candidates) {
        el.classList.toggle('prompt--left', candidate.side === 'left');
        el.classList.toggle('prompt--right', candidate.side === 'right');
        el.classList.toggle('prompt--top', candidate.vert === 'top');
        // offset* measures the settled box without the entrance transform.
        const left = el.offsetLeft, top = el.offsetTop;
        const right = left + el.offsetWidth, bottom = top + el.offsetHeight;
        const overlapW = Math.max(0, Math.min(right, p.x + PROMPT_TARGET_RADIUS_PX) -
          Math.max(left, p.x - PROMPT_TARGET_RADIUS_PX));
        const overlapH = Math.max(0, Math.min(bottom, p.y + PROMPT_TARGET_RADIUS_PX) -
          Math.max(top, p.y - PROMPT_TARGET_RADIUS_PX));
        const overlap = overlapW * overlapH;
        if (overlap < bestOverlap) { best = candidate; bestOverlap = overlap; }
        if (overlap === 0) break;
      }
      side = best.side;
      vert = best.vert;
      this._promptPlacement = best;
    } else {
      this._promptPlacement = null;
    }

    el.classList.toggle('prompt--left', side === 'left');
    el.classList.toggle('prompt--right', side === 'right');
    el.classList.toggle('prompt--top', vert === 'top');

    if (!p || !this._promptArrow || !arrowEl) {
      el.style.removeProperty('--arrow-rot');
      return;
    }
    /* The arrow sits on whichever end of the bubble faces the target, so it
       never has to point back across its own text. */
    const wantFirst = side === 'right';
    if (wantFirst && el.firstElementChild !== arrowEl) el.insertBefore(arrowEl, el.firstElementChild);
    else if (!wantFirst && el.lastElementChild !== arrowEl) el.appendChild(arrowEl);

    /* Aim from the arrow's own centre, measured after the placement classes
       have been applied. `immediate` flushes layout first. */
    if (immediate) void el.offsetWidth;
    const box = arrowEl.getBoundingClientRect();
    if (!box.width) return;
    const cx = box.left + box.width / 2;
    const cy = box.top + box.height / 2;
    const deg = Math.atan2(-(p.x - cx), p.y - cy) * 180 / Math.PI;
    el.style.setProperty('--arrow-rot', deg.toFixed(1) + 'deg');
  }

  hidePrompt() {
    this._promptTimer?.();
    this._promptTimer = null;
    this._promptTarget = null;
    this._promptPlacement = null;
    this._promptArrow = false;
    this._promptWanted = false;
    this._syncPromptVisibility(true);
  }

  /** Praise. Springs in at the top, floats away by itself. */
  toast(text, { icon: iconName = 'check', seconds = 1.8 } = {}) {
    const layer = this.els.toastLayer;
    if (!layer) return null;
    while (layer.children.length > 2) layer.firstElementChild.remove();

    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `<span class="toast__icon">${icon(iconName) || icon('check')}</span><span>${escapeHtml(text)}</span>`;
    layer.appendChild(el);

    this.after(Math.max(0.4, seconds), () => {
      el.classList.add('is-out');
      this.after(0.42, () => el.remove());
    });
    return el;
  }

  /* ======================================================= world labels = */

  /**
   * A DOM label pinned to a 3D object, re-projected every frame.
   *   const hint = ui.worldLabel(tapTarget, 'ここをタップ', { icon: 'arrowDown' });
   *   hint.remove();
   */
  worldLabel(object3D, text, opts = {}) {
    const {
      offset = [0, 0.18, 0],
      icon: iconName = null,
      seconds = 0,
      bob = true,
      className = ''
    } = opts;

    const el = document.createElement('div');
    el.className = 'wlabel ' + className;
    const inner = document.createElement('span');
    inner.className = bob ? 'wlabel__bob' : '';
    inner.innerHTML =
      (iconName ? `<span class="wlabel__icon">${icon(iconName)}</span>` : '') +
      `<span>${escapeHtml(text || '')}</span>`;
    el.appendChild(inner);
    this.els.labelLayer.appendChild(el);

    const handle = {
      el,
      object: object3D,
      offset: offset.slice(),
      visible: true,
      setText: (t) => { inner.lastElementChild.textContent = t; return handle; },
      show: () => { handle.visible = true; return handle; },
      hide: () => { handle.visible = false; el.classList.remove('is-on'); return handle; },
      remove: () => {
        const i = this._labels.indexOf(handle);
        if (i >= 0) this._labels.splice(i, 1);
        el.remove();
      }
    };

    this._labels.push(handle);
    this._layoutLabels();
    requestAnimationFrame(() => el.classList.add('is-on'));
    if (seconds > 0) this.after(seconds, () => handle.remove());
    return handle;
  }

  clearLabels() {
    for (const l of [...this._labels]) l.remove();
  }

  _layoutLabels() {
    if (!this._labels.length) return;
    const cam = this.app.camera;
    const canvas = this.app.renderer?.domElement;
    if (!cam || !canvas) return;
    const w = canvas.clientWidth || innerWidth;
    const h = canvas.clientHeight || innerHeight;

    for (const l of this._labels) {
      const p = this._v;
      const o = l.object;
      if (!o) continue;
      if (typeof o.getWorldPosition === 'function') o.getWorldPosition(p);
      else if (o.isVector3 || (typeof o.x === 'number' && typeof o.z === 'number')) p.set(o.x, o.y, o.z);
      else continue;
      p.x += l.offset[0]; p.y += l.offset[1]; p.z += l.offset[2];
      p.project(cam);

      const behind = p.z > 1;
      const x = (p.x * 0.5 + 0.5) * w;
      const y = (-p.y * 0.5 + 0.5) * h;
      const off = behind || x < -80 || y < -80 || x > w + 80 || y > h + 80;
      /* left/top position it; the CSS transform does the centring + pop-in. */
      l.el.style.left = x.toFixed(1) + 'px';
      l.el.style.top = y.toFixed(1) + 'px';
      l.el.classList.toggle('is-on', l.visible && !off);
    }
  }

  /* ========================================================= tool tray == */

  /**
   * Contextual tools for an activity (foods, clothes, bath toys …).
   *   ui.setTools([{ id:'bottle', icon:'bottle' }, { id:'apple', icon:'apple' }],
   *               (id, el) => …)
   */
  setTools(items = [], onPick) {
    const tray = this.els.ctxTray;
    if (!tray) return;
    tray.innerHTML = '';
    /* Five is the ceiling a four-year-old can hold at once (rubric §4 #130),
       and the care bar already spends five. A contextual tray that hands over
       more is a caller bug, not a layout problem — so it is clamped here
       rather than wrapped into a second row over the character. */
    for (const item of items.slice(0, MAX_TOOLS)) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'ctx-btn' + (item.selected ? ' is-selected' : '');
      btn.dataset.id = item.id;
      if (item.label) btn.setAttribute('aria-label', item.label);
      if (item.color) btn.style.background = item.color;
      btn.innerHTML = item.svg || icon(item.icon || 'star');
      btn.setAttribute('aria-pressed', item.selected ? 'true' : 'false');
      this._bindPress(btn, () => {
        this._sfx('tap');
        for (const b of $$('.ctx-btn', tray)) {
          const selected = b === btn;
          b.classList.toggle('is-selected', selected);
          b.setAttribute('aria-pressed', selected ? 'true' : 'false');
        }
        onPick?.(item.id, btn);
      });
      tray.appendChild(btn);
    }
    this.els.hud.classList.toggle('has-tools', tray.children.length > 0);
  }

  selectTool(id) {
    for (const b of $$('.ctx-btn', this.els.ctxTray)) {
      const selected = b.dataset.id === id;
      b.classList.toggle('is-selected', selected);
      b.setAttribute('aria-pressed', selected ? 'true' : 'false');
    }
  }

  clearTools() {
    if (this.els.ctxTray) this.els.ctxTray.innerHTML = '';
    this.els.hud?.classList.remove('has-tools');
  }

  /* ============================================================== misc == */

  /** Show or hide the whole HUD (also used by the screenshot harness). */
  setHud(visible) {
    if (!this.els?.hud) return;
    this.els.hud.classList.toggle('is-on', !!visible);
    this.els.hud.classList.toggle('is-off', !visible);
  }

  showRecovery(message, { reload = false } = {}) {
    let screen = document.getElementById('recovery-screen');
    if (!screen) {
      screen = document.createElement('div');
      screen.id = 'recovery-screen';
      screen.className = 'recovery-screen';
      screen.setAttribute('role', 'status');
      screen.setAttribute('aria-live', 'assertive');
      document.body.appendChild(screen);
    }
    screen.replaceChildren();
    const label = document.createElement('span');
    label.textContent = message;
    screen.appendChild(label);
    screen.style.pointerEvents = reload ? 'auto' : 'none';
    if (reload) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'boot-error__retry';
      button.textContent = 'もういちど よみこむ';
      button.addEventListener('click', () => location.reload(), { once: true });
      screen.appendChild(button);
    }
    screen.classList.add('is-on');
  }

  hideRecovery() {
    const screen = document.getElementById('recovery-screen');
    screen?.classList.remove('is-on');
    if (screen) screen.style.pointerEvents = 'none';
  }

  _paintSound() {
    const muted = !!this.state.muted;
    const holder = this.els.soundBtn?.firstElementChild;
    if (holder) holder.innerHTML = icon(muted ? 'speakerOff' : 'speakerOn');
    this.els.soundBtn?.setAttribute('aria-label', muted ? 'おとを だす' : 'おとを けす');
    try { this.app.audio?.setMuted?.(muted); } catch { /* audio may not be up yet */ }
  }

  _unlockAudio() {
    this._audioUnlocked = true;
    // iOS may suspend an already-unlocked context after backgrounding. Trying
    // again on every real gesture is cheap and is the only reliable recovery.
    try { this.app.audio?.unlock?.(); } catch { /* ignore */ }
    try { this.app.audio?.setMuted?.(!!this.state.muted); } catch { /* ignore */ }
  }

  _sfx(name, opts) {
    if (this.harness) return;
    try { this.app.audio?.play?.(name, opts); } catch { /* sounds are optional */ }
  }

  /** Screen-space centre of a DOM element. */
  _elCenter(el) {
    if (!el) return null;
    const r = el.getBoundingClientRect();
    if (!r.width && !r.height) return null;
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  /** Convert an Object3D / Vector3 / screen point into screen pixels. */
  _toScreen(src) {
    if (!src) return null;
    if (typeof src.x === 'number' && typeof src.y === 'number' && src.z === undefined) {
      return { x: src.x, y: src.y };                       // already a screen point
    }
    const cam = this.app.camera;
    const canvas = this.app.renderer?.domElement;
    if (!cam || !canvas) return null;
    const p = this._v;
    if (typeof src.getWorldPosition === 'function') src.getWorldPosition(p);
    else if (typeof src.z === 'number') p.set(src.x, src.y, src.z);
    else return null;
    p.project(cam);
    return {
      x: (p.x * 0.5 + 0.5) * (canvas.clientWidth || innerWidth),
      y: (-p.y * 0.5 + 0.5) * (canvas.clientHeight || innerHeight)
    };
  }
}

/* Labels come from game code, but never trust a string with innerHTML. */
function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

export { ACTIVITY_ICON, ACTIVITY_LABEL };
export default UI;
