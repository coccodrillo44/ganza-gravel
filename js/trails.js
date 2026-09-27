/**
 * GANZA GRAVEL - TRAILS & MAP ENGINE (ISPIRAZIONE GHIAIA EXPLORERS)
 * Integrazione Mappe Leaflet, grafici altimetrici, schede itinerari e dettaglio percorso con foto e GPX
 */

let mapInstance = null;
let mapLayers = [];

document.addEventListener('DOMContentLoaded', () => {
  initTrailsMap();
  const isEventPage = window.location.pathname.includes('eventi.html') || 
                      window.location.pathname.includes('evento.html') || 
                      document.body.dataset.page === 'evento' ||
                      document.body.dataset.page === 'eventi';
  renderTrailCards(isEventPage ? 'evento' : 'all');
  initTrailFilters();
  initTrailModalEvents();
});

/* ==========================================================================
   1. INIZIALIZZAZIONE MAPPA LEAFLET GENERALE
   ========================================================================== */
function initTrailsMap() {
  const mapEl = document.getElementById('leafletMap');
  if (!mapEl || typeof L === 'undefined') return;

  // Centro su Peccioli / Valdera
  mapInstance = L.map('leafletMap').setView([43.5000, 10.7400], 11);

  // Tile layer OpenStreetMap outdoor style
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors | Ganza Gravel Trails'
  }).addTo(mapInstance);

  plotTrailsOnMap(GANZA_TRAILS);
}

function plotTrailsOnMap(trails) {
  if (!mapInstance) return;

  // Rimuovi vecchi layer
  mapLayers.forEach(layer => mapInstance.removeLayer(layer));
  mapLayers = [];

  const bounds = L.latLngBounds();

  trails.forEach(trail => {
    // Traccia polyline
    const isEvento = trail.category === 'evento';
    const polyline = L.polyline(trail.trackPoints, {
      color: isEvento ? '#7B1C30' : '#D97724',
      weight: 5,
      opacity: 0.85,
      smoothFactor: 1
    }).addTo(mapInstance);

    mapLayers.push(polyline);
    polyline.getLatLngs().forEach(pt => bounds.extend(pt));

    // Marker di partenza con icona personalizzata
    const startPoint = trail.trackPoints[0];
    const marker = L.circleMarker(startPoint, {
      radius: 9,
      fillColor: isEvento ? '#7B1C30' : '#D97724',
      color: '#FFFFFF',
      weight: 2,
      opacity: 1,
      fillOpacity: 1
    }).addTo(mapInstance);

    const popupContent = `
      <div style="font-family: 'Inter', sans-serif; min-width: 220px; padding: 4px;">
        <span style="font-size:0.7rem; font-weight:700; text-transform:uppercase; color:${isEvento ? '#7B1C30' : '#D97724'}; display:block; margin-bottom:2px;">
          ${isEvento ? '🏆 Cicloraduno 2026' : '🗺️ Permanente Valdera'}
        </span>
        <h4 style="font-family: 'Oswald', sans-serif; font-size: 1.15rem; text-transform: uppercase; margin-bottom: 6px; color: #1A1F1C; line-height:1.2;">
          ${trail.title}
        </h4>
        <div style="font-size: 0.85rem; margin-bottom: 10px; color: #667069;">
          📍 <strong>${trail.location}</strong><br>
          📏 <strong>${trail.distanceKm} km</strong> &nbsp;|&nbsp; ⛰️ <strong>${trail.elevationGain}m d+</strong> &nbsp;|&nbsp; 🌾 <strong>${trail.unpavedPercent}% ghiaia</strong>
        </div>
        <div style="display:flex; gap:6px;">
          <button onclick="openTrailDetail('${trail.id}')" style="background:#22382B; color:#fff; border:none; padding:7px 12px; border-radius:4px; font-weight:700; font-size:0.75rem; text-transform:uppercase; cursor:pointer; flex:1;">
            🔍 Dettagli & Foto
          </button>
          <button onclick="requestGpxDownload('${trail.id}')" style="background:#D97724; color:#fff; border:none; padding:7px 12px; border-radius:4px; font-weight:700; font-size:0.75rem; text-transform:uppercase; cursor:pointer;">
            ⬇️ GPX
          </button>
        </div>
      </div>
    `;

    marker.bindPopup(popupContent);
    mapLayers.push(marker);
  });

  if (trails.length > 0) {
    mapInstance.fitBounds(bounds, { padding: [40, 40] });
  }
}

/* ==========================================================================
   2. RENDERING CARDS DEI PERCORSI
   ========================================================================== */
