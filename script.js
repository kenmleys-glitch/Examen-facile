const bank = {
  '9eme': [
    { id: "9_1", q: "[MENFP - Histoire] Quel traité de 1697 a divisé l'île d'Haïti en deux colonies ?", o: ["Traité de Ryswick", "Traité de Bâle", "Traité d'Aranjuez"], a: 0, e: "Le traité de Ryswick (1697) a cédé Saint-Domingue à la France." },
    { id: "9_2", q: "[MENFP - Français] Complétez : « Il faut que nous _____ nos devoirs. »", o: ["faisons", "fassions", "ferons"], a: 1, e: "Après « Il faut que », on met le subjonctif : fassions." },
    { id: "9_3", q: "[MENFP - Sciences] Quel gaz représente 78 % de l'atmosphère ?", o: ["Dioxygène (O2)", "Diazote (N2)", "CO2"], a: 1, e: "L'air contient 78 % de diazote (N2)." }
  ],
  'smp': [
    { id: "smp_1", q: "[MENFP NS4 - Physique] Quelle est l'unité SI de la force ?", o: ["Joule (J)", "Watt (W)", "Newton (N)"], a: 2, e: "L'unité internationale de la force est le Newton (N)." },
    { id: "smp_2", q: "[MENFP NS4 - Chimie] Formule de l'acide sulfurique ?", o: ["HCl", "H2SO4", "NaOH"], a: 1, e: "Sa formule chimique est H2SO4." }
  ],
  'svt': [
    { id: "svt_1", q: "[MENFP NS4 - Biologie] Organite produisant l'énergie (ATP) ?", o: ["Ribosome", "Mitochondrie", "Noyau"], a: 1, e: "La mitochondrie produit l'énergie cellulaire (ATP)." }
  ],
  'ses': [
    { id: "ses_1", q: "[MENFP NS4 - Histoire] Année de la fin de l'occupation américaine en Haïti ?", o: ["1915", "1934", "1957"], a: 1, e: "Les troupes américaines ont quitté Haïti en août 1934." }
  ],
  'lla': [
    { id: "lla_1", q: "[MENFP NS4 - Philosophie] Qui a dit : « L'existence précède l'essence » ?", o: ["Descartes", "Jean-Paul Sartre", "Platon"], a: 1, e: "Principe fondamental de Jean-Paul Sartre." }
  ],
  'univ': [
    { id: "ueh_1", q: "[Concours UEH] Combien de départements compte la République d'Haïti ?", o: ["9", "10", "11"], a: 1, e: "Haïti compte 10 départements." }
  ]
};

function makeDynamic(cat) {
  let arr = [];
  for (let i = 0; i < 6; i++) {
    let a = Math.floor(Math.random() * 6) + 2, x = Math.floor(Math.random() * 9) + 1, b = Math.floor(Math.random() * 12) + 1;
    let id = cat + "_" + Date.now() + "_" + i + "_" + Math.random();
    if (cat === '9eme') {
      let c = a * x + b, ans = "x = " + x;
      let opts = [ans, "x = " + (x + 2), "x = " + (x + 4)].sort(() => Math.random() - 0.5);
      arr.push({ id: id, q: "[Math 9e] Résolvez : " + a + "x + " + b + " = " + c, o: opts, a: opts.indexOf(ans), e: a + "x = " + (c - b) + " donc x = " + x });
    } else {
      let ans = (3 * a) + "x² + " + (2 * b) + "x";
      let opts = [ans, a + "x² + " + b + "x", (2 * a) + "x² + " + b].sort(() => Math.random() - 0.5);
      arr.push({ id: id, q: "[Math NS4] Dérivée de f(x) = " + a + "x³ + " + b + "x² ?", o: opts, a: opts.indexOf(ans), e: "f'(x) = " + ans });
    }
  }
  return arr;
}

function checkSub() {
  const s = JSON.parse(localStorage.getItem('bako_haiti_sub'));
  const b = document.getElementById('statusBadge'), e = document.getElementById('expiryInfo');
  if (!s) { b.textContent = "Kont Gratis"; return false; }
  const left = (30 * 86400000) - (Date.now() - s.activatedAt);
  if (left <= 0) { localStorage.removeItem('bako_haiti_sub'); b.textContent = "Abònman Ekspire"; return false; }
  b.textContent = "Kont VIP Aktif ⭐ (" + s.phone + ")"; b.classList.add('vip-active');
  e.textContent = "Rete " + Math.ceil(left / 86400000) + " jou"; return true;
}
checkSub();

function checkVip() {
  const ph = document.getElementById('userPhone').value.replace(/\D/g, '');
  const cd = document.getElementById('vipCode').value.trim().toUpperCase();
  const msg = document.getElementById('vipMsg');
  if (ph.length !== 8) { msg.style.color = "#D21034"; msg.textContent = "❌ Antre 8 chif telefòn ou."; return; }
  if (cd === "BK-" + (((parseInt(ph, 10) * 7) + 2026) % 9000 + 1000)) {
    localStorage.setItem('bako_haiti_sub', JSON.stringify({ phone: ph, activatedAt: Date.now() }));
    checkSub(); msg.style.color = "#10B981"; msg.textContent = "✅ VIP Aktive pou 30 jou !";
    setTimeout(goHome, 1000);
  } else { msg.style.color = "#D21034"; msg.textContent = "❌ Kòd la pa bon."; }
}

