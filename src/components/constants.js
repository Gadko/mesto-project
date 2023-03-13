const buttonEditProfile = document.querySelector(".profile__button-edit");
const popupEditClose = document.querySelector(".popup__close-button_type_edit");
const profileForm = document.querySelector(".popup__form_type_edit");

const profilePopup = document.querySelector(".popup_type_edit");
const cardPopup = document.querySelector(".popup_type_profile");
const avatarPopup = document.querySelector('.popup_type_icon');
const imagePopup = document.querySelector(".popup_type_icon");

const profileButton = document.querySelector(".profile__button");
const buttonCloseProfile = document.querySelector(
  ".popup__close-button_type_button"
);

const buttonPopupSubmitProfile = document.querySelector('.popup__submit-button_type_profile');
const buttonPopupSubmitAvatar = document.querySelector('.popup__submit-button_type_avatar');

const closePopupImg = document.querySelector(".popup__close-button_type_img");
const popupsImg = document.querySelector(".popup_type_img");

const name = document.querySelector(".popup__field_type_name");
const description = document.querySelector(".popup__field_type_description");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const title = document.querySelector(".popup__field_type_title");
const link = document.querySelector(".popup__field_type_link");

const imgButton = document.querySelector(".profile__img-container");
const imgCloseButton = document.querySelector(".popup__close-button_type_icon");

const cardForm = document.querySelector(".popup__form_type_profile");
const elements = document.querySelector(".elements");

const popupImg = document.querySelector(".popup__img");
const imgName = document.querySelector(".popup__img-text");

const formOpenPopupAvatar = document.querySelector('.popup__form_type_profile-avatar');
const linkAvatar = document.querySelector('.popup__field_type_link-avatar');

const buttonSubmitPopupEdit = document.querySelector('.popup__submit-button_type_edit');

const profileImg = document.querySelector('.profile__img');

const cardsContainerSelector = '.elements';
const profileNameSelector = '.profile__name';
const profileDescriptionSelector = '.profile__description';



export {
  profileImg,
  buttonSubmitPopupEdit,
  buttonPopupSubmitAvatar,
  buttonPopupSubmitProfile,
  linkAvatar,
  formOpenPopupAvatar,
  imgName,
  popupImg,
  buttonEditProfile,
  name,
  description,
  profileName,
  profileDescription,
  profilePopup,
  cardPopup,
  popupsImg,
  imagePopup,
  popupEditClose,
  profileButton,
  buttonCloseProfile,
  closePopupImg,
  imgButton,
  imgCloseButton,
  profileForm,
  title,
  link,
  cardForm,
  elements,
  avatarPopup,
  cardsContainerSelector,
  profileNameSelector,
  profileDescriptionSelector
};
