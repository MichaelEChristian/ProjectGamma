const apiURL = `${process.env.REACT_APP_API_HOST}/api`

export async function signup({
  username,
  password,
  email,
  firstname,
  lastname,
}) {
  const response = await fetch(apiURL + '/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, email, firstname, lastname }),
  })
  if (response.status !== 200) throw new Error('Invalid Credentials')
  return response
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
  return fetch(apiURL + '/user/profile', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: sessionStorage.getItem('Authorization'),
    },
  }).then((response) => response.json())
}

export function updateUserProfile({ id, username, spouse, budget, state }) {
  fetch(apiURL + '/user/profile', {
    method: 'PUT',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: sessionStorage.getItem('Authorization'),
    },
    body: JSON.stringify({ id, username, spouse, budget, state }),
  })
}

export async function getDestinations(selectedState) {
  const yelpResponse = await fetch(
    `${apiURL}/destination/?selctedStates=${selectedState}`
  )
  if (yelpResponse.ok) return await yelpResponse.json()
}

export async function getFoodItems(selectedCuisines) {
  const foodNameResponse = await fetch(
    `${apiURL}/menu/all/?selectedCuisines=${selectedCuisines.join(',')}`
  )
  if (foodNameResponse.ok) {
    const json = await foodNameResponse.json()
    return json.results
  }
}
