/* ==== DONNÉES TABLEAU DE BORD (dérivées de SUIVI_PROFESSIONNEL.md, section 1) ====
   Aucun nom, établissement ni montant. null = donnée non disponible. */
window.DATA = {
  updated: "18/11/2026 à 16:48",
  status:   { a_traiter: 7, en_attente: 8, information: 6, termine: 9, sans_action: 1 },
  priority: { urgente: 1, elevee: 7, normale: 7 },
  sans_nouvelle_3j: 4,
  prochain_point_relance: "Ven. 20/11",
  relances_a_prevoir: 4,
  priorites_du_jour: [
    { label: "1 dossier de contrats à signer et renvoyer (jeudi)", level: "urgent" },
    { label: "3 fiches d'oral à relire et commenter (oral vendredi)", level: "high" },
    { label: "3 relances à valider et envoyer (brouillons prêts)", level: "high" },
    { label: "Plans de cours et progressions à régulariser (vendredi)", level: "high" },
    { label: "2 réponses à des demandes de copies ou d'évaluation", level: "norm" }
  ]
};
/* ==== FIN DES DONNÉES ==== */
