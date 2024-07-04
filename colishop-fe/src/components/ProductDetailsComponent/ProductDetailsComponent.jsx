import React, { useEffect, useState } from 'react'
import * as ProductService from "../../services/ProductServices"
import { useQuery } from 'react-query'
import Loading from '../LoadingComponent/Loading'
import { Rate } from 'antd'

const ProductDetailsComponent = ({ idProduct }) => {
    const [numProduct, setNumProduct] = useState(1)
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
    const { isLoading, data: productDetails } = useQuery({ queryKey: ['product-details', idProduct], queryFn: fetchGetDetailsProduct }, { enabled: !!idProduct })
    console.log("productDetails", productDetails)

    //====================================
    // const [productDetails, setProductDetails] = useState('')
    // const [isLoading, setIsLoading] = useState(false)


    // useEffect(() => {
    //     const fetchGetDetailsProduct = async () => {
    //         if (idProduct) {
    //             setIsLoading(true);
    //             try {
    //                 const res = await ProductService.getDetailsProduct(idProduct);
    //                 setProductDetails(res?.data);
    //             } catch (error) {
    //                 console.error("Error fetching product details:", error);
    //             } finally {
    //                 setIsLoading(false);
    //             }
    //         }
    //     };

    //     fetchGetDetailsProduct();
    // }, [idProduct]);

    // console.log("productDetails", productDetails);

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
                                                <img className="product-single-image" src={productDetails?.image}
                                                    width={468} height={468} alt="product"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6 product-single-details">
                                    <h1 className="product-title">{productDetails?.name}</h1>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: `${productDetails?.rating}` }} />
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
                                            <input className="horizontal-quantity form-control" type="text" onChange={onChange} value={numProduct} />
                                        </div>
                                        <div className="btn btn-dark add-cart mr-2" title="Add to Cart">Thêm vào giỏ hàng</div>
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
                                        {/* <a href="/" className="btn-icon-wish add-wishlist" title="Add to Wishlist"><i className="icon-wishlist-2" /><span>Add to Wishlist</span></a> */}
                                    </div>
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