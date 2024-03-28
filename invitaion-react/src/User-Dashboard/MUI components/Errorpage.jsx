import React from 'react';
import './Errorpage.css'
import Error from "../../User-Dashboard/assets copy/404 1.svg"
import Logo from '../../User-Dashboard/assets copy/Group 2 (1).svg'
import { Link } from 'react-router-dom';


function NotFound() {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="error">
        <div className="navbarsection">
            <Link to='/' style={{ textDecoration: 'none' }}>
            <h2 className="navlogo"><img src={Logo} alt="" className="invi-logo" />Invitaion Nation</h2></Link>
           <Link to='/user'> <button className="login-signup">Login / Sign Up</button></Link>
        </div>

        <div className='notfound-main-container'>
            <div className="not-fount-subcontainer">
                <div className="imgcont">
                    <img src={Error} alt="" className="error-img" />
                </div>
                {/* <h1 className='main-heading'>404 - Not Found</h1> */}
                <p className='sub-heading'>Sorry for the inconvenience.</p>
                <button className='Reload' onClick={reloadPage}>Reload Page</button>
            </div>
        </div> 
    </div>
  );
}

export default NotFound;
