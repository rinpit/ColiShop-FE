import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "../../style/signUpPage.css";
import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserServices"
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as message from '../../components/Message/Message'
import Loading from "../LoadingComponent/Loading";
const SignUpComponent = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  )

  const { data, isLoading, isSuccess, isError } = mutation

  useEffect(() => {
    if (isSuccess) {
      message.success()
      // toast.success("Login successful!");
      navigate('/signin')
    } else if (isError) {
      message.error()
    }
  }, [isSuccess, isError])

  const handleOnChangeName = (e) => {
    setName(e.target.value)
  }

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleOnChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    mutation.mutate({
      name, email, password, confirmPassword
    })
    console.log("sign up", name, email, password, confirmPassword)
  }


  return (
    <div className="col-md-10">
      <div className="sign-up-heading mb-1 text-center">
        <h2 className="title sign_up">Đăng Ký</h2>
      </div>
      <form className="signUpForm">
        <label htmlFor="name">
          Họ & Tên
          <span className="required">*</span>
        </label>
        <input
          className="form-input form-wide signup-input"
          type="text"
          required
          value={name}
          onChange={handleOnChangeName}
        />
        <label htmlFor="email">
          Địa Chỉ Email
          <span className="required">*</span>
        </label>
        <input
          className="form-input form-wide signup-input"
          type="email"
          required
          value={email}
          onChange={handleOnChangeEmail}
        />
        <label htmlFor="password">
          Mật Khẩu
          <span className="required">*</span>
        </label>
        <input
          className="form-input form-wide signup-input"
          type="password"
          required
          value={password}
          onChange={handleOnChangePassword}
        />

        <label htmlFor="confirmPassword">
          Xác Nhận Mật Khẩu
          <span className="required">*</span>
        </label>
        <input
          className="form-input form-wide signup-input"
          type="password"
          required
          value={confirmPassword}
          onChange={handleOnChangeConfirmPassword}
        />

        <div className="form-footer signup-footer">
        </div>
        {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
        <Loading isLoading={isLoading}>
          <button
            className="btn btn-dark btn-md w-100 signup-button"
            type="submit"
            onClick={handleSignUp}
          >
            ĐĂNG KÝ
          </button>
        </Loading>
      </form>

      <p className="text-center" style={{ fontSize: "1.2rem" }}>
        Đã có tài khoản?<a href="/signin">Đăng Nhập</a>
      </p>
    </div>
  );
};

export default SignUpComponent;
