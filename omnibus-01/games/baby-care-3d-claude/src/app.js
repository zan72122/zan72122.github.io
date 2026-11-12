/* ============================================================================
 * app.js — application shell
 * ----------------------------------------------------------------------------
 * Owns the scene graph, the camera rig, the frame loop and the harness API.
 * Gameplay lives in scenes registered through `registerActivity`; this file
 * knows nothing about feeding or bathing beyond "show me activity X".
 * ========================================================================== */

import * as THREE from 'three';
import { RenderPipeline, detectTier } from './engine/render.js';
import { LightingRig } from './engine/lighting.js';
import { CameraRig } from './engine/camera.js';
import { Room } from './world/room.js';
import { Baby } from './character/baby.js';
import { PhysicsWorld } from './engine/physics.js';
import { FX } from './engine/fx.js';
import { Audio } from './engine/audio.js';
import { installAppLifecycle } from './engine/app-lifecycle.js';
import { compileActivityIncrementally } from './engine/activity-compiler.js';
import { PerformanceTelemetry } from './engine/performance-telemetry.js';
import { SerialTaskQueue } from './engine/task-queue.js';
import { collectTransientSceneNodes } from './engine/scene-census.js';
import { detectTouchEnvironment } from './engine/mobile-policy.js';
import { UI } from './ui/ui.js';
import { State } from './game/state.js';
import {
  ACTIVITIES,
  PRELOAD_ORDER,
  navIdForActivity
} from './activities/index.js';
import {
  CadenceScheduler,
  FrameBudgetController,
  PERFORMANCE_CONFIG,
  ShadowUpdateGate,
  initialQuality,
  isWarmResourceGrowth,
  roomDetailFor
} from './engine/performance.js';
import { installHarness } from './harness.js';

const HARNESS = new URLSearchParams(location.search).has('harness');

class App {
  constructor({ audioContext = null, onProgress = null } = {}) {
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();
    this.activity = null;
    this.activityName = '';
    // Runtime activities outnumber the five child-facing navigation choices.
    // Keep both identities explicit so care children retain the care HUD/room
    // context without disguising which Activity actually owns the scene.
    this.activityContext = '';
    this.time = 0;
    this.mode = HARNESS ? 'harness' : 'title';
    this._paused = false;
    this._audioContext = audioContext;
    this._onProgress = onProgress;
    this._pageHidden = document.hidden;
    this._contextLost = false;
    this.touchEnvironment = detectTouchEnvironment();
    this._frameAccumulator = 0;
    this._lastRenderedAt = 0;
    this._lastFrameCompletedAt = performance.now();
    this._scheduler = new CadenceScheduler(
      this.touchEnvironment ? PERFORMANCE_CONFIG.mobileRates : undefined,
      this.mode
    );
    this._activityTransitions = new SerialTaskQueue();
  }

