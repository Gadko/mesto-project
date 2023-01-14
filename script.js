const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupEditClose = document.querySelector('.popup__close-button_type_edit');
const popupForm = document.querySelector('.popup__form_type_edit');

const popupEditOpened = document.querySelector('.popup_type_edit');
const popupProfileOpened = document.querySelector('.popup_type_profile');

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

// Функция открытия попапа 
const openPopupButtons = document.querySelectorAll('.popup-open');
const closePopupButton = document.querySelectorAll('.popup__close-button');


function closePopup(popup) {
    popup.classList.remove('popup_opened');
}
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

profileButtonEdit.addEventListener('click', () => {
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


/* Изменение описания */

function changeData(event) {
    event.preventDefault();
    profileName.textContent = `${name.value}`;
    profileDescription.textContent = `${description.value}`;
    popupEditOpened.classList.remove('popup_opened');
}
popupForm.addEventListener('submit', changeData);

/* Добавление карточки */
const popupFormProfile = document.querySelector('.popup__form_type_profile');
const elements = document.querySelector('.elements');

function createCard (linkValue, titleValue) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const openPopupImg = cardElement.querySelector('.element__img');
    const popupImg = document.querySelector('.popup__img');
    const imgName = document.querySelector('.popup__img-text');

    cardElement.querySelector('.element__name').textContent = titleValue;
    openPopupImg.style.backgroundImage = `url(${linkValue})`;

    cardElement.querySelector('.element__button').addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__button_active');
    });
    cardElement.querySelector('.element__trash').addEventListener('click', (evt) => {
        evt.target.closest('.element').remove();
    });

    
    openPopupImg.addEventListener("click", () => {
    
        popupImg.src = linkValue;
        popupImg.alt = titleValue;
        imgName.textContent = titleValue;
        openPopup(popupsImg);
    });

    return(cardElement);
}

popupFormProfile.addEventListener('submit', function (evt) {
    evt.preventDefault(); 

    const card = createCard(link.value, title.value);

    elements.prepend(card);

    evt.target.reset();
    popupProfileOpened.classList.remove('popup_opened');
    
});

// Карточки через массив
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
      name: 'Джек Рассел',
      link: 'https://ferret-pet.ru/wp-content/uploads/5/d/8/5d89f4df1e931d002bd6be202220c93e.jpeg'
    }
    ];

    initialCards.forEach((element) => {

        const cardElement = createCard(element.link, element.name);
        elements.prepend(cardElement);
    });

