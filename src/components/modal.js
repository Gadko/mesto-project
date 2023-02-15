export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", closeEscape);
    popup.removeEventListener("click", closeOverlay);
}

export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener("keydown", closeEscape);
    popup.addEventListener("click", closeOverlay);
}

export const closeEscape = (evt) => {
    if (evt.key === "Escape") {
      const escPopup = document.querySelector(".popup_opened");
      closePopup(escPopup);
    }
  }

export const closeOverlay = (evt) => {
    if (evt.target.classList.contains("popup__overlay")) {
        closePopup(evt.currentTarget);
    }
    }


