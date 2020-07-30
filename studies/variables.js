     
/**
 * Variables:
 * Are made to hold things in memory during the life-cycle of a program.
 * They are named identifiers that can point to values of a particular type, 
 * like a Number, String, Boolean, Array, Object and other data types.
 * Variables are called so once they are created we can change the value
 * (and type of value) to which they point too.
 * 
 * 1. To create a variable we us the var, let or const keyword followed by the
 * name for our variable.
 * 
 * 2. There are 2 phases of using a variable: 
 *      declaration and initialization(or assignment).
 */
 
 // 1. Declaration:
 var myName;
 /**
  * At the declaration phase, the variable myName is is undefined because we
  * have NOT initialized it to anything.
  */
  console.log(myName);//returns Undefined
  
  /**
   *  2. initialization or assignment:
   */
   myName = "John";
   console.log(myName);// returns John
   
   /**
    * 3. re-assignment:
    */
    myName = "bob";
    console.log(myName);//returns Bob
    
    /**
     * We can assign and re-assign anything to a variable.
     * We can not do this with the keyword const.
     */
     var myVariable = 1;
     var myVariable = true;
     myVariable = "someString";//returns someString
     
     /**
      * var, let, const:
      * These are keywords to declare a variable.
      * let:
      * let is the same as var inside a function and global scope.
      * let cannot be re-declared if var or const were used to originally
      * used to declare the variable.
      */
      let babyAge = 2;
      /**
       * declaring a variable babyAge and assign it to 2.
       * let variables have a block scope.
       */
       function numberKids(){
           let kids = 2
       }
      /**
       * kids cannot be accessed outside of the function numberKids.
       * let and const declarations can only be accessed withing their block.
       * let and const are both hoisted to the top but are not initialized.
       */
       
       /**
        * const:
        * const stands for "constants"
        * it can not be changed once it is initialized
        * const must be initialized during declaration, unlike var and let.
        */
        const kids = 2;//returns 2
        //kids = 3;//returns error because it's already assigned.
        //const is great when you have values that you know you will not change.
        const name = "Lee"//returns Lee
        const houseNumber = 7911;//returns 7911
        const zipCode = 70125;//returns 70125
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     