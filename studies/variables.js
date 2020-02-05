/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 
*/ 
     // a.) There are actually three ways to create a variable, var, let, and const
     // b.) var - var is function scoped, what that means is if you create a variable with var, that variable is scoped to the function
     // it was created and is only accessible inside of that function or any nested function
     // b.) let - let is similar to var, but has one major difference, it is block scoped. What this means is that the variable
     // is only accessible inside the 'block' it was created in as well as any nested blocks. 
     // (i.e.: anything surrounded by a curly brace {} like in a for loop or if statement.)
     // c.) const - const is almost the exact same thing as let, however, once you've assigned a value using const
     // you can't reassign it to a new value
/* 
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// Hoisting - Hoisting is Javascript's default behavior of moving all declarations 
// to the top of the current scope (as in the top of the current script or the current function)
/* Keep in mind that all variables declared with var are hoisted to the top of the script
let and const are NOT hoisted. 

Javascript only hoists declarations, not initializations. 
for example
*/ 
var y = '5'
/* When we run this code, the only thing that is pulled ot the top of the script
is var y, the string value of 5 stays on that line, and when it is needed as it runs from top 
to bottom it will be assigned. 
*
*
*/