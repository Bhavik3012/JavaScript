const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);

  const weight = parseInt(document.querySelector("#weight").value);

  const result = document.querySelector("#result");
  const status = document.querySelector("#current_status");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      status.innerHTML = "Under Weight";
    } else if (bmi > 18.6 && bmi < 24.9) {
      status.innerHTML = "Normal Weight";
    } else if (bmi > 24.9) {
      status.innerHTML = "Over Weight";
    } else {
      status.innerHTML = "Not Proper Input";
    }
  }
});
