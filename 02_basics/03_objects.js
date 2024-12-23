// singleton
// Object.create         one more way without singleton

// Object Literals
const mysym = Symbol("key1");

const jsuser = {
  name: "Bhavik",
  "full Name": "Songara Bhavik",
  [mysym]: "mykey1",
  age: 19,
  location: "Surat",
  email: "bhavik@gmail.com",
  isLoggedIn: false,
  lastLogin: ["Monday", "Saturday", "Sunday"],
};

// console.log(jsuser.email);
// console.log(jsuser["email"]);

// console.log(jsuser["full Name"]);
// console.log(jsuser[mysym]);
// console.log(typeof jsuser[mysym]);

jsuser.email = "bhavik@chatgpt.com";
// Object.freeze(jsuser);
jsuser.email = "bhavik@youtube.com";
// console.log(jsuser);

jsuser.greeting = function () {
  console.log("Hellow brother");
};
jsuser.greetingtwo = function () {
  console.log(`Hellow brother , ${this.name}`);
};

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());
