import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const SignInComponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/user/sign-in",
        formData
      );

      if (response && response.data) {
        const { status, message, access_token } = response.data;

        if (status === "OK") {
          // Lưu access_token vào localStorage để duy trì đăng nhập
          localStorage.setItem("access_token", access_token);
          console.log(access_token);
          setMessage(message);
          setFormData({
            email: "",
            password: "",
          });
          navigate("/aboutus");
          toast.success(message);
        } else {
          setMessage(message);
          toast.error(message);
        }
      } else {
        setMessage("Unexpected response format");
        toast.error("Unexpected response format");
      }
    } catch (error) {
      setMessage("Unexpected error occurred");
      toast.error("Unexpected error occurred");
    }
  };

  return (
    <div className="col-md-10">
      <ToastContainer position="bottom-right" />
      <div className="sign-in-heading mb-1 text-center">
        <h2 className="title sign_in">Sign In</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Username or email address
          <span className="required">*</span>
        </label>
        <input
          className="form-input form-wide"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">
          Password
          <span className="required">*</span>
        </label>
        <input
          className="form-input form-wide"
          id="password"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <div className="form-footer">
          <div className="custom-control custom-checkbox mb-0">
            <input
              type="checkbox"
              className="custom-control-input"
              id="lostPassword"
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
        {message && (
          <p
            className="text-center"
            style={{ fontSize: "1.3rem", color: "red", paddingTop: "5px" }}
          >
            {message}
          </p>
        )}
        <button type="submit" className="btn btn-dark btn-md w-100">
          Sign In
        </button>
      </form>

    </div>
  );
};

export default SignInComponent;
