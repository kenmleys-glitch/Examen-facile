const revisionCatalog = {
  '9eme': {
    label: "📘 9ème Année Fondamentale",
    color: "#0038A8",
    subjects: {
      "📐 Mathématiques (9e)": {
        fiches: [
          { titre: "Identités Remarquables & Factorisation", contenu: "• (a + b)² = a² + 2ab + b²\n• (a - b)² = a² - 2ab + b²\n• a² - b² = (a - b)(a + b)\n• Équation produit : A × B = 0 ⇔ A = 0 ou B = 0" },
          { titre: "Pythagore, Thalès & Trigonométrie", contenu: "• Pythagore (rectangle en A) : BC² = AB² + AC²\n• Thalès : AM/AB = AN/AC = MN/BC\n• sin(α) = Opposé / Hypoténuse | cos(α) = Adjacent / Hypoténuse | tan(α) = Opposé / Adjacent" }
        ],
        flashcards: [
          { q: "Formule de l'aire d'un trapèze ?", a: "[(Grande Base + Petite Base) × Hauteur] / 2" },
          { q: "Somme des angles intérieurs d'un triangle ?", a: "180°" },
          { q: "Formule du volume d'un cylindre ?", a: "π × R² × h" }
        ]
      },
      "🌍 Sciences Sociales (9e)": {
        fiches: [
          { titre: "Dates Clés de l'Histoire d'Haïti", contenu: "• 1697 : Traité de Ryswick (division de l'île)\n• 14 août 1791 : Cérémonie du Bois-Caïman\n• 18 novembre 1803 : Bataille de Vertières\n• 1er janvier 1804 : Indépendance d'Haïti aux Gonaïves\n• 20 mai 1805 : Première Constitution impériale" },
          { titre: "Géographie d'Haïti", contenu: "• Superficie : 27 750 km² | 10 départements | 146 communes\n• Plus haut sommet : Pic la Selle (2 680 m)\n• Plus long fleuve : Fleuve Artibonite (320 km)" }
        ],
        flashcards: [
          { q: "Quel traité de 1697 a cédé Saint-Domingue à la France ?", a: "Le Traité de Ryswick" },
          { q: "Qui a proclamé l'Indépendance d'Haïti le 1er janvier 1804 ?", a: "Jean-Jacques Dessalines" }
        ]
      },
      "🔬 Sciences Expérimentales (9e)": {
        fiches: [
          { titre: "Corps Humain & Biologie", contenu: "• Le cœur possède 4 cavités (2 oreillettes, 2 ventricules).\n• La digestion transforme les aliments en nutriments absorbables dans l'intestin grêle.\n• La photosynthèse produit du glucose et du dioxygène (O₂)." },
          { titre: "Matière & Atmosphère", contenu: "• Composition de l'air : 78 % Diazote (N₂), 21 % Dioxygène (O₂), 1 % autres gaz.\n• États de l'eau : Solide (glace < 0°C), Liquide, Gazeux (vapeur > 100°C)." }
        ],
        flashcards: [
          { q: "Gaz représentant 78 % de l'atmosphère ?", a: "Le diazote (N₂)" },
          { q: "Organe qui pompe le sang dans tout le corps ?", a: "Le cœur" }
        ]
      },
      "📖 Français & Langues (9e)": {
        fiches: [
          { titre: "Grammaire & Conjugaison Essentielles", contenu: "• Après « Il faut que », « Bien que » → Subjonctif présent.\n• Accord avec « Être » : s'accorde avec le sujet.\n• Accord avec « Avoir » : s'accorde avec le COD placé avant le verbe." }
        ],
        flashcards: [
          { q: "Quel mode emploie-t-on après « Il faut que » ?", a: "Le subjonctif" },
          { q: "Traduire en anglais : « Elle va à l'école chaque matin »", a: "She goes to school every morning." }
        ]
      }
    }
  },
  'ns4': {
    label: "🎓 NS4 - Baccalauréat",
    color: "#D21034",
    subjects: {
      "📐 Mathématiques (NS4)": {
        fiches: [
          { titre: "Dérivées & Limites Usuelles", contenu: "• (xⁿ)' = n·xⁿ⁻¹ | (1/x)' = -1/x² | (√x)' = 1/(2√x)\n• (ln x)' = 1/x | (eˣ)' = eˣ\n• (sin x)' = cos x | (cos x)' = -sin x\n• Produit : (u·v)' = u'v + uv'" },
          { titre: "Nombres Complexes & Suites", contenu: "• i² = -1 | Module |a + ib| = √(a² + b²)\n• Suite arithmétique : Un = U₀ + n·r\n• Suite géométrique : Un = U₀ × qⁿ" }
        ],
        flashcards: [
          { q: "Quelle est la dérivée de f(x) = ln(x) ?", a: "f'(x) = 1 / x (pour x > 0)" },
          { q: "Que vaut i² dans l'ensemble des nombres complexes ℂ ?", a: "i² = -1" }
        ]
      },
      "⚡ Physique (NS4)": {
        fiches: [
          { titre: "Mécanique & Électricité", contenu: "• 2e Loi de Newton : F = m × a (en Newtons)\n• Énergie cinétique : Ec = ½ m·v² | Énergie potentielle : Ep = m·g·h\n• Loi d'Ohm : U = R × I | Puissance : P = U × I" }
        ],
        flashcards: [
          { q: "Unité internationale de la force ?", a: "Le Newton (N)" },
          { q: "Formule de l'énergie cinétique ?", a: "Ec = ½ m·v²" }
        ]
      },
      "🧪 Chimie (NS4)": {
        fiches: [
          { titre: "Solutions Aqueuses & Chimie Organique", contenu: "• pH = -log[H₃O⁺] | À 25°C : pH < 7 (Acide), pH = 7 (Neutre), pH > 7 (Basique)\n• Alcanes : CₙH₂ₙ₊₂ | Alcènes : CₙH₂ₙ | Alcynes : CₙH₂ₙ₋₂" }
        ],
        flashcards: [
          { q: "Formule générale des alcanes ?", a: "CₙH₂ₙ₊₂" },
          { q: "Quel est le pH d'une solution neutre à 25°C ?", a: "pH = 7" }
        ]
      },
      "🧬 Biologie & Géologie (NS4)": {
        fiches: [
          { titre: "Cellule, Génétique & Énergie", contenu: "• Mitochondrie : centrale énergétique (production d'ATP).\n• ADN : double hélice (bases A-T et C-G).\n• Mitose : division cellulaire conforme (2 cellules filles identiques)." }
        ],
        flashcards: [
          { q: "Organite produisant l'énergie (ATP) dans la cellule ?", a: "La mitochondrie" },
          { q: "Quelles sont les 4 bases azotées de l'ADN ?", a: "Adénine (A), Thymine (T), Cytosine (C), Guanine (G)" }
        ]
      },
      "📊 Économie & Histoire (SES)": {
        fiches: [
          { titre: "Indicateurs Économiques & Histoire Moderne", contenu: "• PIB : richesse totale produite dans un pays en 1 an.\n• Inflation : hausse générale et durable des prix.\n• 21 août 1934 : Désoccupation américaine d'Haïti sous Sténio Vincent." }
        ],
        flashcards: [
          { q: "Que signifie le sigle PIB ?", a: "Produit Intérieur Brut" },
          { q: "Président haïtien lors de la désoccupation en 1934 ?", a: "Sténio Vincent" }
        ]
      },
      "🧠 Philosophie & Littérature (LLA)": {
        fiches: [
          { titre: "Courants Philosophiques & Auteurs Haïtiens", contenu: "• Descartes : « Je pense, donc je suis » (Rationalisme).\n• Jean-Paul Sartre : « L'existence précède l'essence » (Existentialisme).\n• Jacques Roumain : « Gouverneurs de la Rosée » (1944).\n• Jacques Stephen Alexis : « Compère Général Soleil » (1955)." }
        ],
        flashcards: [
          { q: "Auteur de « Compère Général Soleil » (1955) ?", a: "Jacques Stephen Alexis" },
          { q: "Philosophe ayant dit : « L'existence précède l'essence » ?", a: "Jean-Paul Sartre" }
        ]
      }
    }
  }
};
const glossaireData = [
  { fr: "Hypoténuse", kr: "Kote ki pi long nan yon triyang rektang (li anfas ang 90° a)." },
  { fr: "Antécédent (Fonction)", kr: "Valè x ou antre nan yon fonksyon f(x) pou w jwenn rezilta y la." },
  { fr: "Photosynthèse", kr: "Fason plant vèt yo fabrike pwòp manje yo avèk limyè solèy la ak CO₂." },
  { fr: "Inflation", kr: "Lè pri tout pwodwi nan mache a ap monte san rete epi lajan pèdi valè." },
  { fr: "Mitose", kr: "Divizyon yon selil ki bay de lòt selil ki idantik ak premye a." },
  { fr: "Dérivée", kr: "Fason yon fonksyon ap varye (monte oswa desann) nan yon pwen presi." }
];

