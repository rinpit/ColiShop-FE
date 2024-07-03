import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import * as UserService from "../../services/UserServices"
import { useMutationHooks } from '../../hooks/useMutationHook';
import * as message from '../../components/Message/Message'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../redux/slices/userSlice';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons'
import { getBase64 } from '../../utils';
import { WrapperUploadFile } from './style';
const ProfilePage = () => {
  const dispathch = useDispatch()
  const user = useSelector((state) => state.user)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState('');

  const mutation = useMutationHooks(
    (data) => {
      const { id, ...rests } = data
      UserService.updateUser(id, rests);
    }
  )

  const { data, isLoading, isSuccess, isError } = mutation

  useEffect(() => {
    setName(user?.name)
    setEmail(user?.email)
    setAddress(user?.address)
    setPhone(user?.phone)
    setAvatar(user?.avatar)
  }, [user])

  useEffect(() => {
    if (isSuccess) {
      message.success()
      handleGetDetailsUser(user?.id, user?.access_token)
    } else if (isError) {
      message.error()
    }
  }, [isSuccess, isError])

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token)
    dispathch(updateUser({ ...res?.data, access_token: token }))
  }



  const handleOnChangeName = (e) => {
    setName(e.target.value)
  }
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleOnChangeAddress = (e) => {
    setAddress(e.target.value)
  }
  const handleOnChangePhone = (e) => {
    setPhone(e.target.value)
  }
  const handleOnChangeAvatar = async ({ fileList }) => {
    const file = fileList[0]
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setAvatar(file.preview)
  }

  const handleUpdate = () => {
    mutation.mutate({
      id: user?.id,
      name,
      email,
      address,
      phone,
      avatar
    })
    console.log("update", name, email, address, phone, avatar)

  }

  return (
    <div className='page-wrapper'>
      <main className="main main-test">
        <div className="container checkout-container">

          <div className="row">
            <div className="col-lg-7">
              <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
                <li>
                  {/* <a href="cart.html">Thông Tin Cá Nhân</a> */}
                  <h1>Thông Tin Cá Nhân</h1>
                </li>
              </ul>

              <ul className="checkout-steps">
                <li>
                  <form action="#" id="checkout-form">

                    <div className="row">
                      <div className="col-md-9">
                        <div className="form-group">
                          <label>Avatar
                            <abbr className="required" title="required">*</abbr>
                          </label>
                          <WrapperUploadFile onChange={handleOnChangeAvatar} maxCount={1}>
                            <Button icon={<UploadOutlined />}>Select File</Button>
                          </WrapperUploadFile>
                          {avatar && (
                            <img src={avatar} style={{
                              height: '60px',
                              width: '60px',
                              borderRadius: '50%',
                              objectFit: 'cover'
                            }} alt='avatar' />
                          )}
                          {/* <input type="text" className="form-control" required value={avatar} onChange={handleOnChangeAvatar} /> */}
                        </div>
                      </div>
                      <div className="col-md-3">
                        <button style={{ marginTop: '26px' }} className="btn btn-success btn-md" onClick={handleUpdate}>Cập Nhật</button>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-9">
                        <div className="form-group">
                          <label>Họ & Tên
                            <abbr className="required" title="required">*</abbr>
                          </label>
                          <input type="text" className="form-control" required value={name} onChange={handleOnChangeName} />
                        </div>
                      </div>
                      {/* <div className="col-md-3">
                        <button style={{ marginTop: '26px' }} className="btn btn-success btn-md" onClick={handleUpdate}>Cập Nhật</button>
                      </div> */}
                    </div>

                    <div className="row">
                      <div className="col-md-9">
                        <div className="form-group">
                          <label>Email
                            <abbr className="required" title="required">*</abbr>
                          </label>
                          <input type="text" className="form-control" required value={email} onChange={handleOnChangeEmail} />
                        </div>
                      </div>
                      {/* <div className="col-md-3">
                        <button style={{ marginTop: '26px' }} className="btn btn-success btn-md" onClick={handleUpdate}>Cập Nhật</button>
                      </div> */}
                    </div>

                    <div className="row">
                      <div className="col-md-9">
                        <div className="form-group">
                          <label>Address
                            <abbr className="required" title="required">*</abbr>
                          </label>
                          <input type="text" className="form-control" required value={address} onChange={handleOnChangeAddress} />
                        </div>
                      </div>
                      {/* <div className="col-md-3">
                        <button style={{ marginTop: '26px' }} className="btn btn-success btn-md" onClick={handleUpdate}>Cập Nhật</button>
                      </div> */}
                    </div>

                    <div className="row">
                      <div className="col-md-9">
                        <div className="form-group">
                          <label>Phone
                            <abbr className="required" title="required">*</abbr>
                          </label>
                          <input type="text" className="form-control" required value={phone} onChange={handleOnChangePhone} />
                        </div>
                      </div>
                      {/* <div className="col-md-3">
                        <button style={{ marginTop: '26px' }} className="btn btn-success btn-md" onClick={handleUpdate}>Cập Nhật</button>
                      </div> */}
                    </div>




                  </form>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </main >
    </div >
  )
}

export default ProfilePage