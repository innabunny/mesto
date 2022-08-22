const elements = document.querySelector('.elements');
const elementCard = document.querySelector('#element-card');

const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const popups = document.querySelectorAll('.popup');
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('#popup-edit');
const closeButton = popup.querySelector('.popup__button-close');
const inputName = popup.querySelector('.popup__input_type_name');
const inputAbout = popup.querySelector('.popup__input_type_about');
const submitButton = popup.querySelector('.popup__button-submit');
const popupAdd = document.querySelector('#popup-add');
const popupAddForm = popupAdd.querySelector('.popup__form');
const popupAddName = popupAdd.querySelector('.popup__input_type_name');
const popupAddLink = popupAdd.querySelector('.popup__input_type_link');

const popupFullImage = document.querySelector('#popup-image');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');

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
  }
];


function createCard(item) {
  const cardElement = elementCard.content.cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  const elementTitle = cardElement.querySelector('.element__title');
  const buttonLike = cardElement.querySelector('.element__button-like');
  const buttonDelete = cardElement.querySelector('.element__button-delete');
  const elementImageCopy = cardElement.querySelector('.element__image');
  elementImage.src = item.link;
  elementImage.alt= item.name;
  elementTitle.textContent = item.name;
  buttonLike.addEventListener('click', (event) =>
    buttonLike.classList.toggle('element__button-like_active'));
  buttonDelete.addEventListener('click', (event) =>
    buttonDelete.closest('.element').remove());
  elementImageCopy.addEventListener('click', event => {
    popupImageFull(item);
  });

  return cardElement;
}

initialCards.forEach(item => {elements.prepend(createCard(item));});


function openPopup(popup) {
  popup.classList.add('popup_open');
}

function  closePopup(popup) {
  popup.classList.remove('popup_open');
}

function clickEditCallback(){
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(popupEdit);
}

function popupEditFormCallback(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupEdit);
}

function popupAddFormCallback(event) {
  event.preventDefault();
  const card = createCard({name: popupAddName.value, link: popupAddLink.value});
  event.target.reset();
  elements.prepend(card);
  closePopup(popupAdd);
}

function popupImageFull(item){
  event.preventDefault();
  popupImage.src = item.link;
  popupImage.alt = `${item.name}`;
  popupImageCaption.textContent = item.name;
  openPopup(popupFullImage);
}

Array.from(popups).forEach(popup => {
  popup.addEventListener('click', event => {
    if(event.target.classList.contains('popup') || event.target.classList.contains('popup__button-close')) popup.classList.remove('popup_open');
  })
});


addButton.addEventListener('click', () => openPopup(popupAdd));
editButton.addEventListener('click', clickEditCallback);
submitButton.addEventListener('click', popupEditFormCallback);
closeButton.addEventListener('click',() => closePopup(popup));
popupAddForm.addEventListener('submit', popupAddFormCallback);