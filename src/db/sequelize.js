const { Sequelize, DataTypes } = require('sequelize')
const players = require('./mock-player');
const sessions = require('./mock-session');
const clubs = require('./mock-club');


const PlayerModel = require('../models/player');
const SessionModel = require('../models/session');
const ClubModel = require('../models/club');
const bcrypt = require('bcrypt')
  
const sequelize = new Sequelize(
    'fva', 
    'root',
    '',{
        host: 'localhost',
        dialect: 'mariadb'
    });

const Player = PlayerModel (sequelize, DataTypes)
const Session = SessionModel (sequelize, DataTypes)
const Club = ClubModel (sequelize, DataTypes)


Player.belongsToMany(Session, { through: 'Inscription' });
Session.belongsToMany(Player, { through: 'Inscription' });

Player.belongsToMany(Club, { through: 'Inscriptioninter' });
Club.belongsToMany(Player, { through: 'Inscriptioninter' });


 
const initDb = () => {
  return sequelize.sync()
    .then(() => { 
    })

.catch(error => console.log('Erreur'))
}
 
     sequelize.authenticate()
        .then(_ => console.log('la connexion à la base de données a bien été établie'))
        .catch(error => console.error(`impossible de se connecter à la base de données ${error}`))
  
module.exports = { 
  initDb, Player, Session, Club, sequelize
}