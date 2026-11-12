/* 各フェーズの実装(2D版 scenes.js のフロー・閾値を3Dへ移植)
   TITLE → MIX → OVEN → CREAM → TOPPING → CANDLE → CELEBRATE */
import * as THREE from 'three';
import { tween, delay } from './tween.js';
import { makeTopping, makeCandle } from './objects.js';
import * as HUD from './hud.js';

const CREAMS = [
  { hex: '#fff7f0', shadeHex: '#e9d6c9', rgb: 'rgb(255,247,240)', shade: 'rgb(229,205,190)' },
  { hex: '#ffc1d9', shadeHex: '#f29ebf', rgb: 'rgb(255,193,217)', shade: 'rgb(238,148,182)' },
  { hex: '#a9744d', shadeHex: '#8a5a39', rgb: 'rgb(169,116,77)', shade: 'rgb(133,87,55)' },
  { hex: '#c3e9f9', shadeHex: '#9cd3ec', rgb: 'rgb(195,233,249)', shade: 'rgb(150,208,233)' }
];
const TOPS = ['strawberry', 'cherry', 'grape', 'kiwi', 'choco', 'star', 'heart'];

export function buildPhases(ctx) {
  const { scene, camera, audio, fx, state, ST, CAKE, COUNTER_Y, el, popIn } = ctx;
  const ui = html => { ctx.uiLayer.innerHTML = html; };
  const uiAdd = html => { ctx.uiLayer.insertAdjacentHTML('beforeend', html); };

  ctx.CAM.celebrate = {
    pos: [ST.deco, CAKE.topY + 0.35, 0.95],
    tgt: [ST.deco, CAKE.topY - 0.02, 0]
  };

  const _w = new THREE.Vector3();
  function stageOf(x, y, z) {
    return ctx.worldToStage(_w.set(x, y, z));
  }
  function distStage(stagePt, wx, wy, wz) {
    const s = stageOf(wx, wy, wz);
    return Math.hypot(stagePt.x - s.x, stagePt.y - s.y);
  }
  const bowlTop = () => new THREE.Vector3(ST.mix, COUNTER_Y + 0.16, 0);
  const cakeTop = () => new THREE.Vector3(CAKE.x, CAKE.topY + 0.02, 0);
  const colA = new THREE.Color(), colB = new THREE.Color();

  /* ---------------- 3Dドラッグ共通 ---------------- */
  let drag = null;       // {group}
  const dragPlane = new THREE.Plane();
  const camDir = new THREE.Vector3();
  const hitV = new THREE.Vector3();

  function setDragPos(info) {
    if (!drag) return;
    camera.getWorldDirection(camDir);
    dragPlane.setFromNormalAndCoplanarPoint(camDir, cakeTop());
    if (ctx.rayOnPlane(info.ndc, dragPlane, hitV)) {
      drag.group.position.copy(hitV);
    }
  }
  function startDrag(group, info) {
    group.userData.dynamic = true;
    group.scale.setScalar(1.12);
    scene.add(group);
    drag = { group };
    setDragPos(info);
    audio.tap();
  }
  function dropFail() {
    const g = drag.group;
    drag = null;
    audio.shrink();
    tween(0.28, t => g.scale.setScalar(1.12 * (1 - t)), {
      done: () => scene.remove(g)
    });
  }
  function bounceIn(group, s = 1) {
    tween(0.4, t => group.scale.setScalar(s * (1.35 - 0.35 * t)), { ease: 'outBounce' });
  }

  /* ============================================================ TITLE */

  const title = {
    cam: 'title',
    enter() {
      ctx.sample.visible = true;
      ui(HUD.titleBanner() +
         HUD.sparkle(180, 220, 1.3, 0) + HUD.sparkle(1100, 200, 1.1, 0.4) +
         HUD.sparkle(950, 90, 0.8, 0.8) + HUD.sparkle(320, 100, 0.9, 1.1) +
         HUD.roundBtn({ id: 'btn-start', x: 1040, y: 565, r: 95,
                        icon: HUD.iconArrow(2.2), cls: 'pulse glow' }));
      ctx.setHint(() => ({ type: 'tap', x: 1040, y: 565 }));
    },
    update(dt, elapsed) {
      camera.position.x = ctx.CAM.title.pos[0] + Math.sin(elapsed * 0.25) * 0.16;
      camera.lookAt(ctx.camTgt);
    },
    onDown(info, act) {
      if (act === 'btn-start') {
        audio.fanfare();
        fx.sparkleBurst(cakeTop(), 12, 0.25);
        ctx.sample.visible = false;
        ctx.goto('mix');
      }
    }
  };

  /* ============================================================ MIX(まぜる) */

  const mix = {
    cam: 'mix',
    enter() {
      this.phase = 'add';
      this.remaining = ['egg', 'milk', 'flour', 'sugar'];
      this.stirTotal = 0;
      this.stirring = false;
      this.lastP = null;
      ctx.batter.dome.material.color.set('#cfb083');
      ui(HUD.progress(0) + HUD.homeButton());
      ctx.setHint(() => {
        if (this.phase === 'add' && this.remaining.length) {
          const ing = ctx.ingredients.find(i => i.id === this.remaining[0]);
          const s = ctx.worldToStage(_w.copy(ing.group.position).setY(ing.group.position.y + 0.06));
          return { type: 'tap', x: s.x, y: s.y };
        }
        if (this.phase === 'stir') {
          const s = ctx.worldToStage(bowlTop());
          return { type: 'circle', x: s.x, y: s.y, r: 140 };
        }
        return null;
      });
    },

    addIngredient(ing) {
      const i = this.remaining.indexOf(ing.id);
      if (i < 0) return;
      this.remaining.splice(i, 1);
      audio.boing();
      const from = ing.group.position.clone();
      const to = new THREE.Vector3(ST.mix, COUNTER_Y + 0.13, 0);
      tween(0.7, t => {
        ing.group.position.lerpVectors(from, to, t);
        ing.group.position.y += Math.sin(t * Math.PI) * 0.34;
        ing.group.scale.setScalar(1 - t * 0.6);
        ing.group.rotation.z = t * 0.8;
      }, {
        ease: 'inOut',
        done: () => {
          ing.group.visible = false;
          ing.group.rotation.z = 0;
          audio.plop();
          fx.sparkleBurst(bowlTop(), 5, 0.07);
          const n = 4 - this.remaining.length;
          ctx.batter.group.visible = true;
          const s = 0.5 + n * 0.125;
          ctx.batter.dome.scale.set(s, 0.34 * s, s);
          if (!this.remaining.length) delay(0.4, () => this.startStir());
        }
      });
    },

    startStir() {
      this.phase = 'stir';
      audio.success();
      ctx.spoon.visible = true;
      ctx.spoon.position.set(ST.mix + 0.1, COUNTER_Y + 0.1, 0);
      ctx.resetIdle();
    },

    onDown(info) {
      if (this.phase === 'add') {
        for (const ing of ctx.ingredients) {
          if (!ing.group.visible) continue;
          if (this.remaining.indexOf(ing.id) < 0) continue;
          const p = ing.group.position;
          if (distStage(info.stage, p.x, p.y + 0.06, p.z) < 85) {
            this.addIngredient(ing);
            return;
          }
        }
        return;
      }
      if (this.phase === 'stir' && distStage(info.stage, ST.mix, COUNTER_Y + 0.1, 0) < 220) {
        this.stirring = true;
        this.lastP = info.stage;
        audio.stirStart();
      }
    },

    onMove(info) {
      if (this.phase !== 'stir' || !this.stirring) return;
      const d = Math.hypot(info.stage.x - this.lastP.x, info.stage.y - this.lastP.y);
      this.lastP = info.stage;
      this.stirTotal += d;
      audio.stirSpeed(Math.min(1, d / 26));

      const c = ctx.worldToStage(bowlTop());
      const a = Math.atan2((info.stage.y - c.y) * 2.2, info.stage.x - c.x);
      ctx.spoon.position.set(ST.mix + Math.cos(a) * 0.1, COUNTER_Y + 0.1, Math.sin(a) * 0.07);
      ctx.spoon.rotation.y = -a;

      ctx.batter.tex.offset.x -= d * 0.0008;
      const t = Math.min(1, this.stirTotal / 2600);
      ctx.batter.dome.material.color.lerpColors(colA.set('#cfb083'), colB.set('#ffffff'), t);
      ctx.batter.lumps.children.forEach(l => l.scale.setScalar(Math.max(0.001, 1 - t * 1.1)));
      if (t >= 1) this.finish();
    },

    onUp() {
      if (this.stirring) {
        this.stirring = false;
        audio.stirStop();
      }
    },

    finish() {
      if (this.phase === 'done') return;
      this.phase = 'done';
      this.stirring = false;
      audio.stirStop();
      audio.success();
      fx.sparkleBurst(bowlTop(), 12, 0.18);
      delay(0.9, () => ctx.goto('oven'));
    },

    update(dt, elapsed) {
      // 次に入れる材料がぴょこぴょこ跳ねて誘導
      if (this.phase === 'add' && this.remaining.length) {
        const next = this.remaining[0];
        for (const ing of ctx.ingredients) {
          if (!ing.group.visible || this.remaining.indexOf(ing.id) < 0) continue;
          ing.group.position.y = ing.home.y +
            (ing.id === next ? Math.abs(Math.sin(elapsed * 3.4)) * 0.022 : 0);
        }
      }
    },

    exit() { audio.stirStop(); }
  };

  /* ============================================================ OVEN(やく) */

  const BAKE_TIME = 6;

  const oven = {
    cam: 'oven',
    enter() {
      this.phase = 'place';
      this.bakeT = 0;
      this.sizzleT = 0;
      ctx.pan.group.visible = true;
      tween(0.7, t => { ctx.oven.door.rotation.x = t * 1.35; }, { delay: 0.6 });
      ui(HUD.progress(1) + HUD.homeButton());
      ctx.setHint(() => {
        if (this.phase === 'place') {
          const p = ctx.pan.group.position;
          const s = stageOf(p.x, p.y + 0.04, p.z);
          return { type: 'tap', x: s.x, y: s.y };
        }
        if (this.phase === 'ready') {
          const k = ctx.oven.knobWorld();
          const s = ctx.worldToStage(k);
          return { type: 'tap', x: s.x, y: s.y };
        }
        return null;
      });
    },

    onDown(info) {
      if (this.phase === 'place') {
        const p = ctx.pan.group.position;
        if (distStage(info.stage, p.x, p.y + 0.04, p.z) < 100) {
          this.phase = 'closing';
          audio.boing();
          const from = p.clone();
          const to = ctx.oven.insidePos.clone().setY(COUNTER_Y + 0.085);
          tween(0.85, t => {
            ctx.pan.group.position.lerpVectors(from, to, t);
            ctx.pan.group.position.y += Math.sin(t * Math.PI) * 0.3;
            ctx.pan.group.scale.setScalar(1 - t * 0.06);
          }, {
            ease: 'inOut',
            done: () => {
              audio.plop();
              tween(0.55, t => { ctx.oven.door.rotation.x = 1.35 * (1 - t); }, {
                delay: 0.25,
                done: () => {
                  audio.click();
                  this.phase = 'ready';
                  ctx.resetIdle();
                }
              });
            }
          });
        }
        return;
      }
      if (this.phase === 'ready') {
        const k = ctx.oven.knobWorld();
        if (distStage(info.stage, k.x, k.y, k.z) < 70) {
          this.phase = 'bake';
          audio.click();
          tween(0.3, t => { ctx.oven.knob.rotation.z = t * 1.6; });
          ctx.oven.lamp.material.emissive.set('#ff8a30');
          ctx.oven.knobBase.material.emissive.set('#000000');
        }
        return;
      }
      if (this.phase === 'bake') {
        fx.steam(new THREE.Vector3(ST.oven + (Math.random() - 0.5) * 0.3, COUNTER_Y + 0.56, -0.1));
        audio.steam();
      }
    },

    update(dt, elapsed) {
      if (this.phase === 'place') {
        const s = 1 + Math.sin(elapsed * 5) * 0.05;
        ctx.pan.group.scale.setScalar(s);
      } else if (this.phase === 'ready') {
        const k = 0.45 + Math.sin(elapsed * 6) * 0.4;
        ctx.oven.knobBase.material.emissive.setRGB(k, k * 0.12, k * 0.08);
      } else if (this.phase === 'bake') {
        this.bakeT += dt;
        const t = Math.min(1, this.bakeT / BAKE_TIME);
        ctx.oven.innerLight.intensity = 2.2 + Math.sin(elapsed * 13) * 0.5;
        ctx.oven.heater.material.color.lerpColors(colA.set('#1d0f18'), colB.set('#ff7a1a'),
          Math.min(1, t * 3) * (0.8 + Math.sin(elapsed * 9) * 0.2));
        ctx.pan.dome.scale.set(1 + t * 0.12, 0.32 + t * 0.5, 1 + t * 0.12);
        ctx.pan.dome.material.color.lerpColors(colA.set('#f3d49a'), colB.set('#cf8a45'), t);
        this.sizzleT += dt;
        if (this.sizzleT > 0.9) {
          this.sizzleT = 0;
          audio.sizzle();
          fx.steam(new THREE.Vector3(ST.oven + (Math.random() - 0.5) * 0.3, COUNTER_Y + 0.56, -0.12));
        }
        if (t >= 1) this.finishBake();
      }
    },

    finishBake() {
      this.phase = 'done';
      audio.ding();
      ctx.oven.innerLight.intensity = 0;
      ctx.oven.heater.material.color.set('#1d0f18');
      ctx.oven.lamp.material.emissive.set('#3fae5c');
      tween(0.6, t => { ctx.oven.door.rotation.x = t * 1.35; }, {
        delay: 0.5,
        done: () => {
          for (let i = 0; i < 4; i++) {
            fx.steam(ctx.oven.insidePos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.2, 0.1, 0.1)));
          }
          // 焼き上がったケーキがスタンドへ
          ctx.cake.visible = true;
          const from = ctx.oven.insidePos.clone().setY(COUNTER_Y + 0.09);
          const to = new THREE.Vector3(CAKE.x, CAKE.standTop, 0);
          ctx.cake.position.copy(from);
          ctx.pan.group.visible = false;
          audio.boing();
          tween(1.0, t => {
            ctx.cake.position.lerpVectors(from, to, t);
            ctx.cake.position.y += Math.sin(t * Math.PI) * 0.42;
          }, {
            ease: 'inOut',
            done: () => {
              audio.success();
              fx.sparkleBurst(cakeTop(), 12, 0.2);
              delay(0.5, () => ctx.goto('cream'));
            }
          });
        }
      });
    }
  };

  /* ============================================================ CREAM(ぬる) */

  const cream = {
    cam: 'deco',
    enter() {
      this.painting = false;
      this.smearT = 0;
      this.nextShown = state.painted;
      ctx.frosting.topMesh.visible = true;
      ctx.frosting.sideMesh.visible = true;
      ui(HUD.progress(2) + HUD.homeButton() + HUD.palette(CREAMS, state.creamColor) +
         (this.nextShown ? HUD.nextButton() : ''));
      ctx.setHint(() => {
        const a = stageOf(CAKE.x - 0.09, CAKE.topY + 0.01, 0.03);
        const b = stageOf(CAKE.x + 0.09, CAKE.topY + 0.01, 0.03);
        return { type: 'drag', x1: a.x, y1: a.y, x2: b.x, y2: b.y };
      });
    },

    paintHit(hit) {
      const c = CREAMS[state.creamColor];
      const n = ctx.frosting.paintAt(hit.object, hit.uv, c.rgb, c.shade);
      this.smearT += n;
      if (this.smearT > 7) { this.smearT = 0; audio.smear(); }
      state.painted = true;
    },

    showNext() {
      if (this.nextShown) return;
      this.nextShown = true;
      uiAdd(HUD.nextButton());
      popIn(el('btn-next'));
      audio.pop();
    },

    onDown(info, act) {
      if (act && act.indexOf('cream:') === 0) {
        state.creamColor = +act.slice(6);
        audio.click();
        el('pal-ring').setAttribute('cx', 380 + state.creamColor * 160);
        popIn(el('pal-' + state.creamColor));
        return;
      }
      if (act === 'btn-next') { audio.click(); ctx.goto('topping'); return; }
      const hit = ctx.raycast(info.ndc, [ctx.frosting.topMesh, ctx.frosting.sideMesh]);
      if (hit && hit.uv) {
        this.painting = true;
        this.paintHit(hit);
        audio.smear();
      }
    },

    onMove(info) {
      if (!this.painting) return;
      const hit = ctx.raycast(info.ndc, [ctx.frosting.topMesh, ctx.frosting.sideMesh]);
      if (hit && hit.uv) this.paintHit(hit);
      else ctx.frosting.endStroke();
    },

    onUp() {
      if (this.painting) {
        this.painting = false;
        ctx.frosting.endStroke();
        if (state.painted) this.showNext();
      }
    }
  };

  /* ============================================================ TOPPING(かざる) */

  function placeOnCake(group, point, upright) {
    let dx = point.x - CAKE.x, dz = point.z;
    let rad = Math.hypot(dx, dz) || 0.0001;
    if (upright || point.y > CAKE.topY - 0.012) {
      const maxR = CAKE.r - (upright ? 0.03 : 0.012);
      if (rad > maxR) { dx *= maxR / rad; dz *= maxR / rad; }
      group.position.set(CAKE.x + dx, CAKE.topY + 0.004, dz);
      group.quaternion.identity();
    } else {
      const R = CAKE.r + 0.006;
      const y = Math.min(CAKE.topY - 0.015, Math.max(CAKE.standTop + 0.02, point.y));
      group.position.set(CAKE.x + (dx / rad) * R, y, (dz / rad) * R);
      const n = new THREE.Vector3(dx / rad, 0.35, dz / rad).normalize();
      group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), n);
    }
  }

  function rootTopping(obj) {
    let n = obj;
    while (n && n !== scene) {
      if (state.toppings.indexOf(n) >= 0) return n;
      n = n.parent;
    }
    return null;
  }

  const topping = {
    cam: 'deco',
    enter() {
      this.nextShown = state.toppings.length > 0;
      ui(HUD.progress(3) + HUD.homeButton() + HUD.toppingTray(TOPS) +
         (this.nextShown ? HUD.nextButton() : ''));
      ctx.setHint(() => {
        const b = ctx.worldToStage(cakeTop());
        return { type: 'drag', x1: 190, y1: 648, x2: b.x, y2: b.y };
      });
    },

    showNext() {
      if (this.nextShown) return;
      this.nextShown = true;
      uiAdd(HUD.nextButton());
      popIn(el('btn-next'));
    },

    onDown(info, act) {
      if (act === 'btn-next') { audio.click(); ctx.goto('candle'); return; }
      if (act && act.indexOf('tray:') === 0) {
        startDrag(makeTopping(act.slice(5)), info);
        return;
      }
      // 置いたものを拾い直す
      const hit = ctx.raycast(info.ndc, state.toppings);
      if (hit) {
        const root = rootTopping(hit.object);
        if (root) {
          state.toppings.splice(state.toppings.indexOf(root), 1);
          drag = { group: root };
          root.scale.setScalar(1.12);
          setDragPos(info);
          audio.tap();
        }
      }
    },

    onMove(info) { setDragPos(info); },

    onUp(info) {
      if (!drag) return;
      const hit = ctx.raycast(info.ndc, [ctx.cakeProxy]);
      if (hit) {
        const g = drag.group;
        drag = null;
        placeOnCake(g, hit.point, false);
        state.toppings.push(g);
        if (state.toppings.length > 30) {
          scene.remove(state.toppings.shift());
        }
        audio.pop();
        bounceIn(g);
        this.showNext();
      } else {
        dropFail();
      }
    }
  };

  /* ============================================================ CANDLE(ろうそく) */

  const candle = {
    cam: 'deco',
    enter() {
      this.phase = 'place';
      ui(HUD.progress(4) + HUD.homeButton() + HUD.candleBox(!state.candles.length));
      if (state.candles.length) this.showMatch();
      ctx.setHint(() => {
        if (this.phase !== 'place') return null;
        if (!state.candles.length) {
          const b = ctx.worldToStage(cakeTop());
          return { type: 'drag', x1: 255, y1: 620, x2: b.x, y2: b.y };
        }
        return { type: 'tap', x: 1060, y: 632 };
      });
    },

    showMatch() {
      if (el('btn-match')) return;
      uiAdd(HUD.roundBtn({ id: 'btn-match', x: 1060, y: 632, r: 66, grad: 'g-redbtn',
                           icon: HUD.iconMatch(), cls: 'pulse glow' }));
      popIn(el('btn-match'));
      audio.pop();
      const box = el('candle-box-inner');
      if (box) box.classList.remove('glow', 'pulse');
    },

    onDown(info, act) {
      if (this.phase !== 'place') return;
      if (act === 'tray:candle') {
        if (state.candles.length >= 6) { audio.shrink(); return; }
        const c = makeCandle();
        this.dragCandle = c;
        startDrag(c.group, info);
        return;
      }
      if (act === 'btn-match') this.lightAll();
    },

    onMove(info) { setDragPos(info); },

    onUp(info) {
      if (!drag) return;
      const hit = ctx.raycast(info.ndc, [ctx.cakeProxy]);
      if (hit) {
        const c = this.dragCandle;
        drag = null;
        placeOnCake(c.group, hit.point, true);
        state.candles.push({ group: c.group, flame: c.flame, lit: false });
        audio.pop();
        bounceIn(c.group);
        this.showMatch();
      } else {
        dropFail();
      }
      this.dragCandle = null;
    },

    lightAll() {
      if (this.phase !== 'place') return;
      this.phase = 'lighting';
      audio.click();
      const btn = el('btn-match-inner');
      if (btn) btn.classList.remove('pulse', 'glow');
      ctx.setHint(() => null);
      ctx.candleLight.intensity = 0.01;
      state.candles.forEach((c, k) => {
        delay(0.45 * k + 0.3, () => {
          c.lit = true;
          c.flame.visible = true;
          audio.ignite();
          fx.sparkleBurst(c.group.position.clone().add(new THREE.Vector3(0, 0.085, 0)), 4, 0.04);
        });
      });
      delay(0.45 * state.candles.length + 1.2, () => {
        audio.success();
        ctx.goto('celebrate');
      });
    }
  };

  /* ============================================================ CELEBRATE(かんせい!) */

  const celebrate = {
    cam: 'celebrate',
    enter() {
      this.orbit = 0;
      this.blownAll = false;
      ui(HUD.doneBanner() +
         HUD.sparkle(160, 240, 1.2, 0) + HUD.sparkle(1120, 220, 1.0, 0.5) +
         HUD.sparkle(1000, 110, 0.8, 0.9) + HUD.sparkle(260, 160, 0.9, 0.3) +
         HUD.roundBtn({ id: 'btn-replay', x: 1150, y: 632, r: 64,
                        icon: HUD.iconReplay(), cls: 'pulse glow' }));
      fx.startConfetti(new THREE.Vector3(CAKE.x, 1.0, 0.2));
      fx.sparkleBurst(cakeTop(), 14, 0.3);
      delay(0.3, () => audio.celebrate());
      ctx.setHint(() => {
        const lit = state.candles.find(c => c.lit);
        if (!lit) return { type: 'tap', x: 1150, y: 632 };
        const f = lit.group.position.clone().add(new THREE.Vector3(0, 0.08, 0));
        const s = ctx.worldToStage(f);
        return { type: 'drag', x1: s.x - 110, y1: s.y, x2: s.x + 110, y2: s.y };
      });
    },

    blowCheck(info) {
      let anyLit = false;
      for (const c of state.candles) {
        if (c.lit) {
          const f = c.group.position.clone().add(new THREE.Vector3(0, 0.082, 0));
          const s = ctx.worldToStage(f);
          if (Math.hypot(info.stage.x - s.x, info.stage.y - s.y) < 62) {
            c.lit = false;
            c.flame.visible = false;
            fx.smoke(f);
            audio.blow();
          }
        }
        if (c.lit) anyLit = true;
      }
      if (!anyLit && state.candles.length && !this.blownAll) {
        this.blownAll = true;
        ctx.candleLight.intensity = 0;
        audio.applause();
        fx.sparkleBurst(cakeTop(), 16, 0.35);
      }
    },

    onDown(info, act) {
      if (act === 'btn-replay') {
        audio.click();
        ctx.wipeReset('title');
        return;
      }
      this.blowCheck(info);
    },

    onMove(info) { this.blowCheck(info); },

    update(dt, elapsed) {
      this.orbit += dt * 0.4;
      const cy = CAKE.topY;
      camera.position.set(
        CAKE.x + Math.sin(this.orbit) * 0.95,
        cy + 0.35 + Math.sin(elapsed * 0.6) * 0.05,
        Math.cos(this.orbit) * 0.95
      );
      ctx.camTgt.set(CAKE.x, cy - 0.02, 0);
      camera.lookAt(ctx.camTgt);
    },

    exit() { fx.stopConfetti(); }
  };

  return { title, mix, oven, cream, topping, candle, celebrate };
}
