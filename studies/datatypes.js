/**
 * Datatypes:
 * number: 9;
 * Boolean: True or False;
 * 
 * Array: ["Lee", "McCullough"];
 * 
 * Object: Object{
     car: "ford",
     children: 2,
     runner: true
 };
 */
 
 /**
  * Functions:
  * Reuseable blocks of code that accepts inputs, processes those inputs,
  * and returns a new data value.
  * 
  * undefined: A variable without a value. The value is undefined.
  * null: In JS null is "nothing". Null is defined as a datatype
  * The type is also undefined.
  * var person;
  * 
  * and is also defined as a "object".
  * 
       let e = d;
  * NAN: Also known as "Not a Number".
  * 
  * Infinity: Value that is greater than any other number.
  * 
  * -Infinity: -Infinity is a numeric value that represents negative infinity.
  * 
  * Primitive Simple Data Types: Simple data values with no additional
  * properties and methods.
  * 
  * Complex Data Types: A complex datatype is a datatype that contains more
  * than one simple type.
  * 
  * Strings: A string can contain any number of characters, including none at
  * all, and those characters can be letters, numbers, and symbols.
  * A string is traditionally a sequence of characters, either as a literal
  * constant or as some kind of variable.
  * A string(or a text string) is a series of characters like "Lee McCullough".
  * Strings are written with quotes. You can use single or doubles quotes.
  */
  let firstName = "Lee";
  console.log(firstName);
  
  /**
   * The indexOf() method returns the position of the first occurrence of a 
   * specified value in a string.
   */
   let lastName = "McCullough";
   lastName.indexOf("o");//returns 6
   
   /**
    * The Bracket Notation is to treat the string as an array-like object,
    * where individual characters correspond to a numerical index.
    */
    let fullName = "Lee McCullough";
    console.log(fullName[6])//returns "C"
    
    /**
     * Numbers: JavaScript has only one type of numbers.
     * Munbers can be written with, or without decimals.
     */
     let x = 73;
     console.log(x);
     
     /**
      * Booleans: Booleans can only have two values: True or False
      */
      let a = 5;
      let b = 5;
      let c = 7;
      (a === b); //returns true
      (b === c); //returns false
      
      /**
       * Copy by Reference vs Copy by Value
       * Complex values are COPY BY REFERENCE.
       * A copy by reference is so only the address is being passed.
       * When you assign a variable, it it a reference to an object
       * not the object itself.
       * When you copy an object b = a bothe variables will point to the
       * same addresss.
       */
       let d = {runner: "Lee"};
       let e = d;
       console.log(d) // => {runner: "Lee"}
       console.log(e) // => {runner: "Lee"}
       
       d.runner = "Cassie";
       
        console.log(d) // {runner "Cassie"}
        console.log(e) // {runner "Cassie"}
        
 /**
  * Copy by Value:
  * Simple(Primitive) values are COPY BY VALUE.
  * A copy by memory of the actual parameter's value that is passed in.
  * Typically if you aren't going to change a variable, you use Copy by Value.
  * The address of that value is what's actually copied over as if it 
  * were a primitive value.
  */
  let z = 5;
  let w = z;
  
  console.log(z); // => 5
  console.log(w); // => 5
  
  z = 1;
  
  console.log(z); // => 1
  console.log(w); // => 5
  
 /**
  * Arrays are written with square brackets. Arrays are a collection
  * of information.
  */
  var cars = ["Ford", "Chevy", "Honda"];
  console.log(cars);
  /**
   * Arrays can be accessed by index values. They can be determined by indvidual
   * index values values starting at zero and counted by the length of the
   * array by using bracket notation or dot notation.
   * They can also be determined by their entire index value using the 
   * .length method.
   */
   let hobbies = ["running", "golf", "walking", "eating"];
   console.log(hobbies[3]); //returns eating
   console.log(hobbies.length); // returns 4
   
   let hobbies2 = ["running", "golf", "walking", "eating"];
   console.log(hobbies2.length);//returns 4
   
   /**
    * Objects:
    * Objects are written with curly brackets ({})
    * Objects are written with key/value pairs, seperated b commas.
    */
    let person = {
     firstName: "Lee",
     lastName: "McCullough",
     married: true
    };
    console.log(person);
    
    /**
     * Accessing values from Objects using Dot Notation.
     */
     let running = {
      parkLaps: "6 miles",
      stCharles: "7 miles"
     };
     let mileage = running.stCharles;
     console.log(mileage);//returns 7 miles
     
     /**
      * Functions:
      * reuseable procedures
      * A chunk of code that allows us to use multiple times throughout
      * our code.
      * 1. Define functions 2. Execute Functions
      */
      function greeting(){
       console.log("Hello");
       console.log("How are you?");
      }
      greeting();//Calling the function
     //Parameters and Arguments are what we use to to help call the function
     function add(num1, num2){
      num1 + num2;
     }
       add(45, 34);//returns 79
     /**
      * "add" is the function name
      * (num1, num2) are the parameters
      * num1 + num2 are the actions being performed in the function.
      * add(45, 34) is the function being called with the arguments.
      */
      
      /**
       * Undefined:
       * A variable that has been identified by not yet being assinged.
       */
       var greeter;
       console.log(greeter);//prints undefined
       
       /**
        * Null:
        * A datatype that is purposly assinged without value.
        */
        var greet = null;
        console.log(greet);//returns null
        
        /**
         * NAN:
         * Defined as not a number(Not A Number)
         */
         let zeroOverZero = 0 / 0;
         console.log(zeroOverZero); // NaN
         
         /**
          * Infinity and -Infinity
          * Infinity is a value that is greater tan any other number
          * -Infinity is a value which is the lowest available
          */
          
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    