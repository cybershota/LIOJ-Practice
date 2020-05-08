//給定陣列，元素皆整數，求加總
const arr = [1, 2, 3, 4, 5]
//是否有陣列求和函式？
reducer = (acc, cur) => acc + cur
console.log(arr.reduce(reducer))
