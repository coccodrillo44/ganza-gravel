/**
 * GANZA GRAVEL - CORE APP LOGIC
 * Gestione Countdown, Drawer Mobile, Modali, Accordion e Notifiche Toast
 */

/* ==========================================================================
   1. DATABASE EVENTI & SISTEMA DINAMICO BASATO SULLA DATA
   ========================================================================== */
const GANZA_EVENTS = [
  {
    id: "aria-di-primavera",
    title: "Aria di Primavera - Pontedera Ride",
    shortTitle: "Aria di Primavera",
    subtitle: "La pedalata per salutare la bella stagione",
    edition: "Social Ride di Primavera",
    date: "2026-05-10T09:00:00+02:00",
    dateDisplay: "10 Maggio 2026",
    day: "10",
    month: "MAG",
    location: "Pontedera (PI)",
    venue: "Piazzale Museo Piaggio, Pontedera",
    distanceKm: 52,
    elevationGain: 640,
    price: "€15.00",
    categoryTag: "SOCIAL RIDE",
    highlightFeat: "Colazione & Street Food",
    image: "assets/img/eventi/dji_fly_20260920_085748_0152_1789965475783_video_trim(1).jpg",
    description: "Pedalata dal piazzale del Museo Piaggio verso le colline di Palaia e Peccioli. Sosta colazione e rientro a Pontedera con street food toscano e musica.",
    actionLink: "travel.html#prenota",
    actionText: "Prenota Posto",
    trailId: "il-ganzo-64k"
  },
  {
    id: "thermal-gravel",
    title: "Thermal Gravel & Spa Recovery",
    shortTitle: "Thermal Gravel",
    subtitle: "Valdera panoramica e relax nelle acque termali",
    edition: "Valdera & Benessere",
    date: "2026-05-24T09:00:00+02:00",
    dateDisplay: "24 Maggio 2026",
    day: "24",
    month: "MAG",
    location: "Casciana Terme Lari (PI)",
    venue: "Piazza Garibaldi / Terme di Casciana",
    distanceKm: 58,
    elevationGain: 780,
    price: "€28.00",
    categoryTag: "TERME & RELAX",
    highlightFeat: "Piscina Termale Monumentale",
    image: "assets/img/eventi/dji_fly_20260920_085748_0152_1789965475783_video_trim(1).jpg",
    description: "Saliscendi panoramici tra Lari e Chianni su strade bianche immerse negli uliveti. Nel pomeriggio, recupero muscolare nella monumentale piscina termale all'aperto di Casciana.",
    actionLink: "travel.html#prenota",
    actionText: "Prenota con Terme",
    trailId: "teatro-del-silenzio"
  },
  {
    id: "colline-brunelleschi",
    title: "Colline del Brunelleschi Gravel",
    shortTitle: "Colline del Brunelleschi",
    subtitle: "Monti Pisani, mulattiere sterrate e torri medievali",
    edition: "Storia & Rocca",
    date: "2026-06-07T08:30:00+02:00",
    dateDisplay: "07 Giugno 2026",
    day: "07",
    month: "GIU",
    location: "Vicopisano (PI)",
    venue: "Rocca del Brunelleschi, Vicopisano",
    distanceKm: 62,
    elevationGain: 980,
    price: "€20.00",
    categoryTag: "STORIA & ROCCA",
    highlightFeat: "Rocca Medievale & Frantoi",
    image: "assets/img/eventi/dji_fly_20260920_085748_0152_1789965475783_video_trim(1).jpg",
    description: "Partenza all'ombra della fortificazione brunelleschiana del 1400. Tracciato vigoroso sui versanti meridionali del Monte Serra tra mulattiere sterrate e frantoi storici.",
    actionLink: "travel.html#prenota",
    actionText: "Info & Prenota",
    trailId: "il-ganzo-64k"
  },
  {
    id: "wine-sunset-terricciola",
    title: "Wine & Sunset Ride Terricciola",
    shortTitle: "Wine & Sunset Ride",
    subtitle: "Solstizio d'estate e calici al Podere La Chiesa",
    edition: "Città del Vino",
    date: "2026-06-20T17:30:00+02:00",
    dateDisplay: "20 Giugno 2026",
    day: "20",
    month: "GIU",
    location: "Terricciola (PI)",
    venue: "Podere La Chiesa, Terricciola",
    distanceKm: 46,
    elevationGain: 580,
    price: "€22.00",
    categoryTag: "SOLSTIZIO & VINO",
    highlightFeat: "Degustazione Chianti DOCG",
    image: "assets/img/eventi/dji_fly_20260920_085748_0152_1789965475783_video_trim(1).jpg",
    description: "Uscita al crepuscolo tra i filari dorati del Chianti Pisano. Tappa conclusiva con calici di Sangiovese biologico, formaggi pecorini e musica dal vivo all'anfiteatro naturale.",
    actionLink: "travel.html#prenota",
    actionText: "Prenota Calice",
    trailId: "chianti-pisano-vigneti"
  },
  {
    id: "ganza-night-gravel",
    title: "Ganza Night Gravel sotto le Stelle",
    shortTitle: "Ganza Night Gravel",
    subtitle: "La leggendaria notturna estiva nel silenzio della notte",
    edition: "Notturna Estiva",
    date: "2026-07-18T20:30:00+02:00",
    dateDisplay: "18 Luglio 2026",
    day: "18",
    month: "LUG",
    location: "Peccioli (PI)",
    venue: "Piazza del Popolo, Peccioli",
    distanceKm: 42,
    elevationGain: 510,
    price: "€25.00",
    categoryTag: "NOTTURNA SOTTO LE STELLE",
    highlightFeat: "Luci Frontali & BBQ Notturno",
    image: "assets/img/eventi/dji_fly_20260920_085748_0152_1789965475783_video_trim(1).jpg",
    description: "Esperienza magica nel silenzio delle colline toscane. Si parte alle 20:30 con luci frontali accese pedalando verso Ghizzano e il Teatro del Silenzio. All'arrivo grigliata all'aperto sotto le stelle cadenti.",
    actionLink: "travel.html#prenota",
    actionText: "Prenota Notturna",
    trailId: "teatro-del-silenzio"
  },
  {
    id: "balze-etruschi-wild",
    title: "Balze & Etruschi Wild Experience",
    shortTitle: "Balze & Etruschi",
    subtitle: "Calanchi primordiali e pareti di tufo a Volterra",
    edition: "Etruscan Challenge",
    date: "2026-09-06T08:30:00+02:00",
    dateDisplay: "06 Settembre 2026",
    day: "06",
    month: "SET",
    location: "Volterra (PI)",
    venue: "Porta all'Arco, Volterra",
    distanceKm: 68,
    elevationGain: 1280,
    price: "€22.00",
    categoryTag: "TRAIL EPICO",
    highlightFeat: "Calanchi & Cinta Senese",
    image: "assets/img/eventi/dji_fly_20260920_085748_0152_1789965475783_video_trim(1).jpg",
    description: "Un tracciato rude e selvaggio a ridosso dei calanchi e delle vertiginose voragini delle Balze di Volterra. Panorami primordiali a 360°, rampe toste su ghiaia battuta e ristoro norcino.",
    actionLink: "travel.html#prenota",
    actionText: "Partecipa al Wild",
    trailId: "calanchi-balze-epic"
  },
  {
    id: "bikepacking-camp",
    title: "Bikepacking Camp & Sunset BBQ",
    shortTitle: "Bikepacking Camp",
    subtitle: "Il riscaldamento ufficiale della vigilia del raduno",
    edition: "Warm-Up Raduno 2026",
    date: "2026-09-19T15:30:00+02:00",
    dateDisplay: "19 Settembre 2026",
    day: "19",
    month: "SET",
    location: "Peccioli (PI)",
    venue: "Poggio dei Cipressi, Peccioli",
    distanceKm: 38,
    elevationGain: 460,
    price: "€25.00",
    categoryTag: "VIGILIA RADUNO",
    highlightFeat: "Camp Tende & Birra Artigianale",
    image: "assets/img/eventi/dji_fly_20260920_085748_0152_1789965475783_video_trim(1).jpg",
    description: "Il prologo del sabato prima del 7° Cicloraduno ufficiale. Giro pomeridiano di riscaldamento, workshop su setup borse da bikepacking e grigliata al tramonto per conoscersi tutti insieme.",
    actionLink: "travel.html#prenota",
    actionText: "Prenota Sabato",
    trailId: "il-ganzo-64k"
  },
  {
    id: "raduno-peccioli-2026",
    title: "7° Cicloraduno Ganza Gravel 2026",
    shortTitle: "7° Cicloraduno Nazionale",
    subtitle: "Il raduno gravel più ganzo della Toscana",
    edition: "7ª Edizione Ufficiale",
    date: "2026-09-20T08:30:00+02:00",
    dateDisplay: "20 Settembre 2026",
    day: "20",
    month: "SET",
    location: "Peccioli (PI)",
    venue: "Piazza del Popolo, Peccioli",
    distanceKm: "64 / 92",
    elevationGain: "850 / 1.450",
    price: "da €20.00",
    categoryTag: "CICLORADUNO UFFICIALE",
    highlightFeat: "Pacco Gara, Ristori Toscani & Pasta Party",
    image: "assets/img/eventi/dji_fly_20260920_085748_0152_1789965475783_video_trim(1).jpg",
    description: "Il grande evento non competitivo dell'anno su strade bianche tra Valdera e Volterrano con 2 percorsi ('Il Ganzo' da 64km e 'La Ganzata' da 92km), ristori tipici, pacco gara esclusivo e pasta party finale.",
    actionLink: "eventi.html#raduno-2026",
    actionText: "Dettagli Edizione 2026",
    trailId: "la-ganzata-92k"
  },
  {
    id: "foliage-gravel-palaia",
    title: "Foliage Gravel & Borgo Fantasma",
    shortTitle: "Foliage Gravel",
    subtitle: "I colori d'autunno nei boschi e colline dell'Alta Valdera",
    edition: "Foliage d'Autunno",
    date: "2026-10-18T09:00:00+02:00",
    dateDisplay: "18 Ottobre 2026",
    day: "18",
    month: "OTT",
    location: "Palaia / Toiano (PI)",
    venue: "Piazza della Repubblica, Palaia",
    distanceKm: 48,
    elevationGain: 720,
    price: "€18.00",
    categoryTag: "FOLIAGE D'AUTUNNO",
    highlightFeat: "Castagnaccio, Olio Novo & Vin Brulé",
    image: "assets/img/eventi/dji_fly_20260920_085748_0152_1789965475783_video_trim(1).jpg",
    description: "I boschi dell'Alta Valdera si tingono di rosso, ocra e oro. Tour tra i sentieri del suggestivo borgo disabitato di Toiano, con castagnaccio, bruschetta all'olio novo appena franto e vin brulé all'arrivo.",
    actionLink: "travel.html#prenota",
    actionText: "🚴 Iscriviti all'Evento (€18)",
    trailId: "il-ganzo-64k"
  },
  {
    id: "tartufo-francigena-gravel",
    title: "Tartufo & Francigena Gravel Tour",
    shortTitle: "Tartufo & Francigena",
    subtitle: "Gourmet ride lungo i boschi della Via Francigena",
    edition: "Gourmet & Tartufo",
    date: "2026-11-15T09:00:00+02:00",
    dateDisplay: "15 Novembre 2026",
    day: "15",
    month: "NOV",
    location: "San Miniato (PI)",
    venue: "Rocca di Federico II, San Miniato",
    distanceKm: 55,
    elevationGain: 860,
    price: "€32.00",
    categoryTag: "GOURMET & TARTUFO",
    highlightFeat: "Mostra Tartufo & Tagliolini Tipici",
    image: "assets/img/eventi/dji_fly_20260920_085748_0152_1789965475783_video_trim(1).jpg",
    description: "In occasione della celebre Mostra Nazionale del Tartufo Bianco delle Colline Sanminiatesi. Pedalata lungo i sentieri boschivi della Via Francigena con sosta degustazione di tagliolini e crostoni al tartufo fresco.",
    actionLink: "travel.html#prenota",
    actionText: "Prenota Tartufo Ride",
    trailId: "chianti-pisano-vigneti"
  },
  {
    id: "winter-solstice-olio-novo",
    title: "Winter Solstice & Olio Novo Gravel",
    shortTitle: "Winter Solstice Gravel",
    subtitle: "Pedalata di fine stagione tra uliveti e mulattiere dei Monti Pisani",
    edition: "Solstizio d'Inverno",
    date: "2026-12-13T09:30:00+01:00",
    dateDisplay: "13 Dicembre 2026",
    day: "13",
    month: "DIC",
    location: "Calci (PI)",
    venue: "Certosa Monumentale di Calci",
    distanceKm: 44,
    elevationGain: 550,
    price: "€16.00",
    categoryTag: "SOLSTIZIO D'INVERNO",
    highlightFeat: "Fettunta all'Olio Novo & Zuppa",
    image: "assets/img/eventi/dji_fly_20260920_085748_0152_1789965475783_video_trim(1).jpg",
    description: "L'ultima grande uscita comunitaria dell'anno per brindare insieme. Giro sterrato tra gli uliveti della Valgraziosa sotto la Certosa di Calci con calda zuppa toscana e caldarroste al ritorno.",
    actionLink: "travel.html#prenota",
    actionText: "Prenota Solstizio",
    trailId: "il-ganzo-64k"
  }
];

