import React from 'react'
import { isLoggedIn } from '../library/auth'

function Dashboard() {
  return (
    <>
      <div>
        {isLoggedIn() ? (
          <p>You are now logged in</p>
        ) : (
          <div>
            <p>
              You are not logged in. Please click <a href="/login">here </a>
              to login
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default Dashboard
