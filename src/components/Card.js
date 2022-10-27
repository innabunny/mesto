export default class Card {
  constructor(data, templateSelector, handleCardClick, handleDeleteCard, handleLike) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._userId = data._userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLike = handleLike;
    this.removeCard = this.removeCard.bind(this);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  getLikesState() {
    return this._buttonLike.classList.contains('element__button-like_active');
  }

  setLikesCounter(value) {
    this._elementLikes.textContent = value;
  }

  _setEventListeners() {
    this._buttonDelete = this._element.querySelector('.element__button-delete');
    if(this._ownerId !== this._userId) {
      this._buttonDelete.remove()
      this._buttonDelete = null;
    }
    if(this._buttonDelete) {
      this._buttonDelete.addEventListener('click', () => {
        this._handleDeleteCard(this._id);
      });
    }
    this._buttonLike = this._element.querySelector('.element__button-like');
    this._buttonLike.addEventListener('click', () => {
      this._handleLike(this._id);
    });

    this._elementImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  likeToggle() {
    this._buttonLike.classList.toggle('element__button-like_active');
  }

  generateCard() {
    this._element = this._getTemplate();
    this._buttonDelete = this._element.querySelector('.element__button-delete');
    this._elementImage = this._element.querySelector('.element__image');
    this._elementTitle = this._element.querySelector('.element__title');
    this._elementLikes = this._element.querySelector('.element__like-count');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementTitle.textContent = this._name;
    this._elementLikes.textContent = this._likes.length;

    this._likes.forEach((like) => {
      if(like._id === this._userId) {
        this._elementLikes.classList.add('.element__button-like_active');
      }
    });

    this._setEventListeners();
    return this._element;
  }

}