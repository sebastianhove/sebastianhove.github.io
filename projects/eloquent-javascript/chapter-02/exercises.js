
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(n) {
  // n is the parameter of the number we'll input for our line builder
  // so we make a for loop, make the starting interval a hash tag
  // as long as the line.length is less than n + 1, we add another hash tag to it
  // each loop we console log the line adding another hash tag on the end. 
for (var line = '#'; line.length < n + 1; line += '#')
console.log(line);
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  for (let i = start; i <= end; i++){
    // if modulo of i and  3 is equal to 0 or the modulo of 5 and i is equal to zero, print fizzbuzz
    if (i % 3 == 0 && i % 5 == 0){
        console.log('fizzbuzz');
        // if i modulo 3 i equal to zero console.log fizz
    } else if (i % 3 == 0){
        console.log('fizz');
        // etc, etc
    } else if (i % 5 == 0){
        console.log('buzz');
    } else {
      console.log(i);
    }
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(n) {
  // need an empty string to start with
  var board = '';
  // for loop for our y axis
for (var y = 0; y < n; y++){
  // within this for loop we have our x axis 
  for (var x = 0; x < n; x++){
    // loop through our x, which is less than the number we give it
    // in order to change our lines, we need to add x and y and see if their modulu of 2 is equal to 0
    // otherwise it will make the same type of line over and over again
     if ((x+y) % 2 === 0){
       // the below will concat a space bar to our board string
      board += ' ';
   // display a string that's an empty space
    } else {
      // our else statement will concat a hash tag
      board += '#';
 
    }
  }
  // outside our x loop we add a new line 
board += "\n";
  }
  console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
