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

  const card = createCard(link.value, title.value);

  elements.prepend(card);

  evt.target.reset();
  closePopup(cardPopup);
});

profileForm.addEventListener("submit", changeData);


addFormAvatar.addEventListener('submit', (evt) => {
  evt.preventDefault();

  changeAvatar(linkAvatar.value);

  evt.target.reset();
  closePopup(avatarPopup);
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
