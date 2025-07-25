// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const passwordConfirmInput = document.getElementById("password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;

  // validate first name
  if (firstNameInput.value !== "CPE207") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name

  // validate email

  // validate password

  // validate confirm password

  if (isFirstNameOk) alert("Registered successfully");
};

// add callback function for Reset button.

document.addEventListener("DOMContentLoaded", () => {
  const firstNameInput = document.getElementById("first-name-input");
  const lastNameInput = document.getElementById("last-name-input");
  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");
  const passwordConfirmInput = document.getElementById("password-confirm-input");
  const submitBtn = document.getElementById("submit-btn");

  function validate() {
    let valid = true;

    // First name: not empty
    if (!firstNameInput.value.trim()) {
      firstNameInput.classList.add("is-invalid");
      firstNameInput.classList.remove("is-valid");
      valid = false;
    } else {
      firstNameInput.classList.remove("is-invalid");
      firstNameInput.classList.add("is-valid");
    }

    // Last name: not empty
    if (!lastNameInput.value.trim()) {
      lastNameInput.classList.add("is-invalid");
      lastNameInput.classList.remove("is-valid");
      valid = false;
    } else {
      lastNameInput.classList.remove("is-invalid");
      lastNameInput.classList.add("is-valid");
    }

    // Email: must have '@' and '.'
    if (!validateEmail(emailInput.value.trim())) {
      emailInput.classList.add("is-invalid");
      emailInput.classList.remove("is-valid");
      valid = false;
    } else {
      emailInput.classList.remove("is-invalid");
      emailInput.classList.add("is-valid");
    }

    // Password: at least 6 chars
    if (passwordInput.value.length < 6) {
      passwordInput.classList.add("is-invalid");
      passwordInput.classList.remove("is-valid");
      valid = false;
    } else {
      passwordInput.classList.remove("is-invalid");
      passwordInput.classList.add("is-valid");
    }

    // Confirm password: must match password
    if (passwordConfirmInput.value !== passwordInput.value || passwordConfirmInput.value === "") {
      passwordConfirmInput.classList.add("is-invalid");
      passwordConfirmInput.classList.remove("is-valid");
      valid = false;
    } else {
      passwordConfirmInput.classList.remove("is-invalid");
      passwordConfirmInput.classList.add("is-valid");
    }

    return valid;
  }

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registered successfully");
    }
  });
});

// Reset input border color to default when user changes value (blur event)
[firstNameInput, lastNameInput, emailInput, passwordInput, passwordConfirmInput].forEach(input => {
  input.addEventListener("input", () => {
    input.classList.remove("is-valid");
    input.classList.remove("is-invalid");
  });
});

// เพิ่มโค้ดสำหรับปุ่ม Reset
const resetBtn = document.querySelector(".btn-danger");
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // ลบค่าทุกช่อง
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  passwordConfirmInput.value = "";

  // ลบกรอบสีเขียว/แดง
  [firstNameInput, lastNameInput, emailInput, passwordInput, passwordConfirmInput].forEach(input => {
    input.classList.remove("is-valid");
    input.classList.remove("is-invalid");
  });
});
