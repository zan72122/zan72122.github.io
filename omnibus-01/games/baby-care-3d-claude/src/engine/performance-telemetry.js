/* Development-only performance telemetry. Enable with `?perf=1`.
 * The production path keeps only a few guarded method calls and allocates no
 * observers, DOM or GPU queries. */

export function percentile(values, ratio = 0.95) {
  if (!values.length) return 0;
  const sorted = values.slice().sort((a, b) => a - b);
  const index = Math.min(sorted.length - 1, Math.floor(sorted.length * ratio));
  return sorted[index];
}

class GpuFrameTimer {
  constructor(renderer) {
    this.gl = renderer.getContext();
    this.ext = renderer.capabilities.isWebGL2
      ? this.gl.getExtension('EXT_disjoint_timer_query_webgl2')
      : null;
    this.active = null;
    this.pending = null;
  }

  begin() {
    this.poll();
    if (!this.ext || this.active || this.pending) return;
    try {
      this.active = this.gl.createQuery();
      this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT, this.active);
    } catch {
      this.active = null;
      this.ext = null;
    }
  }

  end() {
    if (!this.active || !this.ext) return;
    try {
      this.gl.endQuery(this.ext.TIME_ELAPSED_EXT);
      this.pending = this.active;
    } catch {
      this.gl.deleteQuery?.(this.active);
    }
    this.active = null;
  }

  poll() {
    if (!this.pending || !this.ext) return null;
    const gl = this.gl;
    try {
      if (!gl.getQueryParameter(this.pending, gl.QUERY_RESULT_AVAILABLE)) return null;
      const disjoint = gl.getParameter(this.ext.GPU_DISJOINT_EXT);
      const nanoseconds = gl.getQueryParameter(this.pending, gl.QUERY_RESULT);
      gl.deleteQuery(this.pending);
      this.pending = null;
      return disjoint ? null : nanoseconds / 1e6;
    } catch {
      this.pending = null;
      this.ext = null;
      return null;
    }
  }

  dispose() {
    if (this.active) this.gl.deleteQuery?.(this.active);
    if (this.pending) this.gl.deleteQuery?.(this.pending);
    this.active = this.pending = null;
  }
}

export class PerformanceTelemetry {
  constructor(app, {
    enabled = new URLSearchParams(location.search).has('perf')
  } = {}) {
    this.app = app;
    this.enabled = enabled;
    this.frames = [];
    this.cpuTimes = [];
    this.gpuTimes = [];
    this.longTasks = 0;
    this.contextLosses = 0;
    this.stalls = 0;
    this.lastPaintAt = 0;
    if (!enabled) return;

    this.gpuTimer = new GpuFrameTimer(app.renderer);
    this.panel = document.createElement('pre');
    this.panel.id = 'performance-telemetry';
    this.panel.setAttribute('aria-hidden', 'true');
    Object.assign(this.panel.style, {
      position: 'fixed',
      inset: '8px auto auto 8px',
      zIndex: '10000',
      margin: '0',
      padding: '8px 10px',
      color: '#d8ffe1',
      background: 'rgba(8, 13, 18, .84)',
      font: '11px/1.35 ui-monospace, SFMono-Regular, monospace',
      borderRadius: '6px',
      pointerEvents: 'none',
      whiteSpace: 'pre'
    });
    document.body.appendChild(this.panel);

    if ('PerformanceObserver' in globalThis) {
      try {
        this.longTaskObserver = new PerformanceObserver(list => {
          this.longTasks += list.getEntries().length;
        });
        this.longTaskObserver.observe({ type: 'longtask', buffered: true });
      } catch { /* Safari may expose the observer without longtask entries. */ }
    }
  }

  beginGpuFrame() {
    if (!this.enabled) return;
    this.gpuTimer.begin();
  }

  endGpuFrame() {
    if (!this.enabled) return;
    this.gpuTimer.end();
  }

