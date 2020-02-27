//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // empty array to store our values in 
    let myArray = [];
    // for in loop 
for(var key in object){
    // push in each object [key] value into the array
    myArray.push(object[key]);
}
// return the array 
return myArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // empty string to store in 
  let myString = '';
  // loop through the object
for (var key in object){
    // do myString += the key plus a space
  myString += key + ' ';
  // return the string and use the .trim method to remove the extra spaces
} return myString.trim();
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // same as above one major difference
     let myString = '';
for (var key in object){
    // we only add on to the string if the type of object[key] value RESOLVES to a string
  if(typeof object[key] === 'string'){
      myString += object[key] + ' ';}
} 
// return the string trimmed 
return myString.trim();
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) { 
    // use the Array.isArray method on collection, and return array if it resolves to true
    if(Array.isArray(collection)){
        return 'array';
        // else if it resolves to object, we return object
    } else if (typeof(collection) === 'object'){
        return 'object';
        // default if all fail, return null; 
    } return null;
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // let new string equal string element 0 to uppercase
    let str = string.charAt(0).toUpperCase();
    // return the str plus a sliced copy of our original string from the 1st index
    // to the end
    return str + string.slice(1, string.length);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // first we set string of 0 to uppercase to get that squared away
    let str = string[0].toUpperCase();
    // then set the loop at 1 so we skip the first element since we already did that
    // I don't think it really matters if it's 0 or 1 though because there's no spaces
    // to hit our code
    for (let i = 1; i < string.length; i++){
        // if string of i minus 1 equals a space
        if(string[i - 1] === ' '){
            // then we uppercase it
            str += string[i].toUpperCase();
        } else {
            // otherwise we just add string of [i]
          str += string[i];
        }
        // return the string 
    } return str;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // we can use our capitalize word function from above and add it to 
    // our welcome message 
    return 'Welcome ' + capitalizeWord(object.name) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // we just need to return a string here and capitalize the name and the species keys in the object
    // we can use our capitalize word function above to greatly cut down on code
    // our ' is a ' needs a space on each side when we concat so it comes out
    // as a readable sentence. 
    return capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // so first we check to see if the object has a property key called noises
    // and that it's length is greater than 0
    // if that's the case, we return it and use the array method .join with a ' '
    // for each so they space out rather than one long winded unreadable word. 
    if (object.hasOwnProperty('noises') && object.noises.length > 0){
        return object.noises.join(' ');
    } return 'there are no noises';
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // we can use the .includes method on a string
    // if the string includes our word parameter
    // we return true, otherwise return false 
if (string.includes(word)){
    return true;
} return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // since object.friends is an array
    // we simply use the push method to add the friend
    // and return the object in the end. 
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function isFriend(name, object) {
    // if the object has a property of 'friends' and object.friends includes (since it's an array)
    // we can check to see if it includes the name parameter and return true if both resolve to true
    // otherwise return false 
if (object.hasOwnProperty('friends') && object.friends.includes(name)){
    return true;
} return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    /* global nonFriends */
    // QUnit.test("nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with", function(assert){
    //   var data = [
    //     {name: "Jimmy", friends:["Sara", "Liza"]},
    //     {name: "Bob", friends:[]},
    //     {name: "Liza", friends: ["Jimmy"]},
    //     {name: "Sara", friends: ["Jimmy"]}
    //   ];
    //   assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
    //   assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
    //   assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
    // });


function nonFriends(name, array) {
    // build an empty array to store our non friends into
var notFriends = [];
// for loop to loop through the array we're passing in
for (let i = 0; i < array.length; i++){
    // if array[i].name does NOT equal the name, and, each other names friends
    // list does not include that name, then we push that name into our nonFriends array
    if (array[i].name !== name && !array[i].friends.includes(name)){
        notFriends.push(array[i].name);
    } // return nonFriends list after the loop has completed 
} return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // simply do object[key] = value
    // have to use bracket notation as the key isn't known as of yet 
object[key]= value;
// return the object 
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // we need to loop through the array we're putting in
for (let i = 0; i < array.length; i++){
    // as well as each key in the object
    for (var key in object) {
        // if the array index is equal to the key string
        if (array[i] === key){
            // we delete the object [array[i]] which resolves to that key value string
            delete object[array[i]];
        }
    }
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // the spread operator combined with Set is a built in function
    // that automatically removes duplicates for us
    // we could use filter or spread, but the less code, the better 
return [...new Set(array)];
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}