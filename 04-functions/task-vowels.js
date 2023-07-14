/**
 * ## Task 5 - Remove vowel 
 * Create a function called `removeVowels` that takes a string in input 
 * and returns the same string with the vowels removed ```js 
 * console.log(removeVowels("table")); // "tbl" 
 * console.log(removeVowels("JavaScript")); // "JvScrpt" 
 * console.log(removeVowels("AEIOU")); // "" 
 * console.log(removeVowels("ABCDe")); // "BCD" ``` 
 * 
 * INPUT: string ("table") // => tbl
 * INPUT VARS inside function: vowels array: [a,e,i,o,u] 
 * OUTPUT: string
 * 
 * LOGIC 
 * removeVowels
 * remove vowels from input string
 * suggestion #1: loope durch string, 
 * => check ob (if) character erlaubt (nicht in vowels array => not includes!)
 * => append valid (!) character to new string => oldString += character
 * => returne den neuen string
 */


// from logic to FUNCTION
function removeVowels(stringy) {
  const vowels = ["a", "e", "i", "o", "u"];
  // OUTPUT
  let result = "";

  // LOGIC
  for (let char of stringy) {
    // check if char is in vowels array
    // console.log(char, vowels.includes(char))

    // check if item is allowed character
    // if so: add to new string
    if (!vowels.includes(char)) {
      result += char;
    }
  }

  // return the OUTPUT variable
  return result;
}

// TESTS if function works
const r1 = removeVowels("abcdeh")
const r2 = removeVowels("hallo")
const r3 = removeVowels("blub")
console.log(r1) // bcdh
console.log(r2) // hll
console.log(r3) // blb
