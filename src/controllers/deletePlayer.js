const { Player } = require('../db/sequelize')
  
module.exports = (app) => {
  app.delete('/api/players/:id', (req, res) => {
    Player.findByPk(req.params.id).then(player => {
      const playerDeleted = player;
      Player.destroy({
        where: { id: req.params.id }
      })
      .then(() => {
        const message = `Le joueur ${player.firstName} ${player.lastName} a bien été supprimé.`
        res.json({message, data: playerDeleted })
      })
    })
  })
}
