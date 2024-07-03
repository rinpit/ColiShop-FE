import { Rate } from 'antd'
import { color } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductComponent = (props) => {
    //khỏi tạo navigate để referen đến page khác
    const navigate = useNavigate()
    // khởi tạo data để truyền sang HomePage
    const {
        msp,
        name,
        image,
        type,
        rating,
        description,
        price,
        discount,
        countInStock,
        size,
        brand, id } = props
    // hàm handleDetailsProduct
    const handleDetailsProduct = (id) => {
        navigate(`/productdetails/${id}`)
    }
    return (
        // <div className="col-6 col-md-4 col-xl-3">
            <div className="product-default inner-quickview inner-icon"
                onClick={() => handleDetailsProduct(id)}
            >
                <figure>
                    <div>
                        <img src={image} width={217} height={217} alt="product" />
                        <img src={image} width={217} height={217} alt="product" />
                    </div>
                    <div className="label-group">
                        <div className="product-label label-hot">HOT</div>
                        <div className="product-label label-sale">- {discount || 10}  %</div>
                    </div>
                    <div className="btn-icon-group">
                        <a href="demo23-product.html" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                    </div>
                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a>
                </figure>
                <div className="product-details">
                    <div className="category-wrap">
                        <div className="category-list">
                            <a href="demo23-shop.html" className="product-category">{type}</a>
                        </div>
                        <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a>
                    </div>

                    <h3 className="product-title">
                        <a href="demo23-product.html">{name}</a>
                    </h3>

                    <div className="ratings-container">
                        <div className="product-ratings">
                            {/* <Rate allowHalf defaultValue={rating} value={rating} /> */}

                            <span className="ratings" style={{ width: `${rating}` }} />
                            <span className="tooltiptext tooltip-top" />
                        </div>
                    </div>

                    <div className="price-box">
                        {/* toLocaleString() format giá */}
                        <span className="product-price">{price.toLocaleString()} VNĐ</span>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default ProductComponent