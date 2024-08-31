var calculationDisplay = document.getElementById("calculation");
var resultDisplay = document.getElementById("result");

function button_clicked(num) {
    if (num === "AC") {
        calculationDisplay.textContent = "";
        resultDisplay.textContent = "";
    } else {
        calculationDisplay.textContent += num;
    }
}

function Back() {
    calculationDisplay.textContent = calculationDisplay.textContent.slice(0, -1);
}

function result() {
    try {
        var calculation = calculationDisplay.textContent;
        var res = eval(calculation);
        resultDisplay.textContent = res;
    } catch (error) {
        resultDisplay.textContent = "Error";
    }
}

function negative() {
    var currentText = calculationDisplay.textContent;
    var num = parseFloat(currentText);
    if (!isNaN(num)) {
        calculationDisplay.textContent = (-num).toString();
    }
}
