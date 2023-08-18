class Character {  
  // fields 
  // functions (=> methods)

  // constructor function generates me objects with SAME rules (fields, etc)
  constructor(name, age) {
    this.name = name
    this.age = age
  } // without seing it, the constructor functions 
  // ALWAYS creates an object in the background and returns it
}

const character1 = new Character("Odin", 17)
const character2 = new Character("Hasso", 13)
const character3 = new Character("Sauron", 99)

// console.log(character1)
// console.log(character2)
// console.log(character3)

const characters = [character1, character2, character3]

characters.forEach(character => {
  console.log(character.name)
});