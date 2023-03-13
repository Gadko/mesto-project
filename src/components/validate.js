class FormValidator {
  constructor(selector, formElement){
    this._selector = selector;
    this._formElement = formElement;
  }


  //Проверка на валидность
  _isValid(input) {
    if(!input.validity.valid){

    }else{

    }
  }

  //Красные поля
    _showFieldError(input) {
      const errorElement = this._formElement.querySelector(`.${input.id}-error`);
      errorElement.textContent = input.validationMessage;
      input.classList.add(this._selector.inputInvalidClass);
    }

  }

  _hideInputError(input) {
    const errorElement = this._formElement.querySelector(`.${input.id}-error`);
    errorElement.textContent = '';
    input.classList.remove(this._selector.inputInvalidClass);
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
