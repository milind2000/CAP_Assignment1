userName = document.getElementById("name");
email = document.getElementById("email");
phoneNumber = document.getElementById("phoneNumber");
gender = document.registration;
language = document.getElementById("language");
zipcode = document.getElementById("zipcode");

//hoisting
var userName;
var email;
var gender;
var language;
var phoneNumber;
var zipcode;

function userNameCheck(userName) {
  if (userName.value.length < 3 || userName.value.length > 20) {
    alert("Name length should be more than 2 and less than 21 charaters");
    return false;
  }
  return true;
}

function emailCheck(email) {
  if (!email.value.match(/(.+)@(.+){2,}\.(.+){2,}/)) {
    alert("Please enter a valid email!");
    return false;
  }
  return true;
}

// function for form varification
function formValidation() {
  // checking length of name
  if (!userNameCheck(userName)) return false;

  // checking email format
  if (!emailCheck(email)) return false;

  // checking phone number
  if (
    !(
      phoneNumber.value.length == 10 &&
      phoneNumber.value.match(/^[1-9][0-9]{9}$/)
    )
  ) {
    alert(
      "Phone number must be 10 characters long number and first digit can't be 0!"
    );
    return false;
  }
  // checking gender
  if (gender.gender.value === "") {
    alert("Please select your gender!");
    return false;
  }
  // checking language
  if (language.value === "") {
    alert("Please select your language!");
    return false;
  }
  // checking zip code
  if (!zipcode.value.match(/^[0-9]{6}$/)) {
    alert("Pin code must be 6 characters long number!");
    return false;
  }

  alert("Successfully registered.");
  return true;
}

//event listener on mouseover and mouseout
const submit = document.getElementById("submit");

submit.addEventListener(
  "mouseover",
  function () {
    submit.style.color = "green";
  },
  false
);

submit.addEventListener(
  "mouseout",
  function () {
    submit.style.color = "black";
  },
  false
);
