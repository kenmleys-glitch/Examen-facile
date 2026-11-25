let examModeType = 'normal'; // 'normal', 'chrono', 'lives'
let examTimerInterval = null;
let examSecondsLeft = 0;
let examLives = 3;

// Ajoute bouton Mòd Egzamen Reyèl & Mòd 3 Lavi nan lis matyè yo
const _origOpenSubjects = openSubjects;
openSubjects = function(cls) {
  _origOpenSubjects(cls);
  const listDiv = document.getElementById('subjectButtonsList');
  if (!listDiv) return;

  const modeBar = document.createElement('div');
  modeBar.style.cssText = "background:#EFF6FF; border:1px solid #BFDBFE; border-radius:8px; padding:10px; margin-bottom:12px;";
  modeBar.innerHTML = `
    <p style="font-size:0.82rem; font-weight:bold; color:#0038A8; margin-bottom:6px;">🎯 Chwazi Mòd Egzamen an :</p>
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:5px;">
      <button id="mBtn_normal" class="btn btn-sm" style="background:#0038A8; color:white; font-size:0.75rem; padding:6px;" onclick="setExamMode('normal')">📘 Nòmal</button>
      <button id="mBtn_chrono" class="btn btn-sm" style="background:#E2E8F0; color:#1E293B; font-size:0.75rem; padding:6px;" onclick="setExamMode('chrono')">⏱️ Chronomètre</button>
      <button id="mBtn_lives" class="btn btn-sm" style="background:#E2E8F0; color:#1E293B; font-size:0.75rem; padding:6px;" onclick="setExamMode('lives')">❤️ 3 Lavi</button>
    </div>
  `;
  listDiv.prepend(modeBar);
  setExamMode('normal');
};

function setExamMode(m) {
  examModeType = m;
  ['normal', 'chrono', 'lives'].forEach(k => {
    const b = document.getElementById('mBtn_' + k);
    if (b) {
      b.style.background = (k === m) ? (k === 'lives' ? '#D21034' : (k === 'chrono' ? '#FF6B00' : '#0038A8')) : '#E2E8F0';
      b.style.color = (k === m) ? 'white' : '#1E293B';
    }
  });
}

function stopExamTimer() {
  if (examTimerInterval) { clearInterval(examTimerInterval); examTimerInterval = null; }
  const bar = document.getElementById('examHudBar');
  if (bar) bar.remove();
}

const _origStartQuizMode = startSubjectQuiz;
startSubjectQuiz = function(subId, subName) {
  stopExamTimer();
  _origStartQuizMode(subId, subName);
  if (subId === '9_math_past') return;

  const qPage = document.getElementById('quizPage');
  if (!qPage) return;

  if (examModeType === 'chrono' || examModeType === 'lives') {
    const hud = document.createElement('div');
    hud.id = 'examHudBar';
    hud.style.cssText = "background:#0F172A; color:white; padding:8px 12px; border-radius:8px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; font-weight:bold; font-size:0.9rem;";
    qPage.prepend(hud);

    if (examModeType === 'chrono') {
      examSecondsLeft = list.length * 60; // 1 minit pa kesyon
      const updateTimerUI = () => {
        const m = Math.floor(examSecondsLeft / 60).toString().padStart(2, '0');
        const s = (examSecondsLeft % 60).toString().padStart(2, '0');
        hud.innerHTML = `<span>⏱️ MÒD EGZAMEN REYÈL</span><span style="color:#FBBF24;">Tan ki rete : ${m}:${s}</span>`;
        if (examSecondsLeft <= 0) {
          stopExamTimer();
          alert("⏰ Tan egzamen an fini !");
          idx = list.length - 1;
          nextQ();
        }
        examSecondsLeft--;
      };
      updateTimerUI();
      examTimerInterval = setInterval(updateTimerUI, 1000);
    } else if (examModeType === 'lives') {
      examLives = 3;
      hud.innerHTML = `<span>🎮 KOUS 3 LAVI</span><span id="livesDisplay">❤️ ❤️ ❤️</span>`;
    }
  }
};

