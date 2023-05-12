const express = require('express')
const morgan = require('morgan')
const favicon = require ('serve-favicon')
const bodyParser = require('body-parser')
const { Sequelize, DataTypes} = require('sequelize')
// const {success, getUniqueId} = require('./helper.js');
let players = require('./src/db/mock-player');
let sessions = require('./src/db/mock-session');
let clubs = require('./src/db/mock-club');
const PlayerModel = require('./src/models/player');
const SessionModel = require('./src/models/session');
const ClubModel = require('./src/models/club');




  
const app = express()
const port = 3000

const sequelize = new Sequelize(
    'fva-bdd', // choix fait pour la base de données
    'root',
    '',
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
const Club = ClubModel (sequelize, DataTypes)

//* On synchronise notre demande (méthode sync)
sequelize.sync({force: false})
    .then(_ => console.log('La base de données "fva-bdd" a bien été synchronisée'))

    clubs.map(club => {
        Club.create({
            equipe: club.equipe, 
            numeroMatch: club.numeroMatch,
            dateInter: club.dateInter,
            jourInter: club.jourInter,
            heureInter: club.heureInter,
            receptionInter: club.receptionInter,
            adversaireInter: club.adversaireInter,
            lieuInter: club.lieuInter,
            joueursDisposEq: club.joueursDisposEq,
            joueursNonDisposEq: club.joueursNonDisposEq,
            joueurSh1: club.joueurSh1,
            joueurSh2: club.joueurSh2,
            joueurSd: club.joueurSd,
            joueur1Dh: club.joueur1Dh,
            joueur2Dh: club.joueur2Dh,
            joueur1Dd: club.joueur1Dd,
            joueur2Dd: club.joueur2Dd,
            joueur1Dm1: club.joueur1Dm1,
            joueur2Dm1: club.joueur2Dm1,
            joueur1Dm2: club.joueur1Dm2,
            joueur2Dm2: club.joueur2Dm2,

       }).then(club => console.log(club.toJSON()))
     })
     console.log('La base de donnée club a bien été initialisée !')      

// // //* on ajoute les joueurs du mock-player

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

    
  

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

//! ici nous placerons nos futurs points de terminaisons    


// app.get('/', (req, res) => res.send('Hello, Express!'))

// // ? on retourne la liste de joueurs du mock

// app.get('/players', (req, res) => {
//     const message = "la liste des joueurs a bien été récupéré";
//     res.json(success(message, players))
// })

// //? on retourne le joueur en récupérant l'id dans les parmaètres

// app.get('/players/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const player = players.find(player => player.id === id)
//     const message = "un joueur a bien été trouvé"
//     res.json(success(message, player))
// })

// //? on ajoute un joueur  

// app.post('/players', (req, res) => {
//     const id = getUniqueId(players)
//     const playerCreated = {...{id: id, created: new Date()}, ...req.body}
//     players.push(playerCreated)
//     const message = `Le joueur ${playerCreated.firstName} a bien été crée.`
//     res.json(success(message, playerCreated))
//   })

// // ? On modifie un joueur

// app.put('/players/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const playerUpdated = {id: id, ...req.body}
//     players = players.map(player => {
//      return player.id === id ? playerUpdated : player
//     })
     
//     const message = `Le joueur ${playerUpdated.firstName} a bien été modifié.`
//     res.json(success(message, playerUpdated))
//    });

//    app.delete('/players/:id', (req, res) => {
//     const id = parseInt(req.params.id)
//     const playerDeleted = players.find(player => player.id === id)
//     players = players.filter(player => player.id !== id)
//     const message = `Le jouer ${playerDeleted.firstname} a bien été supprimé.`
//     res.json(success(message, playerDeleted))
//   });

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))

 
