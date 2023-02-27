import {
  profileName,
  profileDescription,
  name,
  description,
  profilePopup,
  avatarPopup,
  buttonOpenPopupAvatar,
  linkAvatar
} from "./constants.js";
import { closePopup } from "./modal.js";
import { postUserAvatar, postUserInfo, deleteCard } from "./API.js";
// изменение описания

export function changeData(event) {
  event.preventDefault();
  document.querySelector('.popup__submit-button_type_edit').textContent = 'Сохранение...';
  postUserInfo(name.value, description.value)
    .then(() => {
      profileName.textContent = `${name.value}`;
      profileDescription.textContent = `${description.value}`
      document.querySelector('.popup__submit-button_type_edit').textContent = 'Сохранить';
      closePopup(profilePopup);
    })
    .catch((err) => console.log(err));
}

export const changeAvatar = (linkValue) => {
  return postUserAvatar(linkValue)
    .then(() => {
      const avatar = document.querySelector('.profile__img')
      avatar.style.backgroundImage = `url(${linkValue})`
    })
    .catch(e => console.log(e))
}

