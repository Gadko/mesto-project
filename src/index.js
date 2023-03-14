import "./pages/index.css";

import {
  name,
  description,
  profileName,
  profileDescription,
  profilePopup,
  cardPopup,
  popupsImg,
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
  avatarPopup,
  buttonPopupSubmitProfile,
  imgName, 
  popupImg,
  profileImg,
  cardsContainerSelector,
  profileNameSelector,
  profileDescriptionSelector,
  profileLinkAvatarSelector,
    profilePopupForm,
    cardPopupForm,
    avatarPopupForm,
    selectors,
    dataInfo
} from "./components/constants.js";

import Api from './components/API.js'
import Card from './components/card.js'
import Section from './components/section'
import FormValidator from './components/validate'

import { closePopup, openPopup } from "./components/modal.js";
import UserInfo from "./components/UserInfo";


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
  openPopup(avatarPopup);
});
imgCloseButton.addEventListener("click", () => {
  closePopup(avatarPopup);
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





const createCard = (cardData,userId ) => {
    const card = new Card(cardData, userId , '#card-template');
    return card.generate();
};

//связь с сервером 
Promise.all([api.getUser(), api.getCards()]).then(data => {
    const [profileInfo, cardsInfo] = data;
    const userId = profileInfo._id;
    const userInfoData = new UserInfo({
        profileName: profileNameSelector,
        profileDescription: profileDescriptionSelector,
        profileAvatar: profileLinkAvatarSelector
    });
    console.log(userId)
    userInfoData.setUserInfo(profileInfo);
    // const userData = userInfoData.getUser();
    // userInfoData.saveUserInfo(userData, name, description);

    const cardsList = new Section({
            data: cardsInfo,
            renderer: (item) => {
                const cardElement = createCard(item,userId);
                cardsList.setItem(cardElement);
            }
        },
        cardsContainerSelector
    );
    cardsList.renderItems();
})
    .catch(e => console.log(e));





// const changeAvatar = (linkValue) => {
//   return api.postUserAvatar(linkValue)
//     .then(() => {
//       const avatar = profileImg;
//       avatar.style.backgroundImage = `url(${linkValue})`
//     })
//     .catch(e => console.log(e))
// }


// валидация

const profileFormValidator = new FormValidator(selectors,profilePopupForm);
const cardFormValidator = new FormValidator(selectors,cardPopupForm);
const avatarFormValidator = new FormValidator(selectors,avatarPopupForm);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

