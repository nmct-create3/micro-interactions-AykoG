function handleFloatingLabel() {
    let floatingLabel = document.querySelector(`.js-label-floating`);
    let floatingInput = document.querySelector(`.js-input-floating`);
    floatingInput.addEventListener(`blur`, function() {
        var input = document.getElementById("username").value;
        if (input == "") {
            floatingLabel.classList.remove("is-floating")
            console.log("empty")
        }
        else {
            floatingLabel.classList.add("is-floating")
            console.log("filled")
        }
    })
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