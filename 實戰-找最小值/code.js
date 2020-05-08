//製造隨機數字存入陣列
//迴圈比較元素，印出最小值
let arr = []
for (i = 1; i < 10; i++) {
  arr.push(getRandom(100, 300))
}
console.log("All numbers", arr)

let minNumber = arr[0]
for (i = 0; i < arr.length; i++) {
  if (arr[i] <= minNumber) {
    minNumber = arr[i]
  }
}
console.log("Min Number", minNumber)

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
