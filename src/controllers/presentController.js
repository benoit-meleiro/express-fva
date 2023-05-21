const Player = require('../models/player');
const Session = require('../models/session');
// const { Club } = require('../db/sequelize')
// const { ValidationError } = require('sequelize')

// Obtenir tous les joueurs à une session
exports.getSessionPlayers = (req, res) => {
  Session.findByPk(req.params.id, {
    include: [
      {
        model: Player,
        attributes: ['firstname', 'lastname'],
      },
    ],
  })
    .then(session => {
      if (session === null) {
        const message = `La session demandée n'existe pas. Merci d'essayer avec un autre identifiant.`;
        res.status(404).json({ message });
      } else {
        const players = session.Players;
        const message = 'Les joueurs de la session ont été récupérés avec succès.';
        res.json({ message, data: players });
      }
    })
    .catch(error => {
      const message = `Une erreur s'est produite lors de la récupération des joueurs de la session. Merci de réessayer dans quelques instants !`;
      res.status(500).json({ message, data: error });
    });
};

