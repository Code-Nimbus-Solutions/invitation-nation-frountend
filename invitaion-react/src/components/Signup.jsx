import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import UnstyledTabsIntroduction from "./MUI components/tab";

export function Signup() {
  const [signinputs, setsigninput] = useState({
    Firstname: '',
    Lastname: '',
    Phno: false,
  });

  const handlesignInputChange = (event) => {
    const { name, value } = event.target;

    setsigninput({
      ...signinputs,
      [name]: value, // Fix: Update the specific property
    });
  };

  return (
    <form action="Submit" className="sign">
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
          id="outlined-textarea"
          label="First Name"
          placeholder="First Name"
          name="Firstname"
          onChange={handlesignInputChange}
          value={signinputs.Firstname}
          className='frstname' style={{ width: "400px", margin: "10px" }}
        />
        <TextField
          id="outlined-textarea"
          label="Last name"
          placeholder="Last Name"
          name="Lastname"
          onChange={handlesignInputChange}
          value={signinputs.Lastname}
          className='email' style={{ width: "400px", margin: "10px" }}
        />
        <TextField
          id="outlined-textarea"
          label="Phone number"
          placeholder="Phone Number"
          type="number"
          name="Phno"
          onChange={handlesignInputChange}
          value={signinputs.Phno}
          className='email' style={{ width: "400px", margin: "10px" }}
        />
        <button className="signupbutton">Next</button>
        <Link to="/" style={{ textDecoration: "none" }}><h1 className="haveacc">Have an Account? Login</h1></Link>
      </div>
      
     
    </form>
  );
}
