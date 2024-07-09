import { Rate } from 'antd'
import { color } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../LoadingComponent/Loading'

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
        brand, id , loading} = props

    // hàm handleDetailsProduct
    const handleDetailsProduct = (id) => {
        // navigate(`/product-details/${id}`)
        window.location.href = `https://frontend-colishop.vercel.app/product-details/${id}`
    }
    return (
        // <div className="col-6 col-md-4 col-xl-3">
        <div className="product-default inner-quickview inner-icon"
            style={{cursor: 'pointer'}}
            onClick={() => handleDetailsProduct(id)}
        >
            <figure>
                <div>
                    <img src={image} width={217} height={217} alt="product" />
                    {/* <img src={image} width={217} height={217} alt="product" /> */}
                </div>
                <div className="label-group">
                    <div className="product-label label-hot">HOT</div>
                    <div className="product-label label-sale">- {discount || 10}  %</div>
                </div>
                {/* <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a> */}
            </figure>
            <div className="product-details">
                <div className="category-wrap">
                    <div className="category-list">
                        <span className="product-category">{type}</span>
                    </div>
                    {/* <a href="wishlist.html" title="Add to Wishlist" className="btn-icon-wish"><i className="icon-heart" /></a> */}
                </div>

                <h3 className="product-title">
                    <span>{name}</span>
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
                    <span className="product-price">{price?.toLocaleString()} VNĐ</span>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default ProductComponent