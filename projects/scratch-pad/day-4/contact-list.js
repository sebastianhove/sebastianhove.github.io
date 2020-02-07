// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // have an empty object to store our creations into
    let myObj = {};
    // use the dot method to create new key value pairs that will pass in parameters
    myObj.id = id;
    myObj.nameFirst = nameFirst;
    myObj.nameLast = nameLast;
    // return the newly created object
    return myObj;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            // function that returns our contacts.length
            return contacts.length;
        }, 
        addContact: function(contact){
            // declare a variable newContact, the parameter will equal our variable
            var newContact = contact;
            // finally we simply push it into our contacts Array
            contacts.push(newContact);
        },
        findContact: function(fullName){
            // need a test name to hold our variable
            let testName;
            // then we loop through the whole contacts array
            for(let i = 0; i < contacts.length; i++){
            // for each iteration we set testName = to the contacts[i].nameFirst with a SPACE
            // and then contacts[i].nameLast
            testName = contacts[i].nameFirst + ' ' + contacts[i].nameLast;
            // if the testName is equal to the fullName input, we return the whole object in contacts[i];
            if (testName === fullName){
                return contacts[i];
            };
            }
        },
        removeContact: function(contact){
            // since you're putting in the whole object as a parameter
            // we set a new variable named inex equal to contacts.indexOf(contact)
            // that will point to the part of the array that holds the contact
                //var index = contacts.indexOf(contact); --> we don't even need htis we can just add it in one line of code
             // We can use the splice method, and use our index value to point to what
             // part of the array we're splice, and then say we're only removing the 1 element
             // this should delete it
            contacts.splice(contacts.indexOf(contact),1);
        },
        printAllContactNames: function(){
            // empty names string to store our loop outputs into
            let names = '';
            // for loop to go through the entire array
            for (let i = 0; i < contacts.length; i++){
                // names += the contact info each time, with a new line at the end
                names += contacts[i].nameFirst + ' ' + contacts[i].nameLast + "\n";
            } 
            // you need to return with the slice method attached because the slice method returns a 
            // new array in that instance, it doesn't save it to our original names variabble
            // that we created. 
            return names.slice(0, names.length-1);
        }
        
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
