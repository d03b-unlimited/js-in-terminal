const numby = 50.55 // 50.5
 // 50 => integer (ganze zahl)
 // 50.50 => float (komma zahl / dezimalzahl)

console.log(Math.round(numby))
console.log(Math.floor(numby))
console.log(Math.ceil(numby))

// toFixed => often used in frontend to show prices!
// but internally we may store numbers with more digits
console.log(numby.toFixed(0)) // 51 parameter means: how many digits after comma
console.log((50.5).toFixed(1)) // 50.5
console.log((50.55).toFixed(1)) // 50.5
console.log((50.55).toFixed(1)) // 50.5
console.log((50.5555).toFixed(2)) // 50.56
console.log((50.5666).toFixed(2)) // 50.57
console.log((50.5544).toFixed(2)) // 50.55
