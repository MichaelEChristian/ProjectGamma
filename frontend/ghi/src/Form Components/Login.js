import React from 'react'
import SignUpModal from '../Modals/SignUpModal'
import LoginModal from '../Modals/LoginModal'

function Login() {
  return (
    <div className="maincontainer">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image"></div>

          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">Forever and Always</h3>
                    <p className="text-muted mb-4">
                      Your dream wedding awaits.
                    </p>
                    <SignUpModal />
                    <LoginModal />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
