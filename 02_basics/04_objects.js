// constructor

// const tinderuser = new Object() // singleton object

const tinderuser = {}; //non-singleton
tinderuser.id = "123abc";
tinderuser.name = "Bhavik";
tinderuser.isLoggedIn = false;

// console.log(tinderuser);

const regularUser = {
  email: "tinderuser.email",
  fullname: {
    userfullname: {
      firstname: "bhavik",
      lastname: "songara",
    },
  },
};
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};
const obj4 = {
  5: "e",
  6: "f",
};

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2,obj4);
const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "tinderuser@gmail.com",
  },
  {
    id: 1,
    email: "tinderuser@gmail.com",
  },
  {
    id: 1,
    email: "tinderuser@gmail.com",
  },
  {
    id: 1,
    email: "tinderuser@gmail.com",
  },
];

console.log(users[1].email);
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("isLogged"));

//*************** NEXT *****************/

const course = {
  coursename: "JS in HIndi",
  price: "999",
  courseInstructor: "Bhavik",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

// {
//   "name": "Bhavik",
//   "coursename":"JS IN HINDI",
//   "price": "999"
// }

[{}, {}, {}];
