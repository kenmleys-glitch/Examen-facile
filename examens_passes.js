const examensPasses = [
  // ================= EGZAMEN 1 : MENFP 2024 (Modèl Ofisyèl) =================
  {
    id: "math_9eme_01",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2024 - Session 1",
    annee: 2024,
    questions: [
      {
        q: "Calculer et simplifier / Kalkile epi senplifye : A = (2/3 + 1/6) × 3/5",
        options: ["1/2", "3/10", "5/6", "2/5"],
        answer: 0,
        explication: "2/3 + 1/6 = 4/6 + 1/6 = 5/6. Ensuite 5/6 × 3/5 = 3/6 = 1/2."
      },
      {
        q: "Résoudre dans ℝ l'équation / Rezoud ekwasyon an : 3x - 7 = 2x + 5",
        options: ["x = -2", "x = 12", "x = 2", "x = -12"],
        answer: 1,
        explication: "3x - 2x = 5 + 7 => x = 12."
      },
      {
        q: "Factoriser l'expression / Faktorize : P(x) = 4x² - 25",
        options: ["(2x - 5)²", "(4x - 5)(x + 5)", "(2x - 5)(2x + 5)", "(2x + 5)²"],
        answer: 2,
        explication: "Idantite remakab a² - b² = (a - b)(a + b) ak a = 2x epi b = 5."
      },
      {
        q: "Dans un triangle ABC rectangle en A, AB = 6 cm et AC = 8 cm. Calculer BC.",
        options: ["14 cm", "10 cm", "48 cm", "100 cm"],
        answer: 1,
        explication: "Daprè teyorèm Pitagò : BC² = AB² + AC² = 36 + 64 = 100 => BC = √100 = 10 cm."
      },
      {
        q: "Résoudre l'inéquation / Rezoud inekasyon an : -2x + 4 > 10",
        options: ["x > -3", "x < 3", "x < -3", "x > 3"],
        answer: 2,
        explication: "-2x > 6 => Lè nou divize pa -2, siy lan chanje : x < -3."
      }
    ]
  },

  // ================= EGZAMEN 2 : MENFP 2023 =================
  {
    id: "math_9eme_02",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2023 - Session 1",
    annee: 2023,
    questions: [
      {
        q: "Développer et réduire / Devlope epi redwi : E = (x - 3)(2x + 5)",
        options: ["2x² - x - 15", "2x² + x - 15", "2x² - 11x - 15", "2x² - 15"],
        answer: 0,
        explication: "2x² + 5x - 6x - 15 = 2x² - x - 15."
      },
      {
        q: "Calculer la valeur numérique de f(x) = -2x² + 3x - 1 pour x = -2",
        options: ["-15", "1", "-3", "13"],
        answer: 0,
        explication: "f(-2) = -2(-2)² + 3(-2) - 1 = -2(4) - 6 - 1 = -8 - 6 - 1 = -15."
      },
      {
        q: "Le périmètre d'un rectangle est 36 cm. Sa longueur est le double de sa largeur. Trouver la largeur.",
        options: ["12 cm", "6 cm", "9 cm", "18 cm"],
        answer: 1,
        explication: "2(2l + l) = 36 => 6l = 36 => l = 6 cm."
      },
      {
        q: "Simplifier l'écriture / Senplifye : √75 - 2√12 + √27",
        options: ["4√3", "2√3", "6√3", "3√3"],
        answer: 0,
        explication: "5√3 - 2(2√3) + 3√3 = (5 - 4 + 3)√3 = 4√3."
      },
      {
        q: "Quelle est la médiane de la série statistique : 12 ; 8 ; 15 ; 10 ; 18 ?",
        options: ["15", "12,6", "12", "10"],
        answer: 2,
        explication: "Nou klase yo nan lòd : 8 ; 10 ; 12 ; 15 ; 18. Valè ki nan mitan an se 12."
      }
    ]
  },

  // ================= EGZAMEN 3 : MENFP 2022 =================
  {
    id: "math_9eme_03",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2022 - Session 1",
    annee: 2022,
    questions: [
      {
        q: "Résoudre le système / Rezoud sistèm nan : { x + y = 10 ; x - y = 4 }",
        options: ["(7 ; 3)", "(3 ; 7)", "(6 ; 4)", "(8 ; 2)"],
        answer: 0,
        explication: "Lè nou adisyone de ekwasyon yo : 2x = 14 => x = 7, epi y = 10 - 7 = 3."
      },
      {
        q: "Soit une fonction linéaire f(x) = ax telle que f(3) = -12. Déterminer a.",
        options: ["4", "-4", "-9", "-36"],
        answer: 1,
        explication: "3a = -12 => a = -12 / 3 = -4."
      },
      {
        q: "Un article coûte 2 500 gourdes. On accorde une remise de 20%. Quel est le nouveau prix ?",
        options: ["2 000 gourdes", "500 gourdes", "2 480 gourdes", "3 000 gourdes"],
        answer: 0,
        explication: "Remiz = 2500 × 20/100 = 500 goud. Nouvo pri = 2500 - 500 = 2000 goud."
      },
      {
        q: "Calculer l'aire d'un disque de rayon R = 5 cm (prendre π ≈ 3,14).",
        options: ["31,4 cm²", "78,5 cm²", "15,7 cm²", "25 cm²"],
        answer: 1,
        explication: "Aire = π × R² = 3,14 × 25 = 78,5 cm²."
      },
      {
        q: "Écrire en notation scientifique / Ekri an notasyon syantifik : 0,00045",
        options: ["4,5 × 10⁻⁴", "4,5 × 10⁴", "45 × 10⁻⁵", "0,45 × 10⁻³"],
        answer: 0,
        explication: "Nou deplase vigil la 4 chif adwat : 4,5 × 10⁻⁴."
      }
    ]
  },

  // ================= EGZAMEN 4 : MENFP 2021 =================
  {
    id: "math_9eme_04",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2021 - Session 1",
    annee: 2021,
    questions: [
      {
        q: "Factoriser / Faktorize : Q(x) = (x + 2)² - (x + 2)(3x - 1)",
        options: ["(x + 2)(-2x + 3)", "(x + 2)(-2x + 1)", "(x + 2)(4x + 1)", "(x + 2)(-2x - 3)"],
        answer: 0,
        explication: "(x + 2)[(x + 2) - (3x - 1)] = (x + 2)(x + 2 - 3x + 1) = (x + 2)(-2x + 3)."
      },
      {
        q: "Dans un repère orthonormé, on donne A(2 ; 3) et B(6 ; 1). Calculer les coordonnées du milieu I de [AB].",
        options: ["I(4 ; 2)", "I(8 ; 4)", "I(2 ; 1)", "I(4 ; -2)"],
        answer: 0,
        explication: "xI = (2+6)/2 = 4 ; yI = (3+1)/2 = 2 => I(4 ; 2)."
      },
      {
        q: "Calculer / Kalkile : (-3)³ + (-2)⁴",
        options: ["-11", "43", "-43", "11"],
        answer: 0,
        explication: "(-3)³ = -27 epi (-2)⁴ = +16. Donk -27 + 16 = -11."
      },
      {
        q: "La somme de trois nombres entiers consécutifs est 72. Quel est le plus petit de ces nombres ?",
        options: ["23", "24", "25", "22"],
        answer: 0,
        explication: "n + (n+1) + (n+2) = 72 => 3n + 3 = 72 => 3n = 69 => n = 23."
      },
      {
        q: "Si cos(α) = 0,6 dans un triangle rectangle, combien vaut sin(α) ?",
        options: ["0,4", "0,8", "0,6", "1"],
        answer: 1,
        explication: "cos²(α) + sin²(α) = 1 => 0,36 + sin²(α) = 1 => sin²(α) = 0,64 => sin(α) = 0,8."
      }
    ]
  },

  // ================= EGZAMEN 5 : MENFP 2020 =================
  {
    id: "math_9eme_05",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2020 - Session 1",
    annee: 2020,
    questions: [
      {
        q: "Résoudre l'équation produit / Rezoud : (2x - 6)(x + 4) = 0",
        options: ["S = {3 ; -4}", "S = {-3 ; 4}", "S = {6 ; -4}", "S = {3 ; 4}"],
        answer: 0,
        explication: "2x - 6 = 0 => x = 3 ; oubyen x + 4 = 0 => x = -4."
      },
      {
        q: "Déterminer la fonction affine f telle que f(0) = 5 et f(2) = 9.",
        options: ["f(x) = 2x + 5", "f(x) = 5x + 2", "f(x) = -2x + 5", "f(x) = 4x + 5"],
        answer: 0,
        explication: "b = f(0) = 5. a = (9 - 5)/(2 - 0) = 4/2 = 2. Donk f(x) = 2x + 5."
      },
      {
        q: "Convertir 2 heures 15 minutes en minutes.",
        options: ["135 min", "215 min", "125 min", "150 min"],
        answer: 0,
        explication: "(2 × 60) + 15 = 120 + 15 = 135 minit."
      },
      {
        q: "Quel est le PGCD de 36 et 48 ?",
        options: ["6", "12", "18", "24"],
        answer: 1,
        explication: "Divizè komen ki pi gran ant 36 ak 48 se 12."
      },
      {
        q: "Un cube a une arête de 4 cm. Quel est son volume ?",
        options: ["16 cm³", "64 cm³", "12 cm³", "48 cm³"],
        answer: 1,
        explication: "Volume = a³ = 4³ = 4 × 4 × 4 = 64 cm³."
      }
    ]
  },

  // ================= EGZAMEN 6 : MENFP 2019 =================
  {
    id: "math_9eme_06",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2019 - Session 1",
    annee: 2019,
    questions: [
      {
        q: "Développer / Devlope : A = (3x - 2)²",
        options: ["9x² - 4", "9x² - 12x + 4", "9x² + 12x + 4", "3x² - 12x + 4"],
        answer: 1,
        explication: "(a - b)² = a² - 2ab + b² = 9x² - 2(3x)(2) + 4 = 9x² - 12x + 4."
      },
      {
        q: "Résoudre dans ℝ / Rezoud : (x / 3) + 2 = 5",
        options: ["x = 1", "x = 9", "x = 21", "x = 7"],
        answer: 1,
        explication: "x / 3 = 5 - 2 => x / 3 = 3 => x = 3 × 3 = 9."
      },
      {
        q: "Dans une classe de 40 élèves, 24 sont des filles. Quel est le pourcentage de garçons ?",
        options: ["60%", "40%", "16%", "24%"],
        answer: 1,
        explication: "Gen 40 - 24 = 16 gason. Pousantaj = (16 / 40) × 100 = 40%."
      },
      {
        q: "Calculer la distance AB avec A(1 ; 2) et B(4 ; 6).",
        options: ["5", "7", "25", "3"],
        answer: 0,
        explication: "AB = √[(4-1)² + (6-2)²] = √(3² + 4²) = √(9 + 16) = √25 = 5."
      },
      {
        q: "Quelle est la somme des angles intérieurs d'un triangle ?",
        options: ["90°", "180°", "360°", "270°"],
        answer: 1,
        explication: "Nan tout triyang, sòm twa ang yo toujou egal 180°."
      }
    ]
  },
  // ================= EGZAMEN 7 : MENFP 2018 =================
  {
    id: "math_9eme_07",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2018 - Session 1",
    annee: 2018,
    questions: [
      {
        q: "Calculer / Kalkile : B = 3/4 - 5/6 + 1/2",
        options: ["5/12", "1/12", "7/12", "-1/12"],
        answer: 0,
        explication: "Denominatè komen an se 12 : 9/12 - 10/12 + 6/12 = 5/12."
      },
      {
        q: "Résoudre l'équation / Rezoud ekwasyon an : 5(x - 2) = 3x + 4",
        options: ["x = 7", "x = 3", "x = -3", "x = 14"],
        answer: 0,
        explication: "5x - 10 = 3x + 4 => 5x - 3x = 4 + 10 => 2x = 14 => x = 7."
      },
      {
        q: "Factoriser / Faktorize : F(x) = 9x² - 16",
        options: ["(3x - 4)²", "(3x - 4)(3x + 4)", "(9x - 4)(x + 4)", "(3x + 4)²"],
        answer: 1,
        explication: "Idantite remakab a² - b² = (a - b)(a + b) ak a = 3x epi b = 4."
      },
      {
        q: "Un triangle MNP est rectangle en M avec MN = 5 cm et MP = 12 cm. Calculer l'hypoténuse NP.",
        options: ["17 cm", "13 cm", "60 cm", "169 cm"],
        answer: 1,
        explication: "NP² = 5² + 12² = 25 + 144 = 169 => NP = √169 = 13 cm."
      },
      {
        q: "Calculer le périmètre d'un cercle de diamètre D = 10 cm (prendre π ≈ 3,14).",
        options: ["31,4 cm", "62,8 cm", "78,5 cm", "15,7 cm"],
        answer: 0,
        explication: "Perimèt = π × D = 3,14 × 10 = 31,4 cm."
      }
    ]
  },

  // ================= EGZAMEN 8 : MENFP 2017 =================
  {
    id: "math_9eme_08",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2017 - Session 1",
    annee: 2017,
    questions: [
      {
        q: "Simplifier / Senplifye : C = √50 + √18 - 2√8",
        options: ["4√2", "8√2", "2√2", "6√2"],
        answer: 0,
        explication: "5√2 + 3√2 - 2(2√2) = (5 + 3 - 4)√2 = 4√2."
      },
      {
        q: "Résoudre le système / Rezoud sistèm nan : { 2x + y = 7 ; x - y = 2 }",
        options: ["(3 ; 1)", "(1 ; 3)", "(4 ; -1)", "(2 ; 3)"],
        answer: 0,
        explication: "Adisyone de ekwasyon yo : 3x = 9 => x = 3, epi y = 3 - 2 = 1."
      },
      {
        q: "Une voiture parcourt 180 km en 2 heures 30 minutes. Quelle est sa vitesse moyenne ?",
        options: ["72 km/h", "90 km/h", "60 km/h", "80 km/h"],
        answer: 0,
        explication: "2h30 = 2,5 èdtan. Vitès = 180 / 2,5 = 72 km/h."
      },
      {
        q: "Développer / Devlope : G = (2x + 3)²",
        options: ["4x² + 9", "4x² + 12x + 9", "4x² + 6x + 9", "2x² + 12x + 9"],
        answer: 1,
        explication: "(2x)² + 2(2x)(3) + 3² = 4x² + 12x + 9."
      },
      {
        q: "Soit A(-2 ; 4) et B(2 ; -2). Trouver les coordonnées du vecteur AB.",
        options: ["(4 ; -6)", "(0 ; 2)", "(-4 ; 6)", "(4 ; 6)"],
        answer: 0,
        explication: "xB - xA = 2 - (-2) = 4 ; yB - yA = -2 - 4 = -6."
      }
    ]
  },

  // ================= EGZAMEN 9 : MENFP 2016 =================
  {
    id: "math_9eme_09",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2016 - Session 1",
    annee: 2016,
    questions: [
      {
        q: "Calculer / Kalkile : D = (10³ × 10⁻⁵) / 10⁻⁴",
        options: ["10²", "10⁻⁶", "10⁻²", "10⁶"],
        answer: 0,
        explication: "10³⁻⁵ = 10⁻². Answit 10⁻² / 10⁻⁴ = 10⁻²⁻⁽⁻⁴⁾ = 10² = 100."
      },
      {
        q: "Résoudre dans ℝ / Rezoud : 4x - 1 ≥ 7x + 8",
        options: ["x ≤ -3", "x ≥ -3", "x ≤ 3", "x ≥ 3"],
        answer: 0,
        explication: "4x - 7x ≥ 8 + 1 => -3x ≥ 9 => x ≤ -3."
      },
      {
        q: "L'aire d'un carré est 64 cm². Quel est son périmètre ?",
        options: ["32 cm", "16 cm", "8 cm", "64 cm"],
        answer: 0,
        explication: "Kote kare a = √64 = 8 cm. Perimèt = 4 × 8 = 32 cm."
      },
      {
        q: "Factoriser / Faktorize : H(x) = x² - 6x + 9",
        options: ["(x - 3)²", "(x + 3)²", "(x - 3)(x + 3)", "(x - 9)(x - 1)"],
        answer: 0,
        explication: "Idantite remakab a² - 2ab + b² = (a - b)² ak a = x epi b = 3."
      },
      {
        q: "Dans une série de notes : 10, 12, 14, 16, 18. Quelle est la moyenne ?",
        options: ["14", "15", "13", "12"],
        answer: 0,
        explication: "(10 + 12 + 14 + 16 + 18) / 5 = 70 / 5 = 14."
      }
    ]
  },

  // ================= EGZAMEN 10 : MENFP 2015 =================
  {
    id: "math_9eme_10",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2015 - Session 1",
    annee: 2015,
    questions: [
      {
        q: "Calculer / Kalkile : E = 2/5 ÷ 4/15",
        options: ["3/2", "8/75", "2/3", "6/5"],
        answer: 0,
        explication: "2/5 × 15/4 = 30/20 = 3/2."
      },
      {
        q: "Trouver deux nombres dont la somme est 30 et la différence est 6.",
        options: ["18 et 12", "20 et 10", "16 et 14", "24 et 6"],
        answer: 0,
        explication: "18 + 12 = 30 epi 18 - 12 = 6."
      },
      {
        q: "Soit f(x) = -3x + 4. Calculer l'image de -2 par f.",
        options: ["10", "-2", "-10", "2"],
        answer: 0,
        explication: "f(-2) = -3(-2) + 4 = 6 + 4 = 10."
      },
      {
        q: "Un cylindre a un rayon de 3 cm et une hauteur de 10 cm. Quel est son volume (π ≈ 3,14) ?",
        options: ["282,6 cm³", "94,2 cm³", "188,4 cm³", "30 cm³"],
        answer: 0,
        explication: "Volume = π × R² × h = 3,14 × 9 × 10 = 282,6 cm³."
      },
      {
        q: "Quel est le PPCM de 12 et 18 ?",
        options: ["36", "6", "72", "24"],
        answer: 0,
        explication: "Pi piti miltip komen 12 ak 18 se 36."
      }
    ]
  },

  // ================= EGZAMEN 11 : MENFP 2014 =================
  {
    id: "math_9eme_11",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2014 - Session 1",
    annee: 2014,
    questions: [
      {
        q: "Résoudre dans ℝ / Rezoud : (x - 5)/2 = (x + 1)/3",
        options: ["x = 17", "x = 13", "x = -17", "x = 7"],
        answer: 0,
        explication: "3(x - 5) = 2(x + 1) => 3x - 15 = 2x + 2 => x = 17."
      },
      {
        q: "Développer et réduire / Devlope : K = (x + 4)(x - 4) - x²",
        options: ["-16", "16", "2x² - 16", "-8x - 16"],
        answer: 0,
        explication: "x² - 16 - x² = -16."
      },
      {
        q: "Dans un triangle ABC, AB = 4 cm, AC = 5 cm et BC = 6 cm. Soient M et N les milieux de [AB] et [AC]. Calculer MN.",
        options: ["3 cm", "2 cm", "2,5 cm", "6 cm"],
        answer: 0,
        explication: "Daprè teyorèm mitan yo : MN = BC / 2 = 6 / 2 = 3 cm."
      },
      {
        q: "Un commerçant achète un sac de riz à 3 000 gourdes et le revend avec un bénéfice de 15%. Quel est le prix de vente ?",
        options: ["3 450 gourdes", "3 015 gourdes", "450 gourdes", "3 150 gourdes"],
        answer: 0,
        explication: "Benefis = 3000 × 15/100 = 450 goud. Pri vant = 3000 + 450 = 3450 goud."
      },
      {
        q: "Calculer / Kalkile : √(16/25) + √(9/25)",
        options: ["7/5", "5/5", "25/25", "1/5"],
        answer: 0,
        explication: "4/5 + 3/5 = 7/5."
      }
    ]
  },

  // ================= EGZAMEN 12 : MENFP 2013 =================
  {
    id: "math_9eme_12",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2013 - Session 1",
    annee: 2013,
    questions: [
      {
        q: "Factoriser / Faktorize : M(x) = 5x² - 15x",
        options: ["5x(x - 3)", "5(x² - 3)", "x(5x - 15)", "5x(x + 3)"],
        answer: 0,
        explication: "Faktè komen an se 5x : 5x(x - 3)."
      },
      {
        q: "Si 3 stylos coûtent 75 gourdes, combien coûtent 7 stylos ?",
        options: ["175 gourdes", "150 gourdes", "225 gourdes", "125 gourdes"],
        answer: 0,
        explication: "1 plim koute 75 / 3 = 25 goud. 7 plim koute 7 × 25 = 175 goud."
      },
      {
        q: "Résoudre / Rezoud : x² = 49",
        options: ["S = {-7 ; 7}", "S = {7}", "S = {-7}", "S = {49}"],
        answer: 0,
        explication: "x = √49 = 7 oubyen x = -√49 = -7."
      },
      {
        q: "Calculer l'aire d'un losange dont les diagonales mesurent D = 10 cm et d = 6 cm.",
        options: ["30 cm²", "60 cm²", "16 cm²", "32 cm²"],
        answer: 0,
        explication: "Aire = (D × d) / 2 = (10 × 6) / 2 = 30 cm²."
      },
      {
        q: "Quelle est la valeur de tan(45°) dans un triangle rectangle isocèle ?",
        options: ["1", "0", "0,5", "√2"],
        answer: 0,
        explication: "Nan yon triyang rektang izosèl, de kote ang dwat yo egal, donk tan(45°) = 1."
      }
    ]
  },
    // ================= EGZAMEN 13 : MENFP 2024 (Session 2) =================
  {
    id: "math_9eme_13",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2024 - Session 2",
    annee: 2024,
    questions: [
      {
        q: "Calculer / Kalkile : A = -4 + 3 × (-5) + 12 ÷ (-3)",
        options: ["-23", "-15", "1", "-19"],
        answer: 0,
        explication: "Priyorite miltiplikasyon ak divizyon : -4 - 15 - 4 = -23."
      },
      {
        q: "Développer / Devlope : B = (2x - 1)(x + 4) - (x - 2)²",
        options: ["x² + 11x - 8", "x² + 3x - 8", "x² + 11x", "3x² + 3x - 8"],
        answer: 0,
        explication: "(2x² + 8x - x - 4) - (x² - 4x + 4) = x² + 11x - 8."
      },
      {
        q: "Dans un triangle ABC rectangle en B, sin(A) = 3/5 et AC = 15 cm. Calculer BC.",
        options: ["9 cm", "12 cm", "5 cm", "25 cm"],
        answer: 0,
        explication: "sin(A) = BC / AC => 3/5 = BC / 15 => BC = (3 × 15) / 5 = 9 cm."
      },
      {
        q: "Trouver l'antécédent de 11 par la fonction f(x) = 3x - 4.",
        options: ["5", "29", "7/3", "-5"],
        answer: 0,
        explication: "3x - 4 = 11 => 3x = 15 => x = 5."
      },
      {
        q: "Un terrain rectangulaire a une aire de 300 m² et une longueur de 20 m. Quel est son périmètre ?",
        options: ["70 m", "35 m", "15 m", "140 m"],
        answer: 0,
        explication: "Lajè = 300 / 20 = 15 m. Perimèt = 2(20 + 15) = 70 m."
      }
    ]
  },

  // ================= EGZAMEN 14 : MENFP 2023 (Session 2) =================
  {
    id: "math_9eme_14",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2023 - Session 2",
    annee: 2023,
    questions: [
      {
        q: "Simplifier / Senplifye : √12 × √27",
        options: ["18", "36", "9", "6√3"],
        answer: 0,
        explication: "√(12 × 27) = √324 = 18 (oubyen 2√3 × 3√3 = 6 × 3 = 18)."
      },
      {
        q: "Résoudre / Rezoud : 2(3x - 1) - 4(x + 2) = 6",
        options: ["x = 8", "x = -2", "x = 2", "x = -8"],
        answer: 0,
        explication: "6x - 2 - 4x - 8 = 6 => 2x - 10 = 6 => 2x = 16 => x = 8."
      },
      {
        q: "On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre pair ?",
        options: ["1/2", "1/3", "1/6", "2/3"],
        answer: 0,
        explication: "Gen 3 chif pè (2, 4, 6) sou 6 fas : 3/6 = 1/2."
      },
      {
        q: "Factoriser / Faktorize : P(x) = 16x² - 8x + 1",
        options: ["(4x - 1)²", "(4x + 1)²", "(4x - 1)(4x + 1)", "(8x - 1)²"],
        answer: 0,
        explication: "(4x)² - 2(4x)(1) + 1² = (4x - 1)²."
      },
      {
        q: "Calculer le volume d'une pyramide à base carrée de côté 6 cm et de hauteur 5 cm.",
        options: ["60 cm³", "180 cm³", "30 cm³", "90 cm³"],
        answer: 0,
        explication: "Volume = (Aire base × hauteur) / 3 = (36 × 5) / 3 = 60 cm³."
      }
    ]
  },

  // ================= EGZAMEN 15 : MENFP 2022 (Session 2) =================
  {
    id: "math_9eme_15",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2022 - Session 2",
    annee: 2022,
    questions: [
      {
        q: "Calculer / Kalkile : F = (1 - 1/3) ÷ (1 + 1/3)",
        options: ["1/2", "2", "4/9", "2/3"],
        answer: 0,
        explication: "(2/3) ÷ (4/3) = 2/3 × 3/4 = 2/4 = 1/2."
      },
      {
        q: "Résoudre le système / Rezoud sistèm nan : { 3x + 2y = 12 ; x + 2y = 8 }",
        options: ["(2 ; 3)", "(3 ; 2)", "(4 ; 0)", "(0 ; 6)"],
        answer: 0,
        explication: "Soustrè dezyèm lan nan premye a : 2x = 4 => x = 2, epi 2 + 2y = 8 => y = 3."
      },
      {
        q: "Dans un triangle EFG, I ∈ [EF] et J ∈ [EG] avec (IJ) // (FG). On donne EI = 2, EF = 6 et EG = 9. Calculer EJ.",
        options: ["3", "4,5", "6", "12"],
        answer: 0,
        explication: "Daprè teyorèm Talès : EI/EF = EJ/EG => 2/6 = EJ/9 => EJ = 18/6 = 3."
      },
      {
        q: "Convertir 3,5 m³ en litres.",
        options: ["3 500 L", "350 L", "35 L", "35 000 L"],
        answer: 0,
        explication: "1 m³ = 1 000 lit. Donk 3,5 m³ = 3 500 lit."
      },
      {
        q: "Écrire sans radical au dénominateur : 6 / √3",
        options: ["2√3", "6√3", "3√3", "√2"],
        answer: 0,
        explication: "(6 × √3) / (√3 × √3) = 6√3 / 3 = 2√3."
      }
    ]
  },

  // ================= EGZAMEN 16 : MENFP 2021 (Session 2) =================
  {
    id: "math_9eme_16",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2021 - Session 2",
    annee: 2021,
    questions: [
      {
        q: "Factoriser / Faktorize : R(x) = (2x - 3)² - 16",
        options: ["(2x - 7)(2x + 1)", "(2x - 19)(2x + 13)", "(2x - 7)²", "(2x + 1)²"],
        answer: 0,
        explication: "a² - b² ak a = 2x - 3 epi b = 4 => (2x - 3 - 4)(2x - 3 + 4) = (2x - 7)(2x + 1)."
      },
      {
        q: "Un capital de 10 000 gourdes est placé à un taux annuel de 5%. Quel est l'intérêt produit au bout de 2 ans ?",
        options: ["1 000 gourdes", "500 gourdes", "11 000 gourdes", "2 000 gourdes"],
        answer: 0,
        explication: "Enterè = (10 000 × 5 × 2) / 100 = 1 000 goud."
      },
      {
        q: "Résoudre / Rezoud : -3x + 5 < 2x - 10",
        options: ["x > 3", "x < 3", "x > -3", "x < -3"],
        answer: 0,
        explication: "-3x - 2x < -10 - 5 => -5x < -15 => x > 3."
      },
      {
        q: "Calculer la diagonale d'un carré de côté 5 cm.",
        options: ["5√2 cm", "10 cm", "25 cm", "5 cm"],
        answer: 0,
        explication: "d = c√2 = 5√2 cm (daprè Pitagò : d² = 5² + 5² = 50)."
      },
      {
        q: "Quelle est l'étendue de la série statistique : 7 ; 19 ; 4 ; 12 ; 21 ; 9 ?",
        options: ["17", "21", "4", "12"],
        answer: 0,
        explication: "Etandi = Pi gwo valè - Pi piti valè = 21 - 4 = 17."
      }
    ]
  },

  // ================= EGZAMEN 17 : MENFP 2020 (Session 2) =================
  {
    id: "math_9eme_17",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2020 - Session 2",
    annee: 2020,
    questions: [
      {
        q: "Calculer / Kalkile : G = 5² - 3 × 2³ + (-1)¹⁰",
        options: ["2", "0", "48", "-2"],
        answer: 0,
        explication: "25 - 3(8) + 1 = 25 - 24 + 1 = 2."
      },
      {
        q: "Déterminer l'équation de la droite passant par A(1 ; 3) et B(3 ; 7).",
        options: ["y = 2x + 1", "y = 2x + 3", "y = x + 2", "y = 3x"],
        answer: 0,
        explication: "a = (7 - 3)/(3 - 1) = 4/2 = 2. Epi 3 = 2(1) + b => b = 1. Donk y = 2x + 1."
      },
      {
        q: "L'aire totale des faces d'un cube est 54 cm². Quelle est la longueur d'une arête ?",
        options: ["3 cm", "9 cm", "6 cm", "27 cm"],
        answer: 0,
        explication: "Yon kib gen 6 fas kare : 54 / 6 = 9 cm² pou chak fas => aret = √9 = 3 cm."
      },
      {
        q: "Résoudre / Rezoud : (x + 3)(4x - 2) = 0",
        options: ["S = {-3 ; 1/2}", "S = {3 ; -1/2}", "S = {-3 ; 2}", "S = {3 ; 2}"],
        answer: 0,
        explication: "x + 3 = 0 => x = -3 ; 4x - 2 = 0 => x = 2/4 = 1/2."
      },
      {
        q: "Sur une carte à l'échelle 1/50 000, deux villes sont séparées par 4 cm. Quelle est la distance réelle ?",
        options: ["2 km", "20 km", "200 m", "5 km"],
        answer: 0,
        explication: "4 × 50 000 = 200 000 cm = 2 000 m = 2 km."
      }
    ]
  },

  // ================= EGZAMEN 18 : MENFP 2019 (Session 2) =================
  {
    id: "math_9eme_18",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2019 - Session 2",
    annee: 2019,
    questions: [
      {
        q: "Simplifier / Senplifye : H = (3/4 + 1/2) ÷ (5/8)",
        options: ["2", "5/4", "1/2", "25/32"],
        answer: 0,
        explication: "(3/4 + 2/4) ÷ (5/8) = (5/4) × (8/5) = 8/4 = 2."
      },
      {
        q: "Factoriser / Faktorize : S(x) = 3x² - 12",
        options: ["3(x - 2)(x + 2)", "3(x - 4)²", "(3x - 2)(x + 6)", "3(x - 2)²"],
        answer: 0,
        explication: "3(x² - 4) = 3(x - 2)(x + 2)."
      },
      {
        q: "Dans un triangle ABC, l'angle A mesure 50° et l'angle B mesure 65°. Quelle est la nature du triangle ABC ?",
        options: ["Isocèle", "Équilatéral", "Rectangle", "Quelconque"],
        answer: 0,
        explication: "Ang C = 180° - (50° + 65°) = 65°. De ang egal (B = C = 65°), donk li izosèl."
      },
      {
        q: "Calculer / Kalkile : (2√5)² - (√12)²",
        options: ["8", "-2", "28", "18"],
        answer: 0,
        explication: "(4 × 5) - 12 = 20 - 12 = 8."
      },
      {
        q: "Un père a 42 ans et son fils a 12 ans. Dans combien d'années l'âge du père sera-t-il le double de celui du fils ?",
        options: ["18 ans", "15 ans", "20 ans", "12 ans"],
        answer: 0,
        explication: "42 + x = 2(12 + x) => 42 + x = 24 + 2x => x = 18 an."
      }
    ]
  },
   // ================= EGZAMEN 19 : MENFP 2018 (Session 2) =================
  {
    id: "math_9eme_19",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2018 - Session 2",
    annee: 2018,
    questions: [
      {
        q: "Calculer / Kalkile : A = (2/3)² - 1/9",
        options: ["1/3", "3/9", "5/9", "1/9"],
        answer: 0,
        explication: "4/9 - 1/9 = 3/9 = 1/3."
      },
      {
        q: "Résoudre l'équation / Rezoud ekwasyon an : 7x - 3 = 4x + 12",
        options: ["x = 5", "x = 3", "x = -5", "x = 15"],
        answer: 0,
        explication: "7x - 4x = 12 + 3 => 3x = 15 => x = 5."
      },
      {
        q: "Factoriser / Faktorize : T(x) = 25x² - 1",
        options: ["(5x - 1)(5x + 1)", "(5x - 1)²", "(25x - 1)(x + 1)", "(5x + 1)²"],
        answer: 0,
        explication: "Idantite remakab a² - b² = (a - b)(a + b) ak a = 5x epi b = 1."
      },
      {
        q: "Dans un triangle ABC rectangle en A, AB = 9 cm et BC = 15 cm. Calculer AC.",
        options: ["12 cm", "6 cm", "24 cm", "144 cm"],
        answer: 0,
        explication: "AC² = BC² - AB² = 225 - 81 = 144 => AC = √144 = 12 cm."
      },
      {
        q: "Quelle est la moyenne des notes suivantes : 8 ; 11 ; 14 ; 15 ; 17 ?",
        options: ["13", "14", "12", "15"],
        answer: 0,
        explication: "(8 + 11 + 14 + 15 + 17) / 5 = 65 / 5 = 13."
      }
    ]
  },

  // ================= EGZAMEN 20 : MENFP 2017 (Session 2) =================
  {
    id: "math_9eme_20",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2017 - Session 2",
    annee: 2017,
    questions: [
      {
        q: "Développer et réduire / Devlope : U = (3x + 2)(2x - 5)",
        options: ["6x² - 11x - 10", "6x² + 11x - 10", "6x² - 19x - 10", "6x² - 10"],
        answer: 0,
        explication: "6x² - 15x + 4x - 10 = 6x² - 11x - 10."
      },
      {
        q: "Simplifier / Senplifye : √48 - √27 + √12",
        options: ["3√3", "√3", "5√3", "9√3"],
        answer: 0,
        explication: "4√3 - 3√3 + 2√3 = (4 - 3 + 2)√3 = 3√3."
      },
      {
        q: "Un article passe de 800 gourdes à 920 gourdes. Quel est le pourcentage d'augmentation ?",
        options: ["15%", "12%", "20%", "10%"],
        answer: 0,
        explication: "Ogmantasyon = 920 - 800 = 120 goud. Pousantaj = (120 / 800) × 100 = 15%."
      },
      {
        q: "Résoudre l'inéquation / Rezoud : 5x - 8 < 2x + 7",
        options: ["x < 5", "x > 5", "x < -5", "x > -5"],
        answer: 0,
        explication: "5x - 2x < 7 + 8 => 3x < 15 => x < 5."
      },
      {
        q: "Calculer le périmètre d'un losange de côté 7,5 cm.",
        options: ["30 cm", "15 cm", "56,25 cm", "22,5 cm"],
        answer: 0,
        explication: "Yon lozanj gen 4 kote egal : 4 × 7,5 = 30 cm."
      }
    ]
  },

  // ================= EGZAMEN 21 : MENFP 2016 (Session 2) =================
  {
    id: "math_9eme_21",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2016 - Session 2",
    annee: 2016,
    questions: [
      {
        q: "Calculer / Kalkile : V = 3/5 + 2/5 × 3/4",
        options: ["9/10", "3/4", "15/20", "6/9"],
        answer: 0,
        explication: "Priyorite miltiplikasyon : 3/5 + 6/20 = 12/20 + 6/20 = 18/20 = 9/10."
      },
      {
        q: "Résoudre le système / Rezoud sistèm nan : { x + 3y = 11 ; x + y = 5 }",
        options: ["(2 ; 3)", "(3 ; 2)", "(5 ; 0)", "(8 ; 1)"],
        answer: 0,
        explication: "Soustrè dezyèm lan nan premye a : 2y = 6 => y = 3, epi x = 5 - 3 = 2."
      },
      {
        q: "Soit la fonction linéaire g(x) = -2,5x. Calculer g(-4).",
        options: ["10", "-10", "6,5", "-6,5"],
        answer: 0,
        explication: "g(-4) = -2,5 × (-4) = +10."
      },
      {
        q: "L'aire d'un trapèze de grande base B = 10 cm, petite base b = 6 cm et hauteur h = 4 cm est :",
        options: ["32 cm²", "64 cm²", "24 cm²", "40 cm²"],
        answer: 0,
        explication: "Aire = [(B + b) × h] / 2 = [(10 + 6) × 4] / 2 = 64 / 2 = 32 cm²."
      },
      {
        q: "Écrire sous forme d'une seule puissance : 2⁵ × 2⁻³ × 2⁴",
        options: ["2⁶", "2⁻⁶⁰", "2¹²", "2²"],
        answer: 0,
        explication: "2^(5 - 3 + 4) = 2⁶."
      }
    ]
  },

  // ================= EGZAMEN 22 : MENFP 2015 (Session 2) =================
  {
    id: "math_9eme_22",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2015 - Session 2",
    annee: 2015,
    questions: [
      {
        q: "Factoriser / Faktorize : W(x) = 4x² + 12x + 9",
        options: ["(2x + 3)²", "(2x - 3)²", "(4x + 3)²", "(2x + 9)²"],
        answer: 0,
        explication: "(2x)² + 2(2x)(3) + 3² = (2x + 3)²."
      },
      {
        q: "Un train roule à 90 km/h pendant 40 minutes. Quelle distance parcourt-il ?",
        options: ["60 km", "45 km", "36 km", "135 km"],
        answer: 0,
        explication: "40 minit = 40/60 èdtan = 2/3 èdtan. Distans = 90 × (2/3) = 60 km."
      },
      {
        q: "Dans un repère orthonormé, on donne M(3 ; -1) et N(-1 ; 5). Trouver le milieu K de [MN].",
        options: ["K(1 ; 2)", "K(2 ; 4)", "K(2 ; -3)", "K(4 ; -6)"],
        answer: 0,
        explication: "xK = (3 + (-1))/2 = 1 ; yK = (-1 + 5)/2 = 2 => K(1 ; 2)."
      },
      {
        q: "Résoudre / Rezoud : (3x - 9)(2x + 1) = 0",
        options: ["S = {3 ; -1/2}", "S = {-3 ; 1/2}", "S = {9 ; -1}", "S = {3 ; 1/2}"],
        answer: 0,
        explication: "3x - 9 = 0 => x = 3 ; 2x + 1 = 0 => x = -1/2."
      },
      {
        q: "Quel est le volume d'un pavé droit de dimensions 5 cm, 4 cm et 3 cm ?",
        options: ["60 cm³", "12 cm³", "47 cm³", "30 cm³"],
        answer: 0,
        explication: "Volume = L × l × h = 5 × 4 × 3 = 60 cm³."
      }
    ]
  },

  // ================= EGZAMEN 23 : MENFP 2012 (Session 1) =================
  {
    id: "math_9eme_23",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2012 - Session 1",
    annee: 2012,
    questions: [
      {
        q: "Calculer / Kalkile : X = (-2)³ × 3 + 5²",
        options: ["1", "49", "-1", "7"],
        answer: 0,
        explication: "(-8) × 3 + 25 = -24 + 25 = 1."
      },
      {
        q: "Développer / Devlope : Y = (x - 5)² - (x + 2)(x - 2)",
        options: ["-10x + 29", "-10x + 21", "2x² - 10x + 29", "-10x - 29"],
        answer: 0,
        explication: "(x² - 10x + 25) - (x² - 4) = x² - 10x + 25 - x² + 4 = -10x + 29."
      },
      {
        q: "Dans un triangle ABC, (DE) // (BC) avec D ∈ [AB] et E ∈ [AC]. Si AD = 3, AB = 9 et BC = 12, calculer DE.",
        options: ["4", "3", "6", "36"],
        answer: 0,
        explication: "Daprè Talès : AD/AB = DE/BC => 3/9 = DE/12 => DE = 36/9 = 4."
      },
      {
        q: "Une classe compte 35 élèves. 60% ont réussi l'examen. Combien d'élèves ont échoué ?",
        options: ["14 élèves", "21 élèves", "15 élèves", "20 élèves"],
        answer: 0,
        explication: "40% echwe : 35 × 40/100 = 14 elèv."
      },
      {
        q: "Simplifier / Senplifye : √(81 × 4)",
        options: ["18", "36", "13", "324"],
        answer: 0,
        explication: "√81 × √4 = 9 × 2 = 18."
      }
    ]
  },

  // ================= EGZAMEN 24 : MENFP 2011 (Session 1) =================
  {
    id: "math_9eme_24",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2011 - Session 1",
    annee: 2011,
    questions: [
      {
        q: "Résoudre dans ℝ / Rezoud : 2(x + 3) - 5 = 3(x - 1)",
        options: ["x = 4", "x = -4", "x = 2", "x = -2"],
        answer: 0,
        explication: "2x + 6 - 5 = 3x - 3 => 2x + 1 = 3x - 3 => x = 4."
      },
      {
        q: "Factoriser / Faktorize : Z(x) = 7x³ - 21x²",
        options: ["7x²(x - 3)", "7x(x² - 3)", "7(x³ - 3x²)", "x²(7x - 21)"],
        answer: 0,
        explication: "Faktè komen ki pi gran an se 7x² : 7x²(x - 3)."
      },
      {
        q: "Si cos(60°) = 0,5 dans un triangle rectangle dont l'hypoténuse mesure 14 cm, quel est le côté adjacent ?",
        options: ["7 cm", "28 cm", "14 cm", "3,5 cm"],
        answer: 0,
        explication: "Kote adjasan = Ipoteniz × cos(60°) = 14 × 0,5 = 7 cm."
      },
      {
        q: "Quelle est la médiane de la série : 5 ; 14 ; 9 ; 20 ; 11 ; 16 ?",
        options: ["12,5", "11", "14", "12"],
        answer: 0,
        explication: "Lòd kwasan : 5 ; 9 ; 11 ; 14 ; 16 ; 20. Mitan 11 ak 14 se (11 + 14)/2 = 12,5."
      },
      {
        q: "Calculer l'aire latérale d'un cylindre de rayon 2 cm et de hauteur 5 cm (π ≈ 3,14).",
        options: ["62,8 cm²", "31,4 cm²", "20 cm²", "125,6 cm²"],
        answer: 0,
        explication: "Aire latérale = 2 × π × R × h = 2 × 3,14 × 2 × 5 = 62,8 cm²."
      }
    ]
  },
    // ================= EGZAMEN 25 : MENFP 2010 (Session 1) =================
  {
    id: "math_9eme_25",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2010 - Session 1",
    annee: 2010,
    questions: [
      {
        q: "Calculer / Kalkile : A = (5/6 - 1/3) × 4/5",
        options: ["2/5", "4/15", "1/2", "3/5"],
        answer: 0,
        explication: "5/6 - 2/6 = 3/6 = 1/2. Answit 1/2 × 4/5 = 4/10 = 2/5."
      },
      {
        q: "Résoudre l'équation / Rezoud : 4(2x - 3) = 5x + 6",
        options: ["x = 6", "x = 2", "x = -6", "x = 3"],
        answer: 0,
        explication: "8x - 12 = 5x + 6 => 3x = 18 => x = 6."
      },
      {
        q: "Factoriser / Faktorize : P(x) = 36x² - 49",
        options: ["(6x - 7)(6x + 7)", "(6x - 7)²", "(36x - 7)(x + 7)", "(6x + 7)²"],
        answer: 0,
        explication: "Idantite remakab a² - b² = (a - b)(a + b) ak a = 6x epi b = 7."
      },
      {
        q: "Dans un triangle ABC rectangle en B, AB = 8 cm et BC = 15 cm. Calculer AC.",
        options: ["17 cm", "23 cm", "13 cm", "289 cm"],
        answer: 0,
        explication: "AC² = 8² + 15² = 64 + 225 = 289 => AC = √289 = 17 cm."
      },
      {
        q: "Un produit coûte 4 000 gourdes. Après une réduction de 12%, quel est son prix ?",
        options: ["3 520 gourdes", "480 gourdes", "3 880 gourdes", "3 600 gourdes"],
        answer: 0,
        explication: "Rediksyon = 4000 × 12/100 = 480 goud. Nouvo pri = 4000 - 480 = 3520 goud."
      }
    ]
  },

  // ================= EGZAMEN 26 : MENFP 2009 (Session 1) =================
  {
    id: "math_9eme_26",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2009 - Session 1",
    annee: 2009,
    questions: [
      {
        q: "Développer et réduire / Devlope : B = (4x - 3)(x + 2) - 4x²",
        options: ["5x - 6", "11x - 6", "5x + 6", "-5x - 6"],
        answer: 0,
        explication: "(4x² + 8x - 3x - 6) - 4x² = 5x - 6."
      },
      {
        q: "Simplifier / Senplifye : √98 - √32 + √8",
        options: ["5√2", "3√2", "7√2", "9√2"],
        answer: 0,
        explication: "7√2 - 4√2 + 2√2 = (7 - 4 + 2)√2 = 5√2."
      },
      {
        q: "Résoudre le système / Rezoud sistèm nan : { 2x + 3y = 13 ; 2x - y = 5 }",
        options: ["(3,5 ; 2)", "(2 ; 3,5)", "(4 ; 3)", "(5 ; 1)"],
        answer: 0,
        explication: "Soustrè dezyèm lan nan premye a : 4y = 8 => y = 2, epi 2x - 2 = 5 => x = 3,5."
      },
      {
        q: "Calculer le volume d'un cône de révolution de rayon R = 3 cm et de hauteur h = 7 cm (prendre π ≈ 22/7).",
        options: ["66 cm³", "198 cm³", "22 cm³", "44 cm³"],
        answer: 0,
        explication: "Volume = (π × R² × h) / 3 = [(22/7) × 9 × 7] / 3 = (22 × 9) / 3 = 66 cm³."
      },
      {
        q: "Soit f(x) = 4x - 7. Calculer f(3) + f(-1).",
        options: ["-6", "16", "-16", "6"],
        answer: 0,
        explication: "f(3) = 12 - 7 = 5 ; f(-1) = -4 - 7 = -11. Donk 5 + (-11) = -6."
      }
    ]
  },

  // ================= EGZAMEN 27 : MENFP 2008 (Session 1) =================
  {
    id: "math_9eme_27",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2008 - Session 1",
    annee: 2008,
    questions: [
      {
        q: "Calculer / Kalkile : C = (3⁻² × 3⁵) / 3²",
        options: ["3", "9", "1/3", "27"],
        answer: 0,
        explication: "3^(-2 + 5 - 2) = 3¹ = 3."
      },
      {
        q: "Résoudre l'inéquation / Rezoud : 6x + 5 ≤ 2x - 7",
        options: ["x ≤ -3", "x ≥ -3", "x ≤ 3", "x ≥ 3"],
        answer: 0,
        explication: "6x - 2x ≤ -7 - 5 => 4x ≤ -12 => x ≤ -3."
      },
      {
        q: "Dans un triangle EFG, I et J sont les milieux respectifs de [EF] et [EG]. Si IJ = 4,5 cm, combien mesure FG ?",
        options: ["9 cm", "2,25 cm", "4,5 cm", "13,5 cm"],
        answer: 0,
        explication: "Daprè teyorèm mitan yo : FG = 2 × IJ = 2 × 4,5 = 9 cm."
      },
      {
        q: "Factoriser / Faktorize : Q(x) = (3x + 1)² - (x - 4)²",
        options: ["(2x + 5)(4x - 3)", "(2x - 3)(4x + 5)", "(4x - 3)²", "(2x + 5)²"],
        answer: 0,
        explication: "[(3x + 1) - (x - 4)][(3x + 1) + (x - 4)] = (2x + 5)(4x - 3)."
      },
      {
        q: "Une moto consomme 3 litres d'essence pour 120 km. Combien de litres faut-il pour parcourir 300 km ?",
        options: ["7,5 L", "6 L", "9 L", "8,5 L"],
        answer: 0,
        explication: "(3 × 300) / 120 = 900 / 120 = 7,5 lit."
      }
    ]
  },

  // ================= EGZAMEN 28 : MENFP 2007 (Session 1) =================
  {
    id: "math_9eme_28",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2007 - Session 1",
    annee: 2007,
    questions: [
      {
        q: "Calculer / Kalkile : D = 7/8 - (1/4 + 3/8)",
        options: ["1/4", "1/2", "3/8", "5/8"],
        answer: 0,
        explication: "1/4 + 3/8 = 2/8 + 3/8 = 5/8. Answit 7/8 - 5/8 = 2/8 = 1/4."
      },
      {
        q: "Trouver la longueur d'un rectangle de périmètre 54 cm et de largeur 11 cm.",
        options: ["16 cm", "43 cm", "27 cm", "15 cm"],
        answer: 0,
        explication: "Demi-perimèt = 54 / 2 = 27 cm. Longè = 27 - 11 = 16 cm."
      },
      {
        q: "Dans un repère orthonormé, on donne A(-1 ; 2) et B(3 ; 5). Calculer la distance AB.",
        options: ["5", "7", "25", "4"],
        answer: 0,
        explication: "AB = √[(3 - (-1))² + (5 - 2)²] = √(4² + 3²) = √(16 + 9) = √25 = 5."
      },
      {
        q: "Résoudre / Rezoud : (5x - 10)(x + 7) = 0",
        options: ["S = {2 ; -7}", "S = {-2 ; 7}", "S = {5 ; -7}", "S = {10 ; -7}"],
        answer: 0,
        explication: "5x - 10 = 0 => x = 2 ; x + 7 = 0 => x = -7."
      },
      {
        q: "Dans une urne, il y a 4 boules rouges, 5 boules bleues et 1 boule verte. Quelle est la probabilité de tirer une boule bleue ?",
        options: ["1/2", "1/5", "5/9", "4/10"],
        answer: 0,
        explication: "Total boul = 4 + 5 + 1 = 10. Pwobabilite boul ble = 5/10 = 1/2."
      }
    ]
  },

  // ================= EGZAMEN 29 : MENFP 2006 (Session 1) =================
  {
    id: "math_9eme_29",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP 2006 - Session 1",
    annee: 2006,
    questions: [
      {
        q: "Développer / Devlope : E = (5x - 1)² - (3x + 2)²",
        options: ["16x² - 22x - 3", "16x² + 2x - 3", "34x² - 22x + 5", "16x² - 22x + 5"],
        answer: 0,
        explication: "(25x² - 10x + 1) - (9x² + 12x + 4) = 16x² - 22x - 3."
      },
      {
        q: "Si sin(30°) = 0,5 dans un triangle ABC rectangle en A avec BC = 18 cm, combien mesure AC ?",
        options: ["9 cm", "36 cm", "18 cm", "4,5 cm"],
        answer: 0,
        explication: "sin(B) = AC / BC => 0,5 = AC / 18 => AC = 18 × 0,5 = 9 cm."
      },
      {
        q: "Écrire en notation scientifique / Ekri an notasyon syantifik : 450 000 000",
        options: ["4,5 × 10⁸", "45 × 10⁷", "4,5 × 10⁷", "0,45 × 10⁹"],
        answer: 0,
        explication: "Nou deplase vigil la 8 chif agoch : 4,5 × 10⁸."
      },
      {
        q: "Calculer le périmètre d'un demi-disque de rayon R = 4 cm (prendre π ≈ 3,14).",
        options: ["20,56 cm", "12,56 cm", "25,12 cm", "16,56 cm"],
        answer: 0,
        explication: "Demi-sèk + dyamèt = (π × R) + 2R = (3,14 × 4) + 8 = 12,56 + 8 = 20,56 cm."
      },
      {
        q: "Trouver la valeur de x pour que les vecteurs u(2 ; 6) et v(x ; 15) soient colinéaires.",
        options: ["x = 5", "x = 3", "x = 45", "x = 11"],
        answer: 0,
        explication: "2 × 15 - 6x = 0 => 30 = 6x => x = 5."
      }
    ]
  },

  // ================= EGZAMEN 30 : MENFP (Egzamen Modèl Nasyonal) =================
  {
    id: "math_9eme_30",
    niveau: "9eme",
    matiere: "Mathématiques",
    titre: "Examen Officiel MENFP - Sujet Type 30",
    annee: 2025,
    questions: [
      {
        q: "Calculer / Kalkile : F = (2/3 - 3/4) ÷ (5/6 + 1/3)",
        options: ["-1/14", "1/14", "-1/12", "7/12"],
        answer: 0,
        explication: "(8/12 - 9/12) ÷ (5/6 + 2/6) = (-1/12) ÷ (7/6) = (-1/12) × (6/7) = -6/84 = -1/14."
      },
      {
        q: "Résoudre dans ℝ / Rezoud : (2x - 1)/4 - (x + 3)/2 = 1",
        options: ["x = -11/0 (Impossible)", "x = 11", "x = -5,5", "x = 5,5"],
        answer: 0,
        explication: "Miltipliye pa 4 : (2x - 1) - 2(x + 3) = 4 => 2x - 1 - 2x - 6 = 4 => -7 = 4 (Enposib, S = ∅)."
      },
      {
        q: "Factoriser / Faktorize : G(x) = x³ - 9x",
        options: ["x(x - 3)(x + 3)", "x(x - 3)²", "(x² - 3)(x + 3)", "x(x - 9)"],
        answer: 0,
        explication: "x(x² - 9) = x(x - 3)(x + 3)."
      },
      {
        q: "Une sphère a un rayon R = 3 cm. Quelle est l'aire de sa surface (prendre π ≈ 3,14) ?",
        options: ["113,04 cm²", "37,68 cm²", "28,26 cm²", "84,78 cm²"],
        answer: 0,
        explication: "Aire sphère = 4 × π × R² = 4 × 3,14 × 9 = 113,04 cm²."
      },
      {
        q: "La moyenne de 4 notes est 13. Si les trois premières notes sont 10, 14 et 12, quelle est la quatrième note ?",
        options: ["16", "15", "14", "13"],
        answer: 0,
        explication: "Sòm 4 nòt yo = 4 × 13 = 52. Katriyèm nòt = 52 - (10 + 14 + 12) = 52 - 36 = 16."
      }
    ]
  }
];
