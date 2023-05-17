const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController')
const authController = require('../controllers/authController')

router
    .route('/')
    .get(authController.protect,sessionController.findAllSessions)
    .post(authController.protect,sessionController.createSession)
    // .post(authController.protect, playerController.createPlayer)

// router
//     .route('/withReview')
//     .get(coworkingController.findAllCoworkingsByReviewSQL)

router
    .route('/:id')
    .get(authController.protect,sessionController.findSessionByPk)
    .put(authController.protect,sessionController.updateSession)
    .delete(authController.protect,sessionController.deleteSession)
    // .put(authController.protect, playerController.updatePlayer)
    // .delete(authController.protect, authController.restrictTo('user', 'admin'), playerController.deletePlayer)
    

module.exports = router; 