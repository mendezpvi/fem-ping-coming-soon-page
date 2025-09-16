const $form = document.querySelector(".form");
const $formEmail = document.getElementById("form-email");
const $formSubmit = document.getElementById("form-submit");
const $formError = document.getElementById("form-error");

function getUserEmail() {
  return $formEmail.value.trim();
}

// validateField(field)
function verifyEmail() {
  /* const userEmail = getUserEmail();
  if (userEmail === "") {
    console.log("ingresa un valor")
    return
  } */
  if ($formEmail.validity.valueMissing) {
    console.log("Required field cannot be empty.");
    return
  }

  //1.º
  if (!$formEmail.validity.valid) {
    console.log("mal")
    $formError.textContent = `Please provide a valid email address`;
    return false;
  }

  console.log("bien")
  $formError.textContent = "";
  return true;

  /* if ($formEmail.validity.valid) {
    console.log("bien")
    console.log(userEmail)
  } else {
    console.log("mal")
    $formError.classList.remove("visually-hidden");
  } */
}

function resetForm() {
  $form.reset();
}

$formEmail.addEventListener("blur", () => {
  verifyEmail();
})

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValid = verifyEmail();
  if (isValid) {
    console.log("submitting")
  } else {
    console.log("error")
  }
  resetForm()
})
