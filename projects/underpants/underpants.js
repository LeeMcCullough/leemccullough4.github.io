// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;//return value unchanged
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
// if (typeof(value) === 'string') {//compare value to string
//         return 'string';
//     } else if (typeof(value) === 'boolean') {//compare value to boolean
//         return 'boolean';
//     } else if (typeof(value) === 'number') {//compare value to number
//         return 'number';
//     } else if (typeof(value) === 'undefined') {//compare value to undefined
//         return 'undefined';
//     } else if (typeof(value) === 'function') {//compare value to function
//         return 'function';
//     } else if (typeof(value) === 'object') {//compare value to objects
//         if (value === null) {//compare value to null
//             return 'null';
//         } else if (value instanceof Date === true) {//compare value to instanceof
//             return 'date';
//         } else if (Array.isArray(value) === true) {//compare value to array
//             return 'array';
//         } else return 'object'
//     }
 if(Array.isArray(value) === true) return "array";   
 if(value === null) return "null";
 if(value instanceof Date) return "date";
 else return typeof value;
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
  if(!Array.isArray(array)){//if array is not array return []
      return [];
  }else if(!number){//if number is not a number return 1st element
      return array[0];
  }else{//otherwise return 1st num of array
      return array.splice(0, number);
  }
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number){
    if(!Array.isArray(array)){//if array is not array return []
        return [];
    }else if(number > array.length ){//if number is greater than array.length
        return array;//return array
    }else if(number){//if number is not given return last element
        return array.splice(array.length - number, number);
    }else if(!number){//otherwise return last number
        return array.pop();
    }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value){
    if(!array.includes(value)){//if array is not array return -1
        return -1;
    }if(array.includes(value)){//if array includes value
        for(let i = 0; i < array.length; i++){//loop over array length
            if(value === array[i]){//compare value to array index
                return i;//return index
            }
        }
       }
    };
// _.indexOf = function(array, value){
//     for (var i = 0; i <= array.length-1; i++){
//         if (array[i] === value){
//             return i
//         } 
//     } if (value !== array[i]){
//         return -1
//     }
// }

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
_.contains = function(array, value){
    return array.includes(value) ? true : false//using ternary operator find 
    //array that contains value if true return true if false otherwise 
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collect, func){
    if(Array.isArray(collect)){//use arrray.isarray in collection
        for(let key in collect){//loop over collection array
            func(collect[key], key, collect)//return function each
            //elem, index, collection
        }
    }    else{
            for(let x in collect){//loop over coleection object
                func(collect[x], x, collect);//return func for each
                //elem, index, collection
        }
    }
}

