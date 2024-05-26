import React from 'react'

const FooterComponent = () => {
    return (
        <div className="page-wrapper">
            <footer className="footer">
                <div className="footer-middle">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-xl-4">
                                <a href="#">
                                    <img className="logo mb-3" src="assets/images/demoes/demo23/logon.png" alt="Porto Logo" width={140} height={50} /></a>
                                <div className="row">
                                    <div className="col-sm-6 pr-sm-0">
                                        <div className="contact-widget m-b-3">
                                            <h4 className="widget-title font2" style={{color: 'black'}}>ADDRESS:</h4>
                                            <a href="#">FPT urban area,
                                                <br /> Da Nang city</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 pl-sm-0">
                                        <div className="contact-widget m-b-3">
                                            <h4 className="widget-title font2" style={{color: 'black'}}>PHONE:</h4>
                                            <a href="#">0935-536-285</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 pr-sm-0">
                                        <div className="contact-widget m-b-3">
                                            <h4 className="widget-title font2" style={{color: 'black'}}>EMAIL:</h4>
                                            <a href="#">cohii.team@gmail.com</a>
                                            {/* <a href="https://portotheme.com/cdn-cgi/l/email-protection#4825292124082d30292538242d662b2725">
                                      <span class="__cf_email__" data-cfemail="b7dad6dedbf7d2cfd6dac7dbd299d4d8da">[email &#160;protected]</span>
                                  </a> */}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 pl-sm-0">
                                        <div className="contact-widget m-b-3">
                                            <h4 className="widget-title font2" style={{color: 'black'}}>
                                                WORKING DAYS/HOURS:
                                            </h4>
                                            <a href="#">Mon - Sun / 8:00AM - 5:00PM</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="social-icons mt-1 mb-3">
                                    <a href="#" className="social-icon social-facebook" target="_blank"><i style={{color: 'black'}} className="fab fa-facebook-f" /></a>
                                    <a href="#" className="social-icon social-tiktok" target="_blank"><i style={{color: 'black'}} className="fa-brands fa-tiktok" /></a>
                                    <a href="#" className="social-icon social-instagram" target="_blank"><i style={{color: 'black'}} className="fab fa-instagram" /></a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-2">
                                <div className="widget">
                                    <h4 className="widget-title" style={{color: 'black'}}>Account</h4>
                                    <div className="row link-lg link-parts">
                                        <div className="col-6 link-part">
                                            <ul className="links mb-0">
                                                <li>
                                                    <a href="dashboard.html">My Account</a>
                                                </li>
                                                <li><a href="#">Track Your Order</a></li>
                                                <li><a href="#">Payment Methods</a></li>
                                                <li><a href="#">Shipping Guide</a></li>
                                                <li><a href="#">FAQs</a></li>
                                                <li><a href="#">Product Support</a></li>
                                                <li><a href="#">Privacy</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-6 link-part">
                                            <ul className="links mb-0">
                                                <li>
                                                    <a href="#">Orders History</a>
                                                </li>
                                                <li><a href="#">Advanced Search</a></li>
                                                <li><a href="#">Affiliate Program</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4">
                                <div className="widget">
                                    <h4 className="widget-title" style={{color: 'black'}}>About</h4>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ul className="links mb-0">
                                                <li>
                                                    <a href="about.html">About Porto</a>
                                                </li>
                                                <li><a href="#">Our Guarantees</a></li>
                                                <li><a href="#">Terms And Conditions</a></li>
                                                <li><a href="#">Privacy policy</a></li>
                                                <li><a href="#">Return Policy</a></li>
                                                <li>
                                                    <a href="#">Intellectual Property Claims</a>
                                                </li>
                                                <li><a href="#">Site Map</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul className="links mb-0">
                                                <li>
                                                    <a href="#">Site Index</a>
                                                </li>
                                                <li><a href="#">Porto for the Press</a></li>
                                                <li><a href="#">Business Accounts</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-2">
                                <div className="widget">
                                    <h4 className="widget-title">Newsletter</h4>
                                    <div className="widget-newsletter">
                                        <div className="widget-newsletter-info">
                                            <p className="widget-newsletter-content m-b-4">Get all the latest
                                                information on
                                                Events, Sales and Offers. Sign up for newsletter today</p>
                                        </div>
                                        <form action="#">
                                            <div className="footer-submit-wrapper d-flex">
                                                <input type="email" className="form-control mb-0" placeholder="Email Address" size={40} required />
                                                <button type="submit" className="btn btn-primary btn-sm ls-0">Subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container-fluid d-sm-flex align-items-center">
                        <div className="footer-left">
                            <span className="footer-copyright">©Coli-eCommerce. 2024. All Rights Reserved</span>
                        </div>
                        <div className="footer-right ml-auto mt-1 mt-sm-0">
                            <img src="assets/images/demoes/demo23/payment-icon.png" alt="payment" />
                        </div>
                    </div>
                </div>{/* End .footer-bottom */}
            </footer>

        </div>
    )
}

export default FooterComponent