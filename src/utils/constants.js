const dataInfo = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-21',
  headers: {
    authorization: '71950263-dc45-46b9-9239-c7d806444496',
    'Content-Type': 'application/json'
  }
}
const selectors = {
  formSelector: ".popup__form",
  inputSelector: ".popup__field",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__field-error_active",
}

const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_profile");
const avatarPopup = document.querySelector('.popup_type_icon');
const selectorProfilePopup = ".popup_type_edit";
const selectorCardPopup = ".popup_type_profile";
const selectorAvatarPopup = '.popup_type_icon';
const selectorPopupsImg = ".popup_type_img";

const profilePopupForm = profilePopup.querySelector(selectors.formSelector);
const cardPopupForm = cardPopup.querySelector(selectors.formSelector);
const avatarPopupForm = avatarPopup.querySelector(selectors.formSelector);

const cardsContainerSelector = '.elements';
const cardTemplateSelector = '#card-template';
const profileNameSelector = '.profile__name';
const profileDescriptionSelector = '.profile__description';
const profileLinkAvatarSelector = '.profile__img';
const buttonEditProfile = document.querySelector(".profile__button-edit");
const profileButton = document.querySelector(".profile__button");

const nameProfilePopup = profilePopup.querySelector(".popup__field_type_name");
const descriptionProfilePopup = profilePopup.querySelector(".popup__field_type_description");
const linkCardPopup = cardPopup.querySelector(".popup__field_type_link-card");
const titleCardPopup  = cardPopup.querySelector(".popup__field_type_title");
const linkAvatarPopup  = avatarPopup.querySelector(".popup__field_type_link");
const imgButton = document.querySelector(".profile__img-container");

export {
  buttonEditProfile,
  nameProfilePopup,
  descriptionProfilePopup,
  profilePopup,
  cardPopup,
  profileButton,
  imgButton,
  titleCardPopup,
  linkAvatarPopup,
  avatarPopup,
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
};
