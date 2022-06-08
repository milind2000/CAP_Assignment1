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

function isAfterToday(date) {
  return new Date(date).valueOf() > new Date().valueOf();
}

function formValidation() {
  if (user.value == "") {
    document.getElementById("username").innerHTML =
      "Please fill the username field";
    console.log("errr");
    return false;
  }
  if (user.value.length <= 2 || user.value.length > 20) {
    document.getElementById("username").innerHTML =
      "Name length must be between 2 and 20";
    return false;
  }
  document.getElementById("username").innerHTML = "";

  if (!email.value.match(/(.+)@(.+){2,}\.(.+){2,}/)) {
    document.getElementById("emailid").innerHTML =
      "Please provide Email in right format.";
    return false;
  }
  document.getElementById("emailid").innerHTML = "";

  if (
    !(
      phoneNumber.value.length == 10 &&
      phoneNumber.value.match(/^[1-9][0-9]{9}$/)
    )
  ) {
    document.getElementById("mobilenum").innerHTML =
      "Please provide 10 digit phone number";
    return false;
  }
  document.getElementById("mobilenum").innerHTML = "";

  if (zipcode.value == "" || !zipcode.value.match(/^[0-9]{6}$/)) {
    document.getElementById("pincode").innerHTML =
      "Please provide 6 digit pin code";
    return false;
  }
  document.getElementById("pincode").innerHTML = "";

  if (!isAfterToday(date.value)) {
    document.getElementById("dateof").innerHTML =
      "Please provide a date after today.";
    return false;
  }
  document.getElementById("dateof").innerHTML = "";

  return true;
}
