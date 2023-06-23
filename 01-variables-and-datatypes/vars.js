const hallo = "hey"; 


// global variable => usually we try to avoid global vars
sMessage = "keine Ahnung" // input comes later from USER and not hardcoded
sMessage = "was anderes"
console.log(sMessage)

console.log(v)

const a = "a" // DECLARATION
// a = "b" /// cannot change value of a CONST => error

console.log(a)

let l = "l" // DECLARATION
l = "k"
console.log(l)
// declaring let and const with same name multiple times is not pssible 
// let l = "was anderes"

// DECLARATION of var variables is pushed to TOP of file => HOISTING
// double declaration => BAD practice
var v = "v"
var v = "w" // last one wins!
v = "z"

console.log(v)

// Numbers
const i = 10


let werBinIch
console.log(werBinIch) // undefined

// more weird things
console.log(undefined+"a") // undefineda => if we add a string, undefined is converted to string!
console.log(werBinIch+"a") // undefineda => same as above
console.log(undefined + "10") // undefined10 => same as above
console.log(undefined + 10) // NaN. Vielen Dank :-D
