import Popup from "../components/Popup.js";
export default class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = document.querySelector('.popup__image');
    this._popupImageCaption = document.querySelector('.popup__image-caption');
  }
  
  open(item) {
    super.open();
    this._popupImage.src = item.link;
    this._popupImage.alt = item.name;
    this._popupImageCaption.textContent = item.name;
  }
}