function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    let checkbox = document.querySelector(`.c-password-toggle__checkbox`);
    let passwordInput = document.querySelector(`.c-password-toggle__input`);
    checkbox.addEventListener(`change`, function() {
        if (checkbox.checked) {
            passwordInput.type = "text";
            console.log("checked")
        }
        else {
            passwordInput.type = "password";
            console.log("unchecked")
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});