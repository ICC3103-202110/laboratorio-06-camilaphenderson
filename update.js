function update(input,model){
    if (input.YesNo === 'Yes')
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