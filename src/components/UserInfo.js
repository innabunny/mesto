export default class UserInfo {
  constructor({nameSelector, aboutSelector}) {
    this._profileName = document.querySelector(nameSelector);
    this._profileAbout = document.querySelector(aboutSelector);
    this._profileAvatar = document.querySelector('.profile__image');
  }

  getUserInfo() {
   const userValues ={ name: this._profileName.textContent, about: this._profileAbout.textContent};
   return userValues;
    }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileAbout.textContent = data.about;
    this.userId = data._id;
    if(data.avatar) {
      this._profileAvatar.src = data.avatar;
    }
  }

  updateAvatar(data) {
  this._profileAvatar.src = data.avatar;
  }
}