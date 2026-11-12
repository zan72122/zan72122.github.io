// Canvas sizing, camera framing and matching SVG/pointer coordinates.
export function createViewport(THREE, renderer, camera) {
  const hudSvg = document.getElementById('hud');
  const _pt = hudSvg.createSVGPoint(), _v = new THREE.Vector3();
  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // Keep the same horizontal workspace visible in portrait; preserve landscape.
    camera.fov = w < h ? THREE.MathUtils.radToDeg(2 * Math.atan(
      Math.tan(THREE.MathUtils.degToRad(20)) * 1.5 / camera.aspect)) : 40;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();
  function clientToStage(cx, cy) {
    _pt.x = cx; _pt.y = cy;
    const matrix = hudSvg.getScreenCTM();
    if (!matrix) return { x: 0, y: 0 };
    const p = _pt.matrixTransform(matrix.inverse());
    return { x: p.x, y: p.y };
  }
  function clientOfWorld(x, y, z) {
    _v.set(x, y, z).project(camera);
    return { x: (_v.x * 0.5 + 0.5) * window.innerWidth,
             y: (-_v.y * 0.5 + 0.5) * window.innerHeight };
  }
  function worldToStage(v) {
    const p = clientOfWorld(v.x, v.y, v.z);
    return clientToStage(p.x, p.y);
  }
const raycaster = new THREE.Raycaster();
function raycast(ndc, objects) {
  raycaster.setFromCamera(ndc, camera);
  const hits = raycaster.intersectObjects(objects, true);
  return hits.length ? hits[0] : null;
}
function rayOnPlane(ndc, plane, out) {
  raycaster.setFromCamera(ndc, camera);
  return raycaster.ray.intersectPlane(plane, out);
}

  return { resize, clientToStage, clientOfWorld, worldToStage, raycast, rayOnPlane };
}
