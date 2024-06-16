import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useHistory, useNavigate } from "react-router-dom"
import { UserContext } from "../../utils/UserContext";

const SignInComponent = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigate()
  // Thinh add START
  const { setUser } = useContext(UserContext);
  // const history = useHistory();
  // Thinh add END

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log("info", email + password)
  //     const response = await axios.post("http://localhost:3001/api/user/sign-in", { email, password });
  //     if (response.status === 200) {
  //       navigation("/")
  //       toast.success("Login succesfully");
  //       console.log(response.data)
  //       localStorage.setItem("token", response.data.access_token)

  //     } else {
  //       alert("Loi dang nhap")
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // Thinh add START
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("info: ", email + password);
      const response = await axios.post("http://localhost:3001/api/user/sign-in", { email, password });
      console.log(response.data);
      console.log("info again: ", email + password);
      if (response.data.status === "OK") {
        toast.success("Login successful!l");
        setUser(response.data.user);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log(response.data.user);
        // history.push("/")
        navigation("/");
      } else {
        console.log("fail login");
        toast.error("Login failed. Please check your credentials.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  }
  // Thinh add END
  return (
    <div className="col-md-10">
      <div className="sign-in-heading mb-1 text-center">
        <h2 className="title sign_in">Sign In</h2>
      </div>
      <form
        // action="#"
        onSubmit={handleSubmit}
      >

        <label htmlFor="login-email">
          Email address
          <span className="required">*</span>
        </label>
        <input
          className="form-input form-wide"
          type="email"
          id="login-email"
          required
          value={email}
          // onChange={(e) => setEmail(e.target.value)}
          onChange={handleEmailChange}
        />

        <label htmlFor="login-password">
          Password
          <span className="required">*</span>
        </label>
        <input
          className="form-input form-wide"
          type="password"
          id="login-password"
          required
          value={password}
          // onChange={(e) => setPassword(e.target.value)}
          onChange={handlePasswordChange}
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

        <button
          className="btn btn-dark btn-md w-100"
        // onClick={handleLogin}
        >
          Sign In
        </button>
      </form>

    </div>
  );
};

export default SignInComponent;
