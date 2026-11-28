/* Spektrum Lab — Gesprächsstudio.
   95 topics from the book's course overview; practice lines are independently written.
   Stores text sessions with existing app progress (including Supabase sync if signed in).
   Voice recognition is available only when the device/browser provides the API.
 */
(()=>{
 'use strict';
 const TOPICS=WR_CONVERSATION_TOPICS,CHAPTERS=WR_CONVERSATION_CHAPTERS;
 let selectedChapter=1,activeTopic=null,busy=false,recognition=null,autoVoice=false,voiceListening=false;
 let stage=null,lastHint='',mode='ready';
 const findTopic=id=>TOPICS.find(t=>t.id===id);
 const safe=s=>esc(s==null?'':s);
 const records=()=>{
  structure();
  if(!st.lab.conversations||typeof st.lab.conversations!=='object')st.lab.conversations={};
  return st.lab.conversations;
 };
 const getRecord=id=>records()[id];
 const persist=()=>save();
 const fallbackQuestions={
  1:["Freut mich! Und was machst du gern?","Welche Sprache lernst du?","Warum lernst du Deutsch?","Was möchtest du noch wissen?"],
  2:["Was machst du bei der Arbeit?","Arbeitest du allein oder im Team?","Hast du Geschwister?","Erzähl mir bitte mehr über deine Familie."],
  3:["Möchten Sie noch etwas?","Wie lange möchten Sie bleiben?","Wo möchten Sie hingehen?","Brauchen Sie noch eine Information?"],
  4:["Um wie viel Uhr machst du das?","Was machst du danach?","Was machst du am Abend?","Hast du morgen Zeit?"],
  5:["Was möchten Sie trinken?","Magst du das Essen?","Was isst du normalerweise?","Möchten Sie noch etwas bestellen?"],
  6:["Was hast du gestern noch gemacht?","Wie war das für dich?","Hast du am Wochenende gearbeitet?","Was möchtest du als Nächstes lernen?"],
  7:["Wann möchtest du fahren?","Wie ist das Wetter dort?","Fährst du mit dem Bus oder mit dem Zug?","Was machst du im Urlaub?"],
  8:["Welche Größe brauchst du?","Welche Farbe gefällt dir?","Möchtest du das anprobieren?","Wie findest du den Preis?"],
  9:["Wann hast du Zeit?","Was ist genau das Problem?","Kannst du den Termin verschieben?","Wann ist das Treffen?"],
 10:["Wie oft machst du das?","Seit wann tut es dir weh?","Hast du heute Zeit für einen Termin?","Was machst du für deine Gesundheit?"],
 11:["Wie viele Zimmer brauchst du?","Wie hoch ist die Miete?","Welche Möbel brauchst du?","Ist die Wohnung groß?"],
 12:["Welche Sehenswürdigkeit möchtest du sehen?","Wann findet die Veranstaltung statt?","Kommst du am Samstag?","Was möchtest du in Berlin machen?"]
 };
 const e=(id)=>document.getElementById(id);
 function count(t){return Math.max(0,(getRecord(t.id)?.messages||[]).filter(m=>m.role==='user').length)}
 function chapterMarkup(c){
  const sel=c.no===selectedChapter;
  return '<button type=button class="'+(sel?'active':'')+'" data-cchapter="'+c.no+'" aria-pressed="'+sel+'">Kapitel '+c.no+'</button>';
 }
 function hub(){
  activeTopic=null;busy=false;mode='ready';stopRecognition();
  app.classList.add('conv-active');
  app.innerHTML='<div class=conv-hub>'+
   '<div class=conv-hub-top><button type=button class="conv-back" id=convHome>← رجع للفصول</button><span class=conv-kicker>95 THEMEN · A1+</span></div>'+
   '<section class=conv-hero><div><span class=conv-kicker>GESPRÄCHSSTUDIO</span><h1>تكلّم بالألمانية مع Worti</h1><p>اختار الموضوع، جرّب تجاوب بصوتك أو بالكتابة، وخذ تصحيح قصير بالدارجة. هنا ما كاينش امتحان، كاينة ممارسة حقيقية.</p><div class=conv-feature-pills><span>🎙️ كلام أو كتابة</span><span>🇩🇪 مستوى A1+</span><span>✨ تصحيح فالحين</span><span>12 Kapitel</span></div></div><img src="mascot/thinking.webp" alt="شخصية المدربة Worti"></section>'+
   '<label class=conv-search><span>⌕</span><input id=convSearch placeholder="قلب على موضوع… / Thema suchen" aria-label="بحث على موضوع"><small id=convCount></small></label>'+
   '<nav class=conv-tabs id=convChapterTabs aria-label="اختيار الفصل">'+CHAPTERS.map(chapterMarkup).join('')+'</nav>'+
   '<div id=convTopicList></div></div>';
  e('convHome').onclick=()=>{app.classList.remove('conv-active');home()};
  e('convChapterTabs').querySelectorAll('[data-cchapter]').forEach(button=>button.onclick=()=>{
   selectedChapter=Number(button.dataset.cchapter);
   e('convChapterTabs').querySelectorAll('button').forEach(b=>{const selected=Number(b.dataset.cchapter)===selectedChapter;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected))});
   updateTopics();
  });
  e('convSearch').addEventListener('input',updateTopics);
  updateTopics();
  window.scrollTo(0,0);
 }
 function updateTopics(){
  const query=(e('convSearch')?.value||'').toLocaleLowerCase().trim();
  const chosen=CHAPTERS.find(c=>c.no===selectedChapter);
  const topics=chosen.topics.filter(t=>!query||[t.de,t.ary,t.role,t.id].some(s=>s.toLocaleLowerCase().includes(query)));
  e('convCount').textContent=topics.length+' موضوع';
  e('convTopicList').innerHTML=
   '<div class=conv-chapter-banner><strong>Kapitel '+chosen.no+' · '+safe(chosen.ary)+'</strong><small dir=ltr>'+safe(chosen.title)+'</small></div>'+
   (topics.length?'<div class=conv-topic-grid>'+topics.map(t=>'<button type=button class=conv-topic data-topic="'+t.id+'"><small>● '+(count(t)?'تابع المحادثة':'موضوع جديد')+'</small><b dir=ltr>'+safe(t.de)+'</b><span>'+safe(t.ary)+'</span><em>🎭 '+safe(t.role)+' · '+count(t)+' رسائل منك</em></button>').join('')+'</div>':'<div class=conv-empty>ما لقيناش موضوع بهاد الاسم فهاد الفصل.</div>');
  e('convTopicList').querySelectorAll('[data-topic]').forEach(b=>b.onclick=()=>openTopic(b.dataset.topic));
 }
 function sessionFor(topic){
  const all=records();
  if(!all[topic.id]||!Array.isArray(all[topic.id].messages)){
   all[topic.id]={topicId:topic.id,chapter:topic.chapter,started:new Date().toISOString(),messages:[{role:'assistant',de:topic.opening,ary:topic.opening_ary,suggestion_de:topic.example,mode:'opening'}]};
   persist();
  }
  return all[topic.id];
 }
 function stopRecognition(){
  if(!recognition)return;
  try{recognition.onend=null;recognition.abort()}catch{}
  recognition=null;voiceListening=false;
 }
 function speechOutput(text){
  if(!('speechSynthesis' in window))return;
  speak(text);
 }
 function renderBubble(message,index){
  const bot=message.role==='assistant';
  const key=String(index);
  if(!bot)return '<div class="conv-bubble-row student"><span class=conv-bubble-face>◉</span><div class=conv-bubble><span class=conv-de dir=ltr>'+safe(message.content)+'</span></div></div>';
  return '<div class="conv-bubble-row bot"><span class=conv-bubble-face>✦</span><div class=conv-bubble>'+
   '<span class=conv-de lang=de>'+safe(message.de)+'</span>'+
   (message.correction_de?'<p class=conv-coaching><strong>✎ اقتراح تصحيح:</strong><br><span dir=ltr>'+safe(message.correction_de)+'</span>'+(message.feedback_ary?'<br>'+safe(message.feedback_ary):'')+'</p>':message.feedback_ary&&message.mode==='ai'?'<p class=conv-coaching>'+safe(message.feedback_ary)+'</p>':'')+
   (message.ary?'<p class=conv-translate data-translation="'+key+'" hidden>'+safe(message.ary)+'</p>':'')+
   '<div class=conv-message-actions><button type=button data-say="'+key+'">🔊 سمع</button>'+
   (message.ary?'<button type=button data-translate="'+key+'">ترجمة</button>':'')+
   '</div></div></div>';
 }
 function drawMessages(){
  if(!activeTopic||!e('convMessages'))return;
  const messages=sessionFor(activeTopic).messages;
  e('convMessages').innerHTML=messages.map(renderBubble).join('')+(busy?'<div class=conv-waiting aria-live=polite><span></span><span></span><span></span> Worti كيفكّر...</div>':'');
  e('convMessages').querySelectorAll('[data-say]').forEach(btn=>btn.onclick=()=>{
   const m=messages[Number(btn.dataset.say)];if(m?.de)speechOutput(m.de);
  });
  e('convMessages').querySelectorAll('[data-translate]').forEach(btn=>btn.onclick=()=>{
   const p=e('convMessages').querySelector('[data-translation="'+btn.dataset.translate+'"]');
   if(p){p.hidden=!p.hidden;btn.textContent=p.hidden?'ترجمة':'خبّي الترجمة'}
  });
  const last=messages.filter(m=>m.role==='assistant').at(-1);
  lastHint=last?.suggestion_de||activeTopic.example;
  const hint=e('convHint');
  if(hint)hint.textContent='💡 '+lastHint;
  const scroll=e('convMessages');
  requestAnimationFrame(()=>{if(scroll)scroll.scrollTop=scroll.scrollHeight});
 }
 function statusText(){
  const status=e('convStatus');if(!status)return;
  const label=mode==='ai'?'● Worti AI · محادثة حقيقية بالألمانية':mode==='guided'?'● تدريب موجه · خدمة AI ما متاحةش دابا':'● محادثة A1+ · اختار كيفاش تجاوب';
  status.textContent=label;
  status.dataset.mode=mode;
 }
 function adaptViewport(){
  const box=e('convDialog');if(!box)return;
  const vv=window.visualViewport;
  const h=Math.round(vv?.height||window.innerHeight);
  const header=document.querySelector('main > header');
  const b=header?.getBoundingClientRect().bottom||95;
  const top=box.getBoundingClientRect().top;
  box.style.setProperty('height',Math.max(320,h-Math.max(b,top)-10)+'px','important');
 }
 function openTopic(id){
  const topic=findTopic(id);if(!topic)return;
  stopRecognition();activeTopic=topic;mode='ready';busy=false;
  const record=sessionFor(topic);
  app.classList.add('conv-active');
  app.innerHTML='<div class=conv-hub-top><button type=button class=conv-back id=convBack>← المواضيع</button><span class=conv-kicker>Kapitel '+topic.chapter+' · '+safe(topic.ary)+'</span></div>'+
   '<section class=conv-dialog id=convDialog>'+
   '<div class=conv-dialog-header><div class=conv-dialog-title><div class=conv-dialog-avatar><img src="mascot/thinking.webp" alt=""></div><div><b dir=ltr>'+safe(topic.de)+'</b><span>🎭 '+safe(topic.role)+'</span></div></div><button type=button id=convReset title="مسح المحادثة">↻ جديد</button></div>'+
   '<div id=convStatus class=conv-dialog-status>● محادثة A1+</div>'+
   '<div id=convMessages class=conv-dialog-messages role=log aria-label="محادثة بالألمانية"></div>'+
   '<div class=conv-dialog-bottom><div class=conv-suggestion><button id=convHint type=button title="حط التلميحة فالجواب">💡 '+safe(topic.example)+'</button></div>'+
   '<div class=conv-input-row><button type=button class=conv-mic id=convMic title="تكلم بالألمانية" aria-label="تكلم بالألمانية">🎙️</button>'+
   '<textarea id=convInput rows=1 maxlength=480 placeholder="Schreib oder sprich auf Deutsch…" aria-label="جوابك بالألمانية" dir=ltr></textarea>'+
   '<button id=convSend type=button class=conv-send title="صيفط">➤</button></div>'+
   '<div class=conv-bottom-tools><span id=convVoiceNote>الألمانية A1 · جاوب من راسك</span><button type=button id=convVoiceAuto>🔈 النطق التلقائي: مطفي</button></div></div></section>';
  e('convBack').onclick=hub;
  e('convReset').onclick=()=>{
   if(!confirm('تبدا محادثة جديدة فهاد الموضوع؟ المحادثة القديمة غادي تتمسح.'))return;
   delete records()[topic.id];persist();openTopic(topic.id);
  };
  e('convSend').onclick=send;
  e('convInput').addEventListener('keydown',ev=>{
   if(ev.key==='Enter'&&!ev.shiftKey){ev.preventDefault();send()}
  });
  e('convHint').onclick=()=>{const field=e('convInput');field.value=lastHint;field.focus()};
  e('convMic').onclick=toggleMic;
  e('convVoiceAuto').onclick=()=>{autoVoice=!autoVoice;e('convVoiceAuto').textContent=(autoVoice?'🔊':'🔈')+' النطق التلقائي: '+(autoVoice?'خدام':'مطفي');e('convVoiceAuto').classList.toggle('active',autoVoice)};
  statusText();drawMessages();adaptViewport();window.scrollTo(0,0);
 }
 function guidedReply(topic,record){
  const count=record.messages.filter(m=>m.role==='user').length;
  const lines=fallbackQuestions[topic.chapter]||fallbackQuestions[1];
  return {role:'assistant',de:lines[(count-1)%lines.length],ary:'',suggestion_de:topic.example,feedback_ary:'',correction_de:'',mode:'guided'};
 }
 function dailyUsage(){
  try{const key='wr:ai-turns:'+new Date().toISOString().slice(0,10);const used=Number(localStorage.getItem(key)||'0');return {key,used}}catch{return {key:null,used:0}}
 }
 async function send(){
  if(!activeTopic||busy)return;
  const box=e('convInput'),text=box.value.trim();
  if(!text)return;
  const topic=activeTopic,record=sessionFor(topic);
  box.value='';
  record.messages.push({role:'user',content:text});
  if(record.messages.length>80)record.messages=record.messages.slice(-80);
  record.updated=new Date().toISOString();persist();
  busy=true;const button=e('convSend');button.disabled=true;drawMessages();
  let newReply=null;
  try{
   const turns=dailyUsage();
   // Gentle per-device guard to avoid accidental depletion of the free AI quota.
   if(turns.used>=30)throw new Error('DAILY_GUIDED');
   const history=record.messages.slice(-14).map(m=>({role:m.role,content:m.role==='assistant'?m.de:m.content}));
   const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),18000);
   let response;
   try{response=await fetch('/api/conversation',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({chapter:topic.chapter,topicId:topic.id,topicName:topic.de,role:topic.role,messages:history}),signal:controller.signal})}
   finally{clearTimeout(timeout)}
   if(!response.ok)throw new Error('AI_UNAVAILABLE');
   const data=await response.json();
   if(!data.reply_de)throw new Error('EMPTY_AI');
   newReply={role:'assistant',de:String(data.reply_de).slice(0,350),ary:String(data.translation_ary||'').slice(0,350),correction_de:String(data.correction_de||'').slice(0,240),feedback_ary:String(data.feedback_ary||'').slice(0,350),suggestion_de:String(data.suggestion_de||topic.example).slice(0,160),mode:'ai'};
   mode='ai';
   if(turns.key)try{localStorage.setItem(turns.key,String(turns.used+1))}catch{}
  }catch(err){
   newReply=guidedReply(topic,record);
   mode='guided';
   const note=e('convVoiceNote');
   if(note)note.textContent=err.message==='DAILY_GUIDED'?'وصلتي 30 رد AI اليوم، تقدر تكمل بالتدريب الموجه.':'Worti رجعات للوضع الموجّه حيت AI ما متاحش مؤقتاً.';
  }
  if(activeTopic?.id!==topic.id)return;
  record.messages.push(newReply);
  if(record.messages.length>80)record.messages=record.messages.slice(-80);
  record.updated=new Date().toISOString();persist();busy=false;
  if(e('convSend'))e('convSend').disabled=false;
  statusText();drawMessages();if(autoVoice)speechOutput(newReply.de);
 }
 function toggleMic(){
  if(voiceListening){stopRecognition();const b=e('convMic');if(b)b.classList.remove('listening');return}
  const API=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!API){e('convVoiceNote').textContent='هاد المتصفح ما كيدعمش الإملاء الصوتي. تقدر تكتب أو تستعمل كيبورد الصوت.';return}
  const rec=new API();recognition=rec;voiceListening=true;
  rec.lang='de-DE';rec.interimResults=true;rec.continuous=false;rec.maxAlternatives=1;
  const b=e('convMic');b.classList.add('listening');
  e('convVoiceNote').textContent='🎙️ هضر دابا بالألمانية...';
  rec.onresult=event=>{
   let line='';
   for(let i=event.resultIndex;i<event.results.length;i++)line+=event.results[i][0]?.transcript||'';
   const box=e('convInput');if(box)box.value=line.trim();
  };
  rec.onerror=event=>{const note=e('convVoiceNote');if(note)note.textContent='الميكروفون ما خدمش: '+(event.error==='not-allowed'?'خاص تسمح بالميكروفون.':'جرّب مرة أخرى أو كتب الجواب.')};
  rec.onend=()=>{voiceListening=false;recognition=null;const btn=e('convMic');if(btn)btn.classList.remove('listening');const note=e('convVoiceNote');if(note&&note.textContent.includes('هضر دابا'))note.textContent='قرا النص اللي تسمع، ومن بعد ضغط إرسال.'};
  try{rec.start()}catch{voiceListening=false;e('convVoiceNote').textContent='تعذر تشغيل الميكروفون. جرب الكتابة.'}
 }
 window.conversationHub=hub;
 window.addEventListener('resize',()=>{if(activeTopic)adaptViewport()},{passive:true});
 window.visualViewport?.addEventListener('resize',()=>{if(activeTopic)adaptViewport()},{passive:true});
})();
