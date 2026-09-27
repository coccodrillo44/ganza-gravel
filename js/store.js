/**
 * GANZA GRAVEL - STORE ENGINE
 * Catalogo prodotti autentici, gestione carrello, taglie e checkout simulato
 */

const GANZA_PRODUCTS = [
  {
    id: "maglia-ganza-pop",
    title: "Maglia Ganza POP",
    category: "estivo",
    categoryLabel: "Abbigliamento Estivo",
    price: 53.00,
    badge: "Best Seller",
    image: "https://www.ganzagravel.it/wp-content/uploads/2022/09/x-provini-web2_modellini-247x296.jpg",
    gallery: [
      "https://www.ganzagravel.it/wp-content/uploads/2022/09/x-provini-web2_modellini-247x296.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Design eclettico e vivace per chi vuole farsi notare sulle strade bianche. Tessuto elasticizzato microforato ultraleggero ad asciugatura rapida, taglio club fit comodo per lunghe giornate in sella.",
    specs: {
      tessuto: "Poliestere microforato traspirante 115g/m²",
      cerniera: "YKK® Camlock divisibile su tutta la lunghezza",
      tasche: "3 tasche cargo posteriori rinforzate + 1 taschino zip",
      fondello: "N/A (Maglia)",
      temperatura: "18°C - 35°C"
    }
  },
  {
    id: "pantalone-ciclismo-gravel",
    title: "Pantalone Ciclismo Gravel con Tasche",
    category: "pantaloni",
    categoryLabel: "Pantaloni & Salopette",
    price: 59.00,
    badge: "Indispensabile",
    image: "https://www.ganzagravel.it/wp-content/uploads/2021/11/Pantalone-Estivo-Gravel-ciclismo-247x296.jpg",
    gallery: [
      "https://www.ganzagravel.it/wp-content/uploads/2021/11/Pantalone-Estivo-Gravel-ciclismo-247x296.jpg",
      "https://www.ganzagravel.it/wp-content/uploads/2021/11/dettaglio-fondello-Pantalone-Estivo-Gravel-247x296.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Pantaloncino bibshort gravel specifico per uscite endurance e sterrato. Dotato di 2 pratiche tasche in rete laterali sulle cosce e fondello anatomico multi-densità studiato per assorbire le vibrazioni dei terreni sconnessi.",
    specs: {
      tessuto: "Lycra Power compressione muscolare graduata",
      cerniera: "Bretelle piatte traspiranti senza cuciture",
      tasche: "2 tasche cargo laterali + 2 posteriori su fascia",
      fondello: "Fondello 4D GEL ad alta densità (120 kg/m³) fino a 7 ore",
      temperatura: "15°C - 32°C"
    }
  },
  {
    id: "maglia-tattoo-old-school",
    title: "Maglia Gravel Tattoo Old School",
    category: "estivo",
    categoryLabel: "Abbigliamento Estivo",
    price: 53.00,
    badge: "Iconica",
    image: "https://www.ganzagravel.it/wp-content/uploads/2022/04/maglia-ESTIVO-old-school-tattoo-3D-247x296.jpg",
    gallery: [
      "https://www.ganzagravel.it/wp-content/uploads/2022/04/maglia-ESTIVO-old-school-tattoo-3D-247x296.jpg"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Grafica esclusiva ispirata ai tatuaggi marinareschi e tradizionali old school rivisitati in chiave ciclistica toscana. Una maglia che esprime pura personalità e passione.",
    specs: {
      tessuto: "Traspirante Dry-Tech con protezione solare UPF 50+",
      cerniera: "YKK® a scomparsa",
      tasche: "3 tasche posteriori con piping rifrangente",
      fondello: "N/A (Maglia)",
      temperatura: "18°C - 35°C"
    }
  },
  {
    id: "gilet-ganza-windtex",
    title: "Gilet Ganza Gravel Antivento in WINDTEX",
    category: "invernale",
    categoryLabel: "Accessori e Gilet",
    price: 69.00,
    badge: "Protezione",
    image: "https://www.ganzagravel.it/wp-content/uploads/2021/11/gilet-ciclismo-gravel-antivento-antipioggia-247x296.jpg",
    gallery: [
      "https://www.ganzagravel.it/wp-content/uploads/2021/11/gilet-ciclismo-gravel-antivento-antipioggia-247x296.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Il miglior alleato per le partenze fresche all'alba e le discese ventose tra le colline toscane. Membrana frontale WINDTEX antivento e idrorepellente con schiena in rete traspirante.",
    specs: {
      tessuto: "Membrana WINDTEX idrorepellente e antivento",
      cerniera: "Doppio cursore apribile sia dall'alto che dal basso",
      tasche: "Accesso rapido alle tasche della maglia sottostante",
      fondello: "N/A (Gilet)",
      temperatura: "8°C - 20°C"
    }
  },
  {
    id: "maglia-gravel-foliage",
    title: "Maglia Gravel Foliage Manica Lunga",
    category: "invernale",
    categoryLabel: "Abbigliamento Invernale",
    price: 69.00,
    badge: "Autunno/Inverno",
    image: "https://www.ganzagravel.it/wp-content/uploads/2021/11/3D-Maglia-Gravel-Foliage-Invernale-247x296.jpg",
    gallery: [
      "https://www.ganzagravel.it/wp-content/uploads/2021/11/3D-Maglia-Gravel-Foliage-Invernale-247x296.jpg"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Maglia termica a manica lunga con interno felpato caldo e morbido. Ispirata ai colori caldi delle foglie autunnali dei boschi della Valdera.",
    specs: {
      tessuto: "Termo-felpato garzato caldo e traspirante",
      cerniera: "YKK® con patta protettiva antivento interna",
      tasche: "3 tasche elastiche + 1 zip laterale idrorepellente",
      fondello: "N/A (Maglia)",
      temperatura: "6°C - 16°C"
    }
  },
  {
    id: "maglia-gravel-sunflower",
    title: "Maglia Gravel Sunflower",
    category: "estivo",
    categoryLabel: "Abbigliamento Estivo",
    price: 53.00,
    badge: "Toscana Vibes",
    image: "https://www.ganzagravel.it/wp-content/uploads/2021/11/3D-Maglia-Gravel-Sunflower-247x296.jpg",
    gallery: [
      "https://www.ganzagravel.it/wp-content/uploads/2021/11/3D-Maglia-Gravel-Sunflower-247x296.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Ispirata ai campi sterminati di girasoli che colorano l'estate tra Peccioli, Lajatico e Volterra. Leggera, traspirante e dal look inconfondibile.",
    specs: {
      tessuto: "Microfibra FreshAir 110g",
      cerniera: "Cerniera invisibile su tutta la lunghezza",
      tasche: "3 tasche con elastico siliconato antiscivolo",
      fondello: "N/A (Maglia)",
      temperatura: "20°C - 38°C"
    }
  },
  {
    id: "maglia-cignals",
    title: "Maglia Ganza CignalS",
    category: "estivo",
    categoryLabel: "Abbigliamento Estivo",
    price: 53.00,
    badge: "Spirito Toscano",
    image: "https://www.ganzagravel.it/wp-content/uploads/2023/09/2-100x100.jpg",
    gallery: [
      "https://www.ganzagravel.it/wp-content/uploads/2023/09/2-100x100.jpg"
    ],
    sizes: ["S", "M", "L", "XL"],
    description: "Dedicata al re indiscusso della macchia toscana: il cinghiale ('Il Cignale')! Robusta, scanzonata, per chi non ha paura di impolverarsi nel bosco.",
    specs: {
      tessuto: "Tessuto antistrappo gravel resistant",
      cerniera: "YKK camlock",
      tasche: "3 tasche posteriori ad alta capienza",
      fondello: "N/A",
      temperatura: "15°C - 32°C"
    }
  },
  {
    id: "maglia-novita-lange",
    title: "Maglia Novità GANZA LANGE (Salvia / Terra)",
    category: "invernale",
    categoryLabel: "Abbigliamento Invernale",
    price: 69.00,
    badge: "Nuovo Arrivo",
    image: "https://www.ganzagravel.it/wp-content/uploads/2024/11/ganza-lange-front1-100x100.jpg",
    gallery: [
      "https://www.ganzagravel.it/wp-content/uploads/2024/11/ganza-lange-front1-100x100.jpg"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "La nuova maglia a manica lunga con finitura opaca nei toni naturali del verde salvia, terra di Siena e senape. Eleganza discreta e performance gravel.",
    specs: {
      tessuto: "Misto lana merino e poliestere tecnico termico",
      cerniera: "Zip metallizzata antiruggine",
      tasche: "3 tasche + taschino zip impermeabile",
      fondello: "N/A",
      temperatura: "8°C - 18°C"
    }
  }
];

/* ==========================================================================
   CARRELLO STATO & LOCAL STORAGE
   ========================================================================== */
let cart = JSON.parse(localStorage.getItem('ganza_cart') || '[]');
let activeDiscount = 0; // percentuale sconto
const FREE_SHIPPING_THRESHOLD = 79.00;
const SHIPPING_COST = 6.90;

function saveCart() {
  localStorage.setItem('ganza_cart', JSON.stringify(cart));
  updateCartBadgeUI();
  renderCartDrawer();
}

function updateCartBadgeUI() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = count;
  });
}

function addToCart(productId, size = 'L') {
  const product = GANZA_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === productId && item.size === size);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      size: size,
      quantity: 1
    });
  }

  saveCart();
  showToast(`🛒 "${product.title}" (Tg. ${size}) aggiunto al carrello!`);
  openCartDrawer();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
}