// Jere repons selon mòd la
const _origShowQMode = showQ;
showQ = function() {
  _origShowQMode();
  const q = list[idx];
  const opts = document.querySelectorAll('.option-btn');
  opts.forEach((btn, i) => {
    btn.onclick = () => {
      opts.forEach(x => x.disabled = true);
      const fb = document.getElementById('fbBox');
      const exp = document.getElementById('qExp');
      const nextBtn = document.getElementById('btnNext');

      if (examModeType === 'chrono') {
        // Nan Mòd Egzamen Reyèl, pa montre koreksyon anvan fini
        btn.style.background = "#0038A8";
        btn.style.color = "white";
        if (i === q.a) { score++; addPointsToStudent(10); }
        fb.style.display = "block";
        fb.style.background = "#EFF6FF";
        fb.style.color = "#0038A8";
        fb.textContent = "📝 Repons anrejistre. Kontinye !";
        nextBtn.style.display = "block";
      } else {
        fb.style.display = "block";
        if (i === q.a) {
          btn.classList.add('correct');
          score++;
          addPointsToStudent(10);
          document.getElementById('liveScore').textContent = "Note : " + score + " / " + list.length;
          fb.style.background = "#D1FAE5"; fb.style.color = "#065F46";
          fb.textContent = "✅ Bonne réponse ! (+10 pts)";
        } else {
          btn.classList.add('wrong');
          opts[q.a].classList.add('correct');
          fb.style.background = "#FEE2E2"; fb.style.color = "#991B1B";
          fb.textContent = "❌ Mauvaise réponse !";
          if (examModeType === 'lives') {
            examLives--;
            const ld = document.getElementById('livesDisplay');
            if (ld) ld.textContent = "❤️ ".repeat(examLives) + "🖤 ".repeat(3 - examLives);
            if (examLives <= 0) {
              setTimeout(() => {
                alert("💔 Ou pèdi tout 3 kè w yo ! Eseye bat rekò w ankò.");
                idx = list.length - 1;
                nextQ();
              }, 900);
              return;
            }
          }
        }
        exp.innerHTML = "<strong>💡 Explication :</strong> " + q.e;
        exp.style.display = "block";
        nextBtn.style.display = "block";
      }
    };
  });
};

// Sètifika Reyisit nan fen egzamen an si nòt >= 80%
const _origNextQMode = nextQ;
nextQ = function() {
  if (idx + 1 >= list.length) stopExamTimer();
  _origNextQMode();
  if (idx >= list.length) {
    let pct = Math.round((score / list.length) * 100);
    const oldCert = document.getElementById('btnCertificat');
    if (oldCert) oldCert.remove();

    if (pct >= 80) {
      const resCard = document.querySelector('#resultPage .card');
      const certBtn = document.createElement('button');
      certBtn.id = 'btnCertificat';
      certBtn.className = 'btn';
      certBtn.style.cssText = "background:#D97706; color:white; margin-bottom:8px; font-weight:bold;";
      certBtn.textContent = "🎓 Telechaje Sètifika Reyisit mwen (PNG)";
      certBtn.onclick = () => downloadCertificate(pct);
      resCard.insertBefore(certBtn, resCard.children[3]);
    }
  }
};

function downloadCertificate(pct) {
  const p = getProfile() || { name: "Élève Méritant", school: "République d'Haïti", city: "Haïti" };
  const canvas = document.createElement('canvas');
  canvas.width = 900; canvas.height = 600;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, 900, 600);
  ctx.strokeStyle = "#0038A8";
  ctx.lineWidth = 14;
  ctx.strokeRect(20, 20, 860, 560);
  ctx.strokeStyle = "#D21034";
  ctx.lineWidth = 4;
  ctx.strokeRect(36, 36, 828, 528);

  ctx.fillStyle = "#0038A8";
  ctx.font = "bold 36px Arial";
  ctx.textAlign = "center";
  ctx.fillText("🇭🇹 BAKO HAITI - MENFP", 450, 105);

  ctx.fillStyle = "#D21034";
  ctx.font = "bold 28px Arial";
  ctx.fillText("CERTIFICAT D'EXCELLENCE ACADÉMIQUE", 450, 160);

  ctx.fillStyle = "#334155";
  ctx.font = "20px Arial";
  ctx.fillText("Décerné fièrement à l'élève :", 450, 220);

  ctx.fillStyle = "#0F172A";
  ctx.font = "bold 38px Georgia";
  ctx.fillText(p.name.toUpperCase(), 450, 275);

  ctx.fillStyle = "#475569";
  ctx.font = "20px Arial";
  ctx.fillText(`École : ${p.school} (${p.city})`, 450, 320);
  ctx.fillText(`Pour avoir réussi avec succès l'évaluation de :`, 450, 370);

  ctx.fillStyle = "#0038A8";
  ctx.font = "bold 24px Arial";
  ctx.fillText(`${curSubName} — Note obtenue : ${pct} / 100`, 450, 415);

  ctx.fillStyle = "#10B981";
  ctx.font = "bold 22px Arial";
  ctx.fillText("MENTION : TRÈS BIEN 🏆", 450, 465);

  ctx.fillStyle = "#64748B";
  ctx.font = "16px Arial";
  ctx.fillText(`Délivré officiellement le ${new Date().toLocaleDateString('fr-FR')} via BAKO HAITI`, 450, 525);

  const link = document.createElement('a');
  link.download = `Certificat_BAKO_HAITI_${p.name.replace(/\s+/g, '_')}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}
