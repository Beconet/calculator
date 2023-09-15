const buttons = document.querySelectorAll("#button");
buttons.forEach(button => {
    button.addEventListener('click',()=>{
        const buttonValue = button.value; 
        console.log("Button Value:", buttonValue);
})
})