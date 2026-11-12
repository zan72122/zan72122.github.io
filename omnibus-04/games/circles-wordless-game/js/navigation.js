// The quiet return window appears only after five seconds without a finger.
(function(){
  function point(g){return {x:g.box.x1-34,y:g.box.y1-34,r:22};}
  function visible(g){return g.levelIndex>=30&&g.phase==='play'&&!g.pointer.down&&g.now-g.lastTouch>=5;}
  function hit(g,x,y){const p=point(g);return visible(g)&&Math.hypot(x-p.x,y-p.y)<=p.r+4;}
  function draw(ctx,g){
    if(!visible(g))return;const p=point(g),a=Math.min(1,(g.now-g.lastTouch-5)*3);
    ctx.save();ctx.globalAlpha=a;ctx.shadowColor='rgba(16,22,55,.25)';ctx.shadowBlur=10;
    ctx.fillStyle='#101637';ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
    ctx.shadowBlur=0;ctx.strokeStyle='rgba(255,255,255,.7)';ctx.lineWidth=1.5;ctx.stroke();
    for(const [x,y,c] of [[-8,-4,'#4FC3F7'],[8,-7,'#FFD600'],[3,8,'#ffffff']]){
      ctx.fillStyle=c;ctx.beginPath();ctx.arc(p.x+x,p.y+y,2.5,0,Math.PI*2);ctx.fill();
    }ctx.restore();
  }
  window.Navigation={draw,hit,visible,point};
})();
