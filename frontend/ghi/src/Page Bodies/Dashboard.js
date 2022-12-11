import React, { useState, useEffect } from 'react'
import { getUserProfile, updateUserProfile } from '../library/api'

function BasicInfoSection({ name, value, type, onChange, immutable }) {
  return (
    <>
      <h2>{name}</h2>
      {immutable ? (
        <p>{value}</p>
      ) : (
        <input type={type} onChange={onChange} value={value || ''}></input>
      )}
    </>
  )
}

function Dashboard() {
  const [id, setId] = useState()
  const [username, setUsername] = useState()
  const [spouse, setSpouse] = useState()
  const [budget, setBudget] = useState()
  const [state, setState] = useState()

  useEffect(() => {
    getUserProfile().then((result) => {
      setId(result.id)
      setUsername(result.username)
      setSpouse(result.spouse)
      setBudget(result.budget)
      setState(result.state)
      console.log(result)
    })
  }, [])

  return (
    <div className="profile-dash">
      <h1>Profile Information</h1>
      <BasicInfoSection
        name="Username"
        type="text"
        immutable={true}
        value={username}
      />
      <BasicInfoSection
        name="Spouse"
        type="text"
        value={spouse}
        onChange={(e) => setSpouse(e.target.value)}
      />
      <BasicInfoSection
        name="Budget"
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <BasicInfoSection
        name="State"
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <div>
        <button
          onClick={(e) =>
            updateUserProfile({ id, username, spouse, budget, state })
          }
        >
          Save
        </button>
      </div>
    </div>
  )
}

export default Dashboard
