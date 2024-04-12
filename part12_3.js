const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");
const btn4 = document.querySelector(".btn-4");

const letter1 = document.querySelector(".letter1");
const letter2 = document.querySelector(".letter2");
const letter3 = document.querySelector(".letter3");
const letter4 = document.querySelector(".letter4");

const word = document.querySelector(".word");

const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

let letterFirst = "";
let letterSecond = "";
let letterThird = "";
let letterFour = "";
let sum = "";

const makeOne = function () {
  letterFirstIndex = Math.round(Math.random() * 33);
  letterFirst = alphabet[letterFirstIndex];
  letter1.textContent = letterFirst;
  sum = `${letterFirst}${letterSecond}${letterThird}${letterFour}`;
  word.textContent = sum;
};
const makeTwo = function () {
  letterSecondIndex = Math.round(Math.random() * 33);
  letterSecond = alphabet[letterSecondIndex];
  letter2.textContent = letterSecond;
  sum = `${letterFirst}${letterSecond}${letterThird}${letterFour}`;
  word.textContent = sum;
};
const makeThree = function () {
  letterThirdIndex = Math.round(Math.random() * 33);
  letterThird = alphabet[letterThirdIndex];
  letter3.textContent = letterThird;
  sum = `${letterFirst}${letterSecond}${letterThird}${letterFour}`;
  word.textContent = sum;
};
const makeFour = function () {
  letterFourIndex = Math.round(Math.random() * 33);
  letterFour = alphabet[letterFourIndex];
  letter4.textContent = letterFour;
  sum = `${letterFirst}${letterSecond}${letterThird}${letterFour}`;
  word.textContent = sum;
};

btn1.addEventListener("click", makeOne);
btn2.addEventListener("click", makeTwo);
btn3.addEventListener("click", makeThree);
btn4.addEventListener("click", makeFour);
