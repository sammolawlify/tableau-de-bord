/* ==== DONNÉES PLANNING (dérivées de la section 2 de SUIVI_PROFESSIONNEL.md) ====
   Aucun nom, établissement, lieu ni montant. null = donnée non disponible. */
window.DATA_PLANNING = {
  updated: "20/11/2026 à 01:27",
  semaine: [                           // heures d'intervention par jour (lun. à ven.)
    { jour: "Lun", h: 7 },
    { jour: "Mar", h: 2.5 },
    { jour: "Mer", h: 7 },
    { jour: "Jeu", h: 7 },
    { jour: "Ven", h: 9 }
  ],
  suivante: {                         // semaine suivante (lundi à vendredi), même calcul
    debut: "2026-11-23",
    semaine: [
      { jour: "Lun", h: 3.5 },
      { jour: "Mar", h: 0 },
      { jour: "Mer", h: 7 },
      { jour: "Jeu", h: 7 },
      { jour: "Ven", h: 4 }
    ]
  }
};
/* ==== FIN DES DONNÉES ==== */
