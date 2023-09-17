const buttons = document.querySelectorAll("#button");
const displayResult = document.querySelector("#result")
const clearBtn = document.querySelector('#clear')
const equal = document.querySelector('#equal')
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const multiple = document.querySelector("#multiple")
const divide = document.querySelector("#divide")

//setting
let buttonValue = 0
let result = ""
let buttonResult = ""
let collectResult = ''
displayResult.textContent = "0";
let operators = ''
let operatorsReserve = ''

buttons.forEach(button => {
    button.addEventListener('click',()=>{
        buttonValue = button.value; 
        buttonResult = buttonResult + buttonValue ;
        //result on console
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
    console.log("you click", operators)
    //after click equal before operators
    if (result != ''){
        console.log("your click me again!")
        collectResult = result;
    }else{
        collectResult = parseInt(buttonResult);}
    buttonValue = '';
    buttonResult = '';
}


equal.addEventListener('click',()=>{
    operatorsReserve = operators;
    buttonResult = parseInt(buttonResult);
    collectResult = parseInt(collectResult);
    console.log(collectResult);
    console.log(buttonResult);
    console.log("***");
    switch(operators){
        case "+":
            result = collectResult + buttonResult;
            console.log(result)
            displayResult.textContent = result;
            break
        default:
            console.log(result)
    }
    buttonValue = ''
    buttonResult = ''
    collectResult = ''
})



clearBtn.addEventListener('click',()=>{
    buttonValue = ''
    buttonResult = ''
    result = ''
    displayResult.textContent = "0";
    console.log("Button Value :", "0")
})