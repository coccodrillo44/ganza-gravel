# 🚴 Ganza Gravel — Nuovo Portale Web Ufficiale & Cycling Hub

Benvenuto nel nuovo portale web ufficiale di **Ganza Gravel**, potenziato e trasformato in un punto di riferimento completo per gli eventi, il cicloturismo e le vacanze gravel nel territorio pisano e dell'Alta Valdera.

---

## 🌟 Le Grandi Novità Implementate

### 1. Nuova Sezione: **Ganza Travel** (`travel.html`)
L'associazione si evolve in **agenzia cicloturistica ed experience hub** per chiunque visiti o si trovi nel comprensorio pisano (Pisa, Pontedera, Peccioli, Lajatico, Volterra):
- **Calendario Uscite di Gruppo Aperte a Tutti (Social Rides)**:
  - *Valdera Panorama Social Ride* (Ogni sabato mattina a Peccioli, 46 km con caffè e schiacciata).
  - *Sunset & Wine al Teatro del Silenzio* (Ogni venerdì pomeriggio a Lajatico, 35 km con tramonto e aperitivo tra le vigne).
  - *Balze di Volterra & Calanchi Wild* (Domenica, 62 km con dislivello e furgone van al seguito).
- **Pacchetti Vacanza & Weekend Bikepacking Tutto Compreso**:
  - *Weekend "Gravel & Vini della Valdera"* (2 giorni / 1 notte in agriturismo con piscina, 2 uscite guidate e degustazione in cantina).
  - *Grand Tour "Bikepacking Etrusco & Balze"* (3 giorni / 2 notti con transfer bagagli da tappa a tappa e furgone emergenza).
  - *One-Day "Bespoke VIP Tour"* con guida esclusiva privata (David o Daniele).
- **Noleggio Bici con Consegna a Domicilio**:
  - Noleggio Gravel muscolari ed E-Gravel con consegna e ritiro direttamente in hotel/agriturismo in provincia di Pisa.
  - Transfer bagagli per i cicloviaggiatori.
- **Modulo Prenotazione & Contatto WhatsApp Diretto**.

---

### 2. Sezione "Eventi" Generalizzata (`eventi.html`)
Abbiamo trasformato la pagina focalizzata sul singolo raduno in un **hub completo di tutti gli eventi** organizzati da Ganza Gravel:
- **Evento Flagship: 7° Cicloraduno 2026** (20 Settembre 2026 a Peccioli):
  - Countdown dinamico alla partenza.
  - Percorsi "Il Ganzo" (64km) e "La Ganzata" (92km) con galleria foto e GPX.
  - Tabella quote trasparente (Early bird, standard, sul posto con Endu).
  - Programma orario ufficiale (07:15, 08:30, 10:30, 13:00) e FAQ.
