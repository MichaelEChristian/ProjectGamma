import React, { useState, useEffect } from 'react'
import { getUserProfile } from '../library/api'

function BasicInfosection({ name, value, type, onChange, immutable }) {
  return (
    <>
      <h2>{name}</h2>
      {immutable ? (
        <p>{value}</p>
      ) : (
        <input type={type} onChange={onChange} value={value}></input>
      )}
    </>
  )
}

function BasicInfo(profile) {
  return (
    <div>
      <h1>Basic Info</h1>
      <BasicInfosection
        name="Username"
        type="text"
        immutable={true}
        value={profile?.username}
      />
      <BasicInfosection name="Spouse" type="text" value={profile?.spouse} />
      <BasicInfosection name="Budget" type="number" value={profile?.budget} />
      <BasicInfosection name="State" type="text" value={profile?.state} />
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