let curRevLevel = '9eme', curRevSub = '', fcIdx = 0, fcFlip = false;

(function initSeparatedRevisionHub() {
  const home = document.getElementById('homePage');
  const main = document.querySelector('main.container');
  if (!home || !main) return;

  const hubCard = document.createElement('div');
  hubCard.className = 'card border-orange';
  hubCard.innerHTML = `
    <h2 style="color:#FF6B00;">📚 Revizyon, Fòmilè & Oryantasyon</h2>
    <p>Chwazi nivo w pou w jwenn Fiches & Flashcards pa matyè :</p>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-top:8px;">
      <button class="btn btn-sm" style="background:#0038A8; color:white;" onclick="openRevLevel('9eme')">📘 Revizyon 9ème</button>
      <button class="btn btn-sm" style="background:#D21034; color:white;" onclick="openRevLevel('ns4')">🎓 Revizyon NS4</button>
      <button class="btn btn-sm" style="background:#10B981; color:white;" onclick="openRevGlos()">🇭🇹 Glosè FR/KR</button>
      <button class="btn btn-sm" style="background:#FF6B00; color:white;" onclick="openRevUEH()">🏛️ Konkou & UEH</button>
    </div>
  `;
  home.appendChild(hubCard);

  const hubPage = document.createElement('section');
  hubPage.id = 'revisionHubPage';
  hubPage.style.display = 'none';
  hubPage.innerHTML = `<div id="revisionHubContent"></div><button class="btn btn-outline" onclick="goHome()">⬅️ Retour à l'Accueil</button>`;
  main.appendChild(hubPage);
})();

