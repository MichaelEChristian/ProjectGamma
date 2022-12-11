import React, { useState, useEffect } from 'react'
import { isLoggedIn } from '../library/auth'
import { getUserProfile } from '../library/api'

function BasicInfosection({ name, value }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{value || 'You must be logged in'}</p>
    </>
  )
}

function BasicInfo(profile) {
  return (
    <div>
      <h1>Basic Info</h1>
      <BasicInfosection name="Username" value={profile?.username} />
      <BasicInfosection name="Spouse" value={profile?.spouse} />
      <BasicInfosection name="Budget" value={profile?.budget} />
      <BasicInfosection name="State" value={profile?.state} />
    </div>
  )
}

function Dashboard() {
  const [profile, setProfile] = useState()

  useEffect(() => {
    getUserProfile().then((result) => setProfile(result))
  }, [])

  return (
    <div className="profile-dash">
      <BasicInfo {...profile} />
    </div>
  )
}

export default Dashboard
