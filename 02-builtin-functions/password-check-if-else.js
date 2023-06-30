const password = "123" // length 7
const minLength = 6

// check if password is long enough ???

// if else is typically used 
// if the INPUT from the user is CORRECT or INCORRECT
// with if else we can give user DIFFERENT FEEDBACK depending on input

// if(5 >= 6)
// if(7 >= 6)

if(password.length >= minLength) {
  console.log("Dein Passwort hat genau die richtige Länge! Glückwunsch!")
}
else if(password.length >= 3) {
  console.log("Reicht uns, aber nicht sicher! Bitte bitte bitte mach doch das PW etwas länger, dann sind wir alle sicherer vor dir")
}
else {
  console.log("Loser! Was denkst du, dass hier jeder leicht reinkommt? Du nicht!")
}

// for MULTIPLE options to give feedback 
// if else is more suitable (=geeignet) than ternary