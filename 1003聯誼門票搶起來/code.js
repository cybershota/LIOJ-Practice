var readline = require("readline")
var rl = readline.createInterface({
  input: process.stdin,
})

var lines = []

rl.on("line", function (line) {
  lines.push(line)
})

rl.on("close", function () {
  solve(lines)
})

function solve(lines) {
  const strCount = lines.slice(1, Number(lines[0]) + 1)
  const pickCount = lines.slice(strCount.length + 2)
  const conStr = strCount.join("")
  let output = ""
  for (let i = 0; i < pickCount.length; i++) {
    let word = conStr.charAt(Number(pickCount[i]) - 1)
    output += word
  }
  console.log(output)
}
