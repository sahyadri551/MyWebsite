// // Count The Digit 
// const prompt = require("prompt-sync")();
// let num = prompt("Enter a number: ");
// num = parseInt(num);
// let count = 0;
// while (num !== 0) {
//     num = Math.floor(num / 10);
//     count++;
// }
// console.log(count);

// // WAP to Find Sum of Frist 100 Natural Numbers
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// // WAP to find Factorial
// let num2=prompt("Enter a number: ");
// num2 = parseInt(num2);
// let factorial = 1;
// for (let i = 1; i <= num2; i++) {
//     factorial *= i;
// }
// console.log(factorial);

// // Count The Digit
// let num3=prompt("Enter a number: ");
// num3 = parseInt(num3);
// let count = 0;
// while (num3 !== 0) {
//     num3 = Math.floor(num3 / 10);
//     count++;
// }
// console.log(count);

// //  Reverse The Number
// let num4=prompt("Enter a number: ");
// num4 = parseInt(num4);
// let reversed = 0;
// while (num4 !== 0) {
//     let digit = num4 % 10;
//     reversed = reversed * 10 + digit;
//     num4 = Math.floor(num4 / 10);
// }
// console.log(reversed);

// // Number is Pallindrome Or Not
// let num5=prompt("Enter a number: ");
// num5 = parseInt(num5);
// let original = num5;
// reversed = 0;
// while (num5 !== 0) { 
//     let digit = num5 % 10;
//     reversed = reversed * 10 + digit;
//     num5 = Math.floor(num5 / 10);
// }
// if (original === reversed) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }
const prompt = require("prompt-sync")();
console.log("==============================================")
console.log("Prime Number =>");
let num6=prompt("Enter a number: ");
num6 = parseInt(num6);
let isPrime = true;
if (num6 <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= num6/2; i++) {
        if (num6 % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}

console.log("==============================================")
console.log("Perfect Number =>");
let num7=prompt("Enter a number: ");
num7 = parseInt(num7);
let sum = 0;
for (let i = 1; i < num7; i++) {
    if (num7 % i === 0) {
        sum += i;
    }
}
if (sum === num7) {
    console.log("Perfect");
} else {
    console.log("Not Perfect");
}

console.log("==============================================")
console.log("Strong Number  =>");
let num8=prompt("Enter a number: ");
num8 = parseInt(num8);
sum = 0;
for (let i = 1; i <= num8; i++) {
    let factorial = 1;
    for (let j = 1; j <= i; j++) {
        factorial *= j;
    }
    sum += factorial;
}
if (sum === num8) {
    console.log("Strong");
} else {
    console.log("Not Strong");
}

console.log("==============================================")
console.log("Armstrong Number  =>");
let num9=prompt("Enter a number: ");
num9 = parseInt(num9);
sum = 0;
let temp = num9;
while (temp !== 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
}
if (sum === num9) {
    console.log("Armstrong");
} else {
    console.log("Not Armstrong");
}

console.log("==============================================")
console.log("Fibonacci series =>");
let n = prompt("Enter the number of terms: ");
n = parseInt(n);
let a = 0, b = 1;
console.log("Fibonacci Series:");
for (let i = 1; i <= n; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
}