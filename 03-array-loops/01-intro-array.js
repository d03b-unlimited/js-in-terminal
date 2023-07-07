/**
 * TASK:
 * convert EACH item in the array to a div string
 * concatenate all the generated div strings to ONE big string
 */

/**
 * INPUT: array of pizzas
 * OUTPUT: string of all items inside a div tag
 *
 * Example OUTPUT: <div>Hawaii</div><div>Funghi</div><div>Formaggi</div>
 *
 * LOGIC:
 * - do something with each item => LOOPE through the items
 * - we want to have a NEW output of different type => a string
 * - therefore PREPARE a variable which will store the output
 */


const arrPizzas = [
  "Hawaii", // 0
  "Funghi", // 1
  "Formaggi", // 2
  "Salami", // 3
  "Diavolo", // 4
  "Teriyaki", // 5
]; // length = 6

// this code does work, but it is unflexble
// each time we have MORE or LESS items we must CHANGE the code
// const result = "<div>" + arrPizzas[0] + "</div>" +
//   "<div>" + arrPizzas[1] + "</div>" +
//   "<div>" + arrPizzas[2] + "</div>" +
//   "<div>" + arrPizzas[3] + "</div>" +
//   "<div>" + arrPizzas[4] + "</div>" +

// MAPPING => convert each item in array to something else
// Example: HTML div tags

// RESULT / OUTPUT variables are always declared BEFORE the loop
let div = ""; 
// always initialize the output variable with the datatype you want to generate at the end!
// undefined is not a good start value, it will give us weird side effects

// We do the "logic" inside the loop
for (let i = 0; i < arrPizzas.length; i++) {
  div +=
    "<div style='font-size: 1.3rem; border: 1px solid #ccc'>" +
    arrPizzas[i] +
    "</div>";
  // in case we want to DISPLAY info from each item
  // => we use console log INSIDE (!) the loop

  // console.log(i)
  // console.log("<div>" + arrPizzas[i] + "</div>") // comma in console to log MULTIPLE variables
  // console.log(i, arrPizzas[i]) // string concatenation always gives a NEW string
  // console.log(i + " " + arrPizzas[i]) // string concatenation always gives a NEW string
}
console.log("OUTPUT:", div);
// IF we want to LOG an OUTPUT / result of our code
// => we use the console.log OUTSIDE the loop
// we only might use console log INSIDE the loop for debugging (log "zwischensteps")


// SEARCH
// const search = "h"
