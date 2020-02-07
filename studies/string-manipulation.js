// String Manipulation

// With Operators

// When working with JavaScript strings sometimes need you to join two or more 
// strings together into a single string. Joining multiple strings together
// is known as concatenation.
// The concatenation operator:  (+) a single unary operator that concatenates two or
// more string values together and return another string which is the union of the two 
// strings

// Side note, it is helpful to think of strings to have similar properties as Arrays
// they are 0 indexed, and share some similar methods and properties. 

let myString = 'Hello ';
let myString2 = 'world!';
let myString3 = myString + myString2; 
console.log(myString3);  // prints 'Hello World!'

// With String Methods

// Primitive values, like 'Hey there!' cannot have properties or methods (because they're not objects)
// But with JavaScript, methods and properties are also available to primitive values
// because JavaScript treats primitive values as objects when executing methods and properties

// 1.) String Manipulation - We can also concat two strings together with the += operator
// While this is a math expression it also works with strings.
// To show an example of how it works with math we can do x += y, this boils down to x = x + y
// we can also do it with strings!
let myString100 = myString += myString2;
console.log(myString100); // returns Hello world! 

// 2.) Finding a String in a String
// the indexOf() method returns the index (the position of) the first occurence of a specified 
// test in a string
console.log(myString3.indexOf('world!')); // returns 6, as world begins at the 6th position in the string

// 3.) Extracting String Parts 
//     The slice() method extracts part of a string and returns the extracted part in a new string
let myString4 = myString3.slice(6, 12);
console.log(myString4); // returns world!

// 4.) The substr() Method
// The substr() is similar to slice()
// The difference is that the second parameter specifies the length of the extracted part
let myString5 = myString3.slice(0, 6);
console.log(myString5); // returns Hello

// 5.) The replace() method - replaces a specified value with another in a string
let myString6 = myString3.replace("world!", 'human!');
console.log(myString6); // returns Hello human!

// 6.) Converting to Upper and Lower Case
// a string is converted to uppercase with toUpperCase();
let myString7 = myString3.toUpperCase();
console.log(myString7); // returns HELLO WORLD!

// a string is converted to lowercase with toLowerCase();
let myString8 = myString7.toLowerCase();
console.log(myString8); // returns hello world!

// 7.) The concat() method joins two or more strings, it can be used instead of the plus operator
let myString9 = myString7.concat(' ' + myString8);
console.log(myString9); // returns HELLO WORLD! hello world! 
// notice we used the plus operator to add an additional space in our new string, 
// using both methods in one simple line of code. 

// 8.) Extracting String Characters
// the charAt() method returns a character at a specified index (position) in a string:
var myString10 = myString9.charAt(13);
console.log(myString10); // returns 'h' as it is at the 13th position

// 9.) Converting a string into an Array!
// a string can be converted into an array with the split() method
// it should be noted, if you want to split it into individually spaced characters
// you will need to add two quotes to seperate the array, there are different ways to split
var myString11 = myString3.split('');
console.log(myString11); // returns [ 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!' ]

var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe