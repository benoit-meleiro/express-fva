const Player = require('../models/player');
const Club = require('../models/club');
// const { Club } = require('../db/sequelize')
// const { ValidationError } = require('sequelize')

// Obtenir tous les joueurs à une session
//* Présence des joueurs aux interclubs          

           exports.getPlayersByClubId = (req, res) => {
                          
              Club.findByPk(req.params.id, {
                include: [
                  {
                    model: Player,
                    attributes: ['firstname', 'lastname'],
                  },
                ],
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
