const { Club } = require('../db/sequelize')
const { ValidationError } = require('sequelize')
  
exports.findAllClubs =  (req, res) => {
    Club.findAll()
      .then(clubs => {
        const message = 'La liste des joueurs a bien été récupérée.'
        res.json({ message, data: clubs })
      })
      .catch(error => {
        const message = "la liste des interclubs n'a pu être récupérée. Merci de réessayer dans quelques instants !"
        res.status(500).json({message, data:error})
      })
  }

  exports.findClubByPk = (req, res) => {
      Club.findByPk(req.params.id)
      .then(club => {
        if(club=== null){
          const message =`l'interclub demandé n'existe pas. Merci d'essayer avec un autre identifiant`
          res.status(404).json({message})
        }else{
          
            const message = `L'interclub a bien été trouvé.`
            res.json({ message, data: club })
          
        }
      })
        
        .catch(error => {
          const message = `l'interclub n'a pu être récupéré. Merci de réessayer dans quelques instants !`
          res.status(500).json({message, data:error})
        })
    }

    exports.createClub = (req, res) => {
          Club.create(req.body)
            .then(club => {
              const message = `L'interclub' ${req.body.jourInter} ${req.body.dateInter} a bien été crée.`
              res.json({ message, data: club })
            })
            .catch(error => {
              if(error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error });
              }

              const message = `l'interclub n'a pu être ajouté. Merci de réessayer dans quelques instants !`
              res.status(500).json({message, data:error})
            })
        }

    exports.updateClub = (req, res) => {
            const id = req.params.id
            Club.update(req.body, {
            where: { id: id }
            })
            .then(() => {
            return Club.findByPk(id).then(club => {
              if(club=== null){
                const message =`l'interclub demandé n'existe pas. Merci d'essayer avec un autre identifiant`
                res.status(404).json({message})
              }
                const message = `L'interclub ${club.jourInter} ${club.dateInter} a bien été modifié.`
                res.json({message, data: club })
            })
            })
          .catch(error => {
            if(error instanceof ValidationError) {
              return res.status(400).json({ message: error.message, data: error });
            }
            const message = `l'interclub n'a pu être ajouté. Merci de réessayer dans quelques instants !`
            res.status(500).json({message, data:error})
          })
        }

     exports.deleteclub = (req, res) => {
              Club.findByPk(req.params.id).then(club => {
                if(club=== null){
                  const message =`l'interclub demandé n'existe pas. Merci d'essayer avec un autre identifiant`
                  res.status(404).json({message})
                }
                const clubDeleted = club;
                return Club.destroy({
                  where: { id: req.params.id }
                })
                .then(() => {
                  const message = `L'interclub ${club.jourInter} ${club.dateInter} a bien été supprimé.`
                  res.json({message, data: clubDeleted })
                })
              })
              .catch(error => {
                const message = `l'interclub n'a pu être supprimé. Merci de réessayer dans quelques instants !`
                res.status(500).json({message, data:error})
              })
            }
          
             //* Présence des joueurs aux interclubs          

            // const { Player} = require('../models/player'); // Importez les modèles Player et Session
            const { Player } = require('../db/sequelize')

            exports.getPlayersByClubId = (req, res) => {
              const clubId = req.params.id;
            
              Club.findByPk(clubId, {
                include: [{ model: Player }]
              })
                .then(club => {
                  if (!club) {
                    const message = "L'interclub' demandé n'existe pas.";
                    res.status(404).json({ message });
                  } else {
                    const players = club.Players.map(player => {
                      return {
                        id: player.id,
                        firstName: player.firstName,
                        photos: player.photos
                      };
                    });
            
                    const message = "Liste des joueurs inscrits à l'interclub' récupérée avec succès.";
                    res.json({ message, data: players });
                  }
                })
                .catch(error => {
                  const message = "Une erreur s'est produite lors de la récupération des joueurs inscrits à l'interclub'.";
                  res.status(500).json({ message, error });
                });
            };

//* AJOUT D'UN JOUEUR DANS LA BASE DE DONNEES InscriptionInter

exports.createPlayerInTer = (req, res) => {
  const clubId = req.params.id; // ID de l'interclub'
  const playerId = req.body.playerId; // ID du joueur à créer

  // Recherche de l'interclub par son ID
  Club.findByPk(clubId)
    .then(club => {
      if (!club) {
        const message = "La session demandée n'existe pas.";
        res.status(404).json({ message });
      } else {
        // Création du joueur dans la session
        Player.findByPk(playerId)
          .then(player => {
            if (!player) {
              const message = "Le joueur demandé n'existe pas.";
              res.status(404).json({ message });
            } else {
              club.addPlayer(player)
                .then(() => {
                  const message = "Joueur ajouté avec succès à l'interclub'.";
                  res.status(201).json({ message });
                })
                .catch(error => {
                  const message = "Une erreur s'est produite lors de l'ajout du joueur à l'interclub'.";
                  res.status(500).json({ message, error });
                });
            }
          })
          .catch(error => {
            const message = "Une erreur s'est produite lors de la recherche du joueur.";
            res.status(500).json({ message, error });
          });
      }
    })
    .catch(error => {
      const message = "Une erreur s'est produite lors de la recherche de l'interclub'.";
      res.status(500).json({ message, error });
    });
};
// * SUPPRIMER UN JOUEUR DE LA BDD INSCRIPTION

exports.deletePlayerFromClub = (req, res) => {
  const clubId = req.params.id; // ID de l'inter
  const playerId = req.body.playerId; // ID du joueur à supprimer

  // Recherche de la session par son ID
  Club.findByPk(clubId)
    .then(club => {
      if (!club) {
        const message = "L'interclub demandée n'existe pas.";
        res.status(404).json({ message });
      } else {
        // Recherche du joueur par son ID
        Player.findByPk(playerId)
          .then(player => {
            if (!player) {
              const message = "Le joueur demandé n'existe pas.";
              res.status(404).json({ message });
            } else {
              club.removePlayer(player)
                .then(() => {
                  const message = "Joueur supprimé avec succès de l'interclub'.";
                  res.json({ message });
                })
                .catch(error => {
                  const message = "Une erreur s'est produite lors de la suppression du joueur de l'interclub'.";
                  res.status(500).json({ message, error });
                });
            }
          })
          .catch(error => {
            const message = "Une erreur s'est produite lors de la recherche du joueur.";
            res.status(500).json({ message, error });
          });
      }
    })
    .catch(error => {
      const message = "Une erreur s'est produite lors de la recherche de la session.";
      res.status(500).json({ message, error });
    });
};
