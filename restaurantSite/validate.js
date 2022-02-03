function validate() {
    contactForm.className = "needs-validation";
    if (!contactForm.checkValidity()) {
        contactForm.className = "was-validated";
        return false;
    }
}