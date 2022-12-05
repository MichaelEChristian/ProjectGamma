import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {login_token, validate_token} from '../lib/api'

function LoginInput({ type, placeholder, value, onChange}) {
    return (
        <div className="mb-3">
            <input
                type={type}
                placeholder={placeholder}
                value={value || ''}
                onChange={onChange}
                className="form-control rounded-pill border-0 shadow-sm px-4" />
        </div>
    )
}

function LoginModal() {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    // const [showError, setShowError] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = async () => {
    const token = login_token({username, password})
    handleClose()
    setUsername(null)
    setPassword(null)
            // .catch(()=> setShowError(true))
    const user_data = validate_token(token["token"]);
    }

    return (
        <>
          <button onClick={handleShow} type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm col-md-8 offset-md-2">
            Log in
          </button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Please enter your information to log in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                <div className='row'>
                    <LoginInput type='text' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <LoginInput type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    {/* {showError ?
                        <p className='col-md-8 offset-md-2 text-danger font-weight-bold'>This email or username already exists</p>
                        : null
                    } */}
                </div>
            </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Log in
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

export default LoginModal
