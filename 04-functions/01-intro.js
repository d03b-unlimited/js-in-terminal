const message = "hallo";

function testMe() {
  // variables inside function are just VISIBLE INSIDE the function
  const varInFunction = "halloo" + "oooooo"
  console.log(message);
  return varInFunction
}

// call / Aufruf der Function
const result = testMe();
console.log( result ); // "halloooooooo" 


// this would fail! variables are PROPERTY of the function
// we cannot access it outside!
// console.log(varInFunction);


// ARROW function
const testMe2 = () => {};
