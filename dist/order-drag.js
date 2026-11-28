/* Wortreise — touch-first word ordering. Tap/click is still fully supported. */
function setupWordOrder(work,q){
 const words=shuffle(q.a.split(/\s+/).map((v,i)=>({v,i,source:null})));
 const picked=[];
 work.innerHTML='<div class="answerline order-dropzone" dir=ltr role=group aria-label="الجملة المرتبة"><span class="drop-hint" aria-hidden="true"><span class="drop-hand">☟</span><span>اسحب الكلمات وضعها هنا لترتيب الجملة</span></span></div><div class="tiles order-wordbank" dir=ltr></div><button id=undo type=button>رجّع آخر كلمة ↶</button><button id=submit class=gold type=button>صحّح ✓</button>';
 const zone=work.querySelector('.answerline'),pool=work.querySelector('.tiles');
 const inside=(el,x,y)=>{const r=el.getBoundingClientRect();return x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom};
 function add(word){if(session?.locked||picked.includes(word))return;picked.push(word);word.source.hidden=true;render()}
 function remove(word){
  if(session?.locked)return;
  const at=picked.indexOf(word);if(at<0)return;
  picked.splice(at,1);word.source.hidden=false;render();
 }
 function move(word,target){
  if(session?.locked)return;
  const at=picked.indexOf(word);if(at<0)return;
  picked.splice(at,1);
  const to=target?picked.findIndex(p=>p.i===Number(target.dataset.wordIndex)):-1;
  picked.splice(to<0?picked.length:to,0,word);render();
 }
 function drag(node,word,isAnswer){
  let start=null,ghost=null,moved=false;
  const cleanup=()=>{
   zone.classList.remove('drag-over');node.classList.remove('is-dragging');
   if(ghost){ghost.remove();ghost=null}
   start=null;
  };
  node.addEventListener('pointerdown',ev=>{
   if(session?.locked||ev.button!==0||!ev.isPrimary)return;
   start={id:ev.pointerId,x:ev.clientX,y:ev.clientY};
   moved=false;
   try{node.setPointerCapture(ev.pointerId)}catch{}
  });
  node.addEventListener('pointermove',ev=>{
   if(!start||ev.pointerId!==start.id)return;
   if(!moved&&Math.hypot(ev.clientX-start.x,ev.clientY-start.y)<8)return;
   moved=true;ev.preventDefault();
   if(!ghost){
    ghost=node.cloneNode(true);ghost.className='order-drag-ghost';
    ghost.removeAttribute('id');ghost.removeAttribute('aria-label');
    ghost.style.width=Math.max(65,node.getBoundingClientRect().width)+'px';
    document.body.append(ghost);
    node.classList.add('is-dragging');
   }
   ghost.style.left=ev.clientX+'px';ghost.style.top=ev.clientY+'px';
   zone.classList.toggle('drag-over',inside(zone,ev.clientX,ev.clientY));
  });
  node.addEventListener('pointerup',ev=>{
   if(!start||ev.pointerId!==start.id)return;
   if(moved){
    ev.preventDefault();
    // Mobile WebKit can emit a synthetic click after the drag completes.
    node.dataset.dragged='1';
    setTimeout(()=>{delete node.dataset.dragged},180);
    const target=document.elementFromPoint(ev.clientX,ev.clientY)?.closest?.('.order-answer-token');
    if(isAnswer){
     if(inside(pool,ev.clientX,ev.clientY))remove(word);
     else if(inside(zone,ev.clientX,ev.clientY))move(word,target!==node?target:null);
    }else if(inside(zone,ev.clientX,ev.clientY))add(word);
   }
   cleanup();
  });
  node.addEventListener('pointercancel',cleanup);
  node.addEventListener('lostpointercapture',()=>{if(start)cleanup()});
 }
 function render(){
  zone.replaceChildren();
  if(!picked.length)
   zone.innerHTML='<span class="drop-hint" aria-hidden="true"><span class="drop-hand">☟</span><span>اسحب الكلمات وضعها هنا لترتيب الجملة</span></span>';
  else for(const word of picked){
   const chip=document.createElement('button');chip.type='button';
   chip.className='order-answer-token';chip.textContent=word.v;
   chip.dataset.wordIndex=String(word.i);
   chip.setAttribute('aria-label','رجّع الكلمة '+word.v);
   chip.onclick=()=>{if(chip.dataset.dragged!=='1')remove(word)};
   zone.append(chip);drag(chip,word,true);
  }
  zone.classList.toggle('has-words',picked.length>0);
  work.querySelector('#undo').disabled=!picked.length;
 }
 for(const word of words){
  const tile=document.createElement('button');tile.type='button';tile.className='tile';
  tile.textContent=word.v;tile.setAttribute('aria-label','زيد '+word.v+' للجملة');
  tile.onclick=()=>{if(tile.dataset.dragged!=='1')add(word)};
  word.source=tile;pool.append(tile);drag(tile,word,false);
 }
 work.querySelector('#undo').onclick=()=>{if(picked.length)remove(picked[picked.length-1])};
 work.querySelector('#submit').onclick=()=>check(picked.map(word=>word.v).join(' '));
 render();
}