const _origHideAllSep = hideAll;
hideAll = function() {
  _origHideAllSep();
  const hp = document.getElementById('revisionHubPage');
  if (hp) hp.style.display = 'none';
};

function openRevLevel(lvl) {
  curRevLevel = lvl;
  hideAll();
  document.getElementById('revisionHubPage').style.display = 'block';
  const data = revisionCatalog[lvl];
  const box = document.getElementById('revisionHubContent');
  const subNames = Object.keys(data.subjects);

  box.innerHTML = `
    <div class="card" style="border-left:5px solid ${data.color};">
      <h2 style="color:${data.color};">${data.label}</h2>
      <p>Chwazi yon matyè pou w wè Fiches de Révision ak Flashcards li yo apa :</p>
      <div id="revSubButtons" style="margin-top:10px;"></div>
    </div>
  `;
  const btnArea = document.getElementById('revSubButtons');
  subNames.forEach(sName => {
    const b = document.createElement('button');
    b.className = 'btn btn-blue';
    b.style.background = data.color;
    b.textContent = sName;
    b.onclick = () => openRevSubject(lvl, sName);
    btnArea.appendChild(b);
  });
}

function openRevSubject(lvl, sName) {
  curRevLevel = lvl; curRevSub = sName; fcIdx = 0; fcFlip = false;
  const subObj = revisionCatalog[lvl].subjects[sName];
  const box = document.getElementById('revisionHubContent');

  let fichesHtml = subObj.fiches.map(f => `
    <div style="background:#F8FAFC; border:1px solid #CBD5E1; border-radius:8px; padding:10px; margin-bottom:10px;">
      <strong style="color:#0038A8;">📖 ${f.titre}</strong>
      <div style="font-size:0.86rem; line-height:1.55; margin-top:6px; white-space:pre-line;">${f.contenu}</div>
    </div>
  `).join('');

  box.innerHTML = `
    <div class="card border-blue">
      <h2 style="color:#0038A8;">${sName}</h2>
      <h3 style="font-size:0.95rem; color:#D21034; margin:10px 0 6px 0;">1. Fiches de Révision & Fòmil</h3>
      ${fichesHtml}
      <h3 style="font-size:0.95rem; color:#FF6B00; margin:14px 0 6px 0;">2. Flashcards (Kat Memwa Rapid)</h3>
      <div id="subFlashBox"></div>
      <button class="btn btn-sm" style="background:#64748B; color:white; width:100%; margin-top:12px;" onclick="openRevLevel('${lvl}')">⬅️ Chwazi yon lòt matyè</button>
    </div>
  `;
  renderSubFlashcard();
}
function renderSubFlashcard() {
  const cards = revisionCatalog[curRevLevel].subjects[curRevSub].flashcards;
  const item = cards[fcIdx];
  const fBox = document.getElementById('subFlashBox');
  if (!fBox) return;
  fBox.innerHTML = `
    <div onclick="fcFlip = !fcFlip; renderSubFlashcard();" style="cursor:pointer; min-height:120px; display:flex; align-items:center; justify-content:center; text-align:center; padding:16px; border-radius:10px; background:${fcFlip ? '#D1FAE5' : '#EFF6FF'}; border:2px solid ${fcFlip ? '#10B981' : '#0038A8'}; font-weight:bold; font-size:0.95rem;">
      ${fcFlip ? "✅ " + item.a : "❓ (" + (fcIdx + 1) + "/" + cards.length + ") " + item.q}
    </div>
    <div style="display:flex; gap:8px; margin-top:8px;">
      <button class="btn btn-sm" style="background:#64748B; color:white; flex:1;" onclick="fcIdx = (fcIdx - 1 + ${cards.length}) % ${cards.length}; fcFlip = false; renderSubFlashcard();">⬅️ Anvan</button>
      <button class="btn btn-sm" style="background:#0038A8; color:white; flex:1;" onclick="fcIdx = (fcIdx + 1) % ${cards.length}; fcFlip = false; renderSubFlashcard();">Suivan ➡️</button>
    </div>
  `;
}
function openRevGlos() {
  hideAll();
  document.getElementById('revisionHubPage').style.display = 'block';
  document.getElementById('revisionHubContent').innerHTML = `
    <div class="card border-green">
      <h2>🇭🇹 Glosè Fransè / Kreyòl</h2>
      <input type="text" id="glosSearch" class="input-code" style="text-transform:none;" placeholder="Tape yon mo (ex: Hypoténuse, Mitose...)" oninput="filterGlossary()">
      <div id="glosList"></div>
    </div>
  `;
  filterGlossary();
}

