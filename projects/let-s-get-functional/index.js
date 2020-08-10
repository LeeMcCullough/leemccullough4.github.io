// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-leemccullough");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./leemccullough4.github.io/projects/let-s-get-functional
 *    npm start --prefix ./projects/let-s-get-functional    
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    /**
  * find male customers 
  * I: array
  * O: number
  * C: use filter
  */
return _.filter(array, function(customerArr){
    return customerArr.gender === "male";//return array counts compared to male
}).length//// filter out all the male customers
};

var femaleCount = function(array){
    /**
 * find female customers 
 * I: array
 * O: numbmer
 * C: use reduce
 */
    return _.reduce(array, function(counter, customerObj){
    // run reduce passing in the array and a fucntion that takes a counter and a customer obj
       if(customerObj.gender === "female"){// if the gender key's value is female
           counter ++;// add one to counter
       } 
       return counter;
    },0);
};

var oldestCustomer = function(array){
    /**
 * find the oldest customers name
 * I: array
 * O: string
 */
    const ages = _.pluck (array, "age");
    let max = ages[0];//variable max set to 1st index
    for(let i = 0; i <= ages.length; i++){//loop over "ages" array length
        if(max < ages[i]){//"if" max is less than ages index
            max = ages[i];//set "ages" index to "max" variable
        }
    }
    for(let j = 0; j <= array.length -1; j++){//loop over array.length
        if(array[j]["age"] === max){//if index array "age" is the max 
            return array[j]["name"];//return name of oldest customer
        }
    }
};

var youngestCustomer = function(array){
    /**
 * find the youngest persons name
 * I: array
 * O: string
 */
    const ages = _.pluck(array, "age");
    let min = ages[0];//variable min set to 1st index
    for(let i = 0; i < ages.length; i++){//loop over "ages" array length
        if(min > ages[i]){//"if" min is great than ages index
            min = ages[i];//set "ages" index to "min" variable
        }
    }
    for(let j = 0; j < array.length; j++){//loop over array.length
        if(array[j]["age"] === min){//if index array "age" is the min 
            return array[j]["name"];//return name of youngest customer
        }
    }
};

var averageBalance = function(array){
    /**
 * find the overage balance of all the customers
 * I: Array
 * O: Number
 * reduce
 */
return _.reduce(array, function(sum, customer){
    let balance = Number(customer.balance.replace(/[^0-9\.]+/g, ''));//Replace non-numeric characters
    sum += balance;//add sum and balance
        return sum;//return sum
   },0)/array.length;
};


var firstLetterCount = function(array, letter){



    /**
 * find out how many names begin with a character
 * I: Array, letter
 * O: number
 */
const nameArray = _.pluck(array, "name");
var count = 0;
for(let i = 0; i <= nameArray.length -1; i++){
    if(nameArray[i].charAt(0) === letter.toUpperCase()){
        count += 1;
    }
}
return count;
};



var friendFirstLetterCount = function(array, name, letter){
/**
 * find how many friends of a given customer have names that start with a given number
 * I: array, customer, letter
 * O: number
 */
 let customerIndex = [];
_.filter(array, function(customerObj, i) {// use filter to check to see if the customer's name is in the array
    return customerObj.name.toLowerCase() === 
    name.toLowerCase() ? customerIndex = i : -1;// if it is return the 
        //index to the customerIndex var if not return -1
});
    // use reduce to get the number of each friend the array will be the friends array of the
return _.reduce(array[customerIndex].friends,
function(total, currentFriend) {// use reduce to get the number of each friend 
    if (currentFriend.name[0].toLowerCase() === letter.toLowerCase()) {
            // if the first letter is the same as one if the first characters
    total++// then add one to the total. using to lower case
   }
    return total;// return the total and return the reduce function
  }, 0);
};
//   let newArray;
//   for(let i = 0; i < array.length; i++){
//       if(array[i]["name"] === name){
//           newArray = (array[i]["friends"]);
//       }
//   } 
//   //console.log(newArray);
//   let count = 0;
//   for(let i = 0; i < newArray.length; i++){
//       if(newArray[i]["name"].charAt(0) === letter.toUpperCase()){
//           count++
//       }
//   }
//   return count;
// };

var friendsCount = function(array, name){
/**
 * find the customer's names that has the given customer's name in there friend count
 * I: array, name;
 * O: array
 */
let friendsArray = [];
_.each(array, function(customerObj) {// use each to loop though the customers array
 _.filter(customerObj.friends, function(friendsObj) {// use filter to find a 
 //name that macthes the argument name.
    if  (friendsObj.name === name) {// convert the names in the friends array
    //and the argument name and check if they match
        friendsArray.push(customerObj.name);//   if we find a match push friends array
         }
    });
  });
    // return the friendsArray;
    return friendsArray;
};
//     let namesFriends = [];
//     const friends = _.pluck(array, "friends");
//     for(let i = 0; i < friends.length; i++){
//         for(let j in friends[i]){
//             if(friends[i][j].name === search){
//                 namesFriends.push(array[i].name);
//             }
//         }
//     }
//     return namesFriends;

//var topThreeTags = function(array){
var topThreeTags = function(array){
    //I:an array
    //O: an array of top three tags customers used 
    //C:N/A
    const tags= _.pluck(array,"tags"); 
    var uniqueTags = tags[0]; 
    for(let i=1;i<=tags.length-1;i++){// for loop over array to obtain data 
        for(let j=0;j<=tags[i].length-1;j++){// another for loop to obtain data, pulling tags 
            uniqueTags.push(tags[i][j]);// pushes all tags from all
            //customers into new array, uniqueTags 
        }
    }
    uniqueTags=_.unique(uniqueTags);
    var counts = {}; 
    for(let l=0;l<=uniqueTags.length-1;l++){// for loop over array 
        counts[uniqueTags[l]]=0; 
        for(let k=0;k<=tags.length-1;k++){// loops over original plucked array 
            if(_.contains(tags[k],uniqueTags[l])){// runs contains function to 
            //see how many times particular tag appears 
                counts[uniqueTags[l]]++; 
            }
        }
    }
    var top = [];// assigned to array literal
    var highest;// declare highest 
    while(top.length<3){// while loop will run until top three tags acquired 
        var start = 0;//initialize placeholder
        for(var key in counts){// for in loop to access data within count 
            if(counts[key]>start){// if value of counts is greater than comparison
                highest = key;// assigns tag to highest
                start = counts[key];// assigns comparison to new highest value
            }
        }
        top.push(highest);
        delete counts[highest];// removes highest count tag from counts object
        //to avoid multiple instances
    }
    return top;
};

var genderCount = function(array){
    //I:  
    //O:  
    //C: reduce
const genders = _.pluck(array, "gender");
const count = {"male": 0, "female": 0, "non-binary": 0};//create objects to hold counts
for(let key in count){//use "for in loop"
    count[key] = _.reduce(genders, function(prevCount, gender, index){//apply reduce
        if(gender === key){//reduce will check how many given genders appear in array
            return prevCount += 1;
        }else{//and then will assign that count to gender key in object count
            return prevCount;
        }
    },0);
}
    return count;
};   
// _.reduce(customers, function(value, current){
//     if (value[current.gender]){
//         value[current.gender] += 1;
//     } else {
//         value[current.gender] = 1;
//     }
//     return value;
// }, {});

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
