// やわらかそざいあそび - title screen. The start tap doubles as the audio
// unlock gesture; an optional button grants iOS motion permission.
(function () {
  'use strict';
  const GAME = window.GAME;

  const Screens = { name: 'title', _el: null };

  Screens.build = function (root, onStart) {
    const el = document.createElement('div');
    el.id = 'title-screen';
    el.innerHTML =
      '<div id="title-blob">🫠</div>' +
      '<div id="title-text">やわらか<br>そざいあそび</div>' +
      '<div id="title-sub">〜 ぷにぷにランド 〜</div>' +
      '<div id="title-materials">' +
      GAME.Materials.list.map((m, i) =>
        '<span style="animation-delay:' + (i * 0.18) + 's">' + m.emoji + '</span>').join('') +
      '</div>' +
      '<button id="start-btn" class="btn">あそぶ!</button>';
    root.appendChild(el);
    Screens._el = el;

    const start = el.querySelector('#start-btn');
    start.addEventListener('click', () => {
      GAME.Audio.resume();
      GAME.Squish.start();
      GAME.Music.start();
      Screens.hide();
      onStart();
    });

    // iOS motion permission: only shown where the dance is needed
    if (GAME.Motion.needsPermission) {
      const tilt = document.createElement('button');
      tilt.id = 'tilt-btn';
      tilt.className = 'btn';
      tilt.textContent = '📱 かたむけて あそぶ?';
      tilt.addEventListener('click', () => {
        GAME.Motion.requestPermission().then((ok) => {
          if (ok) {
            tilt.classList.add('granted');
            tilt.textContent = '📱 かたむき OK!';
          } else {
            tilt.textContent = '📱 ゆるされなかった…';
          }
        });
      });
      el.appendChild(tilt);
    }

    // celebration banner lives outside the title overlay
    const cel = document.createElement('div');
    cel.id = 'celebrate';
    root.appendChild(cel);

    // boot error overlay (hidden unless boot throws)
    const err = document.createElement('div');
    err.id = 'boot-error';
    root.appendChild(err);
  };

  Screens.hide = function () {
    Screens.name = 'play';
    if (Screens._el) Screens._el.classList.add('hidden');
  };

  Screens.showError = function (msg) {
    const e = document.getElementById('boot-error');
    if (e) {
      e.style.display = 'flex';
      e.textContent = 'よみこみに しっぱいしました… (' + msg + ')';
    }
  };

  GAME.Screens = Screens;
})();
