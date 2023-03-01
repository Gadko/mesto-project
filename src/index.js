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
  formOpenPopupAvatar,
  avatarPopup,
  linkAvatar,
  buttonPopupSubmitAvatar,
  buttonPopupSubmitProfile,
  imgName, 
  popupImg,
  buttonSubmitPopupEdit,
  profileImg
} from "./components/constants.js";

import { closePopup, openPopup } from "./components/modal.js";
import { createCard } from "./components/card.js";
import { enableValidation } from "./components/validate.js";
import { getUser, getCards, postCard, postUserAvatar, postUserInfo } from "./components/API";

let userId = '';

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
      console.log(res)
      const card = createCard(res, userId, () => {
        popupImg.src = card.link;
        popupImg.alt = card.name;
        imgName.textContent = card.name;
        openPopup(popupsImg);
      });
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


formOpenPopupAvatar.addEventListener('submit', (evt) => {
  evt.preventDefault();
  buttonPopupSubmitAvatar.textContent = 'Сохранение...';
  return postUserAvatar(linkAvatar.value)
    .then(() => {
      const avatar = profileImg;
      avatar.style.backgroundImage = `url(${linkAvatar.value})`;
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
    userId = res[0]._id;
    changeAvatar(res[0].avatar);

    res[1].slice().reverse().forEach(card => {
      elements.prepend(createCard(card, userId, () => {
        popupImg.src = card.link;
        popupImg.alt = card.name;
        imgName.textContent = card.name;
        openPopup(popupsImg);
      }));
    })

}).catch(e => console.log(e));


function changeData(event) {
  event.preventDefault();
  buttonSubmitPopupEdit.textContent = 'Сохранение...';
  postUserInfo(name.value, description.value)
    .then(() => {
      profileName.textContent = `${name.value}`;
      profileDescription.textContent = `${description.value}`
      closePopup(profilePopup);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      buttonSubmitPopupEdit.textContent = 'Сохранить';
    });;
}

const changeAvatar = (linkValue) => {
  return postUserAvatar(linkValue)
    .then(() => {
      const avatar = profileImg;
      avatar.style.backgroundImage = `url(${linkValue})`
    })
    .catch(e => console.log(e))
}

