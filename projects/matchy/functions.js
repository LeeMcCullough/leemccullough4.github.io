/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create function "search" with 2 parameters array & name(object)
function search(array, name){
    //loop through array and return animals object
    for(let i = 0; i < array.length; i++){
        if(array[i]["name"].toLowerCase() === name.toLowerCase()){
            return array[i];
        }
        //return null if no animals with that name exist
    }return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create function replace with 3 parameters array, string, object
function replace(array, name, object){
    //loop through array to search replacement object
    for(let i = 0; i < array.length; i++){
        //use if statement then splice to replace entire object
        if(array[i]["name"].toLowerCase() === name.toLowerCase()){
         array.splice([i], 1, object);   
        }
        //otherwise do nothing
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create function called remove with 2 parameters of array and a string
function remove(array, name){
    //use for loop to iterate through array
    for(let i = 0; i < array.length; i++){
        //if animals(array) with that name exist remove it
        if(array[i]["name"].toLowerCase() === name.toLowerCase()){
         array.splice([i], 1);   
        }
        //otherwise do nothing
    }
}





//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create function with 2 parameters array and object
function add(array, object){
    //use if statement to check animal object has a name property
    if(object["name"].length > 0 && object["species"].length > 0){
        //loop through array to check names
        for(let i = 0; i < array.length; i++){
            //add new object to the animals array, if all other conditions pass
            if(array[i]["name"].toLowerCase() === object["name"].toLowerCase()){
                return;
            }
            //push array to object
        }array.push(object);
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
