/* ==== DONNÉES PLANNING ANNÉE (calculées depuis les agendas : ISIFA, NetYParéo ICMD, NetYParéo CFA Descartes, jeudis ISCE) ====
   Aucun nom, lieu ni montant. h = heures de cours, oraux et jury programmées sur le mois (durées des événements).
   conflits = nombre de jours avec chevauchement d'agenda. partiel = planning pas encore publié (mois incomplet).
   Jeudis ISCE comptés jusqu'à fin juin 2027 seulement. */
window.DATA_PLANNING_ANNEE = {
  updated: "18/11/2026 à 20:50",
  annee: 2027,
  note_conflit: "14 jours avec chevauchement (dont 5 en février)",
  note_partiel: "Sept.–déc. : planning de la rentrée non publié",
  mois: [
    { label: "J", h: 87.5, conflits: 1 },
    { label: "F", h: 138.5, conflits: 5 },
    { label: "M", h: 105.5, conflits: 2 },
    { label: "A", h: 95.5, conflits: 1 },
    { label: "M", h: 98, conflits: 4 },
    { label: "J", h: 53, conflits: 1 },
    { label: "J", h: 12 },
    { label: "A", h: 0 },
    { label: "S", h: 7, partiel: true },
    { label: "O", h: 7, partiel: true },
    { label: "N", h: 14, partiel: true },
    { label: "D", h: 7, partiel: true }
  ]
};
/* ==== FIN DES DONNÉES ==== */
