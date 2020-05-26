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
  // 2 4 8 16 32 64 128 256
  let quotient = lines
  let remain = lines
  let power2 = 0
  let bucketPower = 0
  let bucketCount = 0

  if (lines % 2 === 0) {
    domath()
  } else if (lines % 2 === 1) {
    domath()
    bucketCount -= 1
  }

  function domath() {
    while (remain > 1) {
      while (quotient % 2 === 0) {
        quotient = quotient / 2
        power2 += 1
      }
      console.log(`一個水桶使用2的${power2}次方`)
      bucketCount += 1
      remain -= Math.pow(2, power2)
      quotient = remain
      power2 = 0
    }
  }
  console.log(bucketCount)
}
