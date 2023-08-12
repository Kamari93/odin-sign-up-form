const passwordInput = document.getElementById("password");
const confirmPasswordInput =  document.getElementById("confirmPassword");
const passWordMatchText = document.getElementById("passwordMatchText");
const formFields = document.querySelectorAll("form-field input");
const submitBtn = document.getElementById("submit-btn");


confirmPasswordInput.addEventListener('input', matchPassword);
passwordInput.addEventListener('input', clearPasswordMatchText);
confirmPasswordInput.addEventListener('input', clearPasswordMatchText);


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

function clearPasswordMatchText() {
    if (!passwordInput.value && !confirmPasswordInput.value) {
        passWordMatchText.textContent = '';
    }};



formFields.forEach(field => {
    field.addEventListener('focus', () => {
      field.classList.remove('password-mismatch');
    });
  });


// function matchPassword() {
//     passWordMatchText.textContent = passwordInput.value === confirmPasswordInput.value ? 'Match' : 'No Match';
// };

// passwordInput.addEventListener('keyup', () => {
//     if (passwordInput.length != 0) matchPassword();
// });

// confirmPasswordInput.addEventListener('keyup', matchPassword);