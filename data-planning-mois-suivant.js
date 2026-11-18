/* ==== DONNÉES PLANNING DU MOIS SUIVANT (calculées depuis les agendas : ISIFA, NetYParéo ICMD, NetYParéo CFA Descartes, jeudis ISCE) ====
   Aucun nom, lieu ni montant. h = heures de cours, oraux et jury programmées sur la semaine (durées des événements).
   debut = lundi de la semaine (AAAA-MM-JJ). conflit = chevauchement d'agenda sur la semaine. */
window.DATA_PLANNING_MOIS_SUIVANT = {
  updated: "18/11/2026 à 17:26",
  mois: "Décembre",
  note_conflit: "Chevauchement le 07/12 (après-midi) · ISCE des 24 et 31/12 à confirmer",
  semaines: [
    { label: "1/12",  debut: "2026-11-30", h: 18 },
    { label: "7/12",  debut: "2026-12-07", h: 22, conflit: true },
    { label: "14/12", debut: "2026-12-14", h: 36.5 },
    { label: "21/12", debut: "2026-12-21", h: 10.5 },
    { label: "28/12", debut: "2026-12-28", h: 3.5 }
  ]
};
/* ==== FIN DES DONNÉES ==== */
