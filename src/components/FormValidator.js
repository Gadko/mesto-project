export default class FormValidator {
  constructor(selector, formElement){
    this._selector = selector;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(selector.inputSelector));
    this._buttonEl = this._formElement.querySelector(selector.submitButtonSelector);
  }

  // Валидация форм

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

  setEventListeners () {
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
  };
}

