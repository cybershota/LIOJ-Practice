//陣列內有至少三位數字元素，找次大值
//試著用更進階一點的虛擬碼寫
// 1.隨機的陣列
// 2.設定預設最大值為0(或可為-Infinity)
// 3.設定預設的次大值為0(或可為-Infinity)
// 4.設定迴圈規範，從陣列index 0開始，迴圈次數為陣列長度，迴圈疊加次數至陣列長度
// 5.陣列index[i]比最大值0大，同時也比次大值0大
// 6.次大值等於最大值
// 7.最大值等於陣列index[i]
// 8.陣列index[i]比最大值小，但比次大值大
// 9.次大值等於陣列index[i]

let arry = [5, 7, 3, 8, 4, 10]
let first = 0
let second = 0

for (i = 0; i < arry.length; i++) {
  if (arry[i] > first && arry[i] > second) {
    second = first
    first = arry[i]
  } else if (arry[i] < first && arry[i] > second) {
    second = arry[i]
  }
}

console.log(first)
console.log(second)
