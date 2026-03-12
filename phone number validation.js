function isValidPhoneNumber(phone) {
  const regex = /^[0-9]{10}$/;
  return regex.test(phone);
}

// Example
let phone = "6302356151";

if (isValidPhoneNumber(phone)) {
  console.log("Valid phone number");
} else {
  console.log("Invalid phone number");
}