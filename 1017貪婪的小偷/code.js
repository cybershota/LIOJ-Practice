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
// 題目要求：以陣列index[0]值為限，求陣列index[1]值內代表長度中（為index[2]~index[x]）價值前幾名高的index[0]值個數的數值加總
// 可能的問題：如果我使用javascript，題目要求的數值（100000）會不會超過JS的最大數字？(型態問題？？)
// 可能的問題：每個物品加總會不會超過JS最大整數？ 如果超過怎麼辦？
// 如果超過是否以字串代表數字？
// 事實查核：JS最大整數為2的53次方-1 (9007199254740991)
// https://stackoverflow.com/a/307200/12423018
// 陣列儲存元素最多可以到多少個？
// 事實查核：232-1 = 4,294,967,295
// https://stackoverflow.com/a/6155063/12423018
// 陷阱！！！！！！！！
// 小偷包包可為0 小偷今天不想偷東西！！！！

function solve(lines) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  let c = Number(lines[0]) //包包容量
  let objValue = lines
    .slice(2)
    .map((e) => Number(e))
    .sort((a, b) => b - a) // 物品價值列表
  let order = objValue.slice(0, c)
  if (c !== 0) {
    console.log(order.reduce(reducer))
  } else {
    console.log(0)
  }
}
