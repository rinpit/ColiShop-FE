import React, { useEffect, useState } from 'react'
import * as ProductService from "../../services/ProductServices"
import { useQuery } from 'react-query'
import Loading from '../LoadingComponent/Loading'
import { InputNumber, Rate } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { background, border } from '@chakra-ui/react'
import { borderRadius, fontSize, fontWeight, width } from '@mui/system'
import { color } from 'framer-motion'
import { addOrderProduct } from '../../redux/slices/orderSlice'
import { WrapperInputNumber, WrapperQualityProduct } from './style'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import ColumnGroup from 'antd/es/table/ColumnGroup'


const ProductDetailsComponent = ({ idProduct }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    //  số lượng đơn hàng
    const [numProduct, setNumProduct] = useState(1)
    // lấy data user từ redux
    const user = useSelector((state) => state.user)
    const onChange = (value) => {
        setNumProduct(Number(value))
    }

    // func lấy dữ liệu chi tiết từ product
    const fetchGetDetailsProduct = async (context) => {
        const id = context?.queryKey && context?.queryKey[1]
        if (id) {
            const res = await ProductService.getDetailsProduct(id)
            return res?.data
        }
    }

    // func lấy số lượng
    const handleChangeCount = (type) => {
        console.log("type", type)
        if (type === 'increase') {
            setNumProduct(numProduct + 1)
        } else {
            setNumProduct(numProduct - 1)
        }
        console.log("numProduct", numProduct)
    }


    // console.log("location", location)
    // console.log("user", user)

    const { isLoading, data: productDetails } = useQuery({ queryKey: ['product-details', idProduct], queryFn: fetchGetDetailsProduct }, { enabled: !!idProduct })
    const handleAddOrderProduct = () => {
        if (!user?.id) {
            navigate('/signin', { state: location?.pathname })
        } else {
            // dispatch một orderProduct và truyền đi data
            dispatch(addOrderProduct({
                // truyền một object orderItem
                orderItem: {
                    name: productDetails?.name,
                    amount: numProduct,
                    image: productDetails?.image,
                    price: productDetails?.price,
                    product: productDetails?._id
                }
            }))
        }
    }
    console.log("productDetails", productDetails, user)


    return (
        <Loading isLoading={isLoading}>
            <div className="page-wrapper">
                <main className="main">
                    {/* breadcrumb */}
                    <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Trang chủ</a></li>
                                <li className="breadcrumb-item"><a href="demo23-shop.html">Chi tiết sản phẩm</a></li>
                            </ol>
                        </div>
                    </nav>
                    {/* Product detail */}
                    <div className="container">
                        <div className="product-single-container product-single-default">
                            {/* <Loading isLoading={isLoading}> */}
                            <div className="row">
                                <div className="col-lg-5 col-md-6 product-single-gallery">
                                    <div className="product-slider-container">
                                        <div className="label-group">
                                            <div className="product-label label-hot">HOT</div>
                                            <div className="product-label label-sale">- {productDetails?.discount || 10}  %</div>
                                        </div>
                                        <div className="product-single-carousel owl-carousel owl-theme show-nav-hover">
                                            <div className="product-item">
                                                <img
                                                    // className="product-single-image" 
                                                    src={productDetails?.image}
                                                // width={468} height={468} alt="product"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6 product-single-details">
                                    <h1 className="product-title">{productDetails?.name}</h1>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: `${productDetails?.rating}` }} value={productDetails?.rating} />
                                            <span className="tooltiptext tooltip-top" />
                                            {/* <Rate allowHalf defaultValue={productDetails?.rating} value={productDetails?.rating} /> */}
                                        </div>
                                        {/* <a href="#" className="rating-link">( 6 Reviews )</a> */}
                                    </div>
                                    <hr className="short-divider" />
                                    <div className="price-box">
                                        {/* <span className="old-price">596.000 VNĐ</span> */}
                                        <span className="product-price">{productDetails?.price.toLocaleString()} VNĐ</span>
                                    </div>
                                    <div className="product-desc">
                                        <p>{productDetails?.description}</p>
                                    </div>
                                    <ul className="single-info-list">
                                        <li>MSP: <strong>{productDetails?.msp}</strong></li>
                                    </ul>
                                    <div className="product-action">
                                        <div className="product-single-qty">
                                        </div>

                                        <h5>Quality: </h5>
                                        <WrapperQualityProduct>
                                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('decrease')} >
                                                <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                                            </button>
                                            <WrapperInputNumber onChange={onChange} size='large' value={numProduct} />
                                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('increase')} >
                                                <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                                            </button>
                                        </WrapperQualityProduct>

                                        <ButtonComponent
                                            size={40}
                                            styleButton={{
                                                background: 'rgb(255, 57, 69)',
                                                height: '48px',
                                                width: '220px',
                                                border: 'none',
                                                borderRadius: '4px'
                                            }}
                                            textButton={'Thêm vào giỏ hàng'}
                                            onClick={handleAddOrderProduct}
                                            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                                        ></ButtonComponent>
                                        <ButtonComponent
                                            size={40}
                                            styleButton={{
                                                background: '#fff',
                                                height: '48px',
                                                width: '220px',
                                                border: '1px solid rgb(13, 92, 182)',
                                                borderRadius: '4px',
                                                marginLeft: '20px'
                                            }}
                                            textButton={'Mua trả sau'}
                                            onClick={handleAddOrderProduct}
                                            styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px', fontWeight: '700' }}
                                        ></ButtonComponent>
                                    </div>
                                    <hr className="divider mb-0 mt-0" />
                                    <div className="product-single-share mb-3">
                                        <label className="sr-only">Share:</label>
                                        <div className="social-icons mr-2">
                                            <a href="#" className="social-icon social-facebook icon-facebook" target="_blank" title="Facebook" />
                                            <a href="#" className="social-icon social-twitter icon-twitter" target="_blank" title="Twitter" />
                                            <a href="#" className="social-icon social-linkedin fab fa-linkedin-in" target="_blank" title="Linkedin" />
                                            <a href="#" className="social-icon social-gplus fab fa-google-plus-g" target="_blank" title="Google +" />
                                            <a href="#" className="social-icon social-mail icon-mail-alt" target="_blank" title="Mail" />
                                        </div>
                                        <a href="wishlist.html" className="btn-icon-wish add-wishlist" title="Add to Wishlist">
                                            <i className="icon-wishlist-2" />
                                            <span>Add to Wishlist</span>
                                        </a>
                                        {/* <a href="/" className="btn-icon-wish add-wishlist" title="Add to Wishlist"><i className="icon-wishlist-2" /><span>Add to Wishlist</span></a> */}
                                    </div>
                                    <div className="product-single-share mb-3">
                                        <h5>Giao hàng đến: <span>{user?.address}</span></h5>
                                    </div>
                                    <span> Đổi địa chỉ</span>
                                </div>
                            </div>
                            {/* </Loading> */}
                        </div>
                    </div>
                </main>
            </div>
        </Loading>
    )
}

export default ProductDetailsComponent