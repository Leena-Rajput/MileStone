// Get the elements
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const validateBtn = document.getElementById('validate-btn');
const validationResult = document.getElementById('validation-result');

// Add event listener to the button
validateBtn.addEventListener('click', validatePassword);

// Function to validate the password
function validatePassword() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {
    validationResult.textContent = 'Password Matched. Password validation Successful.';
  } else {
    validationResult.textContent = 'Password didn\'t match. Password validation unsuccessful.';
  }
}
