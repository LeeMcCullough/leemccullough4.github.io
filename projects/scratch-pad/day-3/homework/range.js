// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
  //let array = [];
  //declare array literal
var numbers = [];
//using "if" compare start vs end
	if (start < end) {
	    //loop from start to end
	    for (var i = start; i <= end; i++) {
	        //push into array
	        numbers.push(i);
		}
		//else statement for reverse
	}  else {
	    //loop in reverse
		for (var i = start; i >= end; i--) {
		    //push into array
			numbers.push(i);
		}
	}
	//return numbers
	return numbers;
  
  
  
  
  
  
  
  
//   let array = [];
//   for(let i = start; i <= end; i++){
//      for(let i = end.length -1; i >= start; i--)
//      array.push(i);
//   }
// return array
    // if(start > end){
    //     for(let i = end.length -1; i >= start; i--){
    //         array.push(i);
    //     }
    // } 
    // for(let i = array.length -1; i >= 0; i--){
    //   array.push(i); 
    // }
    
// for(let i = end.length-1; i >= start; i--){
//     array.push(i);
// }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}