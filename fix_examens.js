function renderAnyNode(node, depth) {
  if (!node) return '';
  if (typeof node === 'string' || typeof node === 'number') {
    return `<p style="margin:4px 0; white-space:pre-line;">${node}</p>`;
  }
  if (Array.isArray(node)) {
    return node.map((item, idx) => {
      const prefix = depth === 1 ? `<span style="color:#D21034; font-weight:bold;">➤ </span>` : `<strong>${idx + 1}. </strong>`;
      return `<div style="margin:6px 0 6px ${depth * 10}px; padding-left:6px; border-left:${depth > 0 ? '2px solid #CBD5E1' : 'none'};">${prefix}${renderAnyNode(item, depth + 1)}</div>`;
    }).join('');
  }
  if (typeof node === 'object') {
    let html = '';
    const skipKeys = ['id', 'annee', 'year', 'session', 'duree', 'coef', 'answer', 'a', 'reponse', 'correction', 'corrige', 'solution', 'explication', 'e', 'demarche'];
    const head = node.titre || node.title || node.partie || node.section || node.domaine || node.nom;
    if (head) {
      html += `<div style="background:#EFF6FF; color:#0038A8; font-weight:bold; padding:5px 8px; border-radius:5px; margin:8px 0 4px 0;">📌 ${head}</div>`;
    }
    const text = node.q || node.question || node.enonce || node.texte || node.contenu || node.consigne;
    if (text) {
      html += `<p style="margin:4px 0; white-space:pre-line;">${text}</p>`;
    }
    const opts = node.options || node.o || node.choix;
    if (Array.isArray(opts) && opts.length > 0) {
      html += `<ul style="margin:4px 0 6px 18px; color:#334155;">` + opts.map((op, oi) => `<li><strong>${String.fromCharCode(65 + oi)})</strong> ${op}</li>`).join('') + `</ul>`;
    }
    Object.keys(node).forEach(k => {
      if (skipKeys.includes(k) || ['titre','title','partie','section','domaine','nom','q','question','enonce','texte','contenu','consigne','options','o','choix'].includes(k)) return;
      const val = node[k];
      if (val && (typeof val === 'object' || Array.isArray(val))) {
        const label = k.replace(/_/g, ' ').toUpperCase();
        html += `<div style="margin-top:6px;"><span style="font-size:0.78rem; font-weight:bold; color:#0038A8; text-transform:uppercase;">▸ ${label}</span>${renderAnyNode(val, depth + 1)}</div>`;
      } else if (typeof val === 'string' && val.trim().length > 0) {
        html += `<p style="margin:4px 0; white-space:pre-line;"><strong>${k} :</strong> ${val}</p>`;
      }
    });
    return html;
  }
  return '';
}

function renderAnyCorrection(node) {
  if (!node) return '';
  if (Array.isArray(node)) {
    return node.map((item, idx) => {
      const c = renderAnyCorrection(item);
      return c ? `<div style="margin:6px 0; padding-bottom:6px; border-bottom:1px dashed #93C5FD;"><strong>#${idx + 1} :</strong> ${c}</div>` : '';
    }).join('');
  }
  if (typeof node === 'object') {
    let html = '';
    const head = node.titre || node.title || node.partie || node.domaine;
    const opts = node.options || node.o || node.choix;
    let rep = node.reponse || node.correction || node.corrige || node.solution || '';
    if (!rep && Array.isArray(opts) && typeof node.answer === 'number') rep = opts[node.answer];
    if (!rep && Array.isArray(opts) && typeof node.a === 'number') rep = opts[node.a];
    const exp = node.explication || node.e || node.demarche || '';

    if (head && (rep || exp)) html += `<strong style="color:#0038A8;">[${head}]</strong> `;
    if (rep) html += `<span><strong>Repons :</strong> ${rep}</span>`;
    if (exp) html += `<div style="color:#1E3A8A; font-style:italic; margin-top:2px; white-space:pre-line;">💡 ${exp}</div>`;

    Object.keys(node).forEach(k => {
      if (['options','o','choix','reponse','correction','corrige','solution','explication','e','demarche'].includes(k)) return;
      const val = node[k];
      if (val && typeof val === 'object') {
        const sub = renderAnyCorrection(val);
        if (sub) html += `<div style="margin-left:10px; margin-top:4px;">${sub}</div>`;
      }
    });
    return html;
  }
  return '';
}

const _origStartQuiz = startSubjectQuiz;
startSubjectQuiz = function(subId, subName) {
  if (subId === '9_math_past') {
    curSubId = subId; curSubName = subName;
    document.getElementById('subjectButtonsList').innerHTML = '';
    hideAll();
    const box = document.getElementById('subjectBox');
    document.getElementById('subClassTitle').textContent = "📚 Fèy Egzamen Konplè MENFP - Mathématiques (9ème)";
    box.innerHTML = '';

    let raw = [];
    if (typeof examensPasses !== 'undefined') raw = raw.concat(examensPasses);
    if (typeof pastPapers9eme !== 'undefined') raw = raw.concat(pastPapers9eme);
    if (typeof epreuves50 !== 'undefined') raw = raw.concat(epreuves50);

    raw.forEach((paper, idxP) => {
      const div = document.createElement('div');
      div.style.cssText = "background:#FFFFFF; border:2px solid #0038A8; border-radius:10px; padding:14px; margin-bottom:18px; box-shadow:0 2px 6px rgba(0,0,0,0.08);";
      const titre = paper.titre || paper.title || paper.nom || ("Fèy Egzamen MENFP #" + (idxP + 1));
      const annee = paper.annee || paper.year || paper.session || "";
      const duree = paper.duree ? (" | ⏱️ " + paper.duree) : "";
      const coef = paper.coef ? (" | Coef: " + paper.coef) : "";

      const fullBody = renderAnyNode(paper, 0);
      const fullCorr = renderAnyCorrection(paper);

      div.innerHTML = `
        <h3 style="color:#0038A8; font-size:1.08rem; margin-bottom:4px;">${titre}</h3>
        <p style="font-size:0.78rem; color:#D21034; font-weight:bold; margin-bottom:10px;">🇭🇹 MENFP Officiel ${annee}${duree}${coef}</p>
        <div style="font-size:0.9rem; line-height:1.55; margin-bottom:12px;">${fullBody}</div>
        <button class="btn btn-sm" style="background:#0038A8; color:white; width:100%;" onclick="const el=document.getElementById('corr_full_${idxP}'); el.style.display = el.style.display === 'none' ? 'block' : 'none';">✅ Voir / Cacher toute la correction (Algèbre, Géométrie, Stats)</button>
        <div id="corr_full_${idxP}" style="display:none; margin-top:10px; padding:12px; background:#EFF6FF; border-left:4px solid #0038A8; border-radius:6px; font-size:0.86rem; line-height:1.5;">${fullCorr || "Koreksyon an anndan chak pati."}</div>
      `;
      box.appendChild(div);
    });

    document.getElementById('subjectPage').style.display = 'block';
    return;
  }
  _origStartQuiz(subId, subName);
};
