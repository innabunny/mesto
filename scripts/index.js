import {initialCards} from "scripts/initialCards.js";
import {Card} from "../scripts/Card.js";
import {FormValidator} from "../scripts/FormValidator.js";

const elements = document.querySelector('.elements');

const buttonEditProfile = document.querySelector('.profile__button-edit');
const buttonAddCardProfile = document.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const popups = document.querySelectorAll('.popup');
const popupEditForm = document.querySelector('.popup__form_type_edit');
const popupEdit = document.querySelector('.popup_type_profile');
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');
const popupAddCard = document.querySelector('.popup_type_card-add');
const popupAddForm = popupAddCard.querySelector('.popup__form_type_add');
const popupAddName = popupAddCard.querySelector('.popup__input_type_name');
const popupAddLink = popupAddCard.querySelector('.popup__input_type_link');

const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error',
  errorClassActive: 'popup__input-error_active',
}

const formEditValidator = new FormValidator(validationConfig, popupEditForm);
const formAddValidator = new FormValidator(validationConfig, popupAddForm);

formEditValidator.enabledValidation();
formAddValidator.enabledValidation();

function openFullImage (name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  popupImageCaption.textContent = name;
  openPopup(popupTypeImage);
}

function createCard(item) {
  return new Card(item, '.element-card', openFullImage).generateCard();
}

initialCards.forEach(item => {elements.prepend(createCard(item));});

function openPopup(popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', handleKeypressEsc);
}

function  closePopup(popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown', handleKeypressEsc);

}

function editProfileForm(){
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(popupEdit);
}

function callbackEditProfileForm(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupEdit);
}

function callbackPopupAddCard(event) {
  event.preventDefault();
  const card = createCard({name: popupAddName.value, link: popupAddLink.value});
  event.target.reset();
  elements.prepend(card);
  formAddValidator.disabledButton();
  closePopup(popupAddCard);
}

function handleKeypressEsc (event)  {
  if(event.key === 'Escape') {
    const activePopup = document.querySelector('.popup_open');
    closePopup(activePopup);
  }
}

Array.from(popups).forEach(popup => {
  popup.addEventListener('click', event => {
    if(event.target.classList.contains('popup') || event.target.classList.contains('popup__button-close'))
      closePopup(popup);
  })
});

buttonAddCardProfile.addEventListener('click', () => openPopup(popupAddCard));
buttonEditProfile.addEventListener('click', editProfileForm);
popupEditForm.addEventListener('submit', callbackEditProfileForm);
popupAddForm.addEventListener('submit', callbackPopupAddCard);