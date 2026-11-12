// 実機計測用の表示(?perf=1 の時だけ。子ども向け画面には出さない)
// 平均フレームレート、フレーム時間の分布、入力の遅れ、描画呼出し数、三角形数、品質段階を記録する。
export function createPerf(root, enabled) {
  const rec = { frames: [], calls: [], tris: [], inputs: [], startedAt: performance.now(), levels: [] };
  let box = null;
  if (enabled) {
    box = document.createElement('div');
    box.className = 'perf';
    root.appendChild(box);
    const bar = document.createElement('div');
    const bReset = document.createElement('button');
    bReset.textContent = 'reset';
    bReset.onclick = (e) => { e.stopPropagation(); reset(); };
    const bDump = document.createElement('button');
    bDump.textContent = 'json';
    bDump.onclick = (e) => {
      e.stopPropagation();
      const blob = new Blob([JSON.stringify(summary(), null, 2)], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'snail-perf.json';
      a.click();
    };
    for (const b of [bReset, bDump]) b.addEventListener('pointerdown', (e) => e.stopPropagation());
    bar.append(bReset, bDump);
    box.appendChild(document.createElement('pre'));
    box.appendChild(bar);
  }
  function reset() {
    rec.frames.length = 0; rec.calls.length = 0; rec.tris.length = 0; rec.inputs.length = 0; rec.levels.length = 0;
    rec.startedAt = performance.now();
  }
  const pct = (arr, p) => {
    if (!arr.length) return 0;
    const a = arr.slice().sort((x, y) => x - y);
    return a[Math.min(a.length - 1, Math.floor((p / 100) * a.length))];
  };
  function summary() {
    const f = rec.frames;
    const total = f.reduce((s, x) => s + x, 0);
    const hist = { '<=17ms': 0, '17-34ms': 0, '34-50ms': 0, '>50ms': 0 };
    for (const x of f) {
      if (x <= 17) hist['<=17ms']++; else if (x <= 34) hist['17-34ms']++; else if (x <= 50) hist['34-50ms']++; else hist['>50ms']++;
    }
    return {
      userAgent: navigator.userAgent,
      seconds: (performance.now() - rec.startedAt) / 1000,
      frames: f.length,
      avgFps: f.length ? (1000 * f.length) / total : 0,
      // 実時間で割った値(描画が詰まって rAF の間隔が当てにならない時の確認用)
      wallFps: f.length / Math.max(0.001, (performance.now() - rec.startedAt) / 1000),
      frameMs: { p50: pct(f, 50), p90: pct(f, 90), p99: pct(f, 99), max: f.length ? Math.max(...f) : 0 },
      histogram: hist,
      drawCalls: { avg: rec.calls.length ? rec.calls.reduce((s, x) => s + x, 0) / rec.calls.length : 0, max: rec.calls.length ? Math.max(...rec.calls) : 0 },
      triangles: { max: rec.tris.length ? Math.max(...rec.tris) : 0 },
      inputLatencyMs: { n: rec.inputs.length, avg: rec.inputs.length ? rec.inputs.reduce((s, x) => s + x, 0) / rec.inputs.length : 0, p90: pct(rec.inputs, 90), max: rec.inputs.length ? Math.max(...rec.inputs) : 0 },
      qualityChanges: rec.levels,
    };
  }
  let lastShow = 0;
  function frame(dtMs, info, quality, memory) {
    memory = memory || {};
    if (dtMs > 0 && dtMs < 1000) rec.frames.push(dtMs);
    rec.calls.push(info.calls);
    rec.tris.push(info.triangles);
    if (rec.frames.length > 60 * 60 * 15) { rec.frames.splice(0, 3600); rec.calls.splice(0, 3600); rec.tris.splice(0, 3600); }
    if (!box) return;
    const now = performance.now();
    if (now - lastShow < 500) return;
    lastShow = now;
    const s = summary();
    box.firstChild.textContent =
      `fps ${s.avgFps.toFixed(1)} (wall ${s.wallFps.toFixed(1)})  frame p50 ${s.frameMs.p50.toFixed(1)} p90 ${s.frameMs.p90.toFixed(1)} p99 ${s.frameMs.p99.toFixed(1)} ms\n` +
      `calls ${info.calls}  tris ${info.triangles}  geo ${memory.geometries} tex ${memory.textures}\n` +
      `quality ${quality.name}  dpr ${quality.dpr.toFixed(2)}  px ${(quality.pixels / 1e6).toFixed(2)}M\n` +
      `input ${s.inputLatencyMs.avg.toFixed(1)} ms (n ${s.inputLatencyMs.n})  t ${s.seconds.toFixed(0)} s`;
  }
  return {
    frame, summary, reset,
    input(ms) { rec.inputs.push(ms); if (rec.inputs.length > 500) rec.inputs.shift(); },
    level(l) { rec.levels.push({ t: (performance.now() - rec.startedAt) / 1000, level: l }); },
  };
}
