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
  //分離陣列元素空格
  const element = lines[0].split(" ")
  //加總
  console.log(Number(element[0]) + Number(element[1]))
}
