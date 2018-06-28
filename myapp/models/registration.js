
var  mongoose=require('mongoose');
var regdata=mongoose.Schema({
fname:{ type:String},
lname:{type:String},
email:{type:String},
phone:{type:String},
gender:{type:String},
skill:{type:String},
hobies:{type:String}
});
var registration=mongoose.model('registration',regdata);
module.exports = registration;
