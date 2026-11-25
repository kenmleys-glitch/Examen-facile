const examensPasses = [
  {
    titre: "Examen Officiel MENFP - Mathématiques (Session 2024)",
    annee: "2024",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Calculer et simplifier / Kalkile epi senplifye : A = (2/3 + 1/6) × 3/5",
            options: ["1/2", "3/10", "5/6", "2/5"],
            answer: 0,
            explication: "2/3 + 1/6 = 4/6 + 1/6 = 5/6. Ensuite 5/6 × 3/5 = 3/6 = 1/2."
          },
          {
            q: "2. Résoudre dans ℝ l'équation / Rezoud ekwasyon an : 3x - 7 = 2x + 5",
            options: ["x = -2", "x = 12", "x = 2", "x = -12"],
            answer: 1,
            explication: "3x - 2x = 5 + 7 ⇒ x = 12."
          },
          {
            q: "3. Factoriser l'expression / Faktorize : P(x) = 4x² - 25",
            options: ["(2x - 5)²", "(4x - 5)(x + 5)", "(2x - 5)(2x + 5)", "(2x + 5)²"],
            answer: 2,
            explication: "Identité remarquable a² - b² = (a - b)(a + b) : (2x)² - 5² = (2x - 5)(2x + 5)."
          },
          {
            q: "4. Résoudre l'inéquation / Rezoud inekasyon an : -2x + 4 > 10",
            options: ["x > -3", "x < 3", "x < -3", "x > 3"],
            answer: 2,
            explication: "-2x > 10 - 4 ⇒ -2x > 6 ⇒ x < 6 / (-2) ⇒ x < -3 (on change le sens en divisant par -2)."
          },
          {
            q: "5. Résoudre le système / Rezoud sistèm nan : { x + y = 10 ; x - y = 4 }",
            options: ["(7 ; 3)", "(6 ; 4)", "(8 ; 2)", "(3 ; 7)"],
            answer: 0,
            explication: "En additionnant : 2x = 14 ⇒ x = 7. Puis 7 + y = 10 ⇒ y = 3."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "6. Dans un triangle ABC rectangle en A, AB = 6 cm et AC = 8 cm. Calculer BC.",
            options: ["14 cm", "10 cm", "48 cm", "100 cm"],
            answer: 1,
            explication: "Théorème de Pythagore : BC² = AB² + AC² = 6² + 8² = 36 + 64 = 100 ⇒ BC = √100 = 10 cm."
          },
          {
            q: "7. Dans un triangle ABC rectangle en B, sin(Â) = 0,6 et l'hypoténuse AC = 15 cm. Calculer BC.",
            options: ["9 cm", "12 cm", "25 cm", "6 cm"],
            answer: 0,
            explication: "sin(Â) = Côté opposé / Hypoténuse = BC / AC ⇒ BC = 15 × 0,6 = 9 cm."
          },
          {
            q: "8. Un cercle a un rayon R = 7 cm (prendre π ≈ 22/7). Calculer son périmètre.",
            options: ["22 cm", "44 cm", "154 cm", "14 cm"],
            answer: 1,
            explication: "Périmètre = 2 × π × R = 2 × (22/7) × 7 = 44 cm."
          },
          {
            q: "9. Dans le plan muni d'un repère, on donne A(2 ; 3) et B(6 ; 11). Coordonnées du milieu M de [AB] ?",
            options: ["(4 ; 7)", "(8 ; 14)", "(2 ; 4)", "(3 ; 5)"],
            answer: 0,
            explication: "xM = (2 + 6)/2 = 4 et yM = (3 + 11)/2 = 7 ⇒ M(4 ; 7)."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "10. Voici les notes d'un élève de 9e : 12, 15, 08, 17, 13. Calculer sa moyenne.",
            options: ["12", "13", "14", "15"],
            answer: 1,
            explication: "Somme = 12 + 15 + 8 + 17 + 13 = 65. Moyenne = 65 / 5 = 13."
          },
          {
            q: "11. Dans une classe de 40 élèves, 24 sont des filles. Quel est le pourcentage de garçons ?",
            options: ["60 %", "24 %", "40 %", "16 %"],
            answer: 2,
            explication: "Nombre de garçons = 40 - 24 = 16. Pourcentage = (16 / 40) × 100 = 40 %."
          },
          {
            q: "12. Problème : Un commerçant achète un sac de riz à 2 500 Gds et le revend avec un bénéfice de 20 %. Prix de vente ?",
            options: ["2 700 Gds", "3 000 Gds", "2 520 Gds", "2 900 Gds"],
            answer: 1,
            explication: "Bénéfice = 2 500 × 20/100 = 500 Gds. Prix de vente = 2 500 + 500 = 3 000 Gds."
          }
        ]
      }
    ]
  },
  {
    titre: "Examen Officiel MENFP - Mathématiques (Session 2023)",
    annee: "2023",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Développer et réduire / Devlope epi redwi : E = (x + 3)² - (x - 2)(x + 2)",
            options: ["6x + 13", "6x + 5", "2x² + 6x + 5", "6x - 13"],
            answer: 0,
            explication: "(x² + 6x + 9) - (x² - 4) = x² + 6x + 9 - x² + 4 = 6x + 13."
          },
          {
            q: "2. Simplifier l'expression avec radical / Senplifye : B = √75 - 2√12 + √27",
            options: ["4√3", "2√3", "6√3", "12√3"],
            answer: 0,
            explication: "√75 = 5√3 ; 2√12 = 4√3 ; √27 = 3√3. Donc 5√3 - 4√3 + 3√3 = 4√3."
          },
          {
            q: "3. Soit la fonction affine f(x) = -3x + 5. Calculer l'image de -2 par f.",
            options: ["-1", "11", "-11", "1"],
            answer: 1,
            explication: "f(-2) = -3(-2) + 5 = 6 + 5 = 11."
          },
          {
            q: "4. Résoudre dans ℝ : (2x - 6)(x + 4) = 0",
            options: ["S = {3 ; -4}", "S = {-3 ; 4}", "S = {6 ; -4}", "S = {3 ; 4}"],
            answer: 0,
            explication: "2x - 6 = 0 ⇒ x = 3 ; ou x + 4 = 0 ⇒ x = -4."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Théorème de Thalès : Dans le triangle ABC, (MN) // (BC), AM = 3, AB = 9, AN = 4. Calculer AC.",
            options: ["12", "10", "6", "15"],
            answer: 0,
            explication: "AM/AB = AN/AC ⇒ 3/9 = 4/AC ⇒ AC = (9 × 4) / 3 = 12."
          },
          {
            q: "6. Calculer le volume d'un cylindre de rayon R = 3 cm et de hauteur h = 10 cm (π ≈ 3,14).",
            options: ["94,2 cm³", "282,6 cm³", "188,4 cm³", "90 cm³"],
            answer: 1,
            explication: "Volume = π × R² × h = 3,14 × 9 × 10 = 282,6 cm³."
          },
          {
            q: "7. Quelle est la somme des angles intérieurs d'un triangle ?",
            options: ["90°", "180°", "270°", "360°"],
            answer: 1,
            explication: "Dans tout triangle, la somme des trois angles vaut toujours 180°."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Quelle est la médiane de la série ordonnée : 5 ; 7 ; 9 ; 11 ; 14 ; 18 ; 20 ?",
            options: ["9", "11", "14", "12"],
            answer: 1,
            explication: "Il y a 7 valeurs : la valeur centrale (4e position) est 11."
          },
          {
            q: "9. Problème : Un terrain rectangulaire a un périmètre de 140 m. Sa longueur mesure 45 m. Calculer son aire.",
            options: ["1 125 m²", "4 275 m²", "2 250 m²", "950 m²"],
            answer: 0,
            explication: "Demi-périmètre = 140 / 2 = 70 m. Largeur = 70 - 45 = 25 m. Aire = 45 × 25 = 1 125 m²."
          }
        ]
      }
    ]
  },
    {
    titre: "Examen Officiel MENFP - Mathématiques (Session 2022)",
    annee: "2022",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Calculer la valeur numérique de P(x) = 2x² - 5x + 3 pour x = -2.",
            options: ["21", "1", "-15", "11"],
            answer: 0,
            explication: "P(-2) = 2(-2)² - 5(-2) + 3 = 2(4) + 10 + 3 = 8 + 10 + 3 = 21."
          },
          {
            q: "2. Factoriser / Faktorize : Q(x) = (x + 2)² - 9",
            options: ["(x - 1)(x + 5)", "(x + 1)(x - 5)", "(x - 7)(x + 11)", "(x + 2)(x - 3)"],
            answer: 0,
            explication: "a² - b² = (a - b)(a + b) ⇒ (x + 2 - 3)(x + 2 + 3) = (x - 1)(x + 5)."
          },
          {
            q: "3. Résoudre dans ℝ l'équation / Rezoud : (3x + 1)/2 = (x - 4)/3",
            options: ["x = -11/7", "x = 11/7", "x = -5/7", "x = 5"],
            answer: 0,
            explication: "Produit en croix : 3(3x + 1) = 2(x - 4) ⇒ 9x + 3 = 2x - 8 ⇒ 7x = -11 ⇒ x = -11/7."
          },
          {
            q: "4. Simplifier / Senplifye : C = (3⁵ × 3⁻²) / 3²",
            options: ["3", "9", "27", "1"],
            answer: 0,
            explication: "3^(5 - 2) / 3² = 3³ / 3² = 3^(3 - 2) = 3¹ = 3."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Un carré a une aire de 64 cm². Quelle est la longueur de son périmètre ?",
            options: ["16 cm", "32 cm", "24 cm", "8 cm"],
            answer: 1,
            explication: "Côté c = √64 = 8 cm. Périmètre = 4 × 8 = 32 cm."
          },
          {
            q: "6. Dans un triangle EFG rectangle en E, EF = 5 cm et FG (hypoténuse) = 13 cm. Calculer EG.",
            options: ["8 cm", "12 cm", "18 cm", "144 cm"],
            answer: 1,
            explication: "Pythagore : EG² = FG² - EF² = 13² - 5² = 169 - 25 = 144 ⇒ EG = √144 = 12 cm."
          },
          {
            q: "7. Dans un repère orthonormé, calculer la distance AB avec A(1 ; 2) et B(4 ; 6).",
            options: ["5", "7", "25", "3"],
            answer: 0,
            explication: "AB = √[(4 - 1)² + (6 - 2)²] = √[3² + 4²] = √[9 + 16] = √25 = 5."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Les âges des joueurs d'une équipe sont : 14, 15, 15, 16, 15, 17, 16. Quel est le mode de cette série ?",
            options: ["14", "15", "16", "17"],
            answer: 1,
            explication: "Le mode est la valeur qui revient le plus souvent : 15 apparaît 3 fois."
          },
          {
            q: "9. Problème : Une moto coûte 120 000 Gds. Le vendeur accorde une remise de 15 %. Combien paie l'acheteur ?",
            options: ["102 000 Gds", "18 000 Gds", "105 000 Gds", "118 500 Gds"],
            answer: 0,
            explication: "Remise = 120 000 × 15/100 = 18 000 Gds. Prix payé = 120 000 - 18 000 = 102 000 Gds."
          }
        ]
      }
    ]
  },
  {
    titre: "Examen Officiel MENFP - Mathématiques (Session 2021)",
    annee: "2021",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Factoriser / Faktorize : M(x) = 3x² - 12x",
            options: ["3x(x - 4)", "3(x² - 4)", "x(3x - 12)", "3x(x + 4)"],
            answer: 0,
            explication: "Facteur commun 3x : 3x² - 12x = 3x(x - 4)."
          },
          {
            q: "2. Résoudre le système / Rezoud : { 2x + y = 11 ; x + y = 7 }",
            options: ["(4 ; 3)", "(3 ; 4)", "(5 ; 1)", "(2 ; 7)"],
            answer: 0,
            explication: "En soustrayant : (2x + y) - (x + y) = 11 - 7 ⇒ x = 4. Puis 4 + y = 7 ⇒ y = 3."
          },
          {
            q: "3. Déterminer l'équation de la droite passant par A(0 ; 2) et de coefficient directeur a = 3.",
            options: ["y = 3x + 2", "y = 2x + 3", "y = 3x - 2", "y = -3x + 2"],
            answer: 0,
            explication: "Forme y = ax + b avec a = 3 et b = 2 ⇒ y = 3x + 2."
          },
          {
            q: "4. Calculer / Kalkile : D = (√5 - 2)(√5 + 2)",
            options: ["1", "3", "9", "√5"],
            answer: 0,
            explication: "(a - b)(a + b) = a² - b² ⇒ (√5)² - 2² = 5 - 4 = 1."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Calculer l'aire d'un triangle de base B = 12 cm et de hauteur h = 7 cm.",
            options: ["84 cm²", "42 cm²", "19 cm²", "38 cm²"],
            answer: 1,
            explication: "Aire = (Base × Hauteur) / 2 = (12 × 7) / 2 = 84 / 2 = 42 cm²."
          },
          {
            q: "6. Dans un triangle rectangle, cos(α) = 0,8. Quelle est la valeur de sin(α) ?",
            options: ["0,2", "0,6", "0,4", "1,8"],
            answer: 1,
            explication: "cos²(α) + sin²(α) = 1 ⇒ 0,64 + sin²(α) = 1 ⇒ sin²(α) = 0,36 ⇒ sin(α) = 0,6."
          },
          {
            q: "7. Quel est le volume d'un cube d'arête a = 5 cm ?",
            options: ["25 cm³", "75 cm³", "125 cm³", "15 cm³"],
            answer: 2,
            explication: "Volume = a³ = 5 × 5 × 5 = 125 cm³."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Quelle est l'étendue de la série statistique : 18 ; 07 ; 14 ; 20 ; 11 ; 09 ?",
            options: ["11", "13", "9", "20"],
            answer: 1,
            explication: "Étendue = Valeur maximale - Valeur minimale = 20 - 7 = 13."
          },
          {
            q: "9. Problème : Un réservoir contient 450 litres d'eau. On utilise les 2/5 de cette eau. Combien de litres reste-t-il ?",
            options: ["180 litres", "270 litres", "90 litres", "360 litres"],
            answer: 1,
            explication: "Eau utilisée = 450 × 2/5 = 180 L. Eau restante = 450 - 180 = 270 litres."
          }
        ]
      }
    ]
              },
    {
    titre: "Examen Officiel MENFP - Mathématiques (Session 2020)",
    annee: "2020",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Développer et réduire / Devlope epi redwi : F = (2x - 3)(x + 4) - (x - 1)²",
            options: ["x² + 7x - 13", "x² + 3x - 11", "3x² + 5x - 13", "x² + 7x - 11"],
            answer: 0,
            explication: "(2x² + 8x - 3x - 12) - (x² - 2x + 1) = 2x² + 5x - 12 - x² + 2x - 1 = x² + 7x - 13."
          },
          {
            q: "2. Écrire sous la forme a√b (b le plus petit possible) : K = √45 + √80 - √20",
            options: ["5√5", "3√5", "7√5", "9√5"],
            answer: 0,
            explication: "√45 = 3√5 ; √80 = 4√5 ; √20 = 2√5. Donc 3√5 + 4√5 - 2√5 = 5√5."
          },
          {
            q: "3. Résoudre dans ℝ l'inéquation / Rezoud : 5x - 3 ≤ 2x + 9",
            options: ["x ≤ 4", "x ≥ 4", "x ≤ 2", "x ≤ -4"],
            answer: 0,
            explication: "5x - 2x ≤ 9 + 3 ⇒ 3x ≤ 12 ⇒ x ≤ 4."
          },
          {
            q: "4. Soit f(x) = 2x - 7. Calculer l'antécédent de 5 par la fonction f.",
            options: ["6", "3", "-1", "12"],
            answer: 0,
            explication: "On résout 2x - 7 = 5 ⇒ 2x = 12 ⇒ x = 6."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Un losange a des diagonales mesurant D = 16 cm et d = 12 cm. Calculer son aire.",
            options: ["192 cm²", "96 cm²", "28 cm²", "56 cm²"],
            answer: 1,
            explication: "Aire du losange = (D × d) / 2 = (16 × 12) / 2 = 192 / 2 = 96 cm²."
          },
          {
            q: "6. Dans un triangle rectangle, tan(β) = 3/4. Si le côté adjacent mesure 8 cm, calculer le côté opposé.",
            options: ["6 cm", "10 cm", "12 cm", "24 cm"],
            answer: 0,
            explication: "tan(β) = Opposé / Adjacent ⇒ 3/4 = Opposé / 8 ⇒ Opposé = (3 × 8) / 4 = 6 cm."
          },
          {
            q: "7. Dans un repère, on donne les vecteurs u(3 ; -2) et v(-1 ; 5). Coordonnées de u + v ?",
            options: ["(2 ; 3)", "(4 ; -7)", "(-3 ; -10)", "(2 ; -3)"],
            answer: 0,
            explication: "x = 3 + (-1) = 2 et y = -2 + 5 = 3 ⇒ u + v = (2 ; 3)."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Dans une boîte, il y a 5 billes rouges, 3 billes bleues et 2 billes vertes. Probabilité de tirer une bille bleue ?",
            options: ["0,3", "0,5", "0,2", "3"],
            answer: 0,
            explication: "Total = 5 + 3 + 2 = 10 billes. Probabilité = 3 / 10 = 0,3."
          },
          {
            q: "9. Problème : Un père a 42 ans et son fils a 12 ans. Dans combien d'années l'âge du père sera-t-il le double de celui du fils ?",
            options: ["15 ans", "18 ans", "12 ans", "20 ans"],
            answer: 1,
            explication: "42 + x = 2(12 + x) ⇒ 42 + x = 24 + 2x ⇒ x = 42 - 24 = 18 ans (père = 60, fils = 30)."
          }
        ]
      }
    ]
  },
  {
    titre: "Examen Officiel MENFP - Mathématiques (Session 2019)",
    annee: "2019",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Factoriser complètement / Faktorize nèt : H(x) = 2x² - 18",
            options: ["2(x - 3)(x + 3)", "2(x - 9)(x + 9)", "(2x - 6)(x + 3)", "2(x - 3)²"],
            answer: 0,
            explication: "On met 2 en facteur : 2(x² - 9), puis a² - b² ⇒ 2(x - 3)(x + 3)."
          },
          {
            q: "2. Calculer / Kalkile : S = (1/2)⁻² + 5⁰ - 2³",
            options: ["-3", "5", "-4", "1"],
            answer: 0,
            explication: "(1/2)⁻² = 2² = 4 ; 5⁰ = 1 ; 2³ = 8. Donc S = 4 + 1 - 8 = -3."
          },
          {
            q: "3. Résoudre le système / Rezoud : { 3x - 2y = 8 ; x + 2y = 8 }",
            options: ["(4 ; 2)", "(2 ; 4)", "(3 ; 1)", "(5 ; 3)"],
            answer: 0,
            explication: "En additionnant : 4x = 16 ⇒ x = 4. Puis 4 + 2y = 8 ⇒ 2y = 4 ⇒ y = 2."
          },
          {
            q: "4. Donner l'écriture scientifique de N = 0,00045 × 10⁷",
            options: ["4,5 × 10³", "45 × 10²", "4,5 × 10¹¹", "0,45 × 10⁴"],
            answer: 0,
            explication: "0,00045 = 4,5 × 10⁻⁴. Donc 4,5 × 10⁻⁴ × 10⁷ = 4,5 × 10³."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Calculer l'aire d'un trapèze de grande base B = 10 cm, petite base b = 6 cm et hauteur h = 5 cm.",
            options: ["40 cm²", "80 cm²", "30 cm²", "50 cm²"],
            answer: 0,
            explication: "Aire = [(B + b) × h] / 2 = [(10 + 6) × 5] / 2 = (16 × 5) / 2 = 40 cm²."
          },
          {
            q: "6. Un cône de révolution a un rayon R = 6 cm et une hauteur h = 7 cm (prendre π ≈ 22/7). Calculer son volume.",
            options: ["264 cm³", "792 cm³", "132 cm³", "88 cm³"],
            answer: 0,
            explication: "Volume = (1/3) × π × R² × h = (1/3) × (22/7) × 36 × 7 = 22 × 12 = 264 cm³."
          },
          {
            q: "7. Deux droites (D1) : y = 2x - 1 et (D2) : y = 2x + 5 sont :",
            options: ["Parallèles", "Perpendiculaires", "Sécantes en (0;2)", "Confondues"],
            answer: 0,
            explication: "Elles ont le même coefficient directeur (a = 2), donc elles sont strictement parallèles."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Sur 25 élèves, 20 ont obtenu la moyenne. Quel est le taux de réussite ?",
            options: ["80 %", "75 %", "85 %", "20 %"],
            answer: 0,
            explication: "Taux = (20 / 25) × 100 = 0,8 × 100 = 80 %."
          },
          {
            q: "9. Problème : Une voiture parcourt 180 km en 2 heures 30 minutes. Quelle est sa vitesse moyenne en km/h ?",
            options: ["72 km/h", "90 km/h", "60 km/h", "75 km/h"],
            answer: 0,
            explication: "2 h 30 min = 2,5 heures. Vitesse = Distance / Temps = 180 / 2,5 = 72 km/h."
          }
        ]
      }
    ]
  },
    {
    titre: "Examen Officiel MENFP - Mathématiques (Session 2018)",
    annee: "2018",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Calculer et simplifier / Kalkile epi senplifye : A = (3/4 - 1/2) ÷ 5/8",
            options: ["2/5", "5/32", "4/5", "1/4"],
            answer: 0,
            explication: "3/4 - 1/2 = 3/4 - 2/4 = 1/4. Ensuite (1/4) ÷ (5/8) = (1/4) × (8/5) = 8/20 = 2/5."
          },
          {
            q: "2. Factoriser / Faktorize : P(x) = 9x² - 12x + 4",
            options: ["(3x - 2)²", "(3x + 2)²", "(9x - 2)(x + 2)", "(3x - 4)²"],
            answer: 0,
            explication: "Identité remarquable a² - 2ab + b² = (a - b)² : (3x)² - 2(3x)(2) + 2² = (3x - 2)²."
          },
          {
            q: "3. Résoudre dans ℝ l'équation / Rezoud : 4(x - 2) = 2x + 6",
            options: ["x = 7", "x = 1", "x = -1", "x = 4"],
            answer: 0,
            explication: "4x - 8 = 2x + 6 ⇒ 4x - 2x = 6 + 8 ⇒ 2x = 14 ⇒ x = 7."
          },
          {
            q: "4. Rendre rationnel le dénominateur de : M = 6 / √3",
            options: ["2√3", "3√2", "6√3", "√3"],
            answer: 0,
            explication: "(6 × √3) / (√3 × √3) = 6√3 / 3 = 2√3."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Dans un triangle ABC rectangle en A, AB = 9 cm et BC (hypoténuse) = 15 cm. Calculer AC.",
            options: ["12 cm", "6 cm", "24 cm", "18 cm"],
            answer: 0,
            explication: "Pythagore : AC² = BC² - AB² = 15² - 9² = 225 - 81 = 144 ⇒ AC = √144 = 12 cm."
          },
          {
            q: "6. Quel est le volume d'une sphère de rayon R = 3 cm (prendre π ≈ 3,14) ?",
            options: ["113,04 cm³", "37,68 cm³", "28,26 cm³", "84,78 cm³"],
            answer: 0,
            explication: "Volume = (4/3) × π × R³ = (4/3) × 3,14 × 27 = 4 × 3,14 × 9 = 113,04 cm³."
          },
          {
            q: "7. Les points A(2 ; 5) et B(2 ; -3) ont la même abscisse. La droite (AB) est :",
            options: ["Parallèle à l'axe des ordonnées (verticale)", "Parallèle à l'axe des abscisses", "Passant par l'origine", "De pente 2"],
            answer: 0,
            explication: "Puisque xA = xB = 2, tous les points ont pour équation x = 2 (droite verticale)."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. La moyenne de 4 notes est 14. Trois de ces notes sont 12, 15 et 16. Quelle est la 4e note ?",
            options: ["13", "14", "15", "12"],
            answer: 0,
            explication: "Somme totale = 14 × 4 = 56. Somme des 3 notes = 12 + 15 + 16 = 43. 4e note = 56 - 43 = 13."
          },
          {
            q: "9. Problème : Un capital de 15 000 Gds est placé à un taux annuel de 8 %. Quel intérêt rapporte-t-il en 2 ans ?",
            options: ["2 400 Gds", "1 200 Gds", "3 000 Gds", "1 800 Gds"],
            answer: 0,
            explication: "Intérêt = (Capital × Taux × Temps) / 100 = (15 000 × 8 × 2) / 100 = 2 400 Gds."
          }
        ]
      }
    ]
  },
  {
    titre: "Examen Officiel MENFP - Mathématiques (Session 2017)",
    annee: "2017",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Développer et réduire / Devlope epi redwi : G = (3x + 2)² - (2x - 1)(3x + 2)",
            options: ["3x² + 11x + 6", "3x² + 13x + 6", "15x² + 11x + 2", "3x² + 5x + 6"],
            answer: 0,
            explication: "(9x² + 12x + 4) - (6x² + 4x - 3x - 2) = 9x² + 12x + 4 - 6x² - x + 2 = 3x² + 11x + 6."
          },
          {
            q: "2. Résoudre le système / Rezoud : { x + 2y = 13 ; 3x - y = 4 }",
            options: ["(3 ; 5)", "(5 ; 3)", "(2 ; 5,5)", "(4 ; 4,5)"],
            answer: 0,
            explication: "De la 2e équation : y = 3x - 4. On remplace : x + 2(3x - 4) = 13 ⇒ 7x - 8 = 13 ⇒ 7x = 21 ⇒ x = 3, et y = 5."
          },
          {
            q: "3. Résoudre dans ℝ l'inéquation / Rezoud : 3(x - 1) > 5x + 3",
            options: ["x < -3", "x > -3", "x < 3", "x > 3"],
            answer: 0,
            explication: "3x - 3 > 5x + 3 ⇒ 3x - 5x > 3 + 3 ⇒ -2x > 6 ⇒ x < -3."
          },
          {
            q: "4. Simplifier / Senplifye : T = √50 + √18 - √32",
            options: ["4√2", "2√2", "6√2", "8√2"],
            answer: 0,
            explication: "√50 = 5√2 ; √18 = 3√2 ; √32 = 4√2. Donc 5√2 + 3√2 - 4√2 = 4√2."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Un rectangle a une longueur L = 15 cm et une diagonale d = 17 cm. Calculer sa largeur l.",
            options: ["8 cm", "2 cm", "12 cm", "6 cm"],
            answer: 0,
            explication: "Pythagore : l² = d² - L² = 17² - 15² = 289 - 225 = 64 ⇒ l = √64 = 8 cm."
          },
          {
            q: "6. Dans le plan, on donne les vecteurs AB(4 ; -6) et CD(-2 ; 3). Ces deux vecteurs sont :",
            options: ["Colinéaires (parallèles)", "Orthogonaux (perpendiculaires)", "Égaux", "Opposés"],
            answer: 0,
            explication: "4 × 3 - (-6) × (-2) = 12 - 12 = 0 (déterminant nul), donc les vecteurs sont colinéaires."
          },
          {
            q: "7. Calculer la longueur d'un arc de cercle de rayon R = 6 cm intercepté par un angle au centre de 60° (π ≈ 3,14).",
            options: ["6,28 cm", "12,56 cm", "37,68 cm", "3,14 cm"],
            answer: 0,
            explication: "60° = 1/6 du cercle. Longueur = (2 × 3,14 × 6) / 6 = 6,28 cm."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Dans un sac de 50 billes, la fréquence d'apparition d'une bille rouge est 0,36. Combien y a-t-il de billes rouges ?",
            options: ["18", "36", "14", "25"],
            answer: 0,
            explication: "Effectif = Fréquence × Effectif total = 0,36 × 50 = 18 billes rouges."
          },
          {
            q: "9. Problème : Trois amis se partagent 6 000 Gds proportionnellement à 1, 2 et 3. Quelle est la part du plus grand ?",
            options: ["3 000 Gds", "2 000 Gds", "1 000 Gds", "4 000 Gds"],
            answer: 0,
            explication: "Total des parts = 1 + 2 + 3 = 6. Une part = 6 000 / 6 = 1 000 Gds. Le plus grand (3 parts) reçoit 3 000 Gds."
          }
        ]
      }
    ]
            },
    {
    titre: "Examen Officiel MENFP - Mathématiques (Session 2014)",
    annee: "2014",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Calculer et simplifier / Kalkile epi senplifye : A = (4/5 - 1/3) × 15/7",
            options: ["1", "3/7", "7/15", "2"],
            answer: 0,
            explication: "4/5 - 1/3 = 12/15 - 5/15 = 7/15. Ensuite 7/15 × 15/7 = 1."
          },
          {
            q: "2. Factoriser / Faktorize : P(x) = 16x² - 49",
            options: ["(4x - 7)(4x + 7)", "(4x - 7)²", "(8x - 7)(2x + 7)", "(16x - 7)(x + 7)"],
            answer: 0,
            explication: "a² - b² = (a - b)(a + b) ⇒ (4x)² - 7² = (4x - 7)(4x + 7)."
          },
          {
            q: "3. Résoudre dans ℝ l'équation / Rezoud : 5(x - 1) - 2(x + 3) = 4",
            options: ["x = 5", "x = 1", "x = -5", "x = 3"],
            answer: 0,
            explication: "5x - 5 - 2x - 6 = 4 ⇒ 3x - 11 = 4 ⇒ 3x = 15 ⇒ x = 5."
          },
          {
            q: "4. Simplifier / Senplifye : R = √98 - √50 + √8",
            options: ["4√2", "2√2", "6√2", "8√2"],
            answer: 0,
            explication: "√98 = 7√2 ; √50 = 5√2 ; √8 = 2√2. Donc 7√2 - 5√2 + 2√2 = 4√2."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Un triangle isocèle ABC a pour base BC = 10 cm et pour côtés égaux AB = AC = 13 cm. Calculer la hauteur AH issue de A.",
            options: ["12 cm", "8 cm", "15 cm", "11 cm"],
            answer: 0,
            explication: "H est le milieu de [BC], donc BH = 5 cm. Pythagore : AH² = 13² - 5² = 169 - 25 = 144 ⇒ AH = 12 cm."
          },
          {
            q: "6. Calculer l'aire d'un disque de diamètre D = 20 cm (prendre π ≈ 3,14).",
            options: ["314 cm²", "62,8 cm²", "1 256 cm²", "31,4 cm²"],
            answer: 0,
            explication: "Rayon R = 20 / 2 = 10 cm. Aire = π × R² = 3,14 × 100 = 314 cm²."
          },
          {
            q: "7. Dans un repère, on donne A(-1 ; 4) et B(3 ; 4). Calculer la distance AB.",
            options: ["4", "2", "8", "5"],
            answer: 0,
            explication: "AB = √[(3 - (-1))² + (4 - 4)²] = √[4² + 0] = 4."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Les notes d'un groupe sont : 09, 11, 13, 15, 17. Quelle est la moyenne ?",
            options: ["13", "12", "14", "15"],
            answer: 0,
            explication: "Somme = 9 + 11 + 13 + 15 + 17 = 65. Moyenne = 65 / 5 = 13."
          },
          {
            q: "9. Problème : Un élève dépense les 3/4 de son argent de poche. Il lui reste 150 Gds. Combien avait-il au départ ?",
            options: ["600 Gds", "450 Gds", "200 Gds", "750 Gds"],
            answer: 0,
            explication: "Il lui reste 1 - 3/4 = 1/4 de son argent. Si 1/4 = 150 Gds, total = 150 × 4 = 600 Gds."
          }
        ]
      }
    ]
  },
  {
    titre: "Examen Officiel MENFP - Mathématiques (Session 2013)",
    annee: "2013",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Développer et réduire / Devlope epi redwi : E = (x - 4)² + (2x + 1)(x - 4)",
            options: ["3x² - 15x + 12", "3x² - 11x + 12", "3x² - 15x + 20", "x² - 15x + 12"],
            answer: 0,
            explication: "(x² - 8x + 16) + (2x² - 8x + x - 4) = x² - 8x + 16 + 2x² - 7x - 4 = 3x² - 15x + 12."
          },
          {
            q: "2. Résoudre le système / Rezoud : { 3x + y = 14 ; 2x - y = 6 }",
            options: ["(4 ; 2)", "(2 ; 8)", "(5 ; -1)", "(3 ; 5)"],
            answer: 0,
            explication: "En additionnant : 5x = 20 ⇒ x = 4. Puis 3(4) + y = 14 ⇒ y = 2."
          },
          {
            q: "3. Résoudre dans ℝ l'inéquation / Rezoud : 2x + 7 < 5x - 2",
            options: ["x > 3", "x < 3", "x > -3", "x < -3"],
            answer: 0,
            explication: "2x - 5x < -2 - 7 ⇒ -3x < -9 ⇒ x > (-9)/(-3) ⇒ x > 3."
          },
          {
            q: "4. Calculer / Kalkile : M = (2 × 10³) × (3 × 10⁻⁵)",
            options: ["0,06", "0,6", "600", "0,006"],
            answer: 0,
            explication: "(2 × 3) × 10^(3 - 5) = 6 × 10⁻² = 0,06."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Dans un triangle MNP rectangle en M, MN = 8 cm et MP = 15 cm. Calculer NP.",
            options: ["17 cm", "23 cm", "13 cm", "19 cm"],
            answer: 0,
            explication: "Pythagore : NP² = 8² + 15² = 64 + 225 = 289 ⇒ NP = √289 = 17 cm."
          },
          {
            q: "6. Une pyramide régulière a une base carrée de côté 6 cm et une hauteur h = 10 cm. Calculer son volume.",
            options: ["120 cm³", "360 cm³", "60 cm³", "180 cm³"],
            answer: 0,
            explication: "Aire de base = 6 × 6 = 36 cm². Volume = (36 × 10) / 3 = 120 cm³."
          },
          {
            q: "7. Quel est le coefficient directeur de la droite passant par A(1 ; 3) et B(4 ; 9) ?",
            options: ["2", "3", "6", "1/2"],
            answer: 0,
            explication: "a = (yB - yA) / (xB - xA) = (9 - 3) / (4 - 1) = 6 / 3 = 2."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Dans une classe de 50 élèves, 35 ont réussi l'examen. Quel est le pourcentage d'échec ?",
            options: ["30 %", "70 %", "15 %", "35 %"],
            answer: 0,
            explication: "Échecs = 50 - 35 = 15 élèves. Pourcentage = (15 / 50) × 100 = 30 %."
          },
          {
            q: "9. Problème : Un rectangle a une longueur égale au triple de sa largeur. Son périmètre est 64 m. Calculer sa largeur.",
            options: ["8 m", "16 m", "24 m", "12 m"],
            answer: 0,
            explication: "Demi-périmètre = 32 m. L + l = 32 ⇒ 3l + l = 32 ⇒ 4l = 32 ⇒ l = 8 m."
          }
        ]
      }
    ]
  },
    {
    titre: "Examen Officiel MENFP - Mathématiques (Session 2012)",
    annee: "2012",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Calculer et simplifier / Kalkile epi senplifye : B = (2/5 + 3/10) ÷ (7/4)",
            options: ["2/5", "49/40", "7/10", "5/14"],
            answer: 0,
            explication: "2/5 + 3/10 = 4/10 + 3/10 = 7/10. Ensuite (7/10) ÷ (7/4) = (7/10) × (4/7) = 4/10 = 2/5."
          },
          {
            q: "2. Factoriser / Faktorize : F(x) = 25x² - 36",
            options: ["(5x - 6)(5x + 6)", "(5x - 6)²", "(25x - 6)(x + 6)", "(5x + 6)²"],
            answer: 0,
            explication: "Identité remarquable a² - b² = (a - b)(a + b) ⇒ (5x)² - 6² = (5x - 6)(5x + 6)."
          },
          {
            q: "3. Résoudre dans ℝ l'équation / Rezoud : (x + 3)/4 = (2x - 1)/3",
            options: ["x = 13/5", "x = 5/13", "x = -13/5", "x = 3"],
            answer: 0,
            explication: "Produit en croix : 3(x + 3) = 4(2x - 1) ⇒ 3x + 9 = 8x - 4 ⇒ 5x = 13 ⇒ x = 13/5."
          },
          {
            q: "4. Simplifier l'expression / Senplifye : K = √108 - √48 + √12",
            options: ["4√3", "2√3", "6√3", "8√3"],
            answer: 0,
            explication: "√108 = 6√3 ; √48 = 4√3 ; √12 = 2√3. Donc 6√3 - 4√3 + 2√3 = 4√3."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Dans un triangle ABC rectangle en A, AB = 12 cm et AC = 16 cm. Calculer l'hypoténuse BC.",
            options: ["20 cm", "28 cm", "14 cm", "18 cm"],
            answer: 0,
            explication: "Pythagore : BC² = 12² + 16² = 144 + 256 = 400 ⇒ BC = √400 = 20 cm."
          },
          {
            q: "6. Un cylindre a un diamètre D = 8 cm et une hauteur h = 5 cm (π ≈ 3,14). Calculer son volume.",
            options: ["251,2 cm³", "1 004,8 cm³", "125,6 cm³", "62,8 cm³"],
            answer: 0,
            explication: "Rayon R = 8 / 2 = 4 cm. Volume = π × R² × h = 3,14 × 16 × 5 = 251,2 cm³."
          },
          {
            q: "7. Dans un repère, on donne A(3 ; -1) et B(7 ; 5). Coordonnées du vecteur AB ?",
            options: ["(4 ; 6)", "(10 ; 4)", "(-4 ; -6)", "(4 ; 4)"],
            answer: 0,
            explication: "xAB = 7 - 3 = 4 et yAB = 5 - (-1) = 6 ⇒ AB(4 ; 6)."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Les tailles (en cm) de 6 élèves sont : 152, 158, 160, 162, 165, 170. Quelle est la médiane ?",
            options: ["161 cm", "160 cm", "162 cm", "159 cm"],
            answer: 0,
            explication: "Effectif pair (6) : médiane = moyenne des 3e et 4e valeurs = (160 + 162) / 2 = 161 cm."
          },
          {
            q: "9. Problème : Un article coûte 800 Gds après une augmentation de 25 %. Quel était son prix initial ?",
            options: ["640 Gds", "600 Gds", "775 Gds", "700 Gds"],
            answer: 0,
            explication: "Prix × 1,25 = 800 ⇒ Prix initial = 800 / 1,25 = 640 Gds."
          }
        ]
      }
    ]
  },
  {
    titre: "Examen Officiel MENFP - Mathématiques (Session 2011)",
    annee: "2011",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Développer et réduire / Devlope epi redwi : D = (2x + 3)² - (x - 4)(2x + 3)",
            options: ["2x² + 17x + 21", "2x² + x + 21", "6x² + 17x + 21", "2x² + 17x - 3"],
            answer: 0,
            explication: "(4x² + 12x + 9) - (2x² + 3x - 8x - 12) = 4x² + 12x + 9 - 2x² + 5x + 12 = 2x² + 17x + 21."
          },
          {
            q: "2. Résoudre le système / Rezoud : { 5x + 2y = 19 ; 3x - 2y = 5 }",
            options: ["(3 ; 2)", "(2 ; 3)", "(4 ; -0,5)", "(3 ; 4)"],
            answer: 0,
            explication: "En additionnant : 8x = 24 ⇒ x = 3. Puis 5(3) + 2y = 19 ⇒ 2y = 4 ⇒ y = 2."
          },
          {
            q: "3. Résoudre dans ℝ l'inéquation / Rezoud : 7 - 3x ≥ 1",
            options: ["x ≤ 2", "x ≥ 2", "x ≤ -2", "x ≥ -2"],
            answer: 0,
            explication: "-3x ≥ 1 - 7 ⇒ -3x ≥ -6 ⇒ x ≤ (-6)/(-3) ⇒ x ≤ 2."
          },
          {
            q: "4. Calculer / Kalkile : N = (4² × 2⁻³) + 7⁰",
            options: ["3", "2", "9", "1"],
            answer: 0,
            explication: "4² = 16 ; 2⁻³ = 1/8 ; 16 × (1/8) = 2. Puis 2 + 7⁰ = 2 + 1 = 3."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Théorème de Thalès : Dans le triangle EFG, (RS) // (FG), ER = 4, EF = 10, ES = 6. Calculer EG.",
            options: ["15", "12", "24", "10"],
            answer: 0,
            explication: "ER / EF = ES / EG ⇒ 4 / 10 = 6 / EG ⇒ EG = (10 × 6) / 4 = 15."
          },
          {
            q: "6. Un losange a un côté de 6,5 cm. Quel est son périmètre ?",
            options: ["26 cm", "13 cm", "42,25 cm", "19,5 cm"],
            answer: 0,
            explication: "Les 4 côtés d'un losange sont égaux : Périmètre = 4 × 6,5 = 26 cm."
          },
          {
            q: "7. Quelle est l'équation de la droite passant par A(2 ; 5) et parallèle à la droite y = 4x - 1 ?",
            options: ["y = 4x - 3", "y = 4x + 3", "y = 4x + 5", "y = -4x + 13"],
            answer: 0,
            explication: "Même pente a = 4 : 5 = 4(2) + b ⇒ b = 5 - 8 = -3 ⇒ y = 4x - 3."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Dans une école de 400 élèves, 45 % sont des garçons. Combien y a-t-il de filles ?",
            options: ["220 filles", "180 filles", "200 filles", "255 filles"],
            answer: 0,
            explication: "Filles = 100 % - 45 % = 55 %. Nombre = 400 × 55/100 = 220 filles."
          },
          {
            q: "9. Problème : Un cycliste roule à 24 km/h pendant 1 heure 15 minutes. Quelle distance parcourt-il ?",
            options: ["30 km", "28 km", "36 km", "25,5 km"],
            answer: 0,
            explication: "1 h 15 min = 1,25 heure. Distance = Vitesse × Temps = 24 × 1,25 = 30 km."
          }
        ]
      }
    ]
              },
    {
    titre: "Examen Officiel MENFP - Mathématiques (Session 2010)",
    annee: "2010",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Calculer et simplifier / Kalkile epi senplifye : A = (5/8 - 1/4) × (4/3)",
            options: ["1/2", "3/8", "2/3", "1/4"],
            answer: 0,
            explication: "5/8 - 1/4 = 5/8 - 2/8 = 3/8. Ensuite (3/8) × (4/3) = 4/8 = 1/2."
          },
          {
            q: "2. Factoriser / Faktorize : P(x) = 36x² - 1",
            options: ["(6x - 1)(6x + 1)", "(6x - 1)²", "(36x - 1)(x + 1)", "(6x + 1)²"],
            answer: 0,
            explication: "Identité remarquable a² - b² = (a - b)(a + b) ⇒ (6x)² - 1² = (6x - 1)(6x + 1)."
          },
          {
            q: "3. Résoudre dans ℝ l'équation / Rezoud : 2(3x - 4) = 4x + 6",
            options: ["x = 7", "x = 1", "x = -1", "x = 5"],
            answer: 0,
            explication: "6x - 8 = 4x + 6 ⇒ 6x - 4x = 6 + 8 ⇒ 2x = 14 ⇒ x = 7."
          },
          {
            q: "4. Simplifier / Senplifye : S = √72 + √32 - √50",
            options: ["5√2", "3√2", "7√2", "9√2"],
            answer: 0,
            explication: "√72 = 6√2 ; √32 = 4√2 ; √50 = 5√2. Donc 6√2 + 4√2 - 5√2 = 5√2."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Dans un triangle ABC rectangle en A, AB = 15 cm et AC = 20 cm. Calculer l'hypoténuse BC.",
            options: ["25 cm", "35 cm", "18 cm", "30 cm"],
            answer: 0,
            explication: "Pythagore : BC² = 15² + 20² = 225 + 400 = 625 ⇒ BC = √625 = 25 cm."
          },
          {
            q: "6. Quel est le périmètre d'un demi-cercle de rayon R = 10 cm (prendre π ≈ 3,14) ?",
            options: ["51,4 cm", "31,4 cm", "62,8 cm", "157 cm"],
            answer: 0,
            explication: "Arc = π × R = 31,4 cm + diamètre (2 × 10 = 20 cm) = 51,4 cm."
          },
          {
            q: "7. Dans un repère, on donne A(4 ; 2) et B(-2 ; 8). Coordonnées du milieu K de [AB] ?",
            options: ["(1 ; 5)", "(2 ; 10)", "(3 ; -3)", "(6 ; -6)"],
            answer: 0,
            explication: "xK = (4 + (-2))/2 = 1 et yK = (2 + 8)/2 = 5 ⇒ K(1 ; 5)."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Voici les notes d'un élève : 10, 12, 14, 16, 18. Quelle est la moyenne ?",
            options: ["14", "13", "15", "12"],
            answer: 0,
            explication: "Somme = 10 + 12 + 14 + 16 + 18 = 70. Moyenne = 70 / 5 = 14."
          },
          {
            q: "9. Problème : Un terrain carré a un périmètre de 120 m. On le vend à 500 Gds le m². Prix total ?",
            options: ["450 000 Gds", "60 000 Gds", "300 000 Gds", "150 000 Gds"],
            answer: 0,
            explication: "Côté c = 120 / 4 = 30 m. Aire = 30 × 30 = 900 m². Prix = 900 × 500 = 450 000 Gds."
          }
        ]
      }
    ]
  },
  {
    titre: "Examen Blanc Spécial MENFP #1 - Mathématiques (9ème)",
    annee: "Modèle 1",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Développer et réduire / Devlope epi redwi : M = (3x - 2)(x + 5) - (x + 2)²",
            options: ["2x² + 9x - 14", "2x² + 17x - 6", "4x² + 9x - 14", "2x² + 9x - 6"],
            answer: 0,
            explication: "(3x² + 15x - 2x - 10) - (x² + 4x + 4) = 3x² + 13x - 10 - x² - 4x - 4 = 2x² + 9x - 14."
          },
          {
            q: "2. Résoudre le système / Rezoud : { 2x + 3y = 16 ; x - y = 3 }",
            options: ["(5 ; 2)", "(2 ; 5)", "(4 ; 1)", "(6 ; 3)"],
            answer: 0,
            explication: "x = y + 3. On remplace : 2(y + 3) + 3y = 16 ⇒ 5y + 6 = 16 ⇒ 5y = 10 ⇒ y = 2, et x = 5."
          },
          {
            q: "3. Résoudre dans ℝ l'inéquation / Rezoud : (x - 2)/3 + 1 > 2",
            options: ["x > 5", "x < 5", "x > 1", "x > 3"],
            answer: 0,
            explication: "(x - 2)/3 > 1 ⇒ x - 2 > 3 ⇒ x > 5."
          },
          {
            q: "4. Calculer / Kalkile : P = (10⁴ × 10⁻²) / 10⁻³",
            options: ["10⁵", "10⁻¹", "10⁹", "10"],
            answer: 0,
            explication: "10^(4 - 2) / 10⁻³ = 10² / 10⁻³ = 10^(2 - (-3)) = 10⁵."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Dans un triangle rectangle, sin(α) = 0,6 et cos(α) = 0,8. Calculer tan(α).",
            options: ["0,75", "1,33", "0,48", "1,4"],
            answer: 0,
            explication: "tan(α) = sin(α) / cos(α) = 0,6 / 0,8 = 6/8 = 3/4 = 0,75."
          },
          {
            q: "6. Calculer l'aire latérale d'un cylindre de rayon R = 5 cm et de hauteur h = 8 cm (π ≈ 3,14).",
            options: ["251,2 cm²", "628 cm²", "125,6 cm²", "40 cm²"],
            answer: 0,
            explication: "Aire latérale = 2 × π × R × h = 2 × 3,14 × 5 × 8 = 251,2 cm²."
          },
          {
            q: "7. Les droites (D1) : y = 2x + 1 et (D2) : y = -0,5x + 4 sont :",
            options: ["Perpendiculaires", "Parallèles", "Confondues", "Horizontales"],
            answer: 0,
            explication: "Le produit de leurs pentes vaut a1 × a2 = 2 × (-0,5) = -1, donc elles sont perpendiculaires."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Dans une classe, 18 élèves ont eu la moyenne sur 24 présents. Quel est le pourcentage de réussite ?",
            options: ["75 %", "80 %", "60 %", "72 %"],
            answer: 0,
            explication: "Pourcentage = (18 / 24) × 100 = (3 / 4) × 100 = 75 %."
          },
          {
            q: "9. Problème : Un marchand achète 120 cahiers à 40 Gds l'unité. Il en vend 90 à 60 Gds et le reste à 30 Gds. Son bénéfice ?",
            options: ["1 500 Gds", "6 300 Gds", "4 800 Gds", "1 200 Gds"],
            answer: 0,
            explication: "Achat = 120 × 40 = 4 800 Gds. Vente = (90 × 60) + (30 × 30) = 5 400 + 900 = 6 300 Gds. Bénéfice = 6 300 - 4 800 = 1 500 Gds."
          }
        ]
      }
    ]
  },
  {
    titre: "Examen Blanc Spécial MENFP #2 - Mathématiques (9ème)",
    annee: "Modèle 2",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Calculer et simplifier / Kalkile epi senplifye : C = (7/9 - 2/3) ÷ (5/18)",
            options: ["2/5", "5/162", "1/9", "3/5"],
            answer: 0,
            explication: "7/9 - 2/3 = 7/9 - 6/9 = 1/9. Ensuite (1/9) ÷ (5/18) = (1/9) × (18/5) = 18/45 = 2/5."
          },
          {
            q: "2. Factoriser / Faktorize : Q(x) = (4x - 1)² - (x + 3)²",
            options: ["(3x - 4)(5x + 2)", "(3x + 2)(5x - 4)", "(5x - 2)(3x + 4)", "(3x - 4)(5x - 2)"],
            answer: 0,
            explication: "a² - b² = (a - b)(a + b) ⇒ [(4x - 1) - (x + 3)][(4x - 1) + (x + 3)] = (3x - 4)(5x + 2)."
          },
          {
            q: "3. Résoudre dans ℝ l'équation / Rezoud : 3(2x + 1) - 4(x - 2) = 19",
            options: ["x = 4", "x = 15", "x = -4", "x = 2"],
            answer: 0,
            explication: "6x + 3 - 4x + 8 = 19 ⇒ 2x + 11 = 19 ⇒ 2x = 8 ⇒ x = 4."
          },
          {
            q: "4. Simplifier l'expression / Senplifye : L = 2√63 - 3√28 + √7",
            options: ["√7", "3√7", "5√7", "0"],
            answer: 0,
            explication: "2√63 = 6√7 ; 3√28 = 6√7. Donc 6√7 - 6√7 + √7 = √7."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Dans un triangle ABC rectangle en C, AC = 7 cm et BC = 24 cm. Calculer l'hypoténuse AB.",
            options: ["25 cm", "31 cm", "17 cm", "23 cm"],
            answer: 0,
            explication: "Pythagore : AB² = 7² + 24² = 49 + 576 = 625 ⇒ AB = √625 = 25 cm."
          },
          {
            q: "6. Un cône a un rayon R = 3 cm et une hauteur h = 4 cm. Quelle est la longueur de sa génératrice g ?",
            options: ["5 cm", "7 cm", "12 cm", "25 cm"],
            answer: 0,
            explication: "g² = R² + h² = 3² + 4² = 9 + 16 = 25 ⇒ g = √25 = 5 cm."
          },
          {
            q: "7. Dans un repère, on donne A(2 ; 1), B(5 ; 3) et C(8 ; 5). Ces trois points sont :",
            options: ["Alignés", "Sommets d'un triangle rectangle", "Sommets d'un triangle équilatéral", "Confondus"],
            answer: 0,
            explication: "Vecteur AB(3 ; 2) et vecteur AC(6 ; 4) = 2 × AB. Les vecteurs sont colinéaires, donc A, B, C sont alignés."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Dans une enquête auprès de 60 élèves, l'angle d'un secteur circulaire est de 90°. Quel effectif représente-t-il ?",
            options: ["15 élèves", "20 élèves", "30 élèves", "12 élèves"],
            answer: 0,
            explication: "90° / 360° = 1/4 du cercle. Effectif = 60 × (1/4) = 15 élèves."
          },
          {
            q: "9. Problème : Un robinet remplit un bassin en 6 heures et un autre en 3 heures. En combien de temps le remplissent-ils ensemble ?",
            options: ["2 heures", "4,5 heures", "9 heures", "1,5 heure"],
            answer: 0,
            explication: "En 1 heure, ils remplissent 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 du bassin. Il faut donc 2 heures."
          }
        ]
      }
    ]
  },
  {
    titre: "Examen Blanc Spécial MENFP #3 - Mathématiques (9ème)",
    annee: "Modèle 3",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Développer et réduire / Devlope epi redwi : K = (4x - 3)(2x + 1) - (3x - 2)²",
            options: ["-x² + 10x - 7", "-x² - 14x - 7", "17x² - 14x + 1", "-x² + 10x + 1"],
            answer: 0,
            explication: "(8x² + 4x - 6x - 3) - (9x² - 12x + 4) = 8x² - 2x - 3 - 9x² + 12x - 4 = -x² + 10x - 7."
          },
          {
            q: "2. Résoudre le système / Rezoud : { 3x + 4y = 25 ; 2x - y = 2 }",
            options: ["(3 ; 4)", "(4 ; 3)", "(5 ; 2,5)", "(2 ; 2)"],
            answer: 0,
            explication: "y = 2x - 2. On remplace : 3x + 4(2x - 2) = 25 ⇒ 11x - 8 = 25 ⇒ 11x = 33 ⇒ x = 3, et y = 4."
          },
          {
            q: "3. Résoudre dans ℝ l'inéquation / Rezoud : (2x - 5)/3 ≤ (x + 1)/2",
            options: ["x ≤ 13", "x ≥ 13", "x ≤ 7", "x ≤ -13"],
            answer: 0,
            explication: "2(2x - 5) ≤ 3(x + 1) ⇒ 4x - 10 ≤ 3x + 3 ⇒ x ≤ 13."
          },
          {
            q: "4. Calculer la valeur exacte de : V = √(16/25) + √(9/4)",
            options: ["2,3", "1,4", "2,5", "1,8"],
            answer: 0,
            explication: "√(16/25) = 4/5 = 0,8 ; √(9/4) = 3/2 = 1,5. Donc 0,8 + 1,5 = 2,3."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Théorème de Thalès : Dans le triangle ABC, (DE) // (BC), AD = 5, DB = 3, AE = 10. Calculer EC.",
            options: ["6", "16", "15", "8"],
            answer: 0,
            explication: "AD / DB = AE / EC ⇒ 5 / 3 = 10 / EC ⇒ EC = (3 × 10) / 5 = 6."
          },
          {
            q: "6. Quelle est l'aire totale (les 6 faces) d'un cube d'arête a = 4 cm ?",
            options: ["96 cm²", "64 cm³", "24 cm²", "16 cm²"],
            answer: 0,
            explication: "Aire d'une face = 4 × 4 = 16 cm². Aire totale (6 faces) = 6 × 16 = 96 cm²."
          },
          {
            q: "7. Dans un repère, trouver l'équation de la droite passant par A(1 ; 4) et B(3 ; 10).",
            options: ["y = 3x + 1", "y = 3x - 1", "y = 2x + 2", "y = 3x + 4"],
            answer: 0,
            explication: "Pente a = (10 - 4)/(3 - 1) = 3. Puis 4 = 3(1) + b ⇒ b = 1 ⇒ y = 3x + 1."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Les salaires journaliers (en Gds) de 5 ouvriers sont : 1 000, 1 200, 1 500, 1 800, 2 000. Salaire moyen ?",
            options: ["1 500 Gds", "1 400 Gds", "1 600 Gds", "1 250 Gds"],
            answer: 0,
            explication: "Somme = 7 500 Gds. Moyenne = 7 500 / 5 = 1 500 Gds."
          },
          {
            q: "9. Problème : Un bus quitte Hinche à 7h 45 min et arrive à Port-au-Prince à 11h 15 min. Durée du trajet ?",
            options: ["3 h 30 min", "4 h 30 min", "3 h 15 min", "2 h 30 min"],
            answer: 0,
            explication: "De 7h 45 à 11h 45 il y a 4h ; on enlève 30 min ⇒ 3 heures 30 minutes."
          }
        ]
      }
    ]
  },
   {
    titre: "Examen Blanc Spécial MENFP #4 - Mathématiques (9ème)",
    annee: "Modèle 4",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Calculer et simplifier / Kalkile epi senplifye : A = (2/3 - 1/4) ÷ (5/6)",
            options: ["1/2", "25/72", "5/12", "3/4"],
            answer: 0,
            explication: "2/3 - 1/4 = 8/12 - 3/12 = 5/12. Ensuite (5/12) ÷ (5/6) = (5/12) × (6/5) = 6/12 = 1/2."
          },
          {
            q: "2. Factoriser / Faktorize : P(x) = 4x² + 12x + 9",
            options: ["(2x + 3)²", "(2x - 3)²", "(4x + 3)(x + 3)", "(2x + 9)²"],
            answer: 0,
            explication: "Identité remarquable a² + 2ab + b² = (a + b)² : (2x)² + 2(2x)(3) + 3² = (2x + 3)²."
          },
          {
            q: "3. Résoudre dans ℝ l'équation / Rezoud : 7x - 5 = 3(x + 3) + 2",
            options: ["x = 4", "x = 2", "x = -4", "x = 1,6"],
            answer: 0,
            explication: "7x - 5 = 3x + 9 + 2 ⇒ 7x - 3x = 11 + 5 ⇒ 4x = 16 ⇒ x = 4."
          },
          {
            q: "4. Simplifier / Senplifye : H = √125 - 2√45 + √20",
            options: ["√5", "3√5", "5√5", "2√5"],
            answer: 0,
            explication: "√125 = 5√5 ; 2√45 = 6√5 ; √20 = 2√5. Donc 5√5 - 6√5 + 2√5 = √5."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Dans un triangle RST rectangle en R, RS = 6 cm et ST (hypoténuse) = 10 cm. Calculer RT.",
            options: ["8 cm", "16 cm", "4 cm", "12 cm"],
            answer: 0,
            explication: "Pythagore : RT² = ST² - RS² = 10² - 6² = 100 - 36 = 64 ⇒ RT = √64 = 8 cm."
          },
          {
            q: "6. Calculer l'aire d'un secteur circulaire d'angle 90° dans un disque de rayon R = 8 cm (π ≈ 3,14).",
            options: ["50,24 cm²", "200,96 cm²", "25,12 cm²", "100,48 cm²"],
            answer: 0,
            explication: "90° = 1/4 du disque. Aire = (3,14 × 8²) / 4 = (3,14 × 64) / 4 = 3,14 × 16 = 50,24 cm²."
          },
          {
            q: "7. Dans un repère, on donne A(0 ; -3) et B(4 ; 5). Calculer la pente (coefficient directeur) de (AB).",
            options: ["2", "-2", "1/2", "8"],
            answer: 0,
            explication: "a = (yB - yA) / (xB - xA) = (5 - (-3)) / (4 - 0) = 8 / 4 = 2."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Les notes d'un élève sont : 11, 14, 09, 16, 15. Quelle est l'étendue de cette série ?",
            options: ["7", "13", "14", "5"],
            answer: 0,
            explication: "Étendue = Note maximale - Note minimale = 16 - 9 = 7."
          },
          {
            q: "9. Problème : Un réservoir de 800 litres est rempli aux 3/4. Combien de litres d'eau faut-il ajouter pour le remplir complètement ?",
            options: ["200 litres", "600 litres", "400 litres", "150 litres"],
            answer: 0,
            explication: "Il manque 1 - 3/4 = 1/4 du réservoir. Quantité à ajouter = 800 × (1/4) = 200 litres."
          }
        ]
      }
    ]
  },
  {
    titre: "Examen Blanc Spécial MENFP #5 - Mathématiques (9ème)",
    annee: "Modèle 5",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Développer et réduire / Devlope epi redwi : S = (5x - 1)(x + 2) - (2x - 3)(2x + 3)",
            options: ["x² + 9x + 7", "x² + 9x - 11", "9x² + 9x + 7", "x² - 11x + 7"],
            answer: 0,
            explication: "(5x² + 10x - x - 2) - (4x² - 9) = 5x² + 9x - 2 - 4x² + 9 = x² + 9x + 7."
          },
          {
            q: "2. Résoudre le système / Rezoud : { 4x - y = 11 ; x + y = 9 }",
            options: ["(4 ; 5)", "(5 ; 4)", "(3 ; 6)", "(2 ; 7)"],
            answer: 0,
            explication: "En additionnant : 5x = 20 ⇒ x = 4. Puis 4 + y = 9 ⇒ y = 5."
          },
          {
            q: "3. Résoudre dans ℝ l'inéquation / Rezoud : 4(x + 2) ≤ 6x - 2",
            options: ["x ≥ 5", "x ≤ 5", "x ≥ -5", "x ≤ -5"],
            answer: 0,
            explication: "4x + 8 ≤ 6x - 2 ⇒ 4x - 6x ≤ -2 - 8 ⇒ -2x ≤ -10 ⇒ x ≥ (-10)/(-2) ⇒ x ≥ 5."
          },
          {
            q: "4. Calculer la valeur de : W = (3² × 10⁴) / (9 × 10²)",
            options: ["100", "10", "1 000", "300"],
            answer: 0,
            explication: "3² = 9, donc 9 / 9 = 1. Il reste 10⁴ / 10² = 10² = 100."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Un rectangle a pour aire 108 cm² et pour longueur 12 cm. Calculer son périmètre.",
            options: ["42 cm", "21 cm", "36 cm", "48 cm"],
            answer: 0,
            explication: "Largeur l = Aire / Longueur = 108 / 12 = 9 cm. Périmètre = 2 × (12 + 9) = 2 × 21 = 42 cm."
          },
          {
            q: "6. Dans un triangle ABC rectangle en B, cos(Â) = 0,6 et le côté adjacent AB = 9 cm. Calculer l'hypoténuse AC.",
            options: ["15 cm", "5,4 cm", "12 cm", "18 cm"],
            answer: 0,
            explication: "cos(Â) = Adjacent / Hypoténuse ⇒ 0,6 = 9 / AC ⇒ AC = 9 / 0,6 = 15 cm."
          },
          {
            q: "7. Quelle est la distance entre les points M(-2 ; 1) et N(2 ; 4) ?",
            options: ["5", "7", "3", "25"],
            answer: 0,
            explication: "MN = √[(2 - (-2))² + (4 - 1)²] = √[4² + 3²] = √[16 + 9] = √25 = 5."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Dans une entreprise de 80 employés, 60 sont des hommes. Quel est le pourcentage de femmes ?",
            options: ["25 %", "75 %", "20 %", "40 %"],
            answer: 0,
            explication: "Femmes = 80 - 60 = 20. Pourcentage = (20 / 80) × 100 = 25 %."
          },
          {
            q: "9. Problème : Un commerçant achète 50 kg de sucre à 90 Gds le kg. Il revend le tout pour 5 400 Gds. Quel est son pourcentage de bénéfice ?",
            options: ["20 %", "15 %", "25 %", "18 %"],
            answer: 0,
            explication: "Prix d'achat = 50 × 90 = 4 500 Gds. Bénéfice = 5 400 - 4 500 = 900 Gds. Taux = (900 / 4 500) × 100 = 20 %."
          }
        ]
      }
    ]
              },
    {
    titre: "Examen Blanc Spécial MENFP #6 - Mathématiques (9ème)",
    annee: "Modèle 6",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Calculer et simplifier / Kalkile epi senplifye : B = (5/6 - 1/2) ÷ (4/9)",
            options: ["3/4", "4/27", "1/3", "2/3"],
            answer: 0,
            explication: "5/6 - 1/2 = 5/6 - 3/6 = 2/6 = 1/3. Ensuite (1/3) ÷ (4/9) = (1/3) × (9/4) = 9/12 = 3/4."
          },
          {
            q: "2. Factoriser / Faktorize : Q(x) = 49x² - 64",
            options: ["(7x - 8)(7x + 8)", "(7x - 8)²", "(49x - 8)(x + 8)", "(7x + 8)²"],
            answer: 0,
            explication: "Identité remarquable a² - b² = (a - b)(a + b) ⇒ (7x)² - 8² = (7x - 8)(7x + 8)."
          },
          {
            q: "3. Résoudre dans ℝ l'équation / Rezoud : 3(2x - 5) = 4(x - 1) + 1",
            options: ["x = 6", "x = -6", "x = 5", "x = 2"],
            answer: 0,
            explication: "6x - 15 = 4x - 4 + 1 ⇒ 6x - 4x = -3 + 15 ⇒ 2x = 12 ⇒ x = 6."
          },
          {
            q: "4. Simplifier / Senplifye : Z = √162 - √72 + √18",
            options: ["6√2", "4√2", "8√2", "3√2"],
            answer: 0,
            explication: "√162 = 9√2 ; √72 = 6√2 ; √18 = 3√2. Donc 9√2 - 6√2 + 3√2 = 6√2."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Dans un triangle ABC rectangle en A, AB = 20 cm et AC = 21 cm. Calculer l'hypoténuse BC.",
            options: ["29 cm", "41 cm", "25 cm", "31 cm"],
            answer: 0,
            explication: "Pythagore : BC² = 20² + 21² = 400 + 441 = 841 ⇒ BC = √841 = 29 cm."
          },
          {
            q: "6. Un cylindre a un rayon R = 5 cm et un volume V = 314 cm³ (π ≈ 3,14). Quelle est sa hauteur h ?",
            options: ["4 cm", "20 cm", "12,56 cm", "8 cm"],
            answer: 0,
            explication: "V = π × R² × h ⇒ 314 = 3,14 × 25 × h ⇒ 314 = 78,5 × h ⇒ h = 314 / 78,5 = 4 cm."
          },
          {
            q: "7. Dans un repère, on donne A(3 ; 7) et le milieu M(5 ; 4) du segment [AB]. Coordonnées du point B ?",
            options: ["(7 ; 1)", "(4 ; 5,5)", "(2 ; -3)", "(8 ; 11)"],
            answer: 0,
            explication: "xB = 2×xM - xA = 2(5) - 3 = 7 ; yB = 2×yM - yA = 2(4) - 7 = 1 ⇒ B(7 ; 1)."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Dans une série de 20 données, l'effectif d'une valeur est 5. Quelle est sa fréquence en pourcentage ?",
            options: ["25 %", "5 %", "20 %", "40 %"],
            answer: 0,
            explication: "Fréquence = (5 / 20) × 100 = 0,25 × 100 = 25 %."
          },
          {
            q: "9. Problème : Une somme de 12 000 Gds est placée à 6 % par an. Quel est le montant total (capital + intérêts) après 1 an ?",
            options: ["12 720 Gds", "720 Gds", "12 600 Gds", "13 200 Gds"],
            answer: 0,
            explication: "Intérêt = 12 000 × 6/100 = 720 Gds. Total = 12 000 + 720 = 12 720 Gds."
          }
        ]
      }
    ]
  },
  {
    titre: "Examen Blanc Spécial MENFP #7 - Mathématiques (9ème)",
    annee: "Modèle 7",
    duree: "2 heures",
    coef: "4",
    parties: [
      {
        partie: "PARTIE I : ALGÈBRE (40 points)",
        questions: [
          {
            q: "1. Développer et réduire / Devlope epi redwi : T = (3x + 4)(2x - 1) - (x - 5)²",
            options: ["5x² + 15x - 29", "5x² - 5x - 29", "7x² + 15x + 21", "5x² + 15x + 21"],
            answer: 0,
            explication: "(6x² - 3x + 8x - 4) - (x² - 10x + 25) = 6x² + 5x - 4 - x² + 10x - 25 = 5x² + 15x - 29."
          },
          {
            q: "2. Résoudre le système / Rezoud : { 5x - 3y = 11 ; 2x + 3y = 10 }",
            options: ["(3 ; 4/3)", "(2 ; 2)", "(4 ; 3)", "(3 ; 2)"],
            answer: 0,
            explication: "En additionnant : 7x = 21 ⇒ x = 3. Puis 2(3) + 3y = 10 ⇒ 3y = 4 ⇒ y = 4/3."
          },
          {
            q: "3. Résoudre dans ℝ l'inéquation / Rezoud : (3x + 2)/4 > (x - 1)/2",
            options: ["x > -4", "x < -4", "x > 4", "x > 0"],
            answer: 0,
            explication: "3x + 2 > 2(x - 1) ⇒ 3x + 2 > 2x - 2 ⇒ 3x - 2x > -2 - 2 ⇒ x > -4."
          },
          {
            q: "4. Calculer / Kalkile : E = (5³ × 2³) / 10²",
            options: ["10", "100", "1", "50"],
            answer: 0,
            explication: "5³ × 2³ = (5 × 2)³ = 10³ = 1 000. Divisé par 10² (100) = 10."
          }
        ]
      },
      {
        partie: "PARTIE II : GÉOMÉTRIE (35 points)",
        questions: [
          {
            q: "5. Théorème de Thalès : Dans le triangle ABC, (MN) // (BC), AM = 6, AB = 15, BC = 20. Calculer MN.",
            options: ["8", "10", "12", "50"],
            answer: 0,
            explication: "AM / AB = MN / BC ⇒ 6 / 15 = MN / 20 ⇒ MN = (6 × 20) / 15 = 120 / 15 = 8."
          },
          {
            q: "6. Un carré a une diagonale d = 6√2 cm. Quelle est la longueur de son côté ?",
            options: ["6 cm", "12 cm", "3 cm", "36 cm"],
            answer: 0,
            explication: "La diagonale d'un carré de côté c vaut d = c√2. Si d = 6√2, alors c = 6 cm."
          },
          {
            q: "7. Quelle est l'équation de la droite passant par l'origine O(0 ; 0) et par le point P(-2 ; 8) ?",
            options: ["y = -4x", "y = 4x", "y = -0,25x", "y = -4x + 8"],
            answer: 0,
            explication: "Fonction linéaire y = ax avec a = 8 / (-2) = -4 ⇒ y = -4x."
          }
        ]
      },
      {
        partie: "PARTIE III : STATISTIQUES & PROBLÈME (25 points)",
        questions: [
          {
            q: "8. Voici les notes d'un contrôle : 08, 10, 12, 12, 14, 16, 19. Quelle est la médiane ?",
            options: ["12", "13", "14", "11"],
            answer: 0,
            explication: "La série ordonnée comporte 7 notes : la valeur centrale (4e note) est 12."
          },
          {
            q: "9. Problème : Un réservoir d'essence est plein aux 2/3. On ajoute 15 litres et il est alors plein aux 5/6. Capacité totale du réservoir ?",
            options: ["90 litres", "60 litres", "75 litres", "120 litres"],
            answer: 0,
            explication: "Les 15 litres représentent 5/6 - 2/3 = 5/6 - 4/6 = 1/6 du réservoir. Capacité = 15 × 6 = 90 litres."
          }
        ]
      }
    ]
            }
];
