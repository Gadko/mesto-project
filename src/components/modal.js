export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEscape);
  popup.removeEventListener("mousedown", closeOverlay);
}

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEscape);
  popup.addEventListener("mousedown", closeOverlay);
}

export const closeEscape = (evt) => {
  if (evt.key === "Escape") {
    const escPopup = document.querySelector(".popup_opened");
    closePopup(escPopup);
  }
};

export const closeOverlay = (evt) => {
  if (evt.target.classList.contains("popup__overlay")) {
    closePopup(evt.currentTarget);
  }
};
