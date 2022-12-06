let current_index_questions = 0;
let correct_index = 0;
let current_answeres;
let answered = false;
let total_answered = 0;
let total_correct = 0;

let questions = [
  //   {
  //     sporsmal: "Hva vil printes her?",
  //     svar: "3",
  //     alt: ["1", "2", "4"],
  //   },
  {
    sporsmal: "Hva er Alan Turing kjent for?",
    svar: "Han utformet det matematiske grunnlaget for dagens datamaskiner.",
    alt: [
      "Han oppfant datamaskinen.",
      "Han bidro til forskning på transistorer.",
      "Han startet opp Intel.",
    ],
  },

  {
    sporsmal:
      "Hva kalles mindre kretskort som plugges inn i hoved(krets-)kortet?",
    svar: "Datterkort",
    alt: ["Grafikk-kort", "Sønne-kort", "RAM-brikker"],
  },

  {
    sporsmal: "Hva stør CPU for?",
    svar: "Central Processing Unit",
    alt: ["Central Power Unit", "Cooling Power Unit", "Core Processing Unitr"],
  },

  {
    sporsmal:
      "RAM står for random acces memory, men hva menes egentlig med random i dette tilfellet?",
    svar: "At hukommelsescellene kan aksesseres direkte i tilfeldig rekkefølge.",
    alt: [
      "At dataen kommer i tilfeldig rekkefølge.",
      "At vi henter ut tilfeldig data.",
      "At det er tilfeldig hvor dataen kommer fra.",
    ],
  },

  {
    sporsmal:
      "Hvilket metall finner man inni CPUer som IT-industrien er fullstendig avhengig av?",
    svar: "Silisium",
    alt: ["Silikon", "Stål", "Aluminium"],
  },

  {
    sporsmal:
      "Hva kunne en CPU gjøre som var helt revolusjonerende når den kom?",
    svar: "Utføre operasjoner lagret i minnet.",
    alt: [
      "Prosessere grafisk informasjon",
      "Lese digitale data",
      "Utføre flere operasjoner på en gang",
    ],
  },

  {
    sporsmal: "Hva sier Moores lov?",
    svar: "Loven sier at antall transistorer i en integrert krets dobles hvert andre år.",
    alt: [
      "Loven sier at klokkehastigheten øker proporsjonalt med antall programtellere.",
      "Loven sier at samplingsfrekvensen må være minst dobbelt så rask som den raskeste frekvensen",
      "Loven postulerer at: Ting vil gå galt uavhengig av av situasjon gitt muligheten",
    ],
  },

  {
    sporsmal: "Hva er fotolitografi?",
    svar: "En teknikk for å lage transistorer i en integrert krets",
    alt: [
      "En teknikk for å gjøre bilder lagret digitalt til å ligne på et maleri",
      "En teknikk for å lage PC-er ved at man først konstruerer et bilde av hvordan den skal se ut.",
      "En teknikk som brukes i produksjonen av lithium-batterier",
    ],
  },

  {
    sporsmal: "Hva er software?",
    svar: "Instruksjoner lagret i en datamaskins minne",
    alt: [
      "Et program som kun gjør ufarlige operasjoner, i motsetning til hardware",
      "De 'mykere' metallene som blir brukt i en pc.",
      "En spesiell type putevar som er ekstra myk",
    ],
  },

  {
    sporsmal:
      "Hva er det som benyttes i dag som har erstattet vacuum tubes (vakumrør)?",
    svar: "Transistorer",
    alt: ["Assembly", "CPU", "RAM"],
  },

  {
    sporsmal: "Hva betyr begrepet binært ('binary') bokstavelig?",
    svar: "Av to tilstander ('of two states')",
    alt: [
      "Supporter av Bin laden ('Bin Laden supporter')",
      "Tilbakemelding på svar",
      "Tidligere tilstand ('been state')",
    ],
  },

  {
    sporsmal: "Binær tilstanden 0 kan også representere",
    svar: "Ikke flyt av strøm",
    alt: ["Flyt av strøm", "False", "True"],
  },

  {
    sporsmal: "Hva blir binærtallet 1101 i titallssystemet?",
    svar: "13",
    alt: ["11", "7", "3"],
  },

  {
    sporsmal: "Hva er 183 (titallssystemet) i binær?",
    svar: "10101111",
    alt: ["10110111", "110110111", "11010111"],
  },

  {
    sporsmal: "En byte er ___ bit",
    svar: "8",
    alt: ["1", "4", "16"],
  },

  {
    sporsmal: "Hva kjennetegner en 16bits datamaskin/spillkonsoll?",
    svar: "Minnet kan addresseres med 16 bits.",
    alt: [
      "Knuses maskinen går den i 16 biter.",
      "Minnet har plass til maks 16 bits.",
      "Maskinen opererer med to bytes av gangen.",
    ],
  },

  {
    sporsmal: "Hvilket er størst?",
    svar: "Terabyte",
    alt: ["Gigabyte", "Kilobyte", "Megabyte"],
  },

  {
    sporsmal:
      "Hva er en vanlig måte datamaskiner representer positive og negative tall på",
    svar: "Første bit er 1 for negative tall og 0 for positive tall.",
    alt: [
      "1 byte for fortegnet, 2-4 bytes for tallet.",
      "Første bit er 0 for negative tall og 1 for positive tall.",
      "Siste bit er 0 for negative tall og 1 for positive tall.",
    ],
  },

  {
    sporsmal:
      "Hvorfor kan det være nødvendig å bruke 64bit til å representere heltall i stedet for 32bits?",
    svar: "Trenger 64bit til å addressere minne på nyere datamaskiner.",
    alt: [
      "Heltall blir mer nøyaktig representert med 64bit.",
      "64bits tall tar mindre plass i minnet.",
      "64bit gjør det lettere å representere mindre tall.",
    ],
  },

  {
    sporsmal:
      "Hvordan representeres et flyt/desimaltall med 32 bit iht. IEEE 754 standarden?",
    svar: "23 bit for signifikanten",
    alt: [
      "1 bit for fortegn (+/-)",
      "1 bit for multiplikatoren",
      "8 bit for eksponenten",
    ],
  },

  {
    sporsmal: "Hvor mange symboler kan representeres med 3 byte?",
    svar: "16 777 216",
    alt: ["8", "9", "3"],
  },

  {
    sporsmal: "Hvor mange symboler kan representeres med 6 bit?",
    svar: "64",
    alt: ["36", "60", "6"],
  },

  {
    sporsmal:
      "Hvor mange bytes trenger man for å representere et fullt HD-bilde (1920x1080px) i svart/hvit?",
    svar: "259 200 bytes",
    alt: ["6 220 800 bytes", "2 064 000 bit", "2 073 600 bytes"],
  },

  {
    sporsmal:
      "Hvilket tall på desimalform representerer det heksadesimale tallet 'BC3'?",
    svar: "3011",
    alt: ["101111000011", "194", "31"],
  },

  {
    sporsmal: "Hva står ADC for?",
    svar: "Analog-to-Digital Converter",
    alt: [
      "Always Document your Code",
      "Analog-to-Digital Compressor",
      "Analog-to-Digital Codeblock",
    ],
  },

  {
    sporsmal: "Hva er en piksel?",
    svar: "Den minste enheten i et bilde",
    alt: [
      "Et sjøpattedyr, nært beslektet spermhvalen",
      "Et fargeformat",
      "Et verktøy man bruker til å tegne på bilder med.",
    ],
  },

  {
    sporsmal: "Hva er sampling?",
    svar: "å konvertere fra analog til digital lyd",
    alt: [
      "å ta målinger på regelmessige intervall",
      "å ta målinger på uregelmessige intervall",
      "å konvertere fra digital til analog lyd",
    ],
  },

  {
    sporsmal: "Hva er riktig om Nyquist-regelen for sampling?",

    svar: "Nyquist-regelen sier at samplingsfrekvensen må være minst dobbelt så rask som den raskeste frekvensen. Ettersom menneskelige ører kan høre lyder opp til ca. 20 000Hz, vil samplingsfrekvens på 40 000Hz oppfylle Nyquists regel for digitale lydopptak.",
    alt: [
      "Nyquist-regelen sier at samplingsfrekvensen må være minst halvparten av den raskeste frekvensen. Ettersom menneskelige ører kan høre lyder opp til ca. 20 000Hz, vil samplingsfrekvens på 10 000Hz oppfylle Nyquists regel for digital lydopptak.",
      "Nyquist-regelen sier at samplingsfrekvensen må være minst like rask som den raskeste frekvensen. Ettersom menneskelige ører kan høre lyder opp til ca. 20 000Hz, vil samplingsfrekvens på 20 000Hz oppfylle Nyquists regel for digitale lydopptak.",
      "Nyquist-regelen sier at samplingsfrekvensen må være minst fire ganger så rask som den raskeste frekvensen. Ettersom menneskelige ører kan høre lyder opp til ca. 20 000Hz, vil samplingsfrekvens på 80 000Hz oppfylle Nyquists regel for digitale lydopptak.",
    ],
  },

  {
    sporsmal: "Hva er tetthet (density)?",
    svar: "Antall piksler per fysisk areal",
    alt: [
      "Prosent av overlapp mellom piksler i et bilde",
      "Antall farger per piksel",
      "Andel fargetetthet per piksel",
    ],
  },

  {
    sporsmal: "Hva er  sant om UNICODE?",
    svar: "Etablert i 1992",
    alt: [
      "Mest brukte versjon bruker 16 bit",
      "Støtte for alle bokstaver i alle språk",
      "Mangler støtte for matematiske symboler og emojies",
    ],
  },

  {
    sporsmal: "Gjør om det binøre flyttallet 1101.1011 til desimaltall",
    svar: "13.11",
    alt: ["13.6875", "9.2022", "13.8525"],
  },

  {
    sporsmal: "Hva er koding (encoding) av video?",
    svar: "Transformasjon av video slik at den kan deles og spilles av",
    alt: [
      "Sikre at ingen før tilgang til video",
      "Gjøre om video til ulike format som JPG, PNG og mp3",
      "øke størrelsen på videodata ved hjelp av matematikk",
    ],
  },

  {
    sporsmal:
      "Et bilde 10 x 10 tommer bilde er skannet til 326 piksler per tomme.Hver piksel er representert ved en RGB-verdi. Hvor stor lagringsplass krever dette bildet?",
    svar: "4.00 MB",
    alt: ["31.9 MB", "1.32 MB", "10.6 MB"],
  },

  {
    sporsmal: "Hva er rammestørrelse (frame size) i en digital video?",
    svar: "Måles i antall cm bredde x antall cm høyde",
    alt: [
      "Avgjør om en video er SD, HD, UHD",
      "Kun bredden på rammen (frame) oppgitt i antall piksel",
      "Størrelsen på skjermen i tommer",
    ],
  },

  {
    sporsmal: "Hva er riktig om JPG komprimering?",
    svar: "JPG komprimerer med tap ved å lage forenklinger som ikke er så synlig for menneske",
    alt: [
      "JPG representerer bilder uten synlig tap av klarhet ved opp til 100:1 komprimering.",
      "JPG er svært god på å representere datagrafikk, men har problemer med å representere fotografier korrekt.",
      "JPG er en type tapsløs komprimering. Da kan den originale versjonen enkelt rekonstrueres fra den komprimerte versjonen.",
    ],
  },

  {
    sporsmal:
      "Hvorfor er det behov for bildekomprimering? (Kan være flere riktige)",
    svar: "Krymper fysisk bits i minnet (RAM), slik at det blir plass til mer",
    alt: [
      "Gjør det rasker å overføre bilder",
      "Reduserer lagringsplass for et bilde",
      "øker bildekvaliteten",
    ],
  },

  {
    sporsmal: "Hva er sant om lossy komprimering (lossy compression) av data?",
    svar: "Fjerning av informasjon som er vanskelig for mennesker å oppdage",
    alt: [
      "Risikerer å miste all informasjon",
      "Fjerner unødvendig eller mindre viktig informasjon",
      "Kan gjenskape original data 100%",
    ],
  },

  {
    sporsmal:
      "Hvilket tall på heksadesimal form tilsvarer det desimale tallet 78",
    svar: "4E",
    alt: ["BC", "414", "A5"],
  },

  {
    sporsmal:
      "Tapsfri komprimering (lossless compression) gjør at komprimert data ...",
    svar: "... ikke gir tap av opprinnelig data",
    alt: [
      "... kan nesten gjennskape opprinnelig data",
      "... gir tap av opprinnelig data",
      "... kan 100% gjennskape opprinnelig data",
    ],
  },

  {
    sporsmal: "Hva er sant?",
    svar: "Forsinkelse (latency) er tiden det tar fra informasjon blir laget til den blir levert",
    alt: [
      "Hvor mye data som overføres per tidsenhet (bits/sek) kalles båndbredde (bandwidth)",
      "Grunntallet i heksadesimalrepresentasjon er 14",
      "FPS er hvor mange bilder som vises per sekund i en video",
    ],
  },

  {
    sporsmal:
      "Hvilken komponent i en stasjonær datamaskin mister data dersom strømmen forsvinner?",
    svar: "RAM",
    alt: ["Harddisk", "SSD", "Minnepinne"],
  },

  {
    sporsmal: "Hva er de tre behovene i CIA-triaden?",
    svar: "Konfidensialitet, Integritet, Tilgjengelighet",
    alt: [
      "GDPR, Integritet, TIlgjengelighet",
      "Sikkerhet, Tilgjengelighet, Konfidensialitet",
      "Sikkerhet, Konfidensialitet, Integritet",
    ],
  },

  {
    sporsmal: "Hva mener vi med konfidensialitet?",
    svar: "Informasjon er beskyttet slik at kun autoriserte systemer og personell før tilgang",
    alt: [
      "Informasjonen er tilgjengelig for autoriserte systemer og personell uten mye innblanding eller hindring i et passende format",
      "Informasjonen er ikke sårbar",
      "Informasjon du legger inn på internett er hemmelig",
    ],
  },

  {
    sporsmal: "Hva mener vi med integritet?",
    svar: "Informasjonen er komplett og ikke korrupt. Den er ikke pøvirket av et uautorisert eksternt parti/system eller støy i systemet",
    alt: [
      "Integritet betyr selvstendighet. Når data har integritet betyr det at det inneholder all informasjon vi trenger for å utføre en oppgave",
      "Informasjonen er korrekt og ikke pøvirket av politikk eller andres agenda",
      "Informasjon er beskyttet slik at kun autoriserte systemer og personell før tilgang",
    ],
  },

  {
    sporsmal: "Hva mener vi med tilgjengelighet?",
    svar: "Informasjonen er tilgjengelig for autoriserte systemer og personell uten mye innblanding eller hindring i et passende format",
    alt: [
      "Informasjonen er ikke tilgjengelig for autoriserte systemer og personell uten mye innblanding eller hindring",
      "Informasjonen er offentlig tilgjengelig",
      "Informasjon er beskyttet slik at kun autoriserte systemer og personell får tilgang",
    ],
  },

  {
    sporsmal: "Hvilken er IKKE en black hat hacker?",
    svar: "Børge spør NTNU om han kan sjekke deres datasystemer for feil, og finner en møte å øpne alle dører på campus. Han sier ifra til NTNU IT.",
    alt: [
      "Eirik oppdager en feil i NTNU sine datasystemer som lar ham gi seg selv A i alle fag, og oppnør tidenes beste snitt",
      "Køre Johnny hacker banken sin og gir seg selv masse penger",
      "Martin har lagt inn virus i øvingene i ITGK. Han bruker dette til å mine cryptocurrency på datamaskinene til studentene",
    ],
  },

  {
    sporsmal: "Hva er aksene i McCumbers kube?",
    svar: "Sikkerhetsmål, Datatilstander, Mottiltak",
    alt: [
      "Konfidensialitet, Integritet, Tilgjengelighet",
      "Policy, Confidentiality, Technology",
      "Storage, Processing, Transmission",
    ],
  },

  {
    sporsmal: "Hva er en sårbarhet i et IKT-system?",
    svar: "En svakhet som muliggjør at sikkerheten i et IKT-system kan bli brutt",
    alt: [
      "Sårbarhet skjer nør det kommer rød tekst i terminalen",
      "Sårbarhet handler om hvordan påkjenninger og stress vil kunne gi konsekvenser",
      "En feil i systemet som gjør at det ikke fungerer riktig",
    ],
  },

  {
    sporsmal:
      "Hva kan vi bruke til å vurdere alvorlighetsgraden til en sårbarhet?",
    svar: "Common Vulnerability Scoring System (CVSS)",
    alt: [
      "IEEE Vulnerability Metric",
      "FIA Exploit Scale (FIAES)",
      "Common Vulnerabilities and Exposures(CVE)",
    ],
  },

  {
    sporsmal: "Hva er buffer overflow?",
    svar: "En type angrep hvor man skriver mer data enn er plass til i bufferets minne, slik at det overskriver noe annet",
    alt: [
      "Når det er for mye vann bak en demning",
      "En type angrep hvor man bruker 64 bits variabler på et system som kun støtter 32 bit",
      "En type angrep hvor systemet går tom for minne",
    ],
  },

  {
    sporsmal: "Hva er IKKE en god møte å redusere sårbarhet i et system?",
    svar: "Redusere konsekvensene av at sårbarhet utnyttes ved å holde hvordan systemer fungerer hemmelig (Security through obscurity)",
    alt: [
      "Unngå at sårbarheter blir utnyttet ved å redusere angrepsflaten",
      "Unngå at sårbarhet blir utnyttet ved å gjøre sikkerhetsoppdatering og fase ut utdaterte systemer",
      "Redusere konsekvensene av at sårbarheter utnyttes, ved å ikke gi entiteter flere privilegier enn nødvendig",
    ],
  },
];

