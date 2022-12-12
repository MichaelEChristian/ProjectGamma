import React from 'react'
import { isLoggedIn } from '../library/auth'

function Dashboard() {
  return (
    <>
      <div className='profile-dash'>
        {isLoggedIn() ? (
          <p>You are now logged in</p>
        ) : (
          <div>
            <p>
              Goal: Display the profile information of the user who is logged in.
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default Dashboard
