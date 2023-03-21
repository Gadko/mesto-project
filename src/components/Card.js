
// создание карточек

export default class Card {
  constructor(data, userId, selector, {handleCardClick,handleDeleteCard,handleLikeClick}){
    this._data = data;
    this._likes = data.likes;
    this._link = data.link;
    this._name = data.name;
    this._selector = selector;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeClick = handleLikeClick;
  }
// создаем новую карточку
  _getElement() {
    return document
        .querySelector(this._selector)
        .content
        .querySelector('.element')
        .cloneNode(true);
  }

  _deleteCard() {
    this._handleDeleteCard(this._data._id)
    .then(() => {
      this._element.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}
// слушатели событий
  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({link: this._link, name: this._name});
    })

    this._buttonDelete.addEventListener("click", () => {
          this._deleteCard();
        })
    this._likeButton
        .addEventListener("click", () => {
            this._handleLikeClick(this,this._data._id)
        })
  };
// проверка, поставлен ли уже лайк пользователем
  _isLikedUser(like, userId) {
  return like.some(like => {
    return userId === like._id;
  });
}
// поставленный лайк
  getLike() {
    return this._likeButton.classList.contains("element__button_active");
  }
// измение иконки лайка и количества лайков
  changeLikes(data) {
    this._likes = data.likes;
    this._likeButton.classList.toggle("element__button_active");
    this._likeCount.textContent = data.likes.length;
  }
// удаление иконки корзины, если карточку загрузил другой пользователь
  deleteElementTrash(){
    if(this._data.owner._id !== this._userId){
      this._element.removeChild(this._element.querySelector('.element__trash'));
    }
  }
  // возвращает полностью готовую карточку
  generate() {
    this._element = this._getElement();
    this._cardImage =  this._element.querySelector(".element__img")
    this._cardName = this._element.querySelector(".element__name");
    this._likeCount = this._element.querySelector(".element__likes");
    this._likeButton = this._element.querySelector(".element__button");
    this._buttonDelete = this._element.querySelector(".element__trash");
    this._cardName.textContent = this._name;
    this._cardImage.style.backgroundImage = `url(${this._link})`;
    this._likeCount.textContent = this._likes.length;
    this._setEventListeners();
    this.deleteElementTrash();

// меняет иконку лайка при нажатии

    if(this._isLikedUser(this._likes, this._userId)){
      this._likeButton.classList.toggle("element__button_active");
    }
    return this._element;
  }

}