const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController')
const authController = require('../controllers/authController')

router
    .route('/')
    .get(authController.protect, clubController.findAllClubs)
    .post(authController.protect, clubController.createClub)
   


router
    .route('/:id')
    .get(authController.protect, clubController.findClubByPk)
    .put(authController.protect, clubController.updateClub)
    .delete(authController.protect, clubController.deleteclub)
    
    

module.exports = router; 