/*
    Primitive Data Types in JavaScript
    1. Number
    2. String
    3. Boolean
    4. Null
    5. Undefined
    6. Symbol (ES6)
    7. BigInt (ES11)
    -> These are immutable (cannot be changed) and called by value.
    -> Stored in stack memory.
    -> Faster access.
    
    Non-Primitive Data Types / Reference in JavaScript
    1. Object
    2. Array
    3. Function
    -> These are mutable (can be changed) and called by reference.
    -> Stored in heap memory.
    -> Slower access.

    ==> JS is a dynamically typed language, meaning you don't have to declare the data type of a variable explicitly. The interpreter infers the type based on the assigned value.
    ==> JS is a weakly typed language, meaning it performs implicit type coercion when necessary, allowing operations between different data types.
    ==>  Decimals are included in the Number data type.
*/

// Primitive Data Types
let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let n = null; // Null
let u; // Undefined
let sym = Symbol("unique"); // Symbol
let bigInt = 9007199254740991n; // BigInt
let decimal = 3.14; // Decimal (also a Number)

//-> symbol
id1 = Symbol("123");
id2 = Symbol("123");
console.log(id1 === id2); // false
console.log(id1 == id2); // false
console.log(typeof id1); // symbol

// Non-Primitive Data Types/Reference
let obj = { name: "Alice", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
const myfunc = function () { // Function
    console.log("Hello!");
} 

// Special Numeric Values
let inf = Infinity; // Positive Infinity
let negInf = -Infinity; // Negative Infinity
let nan = NaN; // Not-a-Number

// Type Checking
console.log(typeof num); // "number"
console.log(typeof null); // "object" (this is a known quirk in JavaScript)
console.log(typeof arr); // "object"
console.log(typeof myfunc); // "function"
console.log(typeof obj); // "object"
console.log(typeof bigInt); // "bigint"