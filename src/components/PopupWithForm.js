import Popup from './Popup';
import {selectors} from '../utils/constants';
export default class PopupWithForm extends Popup{
    constructor(selectorPopup, formSubmitCallback){
        super(selectorPopup);
        this._formSubmitCallback = formSubmitCallback;
        this._form = this._selectorPopup.querySelector(selectors.formSelector);
        this._inputList = this._form.querySelectorAll(selectors.inputSelector);
        this._buttonSubmit = this._form.querySelector(selectors.submitButtonSelector);
    }
    // собирает данные всех полей формы
    _getInputValues(){
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }
    // слушатели событий
    setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener("submit", (event) => {
            event.preventDefault();
            this._formSubmitCallback(this._getInputValues());
        });
    }
    // изменение текста на кнопке
    renderLoading(isLoading){
        if (isLoading) {
            this._buttonSubmit.textContent = 'Сохранение...';
        } else {
            this._buttonSubmit.textContent = 'Сохранить';
        }
    }
    // закрытие и очистка формы
    close(){
        super.close();
        this._form.reset();
    }

}