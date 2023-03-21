export default class Popup{
  constructor(selector){
    this._selectorPopup = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // закрытие попапа
  close() {
    this._selectorPopup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  // открытие попапа
  open() {
    this._selectorPopup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }
  // закрытие при Escape
  _handleEscClose(evt){
    if (evt.key === "Escape") {
      this.close();
    }
  }
  // слушатели событий при нажатии на иконку закрытия или область за попапом
  setEventListeners(){
    this._selectorPopup.addEventListener("mousedown", (evt) =>{
      if ((evt.target.classList.contains("popup__overlay")) || (evt.target.classList.contains("popup__close-button"))){
        this.close();
      }
    });
  }
}

