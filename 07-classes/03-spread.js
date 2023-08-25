class Character {
  // parent constructor / super constructor
  constructor( name, weapon = "sword", health = 100 ) {
    this.name = name;
    this.weapon = weapon;
    // allowed range
    this.health = health > 100 || health < 0 ? 100: health
    // created "this" object gets returned automatically by constructor function
  }
}

class Enemy extends Character {

  // child class gets its own constructor
  constructor({ name, weapon, health, evilness = 5 }) {
    super({ name, weapon, health }); // create PARENT object
    // => result from object creation gets stored in "this"
    this.evilness = evilness;
  }
}

const hero = new Character({ name: "Jan Jeff", health: 7 })
console.log(hero)

const enemy = new Enemy({ name: "Shady Wizard", evilness: 10 });
console.log(enemy)