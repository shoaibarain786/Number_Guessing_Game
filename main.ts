import inquirer from "inquirer"

let roundNumber: number = Math.floor((Math.random() * 4) + 1);

let userInput = await inquirer.prompt({
    type: "number",
    name: "guessedNumber",
    message: "Guess a Number between 1 -4"
})
if (userInput.guessedNumber === roundNumber){
    console.log("Congratulations! you guessed correctly!")    
    } else {
        console.log(`Sorry! try next time. correct ans is: ${roundNumber}`);
    }
 