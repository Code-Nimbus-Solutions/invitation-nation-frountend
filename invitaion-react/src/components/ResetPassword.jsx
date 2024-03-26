import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export function ForgotPassword() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("password");
  const [color, setColor] = useState("#D0D5DD");

  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setColor("#8D4EA5");
    } else {
      setType("password");
      setColor("#D0D5DD");
    }
  };

  const loginHandler = () => {
    const loginCred = {
      email: email,
      password: password,
    };
    console.log(loginCred);
  };

  const forgetPasswordHandler = () => {
    <Link to="/"></Link>;
  };

  const loginChecker = () => {};

  return (
    <>
      <div className="login-container">
        <div className="logo-box">
          <div className="logo-box-img">
            {/* <img src={Logo} alt="" className="logo" /> */}
          </div>
          <span>Invitation Nation</span>
        </div>

        <form className="login-form">
          <div id="form-subcontainer-3" className="form-subcontainer-3">
            <h3>Forgot Password?</h3>
            <span>
              Enter your email address to get the password reset link.
            </span>
            <label htmlFor="" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-input"></input>
          </div>

          <div id="form-subcontainer-3" className="form-subcontainer-4">
            <h3>Password reset</h3>
            <span>Enter the code recived in your email.</span>
            <label htmlFor="" className="form-label">
              Email Address
            </label>
            <input type="text" className="form-input"></input>
          </div>

          <div className="form-subcontainer">
            <button
              type="submit"
              onClick={loginHandler}
              className="form-submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
