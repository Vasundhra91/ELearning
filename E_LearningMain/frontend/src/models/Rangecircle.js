var mongoose= require('mongoose');
const Schema = mongoose.Schema;

var modelschema = new Schema({
    name:{
         type:String,
        // required:true
     },
    department:{
         type:String,
        // required:true
     },
    email:{
         type:String,
        // required:true
     }
 })

module.exports = Maap =mongoose.model('Maap',modelschema);