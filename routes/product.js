var express = require('express');
var router = express.Router();
var config = require('../package')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = [
    {
      id :1,
      name: 'x'
    },
    {
      id:2,
      name: 'y'
    }
  ]
  res.send(data);
});

module.exports = router;