function openVipContent(sec) {
  if (checkSub()) startQuiz(sec.includes('9eme') ? '9eme' : (sec.includes('ns4') ? 'smp' : 'univ'));
  else { alert("🔒 Abònman VIP obligatwa (100 Gds / 30 jou)."); goVip(); }
}

let qList = [], idx = 0, score = 0, activeCat = '';
function hideAll() {
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('quizPage').style.display = 'none';
  document.getElementById('resultPage').style.display = 'none';
  document.getElementById('vipPage').style.display = 'none';
}
function goHome() { hideAll(); document.getElementById('homePage').style.display = 'block'; }
function goVip() { hideAll(); document.getElementById('vipPage').style.display = 'block'; }

function startQuiz(cat) {
  activeCat = cat;
  let seen = JSON.parse(localStorage.getItem('bako_seen') || '[]');
  let pool = (bank[cat] || bank['9eme']).concat(makeDynamic(cat));
  let fresh = pool.filter(q => !seen.includes(q.id));
  if (fresh.length < 3) { localStorage.removeItem('bako_seen'); fresh = pool; }
  qList = fresh.sort(() => Math.random() - 0.5).slice(0, 8);
  idx = 0; score = 0;
  document.getElementById('qTitle').textContent = "Examen " + cat.toUpperCase();
  document.getElementById('liveScore').textContent = "Note : 0 / " + qList.length;
  hideAll(); document.getElementById('quizPage').style.display = 'block';
  showQ();
}

function showQ() {
  const q = qList[idx];
  let seen = JSON.parse(localStorage.getItem('bako_seen') || '[]');
  if (!seen.includes(q.id)) { seen.push(q.id); localStorage.setItem('bako_seen', JSON.stringify(seen)); }
  document.getElementById('qCount').textContent = "Question " + (idx + 1) + " / " + qList.length;
  document.getElementById('qText').textContent = q.q;
  document.getElementById('feedbackBanner').style.display = 'none';
  document.getElementById('qExp').style.display = 'none';
  document.getElementById('btnNext').style.display = 'none';
  const box = document.getElementById('qOptions'); box.innerHTML = '';
  q.o.forEach((opt, i) => {
    const b = document.createElement('button'); b.className = 'option-btn'; b.textContent = opt;
    b.onclick = () => {
      document.querySelectorAll('.option-btn').forEach(x => x.disabled = true);
      const fb = document.getElementById('feedbackBanner');
      fb.style.display = 'block';
      if (i === q.a) {
        b.classList.add('correct');
        score++;
        document.getElementById('liveScore').textContent = "Note : " + score + " / " + qList.length;
        fb.style.background = "#D1FAE5"; fb.style.color = "#065F46";
        fb.textContent = "✅ Bonne réponse ! (+1 point)";
      } else {
        b.classList.add('wrong');
        document.querySelectorAll('.option-btn')[q.a].classList.add('correct');
        fb.style.background = "#FEE2E2"; fb.style.color = "#991B1B";
        fb.textContent = "❌ Mauvaise réponse (0 point)";
      }
      document.getElementById('qExp').innerHTML = "<strong>💡 Explication :</strong> " + q.e;
      document.getElementById('qExp').style.display = 'block';
      document.getElementById('btnNext').style.display = 'block';
    };
    box.appendChild(b);
  });
}

function nextQ() {
  idx++;
  if (idx < qList.length) {
    showQ();
  } else {
    hideAll();
    document.getElementById('resultPage').style.display = 'block';
    let pct = Math.round((score / qList.length) * 100);
    document.getElementById('resExamTitle').textContent = "Examen " + activeCat.toUpperCase();
    document.getElementById('resScoreBig').textContent = pct + " / 100";
    document.getElementById('resDetail').textContent = "Bonnes réponses : " + score + " sur " + qList.length;
    const m = document.getElementById('resMention');
    if (pct >= 80) { m.style.background = "#D1FAE5"; m.style.color = "#065F46"; m.textContent = "🏆 Mention : TRÈS BIEN (Admis avec brio)"; }
    else if (pct >= 60) { m.style.background = "#DBEAFE"; m.style.color = "#1E40AF"; m.textContent = "👍 Mention : ASSEZ BIEN (Admis)"; }
    else if (pct >= 50) { m.style.background = "#FEF3C7"; m.style.color = "#92400E"; m.textContent = "⚠️ Mention : PASSABLE (Doit renforcer)"; }
    else { m.style.background = "#FEE2E2"; m.style.color = "#991B1B"; m.textContent = "❌ Résultat : AJOURNÉ (Révisez les explications)"; }
    document.getElementById('btnRetryNew').onclick = () => startQuiz(activeCat);
  }
}
