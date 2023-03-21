import "./index.css";

import {
    nameProfilePopup,
    descriptionProfilePopup,
    profileButton,
    buttonEditProfile,
    imgButton,
    linkAvatarPopup,
    titleCardPopup,
    cardsContainerSelector,
    profileNameSelector,
    profileDescriptionSelector,
    profileLinkAvatarSelector,
    profilePopupForm,
    cardPopupForm,
    avatarPopupForm,
    selectors,
    dataInfo,
    selectorProfilePopup,
    selectorCardPopup,
    selectorAvatarPopup,
    selectorPopupsImg,
    linkCardPopup,
    cardTemplateSelector
} from "../utils/constants.js";

import Api from '../components/API.js'
import Card from '../components/Card.js'
import Section from '../components/Section'
import FormValidator from '../components/FormValidator'
import UserInfo from "../components/UserInfo";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const api = new Api(dataInfo);


// функции карточек

// открытие картинки
const handleCardClick = (data) => {
    popupWithImage.open(data);
}

// удаление карточки
const handleDeleteCard = (cardId) => {
      return api.deleteCard(cardId)
}
// изменение иконки лайка
const handleLikeClick = (card,cardId) => {
      if(card.getLike()){
        api.deleteLikeElement(cardId)
          .then((res) => {
              card.changeLikes(res);
          })
          .catch(e => console.log(e))
      }else{
        api.putLikeElement(cardId)
          .then((res) => {
              card.changeLikes(res)
          })
          .catch(e => console.log(e))
      }
}

// функция создания карточек
const createCard = (cardData) => {
    const card = new Card(cardData, userInfoData.userId, cardTemplateSelector, {handleCardClick, handleDeleteCard,handleLikeClick});
    return card.generate();
};

const cardsList = new Section({
        renderer: (item) => {
            return createCard(item);
        }
    },
    cardsContainerSelector
);

// Данные профиля

const userInfoData = new UserInfo({
    profileName: profileNameSelector,
    profileDescription: profileDescriptionSelector,
    profileAvatar: profileLinkAvatarSelector
});

// редактирование профиля

const popupChangeProfile = new PopupWithForm(selectorProfilePopup, (fields) => {
     popupChangeProfile.renderLoading(true);
            api
                .postUserInfo(fields.login, fields.description)
                .then((data) => {
                    userInfoData.setUserInfo(data);
                    popupChangeProfile.close();
                })
                .catch(e => console.log(e))
                .finally(() => {
                    popupChangeProfile.renderLoading(false);
                })
    }
)
popupChangeProfile.setEventListeners();
buttonEditProfile.addEventListener("click", () => {
    const infoProfile = userInfoData.getUserInfo();
    nameProfilePopup.value = infoProfile.name;
    descriptionProfilePopup.value = infoProfile.about;
    popupChangeProfile.open();
});

// редактирование аватара

const popupChangeAvatar = new PopupWithForm(selectorAvatarPopup, (fields) => {
    popupChangeAvatar.renderLoading(true);
        api
            .postUserAvatar(fields[`link-avatar`])
            .then((data) => {
                userInfoData.setUserInfo(data);
                popupChangeAvatar.close();
            })
            .catch(e => console.log(e))
            .finally(() => {
                popupChangeAvatar.renderLoading(false);
            })
    }
)
popupChangeAvatar.setEventListeners();

imgButton.addEventListener("click", () => {
    popupChangeAvatar.open();
});

// создание новых карточек

const popupCreateCard = new PopupWithForm(selectorCardPopup, (fields) =>{
    popupCreateCard.renderLoading(true);
    api
        .postCard(fields.login, fields.link)
        .then((data) => {
            cardsList.renderItem(data);
            popupCreateCard.close();
        })
        .catch(e => console.log(e))
        .finally(() => {
            popupCreateCard.renderLoading(false);
        })

})

popupCreateCard.setEventListeners();
profileButton.addEventListener("click", () => {
    popupCreateCard.open();
});

// открытие попапа с картинкой

const popupWithImage = new PopupWithImage(selectorPopupsImg);
popupWithImage.setEventListeners();

// валидация

const profileFormValidator = new FormValidator(selectors,profilePopupForm);
const cardFormValidator = new FormValidator(selectors,cardPopupForm);
const avatarFormValidator = new FormValidator(selectors,avatarPopupForm);

profileFormValidator.enableValidation();
cardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

//связь с сервером
Promise.all([api.getUserInfo(), api.getCards()])
    .then(data => {
        const [profileInfo, cardsInfo] = data;
        userInfoData.setUserInfo(profileInfo);
        cardsList.renderItems(cardsInfo)
    })
    .catch(e => console.log(e));


