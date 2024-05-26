import React from 'react'

const ForgotPasswordPage = () => {
    return (
        <div className='page-wrapper'>
            <main className='main'>
                <div>
                    <div className="page-header">
                        <div className="container d-flex flex-column align-items-center">
                            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                                <div className="container">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="demo4.html">Home</a></li>
                                        <li className="breadcrumb-item"><a href="category.html">Shop</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            My Account
                                        </li>
                                    </ol>
                                </div>
                            </nav>
                            <h1>My Account</h1>
                        </div>
                    </div>
                    <div className="container reset-password-container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="feature-box border-top-primary">
                                    <div className="feature-box-content">
                                        <form className="mb-0" action="#">
                                            <p>
                                                Lost your password? Please enter your
                                                username or email address. You will receive
                                                a link to create a new password via email.
                                            </p>
                                            <div className="form-group mb-0">
                                                <label htmlFor="reset-email" className="font-weight-normal">Username or email</label>
                                                <input type="email" className="form-control" id="reset-email" name="reset-email" required />
                                            </div>
                                            <div className="form-footer mb-0">
                                                <a href="login.html">Click here to login</a>
                                                <button type="submit" className="btn btn-md btn-primary form-footer-right font-weight-normal text-transform-none mr-0">
                                                    Reset Password
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default ForgotPasswordPage