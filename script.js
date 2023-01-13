const profileButtonEdit = document.querySelector('.profile__button-edit');
const popupEditOpened = document.querySelector('.popup_type_edit');
const popupEditClose = document.querySelector('.popup__close-button_type_edit');
const popupForm = document.querySelector('.popup__form_type_edit');

const popupProfileOpened = document.querySelector('.popup_type_profile')
const profileButton = document.querySelector('.profile__button')
const popupButtonClose = document.querySelector('.popup__close-button_type_button')

// Функция открытия попапа 

let popups = document.querySelectorAll('.popup');
let openPopupButtons = document.querySelectorAll('.popup-open');
let closePopupButton = document.querySelectorAll('.popup__close-button');
const popupsMap = { 
    'button-edit': 0, 
    'button-profile': 1,
    'button-close': 2};
let currentPopup

openPopupButtons.forEach(function (button){
    button.addEventListener('click', function(e) {
        e.preventDefault();
        if(popupsMap[button.name] === undefined) {
            throw new Error("Нет идентификатора для кнопки")
            }
        currentPopup = popupsMap[button.name];
        if(popups[currentPopup] === undefined) {
            throw new Error("Тут нет попапа для кнопки")
            }
        popups[currentPopup].classList.add('popup_opened');
    })
});

closePopupButton.forEach(function (button){
    button.addEventListener('click', function(e) {
        e.preventDefault();
        if(popups[currentPopup] === undefined) {
            throw new Error("Попап не открыт")
            }
        popups[currentPopup].classList.remove('popup_opened');
    })
});





/* Изменение описания */

function changeData(event) {
    event.preventDefault();
    let name = document.querySelector('.popup__field_type_name');
    let description = document.querySelector('.popup__field_type_description');
    let profileName = document.querySelector('.profile__name');
    let profileDescription = document.querySelector('.profile__description');
    profileName.textContent = `${name.value}`;
    profileDescription.textContent = `${description.value}`;
    popupEditOpened.classList.remove('popup_opened');
}
popupForm.addEventListener('submit', changeData);

/* Добавление карточки */
const popupFormProfile = document.querySelector('.popup__form_type_profile')
const elements = document.querySelector('.elements');

function createCard (linkValue, titleValue) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

    cardElement.querySelector('.element__name').textContent = titleValue;
    cardElement.querySelector('.element__img').style.backgroundImage = `url(${linkValue})`;

    cardElement.querySelector('.element__button').addEventListener('click', (evt) => {
        evt.target.classList.toggle('element__button_active');
    });
    cardElement.querySelector('.element__trash').addEventListener('click', (evt) =>{
        evt.target.closest('.element').remove();
    });


    return(cardElement);
}


popupFormProfile.addEventListener('submit', function (evt){
    evt.preventDefault(); 
    title = document.querySelector('.popup__field_type_title');
    link = document.querySelector('.popup__field_type_link');

    const card = createCard(link.value ,title.value);

    addPopup(card)
    elements.prepend(card);

    title.value='';
    link.value='';
    popupProfileOpened.classList.remove('popup_opened');
    
});

function addPopup(cardElement){
    const openPopupImg = cardElement.querySelector('.element__img');
    const popupsImg = document.querySelector('.popup_type_img');

    let imgSrc;

    openPopupImg.addEventListener("click", (e) => {
        imgSrc = e.target.style.backgroundImage;
        imgSrc = imgSrc.substring(5, imgSrc.length-2);
        popupsImg.classList.add('popup_opened');

        document.querySelector('.popup__img').src = imgSrc;
        const imgName = cardElement.querySelector('.element__name').textContent
        document.querySelector('.popup__img-text').textContent = imgName;
        currentPopup = 2;
    });
}

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

        const cardElement = createCard(element.link, element.name)
        addPopup(cardElement);
        elements.prepend(cardElement);
    });

