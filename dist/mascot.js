function mascot(state,text,large=false){return '<div class="coach coach-'+state+(large?' coach-large':'')+'"><div class="coach-portrait" aria-hidden="true"><img src="mascot/'+state+'.webp" width="80" height="110" alt="" decoding="async"></div><p>'+esc(text)+'</p></div>'}
function hintText(q){return ({grammar:'شكون الفاعل؟ حدّد الحالة والتصريف قبل ما تختار.',article:'تذكّر الاسم بالأداة ديالو، ما تعتمدش على الترجمة بوحدها.',order:'قلب على الفاعل والفعل. فالجملة الخبرية الفعل غالباً فالمرتبة الثانية.',write:'قول الجملة بصوتك، ومن بعد كتبها. راجع الأسماء بحروف كبيرة.',listen:'سمع مرة كاملة، ومن بعد ركّز على الكلمات اللي ما عرفتيش.',read:'رجع للجملة فالنص اللي كتهضر على نفس المعلومة.',vocab:'قرا الجملة كاملة، وحدّد الكلمات اللي عارف قبل الاختيار.'})[q.mode]||'خد وقتك وفكّر فالمعنى.'}
(()=>{
let panel=document.createElement('section');panel.className='card';panel.innerHTML='<h2>شخصية توفيق</h2><label><input type=checkbox id=showCoach> إظهار الشخصية فالتدريب</label><label><input type=checkbox id=moveCoach> الحركات الخفيفة</label>';
document.querySelector('#settings').append(panel);
let prefs={show:true,move:true};try{Object.assign(prefs,JSON.parse(localStorage.wrCoach||'{}'))}catch{}
function apply(){document.body.classList.toggle('coach-hidden',!prefs.show);document.body.classList.toggle('coach-still',!prefs.move);try{localStorage.wrCoach=JSON.stringify(prefs)}catch{}}
for(let [id,key] of [['showCoach','show'],['moveCoach','move']]){let b=panel.querySelector('#'+id);b.checked=prefs[key];b.onchange=()=>{prefs[key]=b.checked;apply()}}apply()
})();