function getUpcomingEvents(now = new Date()) {
  const nowMs = now.getTime();
  return GANZA_EVENTS
    .filter(ev => new Date(ev.date).getTime() >= nowMs)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

function getPastEvents(now = new Date()) {
  const nowMs = now.getTime();
  return GANZA_EVENTS
    .filter(ev => new Date(ev.date).getTime() < nowMs)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function getNextUpcomingEvent(now = new Date()) {
  const upcoming = getUpcomingEvents(now);
  return upcoming.length > 0 ? upcoming[0] : null;
}

/**
 * Inizializza il sistema dinamico degli eventi in base alla data corrente.
 * Se un evento è passato rispetto ad oggi (es. 20 Settembre), mostra automaticamente
 * il primo evento successivo più vicino in ordine cronologico.
 */
function initDynamicEventsSystem() {
  const now = new Date();
  const nextEvent = getNextUpcomingEvent(now);

  // 1. Aggiorna la Hero Home dinamica se presente
  const heroContent = document.getElementById('homeHeroContent');
  if (heroContent) {
    renderHomeHeroEvent(nextEvent);
  } else {
    // Se siamo su un'altra pagina e c'è un countdown, inizializzalo con il prossimo evento
    if (nextEvent) {
      initCountdown(nextEvent.date);
    }
  }

  // 3. Se siamo su eventi.html, arricchisci l'interfaccia con banner prossimo evento e stati passati
  initEventiPageStatus(now, nextEvent);
}

function renderHomeHeroEvent(nextEvent) {
  const heroContent = document.getElementById('homeHeroContent');
  if (!heroContent) return;

  if (nextEvent) {
    heroContent.innerHTML = `
      <div class="hero-meta" id="heroEventMeta">
        <span class="edition" id="heroEventBadge">🔥 PROSSIMO APPUNTAMENTO</span>
        <span>•</span>
        <span id="heroEventDate">${nextEvent.dateDisplay.toUpperCase()}</span>
        <span>•</span>
        <span id="heroEventLoc">${nextEvent.location.toUpperCase()}</span>
      </div>

      <h1 class="hero-title" id="heroEventTitle">
        ${nextEvent.title} <br>
        <span class="highlight">${nextEvent.subtitle}</span>
      </h1>

      <p class="hero-desc" id="heroEventDesc">
        ${nextEvent.description}
      </p>

      <div class="hero-specs-row" id="heroEventSpecs">
        <span>📏 <strong>${nextEvent.distanceKm} km</strong></span>
        <span>⛰️ <strong>+${nextEvent.elevationGain}m d+</strong></span>
        <span>🥖 <strong>${nextEvent.highlightFeat}</strong></span>
        <span>📍 <strong>Ritrovo: ${nextEvent.venue}</strong></span>
      </div>

      <div class="hero-buttons" id="heroEventButtons">
        <a href="${nextEvent.actionLink}" class="btn btn-accent btn-lg" id="heroPrimaryBtn">
          ${nextEvent.actionText}
        </a>
        <a href="eventi.html" class="btn btn-outline-white btn-lg">
          📅 Scopri Tutti gli Eventi in Programma
        </a>
        <a href="percorsi.html" class="btn btn-outline-white btn-lg">
          🗺️ Esplora i Percorsi & GPX
        </a>
      </div>

      <div class="countdown-box" id="heroCountdownBox">
        <div class="countdown-title" id="heroCountdownTitle">
          <span>⏳ Tempo rimasto alla partenza di ${nextEvent.shortTitle || nextEvent.title}:</span>
        </div>
        <div class="countdown-timer">
          <div class="time-unit">
            <div class="time-num" id="cd-days">00</div>
            <div class="time-label">Giorni</div>
          </div>
          <div class="time-unit">
            <div class="time-num" id="cd-hours">00</div>
            <div class="time-label">Ore</div>
          </div>
          <div class="time-unit">
            <div class="time-num" id="cd-mins">00</div>
            <div class="time-label">Min</div>
          </div>
          <div class="time-unit">
            <div class="time-num" id="cd-secs">00</div>
            <div class="time-label">Sec</div>
          </div>
        </div>
      </div>

      <div class="past-edition-banner" id="heroPastEditionBanner">
        <span>🏆 <strong>7° Cicloraduno di Peccioli (20 Settembre 2026):</strong> Edizione conclusa con oltre 480 bischeri al traguardo!</span>
        <a href="eventi.html#raduno-2026" class="past-link">Rivivi l'Edizione 2026 &rarr;</a>
      </div>
    `;

    initCountdown(nextEvent.date);
  } else {
    // Caso in cui tutti gli eventi in calendario siano già trascorsi
    heroContent.innerHTML = `
      <div class="hero-meta">
        <span class="edition">CALENDARIO GANZA GRAVEL</span>
        <span>•</span>
        <span>STAGIONE IN ARRIVO</span>
        <span>•</span>
        <span>TOSCANA</span>
      </div>

      <h1 class="hero-title">
        Scopri Tutti gli Eventi in Programma <br>
        <span class="highlight">Sulle Strade Bianche del Pisano</span>
      </h1>

      <p class="hero-desc">
        La stagione delle uscite sociali e dei grandi raduni è in continuo aggiornamento. Consulta il calendario completo per scoprire i prossimi appuntamenti, unisciti alle uscite settimanali guidate di Ganza Travel o scarica le tracce GPX ufficiali per pedalare in autonomia.
      </p>

      <div class="hero-buttons">
        <a href="eventi.html" class="btn btn-accent btn-lg">
          📅 Scopri Tutti gli Eventi in Programma
        </a>
        <a href="travel.html" class="btn btn-outline-white btn-lg">
          🏕️ Esplora Ganza Travel
        </a>
        <a href="percorsi.html" class="btn btn-outline-white btn-lg">
          🗺️ Scarica Tracce GPX Gratuite
        </a>
      </div>

      <div class="hero-all-events-card">
        <div>
          <h4 style="color:#fff; margin-bottom:4px; font-size:1.15rem;">Vuoi proporre un'uscita di gruppo o ricevere gli annunci in anteprima?</h4>
          <p style="color:rgba(255,255,255,0.85); font-size:0.85rem; margin-bottom:0;">Entra nella nostra community WhatsApp o diventa socio dell'A.S.D. Ganza Gravel.</p>
        </div>
        <a href="https://wa.me/393515996770" target="_blank" rel="noopener" class="btn btn-accent btn-sm">💬 Chatta su WhatsApp</a>
      </div>
    `;
  }
}

let countdownInterval = null;

function initCountdown(targetDate) {
  let targetTime;
  if (targetDate) {
    targetTime = new Date(targetDate).getTime();
  } else {
    const nextEvent = getNextUpcomingEvent();
    targetTime = nextEvent ? new Date(nextEvent.date).getTime() : 0;
  }

  function update() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    if (!daysEl) return;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = days < 10 ? '0' + days : days;
    hoursEl.textContent = hours < 10 ? '0' + hours : hours;
    minsEl.textContent = minutes < 10 ? '0' + minutes : minutes;
    secsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
  }

  update();
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
  countdownInterval = setInterval(update, 1000);
}

function initEventiPageStatus(now, nextEvent) {
  const nextEventAlert = document.getElementById('eventiNextAlert');
  if (nextEventAlert && nextEvent) {
    nextEventAlert.innerHTML = `
      <div style="background: linear-gradient(135deg, var(--forest) 0%, var(--primary-dark) 100%); color: #fff; border-radius: var(--radius-md); padding: 22px 28px; margin-bottom: 36px; border-left: 6px solid var(--accent); box-shadow: var(--shadow-sm); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
        <div>
          <span class="badge badge-accent" style="font-size:0.75rem; margin-bottom:6px;">🔥 PROSSIMO APPUNTAMENTO IN ARRIVO</span>
          <h3 style="color:#fff; margin-bottom:4px; font-size:1.35rem;">${nextEvent.title} • ${nextEvent.dateDisplay}</h3>
          <p style="color:rgba(255,255,255,0.85); font-size:0.9rem; margin-bottom:0;">📍 ${nextEvent.location} &nbsp;|&nbsp; 📏 ${nextEvent.distanceKm} km &nbsp;|&nbsp; ⛰️ +${nextEvent.elevationGain}m &nbsp;|&nbsp; 🥖 ${nextEvent.highlightFeat}</p>
        </div>
        <div style="display:flex; gap:10px;">
          <a href="${nextEvent.actionLink}" class="btn btn-accent btn-md">${nextEvent.actionText}</a>
        </div>
      </div>
    `;
  }
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const closeBtn = document.querySelector('.close-drawer');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');

  if (!toggleBtn || !drawer || !backdrop) return;

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
}

/* ==========================================================================
   3. FAQ ACCORDION (EVENTO & STORE)
   ========================================================================== */
function initFaqAccordion() {
  const headers = document.querySelectorAll('.faq-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = header.nextElementSibling;
      const isActive = item.classList.contains('active');

      // Chiudi gli altri
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          if (other.querySelector('.faq-content')) {
            other.querySelector('.faq-content').style.maxHeight = null;
          }
        }
      });

      if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        item.classList.remove('active');
        content.style.maxHeight = null;
      }
    });
  });
}

