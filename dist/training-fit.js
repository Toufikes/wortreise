/* Wortreise V2 — compact mobile training without changing the original UI.
   Watches the existing practice card; no rewrite of the question/answer logic.
   This is presentation-only. It does not touch scores, auth, cards or storage.
*/
(()=>{
 'use strict';
 const app=document.getElementById('app');
 const settings=document.getElementById('settings');
 if(!app)return;
 let frame=0,active=false;
 const body=document.body;
 const mobile=()=>window.innerWidth<=850;
 const isTraining=()=>mobile() && !!app.querySelector('.practice-card') &&
  !!app.querySelector('#exit') && (!settings || settings.hidden);
 const viewportHeight=()=>Math.max(250,Math.round(window.visualViewport?.height||window.innerHeight));
 const setViewport=()=>{
  const height=viewportHeight();
  body.style.setProperty('--wr-viewport-height',height+'px');
  const field=document.activeElement;
  const typing=field && field.matches?.('#qform input,#qform textarea');
  body.classList.toggle('wr-keyboard',!!typing && !!window.visualViewport &&
   window.visualViewport.height<window.innerHeight-120);
 };
 function leave(){
  if(!active)return;
  active=false;
  body.classList.remove('wr-training','wr-keyboard');
  body.removeAttribute('data-wr-density');
  body.style.removeProperty('--wr-viewport-height');
 }
 function overflowing(){
  const main=app.closest('main'),card=app.querySelector('.practice-card');
  const work=card?.querySelector('#work');
  if(!main||!card||!work)return false;
  const end=main.getBoundingClientRect().bottom-5;
  const cardEnd=card.getBoundingClientRect().bottom;
  const boundsProblem=cardEnd>end+1;
  // scrollHeight also detects children clipped by flex-shrink/overflow:hidden.
  const clippedCard=card.scrollHeight>card.clientHeight+3;
  const clippedWork=work.scrollHeight>work.clientHeight+3;
  return boundsProblem||clippedCard||clippedWork;
 }
 function fit(){
  frame=0;
  if(!isTraining()){leave();return}
  active=true;
  body.classList.add('wr-training');
  setViewport();
  if(!body.classList.contains('wr-keyboard')){
   for(let density=0;density<=3;density++){
    body.dataset.wrDensity=String(density);
    // Reading sizes after the class change forces updated layout synchronously.
    if(!overflowing())break;
   }
  }else body.dataset.wrDensity='3';
 }
 function schedule(){
  if(frame)cancelAnimationFrame(frame);
  frame=requestAnimationFrame(fit);
 }
 function sync(){
  const shouldBeActive=isTraining();
  if(shouldBeActive&&!active){
   active=true;
   body.classList.add('wr-training');
   document.documentElement.scrollTop=0;
   window.scrollTo(0,0);
  }else if(!shouldBeActive&&active){
   leave();
  }
  if(shouldBeActive)schedule();
 }
 const observer=new MutationObserver(sync);
 observer.observe(app,{childList:true,subtree:true,characterData:true});
 if(settings)observer.observe(settings,{attributes:true,attributeFilter:['hidden']});
 window.addEventListener('resize',sync,{passive:true});
 window.visualViewport?.addEventListener('resize',sync,{passive:true});
 window.visualViewport?.addEventListener('scroll',schedule,{passive:true});
 document.addEventListener('focusin',e=>{
  if(active && e.target.matches?.('#qform input,#qform textarea'))schedule();
 });
 document.addEventListener('focusout',e=>{
  if(active && e.target.matches?.('#qform input,#qform textarea')){
   body.classList.remove('wr-keyboard');
   schedule();
  }
 });
 sync();
})();