function updateQuantity(index, delta) {
  if (cart[index]) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
  }
}

/* ==========================================================================
   CART DRAWER UI
   ========================================================================== */
function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCartDrawer();
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function renderCartDrawer() {
  const itemsContainer = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const shippingEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartTotal');
  const shippingMsgEl = document.getElementById('freeShippingBar');

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 16px auto; opacity: 0.35;">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <h4>Il carrello è vuoto</h4>
        <p>I tuoi completini "ganzi" per pedalare in Toscana ti aspettano nello store.</p>
        <a href="store.html" class="btn btn-primary btn-sm" style="margin-top: 14px;">Vai allo Store</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '€0.00';
    if (totalEl) totalEl.textContent = '€0.00';
    return;
  }

  let subtotal = 0;
  itemsContainer.innerHTML = cart.map((item, index) => {
    subtotal += item.price * item.quantity;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-meta">Taglia: <strong>${item.size}</strong></div>
          <div class="cart-item-price">€${(item.price * item.quantity).toFixed(2)}</div>
          <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
            <button onclick="updateQuantity(${index}, -1)" style="width:24px; height:24px; border:1px solid #ddd; border-radius:4px;">-</button>
            <span style="font-weight:600; min-width:18px; text-align:center;">${item.quantity}</span>
            <button onclick="updateQuantity(${index}, 1)" style="width:24px; height:24px; border:1px solid #ddd; border-radius:4px;">+</button>
            <button onclick="removeFromCart(${index})" style="color:#B3261E; font-size:0.8rem; margin-left:auto;">Rimuovi</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Calcolo spedizione
  let shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  if (shippingMsgEl) {
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      shippingMsgEl.innerHTML = `<span style="color:var(--success); font-weight:700;">🚚 Spedizione Gratuita sbloccata!</span>`;
    } else {
      const diff = (FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2);
      shippingMsgEl.innerHTML = `Mancano <strong>€${diff}</strong> per la <strong>Spedizione Gratuita</strong>`;
    }
  }

  let discountAmount = (subtotal * activeDiscount) / 100;
  let total = subtotal - discountAmount + shippingCost;

  if (subtotalEl) subtotalEl.textContent = `€${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = shippingCost === 0 ? 'Gratis' : `€${shippingCost.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `€${total.toFixed(2)}`;
}

/* ==========================================================================
   APPLICAZIONE CODICE SCONTO
   ========================================================================== */
function applyCouponCode() {
  const input = document.getElementById('couponInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'GANZA10') {
    activeDiscount = 10;
    showToast('🎉 Codice GANZA10 applicato: 10% di sconto sul totale!');
  } else if (code === 'RADUNO26') {
    activeDiscount = 15;
    showToast('🚴 Codice RADUNO26 applicato: 15% di sconto riservato agli iscritti!');
  } else {
    showToast('Codice promozionale non valido.', 'danger');
  }
  renderCartDrawer();
}

/* ==========================================================================
   SIMULAZIONE CHECKOUT
   ========================================================================== */
function proceedToCheckout() {
  if (cart.length === 0) {
    showToast('Il carrello è vuoto!', 'danger');
    return;
  }
  closeCartDrawer();
  openModal('checkoutModal');
}

function completeCheckoutOrder(e) {
  e.preventDefault();
  const name = document.getElementById('orderName').value;
  const email = document.getElementById('orderEmail').value;
  
  cart = [];
  saveCart();
  closeModal('checkoutModal');
  showToast(`🎉 Grazie ${name}! Il tuo ordine è stato simulato con successo. Riceverai i dettagli a ${email}.`, 'accent');
}

/* ==========================================================================
   DETTAGLIO RAPIDO PRODOTTO (MODAL ANTEPRIMA)
   ========================================================================== */
function openQuickView(productId) {
  const p = GANZA_PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const content = document.getElementById('quickViewContent');
  if (!content) return;

  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
      <div style="background:#F1ECE3; border-radius:8px; overflow:hidden;">
        <img src="${p.image}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover;">
      </div>
      <div>
        <span class="badge badge-accent" style="margin-bottom:8px;">${p.categoryLabel}</span>
        <h2 style="font-size:1.6rem; margin-bottom:12px;">${p.title}</h2>
        <div style="font-family:var(--font-heading); font-size:1.8rem; font-weight:700; color:var(--primary); margin-bottom:16px;">
          €${p.price.toFixed(2)}
        </div>
        <p style="font-size:0.95rem; color:var(--text-muted); margin-bottom:20px;">${p.description}</p>
        
        <h5 style="font-size:0.85rem; text-transform:uppercase; margin-bottom:8px;">Seleziona Taglia:</h5>
        <div class="size-selector" style="margin-bottom:24px;">
          ${p.sizes.map((s, i) => `<button type="button" class="size-btn ${i === 2 ? 'selected' : ''}" data-size="${s}">${s}</button>`).join('')}
        </div>

        <button type="button" class="btn btn-primary btn-lg" style="width:100%;" onclick="addToCart('${p.id}', document.querySelector('.size-btn.selected')?.dataset.size || 'L')">
          Aggiungi al Carrello
        </button>

        <div style="margin-top:24px; padding-top:16px; border-top:1px solid #ddd; font-size:0.8rem; color:var(--text-muted); line-height:1.6;">
          <div><strong>Tessuto:</strong> ${p.specs.tessuto}</div>
          <div><strong>Cerniera:</strong> ${p.specs.cerniera}</div>
          <div><strong>Tasche:</strong> ${p.specs.tasche}</div>
          ${p.specs.fondello !== 'N/A' ? `<div><strong>Fondello:</strong> ${p.specs.fondello}</div>` : ''}
          <div><strong>Range Termico:</strong> ${p.specs.temperatura}</div>
        </div>
      </div>
    </div>
  `;

  // Bind size picker buttons in modal
  content.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      content.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  openModal('quickViewModal');
}
