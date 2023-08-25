class User {

  // static is valid for ALL instances
  static users = []

  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // instance method / object method
  kick() {

  }

  static addUser(user) {
    User.users.push(user)
  }

  // static = class level function
  static showAllUsers() {
    User.users.forEach((user) => {
      console.log(user.name, user.age)
    })
  }

  static increaseAgeOfUsers() {
    User.users.forEach((user) => {
      user.age++
    })
  }
}

// object / instance
const user1 = new User("Daryna", 15)
const user2 = new User("Mina",15)

User.addUser(user1)
User.addUser(user2)

// instance level function
user1.kick()

// class level function
User.showAllUsers()
User.increaseAgeOfUsers()
User.showAllUsers();
