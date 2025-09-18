import { renderSocialLinks } from "./social.js";

const $subscriptionForm = document.querySelector(".subscription-form");
const $emailInput = document.getElementById("form-email");
const $submitButton = document.getElementById("form-submit");
const $errorMessage = document.getElementById("form-error");
const $subscriptionDialog = document.querySelector(".subscription-dialog")

renderSocialLinks();

function validateEmail() {
  if (!$emailInput.validity.valid) {
    $errorMessage.textContent = `Please provide a valid email address`;
    return false;
  }

  $errorMessage.textContent = "";
  $submitButton.removeAttribute("disabled");
  return true;
}

function resetForm() {
  $subscriptionForm.reset();
  $submitButton.setAttribute("disabled", true);
}

$emailInput.addEventListener("input", () => {
  validateEmail();
})

$subscriptionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValid = validateEmail();
  if (isValid) {
    $subscriptionDialog.showModal();
  }

  resetForm();
})
