"use strict"; // it is a directive which is used to enable strict mode in JavaScript means all js code should be written as per latest version of js

// alert("Hello World"); // we are using node js so alert will not work it will work in browser

let name = "John"; // string datatype
let age = 25; // number datatype, range: -2^53 to 2^53
// BigInt datatype, range: greater than 2^53
let bigIntNum = 1234567890123456789012345678901234567890n; // BigInt datatype
let isStudent = true; // boolean datatype
let address; // undefined datatype
let phone = null; // null datatype => standalone value

//symbol datatype => used to create unique identifiers for objects
let sym1 = Symbol("id");

// object datatype => used to store collections of data and more complex entities
let person = {
  name: "Alice",
  age: 30,
};

// typeof operator => used to find the datatype of a variable
console.log(typeof name);

console.log(typeof 3);

console.log(typeof null); // it will return object because in js null is considered as an object "javascript bug"
console.log(typeof undefined); // it will return undefined

console.log(typeof sym1);