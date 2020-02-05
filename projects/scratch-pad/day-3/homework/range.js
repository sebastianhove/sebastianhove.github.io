// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // create an Array literal that we can push into
    let myArr = [];
    
    // make an iff statement that says if the start is less than the end
    if(start < end){
        // then we loop, starting at the start, and ending at the end, increment up
        for(let i = start; i <= end; i++){
            // push i at each iteration into our Array literal
            myArr.push(i);
            // finally return it. 
        } return myArr;
    } else {
        // same down here we just flip the greater than or equal sign with end
        for (let i = start; i >= end; i--){
            myArr.push(i);
        } return myArr;
    }
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}