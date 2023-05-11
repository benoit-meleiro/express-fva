const express = require('express')
const morgan = require('morgan')
const favicon = require ('serve-favicon')
const bodyParser = require('body-parser')
const { Sequelize, DataTypes} = require('sequelize')
// const {success, getUniqueId} = require('./helper.js');
// let players = require('./src/db/mock-player');
const PlayerModel = require('./src/models/player')
// let sessions = require('./src/db/mock-session');
const SessionModel = require('./src/models/session')
// let interclubs = require('./src/db/mock-interclub');
const InterclubModel = require('./src/models/interclub')


  
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
const Interclub = InterclubModel (sequelize, DataTypes)

//* On synchronise notre demande (méthode sync)
sequelize.sync({force: true})
    .then(_ => console.log('La base de données "fva-bdd" a bien été synchronisée'))

//* on ajoute les joueurs du mock-player

    //   players.map(player => {
    //     Player.create({
    //         firstName: player.firstName,
    //         lastName: player.lastName,
    //         emailPlayer: player.emailPlayer,
    //         password: player.password,
    //         man: player.man,
    //         joueur_interclubs: player.joueur_interclubs,
    //         joueur_capitaine: player.joueur_capitaine,
    //         droits: player.droits,
    //         jour_ouverture: player.jour_ouverture,
    //         photos: player.photos
    //     }).then(player => console.log(player.toJSON()))
    //   })
    //   console.log('La base de donnée players a bien été initialisée !')
// //  //* on ajoute les sessions du mock-player   
//     sessions.map(session => {
//       Session.create({
//             date_session: session.date_session,
//             jour_session: session.jour_session,
//             disponibilite_session: session.disponibilite_session,
//             nom_responsable_ouverture: session.nom_responsable_ouverture,
//             matchs_interclubs: session.matchs_interclubs,
//             nbre_inscrits: session.nbre_inscrits,
//             joueurs_présents: session.joueurs_présents.join()
            
//       }).then(session => console.log(session.toJSON()))
//     })
//     console.log('La base de donnée session a bien été initialisée !')  
//     interclubs.map(interclub => {
//         Interclub.create({
//             equipe_inter: interclub.equipe_inter,
//             numero_match: interclub.numero_match,
//             date_inter: interclub.date_inter,
//             jour_inter: interclub.jour_inter,
//             heure_inter: interclub.heure_inter,
//             reception_inter: interclub.reception_inter,
//             adversaire_inter: interclub.adversaire_inter,
//             lieu_inter: interclub.lieu_inter,
//             joueurs_dispos_eq: interclub.joueurs_dispos_eq.join(),
//             joueur_sh_1: interclub.joueur_sh_1.join(),
//             joueur_sh_2: interclub.joueur_sh_2.join(),
//             joueur_sd: interclub.joueur_sd.join(),
//             joueur_1_dh: interclub.joueur_1_dh.join(),
//             joueur_2_dh: interclub.joueur_2_dh.join(),
//             joueur_1_dd: interclub.joueur_1_dd.join(),
//             joueur_2_dd: interclub.joueur_2_dd.join(),
//             joueur_1_dm_1: interclub.joueur_1_dm_1.join(),
//             joueur_2_dm_1: interclub.joueur_2_dm_1.join(),
//             joueur_1_dm_2: interclub.joueur_1_dm_1.join(),
//             joueur_2_dm_2: interclub.joueur_2_dm_1.join()

//         }).then(session => console.log(session.toJSON()))
//       })
//       console.log('La base de donnée session a bien été initialisée !')  
  

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

 
