/* Authored, original A1 role-play scenes mapped to Spektrum A1+ course overview.
   Each topic has 4 fixed, non-repeating conversation steps. No external AI calls. */
const WR_SCRIPTED_SCENES={
 "k1-greetings": [
  {
   "question": "Hallo! Wie geht es dir heute?",
   "translation": "سلام! كيف داير اليوم؟",
   "choices": [
    "Mir geht es gut, danke."
   ],
   "target": "Mir geht es gut, danke."
  },
  {
   "question": "Freut mich! Wie ist dein Tag?",
   "choices": [
    "Mein Tag ist gut.",
    "Ich bin heute müde."
   ],
   "target": "Mein Tag ist gut."
  },
  {
   "question": "Was machst du heute noch?",
   "choices": [
    "Ich lerne heute Deutsch.",
    "Ich gehe nach Hause."
   ],
   "target": "Ich lerne heute Deutsch."
  },
  {
   "question": "Möchtest du morgen wieder sprechen?",
   "choices": [
    "Ja, gern!",
    "Leider habe ich keine Zeit."
   ],
   "target": "Ja, gern!"
  }
 ],
 "k1-introductions": [
  {
   "question": "Hallo! Wie heißt du?",
   "translation": "سلام! شنو سميتك؟",
   "choices": [
    "Ich heiße Toufik."
   ],
   "target": "Ich heiße Toufik."
  },
  {
   "question": "Wo wohnst du?",
   "choices": [
    "Ich wohne in Casablanca.",
    "Ich wohne in Rabat."
   ],
   "target": "Ich wohne in Casablanca."
  },
  {
   "question": "Was machst du beruflich?",
   "choices": [
    "Ich mache Videos.",
    "Ich bin Student."
   ],
   "target": "Ich mache Videos."
  },
  {
   "question": "Warum lernst du Deutsch?",
   "choices": [
    "Ich möchte in Deutschland arbeiten.",
    "Ich lerne Deutsch für den Urlaub."
   ],
   "target": "Ich möchte in Deutschland arbeiten."
  }
 ],
 "k1-personal": [
  {
   "question": "Woher kommst du und wo wohnst du?",
   "translation": "منين نتا وفين ساكن؟",
   "choices": [
    "Ich komme aus Marokko und wohne in Casablanca."
   ],
   "target": "Ich komme aus Marokko und wohne in Casablanca."
  },
  {
   "question": "Wie alt bist du?",
   "choices": [
    "Ich bin 28 Jahre alt.",
    "Ich bin 25 Jahre alt."
   ],
   "target": "Ich bin 28 Jahre alt."
  },
  {
   "question": "Gefällt dir deine Stadt?",
   "choices": [
    "Ja, sie gefällt mir.",
    "Ja, Casablanca ist schön."
   ],
   "target": "Ja, sie gefällt mir."
  },
  {
   "question": "Möchtest du in Deutschland wohnen?",
   "choices": [
    "Ja, sehr gern.",
    "Vielleicht später."
   ],
   "target": "Ja, sehr gern."
  }
 ],
 "k1-languages": [
  {
   "question": "Welche Sprachen sprichst du?",
   "translation": "شنو اللغات اللي كتهضر؟",
   "choices": [
    "Ich spreche Arabisch und lerne Deutsch."
   ],
   "target": "Ich spreche Arabisch und lerne Deutsch."
  },
  {
   "question": "Lernst du gern Deutsch?",
   "choices": [
    "Ja, ich lerne gern Deutsch.",
    "Deutsch ist manchmal schwer."
   ],
   "target": "Ja, ich lerne gern Deutsch."
  },
  {
   "question": "Sprichst du auch Englisch?",
   "choices": [
    "Ja, ein bisschen.",
    "Nein, ich spreche nur Arabisch."
   ],
   "target": "Ja, ein bisschen."
  },
  {
   "question": "Wie lernst du neue Wörter?",
   "choices": [
    "Ich übe jeden Tag.",
    "Ich lese kurze Texte."
   ],
   "target": "Ich übe jeden Tag."
  }
 ],
 "k1-spelling": [
  {
   "question": "Wie schreibt man deinen Nachnamen? Kannst du ihn buchstabieren?",
   "translation": "كيفاش كنكتبو النسب ديالك؟",
   "choices": [
    "Mein Nachname ist Essalhi."
   ],
   "target": "Mein Nachname ist Essalhi."
  },
  {
   "question": "Wie viele Buchstaben hat dein Nachname?",
   "choices": [
    "Mein Nachname hat sieben Buchstaben.",
    "Das weiß ich nicht genau."
   ],
   "target": "Mein Nachname hat sieben Buchstaben."
  },
  {
   "question": "Wie schreibt man deinen Vornamen?",
   "choices": [
    "T-O-U-F-I-K.",
    "Ich heiße Toufik."
   ],
   "target": "T-O-U-F-I-K."
  },
  {
   "question": "Ist dein Name in Deutschland leicht?",
   "choices": [
    "Ja, ich glaube schon.",
    "Manchmal muss ich ihn buchstabieren."
   ],
   "target": "Ja, ich glaube schon."
  }
 ],
 "k1-hobbies": [
  {
   "question": "Was machst du gern in deiner Freizeit?",
   "translation": "شنو كيعجبك تدير فوقت الفراغ؟",
   "choices": [
    "Ich mache gern Videos."
   ],
   "target": "Ich mache gern Videos."
  },
  {
   "question": "Wie oft machst du das?",
   "choices": [
    "Jeden Tag.",
    "Am Wochenende."
   ],
   "target": "Jeden Tag."
  },
  {
   "question": "Machst du das allein?",
   "choices": [
    "Ja, meistens allein.",
    "Nein, mit Freunden."
   ],
   "target": "Ja, meistens allein."
  },
  {
   "question": "Was möchtest du noch ausprobieren?",
   "choices": [
    "Ich möchte fotografieren.",
    "Ich möchte Gitarre lernen."
   ],
   "target": "Ich möchte fotografieren."
  }
 ],
 "k1-smalltalk": [
  {
   "question": "Ich lerne Deutsch. Und du?",
   "translation": "كنتعلم الألمانية، ونتا؟",
   "choices": [
    "Ich auch! Das ist interessant."
   ],
   "target": "Ich auch! Das ist interessant."
  },
  {
   "question": "Warum findest du Deutsch interessant?",
   "choices": [
    "Die Sprache gefällt mir.",
    "Ich möchte in Deutschland leben."
   ],
   "target": "Die Sprache gefällt mir."
  },
  {
   "question": "Lernst du auch mit Videos?",
   "choices": [
    "Ja, jeden Tag.",
    "Nein, ich lerne mit einem Buch."
   ],
   "target": "Ja, jeden Tag."
  },
  {
   "question": "Wollen wir morgen wieder üben?",
   "choices": [
    "Ja, gute Idee!",
    "Morgen habe ich keine Zeit."
   ],
   "target": "Ja, gute Idee!"
  }
 ],
 "k2-jobs": [
  {
   "question": "Was bist du von Beruf?",
   "translation": "شنو الخدمة ديالك؟",
   "choices": [
    "Ich arbeite in einer Werbeagentur."
   ],
   "target": "Ich arbeite in einer Werbeagentur."
  },
  {
   "question": "Arbeitest du in einem Büro?",
   "choices": [
    "Ja, ich arbeite in einem Büro.",
    "Nein, ich arbeite zu Hause."
   ],
   "target": "Ja, ich arbeite in einem Büro."
  },
  {
   "question": "Was machst du jeden Tag?",
   "choices": [
    "Ich bearbeite Videos.",
    "Ich spreche mit Kunden."
   ],
   "target": "Ich bearbeite Videos."
  },
  {
   "question": "Gefällt dir deine Arbeit?",
   "choices": [
    "Ja, sie gefällt mir.",
    "Die Arbeit ist manchmal stressig."
   ],
   "target": "Ja, sie gefällt mir."
  }
 ],
 "k2-workday": [
  {
   "question": "Was machst du bei der Arbeit?",
   "translation": "شنو كدير فالخدمة؟",
   "choices": [
    "Ich mache Videos."
   ],
   "target": "Ich mache Videos."
  },
  {
   "question": "Benutzt du einen Computer?",
   "choices": [
    "Ja, jeden Tag.",
    "Nein, nicht oft."
   ],
   "target": "Ja, jeden Tag."
  },
  {
   "question": "Arbeitest du mit anderen zusammen?",
   "choices": [
    "Ja, ich habe ein Team.",
    "Nein, ich arbeite allein."
   ],
   "target": "Ja, ich habe ein Team."
  },
  {
   "question": "Was machst du am liebsten?",
   "choices": [
    "Ich schneide gern Videos.",
    "Ich schreibe gern Texte."
   ],
   "target": "Ich schneide gern Videos."
  }
 ],
 "k2-office": [
  {
   "question": "Was hast du auf deinem Schreibtisch?",
   "translation": "شنو عندك فوق المكتب؟",
   "choices": [
    "Ich habe einen Computer und ein Telefon."
   ],
   "target": "Ich habe einen Computer und ein Telefon."
  },
  {
   "question": "Brauchst du auch einen Drucker?",
   "choices": [
    "Ja, manchmal.",
    "Nein, ich brauche keinen Drucker."
   ],
   "target": "Ja, manchmal."
  },
  {
   "question": "Wo steht dein Computer?",
   "choices": [
    "Auf meinem Schreibtisch.",
    "Neben dem Fenster."
   ],
   "target": "Auf meinem Schreibtisch."
  },
  {
   "question": "Ist dein Büro groß?",
   "choices": [
    "Ja, es ist groß.",
    "Nein, es ist klein."
   ],
   "target": "Ja, es ist groß."
  }
 ],
 "k2-numbers": [
  {
   "question": "Wie viele Hefte brauchst du?",
   "translation": "شحال من كناش خاصك؟",
   "choices": [
    "Ich brauche zwei Hefte."
   ],
   "target": "Ich brauche zwei Hefte."
  },
  {
   "question": "Brauchst du noch mehr Hefte?",
   "choices": [
    "Ja, drei Hefte, bitte.",
    "Nein, danke."
   ],
   "target": "Ja, drei Hefte, bitte."
  },
  {
   "question": "Was kostet ein Heft?",
   "choices": [
    "Ein Heft kostet zwei Euro.",
    "Das weiß ich nicht."
   ],
   "target": "Ein Heft kostet zwei Euro."
  },
  {
   "question": "Möchtest du mit Karte zahlen?",
   "choices": [
    "Ja, bitte.",
    "Nein, bar."
   ],
   "target": "Ja, bitte."
  }
 ],
 "k2-countryfacts": [
  {
   "question": "In welchem Land möchtest du arbeiten?",
   "translation": "فأي بلد بغيتي تخدم؟",
   "choices": [
    "Ich möchte in Deutschland arbeiten."
   ],
   "target": "Ich möchte in Deutschland arbeiten."
  },
  {
   "question": "Warum möchtest du dort arbeiten?",
   "choices": [
    "Ich möchte Deutsch sprechen.",
    "Dort gibt es gute Jobs."
   ],
   "target": "Ich möchte Deutsch sprechen."
  },
  {
   "question": "In welcher Stadt möchtest du wohnen?",
   "choices": [
    "In Berlin.",
    "In Hamburg."
   ],
   "target": "In Berlin."
  },
  {
   "question": "Lernst du dafür Deutsch?",
   "choices": [
    "Ja, jeden Tag.",
    "Ja, zweimal pro Woche."
   ],
   "target": "Ja, jeden Tag."
  }
 ],
 "k2-family": [
  {
   "question": "Hast du Geschwister?",
   "translation": "عندك خوت؟",
   "choices": [
    "Ja, ich habe eine Schwester."
   ],
   "target": "Ja, ich habe eine Schwester."
  },
  {
   "question": "Wie alt sind deine Geschwister?",
   "choices": [
    "Meine Schwester ist zwanzig.",
    "Mein Bruder ist älter als ich."
   ],
   "target": "Meine Schwester ist zwanzig."
  },
  {
   "question": "Wohnt deine Familie in deiner Stadt?",
   "choices": [
    "Ja, in Casablanca.",
    "Nein, in einer anderen Stadt."
   ],
   "target": "Ja, in Casablanca."
  },
  {
   "question": "Seht ihr euch oft?",
   "choices": [
    "Ja, jedes Wochenende.",
    "Leider nicht so oft."
   ],
   "target": "Ja, jedes Wochenende."
  }
 ],
 "k2-family-status": [
  {
   "question": "Bist du verheiratet?",
   "translation": "واش متزوج؟",
   "choices": [
    "Nein, ich bin ledig."
   ],
   "target": "Nein, ich bin ledig."
  },
  {
   "question": "Wohnst du allein?",
   "choices": [
    "Ja, ich wohne allein.",
    "Nein, mit meiner Familie."
   ],
   "target": "Ja, ich wohne allein."
  },
  {
   "question": "Hast du Kinder?",
   "choices": [
    "Nein, ich habe keine Kinder.",
    "Ja, ich habe ein Kind."
   ],
   "target": "Nein, ich habe keine Kinder."
  },
  {
   "question": "Möchtest du über deine Familie sprechen?",
   "choices": [
    "Ja, gern.",
    "Heute lieber nicht."
   ],
   "target": "Ja, gern."
  }
 ],
 "k2-meeting": [
  {
   "question": "Freut mich! Wie heißt du und was machst du?",
   "translation": "تشرفت! شنو سميتك وشنو كتدير؟",
   "choices": [
    "Ich heiße Toufik und arbeite als Kreativer."
   ],
   "target": "Ich heiße Toufik und arbeite als Kreativer."
  },
  {
   "question": "In welcher Stadt wohnst du?",
   "choices": [
    "Ich wohne in Casablanca.",
    "Ich wohne in Marrakesch."
   ],
   "target": "Ich wohne in Casablanca."
  },
  {
   "question": "Was machst du in deiner Freizeit?",
   "choices": [
    "Ich gehe spazieren.",
    "Ich lerne Deutsch."
   ],
   "target": "Ich gehe spazieren."
  },
  {
   "question": "Sollen wir einen Kaffee trinken?",
   "choices": [
    "Ja, gern.",
    "Leider habe ich keine Zeit."
   ],
   "target": "Ja, gern."
  }
 ],
 "k3-cafe": [
  {
   "question": "Guten Tag! Was möchten Sie trinken?",
   "translation": "شنو بغيتي تشرب؟",
   "choices": [
    "Ich möchte einen Kaffee, bitte."
   ],
   "target": "Ich möchte einen Kaffee, bitte."
  },
  {
   "question": "Möchten Sie auch etwas essen?",
   "choices": [
    "Ja, ein Stück Kuchen, bitte.",
    "Nein, nur einen Kaffee."
   ],
   "target": "Ja, ein Stück Kuchen, bitte."
  },
  {
   "question": "Mit Milch oder ohne Milch?",
   "choices": [
    "Mit Milch, bitte.",
    "Ohne Milch, bitte."
   ],
   "target": "Mit Milch, bitte."
  },
  {
   "question": "War alles in Ordnung?",
   "choices": [
    "Ja, vielen Dank.",
    "Ja, der Kaffee war lecker."
   ],
   "target": "Ja, vielen Dank."
  }
 ],
 "k3-pay": [
  {
   "question": "Möchten Sie bezahlen?",
   "translation": "بغيتي تخلص؟",
   "choices": [
    "Ja, die Rechnung, bitte."
   ],
   "target": "Ja, die Rechnung, bitte."
  },
  {
   "question": "Zusammen oder getrennt?",
   "choices": [
    "Zusammen, bitte.",
    "Getrennt, bitte."
   ],
   "target": "Zusammen, bitte."
  },
  {
   "question": "Zahlen Sie bar oder mit Karte?",
   "choices": [
    "Mit Karte, bitte.",
    "Bar, bitte."
   ],
   "target": "Mit Karte, bitte."
  },
  {
   "question": "Brauchen Sie eine Quittung?",
   "choices": [
    "Ja, bitte.",
    "Nein, danke."
   ],
   "target": "Ja, bitte."
  }
 ],
 "k3-street": [
  {
   "question": "Entschuldigung, suchen Sie etwas?",
   "translation": "سمح ليا، كتقلب على شي حاجة؟",
   "choices": [
    "Ja, ich suche die Apotheke."
   ],
   "target": "Ja, ich suche die Apotheke."
  },
  {
   "question": "Wissen Sie, wo die Apotheke ist?",
   "choices": [
    "Nein, leider nicht.",
    "Ja, neben dem Bahnhof."
   ],
   "target": "Nein, leider nicht."
  },
  {
   "question": "Müssen Sie nach links oder rechts?",
   "choices": [
    "Nach links.",
    "Nach rechts."
   ],
   "target": "Nach links."
  },
  {
   "question": "Haben Sie den Weg gefunden?",
   "choices": [
    "Ja, vielen Dank!",
    "Noch nicht ganz."
   ],
   "target": "Ja, vielen Dank!"
  }
 ],
 "k3-buildings": [
  {
   "question": "Was gibt es in deiner Stadt?",
   "translation": "شنو كاين فمدينتك؟",
   "choices": [
    "Es gibt viele Cafés und Museen."
   ],
   "target": "Es gibt viele Cafés und Museen."
  },
  {
   "question": "Gibt es bei dir ein Museum?",
   "choices": [
    "Ja, ein großes Museum.",
    "Nein, nicht in der Nähe."
   ],
   "target": "Ja, ein großes Museum."
  },
  {
   "question": "Wo ist der Bahnhof?",
   "choices": [
    "Im Stadtzentrum.",
    "Neben dem Park."
   ],
   "target": "Im Stadtzentrum."
  },
  {
   "question": "Welchen Ort besuchst du gern?",
   "choices": [
    "Ich besuche gern den Park.",
    "Ich gehe gern ins Kino."
   ],
   "target": "Ich besuche gern den Park."
  }
 ],
 "k3-hotel": [
  {
   "question": "Guten Abend! Möchten Sie ein Zimmer reservieren?",
   "translation": "بغيتي تحجز غرفة؟",
   "choices": [
    "Ja, ein Einzelzimmer für zwei Nächte."
   ],
   "target": "Ja, ein Einzelzimmer für zwei Nächte."
  },
  {
   "question": "Für wie viele Nächte?",
   "choices": [
    "Für zwei Nächte.",
    "Für drei Nächte."
   ],
   "target": "Für zwei Nächte."
  },
  {
   "question": "Möchten Sie ein Zimmer mit Frühstück?",
   "choices": [
    "Ja, bitte.",
    "Nein, ohne Frühstück."
   ],
   "target": "Ja, bitte."
  },
  {
   "question": "Wie möchten Sie bezahlen?",
   "choices": [
    "Mit Karte, bitte.",
    "Bar, bitte."
   ],
   "target": "Mit Karte, bitte."
  }
 ],
 "k3-form": [
  {
   "question": "Wie ist Ihr Vorname und Ihre Adresse?",
   "translation": "شنو الاسم والعنوان ديالك؟",
   "choices": [
    "Mein Vorname ist Toufik."
   ],
   "target": "Mein Vorname ist Toufik."
  },
  {
   "question": "Wie ist Ihre Telefonnummer?",
   "choices": [
    "Meine Nummer beginnt mit null sechs.",
    "Ich habe meine Nummer gerade nicht."
   ],
   "target": "Meine Nummer beginnt mit null sechs."
  },
  {
   "question": "Was ist Ihre Nationalität?",
   "choices": [
    "Ich bin Marokkaner.",
    "Ich komme aus Marokko."
   ],
   "target": "Ich bin Marokkaner."
  },
  {
   "question": "Haben Sie Ihren Ausweis dabei?",
   "choices": [
    "Ja, hier ist er.",
    "Nein, leider nicht."
   ],
   "target": "Ja, hier ist er."
  }
 ],
 "k3-email": [
  {
   "question": "Du brauchst ein Hotelzimmer. Was schreibst du?",
   "translation": "كيفاش تكتب إيميل للحجز؟",
   "choices": [
    "Guten Tag, ich möchte ein Zimmer reservieren."
   ],
   "target": "Guten Tag, ich möchte ein Zimmer reservieren."
  },
  {
   "question": "Für wann brauchen Sie das Zimmer?",
   "choices": [
    "Für Freitag.",
    "Für nächste Woche."
   ],
   "target": "Für Freitag."
  },
  {
   "question": "Wie viele Nächte möchten Sie bleiben?",
   "choices": [
    "Zwei Nächte.",
    "Nur eine Nacht."
   ],
   "target": "Zwei Nächte."
  },
  {
   "question": "Wie beenden Sie die E-Mail?",
   "choices": [
    "Mit freundlichen Grüßen.",
    "Vielen Dank und viele Grüße."
   ],
   "target": "Mit freundlichen Grüßen."
  }
 ],
 "k3-frankfurt": [
  {
   "question": "Was möchtest du in Frankfurt sehen?",
   "translation": "شنو بغيتي تشوف ففرانكفورت؟",
   "choices": [
    "Ich möchte die Stadt besuchen."
   ],
   "target": "Ich möchte die Stadt besuchen."
  },
  {
   "question": "Möchtest du den Römer sehen?",
   "choices": [
    "Ja, sehr gern.",
    "Nein, lieber den Park."
   ],
   "target": "Ja, sehr gern."
  },
  {
   "question": "Fährst du mit dem Zug?",
   "choices": [
    "Ja, mit dem Zug.",
    "Nein, mit dem Bus."
   ],
   "target": "Ja, mit dem Zug."
  },
  {
   "question": "Wie lange bleibst du?",
   "choices": [
    "Zwei Tage.",
    "Eine Woche."
   ],
   "target": "Zwei Tage."
  }
 ],
 "k4-clock": [
  {
   "question": "Wie spät ist es jetzt?",
   "translation": "شحال فالساعة؟",
   "choices": [
    "Es ist acht Uhr."
   ],
   "target": "Es ist acht Uhr."
  },
  {
   "question": "Wann beginnt dein Deutschkurs?",
   "choices": [
    "Um neun Uhr.",
    "Um halb zehn."
   ],
   "target": "Um neun Uhr."
  },
  {
   "question": "Wie lange dauert dein Kurs?",
   "choices": [
    "Eine Stunde.",
    "Zwei Stunden."
   ],
   "target": "Eine Stunde."
  },
  {
   "question": "Wann hast du Pause?",
   "choices": [
    "Um zwölf Uhr.",
    "Am Nachmittag."
   ],
   "target": "Um zwölf Uhr."
  }
 ],
 "k4-duration": [
  {
   "question": "Wie lange arbeitest du heute?",
   "translation": "شحال غادي تخدم اليوم؟",
   "choices": [
    "Ich arbeite acht Stunden."
   ],
   "target": "Ich arbeite acht Stunden."
  },
  {
   "question": "Wann machst du eine Pause?",
   "choices": [
    "Nach zwei Stunden.",
    "Um zwölf Uhr."
   ],
   "target": "Nach zwei Stunden."
  },
  {
   "question": "Arbeitest du am Wochenende?",
   "choices": [
    "Nein, am Wochenende nicht.",
    "Ja, manchmal."
   ],
   "target": "Nein, am Wochenende nicht."
  },
  {
   "question": "Wann gehst du nach Hause?",
   "choices": [
    "Um achtzehn Uhr.",
    "Gegen siebzehn Uhr."
   ],
   "target": "Um achtzehn Uhr."
  }
 ],
 "k4-days": [
  {
   "question": "Was machst du am Montagmorgen?",
   "translation": "شنو كتدير الاثنين فالصباح؟",
   "choices": [
    "Am Montagmorgen lerne ich Deutsch."
   ],
   "target": "Am Montagmorgen lerne ich Deutsch."
  },
  {
   "question": "Was machst du am Nachmittag?",
   "choices": [
    "Ich arbeite.",
    "Ich lerne Deutsch."
   ],
   "target": "Ich arbeite."
  },
  {
   "question": "Was machst du am Abend?",
   "choices": [
    "Ich koche zu Hause.",
    "Ich sehe fern."
   ],
   "target": "Ich koche zu Hause."
  },
  {
   "question": "Wann gehst du ins Bett?",
   "choices": [
    "Um elf Uhr.",
    "Um Mitternacht."
   ],
   "target": "Um elf Uhr."
  }
 ],
 "k4-routine": [
  {
   "question": "Wann stehst du normalerweise auf?",
   "translation": "فاش كتفيق غالباً؟",
   "choices": [
    "Ich stehe um sieben Uhr auf."
   ],
   "target": "Ich stehe um sieben Uhr auf."
  },
  {
   "question": "Was frühstückst du?",
   "choices": [
    "Ich esse Brot.",
    "Ich trinke Kaffee."
   ],
   "target": "Ich esse Brot."
  },
  {
   "question": "Wann beginnst du mit der Arbeit?",
   "choices": [
    "Um neun Uhr.",
    "Um acht Uhr."
   ],
   "target": "Um neun Uhr."
  },
  {
   "question": "Wann lernst du Deutsch?",
   "choices": [
    "Am Abend.",
    "Am Morgen."
   ],
   "target": "Am Abend."
  }
 ],
 "k4-activities": [
  {
   "question": "Was machst du nach der Arbeit?",
   "translation": "شنو كتدير من بعد الخدمة؟",
   "choices": [
    "Ich esse zu Abend und lese."
   ],
   "target": "Ich esse zu Abend und lese."
  },
  {
   "question": "Gehst du danach einkaufen?",
   "choices": [
    "Ja, ich kaufe ein.",
    "Nein, ich bleibe zu Hause."
   ],
   "target": "Ja, ich kaufe ein."
  },
  {
   "question": "Machst du heute Sport?",
   "choices": [
    "Ja, ich gehe laufen.",
    "Nein, heute nicht."
   ],
   "target": "Ja, ich gehe laufen."
  },
  {
   "question": "Was machst du vor dem Schlafen?",
   "choices": [
    "Ich lese ein Buch.",
    "Ich höre Musik."
   ],
   "target": "Ich lese ein Buch."
  }
 ],
 "k4-phone": [
  {
   "question": "Hallo, hier ist Max. Kannst du jetzt sprechen?",
   "translation": "واش تقدر تهضر دابا فالتليفون؟",
   "choices": [
    "Ja, ich habe fünf Minuten Zeit."
   ],
   "target": "Ja, ich habe fünf Minuten Zeit."
  },
  {
   "question": "Worum geht es?",
   "choices": [
    "Es geht um einen Termin.",
    "Ich habe eine kurze Frage."
   ],
   "target": "Es geht um einen Termin."
  },
  {
   "question": "Können wir morgen sprechen?",
   "choices": [
    "Ja, um zehn Uhr.",
    "Nein, erst am Freitag."
   ],
   "target": "Ja, um zehn Uhr."
  },
  {
   "question": "Soll ich später noch einmal anrufen?",
   "choices": [
    "Ja, bitte.",
    "Nein, danke."
   ],
   "target": "Ja, bitte."
  }
 ],
 "k4-plans": [
  {
   "question": "Kannst du heute mit mir Kaffee trinken?",
   "translation": "تقدر تخرج تشرب قهوة؟",
   "choices": [
    "Ja, am Abend kann ich."
   ],
   "target": "Ja, am Abend kann ich."
  },
  {
   "question": "Wann hast du Zeit?",
   "choices": [
    "Am Abend.",
    "Morgen Nachmittag."
   ],
   "target": "Am Abend."
  },
  {
   "question": "Wo treffen wir uns?",
   "choices": [
    "Vor dem Café.",
    "Am Bahnhof."
   ],
   "target": "Vor dem Café."
  },
  {
   "question": "Wie kommen wir dorthin?",
   "choices": [
    "Mit dem Bus.",
    "Zu Fuß."
   ],
   "target": "Mit dem Bus."
  }
 ],
 "k5-foodlikes": [
  {
   "question": "Was isst du gern?",
   "translation": "شنو كتعجبك تاكل؟",
   "choices": [
    "Ich esse gern Couscous."
   ],
   "target": "Ich esse gern Couscous."
  },
  {
   "question": "Magst du auch Suppe?",
   "choices": [
    "Ja, sehr gern.",
    "Nein, lieber Salat."
   ],
   "target": "Ja, sehr gern."
  },
  {
   "question": "Was trinkst du zum Essen?",
   "choices": [
    "Ich trinke Wasser.",
    "Ich trinke Saft."
   ],
   "target": "Ich trinke Wasser."
  },
  {
   "question": "Kochst du manchmal selbst?",
   "choices": [
    "Ja, oft.",
    "Nein, selten."
   ],
   "target": "Ja, oft."
  }
 ],
 "k5-habits": [
  {
   "question": "Was frühstückst du normalerweise?",
   "translation": "شنو كتاكل فالفطور؟",
   "choices": [
    "Ich esse Brot und trinke Tee."
   ],
   "target": "Ich esse Brot und trinke Tee."
  },
  {
   "question": "Trinkst du morgens Kaffee?",
   "choices": [
    "Ja, immer.",
    "Nein, lieber Tee."
   ],
   "target": "Ja, immer."
  },
  {
   "question": "Isst du mittags zu Hause?",
   "choices": [
    "Ja, meistens.",
    "Nein, in der Kantine."
   ],
   "target": "Ja, meistens."
  },
  {
   "question": "Wann isst du zu Abend?",
   "choices": [
    "Um sieben Uhr.",
    "Um acht Uhr."
   ],
   "target": "Um sieben Uhr."
  }
 ],
 "k5-groceries": [
  {
   "question": "Guten Tag! Was brauchen Sie?",
   "translation": "شنو خاصك تشري؟",
   "choices": [
    "Ich brauche Milch, Brot und Eier."
   ],
   "target": "Ich brauche Milch, Brot und Eier."
  },
  {
   "question": "Wie viel Milch brauchen Sie?",
   "choices": [
    "Einen Liter, bitte.",
    "Zwei Liter, bitte."
   ],
   "target": "Einen Liter, bitte."
  },
  {
   "question": "Möchten Sie auch Obst?",
   "choices": [
    "Ja, Äpfel, bitte.",
    "Nein, danke."
   ],
   "target": "Ja, Äpfel, bitte."
  },
  {
   "question": "Brauchen Sie eine Tüte?",
   "choices": [
    "Ja, bitte.",
    "Nein, ich habe eine Tasche."
   ],
   "target": "Ja, bitte."
  }
 ],
 "k5-kitchen": [
  {
   "question": "Was kochst du heute?",
   "translation": "شنو غادي تطيب اليوم؟",
   "choices": [
    "Ich koche Reis mit Gemüse."
   ],
   "target": "Ich koche Reis mit Gemüse."
  },
  {
   "question": "Welche Zutaten brauchst du?",
   "choices": [
    "Ich brauche Reis und Gemüse.",
    "Ich brauche Kartoffeln."
   ],
   "target": "Ich brauche Reis und Gemüse."
  },
  {
   "question": "Kann ich dir helfen?",
   "choices": [
    "Ja, schneide bitte das Gemüse.",
    "Nein, danke."
   ],
   "target": "Ja, schneide bitte das Gemüse."
  },
  {
   "question": "Ist das Essen fertig?",
   "choices": [
    "Ja, gleich.",
    "Noch nicht."
   ],
   "target": "Ja, gleich."
  }
 ],
 "k5-restaurant": [
  {
   "question": "Willkommen! Was möchten Sie bestellen?",
   "translation": "شنو بغيتي تطلب؟",
   "choices": [
    "Ich nehme eine Suppe und Wasser."
   ],
   "target": "Ich nehme eine Suppe und Wasser."
  },
  {
   "question": "Möchten Sie auch etwas trinken?",
   "choices": [
    "Ein Wasser, bitte.",
    "Einen Apfelsaft, bitte."
   ],
   "target": "Ein Wasser, bitte."
  },
  {
   "question": "Möchten Sie eine Vorspeise?",
   "choices": [
    "Ja, eine Suppe.",
    "Nein, danke."
   ],
   "target": "Ja, eine Suppe."
  },
  {
   "question": "Hat es Ihnen geschmeckt?",
   "choices": [
    "Ja, sehr gut.",
    "Ja, vielen Dank."
   ],
   "target": "Ja, sehr gut."
  }
 ],
 "k5-requests": [
  {
   "question": "Brauchen Sie noch etwas?",
   "translation": "بغيتي شي حاجة أخرى؟",
   "choices": [
    "Ja, kann ich bitte Salz haben?"
   ],
   "target": "Ja, kann ich bitte Salz haben?"
  },
  {
   "question": "Möchten Sie noch Brot?",
   "choices": [
    "Ja, bitte.",
    "Nein, danke."
   ],
   "target": "Ja, bitte."
  },
  {
   "question": "Brauchen Sie ein Glas?",
   "choices": [
    "Ja, ein Glas Wasser.",
    "Nein, ich habe eins."
   ],
   "target": "Ja, ein Glas Wasser."
  },
  {
   "question": "Kann ich noch etwas bringen?",
   "choices": [
    "Die Rechnung, bitte.",
    "Nein, vielen Dank."
   ],
   "target": "Die Rechnung, bitte."
  }
 ],
 "k5-specialties": [
  {
   "question": "Welche Spezialität gibt es in Marokko?",
   "translation": "شنو هي أكلة مشهورة فالمغرب؟",
   "choices": [
    "Couscous ist eine Spezialität."
   ],
   "target": "Couscous ist eine Spezialität."
  },
  {
   "question": "Hast du schon Pizza probiert?",
   "choices": [
    "Ja, ich mag Pizza.",
    "Nein, noch nicht."
   ],
   "target": "Ja, ich mag Pizza."
  },
  {
   "question": "Was isst man in deiner Stadt gern?",
   "choices": [
    "In Casablanca isst man gern Fisch.",
    "Viele essen Tajine."
   ],
   "target": "In Casablanca isst man gern Fisch."
  },
  {
   "question": "Welche Spezialität möchtest du kochen?",
   "choices": [
    "Ich möchte Couscous kochen.",
    "Ich möchte Tajine kochen."
   ],
   "target": "Ich möchte Couscous kochen."
  }
 ],
 "k5-preferences": [
  {
   "question": "Magst du scharfes Essen?",
   "translation": "كتحب الماكلة الحارة؟",
   "choices": [
    "Nein, ich mag es nicht so scharf."
   ],
   "target": "Nein, ich mag es nicht so scharf."
  },
  {
   "question": "Magst du Gemüse?",
   "choices": [
    "Ja, besonders Karotten.",
    "Nein, nicht so gern."
   ],
   "target": "Ja, besonders Karotten."
  },
  {
   "question": "Was trinkst du lieber: Tee oder Kaffee?",
   "choices": [
    "Lieber Tee.",
    "Lieber Kaffee."
   ],
   "target": "Lieber Tee."
  },
  {
   "question": "Was möchtest du heute essen?",
   "choices": [
    "Ich möchte Kartoffelsuppe.",
    "Ich möchte ein Sandwich."
   ],
   "target": "Ich möchte Kartoffelsuppe."
  }
 ],
 "k6-yesterday": [
  {
   "question": "Was hast du gestern gemacht?",
   "translation": "شنو درتي البارح؟",
   "choices": [
    "Ich habe Deutsch gelernt."
   ],
   "target": "Ich habe Deutsch gelernt."
  },
  {
   "question": "Wo warst du gestern?",
   "choices": [
    "Ich war zu Hause.",
    "Ich war im Büro."
   ],
   "target": "Ich war zu Hause."
  },
  {
   "question": "Hast du einen Film gesehen?",
   "choices": [
    "Ja, am Abend.",
    "Nein, ich habe gelesen."
   ],
   "target": "Ja, am Abend."
  },
  {
   "question": "Wann bist du schlafen gegangen?",
   "choices": [
    "Um elf Uhr.",
    "Um zehn Uhr."
   ],
   "target": "Um elf Uhr."
  }
 ],
 "k6-pastday": [
  {
   "question": "Wann bist du gestern aufgestanden?",
   "translation": "فاش فقت البارح؟",
   "choices": [
    "Ich bin um acht Uhr aufgestanden."
   ],
   "target": "Ich bin um acht Uhr aufgestanden."
  },
  {
   "question": "Was hast du gefrühstückt?",
   "choices": [
    "Ich habe Brot gegessen.",
    "Ich habe Kaffee getrunken."
   ],
   "target": "Ich habe Brot gegessen."
  },
  {
   "question": "Bist du zur Arbeit gegangen?",
   "choices": [
    "Ja, um neun Uhr.",
    "Nein, ich war zu Hause."
   ],
   "target": "Ja, um neun Uhr."
  },
  {
   "question": "Was hast du am Abend gemacht?",
   "choices": [
    "Ich habe gelernt.",
    "Ich habe gekocht."
   ],
   "target": "Ich habe gelernt."
  }
 ],
 "k6-office-talk": [
  {
   "question": "Wie war dein Wochenende?",
   "translation": "كيف داز الويكاند؟",
   "choices": [
    "Es war gut. Ich habe einen Film gesehen."
   ],
   "target": "Es war gut. Ich habe einen Film gesehen."
  },
  {
   "question": "Hast du am Wochenende gearbeitet?",
   "choices": [
    "Ja, ein bisschen.",
    "Nein, ich hatte frei."
   ],
   "target": "Ja, ein bisschen."
  },
  {
   "question": "Was hast du sonst gemacht?",
   "choices": [
    "Ich habe Sport gemacht.",
    "Ich habe Freunde getroffen."
   ],
   "target": "Ich habe Sport gemacht."
  },
  {
   "question": "War das Wochenende schön?",
   "choices": [
    "Ja, sehr schön.",
    "Es war ruhig."
   ],
   "target": "Ja, sehr schön."
  }
 ],
 "k6-university": [
  {
   "question": "Wo studierst du?",
   "translation": "فين كتقرا؟",
   "choices": [
    "Ich studiere an der Universität."
   ],
   "target": "Ich studiere an der Universität."
  },
  {
   "question": "Welche Fächer studierst du?",
   "choices": [
    "Ich studiere Informatik.",
    "Ich studiere Deutsch."
   ],
   "target": "Ich studiere Informatik."
  },
  {
   "question": "Wie oft gehst du zur Universität?",
   "choices": [
    "Jeden Tag.",
    "Dreimal pro Woche."
   ],
   "target": "Jeden Tag."
  },
  {
   "question": "Macht dir das Studium Spaß?",
   "choices": [
    "Ja, sehr.",
    "Manchmal ist es schwer."
   ],
   "target": "Ja, sehr."
  }
 ],
 "k6-education": [
  {
   "question": "Was hast du gelernt oder studiert?",
   "translation": "شنو قريتي أو تعلمتي؟",
   "choices": [
    "Ich habe Mediengestaltung gelernt."
   ],
   "target": "Ich habe Mediengestaltung gelernt."
  },
  {
   "question": "Wo hast du gelernt?",
   "choices": [
    "In Casablanca.",
    "An einer Hochschule."
   ],
   "target": "In Casablanca."
  },
  {
   "question": "Was war dein Lieblingsfach?",
   "choices": [
    "Deutsch.",
    "Mathematik."
   ],
   "target": "Deutsch."
  },
  {
   "question": "Was möchtest du weiterlernen?",
   "choices": [
    "Ich möchte Deutsch lernen.",
    "Ich möchte Design lernen."
   ],
   "target": "Ich möchte Deutsch lernen."
  }
 ],
 "k6-experience": [
  {
   "question": "Hast du früher auch Deutsch gelernt?",
   "translation": "واش كنتي كتقرا الألمانية من قبل؟",
   "choices": [
    "Nein, ich lerne erst seit Kurzem."
   ],
   "target": "Nein, ich lerne erst seit Kurzem."
  },
  {
   "question": "Was hast du früher gemacht?",
   "choices": [
    "Ich habe viel gearbeitet.",
    "Ich habe Fußball gespielt."
   ],
   "target": "Ich habe viel gearbeitet."
  },
  {
   "question": "Was machst du heute anders?",
   "choices": [
    "Ich lerne jeden Tag.",
    "Ich habe mehr Freizeit."
   ],
   "target": "Ich lerne jeden Tag."
  },
  {
   "question": "Was möchtest du nächstes Jahr machen?",
   "choices": [
    "Ich möchte nach Deutschland ziehen.",
    "Ich möchte besser Deutsch sprechen."
   ],
   "target": "Ich möchte nach Deutschland ziehen."
  }
 ],
 "k6-studylife": [
  {
   "question": "Was gefällt dir an deinem Studium?",
   "translation": "شنو عاجبك فالدراسة؟",
   "choices": [
    "Ich lerne gern neue Dinge."
   ],
   "target": "Ich lerne gern neue Dinge."
  },
  {
   "question": "Wie lange lernst du schon?",
   "choices": [
    "Seit einem Jahr.",
    "Seit sechs Monaten."
   ],
   "target": "Seit einem Jahr."
  },
  {
   "question": "Lernst du gern mit anderen?",
   "choices": [
    "Ja, mit Freunden.",
    "Nein, lieber allein."
   ],
   "target": "Ja, mit Freunden."
  },
  {
   "question": "Was machst du nach dem Studium?",
   "choices": [
    "Ich möchte arbeiten.",
    "Ich möchte reisen."
   ],
   "target": "Ich möchte arbeiten."
  }
 ],
 "k7-transport": [
  {
   "question": "Fährst du mit dem Bus oder mit dem Zug?",
   "translation": "كتسافر بالطوبيس ولا التران؟",
   "choices": [
    "Ich fahre mit dem Zug."
   ],
   "target": "Ich fahre mit dem Zug."
  },
  {
   "question": "Was kostet die Fahrkarte?",
   "choices": [
    "Zehn Euro.",
    "Das weiß ich nicht."
   ],
   "target": "Zehn Euro."
  },
  {
   "question": "Wann fährt dein Zug ab?",
   "choices": [
    "Um neun Uhr.",
    "Um halb zehn."
   ],
   "target": "Um neun Uhr."
  },
  {
   "question": "Ist die Fahrt lang?",
   "choices": [
    "Ja, zwei Stunden.",
    "Nein, nur zwanzig Minuten."
   ],
   "target": "Ja, zwei Stunden."
  }
 ],
 "k7-traffic": [
  {
   "question": "Wie ist der Verkehr heute?",
   "translation": "كيف داير الترافيك اليوم؟",
   "choices": [
    "Heute gibt es viel Stau."
   ],
   "target": "Heute gibt es viel Stau."
  },
  {
   "question": "Fährst du lieber mit dem Fahrrad?",
   "choices": [
    "Ja, wenn das Wetter gut ist.",
    "Nein, lieber mit dem Bus."
   ],
   "target": "Ja, wenn das Wetter gut ist."
  },
  {
   "question": "Wie lange brauchst du zur Arbeit?",
   "choices": [
    "Dreißig Minuten.",
    "Eine Stunde."
   ],
   "target": "Dreißig Minuten."
  },
  {
   "question": "Gibt es heute viel Verkehr?",
   "choices": [
    "Ja, leider.",
    "Nein, heute ist es ruhig."
   ],
   "target": "Ja, leider."
  }
 ],
 "k7-tickets": [
  {
   "question": "Wohin möchten Sie fahren?",
   "translation": "فين بغيتي تمشي؟",
   "choices": [
    "Ich möchte nach Berlin fahren."
   ],
   "target": "Ich möchte nach Berlin fahren."
  },
  {
   "question": "Einfach oder hin und zurück?",
   "choices": [
    "Hin und zurück, bitte.",
    "Nur eine einfache Fahrt."
   ],
   "target": "Hin und zurück, bitte."
  },
  {
   "question": "Wann möchten Sie fahren?",
   "choices": [
    "Morgen früh.",
    "Heute Abend."
   ],
   "target": "Morgen früh."
  },
  {
   "question": "Möchten Sie am Fenster sitzen?",
   "choices": [
    "Ja, bitte.",
    "Das ist mir egal."
   ],
   "target": "Ja, bitte."
  }
 ],
 "k7-weather": [
  {
   "question": "Wie ist das Wetter heute?",
   "translation": "كيف داير الجو اليوم؟",
   "choices": [
    "Es ist sonnig, aber kalt."
   ],
   "target": "Es ist sonnig, aber kalt."
  },
  {
   "question": "Regnet es bei dir oft?",
   "choices": [
    "Ja, im Winter.",
    "Nein, nicht sehr oft."
   ],
   "target": "Ja, im Winter."
  },
  {
   "question": "Ist es im Sommer sehr heiß?",
   "choices": [
    "Ja, manchmal.",
    "Nein, meistens angenehm."
   ],
   "target": "Ja, manchmal."
  },
  {
   "question": "Was machst du bei Regen?",
   "choices": [
    "Ich bleibe zu Hause.",
    "Ich nehme einen Regenschirm."
   ],
   "target": "Ich bleibe zu Hause."
  }
 ],
 "k7-seasons": [
  {
   "question": "Welche Jahreszeit magst du?",
   "translation": "شنو الفصل اللي كيعجبك؟",
   "choices": [
    "Ich mag den Frühling."
   ],
   "target": "Ich mag den Frühling."
  },
  {
   "question": "Was machst du im Frühling gern?",
   "choices": [
    "Ich gehe spazieren.",
    "Ich fahre Fahrrad."
   ],
   "target": "Ich gehe spazieren."
  },
  {
   "question": "Magst du den Winter?",
   "choices": [
    "Ja, ich mag Schnee.",
    "Nein, er ist zu kalt."
   ],
   "target": "Ja, ich mag Schnee."
  },
  {
   "question": "Welcher Monat gefällt dir am besten?",
   "choices": [
    "Der Mai.",
    "Der September."
   ],
   "target": "Der Mai."
  }
 ],
 "k7-holiday": [
  {
   "question": "Wohin fährst du im Urlaub?",
   "translation": "فين غادي تمشي فالعطلة؟",
   "choices": [
    "Ich fahre nach Deutschland."
   ],
   "target": "Ich fahre nach Deutschland."
  },
  {
   "question": "Reist du allein?",
   "choices": [
    "Ja, allein.",
    "Nein, mit Freunden."
   ],
   "target": "Ja, allein."
  },
  {
   "question": "Wie lange bleibst du dort?",
   "choices": [
    "Eine Woche.",
    "Zwei Wochen."
   ],
   "target": "Eine Woche."
  },
  {
   "question": "Was nimmst du mit?",
   "choices": [
    "Meinen Koffer und eine Jacke.",
    "Einen Rucksack."
   ],
   "target": "Meinen Koffer und eine Jacke."
  }
 ],
 "k7-destinations": [
  {
   "question": "Welches Land möchtest du besuchen?",
   "translation": "شنو البلد اللي بغيتي تزور؟",
   "choices": [
    "Ich möchte Österreich besuchen."
   ],
   "target": "Ich möchte Österreich besuchen."
  },
  {
   "question": "Möchtest du ans Meer oder in die Berge?",
   "choices": [
    "Ans Meer.",
    "In die Berge."
   ],
   "target": "Ans Meer."
  },
  {
   "question": "Wie reist du dorthin?",
   "choices": [
    "Mit dem Flugzeug.",
    "Mit dem Zug."
   ],
   "target": "Mit dem Flugzeug."
  },
  {
   "question": "Was möchtest du dort machen?",
   "choices": [
    "Ich möchte wandern.",
    "Ich möchte die Stadt sehen."
   ],
   "target": "Ich möchte wandern."
  }
 ],
 "k7-postcard": [
  {
   "question": "Wie ist dein Urlaub? Schreib mir einen Satz!",
   "translation": "كيف دازت العطلة؟",
   "choices": [
    "Liebe Grüße aus Berlin!"
   ],
   "target": "Liebe Grüße aus Berlin!"
  },
  {
   "question": "Wie ist das Wetter im Urlaub?",
   "choices": [
    "Es ist sonnig.",
    "Es regnet."
   ],
   "target": "Es ist sonnig."
  },
  {
   "question": "Was hast du heute besucht?",
   "choices": [
    "Ein Museum.",
    "Den Strand."
   ],
   "target": "Ein Museum."
  },
  {
   "question": "Wann kommst du zurück?",
   "choices": [
    "Am Sonntag.",
    "Nächste Woche."
   ],
   "target": "Am Sonntag."
  }
 ],
 "k8-packing": [
  {
   "question": "Was nimmst du in den Urlaub mit?",
   "translation": "شنو غادي تهز معاك فالسفر؟",
   "choices": [
    "Ich nehme meinen Koffer und eine Jacke."
   ],
   "target": "Ich nehme meinen Koffer und eine Jacke."
  },
  {
   "question": "Brauchst du auch einen Reisepass?",
   "choices": [
    "Ja, natürlich.",
    "Nein, nicht für diese Reise."
   ],
   "target": "Ja, natürlich."
  },
  {
   "question": "Nimmst du warme Kleidung mit?",
   "choices": [
    "Ja, eine Jacke.",
    "Nein, es ist warm."
   ],
   "target": "Ja, eine Jacke."
  },
  {
   "question": "Passt alles in deinen Koffer?",
   "choices": [
    "Ja, alles passt.",
    "Nein, ich brauche eine größere Tasche."
   ],
   "target": "Ja, alles passt."
  }
 ],
 "k8-clothes": [
  {
   "question": "Was für Kleidung suchen Sie?",
   "translation": "شنو اللباس اللي كتقلب عليه؟",
   "choices": [
    "Ich suche eine schwarze Jacke."
   ],
   "target": "Ich suche eine schwarze Jacke."
  },
  {
   "question": "Welche Farbe soll die Jacke haben?",
   "choices": [
    "Schwarz, bitte.",
    "Blau, bitte."
   ],
   "target": "Schwarz, bitte."
  },
  {
   "question": "Welche Größe trägst du?",
   "choices": [
    "Größe M.",
    "Größe L."
   ],
   "target": "Größe M."
  },
  {
   "question": "Möchtest du sie anprobieren?",
   "choices": [
    "Ja, gern.",
    "Nein, danke."
   ],
   "target": "Ja, gern."
  }
 ],
 "k8-colors": [
  {
   "question": "Welche Farbe und Größe möchten Sie?",
   "translation": "شنو اللون والقياس؟",
   "choices": [
    "Ich möchte Blau in Größe M."
   ],
   "target": "Ich möchte Blau in Größe M."
  },
  {
   "question": "Passt Ihnen Größe M?",
   "choices": [
    "Ja, perfekt.",
    "Nein, ich brauche L."
   ],
   "target": "Ja, perfekt."
  },
  {
   "question": "Gefällt Ihnen dieses Hemd?",
   "choices": [
    "Ja, sehr.",
    "Nein, ich möchte ein anderes."
   ],
   "target": "Ja, sehr."
  },
  {
   "question": "Möchten Sie es kaufen?",
   "choices": [
    "Ja, bitte.",
    "Nein, danke."
   ],
   "target": "Ja, bitte."
  }
 ],
 "k8-shopping": [
  {
   "question": "Kann ich Ihnen helfen?",
   "translation": "نعاونك فشي حاجة؟",
   "choices": [
    "Ja, ich möchte diese Hose anprobieren."
   ],
   "target": "Ja, ich möchte diese Hose anprobieren."
  },
  {
   "question": "Welche Größe haben Sie?",
   "choices": [
    "Größe M.",
    "Größe L."
   ],
   "target": "Größe M."
  },
  {
   "question": "Was ist Ihnen wichtig: Preis oder Farbe?",
   "choices": [
    "Der Preis.",
    "Die Farbe."
   ],
   "target": "Der Preis."
  },
  {
   "question": "Nehmen Sie diese Hose?",
   "choices": [
    "Ja, ich nehme sie.",
    "Nein, sie ist zu teuer."
   ],
   "target": "Ja, ich nehme sie."
  }
 ],
 "k8-try-on": [
  {
   "question": "Wie finden Sie diesen Anzug?",
   "translation": "كيفاش بان ليك هاد الكوستيم؟",
   "choices": [
    "Der Anzug ist schön, aber teuer."
   ],
   "target": "Der Anzug ist schön, aber teuer."
  },
  {
   "question": "Ist der Anzug bequem?",
   "choices": [
    "Ja, sehr bequem.",
    "Nein, er ist zu eng."
   ],
   "target": "Ja, sehr bequem."
  },
  {
   "question": "Möchten Sie eine andere Größe?",
   "choices": [
    "Ja, eine Nummer größer.",
    "Nein, danke."
   ],
   "target": "Ja, eine Nummer größer."
  },
  {
   "question": "Nehmen Sie den Anzug?",
   "choices": [
    "Ja, ich nehme ihn.",
    "Nein, lieber nicht."
   ],
   "target": "Ja, ich nehme ihn."
  }
 ],
 "k8-online": [
  {
   "question": "Kaufst du lieber online oder im Geschäft?",
   "translation": "كتفضل الشرا فالإنترنت ولا الحانوت؟",
   "choices": [
    "Ich kaufe lieber online."
   ],
   "target": "Ich kaufe lieber online."
  },
  {
   "question": "Was kaufst du online?",
   "choices": [
    "Ich kaufe Bücher.",
    "Ich kaufe Kleidung."
   ],
   "target": "Ich kaufe Bücher."
  },
  {
   "question": "Ist die Lieferung schnell?",
   "choices": [
    "Ja, meistens.",
    "Nein, manchmal dauert sie lange."
   ],
   "target": "Ja, meistens."
  },
  {
   "question": "Ist dir der Preis wichtig?",
   "choices": [
    "Ja, sehr.",
    "Die Qualität ist wichtiger."
   ],
   "target": "Ja, sehr."
  }
 ],
 "k8-comparison": [
  {
   "question": "Welche Tasche ist besser?",
   "translation": "شنو الساك اللي حسن؟",
   "choices": [
    "Die blaue Tasche ist günstiger."
   ],
   "target": "Die blaue Tasche ist günstiger."
  },
  {
   "question": "Warum ist die blaue Tasche besser?",
   "choices": [
    "Sie ist günstiger.",
    "Sie ist größer."
   ],
   "target": "Sie ist günstiger."
  },
  {
   "question": "Welche Tasche kaufst du?",
   "choices": [
    "Ich kaufe die blaue.",
    "Ich kaufe die schwarze."
   ],
   "target": "Ich kaufe die blaue."
  },
  {
   "question": "Brauchst du noch etwas?",
   "choices": [
    "Nein, danke.",
    "Ja, eine Jacke."
   ],
   "target": "Nein, danke."
  }
 ],
 "k8-reason": [
  {
   "question": "Warum kaufst du diese Schuhe?",
   "translation": "علاش شريتي هاد الصباط؟",
   "choices": [
    "Weil sie bequem sind."
   ],
   "target": "Weil sie bequem sind."
  },
  {
   "question": "Sind die Schuhe bequem?",
   "choices": [
    "Ja, sehr bequem.",
    "Nein, ein bisschen eng."
   ],
   "target": "Ja, sehr bequem."
  },
  {
   "question": "Was kosten sie?",
   "choices": [
    "Sie kosten fünfzig Euro.",
    "Sie kosten achtzig Euro."
   ],
   "target": "Sie kosten fünfzig Euro."
  },
  {
   "question": "Kaufst du sie?",
   "choices": [
    "Ja, ich kaufe sie.",
    "Nein, sie sind zu teuer."
   ],
   "target": "Ja, ich kaufe sie."
  }
 ],
 "k9-office-tasks": [
  {
   "question": "Was musst du heute im Büro machen?",
   "translation": "شنو خاصك تدير اليوم فالمكتب؟",
   "choices": [
    "Ich muss E-Mails schreiben."
   ],
   "target": "Ich muss E-Mails schreiben."
  },
  {
   "question": "Hast du heute ein Meeting?",
   "choices": [
    "Ja, um zehn Uhr.",
    "Nein, erst morgen."
   ],
   "target": "Ja, um zehn Uhr."
  },
  {
   "question": "Musst du E-Mails beantworten?",
   "choices": [
    "Ja, viele E-Mails.",
    "Nein, heute nicht."
   ],
   "target": "Ja, viele E-Mails."
  },
  {
   "question": "Wann hast du Feierabend?",
   "choices": [
    "Um achtzehn Uhr.",
    "Um siebzehn Uhr."
   ],
   "target": "Um achtzehn Uhr."
  }
 ],
 "k9-work-problems": [
  {
   "question": "Was ist das Problem mit deinem Computer?",
   "translation": "شنو المشكل فالحاسوب؟",
   "choices": [
    "Der Computer funktioniert nicht."
   ],
   "target": "Der Computer funktioniert nicht."
  },
  {
   "question": "Hast du den Computer neu gestartet?",
   "choices": [
    "Ja, aber es geht nicht.",
    "Nein, noch nicht."
   ],
   "target": "Ja, aber es geht nicht."
  },
  {
   "question": "Brauchst du Hilfe?",
   "choices": [
    "Ja, bitte.",
    "Nein, ich versuche es selbst."
   ],
   "target": "Ja, bitte."
  },
  {
   "question": "Kannst du jetzt wieder arbeiten?",
   "choices": [
    "Ja, alles funktioniert.",
    "Nein, leider nicht."
   ],
   "target": "Ja, alles funktioniert."
  }
 ],
 "k9-support": [
  {
   "question": "Guten Tag! Wie kann ich Ihnen helfen?",
   "translation": "كيفاش نقدر نعاونك؟",
   "choices": [
    "Mein Internet funktioniert nicht."
   ],
   "target": "Mein Internet funktioniert nicht."
  },
  {
   "question": "Seit wann gibt es das Problem?",
   "choices": [
    "Seit heute Morgen.",
    "Seit gestern."
   ],
   "target": "Seit heute Morgen."
  },
  {
   "question": "Haben Sie den Router neu gestartet?",
   "choices": [
    "Ja, aber es hilft nicht.",
    "Nein, noch nicht."
   ],
   "target": "Ja, aber es hilft nicht."
  },
  {
   "question": "Sollen wir einen Techniker schicken?",
   "choices": [
    "Ja, bitte.",
    "Nein, ich probiere es zuerst."
   ],
   "target": "Ja, bitte."
  }
 ],
 "k9-appointments": [
  {
   "question": "Wann haben Sie Zeit für einen Termin?",
   "translation": "فاش عندك الوقت لموعد؟",
   "choices": [
    "Am Dienstag um zehn Uhr."
   ],
   "target": "Am Dienstag um zehn Uhr."
  },
  {
   "question": "Passt Ihnen Donnerstag um zehn Uhr?",
   "choices": [
    "Ja, das passt.",
    "Nein, Freitag wäre besser."
   ],
   "target": "Ja, das passt."
  },
  {
   "question": "Möchten Sie den Termin am Morgen?",
   "choices": [
    "Ja, am Morgen.",
    "Nein, am Nachmittag."
   ],
   "target": "Ja, am Morgen."
  },
  {
   "question": "Soll ich den Termin bestätigen?",
   "choices": [
    "Ja, vielen Dank.",
    "Ja, bitte per E-Mail."
   ],
   "target": "Ja, vielen Dank."
  }
 ],
 "k9-date": [
  {
   "question": "Welches Datum haben wir heute?",
   "translation": "شنو التاريخ اليوم؟",
   "choices": [
    "Heute ist der zwölfte Mai."
   ],
   "target": "Heute ist der zwölfte Mai."
  },
  {
   "question": "Wann ist dein nächster Termin?",
   "choices": [
    "Am Freitag.",
    "Am Montag."
   ],
   "target": "Am Freitag."
  },
  {
   "question": "Um wie viel Uhr beginnt er?",
   "choices": [
    "Um zehn Uhr.",
    "Um halb drei."
   ],
   "target": "Um zehn Uhr."
  },
  {
   "question": "Hast du den Termin im Kalender?",
   "choices": [
    "Ja, natürlich.",
    "Noch nicht."
   ],
   "target": "Ja, natürlich."
  }
 ],
 "k9-postpone": [
  {
   "question": "Können wir den Termin auf Mittwoch verschieben?",
   "translation": "نقدرو نبدلو الموعد للأربعاء؟",
   "choices": [
    "Ja, Mittwoch passt mir gut."
   ],
   "target": "Ja, Mittwoch passt mir gut."
  },
  {
   "question": "Warum möchten Sie den Termin verschieben?",
   "choices": [
    "Ich bin krank.",
    "Ich habe einen anderen Termin."
   ],
   "target": "Ich bin krank."
  },
  {
   "question": "Passt Ihnen Donnerstag?",
   "choices": [
    "Ja, Donnerstag passt.",
    "Nein, lieber Freitag."
   ],
   "target": "Ja, Donnerstag passt."
  },
  {
   "question": "Soll ich Ihnen eine Bestätigung schicken?",
   "choices": [
    "Ja, bitte.",
    "Das ist nicht nötig."
   ],
   "target": "Ja, bitte."
  }
 ],
 "k9-cancel": [
  {
   "question": "Können Sie heute zum Termin kommen?",
   "translation": "تقدر تجي للموعد اليوم؟",
   "choices": [
    "Leider nicht. Ich muss den Termin absagen."
   ],
   "target": "Leider nicht. Ich muss den Termin absagen."
  },
  {
   "question": "Möchten Sie einen neuen Termin?",
   "choices": [
    "Ja, nächste Woche.",
    "Nein, vielen Dank."
   ],
   "target": "Ja, nächste Woche."
  },
  {
   "question": "Passt Ihnen Dienstag?",
   "choices": [
    "Ja, Dienstag passt.",
    "Leider nicht."
   ],
   "target": "Ja, Dienstag passt."
  },
  {
   "question": "Soll ich Ihnen eine E-Mail schicken?",
   "choices": [
    "Ja, bitte.",
    "Nein, danke."
   ],
   "target": "Ja, bitte."
  }
 ],
 "k9-late": [
  {
   "question": "Warum bist du heute zu spät?",
   "translation": "علاش تأخرت اليوم؟",
   "choices": [
    "Entschuldigung, der Bus hatte Verspätung."
   ],
   "target": "Entschuldigung, der Bus hatte Verspätung."
  },
  {
   "question": "Haben Sie den Bus verpasst?",
   "choices": [
    "Ja, leider.",
    "Nein, es gab Stau."
   ],
   "target": "Ja, leider."
  },
  {
   "question": "Wann sind Sie da?",
   "choices": [
    "In zehn Minuten.",
    "In einer halben Stunde."
   ],
   "target": "In zehn Minuten."
  },
  {
   "question": "Können Sie kurz anrufen?",
   "choices": [
    "Ja, natürlich.",
    "Ja, sofort."
   ],
   "target": "Ja, natürlich."
  }
 ],
 "k9-emails": [
  {
   "question": "Kannst du eine kurze E-Mail an den Kunden schreiben?",
   "translation": "تقدر تكتب إيميل للزبون؟",
   "choices": [
    "Guten Tag, der Termin ist am Freitag."
   ],
   "target": "Guten Tag, der Termin ist am Freitag."
  },
  {
   "question": "Ist die E-Mail dringend?",
   "choices": [
    "Ja, bitte heute.",
    "Nein, bis morgen reicht."
   ],
   "target": "Ja, bitte heute."
  },
  {
   "question": "Brauchen Sie noch Informationen?",
   "choices": [
    "Ja, die Adresse.",
    "Nein, alles ist klar."
   ],
   "target": "Ja, die Adresse."
  },
  {
   "question": "Soll ich die E-Mail jetzt schicken?",
   "choices": [
    "Ja, vielen Dank.",
    "Ja, bitte."
   ],
   "target": "Ja, vielen Dank."
  }
 ],
 "k10-free-time": [
  {
   "question": "Was machst du am Wochenende gern?",
   "translation": "شنو كتدير فالويكاند؟",
   "choices": [
    "Ich gehe spazieren."
   ],
   "target": "Ich gehe spazieren."
  },
  {
   "question": "Gehst du manchmal ins Kino?",
   "choices": [
    "Ja, oft.",
    "Nein, lieber ins Theater."
   ],
   "target": "Ja, oft."
  },
  {
   "question": "Mit wem machst du das?",
   "choices": [
    "Mit Freunden.",
    "Allein."
   ],
   "target": "Mit Freunden."
  },
  {
   "question": "Was möchtest du am nächsten Wochenende machen?",
   "choices": [
    "Ich möchte wandern.",
    "Ich möchte Musik hören."
   ],
   "target": "Ich möchte wandern."
  }
 ],
 "k10-sport": [
  {
   "question": "Treibst du gern Sport?",
   "translation": "كتدير الرياضة؟",
   "choices": [
    "Ja, ich spiele Fußball."
   ],
   "target": "Ja, ich spiele Fußball."
  },
  {
   "question": "Welche Sportart magst du?",
   "choices": [
    "Ich mag Fußball.",
    "Ich gehe gern schwimmen."
   ],
   "target": "Ich mag Fußball."
  },
  {
   "question": "Wie oft trainierst du?",
   "choices": [
    "Zweimal pro Woche.",
    "Jeden Tag."
   ],
   "target": "Zweimal pro Woche."
  },
  {
   "question": "Machst du auch Sport draußen?",
   "choices": [
    "Ja, oft.",
    "Nein, lieber drinnen."
   ],
   "target": "Ja, oft."
  }
 ],
 "k10-party": [
  {
   "question": "Hallo! Kennst du hier jemanden?",
   "translation": "كتعرف شي حد هنا؟",
   "choices": [
    "Ja, ich kenne Anna."
   ],
   "target": "Ja, ich kenne Anna."
  },
  {
   "question": "Was trinkst du gern?",
   "choices": [
    "Ein Wasser, bitte.",
    "Einen Saft, bitte."
   ],
   "target": "Ein Wasser, bitte."
  },
  {
   "question": "Woher kommst du?",
   "choices": [
    "Aus Marokko.",
    "Aus Casablanca."
   ],
   "target": "Aus Marokko."
  },
  {
   "question": "Gefällt dir die Musik?",
   "choices": [
    "Ja, die Musik ist toll.",
    "Sie ist ein bisschen laut."
   ],
   "target": "Ja, die Musik ist toll."
  }
 ],
 "k10-body": [
  {
   "question": "Wo tut es dir weh?",
   "translation": "فين كيوجعك؟",
   "choices": [
    "Mein Kopf tut weh."
   ],
   "target": "Mein Kopf tut weh."
  },
  {
   "question": "Seit wann tut dein Kopf weh?",
   "choices": [
    "Seit heute Morgen.",
    "Seit gestern."
   ],
   "target": "Seit heute Morgen."
  },
  {
   "question": "Hast du auch Fieber?",
   "choices": [
    "Ja, ein bisschen.",
    "Nein, kein Fieber."
   ],
   "target": "Ja, ein bisschen."
  },
  {
   "question": "Möchtest du einen Arzttermin?",
   "choices": [
    "Ja, bitte.",
    "Nein, ich ruhe mich aus."
   ],
   "target": "Ja, bitte."
  }
 ],
 "k10-doctor-call": [
  {
   "question": "Guten Tag! Wann möchten Sie zum Arzt kommen?",
   "translation": "فاش بغيتي تمشي للطبيب؟",
   "choices": [
    "Morgen Vormittag, bitte."
   ],
   "target": "Morgen Vormittag, bitte."
  },
  {
   "question": "Haben Sie heute Nachmittag Zeit?",
   "choices": [
    "Ja, um vier Uhr.",
    "Nein, erst morgen."
   ],
   "target": "Ja, um vier Uhr."
  },
  {
   "question": "Ist der Termin dringend?",
   "choices": [
    "Ja, bitte.",
    "Nein, es reicht morgen."
   ],
   "target": "Ja, bitte."
  },
  {
   "question": "Wie heißen Sie?",
   "choices": [
    "Ich heiße Toufik.",
    "Mein Name ist Toufik."
   ],
   "target": "Ich heiße Toufik."
  }
 ],
 "k10-doctor": [
  {
   "question": "Guten Tag! Was fehlt Ihnen?",
   "translation": "شنو عندك؟",
   "choices": [
    "Ich habe Husten und Fieber."
   ],
   "target": "Ich habe Husten und Fieber."
  },
  {
   "question": "Seit wann haben Sie Husten?",
   "choices": [
    "Seit drei Tagen.",
    "Seit gestern."
   ],
   "target": "Seit drei Tagen."
  },
  {
   "question": "Haben Sie Fieber?",
   "choices": [
    "Ja, etwas.",
    "Nein, ich habe kein Fieber."
   ],
   "target": "Ja, etwas."
  },
  {
   "question": "Können Sie heute zu Hause bleiben?",
   "choices": [
    "Ja, ich kann mich ausruhen.",
    "Ja, das ist möglich."
   ],
   "target": "Ja, ich kann mich ausruhen."
  }
 ],
 "k10-health": [
  {
   "question": "Was machst du für deine Gesundheit?",
   "translation": "شنو كتدير لصحتك؟",
   "choices": [
    "Ich trinke viel Wasser und schlafe genug."
   ],
   "target": "Ich trinke viel Wasser und schlafe genug."
  },
  {
   "question": "Wie viele Stunden schläfst du?",
   "choices": [
    "Sieben Stunden.",
    "Acht Stunden."
   ],
   "target": "Sieben Stunden."
  },
  {
   "question": "Isst du jeden Tag Gemüse?",
   "choices": [
    "Ja, meistens.",
    "Nein, nicht immer."
   ],
   "target": "Ja, meistens."
  },
  {
   "question": "Machst du regelmäßig Sport?",
   "choices": [
    "Ja, zweimal pro Woche.",
    "Nein, ich möchte anfangen."
   ],
   "target": "Ja, zweimal pro Woche."
  }
 ],
 "k10-advice": [
  {
   "question": "Du bist müde. Was solltest du machen?",
   "translation": "نتا عيان، شنو خاصك تدير؟",
   "choices": [
    "Ich soll mehr schlafen."
   ],
   "target": "Ich soll mehr schlafen."
  },
  {
   "question": "Warum bist du müde?",
   "choices": [
    "Ich habe wenig geschlafen.",
    "Ich habe viel gearbeitet."
   ],
   "target": "Ich habe wenig geschlafen."
  },
  {
   "question": "Kannst du heute früher schlafen?",
   "choices": [
    "Ja, das kann ich.",
    "Nein, leider nicht."
   ],
   "target": "Ja, das kann ich."
  },
  {
   "question": "Was machst du morgen anders?",
   "choices": [
    "Ich schlafe länger.",
    "Ich mache eine Pause."
   ],
   "target": "Ich schlafe länger."
  }
 ],
 "k11-housing": [
  {
   "question": "Wohnst du in einer Wohnung oder in einem Haus?",
   "translation": "ساكن فشقة ولا دار؟",
   "choices": [
    "Ich wohne in einer Wohnung."
   ],
   "target": "Ich wohne in einer Wohnung."
  },
  {
   "question": "Wie viele Zimmer hat die Wohnung?",
   "choices": [
    "Zwei Zimmer.",
    "Drei Zimmer."
   ],
   "target": "Zwei Zimmer."
  },
  {
   "question": "Hast du einen Balkon?",
   "choices": [
    "Ja, einen kleinen.",
    "Nein, leider nicht."
   ],
   "target": "Ja, einen kleinen."
  },
  {
   "question": "Gefällt dir die Wohnung?",
   "choices": [
    "Ja, sehr.",
    "Ja, aber sie ist klein."
   ],
   "target": "Ja, sehr."
  }
 ],
 "k11-rooms": [
  {
   "question": "Wie sieht dein Wohnzimmer aus?",
   "translation": "كيف داير الصالون؟",
   "choices": [
    "Im Wohnzimmer steht ein Sofa."
   ],
   "target": "Im Wohnzimmer steht ein Sofa."
  },
  {
   "question": "Wo steht dein Bett?",
   "choices": [
    "Im Schlafzimmer.",
    "Neben dem Fenster."
   ],
   "target": "Im Schlafzimmer."
  },
  {
   "question": "Hast du einen Schreibtisch?",
   "choices": [
    "Ja, im Arbeitszimmer.",
    "Nein, noch nicht."
   ],
   "target": "Ja, im Arbeitszimmer."
  },
  {
   "question": "Welche Möbel möchtest du kaufen?",
   "choices": [
    "Einen Tisch.",
    "Ein neues Sofa."
   ],
   "target": "Einen Tisch."
  }
 ],
 "k11-flat-search": [
  {
   "question": "Welche Wohnung suchen Sie?",
   "translation": "شنو الشقة اللي كتقلب عليها؟",
   "choices": [
    "Ich suche eine kleine Wohnung."
   ],
   "target": "Ich suche eine kleine Wohnung."
  },
  {
   "question": "Wie viel Miete möchten Sie bezahlen?",
   "choices": [
    "Bis fünfhundert Euro.",
    "Bis siebenhundert Euro."
   ],
   "target": "Bis fünfhundert Euro."
  },
  {
   "question": "Welche Lage wünschen Sie?",
   "choices": [
    "Im Stadtzentrum.",
    "In einer ruhigen Straße."
   ],
   "target": "Im Stadtzentrum."
  },
  {
   "question": "Möchten Sie die Wohnung besichtigen?",
   "choices": [
    "Ja, sehr gern.",
    "Ja, am Samstag."
   ],
   "target": "Ja, sehr gern."
  }
 ],
 "k11-ads": [
  {
   "question": "Die Wohnung hat zwei Zimmer. Haben Sie Fragen?",
   "translation": "الشقة فيها جوج غرف، عندك شي سؤال؟",
   "choices": [
    "Wie hoch ist die Miete?"
   ],
   "target": "Wie hoch ist die Miete?"
  },
  {
   "question": "Ist die Wohnung möbliert?",
   "choices": [
    "Ja, mit Möbeln.",
    "Nein, ohne Möbel."
   ],
   "target": "Ja, mit Möbeln."
  },
  {
   "question": "Ab wann ist sie frei?",
   "choices": [
    "Ab nächsten Monat.",
    "Ab sofort."
   ],
   "target": "Ab nächsten Monat."
  },
  {
   "question": "Können wir einen Besichtigungstermin machen?",
   "choices": [
    "Ja, am Freitag.",
    "Ja, am Samstag."
   ],
   "target": "Ja, am Freitag."
  }
 ],
 "k11-compare": [
  {
   "question": "Wohnst du lieber allein oder mit anderen?",
   "translation": "كتفضل تسكن بوحدك؟",
   "choices": [
    "Ich wohne lieber allein."
   ],
   "target": "Ich wohne lieber allein."
  },
  {
   "question": "Warum wohnst du lieber allein?",
   "choices": [
    "Ich mag die Ruhe.",
    "Ich brauche Platz."
   ],
   "target": "Ich mag die Ruhe."
  },
  {
   "question": "Ist eine Wohngemeinschaft günstig?",
   "choices": [
    "Ja, meistens.",
    "Das kommt darauf an."
   ],
   "target": "Ja, meistens."
  },
  {
   "question": "Wie möchtest du später wohnen?",
   "choices": [
    "In einer kleinen Wohnung.",
    "In einem Haus."
   ],
   "target": "In einer kleinen Wohnung."
  }
 ],
 "k11-directions": [
  {
   "question": "Entschuldigung, wie komme ich zum Bahnhof?",
   "translation": "كيفاش نوصل للمحطة؟",
   "choices": [
    "Gehen Sie geradeaus und dann links."
   ],
   "target": "Gehen Sie geradeaus und dann links."
  },
  {
   "question": "Gehe ich zuerst geradeaus?",
   "choices": [
    "Ja, geradeaus.",
    "Nein, zuerst nach links."
   ],
   "target": "Ja, geradeaus."
  },
  {
   "question": "Ist der Bahnhof weit?",
   "choices": [
    "Nein, nur fünf Minuten.",
    "Ja, ungefähr zwanzig Minuten."
   ],
   "target": "Nein, nur fünf Minuten."
  },
  {
   "question": "Muss ich an der Ampel abbiegen?",
   "choices": [
    "Ja, nach rechts.",
    "Nein, immer geradeaus."
   ],
   "target": "Ja, nach rechts."
  }
 ],
 "k11-rules": [
  {
   "question": "Darf man hier abends laut Musik hören?",
   "translation": "واش نقدر ندير الموسيقى فالليل؟",
   "choices": [
    "Nein, das darf man nicht."
   ],
   "target": "Nein, das darf man nicht."
  },
  {
   "question": "Darf man auf dem Balkon grillen?",
   "choices": [
    "Nein, das ist verboten.",
    "Ja, aber nur tagsüber."
   ],
   "target": "Nein, das ist verboten."
  },
  {
   "question": "Wann muss es ruhig sein?",
   "choices": [
    "Ab zehn Uhr abends.",
    "Nach neun Uhr."
   ],
   "target": "Ab zehn Uhr abends."
  },
  {
   "question": "Darf man ein Fahrrad im Flur lassen?",
   "choices": [
    "Nein, das darf man nicht.",
    "Nur an einem bestimmten Platz."
   ],
   "target": "Nein, das darf man nicht."
  }
 ],
 "k11-housework": [
  {
   "question": "Wer putzt heute die Küche?",
   "translation": "شكون غادي ينقي الكوزينة؟",
   "choices": [
    "Heute putze ich die Küche."
   ],
   "target": "Heute putze ich die Küche."
  },
  {
   "question": "Wer wäscht heute das Geschirr?",
   "choices": [
    "Ich mache das.",
    "Mein Mitbewohner."
   ],
   "target": "Ich mache das."
  },
  {
   "question": "Wann bringst du den Müll raus?",
   "choices": [
    "Heute Abend.",
    "Morgen früh."
   ],
   "target": "Heute Abend."
  },
  {
   "question": "Ist die Wohnung jetzt sauber?",
   "choices": [
    "Ja, alles sauber.",
    "Noch nicht ganz."
   ],
   "target": "Ja, alles sauber."
  }
 ],
 "k12-sights": [
  {
   "question": "Was möchtest du in Berlin besichtigen?",
   "translation": "شنو بغيتي تزور فبرلين؟",
   "choices": [
    "Ich möchte das Brandenburger Tor sehen."
   ],
   "target": "Ich möchte das Brandenburger Tor sehen."
  },
  {
   "question": "Kennst du den Reichstag?",
   "choices": [
    "Ja, ich kenne ihn.",
    "Nein, noch nicht."
   ],
   "target": "Ja, ich kenne ihn."
  },
  {
   "question": "Möchtest du ein Museum besuchen?",
   "choices": [
    "Ja, gern.",
    "Nein, lieber einen Park."
   ],
   "target": "Ja, gern."
  },
  {
   "question": "Wie lange bleibst du in Berlin?",
   "choices": [
    "Zwei Tage.",
    "Drei Tage."
   ],
   "target": "Zwei Tage."
  }
 ],
 "k12-tourist-info": [
  {
   "question": "Guten Tag! Welche Informationen brauchen Sie?",
   "translation": "شنو المعلومات اللي خاصك؟",
   "choices": [
    "Wo finde ich den Stadtplan?"
   ],
   "target": "Wo finde ich den Stadtplan?"
  },
  {
   "question": "Wann öffnet das Museum?",
   "choices": [
    "Um zehn Uhr.",
    "Ich weiß es nicht."
   ],
   "target": "Um zehn Uhr."
  },
  {
   "question": "Wie komme ich dorthin?",
   "choices": [
    "Mit der U-Bahn.",
    "Zu Fuß."
   ],
   "target": "Mit der U-Bahn."
  },
  {
   "question": "Kann ich hier eine Fahrkarte kaufen?",
   "choices": [
    "Ja, am Automaten.",
    "Ja, an der Kasse."
   ],
   "target": "Ja, am Automaten."
  }
 ],
 "k12-citytrip": [
  {
   "question": "Was machen wir am Samstag in Berlin?",
   "translation": "شنو غادي نديرو السبت فبرلين؟",
   "choices": [
    "Wir besuchen ein Museum."
   ],
   "target": "Wir besuchen ein Museum."
  },
  {
   "question": "Besuchen wir am Sonntag ein Museum?",
   "choices": [
    "Ja, gern.",
    "Nein, lieber einen Park."
   ],
   "target": "Ja, gern."
  },
  {
   "question": "Wollen wir abends essen gehen?",
   "choices": [
    "Ja, gute Idee.",
    "Nein, ich bin müde."
   ],
   "target": "Ja, gute Idee."
  },
  {
   "question": "Wann fahren wir zurück?",
   "choices": [
    "Am Sonntagabend.",
    "Am Montagmorgen."
   ],
   "target": "Am Sonntagabend."
  }
 ],
 "k12-birthday": [
  {
   "question": "Hallo! Woher kennst du das Geburtstagskind?",
   "translation": "منين كتعرف صاحب العيد؟",
   "choices": [
    "Wir arbeiten zusammen."
   ],
   "target": "Wir arbeiten zusammen."
  },
  {
   "question": "Gefällt dir die Party?",
   "choices": [
    "Ja, sehr.",
    "Ja, die Musik ist gut."
   ],
   "target": "Ja, sehr."
  },
  {
   "question": "Kennst du die anderen Gäste?",
   "choices": [
    "Ein paar Leute.",
    "Nein, niemanden."
   ],
   "target": "Ein paar Leute."
  },
  {
   "question": "Möchtest du etwas trinken?",
   "choices": [
    "Ein Wasser, bitte.",
    "Einen Saft, bitte."
   ],
   "target": "Ein Wasser, bitte."
  }
 ],
 "k12-wishes": [
  {
   "question": "Heute habe ich Geburtstag!",
   "translation": "اليوم عيد الميلاد ديالي!",
   "choices": [
    "Herzlichen Glückwunsch zum Geburtstag!"
   ],
   "target": "Herzlichen Glückwunsch zum Geburtstag!"
  },
  {
   "question": "Wie alt wirst du heute?",
   "choices": [
    "Ich werde neunundzwanzig.",
    "Ich werde dreißig."
   ],
   "target": "Ich werde neunundzwanzig."
  },
  {
   "question": "Feierst du mit Freunden?",
   "choices": [
    "Ja, mit Freunden.",
    "Nein, mit meiner Familie."
   ],
   "target": "Ja, mit Freunden."
  },
  {
   "question": "Was wünschst du dir?",
   "choices": [
    "Gesundheit und Glück.",
    "Einen schönen Tag."
   ],
   "target": "Gesundheit und Glück."
  }
 ],
 "k12-invitations": [
  {
   "question": "Kommst du am Samstag zu meiner Party?",
   "translation": "غادي تجي السبت للحفلة؟",
   "choices": [
    "Ja, danke für die Einladung."
   ],
   "target": "Ja, danke für die Einladung."
  },
  {
   "question": "Um wie viel Uhr beginnt die Party?",
   "choices": [
    "Um acht Uhr.",
    "Um sieben Uhr."
   ],
   "target": "Um acht Uhr."
  },
  {
   "question": "Soll ich etwas mitbringen?",
   "choices": [
    "Ja, etwas zu trinken.",
    "Nein, nichts."
   ],
   "target": "Ja, etwas zu trinken."
  },
  {
   "question": "Wie komme ich zu dir?",
   "choices": [
    "Mit der Straßenbahn.",
    "Mit dem Bus."
   ],
   "target": "Mit der Straßenbahn."
  }
 ],
 "k12-apologies": [
  {
   "question": "Du kommst zu spät. Was sagst du?",
   "translation": "تأخرت، شنو غادي تقول؟",
   "choices": [
    "Es tut mir leid, ich hatte keine Zeit."
   ],
   "target": "Es tut mir leid, ich hatte keine Zeit."
  },
  {
   "question": "Warum kannst du nicht kommen?",
   "choices": [
    "Ich bin krank.",
    "Ich muss arbeiten."
   ],
   "target": "Ich bin krank."
  },
  {
   "question": "Können wir uns morgen treffen?",
   "choices": [
    "Ja, gern.",
    "Nein, erst nächste Woche."
   ],
   "target": "Ja, gern."
  },
  {
   "question": "Soll ich dir später schreiben?",
   "choices": [
    "Ja, bitte.",
    "Ja, gern."
   ],
   "target": "Ja, bitte."
  }
 ],
 "k12-events": [
  {
   "question": "Welche Veranstaltung interessiert Sie?",
   "translation": "شنو النشاط اللي كيعجبك؟",
   "choices": [
    "Ich interessiere mich für Konzerte."
   ],
   "target": "Ich interessiere mich für Konzerte."
  },
  {
   "question": "Wann beginnt das Konzert?",
   "choices": [
    "Um zwanzig Uhr.",
    "Um neunzehn Uhr."
   ],
   "target": "Um zwanzig Uhr."
  },
  {
   "question": "Wie teuer ist die Karte?",
   "choices": [
    "Zwanzig Euro.",
    "Dreißig Euro."
   ],
   "target": "Zwanzig Euro."
  },
  {
   "question": "Möchten Sie zwei Karten?",
   "choices": [
    "Ja, bitte.",
    "Nein, nur eine."
   ],
   "target": "Ja, bitte."
  }
 ],
 "k12-news": [
  {
   "question": "Hast du heute Nachrichten gehört?",
   "translation": "سمعتي الأخبار اليوم؟",
   "choices": [
    "Ja, ich habe etwas über das Wetter gehört."
   ],
   "target": "Ja, ich habe etwas über das Wetter gehört."
  },
  {
   "question": "Geht es um das Wetter?",
   "choices": [
    "Ja, es wird kalt.",
    "Nein, es geht um den Verkehr."
   ],
   "target": "Ja, es wird kalt."
  },
  {
   "question": "Ist diese Nachricht wichtig?",
   "choices": [
    "Ja, sehr.",
    "Nein, nicht besonders."
   ],
   "target": "Ja, sehr."
  },
  {
   "question": "Möchtest du mehr Nachrichten hören?",
   "choices": [
    "Ja, gern.",
    "Nein, jetzt nicht."
   ],
   "target": "Ja, gern."
  }
 ]
};
