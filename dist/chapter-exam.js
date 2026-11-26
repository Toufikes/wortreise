// Three short-answer transfer items per scene. The alternatives vary names, facts and times.
const examScenes=[
['A kommt aus B, wohnt aber in C.','Mina|Lena','Marokko|Spanien','Bonn|Berlin','Wie heißt die Person?|Aus welchem Land kommt sie?|In welcher Stadt wohnt sie?'],
['A arbeitet in B als C. Ihr Bruder ist noch Schüler.','Nora|Lina','Bremen|Köln','Ärztin|Lehrerin','Wie heißt die Schwester?|In welcher Stadt arbeitet sie?|Was ist sie von Beruf?'],
['A braucht in B ein Zimmer für C Nächte. Das Frühstück ist inklusive.','Nina|Mona','Bonn|Mainz','zwei|drei','Wer sucht ein Zimmer?|In welcher Stadt?|Für wie viele Nächte?'],
['A steht um B Uhr auf. Der Kurs beginnt erst um C Uhr.','Paul|Sami','sechs|sieben','neun|zehn','Wer besucht den Kurs?|Wann steht er auf? (Stunde)|Wann beginnt der Kurs? (Stunde)'],
['A bestellt B und trinkt C. Für ihren Bruder bestellt sie nichts.','Anna|Sara','Suppe|Salat','Wasser|Tee','Wer bestellt?|Was isst sie?|Was trinkt sie?'],
['Gestern ist A nach B gefahren. Dort hat er C gespielt.','Ali|Tom','Köln|Bonn','Tennis|Fußball','Wer ist gereist?|Wohin ist er gefahren?|Welchen Sport hat er gemacht?'],
['A möchte nach B fahren. Der Zug fährt heute von Gleis C ab, nicht von Gleis eins.','Karim|Nina','Berlin|Hamburg','vier|sechs','Wer reist?|Was ist das Ziel?|Von welchem Gleis fährt der Zug ab?'],
['A kauft für die Reise einen B. Er kostet C Euro.','Eva|Lara','Pullover|Mantel','zwanzig|vierzig','Wer kauft ein?|Was kauft sie? (Nomen)|Wie viele Euro bezahlt sie?'],
['A ruft im Büro an. Der Termin ist nicht am Montag, sondern am B um C Uhr.','Omar|Emil','Mittwoch|Freitag','neun|elf','Wer ruft an?|An welchem Tag ist der Termin?|Um wie viel Uhr? (Stunde)'],
['A hat Schmerzen am B. Ihr Arzttermin ist am C. Heute bleibt sie zu Hause.','Nora|Eva','Knie|Arm','Dienstag|Donnerstag','Wer hat Schmerzen?|Welcher Körperteil tut weh?|An welchem Tag ist der Termin?'],
['A sucht eine Wohnung in B. Sie braucht C Zimmer und einen Balkon.','Lisa|Sara','Berlin|Bremen','zwei|drei','Wer sucht eine Wohnung?|In welcher Stadt?|Wie viele Zimmer braucht sie?'],
['A lädt Freunde nach Berlin ein. Die Feier ist am B im C, nicht zu Hause.','Leon|Mia','Samstag|Sonntag','Park|Restaurant','Wer lädt ein?|An welchem Tag ist die Feier?|Wo findet sie statt? (Nomen)']
];
const examLabels=[['المفردات والأدوات','Wortschatz und Artikel'],['القواعد','Grammatik'],['استرجاع العبارات','Redemittel aus dem Gedächtnis'],['فهم المقروء','Leseverstehen']];
function exL(ar,de){return document.documentElement.lang==='de'?de:ar}
function examBuild(ch){
 const sample=(xs,n)=>shuffle(xs).slice(0,n), pick=s=>sample(s.split('|'),1)[0], bankOf=m=>bank.filter(q=>q.ch===ch&&q.mode===m);
 const unique=(xs,key)=>[...new Map(xs.map(x=>[x[key],x])).values()];
 let nouns=sample(unique(bankOf('article'),'de'),5).map(q=>({p:q.p.split(' · ').slice(1).join(' · ')+' · '+q.de.split(' ').slice(1).join(' ')[0]+'…',a:q.de,skill:0}));
 let grammar=sample(bankOf('grammar'),5).map(q=>({...q,skill:1}));
 let phrases=sample(unique(bankOf('write'),'a').filter(q=>q.a.split(/\s+/).length>=3&& !/[–…/]/.test(q.a)),5).map(q=>{
 let words=q.a.split(/\s+/), options=words.map((w,i)=>[w,i]).filter(([w])=>/^\p{L}{3,}[.!?,]?$/u.test(w)), [w,i]=sample(options.length?options:words.map((w,i)=>[w,i]),1)[0];words[i]='____';return {p:words.join(' '),note:q.p,a:w,skill:2}});
 let [tmpl,...fields]=examScenes[ch-1],questions=fields.pop().split('|'),vals=fields.map(pick),scene=tmpl.replace(/\b[ABC]\b/g,k=>vals[k.charCodeAt(0)-65]);
 let reading=questions.map((p,i)=>({p,a:vals[i],text:scene,skill:3,short:true})).concat(bankOf('read').slice(0,2).map(q=>({...q,skill:3})));
 return [...nouns,...grammar,...phrases,...reading]
}
function exNorm(s){return norm(String(s)).trim().replace(/ß/g,'ss')}
function exRight(q,v){let n=exNorm(v),a=exNorm(q.a);if(q.short){let numbers='null eins zwei drei vier fünf sechs sieben acht neun zehn elf'.split(' ');let x=n.toLowerCase().replace(/^(?:um|am|in|im|aus|nach|einen|eine|der|die|das|den) /,'').replace(/ (?:uhr|euro|nächte|zimmer)$/,'');return x===a.toLowerCase()||(/^\d+$/.test(x)&&(numbers[Number(x)]||({20:'zwanzig',40:'vierzig'})[Number(x)])===a)}return n===a}
function chapterExam(ch){
 const qs=examBuild(ch),responses=[],L=exL;let i=0;
 app.innerHTML='<section class=hero><span class=cap>Kapitel '+ch+'</span><h2>'+L('واش ضبطتي الفصل؟','Wie gut sitzt das Kapitel?')+'</h2><p>'+L('20 سؤال فـ4 مهارات. خاصك 16/20 على الأقل و3/5 فكل مهارة. جاوب بلا كتاب؛ التصحيح فالآخر.','20 Aufgaben, vier Bereiche. Bestanden ab 16/20 und mindestens 3/5 pro Bereich. Ohne Buch; Auswertung am Schluss.')+'</p></section><button class=gold id=exStart>'+L('بدا الاختبار','Test starten')+'</button><button id=exBack>'+L('رجع للفصل','Zurück zum Kapitel')+'</button>';
 $('#exStart').onclick=drawExam;$('#exBack').onclick=()=>chapter(ch);
 function drawExam(){let q=qs[i];app.innerHTML='<div class=navline><button id=exExit>'+L('خرج','Beenden')+'</button><span dir=ltr>'+(i+1)+' / '+qs.length+'</span></div><progress max="'+qs.length+'" value="'+i+'"></progress><section class=card><span class=cap>'+L(...examLabels[q.skill])+'</span>'+(q.text?'<p class=german dir=ltr>'+esc(q.text)+'</p>':'')+'<p>'+[L('كتب الأداة والاسم بالألمانية. الحرف الأول معطى.','Schreibe Artikel und Nomen. Der Anfangsbuchstabe ist gegeben.'),'',L('كمّل العبارة بالكلمة الناقصة.','Ergänze das fehlende Wort.'),q.short?L('جاوب بكلمة من النص أو برقم.','Antworte mit einem Wort aus dem Text oder einer Zahl.'):''][q.skill]+'</p><h3 dir=auto>'+esc(q.p)+'</h3>'+(q.note?'<small dir=rtl>'+esc(q.note)+'</small>':'')+'<div id=exWork></div><button id=exSkip>'+L('ما عرفتـش','Weiß ich nicht')+'</button></section>';
 let host=$('#exWork');if(q.opts){for(let s of shuffle(q.opts)){let b=document.createElement('button');b.textContent=s;b.onclick=()=>next(s);host.append(b)}}else{host.innerHTML='<form><input aria-label="Antwort" dir=ltr required autocomplete=off autocapitalize=off spellcheck=false><button class=gold>'+L('ثبّت الجواب','Antwort abgeben')+'</button></form>';host.firstChild.onsubmit=e=>{e.preventDefault();next(host.querySelector('input').value)}}
 $('#exSkip').onclick=()=>next('');$('#exExit').onclick=()=>{if(confirm(L('تخرج بلا ما تتحسب هاد المحاولة؟','Versuch ohne Wertung beenden?')))chapter(ch)};window.scrollTo(0,0)}
 function next(v){responses.push(v);++i<qs.length?drawExam():end()}
 function end(){let parts=[0,0,0,0],wrong=[];qs.forEach((q,k)=>{if(exRight(q,responses[k]))parts[q.skill]++;else wrong.push([q,responses[k]])});let score=parts.reduce((a,b)=>a+b),passed=score>=16&&parts.every(x=>x>=3);structure();st.lab.exams[ch]={score,total:qs.length,parts,passed,date:new Date().toISOString(),version:2};save();
 app.innerHTML='<section class=hero><span class=cap>Kapitel '+ch+'</span><h2>'+score+' / '+qs.length+' · '+(passed?L('دزتي الاختبار','Bestanden'):L('خاص شوية مراجعة','Noch etwas üben'))+'</h2><p>'+L('هاد النتيجة كتقيس الأداء ديالك اليوم فالمهارات المكتوبة. عاود من بعد يومين بلا مراجعة مباشرة باش تجرّب الحفظ.','Das Ergebnis zeigt deine schriftliche Leistung heute. Wiederhole den Test in zwei Tagen ohne direkte Vorbereitung.')+'</p></section>'+parts.map((v,k)=>'<p class=card>'+L(...examLabels[k])+' · '+v+'/5</p>').join('')+wrong.map(([q,v])=>'<section class=card><b dir=auto>'+esc(q.p)+'</b><p>'+L('جوابك: ','Deine Antwort: ')+esc(v||'—')+'</p><p>'+L('الجواب المنتظر: ','Erwartet: ')+esc(q.a)+'</p></section>').join('')+'<button id=exBack>'+L('رجع للفصل','Zurück zum Kapitel')+'</button>';$('#exBack').onclick=()=>chapter(ch);window.scrollTo(0,0)}
}
