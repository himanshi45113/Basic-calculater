const buttonsE1 = document.querySelectorAll("button");
const inputE1 = document.getElementById("results");


for (let i = 0; i < buttonsE1.length; i++) {
    buttonsE1[i].addEventListener("click", () => {
    const buttonValue =  buttonsE1[i].textContent;

    if(buttonValue === "c"){
        clearResult()
    } else if (buttonValue === "="){
        calculateResult()

    }else {
        appendValue(buttonValue);
    }

    });
    
}

function clearResult() {
inputE1.value = "";
}

function calculateResult() {
inputE1.value = eval(inputE1.value)
}

function appendValue(buttonValue) {
    inputE1.value += buttonValue
}

