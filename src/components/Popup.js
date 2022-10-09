export default class Popup{
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_open');
    document.addEventListener('keydown', this._handleKeypressEsc);
  }

  close() {
    this._popup.classList.remove('popup_open');
    document.removeEventListener('keydown', this._handleKeypressEsc);
  }

  _handleKeypressEsc = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')) {
        this.close();
      }
    });
  }
}