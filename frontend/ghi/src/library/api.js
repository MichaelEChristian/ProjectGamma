import { response } from "express"

const apiURL = 'http://localhost:8000'

export function signup({ username, password, email, firstname, lastname }) {
    return fetch(apiURL + '/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password, email, firstname, lastname })
    })
}

export function login_token({username, password}) {
    const token = fetch(apiURL + '/token', {
        method: 'POST',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        body: JSON.stringify({username: username, password: password})
    })

    console.log("username:", username, "password:", password, "token:", response)

    return token
}

export function validate_token(token) {
    const user_data = fetch(apiURL + '/token/validate', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({token})
    })

    console.log("user data:", user_data)

    return user_data
}