/* ==========================================================================
   4. MODALS MANAGEMENT
   ========================================================================== */
function initModals() {
  const closeButtons = document.querySelectorAll('.modal-close-btn, .modal-overlay');

  closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.target === btn || btn.classList.contains('modal-close-btn')) {
        document.querySelectorAll('.modal-overlay').forEach(modal => {
          modal.classList.remove('open');
        });
        document.body.style.overflow = '';
      }
    });
  });

  // Blocca click propagation all'interno del modal container
  document.querySelectorAll('.modal-container').forEach(container => {
    container.addEventListener('click', (e) => e.stopPropagation());
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   5. GPX LEAD GENERATION & DOWNLOAD (ISPIRAZIONE GHIAIA EXPLORERS)
   ========================================================================== */
let activeTrailForDownload = null;

function requestGpxDownload(trailId) {
  activeTrailForDownload = trailId;
  const trail = GANZA_TRAILS.find(t => t.id === trailId);
  const titleEl = document.getElementById('modalTrailTitle');
  if (titleEl && trail) {
    titleEl.textContent = trail.title;
  }
  openModal('gpxModal');
}

function initGpxLeadForm() {
  const form = document.getElementById('gpxLeadForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('gpxUserName').value.trim();
    const email = document.getElementById('gpxUserEmail').value.trim();

    if (!name || !email) {
      showToast('Per favore compila tutti i campi obbligatori', 'danger');
      return;
    }

    // Salva nel mock local storage per la community
    const subscribers = JSON.parse(localStorage.getItem('ganza_riders') || '[]');
    subscribers.push({ name, email, date: new Date().toISOString(), trail: activeTrailForDownload });
    localStorage.setItem('ganza_riders', JSON.stringify(subscribers));

    closeModal('gpxModal');

    // Avvia il download immediato del file GPX reale!
    if (activeTrailForDownload) {
      downloadTrailGPX(activeTrailForDownload);
      showToast(`🚴 Grazie ${name}! Traccia GPX scaricata con successo. Buona pedalata!`);
    }

    form.reset();
  });
}

/* ==========================================================================
   6. NEWSLETTER & LEAD MAGNET
   ========================================================================== */
function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        showToast(`🎉 Iscrizione confermata per ${emailInput.value}! Ti abbiamo inviato il coupon GANZA10.`);
        emailInput.value = '';
      }
    });
  });
}

