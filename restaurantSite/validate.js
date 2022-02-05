
var phoneNumber = document.getElementById("phoneNumber");
var x = document.forms["contactForm"];

function validate() {

    contactForm.className = "needs-validation";
    if (!contactForm.checkValidity()) {
        contactForm.className = "was-validated";
        return false;
    }
    
    if (phoneNumber == "" || isNaN(phoneNumber)) {
        alert("Phone Number must be filled in with a numbers");
        return false
    }
    
    if (x = "") {
        alert("Name must be filled out");
        return false;
    }

    return false;
}