var express = require('express');
const { getUserDetails } = require('../services/users.service');
var router = express.Router();

router.get('/', getUserDetails);

module.exports = router;
