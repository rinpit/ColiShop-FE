import React from "react";
import SignInComponent from "../../components/SignInComponent/SignInComponent";
import "../../style/signInPage.css"; // Đường dẫn CSS đã điều chỉnh

const SignInPage = () => {
  return (
    <div className="page-wrapper">
      <main className="main" style={{ backgroundColor: "#CFCFCF" }}>
        <div>
          <div className="page-header">
            <div className="container d-flex flex-column align-items-center">
              <h1>Welcome Back!</h1>
              <p>Sign in to your account</p>
            </div>
          </div>
          <div className="container login-container">
            <div
              className="row justify-content-center align-items-center min-vh-100"
              style={{ padding: "40px 0 80px 0" }}
            >
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img
                      src="https://avojxnyjqb.com/wp-content/uploads/2023/12/person-with-orange-and-white-headdress-scaled.jpg"
                      alt="Login"
                    />
                  </div>
                  <div
                    className="col-md-6 d-flex justify-content-center align-items-center"
                    style={{ paddingTop: "50px" }}
                  >
                    <div className="card p-4 w-100 justify-content-center align-items-center">
                      <SignInComponent />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignInPage;
