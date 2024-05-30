import React from 'react'

const SignInComponent = () => {
    return (
        <div className="col-md-6">
            <div className="heading mb-1">
                <h2 className="title">Sign In</h2>
            </div>
            <form action="#">
                <label htmlFor="login-email">
                    Username or email address
                    <span className="required">*</span>
                </label>
                <input type="email" className="form-input form-wide" id="login-email" required />
                <label htmlFor="login-password">
                    Password
                    <span className="required">*</span>
                </label>
                <input type="password" className="form-input form-wide" id="login-password" required />

                <div className="form-footer">
                    <div className="custom-control custom-checkbox mb-0">
                        <input type="checkbox" className="custom-control-input" id="lost-password" />
                        <label className="custom-control-label mb-0" htmlFor="lost-password">Remember me</label>
                    </div>
                    <a href="/forgotpassword" className="forget-password text-dark form-footer-right">Forgot Password?</a>
                    <a href="/signup" className="forget-password text-dark form-footer-right">Sign Up?</a>

                </div>
                <button type="submit" className="btn btn-dark btn-md w-100">Sign In</button>
            </form>
        </div>
    )
}

export default SignInComponent