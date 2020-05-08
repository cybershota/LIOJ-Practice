//給一個數字n
//迴圈出1-n個數字
//遇到3的倍數印出Fizz(3的倍數可以被3整除)
//遇到5的倍數印出Buzz(5的倍數可以被5整除)
//遇到3和5的倍數印出FizzBuzz(3與5的倍數可以被15整除)
const numberN = Math.floor(Math.random() * 100)

for (let i = 1; i < numberN; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else {
    console.log(i)
  }
}
