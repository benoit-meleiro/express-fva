const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController')
// const authController = require('../controllers/authController')

router
    .route('/')
    .get(sessionController.findAllSessions)
    .post(sessionController.createSession)
    // .get(authController.protect,sessionController.findAllSessions)
    // .post(authController.protect,sessionController.createSession)
    // .post(authController.protect, playerController.createPlayer)


router
    .route('/:id')
    .get(sessionController.findSessionByPk)
    .put(sessionController.updateSession)
    .delete(sessionController.deleteSession)
    // .put(authController.protect, playerController.updatePlayer)
    // .delete(authController.protect, authController.restrictTo('user', 'admin'), playerController.deletePlayer)
    
    router
    .route('/:id/present')
    .get(sessionController.getPlayersBySessionId);
    // router
    // .route('/:id/addpresent')
    // .post(sessionController.addPlayerToSession);
    // router
    // .route('/:id/deletepresent')
    // .delete(sessionController.removePlayerFromSession);
    
module.exports = router; 