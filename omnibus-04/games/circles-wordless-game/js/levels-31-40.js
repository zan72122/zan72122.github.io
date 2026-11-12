(function(){
 const {ball:b,ring:r,single,stage:s,paint,C}=StageBuilder;
 const red={type:'dye',color:C.paintR},piece={type:'piece'},sp=.078/Math.sqrt(3);
 LEVELS.push(
  // 31: the first contact opens a real passage.
  s('押すと道が開く',single(),[r('player',-.24,-.34,.07)],[],{bg:'#F2F5FF'}),
  s('逆へ回す',single(true),[r('player',.24,-.34,.07)],[],{bg:'#EDF6FF',player:{cx:.26,cy:.35,r:.07}}),
  s('途中で止める',single(false,.08),[r('player',-.25,-.20,.07)],[],{bg:'#F7F4ED',player:{cx:-.25,cy:.38,r:.07}}),
  s('運ぶ道を作る',single(),[r('green',-.24,-.34)],
    [b('push','green',-.2,.29)],{bg:'#EDFAEF'}),
  s('友だちを迎える',single(),[r('pal',-.28,.34)],
    [b('follow','pal',-.24,-.34,.055,{wakeDistance:.34})],{bg:'#FFF9DF'}),
  s('くっついたまま',single(true),[r('violet',.25,-.35)],
    [b('sticky','violet',.24,.29)],{bg:'#F2ECFF'}),
  s('染めて、道をひらく',single(),[r(red,-.24,-.34)],
    [b('dye','white',-.12,.28),paint('paint',.30,.30,C.paintR)],{bg:'#FFF3F0'}),
  s('分けてから運ぶ',single(false,.04),[r(piece,-.29,-.36,sp),r(piece,-.08,-.38,sp),r(piece,.33,-.40,sp)],
    [b('split','big',-.20,.28,.078)],{bg:'#FFF0EF'}),
  s('小さく通り大きく戻る',single(),[r('player',-.24,-.36,.098)],
    [{type:'barrier',cy:.23,gaps:[{x:0,width:.105}],r:.055},
     b('shrink','cold',-.27,.39,.045),b('grow','warm',-.28,-.27,.04)],
    {bg:'#F0F5FF',player:{cx:0,cy:.43,r:.07,minScale:.55,maxScale:1.4}}),
  s('順番は自分で',single(true,.04),[r(red,.22,-.36),r('green',-.34,-.35)],
    [b('dye','white',-.12,.28),b('push','green',.22,.26),paint('paint',-.31,.31,C.paintR)],{bg:'#F7F0F5'})
 );
})();
