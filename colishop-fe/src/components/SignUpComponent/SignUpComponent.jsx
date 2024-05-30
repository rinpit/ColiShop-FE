import React, { useState } from "react";
import axios from "axios";
import "../../style/signUpPage.css";
import { useNavigate } from "react-router-dom";

const SignUpComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
        "http://localhost:3001/api/user/sign-up",
        formData
      );
      if (response && response.data) {
        if (response.data.status === "OK") {
          setMessage(response.data.message);
          setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          navigate("/signin");
        } else {
          setMessage(response.data.message);
        }
      } else {
        setMessage("Unexpected response format");
      }
    } catch (error) {
      setMessage("Unexpected error occurred");
    }
  };

  return (
    <div className="col-md-10">
      <div className="sign-up-heading mb-1 text-center">
        <h2 className="title sign_up">Sign Up</h2>
      </div>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <span className="required">*</span>
        </label>
        <input
          type="text"
          className="form-input form-wide signup-input"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">
          Email address
          <span className="required">*</span>
        </label>
        <input
          type="email"
          className="form-input form-wide signup-input"
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
          type="password"
          className="form-input form-wide signup-input"
          id="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">
          Confirm Password
          <span className="required">*</span>
        </label>
        <input
          type="password"
          className="form-input form-wide signup-input"
          id="confirmPassword"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {message && (
          <p
            className="text-center"
            style={{ fontSize: "1.3rem", color: "red", paddingTop: "5px" }}
          >
            {message}
          </p>
        )}
        <div className="form-footer signup-footer">
          <div className="custom-control custom-checkbox mb-0">
            <input
              type="checkbox"
              className="custom-control-input"
              id="signup-terms"
              required
            />
            <label className="custom-control-label mb-0" htmlFor="signup-terms">
              I agree to the terms and conditions
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-dark btn-md w-100 signup-button"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center" style={{ fontSize: "1.2rem" }}>
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
};

export default SignUpComponent;
