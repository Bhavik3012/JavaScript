// ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}1234`;
//   }

//   changeusername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("chai", "chai@gmail.com", "abc");
// console.log(chai.encryptPassword());
// console.log(chai);
// console.log(chai.changeusername());

// behind the scenes,

function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryptPassword = function () {
  return `${this.password}1234`;
};
user.prototype.changeusername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new user("tea", "tea@gmail.com", "xyz");
console.log(tea.encryptPassword());
console.log(tea.changeusername());
