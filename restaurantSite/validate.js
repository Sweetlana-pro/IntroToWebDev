function validate() {

    contactForm.className = "needs-validation";
    if (!contactForm.checkValidity()) {
        contactForm.className = "was-validated";
        return false;
    }
    var phoneNumber = document.forms["contactForm"]["phoneNumber"].value;
    if (phoneNumber == "" || isNaN(phoneNumber)) {
        alert("Phone Number must be filled in with a numbers");
        return false
    }
    let x = document.forms["contactForm"]["name"].value;
    if (x = "") {
        alert("Name must be filled out");
        return false;
    }

    return false;
}