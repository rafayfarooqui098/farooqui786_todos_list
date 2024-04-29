#! /usr/bin/env node
import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let todosQ = await inquirer.prompt([
        {
            name: "firstQ",
            type: "input",
            message: "what would you like to add in your todos?"
        },
        {
            name: "secondQ",
            type: "confirm",
            message: "would you like to add more in your Todos?",
            default: "true"
        }
    ]);
    todo.push(todosQ.firstQ);
    console.log(todo);
    //loop running on the condition of secondQ variable
    condition = todosQ.secondQ;
}
