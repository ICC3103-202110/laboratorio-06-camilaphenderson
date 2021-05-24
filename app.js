const{inputAndListForm} = require('./view')
const {printTable} = require('console-table-printer')
const update = require('./update')

//Impure
async function app (state,update,view){
    while (true){
        const{model,currentView} = state
        const{title,table} = currentView
        console.clear
        console.log(title)
        printTable(table)
        const inputDone = await input(model)
        const updated = update(input, model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}