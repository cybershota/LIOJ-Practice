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
  for (i = 1; i < Number(lines[0]) + 1; i++) {
    if (Number(lines[i]) === 1) {
      console.log("Composite");
    } else {
      if (isPrime(Number(lines[i])) === true) {
        console.log("Prime");
      } else {
        console.log("Composite");
      }
    }
  }
}

function isPrime(number) {
  if (number % 2 === 0) {
    if (number === 2) {
      return true;
    } else {
      return false;
    }
  } else if (number % 3 === 0) {
    if (number === 3) {
      return true;
    } else {
      return false;
    }
  } else if (number % 5 === 0) {
    if (number === 5) {
      return true;
    } else {
      return false;
    }
  } else if (number % 7 === 0) {
    if (number === 7) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}
