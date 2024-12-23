function saymyname() {
  console.log("B");
  console.log("H");
  console.log("A");
  console.log("V");
  console.log("I");
  console.log("K");
}

saymyname; // refrenece
saymyname(); // exicution

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
}

// const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);

function loginusermess(username = "bha") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }

  return `${username} just logged in `;
}

// console.log(loginusermess("bhavik"));
// console.log(loginusermess());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 300, 500, 700,9000));

const user = {
  username: "bhavik",
  price: "10000",
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// handleObject(user)
handleObject({
  username: "sam",
  price: "999",
});

const mynewarray = [250, 200, 1500, 500];
function returnsecondvalue(getarray) {
  return getarray[1];
}

// console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([250, 200, 1500, 500]));
