/**
 * Task: Reverse string
 * 
 * Create a function called reverseString 
 * that takes in input a string and returns the same string reversed. 
 * 
 * For example: 
 * console.log(reverseString("table")); // "elbat" 
 * console.log(reverseString("blabla")); // "albalb" 
 * console.log(reverseString("")); // "" 
 * console.log(reverseString("tomato")); // "otamot" 
 * console.log(reverseString("cat")); // "tac" 
 * 
 * INPUT: string
 * OUTPUT: string
 * 
 * LOGIC: Reverse the string
 * Reverse the characters in the string
 * Example: 
 * - Character at index 0 becomes LAST item
 * - Character at LAST position becomes first item
 * 
 * String durchloopen => so oft wie string length ist
 * 
 * Beispiel: abc => Länge 3 => Loop läuft drei mal: a, b, c => c b a ???
 * 
 * 
 */

// LOGIC: to get from INPUT => OUTPUT
/**
 * Steps visualized for helping to FIND the logic
 * Start: ""
 * a => "a" + "" => "a"
 * b => "b" + "a" => "ba"
 * c => "c" + "ba"=> "cba"
 */

// use INPUT variable as parameter
function reverseString(stringy) {
  // OUTPUT variable => usually easier to define it INSIDE function
  let stringyReversed = ""; // "" => "cba"

  // LOGIC
  for (let char of stringy) {
    // links= alter string => rechts: neuer string
    // just pack NEW character at BEGINNING of old string
    stringyReversed = char + stringyReversed;
  }

  // always return output AFTER loop (except search)
  return stringyReversed
}

const r1 = reverseString("hallo")
const r2 = reverseString("blaa")
const r3 = reverseString("blub")
const r4 = reverseString("alles geht")

console.log(r1) // ollah
console.log(r2) // aalb
console.log(r3) // bulb
console.log(r4) // theg sella

// LOGIC to FUNCTION ???
/**
 * Write a function with a nice nameeee
 * Use the INPUT variable as PARAMETER
 * Return the OUTPUT variable
 */









