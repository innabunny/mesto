export default class Card {
  constructor(data, templateSelector, openedFullImage) {
    this._title = data.title;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openedFullImage = openedFullImage;
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.elements')
      .cloneNode(true);
  }

  _openFullImageHandler() {
    this._openedFullImage(this._title, this._link);
  }

  _clickButtonDeleteHandler() {
    this._element.remove();

  }

  _clickButtonLikeHandler() {
    this._buttonLike.classList.toggle('element__button-like_active');
  }

  _setEventListeners() {
    this._buttonLike = this._element.querySelector('.element__button-like');
    this._buttonDelete = this._element.querySelector('.element__button-delete');
    this._elementImageFull = this._element.querySelector('.element__image');

    this._buttonLike.addEventListener('click', () => {
      this._clickButtonLikeHandler();
    });
    this._buttonDelete.addEventListener('click', () => {
      this._clickButtonDeleteHandler();
    });

    this._elementImageFull.addEventListener('click', () => {
      this._openFullImageHandler();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.element__image');
    this._elementTitle = this._element.querySelector('.element__title');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._title;
    this._elementTitle.textContent = this._title;

    this._setEventListeners();

    return this._element;
  }

}