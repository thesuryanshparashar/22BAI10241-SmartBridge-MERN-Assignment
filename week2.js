// Task 1
let age = 25;
let isAdult = age >= 18;
console.log("Is Adult:", isAdult);

// Task 2
let x = 10;
let y = 5;

let addition = x + y;
console.log("Addition:", addition);
let multiplication = x * y;
console.log("Multiplication:", multiplication);
let modulus = x % y;
console.log("Modulus:", modulus);

// Task 3
let n = 7;
let isEven = (n % 2 === 0) ? "Even" : "Odd";
console.log("Number", n, "is", isEven);

// Task 4
let numbers = [];
for (let i = 1; i <= 5; i++) {
  numbers.push(i);
}
console.log("Numbers array:", numbers);

// Task 5
function square(num) {
  return num * num;
}
console.log("Square of 4:", square(4));
