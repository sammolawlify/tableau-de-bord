/* ==== DONNÉES PLANNING (dérivées de la section 2 de SUIVI_PROFESSIONNEL.md) ====
   Aucun nom, établissement, lieu ni montant. null = donnée non disponible. */
window.DATA_PLANNING = {
  updated: "16/11/2026 à 08:20",
  aujourdhui_h: 7,
  semaine: [                           // heures d'intervention par jour (lun. à ven.)
    { jour: "Lun", h: 7 },
    { jour: "Mar", h: 2.5 },
    { jour: "Mer", h: 7 },
    { jour: "Jeu", h: 7 },
    { jour: "Ven", h: 9 }
  ],
  capacite_mois: null,                 // tâche 6 (1er du mois) pas encore exécutée
  echeances: [
    { quand: "Mar. 17/11", quoi: "Oraux d'examen (11h–13h30)" },
    { quand: "Mer. 18/11", quoi: "Remise de dossiers · point sur un paiement échu" },
    { quand: "Jeu. 19/11", quoi: "2 séances, enchaînement serré à 13h" },
    { quand: "Ven. 20/11", quoi: "Épreuve le matin · oraux jusqu'à 19h" },
    { quand: "Lun. 23/11", quoi: "Séance du matin" }
  ]
};
/* ==== FIN DES DONNÉES ==== */
