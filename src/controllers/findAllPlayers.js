const { Player } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/players', (req, res) => {
    Player.findAll()
      .then(players => {
        const message = 'La liste des joueurs a bien été récupérée.'
        res.json({ message, data: players })
      })
  })
}