  async init() {
    const canvas = document.getElementById('game-canvas');
    this._reportProgress('おへやを じゅんび中', 0.28);
    this.tier = detectTier();
    this.quality = Math.min(
      initialQuality(this.tier),
      this.touchEnvironment ? 1 : 2
    );
    this._shadowGate = new ShadowUpdateGate(undefined, {
      mobile: this.touchEnvironment
    });
    this._governor = new FrameBudgetController({
      initial: this.quality,
      maximum: this.touchEnvironment ? 1 : 2,
      allowUpgrade: !this.touchEnvironment,
      rapidDowngrade: this.touchEnvironment,
      onChange: quality => this._applyPerformance(quality)
    });

    this.camera = new THREE.PerspectiveCamera(
      38, window.innerWidth / window.innerHeight, 0.1, 60);
    this.camera.position.set(0, 1.55, 3.5);

    this.pipeline = new RenderPipeline(canvas, this.scene, this.camera, this.tier, {
      touchEnvironment: this.touchEnvironment
    });
    this.renderer = this.pipeline.renderer;
    this._reportProgress('おへやを じゅんび中', 0.42);

    this.lighting = new LightingRig(this.renderer, this.scene, {
      touchEnvironment: this.touchEnvironment
    });
    this.lighting.apply('day');

    this.cameraRig = new CameraRig(this.camera, this.pipeline);

    this.physics = new PhysicsWorld();
    this.fx = new FX(this.scene, this.tier);
    this.audio = new Audio(this._audioContext ? { context: this._audioContext } : {});
    this.state = new State();

    this.room = new Room({ tier: this.tier, fx: this.fx });
    this.scene.add(this.room.group);

    this.baby = new Baby({
      tier: this.tier,
      state: this.state,
      touchEnvironment: this.touchEnvironment
    });
    this.scene.add(this.baby.group);

    // Every `space:'subject'` camera preset is composed around this transform
    // unless an activity claims the rig with cameraRig.setSubject().
    this.cameraRig.setDefaultSubject(this.baby.group);

    this.ui = new UI({ app: this });
    await this.ui.init();
    this.performanceTelemetry = new PerformanceTelemetry(this);
    installAppLifecycle(this, canvas);

    this.ctx = {
      app: this,
      scene: this.scene,
      camera: this.camera,
      cameraRig: this.cameraRig,
      renderer: this.renderer,
      pipeline: this.pipeline,
      lighting: this.lighting,
      physics: this.physics,
      fx: this.fx,
      audio: this.audio,
      ui: this.ui,
      state: this.state,
      room: this.room,
      baby: this.baby,
      tier: this.tier,
      touchEnvironment: this.touchEnvironment
    };
    this.ctx.activityId = '';
    this.ctx.navId = '';

    // Soft particles need scene depth. Feed them the *resolved* depth target,
    // never the composer's shared attachment — sampling that would recreate
    // the feedback loop the resolve pass exists to break.
    this.fx.setDepthTexture?.(
      this.pipeline.depthResolve.texture, this.camera.near, this.camera.far);

    this._reportProgress('おへやを つくっているよ', 0.58);
    this.room.build(this.ctx);
    this._reportProgress('あかちゃんを じゅんび中', 0.72);
    await this.baby.build(this.ctx);

    // The saved / default outfit is authoritative, not whatever baby.build()
    // happened to hardcode. Push it once now and subscribe so every later
    // change — a dress-up pick, a load(), the harness' reset() — reaches the
    // rig. `State.setOutfit` is a diff and stays silent on a no-op, so the
    // write-back from `Baby.setOutfit` cannot loop.
    this.baby.setOutfit(this.state.outfit);
    this.state.on('outfit', ({ outfit }) => this.baby.onState({ outfit }));

    // KHR_parallel_shader_compile keeps shader preparation from monopolising
    // the main thread on implementations that expose it.
    this._reportProgress('もうすぐ あそべるよ', 0.9);
    await this.renderer.compileAsync(this.scene, this.camera);

    this._loop = this._loop.bind(this);
    this.setMode(this.mode);
    this.renderer.setAnimationLoop(this._loop);
    this.preloadNext();
    this._reportProgress('あそべるよ', 1);

    if (HARNESS) installHarness(this);
    return this;
  }

  _reportProgress(label, value) {
    this._onProgress?.({ label, value });
  }

  /* ------------------------------------------------------- activities --- */

  _loadActivityClass(def) {
    // Do not cache a rejection forever: a transient network/cache failure must
    // remain retryable when the child taps the activity again.
    def.classPromise ||= def.load().catch(error => {
      def.classPromise = null;
      throw error;
    });
    return def.classPromise;
  }

  preloadActivity(name) {
    const def = ACTIVITIES[name];
    return def ? this._loadActivityClass(def) : Promise.reject(new Error(`unknown activity: ${name}`));
  }

