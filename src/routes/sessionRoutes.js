const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController')
const authController = require('../controllers/authController')

router
    .route('/')
    .get(authController.protect, sessionController.findAllSessions)
    .post(authController.protect, sessionController.createSession)
   


router
    .route('/:id')
    .get(authController.protect, sessionController.findSessionByPk)
    // .get(authController.protect, authController.restrictTo('loisir', 'équipe', 'capitaine', 'admin'), sessionController.findSessionByPk)
    .put(authController.protect, sessionController.updateSession)
    .delete(authController.protect, sessionController.deleteSession)
    // .put(authController.protect, playerController.updatePlayer)
    // .delete(authController.protect, authController.restrictTo('user', 'admin'), playerController.deletePlayer)
    
    router
    .route('/:id/present')
    .get(authController.protect, sessionController.getPlayersBySessionId)
    .post(authController.protect, sessionController.createPlayerInSession)
    .delete(authController.protect, sessionController.deletePlayerFromSession);
    
    
module.exports = router; 