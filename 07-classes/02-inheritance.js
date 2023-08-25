// VERERBUNG / INHERITANCE

class Character {
  // parent constructor / super constructor
  constructor(name, weapon = "sword", health = 100) {
    this.name = name;
    this.weapon = weapon;
    // allowed range
    this.health = health > 100 || health < 0 ? 100: health
    // "this" gets returned automatically by constructor function
  } // => {} => with "this" keyword I can grab object to create

  kick() {
    console.log(this.name, "kicks like hell");
  }

  // getter => fakes a property
  get nameBig() {
    return this.name.toUpperCase();
  }

}


// Enemy inherits / erbt alles von Character
// child class = derived class
// alle properties und functions
class Enemy extends Character {
  // evilness = 1 not much evil, 10 => extremely evil

  // child class gets its own constructor
  constructor(name, weapon, health, evilness = 5) {
    super(name, weapon, health); // create PARENT object
    // => result from object creation gets stored in "this"
    this.evilness = evilness;
  }

  // kick function of parent not exactly what we want
  // OVERWRITE

  kick() {
    console.log("Der Enemy kickt wie Sau!")
  }
}

// create some character
const michel = new Character("Michel", "machine gun");
console.log(michel);
console.log(michel.getnameBig)
michel.kick()

// => calls constructor function

// creates some enemies
const angryBird = new Enemy("Angry Bird", "wing laser")
console.log(angryBird)
const michelsEnemy = new Enemy("Michael the dark one", "machete", 50, 8)
console.log(michelsEnemy)


angryBird.kick()
console.log(angryBird.nameBig)