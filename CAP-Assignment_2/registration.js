check = false;
user = document.getElementById("user");
email = document.getElementById("email");
phoneNumber = document.getElementById("mobile");
zipcode = document.getElementById("pin");
date = document.getElementById("date");

//hoisting
var user;
var email;
var phoneNumber;
var zipcode;
var date;
var check;

function isAfterToday(date) {
  return new Date(date).valueOf() > new Date().valueOf();
}

function nameValid(username) {
  if (user.value == "") {
    document.getElementById("username").innerHTML =
      "Please fill the username field";
    check = true;
    return false;
  }
  if (user.value.length <= 2 || user.value.length > 20) {
    document.getElementById("username").innerHTML =
      "Name length must be between 2 and 20";
    check = true;
    return false;
  }
  document.getElementById("username").innerHTML = "";
  return true;
}

function emailValid(emailid) {
  if (email.value == "" || !email.value.match(/(.+)@(.+){2,}\.(.+){2,}/)) {
    document.getElementById("emailid").innerHTML =
      "Please provide Email and in right format.";
    check = true;
    return false;
  }
  document.getElementById("emailid").innerHTML = "";
  return true;
}

function phoneValid(phoneNumber) {
  if (
    phoneNumber.value == "" ||
    !(
      phoneNumber.value.length == 10 &&
      phoneNumber.value.match(/^[1-9][0-9]{9}$/)
    )
  ) {
    document.getElementById("mobilenum").innerHTML =
      "Please provide 10 digit phone number";
    check = true;
    return false;
  }
  document.getElementById("mobilenum").innerHTML = "";
  return true;
}

function zipValid(zipcode) {
  if (zipcode.value == "" || !zipcode.value.match(/^[0-9]{6}$/)) {
    document.getElementById("pincode").innerHTML =
      "Please provide 6 digit pin code";
    check = true;
    return false;
  }
  document.getElementById("pincode").innerHTML = "";
  return true;
}

function dateValid(date) {
  if (date.value == "" || !isAfterToday(date.value)) {
    document.getElementById("dateof").innerHTML =
      "Please provide a date after today.";
    check = true;
    return false;
  }
  document.getElementById("dateof").innerHTML = "";
  return true;
}

function formValidation() {
  nameValid(user);

  emailValid(email);

  phoneValid(phoneNumber);

  zipValid(zipcode);

  dateValid(date);

  if (check) return false;

  return true;
}
