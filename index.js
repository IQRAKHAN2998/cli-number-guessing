#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "userGuessedName",
        type: "number",
        message: "please guess a number between 1 - 6"
    }]);
console.log(answer);
if (answer.userGuessedName === randomNumber) {
    console.log("congratulation you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
