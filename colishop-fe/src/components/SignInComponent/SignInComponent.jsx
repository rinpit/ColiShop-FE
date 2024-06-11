import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useHistory, useNavigate } from "react-router-dom"
const SignInComponent = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigation = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("info", email + password)
      const response = await axios.post("http://localhost:3001/api/user/sign-in", { email, password })
      if (response.status === 200) {
        navigation("/")
        toast.success("Login succesfully");
        console.log(response.data)
        localStorage.setItem("token", response.data.access_token)

      } else {
        alert("Loi dang nhap")
      }
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className="col-md-10">
      <div className="sign-in-heading mb-1 text-center">
        <h2 className="title sign_in">Sign In</h2>
      </div>
      <form action="#">
        <label htmlFor="login-email">
          Username or email address
          <span className="required">*</span>
        </label>
        <input
          type="email"
          className="form-input form-wide"
          id="login-email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="login-password">
          Password
          <span className="required">*</span>
        </label>
        <input
          type="password"
          className="form-input form-wide"
          id="login-password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="form-footer">
          <div className="custom-control custom-checkbox mb-0">
            <input
              type="checkbox"
              className="custom-control-input"
              id="lost-password"
            />
            <label
              className="custom-control-label mb-0"
              htmlFor="lost-password"
            >
              Remember me
            </label>
          </div>
          <a
            href="/forgotpassword"
            className="forget-password text-dark form-footer-right"
          >
            Forgot Password?
          </a>
        </div>
        <button className="btn btn-dark btn-md w-100" onClick={handleLogin}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInComponent;
