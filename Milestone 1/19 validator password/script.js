document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the values of email and password inputs
    var email = document.getElementById('email-input').value;
    var password = document.getElementById('password-input').value;
  
    // Check if email contains the "@" symbol
    if (!email.includes('@')) {
      displayErrorMessage('Invalid email or password!');
      return; // Stop further execution
    }
  
    // Check if password has a minimum length of 8 characters
    if (password.length < 8) {
      displayErrorMessage('Invalid email or password!');
      return; // Stop further execution
    }
  
    // If both email and password are valid
    displaySuccessMessage('Valid email and password!');
  });
  
  function displayErrorMessage(message) {
    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.color = 'red';
  }
  
  function displaySuccessMessage(message) {
    var successMessage = document.getElementById('error-message');
    successMessage.textContent = message;
    successMessage.style.color = 'green';
  }
  