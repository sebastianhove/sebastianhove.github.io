//Control flow
/* Control flow is the order in which statements are executed in a program.
Control structures such as conditionals allow for control flow to be altered
during the execution of a program. Control structures such as conditionals (if 
statements) alter the control flow by only executing blocks of code if certain
condition(s) are met. These structures essentially allow a program to make decisions 
about which code is executed as the program runs. 

*/
//If
//Else-if
//Else
// In order to properly demonstrate the above three, we'll first make a short code
// block we can explain from

var age = 16;

if (age >= 16 && age <= 18) {
    console.log("you're old enough to drive with a permit");
} else if (age >= 18){
    console.log("you're old enough to drive without a permit");
} else {
    console.log("you're not old enough to drive");
}

// In the above example we have a variable with the age of 16
// we have three pieces of possible code blocks that will run depending on the age
// the if statement is our first condition that needs to evaluate to true or false
// if it evaluates to true, then the first block of code is executed.

// if (age >= 16 && age <= 18)
// this is the beginning of our if chain
// the way it works is 
// if (the statement inside here is true) {we execute this code}
// so if (the age is greater than or equal to 16 && less than or equal to eighteen)
// {we console.log you're old enough to drive with a permit}

// if it should evaluate to false it goes down to the next else-if statement
// an else if statement is just another if statement, it is simple formatting
// for code readability, you can have as many else-if statements as you want
// but there is only one beginning if, and one ending else statement.

// if the if and else if statements all evaluate to false, they go down to our else 
// statement, this is the default code that will run if all other conditions have
// evaluated to false. So had we set the age to 10, then the default code to run
// would state you're not old enough to drive.



//Switch - the switch statement is essentially the same as an if / else if statement
// it performs different actions based on different conditions. It is the perfect
// solution for long, nested if/else statements. The switch statement evaluates an expression.
// The value is then compared with the values of each case of the structure, if there is a match
// the associated code is executed. 

// Syntax
/*
switch(expression) {
  case n:
    code block
    break;
  case n:
    code block
    break;
  default:
    default code block
}
*/

// Let's do a similar example above but with a switch statement

let newDriverAge = 18;

switch(newDriverAge) {
    case 16:
        console.log('You can drive with a permit');
        break;
    case 18:
        console.log('You can drive without a permit');
        break;
    default:
        console.log("You can't drive yet!");
}
// logs to the console "You can drive without a permit"

// In the above example the expression of 18 is compared to the case of 16 first, 
// since it evaluates to false, it goes down to the next case, since both are 18
// it evaluates to true and that line of code is executed

// had the newDriverAge been set to one, the first two cases would fail and it would 
// go to it's default statement, which is the same as an else case in an if/else statement.