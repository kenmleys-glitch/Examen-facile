// =========================================================
// BANQUE OFFICIELLE 9ÈME ANNÉE & FEUILLES D'EXAMENS MENFP
// =========================================================

const extra9eme = {
  "9_soc": [
    { id: "soc9_10", q: "[MENFP] Quelle est la date de la bataille de Vertières qui a scellé l'indépendance d'Haïti ?", o: ["1er janvier 1804", "18 novembre 1803", "14 août 1791"], a: 1, e: "La bataille décisive de Vertières a eu lieu le 18 novembre 1803." },
    { id: "soc9_11", q: "[MENFP] Qui a dirigé la cérémonie du Bois-Caïman dans la nuit du 14 août 1791 ?", o: ["Toussaint Louverture", "Dutty Boukman", "Jean-Jacques Dessalines"], a: 1, e: "Dutty Boukman et Cécile Fatiman ont dirigé cette cérémonie historique." },
    { id: "soc9_12", q: "[MENFP] Quel fleuve est le plus long d'Haïti (environ 320 km) ?", o: ["La Grand'Anse", "Le fleuve Artibonite", "La rivière Grise"], a: 1, e: "Le fleuve Artibonite prend sa source en République Dominicaine et traverse le Centre et l'Artibonite." },
    { id: "soc9_13", q: "[MENFP] En quelle année l'esclavage a-t-il été aboli officiellement à Saint-Domingue par Sonthonax ?", o: ["1791", "1793", "1804"], a: 1, e: "Léger-Félicité Sonthonax a proclamé l'abolition générale de l'esclavage le 29 août 1793." },
    { id: "soc9_14", q: "[MENFP] Combien de départements géographiques compte la République d'Haïti ?", o: ["9 départements", "10 départements", "11 départements"], a: 1, e: "Haïti est divisé en 10 départements (le 10e étant les Nippes, créé en 2003)." },
    { id: "soc9_15", q: "[MENFP] Quel est le chef-lieu du département du Centre ?", o: ["Mirebalais", "Hinche", "Thomassique"], a: 1, e: "Hinche est le chef-lieu du département du Centre." }
  ],
  "9_sci": [
    { id: "sci9_10", q: "[MENFP] Quel organe du corps humain pompe le sang dans tout l'organisme ?", o: ["Les poumons", "Le cœur", "Le foie"], a: 1, e: "Le cœur est le muscle qui assure la circulation sanguine." },
    { id: "sci9_11", q: "[MENFP] Quel est le symbole chimique du Fer ?", o: ["Fr", "Fe", "Fi"], a: 1, e: "Le symbole chimique du fer est Fe (du latin Ferrum)." },
    { id: "sci9_12", q: "[MENFP] À quelle température l'eau pure bout-elle au niveau de la mer ?", o: ["50 °C", "100 °C", "0 °C"], a: 1, e: "Sous pression atmosphérique normale, l'eau bout à 100 °C." }
  ],
  "9_fr": [
    { id: "fr9_10", q: "[MENFP] Nature du mot souligné : « Les élèves travaillent sérieusement. »", o: ["Adjectif", "Adverbe", "Préposition"], a: 1, e: "« Sérieusement » est un adverbe de manière." },
    { id: "fr9_11", q: "[MENFP] Qui est l'auteur du roman « Gouverneurs de la rosée » ?", o: ["Jacques Stephen Alexis", "Jacques Roumain", "Frankétienne"], a: 1, e: "Jacques Roumain a écrit « Gouverneurs de la rosée » (1944)." }
  ],
  "9_lang": [
    { id: "lg9_10", q: "[MENFP - Anglais] Choose the correct past tense: « Yesterday, we _____ to the market. »", o: ["go", "went", "gone"], a: 1, e: "Le passé de 'go' est 'went'." },
    { id: "lg9_11", q: "[MENFP - Espagnol] ¿Qué día viene después del lunes ?", o: ["Domingo", "Martes", "Viernes"], a: 1, e: "Après lundi (lunes) vient mardi (martes)." }
  ]
};

