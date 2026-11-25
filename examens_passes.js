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
            }
  
];
