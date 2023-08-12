const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById("password");
const confirmPasswordInput =  document.getElementById("confirmPassword");
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const passWordMatchText = document.getElementById("passwordMatchText");
const formFields = document.querySelectorAll("input");
const submitBtn = document.getElementById("submit-btn");


confirmPasswordInput.addEventListener('input', matchPassword);
passwordInput.addEventListener('input', clearPasswordMatchText);
confirmPasswordInput.addEventListener('input', clearPasswordMatchText);
passwordInput.addEventListener('input', () => {
    if (confirmPasswordInput.value !== "") matchPassword();
    if (!confirmPasswordInput.value) passWordMatchText.textContent = '';
});


function matchPassword() {
    if (passwordInput.value === confirmPasswordInput.value) {
        confirmPasswordInput.classList.add("match");
        passwordInput.classList.remove("password-mismatch");
        confirmPasswordInput.classList.remove("password-mismatch");
        passWordMatchText.classList.add("match");
        passWordMatchText.textContent = "Passwords match";
        submitBtn.removeAttribute('disabled');
    } else {
        confirmPasswordInput.classList.remove("match");
        passwordInput.classList.add("password-mismatch");
        confirmPasswordInput.classList.add("password-mismatch");
        passWordMatchText.classList.remove("match");
        passWordMatchText.textContent = "Passwords don't match";
        submitBtn.setAttribute('disabled', 'true');
    };} 

function checkValidity() {
    const isValidFirstName = firstNameInput.value.length >= 3 || firstNameInput.value === '';
    const isValidLastName = lastNameInput.value.length >= 3 || lastNameInput.value === '';
    const isValidEmail = emailInput.value === '' || emailInput.checkValidity();
    const isValidPhone = phoneInput.value === '' || phoneInput.checkValidity();
    const isValidPassword = passwordInput.value === '' || /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/.test(passwordInput.value);
    

    firstNameError.textContent = isValidFirstName ? '' : 'First name too short';
    lastNameError.textContent = isValidLastName ? '' : 'Last name too short';
    emailError.textContent = isValidEmail ? '' : 'Invalid email format';
    phoneError.textContent = isValidPhone ? '' : 'Invalid number';
    passwordError.textContent = isValidPassword ? '' : 'Must be at least 5 chars, include a special char, and a number';
    }

function clearPasswordMatchText() {
    if (!confirmPasswordInput.value) {
        passWordMatchText.textContent = '';
    }};

formFields.forEach(field => {
    field.addEventListener('focus', () => {
      field.classList.remove('password-mismatch');
    });
  });


formFields.forEach(field => {
    field.addEventListener('input', checkValidity);
});


// function matchPassword() {
//     passWordMatchText.textContent = passwordInput.value === confirmPasswordInput.value ? 'Match' : 'No Match';
// };

// passwordInput.addEventListener('keyup', () => {
//     if (passwordInput.length != 0) matchPassword();
// });

// confirmPasswordInput.addEventListener('keyup', matchPassword);