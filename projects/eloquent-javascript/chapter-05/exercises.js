// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  // using reduce we can flatten each array in the array 
  // and return them and concat them with the next flattened array
let newArray = array.reduce(function(acc, current) {
  return acc.concat(current);
});
// after the function runs we return the newArray
return newArray;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, func) {
  // run the test on the current, if it's false we end the loop
  // this becomes the stopping condition
  // we update the current value or iterate 
  // the loop calls the body function on the current value
for(let current = value; test(current); current = update(current)){
  func(current);
}
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  // every test on every array and returns false if just one doesn't pass
  // so we set up a for loop to go through it
for(let value = 0; value < array.length; value++){
  // if we even hit false on one value, we return false and end the loop
  if(!test(array[value])){
    return false;
  } // otherwise we return true; 
} return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
let arrayOfScripts = countBy(text, function(characterInText){
  // find the script for each letter that we come across. 
  const objOfScripts = characterScript(characterInText.charCodeAt());
  
  // check if our character belongs to a writing direction
  // if it belongs to a writing direction, return it in our callback function
  // if it doesn't belong to a script, return 'non-alphabetic'
  if(objOfScripts !== null){
    return objOfScripts.direction;  
  }
  return 'non-alphabetic';
});
// sort our object to find the highest count value
arrayOfScripts.sort(function(a, b){
  return b.count - a.count;
})
return arrayOfScripts[0].name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
