/**
 * Loops:
 * examples are for, for in, for of, and while
 * Loops can run the same code over and over again, each time with a different
 * value. They can iterate over arrays or strings to search for certain values.
 */
 
 /**
  * JavaScript supports different types of loops:
  * for - loops through a block of code a number of times.
  * for/in - loops through the properties of an object.
  * for/of - loops through the values of an iterable object.
  * while - loops through a block of code while the specified condition is true.
  * do/while - also loops through a block of code while a specified
  * condition is true.
  * Often this is the case when working with arrays.
  */
  
  /**
   * for loops: allows us to repeat as many times as you want or over iterate
   * the length of a string or array.
   * the setup for a "for" loop is the keyword
   * for{
    (start; stop; increment)
   }
   */
   for(var i = 0; i < 10; i++){
    console.log("hello!!");
   }
   /**
    * While loop:
    * A while loop will continue to run as long as the condition is true.
    */
    let count = 1;
    while(count < 10){
     console.log(count);
     count += 2;
    }
    
    /**
     * For In Loops:
     * for in loops are used to loop over properties of objects.
     */
     let milesRun = {
      monday: 4,
      tuesday: 4,
      wednesday: "rest day",
      saturday: 6,
      sunday: 7
     };
     for(var key in milesRun){
      console.log(key);//returns monday, tuesday, wednesday, saturday, sunday
      console.log(milesRun[key]);//returns monday 4, tuesday 4, 
      //wednesday "rest day", saturday 6, sunday 7
     }
    
    /**
     * Loop over an array forward and backwards
     */
     //Forward:
     let myArray = ["one", "two", "three", "four"];
     for(var j = 0; i < myArray.length; i++){
      console.log(myArray[j]);
     }//returns one two three four
    
    //Backwards:
    var array = [1, 2, 3, 4, 5];
    for(var i = array.length -1; i > 0; i--){
     console.log(array[i]);
    }//returns 5 4 3 2 1
    
    //Loop over an Object
    var fruits = {
     apple: 28,
     orange: 17,
     pear: 54
    };
    for(var key in fruits){
     console.log(key);// returns apple, orange, pear
     console.log(fruits[key]);// returns apple 28, orange 17, pear 54
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    