/* ==== DONNÉES (seule partie à mettre à jour chaque jour) ====
   Chiffres agrégés uniquement. Aucun nom, établissement, montant ni lien.
   null = donnée non disponible. */
window.DATA = {
  updated: "16/11/2026 à 08:20",
  status: { a_traiter: 9, en_attente: 7, information: 5, termine: 3, sans_action: 1 },
  priority: { urgente: 1, elevee: 10, normale: 14 },
  relances_a_prevoir: 3,               // paiements échus à revoir
  priorites_du_jour: [
    { label: "1 contrat à envoyer avec ses pièces", level: "urgent" },
    { label: "4 fiches d'oral à relire et commenter", level: "high" },
    { label: "2 retours promis à des étudiants", level: "high" },
    { label: "1 planning d'oral à vérifier avant demain", level: "high" },
    { label: "1 réponse à une demande de copies", level: "norm" }
  ]
};
/* ==== FIN DES DONNÉES ==== */
