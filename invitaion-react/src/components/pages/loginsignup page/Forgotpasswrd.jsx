import { Box } from "@mui/material"
import { TextField } from "@mui/material"
import { Link } from "react-router-dom"
import '../../css files/Login.css'
import Logo from '/src/assets/Component 2 (5).svg'
export function Forgotpassword(){
    return(
        <div className="forgtmain">
          
            <div className="invitaionpass" >
                <img src={Logo} alt="" className="passinv" />
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
      <div className="forgtmail" > 
      
        <TextField
        
          id="outlined-textarea"
          label="Email Adress"
          placeholder="Email Adress"
        
          className='mailip'
          
        />
     <button className="passwrdreset">Password Reset</button>
     <Link to='/'style={{textDecoration:"none"}} ><p className="backlog" >Back to loign</p></Link>
      </div>
     
     
    </Box>
    
    
        </div>
    )
}