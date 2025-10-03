// declaration
function greet(name) {
    return "Hello, " + name + "!"
}   

// expression
const greet2 = function (name) {
    return "Hello, " + name + "!"
}

// arrow function
const greet3 = (name) => {
    return "Hello, " + name + "!"
}

// concise arrow function
const greet4 = name => "Hello, " + name + "!"

console.log(greet("Alice"))
console.log(greet2("Bob"))
console.log(greet3("Charlie"))
console.log(greet4("David"))

// default parameters
function multiply(a, b = 1) {
    return a * b
}

console.log(multiply(5)) // 5
console.log(multiply(5, 2)) // 10

// rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("This function runs immediately!")
})()

// Function as first-class citizens
function callFunction(fn, value) {
    return fn(value)
}
console.log(callFunction(greet, "Eve")) // Hello, Eve!

// Closures
function makeCounter() {
    let count = 0
    return function () {
        count++
        return count
    }
}
const counter = makeCounter()
console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3

// Function binding
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName + " "
    }
}
const boundFullName = person.fullName.bind(person)
console.log(boundFullName()) // John Doe

// Function currying
function add_curry(a) {
    return function (b) {
        return a + b;
    };
}
const add5 = add_curry(5)
console.log(add5(3)) // 8
console.log(add_curry(2)(4)) // 6

// Function memoization
function memoize(fn) {
    const cache = {}
    return function (arg) {
        if (cache[arg]) {
            return cache[arg]
        } else {
            const result = fn(arg)
            cache[arg] = result
            return result
        }
    }
}

const factorial = memoize(function (n) {
    if (n === 0) return 1
    return n * factorial(n - 1)
})

console.log(factorial(5)) // 120
console.log(factorial(6)) // 720 (computed using cached value for factorial(5))
console.log(factorial(5)) // 120 (retrieved from cache)

// Method shorthand in objects
const obj = {
    name: "John",
    sayHello: function () {
        console.log("Hello, " + this.name + "!")
    }
}

obj.sayHello() // Hello, John!

// Using 'this' in different contexts
const user = {
    name: "John",
    sayHello: function () {
        console.log("Hello, " + this.name + "!")
    }
}
const user1 = { name: "Alice", sayHello: user.sayHello }
const user2 = { name: "Bob", sayHello: user.sayHello }
user1.sayHello() // Hello, Alice!
user2.sayHello() // Hello, Bob!

// function with arrays
function multiplyArray(arr, factor) {
    return arr.map(num => num * factor)
}
array = [1, 2, 3, 4]
console.log(multiplyArray(array, 2)) // [2, 4, 6, 8]
console.log(array) // [1, 2, 3, 4] (original array remains unchanged);

// to change array in place
function multiplyArrayInPlace(arr, factor) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= factor
    }
}
array = [1, 2, 3, 4]
multiplyArrayInPlace(array, 2)
console.log(array) // [2, 4, 6, 8]

// object as argument
function printUserInfo(user) {
    console.log("Name: " + user.name)
    console.log("Age: " + user.age)
    console.log("isAdmin: " + user.isAdmin)
}

// local and global scope
let globalVar = "I am global"
function printGlobalVar() {
    let localVar = "I am local"
    console.log(globalVar) // I am global
    console.log(localVar) // I am local
}

printGlobalVar()
console.log(globalVar) // I am global
// console.log(localVar) // Error: localVar is not defined
// change global variable inside function
function changeGlobalVar() {
    globalVar = "I am changed globally"
}
changeGlobalVar()
console.log(globalVar) // I am changed globally

// nested functions
function outerFunction() {
    let outerVar = "I am outer"
    function innerFunction() {
        let innerVar = "I am inner"
        console.log(outerVar) // I am outer
        console.log(innerVar) // I am inner
        outerVar = "Outer variable changed"
        console.log(outerVar) // Outer variable changed
    }
    innerFunction()
}

// calling outer function
outerFunction()
// innerFunction() // Error: innerFunction is not defined

// issues with var and how let/const solve them
function varIssue() {
    for (var i = 0; i < 3; i++) {
        console.log(i) // 0, 1, 2
    }
    console.log(i) // 3
}
varIssue()

function letConstSolution() {
    for (let j = 0; j < 3; j++) {
        console.log(j) // 0, 1, 2
    }
    //console.log(j) // Error: j is not defined
}
letConstSolution()
// arrow function and this
const obj2 = {
    name: "John",
    sayHello: () => {
        console.log("Hello, " + this.name + "!") // 'this' does not refer to obj2
    }
}
obj2.sayHello() // Hello, undefined!
const obj3 = {
    name: "John",
    sayHello: function () {
        console.log("Hello, " + this.name + "!") // 'this' refers to obj3
    }
}
obj3.sayHello() // Hello, John!

// callback functions
function fetchData(callback) {
    setTimeout(() => {
        const data = "Fetched data"
        callback(data)
    }, 1000)
}
fetchData(data => {
    console.log(data) // "Fetched data"
})

//hoisting
console.log(add(2, 3)) // 5
function add(a, b) {
    return a + b
}

// high order functions
function highOrderFunction(fn, value) {
    return fn(value)
}
console.log(highOrderFunction(add, 2, 3)) // 5
console.log(highOrderFunction(x => x * x, 4)) // 16

// Issues with hoisting
// sayHello() -> undefined
let sayHello = function () {
    console.log("Hello, world!")
}
