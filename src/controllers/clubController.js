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
          
            // const validTypes = ['Plante', 'Poison', 'Feu', 'Eau', 'Insecte', 'Vol', 'Normal', 'Electrik', 'Fée']

            // validate: {
            //   isTypesValid <<<< nom arbitraire(value) {
            //     if(!value) {
            //       throw new Error('Un pokémon doit au moins avoir un type.')
            //     }
            //     if(value.split(',').length > 3) {
            //       throw new Error('Un pokémon ne peux pas avoir plus de trois types.')
            //     }
            //     value.split(',').forEach(type => {
            //       if(!validTypes.includes(type)) {
            //         throw new Error(`Le type d'un pokémon doit appartenir à la liste suivante : ${validTypes}`)
            //       }
            //     });
            //   }
            // }