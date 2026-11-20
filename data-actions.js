/* ==== DONNÉES TABLEAU DE BORD (dérivées de SUIVI_PROFESSIONNEL.md, section 1) ====
   Aucun nom, établissement ni montant. null = donnée non disponible. */
window.DATA = {
  updated: "20/11/2026 à 01:27",
  status:   { a_traiter: 6, en_attente: 7, information: 6, termine: 9, sans_action: 4 },
  priority: { urgente: 1, elevee: 5, normale: 7 },
  sans_nouvelle_3j: 4,
  prochain_point_relance: "Ven. 20/11",
  relances_a_prevoir: 3,
  priorites_du_jour: [
    { label: "1 dossier de contrats à signer et renvoyer", level: "urgent" },
    { label: "Plans de cours et progressions à régulariser (vendredi)", level: "high" },
    { label: "Dossiers de production à collecter (vendredi)", level: "high" },
    { label: "1 relance à valider et envoyer (brouillon prêt)", level: "high" },
    { label: "3 réponses ou démarches à traiter", level: "norm" }
  ]
};
/* ==== FIN DES DONNÉES ==== */
