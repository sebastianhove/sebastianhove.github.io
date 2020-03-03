// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-sebastianhove");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // we're returning our filter function, it goes through each customer object
    // if they have a property of male, it will resolve to true and put it in an array
return _.filter(array, function(customerObj){
    return customerObj.gender === 'male';
    // at the end of the function we add .length because this will resolve to an amount of truthy
    // values
}).length
};



var femaleCount = function(array) {
    // using reduce we start with providing our reduce function an array
    // and a function that takes a number, and the customer object
    // the seed we provided is 0 which will be our starting counter
    // so it will add 0 plus each time it hits a customerObj.gender that's equal to female
    return _.reduce(array, function(n, customerObj){
        return n + (customerObj.gender === 'female');
    }, 0);
};

var oldestCustomer = function(array){
    // first we start by providing a max number of 0
    var max = 0;
    // we use reduce with a seed of an empty string (because we're returning a name)
    return _.reduce(array, function(acc, customerObj){
        // for our function, if the customerObj.age is greater than max
        // then our accumulator will equal the customerObj.name for that loop
        // max will have to change to the age so we can compare it in our next loop
        // after the loop has checked all possible objects, we return our accumulator 
        if (customerObj.age > max){
            acc = customerObj.name;
            max = customerObj.age;
        }
        return acc;
    }, "");
};

var youngestCustomer = function(array){
    // I figured I could just flip it to find the youngest
    // and it wasn't working, but all I did was change the minimum to 100 because 
    // no one is older than 100 in the array
    var min = 100;
    return _.reduce(array, function(acc, customerObj){
        if (customerObj.age < min){
            acc = customerObj.name;
            min = customerObj.age;
        }
        return acc;
    }, "");
};

var averageBalance = function(array){
    // create a variable to store our array in (we'll need to divide by the length later)
     var balances = _.reduce (array, function (accumulator, customerObj){ 
         // Remove the dollar sign from each balance
       var regularNum = customerObj.balance.slice(1);  
            // we'll split each amount by their comma and then use .join to put them back
       regularNum = regularNum.split(",").join(""); 
            // now we use Number.parseFloat to get to a regular number
       regularNum = Number.parseFloat(regularNum); 
            // since we have a regular number, we can now add them all together
       accumulator += regularNum;  
       return accumulator; //return balances added together
   }, 0);
   return balances / array.length; //get average of balances and return it
};


var firstLetterCount = function(array, letter){
    // set a counter equal to 0
    let count = 0;
    // run our filter which takes in the array, and our callback function
     _.filter(array, function(customerObj){
         // the function calls to each customer object in the array
         // if the customerObj.name at 0th index equals the letter (both to lower case)
         // we increase our count by 1
        if (customerObj.name[0].toLowerCase() === letter.toLowerCase()){
            count++;
        }
        // outside the function we return the count
    });
     return count;
};

var friendFirstLetterCount = function(array, customer, letter){
    // another count set to 0
    let count = 0;
    // we run each on our array with our anonymous function that takes in th ecustomerObj
    _.each(array, function(customerObj){
        // if the customerObj.name resolves to the customer parameter, then we run each on that
        // specific objects friends list
        if (customerObj.name === customer){
            // so call each on customerObj.friends and our function takes in a friend parameter
        _.each(customerObj.friends, function(friend){
            // if friend.name of 0th index equals the letter parameter (both to lower case)
            // we increment our count and return the count outside the whole function stacks
            if (friend.name[0].toUpperCase() === letter.toUpperCase()){
                count++;
            }
        }); 
       }
    }); return count;
};

// what we want to do is see if the name provided exists in any other customerObjects friends list
// if the persons name exists there, we push that persons name into an array and return it
var friendsCount = function(array, name){
    // tried with each, but wasn't getting the answer I was looking for so I reverted to loops
    // answer set to an empty array
   var answer = [];
   // for loop to loop through our whole array of objects
   for(let i = 0; i < array.length; i++){
       // second loop to go into each array[i].friends
       for(let j = 0; j < array[i].friends.length; j++){
           // if the array[i].friends[j].name is equal to the target name, we push it into our answer array
           if (array[i].friends[j].name === name){
               answer.push(array[i].name);
           }
       }
   } return answer;
};

// what we should do is make an array we can store all tag array info in
// then we can use for each to access each tags array, and push them into our array with the spread operator
// each time, once we have our full array, we can use a function, maybe reduce, something that checks each occurence
// that orders them from most occured to last, and then we return that array slicing off the first three elements

function sortByFrequencyAndRemoveDuplicates(array) {
    var frequency = {}, value;

    // compute frequencies of each value
    for(var i = 0; i < array.length; i++) {
        value = array[i];
        if(value in frequency) {
            frequency[value]++;
        }
        else {
            frequency[value] = 1;
        }
    }

    // make array from the frequency object to de-duplicate
    var uniques = [];
    for(value in frequency) {
        uniques.push(value);
    }

    // sort the uniques array in descending order by frequency
    function compareFrequency(a, b) {
        return frequency[b] - frequency[a];
    }

    return uniques.sort(compareFrequency);
}


var topThreeTags = function(array){
    // new Array to push into
    let newArray = [];
    // using for each, if each customerObject has a .tags property, we push them into the new
    // array using the spread operator
    _.each(array, function(customerObj){
        if (customerObj.tags){
            newArray.push(...customerObj.tags);
        }
        // we return the function that was built above with our newArray, and slice it from 0 to 3
    }); return sortByFrequencyAndRemoveDuplicates(newArray).slice(0, 3);
};

var genderCount = function(array){
    // set an object with default values first that we can add to if our tests pass a condition
    let genderObj = {'male': 0, 'female': 0, 'non-binary': 0};
    // use filter to test for truthy values
    _.filter(array, function(customerObj){
        // if the customerObj.gender is equal to 'male', we add 1 to our original object
        if (customerObj.gender === 'male'){
            genderObj.male +=1;
            // rinse and repeat for each one
        } else if (customerObj.gender === 'female'){
            genderObj.female += 1;
        } else if (customerObj.gender === 'non-binary'){
            genderObj['non-binary'] += 1;
        }
    });
    return genderObj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
