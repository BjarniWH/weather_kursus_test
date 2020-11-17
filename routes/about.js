var express = require('express');
var router = express.Router();
var config = require('../package')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = {
    name:  config.name,
    version : config.version,
    dependencies: config.dependencies
  }
  res.send(data);
});

module.exports = router;
