import { imgName, popupImg, popupsImg, myId } from "./constants.js";

import { openPopup } from "./modal.js";

import { putLikeElement, deleteLikeElement, deleteCard } from "./API.js"

// добавление карточек

//card.link, card.name, card.likes, card.owner, card._id

export function createCard(card) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const openPopupImg = cardElement.querySelector(".element__img");
  const likesCount = cardElement.querySelector('.element__likes');

  cardElement.querySelector(".element__name").textContent = card.name;
  openPopupImg.style.backgroundImage = `url(${card.link})`;
  likesCount.textContent = card.likes.length;

  if(card.owner._id !== myId){
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
    if(e._id === myId){
      cardElement.querySelector(".element__button").classList.toggle("element__button_active");
    }
  });

  cardElement
    .querySelector(".element__button")
    .addEventListener("click", (evt) => {
      if(evt.target.classList.contains('element__button_active')){
        deleteLikeElement(card._id)
          .then(() => {
            evt.target.classList.toggle("element__button_active");
            likesCount.textContent -= 1;
          })
      }else{
        putLikeElement(card._id)
          .then(() => {
            evt.target.classList.toggle("element__button_active");
            likesCount.textContent = parseInt(likesCount.textContent, 10) + 1;
          })
      }
      
    });

  

  openPopupImg.addEventListener("click", () => {
    popupImg.src = card.link;
    popupImg.alt = card.name;
    imgName.textContent = card.name;
    openPopup(popupsImg);
  });

  return cardElement;
}

// Карточки через массив
