import Popup from "../components/Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputsList = [...this._popup.querySelectorAll('.popup__input')];
  }

  _getInputValues() {
    return this._inputsList.reduce((values, input) => {
      values[input.name] = input.value;
      return values;
    }, {});
  }

  setInputValues(data) {
    this._inputsList.forEach((input) => {
        input.value = data[input.name]
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      this.close();
    });
  }
}