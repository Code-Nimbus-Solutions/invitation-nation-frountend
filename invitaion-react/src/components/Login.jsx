// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
// import { Logo } from "../assets/react.svg";

export function Login() {
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

  const forgetPasswordHandler = () => {};

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
          <div id="form-subcontainer-1" className="form-subcontainer">
            <label htmlFor="" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-input"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div id="form-subcontainer-2" className="form-subcontainer">
            <div className="form-label-box">
              <label htmlFor="" className="form-label">
                Password
              </label>
              <Link to="/ForgotPassword">
                <button className="form-forgot-password">
                  Forgot Password?
                </button>
              </Link>
              ;
            </div>
            <div className="form-password-box">
              <input
                type={type}
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <div className="form-password-icon" onClick={handleToggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
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

{
  /* <div className="logcont">
          <img
            src="/src/assets/image-removebg-preview (2) 1.svg"
            alt="logo"
            className="avtar"
          />
          <h1 className="logtxt">Invitation Nation</h1>
        </div>
        <h3 className="forgotpass">Forgot Password ?</h3>
        <div className="loginput">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%", margin: "20px" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="logmail">
              <TextField
                id="outlined-textarea"
                label="Email Adress"
                placeholder="Email Adress"
                className="email"
                onChange={handleInputChange}
                name="email"
                value={inputValues.email}
              />
              <TextField
                id="outlined-textarea"
                label="Password"
                placeholder="Password"
                className="Logpassword"
                onChange={handleInputChange}
                name="password"
                value={inputValues.password}
              />
            </div>
          </Box>

          <input
            type="checkbox"
            className="keepsign"
            name="keepSignedIn"
            checked={inputValues.keepSignedIn}
            onChange={handleInputChange}
          />
          <span className="keeplogin">Keep me signed in</span>
          <button className="login">Login</button>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <h2 className="createscc">Create New Account</h2>
          </Link>
        </div>
        <h1>{inputValues.password}</h1><h1>{inputValues.email}</h1> <p>Keep me signed in: {inputValues.keepSignedIn ? 'Yes' : 'No'}</p> */
}
