var readline = require("readline")

var lines = []
var rl = readline.createInterface({
  input: process.stdin,
})

rl.on("line", function (line) {
  lines.push(line)
})

rl.on("close", function () {
  solve(lines)
})

function solve(lines) {
  for (let i = 0; i < lines.length; i++) {
    let el = lines[i].split(" ")
    if (el[0] === 0 && el[1] === 0) {
      return
    } else if (el[0] > el[1]) {
      console.log(el[0])
    } else if (el[0] < el[1]) {
      console.log(el[1])
    } else if (el[0] > 0 && el[1] > 0 && el[0] === el[1]) {
      console.log(el[0])
    }
  }
}
