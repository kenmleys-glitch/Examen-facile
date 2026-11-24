const staticBank = {
    '9eme': [
        { id: "9_1", q: "[MENFP 2024 - Sciences Sociales] Quel traité signé en 1697 a divisé l'île d'Haïti en deux colonies ?", options: ["Traité de Ryswick", "Traité de Bâle", "Traité d'Aranjuez", "Traité de Paris"], answer: 0, exp: "Le traité de Ryswick (1697) a cédé la partie occidentale de l'île (Saint-Domingue) à la France." },
        { id: "9_2", q: "[MENFP 2024 - Français] Quelle est la figure de style dans : « Elle pleure un fleuve de larmes » ?", options: ["Comparaison", "Hyperbole", "Métaphore", "Personnification"], answer: 1, exp: "C'est une hyperbole car elle exagère fortement la réalité." },
        { id: "9_3", q: "[MENFP 2023 - Sciences Exp.] Quel gaz représente environ 78 % de l'atmosphère terrestre ?", options: ["Dioxygène (O2)", "Diazote (N2)", "Dioxyde de carbone (CO2)", "Hydrogène (H2)"], answer: 1, exp: "L'air contient environ 78 % de diazote (N2) et 21 % de dioxygène (O2)." },
        { id: "9_4", q: "[MENFP 2023 - Français] Complétez : « Il faut que nous _____ nos devoirs. »", options: ["faisons", "fassions", "ferons", "faisions"], answer: 1, exp: "Après « Il faut que », on utilise le subjonctif présent : « fassions »." },
        { id: "9_5", q: "[MENFP 2022 - Sciences Sociales] À quelle date fut proclamée la première Constitution d'Haïti indépendante ?", options: ["1er janvier 1804", "20 mai 1805", "17 octobre 1806", "18 novembre 1803"], answer: 1, exp: "La Constitution impériale de 1805 fut publiée le 20 mai 1805 sous Dessalines." }
    ],
    'smp': [
        { id: "smp_1", q: "[MENFP NS4 - Physique] Quelle est l'unité internationale de la force ?", options: ["Le Joule (J)", "Le Watt (W)", "Le Newton (N)", "Le Pascal (Pa)"], answer: 2, exp: "L'unité SI de la force est le Newton (N)." },
        { id: "smp_2", q: "[MENFP NS4 - Chimie] Quelle est la formule chimique de l'acide sulfurique ?", options: ["HCl", "H2SO4", "HNO3", "NaOH"], answer: 1, exp: "L'acide sulfurique a pour formule H2SO4." }
    ],
    'svt': [
        { id: "svt_1", q: "[MENFP NS4 - Biologie] Quel organite cellulaire produit l'énergie (ATP) ?", options: ["Le ribosome", "La mitochondrie", "Le noyau", "L'appareil de Golgi"], answer: 1, exp: "La mitochondrie est la centrale énergétique de la cellule." },
        { id: "svt_2", q: "[MENFP NS4 - Génétique] Quelle base azotée remplace la Thymine (T) dans l'ARN ?", options: ["L'Adénine (A)", "La Cytosine (C)", "L'Uracile (U)", "La Guanine (G)"], answer: 2, exp: "Dans l'ARN, l'Uracile (U) remplace la Thymine (T)." }
    ],
    'ses': [
        { id: "ses_1", q: "[MENFP NS4 - Économie] Que mesure le Produit Intérieur Brut (PIB) ?", options: ["La dette extérieure", "La richesse totale produite dans un pays en un an", "Les exportations uniquement", "Le budget de l'État"], answer: 1, exp: "Le PIB mesure la valeur totale des biens et services finaux produits sur le territoire national." },
        { id: "ses_2", q: "[MENFP NS4 - Histoire] Quel président haïtien a signé l'accord de désoccupation américaine en 1934 ?", options: ["Louis Borno", "Sténio Vincent", "Élie Lescot", "Dumarsais Estimé"], answer: 1, exp: "Sténio Vincent a négocié le départ des troupes américaines en août 1934." }
    ],
    'lla': [
        { id: "lla_1", q: "[MENFP NS4 - Philosophie] Qui a écrit : « L'existence précède l'essence » ?", options: ["René Descartes", "Jean-Paul Sartre", "Platon", "Jean-Jacques Rousseau"], answer: 1, exp: "C'est le principe fondamental de l'existentialisme de Jean-Paul Sartre." },
        { id: "lla_2", q: "[MENFP NS4 - Littérature] Qui est l'auteur du roman « Compère Général Soleil » (1955) ?", options: ["Jacques Roumain", "Jacques Stephen Alexis", "Frankétienne", "René Depestre"], answer: 1, exp: "Jacques Stephen Alexis a publié ce chef-d'œuvre en 1955." }
    ],
    'univ': [
        { id: "ueh_1", q: "[Concours UEH - Culture Générale] Combien de départements géographiques compte la République d'Haïti ?", options: ["9 départements", "10 départements", "11 départements", "12 départements"], answer: 1, exp: "Haïti compte 10 départements (le 10e étant les Nippes, créé en 2003)." },
        { id: "ueh_2", q: "[Concours UEH - Logique] Si 5 machines mettent 5 minutes pour fabriquer 5 pièces, combien de temps mettent 100 machines pour fabriquer 100 pièces ?", options: ["100 minutes", "5 minutes", "20 minutes", "1 minute"], answer: 1, exp: "Chaque machine fabrique 1 pièce en 5 minutes. 100 machines en parallèle mettent donc 5 minutes." }
    ]
};
function generateDynamicQuestions(cat, count) {
    let list = [];
    for (let i = 0; i < count; i++) {
        let uid = cat + "_dyn_" + Date.now() + "_" + i + "_" + Math.floor(Math.random() * 9999);
        if (cat === '9eme') {
            let a = Math.floor(Math.random() * 7) + 2;
            let x = Math.floor(Math.random() * 10) + 1;
            let b = Math.floor(Math.random() * 15) + 1;
            let c = a * x + b;
            let rightAns = "x = " + x;
            let opts = [rightAns, "x = " + (x + 2), "x = " + (x + 4), "x = " + (x - 1)].sort(() => Math.random() - 0.5);
            list.push({
                id: uid,
                q: "[Mathématiques 9e] Résolvez dans ℝ l'équation : " + a + "x + " + b + " = " + c,
                options: opts,
                answer: opts.indexOf(rightAns),
                exp: a + "x = " + c + " - " + b + " ⇒ " + a + "x = " + (c - b) + " ⇒ x = " + x + "."
            });
        } else {
            let a = Math.floor(Math.random() * 5) + 2;
            let b = Math.floor(Math.random() * 6) + 2;
            let rightAns = (3 * a) + "x² + " + (2 * b) + "x";
            let opts = [rightAns, a + "x² + " + b + "x", (3 * a) + "x² + " + b, (2 * a) + "x² + " + (2 * b) + "x"].sort(() => Math.random() - 0.5);
            list.push({
                id: uid,
                q: "[Mathématiques NS4] Calculez la dérivée f'(x) de la fonction : f(x) = " + a + "x³ + " + b + "x²",
                options: opts,
                answer: opts.indexOf(rightAns),
                exp: "La dérivée de " + a + "x³ est " + (3 * a) + "x² et la dérivée de " + b + "x² est " + (2 * b) + "x."
            });
        }
    }
    return list;
}

