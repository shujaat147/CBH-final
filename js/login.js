// Get the input fields and associated error messages
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const usernameMsg = document.querySelector('.msg:nth-of-type(1)');
const passwordMsg = document.querySelector('.msg:nth-of-type(2)');

// Function to hide the error message
function hideMessage(msg) {
 msg.style.display = 'none';
}

// Function to show the error message
function showMessage(msg) {
 msg.style.display = 'block';
}

// Add event listeners to the input fields
usernameInput.addEventListener('blur', () => {
 if (usernameInput.value.trim() === '') {
  showMessage(usernameMsg);
 }
});

usernameInput.addEventListener('input', () => {
 if (usernameInput.value.trim() !== '') {
  hideMessage(usernameMsg);
 }
});

passwordInput.addEventListener('blur', () => {
 if (passwordInput.value.trim() === '') {
  showMessage(passwordMsg);
 }
});

passwordInput.addEventListener('input', () => {
 if (passwordInput.value.trim() !== '') {
  hideMessage(passwordMsg);
 }
});

const form = document.getElementById("Login");

// Add event listener to the form's submit event
form.addEventListener('submit', (e) => {
 if (usernameInput.value.trim() === '') {
  showMessage(usernameMsg);
  e.preventDefault();
 }

 // Check if the password input is empty
 if (passwordInput.value.trim() === '') {
  showMessage(passwordMsg);
  e.preventDefault();
 }
});