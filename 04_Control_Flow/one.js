// IF

const isUserloggedIn = true;
const temperature = 40;

// if (temperature < 50) {
//   console.log("less than 50");
// }
// else {
//   console.log("Temperature is greater than 50");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User power ${power}`);
// }
// console.log(`User power:${power}`);

const balance = 1000;
// if (balance > 100) console.log("test"), console.log("test2");

// if (balance > 100) {
//   console.log("balance is greater than 100");
// } else if (balance < 500) {
//   console.log("balance is less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else {
//   console.log("less than 1000");
// }

const userloggedin = true;
const debitCard = true;
const loggedinfromgoogle = false;
const loggedinfromemail = true;

if (loggedinfromgoogle || loggedinfromemail) {
  console.log("User logged in ");
}

if (userloggedin && debitCard) {
  console.log("Allow to buy course");
}
