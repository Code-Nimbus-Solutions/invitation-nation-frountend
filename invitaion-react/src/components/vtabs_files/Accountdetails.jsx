import React, { useState } from 'react';
import ImageUpload from '../pages/Setting/imageupload';
import '../css_files/setting.css'
import savelife from "/src/assets/Frame 133542.svg"
import pfpavtar from "/src/assets/Rectangle 7003.svg"
import pfpavtar2 from "/src/assets/Rectangle 7004.svg"


export function AccountDetails() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    username: '',
    phoneNumber: '',
  });
  const [Aimage, AsetImage] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
  };
 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleImageChange = (event) => {
    // Checking if files are dropped
    AsetImage("")
  }

  const handleSubmit = () => {
    // Perform the submit action using formData
    if (!formData.firstName || !formData.email || !formData.username || !formData.phoneNumber) {
        alert('Please fill in all required fields');
        return; // Stop the submission if any required field is empty
      }
    console.log('Submitting:', formData);
    // Add your logic to send data to the server or perform other actions
    setFormData({
        firstName: '',
        email: '',
        username: '',
        phoneNumber: '',
      });
  };

 const handleImageUpload = () => {
   var fileToUpload=document.getElementById('fileupload').files[0];
   let img=URL.createObjectURL(fileToUpload);
   document.getElementById('profilepic').src=img;
   AsetImage(true);
}

  return (
    <div className="contenttxt">
      <h1>Account Details</h1>
      <div className="maincontent">

      
      <div className="contentcont">
        <label htmlFor="firstnameacc" className="fnlabel">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          className="firstnameacc"
          placeholder="Enter Fullname.."
          value={formData.firstName}
          onChange={handleInputChange}
        />

        <label htmlFor="mailacc" className="maillabel">
          Email
        </label>
        <input
          type="text"
          name="email"
          className="mailacc"
          placeholder="Enter your MailId"
          autoComplete="on"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="mailacc" className="userabel">
          User Name
        </label>
        <input
          type="text"
          name="username"
          className="usernameacc"
          placeholder="Enter Username..."
          autoComplete="on"
          value={formData.username}
          onChange={handleInputChange}
        />

        <label htmlFor="mailacc" className="phnolabel">
          Phone Number
        </label>
        <input
          type="text"
          name="phoneNumber"
          className="phnoacc"
          placeholder="Phone number"
          autoComplete="on"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />

        <button className="updateprfl" onClick={handleSubmit}>
          Update Profile
        </button>
      </div>
      
      </div>
     
        <p className='pfp'>Your profile picture</p>


        <div className="imgchange" onChange={handleImageChange}>

       
         
        <div className="imguploadsec">
       
           
         
            
           
        
        <img src={savelife} alt="" className="savefile" />
        <p className="textupload">Upload your Photo</p>
        <div className="imgupload" style={{position:"relative", top:"-5rem"}}>
           <ImageUpload onClick={handleImageUpload} />
        </div>

      
       
      </div> </div>
      <div className="avtarset">
    
        <img src={pfpavtar} alt="" className="pfpavtar" onClick={() => handleAvatarClick('/src/assets/Rectangle 7003.svg')} />
        <img src={pfpavtar2} alt="" className="pfpavtar2" onClick={() => handleAvatarClick('/src/assets/Rectangle 7004.svg')} />
      </div>
      {selectedAvatar && (
        <div id="preview" className='mainimgcont' style={{width:"10rem",height:"10rem",position:"relative",top:"-33rem", left:"31.9rem",}} >
          <img src={selectedAvatar} alt="Selected Avatar" className='mainimg' style={{width:"10rem",height:"10rem",position:"relative",top:"-0rem", left:"0rem", }} />
        </div>
      )}
        
     
    </div>
  );
}
