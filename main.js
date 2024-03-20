"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    { message: "Enter Your firstNumber", type: "number", name: "firstNumber" },
    { message: "Enter Your secondNumber", type: "number", name: "secondNumber" },
    { message: "Select Onde of the operator perform the operation", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"] }
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction`") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("PLease Correct the operation your answer is invalid");
}