function renderTrailCards(filter = 'all') {
  const container = document.getElementById('trailsGridContainer');
  if (!container) return;

  const filteredTrails = filter === 'all' 
    ? GANZA_TRAILS 
    : GANZA_TRAILS.filter(t => t.category === filter);

  container.innerHTML = filteredTrails.map(t => {
    const googleMapsUrl = `https://www.google.com/maps?daddr=${t.startCoordinates[0]},${t.startCoordinates[1]}`;

    return `
      <div class="trail-card" data-id="${t.id}" onclick="handleCardClick(event, '${t.id}')">
        <div class="trail-card-image" onclick="openTrailDetail('${t.id}')" style="cursor:pointer;">
          <img src="${t.heroImage}" alt="${t.title}" loading="lazy">
          <span class="trail-type-badge">${t.unpavedPercent}% Ghiaia</span>
          <div class="trail-card-photos-count">
            📷 ${(t.photos || []).length} Foto & Info
          </div>
        </div>

        <div class="trail-card-body">
          <h3 class="trail-title" onclick="openTrailDetail('${t.id}')" style="cursor:pointer;">${t.title}</h3>
          <div class="trail-meta-loc">
            <span>📍 Partenza: <strong>${t.location}</strong></span>
            <a href="${googleMapsUrl}" target="_blank" onclick="event.stopPropagation()" title="Apri navigatore auto su Google Maps" style="margin-left:auto; color:var(--accent); font-weight:600; font-size:0.8rem; display:inline-flex; align-items:center; gap:4px;">
              <span>🧭 Indicazioni</span>
            </a>
          </div>

          <!-- Box Statistiche Stile Ghiaia Explorers -->
          <div class="trail-stats-box">
            <div class="trail-stat-item">
              <div class="trail-stat-val">${t.distanceKm}</div>
              <div class="trail-stat-lbl">Km</div>
            </div>
            <div class="trail-stat-item">
              <div class="trail-stat-val">${t.elevationGain}</div>
              <div class="trail-stat-lbl">d+ (m)</div>
            </div>
            <div class="trail-stat-item">
              <div class="trail-stat-val">${t.estimatedTime}</div>
              <div class="trail-stat-lbl">Tempo</div>
            </div>
            <div class="trail-stat-item">
              <div class="trail-stat-val">${t.unpavedPercent}%</div>
              <div class="trail-stat-lbl">Ghiaia</div>
            </div>
          </div>

          <!-- Difficoltà Catene Bici -->
          <div class="difficulty-widget">
            <span>Difficoltà tecnica: <strong>${t.difficultyLabel}</strong></span>
            ${renderChainRating(t.difficulty, 5)}
          </div>

          <p class="trail-desc">${t.description}</p>

          <!-- Profilo Altimetrico Canvas -->
          <div style="margin-bottom: 20px;">
            <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); margin-bottom:4px;">
              <span>Profilo Altimetrico</span>
              <span>Min ${Math.min(...t.elevationProfile.map(e=>e.ele))}m - Max ${Math.max(...t.elevationProfile.map(e=>e.ele))}m</span>
            </div>
            <canvas id="eleChart_${t.id}" height="65" style="width:100%; height:65px; background:var(--sand-bg); border-radius:var(--radius-sm);"></canvas>
          </div>

          <div class="trail-actions">
            <button type="button" class="btn btn-primary btn-sm" onclick="openTrailDetail('${t.id}')">
              🔍 Scheda, Foto & Info
            </button>
            <button type="button" class="btn btn-accent btn-sm" onclick="event.stopPropagation(); requestGpxDownload('${t.id}')" title="Scarica traccia GPX per ciclocomputer">
              ⬇️ GPX
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Disegna i canvas altimetrici
  filteredTrails.forEach(t => {
    drawElevationChart(`eleChart_${t.id}`, t.elevationProfile);
  });
}

function handleCardClick(event, trailId) {
  // Evita l'apertura se l'utente ha cliccato su link o bottoni specifici
  if (event.target.closest('a') || event.target.closest('button')) {
    return;
  }
  openTrailDetail(trailId);
}

/* ==========================================================================
   3. DETTAGLIO PERCORSO COMPLETO CON FOTO, MAPPA, TELEMETRIA & GPX
   ========================================================================== */
function openTrailDetail(trailId) {
  const trail = getTrailById(trailId);
  if (!trail) return;

  const modal = document.getElementById('trailDetailModal');
  if (!modal) {
    // Se la pagina non ha ancora il markup della modale, fallback a lead gpx
    requestGpxDownload(trailId);
    return;
  }

  // Popola Titolo e Badge
  const titleEl = document.getElementById('detailTrailTitle');
  const catBadgeEl = document.getElementById('detailTrailBadge');
  const locEl = document.getElementById('detailTrailLoc');
  
  if (titleEl) titleEl.textContent = trail.title;
  if (catBadgeEl) {
    catBadgeEl.textContent = trail.category === 'evento' ? 'Cicloraduno Ufficiale 2026' : 'Itinerario Permanente Valdera';
    catBadgeEl.className = `badge ${trail.category === 'evento' ? 'badge-primary' : 'badge-forest'}`;
  }
  if (locEl) locEl.innerHTML = `📍 Partenza: <strong>${trail.location}</strong> (${trail.startAddress || 'Toscana'})`;

  // Galleria Fotografica
  const photos = trail.photos && trail.photos.length > 0 ? trail.photos : [{ url: trail.heroImage, caption: trail.title }];
  const mainPhoto = document.getElementById('detailMainPhoto');
  const mainCaption = document.getElementById('detailMainCaption');
  const thumbsContainer = document.getElementById('detailThumbsContainer');

  if (mainPhoto) {
    mainPhoto.src = photos[0].url;
    mainPhoto.alt = photos[0].caption;
  }
  if (mainCaption) {
    mainCaption.textContent = photos[0].caption;
  }

  if (thumbsContainer) {
    thumbsContainer.innerHTML = photos.map((p, idx) => `
      <div class="trail-thumb-item ${idx === 0 ? 'active' : ''}" onclick="selectDetailPhoto('${p.url}', '${escapeHtml(p.caption)}', this)">
        <img src="${p.url}" alt="${p.caption}" loading="lazy">
      </div>
    `).join('');
  }

  // Statistiche e Telemetria
  const statsContainer = document.getElementById('detailTelemetryGrid');
  const specs = trail.technicalSpecs || {};
  if (statsContainer) {
    statsContainer.innerHTML = `
      <div class="telemetry-pill">
        <span class="telemetry-lbl">Distanza</span>
        <span class="telemetry-val">${trail.distanceKm} km</span>
      </div>
      <div class="telemetry-pill">
        <span class="telemetry-lbl">Dislivello (d+)</span>
        <span class="telemetry-val">+${trail.elevationGain} m</span>
      </div>
      <div class="telemetry-pill">
        <span class="telemetry-lbl">Tempo Stimato</span>
        <span class="telemetry-val">${trail.estimatedTime}</span>
      </div>
      <div class="telemetry-pill">
        <span class="telemetry-lbl">Fondo Sterrato</span>
        <span class="telemetry-val">${trail.unpavedPercent}%</span>
      </div>
      <div class="telemetry-pill">
        <span class="telemetry-lbl">Pendenza Max</span>
        <span class="telemetry-val">${specs.maxSlope || '14%'}</span>
      </div>
      <div class="telemetry-pill">
        <span class="telemetry-lbl">Pendenza Media</span>
        <span class="telemetry-val">${specs.avgSlope || '3.0%'}</span>
      </div>
      <div class="telemetry-pill">
        <span class="telemetry-lbl">Quota Min / Max</span>
        <span class="telemetry-val">${specs.minEle || 90}m / ${specs.maxEle || 450}m</span>
      </div>
      <div class="telemetry-pill">
        <span class="telemetry-lbl">Difficoltà Tecnica</span>
        <span class="telemetry-val" style="display:flex; align-items:center; gap:4px;">
          ${trail.difficultyLabel}
        </span>
      </div>
    `;
  }

  // Barra Superficie (% Ghiaia vs % Asfalto)
  const surfaceBar = document.getElementById('detailSurfaceBar');
  if (surfaceBar) {
    const unpaved = trail.unpavedPercent;
    const paved = trail.asphaltPercent || (100 - unpaved);
    surfaceBar.innerHTML = `
      <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:600; margin-bottom:6px;">
        <span style="color:var(--accent);">🌾 Sterrato / Ghiaia: ${unpaved}% (${specs.unpavedKm || Math.round(trail.distanceKm * unpaved / 100)} km)</span>
        <span style="color:var(--dark-soft);">🛣️ Asfalto Secondario: ${paved}% (${specs.pavedKm || Math.round(trail.distanceKm * paved / 100)} km)</span>
      </div>
      <div class="surface-bar-track">
        <div class="surface-bar-segment unpaved" style="width: ${unpaved}%;"></div>
        <div class="surface-bar-segment paved" style="width: ${paved}%;"></div>
      </div>
    `;
  }

  // Descrizione Completa & Highlights
  const descEl = document.getElementById('detailTrailDesc');
  if (descEl) descEl.textContent = trail.description;

  const highlightsEl = document.getElementById('detailTrailHighlights');
  if (highlightsEl) {
    highlightsEl.innerHTML = (trail.highlights || []).map(h => `
      <li>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${h}</span>
      </li>
    `).join('');
  }

  // Punti di Interesse (POIs) e Ristori
  const poisContainer = document.getElementById('detailPoisContainer');
  if (poisContainer) {
    poisContainer.innerHTML = (trail.pois || []).map(p => `
      <div class="poi-item">
        <div class="poi-icon-box">${p.icon}</div>
        <div class="poi-body">
          <div class="poi-header">
            <strong>${p.name}</strong>
            <span class="poi-km">Km ${p.km}</span>
          </div>
          <p class="poi-desc">${p.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Consigli Tecnici (Copertoni & Tipo Bici)
  const tipsContainer = document.getElementById('detailEquipmentTips');
  if (tipsContainer) {
    tipsContainer.innerHTML = `
      <div class="equipment-tip-box">
        <div>🚲 <strong>Bici consigliate:</strong> ${(specs.bikeTypes || ['Gravel', 'E-Gravel', 'MTB']).join(', ')}</div>
        <div>⚙️ <strong>Pneumatici raccomandati:</strong> ${specs.recommendedTires || '40mm tubeless'}</div>
        <div>🥖 <strong>Ristori & Food:</strong> ${trail.foodStops || 'Punti ristoro nei borghi lungo il percorso'}</div>
        <div>🚗 <strong>Parcheggio:</strong> ${trail.parkingInfo || 'Parcheggi liberi nei pressi della partenza'}</div>
      </div>
    `;
  }

  // Setup Bottoni Azione (Download GPX & Google Maps)
  const gpxBtn = document.getElementById('detailDownloadGpxBtn');
  if (gpxBtn) {
    gpxBtn.onclick = () => {
      closeModal('trailDetailModal');
      requestGpxDownload(trail.id);
    };
  }

  const gmapsBtn = document.getElementById('detailGoogleMapsBtn');
  if (gmapsBtn) {
    gmapsBtn.href = `https://www.google.com/maps?daddr=${trail.startCoordinates[0]},${trail.startCoordinates[1]}`;
  }

  // Disegna Grafico Altimetrico Dettagliato
  setTimeout(() => {
    drawElevationChart('detailElevationChart', trail.elevationProfile);
  }, 100);

  // Apri Modale
  openModal('trailDetailModal');
}

function selectDetailPhoto(url, caption, thumbEl) {
  const mainPhoto = document.getElementById('detailMainPhoto');
  const mainCaption = document.getElementById('detailMainCaption');
  if (mainPhoto) mainPhoto.src = url;
  if (mainCaption) mainCaption.textContent = caption;

  document.querySelectorAll('.trail-thumb-item').forEach(el => el.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function initTrailModalEvents() {
  // Chiudi cliccando fuori o con Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal('trailDetailModal');
    }
  });
}

/* ==========================================================================
   4. MOTORE GRAFICO ALTIMETRIE CON CANVAS
   ========================================================================== */
function drawElevationChart(canvasId, points) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !points || points.length === 0) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  if (rect.width === 0) return;

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const w = rect.width;
  const h = rect.height;

  const elevations = points.map(p => p.ele);
  const minEle = Math.min(...elevations);
  const maxEle = Math.max(...elevations);
  const eleSpan = (maxEle - minEle) || 1;

  ctx.clearRect(0, 0, w, h);

  // Gradient fill sotto la curva
  const gradient = ctx.createLinearGradient(0, 0, 0, h);
  gradient.addColorStop(0, 'rgba(217, 119, 36, 0.45)');
  gradient.addColorStop(1, 'rgba(217, 119, 36, 0.05)');

  ctx.beginPath();
  points.forEach((pt, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - 6 - ((pt.ele - minEle) / eleSpan) * (h - 16);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });

  // Chiudi area per fill
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Linea altimetrica superiore
  ctx.beginPath();
  points.forEach((pt, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - 6 - ((pt.ele - minEle) / eleSpan) * (h - 16);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = '#D97724';
  ctx.lineWidth = 2.5;
  ctx.stroke();
}

/* ==========================================================================
   5. FILTRI ITINERARI (EVENTO / PERMANENTI / TUTTI)
   ========================================================================== */
function initTrailFilters() {
  const pills = document.querySelectorAll('.trail-filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.dataset.filter;
      renderTrailCards(filter);

      const filtered = filter === 'all'
        ? GANZA_TRAILS
        : GANZA_TRAILS.filter(t => t.category === filter);

      plotTrailsOnMap(filtered);
    });
  });
}

// Rendi le funzioni disponibili a livello globale per gli onclick HTML
window.openTrailDetail = openTrailDetail;
window.selectDetailPhoto = selectDetailPhoto;
window.handleCardClick = handleCardClick;
