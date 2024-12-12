function countArguments(...args) {
  console.log(`2. Кількість аргументів: ${args.length}`);
}

countArguments(1, 2, 3);
countArguments("a", "b");
countArguments();

function checkNumber(number, number2) {
  return number - number2;
}

let result = checkNumber(12, 11);

console.log(`3.1. Numbers 12:11 result = ${result}`);

result = checkNumber(10, 11);

console.log(`3.2 Numbers 10:11 result = ${result}`);

result = checkNumber(10, 10);

console.log(`3.3 Numbers 10:10 result = ${result}`);

function factorial(number) {
  if (number === 0 || number === 1) return 1;
  return number * factorial(number - 1);
}

function getFactorial() {
  const inputElement = document.getElementById("number");
  const number = parseInt(inputElement.value, 10);
  const output = document.getElementById("output");

  if (isNaN(number) || number < 0) {
    console.log("Будь ласка, введіть коректне додатнє число!");
    return;
  }

  const result = factorial(number);
  output.innerHTML = `Факторіал числа ${number} дорівнює ${result}`;
}

function transferNumber(num1, num2, num3) {
  let result = Number(`${num1}${num2}${num3}`);

  console.log(`Transfer number ${result} type ${typeof result}`);
}

transferNumber(3, 2, 1);

function square(...args) {
  const [a, b = a] = args;
  const area = a * b;
  console.log(`Площа: ${area}`);
}

square(5, 4);

square(10);


function isPerfectNumber(number) {
  if (number <= 0) return false;

  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }

  return sum === number;
}

console.log(isPerfectNumber(6)); 
console.log(isPerfectNumber(28)); 
console.log(isPerfectNumber(12));

function findPerfectNumbersInRange(min, max) {
  const perfectNumbers = [];

  for (let i = min; i <= max; i++) {
    if (isPerfectNumber(i)) {
      perfectNumbers.push(i);
    }
  }

  console.log(`Досконалі числа в діапазоні від ${min} до ${max}:`, perfectNumbers);
  return perfectNumbers;
}

findPerfectNumbersInRange(1, 1000);