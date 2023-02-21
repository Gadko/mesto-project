import {
  profileName,
  profileDescription,
  name,
  description,
  profilePopup,
  avatarPopup,
  addFormAvatar,
  linkAvatar
} from "./constants.js";
import { closePopup } from "./modal.js";
import { serInfo, postUserInfo } from "./API.js";
// изменение описания

export function changeData(event) {
  event.preventDefault();

  postUserInfo(name.value, description.value)
    .then(() => {
      profileName.textContent = `${name.value}`;
      profileDescription.textContent = `${description.value}`
      closePopup(profilePopup);
    })
    .catch((err) => console.log(err));

  //profileName.textContent = `${name.value}`;
  //profileDescription.textContent = `${description.value}`;
  //closePopup(profilePopup);
}

export const changeAvatar = (linkValue) => {
  const avatar = document.querySelector('.profile__img');
  avatar.style.backgroundImage = `url(${linkValue})`;
}


