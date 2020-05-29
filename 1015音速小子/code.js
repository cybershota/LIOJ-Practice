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
// 題目要求：求出變數t秒乘以340公尺等於多少距離？
// 可能的問題：如果我使用javascript，題目要求的t（1000000）會不會超過JS的最大數字？(型態問題？？)
// 可能的問題：tx340會不會超過最大數字？ 340000000
// 事實查核：JS最大整數為2的53次方-1 (9007199254740991)
// https://stackoverflow.com/a/307200/12423018

function solve(lines) {
  let t = Number(lines[0])
  console.log(t * 340)
}
