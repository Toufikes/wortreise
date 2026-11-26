// Render shaped Arabic and German locally. Reuse one canvas to stay within iOS memory limits.
async function makePaperPDF(s,L,rubric,canvas=document.createElement('canvas')){
 const pdf=await PDFLib.PDFDocument.create(),W=1240,H=1754,M=84,limit=H-102;
 canvas.width=W;canvas.height=H;const c=canvas.getContext('2d');let y=0,page=0;
 pdf.setTitle('Spektrum Lab · '+s.id);
 function line(value,size=25,bold=false,rtl=false,color='#152838'){c.font=(bold?'bold ':'')+size+'px Arial, sans-serif';c.direction=rtl?'rtl':'ltr';c.textAlign=rtl?'right':'left';c.fillStyle=color;c.fillText(value,rtl?W-M:M,y);y+=Math.ceil(size*1.65)}
 function start(){page++;c.fillStyle='white';c.fillRect(0,0,W,H);y=78;line('SPEKTRUM LAB    /    Kapitel '+s.ch+'    /    '+s.id,20,true);y+=15}
 async function flush(){c.font='20px sans-serif';c.direction='ltr';c.textAlign='center';c.fillStyle='#435361';c.fillText(String(page),W/2,H-40);const img=await pdf.embedJpg(canvas.toDataURL('image/jpeg',.89));pdf.addPage([595.28,841.89]).drawImage(img,{x:0,y:0,width:595.28,height:841.89})}
 async function room(h){if(y+h>limit){await flush();start()}}
 async function para(value,size=25,bold=false){for(const p of String(value).split('\n')){let rtl=/^[^\p{L}]*[\u0600-\u06ff]/u.test(p),buf='';const emit=async()=>{await room(size*1.65);line(buf,size,bold,rtl);buf=''};const width=t=>{c.font=(bold?'bold ':'')+size+'px Arial, sans-serif';return c.measureText(t).width};for(const word of p.split(/\s+/)){let t=buf?buf+' '+word:word;if(buf&&width(t)>W-2*M)await emit();if(width(word)>W-2*M){for(const char of word){if(width(buf+char)>W-2*M)await emit();buf+=char}}else buf=buf?buf+' '+word:word}await emit()}}
 try{start();await para(COURSE[s.ch-1][0],31,true);await para('Name: ____________________     Datum: __________     / 100');await para(rubric,22);let n=0;
 for(const [i,g] of s.groups.entries()){await room(180);y+=18;await para(L(g.ar,g.de)+' · '+(g.items.length*(i===7?7:2))+' P.',28,true);let last='';
 for(const q of g.items){n++;await room(150);if(q.text&&q.text!==last)await para(q.text,24);last=q.text;await para(n+'. '+q.p,25,true);if(q.choices)await para(q.choices.join('  /  '),23);if(q.note)await para(q.note,22);const answer=s.answers[n];if(answer?.trim())await para(answer);else for(let k=0;k<(i===7?4:1);k++){await room(42);c.fillStyle='#bdc5cc';c.fillRect(M,y+5,W-2*M,1);y+=42}y+=12}}
 await flush();return new Blob([await pdf.save()],{type:'application/pdf'})}finally{canvas.width=canvas.height=1}
}
let paperExportURL=null;
function clearPaperExport(){document.getElementById('pdfReady')?.remove();if(paperExportURL){URL.revokeObjectURL(paperExportURL);paperExportURL=null}}
async function exportPaper(button,s,L,rubric,printFallback){
 clearPaperExport();const box=document.createElement('section');box.id='pdfReady';box.className='card';box.setAttribute('aria-live','polite');button.after(box);box.textContent=L('كنوجد الملف…','PDF wird erstellt …');
 const action=(t,fn)=>{let b=document.createElement('button');b.textContent=t;b.onclick=fn;box.append(b)};
 try{const fileBlob=await makePaperPDF(s,L,rubric);if(!box.isConnected)return;
 const url=paperExportURL=URL.createObjectURL(fileBlob),name='Spektrum-'+s.id+'.pdf';box.textContent=L('الملف واجد. فالآيفون اختار مشاركة، ومن بعد حفظ في الملفات أو طبع.','PDF bereit. Auf dem iPhone: Teilen, dann in Dateien sichern oder drucken.');
 const f=typeof File==='function'?new File([fileBlob],name,{type:'application/pdf'}):null;
 if(f&&navigator.canShare?.({files:[f]}))action(L('مشاركة / حفظ فالملفات','Teilen / In Dateien sichern'),async()=>{try{await navigator.share({files:[f]})}catch(e){if(e.name!=='AbortError')box.append(document.createTextNode(L('استعمل رابط التحميل لتحت.','Bitte den Download-Link verwenden.')))}});
 for(const [label,download] of [[L('تحميل PDF','PDF herunterladen'),true],[L('فتح PDF للطبع','PDF zum Drucken öffnen'),false]]){let a=document.createElement('a');a.href=url;a.textContent=label;a.style.cssText='display:block;padding:12px;color:inherit;text-decoration:underline';if(download)a.download=name;else{a.target='_blank';a.rel='noopener'}box.append(a)}
 }catch(e){box.textContent=L('ما تقدرش يتوجد الملف. تقدر تستعمل الطبع ديال المتصفح.','PDF konnte nicht erstellt werden. Nutze den Browserdruck.');action(L('طبع','Drucken'),printFallback)}
}