  preloadNext(current = '') {
    // Mobile imports are allowed only while the title screen is genuinely
    // idle. Timer fallbacks can fire in the middle of play and monopolise
    // Safari's main thread while it parses the next activity.
    if (this.touchEnvironment && this.mode !== 'title') return;
    const currentIndex = PRELOAD_ORDER.indexOf(current);
    const name = PRELOAD_ORDER[(currentIndex + 1) % PRELOAD_ORDER.length];
    const def = ACTIVITIES[name];
    if (!def || def.classPromise || this._preloadPending?.has(name)) return;
    const idle = window.requestIdleCallback;
    if (this.touchEnvironment && !idle) return;
    (this._preloadPending ||= new Set()).add(name);
    const schedule = idle || ((fn) => setTimeout(fn, 80));
    schedule(() => {
      if (this.touchEnvironment && this.mode !== 'title') {
        this._preloadPending.delete(name);
        return;
      }
      this.preloadActivity(name).catch(error => {
        console.warn(`[activity] preload failed: ${name}`, error);
      }).finally(() => {
        this._preloadPending.delete(name);
        // Walk the registry one true-idle callback at a time. This finishes
        // module parsing on the title screen without creating a play-time
        // timer fallback.
        if (this.touchEnvironment && this.mode === 'title') {
          this.preloadNext(name);
        }
      });
    }, this.touchEnvironment ? {} : { timeout: 2500 });
  }

  setActivity(name) {
    const def = ACTIVITIES[name];
    if (!def) return Promise.reject(new Error('unknown activity: ' + name));
    return this._activityTransitions.run(() => this._setActivity(name, def));
  }

  async _setActivity(name, def) {
    if (this.activityName === name && this.activity) return;
    this.ui?.cancelAssist?.({ transition: true });
    const navId = navIdForActivity(name);

    if (this.activity) {
      // Keep a stable local reference across the await. The queue guarantees
      // no second transition can clear `this.activity` underneath this one.
      const outgoing = this.activity;
      await outgoing.exit?.();
      outgoing.dispose?.();
      this.activity = null;
      this._auditDispose();
    }

    // Hand the camera back before the next scene claims it: any preset the
    // outgoing activity re-composed around its own props is dropped, and
    // subject-space presets fall back to the baby root.
    this.cameraRig.restorePresets();
    this.cameraRig.setSubject(null);

    this.activityName = name;
    this.activityContext = navId;
    if (this.ctx) {
      this.ctx.activityId = name;
      this.ctx.navId = navId;
    }
    this._preBuild = this._resourceSnapshot();
    const ActivityClass = await this._loadActivityClass(def);
    const inst = new ActivityClass(this.ctx);
    try {
      await inst.build?.();
      // Compile only the incoming activity against the live scene's lights.
      // Traversing and preparing the entire nursery again at every switch made
      // Safari revisit hundreds of unrelated materials.
      const compileRoot = inst.root || inst.group;
      if (this.touchEnvironment) {
        await compileActivityIncrementally({
          renderer: this.renderer,
          root: compileRoot,
          camera: this.camera,
          targetScene: this.scene
        });
      } else {
        await this.renderer.compileAsync(
          compileRoot || this.scene,
          this.camera,
          compileRoot ? this.scene : null
        );
      }
      await inst.enter?.();
    } catch (err) {
      // A partially built activity owns whatever it created. Give it the same
      // teardown path as a normal scene change, then leave the queue usable.
      inst.dispose?.();
      this._auditDispose();
      this.activityName = '';
      this.activityContext = '';
      if (this.ctx) {
        this.ctx.activityId = '';
        this.ctx.navId = '';
      }
      throw err;
    }
    this.activity = inst;
    document.documentElement.dataset.activeActivity = name;
    document.documentElement.dataset.activeNav = navId;

    this.lighting.transitionTo(def.mood || 'day', HARNESS ? 0.001 : 1.4);
    this.cameraRig.goTo(def.camera || 'wide', HARNESS ? 0 : 1.2);
    this.ui.setActivity(name, navId);
    this.room.setRenderBudget?.({
      detail: roomDetailFor(this.mode, this.quality),
      activity: navId
    });
    this._shadowGate.request();
    this.preloadNext(name);
  }

  /* ---------------------------------------------- build/dispose auditing - */