/* ==========================================================================
   7. TOAST NOTIFICATIONS
   ========================================================================== */
function showToast(message, type = 'accent') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span style="font-size: 1.2rem;">🚴</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

/* ==========================================================================
   8. HELPER CATENE DI DIFFICOLTÀ BICI (1-5 MAGLIE)
   ========================================================================== */
function renderChainRating(level = 1, max = 5) {
  let chainsHTML = '';
  for (let i = 1; i <= max; i++) {
    const activeClass = i <= level ? 'active' : '';
    chainsHTML += `
      <svg class="chain-icon ${activeClass}" viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 2a5 5 0 0 0-5 5 5 5 0 0 0 5 5h10a5 5 0 0 0 5-5 5 5 0 0 0-5-5H7zm0 2h10a3 3 0 0 1 3 3 3 3 0 0 1-3 3H7A3 3 0 0 1 4 7a3 3 0 0 1 3-3z"/>
      </svg>
    `;
  }
  return `<div class="chain-rating" title="Difficoltà: ${level} su ${max}">${chainsHTML}</div>`;
}

/* ==========================================================================
   9. GANZA TRAVEL - PRENOTAZIONI TOUR & CONTATTO
   ========================================================================== */
function initTravelBookingForm() {
  const form = document.getElementById('travelBookingForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('travelName') ? document.getElementById('travelName').value.trim() : '';
    const email = document.getElementById('travelEmail') ? document.getElementById('travelEmail').value.trim() : '';
    const phone = document.getElementById('travelPhone') ? document.getElementById('travelPhone').value.trim() : '';
    const experience = document.getElementById('travelExperience') ? document.getElementById('travelExperience').value : '';
    const riders = document.getElementById('travelRiders') ? document.getElementById('travelRiders').value : '1';
    const date = document.getElementById('travelDate') ? document.getElementById('travelDate').value : '';
    const notes = document.getElementById('travelNotes') ? document.getElementById('travelNotes').value.trim() : '';

    if (!name || !email) {
      showToast('Per favore compila almeno Nome ed Email per essere ricontattato.', 'danger');
      return;
    }

    const inquiries = JSON.parse(localStorage.getItem('ganza_travel_inquiries') || '[]');
    inquiries.push({
      id: 'GT-' + Date.now(),
      name,
      email,
      phone,
      experience,
      riders,
      date,
      notes,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('ganza_travel_inquiries', JSON.stringify(inquiries));

    showToast(`🎉 Grazie ${name}! La tua richiesta per "${experience || 'Esperienza Gravel'}" è stata inviata. Ti contatteremo entro 24h!`);
    form.reset();
  });
}

/* ==========================================================================
   10. SISTEMA ACCOUNT, LOGIN & SEZIONE SOCIO A.S.D. GANZA GRAVEL
   ========================================================================== */
const DEFAULT_USER_DATA = {
  isLoggedIn: true, // Attivo di default per permettere l'esplorazione immediata del profilo
  email: "mario.ganzo@email.it",
  password: "Ganza2026!",
  name: "Mario Rossi",
  nickname: "Il Cinghiale della Valdera",
  city: "Pontedera (PI)",
  birthDate: "1988-06-15",
  fiscalCode: "RSSMRA88H15G702W",
  phone: "351 5996770",
  jerseySize: "L",
  role: "Gravel Master & Forchetta d'Oro 🥇",
  bike: "3T Exploro Ultra • SRAM Rival AXS 1x12",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  stats: {
    km: 1420,
    elevation: 18450,
    rides: 24,
    crostate: 14
  },
  events: [
    {
      title: "7° Cicloraduno Ganza Gravel 2026",
      date: "20 Settembre 2026",
      location: "Peccioli (PI)",
      bib: "142",
      track: "La Ganzata (92 km)",
      badge: "CONFERMATO"
    },
    {
      title: "Thermal Gravel & Spa Recovery",
      date: "24 Maggio 2026",
      location: "Casciana Terme Lari (PI)",
      bib: "088",
      track: "Anello Termale (58 km)",
      badge: "CONFERMATO"
    }
  ],
  membership: {
    isMember: false,
    cardId: null,
    type: null,
    price: null,
    validUntil: "31/12/2026",
    activatedAt: null
  }
};

function getGanzaUser() {
  const saved = localStorage.getItem('ganza_user');
  if (!saved) {
    localStorage.setItem('ganza_user', JSON.stringify(DEFAULT_USER_DATA));
    return DEFAULT_USER_DATA;
  }
  try {
    return JSON.parse(saved);
  } catch (e) {
    return DEFAULT_USER_DATA;
  }
}

function saveGanzaUser(user) {
  localStorage.setItem('ganza_user', JSON.stringify(user));
  updateAccountHeaderUI();
}

function updateAccountHeaderUI() {
  const user = getGanzaUser();
  const accountBtns = document.querySelectorAll('.account-btn');
  accountBtns.forEach(btn => {
    if (user && user.isLoggedIn) {
      btn.classList.add('logged-in');
      btn.title = `Profilo di ${user.name} (${user.membership.isMember ? 'Socio A.S.D.' : 'Utente'})`;
      const dot = btn.querySelector('.account-dot');
      if (dot) dot.style.display = 'block';
    } else {
      btn.classList.remove('logged-in');
      btn.title = "Accedi all'Account Ganza";
      const dot = btn.querySelector('.account-dot');
      if (dot) dot.style.display = 'none';
    }
  });

  const mobileLink = document.getElementById('mobileAccountLink');
  if (mobileLink) {
    if (user && user.isLoggedIn) {
      mobileLink.innerHTML = `👤 Profilo: ${user.name} ${user.membership.isMember ? '<span class="badge badge-primary" style="font-size:0.65rem; margin-left:6px;">SOCIO</span>' : ''}`;
      mobileLink.href = 'profilo.html';
      mobileLink.onclick = null;
    } else {
      mobileLink.innerHTML = '👤 Area Personale (Accedi)';
      mobileLink.href = '#';
      mobileLink.onclick = (e) => { e.preventDefault(); openAuthModal(); };
    }
  }
}

function handleAccountBtnClick() {
  const user = getGanzaUser();
  if (user && user.isLoggedIn) {
    window.location.href = 'profilo.html';
  } else {
    openAuthModal();
  }
}

function openAuthModal() {
  openModal('authModal');
}

function fillDemoCredentials() {
  const emailInput = document.getElementById('authEmail');
  const passwordInput = document.getElementById('authPassword');
  if (emailInput && passwordInput) {
    emailInput.value = "mario.ganzo@email.it";
    passwordInput.value = "Ganza2026!";
    showToast("⚡ Credenziali demo inserite! Clicca su 'Entra' per accedere.", "accent");
  }
}

function initAuthSystem() {
  updateAccountHeaderUI();

  // Gestione Form Login
  const loginForm = document.getElementById('authLoginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('authEmail') ? document.getElementById('authEmail').value.trim() : '';
      const pass = document.getElementById('authPassword') ? document.getElementById('authPassword').value : '';

      if (!email || !pass) {
        showToast('Inserisci email e password per accedere.', 'danger');
        return;
      }

      const user = getGanzaUser();
      user.isLoggedIn = true;
      user.email = email;
      saveGanzaUser(user);

      showToast(`🚴 Bentornato in sella, ${user.name}! Accesso effettuato.`, 'success');
      closeModal('authModal');

      setTimeout(() => {
        window.location.href = 'profilo.html';
      }, 400);
    });
  }

  // Gestione Pagina Profilo
  if (document.body && document.body.getAttribute('data-page') === 'profilo') {
    renderProfilePage();
  }
}

