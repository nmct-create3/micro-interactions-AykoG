let email = {}, password = {}, signInButton;

const getDOMElements = function() {
    email.field = document.querySelector('.js-email-field');
    email.errorMessage = document.querySelector('.js-email-error-message');
    email.input = document.querySelector('.js-email-input');
    console.log(email);

    password.field = document.querySelector('.js-password-field');
    password.errorMessage = document.querySelector('.js-password-error-message');
    password.input = document.querySelector('.js-password-input');
    console.log(password);

    signInButton = document.querySelector('.js-sign-in-button');
};

const isValidEmailAddress = function(emailAddress) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
};

const addErrors = function(formField, errorField, errorMessage) {
    formField.classList.add('has-error');
    errorField.style.display = 'block';
    errorField.innerHTML = errorMessage;
};

const removeErrors = function(formField) {
    formField.classList.remove('has-error');
    errorField.style.display = 'none';
};

const doubleCheckEmailAddress = function() {
    if(!isEmpty(email.input.value) && isValidEmailAddress(email.input.value)) {
        removeErrors(email.field, email.errorMessage);
        email.input.removeEventListener('input', doubleCheckEmailAddress);
    }
    else {
        addErrors(email.field, error.errorMessage, 'The email is incorrect');
    }
};

const enableListeners = function() {
    email.input.addEventListener('blur', function() {
        if (isEmpty(email.input.value) && !isValidEmailAddress(email.input.value)) {
            addErrors(email.field, email.errorMessage, "This field is required");
            email.input.addEventListener('input', doubleCheckEmailAddress);
        }
        else {
            if (isEmpty(eamil.input.value)) {
                removeErrors(email.field, email.errorMessage);
                email.input.removeEventListener('input', doubleCheckEmailAddress);
            }
        }
    });

    password.input.addEventListener('blur', function() {});
    
    signInButton.addEventListener('click', function() {});
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    getDOMElements();
    enableListeners();
});