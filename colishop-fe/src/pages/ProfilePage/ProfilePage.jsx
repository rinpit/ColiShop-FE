import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../../style/profile.css"; // Custom CSS for additional styling

const ProfilePage = ({ account, handleChange }) => {
  return (
    <div className="main-content">
      <nav
        className="navbar navbar-top navbar-expand-md navbar-dark"
        id="navbar-main"
      >
        <div className="container-fluid">
          <a
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            User profile
          </a>
        </div>
      </nav>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(https://raw.githubusercontent.com/creativetimofficial/argon-dashboard/gh-pages/assets-old/img/theme/profile-cover.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <span className="mask bg-gradient-default opacity-8"></span>
        <div className="container-fluid d-flex align-items-center">
          <div className="row_profile">
            <div className="col-lg-7 col-md-10">
              <h1 className="display-2 text-white" style={{ fontSize: "50px" }}>
                Hello {/* Hello {account.firstName} {account.lastName} */}
              </h1>
              <p className="text-white mt-0 mb-5" style={{ fontSize: "15px" }}>
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </p>
              <a
                href="#!"
                className="btn btn-info"
                style={{ fontSize: "15px" }}
              >
                Edit profile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt--7">
        <div className="row_profile">
          <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div className="card card-profile shadow">
              <div className="row_profile justify-content-center">
                <div className="col-lg-3 order-lg-2">
                  <div className="card-profile-image">
                    <a href="#">
                      <img
                        // src={account.profileImage}
                        className="rounded-circle"
                        alt="..."
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="card-body pt-0 pt-md-4">
                <div className="text-center">
                  <h3>
                    {/* {account.fullName} */}
                    {/* <span className="font-weight-light">, {account.age}</span> */}
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2"></i>
                    {/* {account.location} */}
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2"></i>
                    {/* {account.position} */}
                  </div>
                  <div>
                    <i className="ni education_hat mr-2"></i>
                    {/* {account.education} */}
                  </div>
                  <hr className="my-4" />
                  {/* <p>{account.bio}</p> */}
                  <a href="#">Show more</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 order-xl-1">
            <div className="card bg-secondary shadow">
              <div className="card-header bg-white border-0">
                <div className="row_profile align-items-center">
                  <div className="col-8">
                    <h3 className="mb-0" style={{ fontSize: "15px" }}>
                      My account
                    </h3>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row_profile">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control form-control-alternative"
                            placeholder="Username"
                            name="username"
                            // value={account.username}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            id="input-email"
                            className="form-control form-control-alternative"
                            placeholder="jesse@example.com"
                            name="email"
                            // value={account.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row_profile">
                      <div className="col-md-12">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <input
                            id="input-address"
                            className="form-control form-control-alternative"
                            placeholder="Home Address"
                            name="address"
                            // value={account.address}
                            onChange={handleChange}
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row_profile">
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            id="input-city"
                            className="form-control form-control-alternative"
                            placeholder="City"
                            name="city"
                            // value={account.city}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <input
                            type="text"
                            id="input-country"
                            className="form-control form-control-alternative"
                            placeholder="Country"
                            name="country"
                            // value={account.country}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            htmlFor="input-postal-code"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="input-phone-number"
                            className="form-control form-control-alternative"
                            placeholder="+84 123456789"
                            name="postalCode"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                            // value={account.}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <div className="form-group focused">
                      <label>About Me</label>
                      <textarea
                        row_profiles="4"
                        className="form-control form-control-alternative"
                        placeholder="A few words about you ..."
                        name="aboutMe"
                        // value={account.aboutMe}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
