import Popup from "../components/Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._buttonConfirm = this._popup.querySelector('.popup__button-submit');
  }

  setSubmitHandler(callback) {
    this._handleSubmit = callback;
  }

  setButtonText(text) {
    this._buttonConfirm = text;
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonConfirm.addEventListener('click', (event) => {
      event.preventDefault();
      this.setButtonText('Удаление...');
      this._handleSubmit();
    });
  }
}