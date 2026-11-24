function getSeenQuestions() {
    return JSON.parse(localStorage.getItem('bako_seen_q') || '[]');
}

function markQuestionAsSeen(qId) {
    if (!qId) return;
    let seen = getSeenQuestions();
    if (!seen.includes(qId)) {
        seen.push(qId);
        localStorage.setItem('bako_seen_q', JSON.stringify(seen));
    }
}

function getQuestionsForCategory(cat) {
    let pool = [];
    if (cat === '9eme') {
        if (typeof bank9eme !== 'undefined') pool = pool.concat(bank9eme.ansyen_egzamen);
        if (typeof generateMath9emeSet === 'function') pool = pool.concat(generateMath9emeSet(25));
    } else if (['smp', 'svt', 'ses', 'lla'].includes(cat)) {
        if (typeof bankNS4 !== 'undefined') pool = pool.concat(bankNS4.ansyen_egzamen);
        if (typeof generateNS4Set === 'function') pool = pool.concat(generateNS4Set(cat, 25));
    } else {
        pool = [
            { id: "ueh_1", q: "Jewografi : Konbyen depatman ki genyen ann Ayiti ?", options: ["9", "10", "11"], answer: 1, exp: "Ayiti gen 10 depatman." },
            { id: "ueh_2", q: "Istwa : Ki dat batay Vètyè a te fèt ?", options: ["1ye Janvye 1804", "18 Novanm 1803", "14 Out 1791"], answer: 1, exp: "18 Novanm 1803." }
        ];
    }

    let seen = getSeenQuestions();
    let fresh = pool.filter(item => !seen.includes(item.id));
    if (fresh.length === 0) fresh = pool;
    return fresh.sort(() => Math.random() - 0.5).slice(0, 10);
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

let isVIP = checkSubscriptionStatus();

function checkVip() {
    const ph = document.getElementById('userPhone').value.replace(/\D/g, '');
    const cd = document.getElementById('vipCode').value.trim().toUpperCase();
    const msg = document.getElementById('vipMsg');
    if (ph.length !== 8) { msg.style.color = "#D21034"; msg.textContent = "❌ Antre 8 chif telefòn ou."; return; }
    if (cd === generateUniqueCode(ph)) {
        localStorage.setItem('bako_haiti_sub', JSON.stringify({ phone: ph, activatedAt: Date.now() }));
        isVIP = checkSubscriptionStatus();
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
    document.getElementById('tabHome').classList.add('active');
    document.getElementById('tabVip').classList.remove('active');
}

function goVip() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('quizPage').style.display = 'none';
    document.getElementById('vipPage').style.display = 'block';
    document.getElementById('tabHome').classList.remove('active');
    document.getElementById('tabVip').classList.add('active');
}

function startQuiz(cat) {
    currentQuestions = getQuestionsForCategory(cat);
    curIdx = 0;
    score = 0;
    document.getElementById('qTitle').textContent = "Egzamen " + cat.toUpperCase();
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('vipPage').style.display = 'none';
    document.getElementById('quizPage').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const qObj = currentQuestions[curIdx];
    markQuestionAsSeen(qObj.id);
    document.getElementById('qCount').textContent = `Kesyon ${curIdx + 1} / ${currentQuestions.length}`;
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
            document.getElementById('qExp').innerHTML = `<strong>💡 Eksplikasyon :</strong> ${qObj.exp}`;
            document.getElementById('qExp').style.display = 'block';
            document.getElementById('btnNext').style.display = 'block';
        };
        box.appendChild(b);
    });
}

function nextQ() {
    curIdx++;
    if (curIdx < currentQuestions.length) { loadQuestion(); }
    else { alert(`🎉 Tès la fini ! Nòt ou : ${score} / ${currentQuestions.length}`); goHome(); }
}
