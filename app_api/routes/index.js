const express = require("express");
const router = express.Router();

const destinationsController = require("../controllers/destinations");
const authenticationController = require("../controllers/authentication");

// Define routes for authentications
router.route("/register").post(authenticationController.register);
router.route("/login").post(authenticationController.login);


// Define routes for Destination endpoints

router
    .route("/destinations")   
    .get(destinationsController.destinationsList) // GET method to return all destinations in destinationsList
    .post(destinationsController.destinationsAddDestination); // POST Method to add a Destination

router
    .route('/destinations/:destinationId')
    .get(destinationsController.destinationsFindById) // GET method to return one destination by Id
    .put(destinationsController.destinationsUpdateDestination); // PUT method to update destination record

module.exports = router;