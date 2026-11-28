/* Non-AI German feedback. Checks a defined set of A1 mistakes; never asserts
   arbitrary free-form German is correct or wrong without a matching rule. */
const WR_CHECKER=(()=>{
const nouns="Handy Video Videos Koffer Rucksack Reisepass Jacke Kleidung Tasche Hose Hosen Schuhe Hemd Anzug Größe Farbe Preis Preise Kleidung Telefon Computer Büro Büroarbeit Arbeit Termin Termine E-Mail E-Mails Kunde Kunden Schreibtisch Film Filme Fotos Foto Wasser Kaffee Tee Milch Saft Apfelsaft Glas Brot Eier Ei Essen Pizza Kartoffeln Kartoffelsuppe Suppe Gemüse Reis Couscous Restaurant Rechnung Bahnhof Bus Zug Fahrschein Fahrkarte Fahrt Stadt Straße Städte Schule Universität Buch Bücher Heft Hefte Museum Kino Park Deutschland Marokko Casablanca Berlin Frankfurt Hamburg Marrakesch Rabat Österreich Afrika Deutsch Arabisch Englisch Sprache Sprachen Urlaub Ferien Reise Reisen Zeit Morgen Mittag Abend Nacht Nächte Tag Tage Jahr Jahre Monat Monate Montag Dienstag Mittwoch Donnerstag Freitag Samstag Sonntag Sommer Winter Herbst Frühling Wetter Sonntag Wochenende Woche Wochen Freitag Samstag Familie Schwester Bruder Eltern Kinder Kind Vater Mutter Kopf Bauch Hals Fieber Husten Arzt Ärztin Arzttermin Gesundheit Wohnung Zimmer Einzelzimmer Hotel Küche Wohnzimmer Schlafzimmer Tisch Bett Sofa Balkon Miete Haus Haushalt Fenster Möbel Wohnzimmer Geburtstag Party Konzert Einladung Nachrichten Museum Theater Spiel Fußball Sport Freundin Freund Freunde Computer Internet Stau Technik Technikproblem Ausweis Name Vorname Nachname Adresse Telefonnummer Zahl Zahlen Frühstück Mittagessen Abendessen Kalender Meeting Pause Arbeitszeit Büro Sprache Fahrrad Sportart Bahnhof Straße Kollegen Kollegin Chef Studiengang Kurs Deutschkurs Unterricht Unterrichtsstunde Stunde Stunden Minute Minuten".split(/\s+/);
const nounsMap=new Map(nouns.map(w=>[w.toLocaleLowerCase("de"),w]));
const pronounVerbs={
 ich:{bist:"bin",ist:"bin",sind:"bin",seid:"bin",haben:"habe",hast:"habe",hat:"habe",nimmt:"nehme",nehmen:"nehme",nimmst:"nehme",macht:"mache",machst:"mache",machen:"mache",lernt:"lerne",lernst:"lerne",lernen:"lerne",geht:"gehe",gehen:"gehe",gehst:"gehe",wohnt:"wohne",wohnen:"wohne",kommt:"komme",kommen:"komme",arbeitet:"arbeite",arbeiten:"arbeite",spricht:"spreche",sprechen:"spreche",fährt:"fahre",fahren:"fahre",trinkt:"trinke",trinken:"trinke",isst:"esse",essen:"esse",braucht:"brauche",brauchen:"brauche",kauft:"kaufe",kaufen:"kaufe",möchten:"möchte"},
 du:{bin:"bist",ist:"bist",seid:"bist",sind:"bist",habe:"hast",haben:"hast",hat:"hast",nehme:"nimmst",nehmen:"nimmst",macht:"machst",machen:"machst",lerne:"lernst",lernen:"lernst",gehe:"gehst",gehen:"gehst",wohne:"wohnst",wohnen:"wohnst",komme:"kommst",kommen:"kommst",arbeite:"arbeitest",arbeiten:"arbeitest",spreche:"sprichst",sprechen:"sprichst",fahre:"fährst",fahren:"fährst",trinke:"trinkst",trinken:"trinkst",esse:"isst",essen:"isst",brauche:"brauchst",brauchen:"brauchst",kaufe:"kaufst",kaufen:"kaufst",möchte:"möchtest",möchten:"möchtest"},
 wir:{bin:"sind",bist:"sind",ist:"sind",seid:"sind",habe:"haben",hast:"haben",hat:"haben",nehme:"nehmen",nimmst:"nehmen",macht:"machen",machst:"machen",lerne:"lernen",lernst:"lernen",gehe:"gehen",gehst:"gehen",wohne:"wohnen",kommt:"kommen",komme:"kommen",arbeite:"arbeiten",spreche:"sprechen",fahre:"fahren",fährst:"fahren",trinke:"trinken",esse:"essen",isst:"essen",brauche:"brauchen",kaufe:"kaufen",möchte:"möchten",möchtest:"möchten"},
 ihr:{bin:"seid",bist:"seid",ist:"seid",sind:"seid",habe:"habt",haben:"habt",hast:"habt",hat:"habt",nehme:"nehmt",nimmt:"nehmt",nehmen:"nehmt",machen:"macht",mache:"macht",lerne:"lernt",lernen:"lernt",gehe:"geht",gehen:"geht",wohne:"wohnt",wohnen:"wohnt",komme:"kommt",kommen:"kommt",arbeite:"arbeitet",arbeiten:"arbeitet",spreche:"sprecht",sprechen:"sprecht",fahre:"fahrt",fahren:"fahrt",trinke:"trinkt",trinken:"trinkt",esse:"esst",essen:"esst",brauche:"braucht",brauchen:"braucht",kaufe:"kauft",kaufen:"kauft",möchte:"möchtet",möchten:"möchtet"}
};
const masc=new Set("Koffer Rucksack Reisepass Computer Anzug Kaffee Apfelsaft Bus Zug Film Termin Tisch Drucker".toLocaleLowerCase("de").split(/\s+/));
// "morgen" can mean tomorrow (lowercase); never force it to a noun.
nounsMap.delete("morgen");
const norm=x=>String(x||"").normalize("NFC").replace(/[.,!?;:„“"']/g,"").trim().replace(/\s+/g," ").toLocaleLowerCase("de");
function distance(a,b,limit=2){
 if(Math.abs(a.length-b.length)>limit)return limit+1;
 let prev=Array.from({length:b.length+1},(_,i)=>i);
 for(let i=1;i<=a.length;i++){
  let row=[i],best=i;
  for(let j=1;j<=b.length;j++){
   const v=Math.min(row[j-1]+1,prev[j]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));
   row.push(v);best=Math.min(best,v);
  }
  if(best>limit)return limit+1;prev=row;
 }
 return prev[b.length];
}
function check(answer,step){
 const original=String(answer||"").trim();
 if(!original)return {type:"empty",info:"كتب جواب بالألمانية."};
 const choices=(step.choices||[]).filter(Boolean);
 const normalized=norm(original);
 // A complete suggested answer is valid; casing gets checked below.
 let corrected=original.replace(/^([a-zäöü])/u,c=>c.toLocaleUpperCase("de"));
 let reasons=[];
 corrected=corrected.replace(/[A-Za-zÄÖÜäöüß]+/gu,word=>{
   const lower=word.toLocaleLowerCase("de");
   const target=nounsMap.get(lower);
   if(!target||word===target||word===word.toLocaleUpperCase("de"))return word;
   reasons.push("الاسم "+target+" خاصو حرف كبير فالبداية.");return target;
 });
 corrected=corrected.replace(/\b(ich)\s+(nehme|kaufe|brauche|habe|suche|bestelle|möchte)\s+(mein|ein|der)\s+([A-Za-zÄÖÜäöüß]+)/gi,(whole,sub,verb,art,obj)=>{
   if(!masc.has(obj.toLocaleLowerCase("de")))return whole;
   const to={mein:"meinen",ein:"einen",der:"den"}[art.toLocaleLowerCase("de")];
   reasons.push("مع "+obj+" المذكر فـAkkusativ كنستعملو "+to+".");
   return sub+" "+verb+" "+to+" "+obj;
 });
 corrected=corrected.replace(/\b(ich|du|wir|ihr)\s+([a-zäöüß]+)\b/gi,(whole,sub,verb)=>{
   const to=pronounVerbs[sub.toLocaleLowerCase("de")]?.[verb.toLocaleLowerCase("de")];
   if(!to||to===verb)return whole;
   reasons.push("مع "+sub+" الفعل كيتصرف هكذا: "+to+".");
   return sub+" "+to;
 });
 if(/möcht/i.test(step.question)&&/\bich mochte\b/i.test(corrected)){
   corrected=corrected.replace(/\bich mochte\b/i,"Ich möchte");
   reasons.push("باش تطلب حاجة دابا كنكتبوا möchte بـ ö.");
 }
 if(corrected!==original&&!reasons.length)reasons.push("أول حرف فالجملة خاصو يكون كبير.");
 if(corrected===original){
   for(const suggested of choices){
    if(norm(corrected)===norm(suggested))return {type:"good",info:"جواب مناسب."};
    if(distance(norm(corrected),norm(suggested),2)<=1&&Math.abs(norm(corrected).length-norm(suggested).length)<=1){
     corrected=suggested;reasons.push("فرق صغير فالكتابة، ها الصيغة المضبوطة.");break;
    }
   }
 }
 if(corrected!==original)return {type:"fix",original,corrected,info:[...new Set(reasons)].join(" ")};
 if(choices.some(s=>norm(s)===normalized))return {type:"good",info:"جواب مناسب."};
 const simple=/^(ja|nein|klar|natürlich|gerne|gern|danke|bitte|okay|ok)\.?$/i.test(original);
 if(simple&&!/^(wer|wie|was|wo|wann|warum|welche|woher|wohin|wie viel|wieviel)/i.test(step.question))return {type:"good",info:"جواب قصير ومقبول لهاد السؤال."};
 return {type:"unverified",info:simple?"هاد السؤال خاصّو معلومات أكثر من غير Ja أو Nein.":"ما نقدرش نتحقق من صحة الجملة الحرة كاملة بلا AI. قارنها بالأمثلة أو كمّل بلا تقييم."};
}
return {check,norm};
})();
