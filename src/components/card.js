

import { openPopup, closePopup } from "./modal.js";
import {api} from '../index';
import {imagePopup, imgName, popupImg} from "./constants";
//import { putLikeElement, deleteLikeElement, deleteCard } from "./API.js"


// добавление карточек

//card.link, card.name, card.likes, card.owner, card._id

export default class Card {
  constructor(data, userId, selector){
    this._data = data;
    this._likes = data.likes;
    this._link = data.link;
    this._name = data.name;
    // this._popupHeandler = popupHeandler;
    this._selector = selector;
    this._userId = userId;
    this._element = this._getElement();
    this._cardImage =  this._element.querySelector(".element__img");
    this._cardName = this._element.querySelector(".element__name");
    this._likeCount = this._element.querySelector(".element__likes");
    this._likeButton = this._element.querySelector(".element__button");
  }

  _getElement() {
    return document
        .querySelector(this._selector)
        .content
        .querySelector('.element')
        .cloneNode(true);
  }
  _handleOpenPopup() {
    popupImg.src = this._cardImage;
    popupImg.alt = this._cardName;
    imgName.textContent = this._cardName;
    openPopup(imagePopup)
  }

  _handleClosePopup() {
    popupImg.src = ' ';
    popupImg.alt = ' ';
    imgName.textContent = ' ';
    closePopup(imagePopup);
  }


  // openImg() {
  //   const element = this._getElement();
  //
  //   element.querySelector('.element__img').addEventListener("click", popupHeandler);
  // }
  //
  checkLikes() {
    this._likeCount.textContent = this._likes.length;
      if(this._likes.some(el => el._id === this._userId)){
        this._likeButton.classList.toggle("element__button_active");
      }
  }

  changeLikes() {
    this._likeCount.textContent = this._likes.length;
    if(this._likes.some(el => el._id === this._userId)){
      this._likeButton.classList.toggle("element__button_active");
    }
    this._likeButton
    .addEventListener("click", (evt) => {
      if(evt.target.classList.contains('element__button_active')){
        api.deleteLikeElement(this._data._id)
          .then((res) => {
            evt.target.classList.toggle("element__button_active");
            this._likeCount.textContent = res.likes.length;
          })
          .catch(e => console.log(e))
      }else{
        api.putLikeElement(this._data._id)
          .then((res) => {
            evt.target.classList.toggle("element__button_active");
            this._likeCount.textContent = res.likes.length;
          })
          .catch(e => console.log(e))
      }

    });
    return this._likeButton;
  }

  deleteCard() {

    if(this._data.owner._id !== this._userId){
      this._element.removeChild(this._element.querySelector('.element__trash'));
    } else {
      this._element
      .querySelector(".element__trash")
      .addEventListener("click", (evt) => {
        api.deleteCard(this._data._id)
        .then(() => {
          this._element.remove();
        })
        .catch((err) => {
          console.log(err);
        });
      });
    }
    return this._element;
  }

  generate() {
    this._cardName.textContent = this._name;
    this._cardImage.style.backgroundImage = `url(${this._link})`;
    this.checkLikes();
    this.changeLikes();
    this.deleteCard();
    return this._element;
  }

}


// export function createCard(card, userId, popupHeandler) {
//   const cardTemplate = document.querySelector("#card-template").content;
//   const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
//   const openPopupImg = cardElement.querySelector(".element__img");
//   const likesCount = cardElement.querySelector('.element__likes');

//   cardElement.querySelector(".element__name").textContent = card.name;
//   openPopupImg.style.backgroundImage = `url(${card.link})`;
//   likesCount.textContent = card.likes.length;

//   if(card.owner._id !== userId){
//     cardElement.removeChild(cardElement.querySelector('.element__trash'));
//   }else {
//     cardElement
//     .querySelector(".element__trash")
//     .addEventListener("click", (evt) => {
//       api.deleteCard(card._id)
//       .then(() => {
//         cardElement.remove();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     });
//   }
  
//   card.likes.forEach(e => {
//     if(e._id === userId){
//       cardElement.querySelector(".element__button").classList.toggle("element__button_active");
//     }
//   });

//   cardElement
//     .querySelector(".element__button")
//     .addEventListener("click", (evt) => {
//       if(evt.target.classList.contains('element__button_active')){
//         api.deleteLikeElement(card._id)
//           .then((res) => {
//             evt.target.classList.toggle("element__button_active");
//             likesCount.textContent = res.likes.length;
//           })
//           .catch(e => console.log(e))
//       }else{
//         api.putLikeElement(card._id)
//           .then((res) => {
//             evt.target.classList.toggle("element__button_active");
//             likesCount.textContent = res.likes.length;
//           })
//           .catch(e => console.log(e))
//       }
      
//     });

  

//   openPopupImg.addEventListener("click", popupHeandler);

//   return cardElement;
// }

// Карточки через массив