function logoutUser() {
  const user = getGanzaUser();
  user.isLoggedIn = false;
  saveGanzaUser(user);
  showToast("Arrivederci! A presto sulle strade bianche.", "accent");
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 400);
}

function renderProfilePage() {
  const user = getGanzaUser();

  // Riempi elementi di testo profilo
  const nameEl = document.getElementById('profileUserName');
  const nickEl = document.getElementById('profileUserNick');
  const cityEl = document.getElementById('profileUserCity');
  const emailEl = document.getElementById('profileUserEmail');
  const bikeEl = document.getElementById('profileUserBike');

  if (nameEl) nameEl.textContent = user.name;
  if (nickEl) nickEl.textContent = user.nickname;
  if (cityEl) cityEl.textContent = `📍 ${user.city}`;
  if (emailEl) emailEl.textContent = user.email;
  if (bikeEl) bikeEl.textContent = user.bike;

  // Statistiche
  const statKm = document.getElementById('statKm');
  const statDplus = document.getElementById('statDplus');
  const statRides = document.getElementById('statRides');
  const statCrostate = document.getElementById('statCrostate');
  if (statKm) statKm.textContent = user.stats.km + ' km';
  if (statDplus) statDplus.textContent = '+' + user.stats.elevation + ' m';
  if (statRides) statRides.textContent = user.stats.rides;
  if (statCrostate) statCrostate.textContent = user.stats.crostate;

  renderAsdMembershipSection(user);
}

