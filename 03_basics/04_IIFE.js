// Immediately Invoked Function Expressions(IIFE)

(function chai() {
    // named IIFE
  console.log(`DB Connected`);
})();
// you need semecolon for exicute second iife
((name ) => {
    // unnamed IIFE
  console.log(`DB Connected TWO ${name}`);
})("Bhavik");
