// capitalistic exploitation
// in practice => group people by sales numbers. aaaaargh!
const prices = [
  100,
  90,
  50,
  30,
  0
]

const arrBigger50 = []
const arrLower50 = []

for (let i = 0; i < prices.length; i++) {
  if (prices[i] >= 50) {
    arrBigger50.push(prices[i]);
  } else {
    arrLower50.push(prices[i]);
  }
}


console.log({arrBigger50})
console.log({arrLower50})