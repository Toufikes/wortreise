const vocabExtras=[
['Wie schreibt man deinen Namen?|كيفاش كتكتب سميتك؟','Zu Hause spreche ich Arabisch.|فالدار كنهضر العربية.'],
['Meine Tante arbeitet im Krankenhaus.|خالتي كتخدم فالسبيطار.','Was macht dein Bruder beruflich?|شنو خدمة خوك؟'],
['Ist das Frühstück im Preis inbegriffen?|واش الفطور داخل فالثمن؟','Mein Zimmer liegt im ersten Stock.|البيت ديالي فالطابق الأول.'],
['Nach dem Kurs kaufe ich ein.|من بعد الدرس كنمشي نتقدّى.','Wann machst du Feierabend?|فوقاش كتسالي الخدمة؟'],
['Ich hätte gern die Speisekarte.|بغيت لائحة الماكلة عافاك.','Die Suppe ist mir zu salzig.|الشوربة مالحة بزاف بالنسبة ليا.'],
['Gestern habe ich meine Cousine besucht.|البارح زرت بنت خالتي.','Am Abend bin ich zu Hause geblieben.|فالعشية بقيت فالدار.'],
['Muss ich in Köln umsteigen?|واش خاصني نبدّل التران فكولونيا؟','Der Bus hält vor dem Hotel.|الطوبيس كيوقف قدّام الفندق.'],
['Kann ich den Pullover umtauschen?|واش نقدر نبدّل هاد التريكو؟','Die Jacke ist mir zu eng.|الجاكيطة ضيقة عليّ بزاف.'],
['Ich schicke Ihnen den Termin per E-Mail.|غادي نصيفط ليك الموعد بالإيميل.','Ist der Besprechungsraum frei?|واش قاعة الاجتماعات خاوية؟'],
['Seit gestern tut mir das Knie weh.|من البارح وركبتي كتضرني.','Am Wochenende gehe ich gern schwimmen.|فالويكاند كيعجبني نمشي نعوم.'],
['Die Wohnung hat einen kleinen Balkon.|الشقة فيها بالكو صغير.','Die Apotheke liegt gegenüber der Post.|الفارماسيان جاية قبالة البوسطة.'],
['Bring bitte deine Schwester mit.|جيب معاك ختك عافاك.','Die Feier beginnt um halb acht.|الحفلة كتبدا مع السبعة ونص.']
];
function vocabMenu(ch){
 const l=revL,cards=chapterCards(ch);
 const modes=[['vocab','اختار المعنى','Bedeutung wählen'],['reverse','اختار الجملة الألمانية','Deutschen Satz wählen'],['order','رتّب الكلمات','Wörter ordnen'],['write','كتب من الذاكرة','Aus dem Gedächtnis schreiben']];
 app.innerHTML='<section class=hero><span class=cap>Kapitel '+ch+'</span><h2>'+cards.length+' · '+l('بطاقة · اختار طريقة التدريب','Karten · Übungsart wählen')+'</h2><p>'+l('نفس لائحة الفصل كاملة فكل طريقة.','Alle Karten des Kapitels in jeder Übungsart.')+'</p></section>'+modes.map(([m,a,d])=>'<button data-vset="'+m+'">'+l(a,d)+'</button>').join('')+'<details class=card><summary>'+l('شوف لائحة الفصل كاملة','Alle Karten ansehen')+'</summary>'+cards.map(([de,ar])=>'<p lang=de dir=ltr>'+esc(de)+'</p><p lang=ar-MA dir=rtl>'+esc(ar)+'</p>').join('<hr>')+'</details><button id=vback>'+l('رجع للفصل','Zurück zum Kapitel')+'</button>';
 $('#vback').onclick=()=>chapter(ch);app.querySelectorAll('[data-vset]').forEach(b=>b.onclick=()=>{let m=b.dataset.vset;session={ch,mode:'vocabSet',i:0,score:0,missed:[],locked:false,qs:bookQuestions(ch,m)};draw()});window.scrollTo(0,0)
}

function chapterCards(ch){return [...new Map([...BOOKSETS[ch],...(INNERSETS[ch]||[]),...VERBSETS[ch]].map(p=>[p[0],p])).values()]}
function bookQuestions(ch,m,weak=false){const cards=chapterCards(ch),forward=m==='vocab';return shuffle(cards).filter(([de])=>!weak||st.lab.cards['vs:'+ch+':'+m+':'+de]?.wrong).map(([de,ar])=>{let q={id:'vs:'+ch+':'+m+':'+de,ch,mode:m==='reverse'?'vocab':m,p:forward?de:ar,a:forward?ar:de,de,why:ar};if(forward||m==='reverse')q.opts=[q.a,...shuffle([...new Set(cards.filter(pair=>pair[forward?0:1]!==q.p).map(pair=>pair[forward?1:0]).filter(x=>x!==q.a))]).slice(0,3)];return q})}
