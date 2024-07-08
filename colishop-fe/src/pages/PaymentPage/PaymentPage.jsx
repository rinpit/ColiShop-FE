import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WrapperInputNumber, WrapperQualityProduct, WrapperInfo, Label, WrapperRadio } from './style'
import { updateUser } from '../../redux/slices/userSlice';

import { MinusOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { decreaseAmount, increaseAmount, orderSlice, removeOrderProduct } from '../../redux/slices/orderSlice'
import { convertPrice } from '../../utils'
import ModalComponent from '../../components/ModalComponent/ModalComponent'
import { Button, Form, Input, message, Radio } from 'antd'
import * as UserService from "../../services/UserServices"
import * as OrderService from "../../services/OrderServices"

import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/Loading'

const PaymentPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // lấy data USER
    const user = useSelector((state) => state.user)
    const [delivery, setDelivery] = useState('fast')
    const [payment, setPayment] = useState('later_money')

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


    // lấy data order
    const order = useSelector((state) => state.order)

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

    const handleAddOrder = () => {
        if (user?.access_token && order?.orderItems && user?.name && user?.address && user?.phone && priceMemo && user?.id) {
            mutationAddOrder.mutate(
                {
                    token: user?.access_token,
                    orderItems: order?.orderItems,
                    fullName: user?.name,
                    address: user?.address,
                    phone: user?.phone,
                    paymentMethod: payment,
                    itemsPrice: priceMemo,
                    shippingPrice: diliveryPriceMemo,
                    totalPrice: totalPriceMemo,
                    user: user?.id,
                }
            )
            // {
            //     onSuccess: () => {
            //         message.success('Đặt hàng thành công')
            //     }
            // }
        }
    }



    const mutationUpdate = useMutationHooks((data) => {
        // console.log("dataMutation", data)
        const { id, token, ...rests } = data
        const res = UserService.updateUser(id, token, { ...rests }) // cần có ...rests vì nó cũng là một object, rải ra, fix lỗi kh hiển thị sau khi update
        return res;
    },
    )

    const mutationAddOrder = useMutationHooks((data) => {
        // console.log("dataMutation", data)
        const { token, ...rests } = data
        const res = OrderService.createOrder({ ...rests }, token) // cần có ...rests vì nó cũng là một object, rải ra, fix lỗi kh hiển thị sau khi update
        return res;
    },
    )


    const { isLoading, data } = mutationUpdate
    const { isLoading: isLoadingAddOrder, isError, isSuccess, data: dataAdd } = mutationAddOrder

    useEffect(() => {
        if (isSuccess && dataAdd?.status === 'OK'){
            message.success('Đặt hàng thành công')
        }else if (isError) {
            message.error()
        }
    }, [isSuccess, isError])




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

    const handleDelivery = (e) => {
        setDelivery(e.target.value)
    }

    const handlePayment = (e) => {
        setDelivery(e.target.value)
    }
    return (
        <div className='page-wrapper'>
            <Loading isLoading={isLoadingAddOrder}>
                <main className='main'>
                    <div className='container'>
                        <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
                            <li>
                                <a onClick={() => navigate('/cart')}>Shopping Cart</a>
                            </li>
                            <li className="active">
                                <a onClick={() => navigate('/payment')}>Payment</a>
                            </li>
                            <li className="disabled">
                                <a href="cart.html">Order Complete</a>
                            </li>
                        </ul>

                        <div className="row">
                            {/* LEFT */}
                            <div className="col-lg-8">
                                <div className="cart-summary">
                                    <div>
                                        <h3 className="m-b-sm">Chọn phương thức giao hàng</h3>
                                        <div className="form-group form-group-custom-control" onChange={handleDelivery} value={delivery}>
                                            <div className="custom-control custom-radio d-flex">
                                                <input type="radio" className="custom-control-input" name="delivery" value="fast" defaultChecked />
                                                <label className="custom-control-label">SFast-Giao hành nhanh</label>
                                            </div>

                                            <div className="custom-control custom-radio d-flex mb-0">
                                                <input type="radio" className="custom-control-input" name="delivery" value="gojek" />
                                                <label className="custom-control-label">GoJek-Giao hàng nhanh</label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr width="90%" align="center" />
                                    <div>
                                        <h3 className="m-b-sm">Chọn phương thức thanh toán</h3>
                                        <div className="form-group form-group-custom-control" onChange={handlePayment} value={payment}>
                                            <div className="custom-control custom-radio d-flex">
                                                <input type="radio" className="custom-control-input" name="payment" value="later_money" defaultChecked />
                                                <label className="custom-control-label">Thanh toán khi nhận hàng</label>
                                            </div>

                                            <div className="custom-control custom-radio d-flex">
                                                <input type="radio" className="custom-control-input" name="payment" />
                                                <label className="custom-control-label">Thanh toán chuyển khoản</label>
                                            </div>
                                            <div className="custom-control custom-radio d-flex">
                                                <input type="radio" className="custom-control-input" name="payment" />
                                                <label className="custom-control-label">Thanh toán PayOS</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <WrapperInfo>
                                    <div>
                                        <Label>Chọn phương thức giao hàng</Label>
                                        <WrapperRadio onChange={handleDelivery} value={delivery}>
                                            <Radio value="fast"><span style={{ color: '#ea8500', fontWeight: 'bold' }}>Giao hàng tiết kiệm</span></Radio>
                                            <Radio value="gojek"><span style={{ color: '#ea8500', fontWeight: 'bold' }}>Giao hàng tiết kiệm</span></Radio>
                                        </WrapperRadio>
                                    </div>
                                </WrapperInfo>

                                <WrapperInfo>
                                    <div>
                                        <Label>Chọn phương thức thanh toán</Label>
                                        <WrapperRadio onChange={handlePayment} value={payment}>
                                            <Radio value="later_money">Thanh toán khi nhận hàng</Radio>
                                        </WrapperRadio>
                                    </div>
                                </WrapperInfo> */}
                                </div>
                            </div>


                            {/* RIGHT */}
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
                                            onClick={() => { handleAddOrder() }}>
                                            ĐẶT HÀNG<i className="fa fa-arrow-right" />
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
            </Loading>
        </div>



    )
}

export default PaymentPage