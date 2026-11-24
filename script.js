const quizDatabase = {
    '9eme': {
        title: '9yèm Ane (MENFP)',
        questions: [
            { q: "Matematik : Ki valè x nan 3x - 7 = 14 ?", options: ["x = 5", "x = 7", "x = 21"], answer: 1, exp: "3x = 21 => x = 7." },
            { q: "Istwa : Ki dat batay Vètyè a te fèt ?", options: ["1ye Janvye 1804", "18 Novanm 1803", "14 Out 1791"], answer: 1, exp: "18 Novanm 1803." }
        ]
    },
    'smp': {
        title: 'NS4 - SMP',
        questions: [
            { q: "Fizik : Fòs pou mas 5kg ak akselerasyon 3m/s² ?", options: ["8 N", "15 N", "2 N"], answer: 1, exp: "F = 5 × 3 = 15 N." }
        ]
    },
    'svt': {
        title: 'NS4 - SVT',
        questions: [
            { q: "Biyoloji : Òganit ki pwodui enèji (ATP) ?", options: ["Ribozòm", "Mitokondri", "Nwayo"], answer: 1, exp: "Mitokondri a." }
        ]
    },
    'ses': {
        title: 'NS4 - SES',
        questions: [
            { q: "Istwa : Ki lane okipasyon amerikèn nan kòmanse ?", options: ["1915", "1934", "1957"], answer: 0, exp: "28 Jiyè 1915." }
        ]
    },
    'lla': {
        title: 'NS4 - LLA',
        questions: [
            { q: "Literati : Kiyès ki ekri 'Compère Général Soleil' ?", options: ["Jacques Roumain", "Jacques Stephen Alexis", "René Depestre"], answer: 1, exp: "Jacques Stephen Alexis (1955)." }
        ]
    },
    'univ': {
        title: 'Konkou UEH',
        questions: [
            { q: "Jewografi : Konbyen depatman ki genyen ann Ayiti ?", options: ["9", "10", "11"], answer: 1, exp: "10 depatman." }
        ]
    }
};

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
    if (checkSubscriptionStatus()) { alert("⭐ Espas VIP Debloke pou : " + sec); }
    else { alert("🔒 Abònman VIP obligatwa (100 Gds / 30 jou)."); goVip(); }
}

let curCat = '', curIdx = 0, score = 0;

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
    curCat = cat; curIdx = 0; score = 0;
    document.getElementById('qTitle').textContent = quizDatabase[cat].title;
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('vipPage').style.display = 'none';
    document.getElementById('quizPage').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const qList = quizDatabase[curCat].questions;
    const qObj = qList[curIdx];
    document.getElementById('qCount').textContent = `Kesyon ${curIdx + 1} / ${qList.length}`;
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
    if (curIdx < quizDatabase[curCat].questions.length) { loadQuestion(); }
    else { alert(`🎉 Nòt ou : ${score} / ${quizDatabase[curCat].questions.length}`); goHome(); }
}
    
