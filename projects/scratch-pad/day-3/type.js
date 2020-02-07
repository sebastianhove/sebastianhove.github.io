// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // use Array.isArray on the value being passed through, if true, return true, else return false
    if (Array.isArray(value)){
        return true;
    } return false;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // Objects are tricky because null, arrays, and dates are also 'objects' so we need to make sure they're not all of those as well
   if (typeof(value) === 'object' && value !== null && Array.isArray(value) === false && value instanceof Date === false) {
        return true;
   } return false;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // we can use the functions we built above to test for this!!! We need to use the OR || to test if either pass
       if (isArray(value) || isObject(value)){
           return true;
       } return false;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (typeof(value) === 'string'){
        return 'string';
        // we can use our isArray function we built above to test
    } else if (isArray(value)){
        return 'array';
        // use our isObject function we built to test
    } else if (isObject(value)){
        return 'object';
        // the rest are pretty self explanitory... 
    } else if (typeof(value) === 'undefined'){
        return 'undefined';
    } else if (typeof(value) === 'number'){
        return 'number';
    } else if (typeof(value) === 'boolean'){
        return 'boolean';
    } else if (value === null){
        return 'null';
    } else if (typeof(value) === 'function'){
        return 'function';
    } else if (value instanceof Date){
        return 'date';
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
