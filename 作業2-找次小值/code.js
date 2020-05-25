let arr = [10, 8, 6]
let min = Infinity
let min2 = Infinity
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min2 = min
    min = arr[i]
  } else if (arr[i] < min2) {
    min2 = arr[i]
  }
}
console.log(min, min2)

// 1. 設定陣列、最小值、次小值的初始值
// 2. 迴圈index i
// 3. 如果陣列index[i]小於最小值
// 4. 次小值等於最小值
// 5. 最小值等於陣列index[i]
// 6. 返回迴圈
// 7. 如果陣列index[i]小於次小值
// 8. 次小值等於陣列index[i]
// 9. 返回迴圈
// 10.印出最小值與次小值
