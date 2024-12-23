// Stack(Primitive), Heap(non-primitive)

let myYoutubename = "Bhavo Gamer";

let anotheryName = myYoutubename;
anotheryName = "Clutchguru";

console.log(anotheryName);
console.log(myYoutubename);

let userone = {
  email: "user@clutchguru.com",
  upi: "upi@oksbi",
};

let usertwo = userone;

usertwo.email = "bhavik@google.com";

console.log(userone.email);
console.log(usertwo.email);
