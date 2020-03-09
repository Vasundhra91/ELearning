var express = require('express');
var router = express.Router();

const LoginModel = require(__dirname + '../../models/login_model')
const SubmitModel = require(__dirname + '../../models/Submit_model')
/* GET users listing. */
router.get('/', function (req, res, next) {
  SubmitModel.find(function (error, datavalue) {
    if (error) { throw error }
    //res.render('\Home',{data:datavalue});
    res.json(datavalue);
  })
});
router.post('/', function (req, res) {
  LoginModel.create(req.body).then(function (data) {
    console.log(req.body)
    LoginModel.findOne({}).sort({ _id: -1 }).limit(1).toArray(function (error, datavalue) {
      if (error) { throw error }
      //res.render('\Home',{data:datavalue});
      res.json(datavalue);
    })
  })
});

router.post('/login', function (req, res) {
  const { Useremail, Userpassword } = req.body;
  var query = { Useremail: Useremail };
  LoginModel.findOne(query, function (err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
          error: 'Internal error please try again'
        });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    }
    else if (user.Userpassword != Userpassword) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    } else {
      res.status(200)
        .json({ Name: user.Fname + " " + user.LName })
    }
  })
})

router.post('/Admin', function (req, res) {

  SubmitModel.create(req.body).then(function (data) {
    SubmitModel.find(function (error, datavalue) {
      if (error) { throw error }
      //res.render('\Home',{data:datavalue});
      res.json(datavalue);
    })
  })
});
module.exports = router;