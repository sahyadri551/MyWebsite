console.log(2>3) // false
console.log(2<3) // true
console.log(2>=3) // false
console.log(2<=3) // true
console.log(2==3) // false
console.log(2!=3) // true

// Strict equality operator (===,!==) => it checks both value and datatype
console.log(2==="2") // false
console.log(2==="2") // false
console.log(2!=="2") // true

// Loose equality operator => it checks only value
console.log(2=="2") // true
console.log(2!="2") // false
console.log(0==false) // true
console.log("2">2) // false
console.log("2"<2) // false
console.log("2">=2) // true
console.log("2"<=2) // true

// null comparision
console.log(null==undefined) // true
console.log(null===undefined) // false
console.log(null==0) // false
console.log(null===0) // false
console.log(null>=0) // true
console.log(null>0) // false
console.log(null<=0) // true
console.log(null<0) // false

/*
The reason is that an equality check == and comparisons <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why null >= 0 is true and null > 0 is false.
On the other hand, equality checks for null/undefined are special. They do not convert the types,
and only null == undefined is true (all other comparisons with null/undefined return false).
That's why null == 0 is false.
*/

// undefined comparision
console.log(undefined==0) // false
console.log(undefined===0) // false
console.log(undefined>=0) // false
console.log(undefined>0) // false
console.log(undefined<=0) // false
console.log(undefined<0) // false
