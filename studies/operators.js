/**
 * Operators:
 * 
 * Assignment Operators: =, +=, -=, *=, /=
 * 
 * Arithmetic Operators: +, -, *, /, %
 * 
 * Comparison Operators: >, <, >=, <=, ===, /=
 * 
 * Logical Operators: !(not), &&(and), || (or)
 * 
 * Unary Operators: !, typeOf, -
 * 
 * Ternary Operators: a ? b : c
 */
 
 /**
  * JavaScript Assignment Operators
  * Assignment Operators assign values to JavaScript variables.
  * Assignment Operator = assigns a value to a variable.
  */
  var a = 1;
  console.log(a);
  
  /**
   * Assignment Operators are used to perform arithmetic on numbers.
   */
   var b = 5;
   var c = 2;
   var d = b + c;
   console.log(d);// returns 7
   
   //Addition:
   var add = 10;
   console.log(add += 10);//returns 20
   
   //Subtraction:
   var subtract = 15;
   console.log(subtract -= 10);//returns 5
   
   //Multiplication:
   var multiply = 5;
   console.log(multiply *= 5);//returns 25
   
   //Division:
   var divide = 30;
   console.log(divide /= 6);//returns 5
   
   /**Comparsion Operartors:
    * Comparsion operators are used to make decisions and compare on value
    * to a second value.
    */
    var age = 18;
    if(age < 18){
     console.log("Too Young");
    }
    
  /**
   * Operator Description
   *  == equal to(looks for equality of value, but not type of)
   */
    1 == "1"//returns true
  /**
   * ==== strictly equal to
   */
    21 === 21//returns true
  /**
   * !=(not equal to) !==(not equal value or not equal type)
   */
    1 != 1//returns true
    1 !== 1//returns false
  /**
   * > (greater than) < (less than)
   */
   14 > 13//returns true
   14 < 13//returns true
   /**
    * >=(greater than equal to) <=(less than equal to)
    */
    15 >= 6;//returns true
    15 <= 6;//returns false
   
   /**
    * Logical Operators:
    * Logical operators are able to join mulitiple pieces of logic together.
    * Both sides must be true in order for the expression to be true.
    */
    20 === 20 && 30 === 30//returns true
    20 === 20 && 20 <= 29//returns false because the second side is false
    
    /**
     * || (OR) Operators:
     * Only needs one side to be true for the expression to be true.
     */
     var age = 16;
     if(age < 12 || age > 5){
      console.log("only needs one side to be true");
     }
   /**
    * Although the first expression is false, the second is true, so the console
    * will print "only needs one side to be true".
    */
    
    /**
     * Unary Operators:
     * A unary operator is one that takes a single operand/argument and 
     * performs an operation. A unary operation is an operation with only 
     * one operand. This operand comes either before or after the operator.
     * Unary operators are more efficient than standard JavaScript 
     * function calls.
     */
   
   /**
    * Ternary Operator:
    * The ternary operator is an operator that exists in some programming
    * languages, which takes three operands rather than the typical one or 
    * two that most operators use. It provides a way to shorten a simple
    * if else block. For example, consider the below JavaScript code.
    * var num = 4, msg = ""; if (num === 4) {
    */ 
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   