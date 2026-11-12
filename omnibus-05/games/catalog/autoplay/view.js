const NS = 'http://www.w3.org/2000/svg';
const hand = '<path d="M1 2V-18c0-6 8-6 8 0v14-7c0-5 7-5 7 0v8-5c0-5 7-5 7 0v8-3c0-4 7-4 7 0v15c0 13-7 21-17 21C3 33-2 24-8 16l-6-9c-3-5 3-9 7-5l8 8" fill="#fff4d9" stroke="#655840" stroke-width="2" stroke-linejoin="round"/>';
export function createView(color = '#ddc998') {
  const style = document.createElement('style');
  style.textContent = `
    .play-guide{position:fixed;inset:0;z-index:80;pointer-events:none;contain:layout style}
    .play-guide svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
    .guide-button{position:absolute;width:48px;height:48px;border:0;padding:10px;background:none;color:#fff4d9;pointer-events:auto;touch-action:none;cursor:pointer;transition:opacity .4s}
    .guide-button[hidden],.play-guide svg[hidden]{display:none!important}
    .guide-button i{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:${color};box-shadow:0 1px 5px #0004,inset 0 0 0 1px #fff5;color:#514937;font-style:normal;font-size:16px}
    .guide-button:focus-visible{outline:2px solid #fff0c0;border-radius:50%}
    .guide-button.cancel{right:max(8px,env(safe-area-inset-right));top:max(8px,env(safe-area-inset-top))}
    .guide-button.cancel i{background:#eee7dccc;font-size:14px}
    .guide-hand{filter:drop-shadow(0 2px 2px #0006)}
  `;
  document.head.append(style);
  const root = document.createElement('div'); root.className = 'play-guide';
  root.innerHTML = `<button class="guide-button start" aria-label="ゆっくりお手本を見る" hidden><i>▶</i></button>
    <svg aria-hidden="true" hidden><path class="trail" fill="none" stroke="#fff0be" stroke-width="3" stroke-dasharray="4 7"/>
    <circle class="destination" r="25" fill="none" stroke="#fff0be" stroke-width="2" stroke-dasharray="3 5" opacity="0"/><ellipse class="actor" rx="25" ry="10" fill="none" stroke="#fff0be" stroke-width="2" stroke-dasharray="3 6"/>
    <circle class="target" r="19" fill="#fff2c522" stroke="#fff2c5" stroke-width="2"/>
    <circle class="contact" r="7" fill="#fff2c5"/>
    <g class="guide-hand">${hand}</g><g class="second-hand" opacity="0"><circle cy="-20" r="16" fill="#fff2c533" stroke="#fff2c5" stroke-width="2"/>${hand}</g></svg>
    <button class="guide-button cancel" aria-label="お手本を止める" hidden><i>Ⅱ</i></button>`;
  document.body.append(root);
  const find = s => root.querySelector(s);
  const svg = find('svg'), button = find('.start'), cancel = find('.cancel');
  let trail = [];
  return {
    root, button, cancel,
    offer(p) {
      button.hidden = !p;
      if (!p) return;
      button.style.left = `${Math.max(8, Math.min(innerWidth - 56, p.x + 24))}px`;
      button.style.top = `${Math.max(24, Math.min(innerHeight - 64, p.y - 28))}px`;
    },
    active(on) { svg.toggleAttribute('hidden', !on); cancel.hidden = !on; button.hidden = true; trail = []; },
    point(p, down, actor) {
      if (!p) return;
      for (const cl of ['target','contact']) {
        find('.'+cl).setAttribute('cx', p.x); find('.'+cl).setAttribute('cy', p.y);
      }
      find('.contact').setAttribute('opacity', down ? '.95' : '0');
      find('.target').setAttribute('r', down ? '14' : '21');
      find('.guide-hand').setAttribute('transform', `translate(${p.x+1} ${p.y+20}) scale(.7)`);
      if (down) {
        const last = trail.at(-1);
        if (!last || Math.hypot(last.x-p.x,last.y-p.y)>5) trail.push(p);
        if (trail.length > 65) trail.shift();
      }
      find('.trail').setAttribute('d',trail.map((q,i)=>`${i?'L':'M'}${q.x},${q.y}`).join(' '));
      const a = find('.actor'); a.setAttribute('opacity', actor ? '.8' : '0');
      if (actor) { a.setAttribute('cx',actor.x); a.setAttribute('cy',actor.y); }
    },
    destination(p){const el=find('.destination');el.setAttribute('opacity',p?'.7':'0');if(p){el.setAttribute('cx',p.x);el.setAttribute('cy',p.y);}},
    clearTrail() { trail = []; },
    second(p) {const el=find('.second-hand');el.setAttribute('opacity',p?'1':'0');if(p)el.setAttribute('transform',`translate(${p.x} ${p.y+20}) scale(.7)`);},
    destroy() { root.remove(); style.remove(); }
  };
}
