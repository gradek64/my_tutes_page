
		

				/*


						----------------Array methods()----------------------


						myArray.sort() = by default in will only sort numeric values , it wont sort string alphabetically;


						2 fruits.shift() = removes first elemnet from Array

						3 fruits.push("Grapes");  = inserts element to end of Array;

						4 fruits.unshift("Lemon")  === adds element to begining of the Array;

						5 fruits.splice(fruits.length-1, 1);  === deletes last element of Array

						5a fruits.splice([any_number_array]], [how_many_to_remove]]);  === deletes elelment[index],how_many_after_that_index

						6 fruit.slice(index_from_where_to_slice);  === making new array from other array');

						7 fruits.pop(); === removes last elemnet from Array

						8 arr1.concat(arr2,arr3)  === Concatenates (joins) arr1 and arr2,arr3');

						9 ff.filter( function(word){ return word.length>4} ); == returs values that are greated that 4 characters



						------------convert Array to string------------


						1 arr.toString();  = converts array to String with comma seperated values;

						2 arr.join("*") = creates String from Array seperated with * sign;

						2a arr.toString() = arr.join(",")  //same outcome;

						------------convert Array-like objec to regular javascirp Array ------------
			

								quite a few object in Dom are "array-like" that means they are act as array but not all arrey methods can be run on them (especially Array.map() loop)

								Array-like object are for example
														NodeList = document.getElementsByTagName(), document.getElementsByClassName, document.querySelectorAll('css selector');
														HTML collections = window.getComputedStyle(document.documentElement, '')

								//to convert them in regular array you need to run call method on Array.prototype.slice

								Array.prototype.slice.call(Node_list);










				*/


















		console.log('......::...........::............:: Array methods() ::.........::...........');
		var arraySort = ['greg','ada','philip'];

		//sort always sort based on alphanumeric values , so even if you have numbers it will sort based of bit size

		arraySort.sort();

		//console.log(arraySort);


		//numbers ... it is wrong sorting since sort method done see the values as numbers but strings 

		var arraySortNumbers = [6,5,1,9];
								//

		//console.log(arraySortNumbers.sort());  // ---wrong !




		//numbers sorting based on numbers not string;


		function sortfunction(a, b){
				
					//there are 3 options only

								/* returns 
			
										1   (a>b)
										0   (a=b)
									   -1 	(a<b)

								*/
								
								

				
								console.log('a');
								console.log(a);
								console.log('b');
								console.log(b);
								

								console.log(a-b);
					//explanation for givez numbers 

					/*
							// 1 round
							compare(6-5);     // (a>b) returns 1, a is greater than b  (In other words, b will come first.) 5,6   [(5,6),1,9]
							compare(6-1);  // (a>b) = 1returns 5, a is greater than b  (In other words, b will come first.)  1,6     [5,(1,6),9]
							compare(6-9);  // returns -3, a is less than b  (In other words, a will come first.)   6,9      [5,1,(6,9)]
							
							//2 round
							compare(5-1);  // returns 4, a is greater than b  (In other words, b will come first.)  1,5     [(1,5),6,9]
							compare(5-9);  // returns -4, a is greater than b  (In other words, b will come first.)  5,9    [1,(5),6,(9)]
							
							//3 round
							compare(1-9);  // returns -8, a is greater than b  (In other words, b will come first.)  1,9    [(1),5,6,(9)]

								(	IN BRACKETS WE HAVE NUMBERS THAT ARE BEING COMPARED AND WHAT ORDER THEY SORT);

					*/

    			 return (b-a);
    			 //causes an array to be sorted numerically and ascending
    			 //to order numbers you need to reverse order return (b-a)
		}
		arraySortNumbers.sort(sortfunction);

		console.log(arraySortNumbers);






					/*
							Sorting an array of objects by a specified property

					*/

		var employees = [
				    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
				    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
				    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
		];

		//sort employees by salary 

		// sort by salary
		/*employees.sort(function (x, y) {
		    return x.salary - y.salary;
		});*/

		//sort by date 
		employees.sort(function (x, y) {
		    var a = new Date(x.hireDate),
		        b = new Date(y.hireDate);

		        console.log(a);
		    return a - b;
		});

		// display the employee list
		 console.log(employees);



		var animaux = ['zèbre', 'abeille', 'écureuil', 'chat'];
				 animaux.sort(function (a, b) {
		         return a.localeCompare(b);
		});
		console.log(animaux);

		var mixedCaseAnimals=["ant", "bee", "Cat", "dog", "Elephant"];


		//ascending order 
		mixedCaseAnimals.sort(function (a, b) {
		    var x = a.toUpperCase(),
		        y = b.toUpperCase();

		    if (x > y) { 
		        return 1; //y will be before x;
		    }
		    if (x < y) { 
		        return -1; //x will be before y;
		    }

		    //default x = y ;
		    return 0;
		});

		//descending order 
		mixedCaseAnimals.sort(function (a, b) {
		    var x = a.toUpperCase(),
		        y = b.toUpperCase();

		    if (x > y) { 
		        return -1; //x will be before y
		    }
		    if (x < y) { 
		        return 1; //y will be before x 
		    }

		    //default x = y ;
		    return 0;
		});

		console.log(mixedCaseAnimals); 


		//array methods 

		var fruits = ["Banana", "Orange", "Apple", "Mango"];

		/*


				fruits.shift() 

				removes first elemnet from Array


		*/



		 
		console.log(fruits);
		console.log(' fruits.shift(); === removes first elemnet from Array');
		fruits.shift();  
		console.log(fruits);  



		/*


				1 fruits.push(element) 

				adding element to the end 


		*/



		//adding element to the end 
		console.log(' fruits.push("Grapes"); === adds element to end of Array');
		fruits.push("Grapes");  
		console.log(fruits); 


		/*


				2 fruits.unshift("Lemon"); 

				adding element to the begining 


		*/

		//adding element to the begining 
		console.log(' fruits.unshift("Lemon")  === adds element to begining of the Array');
		fruits.unshift("Lemon");   
		console.log(fruits);  

		/*


				3 fruits.splice(fruits.length-1, 1) 

				deletes last element of Array 


		*/


	

		console.log(' fruits.splice(fruits.length-1, 1);  === deletes last element of Array');
		fruits.splice(fruits.length-1, 1)
		console.log(fruits);

		/*


				4 fruits.pop();

				deletes last element of Array 


		*/

		console.log('fruits.pop(); === removes last elemnet from Array');
		fruits.pop();  
		console.log(fruits);


		/*


				5 myGirls.concat(myBoys,arr3);

				Concatenates (joins) myGirls and myBoys,arr3


		*/


		console.log(' myGirls.concat(myBoys,arr3)  === Concatenates (joins) myGirls and myBoys,arr3');
		var myGirls = ["Cecilie", "Lone"];
		var myBoys = ["Emil", "Tobias","Linus"];
		var arr3 = ["Robin", "Morgan"];
		var myChildren = myGirls.concat(myBoys,arr3);     // Concatenates (joins) myGirls and myBoys,arr3
		console.log(myChildren);

		/*


				fruit.slice(optional_index);

				6 making new array from other array


		*/


		console.log(' fruit.slice(3);  === making new array from other array');
		var fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
		var citrus = fruit.slice(3);
		console.log(fruit);





		//Array string methods;

		var fruits = ["Banana", "Orange", "Apple", "Mango"];
		console.log(' fruits.toString() --convert to string')
		console.log(fruits.toString());


		var fruits = ["Banana", "Orange", "Apple", "Mango"];
		console.log(' fruits.join(" * ") --convert to string')
		var join = fruits.join(" * ");
		console.log(join);
		console.log(typeof join);
	

		//best way of looping through array 

		//1 map

		//task 1: loop throgh array and remove non-numericn (non-integer characters) in the most efficient way;

		var my_araray = ["greg","mark",1,5,{"greg":"greg"}];
		console.log('::........::...........::....... initial array ......::.......::.......')
		console.log(my_araray)
		console.log('::........::...........::....... initial array ......::.......::.......')


				//loop first 
				var initialLength = my_araray.length;

				while(initialLength--){
						if(typeof my_araray[initialLength] !== "string"){
							my_araray.splice(initialLength,1);
						}
						console.log();
						if(initialLength==0) console.log(my_araray);

				};

/*
				var removeNonString = my_araray.map(function(item,key){
						if(typeof item !== "string"){
							my_araray.splice(key,1);
						}
					if(key==initialLength) return my_araray;
				});

				console.log(removeNonString);*/




		console.log('......::...........::............:: Array methods() ::.........::...........');