/**
 * The statements "if "else If" and "else" in javascript means exactly what the sound like,
 * if something is true do this, or else do something sles.
 * Both these statements are used very often in the langauage in order
 * to control programs data dlow.
 * Also known as conditional logic. Control flows allow us to be able
 * to run code based on logic.
 */
 
   let lightColor = 'orange';
  /* If: runs code "if" the logic is true, "if false" runs "else if"
  * In conditional statements you're aonly allowed 1 "if" statement.
  */
  if(lightColor === "green"){
      console.log("go");
  
  
  /**
   * Adding another condition after the "if" statement.
   * Since the "if" statement was false we are now running the "else if"
   * If "else if" is false run the next statement to see if true.
   * We are able to have multiple "else if" statements.
   */
  }else if(lightColor === "yellow"){
      console.log("slow");
  /**
   * since the above conditional "else if" is false we are able to run 
   * as many "else if" statements as needed.
   */
  } else if(lightColor === "red"){
      console.log("stop");
 /**
  * if the "if" or "else if" have been proven not true, then the
  * "else" statement will run final final statement.
  * We are only allowed 1 "else" statement in our conditional statement.
  */
  }else{
      console.log('GO HOME!!');
    // This concludes our conditional statement and we console "GO HOME!!"
    
    /**
     * The Switch:
     * The switch expression is evaluated one the expression is compared
     * with the values of each case.
     * When there is a match, the code is excuted.
     * If none of the cases are a match, the default is excuted.
     */
     
     /**
      * Using Switch Statements over "if" "else" statement:
      * 
      * Switch statements have a cleaner look.
      * Comparing multiple conditions.
      * Multiple values that have the same code.
      */
      
      /**
       * Using "if" statements over "Switch" statements:
       * 
       * Test truthy or falsy values
       * Evaluate expressions
       */
       var color = "purple";
       switch(color){
           case "green":
               console.log("go");
               break;
           case "yellow":
               console.log("slow");
               break;
            case "red":
                console.log("stop");
                break;
            default:
                console.log("GO HOME!!");
       }
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
  }