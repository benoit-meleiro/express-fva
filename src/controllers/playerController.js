const { Player } = require('../db/sequelize')
  
exports.findAllPlayers =  (req, res) => {
    Player.findAll()
      .then(players => {
        const message = 'La liste des joueurs a bien été récupérée.'
        res.json({ message, data: players })
      })
  }

  exports.findPlayerByPk = (req, res) => {
      Player.findByPk(req.params.id)
        .then(player => {
          const message = 'Le joueur a bien été trouvé.'
          res.json({ message, data: player })
        })
    }

    exports.createPlayer = (req, res) => {
          Player.create(req.body)
            .then(player => {
              const message = `Le joueur ${req.body.firstName} ${req.body.lastName} a bien été crée.`
              res.json({ message, data: player })
            })
        }

    exports.updatePlayer = (req, res) => {
            const id = req.params.id
            Player.update(req.body, {
            where: { id: id }
            })
            .then(() => {
            Player.findByPk(id).then(player => {
                const message = `Le joueur ${player.firstName} ${player.lastName} a bien été modifié.`
                res.json({message, data: player })
            })
            })
        }

     exports.deletePlayer = (req, res) => {
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
            }
          