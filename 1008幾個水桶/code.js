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
  let bucket = []
  let remain = lines
  let power2 = 0
  while (remain >= 1) {
    for (i = 1; i < 31; i++) {
      if (remain >= Math.pow(2, i)) {
        power2 += 1
      }
    }
    if (power2 > 1) {
      bucket.push(power2)
      // console.log(`一個桶子使用2的${power2}次方`)
    } else {
      bucket.push(power2 + 1)
      // console.log(`一個桶子使用2的${power2 + 1}次方`)
      // console.log(`再多一個裝不滿的水桶`)
    }
    remain -= Math.pow(2, power2)
    power2 = 0
  }
  console.log(bucket)
  console.log(bucket.length)
}
