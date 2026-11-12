// Automated play-through used for testing (?autotest). It plays like a child would:
// touching water, petting, tapping the unicorn, shaking the mane, reaching up.
import * as THREE from '../../lib/three.module.js';

export class AutoTest {
  constructor(game) {
    this.g = game;
    this.log = [];
    this.last = null;
    this.t = 0;
    this.st = 0;
    this.next = 0;
    this.ptr = null;
    this.counts = {};
    window.__autolog = this.log;
  }

  say(msg) {
    const line = `${this.t.toFixed(1)}s [${this.g.director.state}] ${msg}`;
    this.log.push(line);
    console.log('AUTO ' + line);
  }

  tapWorld(v, id = 50) {
    const p = this.g.director.project(v);
    this.tapXY(p.x, p.y, id);
    return p;
  }
  tapXY(x, y, id = 50) {
    const inp = this.g.input;
    inp.synth('down', x, y, id);
    inp.synth('up', x, y, id);
    this.counts.taps = (this.counts.taps || 0) + 1;
  }

  frame(dt) {
    const g = this.g, d = g.director;
    this.t += dt;
    if (d.state !== this.last) {
      this.say(`enter (horse s=${g.horse.s.toFixed(1)} v=${g.horse.speed.toFixed(1)})`);
      this.last = d.state;
      this.st = 0;
      this.next = 0.5;
      this.done = false;
    }
    this.st += dt;
    const h = g.horse;
    const P0 = new THREE.Vector3(0.15, 0.012, 0.95);
    switch (d.state) {
      case 'intro':
        if (this.st > 1 && !this.done) {
          this.done = true;
          this.tapWorld(P0);
          this.say('tap puddle');
        }
        break;
      case 'puddle':
        if (this.st > this.next && (this.counts.puddle || 0) < 4) {
          this.next = this.st + 0.7;
          this.counts.puddle = (this.counts.puddle || 0) + 1;
          const q = P0.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.6, 0, (Math.random() - 0.5) * 0.4));
          this.tapWorld(q);
          this.say('tap water, ripples=' + (d.counters.ripples || 0));
        }
        if (d.sub.arrived && d.sub.visibleT > 2 && !this.done) {
          this.done = true;
          const r = d.reflectionPoint(d.horseHead());
          this.tapWorld(r);
          this.say('tap reflection of unicorn at ' + r.toArray().map((x) => x.toFixed(2)));
        }
        break;
      case 'meet':
        if (this.st > this.next && this.st < 9) {
          this.next = this.st + 1.0;
          const head = g.unicorn.bones.head.localToWorld(new THREE.Vector3(0, 0.3, 0));
          this.tapWorld(head);
          this.say('pet, pets=' + (d.counters.pets || 0));
        }
        if (this.st > 4 && !this.maneDone) {
          this.maneDone = true;
          const L = g.hair.locks.find((L) => L.kind === 'mane');
          const before = g.drops.n;
          this.tapWorld(L.p[4]);
          this.say('tap mane (drops in air ' + before + ')');
        }
        break;
      case 'kneel':
        if (this.st > 3.8 && !this.done) {
          this.done = true;
          this.tapWorld(h.pos.clone().add(new THREE.Vector3(0, 0.7, 0)));
          this.say('tap lying unicorn');
        }
        break;
      case 'run':
        if (this.st > this.next) {
          this.next = this.st + 0.9;
          this.tapWorld(g.unicorn.bones.neck2.getWorldPosition(new THREE.Vector3()));
          if (Math.random() < 0.3) this.say(`pat (v=${h.speed.toFixed(1)}, drops=${g.drops.n})`);
        }
        break;
      case 'birth':
        if (this.st > 2 && !this.done) {
          this.done = true;
          this.say(`road active=${g.road.active} birth=${g.road.birth.toFixed(2)} front=${(g.road.sFront - h.s).toFixed(1)}`);
        }
        break;
      case 'ascent':
        if (this.st > 3 && !this.done) {
          this.done = true;
          const p = g.track.pos(h.s + 6, new THREE.Vector3());
          this.tapWorld(p);
          this.say('tap road ahead; contacts=' + g.road.contacts.length);
        }
        if (Math.floor(this.st) % 6 === 0 && this.st - Math.floor(this.st) < dt) this.say(`u=${g.track.u(h.s).toFixed(3)} v=${h.speed.toFixed(1)} lead=${(g.road.sFront - h.s).toFixed(1)} mist=${d.mist.toFixed(2)} water=${g.hair.totalWater().toFixed(0)}`);
        break;
      case 'crisis': {
        // shake the mane left and right with one finger
        const cx = g.vw * 0.5, cy = g.vh * 0.6;
        if (this.st > 1.5 && this.st < 9) {
          if (!this.ptr) {
            this.ptr = 77;
            g.input.synth('down', cx, cy, 77);
            this.say(`start shaking; absorbed=${g.road.absorbed} reserve=${g.road.reserve.toFixed(1)}`);
          }
          const x = cx + Math.sin(this.st * 9) * 160;
          g.input.synth('move', x, cy, 77);
        } else if (this.ptr) {
          g.input.synth('up', cx, cy, 77);
          this.ptr = null;
          this.say(`stop shaking; absorbed=${g.road.absorbed} reserve=${g.road.reserve.toFixed(1)} revived=${d.sub.revived}`);
        }
        if (Math.floor(this.st * 2) !== Math.floor((this.st - dt) * 2)) this.say(`v=${h.speed.toFixed(2)} lead=${(g.road.sFront - h.s).toFixed(1)} absorbed=${g.road.absorbed} drops=${g.drops.n} water=${g.hair.totalWater().toFixed(0)}`);
        break;
      }
      case 'summit': {
        const cx = g.vw * 0.5;
        if (this.st > 0.8 && this.st < 9) {
          if (!this.ptr) {
            this.ptr = 78;
            g.input.synth('down', cx, g.vh * 0.5, 78);
          }
          // sweep up and down through the coloured lines around the middle of the screen
          const y = g.vh * (0.62 - 0.3 * (0.5 + 0.5 * Math.sin(this.st * 1.7)));
          g.input.synth('move', cx + Math.sin(this.st) * 60, y, 78);
          if (Math.floor(this.st) !== Math.floor(this.st - dt)) this.say('layers visited ' + [...d.layerVisits].join(','));
        } else if (this.ptr) {
          g.input.synth('up', cx, 100, 78);
          this.ptr = null;
        }
        break;
      }
      case 'farewell':
        if (d.sub.phase === 'palm' && !this.done && d.sub.waitT > 1) {
          this.done = true;
          const pc = g.child.palmCenter('R', new THREE.Vector3());
          this.tapWorld(pc);
          this.say('tap palm');
        }
        break;
      case 'free':
        if (this.st > this.next && this.st < 12) {
          this.next = this.st + 1.5;
          const k = Math.floor(this.st / 1.5) % 3;
          if (k === 0) this.tapWorld(g.unicorn.bones.head.localToWorld(new THREE.Vector3(0, 0.3, 0)));
          if (k === 1) {
            const n0 = g.drops.n;
            this.tapWorld(g.hair.locks.find((L) => L.kind === 'mane').p[5]);
            setTimeout(() => this.say(`  mane drops after tap: ${g.drops.n - n0} water=${g.hair.totalWater().toFixed(0)}`), 400);
          }
          if (k === 2) this.tapWorld(new THREE.Vector3(-4.95, 0.012, 3.2));
          this.say(['pet', 'mane', 'water'][k] + ` drops=${g.drops.n}`);
        }
        if (this.st > 12 && !this.finished) {
          this.finished = true;
          this.say('FINISHED');
          window.__autodone = true;
        }
        break;
    }
  }
}
