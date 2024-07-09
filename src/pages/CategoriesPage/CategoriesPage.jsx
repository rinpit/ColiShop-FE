import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as ProductServices from '../../services/ProductServices'
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect, useRef, useState } from "react";
import ProductComponent from '../../components/ProductComponent/ProductComponent';
import { WrapperButtonMore } from '../HomePage/style';
import * as ProductService from "../../services/ProductServices"
import TypeProduct from '../../components/TypeProduct/TypeProduct';

const CategoriesPage = () => {
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
    // khởi tạo để lấy type product
    const [typeProducts, setTypeProducts] = useState([])
    // những query này sẽ tương ứng với context ở trên với mảng [0], [1], [2]
    const { isLoading, data: products, isPreviousData } = useQuery(['products', limit, searchDebounce], fetchProductAll, { retry: 3, retryDelay: 1000, keepPreviousData: true })
    // keepPreviousData giúp giữ lại những data cũ khi load thêm sản phẩm mà kh cần reload lại trang
    // console.log("isPreviousData", products)

    // lấy type products
    const fetchAllTypeProduct = async () => {
        const res = await ProductService.getAllTypeProduct()
        setTypeProducts(res?.data)
    }
    // lấy type products
    useEffect(() => {
        fetchAllTypeProduct()
    }, [])

    // ví dụ
    const arr = ['Áo1', 'Áo2', 'Áo3']
    return (
        <div className='page-wrapper'>
            <main className='main'>
                <nav aria-label="breadcrumb" class="breadcrumb-nav">
                    <div class="container">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
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
                                        </div>
                                    </div>
                                </div>
                                <div className="toolbox-right">
                                    <div className="toolbox-item toolbox-show">
                                        <label>Show:</label>
                                        <div className="select-custom">
                                            <select name="count" className="form-control">
                                                <option value={12}>12</option>
                                                <option value={24}>24</option>
                                                <option value={36}>36</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="toolbox-item layout-modes">
                                        <a href="category.html" className="layout-btn btn-grid active" title="Grid">
                                            <i className="icon-mode-grid" />
                                        </a>
                                        <a href="category-list.html" className="layout-btn btn-list" title="List">
                                            <i className="icon-mode-list" />
                                        </a>
                                    </div>
                                </div>
                            </nav>

                            <div className="row">
                                {/* 1 product */}
                                {/* stateProduct để render khi search */}
                                {products?.data?.map((product) => {
                                    return (
                                        <div key={product._id} className="col-6 col-sm-4 col-lg-3">
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



                                <div className="widget" style={{ border: '1px solid #e7e7e7' }}>
                                    <div>
                                        <h3 className="widget-title">
                                            <a data-toggle="collapse" href="#widget-body-1" role="button" aria-expanded="true" aria-controls="widget-body-1">Phân Loại Sản Phẩm</a>
                                        </h3>
                                        <div className="collapse show" id="widget-body-1">
                                            {typeProducts.map((item) => {
                                                return (
                                                    <TypeProduct name={item} key={item} />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>



                                <div className="widget" style={{ borderBottom: '1px solid #e7e7e7' }}>
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
                                        </div>
                                    </div>
                                </div>
                                <div className="widget">
                                    <h3 className="widget-title">
                                        <a data-toggle="collapse" href="#widget-body-2" role="button" aria-expanded="true" aria-controls="widget-body-2">Price</a>
                                    </h3>
                                    <div className="collapse show" id="widget-body-2">
                                        <div className="widget-body pt-4 pb-0">
                                            <form action="#">
                                                <div className="price-slider-wrapper">
                                                    <div id="price-slider" />
                                                </div>
                                                <div className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                                                    <div className="filter-price-text">
                                                        Price:
                                                        <span id="filter-price-range" />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Filter</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </aside>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default CategoriesPage