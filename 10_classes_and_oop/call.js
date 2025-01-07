function Setusername(username) {
  // complex DB calls
  this.username = username;
  console.log("Called");
}

function createuser(username, email, password) {
  Setusername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createuser("Chai", "chai@fab.com", "123");
console.log(chai);
