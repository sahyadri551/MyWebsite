let obj={
    name1: "John",
    email: "K9TtW@example.com",
    sayHello: function () {
        // console.log(name1); -> error
        console.log("Hello, " + this.name1 + "!")
        console.log(this)
    },
    sayHello2() {
        //console.log(name1); -> error
        console.log("Hello, " + this.name1 + "!")
        console.log(this)
    },
    sayHello3: () => {
        console.log("Hello, " + this.name1 + "!")
        console.log(this)
    }
}

// obj.sayHello()
// console.log(this);
// obj.name1 = "Jane"
// obj.sayHello()

// obj.sayHello2()
// console.log(this);
// obj.name1 = "Jane"
// obj.sayHello2()

// obj.sayHello3()
// console.log(this);
// obj.name1 = "Jane"
// obj.sayHello3()

function greet() {
    name1="Smt"
    console.log("Hello, " + name1 + "!")
    console.log(this)
    console.log(this.name1)
}
//greet()

// variable function
const greet1 = function () {
    name1="Smt"
    console.log("Hello, " + name1 + "!")
    console.log(this)
    console.log(this.name1)
}
greet1()

// arrow function
const greet2 = () => {
    name1="Smt"
    console.log("Hello, " + name1 + "!")
    console.log(this)
    console.log(this.name1)
}

// greet2()

// const arr = (n1,n2) => n1+n2
const arr = (n1,n2) => (n1+n2) // basically () are helpful when we want to return object
// because without () js parser understands it function opening bracket not object
// to avoid this we use ()
console.log(arr(2,3))