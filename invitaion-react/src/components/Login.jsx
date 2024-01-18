
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from "react";
import { Link } from "react-router-dom";

export function Login(){
    const[inputValues,setinput]=useState({email: '',
    password: '',
    keepSignedIn: false})
    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;

        // For checkbox, use the 'checked' property instead of 'value'
        const inputValue = type === 'checkbox' ? checked : value;
    
        setinput({
          ...inputValues,
          [name]: inputValue,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can submit the form data to your backend or perform any other actions
        console.log('Form data submitted:', inputValues);
      }

    
    return(
        <>
        <form action="submit" className="log" onSubmit={handleSubmit}>
        <div className="logcont">
            <img src="/src/assets/image-removebg-preview (2) 1.svg" alt="logo" className="avtar" />
            <h1 className="logtxt">
                Invitation Nation
            </h1>


        </div>
       <Link to='/forgotpass'><h3 className="forgotpass">Forgot Password ?</h3></Link> 
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
                 onChange={handleInputChange}
                 name="password"
                 value={inputValues.password}
        />
     
            </div>
            </Box>
            
           
            <input type="checkbox"className="keepsign" name="keepSignedIn" checked={inputValues.keepSignedIn} onChange={handleInputChange} />
            <span className="keeplogin">Keep me signed in</span>
            <button className="login">Login</button>
            <Link to="/signup" style={{textDecoration:"none"}}><h2 className="createscc">Create New Account</h2></Link>
            {/* <Link to="/signup2" style={{textDecoration:"none"}}><h2 className="createscc">Create New Account2</h2></Link> */}
         
           
           
        </div>
        {/* <h1>{inputValues.password}</h1><h1>{inputValues.email}</h1> <p>Keep me signed in: {inputValues.keepSignedIn ? 'Yes' : 'No'}</p> */}
</form></>
    )
}