function filterGlossary() {
  const q = (document.getElementById('glosSearch')?.value || '').toLowerCase();
  const listEl = document.getElementById('glosList');
  if (!listEl) return;
  listEl.innerHTML = glossaireData.filter(g => g.fr.toLowerCase().includes(q) || g.kr.toLowerCase().includes(q)).map(g => `
    <div style="padding:10px; border-bottom:1px solid #E2E8F0;">
      <strong style="color:#0038A8;">🇫🇷 ${g.fr}</strong>
      <p style="font-size:0.86rem; color:#334155; margin-top:3px;">🇭🇹 ${g.kr}</p>
    </div>
  `).join('');
}

function openRevUEH() {
  hideAll();
  document.getElementById('revisionHubPage').style.display = 'block';
  document.getElementById('revisionHubContent').innerHTML = `
    <div class="card border-orange">
      <h2 style="color:#FF6B00;">🏛️ Konkou UEH, Fakilte & Bousdetid</h2>
      <p style="font-size:0.85rem; margin-bottom:10px;">Gid konplè pou elèv NS4 k ap prepare antre nan Inivèsite Leta d Ayiti (UEH) ak bousdetid :</p>
      <div style="background:#F8FAFC; padding:10px; border-radius:8px; font-size:0.86rem; line-height:1.55;">
        <p><strong>1. Fakilte Syans (FDS) :</strong> Jeni Sivil, Elektwomekanik, Chimi, Enfòmatik (Egzamen : Matematik, Fizik, Chimi).</p>
        <p><strong>2. Medesin & Famasi (FMP) :</strong> Medesin, Famasi, Biyoloji Medikal (Egzamen : Biyoloji, Chimi, Fizik, Kilti Jeneral).</p>
        <p><strong>3. Dwa & Ekonomi (FDSE) / INAGHEI :</strong> Dwa, Ekonomi, Jesyon, Kontabilite (Egzamen : Kilti Jeneral, Matematik/Lojik, Fransè).</p>
        <p><strong>4. Agwonomi (FAMV) & Edikasyon (ENS) :</strong> Syans Agrikòl, Syans Edikasyon.</p>
        <hr style="margin:8px 0;">
        <p><strong>🌍 Dokiman pou Bousdetid :</strong> Batistè (Archives Nationales), Kat Idantifikasyon (CIN), Relve Nòt NS1-NS4 legalize nan MENFP, Diplòm Bakaloreya.</p>
      </div>
    </div>
  `;
    }
