// Datatypes
// Number
// String
// Boolean
// Array
// Object
// Function
// undefined
// null
// NaN
// Infinity and -Infinity (Google them if you don’t know!)
// What is the difference between primitive/simple and complex data types?
// Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?

//Data types basically specify what kind of data can be stored and manipulated within a program

// There are six basic data types in JavaScript which can be divided into three main categories: 
// Primitive, Reference, and Special data types. 
// String, Number, and Boolean are primitive Data Types
// Object, Array, and Function (which are all types of objects) are Reference data types
// Where as Undefined and Null are special data types. 

// Primitive data types can only hold one value at a time, whereas reference data types
// can hold collections of values and more complex entities. 

// We'll go over some examples below

// 1.) The Number Data Type - the number data type is used to represent positive or negative numbers
let x = 25;
// x now has a value of 25
let y = 35;
// y now has a number of 35

// 2.) The String Data Type - the string data type is used to represent textual data,
// Strings are created using isngle or double quotes surrounding one or more characters.
let myString = "Hello, I'm a string!"

// 3.) The Boolean Data Type - The Boolean data type can hold only two values: true or false
// it is typically used to store values like yes (true) or no (false)
// You can imagine them as an on or off switch as well
// Example: 
let isStudying = true;

if (isStudying){
    console.log('Study hard!');
} 
// logs to the console Study hard! - since our if statement was resolved to true, the program executed. 

// 4.) The Array Data Type - An array is a type of object used for storing multiple values in
// a single variable. Each value (also called an element) in an array has a numeric position, 
// known as an index, and it may contain data of any data type! such as numbers, strings, booleans,
// functions, objects, and even other arrays. The index starts from 0.
// Example:
let myArray = [1, 'two', true, [1, 2, 3], {name: 'Sebastian'}];
// We can add elements to our Array via the unshift() and push() method
// unshift() adds an element to the 0 index of the Array and push adds it to the end of the Array
myArray.push('last position!');
console.log(myArray); // logs [ 1, 'two', true, [1, 2, 3], {name: 'Sebastian'}, 'last position']


// 5.) The Object Data Type - The object is a complex data type that allows you to store collections
// of data. An object contains properties, defined as a key-value pair. A property key (name) is always a string
// but the value can be any data type, like strings, numbers, booleans, or complex data types like arrays, function
// and other objects. 
// Example: 
let myObject = {
    name: 'Sebastian',
    age: 32,
    student: true
};

// we can add new key value pairs using the dot method, we can also update existing elements using the dot method
// updating existing elements requires you reference the already existing key
myObject.tired = 'yes';
console.log(myObject); // logs { name: 'Sebastian', age: 32, student: true, tired: 'yes' }

// 6.) The Function Data Type - the function is a callable object that executes a block of code. 
// Since functions are objects, it is possible to assign them to variables. Functions can be used at any place where
// any other value can be used. Functions can be stored in variables, objects, and arrays. Functions can be passed as arguments 
// to other functions, and functions can be returned from functions. 

function createGreeting(name){
    return "Hello, " + name;
}
function displayGreeting(greetingFunction, userName){
    return greetingFunction(userName);
}
 
var result = displayGreeting(createGreeting, "Sebastian");
console.log(result); // Output: Hello, Sebastian

// 7.) The Undefined Data Type - The undefined data type can only have one value - undefined.
// If a variable has been declared, but has not been assigned a value, it will return undefined
// Example: 

var a;
var b = 'Hello World!';

console.log(a); // output: undefined
console.log(b); // output: Hello World!

// 8.) The Null Data Type - The is another special data type that can have only one value. 
// The null value. A null value means that there is no value. It isn't equivelant to 
// an empty string or 0, it simply means nothing. A variable can be emptied of its current contents 
// by reassigning it to the null value
// Example: 
var c = 'Hello World!';
console.log(c); // output: Hello World!
c = null;
console.log(c); // output: null 

// 9.) The NaN Data Type - NaN simply means Not-A-Number. It is a result of an invalid
// or an undefined mathematical operation, like taking the square root of -1 or dividing 0 by 0
// Example: 
console.log("I'm a string" / 2); // output: NaN

// 10.) Infinity & Negative Infinity - Infinity represents the mathematical infinity, which
// is greater than any number. Infinity is displaced when a number exceeds the upper limit of 
// the floating point numbers. which is  1.797693134862315E+308, and negative is  -1.797693134862315E+308.


// 11.) What is the difference between primitive/simple and complex data types?
/* JavaScript provides different data types to hold different types of values.
There are two types of data types in JavaScript: Primitive & Non-Primitive

Data types that are known as primitive values in JavaScript are numbers, strings, booleans
null, and undefined. 

Objects such as functions and arrays are referred to as non-primitive values.

The fundamental difference between primitives and non primitives is that primitives are 
immutable and non-primitives are mutable

Primitives are known as being immutable data types because there is no way to change a primtive value
once it gets created
*/
// Example:

var string = 'this is a string.';
string[1] = 'H'
console.log(string); // output: this is a string.

// Primitives are compared by value. Two values are strictly equal if they have the same value
// Example:
var number1 = 5;
var number2 = 5;
number1 === number2 // output: true

// Non-primitive values are mutable data types. The value of an object can be changed
// after it gets created. 
// Example:
var arr = ['one', 'two', 'three', 'four', 'five'];
arr[1] = 'TWO';
console.log(arr); // output [ 'one', 'TWO', 'three', 'four', 'five' ]

// Objects are not compared by value. This means that if two objects have the same 
// properties and values, they are not strictly equal. The same goes for Arrays
// Even if they have the same elements in the same order, they're not strictly equal
// Example:

var obj1 = {name: 'Sebastian'};
var obj2 = {name: 'Sebastian'};
console.log(obj1 === obj2); // output, false

// But what if we made a 3rd object that equals obj1 and then compare them? 
var obj3 = obj1;
console.log(obj3 === obj1); // output, true
// the reason this outputs as true is that obj 3 is copying it by reference, it is
// a variable that is pointing to the same object in memory as obj1
