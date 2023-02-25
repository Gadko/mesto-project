const main = {
    baseUrl: "https://nomoreparties.co/v1/plus-cohort-21",
    headers: {
      authorization: "71950263-dc45-46b9-9239-c7d806444496",
      'Content-Type': 'application/json'
    },
  };



  function checkError(res) {
    if (res.ok) {
      return res.json();
    }
    Promise.reject(`Ошибка: ${res.status}`);
  }
 // Связь с серветом
  export function userInfo() {
    return fetch('https://nomoreparties.co/v1/plus-cohort-21/users/me', {
        method: "GET",
        headers: main.headers,
      })
        .then(res => checkError(res));
  }
 // Изменение информации и аватарки профеля
  export function postUserInfo(name, about) {
    return fetch('https://nomoreparties.co/v1/plus-cohort-21/users/me', {
      method: "PATCH",
      headers: {
            authorization: "71950263-dc45-46b9-9239-c7d806444496",
            'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
        .then((res) => checkError(res));
  }

  export function postUserAvatar(avatar) {
    return fetch('https://nomoreparties.co/v1/plus-cohort-21/users/me/avatar', {
      method: "PATCH",
      headers: {
            authorization: "71950263-dc45-46b9-9239-c7d806444496",
            'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        avatar: avatar
      }),
    })
        .then((res) => checkError(res));
  }
    // Поулчение карточек с сервера 
  export function Cards() {
    return fetch('https://nomoreparties.co/v1/plus-cohort-21/cards', {
        method: "GET",
        headers: main.headers,
      })
        .then(res => checkError(res));
  }
    // Отправка каточек на сервер
  export function postCard(name, link) {
    return fetch('https://nomoreparties.co/v1/plus-cohort-21/cards', {
      method: "POST",
      headers: {
            authorization: "71950263-dc45-46b9-9239-c7d806444496",
            'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
        .then((res) => checkError(res));
  }
 //Удаление кароточки
  export function deleteCard(cardID) {
    return fetch(`https://nomoreparties.co/v1/plus-cohort-21/cards/${cardID}`, {
      method: "DELETE",
      headers: {
            authorization: "71950263-dc45-46b9-9239-c7d806444496",
            'Content-Type': 'application/json'
    },
    })
        .then((res) => checkError(res));
  }

  //Снятие и постановка лайка

  export function putLikeElement(cardID) {
    return fetch(`https://nomoreparties.co/v1/plus-cohort-21/cards/likes/${cardID}`, {
      method: "PUT",
      headers: main.headers,
    }).then((res) => checkError(res));
  }
  
  export function deleteLikeElement(cardID) {
    return fetch(`https://nomoreparties.co/v1/plus-cohort-21/cards/likes/${cardID}`, {
      method: "DELETE",
      headers: main.headers,
    }).then((res) => checkError(res));
}