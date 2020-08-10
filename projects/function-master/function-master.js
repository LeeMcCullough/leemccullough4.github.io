//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    //using standard .values notation to return values
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //using standard .keys notation to return all its keys 
    //and joined by a space. 
 return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //declare empty array
    var array = [];
    //use "for in" loop through object
    for(var key in object){
        //if 'typeof' key is equal to string
        if(typeof object[key] === 'string'){
            //push values into empty array
        array.push(object[key]);
        }
        //return array joined with space.
    }return array.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)) return "array";
    if(Object(collection)) return "object";
    // if(collection instanceof Array) return "array";
    // if(collection instanceof Object) return "object";
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
   return string[0].toUpperCase() + string.slice(1); 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let array1 = string.split(" ");
    let array2 = [];
    for(let i = 0; i < array1.length; i++){
        array2.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
    }
    return array2.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
let name = object.name[0].toUpperCase() + object.name.slice(1);
return `Welcome ${name}!`
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
let name = object.name[0].toUpperCase() + object.name.slice(1);
let species = object.species[0].toUpperCase() + object.species.slice(1);
return `${name} is a ${species}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(object.noises === undefined || object.noises.length === 0){
    return "there are no noises";
    }else{
        return object.noises.join(" ")
    }

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if(string.includes(word)){
        return true
    }else{
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
 object.friends.push(name)
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
if(Object.values(object).length === 0){
    return false;
}else if(object.friends.includes(name)){
    return true;
}else{
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
// let nonFriends = [];
// for(let i = 0; i < array.length; i++){
//     if(name === array[i].name){
//     }
//     if(!(array[i]["name"] === name) && !array[i]["friends"].includes(name)){
//         nonFriends.push(array[i]["name"]);
//     }
// }
// return nonFriends;
let notFriends = [];
    for(let key in array) {
        if (array[key].name !== name) {
            if (array[key].friends.includes(name)) {
        } else {
            notFriends.push(array[key].name)
        }
    }
}return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//loop through the keys in our object
    for (let key in object) {
// if the array includes an objects key
        if (array.includes(key)) {
//then delete that objects key
            delete object[key];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//  let dedup2 = [];
//  for(let i = 0;i < array.length; i++){
//      if(!dedup2.includes(array[i])){
//          dedup2.push(array[i]);
//      }
//  }
//     return dedup2
    
    
    
    
let dedup2 = [...new Set(array)];
return dedup2;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}