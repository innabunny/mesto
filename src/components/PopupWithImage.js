import Popup from "../components/Popup.js";
export default class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = document.querySelector('.popup__image');
    this._popupImageCaption = document.querySelector('.popup__image-caption');
  }
  
  open(name, link) {
    super.open();
    this._popupImage.setAttribute('src', link);
    this._popupImage.setAttribute('alt', name);
    this._popupImageCaption.textContent = name;
  }
}