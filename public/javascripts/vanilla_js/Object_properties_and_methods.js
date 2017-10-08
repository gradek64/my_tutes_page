
							/* content;






							------looping trough the object--------


							1. Object.keys(myObj`).forEach(key,value){}) = it takes only its own properites (doesnt include inherited);

							2 for(key in myObj){
								if(myObj.hasOwnProperty(key)) //check has to be peform since it will take inherited propeties as well;
							}



							



							-------------call() and apply() methods ----------------


							
							1.  call(obj,prop,prop);  call any function with any object
									var person = {name:"Greg",surname:"Gil"}
									say(likes,interests) { return this.name + this.surname + likes + interests};

									say.call(person,interests);

							2.  apply(obj,[prop,prop]);  apply any function with any object with array parameters

									var person = {name:"Greg",surname:"Gil"}
									say(likes,interests) { return this.name + this.surname + likes + interests};

									say.call([person,interests]); //parameters are array even though function takes 2 seperate ones 

														
							3.  mehthod.bind(obj)

									var person = {name:"Greg",surname:"Gil"}
									say(likes,interests) { return this.name + this.surname + likes + interests};

									var binded_method = say.bind(person); //methos is binded only not executed;

									binded_method("ice-cream","snowboard") //now it is exuted with the params that function takes initially 
									



							-------------- converting object to String -------------


									var bjj = {gaga:"gaga",gag:2}

									JSON.sringify(bjj) 			//retuns "{"gaga:":"gaga","gag":2}"


							
							-------------- converting String to Object -------------
							
									str= "{"gaga:":"gaga","gag":2}""

									JSON.parse(str); 			

									//retuns {gaga:"gaga",gag:2};  it always creates javascript object even if it was JSON object



							*/
			



				/*  1

						to declare object you can do either 

						var obj = {}

						var obj = new Object{};

				*/	

					var obj = {greg:"greg",gil:"gil"}

					var obj2 = new Object({girl:"girl",somegirl:"somegirl"});


					console.log(obj);

					console.log(obj2);


				/*
					2 

					Every object once is created (initiated) it also create Prototype


					so if you add some mehtods or properties to [object Object] then every single object will have it as 


					below:


				*/	

					//this below now sits in Object.prototype object
					Object.prototype.feature = "new Feature";
					Object.prototype.addProperty = function(property){
						this[property]= property;
					}


					//methods from prototype now can be used of object instances as below
					obj.addProperty('name');
					obj.someP = Object.prototype.feature;
					obj2.newFeature = Object.prototype.feature;


					//now when you check both object what you get ?

					console.log(obj);
					console.log(obj2);



					/*
						
							looping through the object 


					*/


					//  1 for(value in obj)

						console.log('\n\n-----------looping for(key in obj)------------\n\n ');
						for(key in obj){
							
							console.log("key  : "+ key + "obj[value] "+ obj[key]);
					}

						console.log('----------looping for(key in obj\n\n) ------------'); //notice that will loop with every property as well as in Object.prototype chain !



					//	1a to prevent that we need to make condition if(obj.hasOwnProperty());

						console.log('\n\n-------looping for(key in obj) with if(obj.hasOwnProperty(key))------\n\n');
						for(key in obj){
							
						if(obj.hasOwnProperty(key)) console.log("key  : "+ key + "obj[value] "+ obj[key]);
					}

						console.log('-----------looping for(key in obj with if(obj.hasOwnProperty(key))---------\n\n)'); //notice that will loop with every property as well as in Object.prototype chain !




					// 2  Object.keys(instance)forEach(function(key){} !imporatant this wont loop through prototype properties and methods;

						console.log('\n\n--------Object.keys(instance)forEach(function(key){}) --------- \n\n');
					Object.keys(obj2).forEach(function(key){
							
							console.log("key  : "+ key + "obj[value] "+ obj2[key]);
					});

						console.log('-----------Object.keys(instance)forEach(function(key){}) ------------\n\n'); //notice that will loop with every property as well as in Object.prototype chain !


					/*


							object types and constructors

					*/


					/*1 every object and primitive values (booleans, Strings,Numbers ) can be converted to String;

						Object is not an exeption but Object.toString()  will give you type as [object Object] so object of type object

				     */

				     //so to check if object is indeed object you can do 

				     	console.log('obj.toString()');
				     	console.log(obj.toString());
				     	console.log('obj.toString()');

				     	//or type 

				     	console.log('typeof obj');
				     	console.log(typeof obj);
				     	console.log('typeof obj');

				     	//or instanceof 

				     	console.log('obj instanceof Object');
				     	console.log(obj instanceof Object);
				     	console.log('obj instanceof Object');

				     	//or constructor.name 

				     	console.log('obj.constructor.name');
				     	console.log(obj.constructor.name);
				     	console.log('obj.constructor.name');


				     	/*

								Object methods

								1.  call(obj,[prop,prop])

									//prop are optional

								//explanation 
				
								so frist you need function
								as say(), go() or more complex Object.prototype.toString() they all methods;

								and you got a function as:
						*/
								var person1 = {name:"Mark"}
								function say(){
									return 'say my name '+ this.name //has to be on the object calling this method
								}

								//so intstead of just calling say()
								say.call(person1); //that would pass person1.name ;

								console.log('...........say.call(person1)...............')
								console.log(say.call(person1))
								console.log('...........say.call(person1)...............')

								//also you can pass parameter to the call function (it is limited to one);

								function greetMe(greetings,shout){
									return greetings + " " + this.name +" "+ shout;
								}

								greetMe.call(person1,"Hello","!!!");


								console.log('.........greetMe.call(person1,"Hello","hh");..........');
								console.log(greetMe.call(person1,"Hello","!!!"));
								console.log('.........greetMe.call(person1,"Hello","hh");..........');


								/*


									method.apply([array])

									intead of passing muliple parameters you can pass array with those parameters;

								*/

								var parameters = ["Hello","there"];
								greetMe.apply(person1,parameters);

								//as you can see we can still use the same function greetme(p1,p2) but pass array to in with those p1,p2 


								/*


									method.bind(obj)

									it only binds method to the object but it doesnt execute it , needs to called 

								*/

								//bind say() method to the person1;

								var method_attached_to_person = greetMe.bind(person1);

								console.log("\n\n\nchecking person1 with say() method attached to it");
								console.log(person1);
								console.log("checking person1 with say() method attached to it");

								//now you can call the bind function with the parameters that function was taking initially

								method_attached_to_person('Hello',"out there"); 






								function greetMeArray(){
									return arguments[0] + " " + this.name +" "+ arguments[1];
								}

								greetMeArray.call(person1,["Hello","!!!"]);

								console.log('.........greetMeArray.call(person1,["Hello","!!!"]);..........');
								console.log(greetMeArray.call(person1,["Hello","!!!"]));
								console.log('.........greetMeArray.call(person1,["Hello","!!!"]);..........');

								//and then you want to execute that method in the conext of some other object as below:


				     	

				     	// apply(obj_to_call_method) = allows to execute method on difined method that preceds it as example 

				     			var set = "this is a set game";
				     			var type = Object.prototype.toString.call(set);
				     			//explanation exectue Object toString on set variable (important both have to support this method);

				     			//in this case that will give you type of String 

				     			// obj
				     			console.log('Object.prototype.toString.call(set):  '+ Object.prototype.toString.call(set));


				     		//2 apply() it will take array as argument (but it is optiona paremeter you can leave empty)

				     			var setArray = ["this is a set game"];
				     			//explanation exectue Object toString on set variable (important both have to support this method);

				     			//in this case that will give you type of Array
				     			console.log('\n\n\nObject.prototype.toString.apply(array_object):  '+ Object.prototype.toString.apply(setArray));



				     	/*
				     	

							Object created from Constructor method  new Custom()

							1 new Custom()
				     	*/	


				     	function Cat() {
				     		//all properties and method are defined in prototope
				     	}
				     	//attached method to the prototype Cat class so it could be used in Cat instances 
				     	//Cat.prototype.name;
				     	Cat.prototype.likes = function(famousOfWhat){ return this.name+ "is famous of " + famousOfWhat };

				     	var cat = new Cat();
				     	cat.name = "Filemon";

				     	console.log(cat);
				     	console.log(cat.likes("scratching"));


				     	// 2 by Object.create(); we will achive the same reuslt below;


				     	//this object is going to be chained to objet.prototype for the reksio object;
				     	var dog = {
				     		likes: function(famousOfWhat){
				     			return this.name+ "is famous of " + famousOfWhat;
				     			}
				     	};
				     	var reksio = Object.create(dog); //it means create an object with prototype properities and method from  dog objet injected;
				     	reksio.name = "reksio";


				     	console.log(reksio);
				     	console.log(reksio.likes("digging"));

				     	//now who is contructor of above 

				     	console.log('cat.constructor.name');
				     	console.log(cat.constructor.name); //returns Cat
				     	console.log('cat.constructor.name');


				     	console.log('dog.constructor.name');
				     	console.log(dog.constructor.name); //returns Object; 
				     	console.log('dog.constructor.name');