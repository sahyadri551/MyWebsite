// for of

let arr = ["item1", "item2", "item3"];
for (let item of arr) {
    console.log(item); // item1, item2, item3
}

// for in

let obj = { key1: "value1", key2: "value2", key3: "value3" };
for (let key in obj) {
    console.log(key); // key1, key2, key3
    console.log(obj[key]); // value1, value2, value3
}

// for each
arr.forEach(item => {
    console.log(item); // item1, item2, item3
});

// arrey of objects
let arrOfObj = [
    { key1: "value1", key2: "value2", key3: "value3" },
    { key1: "value1", key2: "value2", key3: "value3" },
    { key1: "value1", key2: "value2", key3: "value3" },
];
arrOfObj.forEach(obj => {
    for (let key in obj) {
        console.log(key); // key1, key2, key3
        console.log(obj[key]); // value1, value2, value3
    }
    console.log("-----");
});

// for of on string
let str = "Hello";
for (let char of str) {
    console.log(char); // H, e, l, l, o
}

// for in on string
for (let index in str) {
    console.log(index); // 0, 1, 2, 3, 4
    console.log(str[index]); // H, e, l, l, o
}

// for in on array
let arr2 = ["item1", "item2", "item3"];
for (let index in arr2) {
    console.log(index); // 0, 1, 2
    console.log(arr2[index]); // item1, item2, item3
}

// maps
let map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
map.set("key3", "value3");
for (let [key, value] of map) {
    console.log(key); // key1, key2, key3
    console.log(value); // value1, value2, value3
}

// sets
let set = new Set();
set.add("item1");
set.add("item2");
set.add("item3");
for (let item of set) {
    console.log(item); // item1, item2, item3
}

// array map example
let arr3 = [1, 2, 3];
let mappedArr = arr3.map(num => num * 2);
console.log(mappedArr); // [2, 4, 6]

// array filter example
let arr4 = [1, 2, 3, 4, 5];
let filteredArr = arr4.filter(num => num % 2 === 0);
console.log(filteredArr); // [2, 4]

// array reduce example
let arr5 = [1, 2, 3, 4, 5];
let reducedArr = arr5.reduce((total, num) => total + num, 0);
console.log(reducedArr); // 15

// array find example
let arr6 = [1, 2, 3, 4, 5];
let foundNum = arr6.find(num => num % 2 === 0);
console.log(foundNum); // 2

// array find index example
let arr7 = [1, 2, 3, 4, 5];
let foundIndex = arr7.findIndex(num => num % 2 === 0);
console.log(foundIndex); // 1

// array every example
let arr8 = [1, 2, 3, 4, 5];
let allGreaterThanZero = arr8.every(num => num > 0);
console.log(allGreaterThanZero); // true

// array some example
let arr9 = [1, 2, 3, 4, 5];
let someGreaterThanZero = arr9.some(num => num > 0);
console.log(someGreaterThanZero); // true

// function reference in array
let arr10 = [1, 2, 3, 4, 5];
let func = num => num * 2;
arr10.forEach(func);
console.log(arr10); // [2, 4, 6, 8, 10]

// nested map
let arr11 = [1, 2, 3];
let mappedArr11 = arr11.map(num =>  num * 2).map(num => num + 2);
console.log(mappedArr11); // [4, 6, 8]

// nested filter
let arr12 = [1, 2, 3, 4, 5];
let filteredArr12 = arr12.filter(num => num % 2 === 0).filter(num => num > 2);
console.log(filteredArr12); // [4, 5]
