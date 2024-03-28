const firstName = document.querySelector("#firstName");
const firstNameEmpty = document.querySelector(".firstNameEmpty");
const lastName = document.querySelector("#lastName");
const lastNameEmpty = document.querySelector(".lastNameEmpty");
const email = document.querySelector("#email");
const emailEmpty = document.querySelector(".emailEmpty");
const password = document.querySelector("#password");
const passwordEmpty = document.querySelector(".passwordEmpty");
const button = document.querySelector("button");
const error = document.querySelector(".error");
const emailError = document.querySelector(".emailError");
const inputsArray = document.querySelectorAll("input");

firstName.value = "";
lastName.value = "";
email.value = "";
password.value = "";
emailError.style.display = "none";

button.addEventListener("click", e => {
  e.preventDefault();
  if (
    firstName.value == "" ||
    lastName.value == "" ||
    email.value == "" ||
    password.value == ""
  ) {
    error.style.display = "block";
  }

  if (
    firstName.value != "" &&
    lastName.value != "" &&
    email.value != "" &&
    password.value != ""
  ) {
    error.style.display = "none";
  }

  if (firstName.value == "") {
    firstNameEmpty.classList.remove("hidden");
    firstName.classList.add("errorBorder");
  }
  if (lastName.value == "") {
    lastNameEmpty.classList.remove("hidden");
    lastName.classList.add("errorBorder");
  }
  if (email.value == "") {
    emailEmpty.classList.remove("hidden");
    email.classList.add("errorBorder");
  }
  // email incorrectly formatted
  if (
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == false &&
    email.value != ""
  ) {
    emailError.style.display = "block";
    email.classList.add("errorBorder");
  }
  // email correctly formatted
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == true) {
    emailError.style.display = "none";
  }
  if (password.value == "") {
    passwordEmpty.classList.remove("hidden");
    password.classList.add("errorBorder");
  }
});
inputsArray.forEach(input => {
  input.addEventListener("keydown", () => {
    if (input.classList == "errorBorder") {
      input.classList.toggle("errorBorder");
      input.nextElementSibling.classList.add("hidden");
    }
  });
});
