/* Wortreise learning basket and independent flashcard drill.
 * Saved in the existing progress snapshot (guest locally, signed-in via Supabase).
 * No new database table required.
 */
function basketItems(){
 structure();
 if(!Array.isArray(st.lab.basket))st.lab.basket=[];
 return st.lab.basket;
}
function basketEntryKey(ch,de){return ch+'::'+de}
function hasBasketCard(ch,de){return basketItems().some(p=>p.ch===ch&&p.de===de)}
function basketAddCard(ch,de,ar){
 if(!Number.isInteger(+ch)||!de||!ar)return false;
 if(hasBasketCard(+ch,de))return false;
 basketItems().push({ch:+ch,de:String(de),ar:String(ar)});
 save();updateBasketIndicator();
 return true;
}
function basketRemoveCard(ch,de){
 const b=basketItems(),ix=b.findIndex(p=>p.ch===ch&&p.de===de);
 if(ix<0)return false;b.splice(ix,1);save();updateBasketIndicator();return true;
}
function updateBasketIndicator(){
 const count=basketItems().length;
 document.querySelectorAll('[data-basket-count]').forEach(x=>x.textContent=String(count));
}
function basketHeroMarkup(){
 return '<button type="button" class="hero-basket" id="heroBasket" aria-label="سلة التعلم">'+
 '<span class="basket-symbol" aria-hidden="true">🛒</span>'+
 '<span class="hero-basket-name">سلة التعلم</span>'+
 '<span class="basket-badge" data-basket-count>'+basketItems().length+'</span></button>';
}
function bindBasketHero(){
 const el=document.getElementById('heroBasket');
 if(el)el.onclick=basketPage;
 updateBasketIndicator();
}
function basketPairForQuestion(q){
 const ch=Number(q.ch||current);
 if(!Number.isInteger(ch)||ch<1||ch>12)return null;
 if(q.de){
  const pair=chapterCards(ch).find(p=>p[0]===q.de);
  if(pair)return {ch,de:pair[0],ar:pair[1]};
 }
 const pair=chapterCards(ch).find(p=>p[0]===q.a||p[1]===q.p);
 return pair?{ch,de:pair[0],ar:pair[1]}:null;
}
function basketButtonUpdate(el,pair){
 if(!el||!pair)return;
 const already=hasBasketCard(pair.ch,pair.de);
 el.textContent=already?'✓ فالسلة':'🛒 زيد للسلة';
 el.setAttribute('aria-label',already?'الكلمة موجودة فالسلة':'زيد الكلمة لسلة التعلم');
 if(already)el.classList.add('is-saved');else el.classList.remove('is-saved');
}
function renderBasketAddButton(host,q){
 const pair=basketPairForQuestion(q);
 if(!pair||!host)return;
 const btn=document.createElement('button');
 btn.type='button';btn.className='basket-add-button';
 basketButtonUpdate(btn,pair);
 btn.onclick=()=>{if(!hasBasketCard(pair.ch,pair.de))basketAddCard(pair.ch,pair.de,pair.ar);basketButtonUpdate(btn,pair)};
 host.append(btn);
}
function basketPage(){
 leavePracticeViewport();
 session=null;const cards=basketItems();
 const l=(ar,de)=>document.documentElement.lang==='de'?de:ar;
 app.innerHTML='<div class="navline"><button id="basketBack">↩ '+l('رجع للفصول','Zurück zu den Kapiteln')+'</button></div>'+
 '<section class="hero"><span class="cap">MEIN WORTSCHATZ</span><h2>🛒 '+l('سلة التعلم','Lernkorb')+'</h2><p>'+l('جمع الكلمات والجمل اللي محتاج تراجعهم. السلة كتتحفظ مع تقدمك.','Sammle Wörter und Sätze und übe sie separat. Der Lernkorb wird mit deinem Fortschritt gespeichert.')+'</p><span class="basket-total">'+cards.length+' '+l('بطاقة','Karten')+'</span></section>'+
 (!cards.length?'<section class="card basket-empty">'+l('السلة خاوية دابا. دخل لأي فصل وزيد العبارات اللي بغيتي تتدرب عليهم.','Dein Lernkorb ist leer. Wähle im Kapitel Wörter zum Üben aus.')+'</section>':
 '<section class="card basket-modes"><h3>'+l('تدرّب على السلة','Mit meinem Lernkorb üben')+'</h3>'+
 '<button class="gold" data-basket-drill="flash">🗂 '+l('بطاقات Flashcards','Flashcards')+'</button>'+
 '<button data-basket-drill="vocab">'+l('اختار المعنى','Bedeutung wählen')+'</button>'+
 '<button data-basket-drill="reverse">'+l('اختار الجملة الألمانية','Deutschen Satz wählen')+'</button>'+
 '<button data-basket-drill="order">'+l('رتّب الكلمات','Wörter ordnen')+'</button>'+
 '<button data-basket-drill="write">'+l('كتب من الذاكرة','Aus dem Gedächtnis schreiben')+'</button></section>'+
 '<section class="card basket-list"><h3>'+l('الكلمات المجموعة','Gesammelte Wörter')+'</h3>'+
 cards.map((p,i)=>'<article class="basket-row"><span class="basket-row-text"><small>Kapitel '+p.ch+'</small><b lang="de" dir="ltr">'+esc(p.de)+'</b><span>'+esc(p.ar)+'</span></span>'+
 '<button class="basket-delete" type="button" data-basket-del="'+i+'" aria-label="'+l('حيد من السلة','Aus dem Lernkorb entfernen')+'">×</button></article>').join('')+'</section>');
 document.querySelector('#basketBack').onclick=home;
 app.querySelectorAll('[data-basket-drill]').forEach(btn=>btn.onclick=()=>btn.dataset.basketDrill==='flash'?studyFlashcards(0,true):basketDrill(btn.dataset.basketDrill));
 app.querySelectorAll('[data-basket-del]').forEach(btn=>btn.onclick=()=>{const p=cards[Number(btn.dataset.basketDel)];if(p){basketRemoveCard(p.ch,p.de);basketPage()}});
 window.scrollTo(0,0);
}
function studyFlashcards(ch=0,fromBasket=false){
 leavePracticeViewport();
 const l=(ar,de)=>document.documentElement.lang==='de'?de:ar;
 const source=fromBasket?basketItems().map(p=>({...p})):chapterCards(ch).map(([de,ar])=>({ch,de,ar}));
 const cards=shuffle(source);let i=0,flipped=false;
 const back=()=>fromBasket?basketPage():vocabMenu(ch);
 if(!cards.length){basketPage();return}
 function drawFlash(){
  const p=cards[i],saved=hasBasketCard(p.ch,p.de);
  app.innerHTML='<div class="navline"><button id="flashBack">↩ '+l('رجع','Zurück')+'</button><span class="questioncount">'+(i+1)+' / '+cards.length+'</span></div>'+
  '<progress max="'+cards.length+'" value="'+(i+1)+'"></progress>'+
  '<section class="hero flash-heading"><span class="cap">'+(fromBasket?l('سلة التعلم','Lernkorb'):'Kapitel '+ch)+'</span><h2>Flashcards</h2><p>'+l('ضغط على البطاقة باش تشوف الترجمة، وحاول تتذكر المعنى قبل ما تقلبها.','Tippe auf die Karte und versuche zuerst, die Bedeutung selbst zu erinnern.')+'</p></section>'+
  '<button type="button" id="flashCard" class="flash-card'+(flipped?' is-flipped':'')+'" aria-label="'+l('قلب البطاقة','Karte umdrehen')+'" aria-pressed="'+flipped+'">'+
  '<span class="flash-label">'+(flipped?'DARIJA':'DEUTSCH')+'</span>'+
  '<span class="flash-content" dir="'+(flipped?'rtl':'ltr')+'" lang="'+(flipped?'ar-MA':'de')+'">'+esc(flipped?p.ar:p.de)+'</span>'+
  '<span class="flash-help">'+l('ضغط باش تقلب البطاقة','Zum Umdrehen tippen')+'</span></button>'+
  '<div class="flash-actions"><button id="flashPrev" '+(i===0?'disabled':'')+'>← '+l('السابقة','Vorherige')+'</button><button id="flashNext">'+(i===cards.length-1?l('ساليت','Fertig'):l('التالية','Nächste')+' →')+'</button></div>'+
  '<div class="flash-tools"><button id="flashSpeak">🔊 '+l('سمع بالألمانية','Deutsch anhören')+'</button>'+
  '<button id="flashBasket" class="'+(saved?'is-saved':'')+'">'+(saved?l('✓ فالسلة','✓ Im Lernkorb'):l('🛒 زيد للسلة','🛒 Zum Lernkorb'))+'</button></div>';
  app.querySelector('#flashBack').onclick=back;
  app.querySelector('#flashCard').onclick=()=>{flipped=!flipped;drawFlash()};
  app.querySelector('#flashPrev').onclick=()=>{if(i>0){i--;flipped=false;drawFlash()}};
  app.querySelector('#flashNext').onclick=()=>{if(i<cards.length-1){i++;flipped=false;drawFlash()}else back()};
  app.querySelector('#flashSpeak').onclick=()=>speak(p.de);
  app.querySelector('#flashBasket').onclick=()=>{if(saved)basketRemoveCard(p.ch,p.de);else basketAddCard(p.ch,p.de,p.ar);drawFlash()};
 }
 drawFlash();window.scrollTo(0,0);
}
function basketDrill(mode){
 const entries=basketItems();
 if(!entries.length){basketPage();return}
 const distractors=Object.keys(BOOKSETS).flatMap(k=>chapterCards(+k)).slice(0,200);
 const pick=(answer,pool)=>[answer,...shuffle([...new Set(pool.filter(x=>x!==answer))]).slice(0,3)];
 const qs=shuffle(entries).map(p=>{
  const id='basket:'+mode+':'+p.ch+':'+p.de;
  if(mode==='vocab')return {id,ch:p.ch,mode:'vocab',p:p.de,a:p.ar,de:p.de,why:p.ar,opts:pick(p.ar,entries.map(x=>x.ar).concat(distractors.map(x=>x[1])))};
  if(mode==='reverse')return {id,ch:p.ch,mode:'vocab',p:p.ar,a:p.de,de:p.de,why:p.ar,opts:pick(p.de,entries.map(x=>x.de).concat(distractors.map(x=>x[0])))};
  if(mode==='order')return {id,ch:p.ch,mode:'order',p:p.ar,a:p.de,de:p.de,why:p.ar};
  return {id,ch:p.ch,mode:'write',p:p.ar,a:p.de,de:p.de,why:p.ar};
 });
 session={ch:0,mode:'basket',basketMode:mode,fromBasket:true,qs,i:0,score:0,missed:[],locked:false};
 draw();
}
