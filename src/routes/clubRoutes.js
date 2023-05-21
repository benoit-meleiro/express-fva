const express = require('express');
const router = express.Router();
const presentController = require('../controllers/presentController')
// const authController = require('../controllers/authController')

router
    .route('/')
    // .get(authController.protect, presentController.findAllClubs)
    // .post(authController.protect, presentController.createClub)
    // .get(presentController.findAllClubs)
    // .post(presentController.createClub)
   


router
    .route('/:id')
    .get(presentController.getSessionPlayers)
    // .put(presentController.updateClub)
    // .delete(presentController.deleteclub)
    // .get(authController.protect, presentController.findClubByPk)
    // .put(authController.protect, presentController.updateClub)
    // .delete(authController.protect, presentController.deleteclub)
    
    

module.exports = router; 