import { Box, IconButton, InputAdornment } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../../css files/signup.css'
export function Signup2({ signinputs, onNextClick })  {
  const [signinputs2, setsigninput2] = useState({
    Email: '',
    Password: '',
    Cpassword: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible2, setPasswordVisible2] = useState(false);

  const handlesignInputChange2 = (event) => {
    const { name, value } = event.target;

    setsigninput2({
      ...signinputs2,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };
  const togglePasswordVisibility2 = () => {
    setPasswordVisible2((prevVisible2) => !prevVisible2);
  }

  const Endadooremet = () => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={togglePasswordVisibility}>
          {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    );
  };
  const Endadooremet2 = () => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={togglePasswordVisibility2}>
          {passwordVisible2 ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    );
  };

  const handlesubmitsignin2 = (event) => {
    event.preventDefault();
    if (signinputs2.Password !== signinputs2.Cpassword) {
      alert("Passwords do not match");
    } else {
      // Combine data from Signup and Signup2
      const combinedData = { ...signinputs, ...signinputs2 };
      console.log('Combined Data:', combinedData);
      onNextClick(combinedData); // Pass combined data back to Signup
    }
  };

  return (
    <form action="Submit" className="sign" onSubmit={handlesubmitsignin2}>
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
          id="outlined-textarea4"
          label="Email"
          placeholder="Email"
          name="Email"
          type="mail"
          onChange={handlesignInputChange2}
          value={signinputs2.Email}
          className='Email' style={{ width: "400px", margin: "10px" }}
        />

        <TextField
          id="outlined-textarea5"
          label="Password"
          placeholder="Password"
          type={passwordVisible ?  "password": "text"}
          autoComplete="current-password"
          name="Password"
          InputProps={{
            endAdornment: <Endadooremet />,
          }}
          onChange={handlesignInputChange2}
          value={signinputs2.Password}
          className='email' style={{ width: "400px", margin: "10px" }}
        />
        <TextField
          id="outlined-textarea6"
          label="Confirm Password"
          placeholder="Confirm Password"
          type={passwordVisible2 ?  "password": "text"}
          name="Cpassword"
          InputProps={{
            endAdornment: <Endadooremet2 />,
          }}
          onChange={handlesignInputChange2}
          value={signinputs2.Cpassword}
          className='Cpassword' style={{ width: "400px", margin: "10px" }}
        />
        <button className="signupbutton">Signup</button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="haveacc">Have an Account? Login</h1>
        </Link>

        <Link to='/dash'>dash</Link>
      </div>
    </form>
  );
}
