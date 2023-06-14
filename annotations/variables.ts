let apples = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i) => {
  console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 5, "y": 10}'; // returned "any" type
const result: { x: number; y: number } = JSON.parse(json);
console.log(result);
// 2) When we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

words.forEach((w) => (w === "green" ? true : false));
// 3) When inference doesn't work, variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numAboveZero: boolean | number = false;

numbers.forEach((n) => {
  if (n > 0) {
    numAboveZero = n;
  }
});
