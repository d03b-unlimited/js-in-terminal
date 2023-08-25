// Gegeben ist ein Objekt mit versch. Eigenschaften, grupiere sie nach:
/**
 * { fishing: [...], cooking: [...], painting: [], "music": []  }
 */

let users = [
  { name: "David", age: 23, hobby: "fishing", country: "Spain" },
  { name: "Richard", age: 25, hobby: "cooking", country: "Mexico" },
  { name: "Raul", age: 22, hobby: "fishing", country: "Japan" },
  { name: "John", age: 23, hobby: "painting", country: "Spain" },
  { name: "Olivia", age: 35, hobby: "fishing", country: "Mexico" },
  { name: "Angelo", age: 35, hobby: "painting", country: "Germany" },
  { name: "David", age: 25, hobby: "walking", country: "Brazil" },
  { name: "Richard", age: 22, hobby: "cooking", country: "Japan" },
  { name: "Ann", age: 35, hobby: "music-playing", country: "Germany" },
];

const statistics = users.reduce( (statistics, item) => {
  // update object step by step
  // if(item.hobby in statistics) {
  if(statistics[item.hobby]) {
    // if item DOES already exist in object
    // grab that item
    statistics[item.hobby].push(item)
  }
  else {
    // if item does not exist so far => create it and put user in array
    statistics[item.hobby] = [ item ]
  }
  // at the end: return the updated object
  return statistics
}, {  } ) // start value: empty object. because we want an object at the end!

console.log({statistics})