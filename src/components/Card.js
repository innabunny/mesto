export default class Card {
  constructor({name, link}, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _clickButtonDeleteHandler() {
    this._element.remove();
    this._element = null;
  }

  _clickButtonLikeHandler() {
    this._buttonLike.classList.toggle('element__button-like_active');
  }

  _setEventListeners() {
    this._buttonLike = this._element.querySelector('.element__button-like');
    this._buttonDelete = this._element.querySelector('.element__button-delete');
    this._elementImage = this._element.querySelector('.element__image');

    this._buttonLike.addEventListener('click', () => {
      this._clickButtonLikeHandler();
    });
    this._buttonDelete.addEventListener('click', () => {
      this._clickButtonDeleteHandler();
    });

    this._elementImage.addEventListener('click', () => {
      this._handleCardClick({
        name: this._name,
        link: this._link
      });
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.element__image');
    this._elementTitle = this._element.querySelector('.element__title');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementTitle.textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}