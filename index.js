const prompt = require("prompt-sync")();
const printResults = require("./printResults");

const numbers = process.argv.slice(2).map((num) => parseInt(num, 10));

const calculator = (a, b) => {
  if (!a && !b) {
    const number1 = prompt("Introduce un numero :");
    const number2 = prompt("Introduce otro numero :");

    calculator(parseInt(number1, 10), parseInt(number2, 10));
  } else if (!a || !b) {
    process.exit(0);
  } else {
    printResults(a, b);
  }
};

calculator(numbers[0], numbers[1]);
