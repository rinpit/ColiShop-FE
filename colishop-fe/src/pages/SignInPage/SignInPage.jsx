import React from 'react'
import SignInComponent from '../../components/SignInComponent/SignInComponent'
import SignUpComponent from '../../components/SignUpComponent/SignUpComponent'

const SignInPage = () => {
    return (
        <div className='page-wrapper'>
            <main className='main'><div>
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

                <div className="container login-container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="row">
                                <SignInComponent/>
                                <SignUpComponent/>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </main>
        </div>
    )
}

export default SignInPage