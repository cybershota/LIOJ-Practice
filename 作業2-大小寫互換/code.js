let str = "hELLo"
let ans = ""
for (let i = 0; i < str.length; i++) {
  let code = str.charCodeAt(i)
  if (code >= 97 && code <= 122) {
    ans += String.fromCharCode(code - 32)
  } else if (code >= 65 && code <= 90) {
    ans += String.fromCharCode(code + 32)
  } else {
    ans += str[i]
  }
}
console.log(ans)

// 1. 設定字串、答案變數初始值
// 2. 迴圈開始
// 3. 設定字串index轉換為數字編碼，存入code變數
// 4. 如果code大於98和小於122 亦即該字符為ASCII小寫編碼範圍內
// 5. 字符轉大寫存入答案變數
// 6. 返回迴圈
// 7. 如果code大於等於65和小於等於90，亦即該字符為ASCII大寫編碼範圍內
// 8. 字符轉小寫存入答案變數
// 9. 返回迴圈
// 10.如果皆非以上條件，直接存入答案變數
// 11.返回迴圈
// 12.打印答案
