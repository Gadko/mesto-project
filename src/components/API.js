export default class Api {
  constructor(data) {
    this._data = data;
  }

  _checkError(res) {
    if (res.ok) {
      return res.json();
    }
    Promise.reject(`Ошибка: ${res.status}`);
  }

  // получение данных пользователя с сервера
  getUserInfo() {
    return fetch(`${this._data.baseUrl}/users/me`, {
        method: "GET",
        headers: this._data.headers
      })
        .then(res => this._checkError(res))
        .catch(e => console.log(e));
  }

  // изменение информации и аватарки профиля пользователя
  postUserInfo(name, about) {
    return fetch(`${this._data.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._data.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
        .then((res) => this._checkError(res))
        .catch(e => console.log(e));
  }

  postUserAvatar(avatar) {
    return fetch(`${this._data.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._data.headers,
      body: JSON.stringify({
        avatar: avatar
      }),
    })
    .then((res) => this._checkError(res))
    .catch(e => console.log(e));
  }
  // получение карточек с сервера
    getCards() {
      return fetch(`${this._data.baseUrl}/cards`, {
          method: "GET",
          headers: this._data.headers
        })
          .then(res => this._checkError(res))
          .catch(e => console.log(e));
    }
    // отправка каточек на сервер
    postCard(name, link) {
      return fetch(`${this._data.baseUrl}/cards`, {
        method: "POST",
        headers: this._data.headers,
        body: JSON.stringify({
          name: name,
          link: link,
        }),
      })
          .then((res) => this._checkError(res))
          .catch(e => console.log(e));
    }
   // удаление карточки
    deleteCard(cardID) {
      return fetch(`${this._data.baseUrl}/cards/${cardID}`, {
        method: "DELETE",
        headers: this._data.headers,
      })
          .then((res) => this._checkError(res))
          .catch(e => console.log(e));
    }
  
    // снятие и постановка лайка
  
    putLikeElement(cardID) {
      return fetch(`${this._data.baseUrl}/cards/likes/${cardID}`, {
        method: "PUT",
        headers: this._data.headers,
      }).then((res) => this._checkError(res))
        .catch(e => console.log(e));
    }
    
    deleteLikeElement(cardID) {
      return fetch(`${this._data.baseUrl}/cards/likes/${cardID}`, {
        method: "DELETE",
        headers: this._data.headers,
      }).then((res) => this._checkError(res))
        .catch(e => console.log(e));
  }

}