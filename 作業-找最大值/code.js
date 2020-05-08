//找陣列中的最大值
//製造隨機陣列
let arr = []
for (i = 1; i < 10; i++) {
  arr.push(getRandom(100, 300))
}
console.log("All numbers", arr)

//每次拿到最大的放一邊
let maxNumber = arr[0]
for (i = 0; i < arr.length; i++) {
  if (arr[i] >= maxNumber) {
    maxNumber = arr[i]
  }
}
console.log("Max Number", maxNumber)

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
