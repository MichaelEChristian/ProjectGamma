import { useState } from "react";

function SignUpForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // is this needed?
    const [budget, setBudget] = useState('');


    return (
        <div id="signup-pg">
        <div className="container">
            <div className="login d-flex align-items-center py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                            <h3 className="display-4">Forever and Always</h3>
                            <p className="text-muted mb-4">Your Personal Wedding Plan Starts Now</p>
                            <form>
                                <div className="mb-3">
                                    <input id="inputEmail" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email address" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                </div>
                                <div className="mb-3">
                                    <input id="inputPassword" value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                </div>
                                <div className="mb-3">
                                    <input id="inputPassword2" type="password" placeholder="Confirm Password" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                </div>
                                <div className="mb-3">
                                    <input id="inputBudget" type="number" value={budget} onChange={e => setBudget(e.target.value)}placeholder="Budget" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                </div>
                                <br></br>
                                <div className="d-grid gap-2 mt-2 text-center">
                                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default SignUpForm
