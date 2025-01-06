// let myName = "bhavik     ";
// let myChannel = "sbjop    ";

// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"];

let heropower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.bhavik = function () {
  console.log("bhavik is present in all objects");
};

heropower.bhavik();
myHeros.bhavik();

Array.prototype.arraybhavik = function () {
  console.log("bhavik make new prototype in array ");
};

// heropower.arraybhavik();
myHeros.arraybhavik();

// inheritance

const User = {
  name: "chai",
  email: "chai@gmail.com",
};

const Teacher = {
  makeVideo: true,
};
const Teachingsupport = {
  isAvailable: false,
};
const TAsupport = {
  makeAssignment: "Js Assignment",
  fullTime: true,
  __proto__: Teachingsupport,
};

Teacher.__proto__ = User;

// modern syntax

Object.setPrototypeOf(Teachingsupport, Teacher);

let anotherusername = "SBJ OP       ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`true length is : ${this.trim().length}`);
};

anotherusername.trueLength();

"bhavik".trueLength();
"songara".trueLength();