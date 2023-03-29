/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/validation/index.ts":
/*!*********************************!*\
  !*** ./src/validation/index.ts ***!
  \*********************************/
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ErrorType;
(function (ErrorType) {
    ErrorType["ShowErrorMessage"] = "show-error-message";
    ErrorType["PasswordNotMatchError"] = "As senhas n\u00E3o conferem";
    ErrorType["EmptyFieldError"] = "Preencha o campo";
})(ErrorType || (ErrorType = {}));
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const passwordConfirm = document.querySelector('.password-confirm');
const button = document.querySelector('.send-form-button');
if (!form || !username || !email || !password || !passwordConfirm || !button) {
    throw new Error('Failed to load form elements');
}
form.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    hideErrorMessage(form);
    checkFormEmptyFields([username, email, password, passwordConfirm]);
    yield checkPasswordEquals(password, passwordConfirm);
    if (isSendForm(form)) {
        setButtonAttributes('Enviando...', 'disabled');
        yield awaitTimeout(1500)
            .then(() => {
            showAlertMessage('Formulário Enviado');
            resetButtonAttributes();
        })
            .catch((error) => {
            console.error(error);
        });
    }
}));
const setButtonAttributes = (text, attribute) => {
    button.innerText = text;
    button.setAttribute(attribute, '');
};
const resetButtonAttributes = () => {
    button.innerText = 'Enviar';
    button.removeAttribute('disabled');
};
const checkPasswordEquals = (passwordInput, confirmPasswordInput) => __awaiter(void 0, void 0, void 0, function* () {
    if (passwordInput.value !== confirmPasswordInput.value) {
        showErrorMessage(passwordInput, ErrorType.PasswordNotMatchError);
        showErrorMessage(confirmPasswordInput, ErrorType.PasswordNotMatchError);
        return;
    }
});
const checkFormEmptyFields = (inputs) => {
    inputs.forEach((input) => {
        if (!input.value)
            showErrorMessage(input, ErrorType.EmptyFieldError);
    });
};
const hideErrorMessage = (form) => {
    const errorElements = form.querySelectorAll(`.${ErrorType.ShowErrorMessage}`);
    errorElements.forEach((element) => element.classList.remove(ErrorType.ShowErrorMessage));
};
const showErrorMessage = (input, message) => {
    const formFields = input.parentElement;
    const errorMessage = formFields.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.innerText = message;
        formFields.classList.add(ErrorType.ShowErrorMessage);
    }
};
const isSendForm = (form) => {
    let send = true;
    form
        .querySelectorAll(`.${ErrorType.ShowErrorMessage}`)
        .forEach(() => (send = false));
    return send;
};
const awaitTimeout = (time) => __awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((resolve) => setTimeout(resolve, time));
});
const showAlertMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    return yield new Promise((resolve) => {
        alert(message);
        resolve();
        window.location.reload();
    });
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/validation/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map