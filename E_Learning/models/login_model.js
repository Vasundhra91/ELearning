var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var modelschema = new Schema({
   Fname:{
      type: String,
   },
   LName:{
      type: String,
   },
   Useremail:{
      type: String,
   },
   Userpassword:{
      type: String,
   },
   UserAdmin: {
      type: String,
   }
})

module.exports = Login = mongoose.model('Login', modelschema);