import React, { useEffect, useRef, useState } from "react";
import ProductComponent from "../../components/ProductComponent/ProductComponent";
// import { useQuery } from "@tanstack/react-query";
import * as ProductServices from '../../services/ProductServices'
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import Loading from "../../components/LoadingComponent/Loading";
import { useDebounce } from "../../hooks/useDebounce";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { border } from "@chakra-ui/react";
import { color } from "framer-motion";
import { borderRadius } from "@mui/system";
import { WrapperButtonMore } from "./style";
const HomePage = () => {
    // lấy state của product ra, nghĩa là lấy những data đã nhập ở thanh search đã được lưu ở redux qua bên homepage
    const searchProduct = useSelector((state) => state?.product?.search)
    // khai báo searchDebounce để set thời gian hiển thị sản phẩm
    const searchDebounce = useDebounce(searchProduct, 1000)
    // khỏi tạo state isLoading cho search
    const [loading, setLoading] = useState(false)
    // khởi tạo limit này là số product trong một page
    const [limit, setLimit] = useState(8)
    // hàm lấy data products
    const fetchProductAll = async (context) => {
        // console.log("context", context)

        // limit lấy ra từ query ở phần từ thứ 2 ở bên dưới useQuery(['products', limit, searchDebounce]
        const limit = context?.queryKey && context?.queryKey[1]
        // search lấy ra từ query ở phần từ thứ 3 ở bên dưới useQuery(['products', limit, searchDebounce]
        const search = context?.queryKey && context?.queryKey[2]

        // getAllProduct nhận thêm giá trị search , limit
        const res = await ProductServices.getAllProduct(search, limit)
        return res;
    }
    // những query này sẽ tương ứng với context ở trên với mảng [0], [1], [2]
    const { isLoading, data: products, isPreviousData } = useQuery(['products', limit, searchDebounce], fetchProductAll, { retry: 3, retryDelay: 1000, keepPreviousData: true })
    // keepPreviousData giúp giữ lại những data cũ khi load thêm sản phẩm mà kh cần reload lại trang
    // console.log("isPreviousData", products)
    return (
        <Loading isLoading={isLoading || loading}>
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
                                        <a href="demo23-shop.html" className="btn btn-link"><i>View our Dresses</i><i className="icon-right-open-big" /></a>
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
                                        <a href="demo23-shop.html" className="btn btn-link"><i>View our Specials</i><i className="icon-right-open-big" /></a>
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
                                <div className="banner banner1 mb-2 appear-animate" data-animation-name="fadeIn" data-animation-delay={200} style={{ backgroundColor: '#d8d8d8' }} >
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
                            {/* <div className="col-6 col-md-4 col-xl-3"> */}
                            {/* 1 product */}
                            {/* stateProduct để render khi search */}
                            {products?.data?.map((product) => {
                                return (
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <ProductComponent
                                            key={product._id}
                                            msp={product.msp}
                                            name={product.name}
                                            image={product.image}
                                            type={product.type}
                                            rating={product.rating}
                                            description={product.description}
                                            price={product.price}
                                            discount={product.discount}
                                            countInStock={product.countInStock}
                                            size={product.size}
                                            branch={product.branch}
                                            id={product._id}
                                        />
                                    </div>
                                )
                            })}

                        </div>
                        {/* button Xem Thêm */}
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <WrapperButtonMore
                                textButton="Xem Thêm"
                                type="outline"
                                styleButton={{
                                    border: '1px solid rgb(11, 116, 229)',
                                    color: `${products?.total === products?.data?.length ? '#ccc' : 'rgb(11, 116, 229)'}`,
                                    width: '220px',
                                    height: '36px',
                                    borderRadius: '4px'
                                }}
                                // disable button khi mà ...
                                disabled={products?.total === products?.data?.length}
                                styleTextButton={{ fontWeight: 500, color: products?.total === products?.data?.length && '#fff' }}
                                // khi click xem thêm thì sẽ load thêm 8 products
                                onClick={() => setLimit((prev) => prev + 8)}
                            />
                        </div>
                    </div>
                </section>
            </div >
        </Loading>
    )
}

export default HomePage