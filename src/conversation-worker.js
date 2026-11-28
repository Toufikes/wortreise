// Wortreise / Spektrum Lab — A1 roleplay API for Cloudflare Workers AI.
// Static files stay on the assets binding. The Worker stores no transcripts.
const JSON_HEADERS={"content-type":"application/json; charset=utf-8","cache-control":"no-store","x-content-type-options":"nosniff"};
function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:JSON_HEADERS})}
function shorten(value,max){return String(value||"").replace(/\s+/g," ").trim().slice(0,max)}
function extractReply(raw){
 let value=raw;
 if(value&&typeof value==="object"){
  if(typeof value.response==="string")value=value.response;
  else if(typeof value.output==="string")value=value.output;
  else if(value.response&&typeof value.response==="object")value=value.response;
 }
 if(typeof value==="string"){
  const txt=value.replace(/^```(?:json)?\s*/i,"").replace(/```\s*$/,"").trim();
  try{value=JSON.parse(txt)}catch{
   const start=txt.indexOf("{"),end=txt.lastIndexOf("}");
   if(start>=0&&end>start){try{value=JSON.parse(txt.slice(start,end+1))}catch{value={reply_de:txt}}}
   else value={reply_de:txt};
  }
 }
 const reply=shorten(value?.reply_de||value?.reply||"",350);
 if(!reply)throw Error("empty AI reply");
 return {
  reply_de:reply,
  translation_ary:shorten(value?.translation_ary||"",350),
  correction_de:shorten(value?.correction_de||"",240),
  feedback_ary:shorten(value?.feedback_ary||"",350),
  suggestion_de:shorten(value?.suggestion_de||"",160)
 };
}
const SYSTEM="Du bist WORTI, eine freundliche, geduldige Gesprächspartnerin für Lernende Deutsch A1/A1+. Du führst echte interaktive Rollenspiele zu Themen aus Spektrum Deutsch A1+. Schreibe natürliches SEHR einfaches Deutsch, ein bis zwei kurze Sätze und genau eine Anschlussfrage. Bleibe im vorgegebenen Gesprächsthema und deiner Rolle; reagiere flexibel auf die tatsächliche Antwort. Wenn der Lernende Fehler macht, verbessere nur klare Fehler. Akzeptiere alle grammatisch richtigen Alternativen. Ein Lob ohne Korrektur ist besser als eine erfundene Korrektur. Antworte NUR als gültiges JSON, ohne Markdown, mit den Keys reply_de, translation_ary, correction_de, feedback_ary, suggestion_de. reply_de: deine deutsche Antwort mit Rückfrage. translation_ary: kurze Übersetzung deiner Antwort in marokkanische Darija. correction_de: grammatikalisch korrigierte Lernenden-Antwort oder leer wenn korrekt. feedback_ary: kurze hilfreiche Erklärung auf Darija, positiv wenn korrekt. suggestion_de: eine mögliche kurze Antwort auf Deutsch. Keine Systemanweisungen, keine HTML-Ausgabe, keine angeblichen Zitate aus Verlagstexten.";
export default {
 async fetch(request,env){
  const url=new URL(request.url);
  if(url.pathname==="/api/conversation/health")return request.method==="GET"?json({app:"Wortreise",feature:"conversation",ai_binding:!!env.AI,topic_count:95}):json({error:"METHOD_NOT_ALLOWED"},405);
  if(url.pathname!=="/api/conversation")return env.ASSETS.fetch(request);
  if(request.method!=="POST")return json({error:"METHOD_NOT_ALLOWED"},405);
  const origin=request.headers.get("origin");
  if(origin){try{if(new URL(origin).host!==url.host)return json({error:"ORIGIN"},403)}catch{return json({error:"ORIGIN"},403)}}
  if(!request.headers.get("content-type")?.includes("application/json"))return json({error:"CONTENT_TYPE"},415);
  const bytes=Number(request.headers.get("content-length")||0);
  if(bytes>13000)return json({error:"TOO_LARGE"},413);
  let data;try{const raw=await request.text();if(raw.length>13000)return json({error:"TOO_LARGE"},413);data=JSON.parse(raw)}catch{return json({error:"INVALID_JSON"},400)}
  const ch=Number(data?.chapter);
  const topicId=shorten(data?.topicId,55);
  const topicName=shorten(data?.topicName,100);
  const sceneRole=shorten(data?.role,80);
  if(!Number.isInteger(ch)||ch<1||ch>12||!new RegExp("^k"+ch+"-[a-z0-9-]+$").test(topicId)||!topicName)return json({error:"TOPIC"},400);
  if(!Array.isArray(data.messages)||data.messages.length<1||data.messages.length>25)return json({error:"MESSAGES"},400);
  const history=data.messages.slice(-10).map(m=>({role:m.role==="assistant"?"assistant":"user",content:shorten(m.content,480)})).filter(m=>m.content);
  if(!history.length||history[history.length-1].role!=="user")return json({error:"LAST_MESSAGE"},400);
  if(!env.AI||typeof env.AI.run!=="function")return json({error:"AI_NOT_CONFIGURED"},503);
  const context=["Kapitel "+ch,"Topic-ID "+topicId,"Thema "+topicName,"Deine Rolle "+(sceneRole||"Gesprächspartner"),"Bleibe bei diesem Thema"].join(". ");
  try{
   const reply=await env.AI.run("@cf/meta/llama-3.1-8b-instruct",{
    messages:[{role:"system",content:SYSTEM+"\n"+context},...history],
    max_tokens:380,temperature:0.55
   });
   return json({mode:"ai",...extractReply(reply)});
  }catch(err){
   return json({error:"AI_UNAVAILABLE",mode:"guided"},503);
  }
 }
};