function checkAnswer(answer) {
  if (!answered) {
    total_answered += 1;
    if (answer == correct_index) {
      document.getElementById("answer" + correct_index).style.backgroundColor =
        "green";
      total_correct += 1;
    } else {
      document.getElementById("answer" + correct_index).style.backgroundColor =
        "green";
      document.getElementById("answer" + answer).style.backgroundColor = "red";
    }
  }
  answered = true;
  document.getElementById("stats").innerText =
    total_correct + "/" + total_answered;
}

function displayQuestion() {
  correct_index = Math.floor(Math.random() * 4);
  document.getElementById("question").innerText =
    questions[current_index_questions].sporsmal;
  current_answeres = [];
  current_answeres = [...questions[current_index_questions].alt];
  current_answeres = shuffle(current_answeres);
  current_answeres.splice(
    correct_index,
    0,
    questions[current_index_questions].svar
  );

  for (var i = 0; i < 4; i++) {
    document.getElementById("answer" + i).innerText = current_answeres[i];
  }
}

function lock_buttons() {
  if (current_index_questions == 0) {
    document.getElementById("prev").classList.add("disabled");
  } else {
    document.getElementById("prev").classList.remove("disabled");
  }
  if (current_index_questions == questions.length - 1) {
    document.getElementById("next").classList.add("disabled");
  } else {
    document.getElementById("next").classList.remove("disabled");
  }
}

function reset() {
  for (var i = 0; i < 4; i++) {
    document.getElementById("answer" + i).style.backgroundColor = "#4CAF50";
  }
  answered = false;
  lock_buttons();
  displayQuestion();
}

function nextQuestion() {
  if (current_index_questions == questions.length - 1) {
    return;
  }
  current_index_questions++;
  reset();
}

function previousQuestion() {
  if (current_index_questions == 0) {
    return;
  }
  current_index_questions--;
  reset();
}

// COPY PASTE FROM https://stackoverflow.com/a/2450976/10880273 !
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

questions = shuffle(questions);
displayQuestion();
