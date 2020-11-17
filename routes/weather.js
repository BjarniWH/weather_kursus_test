const fetch = require('node-fetch');
var express = require('express');
var router = express.Router();

const txtUrl = 'http://www.henrikdemant.com/weather/realtime.txt';

/* GET weather page. */
router.get('/', async (req, res, next) => {
  const response = await fetch(txtUrl);
  const weatherString = await response.text();
  const weatherArray = await weatherString.split(' ');
  console.log(weatherArray);
  const weatherObj = {
    date: weatherArray[0],
    time: weatherArray[1],
    temp: weatherArray[2],
    humidity: weatherArray[3]
  }
  res.send(weatherObj);
});

module.exports = router;
