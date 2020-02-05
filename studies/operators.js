
//1.) Assignment operators - assignment operator assigns a value to its left operand based on the value of ts right
// Assignment operators, assign (or re-assign) values to a variable. While there
// are quite a few variations of assignment operators, they all build off the basic
// assignment operator

/*
Name:                       Shorthand Operator  Meaning
Assignment                  	x = y       	x = y
Addition assignment         	x += y      	x = x + y
Subtraction assignment      	x -= y      	x = x - y
Multiplication assignment   	x *= y      	x = x * y
Division assignment         	x /= y      	x = x / y
Remainder assignment        	x %= y      	x = x % y
Exponentiation assignment   	x **= y     	x = x ** y
Left shift assignment	        x <<= y	        x = x << y
Right shift assignment	        x >>= y     	x = x >> y
Unsigned right shift assignment	x >>>= y    	x = x >>> y
Bitwise AND assignment      	x &= y      	x = x & y
Bitwise XOR assignment      	x ^= y      	x = x ^ y
Bitwise OR assignment           x |= y      	x = x | y
*/

//2.) Arithmetic operators - take numerical values (either literals or variables) as their
// operands and return a single numerical value. The standard arithmetic operators are 
// addition (+), subtraction (-), multiplication (*), and division (/)
// Addition: x + y
   console.log(1 + 2); // 3

// Subtration: x - y
   console.log(2 - 1); // 1
   
// Multiplication: x * y
   console.log(2 * 3); // 6

// Division: x / y
   console.log(6 / 2); // 3
   

//3.) Comparison operators - JavaScript has both strict and type-converting comparisons.
// a strict comparision (===) is only true is the operands are of the same type and the 
// contents match. The (==) converts the operands to the same type before making the comparison.
// It should be noted these comparisons result to true (truthy) and false (falsey) values
// while === is strictly true,  the == operand will return a truthy value. 
console.log(1 == 1);
// expected output: true

console.log('1' == 1);
// expected output: true

console.log(1 === 1);
// expected output: true

console.log('1' === 1);
// expected output: false

// There are also other operators. 

//           Operator       Description
// 1.)          !=          Not equal
let x = 5;
console.log(x != 8); // true

// 2.)           !==        Not equal or not equal type
console.log(x !== 5); // false
console.log(x !== '5'); // true
console.log(x !== 8); // true

// 3.)          >           Greater Than
console.log(x > 8); // false
console.log(x > 3); // true

// 4.)           <           Less Than
console.log(x < 8); // true
console.log(x < 3); // false

// 5.)          >=           Greater than or equal to
console.log(x >= 5); // true
console.log(x >= 6); // false

// 6.)           <=          Less than or equal to
console.log(x <= 5); // true



//4.) Logical operators - Logical operators are used to determine the logic between 
// variables or values
// Given that x = 6 and y = 3, see the below example that explain the operators
x = 6;
let y = 3;

//          Operator        Description
// 1.)          &&          and
console.log(x < 10 && y > 1); // true

// 2.)          ||          or
console.log(x == 5 || y == 5); // false

// 3.)          !           not
console.log(!(x==y)); // true


//5.) Unary operators (!, typeOf, -)
// a Unary operation is an operation with only one operand (as the name implies);


//          Operator      Description
// 1.)          !         - The logical NOT, it returns false if its single operand
//                          can be converted true; otherwise, returns true

console.log(x != y); // returns true, because they are NOT equal

// 2.)          typeOf    - the typeof operator returns a string indicating the type of 
//                          the unevaluated operand. 

var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();

typeof myFun;       // returns "function"
typeof shape;       // returns "string"
typeof size;        // returns "number"
typeof foo;         // returns "object"
typeof today;       // returns "object"
typeof doesntExist; // returns "undefined"

// 3.)         -            - the minus operator, it was stated above but we can 
//                            give another example to show
console.log(3 - 1); // returns 2


//6.) Ternary operator (a ? b : c)
// The conditional (ternary) operator is the only JavaScript operator that takes three operands
// The operator can have one of two values based on a condition. The syntax is:
// condition ? val1 : val2
// if the condition is true, the operator has the value of val1. Otherwise it has the value of val2
// you can think of it as a simplified if / else if statemenet. 
// if val1 is true, then this, otherwise, it's val2

// Example: 
// We have a person object that consists of a name, age, and driver property
let person = {
  name: 'tony',
  age: 20,
  driver: null
};
// We want to test if the age of our person is greater than or equal to 16. If this is true
// they're old enough to drive and driver should say "Yes". If this is not true, driver should be
// set to no

// We could use an if statement to accomplish this.
if (person.age >= 16) {
  person.driver = 'Yes';
} else {
  person.driver = 'No';
}

// But we can do the exact same thing with just one line of code. 

person.driver = person.age >= 16 ? 'Yes' : 'No';

// This shorter code yields us the same result of person.driver = 'Yes';