function renderAsdMembershipSection(user) {
  const container = document.getElementById('asdMembershipContainer');
  if (!container) return;

  if (user.membership && user.membership.isMember) {
    // Utente è già Socio ASD: mostra tessera attiva nel profilo
    container.innerHTML = `
      <div class="virtual-license-card">
        <div class="license-top-row">
          <div class="license-brand">
            GANZA<span style="color:var(--accent);">GRAVEL</span> A.S.D.
          </div>
          <span class="license-year-pill">TESSERA UFFICIALE 2026</span>
        </div>
        <div class="license-body-row">
          <img src="${user.avatar}" alt="${user.name}" class="license-avatar">
          <div class="license-details">
            <h3 style="font-size:1.3rem; margin-bottom:2px; color:#fff;">${user.name}</h3>
            <div class="license-code">${user.membership.cardId || 'GANZA-ASD-2026-0482'}</div>
            <div style="font-size:0.8rem; color:rgba(255,255,255,0.85); margin-top:4px;">
              Categoria: <strong>${user.membership.type || 'Socio Ciclosportivo FCI'}</strong>
            </div>
          </div>
        </div>
        <div class="license-footer-row">
          <div>Scadenza: <strong>${user.membership.validUntil || '31/12/2026'}</strong></div>
          <div style="color:#4ADE80; font-weight:700;">● TESSERA ATTIVA</div>
        </div>
      </div>

      <div style="background:var(--white); border-radius:var(--radius-md); padding:24px; border:1px solid var(--sand-border); box-shadow:var(--shadow-sm); margin-bottom:24px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
          <h4 style="margin:0; font-size:1.2rem;">🎉 I Tuoi Vantaggi di Socio Attivi</h4>
          <span class="badge badge-accent">SOCIO A.S.D.</span>
        </div>
        <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.6; margin-bottom:16px;">
          Mostra la tessera digitale dal telefono per godere di: assicurazione in sella, sconto 20% su tutti i raduni, convenzioni nelle aziende pisane partner e maglia sociale.
        </p>
        <div style="display:flex; gap:12px; flex-wrap:wrap;">
          <button type="button" class="btn btn-outline btn-sm" onclick="showToast('Tessera aggiunta al Wallet del tuo smartphone!', 'success')">📲 Aggiungi a Wallet</button>
          <button type="button" class="btn btn-outline btn-sm" onclick="showToast('Download PDF della tessera avviato!', 'success')">📄 Scarica Tessera PDF</button>
          <a href="convenzioni.html" class="btn btn-accent btn-sm">🏢 Scopri le Convenzioni</a>
        </div>
      </div>
    `;
  } else {
    // Non ancora socio nel profilo: rimando alla pagina dedicata iscriviti.html
    container.innerHTML = `
      <div style="background:var(--white); border-radius:var(--radius-md); padding:26px; border:2px dashed var(--accent); box-shadow:var(--shadow-sm); margin-bottom:30px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
        <div>
          <span class="badge" style="background:#FEF3C7; color:#92400E; margin-bottom:6px;">TESSERAMENTO 2026 APERTO</span>
          <h3 style="margin:0 0 6px; font-size:1.35rem;">Non sei ancora socio dell'A.S.D. Ganza Gravel?</h3>
          <p style="margin:0; font-size:0.92rem; color:var(--text-muted); max-width:560px;">
            Entra nella nostra associazione: pedala in sicurezza con l'assicurazione FCI/EPS, ottieni lo sconto del 20% su tutti i raduni, convenzioni nelle botteghe e la maglia sociale ufficiale.
          </p>
        </div>
        <a href="iscriviti.html" class="btn btn-accent btn-md">🚴 Iscriviti all'A.S.D. &rarr;</a>
      </div>
    `;
  }
}

