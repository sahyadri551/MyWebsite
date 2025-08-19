const n1 = parseInt(prompt("Enter first number"));
const n2 = parseInt(prompt("Enter second number"));
const op = prompt("Enter operator");

switch (op){
    case "+":
        console.log(n1+n2);
        break;
    case "-":
        console.log(n1-n2);
        break;
    case "*":
        console.log(n1*n2);
        break;
    case "/":
        console.log(n1/n2);
        console.log(Math.floor(n1/n2));
        break;
    case "%":
        console.log(n1%n2);
        break;
    case "**":
        console.log(n1**n2);
        break;
    default:
        console.log("Invalid operator");
}