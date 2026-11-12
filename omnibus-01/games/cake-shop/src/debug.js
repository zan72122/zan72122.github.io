// Existing read-only inspection API.
export function installDebug({ THREE, state, ST, CAKE, COUNTER_Y, fx, oven, camera, viewport,
                               phase, isTransitioning }) {
window.CakeGame.debug = {
  state, ST, CAKE, COUNTER_Y,
  cam: () => ({ p: camera.position.toArray(), trans: isTransitioning(),
                phase: phase() }),
  confetti: () => fx.startConfetti(new THREE.Vector3(0, 0.6, 0.8)),
  ovenInfo: () => ({ door: oven.door.rotation.x.toFixed(2),
                     lamp: oven.lamp.material.emissive.getHexString(),
                     heater: oven.heater.material.color.getHexString(),
                     light: oven.innerLight.intensity.toFixed(2) }),
  clientOfWorld(x, y, z) {
    return viewport.clientOfWorld(x, y, z);
  },
  knobClient() {
    const k = oven.knobWorld();
    return this.clientOfWorld(k.x, k.y, k.z);
  },
  candleClients() {
    return state.candles.map(c => {
      const p = c.group.position;
      return Object.assign(this.clientOfWorld(p.x, p.y + 0.082, p.z), { lit: c.lit });
    });
  }
};

}