  /**
   * Cheap census of everything an activity can leak: GPU objects the renderer
   * is holding and nodes still hanging off the scene graph. `dispose()` is
   * only correct if every one of these returns to what it was before
   * `build()` ran, so `setActivity` samples them either side of the teardown
   * and files the delta on `app.leakLog` (and warns in the console).
   *
   * `renderer.info.render.*` is deliberately *not* used here: it is per-frame
   * and depends on which camera is live, so it says nothing about ownership.
   */
  _resourceSnapshot() {
    const m = this.renderer.info.memory;
    const nodeSet = new Set(collectTransientSceneNodes(this.scene));
    return {
      name: this.activityName,
      nodes: nodeSet.size,
      nodeSet,
      geometries: m.geometries,
      textures: m.textures,
      programs: this.renderer.info.programs?.length ?? 0
    };
  }

  /** Compare the post-dispose census against the one taken before build(). */
  _auditDispose() {
    const before = this._preBuild;
    if (!before) return;
    this._preBuild = null;
    const after = this._resourceSnapshot();
    const delta = {
      activity: before.name,
      nodes: after.nodes - before.nodes,
      geometries: after.geometries - before.geometries,
      textures: after.textures - before.textures
    };
    const addedNodes = [...after.nodeSet].filter((node) => !before.nodeSet.has(node));
    (this.leakLog ||= []).push(delta);
    // Mirror the latest scene-node result onto an invisible DOM diagnostic so
    // browser regression checks can assert disposal without main-world access.
    document.documentElement.dataset.lastActivityLeak =
      `${delta.activity}:${delta.nodes}`;
    document.documentElement.dataset.lastActivityLeakNodes =
      addedNodes.map((node) => node.name || node.type || '(unnamed)').join(',');
    document.documentElement.dataset.lastActivityResources =
      `${delta.activity}:${delta.geometries}:${delta.textures}`;
    const priorVisits = this._disposedActivityVisits?.get(delta.activity) || 0;
    // The first two disposals are warm-up passes: renderer.info only counts a
    // texture after its first actual upload, so a late animation can settle on
    // the second visit without being a leak. Growth from the third disposal
    // onward is monotonic resource growth and is actionable.
    if (isWarmResourceGrowth(delta, priorVisits)) {
      (this.resourceGrowthLog ||= []).push(delta);
      document.documentElement.dataset.activityResourceGrowth =
        `${delta.activity}:${delta.nodes}:${delta.geometries}:${delta.textures}`;
      console.warn(
        `activity "${delta.activity}" grew resources after warm-up`,
        delta
      );
    }
    (this._disposedActivityVisits ||= new Map())
      .set(delta.activity, priorVisits + 1);
    // Geometry/texture counts may legitimately settle a little higher the
    // first time a scene runs — materials.js and textures.js memoise shared
    // surfaces on demand. Outfit meshes are durable character state and are
    // excluded by the census. Every other scene node must return to its
    // pre-build total; anything left hanging off it is a hard leak.
    if (delta.nodes !== 0) {
      console.warn(`activity "${before.name}" left ${delta.nodes} scene nodes behind on dispose`);
    }
  }

  /* ------------------------------------------------------------- frame -- */

  setMode(mode) {
    const next = HARNESS ? 'harness' : mode;
    if (!['title', 'play', 'harness'].includes(next)) throw new Error(`unknown app mode: ${next}`);
    this.mode = next;
    this._scheduler.setMode(next);
    this._governor.setMode(next, performance.now());
    this._frameAccumulator = 0;
    this._lastRenderedAt = 0;
    this.clock.getDelta();
    this._applyPerformance(this.quality);
  }

  _applyPerformance(quality) {
    this.quality = quality;
    document.documentElement.dataset.renderQuality =
      quality === 2 ? 'high' : quality === 1 ? 'balanced' : 'low';
    document.documentElement.dataset.targetFps = String(this._targetFps());
    this.pipeline?.setPerformanceBudget?.({ mode: this.mode, quality });
    this._shadowGate?.setBudget(this.mode, quality);
    this.room?.setRenderBudget?.({
      detail: roomDetailFor(this.mode, quality),
      activity: this.mode === 'title' ? 'title' : this.activityContext
    });
  }

