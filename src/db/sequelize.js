const { Sequelize, DataTypes} = require('sequelize')
const players = require('./mock-player');
const sessions = require('./mock-session');
// const clubs = require('./mock-club');
const PlayerModel = require('../models/player');
const SessionModel = require('../models/session');
// const ClubModel = require('../models/club');
  
const sequelize = new Sequelize('fva-bdd', 'root', '',
    {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
    timezone:'Etc/GMT-2'
    },
    logging: false
}
)

 // ? on va vérifier si la connexion s'est bien faite
 sequelize.authenticate()
    .then(_ => console.log('la connexion à la base de données a bien été établie'))
    .catch(error => console.error(`impossible de se connecter à la base de données ${error}`))
  
// //* on instancie notre modèle
const Player = PlayerModel (sequelize, DataTypes)
const Session = SessionModel (sequelize, DataTypes)
// const Club = ClubModel (sequelize, DataTypes)
  
const initDb = () => {
    sequelize.sync({ force: true })
    .then(_ => console.log('La base de données "fva-bdd" a bien été synchronisée'))
    
//* on ajoute les joueurs du mock-club
    // clubs.map(club => {
    //     Club.create({
    //         equipe: club.equipe, 
    //         numeroMatch: club.numeroMatch,
    //         dateInter: club.dateInter,
    //         jourInter: club.jourInter,
    //         heureInter: club.heureInter,
    //         receptionInter: club.receptionInter,
    //         adversaireInter: club.adversaireInter,
    //         lieuInter: club.lieuInter,
    //         joueursDisposEq: club.joueursDisposEq,
    //         joueursNonDisposEq: club.joueursNonDisposEq,
    //         joueurSh1: club.joueurSh1,
    //         joueurSh2: club.joueurSh2,
    //         joueurSd: club.joueurSd,
    //         joueur1Dh: club.joueur1Dh,
    //         joueur2Dh: club.joueur2Dh,
    //         joueur1Dd: club.joueur1Dd,
    //         joueur2Dd: club.joueur2Dd,
    //         joueur1Dm1: club.joueur1Dm1,
    //         joueur2Dm1: club.joueur2Dm1,
    //         joueur1Dm2: club.joueur1Dm2,
    //         joueur2Dm2: club.joueur2Dm2,

    //    }).then(club => console.log(club.toJSON()))
    //  })
    //  console.log('La base de donnée club a bien été initialisée !')      

//* on ajoute les joueurs du mock-player

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
      console.log('La base de donnée players a bien été initialisée !')

 //* on ajoute les sessions du mock-player   
    sessions.map(session => {
      Session.create({
            dateSession: session.dateSession,
            jourSession: session.jourSession,
            disponibiliteSession: session.disponibiliteSession,
            nomResponsableOuverture: session.nomResponsableOuverture,
            matchsInterclubs: session.matchsInterclubs,
            nbreInscrits: session.nbreInscrits,
            joueursPresents: session.joueursPresents
            
      }).then(session => console.log(session.toJSON()))
    })
    console.log('La base de donnée session a bien été initialisée !')
}

// ? on va vérifier si la connexion s'est bien faite
sequelize.authenticate()
.then(_ => console.log('la connexion à la base de données a bien été établie'))
.catch(error => console.error(`impossible de se connecter à la base de données ${error}`))
  
module.exports = { 
  sequelize, initDb, Player, Session
}