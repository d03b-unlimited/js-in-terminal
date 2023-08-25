
// reduce
// scenario: INPUT array => OUTPUT single value (number, boolean, string, object)

const result = ["h","a","l","l","o"].reduce((toBuild, item) => {
  console.log({ toBuild, item })
  return toBuild + item.toUpperCase()
}, "") // start value is very important otherwise reduce behaves like what****

console.log({ result })
console.log()


const arrNumbers = [1, 2, 3]

const sum = arrNumbers.reduce((sum, item) => {
  console.log({ item, sum });
  return sum + item
}, 0);
console.log({ sum })

const products = [
  { name: "Spülmaschine", price: 100, quantity: 1  },
  { name: "Toaster", price: 30, quantity: 3  },
  { name: "Kaffeemaschine", price: 300, quantity: 1  },
]

console.log()

const sumProducts = products.reduce((sum, item) => {
  console.log(sum, item.name, item.price, item.quantity)
  return sum + item.price * item.quantity
}, 0) // without start value you will die quickly. you will see. trust me on that

console.log({ sumProducts })

// reduce wann nutzen
// wir wollen etwas berechnen / eine NEUE Info
// und am Ende haben wir immer nur ein Item (kann aber auch ein OBJECT sein)

// INPUT ["apple", "banana", "banana", "banana", "cherry", "apple"]
// OUTPUT: { apple: 2, banana: 3, cherry: 1 } // statistics

const fruits = ["apple", "banana", "banana", "banana", "cherry", "apple"];

// build statistics
const statistics = fruits.reduce( (statistics, item) => {
  // check if item is in object ???? HOOOOW?
  // statistics item
  if(item in statistics) {
    statistics[item]++
  }
  // item does NOT exist in object so far
  else {
    statistics[item] = 1
  }
  return statistics

}, {} ) // start value: empty object. because we want an object at the end!

console.log()
console.log({statistics})
