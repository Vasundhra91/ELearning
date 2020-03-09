var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var modelschema = new Schema({
    MCQ_option: {
        type: JSON
    },
    MCQ_ques: {
        type: String
    },
    MCQ_Answer: {
        type: String
    },Ques_id:{
        type:Number
    }
})

module.exports = Login = mongoose.model('MCQ_Test', modelschema);