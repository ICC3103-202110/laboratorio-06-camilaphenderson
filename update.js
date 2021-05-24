function update(input,model){
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
    
function converter(input,model){
    if (input1.lunit == 'Celsius' && input1.runit =='Fahrenheit'){
        return newValue = ((input.value)*1.8)+32
        }
    else if (input1.lunit == 'Celsius' && input1.runit =='Kelvin'){
        return  newValue = (input.value) + 273.15
    }
    else if (input1.lunit == 'Fahrenheit' && input1.runit =='Kelvin'){
        return newValue = (((input.value)-32)*5/9) + 273.15 
    }
    else if (input1.lunit == 'Fahrenheit' && input1.runit =='Celsius'){
        return newValue =  ((input.value)-32)*5/9
    }
    else if (input1.lunit == 'Kelvin' && input1.runit =='Celsius'){
        return newValue = (input.value) -273.15
    }
    else if (input1.lunit == 'Kelvin' && input1.runit =='Fahrenheit'){
        return newValue = (((input.value)- 273.15)* 1.8) + 32
    }
    
}