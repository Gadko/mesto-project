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
  profileImg,
    cardsContainerSelector,
    profileNameSelector,
    profileDescriptionSelector,
} from "./components/constants.js";

import Api from './components/API.js'
import Card from './components/card.js'
import Section from './components/section'

import { closePopup, openPopup } from "./components/modal.js";
//import { createCard } from "./components/card.js";
//import { enableValidation } from "./components/validate.js";
//import { getUser, getCards, postCard, postUserAvatar, postUserInfo } from "./components/API";
import UserInfo from "./components/UserInfo";

export let myId = '';

const dataInfo = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-21',
    headers: {
        authorization: '71950263-dc45-46b9-9239-c7d806444496',
        'Content-Type': 'application/json'
    }
}
export const api = new Api(dataInfo);



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

  api.postCard(title.value, link.value)
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

// profileForm.addEventListener("submit", changeData);


// formOpenPopupAvatar.addEventListener('submit', (evt) => {
//   evt.preventDefault();
//   buttonPopupSubmitAvatar.textContent = 'Сохранение...';
//   return api.postUserAvatar(linkAvatar.value)
//     .then(() => {
//       const avatar = profileImg;
//       avatar.style.backgroundImage = `url(${linkAvatar.value})`;
//       evt.target.reset();
//       closePopup(avatarPopup);
//     })
//     .catch(e => console.log(e))
//     .finally(() => {
//       buttonPopupSubmitAvatar.textContent = 'Сохранить';
//     });
//
//
// })


// валидация
// enableValidation({
//   formSelector: ".popup__form",
//   inputSelector: ".popup__field",
//   submitButtonSelector: ".popup__submit-button",
//   inactiveButtonClass: "button_inactive",
//   inputErrorClass: "popup__field_type_error",
//   errorClass: "popup__field-error_active",
// });

const createCard = (cardData) => {
    const card = new Card(cardData, cardData.owner._id, '#card-template');
    return card.generate();
};

//связь с сервером 
Promise.all([api.getUser(), api.getCards()]).then(data => {
    const [profileInfo, cardsInfo] = data;
    // profileName.textContent = res[0].name;
    // profileDescription.textContent = res[0].about;
    myId = data[0]._id
    // changeAvatar(res[0].avatar);
    //
    // res[1].slice().reverse().forEach(card => {
    //   elements.prepend(createCard(card, userId, () => {
    //   }));
    // })
    console.log(profileNameSelector)
    const userInfoData = new UserInfo({
        profileName: profileNameSelector,
        profileDescription: profileDescriptionSelector
    });
    userInfoData.setUserInfo(profileInfo);

    const cardsList = new Section({
            data: cardsInfo,
            renderer: (item) => {
                const cardElement = createCard(item);
                cardsList.setItem(cardElement);
            }
        },
        cardsContainerSelector
    );
    cardsList.renderItems();
})
    .catch(e => console.log(e));





const changeAvatar = (linkValue) => {
  return api.postUserAvatar(linkValue)
    .then(() => {
      const avatar = profileImg;
      avatar.style.backgroundImage = `url(${linkValue})`
    })
    .catch(e => console.log(e))
}

