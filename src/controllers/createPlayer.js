const { Player } = require('../db/sequelize')
  
module.exports = (app) => {
  app.post('/api/players', (req, res) => {
    Player.create(req.body)
      .then(player => {
        const message = `Le joueur ${req.body.firstName} ${req.body.lastName} a bien été crée.`
        res.json({ message, data: player })
      })
  })
}