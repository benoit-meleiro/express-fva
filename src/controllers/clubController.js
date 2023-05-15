const { Club } = require('../db/sequelize')
  
exports.findAllClubs =  (req, res) => {
    Club.findAll()
      .then(clubs => {
        const message = 'La liste des joueurs a bien été récupérée.'
        res.json({ message, data: clubs })
      })
  }

  exports.findClubByPk = (req, res) => {
      Club.findByPk(req.params.id)
        .then(club => {
          const message = `L'interclub a bien été trouvé.`
          res.json({ message, data: club })
        })
    }

    exports.createClub = (req, res) => {
          Club.create(req.body)
            .then(club => {
              const message = `L'interclub' ${req.body.jourInter} ${req.body.dateInter} a bien été crée.`
              res.json({ message, data: club })
            })
        }

    exports.updateClub = (req, res) => {
            const id = req.params.id
            Club.update(req.body, {
            where: { id: id }
            })
            .then(() => {
            Club.findByPk(id).then(club => {
                const message = `L'interclub ${club.jourInter} ${club.dateInter} a bien été modifié.`
                res.json({message, data: club })
            })
            })
        }

     exports.deleteclub = (req, res) => {
              Club.findByPk(req.params.id).then(club => {
                const clubDeleted = club;
                Club.destroy({
                  where: { id: req.params.id }
                })
                .then(() => {
                  const message = `L'interclub ${club.jourInter} ${club.dateInter} a bien été supprimé.`
                  res.json({message, data: clubDeleted })
                })
              })
            }
          