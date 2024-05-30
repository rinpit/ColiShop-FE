import React, { useState } from 'react'

const SignUpComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    // const handleOnchangeEmail = (value) => {
    //     setEmail(value)
    // }

    const handleOnChangeInput = (e) => {
        const { id, value } = e.target;
        if (id === 'login-email') {
            setEmail(value);
        } else if (id === 'login-password') {
            setPassword(value);
        }
    }
    console.log('signup', email, password);
    // console.log('email', email)
    // console.log('password', password)
    return (
        <div className="col-md-6">
            <div className="heading mb-1">
                <h2 className="title">Sign Up</h2>
            </div>
            <form action="#">

                <label htmlFor="login-email">Username or email address<span className="required">*</span></label>
                <input type="email" className="form-input form-wide" id="login-email" required placeholder='abc@gmail.com'
                    value={email}
                    // onChange={(e) => setEmail(e.target.value)}

                    onChange={handleOnChangeInput}
                />

                <label htmlFor="login-password">Password<span className="required">*</span></label>
                <input type="password" className="form-input form-wide" id="login-password" required
                    value={password}
                    // onChange={(e) => setEmail(e.target.value)}

                    onChange={handleOnChangeInput}
                />

                <div className="form-footer">
                    <div className="custom-control custom-checkbox mb-0">
                        {/* <input type="checkbox" className="custom-control-input" id="lost-password" />
                        <label className="custom-control-label mb-0" htmlFor="lost-password">Remember me</label> */}
                    </div>
                    {/* <a href="/forgotpassword" className="forget-password text-dark form-footer-right">Forgot Password?</a> */}
                </div>
                <button type="submit" className="btn btn-dark btn-md w-100">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpComponent