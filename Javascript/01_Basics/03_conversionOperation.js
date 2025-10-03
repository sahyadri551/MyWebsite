let score = 33
let scoreStr = "33"

console.log( typeof score) 
console.log( typeof(scoreStr))

// conversion operation
// 1. number to string
let newScore = String(score)
console.log( typeof newScore)

// 2. string to number
let newScoreStr = Number(scoreStr)
console.log( typeof newScoreStr)

scoreStr = "33abc"
newScoreStr = Number(scoreStr)
console.log( typeof newScoreStr) // number
console.log(newScoreStr) // NaN => Not a Number

// 3. null to number
let num = null
console.log( typeof num) // object
let newNum = Number(num)
console.log( typeof newNum) // number
console.log(newNum) // 0

// 4. boolean to number
let isLoggedIn = false
console.log( typeof isLoggedIn) // boolean
let newIsLoggedIn = Number(isLoggedIn)
console.log( typeof newIsLoggedIn) // number
console.log(newIsLoggedIn) // 0

// 5. Number to boolean
let isLoggedIn2 = 1
console.log( typeof isLoggedIn2) // number
let newIsLoggedIn2 = Boolean(isLoggedIn2)
console.log( typeof newIsLoggedIn2) // boolean
console.log(newIsLoggedIn2) // true

// 6. String to boolean
let isLoggedIn3 = "false"
let isLoggedIn4 = ""
console.log( typeof isLoggedIn3) // string
let newIsLoggedIn3 = Boolean(isLoggedIn3)
let newIsLoggedIn4 = Boolean(isLoggedIn4)
console.log( typeof newIsLoggedIn3) // boolean
console.log(newIsLoggedIn3) // true
console.log(newIsLoggedIn4) // false

// 7. Undefined to number
let undef = undefined
console.log( typeof undef) // undefined
let newUndef = Number(undef)
console.log( typeof newUndef) // number
console.log(newUndef) // NaN

// ****************** Operaions ******************

let val1 = 5
let val2 = -val1
console.log(val2) // -5

// Arithmetic operations
console.log(3 + 2) // 5
console.log(3 - 2) // 1
console.log(3 * 2) // 6
console.log(3 / 2) // 1.5
console.log(3 % 2) // 1
console.log(3 ** 2) // 9

// String concatenation
let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2
console.log(str3) // Hello World

// Adding number and string
let val3 = 5 + "5"
console.log(val3) // 55
console.log( typeof val3) // string
let val4 = "5" + 5 + 5
console.log(val4) // 555
console.log( typeof val4) // string
let val5 = 5 + 5 + "5"
console.log(val5) // 105
console.log( typeof val5) // string

// + operator
console.log(+"5") // 5
console.log(+"") // 0
console.log(+"abc") // NaN

// muliple assignments
let a, b, c
a = b = c = 5 + 5
console.log(a, b, c) // 10 10 10 -> not recommended

// increment and decrement operators
let points = 10
console.log(points) // 10
points++
console.log(points) // 11
points--
console.log(points) // 10
++points
console.log(points) // 11
--points
console.log(points) // 10

// postfix 
let points1 = 10
console.log(points1++) // 10
console.log(points1) // 11

// prefix
let points2 = 10
console.log(++points2) // 11
console.log(points2) // 11


