let v = "10"

console.log() // new terminal line
console.log("v", v) // label => variable name => so we know in terminal which variable we print out
console.log() // new terminal line


// add 20 to v => 10 + 20 => 30
console.log("v+20", v+20) // string + numner => STRING ("10" + "20" => "1020")

let n = 10
console.log("nü10",n+20) // 30

let str = "300"
let numbi = 30

// convert a string to a number 
// => three ways because javascript loves many many ways for the same thing
console.log(+str+numbi) // should give => 330 
console.log(Number(str)+numbi)
console.log(parseInt(str)+numbi)

// weird things
console.log()
console.log("a"/10) // NaN
console.log("a"*10) // NaN
console.log("a"-10) // NaN
console.log("a"+10) // concatenation

console.log(100/0) // infinity


const n1 = "10"
const n2= 10
console.log(n1+n2)

let firstName = "Omar"
let lastName = "Yossef"
console.log("fullname", firstName + " " + lastName )
lastName = 1000
console.log("fullname", firstName + " " + lastName);
