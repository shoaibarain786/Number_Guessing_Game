"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var roundNumber = Math.floor((Math.random() * 4) + 1);
var userInput = await inquirer_1.default.prompt({
    type: "number",
    name: "guessedNumber",
    message: "Guess a Number between 1 -4"
});
if (userInput.guessedNumber === roundNumber) {
    console.log("Congratulations! you guessed correctly!");
}
else {
    console.log("Sorry! try next time. correct ans is: ".concat(roundNumber));
}