  step(dt) {
    this.time += dt;
    const run = (name, callback) => this._scheduler.run(name, dt, callback);
    let shadowDirty = false;
    shadowDirty = run('lighting', elapsed => {
      this.lighting.update(elapsed);
      this.pipeline.setGrade(this.lighting.currentGrade());
    }) || shadowDirty;
    run('camera', elapsed => this.cameraRig.update(elapsed));
    run('physics', elapsed => this.physics.step(elapsed));
    shadowDirty = run('room', elapsed => {
      this.room.update(elapsed, this.ctx);
    }) || shadowDirty;
    shadowDirty = run('baby', elapsed => {
      this.baby.update(elapsed, this.ctx);
    }) || shadowDirty;
    shadowDirty = run('activity', elapsed => {
      this.activity?.update?.(elapsed);
    }) || shadowDirty;
    if (shadowDirty) this._shadowGate.request();
    run('fx', elapsed => this.fx.update(elapsed));
    run('ui', elapsed => this.ui.update(elapsed));
    run('focus', () => {
      const focus = this.baby.focusPoint();
      this.lighting.aimAt(focus);
      this.pipeline.focusOn(focus, this.cameraRig.focusRange);
    });
  }

  render(dt, forceShadow = false) {
    const now = performance.now();
    if (this._shadowGate.consume(now, forceShadow)) {
      this.renderer.shadowMap.needsUpdate = true;
    }
    this.performanceTelemetry?.beginGpuFrame();
    try {
      this.pipeline.render(dt);
    } finally {
      this.performanceTelemetry?.endGpuFrame();
    }
    this._lastFrameCompletedAt = performance.now();
    if (this._stallRecovery && !this._contextLost) {
      this._stallRecovery = false;
      this._stallReported = false;
      document.documentElement.dataset.renderStallRecovered = 'true';
      this.ui?.hideRecovery?.();
    }
  }

  _targetFps() {
    if (this.mode === 'title') return PERFORMANCE_CONFIG.titleFps;
    if (!this.touchEnvironment || this.mode === 'harness') return 0;
    return this.quality === 0
      ? PERFORMANCE_CONFIG.mobileFallbackFps
      : PERFORMANCE_CONFIG.mobilePlayFps;
  }

  _loop() {
    if (this._paused) return;
    if (this._harnessDriven) return;   // harness advances the clock itself
    this._frameAccumulator += this.clock.getDelta();
    const targetFps = this._targetFps();
    const minimum = targetFps > 0 ? 1 / targetFps : 0;
    if (this._frameAccumulator + 1e-9 < minimum) return;
    const dt = Math.min(this._frameAccumulator, 1 / 20);
    this._frameAccumulator = minimum > 0
      ? Math.max(0, this._frameAccumulator - minimum)
      : 0;
    const now = performance.now();
    const frameMs = this._lastRenderedAt ? now - this._lastRenderedAt : dt * 1000;
    if (this._lastRenderedAt) this._governor.sample(frameMs, now);
    this._lastRenderedAt = now;
    const cpuStartedAt = performance.now();
    this.step(dt);
    this.render(dt);
    const cpuMs = performance.now() - cpuStartedAt;
    this.performanceTelemetry?.recordFrame({ frameMs, cpuMs });
    if (this.touchEnvironment && this.mode === 'play' && cpuMs >= 2000) {
      this._reportRenderStall(cpuMs);
    }
  }

  _reportRenderStall(durationMs = 0) {
    if (this._stallReported) return;
    this._stallReported = true;
    this._stallRecovery = true;
    document.documentElement.dataset.renderStall = String(Math.round(durationMs));
    this.performanceTelemetry?.noteStall();
    this.ui?.showRecovery?.('うごきが とまっています', { reload: true });
  }
}

export function createApp(options) {
  return new App(options);
}

export { App };
