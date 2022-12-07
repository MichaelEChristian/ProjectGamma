const apiURL = 'http://localhost:8000/api'

export function signup({ username, password, email, firstname, lastname }) {
  return fetch(apiURL + '/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, email, firstname, lastname }),
  })
}

export function getAuthorizationToken({ username, password }) {
  return fetch(apiURL + '/auth/signin', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then((response) => response.json())
}

export function getUserProfile() {
  return fetch(apiURL + '/profile', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: sessionStorage.getItem('Authorization'),
    },
  })
}