function getSeenList() {
    return JSON.parse(localStorage.getItem('bako_seen_ids') || '[]');
}

function saveSeenId(id) {
    let seen = getSeenList();
    if (!seen.includes(id)) {
        seen.push(id);
        localStorage.setItem('bako_seen_ids', JSON.stringify(seen));
    }
}

function buildTestSession(cat) {
    let base = staticBank[cat] || staticBank['9eme'];
    let dynamic = generateDynamicQuestions(cat, 8);
    let fullPool = base.concat(dynamic);
    let seen = getSeenList();
    let unseen = fullPool.filter(q => !seen.includes(q.id));
    if (unseen.length < 5) {
        localStorage.removeItem('bako_seen_ids');
        unseen = fullPool;
    }
    return unseen.sort(() => Math.random() - 0.5).slice(0, 10);
}

function generateUniqueCode(p) {
    let n = parseInt(p, 10);
    return isNaN(n) ? "" : "BK-" + (((n * 7) + 2026) % 9000 + 1000);
}

function checkSubscriptionStatus() {
    const sub = JSON.parse(localStorage.getItem('bako_haiti_sub'));
    const badge = document.getElementById('statusBadge');
    const exp = document.getElementById('expiryInfo');
    if (!sub) { badge.textContent = "Kont Gratis"; return false; }
    const left = (30 * 86400000) - (Date.now() - sub.activatedAt);
    if (left <= 0) {
        localStorage.removeItem('bako_haiti_sub');
        badge.textContent = "Abònman Ekspire";
        return false;
    }
    badge.textContent = "Kont VIP Aktif ⭐ (" + sub.phone + ")";
    badge.classList.add('vip-active');
    exp.textContent = "Rete " + Math.ceil(left / 86400000) + " jou";
    return true;
}

