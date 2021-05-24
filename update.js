function update(input,model){
    if (input.from == 'Celsius' && input.to =='Fahrenheit'){
        return newValue = ((input.value)*1.8)+32
        }
    else if (input.from == 'Celsius' && input.to =='Kelvin'){
        return  newValue = (input.value) + 273.15
    }
    else if (input.from == 'Fahrenheit' && input.to =='Kelvin'){
        return newValue = (((input.value)-32)*5/9) + 273.15 
    }
    else if (input.from == 'Fahrenheit' && input.to =='Celsius'){
        return newValue =  ((input.value)-32)*5/9
    }
    else if (input.from == 'Kelvin' && input.to =='Celsius'){
        return newValue = (input.value) -273.15
    }
    else if (input.from == 'Kelvin' && input.to =='Fahrenheit'){
        return newValue = (((input.value)- 273.15)* 1.8) + 32
    };

    if (input.YesorNo === 'Yes')
        return{
            ...model,
            leftValue: input.value,
            leftUnit: input.from,
            rightValue: newValue,
            rightUnit: input.to
        }
    else 
        return{
            ...model,
            leftValue: newValue,
            leftUnit: input.from,
            rightValue: input.value,
            rightUnit: input.to
        }
    
    }
    
    module.exports = {
        update
    }
