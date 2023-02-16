import { imgName, popupImg, elements, popupsImg } from "./constants.js";

import { openPopup } from "./modal.js";

// добавление карточек

export function createCard(linkValue, titleValue) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  const openPopupImg = cardElement.querySelector(".element__img");

  cardElement.querySelector(".element__name").textContent = titleValue;
  openPopupImg.style.backgroundImage = `url(${linkValue})`;

  cardElement
    .querySelector(".element__button")
    .addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__button_active");
    });
  cardElement
    .querySelector(".element__trash")
    .addEventListener("click", (evt) => {
      evt.target.closest(".element").remove();
    });

  openPopupImg.addEventListener("click", () => {
    popupImg.src = linkValue;
    popupImg.alt = titleValue;
    imgName.textContent = titleValue;
    openPopup(popupsImg);
  });

  return cardElement;
}

// Карточки через массив
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
  {
    name: "Джек Рассел",
    link: "https://ferret-pet.ru/wp-content/uploads/5/d/8/5d89f4df1e931d002bd6be202220c93e.jpeg",
  },
];

initialCards.forEach((element) => {
  const cardElement = createCard(element.link, element.name);
  elements.prepend(cardElement);
});
