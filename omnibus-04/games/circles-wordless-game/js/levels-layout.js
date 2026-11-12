// Shared geometric vocabulary for the 30 authored stages, not a random generator.
(function(){
 const C=COLORS,P=Math.PI;
 function ball(type,id,x,y,r=.055,extra={}){
   const color={grow:C.warm,shrink:C.cold}[type]||C[type];
   return {type,id,cx:x,cy:y,r,color,...extra};
 }
 const ring=(target,x,y,r=.055)=>({target,cx:x,cy:y,r});
 function rotor(id,x,y,R,phase,end,r=.105){return ball('rotor',id,x,y,r,{color:C.wall,orbitR:R,phase,minAngle:Math.min(phase,end),maxAngle:Math.max(phase,end)});}
 function single(mirror=false,cy=-.06){
   return [{type:'barrier',cy,gaps:[{x:0,width:.30}],r:.10},
     rotor('door',mirror?-.25:.25,cy,.25,mirror?0:P,mirror?-1.15:P+1.15)];
 }
 function two(){return [
   {type:'barrier',cy:-.03,gaps:[{x:-.235,width:.27},{x:.235,width:.27}],r:.09},
   {type:'divider',cx:0,end:-.03,r:.075},
   rotor('left',-.46,-.03,.225,0,-1.18,.105),
   rotor('right',.46,-.03,.225,P,P+1.18,.105)];}
 function serial(){return [
   {type:'barrier',cy:.16,gaps:[{x:0,width:.32}],r:.055},
   {type:'barrier',cy:-.23,gaps:[{x:0,width:.25}],r:.055},
   rotor('lower',-.09,.36,Math.hypot(.09,.20),Math.atan2(-.20,.09),-.20,.085),
   rotor('upper',-.18,-.23,.18,0,-1.10,.09)];}
 function stage(name,layout,rings,items,extra={}){
   return {name,strict:true,bg:'#F4F6FA',player:{cx:0,cy:.42,r:layout.some(e=>e.id==='lower')?.065:.07},
     rings,items:[...layout,...items],...extra};
 }
 const paint=(id,x,y,color)=>ball('paint',id,x,y,.06,{color});
 const pair=(x1,y1,x2,y2)=>[ball('warp','wa',x1,y1,.065,{pair:'wb'}),ball('warp','wb',x2,y2,.065,{pair:'wa'})];
 window.StageBuilder={ball,ring,rotor,single,two,serial,stage,paint,pair,C};
})();