- **Calendario Ricco di Eventi Mock in Provincia di Pisa**:
  - *Aria di Primavera - Pontedera Ride* (10 Maggio, ritrovo Museo Piaggio Pontedera).
  - *Thermal Gravel & Spa Recovery* (24 Maggio, Casciana Terme Lari).
  - *Colline del Brunelleschi & Monte Serra* (07 Giugno, Rocca di Vicopisano).
  - *Wine & Sunset Ride Terricciola* (20 Giugno, Terricciola città del vino).
  - *Ganza Night Gravel sotto le Stelle* (18 Luglio, Peccioli e Teatro del Silenzio).
  - *Balze & Etruschi Wild Experience* (06 Settembre, Porta all'Arco Volterra).
  - *Bikepacking Camp & Sunset BBQ* (19 Settembre, vigilia del raduno a Peccioli).
  - *Foliage Gravel & Borgo Fantasma* (18 Ottobre, Palaia e Toiano disabitata).
  - *Tartufo Bianco & Francigena Tour* (15 Novembre, Rocca di San Miniato).

---

### 3. Nuova Sezione: **Aziende Convenzionate & Eventi Partner** (`convenzioni.html`)
Un network strutturato di eccellenze produttive e ricettive della provincia di Pisa, con **loghi vettoriali SVG dedicati**, sconti esclusivi per i tesserati e **un evento gravel abbinato per ciascuna azienda**:
1. **Podere La Chiesa** (Terricciola) &rarr; *Wine & Gravel Trophy - Terricciola Harvest Ride* (20 Giu) - Sconto 15% degustazioni e vino.
2. **Birrificio Valdera Hop** (Pontedera) &rarr; *Ganza Hop Ride & Craft Beer Fest* (04 Lug) - Pinta omaggio e 20% su asporto.
3. **Terme di Casciana** (Casciana Terme Lari) &rarr; *Thermal Gravel & Spa Recovery Ride* (24 Mag) - Sconto 25% su piscina balneoterapica e massaggi sportivi.
4. **Norcineria Val di Cecina** (Volterra) &rarr; *Schiacciata & Cinta Senese Social Tour* (13 Set) - Pecorino omaggio con spesa minima e 10% sui salumi sottovuoto.
5. **Cicli Valdera Pro Bike** (Pontedera / Peccioli) &rarr; *Gravel Demo Day & Tubeless Masterclass* (27 Set) - Check-up gratuito e 15% su borse e accessori.
6. **Agriturismo Poggio dei Cipressi** (Peccioli) &rarr; *Bikepacking Camp & Sunset BBQ* (19 Set) - Sconto 15% su soggiorni e lavaggio bici gratuito.

---

### 4. Scheda Dettaglio Percorso Completa con Foto HD & GPX
Quando un utente clicca su un percorso (in homepage, nella sezione eventi, in travel o nel portale percorsi):
- **Galleria Fotografica Interattiva**: scatti reali e suggestivi in alta definizione dei tratti sterrati più iconici della Toscana con carosello di miniature cliccabili.
- **Griglia Telemetrica Dettagliata**: Distanza esatta, dislivello d+, tempo stimato, % sterrato vs % asfalto (con barra grafica a contrasto), pendenza massima, pendenza media, quota min e quota max.
- **Difficoltà Tecnica a Catene** (1-5 maglie di catena).
- **Punti di Interesse (POIs) e Ristori**: icona, chilometro esatto e descrizione.
- **Consigli su Pneumatici & Attrezzatura**: tipo di bici raccomandata, sezione copertoni e dettagli logistici.
- **Grafico Altimetrico Canvas HD** renderizzato dinamicamente.
- **Azioni Dirette**: download istantaneo della traccia `.gpx` e navigatore auto Google Maps verso le coordinate del ritrovo.

---

## 📁 Architettura dei File del Progetto

```
SitoGanza/
├── index.html            # Homepage con Hero, Countdown, Teaser Travel, Anteprima Store
├── eventi.html           # Calendario Eventi Completo (7° Raduno 2026 + 9 uscite pisane + Sezione Partner)
├── convenzioni.html      # Portale Aziende Convenzionate (6 partner pisani con loghi SVG ed eventi dedicati)
├── travel.html           # Ganza Travel (Tour di gruppo, weekend bikepacking, noleggio bici)
├── percorsi.html         # Trails Hub interattivo con Mappa Leaflet, filtri, altimetrie e download GPX
├── store.html            # Ganza Store (abbigliamento Made in Tuscany disegnato da Sergio Di Ponzio)
├── chi-siamo.html        # La storia dei fondatori Sergio Di Ponzio & Daniele Pelorossi, WhatsApp 3515996770
│
├── css/
│   └── style.css         # Design system toscano (palette Chianti, terracotta, cipresso, sabbia)
│
├── js/
│   ├── app.js            # Countdown, drawer, modali, form Ganza Travel, toast notifications
│   ├── gpx-data.js       # Database 6 percorsi con foto, POIs, telemetrie e generatore GPX XML
│   ├── store.js          # Motore e-commerce, carrello locale e checkout
│   └── trails.js         # Mappa Leaflet, rendering card, motore altimetrie e modal dettaglio percorso
│
└── assets/
    └── gpx/              # File .gpx statici verificati per ciclo-computer
        ├── il-ganzo-64k-ganza-gravel.gpx
        ├── la-ganzata-92k-ganza-gravel.gpx
        ├── teatro-del-silenzio-ganza-gravel.gpx
        ├── volterra-etrusca-wild-ganza-gravel.gpx
        ├── chianti-pisano-vigneti-ganza-gravel.gpx
        └── calanchi-balze-epic-ganza-gravel.gpx
```

---

## 🚀 Come Visualizzare il Sito in Locale

Il sito è sviluppato con tecnologie web moderne e pronte all'uso senza build tools:
- **Apertura diretta**: doppio clic su `index.html` per aprirlo nel browser predefinito.
- **Server locale Python** (da PowerShell / Prompt):
  ```bash
  python -m http.server 3000
  ```
  Quindi visita `http://localhost:3000`.
