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
];
