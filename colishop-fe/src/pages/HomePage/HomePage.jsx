import React, { useEffect, useState } from "react";
import ProductComponent from "../../components/ProductComponent/ProductComponent";
import * as ProductServices from '../../services/ProductServices'
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import Loading from "../../components/LoadingComponent/Loading";
import { useDebounce } from "../../hooks/useDebounce";
import { WrapperButtonMore } from "./style";
import BannerComponent from "../../components/BannerComponent/BannerComponent";
const HomePage = () => {
    // lấy state của product ra, nghĩa là lấy những data đã nhập ở thanh search đã được lưu ở redux qua bên homepage
    const searchProduct = useSelector((state) => state?.product?.search)
    // khai báo searchDebounce để set thời gian hiển thị sản phẩm
    const searchDebounce = useDebounce(searchProduct, 1000)
    // khỏi tạo state isLoading cho search
    const [loading, setLoading] = useState(false)
    // khởi tạo limit này là số product trong một page
    const [limit, setLimit] = useState(8)
    // =========================================
    // const [products, setProducts] = useState();
    // const [totalProducts, setTotalProducts] = useState(0);
    // const [isLoading, setIsLoading] = useState(false);
    // =========================================


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
    const { isLoading, data: products, isPreviousData } = useQuery({ queryKey: ['products', limit, searchDebounce], queryFn: fetchProductAll },
        { retry: 3, retryDelay: 1000, keepPreviousData: true })
    // keepPreviousData giúp giữ lại những data cũ khi load thêm sản phẩm mà kh cần reload lại trang
    // console.log("isPreviousData", products)

    console.log("products", products)

    // ==========DÙNG USEEFFECT()

    // const fetchAllProduct = async () => {
    //     const res = await ProductServices.getAllProducts()
    //     if (res?.status === 'OK') {
    //         setProducts(res?.data)
    //     } else {

    //     }
    //     console.log("res", res)
    // }

    // useEffect(() => {
    //     fetchAllProduct()
    // }, [])

    return (
        // <Loading isLoading={isLoading || loading}>
        <div className="page-wrapper">
            <section className="intro-section mb-3">
                {/* phần homePageIntroSection */}
                <BannerComponent />
            </section>
            {/* Wellcome to CoLi World */}
            <section className="welcome-section">
                <div className="container">
                    <h2 className="section-title text-center text-uppercase appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={200}>Welcome to Coli’s world
                    </h2>
                    <p className="section-description text-center mb-3 appear-animate" data-animation-name="fadeInUpShorter" data-animation-delay={400}>Enjoy the exceptional quality in all our products
                    </p>
                    <div className="row mb-2">
                        {/* phần homePageSlide */}
                    </div>

                    {/* <div className="info-boxes-container appear-animate"
                            data-animation-name="fadeInUpShorter"
                            data-animation-delay={200}
                        >
                            <div className="row m-0">
                                <div className="info-box info-box-icon-left col-md-4">
                                    <i className="icon-shipping" />
                                    <div className="info-box-content">
                                        <h4 className="ls-n-25">FREE SHIPPING &amp; RETURN</h4>
                                        <p className="font2 font-weight-light">Free shipping on all orders over $99.</p>
                                    </div>
                                </div>
                                <div className="info-box info-box-icon-left col-md-4">
                                    <i className="icon-money" />
                                    <div className="info-box-content">
                                        <h4 className="ls-n-25">MONEY BACK GUARANTEE</h4>
                                        <p className="font2 font-weight-light">100% money back guarantee</p>
                                    </div>
                                </div>
                                <div className="info-box info-box-icon-left col-md-4">
                                    <i className="icon-support" />
                                    <div className="info-box-content">
                                        <h4 className="ls-n-25">ONLINE SUPPORT 24/7</h4>
                                        <p className="font2 font-weight-light">Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}


                    {/* 8 sản phẩm */}
                    {/* <Loading isLoading={isLoading}> */}
                    <div
                        className="row appear-animate"
                    // data-animation-name="fadeInUpShorter"
                    // data-animation-delay={400}
                    >
                        {/* <div className="col-6 col-md-4 col-xl-3"> */}
                        {/* 1 product */}
                        {/* stateProduct để render khi search */}
                        {products?.data?.map((product) => {
                            return (
                                <div key={product._id} className="col-6 col-md-4 col-xl-3">
                                    <ProductComponent
                                        // key={product._id}
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
                                        loading={loading}
                                    />
                                </div>
                            )
                        })}

                    </div>
                    {/* </Loading> */}
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
        // </Loading>
    )
}

export default HomePage