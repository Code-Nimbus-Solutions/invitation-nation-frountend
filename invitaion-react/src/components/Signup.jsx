import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Signup2 } from "./signup2";
import './css files/Signup.css';

export function Signup() {
  const [signinputs, setsigninput] = useState({
    Firstname: '',
    Lastname: '',
    Phno: '',
  });

  const [signinputs2, setsigninput2] = useState({
    Email: '',
    Password: '',
    Cpassword: '',
  });

  const [combinedData, setCombinedData] = useState(null);

  const [showSignup2, setShowSignup2] = useState(false);

  const handlesignInputChange = (event) => {
    const { name, value } = event.target;

    setsigninput({
      ...signinputs,
      [name]: value,
    });
  };

  const handleSubmitsign = (event) => {
    event.preventDefault();
    console.log("Signup Form Data:", signinputs);
    setShowSignup2(true);
  };

  const handleSignup2Data = (data) => {
    // Combine data from Signup and Signup2
    const combined = { ...signinputs, ...data };
    console.log("Combined Data:", combined);
    setCombinedData(combined);
  };
  return (
    <div>
      {showSignup2 ? (
        <Signup2 signinputs={signinputs2} onNextClick={handleSignup2Data} />
      ) : (
        <form action="submit" onSubmit={handleSubmitsign} className="loginform">
          <div className="signup">
            <div className="signcont">
              <h1 className="signtxt">Sign Up</h1>
            </div>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '100%', margin: "20px" },
              }}
              noValidate
              autoComplete="off"
            ></Box>
            <TextField
              id="outlined-textarea1"
              label="First Name"
              placeholder="First Name"
              name="Firstname"
              onChange={handlesignInputChange}
              value={signinputs.Firstname}
              className='frstname' style={{ width: "400px", margin: "10px" }}
            />
            <TextField
              id="outlined-textarea2"
              label="Last name"
              placeholder="Last Name"
              name="Lastname"
              onChange={handlesignInputChange}
              value={signinputs.Lastname}
              className='email' style={{ width: "400px", margin: "10px" }}
            />
            <TextField
              id="outlined-textarea3"
              label="Phone number"
              placeholder="Phone Number"
              type="number"
              name="Phno"
              onChange={handlesignInputChange}
              value={signinputs.Phno}
              className='phno' style={{ width: "400px", margin: "10px" }}
            />
            <button className="signupbutton" >Next</button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1 className="haveacc">Have an Account? Login</h1>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}
