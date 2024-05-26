import React from 'react'

const ProductComponent = () => {
    return (
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
    )
}

export default ProductComponent