const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController')
// const authController = require('../controllers/authController')

router
    .route('/')
    // .get(authController.protect, presentController.findAllClubs)
    .post(clubController.createClub)
    .get(clubController.findAllClubs)
    // .post(presentController.createClub)
   


router
    .route('/:id')
    
    // .put(presentController.updateClub)
    .delete(clubController.deleteclub)
    .get(clubController.findClubByPk)
    .put(clubController.updateClub)
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