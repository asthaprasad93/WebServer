var express = require('express');
var router = express.Router();
// const addon = require('./build/Release/addon');
// console.log(addon.hello());
// console.log("in route.js");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Astha' });
});

router.get('/printCommand', function(req, res, next) {
  res.send('Enter a command ("/start" or "/pause" or "/status")');
});

router.get('/printCommand/start', function(req, res, next) {
  res.send('Starting print');
});

router.get('/printCommand/pause', function(req, res, next) {
  res.send('Pausing print');
});

router.get('/printCommand/stop', function(req, res, next) {
  res.send('Stopping print');
});

router.get('/printCommand/:command', function(req, res, next) {
  res.send(req.params.command);
});

module.exports = router;
