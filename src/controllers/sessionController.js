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

 //* Présence des joueurs aux sessions           

            // const { Player} = require('../models/player'); // Importez les modèles Player et Session
            const { Player } = require('../db/sequelize')

            exports.getPlayersBySessionId = (req, res) => {
              const sessionId = req.params.id;
            
              Session.findByPk(sessionId, {
                include: [{ model: Player }]
              })
                .then(session => {
                  if (!session) {
                    const message = "La session demandée n'existe pas.";
                    res.status(404).json({ message });
                  } else {
                    const players = session.Players.map(player => {
                      return {
                        id: player.id,
                        firstName: player.firstName,
                        photos: player.photos
                      };
                    });
            
                    const message = "Liste des joueurs inscrits à la session récupérée avec succès.";
                    res.json({ message, data: players });
                  }
                })
                .catch(error => {
                  const message = "Une erreur s'est produite lors de la récupération des joueurs inscrits à la session.";
                  res.status(500).json({ message, error });
                });
            };
//  // * AJOUTER UN JOUEUR A LA SESSION
// const jwt = require('jsonwebtoken');
// const { Player, Session } = require('../db/sequelize');

// exports.addPlayerToSession = (req, res) => {
//   const token = req.headers.authorization; // Récupérer le token JWT depuis l'en-tête de la requête
//   const playerId = jwt.verify(token, 'votre_clé_secrète').id; // Vérifier et décoder le token JWT pour obtenir l'ID du joueur

//   const sessionId = req.params.sessionId;

//   Promise.all([
//     Session.findByPk(sessionId),
//     Player.findByPk(playerId)
//   ])
//     .then(([session, player]) => {
//       if (!session) {
//         const message = "La session demandée n'existe pas.";
//         res.status(404).json({ message });
//       } else if (!player) {
//         const message = "Le joueur demandé n'existe pas.";
//         res.status(404).json({ message });
//       } else {
//         session.addPlayer(player);
//         const message = "Le joueur a été ajouté à la session avec succès.";
//         res.json({ message });
//       }
//     })
//     .catch(error => {
//       const message = "Une erreur s'est produite lors de l'ajout du joueur à la session.";
//       res.status(500).json({ message, error });
//     });
// };
// // * SUPPRIMER UN JOUEUR DE LA SESSION
// exports.removePlayerFromSession = (req, res) => {
//   const sessionId = req.params.sessionId;
//   const playerId = req.params.playerId;

//   Promise.all([
//     Session.findByPk(sessionId),
//     Player.findByPk(playerId)
//   ])
//     .then(([session, player]) => {
//       if (!session) {
//         const message = "La session demandée n'existe pas.";
//         res.status(404).json({ message });
//       } else if (!player) {
//         const message = "Le joueur demandé n'existe pas.";
//         res.status(404).json({ message });
//       } else {
//         session.removePlayer(player);
//         const message = "Le joueur a été supprimé de la session avec succès.";
//         res.json({ message });
//       }
//     })
//     .catch(error => {
//       const message = "Une erreur s'est produite lors de la suppression du joueur de la session.";
//       res.status(500).json({ message, error });
//     });
// };