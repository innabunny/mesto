import "./index.css";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  apiConfig,
  buttonAddCard,
  buttonAvatarEdit,
  buttonEditProfile,
  formAddCard,
  formChangeAvatar,
  formEditProfile,
  inputAbout,
  inputName,
  validationConfig,
} from "../utils/constants.js";

const api = new Api({url: apiConfig.baseUrl,
  headers: {
    authorization: apiConfig.headers,
    "Content-Type": "application/json",
  },
});

function createCard(cardData) {
  const card = new Card(cardData, userProfile.getUserId(),'.element-card',
    () => {
      popupFullImage.open(cardData);
    },
    (cardId) => {
      popupDeleteCard.open();
      popupDeleteCard.setSubmitHandler(() => {
        api.deleteCard(cardId)
          .then((res) => {
            card.removeCard();
            popupDeleteCard.close();
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            popupDeleteCard.setButtonText('Да');
          });
      });
    },
    (cardId) => {
      if (card.getLikesState()) {
        api.deleteLike(cardId)
          .then((res) => {
            card.removeLike(res.likes.length);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        api.putLike(cardId)
          .then((res) => {
            card.setLike(res.likes.length);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  );

  return card.generateCard();
}

const popupFullImage = new PopupWithImage('.popup_type_image');
popupFullImage.setEventListeners();

const popupDeleteCard =  new PopupWithConfirm('.popup_type_delete');
popupDeleteCard.setEventListeners();

const userProfile = new UserInfo(
  {nameSelector: '.profile__name', aboutSelector: '.profile__about', avatarSelector: '.profile__image'});

const popupChangeAvatar = new PopupWithForm('.popup_type_avatar',
  (data) => {
  popupChangeAvatar.renderLoading(true);
  api.changeAvatar(data.link)
    .then((res) => {
      userProfile.updateAvatar(res);
    })
    .then(() => {popupChangeAvatar.close();})
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupChangeAvatar.renderLoading(false);
    });
  });

popupChangeAvatar.setEventListeners();

const popupEditProfile = new PopupWithForm('.popup_type_profile', (data) => {
  popupEditProfile.renderLoading(true);
  api.editUserInfo(data)
    .then(() => {
      userProfile.setUserInfo(data);
    })
    .then(() => { popupEditProfile.close();})
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.renderLoading(false);
    });
});

popupEditProfile.setEventListeners();

buttonAvatarEdit.addEventListener('click', () => {
  formAvatarValidator.resetValidation();
  popupChangeAvatar.open();
});

buttonEditProfile.addEventListener('click', (event) => {
  formEditValidator.resetValidation();
  popupEditProfile.setInputValues(userProfile.getUserInfo());
  popupEditProfile.open();
})

const popupAddNewCard = new PopupWithForm('.popup_type_card-add', (data) => {
  popupAddNewCard.renderLoading(true);
  api.addCard(data)
    .then((res) => {
      const cardElement = createCard(res, userProfile.getUserId());
      cardList.prependItem(cardElement);
    })
    .then(() => {popupAddNewCard.close();})
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAddNewCard.renderLoading(false);
    });
});

popupAddNewCard.setEventListeners();

buttonAddCard.addEventListener('click', () => {
  formAddValidator.resetValidation();
  popupAddNewCard.open();
})

const formEditValidator = new FormValidator(validationConfig, formEditProfile);
const formAddValidator = new FormValidator(validationConfig, formAddCard);
const formAvatarValidator = new FormValidator(validationConfig, formChangeAvatar);

formEditValidator.enabledValidation();
formAddValidator.enabledValidation();
formAvatarValidator.enabledValidation();

let cardList;
Promise.all([
  api.getUserData(),
  api.getCards()
])
.then((data) => {
  const [userData, initialCards] = data;
  userProfile.setUserInfo(userData);

  cardList = new Section((item) => {
    const cardElement = createCard(item, userProfile.getUserId());
    cardList.appendItem(cardElement)
  }, '.elements');
  cardList.renderItems(initialCards);
})
.catch((err) => {
  console.log(err);
});
