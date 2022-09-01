var express = require('express');
const { config } = require('../config/database.config');
const { getUserDetails } = require('../services/users.service');
var router = express.Router();

router.get('/', getUserDetails);

router.get('/api', (req,res)=>{
  res.send(config)
})

module.exports = router;
