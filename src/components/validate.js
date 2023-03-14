export default class FormValidator {
  constructor(selector, formElement){
    this._selector = selector;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(selector.inputSelector));
    this._buttonEl = this._formElement.querySelector(selector.submitButtonSelector);
  }

  // // Валидация форм

  //Красные поля

  _showFieldError (inputEl, errorMessage) {
    inputEl.classList.add(this._selector.inputErrorClass);
    const errorElement = this._formElement.querySelector(`.${inputEl.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._selector.errorClass);
  };
  _hideInputError(input) {
    input.classList.remove(this._selector.inputErrorClass);
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(this._selector.errorClass);
  }

  _hasInvalidInput () {
    return this._inputList.some((inputEl) => {
      return !inputEl.validity.valid;
    })
  }

toggleButtonState () {
  if (this._hasInvalidInput()) {
    this._buttonEl.classList.add(this._selector.inactiveButtonClass);
    this._buttonEl.disabled = true;
  } else {
    this._buttonEl.classList.remove(this._selector.inactiveButtonClass);
    this._buttonEl.disabled = false;
  }
};
  //Проверка на валидность
_isValid (inputElement) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }
  if (!inputElement.validity.valid) {
    this._showFieldError(
      inputElement,
      inputElement.validationMessage
    );
  } else {
    this._hideInputError(inputElement);
  }
}

  setEventListeners ( ) {
    this.toggleButtonState();
    this._formElement.addEventListener("reset", () => {
      setTimeout(() => {
        this.toggleButtonState();
      }, 0);
    });
    this._inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", () => {
      this._isValid(inputEl);
      this.toggleButtonState();
    });
  });
};

  enableValidation () {
    this.setEventListeners();
    console.log(this._selector.inputErrorClass)
};

}







// // Валидация форм
// const showFieldError = (validationList, fEl, inputEl, errorMessage) => {
//   const errorElement = fEl.querySelector(`.${inputEl.id}-error`);
//   inputEl.classList.add(validationList.inputErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(validationList.errorClass);
// };

// const hideFieldError = (validationList, fEl, inputEl) => {
//   const errorElement = fEl.querySelector(`.${inputEl.id}-error`);
//   inputEl.classList.remove(validationList.inputErrorClass);
//   errorElement.textContent = "";
//   errorElement.classList.remove(validationList.errorClass);
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputEl) => {
//     return !inputEl.validity.valid;
//   });
// };

// const toggleButtonState = (validationList, inputList, buttonEl) => {
//   if (hasInvalidInput(inputList)) {
//     buttonEl.classList.add(validationList.inactiveButtonClass);
//     buttonEl.disabled = true;
//   } else {
//     buttonEl.classList.remove(validationList.inactiveButtonClass);
//     buttonEl.disabled = false;
//   }
// };

// const isValid = (validationList, formElement, inputElement) => {
//   if (inputElement.validity.patternMismatch) {
//     inputElement.setCustomValidity(inputElement.dataset.errorMessage);
//   } else {
//     inputElement.setCustomValidity("");
//   }

//   if (!inputElement.validity.valid) {
//     showFieldError(
//       validationList,
//       formElement,
//       inputElement,
//       inputElement.validationMessage
//     );
//   } else {
//     hideFieldError(validationList, formElement, inputElement);
//   }
// };

// const setEventListeners = (validationList, formElement) => {
//   const inputList = Array.from(
//     formElement.querySelectorAll(validationList.inputSelector)
//   );
//   const buttonEl = formElement.querySelector(
//     validationList.submitButtonSelector
//   );

//   toggleButtonState(validationList, inputList, buttonEl);

//   formElement.addEventListener("reset", () => {
//     setTimeout(() => {
//       toggleButtonState(validationList, inputList, buttonEl);
//     }, 0);
//   });

//   inputList.forEach((inputEl) => {
//     inputEl.addEventListener("input", (e) => {
//       isValid(validationList, formElement, inputEl);
//       toggleButtonState(validationList, inputList, buttonEl);
//     });
//   });
// };

// export const enableValidation = (validationList) => {
//   const formList = Array.from(
//     document.querySelectorAll(validationList.formSelector)
//   );
//   formList.forEach((formElement) => {
//     setEventListeners(validationList, formElement);
//   });
// };
