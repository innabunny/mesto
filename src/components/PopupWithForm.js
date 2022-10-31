import Popup from "../components/Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmitForm) {
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._buttonSubmit = this._popup.querySelector('.popup__button-submit');
    this._inputsList = [...this._popup.querySelectorAll('.popup__input')];
    this._buttonSubmiText = this._buttonSubmit.textContent;
  }

  _getInputValues() {
    return this._inputsList.reduce((values, input) => {
      values[input.name] = input.value;
      return values;
    }, {});
  }

  setInputValues(data) {
    Object.keys(data).forEach(key => {
      const setInputs = this._inputsList.find(item => item.name === key);
      setInputs.value = data[key];
    })
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    });
  }

  renderLoading(isLoading, loadingText = 'Сохранение...') {
    if(isLoading) {
      this._buttonSubmit.textContent = loadingText;
    } else {
      this._buttonSubmit.textContent = this._buttonSubmiText;
    }
  }
}