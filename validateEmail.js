function validateEmail() {
    let email = document.getElementById("email").value;
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (pattern.test(email)) {
        console.log("Valid Email");
    } else {
        console.log("Invalid Email");
    }
}