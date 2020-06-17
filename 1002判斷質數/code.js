var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
});

var lines = [];

rl.on("line", function (line) {
  lines.push(line);
});

rl.on("close", function () {
  solve(lines);
});

function solve(lines) {
  for (let i = 1; i <= Number(lines[0]); i++) {
    if (isPrime(Number(lines[i]))) {
      console.log(lines[i] + " Prime");
    } else {
      console.log(lines[i] + " Composite");
    }
  }
}

function isPrime(number) {
  const prime = [2, 3, 5, 7, 11];
  if (number === 1) {
    return false;
  }
  for (j = 2; j < 10000; j++) {
    if (number % j === 0) {
      if (number === j) {
        return true;
      } else {
        return false;
      }
    }
  }
  return true;
}
