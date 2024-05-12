#! /usr/bin/env node
import inquirer from "inquirer";
let bankbalance = 10000;
const bankpin = 2435;
let pin = await inquirer.prompt([
    {
        type: "number",
        name: "accpin",
        message: "Enter your pin:",
    }
]);
if (pin.accpin === bankpin) {
    let operation = await inquirer.prompt([
        {
            name: "operations",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash", "deposit"],
            message: "Please select option:",
        }
    ]);
    if (operation.operations === "withdraw") {
        let ammount = await inquirer.prompt([
            {
                name: "ammountCash",
                type: "number",
                message: "Enter ammount you want to withdraw:",
            }
        ]);
        if (ammount.ammountCash > bankbalance) {
            console.log("Insufficient Balance");
        }
        else {
            bankbalance = bankbalance - ammount.ammountCash;
            console.log(`Your new balance is ${bankbalance}`);
        }
    }
    else if (operation.operations === "check balance") {
        console.log(`Your balance is ${bankbalance}`);
    }
    else if (operation.operations === "fastcash") {
        let ammount = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                choices: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
                message: "Please select ammount you want to withdraw:",
            }
        ]);
        if (ammount.fastcash > bankbalance) {
            console.log("Insufficient Balance");
        }
        else {
            bankbalance = bankbalance - ammount.fastcash;
            console.log(`Your new balance is ${bankbalance}`);
        }
    }
    else if (operation.operations === "deposit") {
        let ammount = await inquirer.prompt([
            {
                name: "ammountCash",
                type: "number",
                message: "Enter ammount you want to deposit:",
            }
        ]);
        bankbalance = bankbalance + ammount.ammountCash;
        console.log(`Your new balance is ${bankbalance}`);
    }
}
else {
    console.log("pin is incorrect");
}
