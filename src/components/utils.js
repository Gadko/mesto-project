import {
  profileName,
  profileDescription,
  name,
  description,
  popupEditOpened,
} from "./constants.js";
import { closePopup } from "./modal.js";

// изменение описания

export function changeData(event) {
  event.preventDefault();
  profileName.textContent = `${name.value}`;
  profileDescription.textContent = `${description.value}`;
  closePopup(popupEditOpened);
}
