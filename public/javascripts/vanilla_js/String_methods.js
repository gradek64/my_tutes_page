	/*
				Sample most used String methods and coversions;
			*/
			/*
			
					all String method;

					
						----------changing to lower or upper case----------

						1 String.toLowerCase()   = coverts all characters to lowercase 

						2 String.toUpperCase()  = coverts all characters to Uppercase



						----------finding index of character----------

						3 String.indexOf(word)  = find FIRST ocurance of word returning its INDEX
							
						3a String.search(word); = find FIRST ocurance of word returning its INDEX

						4 String.lastIndexOf(word) = find LAST ocurance of word returning its INDEX



						
						----------Extracting,slicing -------------

						5 String.slice(index-optional,end-index-optional) = will slice your text according to start-index, end-index

						6 String.substring(index-optional,end-index-optional); will slice your text according to start-index,end-index

						6a String.substr(start-inedex,length); will slice your text according to start-index,length-to-extract

						6b String.trim()   = removes white space at the beginnig and end of the string if any;




						----------Replace part of the text based on text or Regex----------

						7 String.replace("original world","replacing world");

						7a String.replace(/regex/,"replacing world",);\


						----------concatenate text----------

						8 String.concat(string2);

						8a same as "string1" + "string2";




						----------converting to Array----------

						9 String.split(",") = Convert string to Array based on coma seperator;

						9a String.split(/[ ,-]+/); Convert string to Array based on regex expresion; (you can specify multiple seperators with regex);

						10 eval(string_array) =  Convert string to Array if you have right array-like string "['array',"like","string"]";


						-------------- converting to Object -------------
						
						10 str= "{"gaga:":"gaga","gag":2}""

						JSON.parse(str); 			

						//retuns {gaga:"gaga",gag:2};  it always creates javascript object even if it was JSON object
			*/








			var myString = "this is a simple String that has Capital and LowerCase leters in it";




			/*
						1 String.toLowerCase()

						it will find all Capital letters and convert to lower case 
			*/

			console.log('\n\n\n.........String.toLowerCase().............');
			console.log(myString.toLowerCase());
			console.log('................String.toLowerCase()...............\n\n\n');

			/*
						2 String.toUpperCase()

						it will find all lowercase  letters and convert to CAPITAL 
			*/

			console.log('\n\n\n.........String.toLowerCase().............');
			console.log(myString.toUpperCase());
			console.log('................String.toLowerCase()...............\n\n\n');


			/*
						3 String.indexOf(word)
						3a String.search(word);

						it will find ------First------ Occurance of index of the character
			*/
			console.log('\n\n\n.........String.indexOf().............');
			console.log(myString.indexOf('a'));
			console.log('................String.indexOf()...............\n\n\n');
			console.log('\n\n\n.........String.search().............');
			console.log(myString.search('a'));
			console.log('................String.search()...............\n\n\n');

			/*
						4 String.lastIndexOf(word)

						it will find ------Last------ Occurance of index of the character
			*/
			console.log('\n\n\n.........String.lastIndexOf().............');
			console.log(myString.lastIndexOf('a'));
			console.log('................String.lastIndexOf()...............\n\n\n');


			/*
						4 String.lastIndexOf(word)

						it will find ------Last------ Occurance of index of the character
			*/
			console.log('\n\n\n.........String.lastIndexOf().............');
			console.log(myString.lastIndexOf('a'));
			console.log('................String.lastIndexOf()...............\n\n\n');


			/*
						5 String.slice(index-optional,end-index-optional)

						it will slice your text starting from (start-index, end-endex ) both optional
						//if not provided it will return the same text as orignal


						If a parameter is negative, the position is counted from the end of the string.
						str.slice(-12, -6);


						5 String.slice(index-optional,end-index-optional)

						substring() is similar to slice().

						The difference is that substring() cannot accept negative indexes.


			*/
			console.log('\n\n\n.........String.slice().............');
			console.log(myString.slice());
			console.log('................String.slice()n\n\n');

			console.log('\n\n\n.........String.substring().............');
			console.log(myString.substring());
			console.log('................String.substring()n\n\n');


			/*
						6 String.substr(start-inedex,length);

						it will extract a charctersf from start-index and to the length specified in second parameter;
			*/
			console.log('\n\n\n.........String.substr(3,5).............');
			console.log(myString.substr(3,5));
			console.log('................String.substr(3,5)...............\n\n\n');


			/*
						6a tr.trim()

						it will remove white space from both ends for hte string;
			*/


			var str = "       Hello World!        ";
			console.log('\n\n\n.........String.substr(3,5).............');
			console.log(str.trim());
			console.log('\n\n\n.........String.substr(3,5).............');



			/*
						7 String.replace("original world","replacing world");

						it will replace original with replacing world


						7a String.replace(/regex/,"replacing world",);

						it will find regex match and then replace the result;

			*/
			console.log('\n\n\n.........String.replace(/[A-Z]+/,"replacing world").............');
			console.log(myString.replace(/[A-Z]+/,"replacing world"));
			console.log('................String.replace(/[A-Z]+/,"replacing world")...............\n\n\n');


			/*
						8 String.concat(string2);

						it will extract a charctersf from start-index and to the length specified in second parameter;

						concat(string2)  can be used insted of "string1" + "string2";


			*/
			var string2 = "this is string to be added to to string1";
			console.log('\n\n\n.........String.concat(string2).............');
			console.log(myString.concat(string2));
			console.log('................String.concat(string2)...............\n\n\n');



			/*
						9 Convert string to Array String.split(",");

						it will construct an Array from the String based on split (charackter) coma or any other; 


						9a Convert string to Array String.split(/[ ,-]+/); based on regex expresion; (you can specify multiple with regex);

						it will construct an Array from the String based on split (charackter) coma or any other; 
			*/
			var myString2 = "this is my reggae from Sahara";
			//split based on [white space];
			


			console.log('\n\n\n.........eval("["array like string"]"").............');
			console.log(myString2.split(" ")); /*construct array based on white space*/
			console.log('\n\n\n.........eval("["array like string"]"").............');


			var myString3 = 'this is, my-project, and is so cool';
			//convert that string into array by spliting text based on white space, comas, and hyphons

			var myArrayRegexSplit = myString3.split(/[ ,-]/).filter(Boolean); //and that is that super cool !
			//filter on boolean will get rid of any white spaces selections 			


			console.log('\n\n\n.........eval("["array like string"]"").............');
			console.log(myString3.split(/[ ,-]/).filter(Boolean)); /*construct array based on white space*/
			console.log('\n\n\n.........eval("["array like string"]"").............');


			/*
						10 Convert string to Array with eval(string_array)

						once you have string with correct syntax  var array_like_string = "["array","like","stucture","string"]"

						then just use eval(array_like_string);

			*/
			var array_like_string = '["array","like","stucture","string"]';

			console.log('["array","like","stucture","string"]');
			console.log(eval(array_like_string));
			console.log('["array","like","stucture","string"]');