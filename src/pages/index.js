import "./index.css";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  validationConfig,
  buttonEditProfile,
  buttonAddCardProfile,
  formEditProfile,
  formAddCard,
  } from "../utils/constants.js";

const createCard = (item) => {
  const card = new Card({name: item.name, link: item.link}, '.element-card', handleCardClick).generateCard();
  return card;
}

const cardSection = new Section({
  renderer: (item) => {
    const cardElement = createCard(item);
    cardSection.addItem(cardElement);
    },
  }, '.elements');

cardSection.renderItems(initialCards);

const cardAddPopup = new PopupWithForm('.popup_type_card-add', (item) => {
  const newCard = createCard(item);
  cardSection.addItem(newCard);
  cardAddPopup.close();
  formAddValidator.disabledButton();
});

cardAddPopup.setEventListeners();

buttonAddCardProfile.addEventListener('click', function () {
  cardAddPopup.open();
});

const userProfile = new UserInfo({nameSelector: '.profile__name', aboutSelector: '.profile__about'});
const profileEditPopup = new PopupWithForm('.popup_type_profile', (data) => {
  userProfile.setUserInfo(data);
});

profileEditPopup.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
  profileEditPopup.setInputValues(userProfile.getUserInfo());
  profileEditPopup.open();
});

const popupFullImage = new PopupWithImage('.popup_type_image');
popupFullImage.setEventListeners();

function handleCardClick({name, link}) {
  popupFullImage.open(name, link);
}

const formEditValidator = new FormValidator(validationConfig, formEditProfile);
const formAddValidator = new FormValidator(validationConfig, formAddCard);

formEditValidator.enabledValidation();
formAddValidator.enabledValidation();