function renderIscrivitiPage() {
  const container = document.getElementById('asdPageMembershipContainer');
  if (!container) return;

  const user = getGanzaUser();

  if (user.membership && user.membership.isMember) {
    container.innerHTML = `
      <div class="virtual-license-card">
        <div class="license-top-row">
          <div class="license-brand">
            GANZA<span style="color:var(--accent);">GRAVEL</span> A.S.D.
          </div>
          <span class="license-year-pill">TESSERA UFFICIALE 2026</span>
        </div>
        <div class="license-body-row">
          <img src="${user.avatar}" alt="${user.name}" class="license-avatar">
          <div class="license-details">
            <h3 style="font-size:1.3rem; margin-bottom:2px; color:#fff;">${user.name}</h3>
            <div class="license-code">${user.membership.cardId || 'GANZA-ASD-2026-0482'}</div>
            <div style="font-size:0.8rem; color:rgba(255,255,255,0.85); margin-top:4px;">
              Categoria: <strong>${user.membership.type || 'Socio Ciclosportivo FCI'}</strong>
            </div>
          </div>
        </div>
        <div class="license-footer-row">
          <div>Scadenza: <strong>${user.membership.validUntil || '31/12/2026'}</strong></div>
          <div style="color:#4ADE80; font-weight:700;">● TESSERA ATTIVA</div>
        </div>
      </div>

      <div style="background:var(--white); border-radius:var(--radius-md); padding:28px; border:1px solid var(--sand-border); box-shadow:var(--shadow-sm); text-align:center;">
        <h3 style="margin-bottom:8px;">Sei già Socio Tesserato per la Stagione 2026!</h3>
        <p style="color:var(--text-muted); font-size:0.95rem; margin-bottom:20px; max-width:600px; margin-left:auto; margin-right:auto;">
          La tua domanda di ammissione e tesseramento è attiva. Puoi esibire la tua tessera digitale in qualunque momento o accedere all'area personale.
        </p>
        <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
          <a href="profilo.html" class="btn btn-primary btn-md">👤 Vai al Tuo Profilo</a>
          <button type="button" class="btn btn-outline btn-md" onclick="showToast('Tessera aggiunta al Wallet del tuo smartphone!', 'success')">📲 Aggiungi a Wallet</button>
          <button type="button" class="btn btn-outline btn-md" onclick="showToast('Download PDF della tessera avviato!', 'success')">📄 Scarica PDF</button>
        </div>
      </div>
    `;
    return;
  }

  // Modulo dedicato di registrazione A.S.D.
  container.innerHTML = `
    <div style="background:var(--white); border-radius:var(--radius-md); padding:36px; border:2px solid var(--accent); box-shadow:var(--shadow-md);">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px; margin-bottom:28px; border-bottom:1px solid var(--sand-border); padding-bottom:20px;">
        <div>
          <span class="rustic-sticker" style="font-size:1.15rem; color:var(--primary); margin-bottom:4px; display:block;">Modulo Ufficiale di Ammissione Socio</span>
          <h2 style="font-size:1.8rem; margin-bottom:6px;">Domanda di Tesseramento A.S.D. Ganza Gravel</h2>
          <p style="font-size:0.95rem; color:var(--text-muted); margin-bottom:0;">
            Compila il modulo sottostante per tesserarti alla nostra associazione sportiva affiliata FCI.
          </p>
        </div>
        <span class="badge" style="background:#FEF3C7; color:#92400E; border:1px solid #FCD34D; font-size:0.85rem; padding:6px 12px;">ANNO SOCIALE 2026</span>
      </div>

      <form id="membershipForm" onsubmit="handleMembershipSubmit(event)">
        <!-- 1. Scelta Piano -->
        <label class="form-label" style="font-weight:700; font-size:1.1rem; margin-bottom:12px; display:block;">1. Scegli la tua tipologia di tesseramento:</label>
        <div class="membership-plans-selector">
          <div class="membership-plan-opt" onclick="selectMembershipPlan(this, 'Socio Social & Explorer', '25')">
            <span class="badge badge-accent" style="font-size:0.7rem; margin-bottom:6px;">BASE</span>
            <h4 style="font-size:1.1rem; margin-bottom:4px;">Socio Social & Explorer</h4>
            <div class="plan-price" style="font-size:1.6rem; color:var(--primary); font-weight:700;">€25 <span style="font-size:0.85rem; font-weight:normal; color:var(--text-muted);">/ anno</span></div>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-top:8px; line-height:1.5;">Tessera socio 2026, gadget esclusivo, sconti convenzioni e uscite social del sabato.</p>
          </div>

          <div class="membership-plan-opt selected" onclick="selectMembershipPlan(this, 'Socio Ciclosportivo FCI', '60')">
            <span class="badge badge-primary" style="font-size:0.7rem; margin-bottom:6px;">CONSIGLIATO 🔥</span>
            <h4 style="font-size:1.1rem; margin-bottom:4px;">Ciclosportivo FCI Completo</h4>
            <div class="plan-price" style="font-size:1.6rem; color:var(--primary); font-weight:700;">€60 <span style="font-size:0.85rem; font-weight:normal; color:var(--text-muted);">/ anno</span></div>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-top:8px; line-height:1.5;">Assicurazione FCI completa 24/7 in tutta Italia, maglia sociale ufficiale inclusa, -20% su tutti i raduni.</p>
          </div>

          <div class="membership-plan-opt" onclick="selectMembershipPlan(this, 'Socio Sostenitore Oro', '90')">
            <span class="badge" style="background:#EAB308; color:#713F12; font-size:0.7rem; margin-bottom:6px;">VIP ORO 🏆</span>
            <h4 style="font-size:1.1rem; margin-bottom:4px;">Sostenitore Oro</h4>
            <div class="plan-price" style="font-size:1.6rem; color:var(--primary); font-weight:700;">€90 <span style="font-size:0.85rem; font-weight:normal; color:var(--text-muted);">/ anno</span></div>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-top:8px; line-height:1.5;">Tutto il pacchetto FCI + 2 eventi gratuiti a scelta nel 2026 + bottiglia di Chianti delle Colline Pisane DOCG.</p>
          </div>
        </div>

        <!-- 2. Dati Anagrafici -->
        <label class="form-label" style="font-weight:700; font-size:1.1rem; margin-top:24px; margin-bottom:12px; display:block;">2. Dati anagrafici del richiedente:</label>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px;">
          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label">Nome e Cognome *</label>
            <input type="text" id="memberFullName" class="form-input" value="${user.name || ''}" placeholder="Mario Rossi" required>
          </div>
          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label">Codice Fiscale *</label>
            <input type="text" id="memberFiscalCode" class="form-input" value="${user.fiscalCode || ''}" placeholder="RSSMRA80A01G702X" required style="text-transform:uppercase;">
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px;">
          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label">Indirizzo Email *</label>
            <input type="email" id="memberEmail" class="form-input" value="${user.email || ''}" placeholder="mario.rossi@email.it" required>
          </div>
          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label">Telefono / WhatsApp *</label>
            <input type="tel" id="memberPhone" class="form-input" value="${user.phone || ''}" placeholder="+39 340 1234567" required>
          </div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; margin-bottom:16px;">
          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label">Data di Nascita *</label>
            <input type="date" id="memberBirthDate" class="form-input" value="${user.birthDate || '1990-05-15'}" required>
          </div>
          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label">Luogo di Nascita *</label>
            <input type="text" id="memberBirthPlace" class="form-input" placeholder="Pontedera (PI)" required>
          </div>
          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label">Città di Residenza *</label>
            <input type="text" id="memberCity" class="form-input" value="${user.city || 'Pontedera (PI)'}" placeholder="Peccioli (PI)" required>
          </div>
        </div>

        <!-- 3. Taglia Maglia e Bici -->
        <label class="form-label" style="font-weight:700; font-size:1.1rem; margin-top:24px; margin-bottom:12px; display:block;">3. Taglia maglia sociale & Bicicletta:</label>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px;">
          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label">Taglia Maglia Sociale Ufficiale</label>
            <select id="memberJerseySize" class="form-select">
              <option value="S">S - Slim (Torace 88-92 cm)</option>
              <option value="M">M - Regular (Torace 92-96 cm)</option>
              <option value="L" selected>L - Confortevole (Torace 96-102 cm)</option>
              <option value="XL">XL - Comoda (Torace 102-108 cm)</option>
              <option value="XXL">XXL - Extra (Torace 108+ cm)</option>
            </select>
          </div>
          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label">Tipo di Bicicletta Principale</label>
            <select id="memberBikeType" class="form-select">
              <option value="Gravel Meccanica" selected>Gravel Bike</option>
              <option value="E-Gravel (Bici a pedalata assistita)">E-Gravel (Bicicletta Elettrica)</option>
              <option value="MTB Hardtail">Mountain Bike (MTB)</option>
              <option value="Bici da Corsa / All-Road">All-Road / Endurance</option>
            </select>
          </div>
        </div>

        <!-- 4. Certificato Medico -->
        <div style="background:var(--sand-light); padding:16px 20px; border-radius:var(--radius-sm); border:1px solid var(--sand-border); margin-bottom:20px;">
          <label class="form-label" style="font-weight:700; margin-bottom:4px; display:block;">📄 Certificato Medico Sportivo</label>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:10px;">
            Puoi allegare subito la copia in PDF/JPG oppure inviarcela su WhatsApp (351 5996770) o consegnarla di persona alla prima uscita.
          </p>
          <input type="file" id="memberCertFile" class="form-input" accept=".pdf,.jpg,.jpeg,.png" style="background:#fff;">
        </div>

        <!-- 5. Consensi -->
        <div class="form-checkbox" style="margin-bottom:10px;">
          <input type="checkbox" id="memberTerms" required checked>
          <label for="memberTerms" style="font-size:0.9rem;">Dichiaro di aver preso visione e di accettare lo Statuto Sociale dell'A.S.D. Ganza Gravel, il regolamento sportivo e le delibere del Consiglio Direttivo. *</label>
        </div>
        <div class="form-checkbox" style="margin-bottom:24px;">
          <input type="checkbox" id="memberPrivacy" required checked>
          <label for="memberPrivacy" style="font-size:0.9rem;">Autorizzo il trattamento dei miei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) per fini associativi e assicurativi sportivi. *</label>
        </div>

        <button type="submit" class="btn btn-accent btn-lg" style="width:100%; font-size:1.15rem; padding:16px;">
          🚴 Invia Domanda & Attiva il Tesseramento 2026 &rarr;
        </button>
      </form>
    </div>
  `;
}

