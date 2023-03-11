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

  getUser() {
    return fetch(`${this._data.baseUrl}/users/me`, {
        method: "GET",
        headers: this._data.headers
      })
        .then(res => this._checkError(res))
        .catch(e => console.log(e));
  }

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

    getCards() {
      return fetch(`${this._data.baseUrl}/cards`, {
          method: "GET",
          headers: this._data.headers
        })
          .then(res => this._checkError(res))
          .catch(e => console.log(e));
    }
      // Отправка каточек на сервер
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
   //Удаление кароточки
    deleteCard(cardID) {
      return fetch(`${this._data.baseUrl}/cards/${cardID}`, {
        method: "DELETE",
        headers: this._data.headers,
      })
          .then((res) => this._checkError(res))
          .catch(e => console.log(e));
    }
  
    //Снятие и постановка лайка
  
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




// const main = {
//     baseUrl: "https://nomoreparties.co/v1/plus-cohort-21",
//     headers: {
//       authorization: "71950263-dc45-46b9-9239-c7d806444496",
//       'Content-Type': 'application/json'
//     },
//   };



//   function checkError(res) {
//     if (res.ok) {
//       return res.json();
//     }
//     Promise.reject(`Ошибка: ${res.status}`);
//   }
//  // Связь с серветом
//   export function getUser() {
//     return fetch('https://nomoreparties.co/v1/plus-cohort-21/users/me', {
//         method: "GET",
//         headers: main.headers,
//       })
//         .then(res => checkError(res))
//         .catch(e => console.log(e));
//   }

//  // Изменение информации и аватарки профеля
//   export function postUserInfo(name, about) {
//     return fetch('https://nomoreparties.co/v1/plus-cohort-21/users/me', {
//       method: "PATCH",
//       headers: {
//             authorization: "71950263-dc45-46b9-9239-c7d806444496",
//             'Content-Type': 'application/json'
//     },
//       body: JSON.stringify({
//         name: name,
//         about: about,
//       }),
//     })
//         .then((res) => checkError(res))
//         .catch(e => console.log(e));
//   }

//   export function postUserAvatar(avatar) {
//     return fetch('https://nomoreparties.co/v1/plus-cohort-21/users/me/avatar', {
//       method: "PATCH",
//       headers: {
//             authorization: "71950263-dc45-46b9-9239-c7d806444496",
//             'Content-Type': 'application/json'
//     },
//       body: JSON.stringify({
//         avatar: avatar
//       }),
//     })
//         .then((res) => checkError(res))
//         .catch(e => console.log(e));
//   }
//     // Поулчение карточек с сервера 
//   export function getCards() {
//     return fetch('https://nomoreparties.co/v1/plus-cohort-21/cards', {
//         method: "GET",
//         headers: main.headers,
//       })
//         .then(res => checkError(res))
//         .catch(e => console.log(e));
//   }
//     // Отправка каточек на сервер
//   export function postCard(name, link) {
//     return fetch('https://nomoreparties.co/v1/plus-cohort-21/cards', {
//       method: "POST",
//       headers: {
//             authorization: "71950263-dc45-46b9-9239-c7d806444496",
//             'Content-Type': 'application/json'
//     },
//       body: JSON.stringify({
//         name: name,
//         link: link,
//       }),
//     })
//         .then((res) => checkError(res))
//         .catch(e => console.log(e));
//   }
//  //Удаление кароточки
//   export function deleteCard(cardID) {
//     return fetch(`https://nomoreparties.co/v1/plus-cohort-21/cards/${cardID}`, {
//       method: "DELETE",
//       headers: {
//             authorization: "71950263-dc45-46b9-9239-c7d806444496",
//             'Content-Type': 'application/json'
//     },
//     })
//         .then((res) => checkError(res))
//         .catch(e => console.log(e));
//   }

//   //Снятие и постановка лайка

//   export function putLikeElement(cardID) {
//     return fetch(`https://nomoreparties.co/v1/plus-cohort-21/cards/likes/${cardID}`, {
//       method: "PUT",
//       headers: main.headers,
//     }).then((res) => checkError(res))
//       .catch(e => console.log(e));
//   }
  
//   export function deleteLikeElement(cardID) {
//     return fetch(`https://nomoreparties.co/v1/plus-cohort-21/cards/likes/${cardID}`, {
//       method: "DELETE",
//       headers: main.headers,
//     }).then((res) => checkError(res))
//       .catch(e => console.log(e));
// }