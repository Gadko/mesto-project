const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupEditClose = document.querySelector('.popup__close-button_type_edit');
const popupForm = document.querySelector('.popup__form_type_edit');

const popupEditOpened = document.querySelector('.popup_type_edit');
const popupProfileOpened = document.querySelector('.popup_type_profile');
const popupImgOpened = document.querySelector('.popup_type_icon');

const profileButton = document.querySelector('.profile__button');
const popupButtonClose = document.querySelector('.popup__close-button_type_button');

const closePopupImg = document.querySelector('.popup__close-button_type_img');
const popupsImg = document.querySelector('.popup_type_img');

const name = document.querySelector('.popup__field_type_name');
const description = document.querySelector('.popup__field_type_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const title = document.querySelector('.popup__field_type_title');
const link = document.querySelector('.popup__field_type_link');

const imgButton = document.querySelector('.profile__img-container');
const imgCloseButton = document.querySelector('.popup__close-button_type_icon');

const popupFormProfile = document.querySelector('.popup__form_type_profile');
const elements = document.querySelector('.elements');  


export {
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
    popupForm,
    title,
    link,
    popupFormProfile,
    elements
}