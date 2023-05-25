const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController')
const authController = require('../controllers/authController')
const presentInter = require('../controllers/presentInterController')

router
    .route('/')
    // .get(authController.protect, presentController.findAllClubs)
    .post(clubController.createClub)
    .get(clubController.findAllClubs)
    // .post(presentController.createClub)
   


router
    .route('/:id')
    
    // .put(presentController.updateClub)
    .delete(authController.protect, clubController.deleteclub)
    .get(authController.protect, clubController.findClubByPk)
    .put(authController.protect, clubController.updateClub)
    // .delete(authController.protect, presentController.deleteclub)
    router
    .route('/:id/presentinter')
    .get(authController.protect, clubController.getPlayersByClubId);
    // router
    // .route('/:id/addpresent')
    // .post(sessionController.addPlayerToSession);
    // router
    // .route('/:id/deletepresent')
    // .delete(sessionController.removePlayerFromSession);
    

module.exports = router; 