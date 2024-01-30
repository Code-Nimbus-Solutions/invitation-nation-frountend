import { Box } from "@mui/material"
import { TextField } from "@mui/material"
import { Link } from "react-router-dom"
export function Forgotpassword(){
    return(
        <div className="forgtmain">
            <div className="invitaionpass" >
                <img src="/src/assets/image-removebg-preview (2) 1.svg" alt="" className="passinv" />
                <h1 className="headingpass">Invitation nation</h1>
            </div>
            <div className="forgtcont">
                <h1 className="frgthdng">Forgot Password?</h1>
               
            </div> 
            <p className="parline" style={{margin:"-1%"}}>Enter your email address to get the password reset link.</p>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' , margin:"20px",marginTop:"20%"},
      }}
      noValidate
      autoComplete="on"
    >
      <div>
      
        <TextField
        
          id="outlined-textarea"
          label="Email Adress"
          placeholder="Email Adress"
        
          className='mailip'
          
        />
     
      </div>
     
     
    </Box>
    <button className="passwrdreset">Password Reset</button>
    <Link to='/'style={{textDecoration:"none"}} ><p className="backlog" >Back to loign</p></Link>
        </div>
    )
}