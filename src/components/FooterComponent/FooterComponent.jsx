import React from "react";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div
        className="footer-middle"
        style={{ paddingLeft: "50px", paddingRight: "50px" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-xl-3">
              <a href="#">
                <img
                  className="logo mb-3"
                  src="/assets/images/coli/coli-logo.png"
                  alt="Porto Logo"
                  width={140}
                  height={50}
                />
              </a>
              <div className="row">
                <div className="col-sm-6 pr-sm-0">
                  <div className="contact-widget m-b-3">
                    <h4
                      className="widget-title font2"
                      style={{ color: "black" }}
                    >
                      ADDRESS:
                    </h4>
                    <a href="#">
                      FPT urban area,
                      <br /> Da Nang city
                    </a>
                  </div>
                  <span className="footer-email">
                    <strong>Email:</strong>
                    <a href=""> colishop@gmail.com</a>
                  </span>
                </div>
              </div>
              <div className="social-icons mt-1 mb-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61560179580302"
                  className="social-icon social-facebook"
                  target="_blank"
                >
                  <i style={{ color: "black" }} className="fab fa-facebook-f" />
                </a>
                <a
                  href="#"
                  className="social-icon social-tiktok"
                  target="_blank"
                >
                  <i
                    style={{ color: "black" }}
                    className="fa-brands fa-tiktok"
                  />
                </a>
                <a
                  href="#"
                  className="social-icon social-instagram"
                  target="_blank"
                >
                  <i style={{ color: "black" }} className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="widget">
                <h4 className="widget-title" style={{ color: "black" }}>
                  Account
                </h4>
                <div className="row link-lg link-parts">
                  <div className="col-6 link-part">
                    <ul className="links mb-0">
                      <li>
                        <a href="dashboard.html">My Account</a>
                      </li>
                      <li>
                        <a href="#">Track Your Order</a>
                      </li>
                      <li>
                        <a href="#">Payment Methods</a>
                      </li>
                      <li>
                        <a href="#">Shipping Guide</a>
                      </li>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <li>
                        <a href="#">Product Support</a>
                      </li>
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-3">
              <div className="widget">
                <h4 className="widget-title" style={{ color: "black" }}>
                  About COLI
                </h4>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="links mb-0">
                      <li>
                        <a href="/policyDHvTT">
                          Chính Sách Đặt Hàng và Thanh Toán
                        </a>
                      </li>
                      <li>
                        <a href="/policyVC">Chính Sách Vận Chuyển</a>
                      </li>
                      <li>
                        <a href="/policyDT">Chính Sách Đổi Trả</a>
                      </li>
                      <li>
                        <a href="/policyBH">Chính Sách Bảo Hành</a>
                      </li>
                      <li>
                        <a href="/policyKG">Chính Sách Ký Gửi</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-3">
              <div className="widget">
                <h4 className="widget-title" style={{ color: "black" }}>
                  Newsletter
                </h4>
                <div className="widget-newsletter">
                  <div className="widget-newsletter-info">
                    <p className="widget-newsletter-content m-b-4">
                      Get all the latest information on Events, Sales and
                      Offers. Sign up for newsletter today
                    </p>
                  </div>
                  <form action="#">
                    <div className="footer-submit-wrapper d-flex">
                      <input
                        type="email"
                        className="form-control mb-0"
                        placeholder="Email Address"
                        size={40}
                        required
                      />
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm ls-0"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-sm-6 pl-sm-0">
                <div className="contact-widget m-b-3">
                  <h4 className="widget-title font2" style={{ color: "black" }}>
                    PHONE:
                  </h4>
                  <a href="#">0767774104 </a>
                </div>
              </div>
              <span className="footer-time">
                <strong>Open: </strong> Mon - Sun / 7:00AM - 22:00PM
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-fluid d-sm-flex align-items-center">
          {/* <div className="footer-left">
            <span className="footer-email">
              <strong>Email:</strong>
              <a href=""> colishop@gmail.com</a>
            </span>
          </div> */}
          <div className="footer-right ml-auto mt-1 mt-sm-0">
            <img
              src="/assets/images/coli/payment.png"
              alt="payment"
            />
          </div>
        </div>
      </div>
      {/* End .footer-bottom */}
    </footer>
  );
};

export default FooterComponent;
