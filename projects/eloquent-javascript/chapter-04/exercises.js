////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function range(start, end, step) {
  // if step is undefined, we set our counter equal to 1 as a default value
  if (step == undefined){
    step = 1;
  }
  // create an array to store our loop resolutions into
  var array = [];
  // if start is equal to end, simply return the empty array
  if (start == end){
    return array;
    // if the start is < the end and step is greater than 0
    // run a regular incrementing loop
    } else if (start < end && step > 0){
    for (let i = start; i <= end; i += step){
      array.push(i)}
      // if start is > than end and step is greater than 0
      // we de-increment by the step and have i >=  end
    } else if (start > end && step > 0){
    for (let i = start; i >= end; i -= step){
      array.push(i)}
      // if start is greater than end and counter is less than 0
      // run a regular for loop because the negative count will hit our stopping condition
    } else if (start > end && step < 0){
    for (let i = start; i <= end; i += step){
      array.push(i)}
      // if start is < than end and the counter is a negative
      // return the array because that would cause an infinite loop
    } else if (start < end && step < 0){
    return array;
  }
  // return the array after the loop has completed.
  return array;
}
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function sum(array) {
  // let total be set to 0
let total = 0;
// run a loop to go through the array
for (let i = 0; i < array.length; i++){
  // add each number in the array onto the total at each iteration
  total += array[i];
}
// return the total
return total;
}
////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function reverseArray(array) {
  // create a new empty Array
let myArray = [];
// loop through the array argument in reverse
for (let i = array.length-1; i >= 0; i--){
  // push each element into our new Array
  myArray.push(array[i]);
  // return
} return myArray;
}
////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function reverseArrayInPlace(arr) {
  // for loop to go through the array
for (let i=0; i <arr.length; i++) {
  // use splice method here, it takes i at each increment,
  // and what we've told it to place in its place, is actually the
  // last element that we're popping out of the array
  // so while it pops it out of the array it actually evaluates
  // to what should be put into i's
    arr.splice(i, 0, arr.pop());
  }
  // return arr;
  return arr;
}
////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function arrayToList(array) {
  // when building objects, null sort of acts like a stopping condition when the rest
  // doesn't go anywhere
  // so we build it backwards per my understanding, so we have to set it equal to null
  // first
  var list = null;
  // since we're building backwards, we need to loop backwards as well
  for (var i = array.length - 1; i >= 0; i--)
  // our list will have a key of value, which will equal each array element
  // then the next value will be the new object formed in the next iteration
  // {value: 1, rest: {value, 2, rest: {value, 3, rest: null}}}
    list = {value: array[i], rest: list};
  return list;
}
////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function listToArray(list) {
  // here we can set it equal to an Array because, well it's not an object
  var array = [];
  // for the loop we need to loop over the tree, we can do this with a for loop
  // since it's a tree and each key we're accessing has the same key value of rest
  for (var i = list; i; i = i.rest)
  // in each rest there is the value we want to push, so we push in i.value
    array.push(i.value);
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  // this is a builder function for a tree list
  // so we just need to return a list with the inputs that c an be stacked with
  // new function calls
  // so we take a value and the list
  // value will take the value part of our return (not the key, as that always
  // remains a string)
  // the list parameter will either have to be the function call again to great
  // a new tree or null, or it won't work.
  // the way I see this is as a reverse recursion function? 
  return {value: value, rest: list};
}
////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
// if no list, return undefined
  if (!list)
    return undefined;
// if n is equal to 0, we just return the first value in the tree    
  else if (n == 0)
    return list.value;
// lastly if n is greater than 1, we use recursion to get 
// to the n-1 number (since it works similarly to arrays)
  else
    return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function deepEqual(a, b) {
  // if a and b are strictly equal, return true
  if (a === b) return true;
  // if a is null or it's not an object or b is null and not an object, return false
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  // next test we make counter variables and loop over our objects
  var propsInA = 0;
  var propsInB = 0;
// for in loop to go over and increment our counters by one each time
  for (var key in a)
    propsInA += 1;

  for (var key in b) {
    // for b, each time, we make sure that the key and value in b is equal
    // to the key and value in a, otherwise we return false and stop the loop
    propsInB += 1;
    if (!(key in a) || !deepEqual(a[key], b[key]))
      return false;
  }
// after each loop has ran, the counters should be equal if all key value pairs align
// then the return statement should result to true; 
  return propsInA == propsInB;
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};