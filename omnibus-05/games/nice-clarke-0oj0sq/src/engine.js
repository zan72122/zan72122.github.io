// Renderer, scene, base lighting and resize handling.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/RoomEnvironment.js';

export class Engine {
  constructor(container) {
    this.container = container;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && /Macintosh/.test(navigator.userAgent));
    this.isMobile = isMobile;
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', alpha: false, stencil: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 2 : 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    this.renderer = renderer;
    this.canvas = renderer.domElement;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#05070d');

    const pmrem = new THREE.PMREMGenerator(renderer);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    this.scene.environment = env;
    this.scene.environmentIntensity = 0.55;

    this.camera = new THREE.PerspectiveCamera(50, 1, 0.03, 120);
    this.scene.add(this.camera);

    // Base lights. The store light-map decides how much of this reaches each place.
    this.hemi = new THREE.HemisphereLight('#fff6ea', '#7a6a5a', 1.1);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight('#fff3e2', 1.6);
    this.sun.position.set(-0.6, 4.0, 1.4);
    this.sun.target.position.set(-0.4, 0.9, -0.1);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(isMobile ? 1024 : 2048, isMobile ? 1024 : 2048);
    const sc = this.sun.shadow.camera;
    sc.left = -2.8;
    sc.right = 2.2;
    sc.top = 1.8;
    sc.bottom = -1.8;
    sc.near = 0.5;
    sc.far = 7;
    this.sun.shadow.bias = -0.0006;
    this.sun.shadow.normalBias = 0.01;
    this.sun.shadow.radius = 3;
    this.scene.add(this.sun, this.sun.target);
    this.fill = new THREE.DirectionalLight('#dfe8ff', 0.45);
    this.fill.position.set(2, 3, -3);
    this.scene.add(this.fill);

    this.size = { w: 1, h: 1, aspect: 1 };
    this.onResize = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.resize(), 150));
  }

  resize() {
    const w = this.container.clientWidth || window.innerWidth;
    const h = this.container.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.size.w = w;
    this.size.h = h;
    this.size.aspect = w / h;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    for (const f of this.onResize) f(this.size);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
