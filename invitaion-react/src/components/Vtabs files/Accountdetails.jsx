import React, { useState } from 'react';

export function AccountDetails() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    username: '',
    phoneNumber: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
        
         <div className="imguploadsec">
            
           
        <input type="file" accept='image/*' className="imageupld" />
        <img src="/src/assets/Frame 133542.svg" alt="" className="savefile" />
        <p className="textupload">Upload your Photo</p>
      
       
      </div> 
      <div className="avtarset">
        <img src="/src/assets/Rectangle 7003.svg" alt="" className="pfpavtar" />
        <img src="/src/assets/Rectangle 7004.svg" alt="" className="pfpavtar2" />
      </div>
        
     
    </div>
  );
}
