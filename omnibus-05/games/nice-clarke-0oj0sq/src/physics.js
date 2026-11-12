// Rigid bodies for everything that can be pushed, flung, poured and piled.
// The belt is a kinematic slab whose velocity drives contact friction (a real conveyor),
// teleported back after each step so it never actually leaves.
import * as CANNON from 'cannon-es';
import { BELT, COUNTER_TOP } from './layout.js';

export class Physics {
  constructor(checkout) {
    const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -9.82, 0) });
    world.broadphase = new CANNON.SAPBroadphase(world);
    world.allowSleep = true;
    world.solver.iterations = 12;
    world.solver.tolerance = 0.0005;
    this.world = world;

    this.mItem = new CANNON.Material('item');
    this.mBelt = new CANNON.Material('belt');
    this.mGlass = new CANNON.Material('glass');
    this.mSlide = new CANNON.Material('slide');
    this.mWall = new CANNON.Material('wall');
    this.mCounter = new CANNON.Material('counter');
    const cm = (a, b, friction, restitution = 0.05) => world.addContactMaterial(new CANNON.ContactMaterial(a, b, { friction, restitution, contactEquationStiffness: 1e7, contactEquationRelaxation: 3, frictionEquationStiffness: 1e7 }));
    cm(this.mItem, this.mItem, 0.45, 0.08);
    cm(this.mItem, this.mBelt, 1.0, 0.02);
    cm(this.mItem, this.mGlass, 0.06, 0.05);
    cm(this.mItem, this.mSlide, 0.02, 0.05);
    cm(this.mItem, this.mWall, 0.0, 0.1);
    cm(this.mItem, this.mCounter, 0.35, 0.08);
    world.defaultContactMaterial.friction = 0.4;

    const matFor = { counter: this.mCounter, glass: this.mGlass, slide: this.mSlide, wall: this.mWall, bin: this.mCounter, belt: this.mBelt };
    this.statics = [];
    for (const c of checkout.colliders) {
      if (c.kind === 'belt') continue;
      const b = new CANNON.Body({ mass: 0, type: CANNON.Body.STATIC, material: matFor[c.kind] || this.mCounter });
      b.addShape(new CANNON.Box(new CANNON.Vec3(...c.h)));
      b.position.set(...c.c);
      if (c.rotZ) b.quaternion.setFromEuler(0, 0, c.rotZ);
      b.userData = { kind: c.kind };
      world.addBody(b);
      this.statics.push(b);
    }
    // the belt
    const bc = checkout.colliders.find((c) => c.kind === 'belt');
    this.beltHome = new CANNON.Vec3(...bc.c);
    this.belt = new CANNON.Body({ mass: 0, type: CANNON.Body.KINEMATIC, material: this.mBelt });
    this.belt.addShape(new CANNON.Box(new CANNON.Vec3(...bc.h)));
    this.belt.position.copy(this.beltHome);
    this.belt.sleepSpeedLimit = 0.02;
    this.belt.allowSleep = false;
    world.addBody(this.belt);
    // floor (the store floor) so dropped things rest
    const floor = new CANNON.Body({ mass: 0, material: this.mCounter });
    floor.addShape(new CANNON.Plane());
    floor.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(floor);

    this.beltSpeed = 0;
    world.addEventListener('postStep', () => {
      this.belt.position.copy(this.beltHome);
    });
    this.accum = 0;
  }

  addBody(shape, mass, pos, quat) {
    const b = new CANNON.Body({ mass, material: this.mItem });
    if (shape.type === 'sphere') b.addShape(new CANNON.Sphere(shape.r));
    else b.addShape(new CANNON.Box(new CANNON.Vec3(...shape.h)));
    b.position.set(pos.x, pos.y, pos.z);
    if (quat) b.quaternion.set(quat.x, quat.y, quat.z, quat.w);
    b.linearDamping = 0.04;
    // fruit should slide along with the belt rather than roll away forever
    b.angularDamping = shape.type === 'sphere' ? 0.85 : 0.25;
    b.sleepSpeedLimit = 0.08;
    b.sleepTimeLimit = 0.5;
    this.world.addBody(b);
    return b;
  }

  removeBody(b) {
    this.world.removeBody(b);
  }

  step(dt) {
    this.belt.velocity.set(this.beltSpeed, 0, 0);
    this.world.step(1 / 90, dt, 4);
  }

  // Is this body touching the belt right now?
  onBelt(b) {
    const p = b.position;
    return p.x > BELT.x0 - 0.02 && p.x < BELT.x1 + 0.03 && p.z > BELT.z0 - 0.02 && p.z < BELT.z1 + 0.02 && p.y < COUNTER_TOP + 0.4;
  }
}

export { CANNON };
