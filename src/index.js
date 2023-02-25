import "./pages/index.css";

import {
  profileButtonEdit,
  name,
  description,
  profileName,
  profileDescription,
  profilePopup,
  cardPopup,
  popupsImg,
  imagePopup,
  popupEditClose,
  profileButton,
  profileCloseButton,
  closePopupImg,
  imgButton,
  imgCloseButton,
  cardForm,
  elements,
  link,
  title,
  profileForm,
  addFormAvatar,
  avatarPopup,
  linkAvatar
} from "./components/constants.js";

import { closePopup, openPopup } from "./components/modal.js";

import { changeData, changeAvatar } from "./components/utils.js";
import { createCard } from "./components/card.js";
import { enableValidation } from "./components/validate.js";
import { userInfo, Cards, postCard, putLikeElement, deleteLikeElement } from "./components/API";

// Модальные окна
profileButtonEdit.addEventListener("click", () => {
  name.value = profileName.textContent;
  description.value = profileDescription.textContent;
  openPopup(profilePopup);
});
popupEditClose.addEventListener("click", () => {
  closePopup(profilePopup);
});

profileButton.addEventListener("click", () => {
  openPopup(cardPopup);
});
profileCloseButton.addEventListener("click", () => {
  closePopup(cardPopup);
});

closePopupImg.addEventListener("click", () => {
  closePopup(popupsImg);
});

imgButton.addEventListener("click", () => {
  openPopup(imagePopup);
});
imgCloseButton.addEventListener("click", () => {
  closePopup(imagePopup);
});

// Карточки
cardForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  cardForm.querySelector('.popup__submit-button_type_profile').textContent = 'Сохранение...';

  postCard(title.value, link.value)
    .then((res) => {
      const card = createCard(res);
      elements.prepend(card); 
      cardForm.querySelector('.popup__submit-button_type_profile').textContent = 'Сохранить';
      evt.target.reset();
      closePopup(cardPopup);
  });
});

profileForm.addEventListener("submit", changeData);


addFormAvatar.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addFormAvatar.querySelector('.popup__submit-button_type_avatar').textContent = 'Сохранение...';
  changeAvatar(linkAvatar.value)
    .then(() => {
      addFormAvatar.querySelector('.popup__submit-button_type_avatar').textContent = 'Сохранить';
      evt.target.reset();
      closePopup(avatarPopup);
    });

  
})


// валидация
enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__field-error_active",
});

//связь с сервером 

userInfo()
  .then(data => {
    profileName.textContent = data.name;
    profileDescription.textContent = data.about;
    changeAvatar(data.avatar);
  });

  Cards()
    .then(data => {
      data.slice().reverse().forEach(card => {
        elements.prepend(createCard(card));
      });
    });

    //card.link, card.name, card.likes, card.owner, card._id