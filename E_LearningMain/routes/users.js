var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
  	username: "Vasu"
  }, {
  	id: 2,
  	username: "Vasundhra"
  }]);
});

module.exports = router;