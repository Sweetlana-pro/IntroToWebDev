var start = document.getElementById("start");
var submitButton = document.getElementById("submitButton");
var bet = document.forms["bet"];
var results = document.getElementById("results");
function validate() {

    bet.className = "needs-validation";

    if (!bet.checkValidity()) {
        bet.className = "was-validated";
        return false;
    } else if (start <= 0) {
        console.log("Starting Bet should be greater than $0");
    }
    
    results.style.display = "block";
    submitButton.innerText = "Recalculate";

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}
/*
    var operand1 = parseInt(num1.value, 10);
    var operand2 = parseInt(num2.value, 10);

    document.getElementById("addResult").innerText = operand1 + operand2;
    document.getElementById("subtractResult").innerText = operand1 - operand2;
    document.getElementById("multiplyResult").innerText = operand1 * operand2;
    document.getElementById("divideResult").innerText = operand1 / operand2;

    results.style.display = "block";
    submitButton.innerText = "Recalculate";

    // We always return false so that the form doesn't submit.
    // Submission causes the page to reload.
    return false;
}*/

var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;
var sum;
var counter = 0;
var money;
var start = 17;
do {
    sum = dice1 + dice2;
    if (sum == 7) {
        money = start + 4;
    } else {
        money = start - 1;
    }
} while (money > 0);

counter++;

console.log("You are broke after " + counter + " rolls.");