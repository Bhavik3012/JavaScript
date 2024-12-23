// Array

const myArr = [1, 2, 3, 4, 5, 6];

const myHeors = ["Spiderman", "Thor", "IronMan"];
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[2]);

// Array methods

// myArr.push(123);
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// myArr.unshift(8)
// myArr.shift()

// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C ", myArr);
