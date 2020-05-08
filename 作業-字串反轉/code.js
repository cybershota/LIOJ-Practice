//給字串，求反轉字串的結果
const str = "HelloWorld!"
//將字串轉成陣列，反轉後，再合併
let strArr = str.split("").reverse().join("")
console.log(strArr)
