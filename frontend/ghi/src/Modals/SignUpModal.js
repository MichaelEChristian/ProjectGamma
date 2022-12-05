import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { signup } from '../library/api'

function SignUpInput({ type, placeholder, value, onChange }) {
  return (
    <div className="mb-3">
      <input
        type={type}
        placeholder={placeholder}
        value={value || ''}
        onChange={onChange}
        className="form-control rounded-pill border-0 shadow-sm px-4"
      />
    </div>
  )
}

function SignUpModal() {
  const [show, setShow] = useState(false)
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [firstname, setFirstName] = useState()
  const [lastname, setLastName] = useState()
  const [showError, setShowError] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleSubmit = () => {
    signup({ username, email, password, firstname, lastname })
      .then(() => handleClose())
      .then(() => setUsername(null))
      .then(() => setEmail(null))
      .then(() => setPassword(null))
      .then(() => setFirstName(null))
      .then(() => setLastName(null))
      .catch(() => setShowError(true))
  }
  return (
    <>
      <button
        onClick={handleShow}
        type="submit"
        className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm col-md-8 offset-md-2"
      >
        Sign Up
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please enter your information to Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="row">
              <SignUpInput
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <SignUpInput
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <SignUpInput
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <SignUpInput
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <SignUpInput
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
              {showError ? (
                <p className="col-md-8 offset-md-2 text-danger font-weight-bold">
                  This email or username already exists
                </p>
              ) : null}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SignUpModal
