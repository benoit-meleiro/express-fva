const clubs = [
  {
    id: 1,
    equipe: 1,
    numeroMatch: 1,
    dateInter: '2023-05-15',
    jourInter: "mercredi",
    heureInter: "20h30",
    receptionInter: true,
    adversaireInter: "Blagnac",
    lieuInter: "aussonne",
    joueursDisposEq: "francis",
    joueursNonDisposEq: "sarah",
    joueurSh1: "pierre",
    joueurSh2: "jacques",
    joueurSd: "joss",
    joueur1Dh: "ben",
    joueur2Dh: "laurent",
    joueur1Dd: "Céline",
    joueur2Dd: "Hélène",
    joueur1Dm1: "ben",
    joueur2Dm1: "Céline",
    joueur1Dm2: "Damien",
    joueur2Dm2: "Amélie"
  }
  ,
  {
    id: 2,
    equipe: 1,
    numeroMatch: 2,
    dateInter: '2023-05-23',
    jourInter: "mardi",
    heureInter: "19h45",
    receptionInter: false,
    adversaireInter: "toec",
    lieuInter: "toulouse",
    joueursDisposEq: "francis",
    joueursNonDisposEq: "sarah",
    joueurSh1: "pierre",
    joueurSh2: "jacques",
    joueurSd: "joss",
    joueur1Dh: "ben",
    joueur2Dh: "laurent",
    joueur1Dd: "Céline",
    joueur2Dd: "Hélène",
    joueur1Dm1: "ben",
    joueur2Dm1: "Céline",
    joueur1Dm2: "Damien",
    joueur2Dm2: "Amélie"
  },
  {
    id: 3,
    equipe: 1,
    numeroMatch: 3,
    dateInter: '2023-05-31',
    jourInter: "mercredi",
    heureInter: "20h30",
    receptionInter: true,
    adversaireInter: "Cornebarrieu",
    lieuInter: "aussonne",
    joueursDisposEq: "francis",
    joueursNonDisposEq: "sarah",
    joueurSh1: "pierre",
    joueurSh2: "jacques",
    joueurSd: "joss",
    joueur1Dh: "ben",
    joueur2Dh: "laurent",
    joueur1Dd: "Céline",
    joueur2Dd: "Hélène",
    joueur1Dm1: "ben",
    joueur2Dm1: "Céline",
    joueur1Dm2: "Damien",
    joueur2Dm2: "Amélie"
  },
  {
    id: 4,
    equipe: 1,
    numeroMatch: 4,
    dateInter: '2023-06-08',
    jourInter: "jeudi",
    heureInter: "21h00",
    receptionInter: false,
    adversaireInter: "colomiers",
    lieuInter: "colomiers",
    joueursDisposEq: "francis",
    joueursNonDisposEq: "sarah",
    joueurSh1: "pierre",
    joueurSh2: "jacques",
    joueurSd: "joss",
    joueur1Dh: "ben",
    joueur2Dh: "laurent",
    joueur1Dd: "Céline",
    joueur2Dd: "Hélène",
    joueur1Dm1: "ben",
    joueur2Dm1: "Céline",
    joueur1Dm2: "Damien",
    joueur2Dm2: "Amélie"
  },
  {
    id: 5,
    equipe: 2,
    numeroMatch: 1,
    dateInter: '2023-06-19',
    jourInter: "vendredi",
    heureInter: "18h30",
    receptionInter: false,
    adversaireInter: "gagnac",
    lieuInter: "gagnac",
    joueursDisposEq: "francis",
    joueursNonDisposEq: "sarah",
    joueurSh1: "pierre",
    joueurSh2: "jacques",
    joueurSd: "joss",
    joueur1Dh: "ben",
    joueur2Dh: "laurent",
    joueur1Dd: "Céline",
    joueur2Dd: "Hélène",
    joueur1Dm1: "ben",
    joueur2Dm1: "Céline",
    joueur1Dm2: "Damien",
    joueur2Dm2: "Amélie"
  },
  {
    id: 6,
    equipe: 2,
    numeroMatch: 2,
    dateInter: '2023-05-24',
    jourInter: "mercredi",
    heureInter: "20h30",
    receptionInter: true,
    adversaireInter: "beauzelle",
    lieuInter: "aussonne",
    joueursDisposEq: "francis",
    joueursNonDisposEq: "sarah",
    joueurSh1: "pierre",
    joueurSh2: "jacques",
    joueurSd: "joss",
    joueur1Dh: "ben",
    joueur2Dh: "laurent",
    joueur1Dd: "Céline",
    joueur2Dd: "Hélène",
    joueur1Dm1: "ben",
    joueur2Dm1: "Céline",
    joueur1Dm2: "Damien",
    joueur2Dm2: "Amélie"
  },
  {
    id: 7,
    equipe: 2,
    numeroMatch: 3,
    dateInter: '2023-05-30',
    jourInter: "mardi",
    heureInter: "20h30",
    receptionInter: false,
    adversaireInter: "blagnac-2",
    lieuInter: "blagnac",
    joueursDisposEq: "francis",
    joueursNonDisposEq: "sarah",
    joueurSh1: "pierre",
    joueurSh2: "jacques",
    joueurSd: "joss",
    joueur1Dh: "ben",
    joueur2Dh: "laurent",
    joueur1Dd: "Céline",
    joueur2Dd: "Hélène",
    joueur1Dm1: "ben",
    joueur2Dm1: "Céline",
    joueur1Dm2: "Damien",
    joueur2Dm2: "Amélie"
  },
  {
    id: 8,
    equipe: 2,
    numeroMatch: 4,
    dateInter: '2023-06-07',
    jourInter: "mercredi",
    heureInter: "20h30",
    receptionInter: true,
    adversaireInter: "toulouse-fc",
    lieuInter: "aussonne",
    joueursDisposEq: "francis",
    joueursNonDisposEq: "sarah",
    joueurSh1: "pierre",
    joueurSh2: "jacques",
    joueurSd: "joss",
    joueur1Dh: "ben",
    joueur2Dh: "laurent",
    joueur1Dd: "Céline",
    joueur2Dd: "Hélène",
    joueur1Dm1: "ben",
    joueur2Dm1: "Céline",
    joueur1Dm2: "Damien",
    joueur2Dm2: "Amélie"
  }
]
module.exports = clubs