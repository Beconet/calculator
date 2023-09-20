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
let percentValCollect;
let negative_turn = false;

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
    //compare michoo
    if(turn == true){
        console.log("Work")
        buttonResult = parseFloat(buttonResult)
        console.log(collectResult);
        console.log(buttonResult);
        compare()
        topOperators = operatorsReserve
        }
    operators = calculate.value;
    operatorsReserve = operators;
    console.log("you click", operators)
    //after click equal before operators
    if (result != ''){
        console.log("your click me again! after equal")
        collectResult = result;
        percentValCollect = parseFloat(buttonResult);
        turn = true;
    }
    else{
        collectResult = parseFloat(buttonResult);
        percentValCollect = parseFloat(buttonResult);
        turn = true;
    }

    buttonValue = '';
    buttonResult = '';
}

percent.addEventListener('click',()=>{
    console.log("you click percent")
    if(buttonValue == ""){
        displayResult.textContent = "Error";
        console.log("Error")
    }else if(buttonValue != ""){
        buttonResult = parseFloat(buttonResult)
        if(collectResult != ""&& buttonResult != ""){
            buttonResult = parseFloat(buttonResult)
            console.log(buttonResult)
            console.log(percentValCollect)
            percentVal = (percentValCollect / 100) * buttonResult 
            console.log(percentVal)
            percentVal = parseFloat(percentVal)
            buttonResult = percentVal
            displayResult.textContent = buttonResult;
        }
        else{
            percentVal = buttonResult / 100
            buttonResult = parseFloat(percentVal)
            displayResult.textContent = percentVal;
        }
    }   
});
negative.addEventListener('click',()=>{
    console.log("you click negative")
    if (negative_turn == false){
      if(buttonValue == ""){
        console.log("error")    
    
        displayResult.textContent = "Error";
    }else if(buttonValue != ""){
        buttonValue = parseInt(buttonValue)
        if(collectResult != ""&& buttonResult != ""){
            buttonResult = parseFloat(buttonResult)
            buttonResult= -buttonResult
            displayResult.textContent = buttonResult;
            negative_turn = true;

        }else{
            buttonResult= -buttonResult
            displayResult.textContent = buttonResult;
            negative_turn = true;
        }  
    }
    }else{
        if(buttonValue == ""){
            console.log("error")    
            displayResult.textContent = "Error";
        }else if(buttonValue != ""){
            buttonValue = parseInt(buttonValue)
            if(collectResult != ""&& buttonResult != ""){
                buttonResult = parseFloat(buttonResult);
                buttonResult= Math.abs(buttonResult);
                displayResult.textContent = buttonResult;
                negative_turn = false;
    
            }else{
                buttonResult= Math.abs(buttonResult);
                displayResult.textContent = buttonResult;
                negative_turn = false;
            }  
        }
    
    }
});

equal.addEventListener('click',()=>{
    if(turn ==true){
        operatorsReserve = operators;
        buttonResult = parseFloat(buttonResult);
        collectResult = parseFloat(collectResult);
        console.log(collectResult);
        console.log(buttonResult);
        console.log("***");
        compare()
    }
    }
)
clearBtn.addEventListener('click',()=>{
    buttonValue = 0
    result = ""
    buttonResult = ""
    collectResult = ''
    displayResult.textContent = "0";
    operators = ''
    operatorsReserve = ''
    topOperators = ''
    turn = false;
    percentVal ;
    negative_turn = false;
    console.log("Button Value :", "0")
});

function compare(){
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
