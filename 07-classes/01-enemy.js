class Enemy {
  constructor(name = "(Anonymous)", speed = 1, health = 100) {
    this.name = name
    // assure speed never is bigger than 5
    this.speed = speed > 5 ? 5 : speed
    this.health = health
  }
}

// new keyword => calls the constructor function! and returns the created object
const guest1 = new Enemy()
const guest2 = new Enemy()
const angryBird = new Enemy("Angry Bird")
const crazyCocoon = new Enemy("Crazy Cocoon", 7)
const lazyLama = new Enemy("Lazy Lama", 0.5, 50)

console.log(guest1)
console.log(guest2)
console.log(angryBird)
console.log(crazyCocoon)
console.log(lazyLama)