/* Code commun du tableau de bord : aides, fraîcheur des données, rendus partagés. */
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const fmtH = n => String(n).replace(".", ",") + " h";
const tagCls = {urgent:"t-urgent",high:"t-high",norm:"t-norm"};
const tagTxt = {urgent:"Urgent",high:"Élevé",norm:"Normal"};
const mount = html => { document.getElementById("app").innerHTML = html; };

/* Heures ouvrées (hors samedi/dimanche) écoulées depuis « JJ/MM/AAAA [à HH:MM] ». */
function ageOuvre(updated) {
  const m = /(\d{2})\/(\d{2})\/(\d{4})(?:\D+(\d{2}):(\d{2}))?/.exec(updated || "");
  if (!m) return null;
  const d = new Date(+m[3], +m[2] - 1, +m[1], m[4] ? +m[4] : 12, m[5] ? +m[5] : 0), now = new Date();
  let h = 0;
  for (let t = d.getTime(); t < now.getTime(); t += 36e5) { const w = new Date(t).getDay(); if (w !== 0 && w !== 6) h++; }
  return h;
}
/* Ligne « Données au … ». Passe en orange au-delà de maxH heures ouvrées (0 = jamais). */
function upd(updated, maxH = 30, extra = "") {
  const a = maxH ? ageOuvre(updated) : null, stale = a !== null && a > maxH;
  return `<p class="upd${stale ? " stale" : ""}">${extra}Données au ${esc(updated)}${stale ? " · à actualiser" : ""}</p>`;
}

/* Page « Charge du mois » (mois en cours ou suivant). */
function renderMois(D) {
  const total = D.semaines.reduce((a, s) => a + s.h, 0), max = Math.max(...D.semaines.map(s => s.h));
  const now = new Date(); now.setHours(0, 0, 0, 0);
  const isCur = s => { const d = new Date(s.debut + "T00:00:00"), e = new Date(d); e.setDate(e.getDate() + 7); return now >= d && now < e; };
  const conflit = D.semaines.some(s => s.conflit);
  mount(`
<section class="card">
  <h2>Charge de ${esc(D.mois.toLowerCase())} (${fmtH(total)})</h2>
  <div class="days">${D.semaines.map(s =>
    `<div class="day ${isCur(s) ? "today" : ""} ${s.conflit ? "alert" : ""}"><b>${fmtH(s.h)}</b><i style="height:${Math.round(100 * s.h / max * 0.6)}%"></i>${esc(s.label)}</div>`).join("")}
  </div>
  ${upd(D.updated, 120, conflit ? esc(D.note_conflit) + " · " : "")}
</section>`);
}

/* Pages « Opportunités » (formation et CDI). */
function renderOpps(D, titre) {
  const count = s => D.items.filter(i => i.statut === s).length;
  const tag = s => s === "Nouvelle" ? "t-high" : "t-norm";
  const row = (k, v) => `<dt>${k}</dt><dd>${v}</dd>`;
  const item = i => `
  <details class="opp">
    <summary><span class="t">${esc(i.titre)}</span><span class="tag ${tag(i.statut)}">${esc(i.statut)}</span></summary>
    <dl>
      ${row("Employeur", esc(i.employeur))}
      ${row("Lieu", esc(i.lieu))}
      ${row("Contrat", esc(i.contrat))}
      ${row("Rémunération", esc(i.tarif))}
      ${row("Publiée le", esc(i.publiee))}
      ${row("Date limite", esc(i.limite))}
      ${row("Repérée le", esc(i.repere))}
      ${row("Annonce", `<a href="${esc(i.lien)}" target="_blank" rel="noopener">Ouvrir l'annonce</a>`)}
    </dl>
  </details>`;
  mount(`
<section class="card">
  <h2>${esc(titre)}</h2>
  <div class="counters">
    <div class="counter c-todo"><b>${count("Nouvelle")}</b><span>Nouvelles</span></div>
    <div class="counter c-wait"><b>${count("À étudier")}</b><span>À étudier</span></div>
    <div class="counter c-chase"><b>${D.candidatures_en_cours}</b><span>Candidatures en cours</span></div>
    <div class="counter c-urgent"><b>${D.ecartees.length}</b><span>Écartées</span></div>
  </div>
  <div class="sub">Offres (${D.items.length})</div>
  ${D.items.length ? D.items.map(item).join("") : '<div class="gone">Aucune offre vérifiée pour le moment.</div>'}
  <details class="opp">
    <summary><span class="t">Écartées (${D.ecartees.length})</span></summary>
    <dl>${D.ecartees.map(e => row(esc(e.label), esc(e.motif))).join("")}</dl>
  </details>
  ${upd(D.updated, 30, "Dernière recherche " + esc(D.derniere_recherche) + " · ")}
</section>`);
}

/* Page « Charge de l'année » : 12 barres mensuelles. */
function renderAnnee(D) {
  const total = D.mois.reduce((a, m) => a + m.h, 0), max = Math.max(...D.mois.map(m => m.h));
  const fmt = n => String(Math.round(n * 10) / 10).replace(".", ",");
  const confl = D.mois.some(m => m.conflits), part = D.mois.some(m => m.partiel);
  const notes = [confl ? D.note_conflit : "", part ? D.note_partiel : ""].filter(Boolean).map(esc).join(" · ");
  mount(`
<section class="card">
  <h2>Charge ${esc(D.annee)} (${fmt(total)} h)</h2>
  <div class="days dense">${D.mois.map(m =>
    `<div class="day ${m.conflits ? "alert" : ""} ${m.partiel ? "partiel" : ""}"><b>${m.h ? fmt(m.h) : "–"}</b><i style="height:${Math.round(100 * m.h / max * 0.6)}%"></i>${esc(m.label)}</div>`).join("")}
  </div>
  ${upd(D.updated, 0, notes ? notes + " · " : "")}
</section>`);
}
