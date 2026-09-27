/**
 * GANZA GRAVEL - TRAILS & GPX DATABASE
 * Dati tecnici degli itinerari, galleria fotografica ad alta risoluzione, punti di interesse e generatore GPX
 */

const GANZA_TRAILS = [
  {
    id: "il-ganzo-64k",
    title: "7° Ganza Gravel - Il Ganzo (Corto)",
    category: "evento",
    distanceKm: 64,
    elevationGain: 850,
    estimatedTime: "3h 45m",
    unpavedPercent: 62,
    asphaltPercent: 38,
    difficulty: 2, // su 5
    difficultyLabel: "Facile / Medio",
    location: "Peccioli (PI)",
    startCoordinates: [43.5486, 10.7208],
    startAddress: "Piazza del Popolo, 56037 Peccioli (PI)",
    // Foto reale percorso corto
    heroImage: "assets/img/percorsi/corto.jpg",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80",
        caption: "Peloton gravel in salita sulle strade sterrate di Ghizzano"
      },
      {
        url: "https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=1200&q=80",
        caption: "Iconiche strade bianche toscane tra cipressi e creste della Valdera"
      },
      {
        url: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=80",
        caption: "I vigneti storici che circondano Fabbrica e Peccioli"
      },
      {
        url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
        caption: "Arrivo trionfale al borgo premiato di Peccioli con vista panoramica"
      }
    ],

    technicalSpecs: {
      maxSlope: "11%",
      avgSlope: "2.8%",
      minEle: 95,
      maxEle: 320,
      pavedKm: 24,
      unpavedKm: 40,
      recommendedTires: "38mm - 45mm Tubeless",
      bikeTypes: ["Gravel", "All-Road", "Hardtail MTB", "E-Gravel"]
    },
    description: "Il percorso medio ufficiale del Cicloraduno 2026. Pensato per chi vuole assaporare il meglio della Valdera senza pendenze proibitive. Si pedala tra le dolci creste argillose, toccando il celebre borgo colorato di Ghizzano (con le opere d'arte di David Tremlett) e le strade bianche di Fabbrica. 2 ristori tipici toscani lungo il tracciato con schiacciata, pecorino e vino locale.",
    highlights: [
      "Borgo d'Arte di Ghizzano con via di Mezzo colorata",
      "Ristoro gourmet al Podere La Chiesa tra i vigneti",
      "Strade bianche larghe e scorrevoli di Fabbrica",
      "Arrivo panoramico al Palazzo Senza Tempo di Peccioli"
    ],
    pois: [
      { km: 0, name: "Partenza Peccioli", type: "start", icon: "🏁", desc: "Piazza del Popolo con segreteria e caffè" },
      { km: 18, name: "Ghizzano & Opere Tremlett", type: "cultura", icon: "🎨", desc: "Sosta fotografica tra le case d'autore" },
      { km: 34, name: "Ristoro 1: Podere La Chiesa", type: "ristoro", icon: "🍷", desc: "Vino biologico, crostini e pecorino toscano" },
      { km: 48, name: "Fontanella di Fabbrica", type: "acqua", icon: "💧", desc: "Punto idrico fresco nel centro storico" },
      { km: 64, name: "Arrivo & Pasta Party", type: "arrivo", icon: "🍝", desc: "Docce calde, musica e terzo tempo ganzo" }
    ],
    foodStops: "2 ristori ufficiali: Km 34 a Podere La Chiesa e ristoro idrico a Fabbrica. Pasta party toscano finale compreso.",
    parkingInfo: "Parcheggio Multipiano Peccioli (Via Bellincioni) gratuito con ascensore diretto al borgo.",
    elevationProfile: [
      { km: 0, ele: 140 }, { km: 8, ele: 210 }, { km: 15, ele: 95 },
      { km: 24, ele: 245 }, { km: 35, ele: 160 }, { km: 45, ele: 320 },
      { km: 54, ele: 180 }, { km: 64, ele: 140 }
    ],
    trackPoints: [
      [43.5486, 10.7208],
      [43.5350, 10.7380],
      [43.5210, 10.7650], // Ghizzano
      [43.5040, 10.7490],
      [43.4880, 10.7230], // Fabbrica
      [43.5120, 10.6980],
      [43.5380, 10.7020],
      [43.5486, 10.7208]
    ]
  },
  {
    id: "la-ganzata-92k",
    title: "7° Ganza Gravel - La Ganzata (Lungo)",
    category: "evento",
    distanceKm: 92,
    elevationGain: 1450,
    estimatedTime: "5h 30m",
    unpavedPercent: 74,
    asphaltPercent: 26,
    difficulty: 4, // su 5
    difficultyLabel: "Impegnativo / Esperti",
    location: "Peccioli (PI)",
    startCoordinates: [43.5486, 10.7208],
    startAddress: "Piazza del Popolo, 56037 Peccioli (PI)",
    // Foto reale percorso lungo
    heroImage: "assets/img/percorsi/lungo.jpg",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        caption: "Le spettacolari creste calanchifere che salgono verso Volterra all'alba"
      },
      {
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
        caption: "Tratto selvaggio lungo i canyon argillosi dell'Alta Valdera"
      },
      {
        url: "https://images.unsplash.com/photo-1571188654248-7a89213915f7?auto=format&fit=crop&w=1200&q=80",
        caption: "Gravel rider solitario sulle creste solitarie e polverose"
      },
      {
        url: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?auto=format&fit=crop&w=1200&q=80",
        caption: "Le maestose mura etrusche di Volterra all'orizzonte"
      }
    ],
    technicalSpecs: {
      maxSlope: "17%",
      avgSlope: "3.7%",
      minEle: 110,
      maxEle: 530,
      pavedKm: 24,
      unpavedKm: 68,
      recommendedTires: "42mm - 48mm Tubeless con battistrada scolpito",
      bikeTypes: ["Gravel", "E-Gravel", "Hardtail MTB"]
    },
    description: "La regina della Ganza Gravel. 92 chilometri che mettono alla prova gambe e cuore nella Toscana più ancestrale e selvaggia. Dalle vigne della Valdera si sale affrontando le celebri rampe argillose dei Calanchi fino a sfiorare la città etrusca di Volterra, per poi scendere verso il Teatro del Silenzio di Lajatico. 3 ricchi ristori intermedi con rifornimenti energetici e specialità toscane.",
    highlights: [
      "Salita sterrata panoramica verso le Balze e mura di Volterra",
      "Passaggio iconico al Teatro del Silenzio di Lajatico",
      "I calanchi lunari della Valdera e single track lungo il fiume Era",
      "3 ristori completi con affettati, pecorino e dolci artigianali"
    ],
    pois: [
      { km: 0, name: "Partenza Peccioli", type: "start", icon: "🏁", desc: "Piazza del Popolo Peccioli" },
      { km: 26, name: "Ristoro 1: Podere La Chiesa", type: "ristoro", icon: "🍷", desc: "Frutta fresca, crostate fatte in casa e sali minerali" },
      { km: 48, name: "Ristoro 2: Volterra Balze", type: "ristoro", icon: "🧀", desc: "Pecorino delle Balze DOP, finocchiona toscana e pane casereccio" },
      { km: 68, name: "Teatro del Silenzio Lajatico", type: "cultura", icon: "🎭", desc: "Sosta panoramica all'anfiteatro all'aperto di Andrea Bocelli" },
      { km: 78, name: "Ristoro 3: Orciatico", type: "ristoro", icon: "🥖", desc: "Schiacciata all'olio, crostini e idratazione prima del rientro" },
      { km: 92, name: "Traguardo Peccioli & Gran Festa", type: "arrivo", icon: "🍺", desc: "Medaglia finisher di legno, docce calde e pasta party no-stop" }
    ],
    foodStops: "3 ristori completi lungo il percorso (km 26, km 48 e km 78) + grande pasta party e birra party all'arrivo a Peccioli.",
    parkingInfo: "Parcheggio Campo Sportivo Peccioli e Parcheggio Multipiano Via Bellincioni con navetta.",
    elevationProfile: [
      { km: 0, ele: 140 }, { km: 12, ele: 230 }, { km: 25, ele: 120 },
      { km: 40, ele: 480 }, { km: 52, ele: 520 }, { km: 68, ele: 280 },
      { km: 80, ele: 350 }, { km: 92, ele: 140 }
    ],
    trackPoints: [
      [43.5486, 10.7208],
      [43.5210, 10.7650],
      [43.4750, 10.7850],
      [43.4020, 10.8600], // Volterra
      [43.3850, 10.8120],
      [43.4730, 10.7260], // Lajatico
      [43.5180, 10.6850],
      [43.5486, 10.7208]
    ]
  },
  {
    id: "teatro-del-silenzio",
    title: "Anello del Teatro del Silenzio & Lajatico",
    category: "permanente",
    distanceKm: 44,
    elevationGain: 680,
    estimatedTime: "2h 45m",
    unpavedPercent: 68,
    asphaltPercent: 32,
    difficulty: 2,
    difficultyLabel: "Turistico / Panoramico",
    location: "Lajatico (PI)",
    startCoordinates: [43.4734, 10.7264],
    startAddress: "Piazza Vittorio Veneto, 56030 Lajatico (PI)",
    heroImage: "assets/img/percorsi/dji_fly_20260920_085748_0152_1789965475783_video_trim(1).jpg",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
        caption: "La luce dorata del tramonto toscano sulle colline di Lajatico"
      },
      {
        url: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=80",
        caption: "I filari di cipressi secolari che conducono al borgo di Lajatico"
      },
      {
        url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80",
        caption: "Uscita gravel con amici al tramonto tra vigne e strade bianche"
      }
    ],
    technicalSpecs: {
      maxSlope: "10%",
      avgSlope: "2.5%",
      minEle: 115,
      maxEle: 290,
      pavedKm: 14,
      unpavedKm: 30,
      recommendedTires: "35mm - 42mm",
      bikeTypes: ["Gravel", "E-Gravel", "Trekking Bike", "MTB"]
    },
    description: "Itinerario permanente aperto e pedalabile tutto l'anno. Uno dei percorsi più iconici e fotografati d'Italia: si snoda attorno alle sculture contemporanee e all'anfiteatro all'aperto del Teatro del Silenzio, fondato da Andrea Bocelli. Attraversa vigne storiche, poderi isolati e boschi di querce secolari, con una vista a 360° che spazia dalla Valdera a Volterra.",
    highlights: [
      "Accesso diretto al Teatro del Silenzio all'aperto",
      "Viale dei cipressi monumentali di Lajatico",
      "Strade bianche compatte ideali anche per neofiti ed e-bike",
      "Botteghe e bar panoramici nel borgo di Lajatico per l'aperitivo"
    ],
    pois: [
      { km: 0, name: "Lajatico Centro", type: "start", icon: "📍", desc: "Piazza Vittorio Veneto con bar e fontanella" },
      { km: 6, name: "Teatro del Silenzio", type: "cultura", icon: "🎭", desc: "L'iconica scultura e il palco tra le colline" },
      { km: 21, name: "Poggio al Lupo", type: "panoramico", icon: "🌄", desc: "Punto panoramico a 360° su Volterra e Peccioli" },
      { km: 35, name: "Chianni Bivio Sterrato", type: "natura", icon: "🌲", desc: "Tratto ombreggiato tra le querce secolari" },
      { km: 44, name: "Rientro a Lajatico", type: "arrivo", icon: "☕", desc: "Caffè e gelato artigianale nella piazzetta" }
    ],
    foodStops: "Numerose botteghe nel centro di Lajatico con schiacciate farcite al momento, bar panoramici e cantine per aperitivi.",
    parkingInfo: "Parcheggio Comunale gratuito all'ingresso di Lajatico (Strada Provinciale 45).",
    elevationProfile: [
      { km: 0, ele: 205 }, { km: 10, ele: 140 }, { km: 20, ele: 290 },
      { km: 32, ele: 180 }, { km: 44, ele: 205 }
    ],
    trackPoints: [
      [43.4734, 10.7264],
      [43.4560, 10.7420],
      [43.4410, 10.7100],
      [43.4620, 10.6890],
      [43.4810, 10.7050],
      [43.4734, 10.7264]
    ]
  },
  {
    id: "volterra-etrusca-wild",
    title: "Volterra Etrusca & Calanchi Wild Trail",
    category: "permanente",
    distanceKm: 78,
    elevationGain: 1320,
    estimatedTime: "4h 45m",
    unpavedPercent: 80,
    asphaltPercent: 20,
    difficulty: 4,
    difficultyLabel: "Tecnico / Avventura",
    location: "Volterra (PI)",
    startCoordinates: [43.4022, 10.8606],
    startAddress: "Piazza dei Priori, 56048 Volterra (PI)",
    heroImage: "assets/img/percorsi/dji_fly_20260920_085748_0152_1789965475783_video_trim(1).jpg",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
        caption: "Il baratro vertiginoso delle Balze franose di Volterra"
      },
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        caption: "Sentieri sterrati remoti della Via Salaiola etrusca"
      },
      {
        url: "https://images.unsplash.com/photo-1571188654248-7a89213915f7?auto=format&fit=crop&w=1200&q=80",
        caption: "Salita impegnativa verso la Rocca di Montecatini Val di Cecina"
      }
    ],
    technicalSpecs: {
      maxSlope: "16%",
      avgSlope: "3.5%",
      minEle: 140,
      maxEle: 535,
      pavedKm: 15,
      unpavedKm: 63,
      recommendedTires: "42mm - 50mm con protezione antiforatura",
      bikeTypes: ["Gravel", "E-Gravel", "MTB"]
    },
    description: "Un percorso per veri amanti della ghiaia polverosa, dei silenzi d'alta quota e dei paesaggi toscani più aspri. Si snoda tra le balze franose di Volterra, la macchia mediterranea e le antiche vie etrusche del sale. Tocca la rocca di Montecatini Val di Cecina prima di ridiscendere nelle gole argillose della Val di Cecina.",
    highlights: [
      "Il monumento geologico delle Balze di Volterra",
      "L'antica Via Salaiola etrusca",
      "Sosta ristoro a Montecatini Val di Cecina",
      "80% di sterrato selvaggio lontano da qualsiasi traffico"
    ],
    pois: [
      { km: 0, name: "Piazza dei Priori Volterra", type: "start", icon: "🏛️", desc: "Partenza dal cuore medievale di Volterra" },
      { km: 12, name: "Le Balze & Badia Camaldolese", type: "natura", icon: "⛰️", desc: "Spettacolo vertiginoso della frana millenaria" },
      { km: 38, name: "Montecatini Val di Cecina", type: "ristoro", icon: "🥪", desc: "Botteghe storiche con pane toscano e salumi" },
      { km: 58, name: "Strada del Sale & Miniere", type: "storia", icon: "⛏️", desc: "Passaggio vicino alle saline storiche" },
      { km: 78, name: "Rientro a Porta all'Arco", type: "arrivo", icon: "🏰", desc: "Rientro sotto la porta etrusca originale" }
    ],
    foodStops: "Trattorie tipiche a Volterra e botteghe alimentari a Montecatini Val di Cecina per pane toscano, pecorino e salumi d'autore.",
    parkingInfo: "Parcheggio sotterraneo Piazza Martiri della Libertà o Parcheggio Giardino dei Ponti a Volterra.",
    elevationProfile: [
      { km: 0, ele: 510 }, { km: 18, ele: 180 }, { km: 35, ele: 340 },
      { km: 55, ele: 210 }, { km: 78, ele: 510 }
    ],
    trackPoints: [
      [43.4022, 10.8606],
      [43.4210, 10.8200],
      [43.3950, 10.7480],
      [43.3620, 10.7850],
      [43.3780, 10.8400],
      [43.4022, 10.8606]
    ]
  },
  {
    id: "chianti-pisano-vigneti",
    title: "Strade Bianche del Chianti Pisano & Degustazione",
    category: "permanente",
    distanceKm: 38,
    elevationGain: 490,
    estimatedTime: "2h 15m",
    unpavedPercent: 60,
    asphaltPercent: 40,
    difficulty: 1,
    difficultyLabel: "Facile / Wine Tour",
    location: "Terricciola (PI)",
    startCoordinates: [43.5255, 10.6795],
    startAddress: "Piazza XX Settembre, 56030 Terricciola (PI)",
    heroImage: "assets/img/percorsi/dji_fly_20260920_085748_0152_1789965475783_video_trim(1).jpg",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
        caption: "I vigneti lussureggianti della Città del Vino di Terricciola"
      },
      {
        url: "https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=1200&q=80",
        caption: "Strade di ghiaia battuta morbide tra filari di Sangiovese e ulivi"
      },
      {
        url: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1200&q=80",
        caption: "La Badia di Morrona, abbazia millenaria trasformata in cantina d'eccellenza"
      }
    ],
    technicalSpecs: {
      maxSlope: "8%",
      avgSlope: "2.1%",
      minEle: 60,
      maxEle: 220,
      pavedKm: 15,
      unpavedKm: 23,
      recommendedTires: "35mm - 40mm",
      bikeTypes: ["Gravel", "E-Gravel", "Trekking", "All-Road"]
    },
    description: "L'itinerario perfetto per combinare la passione per la bicicletta gravel con l'eccellenza enogastronomica toscana. Terricciola è ufficialmente la Città del Vino della provincia di Pisa. Il percorso attraversa le vigne di Sangiovese e Vermentino, lambisce la millenaria Badia di Morrona e offre soste degustazione indimenticabili in cantina.",
    highlights: [
      "Attraversamento della tenuta di Badia di Morrona con chiesa dell'XI secolo",
      "Pendenze dolci e accessibili ad ogni livello e con e-bike",
      "Possibilità di sosta degustazione con calice di Chianti delle Colline Pisane DOCG",
      "Borgo di Terricciola con cantine scavate nel tufo"
    ],
    pois: [
      { km: 0, name: "Terricciola Città del Vino", type: "start", icon: "🍇", desc: "Piazza centrale e vista sulle vallate" },
      { km: 12, name: "Badia di Morrona", type: "cultura", icon: "⛪", desc: "Antica abbazia e tenuta vinicola storica" },
      { km: 24, name: "Soiana & Le Vigne", type: "natura", icon: "🌱", desc: "Ghiaia battuta tra vigne e uliveti ordinati" },
      { km: 38, name: "Rientro & Degustazione", type: "ristoro", icon: "🍷", desc: "Tagliere toscano e degustazione in enoteca" }
    ],
    foodStops: "Numerose cantine convenzionate Ganza Gravel per degustazioni guidate di vino e olio novo.",
    parkingInfo: "Ampio parcheggio panoramico all'ingresso di Terricciola (Via Roma).",
    elevationProfile: [
      { km: 0, ele: 180 }, { km: 10, ele: 90 }, { km: 20, ele: 160 },
      { km: 30, ele: 85 }, { km: 38, ele: 180 }
    ],
    trackPoints: [
      [43.5255, 10.6795],
      [43.5120, 10.6650],
      [43.4980, 10.6920],
      [43.5310, 10.7100],
      [43.5255, 10.6795]
    ]
  },
  {
    id: "calanchi-balze-epic",
    title: "L'Anello dei Calanchi & Castelli della Valdera",
    category: "permanente",
    distanceKm: 54,
    elevationGain: 780,
    estimatedTime: "3h 15m",
    unpavedPercent: 70,
    asphaltPercent: 30,
    difficulty: 3,
    difficultyLabel: "Medio / Panoramico",
    location: "Palaia (PI)",
    startCoordinates: [43.6062, 10.7712],
    startAddress: "Piazza del Mercato, 56036 Palaia (PI)",
    heroImage: "assets/img/percorsi/dji_fly_20260920_085748_0152_1789965475783_video_trim(1).jpg",
    photos: [
      {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        caption: "Il borgo fantasma di Toiano arroccato sui calanchi franosi della Valdera"
      },
      {
        url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
        caption: "Strade sterrate bianche tra boschi di querce e vallate toscane incontaminate"
      },
      {
        url: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80",
        caption: "La rocca medievale di Palaia con panorama che arriva fino alle colline pisane"
      }
    ],
    technicalSpecs: {
      maxSlope: "13%",
      avgSlope: "2.9%",
      minEle: 80,
      maxEle: 260,
      pavedKm: 16,
      unpavedKm: 38,
      recommendedTires: "38mm - 45mm",
      bikeTypes: ["Gravel", "E-Gravel", "MTB"]
    },
    description: "Un anello affascinante che parte dal borgo medievale di Palaia e tocca il misterioso borgo disabitato di Toiano, sospeso su speroni di argilla e calanchi. Si alternano strade bianche compatte, brevi salite panoramiche e tratti ombreggiati nei boschi di lecci, con una vista straordinaria sul cuore della Valdera.",
    highlights: [
      "Il borgo fantasma di Toiano sospeso nel vuoto sui calanchi",
      "Palaia medievale e la Pieve di San Martino",
      "Sentieri della macchia toscana e tartufo bianco di zona",
      "70% di sterrato in totale tranquillità e assenza di traffico"
    ],
    pois: [
      { km: 0, name: "Palaia Rocca Medievale", type: "start", icon: "🏰", desc: "Piazza del Mercato a Palaia" },
      { km: 16, name: "Toiano Borgo Fantasma", type: "cultura", icon: "👻", desc: "Suggestivo ponte sul precipizio e case abbandonate" },
      { km: 32, name: "Forcoli & Valli dell'Era", type: "natura", icon: "🌾", desc: "Pianure sterrate veloci lungo il torrente" },
      { km: 45, name: "Pieve di San Martino", type: "storia", icon: "⛪", desc: "Capolavoro romanico in cotto toscano" },
      { km: 54, name: "Rientro a Palaia", type: "arrivo", icon: "🍕", desc: "Sosta alla pizzeria/osteria con terrazza panoramica" }
    ],
    foodStops: "Osterie e botteghe tipiche a Palaia celebri per la pasta al tartufo e funghi porcini.",
    parkingInfo: "Parcheggio pubblico gratuito presso la Pieve di Palaia o lungo la circonvallazione.",
    elevationProfile: [
      { km: 0, ele: 240 }, { km: 14, ele: 110 }, { km: 26, ele: 210 },
      { km: 38, ele: 90 }, { km: 54, ele: 240 }
    ],
    trackPoints: [
      [43.6062, 10.7712],
      [43.5850, 10.7920],
      [43.5580, 10.8120], // Toiano
      [43.5720, 10.7410],
      [43.6062, 10.7712]
    ]
  }
];

