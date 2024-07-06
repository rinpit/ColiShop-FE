import React from 'react'

const CartPage = () => {
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
                                            <th className="product-col">Product</th>
                                            <th className="price-col">Price</th>
                                            <th className="qty-col">Quantity</th>
                                            <th className="text-right">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="product-row">
                                            <td>
                                                <figure className="product-image-container">
                                                    <a href="product.html" className="product-image">
                                                        <img src="assets/images/products/product-01.jpg" alt="product" />
                                                    </a>
                                                    <a href="#" className="btn-remove icon-cancel" title="Remove Product" />
                                                </figure>
                                            </td>
                                            <td className="product-col">
                                                <h5 className="product-title">
                                                    <a href="product.html">Turtleneck Sweater H&M</a>
                                                </h5>
                                            </td>
                                            <td>259.000 VNĐ</td>
                                            <td>
                                                <div className="product-single-qty">
                                                    <input className="horizontal-quantity form-control" type="text" />
                                                </div>
                                            </td>
                                            <td className="text-right"><span className="subtotal-price">259.000 VNĐ</span></td>
                                        </tr>

                                        <tr className="product-row">
                                            <td>
                                                <figure className="product-image-container">
                                                    <a href="product.html" className="product-image">
                                                        <img src="assets/images/products/product-0.jpg" alt="product" />
                                                    </a>
                                                    <a href="#" className="btn-remove icon-cancel" title="Remove Product" />
                                                </figure>
                                            </td>
                                            <td className="product-col">
                                                <h5 className="product-title">
                                                    <a href="product.html">Jasambac</a>
                                                </h5>
                                            </td>
                                            <td>102.000 VNĐ</td>
                                            <td>
                                                <div className="product-single-qty">
                                                    <input className="horizontal-quantity form-control" type="text" />
                                                </div>{/* End .product-single-qty */}
                                            </td>
                                            <td className="text-right"><span className="subtotal-price">102.000 VNĐ</span></td>
                                        </tr>
                                    </tbody>
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