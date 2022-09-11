const elements = document.querySelector('.elements');
const elementCard = document.querySelector('#element-card');

const buttonEditProfile = document.querySelector('.profile__button-edit');
const buttonAddCardProfile = document.querySelector('.profile__button-add');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const popupEditForm = document.querySelector('.popup__form');

const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_type_profile');
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_about');
const popupAddCard = document.querySelector('.popup_type_card-add');
const popupAddForm = popupAddCard.querySelector('.popup__form');
const popupAddName = popupAddCard.querySelector('.popup__input_type_name');
const popupAddLink = popupAddCard.querySelector('.popup__input_type_link');

const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');


function createCard({name, link}) {
  const cardElement = elementCard.content.cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  const elementTitle = cardElement.querySelector('.element__title');
  const buttonLike = cardElement.querySelector('.element__button-like');
  const buttonDelete = cardElement.querySelector('.element__button-delete');
  const elementImageCopy = cardElement.querySelector('.element__image');
  elementImage.src = link;
  elementImage.alt= name;
  elementTitle.textContent = name;
  buttonLike.addEventListener('click', (event) =>
    buttonLike.classList.toggle('element__button-like_active'));
  buttonDelete.addEventListener('click', (event) =>
    buttonDelete.closest('.element').remove());
  elementImageCopy.addEventListener('click', event => {
    openFullImage({name, link});
  });

  return cardElement;
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
  const buttonSubmit = event.target.querySelector('.popup__button-submit');
  console.log(buttonSubmit);
  event.target.reset();
  elements.prepend(card);
  setButtonDisabled(buttonSubmit, validationConfig);
  closePopup(popupAddCard);
}

function openFullImage(item){
  event.preventDefault();
  popupImage.src = item.link;
  popupImage.alt = `${item.name}`;
  popupImageCaption.textContent = item.name;
  openPopup(popupTypeImage);
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