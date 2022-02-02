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
}
    
document.getElementById("evensList").innerText = getEvensList(startingNum, endingNum, step);
document.getElementById("result").style.display = "block";
document.getElementById("startingNum").innerText = startingNum;
document.getElementById("endingNum").innerText = endingNum;
document.getElementById("step").innerText = step;
document.getElementById("evensList").innerHTML = getEvensList(startingNum, endingNum, step)
            .join("<br />");

function getEvensList(startingNum, endingNum, step) {
    var num1 = parseInt(startingNum.value, 3)
    var num2 = parseInt(endingNum.value, 3);
    var step = parseInt(step);
    var evensList = new Array[i];
    for (var i = num1; i <= num2; i = i + step) {
        if (i % 2 == 0) {
            evensList.push(i);
        }
    }
    return evensList;
}

    /*console.log(document.getElementById("result"));
                document.write("<table>")
    var startingNum = prompt("Starting Number");
    var endingNum = prompt("end num");
    var step = prompt("step");
    
        for (var i = startingNum; i <= endingNum; i=i+step) {
            if (i % 2 == 0) {
                document.write("<td>"+i+"</td></tr>");
            } else {
               document.write("<td>"+i+"</td></tr>"); 
            }
        }
    document.write("</table>");
    


