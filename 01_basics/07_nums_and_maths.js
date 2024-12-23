const score = 400;

const balance = new Number(100);

console.log(balance);
console.log(score);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 1123.8966;

console.log(otherNumber.toPrecision(3));

const hundreds = 100000000;
console.log(hundreds.toLocaleString("en-IN"));

// +++++++++++++ Maths +++++++++++++++++++++++++++++\

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.8));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.sqrt(4.3));
console.log(Math.min(4.3, 5, 2, 3, 6));
console.log(Math.max(4.3, 5, 2, 3, 6));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);




// random variable in particular Range
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
