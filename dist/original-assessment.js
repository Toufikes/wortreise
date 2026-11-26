/* Spektrum Lab – independently authored chapter assessment (20 points).
 * Matches chapter skills/level, NOT a transcription of the publisher's test.
 * Replaces broken references to unavailable book-tests/*.pdf and *.jpg.
 */
(function(){
'use strict';
const headings=[
 ['المفردات والأسماء','Wortschatz und Nomen'],
 ['القواعد','Grammatik'],
 ['فهم المقروء','Leseverstehen'],
 ['الكتابة والتواصل','Schreiben und Kommunikation']
];
const situations=[
 ['sich vorstellen','deinen Namen, dein Land und deine Stadt','deine Sprachen','eine Freizeitaktivität','eine Frage an eine neue Person'],
 ['über die Familie sprechen','zwei Familienmitglieder','den Beruf einer Person','einen Satz mit mein oder meine','eine Frage über die Familie'],
 ['im Hotel ein Zimmer buchen','ein Einzelzimmer für zwei Nächte','eine Frage nach dem Preis','eine Frage zum Frühstück','einen höflichen Abschied'],
 ['über den Tagesablauf sprechen','deine Aufstehzeit','eine Uhrzeit mit um','einen Satz mit aufstehen','eine Frage zur Kurszeit'],
 ['im Restaurant bestellen','ein Getränk bestellen','ein Essen bestellen','einen Satz mit mögen','eine Frage zur Rechnung'],
 ['von gestern erzählen','eine Aktivität im Perfekt mit haben','eine Fahrt im Perfekt mit sein','eine Frage über das Wochenende','einen Satz mit gestern'],
 ['eine Reise planen','ein Reiseziel','eine Frage zur Abfahrt','einen Satz mit müssen oder wollen','eine Frage nach dem Gleis'],
 ['Kleidung kaufen','ein Kleidungsstück mit Artikel','eine Farbe und eine Größe','eine höfliche Frage nach dem Preis','einen Satz mit zu groß oder zu klein'],
 ['einen Termin vereinbaren','einen Wochentag und eine Uhrzeit','eine höfliche Frage nach einem Termin','einen alternativen Termin','eine kurze Bestätigung'],
 ['beim Arzt sprechen','einen Körperteil','einen Satz mit wehtun','eine Frage nach einem Termin','einen einfachen Ratschlag mit sollen'],
 ['eine Wohnung beschreiben','die Zimmer in einer Wohnung','einen Satz mit es gibt','eine Frage nach dem Weg','eine Ortsangabe mit in, auf oder neben'],
 ['eine Feier planen','den Ort der Feier','den Tag und die Uhrzeit','eine Einladung','eine höfliche Antwort auf eine Einladung']
];
const copy=Object.prototype.hasOwnProperty;
const tr=(ar,de)=>document.documentElement.lang==='de'?de:ar;
const safe=s=>esc(String(s??''));
const clean=s=>String(s??'').replace(/\s+/g,' ').trim();
function assemble(ch){
 const c=COURSE[ch-1];if(!c)throw Error('Unknown chapter');
 const questions=[];
 const nouns=bank.filter(q=>q.ch===ch&&q.mode==='article');
 const used=new Set();
 for(const n of nouns){
  const word=clean(n.p.split(' · ')[0]);
  if(!word||used.has(word))continue;used.add(word);
  questions.push({group:0,p:'Ergänze den bestimmten Artikel: _____ '+word+'.',note:clean(n.p.split(' · ').slice(1).join(' · '))});
  if(questions.length===5)break;
 }
 // If necessary, add a recall task from authentic chapter card data.
 for(const [de,ar] of chapterCards(ch)){
  if(questions.length>=5)break;
  if(used.has(de))continue;used.add(de);
  questions.push({group:0,p:'Wie sagt man auf Deutsch: '+ar+'?',note:''});
 }
 for(const g of c[2].slice(0,5))
  questions.push({group:1,p:clean(g[0]),note:''});
 const reading=c[4].slice(0,2);
 for(const q of reading)questions.push({group:2,p:clean(q[0]),passage:c[3],note:''});
 // Self-authored mini-scene from the original game's chapter-specific
 // examScenes, not from any publisher PDF.
 const scene=examScenes[ch-1];
 if(scene){
  const parts=scene.slice(1,4).map(x=>String(x).split('|')[0]);
  const text=scene[0].replace(/\b[ABC]\b/g,k=>parts[k.charCodeAt(0)-65]);
  const qs=String(scene[4]).split('|');
  for(const q of qs.slice(0,3))questions.push({group:2,p:clean(q),passage:text,note:''});
 }
 const sit=situations[ch-1];
 questions.push({group:3,p:'Situation: '+sit[0]+'. Schreibe einen passenden Satz über '+sit[1]+'.'});
 questions.push({group:3,p:'Schreibe einen vollständigen Satz über '+sit[2]+'.'});
 questions.push({group:3,p:'Schreibe einen vollständigen Satz über '+sit[3]+'.'});
 questions.push({group:3,p:'Formuliere '+sit[4]+'.'});
 questions.push({group:3,p:'Schreibe einen kurzen Dialog mit zwei Gesprächsbeiträgen zum Thema „'+c[0]+'“.',note:'Mindestens zwei Sätze.'});
 if(questions.length!==20)throw Error('20 assessment items expected, got '+questions.length);
 return questions;
}
function assessment(ch){
 const key='wr-assessment-v3:'+String(window.wrUser||'guest')+':'+ch;
 let saved=null;try{saved=JSON.parse(localStorage.getItem(key)||'null')}catch{}
 const questions=assemble(ch),answers=Array.isArray(saved?.answers)&&saved.answers.length===20?saved.answers:Array(20).fill('');
 const store=()=>{try{localStorage.setItem(key,JSON.stringify({version:3,ch,answers,updated:new Date().toISOString()}))}catch{}};
 function markup(){
  const groups=headings.map(([ar,de],gi)=>{
    let last='';
    return '<section class="card own-exam-group"><h3>'+safe(tr(ar,de))+' <span class="own-exam-points">5/20</span></h3>'+
      questions.map((q,i)=>{
        if(q.group!==gi)return '';
        let reading=q.passage&&last!==q.passage?'<div class="own-exam-passage" lang="de" dir="ltr">'+safe(q.passage)+'</div>':'';
        if(q.passage)last=q.passage;
        return '<div class="own-exam-item">'+reading+
        '<label for="own-answer-'+i+'"><span class="own-exam-index">'+(i+1)+'.</span> <span lang="de" dir="ltr">'+safe(q.p)+'</span>'+
        (q.note?'<small>'+safe(q.note)+'</small>':'')+'</label>'+
        '<textarea id="own-answer-'+i+'" data-own-answer="'+i+'" rows="'+(gi===3?3:2)+'" dir="ltr" lang="de" spellcheck="false" autocomplete="off" placeholder="Antwort auf Deutsch …">'+safe(answers[i])+'</textarea></div>';
      }).join('')+'</section>';
  }).join('');
  app.innerHTML='<div class="navline"><button id="own-exam-back">'+safe(tr('رجع للفصل','Zurück zum Kapitel'))+'</button><span>Kapitel '+ch+'</span></div>'+
  '<section class="hero"><span class="cap">Kapitel '+ch+' · 20 Punkte</span><h2>Kleiner Abschlusstest</h2>'+
  '<p>'+safe(tr('اختبار جديد من تأليف Spektrum Lab، بنفس مواضيع ومستوى الفصل. ماشي نسخة من امتحان الناشر.','Eigenständig erstellter Kapiteltest zu denselben Lernzielen. Keine Kopie der Verlagsprüfung.'))+'</p>'+
  '<p>'+safe(tr('20 سؤال، كل واحد عليه نقطة. جاوب بلا كتاب؛ التصحيح كيكون من بعد ما تصيفط PDF.','20 Aufgaben, je ein Punkt. Beantworte ohne Buch. Die Korrektur erfolgt nach dem PDF-Export.'))+'</p></section>'+
  groups+
  '<section class="card own-exam-actions"><h3>'+safe(tr('أجوبتك محفوظة فهاد الجهاز','Deine Antworten sind auf diesem Gerät gespeichert'))+'</h3>'+
  '<p>'+safe(tr('النتيجة: ____ / 20 · ما كاينش تصحيح آلي للكتابة الحرة.','Ergebnis: ____ / 20 · Freie Antworten werden nicht automatisch bewertet.'))+'</p>'+
  '<button id="own-exam-pdf" class="gold">'+safe(tr('حمّل الأسئلة والأجوبة PDF','Aufgaben und Antworten als PDF'))+'</button>'+
  '<button id="own-exam-blank">'+safe(tr('PDF خاوي بلا أجوبة','Leeren Aufgabenbogen als PDF'))+'</button>'+
  '<div id="own-exam-status" role="status" aria-live="polite"></div></section>';
  app.querySelectorAll('[data-own-answer]').forEach(el=>{el.addEventListener('input',()=>{answers[Number(el.dataset.ownAnswer)]=el.value;store()})});
  document.querySelector('#own-exam-back').onclick=()=>{clearPDF();chapter(ch)};
  document.querySelector('#own-exam-pdf').onclick=()=>generatePDF(false);
  document.querySelector('#own-exam-blank').onclick=()=>generatePDF(true);
 }
 let objectURL;
 function clearPDF(){if(objectURL){URL.revokeObjectURL(objectURL);objectURL=null}}
 async function makePDF(blank){
  if(!window.PDFLib?.PDFDocument)throw Error('PDF library not loaded');
  const pdf=await PDFLib.PDFDocument.create(),W=1240,H=1754,P=84,L=85,R=1150;
  const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;
  const ctx=canvas.getContext('2d');if(!ctx)throw Error('canvas unavailable');
  let y=0,page=0,images=[];
  function start(){
    page++;ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);y=86;
    ctx.fillStyle='#263335';ctx.textAlign='left';ctx.direction='ltr';ctx.font='bold 23px Arial';
    ctx.fillText('SPEKTRUM LAB  /  KAPITEL '+ch+'  /  ABSCHLUSSTEST',L,y);y+=38;
    ctx.fillStyle='#58676b';ctx.font='19px Arial';ctx.fillText('Name: _______________________    Datum: ______________',L,y);y+=45;
    ctx.strokeStyle='#c6ced1';ctx.beginPath();ctx.moveTo(L,y);ctx.lineTo(R,y);ctx.stroke();y+=30;
  }
  async function flush(){
    ctx.textAlign='center';ctx.direction='ltr';ctx.font='18px Arial';ctx.fillStyle='#889197';ctx.fillText('Seite '+page,W/2,H-50);
    const jpg=await pdf.embedJpg(canvas.toDataURL('image/jpeg',0.91));
    pdf.addPage([595.28,841.89]).drawImage(jpg,{x:0,y:0,width:595.28,height:841.89});
  }
  async function room(n){if(y+n>H-125){await flush();start()}}
  async function text(value,size=23,weight=false,color='#263335'){
    const lines=String(value??'').split('\n');
    for(const part of lines){
      const words=part.split(/\s+/),segments=[];let line='';
      ctx.font=(weight?'bold ':'')+size+'px Arial,sans-serif';
      const max=R-L;
      for(const word of words){
        const next=line?line+' '+word:word;
        if(line&&ctx.measureText(next).width>max){segments.push(line);line=word}else line=next;
      }
      segments.push(line);
      for(const row of segments){
        await room(size*1.65);ctx.font=(weight?'bold ':'')+size+'px Arial,sans-serif';ctx.direction='ltr';ctx.textAlign='left';ctx.fillStyle=color;ctx.fillText(row,L,y);y+=Math.ceil(size*1.65);
      }
    }
  }
  try{
    start();
    await text('Kleiner Abschlusstest  ·  Kapitel '+ch,35,true);
    await text('Eigener Uebungstest  ·  20 Aufgaben  ·  20 Punkte',21,false,'#526065');
    let last='';
    for(let i=0;i<questions.length;i++){
      const q=questions[i];
      if(i%5===0){await room(100);y+=15;await text(['A · WORTSCHATZ','B · GRAMMATIK','C · LESEVERSTEHEN','D · SCHREIBEN'][i/5]+'  (5 Punkte)',27,true,'#34513e');y+=5}
      if(q.passage&&q.passage!==last){await room(150);await text(q.passage,20,false,'#526065');y+=6}
      if(q.passage)last=q.passage;
      await room(95);await text((i+1)+'.  '+q.p,24,true);
      let answer=!blank&&answers[i]?.trim();
      if(answer){await text('Antwort: '+answers[i],22,false,'#2f444d')} else {
        const count=q.group===3?3:1;
        for(let j=0;j<count;j++){await room(34);ctx.fillStyle='#c7cdd0';ctx.fillRect(L,y+12,R-L,1);y+=35}
      }
      y+=15;
    }
    await room(95);y+=16;await text('Ergebnis: ______ / 20    Korrektur: ______________________',23,true);
    await flush();
    pdf.setTitle('Spektrum Lab - Kapitel '+ch+' - 20 Punkte');
    return new Blob([await pdf.save()],{type:'application/pdf'});
  }finally{canvas.width=0;canvas.height=0}
 }
 async function generatePDF(blank){
  const host=document.querySelector('#own-exam-status');
  host.replaceChildren();host.textContent=tr('كنوجد PDF…','PDF wird erstellt …');
  try{
    const blob=await makePDF(blank);clearPDF();
    objectURL=URL.createObjectURL(blob);
    const filename='Spektrum-Lab-Kapitel-'+ch+(blank?'-Blank':'-Antworten')+'.pdf';
    host.textContent=tr('PDF واجد. فالآيفون استعمل مشاركة ثم حفظ فـالملفات.','PDF bereit. Auf dem iPhone teilen und in Dateien sichern.');
    const f=new File([blob],filename,{type:'application/pdf'});
    if(navigator.canShare?.({files:[f]})){
      const btn=document.createElement('button');btn.textContent=tr('مشاركة / حفظ PDF','PDF teilen / speichern');
      btn.onclick=async()=>{try{await navigator.share({files:[f]})}catch(e){if(e.name!=='AbortError')alert(tr('استعمل رابط التحميل.','Bitte den Download-Link benutzen.'))}};host.append(btn);
    }
    const a=document.createElement('a');a.href=objectURL;a.download=filename;
    a.textContent=tr('تحميل PDF','PDF herunterladen');a.style.cssText='display:block;padding:14px;text-decoration:underline;color:var(--accent,#daff65)';
    host.append(a);
    const view=document.createElement('a');view.href=objectURL;view.target='_blank';view.rel='noopener';view.textContent=tr('فتح PDF','PDF öffnen');view.style.cssText='display:block;padding:12px;text-decoration:underline;color:var(--accent,#daff65)';host.append(view);
  }catch(e){console.warn('Assessment PDF export failed',e);host.textContent=tr('تعذر إنشاء PDF فهاد المتصفح. جرّب Safari أو عاود المحاولة.','PDF-Erstellung fehlgeschlagen. Bitte in Safari erneut versuchen.')}
 }
 markup();store();window.scrollTo(0,0);
}
window.originalExam=assessment;
})();
