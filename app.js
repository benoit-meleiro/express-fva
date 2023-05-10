const express = require('express')
const morgan = require('morgan')
const favicon = require ('serve-favicon')
const bodyParser = require('body-parser')
const { Sequelize } = require('sequelize')
const {success, getUniqueId} = require('./helper.js');
let players = require('./mock-player');
  
const app = express()
const port = 3000

const sequelize = new Sequelize(
    'fva-players-bdd', // choix fait pour la base de données
    'root',
    '',
    {host: 'localhost',
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
    .catch(error => console.error(`impossible de se cdonnecter à la base de données ${error}`))

app
    .use(favicon(__dirname + '/favicon.ico'))
    .use(morgan('dev'))
    .use(bodyParser.json())

  
app.get('/', (req, res) => res.send('Hello, Express!'))

// ? on retourne la liste de joueurs du mock

app.get('/players', (req, res) => {
    const message = "la liste des joueurs a bien été récupéré";
    res.json(success(message, players))
})

//? on retourne le joueur en récupérant l'id dans les parmaètres

app.get('/players/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const player = players.find(player => player.id === id)
    const message = "un joueur a bien été trouvé"
    res.json(success(message, player))
})

//? on ajoute un joueur  

app.post('/players', (req, res) => {
    const id = getUniqueId(players)
    const playerCreated = {...{id: id, created: new Date()}, ...req.body}
    players.push(playerCreated)
    const message = `Le joueur ${playerCreated.firstName} a bien été crée.`
    res.json(success(message, playerCreated))
  })

// ? On modifie un joueur

app.put('/players/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const playerUpdated = {id: id, ...req.body}
    players = players.map(player => {
     return player.id === id ? playerUpdated : player
    })
     
    const message = `Le joueur ${playerUpdated.firstName} a bien été modifié.`
    res.json(success(message, playerUpdated))
   });

   app.delete('/players/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const playerDeleted = players.find(player => player.id === id)
    players = players.filter(player => player.id !== id)
    const message = `Le jouer ${playerDeleted.firstname} a bien été supprimé.`
    res.json(success(message, playerDeleted))
  });

app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))

 
