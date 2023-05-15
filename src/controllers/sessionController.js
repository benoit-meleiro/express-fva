const { Session } = require('../db/sequelize')
  
exports.findAllSessions =  (req, res) => {
    Session.findAll()
      .then(sessions => {
        const message = 'La liste des sessions a bien été récupérée.'
        res.json({ message, data: sessions })
      })
  }

  exports.findSessionByPk = (req, res) => {
      Session.findByPk(req.params.id)
        .then(session => {
          const message = 'La session a bien été trouvé.'
          res.json({ message, data: session })
        })
    }

    exports.createSession = (req, res) => {
          Session.create(req.body)
            .then(session => {
              const message = `La session du ${req.body.jourSession} ${req.body.dateSession} a bien été crée.`
              res.json({ message, data: session })
            })
        }

    exports.updateSession = (req, res) => {
            const id = req.params.id
            Session.update(req.body, {
            where: { id: id }
            })
            .then(() => {
            Session.findByPk(id).then(session => {
                const message = `La session du  ${session.jourSession} ${session.dateSession} a bien été modifié.`
                res.json({message, data: session })
            })
            })
        }

     exports.deleteSession = (req, res) => {
              Session.findByPk(req.params.id).then(session => {
                const sessionDeleted = session;
                Session.destroy({
                  where: { id: req.params.id }
                })
                .then(() => {
                  const message = `La session du ${session.jourSession} ${session.dateSession} a bien été supprimée.`
                  res.json({message, data: sessionDeleted })
                })
              })
            }
          