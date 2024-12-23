const name = "bhavik";
const repoCount = 50;

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and I have ${repoCount} repositories.`);

const gameName = new String("Bhavik-Song-ara");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt("3"));
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringone = "     BHAVIK     ";
console.log(newStringone);
console.log(newStringone.trim());

const url = "http://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));
console.log(url);

console.log(url.includes('hitesh'))
console.log(url.includes('bhavik'))

console.log(gameName.split('-'));
