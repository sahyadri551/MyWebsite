// object literal
let user = {
    name: "John",
    age: 30,
    isAdmin: true,
    courses: ["HTML", "CSS", "JS"],
    address: {
        city: "New York",
        zip: "10001",
    },
    "phone number": "123-456-7890", // property name with space
    greet: function () {
        console.log("Hello, " + this.name);
    },
    aboutMe: function () {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("isAdmin: " + this.isAdmin);
    },
};

// constructor function
function myUser(name, age, isAdmin) {
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;

    this.greet = function () {
        console.log(`Hello, ${this.name}!`);
    };

    // return this;
}

const user1 = new myUser("John", 30, true);
const user2 = new myUser("Jane", 25, false);
console.log(user1);
console.log(user2);
user1.greet();


console.log(user1.constructor);

// instanceof operator
console.log(user1 instanceof myUser);

