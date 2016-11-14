var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:command', function(req, res, next) {
  res.send('received a command!');
});



module.exports = router;
