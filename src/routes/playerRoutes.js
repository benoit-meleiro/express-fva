const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const authController = require('../controllers/authController');

router
    .route('/')
    .get(authController.protect, playerController.findAllPlayers)
    .post(authController.protect, playerController.createPlayer)
 
router
    .route('/:id')
    .get(authController.protect, playerController.findPlayerByPk)
    .delete(authController.protect, playerController.deletePlayer)
    .put(authController.protect, playerController.updatePlayer)
    
    // .delete(authController.protect, authController.restrictTo('admin'), playerController.deletePlayer)
       
router
    .route('/login')
    .post(authController.login)

module.exports = router; 