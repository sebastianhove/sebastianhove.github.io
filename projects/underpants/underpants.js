// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    // simply return the input value
    return value;
}


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    // if type of value is equal to string, return string
     if (typeof value === 'string'){
        return 'string';
        // if Array.isArray(value) return 'array)'
    } else if (Array.isArray(value)){
        return 'array';
        // if type of value is equal to 'number' return 'number'
    } else if (typeof value === 'number'){
        return 'number';
        // if the value is strictly equal to undefined, return undefined
    } else if (value === undefined){
        return 'undefined';
        // if typeof value is strictly equal to 'boolean' return boolean
    } else if (typeof value === 'boolean'){
        return 'boolean';
    } else if (value === null){
        return 'null';
    } else if (typeof value === 'function'){
        return 'function';
    } else {
        return 'object';
    }
};


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){
    // if the the input of array in Array.isArray comes out to false
    // or the number is less than 0, we return an empty array
    if(!Array.isArray(array) || number < 0) {
        return [];
    }
    // if the number is greater than the array length, we return the number
    if(number > array.length) return array;
    // if the type of input does not resolve to a number, we return arrray[0]
    if(typeof number !== 'number') return array[0];
    // otherwise we return a slice of the array from element 0 all the way up to the input number
    return array.slice(0, number);
};


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
    // same as above
     if (!Array.isArray(array) || number < 0) return [];
     if (number >= array.length) return array;
     if (typeof number !== 'number') return array[array.length-1];
     // otherwise we return the array with the slice method
     // but we start at array.length minus the nujber, and end at the array.length;
     return array.slice(array.length-number, array.length);
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    // for loop to go through the arraay
    for (let i = 0; i < array.length; i++){
        // if array[i] is equal to the value we're looking for, we return i
        if(array[i] === value) return i;
        // otherwise we return -1
    } return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    // let contain equal the ternary condition if the array has it, it turns true
    // if it doens't it turns false
    // then we simply return contain; 
    let contain = (array.includes(value) ? true: false);
    return contain;
 };

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, action){
    // first we check if it's an array, if it is
    // we do a forloop on the array, and for each element of the array we 
    // pass the function called 'action' on to it
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
        // otherwise 
    } else {
        // for in loop for an object
        for (var key in collection) {
            // perform the action on each collection[key]
            action(collection[key], key, collection);
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
    // declare a uniqueArray to store our values into 
        var uniqueArray = [];
        // for loop to go through the Array
   for (let i = 0; i < array.length; i++){
       // if the indexOf function from above comparing our empty array and each element of array[i] results 
       // to -1, we push in the array[i] element into our uniqueArray
       if(_.indexOf(uniqueArray, array[i]) === -1){
           uniqueArray.push(array[i]);
       }
   }
   // return the uniqueArray after the entire loop has ran. 
   return uniqueArray;
 };
 
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){
    // create a uniqueArray to store our variables into 
      var filteredArray = [];
      // for loop to go through the array
    for (let i = 0; i < array.length; i++){
        // if the function we pass in resolves to true on the element of the array
       if (func(array[i], i, array)) {
           // we push it into our uniqueArray
           filteredArray.push(array[i]);
       }// return the unique Array after the loop has ran 
    }   return filteredArray;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

 _.reject = function(array, func){
     // first we make a filtered array of our input array
    var filterArray = _.filter(array, func);
    // next make a reject array that's empty
    var rejectArray = [];
    // loop through our argument array
    for (let i = 0; i < array.length; i++){
        // if the index of the filter Array and array[i] hits -1 
        if(_.indexOf(filterArray, array[i]) === -1) {
            // we push that value into our reject Array
            rejectArray.push(array[i]);
        }
    } // return the Array in the end. 
    return rejectArray;
 };

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
 _.partition = function(array, func){
     // simply return the filter function and rejected function in an array literal
     // since they both return new Arrays, the array below will be filled with the inverse 
     // of each array 
     return [_.filter(array, func), _.reject(array, func)];
 };

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
 _.map = function(collection, func){
     // create an empty Array 
        let newArray = [];
        // if it's an Array, loop through it
        // and push each element with the function applied to it
        if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            newArray.push(func(collection[i], i, collection));
        }
    } else {
        // if it's an object, push each value of the keys in with the function applied to it
        for (let key in collection) {
            newArray.push(func(collection[key], key, collection));
        }
        // return the newArray 
    } return newArray;
 };

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

  _.pluck = function (objArr, prop){
      // create an array to store our values into 
        var values = [];
        // call map on our array filled with objects, and the function which will just push
        // in our value[prop] into our new values array
    _.map(objArr, function(val, index, collec){
        values.push(val[prop]);
    }); 
    // return values in the end. 
    return values;
  };

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){
    let tester = func || _.identity;
    for( let i = 0; i < collection.length;i++){
        if(!tester(collection[i])){
            return false;
        }
    }
    return true;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
    //if func isnt a function loop through the collection and if it has elements return true
   if (typeof func !== 'function') {
       for (let element of collection) {
           if (element) return true;
       }  //if no element return false
        return false; 
   }
   //set our mapped array to _.map on collection,
 let mapedArr = _.map(collection, (element, index, collection) => func(element, index, collection)); 
  //loop over the mappedArr and if it has an element return true
   for (let element of mapedArr) { 
       if (element) return true;
   }
   return false; //if not, return false
};
// _.some = function(collection, func) {
//      let tester = func || _.identity;
//     for (let i = 0; i < collection.length;i++){
//         if(tester(collection[i])){
//             return true;
//         }
//     }
//     return false;

    // if (Array.isArray(collection)){
    //     for(let i = 0; i < collection.length; i++){
    //         if (func(collection[i], i, collection)){
    //             return true;
    //         }
    //     }
    // } else if (typeof collection === 'object'){
    //     for (let key in collection) {
    //         if (func(collection[key], key, collection)){
    //             return true;
    //         }
    //     }
    // } return false;
//};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

 _.reduce = function(array, func, seed){
     // using array.reduce to filter an array down to another array, smaller, filtered
     // using the predicate function 
         let current = seed;
    // so we set our current to the seed, but if it's undefined
    // we set it equal to our array at our 0th index
    if (current === undefined){
        current = array[0];
        for (let i = 1; i < array.length; i++){ // then loop through the array starting at 1
            current = func(current, array[i], i); // and perform the function on the current for each
        } // then we return the current
        return current;
    }
    // if there is a current value we given, we start our loop at at the 0th index and perform it on each
    //value and then return our current
    for (let i = 0; i < array.length; i++){
       current = func(current, array[i], i);
    }
    return current;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function() {
    // var args is set to the arguments being passed in the function
    var args = arguments;
    // loop through the arguments array
    for (let i = 1; i < args.length; i++) {
        // then do a for loop for each object at each index
        for (let key in args[i]) {
            // set the 0th index key to equal the next value 
            args[0][key] = args[i][key]
        }
    }
    // return the array at the 0th index to return the object value
    return args[0];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
