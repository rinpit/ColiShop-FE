import React from "react";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";

const ProductDetailPage = () => {
  return (
    <div className="page-wrapper">
      <main className="main">
        {/* breadcrumb */}
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="demo23-shop.html">Shop</a>
              </li>
              <li className="breadcrumb-item">
                <a href="demo23-shop.html">Dresses</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Jasambac
              </li>
            </ol>
          </div>
        </nav>

        {/* Product detail */}
        <div className="container">
          <div className="product-single-container product-single-default">
            <div className="cart-message d-none">
              <strong className="single-cart-notice">“Jasambac”</strong>
              <span>has been added to your cart.</span>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-6 product-single-gallery">
                <div className="product-slider-container">
                  <div className="label-group">
                    <div className="product-label label-sale">-89%</div>
                  </div>
                  <div className="product-single-carousel owl-carousel owl-theme show-nav-hover">
                    <div className="product-item">
                      <img
                        className="product-single-image"
                        src="assets/images/demoes/demo23/products/zoom/product-0.jpg"
                        data-zoom-image="assets/images/demoes/demo23/products/zoom/product-1-big.jpg"
                        width={468}
                        height={468}
                        alt="product"
                      />
                    </div>
                  </div>
                </div>
                {/* End .product-single-carousel */}
                <span className="prod-full-screen">
                  <i className="icon-plus" />
                </span>
                <div className="prod-thumbnail owl-dots">
                  <div className="owl-dot">
                    <img
                      src="assets/images/demoes/demo23/products/zoom/product-0.jpg"
                      width={110}
                      height={110}
                      alt="product-thumbnail"
                    />
                  </div>
                </div>
              </div>
              {/* End .product-single-gallery */}
              <div className="col-lg-7 col-md-6 product-single-details">
                <h1 className="product-title">JASAMBAC</h1>
                <div className="product-nav">
                  <div className="product-prev">
                    <a href="#">
                      <span className="product-link" />
                      <span className="product-popup">
                        <span className="box-content">
                          <img
                            alt="product"
                            width={150}
                            height={150}
                            src="assets/images/demoes/demo23/products/product-5.jpg"
                            style={{ paddingTop: "0px" }}
                          />
                          <span>Smart Watches</span>
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="product-next">
                    <a href="#">
                      <span className="product-link" />
                      <span className="product-popup">
                        <span className="box-content">
                          <img
                            alt="product"
                            width={150}
                            height={150}
                            src="assets/images/demoes/demo23/products/product-0.jpg"
                            style={{ paddingTop: "0px" }}
                          />
                          <span>jasambac</span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
                {/* <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: '60%' }} />
                                        <span className="tooltiptext tooltip-top" />
                                    </div>
                                    <a href="#" className="rating-link">( 6 Reviews )</a>
                                </div> */}
                {/* End .ratings-container */}
                <hr className="short-divider" />
                <div className="price-box">
                  <span className="old-price">596.000 VNĐ</span>
                  <span className="product-price">102.000 VNĐ</span>
                </div>
                {/* End .price-box */}
                <div className="product-desc">
                  <p>
                    Material unknown, 3/4 sleeve, v-neck, a-line silhouette,
                    solid, embroidered detail, maroon, burgundy, knee length
                  </p>
                </div>
                {/* End .product-desc */}
                <ul className="single-info-list">
                  <li>
                    SKU: <strong>654613612-1-1-1</strong>
                  </li>
                </ul>
                <div className="product-action">
                  <div className="product-single-qty">
                    <input
                      className="horizontal-quantity form-control"
                      type="text"
                    />
                  </div>
                  {/* End .product-single-qty */}
                  <a
                    href="javascript:;"
                    className="btn btn-dark add-cart mr-2"
                    title="Add to Cart"
                  >
                    Add to Cart
                  </a>
                  <a href="cart.html" className="btn btn-gray view-cart d-none">
                    View cart
                  </a>
                </div>
                {/* End .product-action */}
                <hr className="divider mb-0 mt-0" />
                <div className="product-single-share mb-3">
                  <label className="sr-only">Share:</label>
                  <div className="social-icons mr-2">
                    <a
                      href="#"
                      className="social-icon social-facebook icon-facebook"
                      target="_blank"
                      title="Facebook"
                    />
                    <a
                      href="#"
                      className="social-icon social-twitter icon-twitter"
                      target="_blank"
                      title="Twitter"
                    />
                    <a
                      href="#"
                      className="social-icon social-linkedin fab fa-linkedin-in"
                      target="_blank"
                      title="Linkedin"
                    />
                    <a
                      href="#"
                      className="social-icon social-gplus fab fa-google-plus-g"
                      target="_blank"
                      title="Google +"
                    />
                    <a
                      href="#"
                      className="social-icon social-mail icon-mail-alt"
                      target="_blank"
                      title="Mail"
                    />
                  </div>
                  {/* End .social-icons */}
                  <a
                    href="wishlist.html"
                    className="btn-icon-wish add-wishlist"
                    title="Add to Wishlist"
                  >
                    <i className="icon-wishlist-2" />
                    <span>Add to Wishlist</span>
                  </a>
                </div>
                {/* End .product single-share */}
              </div>
              {/* End .product-single-details */}
            </div>
            {/* End .row */}
          </div>
          {/* End .product-single-container */}
          {/* Product detail */}
          <div className="product-single-tabs">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="product-tab-desc"
                  data-toggle="tab"
                  href="#product-desc-content"
                  role="tab"
                  aria-controls="product-desc-content"
                  aria-selected="true"
                >
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="product-tab-size"
                  data-toggle="tab"
                  href="#product-size-content"
                  role="tab"
                  aria-controls="product-size-content"
                  aria-selected="true"
                >
                  Size Guide
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="product-tab-tags"
                  data-toggle="tab"
                  href="#product-tags-content"
                  role="tab"
                  aria-controls="product-tags-content"
                  aria-selected="false"
                >
                  Additional Information
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="product-tab-reviews"
                  data-toggle="tab"
                  href="#product-reviews-content"
                  role="tab"
                  aria-controls="product-reviews-content"
                  aria-selected="false"
                >
                  Reviews (1)
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="product-desc-content"
                role="tabpanel"
                aria-labelledby="product-tab-desc"
              >
                <div className="product-desc-content">
                  <p>
                    {" "}
                    Material unknown, 3/4 sleeve, v-neck, a-line silhouette,
                    solid, embroidered detail, maroon, burgundy, knee length{" "}
                  </p>
                  <ul>
                    <li>
                      Any Product types that You want – Simple, Configurable
                    </li>
                    <li>Downloadable/Digital Products, Virtual Products</li>
                    <li>Inventory Management with Backordered items</li>
                  </ul>
                  {/* <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> */}
                </div>
                {/* End .product-desc-content */}
              </div>
              {/* End .tab-pane */}
              <div
                className="tab-pane fade"
                id="product-size-content"
                role="tabpanel"
                aria-labelledby="product-tab-size"
              >
                <div className="product-size-content">
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src="assets/images/products/single/body-shape.png"
                        alt="body shape"
                        width={217}
                        height={398}
                      />
                    </div>
                    {/* End .col-md-4 */}
                    <div className="col-md-8">
                      <table className="table table-size">
                        <thead>
                          <tr>
                            <th>SIZE</th>
                            <th>CHEST (in.)</th>
                            <th>WAIST (in.)</th>
                            <th>HIPS (in.)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>XS</td>
                            <td>34-36</td>
                            <td>27-29</td>
                            <td>34.5-36.5</td>
                          </tr>
                          <tr>
                            <td>S</td>
                            <td>36-38</td>
                            <td>29-31</td>
                            <td>36.5-38.5</td>
                          </tr>
                          <tr>
                            <td>M</td>
                            <td>38-40</td>
                            <td>31-33</td>
                            <td>38.5-40.5</td>
                          </tr>
                          <tr>
                            <td>L</td>
                            <td>40-42</td>
                            <td>33-36</td>
                            <td>40.5-43.5</td>
                          </tr>
                          <tr>
                            <td>XL</td>
                            <td>42-45</td>
                            <td>36-40</td>
                            <td>43.5-47.5</td>
                          </tr>
                          <tr>
                            <td>XLL</td>
                            <td>45-48</td>
                            <td>40-44</td>
                            <td>47.5-51.5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* End .row */}
                </div>
                {/* End .product-size-content */}
              </div>
              {/* End .tab-pane */}
              <div
                className="tab-pane fade"
                id="product-tags-content"
                role="tabpanel"
                aria-labelledby="product-tab-tags"
              >
                <table className="table table-striped mt-2">
                  <tbody>
                    <tr>
                      <th>Weight</th>
                      <td>23 kg</td>
                    </tr>
                    <tr>
                      <th>Dimensions</th>
                      <td>12 × 24 × 35 cm</td>
                    </tr>
                    <tr>
                      <th>Color</th>
                      <td>Black, Green, Indigo</td>
                    </tr>
                    <tr>
                      <th>Size</th>
                      <td>Large, Medium, Small</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* End .tab-pane */}
              <div
                className="tab-pane fade"
                id="product-reviews-content"
                role="tabpanel"
                aria-labelledby="product-tab-reviews"
              >
                <div className="product-reviews-content">
                  <h3 className="reviews-title">
                    1 review for Men Black Sports Shoes
                  </h3>
                  <div className="comment-list">
                    <div className="comments">
                      <figure className="img-thumbnail">
                        <img
                          src="assets/images/blog/author.jpg"
                          alt="author"
                          width={80}
                          height={80}
                        />
                      </figure>
                      <div className="comment-block">
                        <div className="comment-header">
                          <div className="comment-arrow" />
                          <div className="ratings-container float-sm-right">
                            <div className="product-ratings">
                              <span
                                className="ratings"
                                style={{ width: "60%" }}
                              />
                              {/* End .ratings */}
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            {/* End .product-ratings */}
                          </div>
                          <span className="comment-by">
                            <strong>Joe Doe</strong> – April 12, 2018
                          </span>
                        </div>
                        <div className="comment-content">
                          <p>Excellent.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="add-product-review">
                    <h3 className="review-title">Add a review</h3>
                    <form action="#" className="comment-form m-0">
                      <div className="rating-form">
                        <label htmlFor="rating">
                          Your rating <span className="required">*</span>
                        </label>
                        <span className="rating-stars">
                          <a className="star-1" href="#">
                            1
                          </a>
                          <a className="star-2" href="#">
                            2
                          </a>
                          <a className="star-3" href="#">
                            3
                          </a>
                          <a className="star-4" href="#">
                            4
                          </a>
                          <a className="star-5" href="#">
                            5
                          </a>
                        </span>
                        <select
                          name="rating"
                          id="rating"
                          required
                          style={{ display: "none" }}
                        >
                          <option value>Rate…</option>
                          <option value={5}>Perfect</option>
                          <option value={4}>Good</option>
                          <option value={3}>Average</option>
                          <option value={2}>Not that bad</option>
                          <option value={1}>Very poor</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>
                          Your review <span className="required">*</span>
                        </label>
                        <textarea
                          cols={5}
                          rows={6}
                          className="form-control form-control-sm"
                          defaultValue={""}
                        />
                      </div>
                      {/* End .form-group */}
                      <div className="row">
                        <div className="col-md-6 col-xl-12">
                          <div className="form-group">
                            <label>
                              Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                        </div>
                        <div className="col-md-6 col-xl-12">
                          <div className="form-group">
                            <label>
                              Email <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                        </div>
                        <div className="col-md-12">
                          <div className=" custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="save-name"
                            />
                            <label
                              className="custom-control-label mb-0"
                              htmlFor="save-name"
                            >
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </div>
                        </div>
                      </div>
                      <input
                        type="submit"
                        className="btn btn-primary"
                        defaultValue="Submit"
                      />
                    </form>
                  </div>
                  {/* End .add-product-review */}
                </div>
                {/* End .product-reviews-content */}
              </div>
              {/* End .tab-pane */}
            </div>
            {/* End .tab-content */}
          </div>
          {/* End .product-single-tabs */}
          {/* Related Product */}
          <div className="products-section pt-0">
            <h2 className="section-title m-b-4">Related products</h2>
            <div
              className="products-slider 5col owl-carousel owl-theme dots-top dots-small"
              data-owl-options="{
                      'dots': true
                  }"
            >
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo23-product.html">
                    <img
                      src="assets/images/demoes/demo23/products/product-15.jpg"
                      width={217}
                      height={217}
                      alt="product"
                    />
                  </a>
                  <div className="label-group">
                    <div className="product-label label-sale">-15%</div>
                  </div>
                  <div className="btn-icon-group">
                    <a
                      href="#"
                      className="btn-icon btn-add-cart product-type-simple"
                    >
                      <i className="icon-shopping-cart" />
                    </a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    className="btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo23-shop.html" className="product-category">
                        category
                      </a>
                    </div>
                    <a
                      href="wishlist.html"
                      title="Wishlist"
                      className="btn-icon-wish"
                    >
                      <i className="icon-heart" />
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="demo23-product.html">Pink Girl Overshoes</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: "90%" }} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                  </div>
                  {/* End .product-container */}
                  <div className="price-box">
                    <span className="old-price">$1,999.00</span>
                    <span className="product-price">$1,699.00</span>
                  </div>
                  {/* End .price-box */}
                </div>
                {/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo23-product.html">
                    <img
                      src="assets/images/demoes/demo23/products/product-14.jpg"
                      width={217}
                      height={217}
                      alt="product"
                    />
                  </a>
                  <div className="label-group">
                    <div className="product-label label-hot">HOT</div>
                  </div>
                  <div className="btn-icon-group">
                    <a
                      href="demo23-product.html"
                      className="btn-icon btn-add-cart product-type-simple"
                    >
                      <i className="icon-shopping-cart" />
                    </a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    className="btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo23-shop.html" className="product-category">
                        category
                      </a>
                    </div>
                    <a
                      href="wishlist.html"
                      title="Wishlist"
                      className="btn-icon-wish"
                    >
                      <i className="icon-heart" />
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="demo23-product.html">Pink Baby Spring Shoes</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: "0%" }} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                  </div>
                  {/* End .product-container */}
                  <div className="price-box">
                    <span className="product-price">$299.00</span>
                  </div>
                  {/* End .price-box */}
                </div>
                {/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo23-product.html">
                    <img
                      src="assets/images/demoes/demo23/products/product-11.jpg"
                      width={217}
                      height={217}
                      alt="product"
                    />
                  </a>
                  <div className="label-group">
                    <div className="product-label label-sale">-17%</div>
                  </div>
                  <div className="btn-icon-group">
                    <a
                      href="demo23-product.html"
                      className="btn-icon btn-add-cart product-type-simple"
                    >
                      <i className="icon-shopping-cart" />
                    </a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    className="btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo23-shop.html" className="product-category">
                        category
                      </a>
                    </div>
                    <a
                      href="wishlist.html"
                      title="Wishlist"
                      className="btn-icon-wish"
                    >
                      <i className="icon-heart" />
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="demo23-product.html">Blue Boy Spring Shoes</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: "80%" }} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                  </div>
                  {/* End .product-container */}
                  <div className="price-box">
                    <span className="old-price">$59.00</span>
                    <span className="product-price">$49.00</span>
                  </div>
                  {/* End .price-box */}
                </div>
                {/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo23-product.html">
                    <img
                      src="assets/images/demoes/demo23/products/product-10.jpg"
                      width={217}
                      height={217}
                      alt="product"
                    />
                  </a>
                  <div className="label-group">
                    <div className="product-label label-sale">-89%</div>
                  </div>
                  <div className="btn-icon-group">
                    <a
                      href="demo23-product.html"
                      className="btn-icon btn-add-cart product-type-simple"
                    >
                      <i className="icon-shopping-cart" />
                    </a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    className="btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo23-shop.html" className="product-category">
                        category
                      </a>
                    </div>
                    <a
                      href="wishlist.html"
                      title="Wishlist"
                      className="btn-icon-wish"
                    >
                      <i className="icon-heart" />
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="demo23-product.html">Blue Boy Shoes</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: "80%" }} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                  </div>
                  {/* End .product-container */}
                  <div className="price-box">
                    <span className="old-price">$596.00</span>
                    <span className="product-price">$68.00</span>
                  </div>
                  {/* End .price-box */}
                </div>
                {/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo23-product.html">
                    <img
                      src="assets/images/demoes/demo23/products/product-6.jpg"
                      width={217}
                      height={217}
                      alt="product"
                    />
                    <img
                      src="assets/images/demoes/demo23/products/product-9.jpg"
                      width={217}
                      height={217}
                      alt="product"
                    />
                  </a>
                  <div className="label-group">
                    <div className="product-label label-sale">-33%</div>
                  </div>
                  <div className="btn-icon-group">
                    <a
                      href="#"
                      className="btn-icon btn-add-cart product-type-simple"
                    >
                      <i className="icon-shopping-cart" />
                    </a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    className="btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo23-shop.html" className="product-category">
                        category
                      </a>
                    </div>
                    <a
                      href="wishlist.html"
                      title="Wishlist"
                      className="btn-icon-wish"
                    >
                      <i className="icon-heart" />
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="demo23-product.html">White Girl Shoes</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: "100%" }} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                  </div>
                  {/* End .product-container */}
                  <div className="price-box">
                    <span className="product-price">$299.00</span>
                  </div>
                  {/* End .price-box */}
                </div>
                {/* End .product-details */}
              </div>
              <div className="product-default inner-quickview inner-icon">
                <figure>
                  <a href="demo23-product.html">
                    <img
                      src="assets/images/demoes/demo23/products/product-4.jpg"
                      width={217}
                      height={217}
                      alt="product"
                    />
                  </a>
                  <div className="label-group">
                    <div className="product-label label-hot">HOT</div>
                    <div className="product-label label-sale">-13%</div>
                  </div>
                  <div className="btn-icon-group">
                    <a
                      href="#"
                      className="btn-icon btn-add-cart product-type-simple"
                    >
                      <i className="icon-shopping-cart" />
                    </a>
                  </div>
                  <a
                    href="ajax/product-quick-view.html"
                    className="btn-quickview"
                    title="Quick View"
                  >
                    Quick View
                  </a>
                </figure>
                <div className="product-details">
                  <div className="category-wrap">
                    <div className="category-list">
                      <a href="demo23-shop.html" className="product-category">
                        category
                      </a>
                    </div>
                    <a
                      href="wishlist.html"
                      title="Wishlist"
                      className="btn-icon-wish"
                    >
                      <i className="icon-heart" />
                    </a>
                  </div>
                  <h3 className="product-title">
                    <a href="demo23-product.html">Baby Summer Underclothes</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: "0%" }} />
                      {/* End .ratings */}
                      <span className="tooltiptext tooltip-top" />
                    </div>
                    {/* End .product-ratings */}
                  </div>
                  {/* End .product-container */}
                  <div className="price-box">
                    <span className="old-price">$299.00</span>
                    <span className="product-price">$259.00</span>
                  </div>
                  {/* End .price-box */}
                </div>
                {/* End .product-details */}
              </div>
            </div>
            {/* End .products-slider */}
          </div>
          {/* End .products-section */}
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;