  recordFrame({ frameMs, cpuMs, now = performance.now() }) {
    if (!this.enabled) return;
    const gpuMs = this.gpuTimer.poll();
    this.frames.push({ now, value: frameMs });
    this.cpuTimes.push({ now, value: cpuMs });
    if (gpuMs !== null) this.gpuTimes.push({ now, value: gpuMs });
    this._trim(now);
    if (now - this.lastPaintAt >= 500) {
      this.lastPaintAt = now;
      this._paint(now);
    }
  }

  noteContextLost() {
    this.contextLosses++;
  }

  noteStall() {
    this.stalls++;
  }

  snapshot(now = performance.now()) {
    const recent = list => list.filter(sample => now - sample.now <= 2000)
      .map(sample => sample.value);
    const frames = recent(this.frames);
    const cpu = recent(this.cpuTimes);
    const gpu = recent(this.gpuTimes);
    const firstRecent = frames.length
      ? this.frames[Math.max(0, this.frames.length - frames.length)]
      : null;
    const span = frames.length > 1 && firstRecent
      ? Math.max(1, now - firstRecent.now)
      : 1000;
    return {
      fps: frames.length * 1000 / span,
      frameP50: percentile(frames, 0.50),
      frameP95: percentile(frames),
      frameP99: percentile(frames, 0.99),
      frameMax: frames.length ? Math.max(...frames) : 0,
      framesOver100: frames.filter(value => value > 100).length,
      cpuP95: percentile(cpu),
      gpuP95: gpu.length ? percentile(gpu) : null,
      gpuTimerAvailable: Boolean(this.gpuTimer?.ext),
      longTasks: this.longTasks,
      contextLosses: this.contextLosses,
      stalls: this.stalls
    };
  }

  _trim(now) {
    const keep = sample => now - sample.now <= 15_000;
    this.frames = this.frames.filter(keep);
    this.cpuTimes = this.cpuTimes.filter(keep);
    this.gpuTimes = this.gpuTimes.filter(keep);
  }

  _paint(now) {
    const timing = this.snapshot(now);
    const pipeline = this.app.pipeline.performanceSnapshot();
    const render = this.app.renderer.info.render;
    const memory = this.app.renderer.info.memory;
    const shadowSize = this.app.lighting.key.shadow.mapSize;
    const shadowMiB = shadowSize.x * shadowSize.y * 4 / 1024 / 1024;
    const gpu = !timing.gpuTimerAvailable
      ? 'n/a'
      : timing.gpuP95 === null ? 'pending' : `${timing.gpuP95.toFixed(1)}ms`;
    this.panel.textContent = [
      `FPS ${timing.fps.toFixed(1)}  frame p50/p95/p99/max`,
      `${timing.frameP50.toFixed(1)} / ${timing.frameP95.toFixed(1)} / `
        + `${timing.frameP99.toFixed(1)} / ${timing.frameMax.toFixed(1)}ms  >100 ${timing.framesOver100}`,
      `CPU p95 ${timing.cpuP95.toFixed(1)}ms  GPU p95 ${gpu}`,
      `buffer ${pipeline.width}×${pipeline.height} (${(pipeline.pixels / 1e6).toFixed(2)}MP)`,
      `RT+shadow estimate ${(pipeline.estimatedTargetMiB + shadowMiB).toFixed(1)}MiB`,
      `draw ${render.calls}  tri ${render.triangles}  tex ${memory.textures}`,
      `quality ${this.app.quality}  shadow updates ${this.app._shadowGate.updateCount}`,
      `passes ${pipeline.passes.join(' → ')}`,
      `long tasks ${timing.longTasks}  context loss ${timing.contextLosses}  stalls ${timing.stalls}`,
      `resource growth ${document.documentElement.dataset.activityResourceGrowth || 'none'}`
    ].join('\n');
    document.documentElement.dataset.frameP95 = timing.frameP95.toFixed(1);
    document.documentElement.dataset.gpuP95 =
      timing.gpuP95 === null ? 'n/a' : timing.gpuP95.toFixed(1);
    document.documentElement.dataset.renderBuffer =
      `${pipeline.width}x${pipeline.height}`;
  }

  dispose() {
    this.longTaskObserver?.disconnect();
    this.gpuTimer?.dispose();
    this.panel?.remove();
  }
}
