/* Game Factory home / fullscreen controls. No preventDefault on the document. */
(function () {
  'use strict';
  try {
    if (window !== window.top) return; // iframe games: parent play page owns the button
    if (window.__gfNav) return;
    window.__gfNav = true;

    var standalone = false;
    try {
      standalone = !!(
        (window.navigator && navigator.standalone) ||
        (window.matchMedia && (
          matchMedia('(display-mode: standalone)').matches ||
          matchMedia('(display-mode: fullscreen)').matches ||
          matchMedia('(display-mode: minimal-ui)').matches
        ))
      );
    } catch (ignore) {}

    var path = (location.pathname || '/').replace(/\/index\.html$/, '/') || '/';
    if (path.length > 1 && !path.endsWith('/')) {
      var last = path.split('/').pop() || '';
      if (last.indexOf('.') !== -1) path = path.slice(0, path.length - last.length);
      else path += '/';
    }

    function bundleHome() {
      // /261112/games/x/ or /omnibus-01/play/g.html or /s261026/games/x/ → /261112/ etc.
      var parts = (location.pathname || '/').split('/').filter(Boolean);
      if (!parts.length) return '/';
      if (parts.length === 1) return '/';
      return '/' + parts[0] + '/';
    }

    function isHub() {
      var p = (location.pathname || '/');
      return p === '/' || p === '/index.html';
    }

    function isBundleIndex() {
      var parts = (location.pathname || '/').replace(/\/index\.html$/, '').split('/').filter(Boolean);
      return parts.length === 1;
    }

    var fsEnabled = !!(document.fullscreenEnabled || document.webkitFullscreenEnabled);
    var root = document.documentElement;

    function isFs() {
      return !!(document.fullscreenElement || document.webkitFullscreenElement);
    }

    function enterFs() {
      var el = root;
      var fn = el.requestFullscreen || el.webkitRequestFullscreen || el.webkitRequestFullScreen;
      if (fn) {
        try { var r = fn.call(el); if (r && r.catch) r.catch(function () {}); } catch (ignore) {}
      }
    }

    function iconHome() {
      return '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#fff" d="M24 8.5 8 22.2h5.2V38h9.1V28h7.4v10h9.1V22.2H40z"/></svg>';
    }
    function iconFs() {
      return '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#fff" d="M10 10h10v4H14v6h-4V10zm18 0h10v10h-4v-6h-6v-4zM10 28h4v6h6v4H10V28zm24 0h4v10H28v-4h6v-6z"/></svg>';
    }

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'gf-nav-btn';
    btn.setAttribute('aria-label', standalone ? 'home' : 'fullscreen');
    btn.innerHTML = standalone ? iconHome() : iconFs();
    var css = document.createElement('style');
    css.textContent =
      '#gf-nav-btn{position:fixed;z-index:2147483646;width:52px;height:52px;border:0;border-radius:50%;' +
      'background:rgba(40,28,20,.45);box-shadow:0 2px 8px rgba(0,0,0,.25);' +
      'display:flex;align-items:center;justify-content:center;padding:0;margin:0;' +
      'cursor:pointer;appearance:none;-webkit-appearance:none;' +
      'bottom:calc(12px + env(safe-area-inset-bottom,0px));' +
      'right:calc(12px + env(safe-area-inset-right,0px));' +
      'touch-action:manipulation;pointer-events:auto;}' +
      '#gf-nav-btn:active{transform:scale(.94);background:rgba(40,28,20,.65);}' +
      '#gf-nav-btn svg{width:26px;height:26px;display:block;pointer-events:none;}' +
      '#gf-nav-btn[hidden]{display:none !important;}';
    document.head.appendChild(css);

    function place() {
      if (!document.body) return;
      if (!btn.parentNode) document.body.appendChild(btn);
    }
    if (document.body) place();
    else document.addEventListener('DOMContentLoaded', place, { once: true });

    function update() {
      if (standalone) {
        if (isHub()) btn.hidden = true;
        else { btn.hidden = false; btn.setAttribute('aria-label', 'home'); btn.innerHTML = iconHome(); }
        return;
      }
      if (!fsEnabled) { btn.hidden = true; return; }
      btn.hidden = isFs();
      btn.setAttribute('aria-label', 'fullscreen');
      btn.innerHTML = iconFs();
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (standalone) {
        if (isHub()) return;
        location.href = isBundleIndex() ? '/' : bundleHome();
        return;
      }
      enterFs();
    }, { passive: true });

    document.addEventListener('fullscreenchange', update, { passive: true });
    document.addEventListener('webkitfullscreenchange', update, { passive: true });
    try {
      if (window.matchMedia) {
        var mq = matchMedia('(display-mode: standalone), (display-mode: fullscreen), (display-mode: minimal-ui)');
        if (mq.addEventListener) mq.addEventListener('change', function () { location.reload(); });
      }
    } catch (ignore) {}
    update();
  } catch (ignore) {}
})();
