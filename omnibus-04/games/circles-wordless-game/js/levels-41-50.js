(function(){
 const {ball:b,ring:r,single,two,serial,stage:s,paint,pair,C}=StageBuilder;
 const red={type:'dye',color:C.paintR},blue={type:'dye',color:C.paintB},piece={type:'piece'},sp=.078/Math.sqrt(3),merge={type:'merge'};
 LEVELS.push(
  s('左右を開く',two(),[r('g1',-.23,-.36),r('g2',.23,-.36)],
    [b('push','g1',-.22,.28),b('push','g2',.22,.28)],{bg:'#EEF9F0'}),
  s('絵の具への寄り道',single(false,.10),[r(red,.27,.35)],
    [b('dye','white',-.22,.26),paint('paint',-.29,-.30,C.paintR)],{bg:'#FFF1F1'}),
  s('みんなが通る幅',single(true,.04),[r(piece,-.17,-.4,sp),r(piece,.05,-.30,sp),r(piece,.29,-.39,sp)],
    [b('split','big',.23,.32,.078),b('wall','island',.28,-.14,.065)],{bg:'#FFF0E9'}),
  s('合体する場所',single(),[r(merge,-.23,-.35,.05*Math.SQRT2)],
    [b('merge','m1',-.26,.28,.05),b('merge','m2',.20,.32,.05)],{bg:'#E9F9F4'}),
  s('一緒と別々',single(true,0),[r('pal',.26,-.34),r(red,-.34,-.36)],
    [b('follow','pal',.25,.22),b('dye','white',-.19,.27),paint('paint',.30,.35,C.paintR)],{bg:'#FFF5E5',player:{cx:0,cy:.42,r:.065}}),
  s('出口を先に開く',single(),[r('green',-.23,-.35)],
    [...pair(-.30,.29,.26,.17),b('push','green',-.10,.28)],{bg:'#F0F0FF'}),
  s('二つの色、二つの道',two(),[r(red,-.23,-.36),r(blue,.23,-.36)],
    [b('dye','d1',-.15,.24),b('dye','d2',.15,.24),paint('pr',-.33,.35,C.paintR),paint('pb',.33,.35,C.paintB)],{bg:'#FFF3F6'}),
  s('二つの壁をつなぐ',serial(),[r('green',.24,-.36)],
    [b('push','green',-.27,.34)],{bg:'#EDF9F4'}),
  s('流れの行き先',single(),[r('green',-.25,-.35)],
    [b('push','green',-.26,.31),{type:'flow',cx:0,cy:-.30,angle:180,length:.76,width:.13,speed:.28}],{bg:'#ECF8FF'}),
  s('迎える、運ぶ、戻る',two(),[r('green',-.23,-.36),r('pal',.23,-.36)],
    [b('push','green',-.25,.30),b('follow','pal',.26,.32)],{bg:'#F9F7E7'})
 );
})();
