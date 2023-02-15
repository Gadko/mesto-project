import '../pages/index.css';


import{
    profileButtonEdit,
    name,
    description,
    profileName,
    profileDescription,
    popupEditOpened,
    popupProfileOpened,
    popupsImg,
    popupImgOpened,
    popupEditClose,
    profileButton,
    popupButtonClose,
    closePopupImg,
    imgButton,
    imgCloseButton,
    popupFormProfile,
    elements,
    link,
    title,
    popupForm
} from './components/utils.js';

import {
    closePopup,
    openPopup,
} from './components/modal.js';

import {createCard, changeData} from './components/card.js';
import { enableValidation } from './components/validate.js';


// Модальные окна
profileButtonEdit.addEventListener('click', () => {
    name.value = profileName.textContent;
    description.value = profileDescription.textContent;
    openPopup(popupEditOpened);
});
popupEditClose.addEventListener('click', () => {
    closePopup(popupEditOpened);
});



profileButton.addEventListener('click', () => {
    openPopup(popupProfileOpened);
});
popupButtonClose.addEventListener('click', () => {
    closePopup(popupProfileOpened);
});

closePopupImg.addEventListener('click', () => {
    closePopup(popupsImg);
});



imgButton.addEventListener('click', () => {
    openPopup(popupImgOpened);
})
imgCloseButton.addEventListener('click', () => {
    closePopup(popupImgOpened);
})





// Карточки
popupFormProfile.addEventListener('submit', function (evt) {
    evt.preventDefault(); 

    const card = createCard(link.value, title.value);

    elements.prepend(card);

    evt.target.reset();
    closePopup(popupProfileOpened);
    
});




popupForm.addEventListener('submit', changeData);


// валидация
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'button_inactive',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__field-error_active'
  }); 