class Product {
  constructor(firstname, lastname, price, isAdmin) {
    this.firstname = firstname
    this.lastname = lastname
    this.price = price
    this.isAdmin = isAdmin
  }

  get role() {
    return this.isAdmin ? "This user has role admin" : "This user is normal user"
  }

  // getter always creates info from data I already have
  get fullname() {
    return this.firstname +  " " + this.lastname
  }

  // setter setted etwas im object
  // setter kann value validaten und nur certain values erlauben
  set priceChange (priceNew) {
    // allow just certain values to be set for price
    if(priceNew > 5 && priceNew < 50) {
      this.price = priceNew
    }
  }

  /** getters are often used to get different FORMAT of some info */
  get priceEur() {
    return this.price + " EUR"
  }
}

const product = new Product("toaster", "todd", 19.95, true)
console.log(product.fullname)
product.firstname = "dishwasher"
console.log(product.fullname);

product.priceChange = 79 // set invalid price
console.log(product) // does not work => will not update the product

product.priceChange = 29.99 // set valid price
console.log(product) // should update

console.log(product.role)