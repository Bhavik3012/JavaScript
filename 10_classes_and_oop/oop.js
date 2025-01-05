const user = {
  username: "Bhavik",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    //  console.log(`Username:${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("Anjali", 32, false);
// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);

// new keyword will create a new empty object
// constructor function called because of new keyword
// it inject function in this
// now you can get the value
