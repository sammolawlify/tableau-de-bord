/* ==== DONNÉES TABLEAU DE BORD (dérivées de SUIVI_PROFESSIONNEL.md, section 1) ====
   Aucun nom, établissement ni montant. null = donnée non disponible. */
window.DATA = {
  updated: "18/11/2026 à 12:08",
  status:   { a_traiter: 6, en_attente: 8, information: 6, termine: 8, sans_action: 2 },
  priority: { urgente: 1, elevee: 7, normale: 6 },
  sans_nouvelle_3j: 5,
  prochain_point_relance: "Mer. 18/11",
  relances_a_prevoir: 4,
  priorites_du_jour: [
    { label: "1 dossier de contrats à signer et renvoyer (jeudi)", level: "urgent" },
    { label: "3 fiches d'oral à relire et commenter (aujourd'hui)", level: "high" },
    { label: "3 relances prêtes à valider et envoyer", level: "high" },
    { label: "Plans de cours et progressions à régulariser (vendredi)", level: "high" },
    { label: "1 réponse à une demande de copies (priorité faible)", level: "norm" }
  ]
};
/* ==== FIN DES DONNÉES ==== */
