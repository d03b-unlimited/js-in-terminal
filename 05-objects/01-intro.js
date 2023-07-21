const pizza1 = {
  name: "Hawaii", // key / property / prop / member / field: value
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!",
  price: 5.99,
  currency: "€",
};

const pizza2 = {
  image: "",
  name: "QUATTRO FORMAGGI", // quattro formaggi (=lowercase)
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!",
  price: 5.99,
  currency: "€",
};

const pizza3 = {
  image: "http://source.unsplash.com/100x100?",
  name: "Margherita",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!",
  price: 5.99,
  currency: "€",
};


// increase price by 3 EUROS!
pizza2.price += 3;

console.log(pizza2.name);
pizza2.name = pizza2.name.toLowerCase() // make name low again and overwrite name
// pizza2.name = "quattro formaggi"
console.log(pizza2.name);

// console.log(pizza2);
// console.log(pizza1.name);
// console.log(pizza1["name"]); // ????

const userFieldChoice = "price";
// console.log(pizza1[userFieldChoice]); // pick field from object by a variable
