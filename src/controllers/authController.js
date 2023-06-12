const { Op, UniqueConstraintError, ValidationError } = require('sequelize');
const { Player } = require('../db/sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key')

exports.login = (req, res) => {
    if(!req.body.emailPlayer || !req.body.password){
        const msg = "Veuillez fournir un nom d'utilisateur et un mot de passe."
        return res.status(400).json({message: msg})
    }
    
    Player.findOne({ where : {emailPlayer: req.body.emailPlayer}})
        .then(mailUser => {
            if(!mailUser){
                const msg = "L'utilisateur demandé n'existe pas."
                return res.status(404).json({message: msg})
            }

            bcrypt.compare(req.body.password, mailUser.password)
                .then(isValid => {
                    if(!isValid){
                        const msg = "Le mot de passe est incorrect."
                        return res.status(404).json({message: msg})
                    }

                    //json web token
                    const token = jwt.sign({
                        data: mailUser.id
                      }, privateKey, { expiresIn: '24h' });

                    const msg = "L'utilisateur a été connecté avec succès."
                    mailUser.password = "hidden"
                    return res.json({message: msg, data: mailUser, token})
                })
        })
        .catch(error => {
            const msg = "L'utilisateur n'a pas pu se connecter."
            return res.status(500).json({message: msg, error})
        })
}


exports.protect = (req, res, next) => {
    const authorizationHeader = req.headers.authorization // on récupère l'en tête dans laquelle transite le jeton

    if(!authorizationHeader){
        const message = "Un jeton est nécessaire pour accéder à la ressource"
        return res.status(401).json({message})
    }

    try {
        const token = authorizationHeader.split(' ')[1]; // on enlève bearer
        const decoded = jwt.verify(token, privateKey) // verify = sign vu prédemment
        req.userId = decoded.data
    } catch (err) {
        const message = "Jeton invalide"
        return res.status(403).json({message, data: err})
    }
    
    return next();
}

exports.restrictTo = (...roles) => {
    return (req, res, next) => {
        Player.findByPk(req.userId)
            .then(user => { 
                console.log(user.lastName, user.id, roles) 
                if(!user || !roles.some(role => user.roles.includes(role))){
                    const message = "Droits insuffisants";
                    return res.status(403).json({message}) 
                }
                return next();
            })
            .catch(err => {
                const message = "Erreur lors de l'autorisation"
                res.status(500).json({message, data: err})
            })    
    }
}
