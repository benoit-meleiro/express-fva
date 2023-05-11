const { Sequelize, DataTypes } = require('sequelize')
const PlayerModel = require('../models/player')
const players = require('./mock-player')
// const CreneauModel = require('../models/creneau')
// const creneaus = require('../db/mock-creneau')
  
const sequelize = new Sequelize('fva-players-bdd', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})
  
const Player = PlayerModel(sequelize, DataTypes)
// const Creneau = CreneauModel(sequelize, DataTypes)
  
const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    players.map(player => {
      Player.create({
        firstName: player.firstName,
            lastName: player.lastName,
            emailPlayer: player.emailPlayer,
            password: player.password,
            man: player.man,
            joueur_interclubs: player.joueur_interclubs,
            joueur_capitaine: player.joueur_capitaine,
            droits: player.droits,
            jour_ouverture: player.jour_ouverture,
            photos: player.photos
      }).then(player => console.log(player.toJSON()))
    })
    console.log('La base de donnée a bien été initialisée !')
  })
}
//   const initDb2 = () => {
//   return sequelize.sync({force: true}).then(_ => {
//     creneaus.map(creneau => {
//       Creneau.create({
//             date_creneau: creneau.date_creneau,
//             jour_creneau: creneau.jour_creneau,
//             disponibilite_creneau: creneau.disponibilite_creneau,
//             nom_responsable_ouverture: creneau.nom_responsable_ouverture,
//             matchs_interclubs: creneau.matchs_interclubs,
//             nbre_inscrits: creneau.nbre_inscrits,
//             joueurs_présents: creneau.joueurs_présents
            
//       }).then(creneau => console.log(creneau.toJSON()))
//     })
//     console.log('La base de donnée a bien été initialisée !')
//   })
//   }

  
module.exports = { 
  initDb, Player
}