/** _.unique
* Arguments:
*   2) Use _.indexOf() from above
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
_.unique = function(array){
    return [...new Set(array)]//return new Set to remove duplicates.


//     var newArr = [];
//   for(var i = 0; i < array.length; i++){
//       if(_.indexOf(newArr, array[i]) === -1){
//           newArr.push(array[i]);
//       }
//   } 
//   return newArr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func){
 let filteredArray = [];//declare empty array
    _.each(array, function(elements, i, array){//use each function to elminate 
    //loops. each will go over each element passing the arguments
        if (func(array[i], i, array)) {//for each element called by func will 
        //return true values.
            filteredArray.push(array[i])//push new array values into filteredArray
        }
    }); return filteredArray;
 

    // let filterArray = [];
    // for(let i = 0; i < array.length; i++){
    //     if(func(array[i], i, array) === true){
    //         filterArray.push(array[i]);
    //     }
    // }return filterArray;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
_.reject = function(array, func){ 
    return _.filter(array, function(ele, i, array){//using filter function to call
    //each element in array passing the arguments
        return (!(func(array[i], i, array)));//return new array of elements
    });
};
// _.reject = function(array, func){
//   _.filter(array, function(elements, i, array)
//       return !func(elements, i, array);
// //if(!func(elements, i, array)){
// //           return array.splice(0, array);
// //       }
// //   }) 
// }

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
  return [_.filter(array, func), _.reject(array, func)];//use filter function to
  //to return truthy values and reject to return falsy values.
    
    // let arrTruthy = [];
    // let arrFalsey = [];
    // for(let i = 0; i < array.length; i++){
    //     if(func(array[i], i, array)){
    //     arrTruthy.push(array[i]);
    //     }else if(!func(array[i], i, array)){
    //         arrFalsey.push(array[i]);
    //     }
    // }
    // let arrReturn = [];
    // arrReturn.push(arrTruthy, arrFalsey);
    // return arrReturn;
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
_.map = function(collect, func){
   let results = [];//declare empty array to collect results
    _.each(collect, function(elements, index, array) {//using each to loop over
    //collection to determine if array.isarray and object.isobject
        results.push(func(collect[index], index, collect));//push values from 
        //collection into results array
    }); return results;//return results
};
    // let array = [];
    //     if(Array.isArray(collect)){
    // for(let i = 0; i < collect.length; i++){
    //         //for(let key in collect){
    //      array.push(func(collect[i], i, collect));
    //         }
    //     }
    // if(Object(collect)){
    //     for(let key in collect){
    //         array.push(func(collect[key], key, collect))
    //     }
    // return array;
    // }

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
_.pluck = function (array, property){
     return array.map(function(obj){//return array using map function for every
     //element in array
         return obj[property];//return objects of array containing objects
  })
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

    _.every = function(collection, func) {
    let trueOrFalse = true;//declare variable set to "true"
    _.each(collection, function(element, index, collection) {//use each func for 
    //looping over collection 
        if(_.typeOf(func) === 'function' && !func(element, index, collection)) {
            //if type of equals "function" and use bang(not) func
            trueOrFalse = false;
        } else if (element === false) {
            trueOrFalse = false;
        }
    }); return trueOrFalse;
};
    // if(Array.isArray(collect)){
    //   if(func === undefined){
    //       for(let i = 0; i < collect.length; i++){
    //           if(collect[i] === false){
    //               return false
    //           }
    //       }
    //       return true
    //   } else{
    //       for(let i = 0; i < collect.length; i++){
    //           if(func(collect[i], i, collect) === false){
    //               return false;
    //           }
    //       }
    //   }
    // }else{
    //     if(func === undefined){
    //         for(let keys in collect){
    //             if(collect[keys] === false){
    //                 return false;
    //             }
    //         }
    //         return true;
    //     }
    //     for(let keys in collect){
    //         if(func(collect[keys], keys, collect) === false){
    //             return false;
    //         }
    //     }
    // }
    // return true;

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
    _.some = function(collection, func) {
    let trueOrFalse = false;
    _.each(collection, function(element, index, collection) {
        if(_.typeOf(func) === 'function' && func(element, index, collection)) {
            trueOrFalse = true;
        } else if (element === true) {
            trueOrFalse = true;
        }
    }); return trueOrFalse;
}
    // if(Array.isArray(collect)){
    //     if(func === undefined){
    //         for(let i = 0; i < collect.length; i++){
    //             if(collect[i] === true){
    //                 return true;
    //             }
    //         }
    //         return false;
    //     }else{
    //         for(let i = 0; i < collect.length; i++){
    //             if(func(collect[i], i, collect) === true){
    //                 return true;
    //             }
    //         }
    //     }
    // }else{
    //     if(func === undefined){
    //         for(let keys in collect){
    //             if(collect[keys] === true){
    //                 return true;
    //             }
    //         }
    //         return false;
    //     }
    //         for(let keys in collect){
    //             if(func(collect[keys], keys, collect) === true){
    //                 return true;
    //             }
    //         }
    // }
    // return false;


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, func, seed){
    if(seed === undefined){//determined if seed is undefined
        seed = array[0];//set seed to 1st index
        for(let i = 1; i < array.length; i++){//loop over array
            seed = func(seed, array[i], i);//the return 1st value is set to seed
        }
        return seed;//return seed
    }else{//else, if no seed result return seed
        for(let i = 0; i < array.length; i++){
            seed = func(seed, array[i], i);
        }
        return seed;
    }
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
_.extend = function(...object){
    let arrayObj = [...object];
    if(arrayObj.length === 1){
        return arrayObj[0];
    }
    for(let i = 1; i < arrayObj.length; i++){
        for(let key in arrayObj[i]){
            arrayObj[0][key] = arrayObj[i][key];
        }
    }
    return arrayObj[0];
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
