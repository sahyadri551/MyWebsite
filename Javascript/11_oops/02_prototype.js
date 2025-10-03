// function protoype
function mul(a, b) {
    return a * b
}

mul.power=2

console.log(mul(2, 3))
console.log(mul.power)

// prototype of a function
console.log(mul.prototype)

// functionality in function prototype---------------------------------------
function createUser(name, age) {
    this.name = name
    this.age = age
}

createUser.prototype.greet = function () {
    console.log("Hello, " + this.name)
}
createUser.prototype.increaseAge = function () {
    this.age++
}

let user = new createUser("John", 30) // if you do not use new keyword, then prototype will not be available
let user2 = new createUser("Jane", 25)
user.greet()
user2.greet()

console.log(user.age)
user.increaseAge()
console.log(user.age)

// prototype chain--------------------------------------------------------------
// console.log(user2.__proto__ === createUser.prototype)

// prototype chain example
// console.log(user2.__proto__.__proto__ === Object.prototype)
// console.log(user2.__proto__.__proto__.__proto__ === null)

// prototype---------------------------------------------------------------------


const heros=["thor","spiderman","ironman"]
const powers={
    thor:"hammer",
    spiderman:"sling",
    ironman:"suit"
}

// Object.setPrototypeOf(heros,powers) //--> it removes Arrey prototype connection with heros
Object.assign(heros, powers);
console.log(heros.spiderman)

Object.prototype.name= function(){
    console.log("This is available in all objects")
}
heros.name()
powers.name()

Array.prototype.name2= function(){
    console.log("This is available in all arrays")
}
heros.name2()
// powers.name2()//TypeError: powers.name2 is not a function

//----------------------------------------------------------------
// Inheritance --> Old way
const teacher ={
    name:"Rahul",
    subject:"JavaScript",
    teach(){
        console.log(`Teaching ${this.subject}`)
    }
}
const teachingSupport={
    isAvailable:true,
    name:"Riya",
    help(teacher){
        console.log(`Helping ${teacher.name} with ${teacher.subject}`)
    }
}

// teachingSupport.__proto__=teacher
Object.setPrototypeOf(teachingSupport, teacher)

const TAsupport={
    name:"Rohit",
    makeAssignment(){
        console.log(`Making assignment for JavaScript`)
    },
    help(teacher){
        console.log(`Helping ${teacher.name} with ${teacher.subject}`)
    },
    __proto__:teachingSupport
}

//------------------------------------------------------------------------
uname="Rohit            "
//addind new method trueLength in String
String.prototype.trueLength=function(){
    console.log(this.trim().length)
}

uname.trueLength()

