import React from "react";

var HeaderComponent = () => {
  return (
    <div className="page-wrapper">

      <header className="header">
        <div className="header-middle sticky-header" data-sticky-options="{'mobile': true}">

          <div className="container-fluid">
            <div className="header-left d-none d-lg-flex">
              <div className="header-dropdown"></div>
              <div className="header-dropdown"></div>
            </div>

            {/* logo */}
            <div className="header-center ml-0 ml-lg-auto">
              <button className="mobile-menu-toggler" type="button">
                <i className="fas fa-bars" />
              </button>
              <a href="/" className="logo">
                <img src="assets/images/demoes/demo23/logon.png" alt="Porto Logo" width={150} height={50} />
              </a>
            </div>

            <div className="header-right">
              <a href="/signin" className="header-icon d-lg-block d-none">
                <div className="header-user">
                  <i className="icon-user-2" />
                  <div className="header-userinfo">
                    <span class="d-inline-block font2 line-height-1">Hello!</span>
                    <h4 class="mb-0">My Account</h4>
                    <h4 class="mb-0">Login</h4>
                  </div>
                </div>
              </a>

              <a href="/wishlist" className="header-icon">
                <i className="icon-wishlist-2" />
              </a>

              <div className="dropdown cart-dropdown">
                <a href="/cart" title="Cart" className="dropdown-toggle cart-toggle" 
                // role="button" 
                // data-toggle="dropdown" 
                // aria-haspopup="true" 
                // aria-expanded="false" 
                // data-display="static"
                >
                  <i className="minicart-icon" />
                  <span className="cart-count badge-circle">3</span>
                </a>
              </div>{/* End .dropdown */}
            </div>
          </div>
        </div>


        <div className="header-bottom sticky-header" data-sticky-options="{'mobile': false}">
          <div className="container-fluid">

            <div className="header-left d-flex">
              <nav className="main-nav">
                <ul className="menu">
                </ul>
              </nav>
            </div>

            <div className="header-center w-auto">
              <nav className="main-nav">
                <ul className="menu">
                  <li className="active"><a href="/">Home</a></li>
                  <li><a href="/categories">Categories</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/aboutus">About Us</a></li>
                </ul>
              </nav>
            </div>


            <div className="header-right d-flex pr-0">
              <div className="header-search header-search-popup header-search-category text-right">
                <a href="#" className="search-toggle" role="button"><i className="icon-magnifier mr-2" />
                  <span>Search</span></a>
                <form action="#" method="get">
                  <div className="header-search-wrapper">
                    <input type="search" className="form-control" name="q" id="q1" placeholder="I'm searching for..." required />
                    <button className="btn icon-magnifier p-0" title="search" type="submit" />
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderComponent;