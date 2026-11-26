'use strict';
const $=s=>document.querySelector(s),app=$('#app'),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
let st={c:1,d:1,xp:0,miss:{},done:{},lab:{cards:{},exams:{},drafts:{}}};try{Object.assign(st,JSON.parse(localStorage.getItem('wortreise')||'{}'))}catch{}
function structure(){st.lab??={cards:{},exams:{},drafts:{}};for(let k of ['cards','exams','drafts'])st.lab[k]??={};st.xp=Number(st.xp)||0}
function save(){structure();try{localStorage.setItem(window.wrUser?'wrProgress:'+window.wrUser:'wortreise',JSON.stringify(st));window.wrChanged?.()}catch{}$('#points').textContent='★ '+st.xp}
const bank=[];function add(q){bank.push(q)}
COURSE.forEach((c,ix)=>{let ch=ix+1,days=DAYS.filter(d=>d.c===ch),phrases=days.flatMap(d=>d.cards),nouns=[...new Map(days.flatMap(d=>d.n).map(x=>[x[0],x])).values()];
c[2].forEach(([p,a,o,why],i)=>add({id:ch+'g'+i,ch,mode:'grammar',p,a,opts:[a,...o.split('|')],why}));
phrases.forEach(([de,ar],i)=>{
 let opts=[ar,...shuffle([...new Set(phrases.map(x=>x[1]).filter(x=>x!==ar))]).slice(0,3)];
 add({id:ch+'v'+i,ch,mode:'vocab',p:de,a:ar,opts,why:de+' = '+ar,de});
 if(de.split(/\s+/).length>2&&!de.includes('–'))add({id:ch+'o'+i,ch,mode:'order',p:ar,a:de,de});
 add({id:ch+'t'+i,ch,mode:'write',p:ar,a:de,de});
 add({id:ch+'l'+i,ch,mode:'listen',p:'سمع الجملة وكتب شنو سمعتي.',a:de,de});
});
nouns.filter(x=>/^(der|die|das) /.test(x[0])).forEach(([de,ar],i)=>add({id:ch+'a'+i,ch,mode:'article',p:de.replace(/^\S+ /,'')+' · '+ar,a:de.split(' ')[0],opts:['der','die','das'],why:de,de}));
c[4].forEach(([p,a,o],i)=>add({id:ch+'r'+i,ch,mode:'read',p,a,opts:[a,...o.split('|')],text:c[3],why:c[3]}))
});
let current=1,session=null,voiceOK=false;
function speak(t){if(!window.speechSynthesis){alert('النطق غير متوفر فهاد المتصفح. استعمل تمارين الكتابة أو جهاز كيدعم الصوت.');return}speechSynthesis.cancel();let u=new SpeechSynthesisUtterance(t);u.lang='de-DE';u.rate=.82;let v=speechSynthesis.getVoices().find(v=>v.lang.startsWith('de'));if(v)u.voice=v;speechSynthesis.speak(u)}
function norm(s){return s.normalize('NFC').replace(/[.,!?;:„“"…]/g,'').replace(/\s+/g,' ').trim()}
function home(){save();session=null;let tested=Object.keys(st.lab.exams).length,learned=Object.values(st.lab.cards).filter(x=>x.streak>=2).length;app.innerHTML='<section class="hero cover"><span class=cap>A1 • SPEKTRUM DEUTSCH</span><h1>رحلة الألمانية</h1><p>12 فصل. مهمّات قصيرة. تقدّم كيبان بالممارسة.</p>'+basketHeroMarkup()+'</section>'+mascot('welcome','مرحبا! كل محاولة كتزيدك خطوة. نبدأو؟',true)+'<div class=stats><span>'+learned+' بطاقة نجحتي فيها مرتين متتابعتين</span><span>'+tested+' اختبار مجرّب</span></div><div class=navline><button id=weak>راجع الأخطاء</button><span class=questioncount>'+Object.keys(BOOKSETS).reduce((n,k)=>n+chapterCards(+k).length,0)+' بطاقة</span></div><div class=chaptergrid>'+COURSE.map((c,i)=>{let e=st.lab.exams[i+1];return '<button class=chapter data-ch="'+(i+1)+'"><em>Kapitel '+(i+1)+'</em><h3>'+esc(c[0])+'</h3><small dir=ltr>'+esc(DAYS.find(d=>d.c===i+1).title)+'</small><small>'+ (chapterCards(i+1).length+' · Wörter und Wendungen'+(e?' · اختبار سابق: '+e.score+' / '+e.total:''))+'</small></button>'}).join('')+'</div>';app.querySelectorAll('[data-ch]').forEach(b=>b.onclick=()=>chapter(+b.dataset.ch));$('#weak').onclick=()=>launch(0,'review');bindBasketHero()}
function chapter(ch){current=ch;save();let c=COURSE[ch-1],modes=[['vocab','المفردات والمعنى','Wörter und Wendungen']];
app.innerHTML='<div class=navline><button id=map>الفصول</button><span>Kapitel '+ch+'</span></div><section class=hero><span class=cap>'+esc(c[0])+'</span><h2>'+esc(DAYS.find(d=>d.c===ch).title)+'</h2><p>'+chapterCards(ch).length+' · Wörter und Wendungen</p></section><div class=missiongrid>'+modes.map(([k,t,d])=>'<button class=lesson data-mode='+k+'>'+t+'<small>'+d+'</small></button>').join('')+'</div><button class=gold id=exam>Kleiner Abschlusstest · اختبار الفصل</button><p class=tip>Spektrum Deutsch A1+ · 20 Punkte</p>';$('#map').onclick=home;$('#exam').onclick=()=>originalExam(ch);app.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>b.dataset.mode==='free'?free(ch):launch(ch,b.dataset.mode))}
function launch(ch,mode){if(mode==="vocab"||mode==="vocabSet")return vocabMenu(ch);structure();let pool;if(mode==='review')pool=Object.keys(BOOKSETS).flatMap(k=>['vocab','reverse','order','write'].flatMap(m=>bookQuestions(+k,m,true))).filter(q=>st.lab.cards[q.id]?.wrong>0&&st.lab.cards[q.id]?.streak<2);else if(mode==='exam'){let groups=['vocab','article','grammar','order','write'];pool=groups.flatMap(m=>shuffle(bank.filter(q=>q.ch===ch&&q.mode===m)).slice(0,4))}else pool=bank.filter(q=>q.ch===ch&&q.mode===mode);
if(!pool.length){alert('ما كايناش أخطاء خاصها المراجعة دابا. جرّب شي فصل.');return}session={ch,mode,qs:shuffle(pool).slice(0,mode==='exam'?20:mode==='review'?15:8),i:0,score:0,missed:[],locked:false};draw()}
function navback(){if(confirm('تخرج من الجولة؟ الأجوبة اللي درتي محفوظة.'))(session?.fromBasket?basketPage():chapter(current))}
function draw(){let s=session,q=s.qs[s.i];s.locked=false;document.activeElement?.blur?.();app.innerHTML='<div class=navline><button id=exit>خرج من الجولة</button><span class=questioncount>'+(s.i+1)+' / '+s.qs.length+'</span></div><progress max='+s.qs.length+' value='+s.i+'></progress>'+(q.text?'<section class="card german">'+esc(q.text)+'</section>':'')+'<section class="card practice-card"><span class=cap>'+esc({vocab:'المعنى',grammar:'القواعد',article:'الأداة',order:'رتّب الجملة',write:'كتب بالألمانية',listen:'سمع واكتب',read:'الفهم'}[q.mode])+'</span>'+mascot('thinking','خد وقتك، قرا السؤال وجرّب من راسك.')+'<div class=prompt dir=auto>'+((s.mode!=='vocabSet'&&q.mode==='vocab'||q.mode==='read'||q.mode==='grammar')?hulpCard(q.p):esc(q.p))+'</div><div id=practiceBasketSlot class=practice-basket-slot></div><div id=work></div><div id=feedback aria-live=polite></div></section>';$('#exit').onclick=navback;let w=$('#work');renderBasketAddButton($('#practiceBasketSlot'),q);
if(q.opts){shuffle(q.opts).forEach(v=>{let b=document.createElement('button');b.textContent=v;if(q.mode==='article')b.className='article-'+v;b.onclick=()=>check(v);w.append(b)})}
else if(q.mode==='order'){let words=q.a.split(/\s+/),selected=[];w.innerHTML='<div class=answerline></div><div class=tiles dir=ltr></div><button id=undo>رجّع آخر كلمة</button><button id=submit class=gold>صحّح</button>';shuffle(words.map((v,i)=>({v,i}))).forEach(o=>{let b=document.createElement('button');b.className='tile';b.textContent=o.v;b.onclick=()=>{selected.push({b,v:o.v});b.disabled=true;w.querySelector('.answerline').textContent=selected.map(x=>x.v).join(' ')};w.querySelector('.tiles').append(b)});$('#undo').onclick=()=>{let o=selected.pop();if(o)o.b.disabled=false;w.querySelector('.answerline').textContent=selected.map(x=>x.v).join(' ')};$('#submit').onclick=()=>check(selected.map(x=>x.v).join(' '))}
else{w.innerHTML=(q.mode==='listen'?'<button id=audio>سمع الجملة 🔊</button>':'')+'<form id=qform><label>الجواب بالألمانية<input name=answer dir=ltr autocomplete=off autocapitalize=sentences enterkeyhint=done required></label><button class=gold>صحّح</button></form>';if($('#audio'))$('#audio').onclick=()=>speak(q.de);$('#qform').onsubmit=e=>{e.preventDefault();check(e.target.answer.value)}}
if(s.mode!=='exam'){let hint=document.createElement('button');hint.id='askHint';hint.textContent='💡 بغيت تلميحة';hint.onclick=()=>{hint.disabled=true;setPracticeCoach('hint',hintText(q))};w.append(hint)}
let skip=document.createElement('button');skip.textContent='ما تذكرتش • ورّيني';skip.onclick=()=>check('');w.append(skip);window.scrollTo(0,0)}
// One companion stays at the same position from question to answer.
// Only its pose/image and message change; the feedback doesn't add another coach.
function setPracticeCoach(state,message){
 const host=app.querySelector('.practice-card > .coach');
 if(!host)return;
 for(const name of ['thinking','hint','correct','encourage'])host.classList.remove('coach-'+name);
 host.classList.add('coach-'+state);
 const portrait=host.querySelector('.coach-portrait img');
 if(portrait)portrait.src='mascot/'+state+'.webp';
 const text=host.querySelector('p');
 if(text){
   text.textContent=message;
   text.setAttribute('aria-live','polite');
 }
}
function renderFeedbackBasket(q){
 const btn=$('#feedbackBasket'),pair=basketPairForQuestion(q);
 if(!btn||!pair)return;
 basketButtonUpdate(btn,pair);
 btn.onclick=()=>{if(!hasBasketCard(pair.ch,pair.de))basketAddCard(pair.ch,pair.de,pair.ar);basketButtonUpdate(btn,pair);basketButtonUpdate($('.practice-basket-slot .basket-add-button'),pair)};
}
function check(v){
 const s=session;
 if(s.locked)return;
 s.locked=true;
 document.activeElement?.blur?.();
 const q=s.qs[s.i],ok=norm(v)===norm(q.a),caseOnly=!ok&&norm(v).toLowerCase()===norm(q.a).toLowerCase();
 const r=st.lab.cards[q.id]||{streak:0,wrong:0,seen:0};
 r.seen++;
 if(ok){s.score++;r.streak++;if(r.streak<=2)st.xp+=10}
 else{r.wrong++;r.streak=0;s.missed.push(q)}
 st.lab.cards[q.id]=r;
 save();
 const work=$('#work');
 work.querySelectorAll('input,button').forEach(b=>b.disabled=true);
 // Keep all the question's choices and the companion in their original slots.
 if(q.opts){
   work.querySelectorAll('button').forEach(b=>{
     if(b.textContent===v){
       b.classList.add('practice-picked',ok?'is-correct':'is-incorrect');
       b.setAttribute('aria-pressed','true');
     }
   });
 }
 setPracticeCoach(ok?'correct':'encourage',ok?'مزيان! كمّل بنفس التركيز.':'الغلط فرصة للتعلّم. ركّز على التصحيح.');
 const feedback=$('#feedback');
 // Overlay feedback inside the same answer area; never move the coach or question.
 work.append(feedback);
 work.classList.add('is-answered');
 feedback.setAttribute('role','status');
 feedback.className='feedback practice-feedback feedback-overlay '+(ok?'is-correct':'is-incorrect');
 feedback.innerHTML='<b>'+(ok?'✓ صحيح':caseOnly?'قريب! راجع الحروف الكبيرة والصغيرة.':'راجع الجواب وجرّب تفهم السبب')+'</b>'+
   '<p dir=auto>'+esc(q.a)+'</p>'+
   '<p class=tip dir=auto>'+esc(q.why||q.de||'ركّز فترتيب الكلمات والأسماء بحروف كبيرة. كاينة صيغ أخرى صحيحة؛ هاد التمرين كيتطلب صيغة البطاقة.')+'</p>'+
   (q.de?'<button id=speak>سمع النطق 🔊</button>':'')+
   (basketPairForQuestion(q)?'<button id=feedbackBasket type=button>🛒 زيد للسلة</button>':'')+'<button class=gold id=next>'+(s.i+1===s.qs.length?'النتيجة':'السؤال الموالي')+'</button>';
 if($('#speak'))$('#speak').onclick=()=>speak(q.de);
 if($('#feedbackBasket'))renderFeedbackBasket(q);
 $('#next').onclick=()=>++s.i<s.qs.length?draw():finish();
 // No forced scroll: selecting an answer shouldn't jump the viewport or move the companion.
}
function finish(){let s=session;if(s.mode==='exam')st.lab.exams[s.ch]={score:s.score,total:s.qs.length,date:new Date().toISOString()};save();app.innerHTML=mascot(s.score/s.qs.length>=.8?'celebrate':'encourage',s.score/s.qs.length>=.8?'برافو! كمّلتي الجولة. نجرّبو تحدّي آخر؟':'كمّلتي الجولة. دابا عرفنا شنو نراجعو.',true)+'<section class=hero><span class=cap>نتيجة الجولة</span><h1>'+s.score+' / '+s.qs.length+'</h1><p>'+ (s.score/s.qs.length>=.8?'جرّب دابا طريقة أخرى بنفس العبارات.':'الأخطاء كتعطيك خريطة المراجعة. عاود جرّبهم من بعد.')+'</p></section>'+s.missed.map(q=>'<div class=card><p dir=auto>'+esc(q.p)+'</p><p dir=auto>'+esc(q.a)+'</p></div>').join('')+'<button id=retry>'+ (s.mode==='vocabSet'?'بدّل طريقة التدريب':'جولة أخرى')+'</button><button id=chapter>رجع للفصل</button>';$('#retry').onclick=()=>s.fromBasket?basketDrill(s.basketMode):launch(s.ch,s.mode);$('#chapter').onclick=()=>s.fromBasket?basketPage():chapter(s.ch||current);window.scrollTo(0,0)}
function free(ch){let c=COURSE[ch-1];app.innerHTML='<section class=card><h2>مهمة التواصل</h2><p>'+esc(c[5])+'</p><p class=tip>هاد النشاط للتقييم الذاتي، ماشي تصحيح آلي. تقدر تصيفط ليا النص فـChatGPT باش نصححو بالتفصيل.</p><textarea dir=ltr aria-label="النص بالألمانية" placeholder="Schreib hier …"></textarea><p id=words></p><details><summary>شوف المساعد من بعد المحاولة</summary><p dir=ltr>'+esc(c[6])+'</p><p>راجع: واش جاوبت على المطلوب؟ واش الفعل فبلاصتو؟ الأسماء بحروف كبيرة؟ قرا النص بصوتك مرة بلا ما تشوف.</p></details><button id=copy>نسخ النص للتصحيح</button><button id=back>رجع للفصل</button></section>';let t=app.querySelector('textarea');t.value=st.lab.drafts[ch]||'';const upd=()=>{$('#words').textContent=t.value.trim()?t.value.trim().split(/\s+/).length+' كلمة':'0 كلمة';st.lab.drafts[ch]=t.value;save()};t.oninput=upd;upd();$('#copy').onclick=async()=>{try{await navigator.clipboard.writeText(t.value);$('#copy').textContent='تنسخ النص ✓'}catch{$('#copy').textContent='حدّد النص ونسخو يدوياً'}};$('#back').onclick=()=>chapter(ch)}
home();
