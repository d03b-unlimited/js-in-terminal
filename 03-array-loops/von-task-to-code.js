/** * Task 5 * 
 * Use a loop to create an array containing the even numbers between 0 to 100, 
 * then print the whole array to the console 
 * Expected output: * [0, 2, 4, 6, 8, 10, 12, ..., 96, 98, 100] 
 * 
 * INPUT: empty array
 * OUTPUT: filled array => not ALL numbers between 0 and 100, just EVEN numbers
 * 
 * LOGIC:
 * Loope durch Numbers von 0 bis 100
 * IF oder NICHT if in LOOP?
 * Wir wollen nicht ALLE items von 0 bis 100, nur BESTIMMTE
 * => wir brauchen IF check für jedes Item in LOOP!
 * In Loop / Logic GENERATEN wir den OUTPUT
 * 
 * PSEUDO CODE (von Logic Text zu grobem Code)
 * 
 * const arr = []
 * 
 * for(0..100) {
 *    if(???)
 *       arr.push(item[i]) 
 * }
 * 
 * OUTPUT immer nach loop
 * console.log(arr)
 * */ 

// OUTPUT
const arr = []

// logic (=pseudo code)
for(let i=0; i<=100; i++) {
  // CHECK: nur EVEN numbers
  if(i % 2 === 0) {
    arr.push(i)
  }
}

console.log("OUTPUT", arr)