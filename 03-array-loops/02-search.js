/**
 * TASK
 * Write a function that gets a search term as INPUT
 * It should search all items in array by search
 * And create a new array with all FOUND items (=matches)
 * 
 * INPUT: arr, searchTerm
 * OUTPUT: new arr
 * 
 * Example
 *  INPUT: arr, searchTerm = h
 *  OUTPUT: [Hawaii, Funghi]
 * 
 * LOGIC:
 * Für jedes item (= for loop) CHECKE (=if) aktuelles item (arr[i])
 * den SearchTerm matched (=> includes) 
 * Wenn ja: Adde item zu OUTPUT array
 * Wenn nein: Ignoriere item (=do nothing)
 */



const arrPizzas = [
  "Hawaii", // 0 // hawaii => Hawaii => HAWAII
  "Funghi", // 1 // funghi
  "Formaggi", // 2
  "Salami", // 3
  "Diavolo", // 4
  "Teriyaki", // 5
]; // length = 6

const searchTerm = "h"

// always initialize our OUTPUT variable with the datatype we want to create! 
const arrFiltered = []

// this does not work
// const result = arrPizzas.toUpperCase().includes(searchTerm.toUpperCase())
// console.log(result) 

for(let i=0; i<arrPizzas.length; i++) {
  const item = arrPizzas[i]
  // how to check if searchTerm is INSIDE item ???
  // Hawaii => HAWAII.includes(hawaii => HAWAII)
  if(item.toUpperCase().includes(searchTerm.toUpperCase()) ) {
    // we found item => item has searchterm
    // how to get item into array? arrFiltered
    arrFiltered.push( item )
  }
}

// AFER for loop: show RESULT
console.log("OUTPUT", arrFiltered)