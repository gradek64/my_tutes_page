
								/*Summary*/

								/*

									1) let instead of var

									2)  const insted of var ( they can not be reassign )

									3) ...zValue  SPREAD OPERATOR

										in arrays: 
												let arrayValue = [1,2,3]
												let secondArray [...arrayValue,4,5,6];

										in functions 
												let setter = function(a,b,c){
														console.log(a,b,c);
												}
												setter(...arrayValue);

										in function arguments 
												let setter = function(...arg){
														console.log(arg);
												}
												setter(1,23,greg); //pass arguments as many as you want to ...arg

									4) backstick  `I am string and I am adding variable by ${varName}`

									5) DISTRACTURING ASSIGNMENT

											in arrays     let myArray = [2,3,4];
														  let [first,second] = myArray //firsrt = myArray[0] ; second=myArray[1]
											with SPREAD OPERATOR 

														let hello = [100,200,300,400];
														let [kk,...rr] = hello; //creates = kk=100; rr= [200,300,400]

											in Objects    let myObject = {myProp1:'set',myProp2:45};
														  let {myProp1,myProp2} = myObject // myProp1= myObject.myProp1; myProp2= myObject.myProp2
														  or 
														  ( {myProp1,myProp2} = myObject ) //to not confuse names if you happened to have myProp1,myProp2 assigned already;


									6) ARROW FUNCTIONS  = they dont create won scope , they will always inherit scope from they been created from;
											

											RETURN 
											original :   function addTen(element) { return element + 10; };

														 let addTen = element => element+10  		//no return syntax can be only used on one line;remove parenthesis if there is one argument passed
												ES6:     let addTen = (element) => element+10   	//no return syntax can be only used on one line;

														 let addTen = element => { return elements+20 } 
														 let adTen = (elements) => { return elements+30 }

									7) import and export 

											export: 			export const students = ['Greg','Meggi'];     
																export const total = 34;

											import: 			import { students,total } from "./students.js";

									7a) import and export default 


											export 				export default const totals = 15;   
																export default totals; 					//that syntax doesnt need {} curly braces

											import 				import totals from './file.js'			//that syntax doesnt need {} curly braces




									8) new syntax for Class 
									
												Class Person() {  
													constructor(name,age){
														this.age = age;
														this.name = name;
													}
												}
												Class Student extends Person(){
													 constructor(name,age){
														super(name,age)
													 }
												}
												let student = new Student('Mike',24);

												











								*/






/* let annotation for variables*/


let ab = "hello";
console.log(ab);
//block scoping in curly braces (new feature);


{
	let a = "hello from block scoping";
	console.log(a);
}


/* const annotation for global variables  (those are only read-only)*/

const array = [1,2,3] ; 
 // U can manipulate consts as this array below;
array.push(4);
console.log(array);

//but you can not redifine ( or reassign ) constant as : array = [5] //throws error

/*
				template literals;
*/

let a = "hello";
let b = "World";
let c = a + " " + b;
console.log(c);


//this can be achived with back tics;
let d = `hello ${b}`;
let e = `${a} World`;

console.log(d);
console.log(e);


	/*
			Array manipulation with a SPREAD OPERATOR

	*/


let first = [1,2,3,5];
let second = [...first,6,8,9]; //..first includes this array inside another array; (3 dot array injection) = spread opoerator ;

