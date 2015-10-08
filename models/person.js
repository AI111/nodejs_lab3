/**
 * Created by sasha on 20.09.15.
 */
/**
 * Created by sasha on 18.09.15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    _id:Number,
    name: {
        firstName : String,
        lastName : String,
        middleName: String
    },
    birthDay : {
        day: Number,
        month : Number,
        year : Number
    }

});


var Person = mongoose.model('Person', personSchema);

module.exports = Person;