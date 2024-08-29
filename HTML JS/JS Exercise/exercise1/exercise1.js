// Exercise 1: Understanding Variables & Data Types
let a = true;
let b = "c";
let c = "string";
let d = 53;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);

// Exercise 2: More Variables
let age = 25;
let gst = 0.09;
let isRaining = false;
let username = "Samantha Brown";

console.log(age);
console.log(gst);
console.log(isRaining);
console.log(username);

// Exercise 3: Basic Arithmetic Operations
let x = 10;
let y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Exercise 4: Simple Calculation
function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(sum(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

// Exercise 5: Donuts
function totalPrice(donuts, price) {
  total = donuts * price;
  console.log(`The total price of ${donuts} donuts is $${total}`);
  return total;
}

totalPrice(20, 1.5);

// Exercise 6: Taxes
function taxRequired(amount, gst) {
  totalPayment = (amount * gst) / 100;
  console.log(`The total tax required is $${totalPayment}`);
  return totalPayment;
}

taxRequired(450000, 2.9);

// Exercise 7: Area of a Rectangle
function areaRectangle(length, width) {
  area = length * width;
  console.log(`The area of the rectangle is ${area} square units`);
  return area;
}

areaRectangle(10, 5);

// Exercise 9: Working with Prompts
const prompt = require("prompt-sync")();
firstNumber = prompt("First number: ");
secondNumber = prompt("Second number: ");
console.log(
  `The product of ${firstNumber} and ${secondNumber} is ${multiply(
    firstNumber,
    secondNumber
  )}`
);

// Exercise 10: How old are you
let birthYear = prompt("Enter your birth year: ");
let currentYear = prompt("Enter the current year: ");
let usrAge = currentYear - birthYear;
console.log(`You are ${usrAge} years old`);

// Exercise 11: Area of Circle
let piValue = 3.1417;
radius = prompt("Enter the radius of the circle: ");
area = piValue * radius * radius;
console.log(`The area of the circle is ${area.toFixed(2)} square units`);

// Exercise 12: Average 4
let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let num3 = prompt("Enter the third number: ");
let num4 = prompt("Enter the fourth number: ");
console.log(
  `The average of the four numbers is: ${
    (parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4)) / 4
  }`
);

// Exercise 13: Number Swap (Trick Question)
let value1 = 10;
let value2 = 15;

console.log(`Value 1: ${value1} --- Value 2: ${value2}`);
// Basic Swap Method
let temp = value1;
value1 = value2;
value2 = temp;
console.log("Basic Swap Method");
console.log(`Value 1: ${value1} --- Value 2: ${value2}`);

// Advanced Swap Method
let value3 = 45;
let value4 = 99;
console.log(`Value 3: ${value3} --- Value 4: ${value4}`);
[value3, value4] = [value4, value3];
console.log("Advanced Swap Method");
console.log(`Value 3: ${value3} --- Value 4: ${value4}`);

// Exercise 14: Celsius to Fahrenheit Converter
let celsius = 35;
let fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius}°C is equal to ${fahrenheit}°F`);

// Exercise 15: Basic Decision Making
function classifyNumber(number) {
  if (number > 0) {
    console.log("Positive");
  }
  if (number < 0) {
    console.log("Negative");
  }
  if (number === 0) {
    console.log("Zero");
  }
}
