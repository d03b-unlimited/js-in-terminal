const pizza = "Hawaii"; // toUpperCase => HAWAII
const searchTerm = "hAW"; // toUpperCase => HAW
const price = 9.99;

// hardcoded search
// console.log( pizza.includes("HAW") ) // true => gefunden!
// console.log( pizza.includes("haw")) // false => nicht gefunden!
// console.log( pizza.includes("haw".toUpperCase()) ) // case sensitive

// case sensitive search
console.log(pizza.includes(searchTerm)); // false

// case insensitive search
// haW => HAW |
console.log(pizza.toUpperCase().includes(searchTerm.toUpperCase())); // true
console.log(pizza.toLowerCase().includes(searchTerm.toLowerCase())); // true
// Hawaii => hawaii => haw

// things between the klammern => parameter / arguments
// method chaining => multiple operations on something in one row
console.log(pizza.toUpperCase().slice(0, 4)); // HAWAII => HAWA

// same as above => just do it step by step  
const pizzaUppercase = pizza.toUpperCase()
const pizzaSlice = pizzaUppercase.slice(0,4)
console.log(pizzaSlice)


/**
 * pizza.toUpperCase() => Hawaii => HAWAII
 * 
 * HAWAII.slice(0,4) => HAWAII => HAWA
 */