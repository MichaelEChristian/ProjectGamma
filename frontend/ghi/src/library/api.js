const apiURL = 'http://localhost:8000/api'

export function signup({ username, password, email, firstname, lastname }) {
  return fetch(apiURL + '/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, email, firstname, lastname }),
  })
}

export function getAuthorizationToken({ username, password }) {
  return fetch(apiURL + '/token', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then((response) => response.json())
}
