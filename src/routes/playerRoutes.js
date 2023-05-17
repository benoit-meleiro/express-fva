const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const authController = require('../controllers/authController');

router
    .route('/')
    .get(authController.protect, playerController.findAllPlayers)
    .post(authController.protect, playerController.createPlayer)
    // .post(authController.protect, playerController.createPlayer)

// router
//     .route('/withReview')
//     .get(coworkingController.findAllCoworkingsByReviewSQL)

router
    .route('/:id')
    .get(authController.protect, playerController.findPlayerByPk)
    .delete(authController.protect, authController.restrictTo('admin'), playerController.deletePlayer)
    .put(authController.protect, playerController.updatePlayer)
   
router
    .route('/login')
    .post(authController.login)




module.exports = router; 