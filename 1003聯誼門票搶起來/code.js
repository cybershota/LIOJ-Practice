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
  //提取index0之後會有幾行字串
  const strCount = lines.slice(1, Number(lines[0]) + 1)

  //提取indexN之後會有幾個指定數字
  //因為slice()方法，第一參數會算自己，所以再+1
  const pickCount = lines.slice(strCount.length + 2)

  //strCount組合成大字串
  const conStr = strCount.join("")

  //依據抽中的號碼再次組合字串
  let output = ""
  for (let i = 0; i < pickCount.length; i++) {
    let word = conStr.charAt(Number(pickCount[i]) - 1)
    output += word
  }
  console.log(output)
}
