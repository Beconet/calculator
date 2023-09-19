const buttons = document.querySelectorAll("#button");
const displayResult = document.querySelector("#result")
const clearBtn = document.querySelector('#clear')
const equal = document.querySelector('#equal')
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const multiple = document.querySelector("#multiple")
const divide = document.querySelector("#divide")
const percent = document.querySelector('#percent')
const negative = document.querySelector('#negative')

//setting
let buttonValue = 0
let result = ""
let buttonResult = ""
let collectResult = ''
displayResult.textContent = "0";
let operators = ''
let operatorsReserve = ''
let topOperators = ''
let turn = false;
let percentVal ;
//button number click
buttons.forEach(button => {
    button.addEventListener('click',()=>{
        buttonValue = button.value; 
        buttonResult = buttonResult + buttonValue ;
        console.log("Button Value :", buttonResult);
        displayResult.textContent = buttonResult;
    })
})

//calculate operators 
plus.addEventListener('click',()=>{calculation(plus)})
minus.addEventListener('click',()=>{calculation(minus)})
multiple.addEventListener('click',()=>{calculation(multiple)})
divide.addEventListener('click',()=>{calculation(divide)})


function calculation(calculate){
    operators = calculate.value;
    operatorsReserve = operators;
    console.log("you click", operators)
    //after click equal before operators
    if(turn == true){
        console.log("Work")
        buttonResult = parseFloat(buttonResult)
        console.log(collectResult);
        console.log(buttonResult);
            switch(operatorsReserve){
                case "+":
                    result = collectResult + buttonResult;
                    console.log(result)
                    displayResult.textContent = result;
                    break
                case "-":
                    result = collectResult - buttonResult;
                    console.log(result)
                    displayResult.textContent = result;
                    break
                case "*":
                    result = collectResult * buttonResult;
                    console.log(result)
                    displayResult.textContent = result;
                    break
                case "/":
                    result = collectResult / buttonResult;
                    console.log(result)
                    displayResult.textContent = result;
                    break    
                default:
                    console.log(result)
        }
        topOperators = operatorsReserve
        }
    if (result != ''){
        console.log("your click me again! after equal")
        collectResult = result;
        turn = true;
    }
    else{
        collectResult = parseFloat(buttonResult);
        turn = true;
    }

    buttonValue = '';
    buttonResult = '';
}

percent.addEventListener('click',()=>{
    console.log("you click percent")
    if(buttonValue == ""){
        console.log("error")    
    }else if(buttonValue != ""){
        buttonValue = parseInt(buttonValue)
        if(collectResult != ""&& buttonResult != ""){
            buttonResult = parseFloat(buttonResult)
            percentVal = buttonResult / 100
            percentVal = parseFloat(percentVal)
            buttonResult = percentVal
            displayResult.textContent = buttonResult;
        }else{
            percentVal = buttonResult / 100
            displayResult.textContent = percentVal;
        }
    }   
});
negative.addEventListener('click',()=>{
    console.log("you click negative")
});

equal.addEventListener('click',()=>{
    if(turn ==true){
        operatorsReserve = operators;
        buttonResult = parseFloat(buttonResult);
        collectResult = parseFloat(collectResult);
        console.log(collectResult);
        console.log(buttonResult);
        console.log("***");
        switch(operatorsReserve){
            case "+":
                result = collectResult + buttonResult;
                console.log(result)
                displayResult.textContent = result;
                break
            case "-":
                result = collectResult - buttonResult;
                console.log(result)
                displayResult.textContent = result;
                break
            case "*":
                result = collectResult * buttonResult;
                console.log(result)
                displayResult.textContent = result;
                break
            case "/":
                result = collectResult / buttonResult;
                console.log(result)
                displayResult.textContent = result;
                break
            default:
                console.log(result)
        }
        turn = false;
    }
    }
)
clearBtn.addEventListener('click',()=>{
    buttonValue = ''
    buttonResult = ''
    collectResult = ''
    result = ''
    displayResult.textContent = "0";
    console.log("Button Value :", "0")
    turn = false;
})