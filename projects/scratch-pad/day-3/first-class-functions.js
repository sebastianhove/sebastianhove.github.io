// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(test){
        // return a function, input a parameter that we're testing
        // if the test is greater than the base return true, else return false
        if(test > base){
            return true;
        } return false;
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return a function, input a parameter that we're testing
    return function(test){
        // if the test is less than the base, return true, else return false
        if(test < base){
            return true;
        } return false;
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // return a function with our string parameter 
    return function(string){
        // we need to make both parameters uppercase and test if they're strictly equal
        if(string[0].toUpperCase() === startsWith.toUpperCase()){
            return true;
        } return false;
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    return function(string){
        // to access the last element of the string, in the brackets we do string.length - 1
        // and set them both toUpperCase() and test if they're strictly equal
        if(string[string.length-1].toUpperCase() === endsWith.toUpperCase()){
            return true;
        } return false;
    };
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // create array to store our altered values in
    let myArray = [];
    // for loop to go over the array
    for(let i = 0; i < strings.length; i++){
        //push into the array with our modify function altering the string element of i
        myArray.push(modify(strings[i]));
        // return the array
    } return myArray;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // we need to make a counter, because if we return true in the for loop, it ends after the first iteration
   let counter = 0;
    for(let i = 0; i < strings.length; i++){
        // if the test function resolves to true, then we increment our counter by one each time
        if(test(strings[i])){
            counter++;
        }
        // if the counter number equals the length of our strings array, we return true
        // otherwise we return false 
    } if (counter === strings.length){
      return true;
    } return false;
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}