

import { openPopup } from "./modal.js";

import { putLikeElement, deleteLikeElement, deleteCard } from "./API.js"

// добавление карточек

//card.link, card.name, card.likes, card.owner, card._id

export function createCard(card, userId, popupHeandler) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const openPopupImg = cardElement.querySelector(".element__img");
  const likesCount = cardElement.querySelector('.element__likes');

  cardElement.querySelector(".element__name").textContent = card.name;
  openPopupImg.style.backgroundImage = `url(${card.link})`;
  likesCount.textContent = card.likes.length;

  if(card.owner._id !== userId){
    cardElement.removeChild(cardElement.querySelector('.element__trash'));
  }else {
    cardElement
    .querySelector(".element__trash")
    .addEventListener("click", (evt) => {
      deleteCard(card._id)
      .then(() => {
        cardElement.remove();
      })
      .catch((err) => {
        console.log(err);
      });
    });
  }
  
  card.likes.forEach(e => {
    if(e._id === userId){
      cardElement.querySelector(".element__button").classList.toggle("element__button_active");
    }
  });

  cardElement
    .querySelector(".element__button")
    .addEventListener("click", (evt) => {
      if(evt.target.classList.contains('element__button_active')){
        deleteLikeElement(card._id)
          .then((res) => {
            evt.target.classList.toggle("element__button_active");
            likesCount.textContent = res.likes.length;
          })
          .catch(e => console.log(e))
      }else{
        putLikeElement(card._id)
          .then((res) => {
            evt.target.classList.toggle("element__button_active");
            likesCount.textContent = res.likes.length;
          })
          .catch(e => console.log(e))
      }
      
    });

  

  openPopupImg.addEventListener("click", popupHeandler);

  return cardElement;
}

// Карточки через массив
