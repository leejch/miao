x = 2025
console.log(x) // x
console.log(x * 2) // 2x
console.log(Math.pow(x, 2)) // x^2
console.log(Math.pow(x, 3)) // x^3
console.log(Math.pow(x, 5)) // x^5
console.log("" + x) // "x"
console.log(x >= 50 && x <= 100)
console.log(x % 2 !== 0) // 是否奇数
console.log(x % 2 === 0) // 是否偶数
console.log(x === 10 ? "baz" : x > 10 ? "foo" : "bar") // 等于10 baz, 大于10 foo, 小于10 bar
console.log(x % 10) // 个位数
console.log(Math.floor(x / 10) % 10) // 百位数
console.log(x % 100) // 百位以下部分
console.log(x > 200 && x % 3 === 0 && x % 7 !== 0) // 大于200 且 3的倍数 且 非7的倍数
console.log(Math.floor(x / 100) + 1) // 世纪
console.log(x >= 1896 && x % 4 === 0) // 是否举办奥运会
console.log(x >= 1930 && (x + 2) % 4 === 0 && x !== 1942 && x !== 1946) // 是否举办奥运会
console.log(x % 4 === 0 && x % 100 !== 0 || x % 400 === 0) // 闰年
console.log(x > 0 && x < 100 && x % 2 !== 0 && x % 3 !== 0 && x % 5 !== 0 && x % 7 !== 0 || x === 2 || x === 3 || x === 5 || x === 7) // (0, 100)的素数
