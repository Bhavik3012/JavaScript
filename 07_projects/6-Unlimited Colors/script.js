// Random color generator

const RandomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(RandomColor());
let intervalId;
const Startchanging = function () {
  if (!intervalId) {
    intervalId = setInterval(changecolor, 1000);
  }
  function changecolor() {
    document.body.style.backgroundColor = RandomColor();
  }
};

const stopChanging = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", Startchanging);

document.querySelector("#stop").addEventListener("click", stopChanging);
