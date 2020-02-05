// Functions
// The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
// What’s the difference between a function’s parameters and arguments PASSED to a function?
// What’s the syntax for a NAMED function?
// How do we assign a function to a variable?
// Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
// Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
// Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), 
// that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!) (ALSO, see: Understanding
// JavaScript Closures with Ease)

// A JavaScript function is a block of code designed to perform a particular task
// it is one of the most powerful tool as once a function is built, it can be used
// over and over again, rather than having to rewrite the same code!
// We can execute them when we 'invoke' them! 


/*
Syntax:
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
*/

// The two phases to using functions: 
// First we must define it with the function keyword, followed by a name, followed by parentheses
// the parentheses may include parameter names (separated by commas)
// then we have the code to be executed placed inside curly brackets

// let's take a look at a basic function we have built below
// we have set our function equal to a variable! the same way we would set var x = 3, we can set 
// var add = function(){} !
var add = function(num1, num2){
    console.log(num1 + num2);
};

// we have declared a variable named add, and set it equal to a function
// next we have our parentheses, and in these parentheses we have PARAMETERS
// parameters are place holders for arguments to later be passed in.
// after the parameters we open the function code with curly braces
// in these curly braces we place the code we want to be executed!
// in this case we want to add our two parameters together!

//now we can simply INVOKE our add function with parentheses, in these parentheses we
// place our ARGUMENTS, that will then take place in the parameters so they can execute!
add(2, 2); // console logs 4

// functions don't always need parameters, they are able to access variables in the global
// scope, see the below example
let x = 3
let y = 4
function multiply(){
    console.log(x * y);
}
multiply(); // returns 12

// while functions can access outside variables, the inverse is not true, functions are
// function scoped. While they can reach out, we cannot reach 'in' to them to pull out 
// values unless they are returned

function basicExample(){
    let imScoped = 'hello there';
    let imScopedToo = 'how are you?';
    console.log(imScoped + ' ' + imScopedToo);
}
basicExample(); // returns 'hello there how are you?'

// but what if we try to console.log imScoped in our global scope?

//console.log(imScoped); // reference error imScoped is not defined
// In the above example we're not able to reach into the function to pull out a value
// imScoped was never defined in the global scopel, hence it's undefined



// Closures Explained
/*
_______________________________________________________________________________
 Global Scope:                                                                 |
 const globalVar = 'global scope'                                              |
 The global scope has access only to globalVariable. It doesn't                |                                                                 
 Know about the variables inside outerFunction or the closure inside outer     |
 function                                                                      |                                
                                                                               | 
_______________________________________________________________________        |                                                                        
 outerFunction:                                                        |       |
 const outerFunctionVar = 'function'                                   |       |              
outerFunction has access to outerFunctionVar and globalVar             |       |                                                    
(the string 'global scope'). It doesn't know anything about            |       |
what's inside its own closure, inner function                          |       |
                                                                       |       |
_______________________________________________________________        |       |
Closure: (inner function)                                      |       |       |
const innerFunctionVar = 'closure'                             |       |       | 
Our closure (innerFunctionVar) has access to outerFunction     |       |       |
and all of its variables, as well as everything in the global  |       |       |
scope                                                          |       |       |
_______________________________________________________________|       |       |
                                                                       |       |
                                                                       |       |
_______________________________________________________________________|       |
                                                                               |
                                                                               |
                                                                               |
                                                                               |
                                                                               |
_______________________________________________________________________________|                                                                               
*/