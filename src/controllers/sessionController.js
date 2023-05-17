const { Session } = require('../db/sequelize')
  
exports.findAllSessions =  (req, res) => {
    Session.findAll()
      .then(sessions => {
        const message = 'La liste des sessions a bien été récupérée.'
        res.json({ message, data: sessions })
      })
      .catch(error => {
        const message = "la liste des joueurs n'a pu être récupérée. Merci de réessayer dans quelques instants !"
        res.status(500).json({message, data:error})
      })
  }

  exports.findSessionByPk = (req, res) => {
      Session.findByPk(req.params.id)
      .then(session => {
        if(session=== null){
          const message =`la session demandée n'existe pas. Merci d'essayer avec un autre identifiant`
          res.status(404).json({message})
        }else{
          
            const message = 'La session a bien été trouvée.'
            res.json({ message, data: session })
          
        }
      })
        
        .catch(error => {
          const message = `la session n'a pu être récupérée. Merci de réessayer dans quelques instants !`
          res.status(500).json({message, data:error})
        })
    }

    exports.createSession = (req, res) => {
          Session.create(req.body)
            .then(session => {
              const message = `La session du ${req.body.jourSession} ${req.body.dateSession} a bien été crée.`
              res.json({ message, data: session })
            })
            .catch(error => {
              const message = `la session n'a pu être ajoutée. Merci de réessayer dans quelques instants !`
              res.status(500).json({message, data:error})
            })
        }

    exports.updateSession = (req, res) => {
            const id = req.params.id
            Session.update(req.body, {
            where: { id: id }
            })
            .then(() => {
            return Session.findByPk(id).then(session => {
              if(session=== null){
                const message =`la session demandée n'existe pas. Merci d'essayer avec un autre identifiant`
                res.status(404).json({message})
              }
                const message = `La session du  ${session.jourSession} ${session.dateSession} a bien été modifié.`
                res.json({message, data: session })
            })
            })
            .catch(error => {
              const message = `la session n'a pu être modifiée. Merci de réessayer dans quelques instants !`
              res.status(500).json({message, data:error})
            })
        }

     exports.deleteSession = (req, res) => {
              Session.findByPk(req.params.id).then(session => {
                if(session=== null){
                  const message =`la session demandée n'existe pas. Merci d'essayer avec un autre identifiant`
                  res.status(404).json({message})
                }
                const sessionDeleted = session;
                return Session.destroy({
                  where: { id: req.params.id }
                })
                .then(() => {
                  const message = `La session du ${session.jourSession} ${session.dateSession} a bien été supprimée.`
                  res.json({message, data: sessionDeleted })
                })
              })
              .catch(error => {
                const message = `la session n'a pu être supprimée. Merci de réessayer dans quelques instants !`
                res.status(500).json({message, data:error})
              })
            }
          