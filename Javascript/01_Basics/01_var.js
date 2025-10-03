const accountId = 144553
let accountEmail = "smt@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 100 // we can't change the value of accountId
console.log(accountId)

accountEmail = "sqer@gmaail.com" // we can change the value of accountEmail

accountPassword = "54321" // we can change the value of accountPassword

accountCity = "Delhi" // we can change the value of accountCity

console.table([accountId, accountEmail, accountPassword, accountCity]) // to print in table format

let accountState // we can declare a variable without assigning any value
console.log(accountState) // it will print undefined
accountState = "Rajasthan" // we can assign value later

// let accountEmail = "sdf@gmail.com" // we can't redeclare the variable with let or const but we can redeclare with var



var accountPassword = "0000" // we can redeclare the variable with var
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
->Preferred way to declare variable is with let and const
->Avoid using var because of issue in block scope and function scope
-> You can declare variable without var, let or const but it is not a good practice
-> You can use semicolon at the end of statement but it is optional in JS
*/