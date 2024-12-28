const buttons = document.querySelectorAll(".button");
// console.log(buttons);

const body = document.querySelector("body");
// console.log(body);

buttons.forEach(function (button) {
  //   console.log(button);
  button.addEventListener("click", function (event) {
    // console.log(event);
    // console.log(event.target);
    if (event.target.id === "black") {
      body.style.backgroundColor = event.target.id;
      body.style.color = "white";
      button.style.borderColor = "white";
    }
    if (event.target.id === "white") {
      body.style.backgroundColor = event.target.id;
      body.style.color = "black";
      button.style.borderColor = "black";
    }
    if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
      body.style.color = "yellow";
      button.style.borderColor = "white";
    }
    if (event.target.id === "yellow") {
      body.style.backgroundColor = event.target.id;
      body.style.color = "purple";
      button.style.borderColor = "white";
    }
    if (event.target.id === "green") {
      body.style.backgroundColor = event.target.id;
      body.style.color = "black";
      button.style.borderColor = "white";
    }
  });
});
