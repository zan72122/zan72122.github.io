(function(){
  function expand(items,box){
    const defs=[],hx=box.w/box.s/2,hy=box.h/box.s/2;
    items.forEach((d,index)=>{
      if(d.type!=='barrier'&&d.type!=='divider')return;
      const r=d.r||.10;
      const add=(cx,cy)=>defs.push({id:`boundary-${index}-${defs.length}`,type:'wall',cx,cy,r,color:COLORS.wall});
      if(d.type==='divider'){
        const end=d.end==null?0:d.end;
        for(let y=-hy-r;y<=end;y+=r*1.35)add(d.cx||0,Math.min(y,end));
        add(d.cx||0,end);return;
      }
      const gaps=(d.gaps||[{x:0,width:.28}]).slice().sort((a,b)=>a.x-b.x);
      let left=-hx-r;
      for(const gap of [...gaps,{x:hx+r*2,width:0}]){
        const right=gap.x-gap.width/2-r;
        if(right>=left){for(let x=left;x<right;x+=r*1.35)add(x,d.cy);add(right,d.cy);}
        left=gap.x+gap.width/2+r;
      }
    });return defs;
  }
  window.StageGeometry={expand};
})();
