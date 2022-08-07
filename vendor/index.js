let editButton = document.querySelector('.profile__button-edit');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__button_type_close');
let inputName = popup.querySelector('.popup__input_type_name');
let inputAbout = popup.querySelector('.popup__input_type_about');
let submitButton = popup.querySelector('.popup__button_type_submit');


function openPopup() {
  popup.classList.add('popup_open');
}

function  closePopup() {
  popup.classList.remove('popup_open');
}

function clickEditCallback(){
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup();
}

function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup();
}

function clickOut(evt){
  if(evt.target.classList.contains('popup_open')){
    closePopup();
  }
}

editButton.addEventListener('click', clickEditCallback);
submitButton.addEventListener('click', formSubmitHandler);
popup.addEventListener('click', clickOut);
closeButton.addEventListener('click', closePopup);