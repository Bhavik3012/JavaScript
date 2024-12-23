// var c = 500
let a = 1000;
if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
}

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Bhavik";

  function two() {
    const website = "Youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}
// one();

if (true) {
  const username = "Bhavik";
  if (username === "Bhavik") {
    const website = "Youtube";
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// +++++++++++++++ interesting ++++++++++++++

function addone(number) {
  return number + 1;
}
console.log(addone(5));



console.log(addTwo(5));
const addTwo = function (number) {
  return number + 2;
};
