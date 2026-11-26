const paperTopics=[
['im ersten Deutschkurs','dein Herkunftsland und deine Sprachen','eine neue Mitschülerin'],
['bei einem Familientreffen','zwei Familienmitglieder und ihre Berufe','einen Cousin'],
['an der Hotelrezeption','Zimmer, Preis und Frühstück','ein Hotel'],
['bei der Kursplanung','Uhrzeit, Wochentag und Tagesablauf','deine Lehrerin'],
['im Restaurant','Speisen, Getränke und Preise','einen Freund zum Essen'],
['nach einem Ausflug','drei Aktivitäten von gestern im Perfekt','eine Freundin'],
['am Bahnhof','Ziel, Abfahrt und Gleis','einen Reisepartner'],
['im Kleidungsgeschäft','Größe, Farbe und Preis','eine Verkäuferin'],
['bei einer Terminabsprache','Tag, Uhrzeit und einen Ersatztermin','einen Kollegen'],
['in einer Arztpraxis','Beschwerden und einen passenden Termin','eine Arztpraxis'],
['bei einer Wohnungsbesichtigung','Lage, Zimmer und den Weg zur Wohnung','eine Vermieterin'],
['bei der Planung einer Feier in Berlin','Ort, Datum und Gäste','einen Gast']];
function buildPaper(ch){
 const pool=m=>shuffle(bank.filter(x=>x.ch===ch&&x.mode===m)),unique=(xs,k)=>[...new Map(xs.map(x=>[x[k],x])).values()], groups=[];
 function group(ar,de,items){groups.push({ar,de,items:items.map(x=>typeof x==='string'?{p:x}:x)})}
 let ns=unique(pool('article'),'de').slice(0,5), phrases=unique(pool('write'),'a').filter(x=>x.a.trim().split(/\s+/).length>=3&&!/[–…/]/.test(x.a));
 group('المفردات: كتب الاسم بالأداة ديالو','Nomen mit Artikel',ns.map(x=>x.p.split(' · ').slice(1).join(' · ')));
 group('القواعد: كمّل الفراغ','Grammatik: Ergänze die Lücke',pool('grammar').slice(0,7).map(x=>({p:x.p,choices:shuffle(x.opts)})));
 group('رتّب الكلمات باش تكوّن جملة','Satzbau: Ordne die Wörter',phrases.slice(0,5).map(x=>{let w=x.a.replace(/[.!?]$/,'').split(/\s+/),v=shuffle(w);if(v.join(' ')===w.join(' '))v.push(v.shift());return v.join(' / ')}));
 group('ترجم للألمانية بجملة كاملة','Übersetze ins Deutsche',phrases.slice(5,10).map(x=>x.p));
 group('كمّل العبارة من الذاكرة','Redemittel ergänzen',phrases.slice(10,15).map(x=>{let w=x.a.split(/\s+/),i=shuffle(w.map((s,i)=>[s,i]).filter(([s])=>s.length>=3))[0]?.[1]??0;w[i]='____';return {p:w.join(' '),note:x.p}}));
 const reading=examBuild(ch).filter(q=>q.skill===3);group('قرا النص وجاوب بالألمانية','Lesen und antworten',reading.map(q=>({p:q.p,text:q.text})));
 const [place,details,to]=paperTopics[ch-1];
 group('تواصل فموقف جديد: جاوب من راسك','Im Gespräch: Antworte selbst',[
 'Situation: '+place+'. Begrüße die andere Person passend.',
 'Situation: '+place+'. Stelle eine passende Frage.',
 'Beantworte deine Frage aus der vorigen Aufgabe mit einer konkreten Information.',
 'Du hast die Antwort nicht verstanden. Bitte höflich um Wiederholung.']);
 group('التعبير الكتابي: 7 نقط لكل مهمة','Schreiben: je 7 Punkte',[
 'Schreibe einen Dialog '+place+' (vier Gesprächsbeiträge). Stelle eine Frage und reagiere auf die Antwort.',
 'Schreibe drei bis vier Sätze über '+details+'. Verwende konkrete Angaben.',
 'Schreibe eine kurze Nachricht an '+to.replace('einen Freund zum Essen','einen Freund')+'. Nenne den Anlass, stelle eine passende Frage und beende die Nachricht.',
 COURSE[ch-1][5]]);
 return {id:'K'+ch+'-'+Date.now().toString(36).toUpperCase(),ch,groups,answers:{}}
}
function writtenExam(ch){
 const L=exL,key='spektrum-paper-v1:'+String(window.wrUser||'guest')+':'+ch;let s;try{s=JSON.parse(localStorage.getItem(key))}catch{}if(!s?.groups)s=buildPaper(ch);
 const saveDraft=()=>{try{localStorage.setItem(key,JSON.stringify(s))}catch{}};saveDraft();
 const hook='paperPrintSheet';document.getElementById(hook)?.remove();
 function blocks(print){let n=0;return s.groups.map((g,i)=>{let last='';return '<section class="paperGroup '+(print?'':'card')+'"><h3>'+esc(L(g.ar,g.de))+' · '+g.items.length*(i===7?7:2)+' P.</h3>'+g.items.map(q=>{n++;let passage=q.text&&q.text!==last?'<p class=paperPass dir=ltr>'+esc(q.text)+'</p>':'';last=q.text;return '<div class=paperItem>'+passage+'<label><strong>'+n+'. </strong><bdi dir=auto>'+esc(q.p)+'</bdi>'+(q.choices?'<small dir=ltr>'+esc(q.choices.join(' / '))+'</small>':'')+(q.note?'<small dir=rtl>'+esc(q.note)+'</small>':'')+(print?'<div dir=auto class="paperLine '+(i===7?'long':'')+'">'+esc(s.answers[n]||'')+'</div>':'<textarea data-q="'+n+'" rows="'+(i===7?4:1)+'" dir=ltr spellcheck=false>'+esc(s.answers[n]||'')+'</textarea>')+'</label></div>'}).join('')+'</section>'}).join('')}
 const title='Kapitel '+ch+' · '+COURSE[ch-1][0],rubric=L('1–36: جوج نقط لكل جواب (المعنى 1 والصياغة 1). 37–40: لكل مهمة 7 نقط (تنفيذ المطلوب 3، الوضوح 2، اللغة 2).','1–36: je 2 Punkte (Inhalt 1, Form 1). 37–40: je 7 Punkte (Aufgabe 3, Verständlichkeit 2, Sprache 2).');
 function print(){document.getElementById(hook)?.remove();let sheet=document.createElement('article');sheet.id=hook;sheet.dir=document.documentElement.dir;sheet.innerHTML='<h1>Spektrum Lab · '+esc(title)+'</h1><p>Name: __________________ · Datum: __________</p><p>'+esc(s.id)+' · 40 Aufgaben · 100 Punkte</p><p>'+esc(rubric)+'</p>'+blocks(true);document.body.append(sheet);window.print()}
 function render(){clearPaperExport();app.innerHTML='<section class=hero><span class=cap>'+esc(title)+'</span><h2>'+L('اختبار الفصل الشامل','Schriftliche Kapitelprüfung')+'</h2><p>'+L('40 سؤال · 100 نقطة. جاوب هنا ولا طبع الورقة خاوية. صيفط PDF أو صور الأجوبة للتصحيح.','40 Aufgaben · 100 Punkte. Hier ausfüllen oder leer ausdrucken. Zur Korrektur PDF oder Fotos senden.')+'</p><p>'+esc(rubric)+'</p><small>'+s.id+'</small></section><button class=gold data-paperprint>'+L('طبع / حفظ PDF','Drucken / PDF speichern')+'</button>'+blocks(false)+'<button class=gold data-paperprint>'+L('خرج الأجوبة ديالي PDF','Meine Antworten als PDF speichern')+'</button><button id=quickExam>'+L('اختبار سريع بتصحيح آلي','Kurztest mit automatischer Auswertung')+'</button><button id=newPaper>'+L('ورقة جديدة','Neuer Aufgabenbogen')+'</button><button id=paperBack>'+L('رجع للفصل','Zurück zum Kapitel')+'</button>';app.querySelectorAll('[data-paperprint]').forEach(b=>b.onclick=()=>exportPaper(b,s, L,rubric,print));app.querySelectorAll('[data-q]').forEach(t=>t.oninput=()=>{clearPaperExport();s.answers[t.dataset.q]=t.value;saveDraft()});$('#quickExam').onclick=()=>chapterExam(ch);$('#paperBack').onclick=()=>chapter(ch);$('#newPaper').onclick=()=>{if(confirm(L('نبدلو هاد الورقة؟ حفظ PDF قبل إلا بغيتي تبقى عندك الأجوبة.','Diesen Bogen ersetzen? Antworten bei Bedarf vorher als PDF sichern.'))){s=buildPaper(ch);saveDraft();render()}};window.scrollTo(0,0)}render()
}
window.addEventListener('afterprint',()=>document.getElementById('paperPrintSheet')?.remove());
