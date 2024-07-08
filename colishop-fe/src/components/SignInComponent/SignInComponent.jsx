import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import * as UserService from "../../services/UserServices"
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as message from '../../components/Message/Message'
import { jwtDecode as jwt_decode } from "jwt-decode"
import { useDispatch } from 'react-redux'
import { updateUser } from "../../redux/slices/userSlice";
import Loading from "../LoadingComponent/Loading";


const SignInComponent = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const dispathch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )

  const { data, isLoading, isSuccess } = mutation

  useEffect(() => {
    console.log("location", location)
    if (isSuccess) {
      message.success()
      // check điều kiện, nếu có location thì chuyển sang location state, còn không chuyển sang trang home/categories
      if (location?.state) {
        navigate(location?.state)
      }else {
        navigate('/categories')
      }

      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      if (data?.access_token) {
        const decode = jwt_decode(data?.access_token)
        // console.log("decode", decode)
        if (decode?.id) {
          handleGetDetailsUser(decode?.id, data?.access_token)
        }
      }
    }
  }, [isSuccess])

  // console.log("mutation", mutation);

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserService.getDetailsUser(id, token)
    dispathch(updateUser({ ...res?.data, access_token: token }))
  }

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    mutation.mutate({
      email,
      password
    })
    // console.log('sign in', email, password)
  }


  return (
    <div className="col-md-10">
      <ToastContainer position="bottom-right" />
      <div className="sign-in-heading mb-1 text-center">
        <h2 className="title sign_in">Đăng Nhập</h2>
      </div>

      <form>
        <label htmlFor="email">
          Địa chỉ Email
          <span className="required">*</span>
        </label>
        <input
          className="form-input form-wide"
          name="email"
          required
          value={email}
          onChange={handleOnChangeEmail}
        />
        <label htmlFor="password">
          Mật khẩu
          <span className="required">*</span>
        </label>
        <input
          className="form-input form-wide"
          name="password"
          type="password"
          required
          value={password}
          onChange={handleOnChangePassword}
        />

        <div className="form-footer">
          <div className="custom-control custom-checkbox mb-0">
          </div>
          {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}

          <a
            href="/signup"
            className="forget-password text-dark form-footer-right"
          >
            Chưa có tài khoản? Tạo tài khoản
          </a>
        </div>
        <Loading isLoading={isLoading}>
        <button
          type="submit"
          className="btn btn-dark btn-md w-100"
          onClick={handleSignIn}
        >
          ĐĂNG NHẬP
        </button>
        </Loading>
      </form>

    </div>
  );
};

export default SignInComponent;