let selectedMembershipType = "Socio Ciclosportivo FCI";
let selectedMembershipPrice = "60";

function selectMembershipPlan(element, type, price) {
  document.querySelectorAll('.membership-plan-opt').forEach(opt => opt.classList.remove('selected'));
  element.classList.add('selected');
  selectedMembershipType = type;
  selectedMembershipPrice = price;
}

function handleMembershipSubmit(e) {
  e.preventDefault();
  const user = getGanzaUser();
  const fullName = document.getElementById('memberFullName') ? document.getElementById('memberFullName').value.trim() : user.name;
  const fiscalCode = document.getElementById('memberFiscalCode') ? document.getElementById('memberFiscalCode').value.trim() : user.fiscalCode;
  const email = document.getElementById('memberEmail') ? document.getElementById('memberEmail').value.trim() : user.email;
  const phone = document.getElementById('memberPhone') ? document.getElementById('memberPhone').value.trim() : user.phone;
  const city = document.getElementById('memberCity') ? document.getElementById('memberCity').value.trim() : user.city;
  const jerseySize = document.getElementById('memberJerseySize') ? document.getElementById('memberJerseySize').value : user.jerseySize;

  user.name = fullName;
  user.fiscalCode = fiscalCode;
  if (email) user.email = email;
  if (phone) user.phone = phone;
  if (city) user.city = city;
  user.jerseySize = jerseySize;

  user.membership = {
    isMember: true,
    cardId: "GANZA-ASD-2026-" + Math.floor(1000 + Math.random() * 9000),
    type: selectedMembershipType,
    price: selectedMembershipPrice,
    validUntil: "31/12/2026",
    activatedAt: new Date().toLocaleDateString('it-IT')
  };

  saveGanzaUser(user);
  showToast(`🎉 Grandissimo ${fullName}! Domanda accolta: ora sei Socio Ufficiale Ganza Gravel A.S.D. 2026!`, "success");
  
  if (document.body && document.body.getAttribute('data-page') === 'profilo') {
    renderProfilePage();
  }
  if (document.body && document.body.getAttribute('data-page') === 'iscriviti') {
    renderIscrivitiPage();
  }
}

/* ==========================================================================
   INIZIALIZZAZIONE GLOBALE APPLICAZIONE
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initDynamicEventsSystem();
  initMobileDrawer();
  initFaqAccordion();
  initModals();
  initGpxLeadForm();
  initNewsletterForm();
  initTravelBookingForm();
  if (document.body && document.body.getAttribute('data-page') === 'iscriviti') {
    renderIscrivitiPage();
  }
  if (typeof updateCartBadgeUI === 'function') {
    updateCartBadgeUI();
  }
  initAuthSystem();
});


