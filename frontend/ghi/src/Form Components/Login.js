import React from 'react'
import SignUpModal from '../Modals/SignUpModal'
// import {Pool, Client} from 'postgres-pool'

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
                                    <p className="text-muted mb-4">Your dream wedding awaits.</p>
                                    <form>
                                        <div className="mb-3">
                                            <input id="inputEmail" type="email" placeholder="Email address" required="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>

                                        <br></br>
                                        {/* <div className="form-check">
                                            <input id="customCheck1" type="checkbox" checked className="form-check-input" />
                                            <label for="customCheck1" className="form-check-label">Remember password</label>
                                        </div> */}
                                        <div className="d-grid gap-2 mt-2">
                                        <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm col-md-8 offset-md-2">Log In</button>
                                        </div>
                                        </form>
                                        <SignUpModal/>


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
