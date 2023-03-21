export default class UserInfo {
  constructor({ profileName, profileDescription, profileAvatar }){
      this._profileName = document.querySelector(profileName);
      this._profileAbout = document.querySelector(profileDescription);
      this._profileAvatar = document.querySelector(profileAvatar);
  }
  // объект с данными пользователя
  getUserInfo(){
      return {
          id: this._id,
          name: this._profileName.textContent,
          about: this._profileAbout.textContent,
          avatar: this._profileAvatar.style.backgroundImage
      };
  }
  // новые данные пользователя
  setUserInfo({name,about,avatar,_id}){
      this._profileName.textContent = name;
      this._profileAbout.textContent = about;
      this._profileAvatar.style.backgroundImage = `url(${avatar})`;
      this.userId = _id;
  }
}
