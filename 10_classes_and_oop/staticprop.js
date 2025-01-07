class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createid() {
    return `123`;
  }
}

const bhavik = new User("bhavik");
bhavik.logMe();
// console.log(bhavik.createid());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const lenovo = new Teacher("lenovo", "lenovo@gmail.com");
lenovo.logMe();
// console.log(lenovo.logMe());

console.log(lenovo.createid());