// FEUILLES D'EXAMENS OFFICIELS COMPLETS (SUJETS + CORRIGÉS TYPE MENFP)
const pastPapers9eme = [
  {
    title: "📄 Épreuve Officielle MENFP - Mathématiques 9ème (Session Juillet 2024)",
    duration: "Durée : 2 heures | Coefficient : 4",
    body: `<strong>PARTIE I : ACTIVITÉS NUMÉRIQUES (8 points)</strong><br>
    1. Calculer et donner le résultat sous forme de fraction irréductible :<br>
    A = (3/4 + 1/2) × 2/5<br><br>
    2. Développer, réduire et ordonner l'expression suivante :<br>
    B = (2x - 3)² - (x + 1)(2x - 3)<br><br>
    3. Résoudre dans ℝ l'inéquation suivante :<br>
    -2x + 6 ≤ 0<br><br>
    <strong>PARTIE II : ACTIVITÉS GÉOMÉTRIQUES (6 points)</strong><br>
    Soit un triangle ABC inscrit dans un cercle de diamètre [BC] = 10 cm tel que AB = 6 cm.<br>
    1. Démontrer que le triangle ABC est rectangle en A.<br>
    2. Calculer la longueur du côté [AC].<br>
    3. Calculer sin(B) et cos(B).<br><br>
    <strong>PARTIE III : PROBLÈME (6 points)</strong><br>
    Un père a 42 ans et son fils a 12 ans. Dans combien d'années l'âge du père sera-t-il exactement le triple de celui du fils ?`,
    correction: `<strong>CORRIGÉ OFFICIEL MENFP (2024) :</strong><br>
    • <strong>Partie I.1 :</strong> A = (3/4 + 2/4) × 2/5 = 5/4 × 2/5 = 10/20 = <strong>1/2</strong>.<br>
    • <strong>Partie I.2 :</strong> B = (4x² - 12x + 9) - (2x² - x - 3) = <strong>2x² - 11x + 12</strong>.<br>
    • <strong>Partie I.3 :</strong> -2x ≤ -6 ⇒ <strong>x ≥ 3</strong>, donc S = [3 ; +∞[.<br>
    • <strong>Partie II :</strong> [BC] est le diamètre du cercle circonscrit, donc ABC est rectangle en A. Par Pythagore : AC² = 10² - 6² = 64 ⇒ <strong>AC = 8 cm</strong>. sin(B) = 8/10 = <strong>0,8</strong> ; cos(B) = 6/10 = <strong>0,6</strong>.<br>
    • <strong>Partie III :</strong> Soit x le nombre d'années : 42 + x = 3(12 + x) ⇒ 42 + x = 36 + 3x ⇒ 2x = 6 ⇒ <strong>x = 3 ans</strong>.`
  },
  {
    title: "📄 Épreuve Officielle MENFP - Mathématiques 9ème (Session Juillet 2023)",
    duration: "Durée : 2 heures | Coefficient : 4",
    body: `<strong>PARTIE I : ALGÈBRE & ARITHMÉTIQUE (10 points)</strong><br>
    1. Calculer le PGCD des nombres 108 et 144 par l'algorithme d'Euclide.<br>
    2. Écrire sous la forme a√3 l'expression : C = √75 - 2√12 + √27.<br>
    3. Résoudre le système d'équations suivant :<br>
    { 2x + y = 11<br>
    { x - y = 1<br><br>
    <strong>PARTIE II : PROBLÈME DE GÉOMÉTRIE (10 points)</strong><br>
    Un champ rectangulaire a un périmètre de 140 m. Sa longueur mesure 10 m de plus que sa largeur.<br>
    1. Déterminer la largeur et la longueur de ce champ.<br>
    2. Calculer sa superficie totale en mètres carrés (m²).`,
    correction: `<strong>CORRIGÉ OFFICIEL MENFP (2023) :</strong><br>
    • <strong>Partie I.1 :</strong> 144 = 108×1 + 36 ; 108 = 36×3 + 0 ⇒ <strong>PGCD = 36</strong>.<br>
    • <strong>Partie I.2 :</strong> C = 5√3 - 4√3 + 3√3 = <strong>4√3</strong>.<br>
    • <strong>Partie I.3 :</strong> En additionnant : 3x = 12 ⇒ <strong>x = 4</strong>, d'où <strong>y = 3</strong>. S = {(4 ; 3)}.<br>
    • <strong>Partie II :</strong> Demi-périmètre L + l = 70. Avec L = l + 10 ⇒ 2l + 10 = 70 ⇒ <strong>largeur l = 30 m</strong> et <strong>longueur L = 40 m</strong>. Superficie = 30 × 40 = <strong>1 200 m²</strong>.`
  }
    ,
  {
    title: "📄 Épreuve Officielle MENFP - Mathématiques 9ème (Session Juillet 2022)",
    duration: "Durée : 2 heures | Coefficient : 4",
    body: `<strong>PARTIE I : ALGÈBRE & STATISTIQUES (10 points)</strong><br>
    1. Factoriser : E = (3x + 2)² - 16.<br>
    2. Résoudre dans ℝ : (3x - 2)(3x + 6) = 0.<br>
    3. Notes : 12 ; 15 ; 9 ; 14 ; 10. Calculer la moyenne et la médiane.<br><br>
    <strong>PARTIE II : PROBLÈME (10 points)</strong><br>
    Un commerçant achète un lot à 4 500 Gds et le revend avec un bénéfice de 20 %. Calculer le bénéfice et le prix de vente.`,
    correction: `<strong>CORRIGÉ MENFP (2022) :</strong><br>
    • <strong>I.1 :</strong> E = <strong>(3x - 2)(3x + 6)</strong>.<br>
    • <strong>I.2 :</strong> <strong>S = {-2 ; 2/3}</strong>.<br>
    • <strong>I.3 :</strong> Moyenne = <strong>12</strong> ; Médiane = <strong>12</strong>.<br>
    • <strong>II :</strong> Bénéfice = <strong>900 Gds</strong> ; Prix de vente = <strong>5 400 Gds</strong>.`
  },
  {
    title: "📄 Épreuve Officielle MENFP - Mathématiques 9ème (Session Juillet 2021)",
    duration: "Durée : 2 heures | Coefficient : 4",
    body: `<strong>PARTIE I : CALCUL & FONCTIONS (8 points)</strong><br>
    1. Écriture scientifique de : C = (4 × 10⁵) × (3 × 10⁻²).<br>
    2. Soit f(x) = -3x + 7. Calculer f(2) et trouver l'antécédent de -5.<br><br>
    <strong>PARTIE II : GÉOMÉTRIE (12 points)</strong><br>
    1. On donne A(2 ; 5) et B(6 ; 1). Calculer le milieu I de [AB].<br>
    2. Volume d'un cylindre de rayon R = 3 cm et hauteur h = 10 cm (π ≈ 3,14).`,
    correction: `<strong>CORRIGÉ MENFP (2021) :</strong><br>
    • <strong>I.1 :</strong> C = <strong>1,2 × 10⁴</strong>.<br>
    • <strong>I.2 :</strong> f(2) = <strong>1</strong> ; antécédent de -5 : <strong>x = 4</strong>.<br>
    • <strong>II.1 :</strong> <strong>I(4 ; 3)</strong>.<br>
    • <strong>II.2 :</strong> V = 3,14 × 9 × 10 = <strong>282,6 cm³</strong>.`
  },
  {
    title: "📄 Épreuve Officielle MENFP - Mathématiques 9ème (Session Août 2020)",
    duration: "Durée : 2 heures | Coefficient : 4",
    body: `<strong>PARTIE I : ALGÈBRE (10 points)</strong><br>
    1. Résoudre l'inéquation : 3x - 5 > 2x + 4.<br>
    2. Factoriser : D = 4x² - 25 + (2x - 5)(x + 3).<br><br>
    <strong>PARTIE II : THÉORÈME DE THALÈS (10 points)</strong><br>
    Triangle ABC avec AB = 9 cm et AC = 12 cm. M ∈ [AB] tel que AM = 3 cm et (MN)//(BC). Calculer AN.`,
    correction: `<strong>CORRIGÉ MENFP (2020) :</strong><br>
    • <strong>I.1 :</strong> <strong>x > 9</strong> (S = ]9 ; +∞[).<br>
    • <strong>I.2 :</strong> D = <strong>(2x - 5)(3x + 8)</strong>.<br>
    • <strong>II :</strong> 3/9 = AN/12 ⇒ <strong>AN = 4 cm</strong>.`
  },
  {
    title: "📄 Épreuve Officielle MENFP - Mathématiques 9ème (Session Juillet 2019)",
    duration: "Durée : 2 heures | Coefficient : 4",
    body: `<strong>PARTIE I : ALGÈBRE (10 points)</strong><br>
    1. Développer : A = (3x - 2)(x + 4) - (x - 1)².<br>
    2. Résoudre : (2x - 5)/3 = (x + 1)/2.<br><br>
    <strong>PARTIE II : GÉOMÉTRIE (10 points)</strong><br>
    Triangle EFG rectangle en E avec EF = 8 cm et EG = 6 cm. Calculer FG et l'aire du triangle.`,
    correction: `<strong>CORRIGÉ MENFP (2019) :</strong><br>
    • <strong>I.1 :</strong> A = <strong>2x² + 12x - 9</strong>.<br>
    • <strong>I.2 :</strong> <strong>x = 13</strong>.<br>
    • <strong>II :</strong> FG = <strong>10 cm</strong> ; Aire = <strong>24 cm²</strong>.`
  }
  
];
