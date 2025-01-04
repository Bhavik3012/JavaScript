const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task to
  // Database calls, cryptography, network call
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Bhavik", email: "bhavik@gmail.com" });
  }, 1000);
});

PromiseThree.then(function (user) {
  console.log(user);
});

const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "anjali", password: "1234" });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

PromiseFour.then((user) => {
  console.log(user);
  return user.username;
})
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "1234" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});

async function consumepromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumepromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(("E: ", error));
//   }
// }
// getAllUsers();

fetch("https://api.github.com/users/Bhavik3012")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
