import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { WrapperInputNumber, WrapperQualityProduct } from '../../components/ProductDetailsComponent/style'
import { WrapperInputNumber, WrapperQualityProduct } from './style'

import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { decreaseAmount, increaseAmount, removeOrderProduct } from '../../redux/slices/orderSlice'
const CartPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    //  số lượng đơn hàng
    const [numProduct, setNumProduct] = useState(1)
    // lấy data user từ redux
    // const user = useSelector((state) => state.user)
    const onChange = (value) => {
        setNumProduct(Number(value))
    }

    // func lấy dữ liệu chi tiết từ product
    // const fetchGetDetailsProduct = async (context) => {
    //     const id = context?.queryKey && context?.queryKey[1]

    //     if (id) {
    //         const res = await ProductService.getDetailsProduct(id)
    //         return res?.data
    //     }
    // }

    // func xử lý số lượng product hiện có trong giỏ hàng
    const handleChangeCount = (type, idProduct) => {
        if (type === 'increase') {
            dispatch(increaseAmount({ idProduct }))
        } else {
            dispatch(decreaseAmount({ idProduct }))
        }
    }

    // func xử lý xoá product hiện có trong giỏ hàng
    const handleDeleteOrder = (idProduct) => {
        dispatch(removeOrderProduct({ idProduct }))
    }

    // lấy data order
    const order = useSelector((state) => state.order)

    console.log("order", order)
    return (
        <div className='page-wrapper'>
            <main className='main'>
                <div className='container'>
                    <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
                        <li className="active">
                            <a href="cart.html">Shopping Cart</a>
                        </li>
                        <li>
                            <a href="checkout.html">Checkout</a>
                        </li>
                        <li className="disabled">
                            <a href="cart.html">Order Complete</a>
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cart-table-container">
                                <table className="table table-cart">
                                    <thead>
                                        <tr>
                                            <th className="thumbnail-col" />
                                            <th className="product-col">Sản Phẩm</th>
                                            <th className="price-col">Đơn Giá</th>
                                            <th className="qty-col">Số lượng</th>
                                            <th className="text-right">Thành Tiền</th>
                                        </tr>
                                    </thead>

                                    {order?.orderItems?.map((order) => {
                                        return (
                                            <tbody>
                                                <tr className="product-row">

                                                    <td>
                                                        <figure className="product-image-container">
                                                            <a
                                                                // href="product.html" 
                                                                className="product-image">
                                                                <img src={order?.image} alt="product" />
                                                            </a>
                                                            {/* xoá sản phẩm */}

                                                            <a className="btn-remove icon-cancel" title="Remove Product" onClick={() => handleDeleteOrder(order?.product)} />
                                                        </figure>
                                                    </td>

                                                    <td className="product-col">
                                                        <h5 className="product-title">
                                                            <a href="product.html">{order?.name}</a>
                                                        </h5>
                                                    </td>

                                                    <td>{order?.price.toLocaleString()}</td>

                                                    <td>
                                                        <div className="product-single-qty">
                                                            {/* <input className="horizontal-quantity form-control" type="text" /> */}
                                                        </div>
                                                        <WrapperQualityProduct>
                                                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('decrease', order?.product)} >
                                                                <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                                                            </button>
                                                            <WrapperInputNumber onChange={onChange} size='large' value={order?.amount} />
                                                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('increase', order?.product)} >
                                                                <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                                                            </button>
                                                        </WrapperQualityProduct>
                                                    </td>
                                                    <td className="text-right"><span className="subtotal-price">{(order?.price * order?.amount).toLocaleString()}</span></td>
                                                </tr>

                                            </tbody>
                                        )
                                    })}


                                    <tfoot>
                                        <tr>
                                            <td colSpan={5} className="clearfix">
                                                <div className="float-left">
                                                    <div className="cart-discount">
                                                        <form action="#">
                                                            <div className="input-group">
                                                                <input type="text" className="form-control form-control-sm" placeholder="Coupon Code" required />
                                                                <div className="input-group-append">
                                                                    <button className="btn btn-sm" type="submit">Apply Coupon</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="float-right">
                                                    <button type="submit" className="btn btn-shop btn-update-cart">Update Cart</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>{/* End .cart-table-container */}
                        </div>{/* End .col-lg-8 */}

                        <div className="col-lg-4">
                            <div className="cart-summary">
                                <h3>CART TOTALS</h3>
                                <table className="table table-totals">
                                    <tbody>
                                        <tr>
                                            <td>Subtotal</td>
                                            <td>361.000 VNĐ</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} className="text-left">
                                                <h4>Shipping</h4>
                                                <div className="form-group form-group-custom-control">
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" className="custom-control-input" name="radio" defaultChecked />
                                                        <label className="custom-control-label">Local pickup</label>
                                                    </div>
                                                </div>
                                                <div className="form-group form-group-custom-control mb-0">
                                                    <div className="custom-control custom-radio mb-0">
                                                        <input type="radio" name="radio" className="custom-control-input" />
                                                        <label className="custom-control-label">Flat rate</label>
                                                    </div>
                                                </div>
                                                <form action="#">
                                                    <div className="form-group form-group-sm">
                                                        <label>Shipping to <strong>NY.</strong></label>
                                                        <div className="select-custom">
                                                            {/* <select className="form-control form-control-sm">
                                                                <option value="USA">United States (US)</option>
                                                                <option value="Turkey">Turkey</option>
                                                                <option value="China">China</option>
                                                                <option value="Germany">Germany</option>
                                                            </select> */}
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-group-sm">
                                                        <div className="select-custom">
                                                            <select className="form-control form-control-sm">
                                                                <option value="NY">Đà Nẵng</option>
                                                                <option value="CA">Hội An</option>
                                                                <option value="TX">Tam Kỳ</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-group-sm">
                                                        <input type="text" className="form-control form-control-sm" placeholder="Address" />
                                                    </div>
                                                    <div className="form-group form-group-sm">
                                                        <input type="text" className="form-control form-control-sm" placeholder="ZIP" />
                                                    </div>
                                                    <button type="submit" className="btn btn-shop btn-update-total">
                                                        Update Totals
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td>Total</td>
                                            <td>361.000 VNĐ</td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div className="checkout-methods">
                                    <a href="/checkout" className="btn btn-block btn-dark">Proceed to Checkout
                                        <i className="fa fa-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CartPage