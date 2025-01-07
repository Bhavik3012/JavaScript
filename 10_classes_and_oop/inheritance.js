class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);

    this.email = email;
    this.password = password;
  }

  addcourse() {
    console.log(`A new course add by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");
chai.addcourse();
chai.logMe();

const tea = new User("masalachai");
tea.logMe();

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
