const button = document.querySelector("#submit");

button.onclick = function validateForm() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("error");
  const email = emailInput.value.trim();

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  if (email === "") {
    emailInput.style.borderColor = "#ff5263";
    emailError.textContent =
      "Whoops! It looks like you forgot to add your email";
    emailInput.focus();
    return false;
  } else if (!validateEmail(email)) {
    emailInput.style.borderColor = "#ff5263";
    emailError.textContent = "Please provide a valid email address";
    emailInput.focus();
    return false;
  } else {
    emailError.textContent = "";
    emailInput.style.borderColor = "#c2d3ff";
    return true;
  }
};
