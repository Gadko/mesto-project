const main = {
    baseUrl: "https://nomoreparties.co/v1/plus-cohort-21",
    headers: {
      authorization: "71950263-dc45-46b9-9239-c7d806444496"
    },
  };

  function checkError(res) {
    if (res.ok) {
      return res.json();
    }
    Promise.reject(`Ошибка: ${res.status}`);
  }

  export function userInfo() {
    fetch('https://nomoreparties.co/v1/plus-cohort-21/users/me', {
        method: "GET",
        headers: main.headers,
      })
        .then(res => checkError(res));
  }

  export function postUserInfo(name, about) {
    return fetch('https://nomoreparties.co/v1/plus-cohort-21/users/me', {
      method: "PATCH",
      headers: main.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
        .then((res) => checkError(res));
  }