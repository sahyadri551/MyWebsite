arr=[1,2,3,4,5]

console.log(arr)
console.log(arr[2])
console.log(arr.length)
console.log(arr.push(6))//add 6 to the end
console.log(arr)
console.log(arr.pop())//remove last element
console.log(arr)
console.log(arr.shift())//remove first element
console.log(arr)
console.log(arr.unshift(0))//add 0 to the start
console.log(arr.unshift(-2,-1))//add -2,-1 to the start
console.log(arr.slice(1,4))//get elements from index 1 to 4
console.log(arr)
console.log(arr.splice(2,2,10,11))//remove 2 elements from index 2 and add 10,11
console.log(arr)
console.log(arr.indexOf(10))//get index of 10
console.log(arr.includes(11))//check if 11 is in the array
console.log(arr.join("_"))//join elements with "-"
arr.forEach(element => {
    console.log(element)
});
console.log(arr.map(x=>x*2))//multiply each element by 2
console.log(arr.filter(x=>x>2))//get elements greater than 2
console.log(arr.reduce((x,y)=>x+y))//sum of all elements
console.log(arr.toString())
console.log(arr.reverse())//reverse the array
console.log(arr.sort())//sort the array
console.log(arr.fill(0,2,4))//fill elements from index 2 to 4 with 0
console.log(arr.copyWithin(0,2,4))//copy elements from index 2 to 4 to index 0
console.log(arr)
console.log(arr.entries())//get an iterator of [index, value] pairs
console.log(Array.from("Hello"))//convert string to array
console.log(Array.isArray(arr))//check if arr is an array
console.log(arr.flatMap(x=>[x,x*2]))//flatMap example
console.log(arr.find(x=>x>2))//find first element greater than 2
console.log(arr.findIndex(x=>x>2))//find index of first element greater than 2
console.log(arr.every(x=>x>0))//check if all elements are greater than 0
console.log(arr.some(x=>x>0))//check if some elements are greater than 0
console.log(arr.reduceRight((x,y)=>x+y))//sum of all elements from right to left
console.log(arr.findLast(x=>x>2))//find last element greater than 2
console.log(arr.findLastIndex(x=>x>2))//find index of last element greater than 2
key=arr.keys()//get an iterator of keys
key2=arr.values()//get an iterator of values
for (let i of key){
    console.log("Key :",i)
}
for (let i of key2){
    console.log("Value :",i)
}
console.log(arr.toLocaleString())//convert array to locale string
console.log(arr.flat())//flatten the array
console.log(arr.at(2))//get element at index 2
console.log(arr.at(-1))//get last element
console.log(arr.with(0,20))//replace element at index 0 with 20
console.log(arr)
console.log(arr.toReversed())//return a reversed array without modifying the original
console.log(arr.toSorted())//return a sorted array without modifying the original
console.log(arr.toSpliced(2, 1, 10))//return a spliced array without modifying the original
console.log(arr.toSorted((a, b) => b - a))//sort in descending order without modifying the original
console.log(arr)

/*
## Mutator Methods (Modify the Original Array) ✏️
These methods change the array they are called on.

push(): Adds one or more elements to the end of an array.

pop(): Removes the last element from an array.

shift(): Removes the first element from an array.

unshift(): Adds one or more elements to the beginning of an array.

splice(): Adds, removes, or replaces elements at a specific index.

sort(): Sorts the elements of an array.

reverse(): Reverses the order of the elements in an array.

fill(): Fills all the elements in an array with a static value.

copyWithin(): Copies a sequence of array elements to another location within the same array.

## Accessor Methods (Do Not Modify the Original Array) ✨
These methods return a new array or another value, leaving the original array unchanged.

slice(): Creates a new array containing a portion of the original array.

concat(): Merges two or more arrays to create a new one.

join(): Joins all elements of an array into a single string.

includes(): Checks if an array contains a certain element, returning true or false.

indexOf(): Returns the first index at which a given element can be found.

lastIndexOf(): Returns the last index at which a given element can be found.

toString(): Returns a string representing the array and its elements.

## Iteration Methods (Loop Over Elements) 🔄
These methods typically apply a function to the elements of an array. Most do not modify the original array.

forEach(): Executes a provided function once for each array element.

map(): Creates a new array populated with the results of calling a provided function on every element.

filter(): Creates a new array with all elements that pass the test implemented by the provided function.

reduce(): Executes a "reducer" function on each element, resulting in a single output value (e.g., summing all values).

reduceRight(): Works like reduce(), but executes from right-to-left.

every(): Tests whether all elements in the array pass the test implemented by the provided function.

some(): Tests whether at least one element in the array passes the test implemented by the provided function.

find(): Returns the first element in the array that satisfies the provided testing function.

findIndex(): Returns the index of the first element that satisfies the testing function.

findLast(): Returns the last element in the array that satisfies the provided testing function.

findLastIndex(): Returns the index of the last element that satisfies the testing function.

flatMap(): A combination of map() followed by flattening the result into a new array.
*/