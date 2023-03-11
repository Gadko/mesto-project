

import { openPopup } from "./modal.js";

import Api from './API.js'
//import { putLikeElement, deleteLikeElement, deleteCard } from "./API.js"

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-21',
  headers: {
    authorization: '71950263-dc45-46b9-9239-c7d806444496',
    'Content-Type': 'application/json'
  }
}); 

// добавление карточек

//card.link, card.name, card.likes, card.owner, card._id

export default class Card {
  constructor(data, userId, popupHeandler){
    this._data = data;
    this._popupHeandler = popupHeandler;
    this._userId = userId;
  }

  _getElement() {
    const cardTemplate = document.querySelector("#card-template").content;
    const cardElement = cardTemplate
    .querySelector('.element')
    .cloneNode(true);

    return cardElement;
  }

  openImg() {
    const element = this._getElement();

    element.querySelector('.element__img').addEventListener("click", popupHeandler);
  }

  checkLikes() {
    const element = this._getElement();

    this._data.likes.forEach(e => {
      if(e._id === this._userId){
        element.querySelector(".element__button").classList.toggle("element__button_active");
      }
    });
    return element
  }

  changeLikes() {
    const element = this._getElement();

    element
    .querySelector(".element__button")
    .addEventListener("click", (evt) => {
      if(evt.target.classList.contains('element__button_active')){
        api.deleteLikeElement(this._data._id)
          .then((res) => {
            evt.target.classList.toggle("element__button_active");
            element.querySelector('.element__likes').textContent = res.likes.length;
          })
          .catch(e => console.log(e))
      }else{
        api.putLikeElement(this._data._id)
          .then((res) => {
            evt.target.classList.toggle("element__button_active");
            element.querySelector('.element__likes').textContent = res.likes.length;
          })
          .catch(e => console.log(e))
      }
      
    });
    return element;
  }

  deleteCard() {
    const element = this._getElement();
    
    if(this._data.owner._id !== this._userId){
      element.removeChild(element.querySelector('.element__trash'));
    }else {
      element
      .querySelector(".element__trash")
      .addEventListener("click", (evt) => {
        api.deleteCard(this._data._id)
        .then(() => {
          element.remove();
        })
        .catch((err) => {
          console.log(err);
        });
      });
    }
    return element;
  }

  generate() {
    const element = this._getElement();

    element.querySelector(".element__name").textContent = this._data.name;
    element.querySelector('.element__img').style.backgroundImage = `url(${this._data.link})`;
    element.querySelector('.element__likes').textContent = this._data.likes.length;

    return _element;
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
