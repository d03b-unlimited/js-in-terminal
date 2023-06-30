/*

The password is valid if: 
it is longer than 8 characters (criteria 1)
AND the first and last character are different (criteria 2) => !=
AND it is different from "12345678" (different from => !=)
AND the first character is not an empty space (=> !=)
AND there is NO * in between
AND the last character is not the character '!' (=> !=)
If password is valid please output true / "Password correct"
If password is not valid please output false / "Password incorrect"

INPUT: password (=> string)
OUTPUT: 
- isValid (true) => String "Password correct"
- is invalid (false) => "Password incorrect"
LOGIC: check if is valid => if / ternary => IF ELSE
LOGIC: if(check1 && check2 && check3 && check4 && check5)
*/

// PSEUDO CODE

const password = "halloooo"; // "12345678"; // 
const minLength = 8

// DEBUGGING / TESTING
console.log(password[0], password[password.length-1]);

const check1 = password[0] !== password[password.length - 1] 
const check2 = password.length >= minLength
const check3 = password != "12345678"
const check4 = password[0] != " "
const check5 = password.includes("*") === false // please contain no *
const check6 = password[password.length - 1] != "!";  // last char != "!"

// LOGIC
if (
  // all 6 checks must match (so we use && operator)
  check1 && check2 && check3 && check4 && check5 && check6
) {
  console.log("Password correct");
} else {
  console.log("Password incorrect");
}

// if something must match MULTIPLE criteria => use && operator
// if something must just match ONE crtieria => use || operator
