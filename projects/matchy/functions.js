/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    // for loop to go thrugh the anijals array
    let newArray = [null];
    for (let i = 0; i < animals.length; i++){
        // if the key value name is equal to the name parameter
        if (animals[i].name === name){
            // return the object
            newArray = [animals[i]];
            
        } 
    } return newArray[0];
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    // for loop to go through animals
    for (let i = 0; i < animals.length; i++){
        // if the animals index dot name equals the name we want to replace
        if (animals[i].name === name){
            // then we make that index equal to the replacement object
            animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    // for loop to go through the animals array
    for (let i = 0; i < animals.length; i++){
        // if anaimals[i].name is equal to the name parameter
        if (animals[i].name === name){
            // we splice at element i of animals, and only 1 over. 
            animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){
    // for loop to loop through the animals array
    for (let i = 0; i < animals.length; i++){
        // if the animal length > 0, species length > 0, and if the animal.name DOES equal animals[i].name
        // then we just return (do nothing)
        if(animal.name.length > 0 && animal.species.length > 0 && animal.name === animals[i].name){
             return;
        } 
        // otherwise we just push in our animal object into the animals array
    } animals.push(animal);
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
