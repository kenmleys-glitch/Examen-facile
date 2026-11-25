// =========================================================================
// MOTEUR COMPLET DE MATHÉMATIQUES 9ÈME ANNÉE FONDAMENTALE (MENFP UNIQUEMENT)
// =========================================================================

function genMathOnly(subId) {
  let res = [];
  if (subId !== '9_math') return res;

  for (let i = 0; i < 20; i++) {
    let uid = "9m_" + Date.now() + "_" + i + "_" + Math.floor(Math.random() * 99999);
    let branch = i % 10;

    if (branch === 0) {
      // 1. ALGÈBRE : ÉQUATIONS
      let a = Math.floor(Math.random() * 7) + 2, x = Math.floor(Math.random() * 11) + 1, b = Math.floor(Math.random() * 15) + 1;
      let c = a * x + b, ans = "x = " + x;
      let o = [ans, "x = " + (x + 2), "x = " + (x + 4), "x = " + (x - 1)].sort(() => Math.random() - 0.5);
      res.push({ id: uid, q: "[Algèbre - Équations] Résolvez dans ℝ : " + a + "x + " + b + " = " + c, o: o, a: o.indexOf(ans), e: a + "x = " + c + " - " + b + " ⇒ x = " + x });
    } else if (branch === 1) {
      // 2. ALGÈBRE : INÉQUATIONS
      let a = Math.floor(Math.random() * 5) + 2, k = Math.floor(Math.random() * 8) + 2, b = Math.floor(Math.random() * 10) + 1;
      let c = a * k - b, ans = "x > " + k;
      let o = [ans, "x < " + k, "x > " + (k + 2), "x ≤ " + k].sort(() => Math.random() - 0.5);
      res.push({ id: uid, q: "[Algèbre - Inéquations] Résolvez l'inéquation : " + a + "x - " + b + " > " + c, o: o, a: o.indexOf(ans), e: a + "x > " + (c + b) + " ⇒ x > " + k });
    } else if (branch === 2) {
      // 3. ALGÈBRE : SYSTÈMES D'ÉQUATIONS
      let x = Math.floor(Math.random() * 6) + 2, y = Math.floor(Math.random() * 5) + 1;
      let S = x + y, D = x - y, ans = "(" + x + " ; " + y + ")";
      let o = [ans, "(" + y + " ; " + x + ")", "(" + (x + 1) + " ; " + y + ")", "(" + S + " ; " + D + ")"].sort(() => Math.random() - 0.5);
      res.push({ id: uid, q: "[Algèbre - Systèmes] Résolvez le système : x + y = " + S + " et x - y = " + D, o: o, a: o.indexOf(ans), e: "En additionnant : 2x = " + (S + D) + " ⇒ x = " + x + ", d'où y = " + y + "." });
    } else if (branch === 3) {
      // 4. ARITHMÉTIQUE : FRACTIONS
      let a = Math.floor(Math.random() * 4) + 1, b = Math.floor(Math.random() * 4) + 1, d = 7;
      let ans = (a + b) + "/" + d;
      let o = [ans, (a + b) + "/" + (d * 2), (a * b) + "/" + d, (a + b + 1) + "/" + d].sort(() => Math.random() - 0.5);
      res.push({ id: uid, q: "[Arithmétique - Fractions] Calculez la somme : " + a + "/" + d + " + " + b + "/" + d, o: o, a: o.indexOf(ans), e: "Même dénominateur : (" + a + " + " + b + ")/" + d + " = " + ans });
    } else if (branch === 4) {
      // 5. ALGÈBRE : FACTORISATION
      let a = Math.floor(Math.random() * 8) + 2, ans = "(x - " + a + ")(x + " + a + ")";
      let o = [ans, "(x - " + a + ")²", "(x + " + a + ")²", "x(x - " + (a*a) + ")"].sort(() => Math.random() - 0.5);
      res.push({ id: uid, q: "[Algèbre - Factorisation] Factorisez : x² - " + (a * a), o: o, a: o.indexOf(ans), e: "Identité a² - b² = (a - b)(a + b) ⇒ " + ans });
    } else if (branch === 5) {
      // 6. GÉOMÉTRIE : THÉORÈME DE PYTHAGORE
      const triples = [,,,,];
      let t = triples[Math.floor(Math.random() * triples.length)], ans = t + " cm";
      let o = [ans, (t + t) + " cm", (t + 2) + " cm", (t - 1) + " cm"].sort(() => Math.random() - 0.5);
      res.push({ id: uid, q: "[Géométrie - Pythagore] Triangle rectangle de côtés " + t + " cm et " + t + " cm. Calculez l'hypoténuse :", o: o, a: o.indexOf(ans), e: "c² = " + t + "² + " + t + "² = " + (t*t + t*t) + " ⇒ c = " + ans });
    } else if (branch === 6) {
      // 7. GÉOMÉTRIE : THÉORÈME DE THALÈS
      let k = Math.floor(Math.random() * 3) + 2, am = 3, ab = 3 * k, an = 4, ac = 4 * k;
      let ans = ac + " cm";
      let o = [ans, (an + k) + " cm", (ab + an) + " cm", (ac + 2) + " cm"].sort(() => Math.random() - 0.5);
      res.push({ id: uid, q: "[Géométrie - Thalès] Dans un triangle ABC, (MN)//(BC). Si AM = " + am + " cm, AB = " + ab + " cm et AN = " + an + " cm, calculez AC :", o: o, a: o.indexOf(ans), e: "D'après Thalès : AM/AB = AN/AC ⇒ " + am + "/" + ab + " = " + an + "/AC ⇒ AC = " + ans });
    } else if (branch === 7) {
      // 8. GÉOMÉTRIE : AIRES & PÉRIMÈTRES
      let b = (Math.floor(Math.random() * 7) + 3) * 2, h = Math.floor(Math.random() * 9) + 4;
      let ans = ((b * h) / 2) + " cm²";
      let o = [ans, (b * h) + " cm²", (b + h) + " cm²", ((b * h) / 2 + 6) + " cm²"].sort(() => Math.random() - 0.5);
      res.push({ id: uid, q: "[Géométrie - Aires] Calculez l'aire d'un triangle de base " + b + " cm et de hauteur " + h + " cm :", o: o, a: o.indexOf(ans), e: "Aire = (Base × Hauteur) / 2 = " + ans });
    } else if (branch === 8) {
      // 9. STATISTIQUES : MOYENNE & MÉDIANE
      let n1 = Math.floor(Math.random() * 5) + 10, n2 = n1 + 2, n3 = n1 + 4;
      let ans = n2 + "";
      let o = [ans, (n1 + 1) + "", (n3 + 1) + "", (n1 + n2 + n3) + ""].sort(() => Math.random() - 0.5);
      res.push({ id: uid, q: "[Statistiques 9e] Calculez la moyenne et la médiane de la série de notes : " + n1 + " ; " + n2 + " ; " + n3, o: o, a: o.indexOf(ans), e: "Moyenne = (" + n1 + "+" + n2 + "+" + n3 + ")/3 = " + n2 + ". La médiane est aussi " + n2 + "." });
    } else {
      // 10. PROBLÈMES & POURCENTAGES
      let prix = (Math.floor(Math.random() * 15) + 5) * 100, pct =[Math.floor(Math.random() * 4)];
      let finalP = prix - (prix * pct) / 100, ans = finalP + " Gourdes";
      let o = [ans, (prix + 100) + " Gourdes", ((prix * pct) / 100) + " Gourdes", (finalP - 50) + " Gourdes"].sort(() => Math.random() - 0.5);
      res.push({ id: uid, q: "[Arithmétique - Pourcentages] Un livre coûte " + prix + " Gds. Remise de " + pct + "%. Prix à payer :", o: o, a: o.indexOf(ans), e: "Remise = " + ((prix * pct)/100) + " Gds ⇒ Prix net = " + ans });
    }
  }
  return res;
}
