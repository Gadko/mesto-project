import Popup from './Popup';
export default class PopupWithImage extends Popup{
    constructor(selectorPopup){
        super(selectorPopup);

        this._img = this._selectorPopup.querySelector(".popup__img");
        this._text = this._selectorPopup.querySelector(".popup__img-text");
    }
    // открытие картинки с подписью
    open({link,name}){
        super.open();

        this._img.src = link;
        this._text.alt = name;
        this._text.textContent = name;
    }
}