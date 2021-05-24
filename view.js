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

function createTable(model){
    return [
        {
        'Left Value': model.leftValue,
        'Left Unit': model.leftUnit,
        'Right Value': model.rightValue,
        'Right Unit': model.rightUnit
        }
    ]
}

function input(model){
    return inquirer.prompt([
        {
            name: 'YesNo',
            type: 'list',
            message: 'Left temperature is source?',
            choices: ['Yes','No'],
            default: 'N/A'
        },
        { 
        type: 'input',
        name: 'value',
        message: 'Temperature value to convert?',
        default: 'N',
        validate: function(value){
            if(isNaN(value) === true ){
                return `Please enter a valid numeber`
            } else {
                return true}
            }
        },
        {
        type: 'list',
        name:'from',
        message: 'From?',
        choices: ['Celsius','Fahrenheit','Kelvin'],
        default: 'N'},
        {
        type: 'list',
        name:'to',
        message: 'To?',
        choices: ['Celsius','Fahrenheit','Kelvin'],
        default: rightUnit}
    ])
}

function view(model){
    return {
        title: createTitle(),
        table: createTable(model)
    }
}

module.exports = {
    view,
    input,

}