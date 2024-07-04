import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as ProductServices from '../../services/ProductServices'
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect, useRef, useState } from "react";
import ProductComponent from '../../components/ProductComponent/ProductComponent';
import { WrapperButtonMore } from '../HomePage/style';
import * as ProductService from "../../services/ProductServices"
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import Loading from '../../components/LoadingComponent/Loading';
const TypeProductPage = () => {
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
  // Từ location, lấy ra state đã lưu ở bên TypeProduct.jsx truyền qua
  const { state } = useLocation()
  const [productType, setProductType] = useState([])
  // ===================================================
  // lấy DATA type product
  const fetchProductType = async (type) => {
    setLoading(true)
    const res = await ProductService.getProductType(type)
    if (res?.status === 'OK') {
      setLoading(false)
      setProductType(res?.data)
    } else {
      setLoading(false)
    }
    console.log("res", res)
  }
  // lấy DATA type product
  useEffect(() => {
    if (state) {
      fetchProductType(state)
    }
  }, [state])

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
          <Loading isLoading={loading}>
            <div className="row">
              <div className="col-lg-9 main-content">
                <div className="row">
                  {/* 1 product */}
                  {/* productType lấy những sản phẩm khi render ra từng loại */}
                  {productType?.map((product) => {
                    return (
                      <div className="col-6 col-sm-4 col-lg-3">
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

                <nav className="toolbox toolbox-pagination"></nav>
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
                  {/* 
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
                 */}
                </div>
              </aside>
            </div>
          </Loading>
        </div>
      </main>

    </div>
  )
}

export default TypeProductPage