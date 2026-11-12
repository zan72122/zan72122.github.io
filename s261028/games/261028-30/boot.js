'use strict';
/* ---------- S22 boot ---------- */
layout();
newCycle();
assignShopPositions(!RESTORED);
co(seqHideR1(false),'scene');
G.phase='seek'; G.ready=true;
evlog('boot',storeState+(RESTORED?':restored':''));
if(RESTORED){
  /* memory: the friend that was found first last time greets its best friend */
  co((function*(){yield 1.6; const first=MEM.lastFirst==='peacock'?PC:(MEM.lastFirst==='rabbit'&&G.rabbitMember?RB:SN); const fr=bestFriendOf(first);
    if(first.state==='hidden'&&fr&&fr.pl){ first.peek.t=1.25; first.peekHold=1.6; first.waveT=1.2; lookAtPl(first,fr.pl,2.5); fr.peek.t=1.1; fr.peekHold=1.6; lookAtPl(fr,first.pl,2.5); evlog('greet',first.kind+'>'+fr.kind); } })(),'fx');
}
startLoop();

