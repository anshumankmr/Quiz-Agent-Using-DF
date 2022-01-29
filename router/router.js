'use strict';

const express = require('express')
const controller = require('../controller/controller');

const router = express.Router();
router.route("/",express.json).post(controller.intentMapper)
router.route("/serverHealth").get(controller.getHealth);

module.exports  = router;