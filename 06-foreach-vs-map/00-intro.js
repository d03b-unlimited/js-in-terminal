const dogs = [
  { name: "Hasso", age: 11 },
  { name: "Odin", age: 13 },
  { name: "Sauron", age: 17 }, // desired structure of each object
];



// add new dog to array
// not desired object: should have "name" and an age <= 20
// desired: it should not be possible to add such object to our array
dogs.push({ name: "Sam", age: 77 }) 

// forEach => higher order function for looping through array
// higher order functions: function die andere function (callback) als parameter hat

// map is used to MAP something
// so usually map means to FORMAT something differently
const mappedDogs = dogs.map((dog) => {
  return { ...dog, age: dog.age + " years old"  }
  // console.log(dog.name)
})

const mappedDogsFlat = dogs.map((dog) => {
  return dog.age
})

// foreach often used to MUTATE / change the ORIGINAL or do something with original
const forEachResult = dogs.forEach((dog) => {
  dog.name = dog.name.toUpperCase()
  // console.log(dog.name)
})

console.log({dogs})
// console.log({mappedDogs})
// console.log({mappedDogsFlat})

// CLASSES assure FIXES rules for created object
// for example: 
// - which fields the object has
// - which VALUES the fields can have