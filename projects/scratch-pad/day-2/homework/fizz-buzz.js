// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // for loop to spit out the number 1 to 100
for (let i = 1; i <= 100; i++){
    // if modulo of i and  3 is equal to 0 or the modulo of 5 and i is equal to zero, print fizzbuzz
    if (i % 3 == 0 && i % 5 == 0){
        console.log('FizzBuzz');
        // if i modulo 3 i equal to zero console.log fizz
    } else if (i % 3 == 0){
        console.log('Fizz');
        // etc, etc
    } else if (i % 5 == 0){
        console.log('Buzz');
    } else {
      console.log(i);
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}