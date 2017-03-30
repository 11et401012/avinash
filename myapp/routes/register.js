var express = require('express');
var router = express.Router();
var objectId=require('mongodb').objectId;
/* GET home page. */

var registration=require('../models/registration');
router.get('/', function(req, res, next) {
  res.render('form');
});



router.post('/save',function(req,res){

	var  inputdata=new registration(req.body);
	inputdata.save(function(err,data){

		if(err)
		{
			console.log("error");
		}
		else
		{
			console.log("success");
			res.send(data);
		}
	})

});

router.post('/detail',function(req,res){

	registration.find({},function(err,data){

		if(err)
		{
			console.log("error");
		}
		else
		{
			console.log("show");
			res.send(data);
		}
	})
});

router.post('/remove',function(req,res){
	registration.find({_id:req.body.id}).remove(function(err,data){

		if(err)
		{
			console.log('error');

		}
		else
		{
			console.log("deleted");
			res.send(data);
		}
	})
});

router.post('/singledata',function(req,res){

   console.log(req.body);
				  registration.find({_id:req.body.id},function(err,data){
					  if(err)
					  {
						  console.log("error");
					  }
					  else
					  {
						  res.send(data);
						 
					  }
				  })
				})


router.post('/update',function(req,res){
					
                console.log("avinash");
					var id=req.body.id;
					  console.log(id);
					 var modify=req.body.formdata;
					 console.log(modify);
					 registration.findOneAndUpdate({_id:req.body.id},{$set:{fname:modify.fname,lname:modify.lname,email:modify.email,phone:modify.phone,gender:modify.gender,skill:modify.skill}},function(err,data){
						if(err)
						{
							console.log("error");
						}
						else{
						console.log("updated");
						res.send(data);
						}
					 })
				});
				
				
		/*		router.post('/updatedata' , function(req , res){
	//console.log(req.body);
	var upd = req.body.md;
	collectionname.findOneAndUpdate({_id:req.body.dataid},{$set:{nam:upd.nam,email:upd.email,contact:upd.contact,gender:upd.gender,bike:upd.bike,car:upd.car,address:upd.address}},function(err , data){
		if(err){
			console.log('error');
		}else{
			res.send(data);
		}
		
	});
});
*/

module.exports = router;
