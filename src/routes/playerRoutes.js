const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController')
// const authController = require('../controllers/authController')

router
    .route('/')
    .get(playerController.findAllPlayers)
    .post(playerController.createPlayer)
    // .post(authController.protect, playerController.createPlayer)

// router
//     .route('/withReview')
//     .get(coworkingController.findAllCoworkingsByReviewSQL)

router
    .route('/:id')
    .get(playerController.findPlayerByPk)
    .put(playerController.updatePlayer)
    .delete(playerController.deletePlayer)
    // .put(authController.protect, playerController.updatePlayer)
    // .delete(authController.protect, authController.restrictTo('user', 'admin'), playerController.deletePlayer)
    

module.exports = router; 