// Empty string, undefined, null, 0, false.NaN are all considered falsey values in JavaScript.
// All other values are considered truthy.

let name = "John"; // truthy
let age = 0; // falsey
let isStudent = true; // truthy
let address = ""; // falsey

// in case of objects, arrays, functions, etc. they are truthy
let person = {}; // truthy
let numbers = [1, 2, 3]; // truthy
let myFunction = function () {}; // truthy

let arr=[] // truthy
if (arr) {
    console.log("Array is truthy");
} else {
    console.log("Array is falsey");
}

// check for array is empty or not
if (arr.length) {
    console.log("Array is not empty");
} else {
    console.log("Array is empty");
}

// check for object is empty or not
obj = {}
if (Object.keys(obj).length) {
    console.log("Object is not empty");
} else {
    console.log("Object is empty");
}

// some special results:
if (false == 0) {
    console.log("false == 0 is true");
} else {
    console.log("false == 0 is false");
}

if (false === 0) {
    console.log("false === 0 is true");
} else {
    console.log("false === 0 is false");
}

// false with ''
if (false == "") {
    console.log("false == '' is true");
} else {
    console.log("false == '' is false");
}

// false with NaN
if (false == NaN) {
    console.log("false == NaN is true");
} else {
    console.log("false == NaN is false");
}

// 0 with ''
if (0 == "") {
    console.log("0 == '' is true");
} else {
    console.log("0 == '' is false");
}

// ?? nullish coalescing operator -> works only for null and undefined
let a = null ?? "default value";
console.log(a);
let b = undefined ?? "default value" ?? "default value2";
console.log(b);
