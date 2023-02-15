// Валидация форм
const showFieldError = (validationList, fEl, inputEl, errorMessage) => {
    const errorElement = fEl.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.add(validationList.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationList.errorClass);
}

const hideFieldError = (validationList, fEl, inputEl) => {
    const errorElement = fEl.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.remove(validationList.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(validationList.errorClass);
}

const hasInvalidInput = (inputList) => {
    return inputList.some(inputEl => {
        return !inputEl.validity.valid;
    });
}

const toggleButtonState = (validationList ,inputList, buttonEl) => {
    if(hasInvalidInput(inputList)){
        buttonEl.classList.add(validationList.inactiveButtonClass);
        buttonEl.disabled = true;
    }else {
        buttonEl.classList.remove(validationList.inactiveButtonClass);
        buttonEl.disabled = false;
    }
}


const isValid = (validationList, formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
        inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }


    if(!inputElement.validity.valid){
        showFieldError(validationList, formElement, inputElement, inputElement.validationMessage);
    }else {
        hideFieldError(validationList, formElement, inputElement);
    }
}


const setEventListeners = (validationList ,fEl) => {
    const inputList = Array.from(fEl.querySelectorAll(validationList.inputSelector));
    const buttonEl = fEl.querySelector(validationList.submitButtonSelector);


    inputList.forEach((inputEl) => {
        inputEl.addEventListener('input', (e) => {
            isValid(validationList, fEl, inputEl)
            toggleButtonState(validationList, inputList, buttonEl);
        });
    });
}

export const enableValidation = (validationList) => {
    const formList = Array.from(document.querySelectorAll(validationList.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(validationList, formElement);
    });
}
