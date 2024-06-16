import React from "react";
import SignUpComponent from "../../components/SignUpComponent/SignUpComponent";
import "../../style/signUpPage.css"; // Đường dẫn CSS đã điều chỉnh

const signUpPage = () => {
  return (
    <div className="page-wrapper">
      <main
        className="main"
        style={{
          background: "linear-gradient(to top, #E2D7C6, #B0B1A8)",
        }}
      >
        <div>
          <div className="container signup-container">
            <div className="row justify-content-center align-items-center min-vh-100">
              <div className="col-lg-10">
                <div className="row align-items-end">
                  <div className="col-md-6 d-flex justify-content-center">
                    <img
                      src="https://assets.vogue.com/photos/6621c25c43c8716d16f4f5c1/master/w_1920,c_limit/VINTAGEGUIDE-LAMERICA-MOCKUP-SAOPAOLO-1.jpg"
                      alt="signUp"
                      style={{ width: "1000px", height: "650px" }}
                    />
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="card p-4 w-100 d-flex justify-content-center align-items-center">
                      <SignUpComponent />
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

export default signUpPage;
