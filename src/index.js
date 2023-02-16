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
    profileCloseButton,
    closePopupImg,
    imgButton,
    imgCloseButton,
    cardForm,
    elements,
    link,
    title,
    profileForm
} from './components/constants.js';

import {
    closePopup,
    openPopup,
} from './components/modal.js';

import {changeData} from './components/utils.js';
import {createCard} from './components/card.js';
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
profileCloseButton.addEventListener('click', () => {
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
cardForm.addEventListener('submit', function (evt) {
    evt.preventDefault(); 

    const card = createCard(link.value, title.value);

    elements.prepend(card);

    evt.target.reset();
    closePopup(popupProfileOpened);
    
});




profileForm.addEventListener('submit', changeData);


// валидация
enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'button_inactive',
    inputErrorClass: 'popup__field_type_error',
    errorClass: 'popup__field-error_active'
  }); 