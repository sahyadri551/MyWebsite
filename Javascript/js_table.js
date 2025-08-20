const prompt = require("prompt-sync")();
const n = Number(prompt("Enter a number: "));
let i=1;
while(i<=10){
    console.log(`${n} × ${i} = ${n*i}`);
    i++;
}