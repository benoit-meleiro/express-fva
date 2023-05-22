const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController')
// const authController = require('../controllers/authController')

router
    .route('/')
    // .get(authController.protect, presentController.findAllClubs)
    // .post(authController.protect, presentController.createClub)
    .get(clubController.findAllClubs)
    // .post(presentController.createClub)
   


router
    .route('/:id')
    // .get(presentController.getSessionPlayers)
    // .put(presentController.updateClub)
    // .delete(presentController.deleteclub)
    // .get(authController.protect, presentController.findClubByPk)
    // .put(authController.protect, presentController.updateClub)
    // .delete(authController.protect, presentController.deleteclub)
    router
    .route('/:id/presentinter')
    .get(clubController.getPlayersByClubId);
    // router
    // .route('/:id/addpresent')
    // .post(sessionController.addPlayerToSession);
    // router
    // .route('/:id/deletepresent')
    // .delete(sessionController.removePlayerFromSession);
    

module.exports = router; 