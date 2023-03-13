import {buttonSubmitPopupEdit, description, name, profileDescription, profileName, profilePopup} from "./constants";
import {closePopup} from "./modal";
import {api} from "../index";

export default class UserInfo {
    constructor({ profileName, profileDescription }){
        this._profileName = document.querySelector(profileName);
        this._profileAbout = document.querySelector(profileDescription);
    }
    getUser(){
        return {
            name: this._profileName.textContent,
            about: this._profileAbout.textContent
        };

        // event.preventDefault();
        // buttonSubmitPopupEdit.textContent = 'Сохранение...';
        // api.postUserInfo(this._name, this._about)
        //     .then(() => {
        //         profileName.textContent = this._name;
        //         profileDescription.textContent = this._about
        //         closePopup(profilePopup);
        //     })
        //     .catch((err) => console.log(err))
            // .finally(() => {
            //     buttonSubmitPopupEdit.textContent = 'Сохранить';
            // });
    }
    setUserInfo({name,about}){
        this._profileName.textContent = name;
        this._profileAbout.textContent = about;
    }
}
