const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController')
// const authController = require('../controllers/authController')

router
    .route('/')
    .get(clubController.findAllClubs)
    .post(clubController.createClub)
    // .post(authController.protect, playerController.createPlayer)

// router
//     .route('/withReview')
//     .get(coworkingController.findAllCoworkingsByReviewSQL)

router
    .route('/:id')
    .get(clubController.findClubByPk)
    .put(clubController.updateClub)
    .delete(clubController.deleteclub)
    // .put(authController.protect, playerController.updatePlayer)
    // .delete(authController.protect, authController.restrictTo('user', 'admin'), playerController.deletePlayer)
    

module.exports = router; 