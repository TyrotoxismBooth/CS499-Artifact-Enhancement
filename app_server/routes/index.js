var express = require('express');
var router = express.Router();
const destinationController = require('../controllers/main');

/* GET home page. */
router.get('/', destinationController.destination);

module.exports = router;