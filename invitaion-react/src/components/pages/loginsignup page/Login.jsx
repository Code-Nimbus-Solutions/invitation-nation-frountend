import TextField from '@mui/material/TextField';
import { Box, IconButton, InputAdornment } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../../css files/Login.css';
import Logindata from '../../Data/Logindata.json';
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Logo from '/src/assets/Component 2 (5).svg'

export function Login() { 

  const navigate = useNavigate();
  const [passwordVisiblelogin, setPasswordVisiblelogin] = useState(false); // Fix: Use useNavigate instead of history
  const [inputValues, setinput] = useState({
    email: '',
    password: '',
    keepSignedIn: false,
  });
 
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setinput({
      ...inputValues,
      [name]: inputValue,
    });
  };
  const togglePasswordVisibilityLogin = () => {
    setPasswordVisiblelogin((prevVisible) => !prevVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = Logindata.Login_id.find((u) => u.Email === inputValues.email);

    if (user && user.Password === inputValues.password) {
      alert('Login successful!');
      navigate('/dash'); // Fix: Use navigate instead of history.push
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };
  const EndadooremetLogin = () => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={togglePasswordVisibilityLogin}>
          {passwordVisiblelogin ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    );
  };

    return(
        <>
        <form action="submit" className="log" onSubmit={handleSubmit}>
          <div className="mainlogin">
        <div className="logcont">
            <img src={Logo} alt="logo" className="avatar" />
            <h1 className="logtxt">
                Invitation Nation
            </h1>


        </div>
       
        <div className="loginput">
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' , margin:"20px"},
      }}
      noValidate
      autoComplete="off"
    >
            <div className="logmail">
            <TextField
                 id="outlined-textarea"
                 label="Email Adress"
                 placeholder="Email Adress"
                 className='email'
                 onChange={handleInputChange}
                 name="email"
                 value={inputValues.email}
        />
                 <TextField
                 id="outlined-textarea"
                 label="Password"
                 placeholder="Password"
                 className='Logpassword'
                 type={passwordVisiblelogin ?  "password": "text"}
                 InputProps={{
                  endAdornment: <EndadooremetLogin/>,
                }}
                 onChange={handleInputChange}
                 name="password"
                 value={inputValues.password}
        />
     
            </div><Link to='/forgotpass' style={{textDecoration:"none"}}><h3 className="forgotpass">Forgot Password ?</h3></Link> 
            </Box>
            
           <div className="kkpcont">
             <input type="checkbox"className="keepsign" name="keepSignedIn" checked={inputValues.keepSignedIn} onChange={handleInputChange} />
            <span className="keeplogin">Keep me signed in</span>
           </div>
           
            <button className="login">Login</button>
            <Link to="/signup" className='logincreate'><h2 className="createscc">Create New Account</h2></Link>
            {/* <Link to="/signup2" style={{textDecoration:"none"}}><h2 className="createscc">Create New Account2</h2></Link> */}
         
          
           
        </div>
        </div>
        {/* <h1>{inputValues.password}</h1><h1>{inputValues.email}</h1> <p>Keep me signed in: {inputValues.keepSignedIn ? 'Yes' : 'No'}</p> */}
</form></>
    )
}