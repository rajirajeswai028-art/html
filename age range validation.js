function validateAge(age) {
  const minAge = 18;
  const maxAge = 60;

  if (age >= minAge && age <= maxAge) {
    return true;
  } else {
    return false;
  }
}
let age = 25;
if (validateAge(age)) {
  console.log("Valid age");
} else {
  console.log("Age must be between 18 and 60");
}