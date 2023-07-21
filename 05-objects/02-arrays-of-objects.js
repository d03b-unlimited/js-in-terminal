const pizzas = [
  {
    name: "Hawaii", // key / property / prop / member / field: value
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!",
    price: 3.99,
    currency: "DM",
  },

  {
    image: "",
    name: "QUATTRO FORMAGGI", // quattro formaggi (=lowercase)
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!",
    price: 4.99,
    currency: "DM",
  },

  {
    image: "http://source.unsplash.com/100x100?",
    name: "Margherita",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!",
    price: 5.99,
    currency: "DM",
  },
];

// Example: Loop through array of objects
// and CONVERT (MAP) them to HTML tags

// left => single item, right: array
for(let pizza of pizzas) {
  // console.log("Pizza: ", pizza.name, pizza.price)
  console.log(`<div>
    <div class="name">${pizza.name}</div>
    <span class="price">${pizza.price}</span>
  </div>
  `)
}
// console.log(pizza) // variable pizza just exists in loop! and dies after loop!

// Example II: Increase price by certain amount
for(let pizza of pizzas) {
  // console.log(pizza.price)
  pizza.price *= 1.5 // 50% increase
  console.log(pizza.price.toFixed(2))
}

console.log(pizzas)

