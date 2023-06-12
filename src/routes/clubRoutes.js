const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController')
const authController = require('../controllers/authController')
const presentInter = require('../controllers/presentInterController')

router
    .route('/')
    .post(authController.protect, authController.restrictTo('admin','capitaine'), clubController.createClub)
    .get(authController.protect,clubController.findAllClubs)
   
router
    .route('/:id')
    .delete(authController.protect, authController.restrictTo('admin'), clubController.deleteclub)
    .get(authController.protect, clubController.findClubByPk)
    .put(authController.protect, authController.restrictTo('admin', 'capitaine'), clubController.updateClub)
    
    router
    .route('/:id/presentinter')
    .get(authController.protect, clubController.getPlayersByClubId)
    .post(authController.protect, clubController.createPlayerInTer)
    .delete(authController.protect, clubController.deletePlayerFromClub)
    

module.exports = router; 