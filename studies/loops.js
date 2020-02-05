// Loops
// Explain while, for, and for-in loops
// Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
// Loop over an Array, forwards and backwards
// Loop over an Object

// 1.) The While Loop - The while loop will execute a block of code as long as the 
// specified condition is true

/* Syntax:
while (condition) {
    // code block to be executed
}
*/

// Example: 
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

// in the above example we have our variable i set to 0
// while i is less than 10, we will console log it each time, 
// under it we increment i by one.
// It should be noted that while loops can be dangerous! If we didn't increment
// i by 1 each time, the loop would run forever and crash our program!!!


// 2.) For Loop - For loops are very handy when working with arrays (or strings!)

/*
Syntax:
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}

Statement 1 is executed (one time) before the execution of the code block.
Statement 2 defines the condition for executing the code block.
Statement 3 is executed (every time) after the code block has been executed.
*/

let myArray = [10, 11, 12, 13, 14, 15]

for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}

// What's happening up here? 
// we have started our loop by setting our i (index) at value 0
// our next statement we have told the loop to stop when i is less than myArray.length
// finally we have our incrementor that will increase by 1 each time
// so every time we run this code, it console logs myArray[i] its index until the loop 
// gets to its stopping condition

// What if we wanted a newly altered array??? 
// let's make an empty Array below

let myNewArray = [];
for (let i = 0; i < myArray.length; i++){
    myNewArray.push(myArray[i] * 2);
}
console.log(myNewArray); // returns a new Array of [ 20, 22, 24, 26, 28, 30 ]
// in the above example we're using the push method to push altered elements or our original Array,
// multiplying each indexed value by 2. 

// what if we wanted to loop over the Array backwards? Let's reverse the loop

for (let i = myArray.length-1; i >= 0; i--){
    console.log(myArray[i]);
}
// Since we're starting at the end of the Array, we have to subtract the length by 1.
// Why? The length of the Array is 6, but the index number of the last element is 5 
// since Arrays are 0 indexed. 
// Then we set the stopping condition to be greater than or equal to 0, 
// and we set our incrementor to subtract by one each time. 


// We can also use loops to count any number of times we want, we just create 
// our own starting and stopping conditions

for (let i = 0; i <= 10; i++){
    console.log(i);
}
// returns 1 2 3 4 5 6 7 8 9 10


// 3.) For In Loops - for in loops are used to loop through the properties
// of an object. The block of code inside the loop will be executed once for 
// each property 

/*
Syntax:
for (var in object) {
  code block to be executed
}
*/

// Example:
var myObject = {
    name: 'Sebastian',
    school: 'Operation Spark',
    passing: "I hope so!"
};

for (var key in myObject){
    console.log(key);
}
// Returns name, school, passing

// In the above example we have to declare a variable name for each key, to keep
// it simple we use the word key, but you could call it whatever you like.
// next we have to specify the object name we're looping through, in this case. myObject.
// Once we have our loop going, we can specify our code to run for each iteration of the loop!

// We can also print the values as well, we have to wrap the key in brackets though, as dot
// notation only works when we know the actual name of the key we're accessing. 

for (var key in myObject){
    console.log(myObject[key]);
}
// returns Sebatian, Operation Spark, I hope so!


// We can also use them to alter keys in our objects, when working with larger objects
// this may come in handy. 
for (var key in myObject){
    myObject.passing = 'This time';
}

console.log(myObject); // returns Sebastian, Operation Spark, This time