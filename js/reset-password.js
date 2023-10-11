const emailInput = document.querySelector('#email');
const emailMsg = document.querySelector('#email + .msg');

// Function to hide the error message
function hideMessage(msg) {
 msg.style.display = 'none';
}

// Function to show the error message
function showMessage(msg) {
 msg.style.display = 'block';
}

// Add event listener to the input field
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

const form = document.getElementById("reset-password");

// Add event listener to the form's submit event
form.addEventListener('submit', (e) => {
 if (emailInput.value.trim() === '') {
  showMessage(emailMsg);
  e.preventDefault();
 }
});