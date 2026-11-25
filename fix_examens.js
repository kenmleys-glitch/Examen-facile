const _origStartQuiz = startSubjectQuiz;
startSubjectQuiz = function(subId, subName) {
  if (subId === '9_math_past') {
    curSubId = subId;
    curSubName = subName;
    document.getElementById('subjectButtonsList').innerHTML = '';
    hideAll();
    const box = document.getElementById('subjectBox');
    document.getElementById('subClassTitle').textContent = "📚 Anciens Examens d'État MENFP - Mathématiques (9ème)";
    box.innerHTML = '';

    let raw = [];
    if (typeof examensPasses !== 'undefined') raw = raw.concat(examensPasses);
    if (typeof pastPapers9eme !== 'undefined') raw = raw.concat(pastPapers9eme);
    if (typeof epreuves50 !== 'undefined') raw = raw.concat(epreuves50);

    if (raw.length === 0) {
      box.innerHTML = "<p style='color:#D21034; font-weight:bold;'>⚠️ Fichye egzamen yo pa chaje. Verifye examens_passes.js.</p>";
      document.getElementById('subjectPage').style.display = 'block';
      return;
    }

    raw.forEach((paper, idxP) => {
      const div = document.createElement('div');
      div.style.cssText = "background:#FFFFFF; border:2px solid #0038A8; border-radius:10px; padding:14px; margin-bottom:16px; box-shadow:0 2px 6px rgba(0,0,0,0.06);";
      const titre = paper.titre || paper.title || paper.nom || ("Examen Officiel MENFP #" + (idxP + 1));
      const annee = paper.annee || paper.year || paper.session || "";
      const duree = paper.duree ? (" | ⏱️ Durée : " + paper.duree) : "";
      const coef = paper.coef ? (" | Coef : " + paper.coef) : "";

      let bodyHtml = '';
      let corrHtml = '';

      if (paper.enonce || paper.texte || paper.contenu) {
        bodyHtml += `<div style="background:#F8FAFC; padding:10px; border-radius:6px; margin-bottom:10px; white-space:pre-line;">${paper.enonce || paper.texte || paper.contenu}</div>`;
      }

      const items = paper.questions || paper.exercices || paper.parties || paper.items || [];
      items.forEach((item, qi) => {
        const qTitle = item.titre ? `<strong>${item.titre} :</strong> ` : `<strong>${qi + 1}.</strong> `;
        const qText = item.q || item.question || item.enonce || item.texte || (typeof item === 'string' ? item : '');
        bodyHtml += `<div style="margin:8px 0; padding-bottom:6px; border-bottom:1px dashed #E2E8F0; white-space:pre-line;">${qTitle}${qText}`;

        const opts = item.options || item.o || item.choix;
        if (Array.isArray(opts) && opts.length > 0) {
          bodyHtml += `<ul style="margin:4px 0 0 18px; color:#334155;">` + opts.map((op, oi) => `<li>${String.fromCharCode(65 + oi)}) ${op}</li>`).join('') + `</ul>`;
        }
        bodyHtml += `</div>`;

        let rep = item.reponse || item.correction || item.solution || '';
        if (!rep && Array.isArray(opts) && typeof item.answer === 'number') rep = opts[item.answer];
        if (!rep && Array.isArray(opts) && typeof item.a === 'number') rep = opts[item.a];
        const exp = item.explication || item.e || item.demarche || '';
        if (rep || exp) {
          corrHtml += `<div style="margin:8px 0; padding-bottom:6px; border-bottom:1px solid #BFDBFE; white-space:pre-line;"><strong>${qi + 1}. Repons :</strong> ${rep}${exp ? `<br><em>💡 ${exp}</em>` : ''}</div>`;
        }
      });

      if (!corrHtml && (paper.correction || paper.corrige)) {
        corrHtml = `<div style="white-space:pre-line;">${paper.correction || paper.corrige}</div>`;
      }

      div.innerHTML = `
        <h3 style="color:#0038A8; font-size:1.05rem; margin-bottom:4px;">${titre}</h3>
        <p style="font-size:0.78rem; color:#D21034; font-weight:bold; margin-bottom:10px;">🇭🇹 MENFP Officiel ${annee}${duree}${coef}</p>
        <div style="font-size:0.9rem; line-height:1.55; margin-bottom:12px;">${bodyHtml || "<p><em>Kontni egzamen an ap chaje...</em></p>"}</div>
        <button class="btn btn-sm" style="background:#0038A8; color:white; width:100%;" onclick="const el=document.getElementById('corr_full_${idxP}'); el.style.display = el.style.display === 'none' ? 'block' : 'none';">✅ Voir / Cacher la correction complète</button>
        <div id="corr_full_${idxP}" style="display:none; margin-top:10px; padding:12px; background:#EFF6FF; border-left:4px solid #0038A8; border-radius:6px; font-size:0.86rem; line-height:1.5;">${corrHtml || "Koreksyon detaye a disponib nan egzèsis yo."}</div>
      `;
      box.appendChild(div);
    });

    document.getElementById('subjectPage').style.display = 'block';
    return;
  }
  _origStartQuiz(subId, subName);
};
