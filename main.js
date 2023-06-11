let input = document.getElementById('input-value')
let output = document.getElementById('output-value')
let btn = document.getElementById('convert-btn')
let unitInput = document.getElementById("Units1")
let unitOutput = document.getElementById("Units2")

const convertElements = () => {
    let inputValue = input.value
    let outputValue = output.value
    let unit1 = unitInput.value;
    let unit2 = unitOutput.value;
    let valueInLegalUnits;
    let convertedValue;
    if(isNaN(inputValue)){
        alert('Veuillez mettre un nombre')
    }
    switch(unit1){
        case 'km':
        valueInLegalUnits = inputValue/1000;
        break;
        case 'dm':
        valueInLegalUnits = inputValue*10;
        break;
        case 'cm':
        valueInLegalUnits = inputValue*100;
        break;
        case 'mm':
        valueInLegalUnits = inputValue*1000;
        break;
        default:
        valueInLegalUnits = inputValue;
    }

    switch(unit2){
        case 'km':
        convertedValue = valueInLegalUnits *1000;
        break;
        case 'dm':
        convertedValue = valueInLegalUnits /10;
        break;
        case 'cm':
        convertedValue = valueInLegalUnits /100;
        break;
        case 'mm':
        convertedValue = valueInLegalUnits/1000;
        break;
        default:
        convertedValue = valueInLegalUnits;
    }

    output.value = convertedValue 

    console.log(convertedValue);

    
}

btn.addEventListener("click", convertElements)