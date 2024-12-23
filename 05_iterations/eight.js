const mynums = [1, 2, 3, 4, 5];

// const mytotal = mynums.reduce(function (acc, currentval) {
//   console.log(`acc : ${acc} and currentval : ${currentval}`);

//   return acc + currentval;
// }, 0);

const mytotal = mynums.reduce((acc, currentval) => acc + currentval, 0);

console.log(mytotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const pricetopay = shoppingCart.reduce((acc, item) => item.price + acc, 0);
console.log(pricetopay);
