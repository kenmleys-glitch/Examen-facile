// =========================================================
// MOTEUR ILLIMITÉ DE MATHÉMATIQUES (9ÈME & NS4 - 6000+ EXOS)
// =========================================================

function genMathOnly(subId) {
  let res = [];
  for (let i = 0; i < 20; i++) {
    let uid = subId + "_" + Date.now() + "_" + i + "_" + Math.floor(Math.random() * 99999);
    let type = i % 5;

    if (subId === '9_math') {
      if (type === 0) {
        // 1. Équation 1er degré
        let a = Math.floor(Math.random() * 8) + 2, x = Math.floor(Math.random() * 12) + 1, b = Math.floor(Math.random() * 15) + 1;
        let c = a * x + b, ans = "x = " + x;
        let o = [ans, "x = " + (x + 2), "x = " + (x + 4), "x = " + (x - 1)].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Algèbre 9e] Résolvez dans ℝ : " + a + "x + " + b + " = " + c, o: o, a: o.indexOf(ans), e: a + "x = " + (c - b) + " ⇒ x = " + x });
      } else if (type === 1) {
        // 2. Théorème de Pythagore
        const triples = [,,,,];
        let t = triples[Math.floor(Math.random() * triples.length)], ans = t + " cm";
        let o = [ans, (t + t) + " cm", (t + 2) + " cm", (t + 1) + " cm"].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Géométrie 9e] Triangle rectangle de côtés " + t + " cm et " + t + " cm. Calculez l'hypoténuse :", o: o, a: o.indexOf(ans), e: "c² = " + t + "² + " + t + "² = " + (t*t) + " ⇒ c = " + t + " cm." });
      } else if (type === 2) {
        // 3. Pourcentage & Remise
        let prix = (Math.floor(Math.random() * 15) + 5) * 100, pct =[Math.floor(Math.random() * 4)];
        let finalP = prix - (prix * pct) / 100, ans = finalP + " Gourdes";
        let o = [ans, (prix + 100) + " Gourdes", (finalP - 50) + " Gourdes", ((prix * pct) / 100) + " Gourdes"].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Arithmétique 9e] Un livre coûte " + prix + " Gds. Après une remise de " + pct + "%, quel est le prix final ?", o: o, a: o.indexOf(ans), e: "Remise = " + ((prix * pct)/100) + " Gds. Prix final = " + finalP + " Gds." });
      } else if (type === 3) {
        // 4. Identité remarquable (x + a)²
        let a = Math.floor(Math.random() * 7) + 2, ans = "x² + " + (2*a) + "x + " + (a*a);
        let o = [ans, "x² + " + (a*a), "x² + " + a + "x + " + (a*a), "x² + " + (2*a) + "x"].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Algèbre 9e] Développez l'expression : (x + " + a + ")²", o: o, a: o.indexOf(ans), e: "(a + b)² = a² + 2ab + b² ⇒ " + ans });
      } else {
        // 5. Aire d'un cercle ou rectangle
        let L = Math.floor(Math.random() * 12) + 5, l = Math.floor(Math.random() * 8) + 2, ans = (L * l) + " m²";
        let o = [ans, (2 * (L + l)) + " m²", (L * l + 10) + " m²", (L + l) + " m²"].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Géométrie 9e] Calculez l'aire d'un terrain rectangulaire de " + L + " m sur " + l + " m :", o: o, a: o.indexOf(ans), e: "Aire = Longueur × largeur = " + L + " × " + l + " = " + ans });
      }
    } else {
      // MATHÉMATIQUES NS4 (SMP / SVT / SES)
      if (type === 0) {
        let a = Math.floor(Math.random() * 5) + 2, b = Math.floor(Math.random() * 6) + 2, ans = (3 * a) + "x² + " + (2 * b) + "x";
        let o = [ans, a + "x² + " + b + "x", (3 * a) + "x² + " + b, (2 * a) + "x² + " + (2 * b) + "x"].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Analyse NS4] Calculez la dérivée f'(x) de : f(x) = " + a + "x³ + " + b + "x²", o: o, a: o.indexOf(ans), e: "f'(x) = " + ans });
      } else if (type === 1) {
        let k = Math.floor(Math.random() * 7) + 2, ans = (2 * k) + "";
        let o = [ans, "0", k + "", "∞"].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Limites NS4] Calculez la limite quand x → " + k + " de (x² - " + (k*k) + ") / (x - " + k + ") :", o: o, a: o.indexOf(ans), e: "(x² - " + (k*k) + ")/(x - " + k + ") = x + " + k + ". Pour x = " + k + ", limite = " + ans });
      } else if (type === 2) {
        let u0 = Math.floor(Math.random() * 8) + 1, r = Math.floor(Math.random() * 5) + 2, n = Math.floor(Math.random() * 8) + 4;
        let ans = (u0 + n * r) + "";
        let o = [ans, (u0 + n) + "", (u0 * r + n) + "", (u0 + (n - 1) * r) + ""].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Suites NS4] Suite arithmétique : U0 = " + u0 + " et raison r = " + r + ". Calculez U" + n + " :", o: o, a: o.indexOf(ans), e: "Un = U0 + n·r = " + u0 + " + " + n + "×" + r + " = " + ans });
      } else if (type === 3) {
        let cap = (Math.floor(Math.random() * 8) + 2) * 1000, t = 5, ans = ((cap * t) / 100) + " Gds";
        let o = [ans, ((cap * t) / 10) + " Gds", (cap + 500) + " Gds", "250 Gds"].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Maths Financières NS4] Intérêt simple annuel d'un capital de " + cap + " Gds placé à " + t + "% :", o: o, a: o.indexOf(ans), e: "I = (C × t) / 100 = " + ans });
      } else {
        let n = Math.floor(Math.random() * 4) + 3;
        let fact = n === 3 ? 6 : (n === 4 ? 24 : (n === 5 ? 120 : 720));
        let ans = fact + "";
        let o = [ans, (n * 2) + "", (n * 10) + "", (fact / 2) + ""].sort(() => Math.random() - 0.5);
        res.push({ id: uid, q: "[Dénombrement NS4] Calculez la valeur de " + n + "! (factorielle " + n + ") :", o: o, a: o.indexOf(ans), e: n + "! = " + ans });
      }
    }
  }
  return res;
}
