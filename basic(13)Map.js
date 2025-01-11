//**********Basic****************//

//1//
function cleanNames(names) {
  return names.map((names) => names.trim());
}
console.log(cleanNames(["injustice", "SuperMan", "Batman", "flash"]));

//2//
function toKm(miles) {
  const km = miles.map((mile) => mile * 1.60934);
  const totalDistanceInKilometers = km.reduce((acc, val) => acc + val, 0);
  return { km, totalDistanceInKilometers };
}
console.log(toKm([10, 20, 30, 40]));

//3//

//4//
const numbers = [1, 2, 3, 4, 5];
const plus4 = numbers.map((num) => num + 4);
console.log(plus4);
//5//

////// Mid //////

//6//
const words = ["apple", "banana", "cherry", "date"];
const upperCaseWords = words.map((word) => word.toUpperCase());
console.log(upperCaseWords);

//7//

//8//
const inputWords = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const longWords = inputWords.filter((word) => word.length > 7);
console.log(longWords);

//9//

//10//

//11//

//12//

const number = [12, 45, 67, 89, 23, 56, 73, 99, 100];
const numbersGreaterThan50 = number.filter((num) => num > 50);
console.log(numbersGreaterThan50);
