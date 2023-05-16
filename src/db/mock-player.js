const players = [
  {
    id: 1,
    firstName: "Jean",
    lastName: "Tourloupe",
    emailPlayer: "Jean_Tourloupe@gmail.com",
    password: "fva-1-Tourloupe",
    man: true,
    joueur_interclubs: "equipe_1",
    joueur_capitaine: "capitaine_eq_1",
    droits: "capitaine",
    jour_ouverture: "non",
    photos: "Jean_Tourloupe.jpg"
  },
  {
    id: 2,
    firstName: "Luc",
    lastName: "Harne",
    emailPlayer: "Luc_Harne@gmail.com",
    password: "fva-2-Harne",
    man: true,
    joueur_interclubs: "equipe_2",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Luc_Harne.jpg"
  },
  {
    id: 3,
    firstName: "Olivier",
    lastName: "Tnam",
    emailPlayer: "Olivier_Tnam@gmail.com",
    password: "fva-3-Tnam",
    man: true,
    joueur_interclubs: "loisir",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "lundi",
    photos: "Olivier_Tnam.jpg"
  },
  {
    id: 4,
    firstName: "Rémy",
    lastName: "Neur",
    emailPlayer: "Remy_Neur@gmail.com",
    password: "fva-4-Neur",
    man: true,
    joueur_interclubs: "equipe_2",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Remy_Neur.jpg"
  },
  {
    id: 5,
    firstName: "Mélusine",
    lastName: "Engraiv",
    emailPlayer: "Melusine_Engraiv@gmail.com",
    password: "fva-5-Engraiv",
    man: false,
    joueur_interclubs: "equipe_2",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Melusine_Engraiv.jpg"
  },
  {
    id: 6,
    firstName: "Al",
    lastName: "Anbiqué",
    emailPlayer: "Al_Anbique@gmail.com",
    password: "fva-6-Anbique",
    man: true,
    joueur_interclubs: "loisir",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Al_Anbique.jpg"
  },
  {
    id: 7,
    firstName: "Sam",
    lastName: "Soule",
    emailPlayer: "Sam_Soule@gmail.com",
    password: "fva-7-Soule",
    man: true,
    joueur_interclubs: "loisir",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "mardi",
    photos: "Sam_Soule.jpg"
  },
  {
    id: 8,
    firstName: "Tara",
    lastName: "Clure",
    emailPlayer: "Tara_Clure@gmail.com",
    password: "fva-8-Clure",
    man: false,
    joueur_interclubs: "equipe_1",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Tara_Clure.jpg"
  },
  {
    id: 9,
    firstName: "Gérard",
    lastName: "manvussa",
    emailPlayer: "Gerard_manvussa@gmail.com",
    password: "fva-9-manvussa",
    man: true,
    joueur_interclubs: "equipe_2",
    joueur_capitaine: "non",
    droits: "admin",
    jour_ouverture: "non",
    photos: "Gerard_manvussa.jpg"
  },
  {
    id: 10,
    firstName: "Sandra",
    lastName: "Nicouette",
    emailPlayer: "Sandra_Nicouette@gmail.com",
    password: "fva-10-Nicouette",
    man: false,
    joueur_interclubs: "loisir",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Sandra_Nicouette.jpg"
  },
  {
    id: 11,
    firstName: "Anne",
    lastName: "Abolisant",
    emailPlayer: "Anne_Abolisant@gmail.com",
    password: "fva-11-Abolisant",
    man: false,
    joueur_interclubs: "equipe_1",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Anne_Abolisant.jpg"
  },
  {
    id: 12,
    firstName: "Elsa",
    lastName: "Rose",
    emailPlayer: "Elsa_Rose@gmail.com",
    password: "fva-12-Rose",
    man: false,
    joueur_interclubs: "equipe_2",
    joueur_capitaine: "capitaine_eq_2",
    droits: "capitaine",
    jour_ouverture: "non",
    photos: "Elsa_Rose.jpg"
  },
  {
    id: 13,
    firstName: "Marc",
    lastName: "Assin",
    emailPlayer: "Marc_Assin@gmail.com",
    password: "fva-13-Assin",
    man: true,
    joueur_interclubs: "equipe_1",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Marc_Assin.jpg"
  },
  {
    id: 14,
    firstName: "Oscar",
    lastName: "Ibou",
    emailPlayer: "Oscar_Ibou@gmail.com",
    password: "fva-14-Ibou",
    man: true,
    joueur_interclubs: "loisir",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Oscar_Ibou.jpg"
  },
  {
    id: 15,
    firstName: "Abdel",
    lastName: "Icieux",
    emailPlayer: "Abdel_Icieux@gmail.com",
    password: "fva-15-Icieux",
    man: true,
    joueur_interclubs: "loisir",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "mercredi",
    photos: "Abdel_Icieux.jpg"
  },
  {
    id: 16,
    firstName: "Cécile",
    lastName: "Anssieux",
    emailPlayer: "Cecile_Anssieux@gmail.com",
    password: "fva-16-Anssieux",
    man: false,
    joueur_interclubs: "equipe_1",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Cecile_Anssieux.jpg"
  },
  {
    id: 17,
    firstName: "Anne",
    lastName: "Ogastric",
    emailPlayer: "Anne_Ogastric@gmail.com",
    password: "fva-17-Ogastric",
    man: false,
    joueur_interclubs: "equipe_2",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Anne_Ogastric.jpg"
  },
  {
    id: 18,
    firstName: "Franck",
    lastName: "Fort",
    emailPlayer: "Franck_Fort@gmail.com",
    password: "fva-18-Fort",
    man: true,
    joueur_interclubs: "equipe_1",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Franck_Fort.jpg"
  },
  {
    id: 19,
    firstName: "Mehdi",
    lastName: "Khaman",
    emailPlayer: "Mehdi_Khaman@gmail.com",
    password: "fva-19-Khaman",
    man: true,
    joueur_interclubs: "equipe_2",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Mehdi_Khaman.jpg"
  },
  {
    id: 20,
    firstName: "Marthe",
    lastName: "Ini",
    emailPlayer: "Marthe_Ini@gmail.com",
    password: "fva-20-Ini",
    man: false,
    joueur_interclubs: "loisir",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "jeudi",
    photos: "Marthe_Ini.jpg"
  },
  {
    id: 21,
    firstName: "Jenny",
    lastName: "Fraireniseur",
    emailPlayer: "Jenny_Fraireniseur@gmail.com",
    password: "fva-21-Fraireniseur",
    man: false,
    joueur_interclubs: "loisir",
    joueur_capitaine: "non",
    droits: "admin",
    jour_ouverture: "non",
    photos: "Jenny_Fraireniseur.jpg"
  },
  {
    id: 22,
    firstName: "Sarah",
    lastName: "Joute",
    emailPlayer: "Sarah_Joute@gmail.com",
    password: "fva-22-Joute",
    man: false,
    joueur_interclubs: "equipe_1",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Sarah_Joute.jpg"
  },
  {
    id: 23,
    firstName: "Sandy",
    lastName: "manché",
    emailPlayer: "Sandy_manche@gmail.com",
    password: "fva-23-manche",
    man: false,
    joueur_interclubs: "equipe_2",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Sandy_manche.jpg"
  },
  {
    id: 24,
    firstName: "Marty",
    lastName: "Nais",
    emailPlayer: "Marty_Nais@gmail.com",
    password: "fva-24-Nais",
    man: true,
    joueur_interclubs: "equipe_2",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Marty_Nais.jpg"
  },
  {
    id: 25,
    firstName: "Mouss",
    lastName: "Tache",
    emailPlayer: "Mouss_Tache@gmail.com",
    password: "fva-25-Tache",
    man: true,
    joueur_interclubs: "equipe_1",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Mouss_Tache.jpg"
  },
  {
    id: 26,
    firstName: "Callie",
    lastName: "Fornie",
    emailPlayer: "Callie_Fornie@gmail.com",
    password: "fva-26-Fornie",
    man: false,
    joueur_interclubs: "loisir",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "vendredi",
    photos: "Callie_Fornie.jpg"
  },
  {
    id: 27,
    firstName: "Jim",
    lastName: "Nastique",
    emailPlayer: "Jim_Nastique@gmail.com",
    password: "fva-27-Nastique",
    man: true,
    joueur_interclubs: "equipe_1",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Jim_Nastique.jpg"
  },
  {
    id: 28,
    firstName: "Laurent",
    lastName: "Bar",
    emailPlayer: "Laurent_Bar@gmail.com",
    password: "fva-28-Bar",
    man: true,
    joueur_interclubs: "equipe_2",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Laurent_Bar.jpg"
  },
  {
    id: 29,
    firstName: "Lara",
    lastName: "Clette",
    emailPlayer: "Lara_Clette@gmail.com",
    password: "fva-29-Clette",
    man: false,
    joueur_interclubs: "equipe_1",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Lara_Clette.jpg"
  },
  {
    id: 30,
    firstName: "Emma",
    lastName: "Yonaise",
    emailPlayer: "Emma_Yonaise@gmail.com",
    password: "fva-30-Yonaise",
    man: false,
    joueur_interclubs: "equipe_2",
    joueur_capitaine: "non",
    droits: "joueur",
    jour_ouverture: "non",
    photos: "Emma_Yonaise.jpg"
  }
]
module.exports = players