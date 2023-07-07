const arr = [
  5.99, // Toaster Todd
  7.99, // Sink Sindy
  9.99, // Washing Machine Waldo
  11.99,
];

const priceIncrease = 1;
for (let i = 0; i < arr.length; i++) {
  // directly CHANGE original item
  arr[i] += priceIncrease;
}
console.log(arr);

// JUST increase prices that are higher than 8 EUR
for (let i = 0; i < arr.length; i++) {
  // directly CHANGE original item
  if(arr[i] >= 10) {
    arr[i] += priceIncrease;
  }
  // else block we JUST need in case we also want to do
  // something with the OTHER items
}
console.log(arr);


