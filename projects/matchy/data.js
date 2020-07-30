/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create animal array with array literal
var animal = {};
//use dot notation for animal property
animal.species = "dog";
//use bracket notation for name property
animal["name"] = "Lizzie";
//animal property using dot notation
animal.noises = [];
//console.log animal
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create variable with array literal
var noises = [];
//bracket notation with index 1 to assign noise
noises[0] = "woof";
//add noises to the end and begining using "push" and "unshift"
noises.push("growl");
noises.unshift("sniffff");
noises[noises.length] = "yelppp";
//console.log length, last index, whole array
console.log(noises.length);
console.log(noises.length -1);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//using bracket assign noises property on animal to our new noises
animal["noises"] = noises;
//create new noise assign noises to animal
animal.noises.push("cry");
//console.log animal
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create animals to array literal
var animals = [];
//push "animals" to animal and console.log animals
animals.push(animal);
console.log(animals);
//create object variable duck and assign species, name, and noises
var duck = {
    species: "duck",
    name: "Jerome",
    noises: ["quack", "honk", "sneeze", "woosh"]
};
//push duck to animals and console.log animals
animals.push(duck);
console.log(animals);
//create object variable chicken and assign species, name, and noises
var chicken = {
    species: "fowl",
    name: "Larry",
    noises: ["cluck", "peck"]
};
//push chicken to animals and console.log animals
animals.push(chicken);
console.log(animals);
//create object variable lion and assign species, name, and noises
var lion = {
    species: "cat",
    name: "Simba",
    noises: ["roar", "purrr"]
};
//push lion to animals and console.log animals
animals.push(lion);
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I used array literal because you can store objects inside of arrays.
//create variable friends with array literal
var friends = [];
//create function of Math.random inside of Math.floor to give whole numbers
function getRandom(array){
    return Math.floor(Math.random(array) * array.length);
}
//create variable index to assign getRandom(animals)
let i = getRandom(animals);
//push friends into our animals array
friends.push(animals[i].name);
//console.log friends
console.log(friends);
//use bracket notation to add friends list as a property also named friends.
animal["friends"] = friends;
//console.log animal with array of friends.
console.log(animal[friends]);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}