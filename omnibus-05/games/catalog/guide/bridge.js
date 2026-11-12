(() => {
  const guide = window.GameGuide;
  if (!guide || document.querySelector('[data-guide-host]')) return;
  const id = document.documentElement.dataset.guide;
  if (!id) return;
  const looks = {
    'dazzling-davinci-ovdbdm': ['#b6849d', '#edd2d4', 'heart'],
    'bold-curie-173dp2': ['#73865c', '#d5d3ab', 'leaf'],
    'zen-ride-vgggok': ['#997954', '#d3c7a8', 'wheel'],
    'determined-albattani-oj973a': ['#b4a590', '#e3d5b9', 'brush'],
    'hopeful-mccarthy-xl7wqz': ['#ad9475', '#dbceb4', 'wheel'],
    'gallant-darwin-hkzemh': ['#bdab84', '#eee0c0', 'star'],
    'bold-bardeen-uqx972': ['#958575', '#c6b6a0', 'moon'],
    'nice-clarke-0oj0sq': ['#7f928a', '#cfdbce', 'leaf'],
    'nice-shannon-7co51m': ['#ac9271', '#d9c6a8', 'leaf'],
    'pensive-wozniak-x4kg6h': ['#a2a8ba', '#dee0e6', 'star'],
    'nice-brown-mcjsrp': ['#849cab', '#ccdde1', 'brush'],
    'optimistic-ride-p4c6cz': ['#90b1bf', '#d9e9eb', 'drop'],
    'dazzling-rubin-u5glr7': ['#b89894', '#e2c9c1', 'heart'],
  };
  const [cover, paper, mark] = looks[id] || ['#a69783', '#ded1ba', 'star'];
  const marks = {
    heart: 'M28 22c-6-7-9 3 0 8 9-5 6-15 0-8Z',
    leaf: 'M24 29c-2-7 2-10 9-9 0 7-4 10-9 9Zm0 0 7-7',
    star: 'm28 19 2 4 5 1-4 3 1 5-4-3-4 3 1-5-4-3 5-1Z',
    moon: 'M31 19a7 7 0 1 0 4 10 7 7 0 0 1-4-10Z',
    drop: 'M28 19q-9 10 0 12 9-2 0-12Z',
    wheel: 'M28 20a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 0v12m-6-6h12',
    brush: 'm24 29 8-10 2 2-8 10Zm0 0q-6 0-4 6 6 1 6-4',
  };
  const host = document.createElement('div');
  host.dataset.guideHost = '';
  const shadow = host.attachShadow({mode:'open'});
  shadow.innerHTML = `<style>
    :host{position:fixed;z-index:10000;left:max(8px,env(safe-area-inset-left));top:max(8px,env(safe-area-inset-top));font-family:system-ui,sans-serif}
    button{font:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation}
    .book{display:block;width:48px;height:48px;padding:0;border:0;background:none;opacity:.63;filter:drop-shadow(0 1px 1px #0002);color:${cover}}
    .book:active{opacity:.9}.book:focus-visible{outline:2px solid ${cover};outline-offset:1px;border-radius:9px}
    .book svg{width:46px;height:46px}
    dialog{position:fixed;inset:0;box-sizing:border-box;width:100%;max-width:none;height:100%;max-height:none;margin:0;padding:0;border:0;background:#f8f6ef;color:#332f29;overscroll-behavior:contain}
    dialog::backdrop{background:#19151088}header{height:58px;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;padding:6px max(16px,env(safe-area-inset-right)) 6px max(18px,env(safe-area-inset-left));border-bottom:1px solid #ded8c9;background:#f8f6ef}
    header span{font-size:13px;letter-spacing:.12em;color:#746b5b}header button{min-height:44px;min-width:100px;border:1px solid #c9beab;border-radius:24px;background:#fffdf6;color:#4c453a;padding:8px 16px;font-size:14px}
    iframe{display:block;width:100%;height:calc(100% - 58px);border:0;background:#f8f6ef} @media(prefers-reduced-motion:no-preference){.book:active{transform:scale(.96)}}
  </style><button class="book" aria-label="画像で見る攻略ガイド" title="攻略ガイド" type="button"><svg viewBox="0 0 48 48" aria-hidden="true"><g transform="rotate(-7 24 24)"><path d="M9 12q11-2 27 2v24q-16-4-27-1Z" fill="${paper}" stroke="${cover}" stroke-width="1.2"/><path d="M9 10q12-2 29 2v23q-17-4-29-1Z" fill="${cover}"/><path d="M14 11v23" fill="none" stroke="${paper}" stroke-opacity=".5"/><path d="${marks[mark]}" fill="none" stroke="${paper}" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"/></g></svg></button><dialog aria-label="攻略ガイド"><header><span>あそびの手帳</span><button type="button" class="close">ゲームにもどる ↗</button></header></dialog>`;
  const book = shadow.querySelector('.book'), modal = shadow.querySelector('dialog');
  let reader, pointer, active = new Set();
  window.addEventListener('pointerdown', e => {
    if (!e.composedPath().includes(host)) active.add(e.pointerId);
  }, true);
  for (const type of ['pointerup','pointercancel']) window.addEventListener(type, e => active.delete(e.pointerId), true);
  function show() {
    if (active.size || guide.open) return;
    guide.setOpen(true);
    if (!reader) { reader = document.createElement('iframe'); reader.title = '画像攻略ガイド'; reader.src = './guide.html?embedded=1'; modal.append(reader); }
    modal.showModal();
    shadow.querySelector('.close').focus({preventScroll:true});
  }
  function close() {
    if (!guide.open) return;
    if (reader) {
      try {
        if (reader.contentDocument?.documentElement.dataset.ready) sessionStorage.setItem(`guide-scroll:${id}`,String(reader.contentWindow.scrollY));
      } catch {}
      // Release decoded screenshots before resuming the WebGL game.
      reader.remove(); reader=null;
    }
    modal.close();
    guide.setOpen(false);
    book.focus({preventScroll:true});
  }
  book.addEventListener('pointerdown', e => { pointer = {id:e.pointerId,x:e.clientX,y:e.clientY}; });
  book.addEventListener('pointerup', e => {
    if (pointer?.id === e.pointerId && Math.hypot(e.clientX-pointer.x,e.clientY-pointer.y)<9) show();
    pointer = null;
  });
  book.addEventListener('pointercancel', () => { pointer = null; });
  book.addEventListener('click', e => { if (e.detail === 0) show(); });
  shadow.querySelector('.close').addEventListener('click', close);
  modal.addEventListener('cancel', e => { e.preventDefault(); close(); });
  // Keep UI touches out of the existing document/window game handlers.
  for (const type of ['pointerdown','pointermove','pointerup','pointercancel','touchstart','touchmove','touchend','click','dblclick']) {
    host.addEventListener(type, e => e.stopPropagation());
  }
  window.addEventListener('message', e => {
    if (reader && e.source === reader.contentWindow && e.origin === location.origin && e.data === 'guide:close') close();
  });
  document.body.append(host);
  guide.show = show; guide.close = close;
})();
