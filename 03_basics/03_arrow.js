const user = {
  username: "Bhavik",
  price: "999",

  welcomeMessage: function () {
    console.log(`${this.username} ,welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Panda";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "bhavik";
//   console.log(this.username);
// }

// chai();

// const chai = function(){
//     let username = "bhavik";
//     console.log(this.username);

// }
// chai()

const chai = () => {
  let username = "bhavik";
  console.log(this);
};
chai();

// const addTwo = (number1, number2) => {
//   return number1 + number2;
// };

// const addTwo = (number1, number2) => number1 + number2;

// const addTwo = (number1, number2) => (number1 + number2);
const addTwo = (number1, number2) => ({username: "bhavik"});

console.log(addTwo(2, 5));


// const myArray = [1, 2, 3, 4, 5]

// myArray.forEach()