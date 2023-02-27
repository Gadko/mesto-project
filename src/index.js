import "./pages/index.css";

import {
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
  buttonEditProfile,
  closePopupImg,
  imgButton,
  imgCloseButton,
  cardForm,
  elements,
  link,
  title,
  profileForm,
  buttonOpenPopupAvatar,
  avatarPopup,
  linkAvatar,
  buttonPopupSubmitAvatar,
  buttonPopupSubmitProfile
} from "./components/constants.js";

import { closePopup, openPopup } from "./components/modal.js";

import { changeData, changeAvatar } from "./components/utils.js";
import { createCard } from "./components/card.js";
import { enableValidation } from "./components/validate.js";
import { getUser, getCards, postCard, putLikeElement, deleteLikeElement, setUserId } from "./components/API";

// Модальные окна
buttonEditProfile.addEventListener("click", () => {
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
buttonEditProfile.addEventListener("click", () => {
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
  buttonPopupSubmitProfile.textContent = 'Сохранение...';

  postCard(title.value, link.value)
    .then((res) => {
      const card = createCard(res);
      elements.prepend(card); 
      evt.target.reset();
      closePopup(cardPopup);
  })
    .catch(e => console.log(e))
    .finally(() => {
      buttonPopupSubmitProfile.textContent = 'Сохранить';
    });
});

profileForm.addEventListener("submit", changeData);


buttonOpenPopupAvatar.addEventListener('submit', (evt) => {
  evt.preventDefault();
  buttonPopupSubmitAvatar.textContent = 'Сохранение...';
  changeAvatar(linkAvatar.value)
    .then(() => {
      evt.target.reset();
      closePopup(avatarPopup);
    })
    .catch(e => console.log(e))
    .finally(() => {
      buttonPopupSubmitAvatar.textContent = 'Сохранить';
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
Promise.all([getUser(), getCards()]).then((res) => {

    profileName.textContent = res[0].name;
    profileDescription.textContent = res[0].about;
    setUserId(res[0]._id)
    changeAvatar(res[0].avatar);

    res[1].slice().reverse().forEach(card => {
      elements.prepend(createCard(card));
    })

}).catch(e => console.log(e))