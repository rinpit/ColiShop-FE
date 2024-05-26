import React from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import ProductComponent from "../../components/ProductComponent/ProductComponent";

const HomePage = () => {
    return (
        <div className="page-wrapper">
            <section className="intro-section mb-3">
                <div className="home-slider slide-animate owl-carousel owl-theme" data-owl-options="{
                  'nav': false,
                  'responsive': {
                      '1440': {
                          'nav': true
                      }
                  }
              }">
                    <div className="home-slide home-slide-1 banner">
                        <img className="slide-bg" src="assets/images/demoes/demo23/slider/slide-1.jpg" alt="slider image" width={1200} height={575} />
                        <div className="banner-layer banner-layer-middle banner-layer-left">
                            <div className="container-fluid">
                                <div className="appear-animate" data-animation-name="fadeInLeftShorter" data-animation-delay={200}>
                                    <h2 className="font-weight-light ls-10 text-primary">Discover our Arrivals!</h2>
                                    <a href="demo23-shop.html" className="btn btn-link"><i>View
                                        our
                                        Dresses</i><i className="icon-right-open-big" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-slide home-slide-2 banner">
                        <img className="slide-bg" src="assets/images/demoes/demo23/slider/slide-2.jpg" alt="slider image" width={1200} height={575} />
                        <div className="banner-layer banner-layer-middle banner-layer-right w-100">
                            <div className="container-fluid">
                                <div className="col-6 offset-6 appear-animate" data-animation-name="fadeInRightShorter" data-animation-delay={200}>
                                    <h2 className="font-weight-light ls-10 text-primary">Trendy Collections!</h2>
                                    <a href="demo23-shop.html" className="btn btn-link"><i>View
                                        our
                                        Specials</i><i className="icon-right-open-big" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Wellcome to CoLi World */}
            <section className="welcome-section">
                <div className="container">
                    <h2 className="section-title text-center text-uppercase appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={200}>Welcome to Coli’s world
                    </h2>
                    <p className="section-description text-center mb-3 appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={400}>Enjoy the exceptional quality in all our products
                    </p>
                    <div className="row mb-2">
                        <div className="col-md-8 col-lg-6">
                            <div className="banner banner1 mb-2 appear-animate" data-animation-name="fadeIn" data-animation-delay={200} style={{ backgroundColor: '#d8d8d8' }}>
                                <figure>
                                    <img src="assets/images/demoes/demo23/banners/banner-1.jpg" alt="banner" width={580} height={374} />
                                </figure>
                                <div className="banner-layer d-flex flex-column align-items-end justify-content-center">
                                    <div className="text-justify">
                                        <h3 className="font4 font-weight-bold ls-n-25 text-uppercase mb-0">Discounts</h3>
                                        <h4 className="ls-n-25 text-uppercase">Up to 70%</h4>
                                        <a href="demo23-shop.html" className="btn btn-link"><i>View our Deals</i><i className="icon-right-open-big" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="banner banner2 mb-2 appear-animate" data-animation-name="fadeIn" data-animation-delay={200} style={{ backgroundColor: '#f0f5f8' }}>
                                <figure>
                                    <img src="assets/images/demoes/demo23/banners/banner-2.jpg" alt="banner" width={280} height={374} />
                                </figure>
                                <div className="banner-layer d-flex flex-column align-items-center justify-content-end">
                                    <h2 className="ls-n-25 text-uppercase">Summer classics</h2>
                                    <a href="demo23-shop.html" className="btn btn-link"><i>View our Classics</i><i className="icon-right-open-big" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="banner banner3 mb-2 appear-animate" data-animation-name="fadeIn" data-animation-delay={200} style={{ backgroundColor: '#ededed' }}>
                                <figure>
                                    <img src="assets/images/demoes/demo23/banners/banner-3.jpg" alt="banner" width={280} height={374} />
                                </figure>
                                <div className="banner-layer d-flex flex-column align-items-center justify-content-between">
                                    <h2 className="font-weight-bold ls-n-25 text-center text-uppercase">Mother &amp;
                                        Daughter</h2>
                                    <a href="demo23-shop.html" className="btn btn-link"><i>View our Outfits</i><i className="icon-right-open-big" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="banner banner4 mb-2 appear-animate" data-animation-name="fadeIn" data-animation-delay={200} style={{ backgroundColor: '#f5f6f8' }}>
                                <figure>
                                    <img src="assets/images/demoes/demo23/banners/banner-4.jpg" alt="banner" width={560} height={374} />
                                </figure>
                                <div className="banner-layer d-flex flex-column align-items-center">
                                    <h2 className="ls-n-25 text-uppercase">Babies Outfits</h2>
                                    <a href="demo23-shop.html" className="btn btn-link"><i>View our Outfits</i><i className="icon-right-open-big" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="banner banner5 mb-2 appear-animate" data-animation-name="fadeIn" data-animation-delay={200} style={{ backgroundColor: '#f5ecef' }}>
                                <figure>
                                    <img src="assets/images/demoes/demo23/banners/banner-5.jpg" alt="banner" width={280} height={374} />
                                </figure>
                                <div className="banner-layer d-flex flex-column align-items-center justify-content-between">
                                    <h2 className="ls-n-25 text-uppercase">Babies dresses</h2>
                                    <a href="demo23-shop.html" className="btn btn-link"><i>View our Dresses</i><i className="icon-right-open-big" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-6">
                            <div className="banner banner6 mb-2 appear-animate" data-animation-name="fadeIn" data-animation-delay={200} style={{ backgroundColor: '#e2e2e2' }}>
                                <figure>
                                    <img src="assets/images/demoes/demo23/banners/banner-6.jpg" alt="banner" width={280} height={374} />
                                </figure>
                                <div className="banner-layer d-flex flex-column align-items-center justify-content-between">
                                    <h2 className="ls-n-25 text-uppercase">Shoes for Babies</h2>
                                    <a href="demo23-shop.html" className="btn btn-link"><i>View our Deals</i><i className="icon-right-open-big" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-boxes-container appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={200}>
                        <div className="row m-0">
                            <div className="info-box info-box-icon-left col-md-4">
                                <i className="icon-shipping" />
                                <div className="info-box-content">
                                    <h4 className="ls-n-25">FREE SHIPPING &amp; RETURN</h4>
                                    <p className="font2 font-weight-light">Free shipping on all orders over $99.</p>
                                </div>{/* End .info-box-content */}
                            </div>{/* End .info-box */}
                            <div className="info-box info-box-icon-left col-md-4">
                                <i className="icon-money" />
                                <div className="info-box-content">
                                    <h4 className="ls-n-25">MONEY BACK GUARANTEE</h4>
                                    <p className="font2 font-weight-light">100% money back guarantee</p>
                                </div>{/* End .info-box-content */}
                            </div>{/* End .info-box */}
                            <div className="info-box info-box-icon-left col-md-4">
                                <i className="icon-support" />
                                <div className="info-box-content">
                                    <h4 className="ls-n-25">ONLINE SUPPORT 24/7</h4>
                                    <p className="font2 font-weight-light">Lorem ipsum dolor sit amet.</p>
                                </div>{/* End .info-box-content */}
                            </div>{/* End .info-box */}
                        </div>
                    </div>


              {/* 8 sản phẩm */}
                    <div className="row appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={400}>
                        {/* 1 product */}
                        <div className="col-6 col-md-4 col-xl-3">
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo23-product.html">
                                        <img src="assets/images/demoes/demo23/products/product-1.jpg" width={217} height={217} alt="product" />
                                        <img src="assets/images/demoes/demo23/products/product-7.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="label-group">
                                        <div className="product-label label-hot">HOT</div>
                                    </div>
                                    <div className="btn-icon-group">
                                        <a href="demo23-product.html" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo23-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo23-product.html">Pink Winter Girl Shoes</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="product-price">$101.00 – $111.00</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                        </div>

                        <div className="col-6 col-md-4 col-xl-3">
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo23-product.html">
                                        <img src="assets/images/demoes/demo23/products/product-2.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="label-group">
                                        <div className="product-label label-hot">HOT</div>
                                    </div>
                                    <div className="btn-icon-group">
                                        <a href="demo23-product.html" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo23-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo23-product.html">Porto Extended Camera</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="product-price">$599.00</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-xl-3">
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo23-product.html">
                                        <img src="assets/images/demoes/demo23/products/product-3.jpg" width={217} height={217} alt="product" />
                                        <img src="assets/images/demoes/demo23/products/product-1.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="label-group">
                                        <div className="product-label label-hot">HOT</div>
                                    </div>
                                    <div className="btn-icon-group">
                                        <a href="demo23-product.html" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo23-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo23-product.html">Blue Child Overshoes</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="product-price">$39.00</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-xl-3">
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo23-product.html">
                                        <img src="assets/images/demoes/demo23/products/product-4.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="label-group">
                                        <div className="product-label label-hot">HOT</div>
                                        <div className="product-label label-sale">-13%</div>
                                    </div>
                                    <div className="btn-icon-group">
                                        <a href="#" title="Add To Cart" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo23-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo23-product.html">Baby Summer Underclothes</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="old-price">$299.00</span>
                                        <span className="product-price">$259.00</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-xl-3">
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo23-product.html">
                                        <img src="assets/images/demoes/demo23/products/product-4.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="label-group">
                                        <div className="product-label label-hot">HOT</div>
                                        <div className="product-label label-sale">-13%</div>
                                    </div>
                                    <div className="btn-icon-group">
                                        <a href="#" title="Add To Cart" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo23-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo23-product.html">Baby Summer Underclothes</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="old-price">$299.00</span>
                                        <span className="product-price">$259.00</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                        </div>

                        <div className="col-6 col-md-4 col-xl-3">
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo23-product.html">
                                        <img src="assets/images/demoes/demo23/products/product-4.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="label-group">
                                        <div className="product-label label-hot">HOT</div>
                                        <div className="product-label label-sale">-13%</div>
                                    </div>
                                    <div className="btn-icon-group">
                                        <a href="#" title="Add To Cart" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo23-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo23-product.html">Baby Summer Underclothes</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="old-price">$299.00</span>
                                        <span className="product-price">$259.00</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                        </div>

                        <div className="col-6 col-md-4 col-xl-3">
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo23-product.html">
                                        <img src="assets/images/demoes/demo23/products/product-4.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="label-group">
                                        <div className="product-label label-hot">HOT</div>
                                        <div className="product-label label-sale">-13%</div>
                                    </div>
                                    <div className="btn-icon-group">
                                        <a href="#" title="Add To Cart" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo23-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo23-product.html">Baby Summer Underclothes</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="old-price">$299.00</span>
                                        <span className="product-price">$259.00</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                        </div>
                        <ProductComponent/>
                        <ProductComponent/>
                        <ProductComponent/>
                        <ProductComponent/>
                    </div>

                </div>
            </section>

            {/*  Colection*/}
            <div className="cats-banner-section mb-3">
                <div className="row m-0 no-gutters">
                    <div className="col-lg-3">
                        <div className="cat-banner d-flex flex-column align-items-center justify-content-center h-100">
                            <h4 className="font4 line-height-1 ls-0 text-primary mb-0">Best Collections</h4>
                            <p className="font2 line-height-1 mb-0">Selected Products From Famous Brands</p>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="categories-slider owl-carousel owl-theme" data-owl-options="{
                      'margin': 0,
                      'nav': false,
                      'items': 1,
                      'responsive': {
                          '576': {
                              'items': 2
                          },
                          '768': {
                              'items': 3
                          },
                          '992': {
                              'items': 3
                          }
                      }
                  }">
                            <div className="product-category" style={{ backgroundColor: '#d8dfe1' }}>
                                <a href="demo23-shop.html">
                                    <figure>
                                        <img src="assets/images/demoes/demo23/products/cats/cat-1.jpg" alt="cat banner" width={500} height={400} />
                                    </figure>
                                    <div className="category-content">
                                        <h3>Boys</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="product-category" style={{ backgroundColor: '#ebeae9' }}>
                                <a href="demo23-shop.html">
                                    <figure>
                                        <img src="assets/images/demoes/demo23/products/cats/cat-2.jpg" alt="cat banner" width={500} height={400} />
                                    </figure>
                                    <div className="category-content">
                                        <h3>Babies</h3>
                                    </div>
                                </a>
                            </div>
                            <div className="product-category" style={{ backgroundColor: '#ead7d5' }}>
                                <a href="demo23-shop.html">
                                    <figure>
                                        <img src="assets/images/demoes/demo23/products/cats/cat-3.jpg" alt="cat banner" width={500} height={400} />
                                    </figure>
                                    <div className="category-content">
                                        <h3>Girls</h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* More Product */}
            <div className="products-container appear-animate" data-animation-name="fadeIn" data-animation-delay={200}>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-4 col-xl-3">
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo23-product.html">
                                        <img src="assets/images/demoes/demo23/products/product-5.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="label-group">
                                        <div className="product-label label-hot">HOT</div>
                                    </div>
                                    <div className="btn-icon-group">
                                        <a href="#" title="Add To Cart" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo23-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo23-product.html">Smart Watches</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="product-price">$299.00</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-xl-3">
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo23-product.html">
                                        <img src="assets/images/demoes/demo23/products/product-6.jpg" width={217} height={217} alt="product" />
                                        <img src="assets/images/demoes/demo23/products/product-9.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="btn-icon-group">
                                        <a href="demo23-product.html" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo23-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo23-product.html">White Girl Shoes</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="product-price">$299.00</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-xl-3">
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo23-product.html">
                                        <img src="assets/images/demoes/demo23/products/product-7.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="btn-icon-group">
                                        <a href="demo23-product.html" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo23-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo23-product.html">Rag baby doll</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="product-price">$55.00</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-xl-3">
                            <div className="product-default inner-quickview inner-icon">
                                <figure>
                                    <a href="demo23-product.html">
                                        <img src="assets/images/demoes/demo23/products/product-4.jpg" width={217} height={217} alt="product" />
                                    </a>
                                    <div className="label-group">
                                        <div className="product-label label-hot">HOT</div>
                                        <div className="product-label label-sale">-13%</div>
                                    </div>
                                    <div className="btn-icon-group">
                                        <a href="#" title="Add To Cart" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                    </div>
                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                        View</a>
                                </figure>
                                <div className="product-details">
                                    <div className="category-wrap">
                                        <div className="category-list">
                                            <a href="demo23-shop.html" className="product-category">category</a>
                                        </div>
                                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="demo23-product.html">Baby Summer Underclothes</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{/* End .product-ratings */}
                                    </div>{/* End .product-container */}
                                    <div className="price-box">
                                        <span className="old-price">$299.00</span>
                                        <span className="product-price">$259.00</span>
                                    </div>{/* End .price-box */}
                                </div>{/* End .product-details */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomePage