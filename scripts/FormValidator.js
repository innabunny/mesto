export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._config.errorClassActive);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._config.errorClassActive);
  }

  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    })
  }

  _toggleButtonState() {
    if(this._hasInvalidInput()){
      this._disabledButton();
    } else {
      this._activeButton();
    }
  }

  _hasInvalidInput(inputs) {
    return inputs.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _disabledButton () {
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _activeButton() {
    this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }


  _checkInputValidity(inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  enabledValidation() {
    this._setEventListeners();
  }

}