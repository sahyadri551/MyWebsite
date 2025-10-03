// Stack -> Primitive data types (number, string, boolean, null, undefined, symbol)
// Heap -> Reference data types (objects, arrays, functions)

let num1 = 6; // stored in stack
let num2 = num1; // stored in stack
num1++;
console.log(num1); // 7
console.log(num2); // 6

let arr1 = ["item1", "item2"]; // stored in heap
let arr2 = arr1;
arr1.push("item3");
console.log(arr1); // ['item1', 'item2', 'item3']
console.log(arr2); // ['item1', 'item2', 'item3']
// both arr1 and arr2 point to the same reference in heap

let arr3 = [...arr1]; // spread operator -> creates a shallow copy
arr1.push("item4");
console.log(arr1); // ['item1', 'item2', 'item3', 'item4']
console.log(arr3); // ['item1', 'item2', 'item3']
// arr3 is a new array in heap with copied values from arr1

let obj1 = { key1: "value1", key2: "value2" }; // stored in heap
let obj2 = obj1;
obj1.key3 = "value3";
console.log(obj1); // { key1: 'value1', key2: 'value2', key3: 'value3' }
console.log(obj2); // { key1: 'value1', key2: 'value2', key3: 'value3' }
// both obj1 and obj2 point to the same reference in heap

let obj3 = { ...obj1 }; // spread operator -> creates a shallow copy
obj1.key4 = "value4";
console.log(obj1); // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }
console.log(obj3); // { key1: 'value1', key2: 'value2', key3: 'value3' }
// obj3 is a new object in heap with copied values from obj1