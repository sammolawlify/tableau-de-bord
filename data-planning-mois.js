/* ==== DONNÉES PLANNING DU MOIS (calculées depuis les agendas : ISIFA, NetYParéo ICMD, NetYParéo CFA Descartes, jeudis ISCE) ====
   Aucun nom, lieu ni montant. h = heures de cours, oraux et jury programmées sur la semaine (durées des événements).
   debut = lundi de la semaine (AAAA-MM-JJ). conflit = chevauchement d'agenda sur la semaine. */
window.DATA_PLANNING_MOIS = {
  updated: "18/11/2026 à 17:10",
  mois: "Novembre",
  note_conflit: "Chevauchement le 30/11 (matin)",
  semaines: [
    { label: "2/11",  debut: "2026-11-02", h: 33 },
    { label: "9/11",  debut: "2026-11-09", h: 29.5 },
    { label: "16/11", debut: "2026-11-16", h: 32.5 },
    { label: "23/11", debut: "2026-11-23", h: 21.5 },
    { label: "30/11", debut: "2026-11-30", h: 11, conflit: true }
  ]
};
/* ==== FIN DES DONNÉES ==== */
