const readline = require('readline-sync');

const userName = readline.question("What's your name? ");
console.log("Hello,"+userName+"! welcome to the JavaScript Quiz on Values, Data Types, and Operations");

// Ask questions and store answers
const question1 = readline.question("What is the data type of 'true' in JavaScript? ");
const question2 = readline.question("Which operator is used for strict equality comparison in JavaScript? ");
const question3 = readline.question("What is the result of 5 + '3' in JavaScript? ");
const question4 = readline.questionInt("Enter a number that represents the length of an array with 3 elements: ");
const question5 = readline.question("What keyword is used to declare a constant variable in JavaScript? ");

// Print user's answers
console.log("\nThank you for completing the quiz! Here are your responses:");
console.log("1. Data type of 'true': "+question1);
console.log("2. Operator for strict equality:  "+question2);
console.log("3. Result of 5 + '3':  "+question3);
console.log("4. Length of an array with 3 elements:  "+question4);
console.log("5. Keyword for declaring a constant variable: "+question5);
