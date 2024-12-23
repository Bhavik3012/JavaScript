// primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined value

const id = Symbol("1234");
const anotherId = Symbol("1234");

console.log(id == anotherId);

const bigNumber = 234823376929847502n;

// non-primitive(Reference)

// Array, Object, Functions

const heros = ["Shaktiman", "bhavik", "Thor"];
let myObj = {
  name: "bhavik",
  age: 19,
};

const myfunction = function () {
  console.log("Hellow!");
};

console.log(typeof outsideTemp);



// https://262.ecma-international.org/5.1/#sec-11.4.3