console.log(second);


	/*
			SPREAD OPERATOR in functions;

	*/

	function print(a,b,c){
		console.log(`spread operator in function ${a},${b},${c}`);
	}

	let k = [1,2,3];
	//pass spread operator as function argument;
	print(...k);


	/*
			SPREAD OPERATOR in functions as arugument;

	*/

	function print(...l){
		console.log(`spread operator in function argument ${l}`);
	}

	//pass spread operator as function argument;
	print([1,2,3]);

	/*
				DISTRACTURING ASSIGNMENT 
		
	*/

		let myArray = [2,5,6,7];
		let tt = myArray[0];
		let yy = myArray[1];

		console.log(tt,yy);

	//with ES6 we can simplify the process by;
	
		let [fA,sA] = myArray //first argument and the second argument will be assign to variables fA and sA; just like in above example;
		//fa = myArray[0] , sA = myArray[1] if there are more variable they will take consecutive places;
		console.log(fA,sA);

	/*
				DISTRACTURING ASSIGNMENT with SPREAD OPPERATOR
		
	*/

	let hello = [100,200,300,400];
	let [kk,...rr] = hello;

	console.log(kk,rr); //rr is assign the the all rest arguments except for the first one;

	/*
				DISTRACTURING ASSIGNMENT with Objects
		
	*/


		let wizzard = {magical:true,power:10};
		//assign destructing assigment; the names for varialbles has to match with those in object;
		let {magical,power} = wizzard;

		console.log(magical,power); //means magical =  wizzard.magical and  power = wizzard.power

	/*
				DISTRACTURING ASSIGNMENT with Objects as variables
		
	*/

	//lets suppose you have 2 variables called as bellow;

	let car = 'BMW';
	let model = 5;

	//and then you will have those in object as well 
	let cars = {car:"Fiat",model:5};
	console.log(car,model); //that console the BMW 5 so the first value not from the object;

	//if you want to grab values from object insted you need to wrap them in function as below;
	({car,model} = cars);
	console.log(car,model); //that console the Fiat 5;


	/*
				ARROW FUNCTIONS  they anomynos (not assign to variable);

								function() {} == ()=>{}

								function(arg) { return arg + 5 } == (arg) => { arg + 5} //no need for return on one line;
		
	*/

	//function with the name identifier 
	function callMe(){
		console.log('function called');
	}
	callMe(); 
	//the same function can be experssed as anomynos in Arrow function assign to the variable;

	let caller = () => {
		console.log('caller');
	};
	caller();

	/*
				ARROW FUNCTIONS features:

						1) they dont bind keyword this to their scope , they will use global scope 
		
	*/

	(function(){
		/*let this = {};*/
		// this.k = 34;
	})(window);
		console.log(this);

	/*
				ARROW FUNCTIONS with ES6 syntax
		
	*/

	 //not ES6 methods
	 var numbers = [2,3,4];

	 function addTen(element) { 
	 		return element + 10;
	 };
	 numbers = numbers.map(addTen);
	 console.log(numbers);

	 	 //ES6 methods
	 var numbersES6 = [2,3,4];
	 numbersES6 = numbersES6.map( elements => elements+10 );	//no return syntax can be only used on one line;
	 console.log(numbersES6);
	 numbersES6 = numbersES6.map( (elements) => elements+15 ); //no return syntax can be only used on one line;	
	 console.log(numbersES6);
	 numbersES6 = numbersES6.map( elements => { return elements+20 } );	
	 console.log(numbersES6);
	 numbersES6 = numbersES6.map( (elements) => { return elements+30 } );	
	 console.log(numbersES6);

	 /*
				ARROW FUNCTIONS with filter and find array methods;
		
	*/

		//filter 
		var sets = [3,4,5,6];
		function findAbove(set){
			return set >3
		};
		//filter 
		var resultFilter = sets.filter(findAbove);
		console.log(resultFilter); //logs [4,5,6]
		//find
		var resultFind = sets.find(findAbove);
		console.log(resultFind); //logs 4 (only one value)

		/*
				ES6 way
		*/

		let setsES6 = [3,4,5,6];
		//filter
		let resultFilterES6 = setsES6.filter( set => set>3 );
		console.log(resultFilterES6);
		//find 
		let resultFindES6 = setsES6.find( set => set>3 );
		console.log(resultFindES6);


		/*
					INTRODUCING MODULES SO 
								export and import keywords											
		*/

		import { students,total } from "./students.js";
		console.log(`import const students from student.js file is: ${students} of all ${total}`);

		/*
					INTRODUCING MODULES SO 
								export and import keywords with METHODS									
		*/


		import {add,multiply} from "./calculator.js";
		//U can use thoe methods here in these file as below;
		console.log(add(3,5));
		console.log(multiply(2,2));

		/*
					INTRODUCING MODULES 
								export default and import keywords 

		*/


		import totals from "./_default_value.js";  //IMPORTANT export defalt value dont need curly braces in import;
		console.log(totals);


		/*
					ES6 classes

		*/

		import Person from './class_person.js'

		class Student extends Person {
			constructor(name,height){
				super(name,height);
			}

			whatImDoing(){
				console.log(`${this.name} is studing`);
			}

		};

		//Student class is extending a Person class so it inherits from it all methods and properties;
		let Mike = new Student('Mike',1.65)
		Mike.whatImDoing();










 
