/* Agenda du jour et du lendemain. Aucun nom, établissement, lieu ni élève : heure, type et formation uniquement.
   date = AAAA-MM-JJ. Les créneaux contigus d'un même cours sont regroupés. */
window.DATA_AGENDA = {
  updated: "19/11/2026",
  jours: [
    { date: "2026-11-19", events: [
      { debut: "09:30", fin: "13:00", label: "Cours · digitalisation · BTS NDRC 2" },
      { debut: "13:30", fin: "17:00", label: "Cours · BTS" }
    ]},
    { date: "2026-11-20", events: [
      { debut: "09:00", fin: "13:00", label: "Cours · E5 digitalisation · NDRC 1" },
      { debut: "14:00", fin: "19:00", label: "Oraux E6 · NDRC 2" }
    ]}
  ]
};
