export default class UserInfo {
  constructor({nameSelector, aboutSelector, avatarSelector}) {
    this._profileName = document.querySelector(nameSelector);
    this._profileAbout = document.querySelector(aboutSelector);
    this._profileAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
   const userValues ={ name: this._profileName.textContent, about: this._profileAbout.textContent};
   return userValues;
    }

  setUserInfo({name, about, avatar, _id}) {
    this._profileName.textContent = name;
    this._profileAbout.textContent = about;
    this._userId = _id;
    if(avatar) {
      // this._profileAvatar.src = avatar;
      this.updateAvatar({avatar});
    }
  }

  updateAvatar({avatar}) {
  this._profileAvatar.src = avatar;
  }

  getUserId() {
    return this._userId;
  }
}