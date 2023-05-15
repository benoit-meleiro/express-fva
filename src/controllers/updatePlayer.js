const { Player } = require('../db/sequelize')
  
module.exports = (app) => {
  app.put('/api/players/:id', (req, res) => {
    const id = req.params.id
    Player.update(req.body, {
      where: { id: id }
    })
    .then(() => {
      Player.findByPk(id).then(player => {
        const message = `Le pokémon ${player.firstName} ${player.lastName} a bien été modifié.`
        res.json({message, data: player })
      })
    })
  })
}