import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [localStorage.getItem("access_token")]);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="page-wrapper">
      <header className="header">
        <div
          className="header-middle sticky-header"
          data-sticky-options="{'mobile': true}"
        >
          <div className="container-fluid">
            <div className="header-left d-none d-lg-flex">
              {/* Phần này bạn có thể thêm các dropdown hoặc nội dung khác */}
            </div>

            <div className="header-center ml-0 ml-lg-auto">
              <button className="mobile-menu-toggler" type="button">
                <i className="fas fa-bars" />
              </button>
              <a href="/" className="logo">
                <img
                  src="assets/images/demoes/demo23/logon.png"
                  alt="Porto Logo"
                  width={150}
                  height={50}
                />
              </a>
            </div>

            <div className="header-right">
              {isLoggedIn ? (
                <div>
                  <Link
                    to="/"
                    className="header-icon d-lg-block d-none"
                    onClick={handleLogout}
                  >
                    <div className="header-user">
                      <i className="icon-user-2" />
                      <div className="header-userinfo">
                        <span className="d-inline-block font2 line-height-1">
                          Hello!
                        </span>
                        <h4 className="mb-0">Logout</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              ) : (
                <Link to="/signup" className="header-icon d-lg-block d-none">
                  <div className="header-user">
                    <i className="icon-user-2" />
                    <div className="header-userinfo">
                      <span className="d-inline-block font2 line-height-1">
                        Hello!
                      </span>
                      <h4 className="mb-0">Sign Up</h4>
                    </div>
                  </div>
                </Link>
              )}

              <a href="/wishlist" className="header-icon">
                <i className="icon-wishlist-2" />
              </a>

              <div className="dropdown cart-dropdown">
                <a
                  href="/cart"
                  title="Cart"
                  className="dropdown-toggle cart-toggle"
                >
                  <i className="minicart-icon" />
                  <span className="cart-count badge-circle">3</span>
                </a>
              </div>
              {/* End .dropdown */}
            </div>
          </div>
        </div>

        <div
          className="header-bottom sticky-header"
          data-sticky-options="{'mobile': false}"
        >
          <div className="container-fluid">
            <div className="header-left d-flex">
              <nav className="main-nav">
                <ul className="menu"></ul>
              </nav>
            </div>

            <div className="header-center w-auto">
              <nav className="main-nav">
                <ul className="menu">
                  <li>
                    <NavLink exact to="/" activeClassName="active">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/categories" activeClassName="active">
                      Categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog" activeClassName="active">
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/aboutus" activeClassName="active">
                      About Us
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="header-right d-flex pr-0">
              {/* <div className="header-search header-search-popup header-search-category text-right">
                <a href="#" className="search-toggle" role="button">
                  <i className="icon-magnifier mr-2" />
                  <span>Search</span>
                </a>
                <form action="#" method="get">
                  <div className="header-search-wrapper">
                    <input
                      type="search"
                      className="form-control"
                      name="q"
                      id="q1"
                      placeholder="I'm searching for..."
                      required
                    />
                    <button
                      className="btn icon-magnifier p-0"
                      title="search"
                      type="submit"
                    />
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
