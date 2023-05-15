const { Player } = require('../db/sequelize')
  
module.exports = (app) => {
  app.get('/api/players/:id', (req, res) => {
    Player.findByPk(req.params.id)
      .then(player => {
        const message = 'Le joueur a bien été trouvé.'
        res.json({ message, data: player })
      })
  })
}