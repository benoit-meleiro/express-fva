const { Player } = require('../db/sequelize')
const { UniqueConstraintError } = require('sequelize')
const { Op } = require('sequelize')
const bcrypt = require('bcrypt'); 

// const capitalize = (str) => str.charAt(0).toUpperCase() + str.substring(1)

exports.findAllPlayers =  (req, res) => {
  if(req.query.name) {
    const name = req.query.name
    const limit = parseInt(req.query.limit) || 5 // si l'utilisateur ne met pas de limit 5 est la limite par défaut parse car exppress transmet une chaine de carac
    if(name.length < 2) {
      const message = `le terme de recherche doit contenir au moins 2 caractères`
      return res.status(400).json({message})
    }
    
    return Player.findAndCountAll({  // cette méthode renvoie un nombre limité (si onle souhaite) ou la totale si pas de limite
      where: { 
        lastName: { // propriété du modèle
          [Op.or]: {
            [Op.like]: `%${name}%` // name est le critère de recherche
           }
        }
      },
      order: ['lastName'], // c'est la propriété du modèle que l'on veut ordonner
      limit: limit
    })
    .then(({count, rows}) => {
      const message = `Il y a ${count} qui correspondent au terme de recherche ${name}.`
      return res.json({ message, data: rows })
    })
  } else {
    Player.findAll({order: ['lastName']})
      .then(players => {
        const message = 'La liste des joueurs a bien été récupérée.'
        res.json({ message, data: players })
      })
      .catch(error => {
        const message = "la liste des joueurs n'a pu être récupérée. Merci de réessayer dans quelques instants !"
        res.status(500).json({message, data:error})
      })
  }
    
  }

  exports.findPlayerByPk = (req, res) => {
      Player.findByPk(req.params.id)
        .then(players => {
          if(players=== null){
            const message =`le joueur demandé n'existe pas. Merci d'essayer avec un autre identifiant`
            res.status(404).json({message})
          } else{
            
              const message = 'Le joueur a bien été trouvé.'
              res.json({ message, data: players })
            
          }
        })
        
        .catch(error => {
          const message = `le joueur n'a pu être récupéré. Merci de réessayer dans quelques instants !`
          res.status(500).json({message, data:error})
        })
    }

    exports.createPlayer = (req, res) => {
      const { firstName, lastName, sexe, emailPlayer, password, roles, jour_ouverture, joueur_interclubs, joueur_capitaine, photos } = req.body;
          bcrypt.hash(password, 10)
        .then((hashedPassword) => {
          const playerData = {
            firstName,
            lastName,
            sexe,
            emailPlayer,
            password: hashedPassword,
            roles,
            jour_ouverture,
            joueur_interclubs,
            joueur_capitaine,
            photos
          };
    
          Player.create(playerData)
            .then((player) => {
              const message = `Le joueur ${player.firstName} ${player.lastName} a bien été créé.`;
              res.json({ message, data: player });
            })
            .catch((error) => {
              if (error instanceof UniqueConstraintError) {
                return res.status(400).json({ message: error.message, data: error });
              }
              const message = `Le joueur n'a pas pu être ajouté. Merci de réessayer dans quelques instants !`;
              res.status(500).json({ message, data: error });
            });
        })
        .catch((error) => {
          console.error('Error while hashing password:', error);
          const message = 'Une erreur s\'est produite lors du traitement de votre demande.';
          res.status(500).json({ message, data: error });
        });
    };

    exports.updatePlayer = (req, res) => {
      const id = req.params.id;
      const { password, ...updateData } = req.body;
    
      Player.findByPk(id)
        .then((player) => {
          if (player === null) {
            const message = `Le joueur demandé n'existe pas. Merci d'essayer avec un autre identifiant.`;
            res.status(404).json({ message });
          } else {
            if (password !== undefined && password !== "") {
              bcrypt.hash(password, 10)
                .then((hashedPassword) => {
                  updateData.password = hashedPassword;
                  updatePlayerData(id, updateData);
                })
                .catch((error) => {
                  console.error('Error while hashing password:', error);
                  const message = 'Une erreur s\'est produite lors du traitement de votre demande.';
                  res.status(500).json({ message, data: error });
                });
            } else {
              updatePlayerData(id, updateData);
            }
          }
        })
        .catch((error) => {
          const message = 'Une erreur s\'est produite lors du traitement de votre demande.';
          res.status(500).json({ message, data: error });
        });
    
      function updatePlayerData(id, updateData) {
        Player.update(updateData, {
          where: { id: id }
        })
          .then(() => {
            return Player.findByPk(id).then((player) => {
              const message = `Le joueur ${player.firstName} ${player.lastName} a bien été modifié.`;
              res.json({ message, data: player });
            });
          })
          .catch((error) => {
            if (error instanceof UniqueConstraintError) {
              return res.status(400).json({ message: error.message, data: error });
            }
            const message = `Le joueur n'a pas pu être modifié. Merci de réessayer dans quelques instants !`;
            res.status(500).json({ message, data: error });
          });
      }
    };
    
    
    
    

     exports.deletePlayer = (req, res) => {
              Player.findByPk(req.params.id).then(player => {
                if(player=== null){
                  const message =`le joueur demandé n'existe pas. Merci d'essayer avec un autre identifiant`
                  res.status(404).json({message})
                }
                const playerDeleted = player;
                return Player.destroy({
                  where: { id: req.params.id }
                })
                .then(() => {
                  const message = `Le joueur ${player.firstName} ${player.lastName} a bien été supprimé.`
                  res.json({message, data: playerDeleted })
                })
              })
              .catch(error => {
                const message = `le joueur n'a pu être supprimé. Merci de réessayer dans quelques instants !`
                res.status(500).json({message, data:error})
            })
     }