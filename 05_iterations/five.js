const coding = ["js", "cpp", "rb", "swift", "c"];

// coding.forEach(function (value) {
//   console.log(value);
// });

// coding.forEach((value) => {
//   console.log(value);
// });

// function printMe(value) {
//   console.log(value);
// }
// coding.forEach(printMe);

// coding.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

const mycoding = [
  {
    languagename: "javascript",
    languagefilename: "js",
  },
  {
    languagename: "c++",
    languagefilename: "CPP",
  },
  {
    languagename: "java",
    languagefilename: "fulljava",
  },
];

mycoding.forEach((item) => {
  console.log(item.languagename);
});
