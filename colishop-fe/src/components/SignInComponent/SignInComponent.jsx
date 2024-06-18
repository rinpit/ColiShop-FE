import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../../utils/UserContext";

const SignInComponent = () => {
// START Phần sign in của Mai 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  // Sử dụng UserContext
  const {setUser} = useContext(UserContext);
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
        const { status, message, user, access_token } = response.data;

        if (status === "OK") {
          // Lưu access_token vào localStorage để duy trì đăng nhập
          localStorage.setItem("access_token", access_token);
          // Lưu đối tượng user vào localStorage
          localStorage.setItem("user", JSON.stringify(user));
          // Cập nhật user trong UserContext
          setUser(user);
          // In ra ID của user
          console.log(`User ID: ${user.id}`)

          console.log('info: ', formData.email + formData.password);
          console.log(response.data);
          setMessage(message);
          setFormData({
            email: "",
            password: "",
          });
          toast.success(message);
          navigate("/");
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
  // END Phần sign in của Mai 

  // START Phần sign in của Thinh
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const {setUser} = useContext(UserContext);
  // const navigate = useNavigate();

  // const handleEmailChange = (e) => setEmail(e.target.value);
  // const handlePasswordChange = (e) => setPassword(e.target.value);
  // const handleSubmit = async (e) => {
  //   console.log("hello");

  //   e.preventDefault();
  //   try {
  //     console.log("info:", email + password);

  //     const response = await axios.post("http://localhost:3001/api/user/sign-in",
  //       {
  //         email,
  //         password,
  //       });
  //     // loginUser(email, password);
  //     console.log(response.data);
  //     console.log("info p2:", email + password);

  //     if (response.data.status === "OK") {
  //       toast.success("Login successful!");
  //       setUser(response.data.user);
  //       localStorage.setItem("user", JSON.stringify(response.data.user));
  //       console.log(response.data.user);
  //       navigate.push("/");
  //     } else {
  //       console.log("fail login");
  //       toast.error("Login failed. Please check your credentials.");
  //     }
  //   } catch (error) {
  //     toast.error("An error occurred. Please try again.");
  //   }
  // };


  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   if (storedUser) {
  //     try {
  //       const parsedUser = JSON.parse(storedUser);
  //       setUser(parsedUser);
  //     } catch (error) {
  //       console.error("Failed to parse user from localStorage", error);
  //       localStorage.removeItem("user");
  //     }
  //   }
  // }, [setUser]);
  // END Phần sign in của Thinh

  return (
    <div className="col-md-10">
      <ToastContainer position="bottom-right" />
      <div className="sign-in-heading mb-1 text-center">
        <h2 className="title sign_in">Sign In</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email address
          <span className="required">*</span>
        </label>
        <input
          className="form-input form-wide"
          id="email"
          name="email"
          required
          // value={email}
          onChange={handleChange}
        />
        <label htmlFor="password">
          Password
          <span className="required">*</span>
        </label>
        <input
          className="form-input form-wide"
          id="password"
          name="password"
          required
          // value={password}
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
