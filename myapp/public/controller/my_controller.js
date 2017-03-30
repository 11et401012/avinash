


		var  app=angular.module("myapp",["ngRoute"]);

		app.config(function($routeProvider){

			$routeProvider
			.when('/',{

				templateUrl:'views/fruntend/home.html'
			})

			.when('/about',{

				templateUrl:'views/fruntend/about.html'
			})
			.when('/contact',{

				templateUrl:'views/fruntend/contact.html'
			})
			
			.when('/form',{

				templateUrl:'views/fruntend/form.html'
			})

			.when('/form/:id',{

				templateUrl:'views/fruntend/form.html'
			})
			
			.when('/details',{

				templateUrl:'views/fruntend/details.html'
			})
			
		});

		var list_arr=[];
		var b="";
						
		var  obj={};
		app.controller('myctrl',function($scope, $http,$routeParams)
		{

		$scope.skill=['c','c++','java','html'];


			var objid=$routeParams.id;
					 

					 console.log("hello");

						  if(objid!=undefined)
						 {
						  console.log("hello");
						 $http.post('/register/singledata',{id:objid}).then(function(res)
							 { list_arr=[];

								$scope.form1=res.data[0];
								$scope.skill=res.data[0].skill;
								$scope.hobies=res.data[0].hobies;
								$scope.hobies=$scope.hobies.split(",");
								
								var hobies=$scope.hobies;
								
								console.log(list_arr);
								$scope.skill=$scope.skill.split(",");
								var sk=document.getElementsByName("chk");
								for(var i=0;i<sk.length;i++)
								{

									for(var j=0;j<$scope.skill.length;j++)
									{
										if(sk[i].value==$scope.skill[j])
										{
											sk[i].checked=true;
										}
								}
								}
								
								 document.getElementById("btn").innerHTML="";
						
						for(var i=0;i<hobies.length;i++)
						{
							list_arr.push(hobies[i]);
				    b+='<span id="'+hobies[i]+'"><input type="button"  value='+hobies[i]+' disabled/><span ><a href="javascript:void(0)"  onclick="del('+"'"+hobies[i]+"'"+')"><i class="fa fa-times"   style="hover:color:red;" aria-hidden="true"></i></a></span></span>';
						
						}
						console.log(list_arr);
						 document.getElementById("btn").innerHTML=b;
									  b="";

								})
						}
                 
						
				$scope.change=	function()
				{
							
						var drp=document.getElementById("drpselect").value;
						
						if(list_arr.indexOf(drp)==-1)
						{
					    list_arr.push(drp);
						}
						else
						{
							alert("already exist");
						}
						 document.getElementById("btn").innerHTML="";
						
						for(var i=0;i<list_arr.length;i++)
						{
							    b+='<span id="'+list_arr[i]+'"><input type="button"  value='+list_arr[i]+' disabled/><span ><a href="javascript:void(0)"  onclick="del('+"'"+list_arr[i]+"'"+')"><i class="fa fa-times"   style="hover:color:red;" aria-hidden="true"></i></a></span></span>';
							
						}
						 document.getElementById("btn").innerHTML=b;
									  console.log(list_arr);
									  b="";
						}
						
				
			$scope.data=function(value)
			{


		  if(document.getElementById("txtfname").value=="")
		   {

		   document.getElementById("spnfname").innerHTML="please fill first name";
			return false;
		   }
			if(document.getElementById("txtlname").value=="")
		   {

		   document.getElementById("spnlname").innerHTML="please fill last name";
			return false;
		   }

		   if(document.getElementById("txtemail").value=="")
		   {

		   document.getElementById("spnemail").innerHTML="please fill email";
			return false;
		   }

			  

		 if(document.getElementById("txtphone").value=="")
		   {

		   document.getElementById("spnphone").innerHTML="please fill phone";
			return false;
		   }

		var g=document.getElementsByName("gender");
		var gr=false;
		for(var i=0;i<g.length;i++)
		{

			if(g[i].checked==true)
			{
				gr=true;
			}
		}

		if (gr!=true) {

			document.getElementById("spngen").innerHTML="please select your  gender";
			return  false;
		}

		if(gr==true)
		{
			document.getElementById("spngen").innerHTML="";
		}


		var  chk=document.getElementsByName("chk");

		var ch=false;
		for(var i=0;i<chk.length;i++)
		{

			if(chk[i].checked==true)
			{
				ch=true;
			}
		}

		if(ch!=true)
		{

			document.getElementById("spnchk").innerHTML="please  checked  one  skill";
			return  false;
		}
		if(ch==true)
		{

			document.getElementById("spnchk").innerHTML="";
		}

		   
		   if(document.getElementById("txtfname").value!="")
		   {

		   document.getElementById("spnfname").innerHTML="";
			
		   }

		  
		   if(document.getElementById("txtlname").value!="")
		   {

		   document.getElementById("spnlname").innerHTML="";

		   }

		   


			
			 obj.fname=value.fname;
			 obj.lname=value.lname;
			 obj.email=value.email;
			 obj.phone=value.phone;

			 obj.gender=value.gender;
			 
			 obj.hobies=list_arr.toString();
			 console.log(obj.hobies);
			 
			var s=[];
			 var skill=document.getElementsByName("chk");
			  for(var i=0;i<skill.length;i++)
			  {

				if(skill[i].checked==true)
				{

					s.push(skill[i].value);
				}
				console.log(s);
			  }
			$scope.sk=s.toString();
			obj.skill=$scope.sk;
            console.log(obj);
			 if(objid!=undefined)
					{
						 console.log("hello");
						 var id=$routeParams.id;
						 console.log(objid);
						$http.post('/register/update',{formdata:obj,id:objid}).then(function(res){
							console.log("data updated");
							
						})
					}
					else
					{

			 $http.post('/register/save',obj).then(function(res){

				console.log("inserted");
			 });

		}
			}

		/*	$http.post('/register/singledata',obj).then(function(res ,data){

					console.log("data selected");
					$scope.form1=res.data[0];

					console.log($scope.form1);
				});
				*/

		});

		app.controller('details',function($scope,$http,$window){


			var data={a:1};

			$http.post('/register/detail',data).then(function(res){

				$scope.registration=res.data;

				console.log($scope.registration);
			});


			$scope.delete=function(object)
			{

				var id={id:object};
				$http.post('/register/remove',id).then(function(res){
					console.log("delete");
				});
				
				//$route.reload();
		$window.location.reload();
			}


			$scope.Edit=function(id)
			{

				//console.log({id:id});
				var  obj={id:id};

		$http.post('/register/singledata',obj).then(function(res ,data){
					console.log("data selected");
				});
			
		}


		});
		
		
		
	                    function  del(value)
							   {
								  var index=list_arr.indexOf(value);
								  alert(index);
								  list_arr.splice(index,1);
								  console.log(list_arr);
								  document.getElementById(value).innerHTML="";
							   }

							   
							   
							   
							   
							   
							   
							   
							   