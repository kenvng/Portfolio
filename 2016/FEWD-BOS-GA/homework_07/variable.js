
// Lets create a person in javascript. We could use a variable...
var person = "John Doe";


// To print our persons name we could do...

var person = "John Doe";
console.log(person) // John Doe


// Well a person has more than a name so lets add an age and eye color. We could make more variables...

var person = "John Doe";
var person_age = 50;
var person_eye_color = "Blue"; 


// But our data is all individual variables and not grouped to make a person anymore. We could use an array...

var person = ["John Doe", 50, "Blue"]


// To print our persons name, age, and eye color we could do...

var person = ["John Doe", 150, "Blue"] // this is an ARRAY

console.log(person[0]) // John Doe

console.log(person[1]) // 150

console.log(person[2]) // Blue


// Ok, now lets print a sentence with our person in it like we might do on a webpage, maybe a profile.

var person = ["John Doe", 150, "Blue"]

console.log("The great" + person[0] + ", with striking " + person[2] + " eyes, was a spry " + person[1] + " years old.");


// There are other qualities we might want to add to describe our person like maybe species, number of legs, and number of arms. We could doâ€¦

var person = ["John Doe", 150, "Blue", "Human", 2, 2]


// Ok, now lets print a sentence with our person in it like we might do on a webpage again.

var person = ["John Doe", 150, "Blue", "Human", 2, 2]

console.log("The great" + person[0] + ", with striking " + person[2] + " eyes, was a spry " + person[1] + " years old. A " + person[3] + "with " + person[4) + "legs and " + person[5] + " arms.");


// Yikes, that doesnt look very readable. It seems like we should use an object to organize our data better. Lets create a person object and we might as well also separate the first and last name too.

var person = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "John",
     lastName: "Doe",
     age: 150,
     eyeColor: "Blue"
};


// Now when we write our sentence again, it is much easier to read!

var person1 = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "John",
     lastName: "Doe",
     age: 150,
     eyeColor: "Blue"
};

console.log("The great" + person1.firstName + " " + person1.lastName + ", with striking " + person1.eyeColor + " eyes, was a spry " + person1.age + " years old. A " + person1.species + "with " + person1.legs + "legs and " + person1.arms + " arms.");

  ]

/*
  Assignment

Add a property to the person object called favoriteBands that is an array made up of band names
Add a property to the person object called familyMembers that is an array made up of these people objects
var person2 = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "Stacy",
     lastName: "Doe",
     age: 180,
     eyeColor: "Orange"
};
var person3 = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "Suzy",
     lastName: "Q",
     age: 140,
     eyeColor: "Green"
};
Add a property to each of the new familyMembers that is called familyRole that is either "brother", "sister", etc.
SPOILER ALERT

Add a property to the person object called favoriteBands that is an array made up of band names
var person1 = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "John",
     lastName: "Doe",
     age: 150,
     eyeColor: "Blue",
     favoriteBands: ["Creed", "Creed", "Creed", "Creed"]
};
*/


var person2 = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "Stacy",
     lastName: "Doe",
     age: 180,
     eyeColor: "Orange",
     favoriteBands: ["Bad Boys Blue", "CC Catch", "Dead or Alive", "Modern Talking"],
     familyMembers: ["dad", "mom", "brother", "sister", "neice", "puppy"]
     /* or as object
     familyMembers {
     
     }
};

var person3 = {
     species: "human",
     legs: 2,
     arms: 2,
     firstName: "Suzy",
     lastName: "Q",
     age: 140,
     eyeColor: "Green",
     favoriteBands: ["Bad Boys Blue", "CC Catch", "Dead or Alive", "Modern Talking"],
     familyMembers: [ "wife", "son", "daughter", "dog", "cat"]
};