

var  mongoose=require('mongoose');
var regdata=mongoose.Schema({

	fname:String,
	lname:String,
	email:String,
	phone:String,
	gender:String,
	skill:String,
	hobies:String
});

var registration=mongoose.model('registration',regdata);

module.exports = registration;
