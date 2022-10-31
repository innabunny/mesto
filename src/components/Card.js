export default class Card {
  constructor(data, userId, templateSelector, handleCardClick, handleDeleteCard, handleLike) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._likesCount = data.likes.length;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._isLiked = Boolean(data.likes.find((user) => user._id === userId));
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

  _setEventListeners() {
    if(this._ownerId !== this._userId) {
      this._buttonDelete.remove()
      this._buttonDelete = null;
    }
    if(this._buttonDelete) {
      this._buttonDelete.addEventListener('click', () => {
        this._handleDeleteCard(this._id);
      });
    }
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

  setLike(count) {
    this._buttonLike.classList.add('element__button-like_active');
    this._elementLikes.textContent = count;
    this._isLiked = true;
  }

  removeLike(count) {
    this._buttonLike.classList.remove('element__button-like_active');
    this._elementLikes.textContent = count;
    this._isLiked = false;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._buttonDelete = this._element.querySelector('.element__button-delete');
    this._elementImage = this._element.querySelector('.element__image');
    this._elementTitle = this._element.querySelector('.element__title');
    this._buttonDelete = this._element.querySelector('.element__button-delete');
    this._elementLikes = this._element.querySelector('.element__like-count');
    this._buttonLike = this._element.querySelector('.element__button-like');
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementTitle.textContent = this._name;
    this._elementLikes.textContent = this._likes.length;

    if(this._isLiked) {
      this.setLike(this._likesCount);
    }

    this._setEventListeners();
    return this._element;
  }

}