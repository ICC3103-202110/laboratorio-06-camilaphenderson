const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const prompt = require('prompt-sync')({sigint: true})
const {printTable} = require('console-table-printer')

function createTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Temperature Converter',
            {
                horizontalLayout: 'full',
                font: 'Caligraphy2'
            }
        )
    )
}

function getTable(model){
    return [
        {
        'Left Value': model.leftValue,
        'Left Unit': model.leftUnit,
        'Right Value': model.rightValue,
        'Right Unit': model.rightUnit
        }
    ]
}