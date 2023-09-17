const buttons = document.querySelectorAll("#button");
const displayResult = document.querySelector("#result")
const clearBtn = document.querySelector('#clear')
const equal = document.querySelector('#equal')
let buttonValue = 0
let result = 0
displayResult.textContent = buttonValue;
buttons.forEach(button => {
    button.addEventListener('click',()=>{
        buttonValue = button.value; 
        console.log("Button Value:", buttonValue);
        // displayResult.textContent = buttonValue;
    })
})





clearBtn.addEventListener('click',()=>{
    buttonValue = 0
    displayResult.textContent = buttonValue;
})
