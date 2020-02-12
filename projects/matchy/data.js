/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}; // set animal equal to empty obj
animal.species = 'dog'; // animal.species = dog
animal['name'] = 'Bigbie'; // animal['name'] = to bigbie 
animal.noises = []; // animal.noises equal to an empty array
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'woof'; // index method to add woof
noises.push('growl'); // .push method
noises.unshift('whimper'); // unshift
noises[noises.length] = 'snore'; // length is technically 1 bigger than the actual index values so you can add on with that method
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises; // bracket method 
noises.push('bark'); // push method
console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = []; // make an empty array
animals.push(animal); // push in our animal object
console.log(animals);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck); // push in our duck
console.log(animals);

var lion = { species: 'lion', name: 'Simba', noises: ['roar', 'growl']};
var bird = { species: 'bird', name: 'Tom', noises: ['tweet', 'chirp']};
animals.push(lion); // push in our lion
animals.push(bird); // push in our bird 

console.log(animals);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = []; // arrays are easier to deal with and access


function getRandom(animals){ // do math.random() multiplied by the length to get a random number, then math.floor to make it a whole number
    return Math.floor(Math.random() * animals.length);
}
friends.push(animals[getRandom(animals)].name); // our function returns a number within the animals length, so use the function and then pushed into friends array
console.log(friends); // console log our friends Array
duck.friends = friends;
console.log(duck);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
