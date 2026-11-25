// =========================================================================
// MOTEUR COMPLET DE MATHÉMATIQUES MENFP (9ÈME ANNÉE & NS4 - 12 CHAPITRES)
// =========================================================================

function genMathOnly(subId) {
  let res = [];
  for (let i = 0; i < 20; i++) {
    let uid = subId + "_" + Date.now() + "_" + i + "_" + Math.floor(Math.random() * 99999);
    let chap = i % 6;

    if (subId === '9_math') {
      if (chap === 0) {
        // 1. ÉQUATION DU 1ER DEGRÉ
        let a = Math.floor(Math.random() * 7) + 2, x = Math.floor(Math.random() * 11) + 1, b = Math.floor(Math.random() * 15) + 1;
        let c = a * x + b, ans = "x = " + x;
        let o = [ans, "x = " + (x + 2), "x = " + (x + 4), "x = " + (x - 1)].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Algèbre 9e - Équations] Résolvez dans ℝ : " + a + "x + " + b + " = " + c, o: o, a: o.indexOf(ans), e: a + "x = " + c + " - " + b + " ⇒ " + a + "x = " + (c - b) + " ⇒ x = " + x });
      } else if (chap === 1) {
        // 2. INÉQUATION DU 1ER DEGRÉ
        let a = Math.floor(Math.random() * 5) + 2, k = Math.floor(Math.random() * 8) + 2, b = Math.floor(Math.random() * 10) + 1;
        let c = a * k - b, ans = "x > " + k;
        let o = [ans, "x < " + k, "x > " + (k + 2), "x ≤ " + k].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Algèbre 9e - Inéquations] Résolvez l'inéquation : " + a + "x - " + b + " > " + c, o: o, a: o.indexOf(ans), e: a + "x > " + c + " + " + b + " ⇒ " + a + "x > " + (c + b) + " ⇒ x > " + k });
      } else if (chap === 2) {
        // 3. GÉOMÉTRIE : THÉORÈME DE PYTHAGORE
        const triples = [[3,4,5],[6,8,10],[5,12,13],[8,15,17],[9,12,15]];
        let t = triples[Math.floor(Math.random() * triples.length)], ans = t[2] + " cm";
        let o = [ans, (t[0] + t[1]) + " cm", (t[2] + 2) + " cm", (t[2] - 1) + " cm"].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Géométrie 9e - Pythagore] Triangle rectangle de côtés " + t[0] + " cm et " + t[1] + " cm. Calculez l'hypoténuse :", o: o, a: o.indexOf(ans), e: "c² = " + t[0] + "² + " + t[1] + "² = " + (t[0]*t[0] + t[1]*t[1]) + " ⇒ c = " + t[2] + " cm." });
      } else if (chap === 3) {
        // 4. GÉOMÉTRIE : AIRE & PÉRIMÈTRE DU CERCLE / TRIANGLE
        let b = (Math.floor(Math.random() * 8) + 3) * 2, h = Math.floor(Math.random() * 10) + 4;
        let aire = (b * h) / 2, ans = aire + " cm²";
        let o = [ans, (b * h) + " cm²", (b + h) + " cm²", (aire + 10) + " cm²"].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Géométrie 9e - Aires] Calculez l'aire d'un triangle de base " + b + " cm et de hauteur " + h + " cm :", o: o, a: o.indexOf(ans), e: "Aire = (Base × Hauteur) / 2 = (" + b + " × " + h + ") / 2 = " + ans });
      } else if (chap === 4) {
        // 5. IDENTITÉS REMARQUABLES & FACTORISATION
        let a = Math.floor(Math.random() * 8) + 2, ans = "(x - " + a + ")(x + " + a + ")";
        let o = [ans, "(x - " + a + ")²", "(x + " + a + ")²", "x(x - " + (a*a) + ")"].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Algèbre 9e - Factorisation] Factorisez l'expression : x² - " + (a * a), o: o, a: o.indexOf(ans), e: "Identité a² - b² = (a - b)(a + b) ⇒ x² - " + a + "² = " + ans });
      } else {
        // 6. PROBLÈME D'ARITHMÉTIQUE & POURCENTAGE
        let prix = (Math.floor(Math.random() * 15) + 5) * 100, pct = [10, 15, 20, 25][Math.floor(Math.random() * 4)];
        let finalP = prix - (prix * pct) / 100, ans = finalP + " Gourdes";
        let o = [ans, (prix + 100) + " Gourdes", ((prix * pct) / 100) + " Gourdes", (finalP - 50) + " Gourdes"].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Arithmétique 9e] Un article coûte " + prix + " Gds. Avec une réduction de " + pct + "%, combien paie-t-on ?", o: o, a: o.indexOf(ans), e: "Remise = " + ((prix * pct)/100) + " Gds. Prix net = " + finalP + " Gds." });
      }
    } else {
      // MATHÉMATIQUES NS4 (SMP / SVT / SES)
      if (chap === 0) {
        // 1. ÉQUATION DU SECOND DEGRÉ (DISCRIMINANT DELTA)
        let r1 = Math.floor(Math.random() * 4) + 1, r2 = r1 + 2;
        let S = r1 + r2, P = r1 * r2, ans = "S = {" + r1 + " ; " + r2 + "}";
        let o = [ans, "S = {-" + r1 + " ; -" + r2 + "}", "S = {" + r1 + " ; -" + r2 + "}", "S = {0 ; " + P + "}"].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Algèbre NS4 - 2nd Degré] Résolvez dans ℝ : x² - " + S + "x + " + P + " = 0", o: o, a: o.indexOf(ans), e: "Δ = b² - 4ac = " + (S*S - 4*P) + ". Les racines sont x₁ = " + r1 + " et x₂ = " + r2 + "." });
      } else if (chap === 1) {
        // 2. INÉQUATION LOGARITHMIQUE / EXPONENTIELLE
        let a = Math.floor(Math.random() * 6) + 2, ans = "x > " + a;
        let o = [ans, "x < " + a, "x > 0", "x < 0"].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Analyse NS4 - Logarithmes] Résolvez dans ]0 ; +∞[ : ln(x) > ln(" + a + ")", o: o, a: o.indexOf(ans), e: "La fonction ln est strictement croissante sur ]0 ; +∞[, donc ln(x) > ln(" + a + ") ⇔ x > " + a + "." });
      } else if (chap === 2) {
        // 3. DÉRIVÉES DE FONCTIONS
        let a = Math.floor(Math.random() * 5) + 2, b = Math.floor(Math.random() * 6) + 2, ans = (3 * a) + "x² + " + (2 * b) + "x";
        let o = [ans, a + "x² + " + b + "x", (3 * a) + "x² + " + b, (2 * a) + "x² + " + (2 * b) + "x"].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Analyse NS4 - Dérivation] Calculez la dérivée f'(x) de : f(x) = " + a + "x³ + " + b + "x²", o: o, a: o.indexOf(ans), e: "f'(x) = 3(" + a + ")x² + 2(" + b + ")x = " + ans });
      } else if (chap === 3) {
        // 4. SUITES ARITHMÉTIQUES & GÉOMÉTRIQUES
        let u0 = Math.floor(Math.random() * 7) + 2, r = Math.floor(Math.random() * 5) + 2, n = Math.floor(Math.random() * 7) + 4;
        let ans = (u0 + n * r) + "";
        let o = [ans, (u0 + n) + "", (u0 * r + n) + "", (u0 + (n - 1) * r) + ""].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Analyse NS4 - Suites] Suite arithmétique : U0 = " + u0 + " et raison r = " + r + ". Calculez U" + n + " :", o: o, a: o.indexOf(ans), e: "Un = U0 + n·r = " + u0 + " + " + n + "×" + r + " = " + ans });
      } else if (chap === 4) {
        // 5. LIMITES INDÉTERMINÉES
        let k = Math.floor(Math.random() * 7) + 2, ans = (2 * k) + "";
        let o = [ans, "0", k + "", "+∞"].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Analyse NS4 - Limites] Calculez lim (x → " + k + ") de (x² - " + (k*k) + ") / (x - " + k + ") :", o: o, a: o.indexOf(ans), e: "On factorise : (x - " + k + ")(x + " + k + ")/(x - " + k + ") = x + " + k + " → " + ans });
      } else {
        // 6. PROBABILITÉS & DÉNOMBREMENT
        let rouge = Math.floor(Math.random() * 4) + 2, bleue = Math.floor(Math.random() * 4) + 3, tot = rouge + bleue;
        let ans = rouge + "/" + tot;
        let o = [ans, bleue + "/" + tot, "1/" + tot, rouge + "/" + bleue].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Probabilités NS4] Une urne contient " + rouge + " boules rouges et " + bleue + " bleues. Probabilité de tirer une rouge :", o: o, a: o.indexOf(ans), e: "P(Rouge) = Cas favorables / Cas possibles = " + rouge + " / (" + rouge + " + " + bleue + ") = " + ans });
      }
    }
  }
  return res;
}