checkSubscriptionStatus();
       function checkVip() {
    const ph = document.getElementById('userPhone').value.replace(/\D/g, '');
    const cd = document.getElementById('vipCode').value.trim().toUpperCase();
    const msg = document.getElementById('vipMsg');
    if (ph.length !== 8) { msg.style.color = "#D21034"; msg.textContent = "❌ Antre 8 chif telefòn ou."; return; }
    if (cd === generateUniqueCode(ph)) {
        localStorage.setItem('bako_haiti_sub', JSON.stringify({ phone: ph, activatedAt: Date.now() }));
        checkSubscriptionStatus();
        msg.style.color = "#10B981"; msg.textContent = "✅ VIP Aktive pou 30 jou !";
        setTimeout(goHome, 1200);
    } else {
        msg.style.color = "#D21034"; msg.textContent = "❌ Kòd la pa bon.";
    }
}

function openVipContent(sec) {
    if (checkSubscriptionStatus()) {
        let cat = sec.includes('9eme') ? '9eme' : (sec.includes('ns4') ? 'smp' : 'univ');
        startQuiz(cat);
    } else {
        alert("🔒 Abònman VIP obligatwa (100 Gds / 30 jou).");
        goVip();
    }
}

let currentQuestions = [], curIdx = 0, score = 0;

function goHome() {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('quizPage').style.display = 'none';
    document.getElementById('vipPage').style.display = 'none';
}

function goVip() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('quizPage').style.display = 'none';
    document.getElementById('vipPage').style.display = 'block';
}

function startQuiz(cat) {
    currentQuestions = buildTestSession(cat);
    curIdx = 0;
    score = 0;
    document.getElementById('qTitle').textContent = "Examen " + cat.toUpperCase();
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('vipPage').style.display = 'none';
    document.getElementById('quizPage').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const qObj = currentQuestions[curIdx];
    saveSeenId(qObj.id);
    document.getElementById('qCount').textContent = "Question " + (curIdx + 1) + " / " + currentQuestions.length;
    document.getElementById('qText').textContent = qObj.q;
    document.getElementById('qExp').style.display = 'none';
    document.getElementById('btnNext').style.display = 'none';
    const box = document.getElementById('qOptions');
    box.innerHTML = '';
    qObj.options.forEach((opt, i) => {
        const b = document.createElement('button');
        b.className = 'option-btn';
        b.textContent = opt;
        b.onclick = () => {
            document.querySelectorAll('.option-btn').forEach(x => x.disabled = true);
            if (i === qObj.answer) { b.classList.add('correct'); score++; }
            else { b.classList.add('wrong'); document.querySelectorAll('.option-btn')[qObj.answer].classList.add('correct'); }
            document.getElementById('qExp').innerHTML = "<strong>💡 Explication :</strong> " + qObj.exp;
            document.getElementById('qExp').style.display = 'block';
            document.getElementById('btnNext').style.display = 'block';
        };
        box.appendChild(b);
    });
}

function nextQ() {
    curIdx++;
    if (curIdx < currentQuestions.length) { loadQuestion(); }
    else { alert("🎉 Test terminé ! Votre note : " + score + " / " + currentQuestions.length); goHome(); }
        }
