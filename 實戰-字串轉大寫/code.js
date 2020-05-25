let str = "HieeeeeeWooo"
let ans = ""

//判斷字串index值是否已經為大寫
//ASCII 大寫範圍為 64-90

for (let i = 0; i < str.length; i++) {
  if (str[i].charCodeAt(0) < 97) {
    console.log(`${str[i]} 是大寫`)
    ans += str[i]
  } else if (str[i].charCodeAt(0) >= 97) {
    console.log(`${str[i]} 是小寫`)
    ans += String.fromCharCode(str[i].charCodeAt(0) - 32)
  }
}

console.log(ans)
