/**
 * Task 4 - repeat string 
 * 
 * Create a function called repeatString that takes in input a string AND a number and returns that string repeated n times depending on the number 
 *
 * INPUT: string str AND number num
 * OUTPUT: string
 * 
 * LOGIC:  
 * Variant 1: use the builtin repeat function and then we can easily get from input to output
 * 
 * Variant 2: 
 * We get an input string and want to repeat it x times
 * The user can decide how often
 * If we want to repeat something multiple (x) times => we use a LOOP
 * In each run of the loop => add the string to a new output string
 *  
 * Example in steps:
 * table, 3
 * - 1) table
 * - 2) tabletable
 * - 3) tabletabletable
 *  
 * For example: 
 * console.log(repeatString("table", 3)); // "tabletabletable"
 * console.log(repeatString("cat", 5)); // "catcatcatcatcat" 
 * console.log(repeatString("dog", 0)); // "" 
 * console.log(repeatString("", 5)); // "" 
 * console.log(repeatString("+", 10)); // "++++++++++" 
 */


const stringy = "table" // tabletabletable ???

// EASY variant #1

function repeatString(stringy, num) {
  // LOGIC
  // in case we just do ONE statement / no loop / no if => we can return the result right away
  return stringy.repeat(num); // repeat the string N times
}

// Variant #2
function repeatStringV2(stringy, num) {
  let output = "" // table => tabletable => tabletabletable

  // loope so oft wie user will
  for(let i=1; i<=num; i++ ) { // i = 4
    // logic: "addiere" string zu output variable
    output += stringy
  }
  // return OUTSIDE loop
  return output
}
// TEST if it works
const rv1 = repeatStringV2("ollah", 1) // ollah
const rv2 = repeatStringV2("ollah", 2) // ollahollah
const rv3 = repeatStringV2("ollah", 3) // ollahollahollah
const rv4 = repeatStringV2("ollah", 0) // ""
const rv5 = repeatStringV2("", 5) // ""

console.log(rv1)
console.log(rv2)
console.log(rv3)
console.log(rv4)
console.log(rv5)

const r1 = repeatString("ollah", 1) // ollah
const r2 = repeatString("ollah", 2) // ollahollah
const r3 = repeatString("ollah", 3) // ollahollahollah
const r4 = repeatString("ollah", 0) // ""
const r5 = repeatString("", 5) // ""

