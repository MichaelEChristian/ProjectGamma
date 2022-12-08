import { getAuthorizationToken } from './api'

export function isLoggedIn() {
  return Boolean(sessionStorage.Authorization)
}

export async function login(username, password) {
  const token = await getAuthorizationToken({ username, password })
  if (token.Authorization === undefined) {
    throw 'Invalid Credentials'
  }
  sessionStorage.setItem('Authorization', token.Authorization)
}

export function logout() {
  sessionStorage.removeItem('Authorization')
  window.location.href = '/login/'
}
