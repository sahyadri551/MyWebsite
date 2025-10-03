// singleton object
const obj = new Object() // using Object constructor
const obj2_literal = {} // using object literal syntax

// object literal with various property types
let user = {
    name: "John",
    age: 30,
    isAdmin: true,
    courses: ["HTML", "CSS", "JS"],
    address: {
        city: "New York",
        zip: "10001",
    },
    "phone number": "123-456-7890" // property name with space
};

console.log(user.name) // access property using dot notation
console.log(user["age"]) // access property using bracket notation
console.log(user["phone number"]) // access property with space using bracket notation

// adding a new property
user.email = "K9TtW@example.com"
console.log(user.email)

// deleting a property
delete user.email
console.log(user.email) // undefined

// checking if a property exists
console.log("age" in user) // true
console.log("email" in user) // false

// iterating over properties
for (let key in user) {
    console.log(key + ": " + user[key])
}

// nested object access
console.log(user.address.city) // New York
console.log(user.courses[1]) // CSS

// object methods
user.greet = function () {
    console.log("Hello, " + this.name)
}
user.greet()
console.log(Object.keys(user)) // get all property names
console.log(Object.values(user)) // get all property values
console.log(Object.entries(user)) // get all key-value pairs
console.log(JSON.stringify(user)) // convert object to JSON string
console.log(JSON.parse('{"name":"John","age":30,"isAdmin":true,"courses":["HTML","CSS","JS"],"address":{"city":"New York","zip":"10001"},"phone number":"123-456-7890","greet":{}}')) // convert JSON string to object
console.log(Object.assign({}, user)) // shallow copy of the object
console.log(Object.freeze(user)) // freeze the object (make it immutable)
user.name = "Jane" // this will not change the name property
console.log(user.name) // John
console.log(Object.seal(user)) // seal the object (prevent adding/removing properties)
user.age = 31 // this will change the age property
console.log(user.age) // 31
console.log(Object.getOwnPropertyNames(user)) // get all property names including non-enumerable ones
console.log(Object.getOwnPropertyDescriptor(user, "name")) // get property descriptor
console.log(Object.defineProperty(user, "name", { value: "John" })) // define a new property
console.log(user.name) // John

// constructor function
function User(name, age, isAdmin) {
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;
}
let user1 = new User("Alice", 25, false)
let user2 = new User("Bob", 28, true)
console.log(user1.name) // Alice
console.log(user2.isAdmin) // true
console.log(user1 instanceof User) // true
console.log(user2 instanceof User) // true
console.log(User.prototype) // prototype of the constructor function
User.prototype.sayHello = function () {
    console.log("Hello, " + this.name)
}
user1.sayHello()
user2.sayHello()

// object literals with methods
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    drive: function () {
        console.log("Driving a " + this.brand + " " + this.model)    
    },
    info() {
        console.log(this.brand + " " + this.model + " " + this.year)
    }
}
car.drive()
car.info()
console.log(Object.getPrototypeOf(car)) // get prototype of the object
console.log(car.hasOwnProperty("brand")) // check if property exists
console.log(car.propertyIsEnumerable("brand")) // check if property is enumerable

// using 'this' in object methods
let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
}
console.log(person.fullName())

// Symbols as property keys
let sym = Symbol("id")
let user3 = {
    name: "Charlie",
    [sym]: 12345
}
console.log(user3[sym]) // 12345
console.log(Object.getOwnPropertySymbols(user3)) // get all symbol properties

// Object destructuring
let { name, age } = user
console.log(name) // John
console.log(age) // 31
let { city, zip } = user.address
console.log(city) // New York
console.log(zip) // 10001

// Object spread operator
let userCopy = { ...user }
console.log(userCopy)

let updatedUser = { ...user, age: 32 }
console.log(updatedUser.age) // 32

// Merging objects
let objA = { a: 1, b: 2 }
let objB = { b: 3, c: 4 }
let mergedObj = { ...objA, ...objB }
console.log(mergedObj) // { a: 1, b: 3, c: 4 }

// object.assign
let target = { a: 1, b: 2 }
let source = { b: 3, c: 4 }
Object.assign(target, source)
console.log(target) // { a: 1, b: 3, c: 4 }
obj3=Object.assign({},target, source)
console.log(obj3) // { a: 1, b: 3, c: 4 }

// Nested object destructuring
let { address: { city: userCity, zip: userZip } } = user
console.log(userCity) // New York
console.log(userZip) // 10001

// Optional chaining - accessing nested properties safely
console.log(user.address?.city) // New York
console.log(user.contact?.email) // undefined

// Nullish coalescing operator
let userAge = user.age ?? 18
console.log(userAge) // 31
let userScore = user.score ?? 0
console.log(userScore) // 0

// Object.entries and Object.fromEntries
let entries = Object.entries(user)
console.log(entries) // array of key-value pairs
let newUser = Object.fromEntries(entries)
console.log(newUser) // reconstruct object from entries

// WeakMap example
let weakMap = new WeakMap()
let objKey = {}
weakMap.set(objKey, "value associated with objKey")
console.log(weakMap.get(objKey)) // value associated with objKey
objKey = null // now the entry can be garbage collected

// WeakSet example
let weakSet = new WeakSet()
let obj1 = {}
let obj2 = {}
weakSet.add(obj1)
console.log(weakSet.has(obj1)) // true
console.log(weakSet.has(obj2)) // false
obj1 = null // now the entry can be garbage collected

// Map example
let map = new Map()
map.set("name", "John")
map.set("age", 31)
console.log(map.get("name")) // John
console.log(map.get("age")) // 31
console.log(map.has("name")) // true
console.log(map.has("address")) // false
console.log(map.size) // 2
map.delete("name")
console.log(map.size) // 1
map.clear()
console.log(map.size) // 0

// Set example
let set = new Set()
set.add(1)
set.add(2)
set.add(3)
console.log(set.has(1)) // true
console.log(set.has(4)) // false
console.log(set.size) // 3
set.delete(1)
console.log(set.size) // 2
set.clear()
console.log(set.size) // 0

// json and object conversion
let jsonString = JSON.stringify(user) // convert object to JSON string
console.log(jsonString)
let jsonObject = JSON.parse(jsonString) // convert JSON string to object
console.log(jsonObject)

// object prototype
let animal = {
    eats: true,
    walk() {
        console.log("Animal walks")
    }
}
let rabbit = {
    jumps: true,
    __proto__: animal // setting prototype
}
console.log(rabbit.eats) // true (inherited from animal)
rabbit.walk() // Animal walks (inherited from animal)
console.log(rabbit.jumps) // true (own property)
console.log(animal.isPrototypeOf(rabbit)) // true (check prototype)
console.log(Object.getPrototypeOf(rabbit)) // get prototype of rabbit
Object.setPrototypeOf(rabbit, { swims: true }) // change prototype
console.log(rabbit.swims) // true (new prototype property)
console.log(rabbit.eats) // undefined (old prototype property no longer accessible)

// api example
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error(error)
    })


