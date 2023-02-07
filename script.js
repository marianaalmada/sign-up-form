const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

let passwordValue;
let passwordConfirmValue;

password.addEventListener('change', () => {
    passwordValue = password.value;
    console.log(passwordValue);
});

passwordConfirm.addEventListener('change', () => {
    passwordConfirmValue = passwordConfirm.value;
    console.log(passwordConfirmValue);
});

function validatePasswords(element) {
    element.addEventListener('focusout', () => {
        if (passwordValue != passwordConfirmValue && passwordConfirmValue != undefined) {
            password.classList.add('error');
            passwordConfirm.classList.add('error');
        } else {
            password.classList.remove('error');
            passwordConfirm.classList.remove('error');
        }
    });
}

validatePasswords(password);
validatePasswords(passwordConfirm);