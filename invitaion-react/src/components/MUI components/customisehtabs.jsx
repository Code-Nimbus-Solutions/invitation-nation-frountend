import React, { useState } from 'react';
import { Customizsec } from '../Customisesec';
import '../css files/tabcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { LinearProgress } from '@mui/material';


function HorizontalTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabData = [
    { label: 'Hero Section', content: <Customizsec /> },
    { label: 'About couple', content: 'Content for Tab 2' },
    { label: 'Event Schedule', content: 'Content for Tab 3' },
  ];

  return (
    <div className='minidash'>
      <div style={{ display: 'flex' }} className='tabshorisec'>
       <Link to='/wishes' style={{textDecoration:"none"}}> <p className="back"><img src="/src/assets/arrow_back_ios.svg" alt="" className="leftarw" />Back to Dash</p></Link>
        {tabData.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            style={{
              padding: '10px',
              cursor: 'pointer',
              backgroundColor: activeTab === index ? '#36004E' : '',
              color: activeTab === index ? 'white' : 'black',
            }}
          className='tabparts'>
            {tab.label}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        {tabData.map((tab, index) => (
          <div key={index} style={{ display: activeTab === index ? 'block' : 'none' }}className='tabcontent'>
            {tab.content}
          </div>
        ))}
      </div>
     {/* <button  className="savensub">Save and Submit</button> */}
      <div className="progress"> 
     <div className="progress1">
        <p className="percent">60% Completed</p>
        <LinearProgress
        variant="determinate"
        value={50}  // Set the progress value as needed (0 to 100)
        sx={{
          backgroundColor: '#e8e6e1',  // Background color of the progress bar
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'purple',  // Change this to your desired color
          },width:"13rem",height:"0.7rem",borderRadius:"1rem"
        }}
      /></div> <div className="snsmain">
      <button className="sns">Save & submit</button>
      </div> 
      </div>
    </div>
  );
}

export default HorizontalTabs;
