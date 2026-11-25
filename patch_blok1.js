// KOREKSYON #2 : PANÈL ADMIN SEKRÈ (Tape 5 fwa rapid sou BAKO HAITI oswa peze doub-klik)
(function() {
  const logo = document.getElementById('appLogo');
  if (logo) {
    let taps = 0, timer = null;
    logo.onclick = function() {
      taps++;
      clearTimeout(timer);
      timer = setTimeout(() => { taps = 0; }, 2000);
      if (taps >= 5) {
        taps = 0;
        const pwd = prompt("🔐 Modpas Admin BAKO HAITI :");
        if (pwd === "BAKO2026") {
          hideAll();
          document.getElementById('adminPage').style.display = 'block';
        } else if (pwd !== null) {
          alert("❌ Move modpas !");
        }
      }
    };
  }
})();

function generateSecureVipCode() {
  const ph = document.getElementById('adminClientPhone').value.trim().replace(/\D/g, '');
  if (ph.length !== 8) { alert("Antre nimewo 8 chif elèv la !"); return; }
  const nowWin = Math.floor(Date.now() / (30 * 60000));
  const code = "BK-" + computeHash(ph, nowWin);
  document.getElementById('admOutPhone').textContent = ph;
  document.getElementById('admOutCode').textContent = code;
  document.getElementById('adminGeneratedBox').style.display = 'block';
  window.lastAdminMsg = `✅ Peman 100 Gds konfime sou BAKO HAITI !\n📱 Nimewo : ${ph}\n🔑 Kòd VIP ou : ${code}\n⚠️ Antre kòd sa a nan aplikasyon an anvan 30 minit.`;
}

function copyAdminReply() {
  if (!window.lastAdminMsg) return;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.lastAdminMsg).then(() => alert("📋 Mesaj kopye !"));
  } else {
    prompt("Kopye mesaj sa a :", window.lastAdminMsg);
  }
}

// KOREKSYON #5 : SERI JOU (STREAK 🔥) KI MONTE SÈLMAN LÈ ELÈV LA TRAVAY
function refreshStreakDisplay() {
  const st = JSON.parse(localStorage.getItem('bako_streak_v2') || '{"count":0,"lastDate":""}');
  const badge = document.getElementById('streakBadge');
  if (badge) badge.textContent = "🔥 " + st.count + " Jou";
}
refreshStreakDisplay();

function recordDailyActivity() {
  const today = new Date().toDateString();
  let st = JSON.parse(localStorage.getItem('bako_streak_v2') || '{"count":0,"lastDate":""}');
  if (st.lastDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    st.count = (st.lastDate === yesterday) ? st.count + 1 : 1;
    st.lastDate = today;
    localStorage.setItem('bako_streak_v2', JSON.stringify(st));
    refreshStreakDisplay();
  }
}

// KOREKSYON #3 : MÒD DEMO 5 KESYON + ANREJISTRE ACTIVITÉ
const _origShowQ = showQ;
showQ = function() {
  recordDailyActivity();
  _origShowQ();
};

const _origNextQ = nextQ;
nextQ = function() {
  _origNextQ();
  if (idx >= list.length && isDemoMode) {
    const resTxt = document.getElementById('resTxt');
    if (resTxt) resTxt.innerHTML += "<br><span style='color:#FF6B00; font-size:0.85rem;'>🎁 Sa te yon tès Démo (5 kesyon). Aktive VIP pou jwenn 6,000+ kesyon !</span>";
  }
};
