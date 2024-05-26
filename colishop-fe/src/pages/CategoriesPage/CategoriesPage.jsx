import React from 'react'
const CategoriesPage = () => {
    return (
        <div className='page-wrapper'>
            <main className='main'>
                <nav aria-label="breadcrumb" class="breadcrumb-nav">
                    <div class="container">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="demo23.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Categories</li>
                        </ol>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 main-content">
                            <nav className="toolbox sticky-header" data-sticky-options="{'mobile': true}">
                                <div className="toolbox-left">
                                    <a href="#" className="sidebar-toggle"><svg data-name="Layer 3" id="Layer_3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <line x1={15} x2={26} y1={9} y2={9} className="cls-1" />
                                        <line x1={6} x2={9} y1={9} y2={9} className="cls-1" />
                                        <line x1={23} x2={26} y1={16} y2={16} className="cls-1" />
                                        <line x1={6} x2={17} y1={16} y2={16} className="cls-1" />
                                        <line x1={17} x2={26} y1={23} y2={23} className="cls-1" />
                                        <line x1={6} x2={11} y1={23} y2={23} className="cls-1" />
                                        <path d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z" className="cls-2" />
                                        <path d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z" className="cls-2">
                                        </path>
                                        <path d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z" className="cls-3" />
                                        <path d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z" className="cls-2" />
                                    </svg>
                                        <span>Filter</span>
                                    </a>
                                    <div className="toolbox-item toolbox-sort">
                                        <label>Sort By:</label>
                                        <div className="select-custom">
                                            <select name="orderby" className="form-control">
                                                <option value="menu_order" selected="selected">Default sorting</option>
                                                <option value="popularity">Sort by popularity</option>
                                                <option value="rating">Sort by average rating</option>
                                                <option value="date">Sort by newness</option>
                                                <option value="price">Sort by price: low to high</option>
                                                <option value="price-desc">Sort by price: high to low</option>
                                            </select>
                                        </div>{/* End .select-custom */}
                                    </div>{/* End .toolbox-item */}
                                </div>{/* End .toolbox-left */}
                                <div className="toolbox-right">
                                    <div className="toolbox-item toolbox-show">
                                        <label>Show:</label>
                                        <div className="select-custom">
                                            <select name="count" className="form-control">
                                                <option value={12}>12</option>
                                                <option value={24}>24</option>
                                                <option value={36}>36</option>
                                            </select>
                                        </div>{/* End .select-custom */}
                                    </div>{/* End .toolbox-item */}
                                    <div className="toolbox-item layout-modes">
                                        <a href="category.html" className="layout-btn btn-grid active" title="Grid">
                                            <i className="icon-mode-grid" />
                                        </a>
                                        <a href="category-list.html" className="layout-btn btn-list" title="List">
                                            <i className="icon-mode-list" />
                                        </a>
                                    </div>{/* End .layout-modes */}
                                </div>{/* End .toolbox-right */}
                            </nav>
                            <div className="row">
                                <div className="col-6 col-sm-4 col-lg-3">
                                    <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="/productdetail">
                                                <img src="assets/images/demoes/demo23/products/product-0.jpg" width={217} height={217} alt="product" />
                                            </a>
                                            <div className="label-group">
                                                <div className="product-label label-sale">-89%</div>
                                            </div>
                                            <div className="btn-icon-group">
                                                <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="category-wrap">
                                                <div className="category-list">
                                                    <a href="/productdetail" className="product-category">Dresses</a>
                                                </div>
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                            </div>
                                            <h3 className="product-title">
                                                <a href="/productdetail">Jasambac</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="product-ratings">
                                                    <span className="ratings" style={{ width: '0%' }} />
                                                    {/* End .ratings */}
                                                    <span className="tooltiptext tooltip-top" />
                                                </div>{/* End .product-ratings */}
                                            </div>{/* End .product-container */}
                                            <div className="price-box">
                                                <span className="old-price">596.000 VNĐ</span>
                                                <br />
                                                <span className="product-price">102.000 VNĐ</span>
                                            </div>{/* End .price-box */}
                                        </div>{/* End .product-details */}
                                    </div>
                                </div>{/* End .col-lg-3 */}

                                <div className="col-6 col-sm-4 col-lg-3">
                                    <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo23-product.html">
                                                <img src="assets/images/demoes/demo23/products/product-01.jpg" width={217} height={217} alt="product" />
                                            </a>
                                            <div className="label-group">
                                                <div className="product-label label-hot">HOT</div>
                                                <div className="product-label label-sale">-13%</div>
                                            </div>
                                            <div className="btn-icon-group">
                                                <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                                View</a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="category-wrap">
                                                <div className="category-list">
                                                    <a href="demo23-shop.html" className="product-category">Sweater</a>
                                                </div>
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                            </div>
                                            <h3 className="product-title">
                                                <a href="demo23-product.html">Turtleneck Sweater H&amp;M</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="product-ratings">
                                                    <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                                    <span className="tooltiptext tooltip-top" />
                                                </div>{/* End .product-ratings */}
                                            </div>{/* End .product-container */}
                                            <div className="price-box">
                                                <span className="old-price">299.000 VNĐ</span>
                                                <br />
                                                <span className="product-price">259.000 VNĐ</span>
                                            </div>{/* End .price-box */}
                                        </div>{/* End .product-details */}
                                    </div>
                                </div>{/* End .col-lg-3 */}

                                <div className="col-6 col-sm-4 col-lg-3">
                                    <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo23-product.html">
                                                <img src="assets/images/demoes/demo23/products/product-02.jpg" width={217} height={217} alt="product" />
                                            </a>
                                            <div className="label-group">
                                                <div className="product-label label-sale">-35%</div>
                                            </div>
                                            <div className="btn-icon-group">
                                                <a href="demo23-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="category-wrap">
                                                <div className="category-list">
                                                    <a href="demo23-shop.html" className="product-category">Carigan</a>
                                                </div>
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                            </div>
                                            <h3 className="product-title">
                                                <a href="demo23-product.html">Kirra Cardigan</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="product-ratings">
                                                    <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                                    <span className="tooltiptext tooltip-top" />
                                                </div>{/* End .product-ratings */}
                                            </div>{/* End .product-container */}
                                            <div className="price-box">
                                                <span className="old-price">199.000 VNĐ</span>
                                                <br />
                                                <span className="product-price">129.000 VNĐ</span>
                                            </div>{/* End .price-box */}
                                        </div>{/* End .product-details */}
                                    </div>
                                </div>{/* End .col-lg-3 */}

                                <div className="col-6 col-sm-4 col-lg-3">
                                    <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo23-product.html">
                                                <img src="assets/images/demoes/demo23/products/product-03.jpg" width={217} height={217} alt="product" />
                                            </a>
                                            <div className="label-group">
                                                <div className="product-label label-sale">-89%</div>
                                            </div>
                                            <div className="btn-icon-group">
                                                <a href="demo23-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="category-wrap">
                                                <div className="category-list">
                                                    <a href="demo23-shop.html" className="product-category">Jacket</a>
                                                </div>
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                            </div>
                                            <h3 className="product-title">
                                                <a href="demo23-product.html"> YMI Denim Jacket</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="product-ratings">
                                                    <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
                                                    <span className="tooltiptext tooltip-top" />
                                                </div>{/* End .product-ratings */}
                                            </div>{/* End .product-container */}
                                            <div className="price-box">
                                                <span className="old-price">596.000 VNĐ</span>
                                                <br />
                                                <span className="product-price">68.000 VNĐ</span>
                                            </div>{/* End .price-box */}
                                        </div>{/* End .product-details */}
                                    </div>
                                </div>{/* End .col-lg-3 */}

                                <div className="col-6 col-sm-4 col-lg-3">
                                    <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo23-product.html">
                                                <img src="assets/images/demoes/demo23/products/product-10.jpg" width={217} height={217} alt="product" />
                                            </a>
                                            <div className="label-group">
                                                <div className="product-label label-sale">-17%</div>
                                            </div>
                                            <div className="btn-icon-group">
                                                <a href="demo23-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="category-wrap">
                                                <div className="category-list">
                                                    <a href="demo23-shop.html" className="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                            </div>
                                            <h3 className="product-title">
                                                <a href="demo23-product.html">Blue Boy Spring Shoes</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="product-ratings">
                                                    <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
                                                    <span className="tooltiptext tooltip-top" />
                                                </div>{/* End .product-ratings */}
                                            </div>{/* End .product-container */}
                                            <div className="price-box">
                                                <span className="old-price">$59.00</span>
                                                <span className="product-price">$49.00</span>
                                            </div>{/* End .price-box */}
                                        </div>{/* End .product-details */}
                                    </div>
                                </div>{/* End .col-lg-3 */}

                                <div className="col-6 col-sm-4 col-lg-3">
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
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
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
                                </div>{/* End .col-lg-3 */}

                                <div className="col-6 col-sm-4 col-lg-3">
                                    <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo23-product.html">
                                                <img src="assets/images/demoes/demo23/products/product-12.jpg" width={217} height={217} alt="product" />
                                            </a>
                                            <div className="btn-icon-group">
                                                <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="category-wrap">
                                                <div className="category-list">
                                                    <a href="demo23-shop.html" className="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                            </div>
                                            <h3 className="product-title">
                                                <a href="demo23-product.html">Casual Brown Shoes</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="product-ratings">
                                                    <span className="ratings" style={{ width: '100%' }} />{/* End .ratings */}
                                                    <span className="tooltiptext tooltip-top" />
                                                </div>{/* End .product-ratings */}
                                            </div>{/* End .product-container */}
                                            <div className="price-box">
                                                <span className="product-price">$108.00</span>
                                            </div>{/* End .price-box */}
                                        </div>{/* End .product-details */}
                                    </div>
                                </div>{/* End .col-lg-3 */}

                                <div className="col-6 col-sm-4 col-lg-3">
                                    <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo23-product.html">
                                                <img src="assets/images/demoes/demo23/products/product-13.jpg" width={217} height={217} alt="product" />
                                            </a>
                                            <div className="label-group">
                                                <div className="product-label label-sale">-35%</div>
                                            </div>
                                            <div className="btn-icon-group">
                                                <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="category-wrap">
                                                <div className="category-list">
                                                    <a href="demo23-shop.html" className="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                            </div>
                                            <h3 className="product-title">
                                                <a href="demo23-product.html">Pink Baby Caps</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="product-ratings">
                                                    <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                                    <span className="tooltiptext tooltip-top" />
                                                </div>{/* End .product-ratings */}
                                            </div>{/* End .product-container */}
                                            <div className="price-box">
                                                <span className="product-price">$199.00</span>
                                                <span className="product-price">$129.00</span>
                                            </div>{/* End .price-box */}
                                        </div>{/* End .product-details */}
                                    </div>
                                </div>{/* End .col-lg-3 */}

                                <div className="col-6 col-sm-4 col-lg-3">
                                    <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo23-product.html">
                                                <img src="assets/images/demoes/demo23/products/product-14.jpg" width={217} height={217} alt="product" />
                                            </a>
                                            <div className="label-group">
                                                <div className="product-label label-hot">HOT</div>
                                            </div>
                                            <div className="btn-icon-group">
                                                <a href="demo23-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="category-wrap">
                                                <div className="category-list">
                                                    <a href="demo23-shop.html" className="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                            </div>
                                            <h3 className="product-title">
                                                <a href="demo23-product.html">Pink Baby Spring Shoes</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="product-ratings">
                                                    <span className="ratings" style={{ width: '0%' }} />
                                                    {/* End .ratings */}
                                                    <span className="tooltiptext tooltip-top" />
                                                </div>{/* End .product-ratings */}
                                            </div>{/* End .product-container */}
                                            <div className="price-box">
                                                <span className="product-price">$299.00</span>
                                            </div>{/* End .price-box */}
                                        </div>{/* End .product-details */}
                                    </div>
                                </div>{/* End .col-lg-3 */}

                                <div className="col-6 col-sm-4 col-lg-3">
                                    <div className="product-default inner-quickview inner-icon">
                                        <figure>
                                            <a href="demo23-product.html">
                                                <img src="assets/images/demoes/demo23/products/product-15.jpg" width={217} height={217} alt="product" />
                                            </a>
                                            <div className="label-group">
                                                <div className="product-label label-sale">-15%</div>
                                            </div>
                                            <div className="btn-icon-group">
                                                <a href="#" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                            </div>
                                            <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                                        </figure>
                                        <div className="product-details">
                                            <div className="category-wrap">
                                                <div className="category-list">
                                                    <a href="demo23-shop.html" className="product-category">category</a>
                                                </div>
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                                            </div>
                                            <h3 className="product-title">
                                                <a href="demo23-product.html">Pink Girl Overshoes</a>
                                            </h3>
                                            <div className="ratings-container">
                                                <div className="product-ratings">
                                                    <span className="ratings" style={{ width: '90%' }} />{/* End .ratings */}
                                                    <span className="tooltiptext tooltip-top" />
                                                </div>{/* End .product-ratings */}
                                            </div>{/* End .product-container */}
                                            <div className="price-box">
                                                <span className="old-price">$1,999.00</span>
                                                <span className="product-price">$1,699.00</span>
                                            </div>{/* End .price-box */}
                                        </div>{/* End .product-details */}
                                    </div>
                                </div>{/* End .col-lg-3 */}

                                <div className="col-6 col-sm-4 col-lg-3">
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
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
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
                                </div>{/* End .col-lg-3 */}

                                <div className="col-6 col-sm-4 col-lg-3">
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
                                                <a href="wishlist.html" title="Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
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
                                </div>{/* End .col-lg-3 */}
                            </div>{/* End .row */}

                            <nav className="toolbox toolbox-pagination">
                                <div className="toolbox-item toolbox-show">
                                    <label className="mt-0">Show:</label>
                                    <div className="select-custom">
                                        <select name="count" className="form-control">
                                            <option value={12}>12</option>
                                            <option value={24}>24</option>
                                            <option value={36}>36</option>
                                        </select>
                                    </div>{/* End .select-custom */}
                                </div>{/* End .toolbox-item */}
                                
                                <ul className="pagination toolbox-item">
                                    <li className="page-item disabled">
                                        <a className="page-link page-link-btn" href="#"><i className="icon-angle-left" /></a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><span className="page-link">...</span></li>
                                    <li className="page-item">
                                        <a className="page-link page-link-btn" href="#"><i className="icon-angle-right" /></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>{/* End .col-lg-9 */}

                        <div className="sidebar-overlay" />
                        <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
                            <div className="sidebar-wrapper">
                                <div className="widget">
                                    <h3 className="widget-title">
                                        <a data-toggle="collapse" href="#widget-body-1" role="button" aria-expanded="true" aria-controls="widget-body-1">Categories</a>
                                    </h3>
                                    <div className="collapse show" id="widget-body-1">
                                        <div className="widget-body">
                                            <ul className="cat-list">
                                                <li>
                                                    <a href="#widget-category-1" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="widget-category-1">
                                                        All<span className="products-count">(12)</span>
                                                        {/* <span class="toggle"></span> */}
                                                    </a>
                                                    {/* <div class="collapse show" id="widget-category-1">
                                              <ul class="cat-sublist">
                                                  <li><a href="#">Toys<span class="products-count">(1)</span></a></li>
                                                  <li><a href="#">Trousers<span class="products-count">(2)</span></a></li>
                                              </ul>
                                          </div> */}
                                                </li>
                                                <li>
                                                    <a href="#widget-category-2" className="collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="widget-category-2">
                                                        Dresses<span className="products-count">(8)</span>
                                                        <span className="toggle" />
                                                    </a>
                                                    <div className="collapse" id="widget-category-2">
                                                        <ul className="cat-sublist">
                                                            <li>Cocktail Dress<span className="products-count">(3)</span></li>
                                                            <li>Casual Dress<span className="products-count">(2)</span></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">Gifts<span className="products-count">(4)</span></a>
                                                </li>
                                                <li>
                                                    <a href="#widget-category-4" className="collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="widget-category-4">
                                                        Girls<span className="products-count">(5)</span>
                                                        <span className="toggle" />
                                                    </a>
                                                    <div className="collapse" id="widget-category-4">
                                                        <ul className="cat-sublist">
                                                            <li>Garden<span className="products-count">(1)</span></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <a href="#">Tops<span className="products-count">(1)</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">Sweaters<span className="products-count">(1)</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">Coats &amp; Jackets<span className="products-count">(1)</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">Jeans<span className="products-count">(1)</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">Pants<span className="products-count">(1)</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">Skirts<span className="products-count">(1)</span></a>
                                                </li>
                                            </ul>
                                        </div>{/* End .widget-body */}
                                    </div>{/* End .collapse */}
                                </div>{/* End .widget */}
                                <div className="widget">
                                    <h3 className="widget-title">
                                        <a data-toggle="collapse" href="#widget-body-4" role="button" aria-expanded="true" aria-controls="widget-body-4">Sizes</a>
                                    </h3>
                                    <div className="collapse show" id="widget-body-4">
                                        <div className="widget-body">
                                            <ul className="cat-list">
                                                <li><a href="#">S</a></li>
                                                <li><a href="#">M</a></li>
                                                <li><a href="#">L</a></li>
                                                <li><a href="#">XL</a></li>
                                                <li><a href="#">XXL</a></li>
                                            </ul>
                                        </div>{/* End .widget-body */}
                                    </div>{/* End .collapse */}
                                </div>{/* End .widget */}
                                <div className="widget">
                                    <h3 className="widget-title">
                                        <a data-toggle="collapse" href="#widget-body-2" role="button" aria-expanded="true" aria-controls="widget-body-2">Price</a>
                                    </h3>
                                    <div className="collapse show" id="widget-body-2">
                                        <div className="widget-body pt-4 pb-0">
                                            <form action="#">
                                                <div className="price-slider-wrapper">
                                                    <div id="price-slider" />{/* End #price-slider */}
                                                </div>{/* End .price-slider-wrapper */}
                                                <div className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                                                    <div className="filter-price-text">
                                                        Price:
                                                        <span id="filter-price-range" />
                                                    </div>{/* End .filter-price-text */}
                                                    <button type="submit" className="btn btn-primary">Filter</button>
                                                </div>{/* End .filter-price-action */}
                                            </form>
                                        </div>{/* End .widget-body */}
                                    </div>{/* End .collapse */}
                                </div>{/* End .widget */}
                                <div className="widget widget-color">
                                    <h3 className="widget-title">
                                        <a data-toggle="collapse" href="#widget-body-3" role="button" aria-expanded="true" aria-controls="widget-body-3">Color</a>
                                    </h3>
                                    <div className="collapse show" id="widget-body-3">
                                        <div className="widget-body pb-0">
                                            <ul className="config-swatch-list">
                                                <li className="active">
                                                    <a href="#" style={{ backgroundColor: '#000' }}>Black</a>
                                                </li>
                                                <li>
                                                    <a href="#" style={{ backgroundColor: '#0188cc' }}>Blue</a>
                                                </li>
                                                <li>
                                                    <a href="#" style={{ backgroundColor: '#81d742' }}>Green</a>
                                                </li>
                                                <li>
                                                    <a href="#" style={{ backgroundColor: '#eded65' }}>Yellow</a>
                                                </li>
                                                <li>
                                                    <a href="#" style={{ backgroundColor: '#6085a5' }}>Indigo</a>
                                                </li>
                                                <li>
                                                    <a href="#" style={{ backgroundColor: '#83c2bd' }}>Light-Blue</a>
                                                </li>
                                                <li>
                                                    <a href="#" style={{ backgroundColor: '#ab6e6e' }}>Red</a>
                                                </li>
                                            </ul>
                                        </div>{/* End .widget-body */}
                                    </div>{/* End .collapse */}
                                </div>{/* End .widget */}
                                <div className="widget widget-featured pb-0">
                                    <h3 className="widget-title">Featured Products</h3>
                                    <div className="widget-body">
                                        {/* <div class="featured-col">
                                  <div class="product-default left-details product-widget">
                                      <figure>
                                          <a href="demo23-product.html">
                                              <img src="assets/images/demoes/demo23/products/small/product-1.jpg"
                                                  width="75" height="75" alt="product" />
                                              <img src="assets/images/demoes/demo23/products/small/product-6.jpg"
                                                  width="75" height="75" alt="product" />
                                          </a>
                                      </figure>
                                      <div class="product-details">
                                          <h3 class="product-title">
                                              <a href="demo23-product.html">Pink Winter Girl Shoes</a>
                                          </h3>
                                          <div class="ratings-container">
                                              <div class="product-ratings">
                                                  <span class="ratings" style="width:80%"></span> */}
                                        {/* End .ratings */}
                                        {/* <span class="tooltiptext tooltip-top"></span> */}
                                        {/* </div> */}
                                        {/* End .product-ratings */}
                                        {/* </div> */}
                                        {/* End .product-container */}
                                        {/* <div class="price-box">
                                              <span class="product-price">$101.00 &ndash; $111.00</span>
                                          </div> */}
                                        {/* End .price-box */}
                                        {/* </div> */}
                                        {/* End .product-details */}
                                        {/* </div> */}
                                        <div className="product-default left-details product-widget">
                                            <figure>
                                                <a href="demo23-product.html">
                                                    <img src="assets/images/demoes/demo23/products/small/product-2.jpg" width={75} height={75} alt="product" />
                                                </a>
                                            </figure>
                                            <div className="product-details">
                                                <h3 className="product-title">
                                                    <a href="demo23-product.html">Porto Extended Camera</a>
                                                </h3>
                                                <div className="ratings-container">
                                                    <div className="product-ratings">
                                                        <span className="ratings" style={{ width: '0%' }} />
                                                        {/* End .ratings */}
                                                        <span className="tooltiptext tooltip-top" />
                                                    </div>{/* End .product-ratings */}
                                                </div>{/* End .product-container */}
                                                <div className="price-box">
                                                    <span className="product-price">$599.00</span>
                                                </div>{/* End .price-box */}
                                            </div>{/* End .product-details */}
                                        </div>
                                    </div>{/* End .featured-col */}
                                </div>{/* End .widget-body */}
                            </div>{/* End .widget */}
                        </aside></div>{/* End .sidebar-wrapper */}
                    {/* End .col-lg-3 */}
                </div>{/* End .row */}
                {/* End .container */}
            </main>

        </div>
    )
}

export default CategoriesPage