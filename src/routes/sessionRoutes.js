const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController')
const authController = require('../controllers/authController')

router
    .route('/')
    .get(authController.protect, sessionController.findAllSessions)
    .post(authController.protect, authController.restrictTo('admin'), sessionController.createSession)
   


router
    .route('/:id')
    .get(authController.protect, sessionController.findSessionByPk)
    .put(authController.protect, authController.restrictTo('admin'), sessionController.updateSession)
    .delete(authController.protect, authController.restrictTo('admin'), sessionController.deleteSession)
    
    
    router
    .route('/:id/present')
    .get(authController.protect, sessionController.getPlayersBySessionId)
    .post(authController.protect, sessionController.createPlayerInSession)
    .delete(authController.protect, sessionController.deletePlayerFromSession);
    
    
module.exports = router; 