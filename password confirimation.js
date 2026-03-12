function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password === confirmPassword) {
        console.log("Passwords match");
    } else {
        console.log("Passwords do not match");
    }
}