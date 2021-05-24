const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const prompt = require('prompt-sync')({sigint: true})
const {printTable} = require('console-table-printer')

function createTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Unit Converter',
            {
                horizontalLayout: 'full',
                font: 'Cursive'
            }
        )
    )
}

function createTable(model){
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const{rightUnit} = model
    return [
        {'leftValue': leftValue,'leftUnit':leftUnit,
        'rightValue': rightValue,'rightUnit': rightUnit}
    ]
}

function askInput(model){
    return inquirer.prompt([
        {
            name: 'YesorNo',
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
        default: 'N'}
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
    askInput,

}