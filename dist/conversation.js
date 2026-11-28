/* SPEKTRUM LAB — deterministic scripted conversation studio.
 * 95 coherent A1+/book-aligned scenes; no external AI, no repeating questions.
 * Free responses are only checked where rules are reliable.
 */
(()=>{
'use strict';
const chapters=WR_CONVERSATION_CHAPTERS;
const all=WR_CONVERSATION_TOPICS.map(t=>({...t,chapter:Number(t.id.match(/^k(\d+)-/)?.[1]||1)}));
const find=id=>all.find(t=>t.id===id);
const safe=s=>esc(String(s??""));
const get=id=>document.getElementById(id);
let selectedChapter=1,active=null,record=null,autoVoice=false,recognition=null,voiceListening=false;
const records=()=>{structure();st.lab.conversations??={};return st.lab.conversations};
const hidden=()=>!!st.lab.conversationSuggestionsHidden;
function saveSessions(){save()}
function stepFor(){return active&&record&&WR_SCRIPTED_SCENES[active.id]?.[record.stage]||null}
function total(t){return WR_SCRIPTED_SCENES[t.id]?.length||0}
function hadSession(t){return (records()[t.id]?.stage||0)>0}
function count(t){return Math.min(records()[t.id]?.stage||0,total(t))}
function bubble(value){return String(value||"").replace(/[\u0000-\u001f]/g," ").slice(0,500)}
function speakGerman(s){if(!window.speechSynthesis)return;speak(s)}
function stopVoice(){
 if(recognition){try{recognition.onresult=null;recognition.onend=null;recognition.abort()}catch{}}
 recognition=null;voiceListening=false;
}
function prepare(t){
 const r=records(),stages=WR_SCRIPTED_SCENES[t.id];
 let entry=r[t.id];
 if(!entry||entry.version!==3||!Array.isArray(entry.messages)){
  if(entry&&Array.isArray(entry.messages)){st.lab.conversationLegacy??={};st.lab.conversationLegacy[t.id]??=entry}
  entry={version:3,chapter:t.chapter,topicId:t.id,stage:0,pending:null,errors:[],messages:[{role:"assistant",de:stages[0].question,ary:stages[0].translation||t.opening_ary,stage:0}]};
  r[t.id]=entry;saveSessions();
 }
 if(entry.stage>stages.length||entry.stage<0)entry.stage=0;
 return entry;
}
function currentOptions(){
 const s=stepFor();if(!s)return [];
 const unique=[...new Set((s.choices||[]).filter(Boolean))];
 // An opening suggestion is the book-aligned sample; later steps give alternatives.
 return unique;
}
function listChapters(){
 return chapters.map(c=>'<button type=button data-chapter="'+c.no+'" class="'+(selectedChapter===c.no?'active':'')+'" aria-pressed="'+(selectedChapter===c.no)+'">Kapitel '+c.no+'</button>').join('');
}
function hub(){
 stopVoice();active=null;record=null;
 app.classList.add("conv-active");
 app.innerHTML='<div class=conv-hub>'+
 '<div class=conv-hub-top><button type=button class=conv-back id=convHome>← رجع للفصول</button><span class=conv-kicker>95 THEMEN · 12 KAPITEL</span></div>'+
 '<section class=conv-hero><div><span class=conv-kicker>GESPRÄCHSSTUDIO · OHNE KI</span><h1>تكلّم بالألمانية مع Worti</h1>'+
 '<p>حوار مبرمج ومنظم على كل موضوع: اختار الجواب، ولا جرب من راسك. تصحيح واضح بلا أحكام عشوائية.</p>'+
 '<div class=conv-feature-pills><span>🎙️ كلام أو كتابة</span><span>✅ 380 مرحلة حوار</span><span>👁️ تقدر تخبي الأجوبة</span><span>🇩🇪 A1+</span></div></div>'+
 '<img src=mascot/thinking.webp alt="Worti"></section>'+
 '<label class=conv-search><span>⌕</span><input id=convSearch placeholder="قلب على موضوع… / Thema suchen" aria-label="بحث فالمواضيع"><small id=convCount></small></label>'+
 '<nav class=conv-tabs id=convChapterTabs aria-label="اختار الفصل">'+listChapters()+'</nav>'+
 '<div id=convTopicList></div></div>';
 get("convHome").onclick=()=>{app.classList.remove("conv-active");home()};
 get("convSearch").addEventListener("input",topicsList);
 get("convChapterTabs").querySelectorAll("[data-chapter]").forEach(b=>b.onclick=()=>{
  selectedChapter=Number(b.dataset.chapter);
  get("convChapterTabs").querySelectorAll("[data-chapter]").forEach(button=>{
   const active=Number(button.dataset.chapter)===selectedChapter;
   button.classList.toggle("active",active);button.setAttribute("aria-pressed",String(active));
  });topicsList();
 });
 topicsList();
 window.scrollTo(0,0);
}
function topicsList(){
 const ch=chapters.find(c=>c.no===selectedChapter);
 const q=(get("convSearch")?.value||"").trim().toLocaleLowerCase("de");
 const choices=ch.topics.filter(t=>!q||[t.de,t.ary,t.role].some(s=>s.toLocaleLowerCase("de").includes(q)));
 get("convCount").textContent=choices.length+" موضوع";
 get("convTopicList").innerHTML=
 '<div class=conv-chapter-banner><strong>Kapitel '+ch.no+' · '+safe(ch.ary)+'</strong><small dir=ltr>'+safe(ch.title)+'</small></div>'+
 (choices.length?'<div class=conv-topic-grid>'+choices.map(t=>{
  const done=count(t),totalSteps=total(t);
  return '<button type=button class=conv-topic data-topic="'+t.id+'"><small>'+(done===totalSteps?'✓ مكتمل':done?'↻ كمّل الحوار':'● حوار جديد')+'</small>'+
   '<b dir=ltr>'+safe(t.de)+'</b><span>'+safe(t.ary)+'</span>'+
   '<em>🎭 '+safe(t.role)+' · '+done+' / '+totalSteps+' مراحل</em></button>';
 }).join('')+'</div>':'<div class=conv-empty>ما كاينش موضوع بهاد الاسم فهاد الفصل.</div>');
 get("convTopicList").querySelectorAll("[data-topic]").forEach(b=>b.onclick=()=>openTopic(b.dataset.topic));
}
function visibleSuggestions(){
 const el=get("convSuggestionChoices");if(!el)return;
 const current=stepFor(),options=currentOptions();
 const toggle=get("convToggleSuggestions");
 toggle.textContent=hidden()?"👁️ بيّن الاقتراحات":"🙈 خبّي الاقتراحات";
 toggle.setAttribute("aria-pressed",String(!hidden()));
 if(!current){
  el.hidden=true;el.innerHTML="";return;
 }
 el.hidden=hidden();
 el.innerHTML=options.map((t,i)=>'<button type=button class=conv-choice data-choice="'+i+'" dir=ltr lang=de>'+safe(t)+'</button>').join('');
 el.querySelectorAll("[data-choice]").forEach(button=>button.onclick=()=>{
  if(record.pending)return;
  sendText(options[Number(button.dataset.choice)],true);
 });
}
function speechButtons(){
 const content=get("convMessages");if(!content)return;
 content.querySelectorAll("[data-say]").forEach(button=>button.onclick=()=>{
  const msg=record.messages[+button.dataset.say];
  if(msg?.de)speakGerman(msg.de);
 });
 content.querySelectorAll("[data-translate]").forEach(button=>button.onclick=()=>{
  const p=content.querySelector('[data-translation="'+button.dataset.translate+'"]');
  if(!p)return;p.hidden=!p.hidden;button.textContent=p.hidden?"ترجمة":"خبّي الترجمة";
 });
}
function bubbleMarkup(m,i){
 if(m.role==="assistant")return '<div class="conv-bubble-row bot"><span class=conv-bubble-face>✦</span><div class=conv-bubble>'+
 '<span class=conv-de lang=de>'+safe(m.de)+'</span>'+
 (m.ary?'<p class=conv-translate data-translation="'+i+'" hidden>'+safe(m.ary)+'</p>':'')+
 '<div class=conv-message-actions><button data-say="'+i+'" type=button>🔊 سمع</button>'+
 (m.ary?'<button data-translate="'+i+'" type=button>ترجمة</button>':'')+
 '</div></div></div>';
 return '<div class="conv-bubble-row student"><span class=conv-bubble-face>◉</span><div class=conv-bubble>'+
 '<span class=conv-de dir=ltr>'+safe(m.content)+'</span>'+
 (m.validation==="good"?'<p class="conv-judgment conv-ok">✓ جواب من الاقتراحات أو مطابق للقاعدة</p>':'')+
 (m.validation==="fix"?'<div class="conv-judgment conv-error"><strong>✎ خاص تصحيح</strong><p dir=ltr>'+safe(m.corrected)+'</p><small>'+safe(m.reason)+'</small></div>':'')+
 (m.validation==="unverified"?'<div class="conv-judgment conv-neutral">ما قدرناش نتحقق من هاد الجملة آلياً، ماشي بالضرورة غلط.</div>':'')+
 '</div></div>';
}
function scrollMessages(){
 const pane=get("convMessages");if(!pane)return;
 pane.scrollTop=pane.scrollHeight;
}
function render(){
 if(!active||!record||!get("convMessages"))return;
 get("convMessages").innerHTML=record.messages.map(bubbleMarkup).join("")+
 (record.stage>=total(active)?'<div class=conv-end><strong>🎉 Sehr gut! الحوار سالى.</strong><p>كملتي سيناريو '+safe(active.de)+' بلا تكرار الأسئلة. اختار موضوع آخر أو عاود السيناريو.</p><button type=button id=convNewTopic>موضوع آخر ←</button><button type=button id=convReplay>عاود هاد الحوار ↻</button></div>':'');
 speechButtons();
 if(get("convNewTopic"))get("convNewTopic").onclick=hub;
 if(get("convReplay"))get("convReplay").onclick=resetTopic;
 const done=record.stage>=total(active);
 get("convReplyPanel").hidden=done;
 get("convStageCount").textContent=(done?"✓ "+total(active):Math.min(record.stage+1,total(active)))+" / "+total(active);
 get("convStatus").textContent=done?"✓ تمّ الحوار · اختار موضوع جديد":record.pending?"✎ صحّح جوابك أو طبّق التصحيح":"● محادثة مبرمجة · بلا AI";
 const pending=get("convPending");
 pending.hidden=!record.pending;
 pending.innerHTML=record.pending?
  '<strong>كاين خطأ واضح، صححو قبل السؤال الموالي.</strong><p dir=ltr>'+safe(record.pending.corrected)+'</p><small>'+safe(record.pending.info)+'</small>'+
  '<div class=conv-pending-actions><button type=button id=convEditCorrection>عاود نكتب الجواب</button><button type=button id=convApplyCorrection>✓ طبّق التصحيح وكمل</button></div>':"";
 if(record.pending){
  get("convEditCorrection").onclick=()=>{
   const box=get("convInput");box.value=record.pending.original;box.focus();get("convPending").hidden=true;
  };
  get("convApplyCorrection").onclick=()=>acceptCorrection();
 }
 visibleSuggestions();
 requestAnimationFrame(scrollMessages);
}
function goNext(text,validation){
 record.pending=null;
 record.stage++;
 if(record.stage<total(active)){
  const step=stepFor();
  record.messages.push({role:"assistant",de:step.question,ary:step.translation||"",stage:record.stage});
 }else{
  record.messages.push({role:"assistant",de:"Vielen Dank! Das war ein gutes Gespräch.",ary:"شكراً بزاف! كان حوار زوين.",stage:record.stage});
 }
 record.updated=new Date().toISOString();saveSessions();
 render();
 if(autoVoice){
  const last=record.messages.at(-1);if(last?.de)speakGerman(last.de);
 }
}
function acceptCorrection(){
 if(!record?.pending)return;
 const corrected=record.pending.corrected;
 record.messages.push({role:"student",content:corrected,validation:"good"});
 goNext(corrected,"corrected");
}
function sendText(value,choice=false){
 if(!active||!record||record.stage>=total(active))return;
 const text=bubble(value).trim();if(!text)return;
 const input=get("convInput");input.value="";
 const step=stepFor();
 const check=choice?{type:"good",info:"جواب مقترح"}:WR_CHECKER.check(text,step);
 record.messages.push({role:"student",content:text,validation:check.type,corrected:check.corrected||"",reason:check.info||""});
 if(check.type==="fix"){
  record.pending={original:text,corrected:check.corrected,info:check.info};
  record.errors.push({step:record.stage,original:text,corrected:check.corrected});
  record.updated=new Date().toISOString();saveSessions();render();return;
 }
 if(check.type==="unverified"){
  // Advance the scripted scene without pretending to have validated open-ended grammar.
  // The response is visibly labeled unverified in the transcript.
 }
 goNext(text,check.type);
}
function resetTopic(){
 if(!active||!confirm("تبغي تعاود هاد الموضوع من الأول؟ المحادثة الحالية غادي تتبدل."))return;
 delete records()[active.id];saveSessions();openTopic(active.id);
}
function adjustViewport(){
 const dialog=get("convDialog");if(!dialog)return;
 const vh=Math.round(window.visualViewport?.height||window.innerHeight);
 const rect=dialog.getBoundingClientRect();
 const room=Math.max(335,vh-Math.max(rect.top,0)-9);
 dialog.style.setProperty("height",room+"px","important");
}
function openTopic(id){
 const t=find(id);if(!t||!WR_SCRIPTED_SCENES[id])return;
 stopVoice();active=t;selectedChapter=t.chapter;record=prepare(t);
 app.classList.add("conv-active");
 app.innerHTML='<div class=conv-hub-top><button type=button class=conv-back id=convBack>← المواضيع</button>'+
 '<span class=conv-kicker>Kapitel '+t.chapter+' · '+safe(t.ary)+'</span></div>'+
 '<section class=conv-dialog id=convDialog><div class=conv-dialog-header>'+
 '<div class=conv-dialog-title><div class=conv-dialog-avatar><img src=mascot/thinking.webp alt=""></div><div><b lang=de dir=ltr>'+safe(t.de)+'</b><span>🎭 '+safe(t.role)+'</span></div></div>'+
 '<button type=button id=convReset aria-label="إعادة المحادثة">↻ جديد</button></div>'+
 '<div class=conv-dialog-status><span id=convStatus>● محادثة مبرمجة · بلا AI</span><span id=convStageCount></span></div>'+
 '<div id=convMessages class=conv-dialog-messages role=log aria-label="محادثة ألمانية"></div>'+
 '<div id=convReplyPanel class=conv-dialog-bottom>'+
 '<div id=convPending class=conv-pending aria-live=polite hidden></div>'+
 '<div class=conv-options-header><b>ردّك بالألمانية</b><button id=convToggleSuggestions type=button>🙈 خبّي الاقتراحات</button></div>'+
 '<div id=convSuggestionChoices class=conv-suggestion-choices></div>'+
 '<div class=conv-input-row><button type=button class=conv-mic id=convMic title="تكلم بالألمانية" aria-label="الميكروفون">🎙️</button>'+
 '<textarea id=convInput rows=1 maxlength=500 placeholder="Antworte auf Deutsch …" aria-label="جوابك بالألمانية" dir=ltr></textarea>'+
 '<button id=convSend type=button class=conv-send title="إرسال">➤</button></div>'+
 '<div class=conv-bottom-tools><span id=convVoiceNote>قرا السؤال وجاوب من راسك</span><button id=convVoiceAuto type=button>🔈 النطق التلقائي: مطفي</button></div>'+
 '</div></section>';
 get("convBack").onclick=hub;get("convReset").onclick=resetTopic;
 get("convSend").onclick=()=>sendText(get("convInput").value);
 get("convInput").addEventListener("keydown",ev=>{
  if(ev.key==="Enter"&&!ev.shiftKey){ev.preventDefault();sendText(get("convInput").value)}
 });
 get("convMic").onclick=toggleMic;
 get("convToggleSuggestions").onclick=()=>{
  st.lab.conversationSuggestionsHidden=!hidden();saveSessions();visibleSuggestions();
 };
 get("convVoiceAuto").onclick=()=>{
  autoVoice=!autoVoice;get("convVoiceAuto").textContent=(autoVoice?"🔊":"🔈")+" النطق التلقائي: "+(autoVoice?"خدام":"مطفي");
 };
 render();adjustViewport();window.scrollTo(0,0);
}
function toggleMic(){
 if(voiceListening){stopVoice();get("convMic")?.classList.remove("listening");return}
 const API=window.SpeechRecognition||window.webkitSpeechRecognition;
 if(!API){get("convVoiceNote").textContent="المتصفح ما كيدعمش التعرف الصوتي. تقدر تستعمل كيبورد الصوت أو الكتابة.";return}
 recognition=new API();const rec=recognition;voiceListening=true;
 rec.lang="de-DE";rec.continuous=false;rec.interimResults=true;rec.maxAlternatives=1;
 get("convMic").classList.add("listening");
 get("convVoiceNote").textContent="🎙️ هضر دابا بالألمانية…";
 rec.onresult=event=>{
  const results=[];for(let i=0;i<event.results.length;i++)results.push(event.results[i][0]?.transcript||"");
  const box=get("convInput");if(box)box.value=results.join(" ").trim();
 };
 rec.onerror=()=>{const el=get("convVoiceNote");if(el)el.textContent="المايك ما خدمش. جرّب سمح ليه فالاعدادات، أو كتب جوابك."};
 rec.onend=()=>{recognition=null;voiceListening=false;get("convMic")?.classList.remove("listening")};
 try{rec.start()}catch{recognition=null;voiceListening=false;get("convVoiceNote").textContent="تعذر تشغيل الميكروفون."}
}
window.conversationHub=hub;
window.addEventListener("resize",()=>{if(active)adjustViewport()},{passive:true});
window.visualViewport?.addEventListener("resize",()=>{if(active)adjustViewport()},{passive:true});
})();