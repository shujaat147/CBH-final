const usernameInput = document.querySelector('#username');
const companyNameInput = document.querySelector('#company-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

const usernameMsg = document.querySelector('#username + .msg');
const companyNameMsg = document.querySelector('#company-name + .msg');
const emailMsg = document.querySelector('#email + .msg');
const passwordMsg = document.querySelector('#password + .msg');
const confirmPasswordMsg = document.querySelector('#confirm-password + .msg');

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

companyNameInput.addEventListener('blur', () => {
 if (companyNameInput.value.trim() === '') {
  showMessage(companyNameMsg);
 }
});

companyNameInput.addEventListener('input', () => {
 if (companyNameInput.value.trim() !== '') {
  hideMessage(companyNameMsg);
 }
});

emailInput.addEventListener('blur', () => {
 if (emailInput.value.trim() === '') {
  showMessage(emailMsg);
 }
});

emailInput.addEventListener('input', () => {
 if (emailInput.value.trim() !== '') {
  hideMessage(emailMsg);
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

confirmPasswordInput.addEventListener('blur', () => {
 if (confirmPasswordInput.value.trim() === '') {
  showMessage(confirmPasswordMsg);
 }
});

confirmPasswordInput.addEventListener('input', () => {
 if (confirmPasswordInput.value.trim() !== '') {
  hideMessage(confirmPasswordMsg);
 }
});

const form = document.getElementById("Signup");

// Add event listener to the form's submit event
form.addEventListener('submit', (e) => {
 if (usernameInput.value.trim() === '') {
  showMessage(usernameMsg);
  e.preventDefault();
 }

 if (companyNameInput.value.trim() === '') {
  showMessage(companyNameMsg);
  e.preventDefault();
 }

 if (emailInput.value.trim() === '') {
  showMessage(emailMsg);
  e.preventDefault();
 }

 if (passwordInput.value.trim() === '') {
  showMessage(passwordMsg);
  e.preventDefault();
 }

 if (confirmPasswordInput.value.trim() === '') {
  showMessage(confirmPasswordMsg);
  e.preventDefault();
 }
});