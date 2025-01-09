const myArr = [];
// %DebugPrint(myArr);

// continious(packed), Holey

// SMI (small integer)
// Packed element
// Double (float, string, function)

const arrtwo = [1, 2, 3, 4, 5];
// PACKED_SMI_ELEMENTS

arrtwo.push(8.0);
// PACKED_DOUBLE_ELEMENTS

arrtwo.push("7");
// PACKED_ELEMENTS

arrtwo[10] = 11;
// HOLEY_ELEMENTS

console.log(arrtwo);
console.log(arrtwo.length);
console.log(arrtwo[9]);

// bound check
// hasOwnProperty(arrtwo,9)
// hasOwnProperty(arrtwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// Holes are very expensive in JSON

const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[2]);

// Optimize
//continious: SMI > DOUBLE > PACKED
//holey: H_SMI > H_DOUBLE > H_PACKED

// we cannot upgrade after down-grading elements

const arrFour = new Array(3);
// just 3 holes.HOLEY_SMI_ELEMENTS

arrFour[0] = "1"; //HOLEY_ELEMENTS
arrFour[1] = "2"; //HOLEY_ELEMENTS
arrFour[2] = "3"; //HOLEY_ELEMENTS

const arrFive = [];
// this is SMI
arrFive.push("1"); // PACKED_ELEMENTS
arrFive.push("2"); // PACKED_ELEMENTS
arrFive.push("3"); // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5];
// this is SMI most optimized
arrSix.push(Infinity); // NaN or Infinity
// Now this become DOUBLE

// for, for-of, forEach

