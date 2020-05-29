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

// 白話文改寫
// 題目要求：在 1 與 2147483647 (2的31次方-1) 數字之間，如果取兩數相等輸出Yes，反之輸出No
// 可能的問題：如果我使用javascript，題目要求會不會超過JS的最大數字？(型態問題？？)
// 事實查核：JS最大整數為2的53次方-1 (9007199254740991)
// https://stackoverflow.com/a/307200/12423018

function solve(lines) {
  let soulA = Number(lines[0].split(" ")[0])
  let soulB = Number(lines[0].split(" ")[1])
  if (soulA === soulB) {
    console.log("Yes")
  } else {
    console.log("No")
  }
}
