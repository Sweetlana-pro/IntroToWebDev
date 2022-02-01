function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["evens"].elements.length;
        loopCounter++) {
        if (document.forms["evens"].elements[loopCounter]
            .parentElement.className.indexOf("has-") != -1) {
            document.forms["evens"].elements[loopCounter].parentElement.className = "form-group";
        }
    }
    
}
function validateItems() {
    clearErrors();
    var startingNum = document.forms["evens"]["startingNum"].value;
    var endingNum = document.forms["evens"]["endingNum"].value;
    var step = document.forms["evens"]["step"].value;
    if (startingNum == "" || isNaN(startingNum)) {
        alert("Starting number must be filled in with a namber.");
     document.forms["evens"]["startingNum"].parentElement.className = "form-group has-error"
        document.forms["evens"]["startingNum"].focus();
        return false;
    }
    if (endingNum == "" || isNaN(endingNum)) {
        alert("Ending number must be filled in with a namber.");     
     document.forms["evens"]["endingNum"].parentElement.className = "form-group has-error"
        document.forms["evens"]["endingNum"].focus();
        return false;
    }
    if (step == "" || isNaN(step)) {
        alert("Step must be filled in with a namber.");
        document.forms["evens"]["step"].parentElement.className = "form-group has-error"
        document.forms["evens"]["step"].focus();
        return false;
    }
    if (step <= 0) {
        alert("Step must be a positive number.");
        document.forms["evens"]["step"].parentElement.className = "form-group has-error"
        document.forms["evens"]["step"].focus();
        return false;
    }
    if (endingNum <= startingNum) {
        alert("Ending Number must be greater than Starting Number.");
        document.forms["evens"]["step"].parentElement.className = "form-group has-error"
        document.forms["evens"]["step"].focus();
        return false;
    }
    document.getElementById
    
}

