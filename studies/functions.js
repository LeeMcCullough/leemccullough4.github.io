/**
 * Functions:
 * The two phases to using functions: First we must ___? Next we can execute 
 * (or two other words for executing a function?) a function by?
 * The two phases to using functions.
 * The creation phase and the execution phase.
 */
 
 /**
  *What’s the difference between a function’s parameters and arguments
  * A parameter is a variable in a method definition
  * Argument is the actual value of this variable that gets passed
  * to the function.
  */
  
  /**
  *PASSED to a function?
  * Passed is to "pass" the values of the arguments into the function.
  */
  
  /**
  *What’s the syntax for a NAMED function?
  * The code to be excuted , by the function, 
  * is placed inside curly brackets "{}"
  */
  
  /**
  *How do we assign a function to a variable?
  * You can assign a function in a variable using the concept
  * of anoymous functions.
  */
  
  /**
  *Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.
  * How do we specify inputs, and how do we specify outputs?
  * IOCE
  * I = inputs
  * O = outputs
  * C = constraints
  * E = edge case
  */
 
  /**
  *Scope: Functions can see and modify variables in parent or global scopes.
  *The inverse is NOT true.
  */
  
  /**
  *Closures: Functions form closures around the data they house. If an object
  *returned from the Function and is held in memory somewhere (referenced), 
  *that closure stays ALIVE, and data can continue to exist in these closures!
  */
  
  /**
   * A JavaScript function is a block of code designed to perform a particular
   * task. A JavaScript function is executed when "something" invokes "calls it".
   * Reuseable blocks of code that accepts inputs, process those inputs,
   * and returns a new data value.
   */
   
   /**
    * There are 4 parts to a function declaration.
    * 1) Name 2) Parameter 3) function body 4) Return statement
    */
    function add(num1, num2){
     return num1 + num2;
    }
  add(22, 11)//returns 33
  
  /**
   * Function names can contain letters, digits, underscores, and dollar signs
   * (same rules as variables). The parentheses may include parameter names 
   * seperated by commas: (string1, string2, string3),
   */
   
  function concat(string1, string2, string3){
   return string1 + " " + string2 + " " + string3;
  } 
  console.log("CurlyBoy", "will break", "your code!!");
  console.log("We", "are", "coding!!");
  
 /** The JavaScript Increment and Decrement Operators are used to increase
  * or decrease the value.
  */
  var button = 0;
  function buttonPress(){
   button++;
  }
 buttonPress()//returns 1
 buttonPress()//returns 2
 buttonPress()//returns 3
 buttonPress()//returns 4
 buttonPress()//returns 5
 console.log(buttonPress)//returns 5
 
/**
 * Function Closures:
 * Function Closures means that an inner function always has access to the 
 * variables and parameters of its outer function, even after the function
 * has returned.
 * A closure is a function having access to the parent scope, even after the
 * parent scope function has closed.
 */
 var subtract = (function(){
  var counter = 100;
  return function(){
   counter -=10;
   };
 })();
 subtract();//returns 90
 subtract();//returns 80
 subtract();//returns 70
 subtract();//returns 60
 subtract();//returns 50





























