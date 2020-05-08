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
  // 計算回合數（index[0]）
  const roundCount = Number(lines[0]) + 1

  // 依回合數，迴圈抽出每回合該字串，字串中的三個元素做比較，輸出每次結果
  // 先從字串第三位開始(index[2])以幫助判別要比大或比小
  for (let i = 1; i < roundCount; i++) {
    let round = lines[i].split(" ")

    const expr = Number(round[2])

    switch (expr) {
      case 1:
        if (Number(round[0]) < Number(round[1])) {
          console.log("B")
        } else if (Number(round[0]) > Number(round[1])) {
          console.log("A")
        } else {
          console.log("DRAW")
        }
        break
      case -1:
        if (Number(round[0]) < Number(round[1])) {
          console.log("A")
        } else if (Number(round[0]) > Number(round[1])) {
          console.log("B")
        } else {
          console.log("DRAW")
        }
        break
      default:
        console.log("無法判斷獲勝依據")
    }
  }
}
