/* === BLÒK 1/4 : KATALÒG 9ÈME AF ANRICHI === */
const revisionCatalog = {
  '9eme': {
    label: "📘 9ème Année Fondamentale",
    color: "#0038A8",
    subjects: {
      "📐 Mathématiques (9e)": {
        fiches: [
          { titre: "1. Identités Remarquables & Factorisation", contenu: "• (a + b)² = a² + 2ab + b²\n• (a - b)² = a² - 2ab + b²\n• a² - b² = (a - b)(a + b)\n• Équation produit : A × B = 0 ⇔ A = 0 ou B = 0\n• Inéquation : si on multiplie ou divise par un nombre négatif, le sens change (< devient >)." },
          { titre: "2. Pythagore, Thalès & Trigonométrie", contenu: "• Pythagore (rectangle en A) : BC² = AB² + AC²\n• Thalès : AM/AB = AN/AC = MN/BC (si (MN) // (BC))\n• sin(α) = Opposé / Hypoténuse\n• cos(α) = Adjacent / Hypoténuse\n• tan(α) = Opposé / Adjacent | sin²(α) + cos²(α) = 1" },
          { titre: "3. Fonctions Affines & Systèmes d'Équations", contenu: "• Fonction linéaire : f(x) = a·x (passe par l'origine O)\n• Fonction affine : f(x) = a·x + b (a = coefficient directeur, b = ordonnée à l'origine)\n• Système à 2 inconnues : résolution par substitution ou combinaison linéaire." },
          { titre: "4. Aires, Volumes & Statistiques", contenu: "• Aire triangle = (Base × Hauteur)/2 | Aire disque = π·R²\n• Volume cylindre = π·R²·h | Volume cône = (π·R²·h)/3 | Volume sphère = (4/3)·π·R³\n• Moyenne = Somme des valeurs / Effectif total | Médiane = valeur qui partage la série en 2 parts égales." }
        ],
        flashcards: [
          { q: "Formule de l'aire d'un trapèze ?", a: "[(Grande Base + Petite Base) × Hauteur] / 2" },
          { q: "Somme des angles intérieurs d'un triangle ?", a: "180°" },
          { q: "Formule du volume d'un cylindre ?", a: "π × R² × h" },
          { q: "Développer (a - b)² ?", a: "a² - 2ab + b²" },
          { q: "Factoriser a² - b² ?", a: "(a - b)(a + b)" },
          { q: "Dans un triangle rectangle, que vaut sin²(α) + cos²(α) ?", a: "1" },
          { q: "Formule du périmètre d'un cercle de rayon R ?", a: "2 × π × R (ou π × D)" },
          { q: "Formule du volume d'un cône de révolution ?", a: "(π × R² × h) / 3" },
          { q: "Que devient le sens d'une inéquation si on divise par -2 ?", a: "Il change de sens (< devient >)" },
          { q: "Quelle est la forme générale d'une fonction affine ?", a: "f(x) = a·x + b" }
        ]
      },
      "🌍 Sciences Sociales (9e)": {
        fiches: [
          { titre: "1. Période Précolombienne & Coloniale", contenu: "• Ayiti (Quisqueya/Bohio) peuplée par les Taïnos (5 caciquats : Marién, Maguá, Maguana, Xaragua, Higüey).\n• 5 décembre 1492 : Arrivée de Christophe Colomb au Môle Saint-Nicolas.\n• 1697 : Traité de Ryswick (l'Espagne cède la partie occidentale à la France : Saint-Domingue)." },
          { titre: "2. Révolution Haïtienne & Indépendance", contenu: "• 14 août 1791 : Cérémonie du Bois-Caïman (Boukman, Cécile Fatiman).\n• 29 août 1793 : Proclamation de l'abolition de l'esclavage par Sonthonax.\n• 18 novembre 1803 : Bataille de Vertières (victoire décisive de Capois-la-Mort et Dessalines).\n• 1er janvier 1804 : Proclamation de l'Indépendance aux Gonaïves par Jean-Jacques Dessalines." },
          { titre: "3. Période Nationale & Occupation Américaine", contenu: "• 20 mai 1805 : Première Constitution impériale d'Haïti.\n• 17 octobre 1806 : Assassinat de Dessalines au Pont-Rouge (scission Nord/Sud : Christophe et Pétion).\n• 28 juillet 1915 - 21 août 1934 : Occupation américaine d'Haïti (résistance de Charlemagne Péralte)." },
          { titre: "4. Géographie Physique & Humaine d'Haïti", contenu: "• Superficie : 27 750 km² | 10 départements | 42 arrondissements | 146 communes.\n• Point culminant : Pic la Selle (2 680 m, massif de la Selle).\n• Plus long fleuve : Artibonite (320 km) | Plus grand lac : Étang Saumâtre (Lac Azuéi)." }
        ],
        flashcards: [
          { q: "Quel traité de 1697 a cédé Saint-Domingue à la France ?", a: "Le Traité de Ryswick" },
          { q: "Qui a proclamé l'Indépendance d'Haïti le 1er janvier 1804 ?", a: "Jean-Jacques Dessalines" },
          { q: "Date exacte de la bataille de Vertières ?", a: "18 novembre 1803" },
          { q: "Qui a dirigé la cérémonie du Bois-Caïman le 14 août 1791 ?", a: "Dutty Boukman et Cécile Fatiman" },
          { q: "Quelle est la superficie totale de la République d'Haïti ?", a: "27 750 km²" },
          { q: "Quel est le plus haut sommet d'Haïti et son altitude ?", a: "Le Pic la Selle (2 680 m)" },
          { q: "Quel est le plus long fleuve d'Haïti ?", a: "Le fleuve Artibonite (320 km)" },
          { q: "Combien de départements géographiques compte Haïti ?", a: "10 départements" },
          { q: "En quelle année a débuté l'occupation américaine d'Haïti ?", a: "En 1915 (28 juillet 1915)" },
          { q: "Qui est le leader des Cacos résistant à l'occupation américaine ?", a: "Charlemagne Péralte" }
        ]
      },
      "🔬 Sciences Expérimentales (9e)": {
        fiches: [
          { titre: "1. Corps Humain : Circulation & Digestion", contenu: "• Cœur : 4 cavités (2 oreillettes, 2 ventricules). Artères (partent du cœur), Veines (reviennent au cœur).\n• Sang : globules rouges (transport O₂), globules blancs (défense), plaquettes (coagulation), plasma.\n• Digestion : bouche → œsophage → estomac → intestin grêle (absorption des nutriments)." },
          { titre: "2. Système Nerveux & Reproduction", contenu: "• Système nerveux central : encéphale (cerveau, cervelet, bulbe rachidien) + moelle épinière.\n• Fécondation : union d'un spermatozoïde et d'un ovule formant la cellule-œuf (zygote)." },
          { titre: "3. Écologie, Plantes & Photosynthèse", contenu: "• Photosynthèse : Eau + CO₂ + Lumière → Glucose + Dioxygène (O₂) grâce à la chlorophylle.\n• Chaîne alimentaire : Producteurs (plantes) → Consommateurs → Décomposeurs." },
          { titre: "4. Matière, Air & Électricité de Base", contenu: "• Air : 78 % Diazote (N₂), 21 % Dioxygène (O₂), 1 % autres gaz (CO₂, argon, vapeur d'eau).\n• Circuit électrique : générateur, récepteur, fils conducteurs, interrupteur. Loi d'Ohm : U = R × I." }
        ],
        flashcards: [
          { q: "Gaz représentant 78 % de l'atmosphère ?", a: "Le diazote (N₂)" },
          { q: "Organe qui pompe le sang dans tout le corps ?", a: "Le cœur" },
          { q: "Quel est le rôle des globules blancs dans le sang ?", a: "Défendre l'organisme contre les microbes et infections" },
          { q: "Où se fait l'absorption des nutriments dans le tube digestif ?", a: "Dans l'intestin grêle" },
          { q: "Quel gaz les plantes vertes rejettent-elles lors de la photosynthèse ?", a: "Le dioxygène (O₂)" },
          { q: "Quelle est la formule de la loi d'Ohm ?", a: "U = R × I" },
          { q: "À quelle température l'eau pure bout-elle sous pression normale ?", a: "100 °C" },
          { q: "Comment appelle-t-on l'union d'un ovule et d'un spermatozoïde ?", a: "La fécondation" },
          { q: "Quel pigment vert permet la photosynthèse chez les plantes ?", a: "La chlorophylle" },
          { q: "Quelle est l'unité de mesure de l'intensité du courant électrique ?", a: "L'Ampère (A)" }
        ]
      },
      "📖 Français & Langues (9e)": {
        fiches: [
          { titre: "1. Grammaire & Nature des Mots", contenu: "• Classes variables : nom, déterminant, adjectif, pronom, verbe.\n• Classes invariables : adverbe, préposition, conjonction, interjection.\n• Fonctions : Sujet, COD (qui ? quoi ?), COI (à qui ? de quoi ?), Compléments circonstanciels." },
          { titre: "2. Conjugaison & Temps Verbaux", contenu: "• Subjonctif présent : obligatoire après « Il faut que », « Bien que », « Pour que ».\n• Conditionnel présent : radical du futur + terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient)." },
          { titre: "3. Orthographe & Accords Essentiels", contenu: "• Participe passé avec « Être » : s'accorde en genre et en nombre avec le sujet.\n• Participe passé avec « Avoir » : s'accorde avec le COD uniquement si le COD est placé AVANT le verbe." },
          { titre: "4. Figures de Style & Anglais de Base", contenu: "• Comparaison (avec outil : comme, tel) vs Métaphore (sans outil).\n• Anglais : Present Simple (he/she/it + -s), Past Simple (-ed ou verbes irréguliers)." }
        ],
        flashcards: [
          { q: "Quel mode emploie-t-on après « Il faut que » ?", a: "Le subjonctif" },
          { q: "Traduire en anglais : « Elle va à l'école chaque matin »", a: "She goes to school every morning." },
          { q: "Avec quoi s'accorde le participe passé employé avec « Être » ?", a: "Avec le sujet du verbe" },
          { q: "Quand le participe passé avec « Avoir » s'accorde-t-il ?", a: "Quand le COD est placé avant le verbe" },
          { q: "Quelle figure de style compare deux éléments sans outil de comparaison ?", a: "La métaphore" },
          { q: "Quel est le participe passé du verbe « résoudre » ?", a: "Résolu" },
          { q: "Comment forme-t-on le conditionnel présent ?", a: "Radical du futur + terminaisons de l'imparfait" },
          { q: "Traduire en anglais : « Ils ont mangé hier »", a: "They ate yesterday." },
          { q: "Donner 3 conjonctions de coordination ?", a: "Mais, ou, et, donc, or, ni, car" },
          { q: "Quelle est la fonction du mot souligné : « Il parle à son frère » ?", a: "Complément d'Objet Indirect (COI)" }
        ]
      }
    }
  },
          /* === BLÒK 2/4 : NS4 (MATH, PHYSIQUE, CHIMIE) === */
  'ns4': {
    label: "🎓 NS4 - Baccalauréat",
    color: "#D21034",
    subjects: {
      "📐 Mathématiques (NS4)": {
        fiches: [
          { titre: "1. Dérivées & Limites Usuelles", contenu: "• (xⁿ)' = n·xⁿ⁻¹ | (1/x)' = -1/x² | (√x)' = 1/(2√x)\n• (ln x)' = 1/x | (eˣ)' = eˣ | (uⁿ)' = n·u'·uⁿ⁻¹\n• (sin x)' = cos x | (cos x)' = -sin x\n• Produit : (u·v)' = u'v + uv' | Quotient : (u/v)' = (u'v - uv') / v²" },
          { titre: "2. Primitives & Calcul Intégral", contenu: "• Primitive de xⁿ : xⁿ⁺¹ / (n + 1) (n ≠ -1)\n• Primitive de 1/x : ln|x| | Primitive de eˣ : eˣ\n• Intégrale : ∫ₐᵇ f(x)dx = F(b) - F(a) (aire sous la courbe si f ≥ 0)." },
          { titre: "3. Nombres Complexes & Trigonométrie", contenu: "• i² = -1 | Forme algébrique : z = a + ib\n• Module : |z| = √(a² + b²) | Conjugué : z̄ = a - ib | z·z̄ = a² + b²\n• Forme exponentielle : z = r·eⁱᶿ = r(cos θ + i·sin θ)" },
          { titre: "4. Suites Numériques & Probabilités", contenu: "• Suite arithmétique : Un = U₀ + n·r | Somme = (Nbre de termes) × (1er + Dernier)/2\n• Suite géométrique : Un = U₀ × qⁿ | Somme = U₀ × (1 - qⁿ⁺¹)/(1 - q)\n• Probabilité conditionnelle : P_A(B) = P(A ∩ B) / P(A)" }
        ],
        flashcards: [
          { q: "Quelle est la dérivée de f(x) = ln(x) ?", a: "f'(x) = 1 / x (pour x > 0)" },
          { q: "Que vaut i² dans l'ensemble des nombres complexes ℂ ?", a: "i² = -1" },
          { q: "Quelle est la dérivée d'un quotient (u / v)' ?", a: "(u'v - uv') / v²" },
          { q: "Quelle est la dérivée de f(x) = cos(x) ?", a: "f'(x) = -sin(x)" },
          { q: "Formule du module d'un nombre complexe z = a + ib ?", a: "|z| = √(a² + b²)" },
          { q: "Terme général d'une suite géométrique de raison q ?", a: "Un = U₀ × qⁿ" },
          { q: "Terme général d'une suite arithmétique de raison r ?", a: "Un = U₀ + n·r" },
          { q: "Quelle est la primitive de f(x) = eˣ ?", a: "F(x) = eˣ + C" },
          { q: "Que vaut ln(1) et ln(e) ?", a: "ln(1) = 0 et ln(e) = 1" },
          { q: "Formule de la probabilité conditionnelle P_A(B) ?", a: "P(A ∩ B) / P(A)" }
        ]
      },
      "⚡ Physique (NS4)": {
        fiches: [
          { titre: "1. Cinématique & Dynamique (Lois de Newton)", contenu: "• 1re Loi (Inertie) : ΣF = 0 ⇔ v = constante (repos ou MRU).\n• 2e Loi de Newton : ΣF = m × a (en Newtons, m en kg, a en m/s²).\n• Chute libre sans vitesse initiale : v = g·t | z = ½ g·t²." },
          { titre: "2. Travail, Puissance & Énergie Mécanique", contenu: "• Travail d'une force constante : W = F · d · cos(α) (en Joules)\n• Énergie cinétique : Ec = ½ m·v² | Énergie potentielle : Ep = m·g·h\n• Conservation : Em = Ec + Ep = constante (en l'absence de frottements)." },
          { titre: "3. Électricité, Condensateur & Bobine", contenu: "• Loi d'Ohm : U = R × I | Puissance électrique : P = U × I = R·I²\n• Condensateur : q = C × u | Énergie : Ec = ½ C·u² | Constante de temps : τ = R·C\n• Bobine : u = L·(di/dt) | Énergie magnétique : Em = ½ L·i²" },
          { titre: "4. Ondes Mécaniques & Radioactivité", contenu: "• Célérité d'une onde : v = λ / T = λ × f (λ en m, f en Hz).\n• Radioactivité : N(t) = N₀ · e⁻ᵏᵗ | Demi-vie : t₁/₂ = ln(2) / λ." }
        ],
        flashcards: [
          { q: "Unité internationale de la force ?", a: "Le Newton (N)" },
          { q: "Formule de l'énergie cinétique ?", a: "Ec = ½ m·v²" },
          { q: "Énoncé mathématique de la 2e loi de Newton ?", a: "ΣF = m × a" },
          { q: "Formule de l'énergie emmagasinée dans un condensateur ?", a: "E = ½ C·u²" },
          { q: "Relation entre célérité v, longueur d'onde λ et fréquence f ?", a: "v = λ × f" },
          { q: "Unité de la capacité d'un condensateur ?", a: "Le Farad (F)" },
          { q: "Unité de l'inductance d'une bobine ?", a: "Le Henry (H)" },
          { q: "Formule de la constante de temps τ d'un dipôle RC ?", a: "τ = R × C" },
          { q: "Formule de la demi-vie radioactive t₁/₂ ?", a: "t₁/₂ = ln(2) / λ" },
          { q: "Unité de la puissance mécanique ou électrique ?", a: "Le Watt (W)" }
        ]
      },
      "🧪 Chimie (NS4)": {
        fiches: [
          { titre: "1. Solutions Aqueuses, pH & Acides-Bases", contenu: "• pH = -log[H₃O⁺] ⇔ [H₃O⁺] = 10⁻ᵖᴴ\n• À 25°C : Ke = [H₃O⁺][OH⁻] = 10⁻¹⁴ | pH < 7 (Acide), pH = 7 (Neutre), pH > 7 (Basique)\n• Équivalence acido-basique : Ca · Va = Cb · Vb" },
          { titre: "2. Cinétique Chimique & Oxydoréduction", contenu: "• Oxydation = perte d'électrons | Réduction = gain d'électrons.\n• Facteurs cinétiques : température, concentration des réactifs, catalyseur.\n• Temps de demi-réaction t₁/₂ : durée nécessaire pour atteindre la moitié de l'avancement final." },
          { titre: "3. Chimie Organique : Hydrocarbures & Fonctions", contenu: "• Alcanes : CₙH₂ₙ₊₂ | Alcènes : CₙH₂ₙ | Alcynes : CₙH₂ₙ₋₂\n• Alcools : R-OH | Aldéhydes : R-CHO | Cétones : R-CO-R'\n• Acides carboxyliques : R-COOH | Esters : R-COO-R'" }
        ],
        flashcards: [
          { q: "Formule générale des alcanes ?", a: "CₙH₂ₙ₊₂" },
          { q: "Quel est le pH d'une solution neutre à 25°C ?", a: "pH = 7" },
          { q: "Formule reliant le pH à la concentration [H₃O⁺] ?", a: "pH = -log[H₃O⁺]" },
          { q: "Qu'est-ce qu'une oxydation ?", a: "Une perte d'électrons" },
          { q: "Qu'est-ce qu'une réduction ?", a: "Un gain d'électrons" },
          { q: "Formule générale des alcènes ?", a: "CₙH₂ₙ" },
          { q: "Quel est le groupe fonctionnel des acides carboxyliques ?", a: "-COOH" },
          { q: "Relation à l'équivalence d'un dosage acido-basique ?", a: "Ca × Va = Cb × Vb" },
          { q: "Quel est le rôle d'un catalyseur dans une réaction ?", a: "Accélérer la réaction sans être consommé" },
          { q: "Quelle réaction produit un ester et de l'eau ?", a: "L'estérification (Acide carboxylique + Alcool)" }
        ]
      },
        /* === BLÒK 3/4 : NS4 (BIOLOGIE, SES, LLA) & FÈMEN KATALÒG LA === */
      "🧬 Biologie & Géologie (NS4)": {
        fiches: [
          { titre: "1. Cellule, ADN & Synthèse des Protéines", contenu: "• Mitochondrie : centrale énergétique (production d'ATP via respiration cellulaire).\n• ADN : double hélice (bases complémentaires A-T et C-G) | ARN : simple brin (bases A-U et C-G).\n• Étapes : Transcription (ADN → ARNm dans le noyau) puis Traduction (ARNm → Protéine dans le ribosome)." },
          { titre: "2. Division Cellulaire & Génétique", contenu: "• Mitose : division conforme (1 cellule 2n → 2 cellules filles 2n identiques). Étapes : Prophase, Métaphase, Anaphase, Télophase.\n• Méiose : division réductionnelle formant 4 gamètes haploïdes (n chromosomes)." },
          { titre: "3. Immunologie, Système Nerveux & Géologie", contenu: "• Immunité : Lymphocytes B (anticorps, humorale) vs Lymphocytes T (destruction directe, cellulaire).\n• Synapse : zone de jonction entre deux neurones utilisant des neurotransmetteurs.\n• Tectonique des plaques : lithosphère divisée en plaques mobiles sur l'asthénosphère." }
        ],
        flashcards: [
          { q: "Organite produisant l'énergie (ATP) dans la cellule ?", a: "La mitochondrie" },
          { q: "Quelles sont les 4 bases azotées de l'ADN ?", a: "Adénine (A), Thymine (T), Cytosine (C), Guanine (G)" },
          { q: "Quelle base remplace la Thymine (T) dans l'ARN ?", a: "L'Uracile (U)" },
          { q: "Où se déroule la transcription de l'ADN en ARNm ?", a: "Dans le noyau de la cellule" },
          { q: "Combien de cellules filles produit une mitose ?", a: "2 cellules filles diploïdes (2n) identiques" },
          { q: "Combien de gamètes produit une méiose ?", a: "4 cellules haploïdes (n)" },
          { q: "Quels globules blancs produisent les anticorps ?", a: "Les lymphocytes B" },
          { q: "Comment appelle-t-on la zone de contact entre deux neurones ?", a: "La synapse" },
          { q: "Quelles sont les 4 phases de la mitose dans l'ordre ?", a: "Prophase, Métaphase, Anaphase, Télophase" },
          { q: "Quel est l'acide nucléique porteur de l'information génétique ?", a: "L'ADN (Acide Désoxyribonucléique)" }
        ]
      },
      "📊 Économie & Histoire (SES)": {
        fiches: [
          { titre: "1. Agrégats Économiques & Croissance", contenu: "• PIB (Produit Intérieur Brut) : somme des valeurs ajoutées créées sur le territoire national en 1 an.\n• Inflation : hausse générale, durable et auto-entretenue des prix (baisse du pouvoir d'achat).\n• Chômage : part de la population active sans emploi et en recherche active." },
          { titre: "2. Monnaie, Commerce & Développement", contenu: "• Fonctions de la monnaie : intermédiaire des échanges, unité de compte, réserve de valeur.\n• Balance commerciale = Exportations - Importations (excédentaire si X > M, déficitaire si X < M).\n• IDH (Indice de Développement Humain) : espérance de vie, niveau d'éducation, revenu par habitant." },
          { titre: "3. Histoire Contemporaine d'Haïti & du Monde", contenu: "• 21 août 1934 : Désoccupation américaine d'Haïti sous le président Sténio Vincent.\n• 1946 : Mouvement révolutionnaire de 1946 (Dumarsais Estimé).\n• 1939-1945 : Seconde Guerre mondiale | 1945 : Création de l'ONU (Haïti membre fondateur)." }
        ],
        flashcards: [
          { q: "Que signifie le sigle PIB ?", a: "Produit Intérieur Brut" },
          { q: "Président haïtien lors de la désoccupation en 1934 ?", a: "Sténio Vincent" },
          { q: "Comment définit-on l'inflation en économie ?", a: "La hausse générale et durable du niveau des prix" },
          { q: "Quels sont les 3 critères de calcul de l'IDH ?", a: "Santé (espérance de vie), Éducation et Niveau de vie (revenu)" },
          { q: "Quand la balance commerciale d'un pays est-elle déficitaire ?", a: "Lorsque les importations dépassent les exportations" },
          { q: "Quelles sont les 3 fonctions classiques de la monnaie ?", a: "Intermédiaire des échanges, unité de compte, réserve de valeur" },
          { q: "En quelle année l'ONU a-t-elle été créée ?", a: "En 1945 (après la Seconde Guerre mondiale)" },
          { q: "Quelle est la banque centrale de la République d'Haïti ?", a: "La BRH (Banque de la République d'Haïti)" },
          { q: "Qu'est-ce que la loi de l'offre et de la demande ?", a: "Quand la demande dépasse l'offre, le prix augmente (et inversement)" },
          { q: "Qui est l'auteur de « La Richesse des Nations » (1776) ?", a: "Adam Smith (fondateur de l'économie classique)" }
        ]
      },
      "🧠 Philosophie & Littérature (LLA)": {
        fiches: [
          { titre: "1. Grands Courants Philosophiques", contenu: "• Rationalisme (Descartes) : la raison est la source première de toute connaissance (« Je pense, donc je suis »).\n• Empirisme (Locke, Hume) : toute connaissance provient de l'expérience sensible.\n• Existentialisme (Sartre) : « L'existence précède l'essence » (l'homme se définit par ses actes)." },
          { titre: "2. Conscience, Liberté & État", contenu: "• Conscience morale : capacité à juger le bien et le mal.\n• Contrat social (Rousseau) : les citoyens cèdent leur liberté naturelle pour gagner la liberté civile sous la loi.\n• Inconscient (Freud) : Ça (pulsions), Moi (réalité), Surmoi (interdits moraux)." },
          { titre: "3. Littérature Haïtienne & Francophone", contenu: "• Indigénisme (Jean Price-Mars, « Ainsi parla l'Oncle », 1928) : valorisation de la culture africaine et paysanne.\n• Jacques Roumain : « Gouverneurs de la Rosée » (1944, Manuel et Anna).\n• Jacques Stephen Alexis : « Compère Général Soleil » (1955) et « Les Arbres Musiciens » (1957)." }
        ],
        flashcards: [
          { q: "Auteur de « Compère Général Soleil » (1955) ?", a: "Jacques Stephen Alexis" },
          { q: "Philosophe ayant dit : « L'existence précède l'essence » ?", a: "Jean-Paul Sartre" },
          { q: "Qui a écrit « Ainsi parla l'Oncle » en 1928 ?", a: "Jean Price-Mars" },
          { q: "Qui est le héros principal de « Gouverneurs de la Rosée » ?", a: "Manuel (avec Anna)" },
          { q: "Quel philosophe a écrit « Le Discours de la méthode » ?", a: "René Descartes" },
          { q: "Quelles sont les 3 instances du psychisme selon Sigmund Freud ?", a: "Le Ça, le Moi et le Surmoi" },
          { q: "Quelle est la célèbre maxime socratique sur la connaissance ?", a: "« Connais-toi toi-même » (et « Je sais que je ne sais rien »)" },
          { q: "Qui a théorisé le Réalisme Merveilleux en Haïti ?", a: "Jacques Stephen Alexis" },
          { q: "Auteur de « Du Contrat Social » (1762) ?", a: "Jean-Jacques Rousseau" },
          { q: "Quel courant littéraire haïtien est né pendant l'occupation américaine ?", a: "L'Indigénisme" }
        ]
      }
    }
  }
};
/* === BLÒK 4/4 : GLOSÈ FRANSÈ / KREYÒL ANRICHI (24 TÈM) === */
const glossaireData = [
  { fr: "Hypoténuse", kr: "Kote ki pi long nan yon triyang rektang (li anfas ang 90° a)." },
  { fr: "Antécédent (Fonction)", kr: "Valè x ou antre nan yon fonksyon f(x) pou w jwenn rezilta y la." },
  { fr: "Dérivée", kr: "Fason yon fonksyon ap varye (monte oswa desann) nan yon pwen presi." },
  { fr: "Asymptote", kr: "Yon liy dwat yon koub ap pwoche pi pre chak fwa san l pa janm touche l." },
  { fr: "Nombre Complexe", kr: "Nonb ki gen yon pati reyèl ak yon pati imajinè (a + ib, kote i² = -1)." },
  { fr: "Probabilité", kr: "Chans oswa posiblite pou yon evènman rive (toujou ant 0 ak 1)." },
  { fr: "Célérité", kr: "Vitès yon ond (tankou limyè oswa son) ap deplase nan espas la." },
  { fr: "Énergie Cinétique", kr: "Enèji yon kò genyen akoz mouvman ak vitès li (Ec = ½ mv²)." },
  { fr: "Condensateur", kr: "Konpozan elektwonik ki estoke chaj elektrik pou yon ti tan." },
  { fr: "Demi-vie (Radioactivité)", kr: "Tan li pran pou mwatye nan nwayo radyoaktif yo dezentegre." },
  { fr: "Oxydoréduction", kr: "Reyaksyon chimik kote gen echanj elektwon ant de espès chimik." },
  { fr: "Catalyseur", kr: "Sibstans ki akselere yon reyaksyon chimik san l pa konsome ladan l." },
  { fr: "Solution Tampon", kr: "Solisyon chimik ki kenbe pH li prèske menm jan menm lè w ajoute asid oswa baz." },
  { fr: "Photosynthèse", kr: "Fason plant vèt yo fabrike pwòp manje yo avèk limyè solèy la ak CO₂." },
  { fr: "Mitose", kr: "Divizyon yon selil ki bay de lòt selil ki idantik ak premye a." },
  { fr: "Méiose", kr: "Divizyon selilè ki bay 4 selil repwodiktè (gamèt) ak mwatye kwomozòm." },
  { fr: "Transcription (ADN)", kr: "Kopi yon moso ADN pou fè ARNm anndan nwayo selil la." },
  { fr: "Synapse", kr: "Zòn kontak ant de newòn kote mesaj nè a pase." },
  { fr: "Inflation", kr: "Lè pri tout pwodwi nan mache a ap monte san rete epi lajan pèdi valè." },
  { fr: "Produit Intérieur Brut (PIB)", kr: "Valè total tout richès (byen ak sèvis) yon peyi pwodui nan yon ane." },
  { fr: "Balance Commerciale", kr: "Diferans ant sa yon peyi vann aletranje (ekspòtasyon) ak sa l achte (enpòtasyon)." },
  { fr: "Métaphore", kr: "Konparezon dirèk ant de bagay san itilize mo tankou « comme » oswa « tel »." },
  { fr: "Indigénisme", kr: "Mouvman literè ayisyen (Jean Price-Mars) ki valorize kilti pèp la ak rasin afriken nou." },
  { fr: "Existentialisme", kr: "Kouran filozofik (Sartre) ki di lòm lib epi se aksyon l ki defini kiyès li ye." }
];
