import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WrapperInputNumber, WrapperQualityProduct } from './style'
import { updateUser } from '../../redux/slices/userSlice';

import { MinusOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { decreaseAmount, increaseAmount, orderSlice, removeOrderProduct } from '../../redux/slices/orderSlice'
import { convertPrice } from '../../utils'
import ModalComponent from '../../components/ModalComponent/ModalComponent'
import { Button, Form, Input } from 'antd'
import * as UserService from "../../services/UserServices"
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/Loading'

const CartPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    // lấy data USER
    const user = useSelector((state) => state.user)
    // UPDATE Thông tin giao hàng ========================
    const [isOpenModalUpdateInfo, setIsOpenModalUpdateInfo] = useState(false)
    // khai báo state của riêng USER details
    const [stateUserDetails, setStateUserDetails] = useState({
        name: '',
        address: '',
        phone: '',
    })
    // sử dụng form 
    const [form] = Form.useForm();

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


    // cách khắc phục lỗi khi set state mà không hiển thị dữ liệu ở form
    useEffect(() => {
        form.setFieldsValue(stateUserDetails)
    }, [form, stateUserDetails])

    // set để lấy data hiện có để hiện lên form
    useEffect(() => {
        if (isOpenModalUpdateInfo) {
            setStateUserDetails({
                name: user?.name,
                address: user?.address,
                phone: user?.phone
            })
        }
    }, [isOpenModalUpdateInfo])

    // Thay đổi địa chỉ
    const handleChangeAddress = () => {
        setIsOpenModalUpdateInfo(true)
    }

    // Vì giá trị TẠM TÍNH nằm ở element khác với element order nên mình kh thể gọi được map(order) 
    //  Nên sẽ dụng useMemo để tính rồi lấy giá trị đó
    const priceMemo = useMemo(() => {
        const result = order?.orderItems?.reduce((total, cur) => {
            return total + ((cur.price * cur.amount))
        }, 0)
        return result
    }, [order])

    // phần giảm giá
    const priceDiscountMemo = useMemo(() => {
        const result = order?.orderItems?.reduce((total, cur) => {
            return total + ((cur.price * cur.amount))
        }, 0)
        return result
    }, [order])

    // Phí giao hàng
    const diliveryPriceMemo = useMemo(() => {
        if (priceMemo > 500000) {
            return 0
        } else {
            return 25000
        }
    }, [priceMemo])

    // Tổng đơn hàng = priceMemo + diliveryPriceMemo
    const totalPriceMemo = useMemo(() => {
        return Number(priceMemo + diliveryPriceMemo)
    }, [priceMemo, diliveryPriceMemo])

    const handleAddCard = () => {
        console.log("User", user)
        // check xem nếu mà user thiếu 3 trường này thì phải cần cập nhật ngay để gửi hàng đến
        if (!user?.name || !user?.address || !user?.phone) {
            setIsOpenModalUpdateInfo(true)
        } else {
            navigate('/payment')
        }
    }

    const mutationUpdate = useMutationHooks((data) => {
        // console.log("dataMutation", data)
        const { id, token, ...rests } = data
        const res = UserService.updateUser(id, token, { ...rests }) // cần có ...rests vì nó cũng là một object, rải ra, fix lỗi kh hiển thị sau khi update
        return res;
    },
    )

    const { isLoading, data } = mutationUpdate

    const handleCancelUpdate = () => {
        setStateUserDetails({
            name: '',
            address: '',
            phone: ''
        })
        form.resetFields()
        setIsOpenModalUpdateInfo(false)
    }

    const handleUpdateInfoUser = () => {
        // console.log("stateUserDetails", stateUserDetails)
        const { name, address, phone } = stateUserDetails
        if (name && address && phone) {
            mutationUpdate.mutate(
                { id: user?.id, token: user?.access_token, ...stateUserDetails },
                {
                    onSuccess: () => {
                        dispatch(updateUser({ name, address, phone }))
                        setIsOpenModalUpdateInfo(false)
                    }
                })
        }
    }

    // handleOnChange dành cho USER details
    const handleOnChangeDetails = (e) => {
        // console.log("check", e.target.name, e.target.value)
        setStateUserDetails({
            ...stateUserDetails,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className='page-wrapper'>
            <main className='main'>
                <div className='container'>
                    <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
                        <li className="active">
                            <a onClick={() => navigate('/cart')}>Shopping Cart</a>
                        </li>
                        <li>
                            <a onClick={() => navigate('/payment')}>Payment</a>
                        </li>
                        <li className="disabled">
                            <a href='#'>Order Complete</a>
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
                                                    {/* <td>{convertPrice(order?.price)}</td> */}
                                                    <td>{order?.price.toLocaleString()}</td>


                                                    <td>
                                                        <div className="product-single-qty">
                                                            {/* <input className="horizontal-quantity form-control" type="text" /> */}
                                                        </div>
                                                        <WrapperQualityProduct>
                                                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('decrease', order?.product)} >
                                                                <MinusOutlined style={{ color: '#000', fontSize: '20px' }} />
                                                            </button>
                                                            <WrapperInputNumber size='large' value={order?.amount} />
                                                            <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} onClick={() => handleChangeCount('increase', order?.product)} >
                                                                <PlusOutlined style={{ color: '#000', fontSize: '20px' }} />
                                                            </button>
                                                        </WrapperQualityProduct>
                                                    </td>
                                                    <td className="text-right"><span className="subtotal-price">{convertPrice(order?.price * order?.amount)}</span></td>

                                                </tr>


                                            </tbody>
                                        )
                                    })}
                                </table>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="cart-summary">
                                <h3>CART TOTALS</h3>
                                <table className="table table-totals">
                                    <tbody>
                                        <tr>
                                            <td>Tạm Tính</td>
                                            <td><h4>{convertPrice(priceMemo)}</h4></td>
                                        </tr>

                                        <tr>
                                            <td>Phí Ship</td>
                                            <td><h4>{convertPrice(diliveryPriceMemo)}</h4></td>
                                        </tr>

                                        <tr>
                                            <td colSpan={2} className="text-left">
                                                <h4>Địa chỉ giao hàng:
                                                </h4>
                                                <span style={{ color: '#0088cc' }}> {`${user?.address}`}</span>
                                                <div>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-shop btn-update-total"
                                                    style={{ marginTop: '10px' }}
                                                    onClick={handleChangeAddress}
                                                >
                                                    Đổi địa chỉ</button>

                                            </td>
                                        </tr>
                                    </tbody>

                                    <tfoot>
                                        <tr>
                                            <td>Thành Tiền</td>
                                            <td>{convertPrice(totalPriceMemo)}</td>
                                        </tr>
                                    </tfoot>
                                </table>

                                <div className="checkout-methods">
                                    <a className="btn btn-block btn-dark"
                                        style={{ background: 'rgb(255, 57, 69)', color: '#fff' }}
                                        onClick={() => { handleAddCard() }}>
                                        MUA HÀNG<i className="fa fa-arrow-right" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Cập nhật thông tin giao hàng user */}
            <ModalComponent forceRender title="Cập nhật thông tin giao hàng" open={isOpenModalUpdateInfo} onCancel={handleCancelUpdate} onOk={handleUpdateInfoUser}>
                <Loading isLoading={isLoading}>
                    <Form
                        name="basic"
                        labelCol={{ span: 7 }}
                        wrapperCol={{ span: 17 }}
                        // onFinish={onUpdateUser}
                        autoComplete="on"
                        form={form}
                    >
                        {/* name */}
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input value={stateUserDetails.name} onChange={handleOnChangeDetails} name="name" />
                        </Form.Item>
                        {/* Address */}
                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[{ required: true, message: 'Please input your Address!' }]}
                        >
                            <Input value={stateUserDetails.address} onChange={handleOnChangeDetails} name="address" />
                        </Form.Item>
                        {/* Phone */}
                        <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[{ required: true, message: 'Please input your Phone!' }]}
                        >
                            <Input value={stateUserDetails.phone} onChange={handleOnChangeDetails} name="phone" />
                        </Form.Item>

                    </Form>
                </Loading>
            </ModalComponent>

        </div>



    )
}

export default CartPage