/**
 * How are variables hoisted in JavaScript?
 * Different types are hoisted differently in the case of variables they can
 * be declared anywhere. They are available in the scope, before or after
 * declaration. They can contain no value until assigned.
 * 
 * How are function declarations hoisted? How are function expressions hoisted?
 * Different types are hpoisted differently in the case of functions they
 * can be declared anywhere. They are available in the scope, before or after
 * declaration. They are assigned value at all times. The difference between
 * function declaration and function expression.
 * Function Declaration(Function Statement) defines a function with the 
 * specified parameters.
 * Function Expression has a function keyword to define a function inside
 * an expresssion and uses the assignment operator "=".
 * 
 * What is the JS Interpreter?
 * Creation Stage: This stage creates all the scopes, variables and functions.
 * Execution Stage: This stage actually executes the code like console.log() 
 * statements by sending machine understandable commands.
 * It converts our langauage with the binary syatsem that the computer will 
 * understand.
 */

//Variables Hoisted:
//var:
var runner;
console.log(runner);//returns undefined
runner = "My favorite hobby is running";
console.log(runner);//returns My favorite hobby is running

//let:
console.log(golf);//returns ReferenceError Cannot access 'golf' before intializing
let golf = "My second favorite hobby"

//const:
console.log(sleep);//returns ReferenceError Cannot access 'sleep' before intializing
const sleep = "I wish I could get more sleep"

//Functions Hoisted:
functionCalled();//function called
function functionCalled(){
    console.log("This is a function being hoisted");//function defined
}




