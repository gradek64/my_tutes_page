	var myArray = ["me",1982,"july",24];



						/*
								some facts about array;

								Array inherits from Object therefore if you check 

								console.log(type of somArray); //==> object

								that means it inherits all object properties and methods;


								in Dom Structure there are also Array-like Array so they are not pure js Arrays but then could be converted to 
								regular array by object methods below check  


						*/



						/* content

						-------------check if array is array------------------

						1 Array.isArray(myArray)
						2 myArray.constructor.name === "Array"
						3 Object.prototype.toString.call(myArray) === "[object Array]"
						4 (myArray instance of Array)


						-------------looping throgh array content------------------

						1 for (var index in array)
						2	while method with break;
						2a	while method with assignment 
						3	array.map(funcion(key,item){})
						4	for(var i=0;i>array.length;i++)




						*/

//------------------------------------------------ ways of checking if array is array ---------------------------------------------------------

				
						/*  ....::... 1 ....::....

					Array.isArray(myArray)

						*/

						var isArray  = Array.isArray(myArray);

						console.log("Array.isArray(myArray) happend to be " + Array.isArray(myArray));

						/*  ....::... 2 ....::....



					myArray.constructor.name


							
								you can also try by its constuctor name 
	
						*/

						var constructorName = myArray.constructor.name;

						console.log('myArray.constructor.name  happend to be ' + myArray.constructor.name);

						/*  ....::... 3 ....::....



					Object.prototype.toString.call(myArray);



							by Object.protototyp.toString() method that give you [object object] object type

							and then execute toString on array object so whole syntax looks like below:


						
						*/

						var arrayCallCheck = Object.prototype.toString.call(myArray);

						console.log('Object.prototype.toString.call(myArray) happend to be '+ Object.prototype.toString.call(myArray));


						/*
							....::... 4 ....::....   if the array was initiated in the same window you can check also by 

					myArray instanceof Array
		
						*/
						var instanceOf = myArray instanceof Array; 
						console.log('myArray instanceof Array happend to be ')
						console.log(myArray instanceof Array);
 



 //------------------------------------------------ Array methods and loops;  ---------------------------------------------------------






 							/*
								popular handy way of looping array 
				


								1 for (var i in array) 
 							*/




		 							Array.prototype.foo = "foo!";
							 var array = ['aaa', 'bbb', 'ccc'];

							 for (var i in array) {
							   			console.log('.....array[i].....');
							   			console.log(array[i]);
									    //this will print a,b,c and foo! 
							 }

							 for (var i in array) {
							 	if (array.hasOwnProperty('prop')) { //way of making sure we loop only throuh array own properties;
							   			console.log(array[i]);
								}
							}


							/*
									any loop can be beak in any point by 'break' keyword;

								2	while method with break;

							*/


							console.log("breaking loop at second item if(i==2) break;.............");
							var len = array.length;
							while(len--){
								if(len==2) break;
								console.log('len: '+len+"arrayP "+array[len]);
							}
							console.log("breaking loop at second item if(i==2) break;.............");





							/*
									any loop can be beak in any point by 'break' keyword;

								2a	while method with assigment;

							*/


							var i=0, item, items = ['one','two','three'];



									/*
											while loop assigment;

									*/
												 /*even item = "one" so it string but it is correct ! so javascript assumes is true , only when it gets to 
												item = items[3] so item = undefined then it says is wrong so sets it to false,
												bizzare but it is been commonly used
																										;*/
							while( item = items[i++]  ){         
								console.log('..........item.......');
							    console.log(items[i]);
							};


							/*
									

								3	array.map(funcion(key,item){})

							*/


							array.map( function(item,index) {
							     console.log('map loop');
							     console.log(item);
							     console.log(index);
							});



							/*
									

								4	for(loop)

							*/

							for (i=0;i<array.length;i++) {
							 	if (array.hasOwnProperty('prop')) { //way of making sure we loop only throuh array own properties;
							   			console.log(array[i]);
								};
							};