/**
 * Funzione di utilità per trovare un percorso per ID
 */
function getTrailById(trailId) {
  return GANZA_TRAILS.find(t => t.id === trailId);
}

/**
 * Generatore dinamico di file GPX XML valido per Garmin, Wahoo, Strava, Komoot
 */
function generateGPXContent(trail) {
  const trkpts = trail.trackPoints.map((pt, i) => {
    const lat = pt[0];
    const lon = pt[1];
    const ele = trail.elevationProfile[i % trail.elevationProfile.length].ele;
    return `      <trkpt lat="${lat}" lon="${lon}">
        <ele>${ele}</ele>
        <name>Punto ${i + 1}</name>
      </trkpt>`;
  }).join("\n");

  const wpts = (trail.pois || []).map((poi, idx) => {
    const refPoint = trail.trackPoints[idx % trail.trackPoints.length] || trail.startCoordinates;
    return `  <wpt lat="${refPoint[0]}" lon="${refPoint[1]}">
    <name>${poi.icon} ${poi.name} (Km ${poi.km})</name>
    <desc>${poi.desc}</desc>
    <sym>${poi.type}</sym>
  </wpt>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="Ganza Gravel official portal - https://www.ganzagravel.it"
     xmlns="http://www.topografix.com/GPX/1/1"
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>${trail.title}</name>
    <desc>${trail.description}</desc>
    <author>
      <name>Ganza Gravel Staff - Sergio Di Ponzio &amp; Daniele Pelorossi</name>
      <link href="https://www.ganzagravel.it"/>
    </author>
    <time>${new Date().toISOString()}</time>
  </metadata>
${wpts}
  <trk>
    <name>${trail.title}</name>
    <type>Cycling / Gravel</type>
    <trkseg>
${trkpts}
    </trkseg>
  </trk>
</gpx>`;
}

/**
 * Funzione di download automatico del file .gpx nel browser
 */
function downloadTrailGPX(trailId) {
  const trail = getTrailById(trailId);
  if (!trail) return;

  const gpxString = generateGPXContent(trail);
  const blob = new Blob([gpxString], { type: "application/gpx+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${trail.id}-ganza-gravel.gpx`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
